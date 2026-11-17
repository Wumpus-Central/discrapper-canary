(n.d(t, {
    Bo: () => y,
    oh: () => h,
    bG: () => 50035,
    Wl: () => c,
    $F: () => l.LG,
    ni: () => d,
    TP: () => D,
    RU: () => f,
    fT: () => G,
    Cu: () => M,
    tr: () => w,
    IA: () => v,
}),
    n(321073));
var i = n(333405),
    r = n.n(i),
    a = n(158390);
n(423034);
var s = n(611599),
    l = n(319400);
let o = "_errors";
function d(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        if (null == i || (n === o && (t._misc = e[n].map((e) => e.message)), Array.isArray(i))) continue;
        let r = i[o];
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
        let {
            message: i,
            code: r,
            retryAfter: a,
            fields: s,
            status: l,
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
        ((this.message = i || n),
            (this.retryAfter = a),
            (this.code = r || -1),
            (this.fields = s || {}),
            (this.status = l),
            (this.error = Error(i)));
    }
    getFieldMessage(e) {
        return null != this.fields[e] ? this.fields[e][0] : null;
    }
}
var u = n(264572).hp;
let _ = new s.Vy("HTTPUtils"),
    E = new Set([502, 504, 507, 598, 599, 522, 523, 524]),
    A = new Set([429, 503]);
