"use strict";
n.d(t, {
    Bo: () => R,
    Cu: () => L,
    $F: () => o.LG,
    TP: () => O,
    oh: () => h,
    ni: () => d,
    IA: () => v,
    bG: () => 50035,
    Wl: () => _,
}),
    n(321073);
var i = n(333405),
    r = n.n(i),
    s = n(158390);
n(423034);
var a = n(118356),
    o = n(319400);
let l = "_errors";
function d(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        if (null == i || (n === l && (t._misc = e[n].map((e) => e.message)), Array.isArray(i))) continue;
        let r = i[l];
        null != r ? (t[n] = r.map((e) => e.message)) : (t[n] = [Object.keys(i)[0]]);
    }
    return t;
}
class _ {
    message;
    code;
    retryAfter;
    fields;
    error;
    status;
    constructor(e, t, n = "An unexpected error occurred.") {
        const {
            message: i,
            code: r,
            retryAfter: s,
            fields: a,
            status: o,
        } = (function (e, t) {
            if ("string" == typeof e) return { message: e, code: t };
            if (null != e.body)
                if (
                    null != e.body.message &&
                    !Array.isArray(e.body.message) &&
                    (null == e.body.code || !Array.isArray(e.body.code))
                )
                    return {
                        message: e.body.message,
                        code: e.body.code,
                        retryAfter: e.body.retry_after,
                        status: e.status,
                    };
                else {
                    let t = e.body,
                        n = null != t ? Object.values(t)[0] : null;
                    return { message: null != n ? n[0] : void 0, fields: t, status: e.status };
                }
            return { status: e.status };
        })(e, t);
        (this.message = i || n),
            (this.retryAfter = s),
            (this.code = r || -1),
            (this.fields = a || {}),
            (this.status = o),
            (this.error = Error(i));
    }
    getFieldMessage(e) {
        return null != this.fields[e] ? this.fields[e][0] : null;
    }
}
var u = n(264572).Buffer;
let c = new a.Vy("HTTPUtils"),
    E = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class h extends Error {
    method;
    url;
    ok;
    status;
    body;
    text;
    headers;
    constructor({ method: e, url: t, ok: n, status: i, body: r, text: s, headers: a }, ...o) {
        const l = t.replace(/\d+/g, "xxx");
        super(`${e.toUpperCase()} ${l} [${i}]`, ...o),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = n),
            (this.status = i),
            (this.body = r),
            (this.text = s),
            (this.headers = a);
    }
}
function m(e, t, n, i, a) {
    let o = r()[e](t.url);
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
                return u.from(JSON.stringify(e)).toString("base64");
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
    let l = () => {
        (t.backoff = null != t.backoff ? t.backoff : new s.A()),
            (t.retried = (null != t.retried ? t.retried : 0) + 1),
            t.backoff.fail(() => D(t.url).then(() => m(e, t, n, i, a)));
    };
    y?.prepareRequest?.(o),
        o.ok((e) => null != e.status),
        o.then(
            (r) => {
                if (null != t.retries && t.retries-- > 0 && E.has(r.status)) return l();
                let s = { ok: r.ok, headers: r.headers, body: r.body, text: r.text, status: r.status };
                p(t, s);
                let o = !1,
                    _ = (r, s) => {
                        let l = { ...t, headers: { ...t.headers, ...r }, interceptResponse: s };
                        (o = !0), m(e, l, n, i, a);
                    },
                    u = (e) => {
                        o || (i(e), a?.({ ok: !1, hasErr: !0, err: e }));
                    };
                if (t?.interceptResponse?.(r, _, u) !== !0 && y?.interceptResponse?.(r, _, u) !== !0) {
                    if (r.ok) n(s);
                    else {
                        if (t.oldFormErrors && s?.body?.code === 50035) {
                            let { errors: e } = s.body;
                            null != e && (s.body = d(e));
                        }
                        t.rejectWithError
                            ? i(
                                  new h({
                                      method: e,
                                      url: t.url,
                                      ok: s.ok,
                                      status: s.status,
                                      body: s.body,
                                      text: s.text,
                                      headers: s.headers,
                                  }),
                              )
                            : i(s);
                    }
                    null != a && a({ hasErr: !1, ...s });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? l()
                    : (p(t), i(e), null != a && a({ ok: !1, hasErr: !0, err: e }));
            },
        ),
        t.signal?.aborted ? o.abort() : t.signal?.addEventListener("abort", () => o.abort(), { once: !0 });
}
let f = new Map();
function g(e) {
    let t = f.get(e);
    if (null == t)
        return void c.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        c.verbose("rateLimitExpirationHandler: removing key for", e), f.delete(e);
        return;
    }
    c.verbose("rateLimitExpirationHandler: moving to next record for ", e), n();
}
function p(e, t) {
    let n = f.get(e.url);
    if (null != t && 429 === t.status) {
        let i = t.body?.retry_after || 5,
            r = Date.now() + 1e3 * i;
        if (null != n)
            if (!(n.retryAfterTimestamp < r))
                return void c.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
            else c.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
        c.verbose(`cleanupRequestEntry: rate limit for ${e.url} retry after ${i} seconds`);
        let s = setTimeout(() => g(e.url), 1e3 * i);
        f.set(e.url, {
            queue: n?.queue ?? [],
            retryAfterTimestamp: r,
            latestErrorMessage: String(t.body?.message),
            timeoutId: s,
        });
    } else
        null != n &&
            n.retryAfterTimestamp < Date.now() &&
            (c.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), g(e.url));
}
function A(e, t, n) {
    return new Promise((i, r) => {
        "string" == typeof t && (t = { url: t, rejectWithError: !1 });
        let s = f.get(t.url);
        if (null != s && t.failImmediatelyWhenRateLimited) {
            let e;
            return (
                (e = Math.round((s.retryAfterTimestamp - Date.now()) / 1e3)),
                void (r({ status: 429, body: { message: s.latestErrorMessage, retry_after: e } }),
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
            ? (c.verbose("makeRequest: queueing request for ", t.url), s.queue.push(m.bind(null, e, t, i, r, n)))
            : m(e, t, i, r, n);
    });
}
let I = A.bind(null, "get"),
    T = A.bind(null, "post"),
    S = A.bind(null, "put"),
    N = A.bind(null, "patch"),
    C = A.bind(null, "del"),
    R = { get: I, post: T, put: S, patch: N, del: C };
if (n.g.isServerRendering) {
    let e = (e, t) => Promise.resolve({ ok: !0, status: 200, headers: {}, body: null, text: "" });
    (I = e), (T = e), (S = e), (N = e), (C = e);
}
function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? `/v${window.GLOBAL_ENV.API_VERSION}` : "");
}
let y = null;
function v(e) {
    y = e;
}
let D = () => Promise.resolve();
function L(e) {
    D = e;
}
