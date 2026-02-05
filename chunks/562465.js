"use strict";
n.d(t, {
    $F: () => o.LG,
    Bo: () => C,
    Cu: () => D,
    IA: () => R,
    TP: () => b,
    Wl: () => u.L,
    bG: () => 50035,
    ni: () => l.n,
    oh: () => f,
}),
    n(321073);
var r = n(333405),
    i = n.n(r),
    a = n(158390);
n(423034);
var s = n(118356),
    o = n(319400),
    l = n(467710);
n(1880);
var u = n(335713),
    c = n(264572).Buffer;
let d = new s.Vy("HTTPUtils"),
    _ = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class f extends Error {
    method;
    url;
    ok;
    status;
    body;
    text;
    headers;
    constructor({ method: e, url: t, ok: n, status: r, body: i, text: a, headers: s }, ...o) {
        const l = t.replace(/\d+/g, "xxx");
        super(`${e.toUpperCase()} ${l} [${r}]`, ...o),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = n),
            (this.status = r),
            (this.body = i),
            (this.text = a),
            (this.headers = s);
    }
}
function p(e, t, n, r, s) {
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
        let e = L(t.context);
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
        (t.backoff = null != t.backoff ? t.backoff : new a.A()),
            (t.retried = (null != t.retried ? t.retried : 0) + 1),
            t.backoff.fail(() => O(t.url).then(() => p(e, t, n, r, s)));
    };
    N?.prepareRequest?.(o),
        o.ok((e) => null != e.status),
        o.then(
            (i) => {
                if (null != t.retries && t.retries-- > 0 && _.has(i.status)) return u();
                let a = { ok: i.ok, headers: i.headers, body: i.body, text: i.text, status: i.status };
                g(t, a);
                let o = !1,
                    c = (i, a) => {
                        let l = { ...t, headers: { ...t.headers, ...i }, interceptResponse: a };
                        (o = !0), p(e, l, n, r, s);
                    },
                    d = (e) => {
                        o || (r(e), s?.({ ok: !1, hasErr: !0, err: e }));
                    };
                if (t?.interceptResponse?.(i, c, d) !== !0 && N?.interceptResponse?.(i, c, d) !== !0) {
                    if (i.ok) n(a);
                    else {
                        if (t.oldFormErrors && a?.body?.code === 50035) {
                            let { errors: e } = a.body;
                            null != e && (a.body = (0, l.n)(e));
                        }
                        t.rejectWithError
                            ? r(
                                  new f({
                                      method: e,
                                      url: t.url,
                                      ok: a.ok,
                                      status: a.status,
                                      body: a.body,
                                      text: a.text,
                                      headers: a.headers,
                                  }),
                              )
                            : r(a);
                    }
                    null != s && s({ hasErr: !1, ...a });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? u()
                    : (g(t), r(e), null != s && s({ ok: !1, hasErr: !0, err: e }));
            },
        ),
        t.signal?.aborted ? o.abort() : t.signal?.addEventListener("abort", () => o.abort(), { once: !0 });
}
let h = new Map();
function m(e) {
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
function g(e, t) {
    let n = h.get(e.url);
    if (null != t && 429 === t.status) {
        let r = t.body?.retry_after || 5,
            i = Date.now() + 1e3 * r;
        if (null != n)
            if (!(n.retryAfterTimestamp < i))
                return void d.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
            else d.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
        d.verbose(`cleanupRequestEntry: rate limit for ${e.url} retry after ${r} seconds`);
        let a = setTimeout(() => m(e.url), 1e3 * r);
        h.set(e.url, {
            queue: n?.queue ?? [],
            retryAfterTimestamp: i,
            latestErrorMessage: String(t.body?.message),
            timeoutId: a,
        });
    } else
        null != n &&
            n.retryAfterTimestamp < Date.now() &&
            (d.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), m(e.url));
}
let E = (e, t, n) => {
    let r = Math.round((t.retryAfterTimestamp - Date.now()) / 1e3);
    e({ status: 429, body: { message: t.latestErrorMessage, retry_after: r } }),
        null != n &&
            n({
                ok: !0,
                hasErr: !1,
                status: 429,
                body: { message: t.latestErrorMessage, retry_after: r },
                text: "",
                headers: {},
            });
};
function A(e, t, n) {
    return new Promise((r, i) => {
        "string" == typeof t && (t = { url: t, rejectWithError: !1 });
        let a = h.get(t.url);
        if (null != a && t.failImmediatelyWhenRateLimited) return E(i, a, n);
        null != a
            ? (d.verbose("makeRequest: queueing request for ", t.url), a.queue.push(p.bind(null, e, t, r, i, n)))
            : p(e, t, r, i, n);
    });
}
let I = A.bind(null, "get"),
    T = A.bind(null, "post"),
    y = A.bind(null, "put"),
    S = A.bind(null, "patch"),
    v = A.bind(null, "del"),
    C = { get: I, post: T, put: y, patch: S, del: v };
if (n.g.isServerRendering) {
    let e = (e, t) => Promise.resolve({ ok: !0, status: 200, headers: {}, body: null, text: "" });
    (I = e), (T = e), (y = e), (S = e), (v = e);
}
function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? `/v${window.GLOBAL_ENV.API_VERSION}` : "");
}
let N = null;
function R(e) {
    N = e;
}
let O = () => Promise.resolve();
function D(e) {
    O = e;
}
function L(e) {
    try {
        return c.from(JSON.stringify(e)).toString("base64");
    } catch (e) {
        return null;
    }
}