function f(e) {
    return A.has(e);
}
class h extends Error {
    method;
    url;
    ok;
    status;
    body;
    text;
    headers;
    retryAfter;
    constructor({ method: e, url: t, status: n, body: i, text: r, headers: a, retryAfter: s }, ...l) {
        let o = t.replace(/\d+/g, "xxx");
        (super(`${e.toUpperCase()} ${o} [${n}]`, ...l),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = !1),
            (this.status = n),
            (this.body = i),
            (this.text = r),
            (this.headers = a),
            (this.retryAfter = s));
    }
}
function I(e, t) {
    let n = e?.["retry-after"] ?? e?.["Retry-After"];
    if ("string" == typeof n) {
        let e = parseInt(n, 10);
        if (Number.isFinite(e) && e > 0) return e;
    }
    if (null != t && "object" == typeof t) {
        let e = t.retry_after;
        if ("number" == typeof e && Number.isFinite(e) && e > 0) return e;
    }
}
function p(e, t, n, i, s, l) {
    if (t.signal?.aborted) {
        let e = Object.assign(Error("Request aborted", { cause: l }), { code: "ABORTED" });
        (T(t), i(e), null != s && s({ ok: !1, hasErr: !0, err: e }));
        return;
    }
    let o = r()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(o), null != t.query)) {
        let e = t.query;
        if ("object" == typeof e) {
            let t = { ...e };
            (Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t));
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
    (null != t.retried && 0 !== t.retried && o.set("X-Failed-Requests", `${t.retried}`),
        null != t.timeout && 0 !== t.timeout && o.timeout(t.timeout),
        t.binary && o.responseType("blob"),
        null != t.onRequestProgress &&
            o.on("progress", (e) => {
                t.onRequestProgress?.(e);
            }));
    let c = () => {
            ((t.backoff = null != t.backoff ? t.backoff : new a.A()),
                (t.retried = (null != t.retried ? t.retried : 0) + 1),
                t.backoff.fail(() => P(t.url).then(() => p(e, t, n, i, s, l))));
        },
        _ = b?.prepareRequest?.(o);
    (o.ok((e) => null != e.status),
        o.then(
            (r) => {
                if (null != t.retries && t.retries-- > 0 && E.has(r.status)) return c();
                let a = {
                    ok: r.ok,
                    headers: r.headers,
                    body: r.body,
                    text: r.text,
                    status: r.status,
                    retryAfter: I(r.headers, r.body),
                };
                T(t, a);
                let o = !1,
                    u = (r, a) => {
                        let d = { ...t, headers: { ...t.headers, ...r }, interceptResponse: a };
                        ((o = !0), p(e, d, n, i, s, l));
                    },
                    A = (e) => {
                        o || (i(e), s?.({ ok: !1, hasErr: !0, err: e }));
                    };
                if (t?.interceptResponse?.(r, u, A) !== !0 && b?.interceptResponse?.(r, u, A, _) !== !0) {
                    if (r.ok) n(a);
                    else {
                        if (t.oldFormErrors && a?.body?.code === 50035) {
                            let { errors: e } = a.body;
                            null != e && (a.body = d(e));
                        }
                        if (t.rejectWithError) {
                            let n = new h({
                                method: e,
                                url: t.url,
                                status: a.status,
                                body: a.body,
                                text: a.text,
                                headers: a.headers,
                                retryAfter: a.retryAfter,
                            });
                            (null != l && (n.cause = l), i(n));
                        } else i(a);
                    }
                    null != s && s({ hasErr: !1, ...a });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? c()
                    : (T(t),
                      null != l && null == e.cause && (e.cause = l),
                      i(e),
                      null != s && s({ ok: !1, hasErr: !0, err: e }));
            },
        ),
        t.signal?.aborted ? o.abort() : t.signal?.addEventListener("abort", () => o.abort(), { once: !0 }));
}
let m = new Map();
function g(e) {
    let t = m.get(e);
    if (null == t)
        return void _.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        (_.verbose("rateLimitExpirationHandler: removing key for", e), m.delete(e));
        return;
    }
    (_.verbose("rateLimitExpirationHandler: moving to next record for ", e), n());
}
function T(e, t) {
    let n = m.get(e.url);
    if (null != t && f(t.status)) {
        let i = n?.backoff ?? new a.A(1e3, 6e4),
            r = 1e3 * (I(t.headers, t.body) ?? 5),
            s = i.fail(void 0, r),
            l = Date.now() + s;
        if (null != n && n.retryAfterTimestamp >= l)
            return void _.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
        (null != n && (_.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId)),
            _.verbose(`cleanupRequestEntry: rate limit for ${e.url} retry after ${s}ms`));
        let o = setTimeout(() => g(e.url), s);
        m.set(e.url, {
            queue: n?.queue ?? [],
            retryAfterTimestamp: l,
            latestErrorMessage: String(t.body?.message),
            status: t.status,
            timeoutId: o,
            backoff: i,
        });
    } else
        null != n &&
            n.retryAfterTimestamp < Date.now() &&
            (_.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), g(e.url));
}
function S(e, t, n) {
    let i = Error(`HTTP ${e.toUpperCase()} initiated here`);
    return new Promise((r, a) => {
        "string" == typeof t && (t = { url: t, rejectWithError: !1 });
        let s = m.get(t.url);
        if (null != s && t.failImmediatelyWhenRateLimited) {
            let e, t;
            return (
                (e = Math.round((s.retryAfterTimestamp - Date.now()) / 1e3)),
                void (a((t = { status: s.status, body: { message: s.latestErrorMessage, retry_after: e } })),
                null != n && n({ ok: !0, hasErr: !1, status: t.status, body: t.body, text: "", headers: {} }))
            );
        }
        null != s
            ? (_.verbose("makeRequest: queueing request for ", t.url), s.queue.push(p.bind(null, e, t, r, a, n, i)))
            : p(e, t, r, a, n, i);
    });
}
let N = S.bind(null, "get"),
    C = S.bind(null, "post"),
    O = S.bind(null, "put"),
    R = S.bind(null, "patch"),
    L = S.bind(null, "del"),
    y = { get: N, post: C, put: O, patch: R, del: L };
if (n.g.isServerRendering) {
    let e = (e, t) => Promise.resolve({ ok: !0, status: 200, headers: {}, body: null, text: "" });
    ((N = e), (C = e), (O = e), (R = e), (L = e));
}
function D() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? `/v${window.GLOBAL_ENV.API_VERSION}` : "");
}
let b = null;
function v(e) {
    b = e;
}
let P = () => Promise.resolve();
function M(e) {
    P = e;
}
let U = () => !0;
function w(e) {
    U = e;
}
function G() {
    return U();
}
