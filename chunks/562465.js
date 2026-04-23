"use strict";
n.d(t, {
    $F: () => o.LG,
    Bo: () => N,
    Cu: () => b,
    IA: () => O,
    TP: () => v,
    Wl: () => u.L,
    bG: () => 50035,
    ni: () => l.n,
    oh: () => f,
}),
    n(321073);
var r = n(333405),
    i = n.n(r),
    s = n(158390);
n(423034);
var a = n(118356),
    o = n(319400),
    l = n(467710);
n(1880);
var u = n(335713),
    c = n(264572).Buffer;
let d = new a.Vy("HTTPUtils"),
    _ = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class f extends Error {
    method;
    url;
    ok;
    status;
    body;
    text;
    headers;
    constructor({ method: e, url: t, ok: n, status: r, body: i, text: s, headers: a }, ...o) {
        const l = t.replace(/\d+/g, "xxx");
        super(`${e.toUpperCase()} ${l} [${r}]`, ...o),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = n),
            (this.status = r),
            (this.body = i),
            (this.text = s),
            (this.headers = a);
    }
}
function p(e, t, n, r, a) {
    let o = i()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(o), null != t.query)) {
        let e = t.query;
        if ("object" == typeof e) {
            let t = { ...e };
            Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t);
        }
        o.query(e);
    }
    if (
        (t.body && o.send(t.body),
        null != t.headers && o.set(t.headers),
        !0 === t.withCredentials && o.withCredentials(),
        null != t.reason && o.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)),
        t.attachments?.forEach((e) => {
            o.attach(e.name, e.file, e.filename);
        }),
        t.fields?.forEach((e) => {
            o.field(e.name, e.value);
        }),
        null != t.context)
    ) {
        let e = (function (e) {
            try {
                return c.from(JSON.stringify(e)).toString("base64");
            } catch (e) {
                return null;
            }
        })(t.context);
        null != e && o.set("X-Context-Properties", e);
    }
    null != t.retried && 0 !== t.retried && o.set("X-Failed-Requests", `${t.retried}`),
        null != t.timeout && 0 !== t.timeout && o.timeout(t.timeout),
        t.binary && o.responseType("blob"),
        null != t.onRequestProgress &&
            o.on("progress", (e) => {
                t.onRequestProgress?.(e);
            });
    let u = () => {
        (t.backoff = null != t.backoff ? t.backoff : new s.A()),
            (t.retried = (null != t.retried ? t.retried : 0) + 1),
            t.backoff.fail(() => R(t.url).then(() => p(e, t, n, r, a)));
    };
    C?.prepareRequest?.(o),
        o.ok((e) => null != e.status),
        o.then(
            (i) => {
                if (null != t.retries && t.retries-- > 0 && _.has(i.status)) return u();
                let s = { ok: i.ok, headers: i.headers, body: i.body, text: i.text, status: i.status };
                m(t, s);
                let o = !1,
                    c = (i, s) => {
                        let l = { ...t, headers: { ...t.headers, ...i }, interceptResponse: s };
                        (o = !0), p(e, l, n, r, a);
                    },
                    d = (e) => {
                        o || (r(e), a?.({ ok: !1, hasErr: !0, err: e }));
                    };
                if (t?.interceptResponse?.(i, c, d) !== !0 && C?.interceptResponse?.(i, c, d) !== !0) {
                    if (i.ok) n(s);
                    else {
                        if (t.oldFormErrors && s?.body?.code === 50035) {
                            let { errors: e } = s.body;
                            null != e && (s.body = (0, l.n)(e));
                        }
                        t.rejectWithError
                            ? r(
                                  new f({
                                      method: e,
                                      url: t.url,
                                      ok: s.ok,
                                      status: s.status,
                                      body: s.body,
                                      text: s.text,
                                      headers: s.headers,
                                  }),
                              )
                            : r(s);
                    }
                    null != a && a({ hasErr: !1, ...s });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? u()
                    : (m(t), r(e), null != a && a({ ok: !1, hasErr: !0, err: e }));
            },
        ),
        t.signal?.aborted ? o.abort() : t.signal?.addEventListener("abort", () => o.abort(), { once: !0 });
}
let h = new Map();
function E(e) {
    let t = h.get(e);
    if (null == t)
        return void d.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        d.verbose("rateLimitExpirationHandler: removing key for", e), h.delete(e);
        return;
    }
    d.verbose("rateLimitExpirationHandler: moving to next record for ", e), n();
}
function m(e, t) {
    let n = h.get(e.url);
    if (null != t && 429 === t.status) {
        let r = t.body?.retry_after || 5,
            i = Date.now() + 1e3 * r;
        if (null != n)
            if (!(n.retryAfterTimestamp < i))
                return void d.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
            else d.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
        d.verbose(`cleanupRequestEntry: rate limit for ${e.url} retry after ${r} seconds`);
        let s = setTimeout(() => E(e.url), 1e3 * r);
        h.set(e.url, {
            queue: n?.queue ?? [],
            retryAfterTimestamp: i,
            latestErrorMessage: String(t.body?.message),
            timeoutId: s,
        });
    } else
        null != n &&
            n.retryAfterTimestamp < Date.now() &&
            (d.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), E(e.url));
}
function g(e, t, n) {
    return new Promise((r, i) => {
        "string" == typeof t && (t = { url: t, rejectWithError: !1 });
        let s = h.get(t.url);
        if (null != s && t.failImmediatelyWhenRateLimited) {
            let e;
            return (
                (e = Math.round((s.retryAfterTimestamp - Date.now()) / 1e3)),
                void (i({ status: 429, body: { message: s.latestErrorMessage, retry_after: e } }),
                null != n &&
                    n({
                        ok: !0,
                        hasErr: !1,
                        status: 429,
                        body: { message: s.latestErrorMessage, retry_after: e },
                        text: "",
                        headers: {},
                    }))
            );
        }
        null != s
            ? (d.verbose("makeRequest: queueing request for ", t.url), s.queue.push(p.bind(null, e, t, r, i, n)))
            : p(e, t, r, i, n);
    });
}
let A = g.bind(null, "get"),
    I = g.bind(null, "post"),
    T = g.bind(null, "put"),
    S = g.bind(null, "patch"),
    y = g.bind(null, "del"),
    N = { get: A, post: I, put: T, patch: S, del: y };
if (n.g.isServerRendering) {
    let e = (e, t) => Promise.resolve({ ok: !0, status: 200, headers: {}, body: null, text: "" });
    (A = e), (I = e), (T = e), (S = e), (y = e);
}
function v() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? `/v${window.GLOBAL_ENV.API_VERSION}` : "");
}
let C = null;
function O(e) {
    C = e;
}
let R = () => Promise.resolve();
function b(e) {
    R = e;
}
