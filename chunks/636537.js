"use strict";
n.d(t, {
    Bo: () => C,
    Cu: () => D,
    $F: () => o.LG,
    TP: () => v,
    oh: () => h,
    ni: () => u,
    IA: () => R,
    bG: () => 50035,
    Wl: () => c,
}),
    n(321073);
var i = n(333405),
    r = n.n(i),
    s = n(158390);
n(423034);
var a = n(941426),
    o = n(319400);
let l = "_errors";
function u(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        if (null == i || (n === l && (t._misc = e[n].map((e) => e.message)), Array.isArray(i))) continue;
        let r = i[l];
        null != r ? (t[n] = r.map((e) => e.message)) : (t[n] = [Object.keys(i)[0]]);
    }
    return t;
}
class c {
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
var d = n(264572).Buffer;
let _ = new a.Vy("HTTPUtils"),
    f = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class h extends Error {
    method;
    url;
    ok;
    status;
    body;
    text;
    headers;
    retryAfter;
    constructor({ method: e, url: t, ok: n, status: i, body: r, text: s, headers: a, retryAfter: o }, ...l) {
        const u = t.replace(/\d+/g, "xxx");
        super(`${e.toUpperCase()} ${u} [${i}]`, ...l),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = n),
            (this.status = i),
            (this.body = r),
            (this.text = s),
            (this.headers = a),
            (this.retryAfter = o);
    }
}
function p(e, t, n, i, a) {
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
                return d.from(JSON.stringify(e)).toString("base64");
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
                t.backoff.fail(() => b(t.url).then(() => p(e, t, n, i, a)));
        },
        c = O?.prepareRequest?.(o);
    o.ok((e) => null != e.status),
        o.then(
            (r) => {
                if (null != t.retries && t.retries-- > 0 && f.has(r.status)) return l();
                let s = {
                    ok: r.ok,
                    headers: r.headers,
                    body: r.body,
                    text: r.text,
                    status: r.status,
                    retryAfter: (function (e, t) {
                        let n = e?.["retry-after"] ?? e?.["Retry-After"];
                        if ("string" == typeof n) {
                            let e = parseInt(n, 10);
                            if (Number.isFinite(e) && e > 0) return e;
                        }
                        if (null != t && "object" == typeof t) {
                            let e = t.retry_after;
                            if ("number" == typeof e && Number.isFinite(e) && e > 0) return e;
                        }
                    })(r.headers, r.body),
                };
                g(t, s);
                let o = !1,
                    d = (r, s) => {
                        let l = { ...t, headers: { ...t.headers, ...r }, interceptResponse: s };
                        (o = !0), p(e, l, n, i, a);
                    },
                    _ = (e) => {
                        o || (i(e), a?.({ ok: !1, hasErr: !0, err: e }));
                    };
                if (t?.interceptResponse?.(r, d, _) !== !0 && O?.interceptResponse?.(r, d, _, c) !== !0) {
                    if (r.ok) n(s);
                    else {
                        if (t.oldFormErrors && s?.body?.code === 50035) {
                            let { errors: e } = s.body;
                            null != e && (s.body = u(e));
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
                                      retryAfter: s.retryAfter,
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
                    : (g(t), i(e), null != a && a({ ok: !1, hasErr: !0, err: e }));
            },
        ),
        t.signal?.aborted ? o.abort() : t.signal?.addEventListener("abort", () => o.abort(), { once: !0 });
}
let E = new Map();
function m(e) {
    let t = E.get(e);
    if (null == t)
        return void _.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        _.verbose("rateLimitExpirationHandler: removing key for", e), E.delete(e);
        return;
    }
    _.verbose("rateLimitExpirationHandler: moving to next record for ", e), n();
}
function g(e, t) {
    let n = E.get(e.url);
    if (null != t && 429 === t.status) {
        let i = t.body?.retry_after || 5,
            r = Date.now() + 1e3 * i;
        if (null != n)
            if (!(n.retryAfterTimestamp < r))
                return void _.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
            else _.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
        _.verbose(`cleanupRequestEntry: rate limit for ${e.url} retry after ${i} seconds`);
        let s = setTimeout(() => m(e.url), 1e3 * i);
        E.set(e.url, {
            queue: n?.queue ?? [],
            retryAfterTimestamp: r,
            latestErrorMessage: String(t.body?.message),
            timeoutId: s,
        });
    } else
        null != n &&
            n.retryAfterTimestamp < Date.now() &&
            (_.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), m(e.url));
}
function A(e, t, n) {
    return new Promise((i, r) => {
        "string" == typeof t && (t = { url: t, rejectWithError: !1 });
        let s = E.get(t.url);
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
            ? (_.verbose("makeRequest: queueing request for ", t.url), s.queue.push(p.bind(null, e, t, i, r, n)))
            : p(e, t, i, r, n);
    });
}
let I = A.bind(null, "get"),
    T = A.bind(null, "post"),
    S = A.bind(null, "put"),
    N = A.bind(null, "patch"),
    y = A.bind(null, "del"),
    C = { get: I, post: T, put: S, patch: N, del: y };
if (n.g.isServerRendering) {
    let e = (e, t) => Promise.resolve({ ok: !0, status: 200, headers: {}, body: null, text: "" });
    (I = e), (T = e), (S = e), (N = e), (y = e);
}
function v() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? `/v${window.GLOBAL_ENV.API_VERSION}` : "");
}
let O = null;
function R(e) {
    O = e;
}
let b = () => Promise.resolve();
function D(e) {
    b = e;
}
