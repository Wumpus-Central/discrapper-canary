n.d(t, {
    Bo: () => L,
    tr: () => U,
    Cu: () => M,
    $F: () => l.LG,
    TP: () => y,
    oh: () => h,
    ni: () => d,
    IA: () => v,
    fT: () => w,
    bG: () => 50035,
    Wl: () => c,
}),
    n(321073);
var i = n(333405),
    r = n.n(i),
    a = n(158390);
n(423034);
var s = n(941426),
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
        const {
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
        (this.message = i || n),
            (this.retryAfter = a),
            (this.code = r || -1),
            (this.fields = s || {}),
            (this.status = l),
            (this.error = Error(i));
    }
    getFieldMessage(e) {
        return null != this.fields[e] ? this.fields[e][0] : null;
    }
}
var u = n(264572).Buffer;
let _ = new s.Vy("HTTPUtils"),
    E = new Set([502, 504, 507, 598, 599, 522, 523, 524]),
    A = new Set([429, 503]);
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
        const o = t.replace(/\d+/g, "xxx");
        super(`${e.toUpperCase()} ${o} [${n}]`, ...l),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = !1),
            (this.status = n),
            (this.body = i),
            (this.text = r),
            (this.headers = a),
            (this.retryAfter = s);
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
function f(e, t, n, i, s, l) {
    if (t.signal?.aborted) {
        let e = Object.assign(Error("Request aborted", { cause: l }), { code: "ABORTED" });
        m(t), i(e), null != s && s({ ok: !1, hasErr: !0, err: e });
        return;
    }
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
    let c = () => {
            (t.backoff = null != t.backoff ? t.backoff : new a.A()),
                (t.retried = (null != t.retried ? t.retried : 0) + 1),
                t.backoff.fail(() => b(t.url).then(() => f(e, t, n, i, s, l)));
        },
        _ = D?.prepareRequest?.(o);
    o.ok((e) => null != e.status),
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
                m(t, a);
                let o = !1,
                    u = (r, a) => {
                        let d = { ...t, headers: { ...t.headers, ...r }, interceptResponse: a };
                        (o = !0), f(e, d, n, i, s, l);
                    },
                    A = (e) => {
                        o || (i(e), s?.({ ok: !1, hasErr: !0, err: e }));
                    };
                if (t?.interceptResponse?.(r, u, A) !== !0 && D?.interceptResponse?.(r, u, A, _) !== !0) {
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
                            null != l && (n.cause = l), i(n);
                        } else i(a);
                    }
                    null != s && s({ hasErr: !1, ...a });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? c()
                    : (m(t),
                      null != l && null == e.cause && (e.cause = l),
                      i(e),
                      null != s && s({ ok: !1, hasErr: !0, err: e }));
            },
        ),
        t.signal?.aborted ? o.abort() : t.signal?.addEventListener("abort", () => o.abort(), { once: !0 });
}
let p = new Map();
function T(e) {
    let t = p.get(e);
    if (null == t)
        return void _.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        _.verbose("rateLimitExpirationHandler: removing key for", e), p.delete(e);
        return;
    }
    _.verbose("rateLimitExpirationHandler: moving to next record for ", e), n();
}
function m(e, t) {
    var n;
    let i = p.get(e.url);
    if (null != t && ((n = t.status), A.has(n))) {
        let n = i?.backoff ?? new a.A(1e3, 6e4),
            r = 1e3 * (I(t.headers, t.body) ?? 5),
            s = n.fail(void 0, r),
            l = Date.now() + s;
        if (null != i && i.retryAfterTimestamp >= l)
            return void _.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
        null != i && (_.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(i.timeoutId)),
            _.verbose(`cleanupRequestEntry: rate limit for ${e.url} retry after ${s}ms`);
        let o = setTimeout(() => T(e.url), s);
        p.set(e.url, {
            queue: i?.queue ?? [],
            retryAfterTimestamp: l,
            latestErrorMessage: String(t.body?.message),
            status: t.status,
            timeoutId: o,
            backoff: n,
        });
    } else
        null != i &&
            i.retryAfterTimestamp < Date.now() &&
            (_.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), T(e.url));
}
function g(e, t, n) {
    let i = Error(`HTTP ${e.toUpperCase()} initiated here`);
    return new Promise((r, a) => {
        "string" == typeof t && (t = { url: t, rejectWithError: !1 });
        let s = p.get(t.url);
        if (null != s && t.failImmediatelyWhenRateLimited) {
            let e, t;
            return (
                (e = Math.round((s.retryAfterTimestamp - Date.now()) / 1e3)),
                void (a((t = { status: s.status, body: { message: s.latestErrorMessage, retry_after: e } })),
                null != n && n({ ok: !0, hasErr: !1, status: t.status, body: t.body, text: "", headers: {} }))
            );
        }
        null != s
            ? (_.verbose("makeRequest: queueing request for ", t.url), s.queue.push(f.bind(null, e, t, r, a, n, i)))
            : f(e, t, r, a, n, i);
    });
}
let S = g.bind(null, "get"),
    N = g.bind(null, "post"),
    C = g.bind(null, "put"),
    O = g.bind(null, "patch"),
    R = g.bind(null, "del"),
    L = { get: S, post: N, put: C, patch: O, del: R };
if (n.g.isServerRendering) {
    let e = (e, t) => Promise.resolve({ ok: !0, status: 200, headers: {}, body: null, text: "" });
    (S = e), (N = e), (C = e), (O = e), (R = e);
}
function y() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? `/v${window.GLOBAL_ENV.API_VERSION}` : "");
}
let D = null;
function v(e) {
    D = e;
}
let b = () => Promise.resolve();
function M(e) {
    b = e;
}
let P = () => !0;
function U(e) {
    P = e;
}
function w() {
    return P();
}
