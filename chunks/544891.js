n.d(t, {
    J9: () => l.J,
    Jt: () => L,
    K0: () => R,
    Pd: () => g,
    f$: () => s.f$,
    lg: () => w,
    sX: () => s.Hx,
    tn: () => P,
    yZ: () => c.H,
}),
    n(388685),
    n(704826),
    n(35282),
    n(415506),
    n(539854),
    n(49124);
var r = n(203651),
    i = n.n(r),
    a = n(261470);
n(17089);
var o = n(579092),
    s = n(343817),
    l = n(357280);
n(380094);
var c = n(817109),
    u = n(413135).Buffer;
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new o.Yd("HTTPUtils"),
    h = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class g extends Error {
    constructor({ method: e, url: t, ok: n, status: r, body: i, text: a, headers: o }, ...s) {
        super("".concat(e.toUpperCase(), " ").concat(t.replace(/\d+/g, "xxx"), " [").concat(r, "]"), ...s),
            d(this, "method", void 0),
            d(this, "url", void 0),
            d(this, "ok", void 0),
            d(this, "status", void 0),
            d(this, "body", void 0),
            d(this, "text", void 0),
            d(this, "headers", void 0),
            (this.name = "HTTPResponseError"),
            (this.method = e),
            (this.url = t),
            (this.ok = n),
            (this.status = r),
            (this.body = i),
            (this.text = a),
            (this.headers = o);
    }
}
function E(e, t, n, r, o) {
    var c, u, d, p, m;
    let b = i()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(b), null != t.query)) {
        let e = t.query;
        if ("object" == typeof e) {
            let t = f({}, e);
            Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t);
        }
        b.query(e);
    }
    if (
        (t.body && b.send(t.body),
        null != t.headers && b.set(t.headers),
        null != t.reason && b.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)),
        null == (c = t.attachments) ||
            c.forEach((e) => {
                b.attach(e.name, e.file, e.filename);
            }),
        null == (u = t.fields) ||
            u.forEach((e) => {
                b.field(e.name, e.value);
            }),
        null != t.context)
    ) {
        let e = j(t.context);
        null != e && b.set("X-Context-Properties", e);
    }
    null != t.retried && 0 !== t.retried && b.set("X-Failed-Requests", "".concat(t.retried)),
        null != t.timeout && 0 !== t.timeout && b.timeout(t.timeout),
        t.binary && b.responseType("blob"),
        null != t.onRequestProgress &&
            b.on("progress", (e) => {
                var n;
                null == (n = t.onRequestProgress) || n.call(t, e);
            });
    let y = () => {
        (t.backoff = null != t.backoff ? t.backoff : new a.Z()),
            (t.retried = (null != t.retried ? t.retried : 0) + 1),
            t.backoff.fail(() => x(t.url).then(() => E(e, t, n, r, o)));
    };
    null == D || null == (d = D.prepareRequest) || d.call(D, b),
        b.ok((e) => null != e.status),
        b.then(
            (i) => {
                var a, c, u;
                if (null != t.retries && t.retries-- > 0 && h.has(i.status)) return y();
                let d = {
                    ok: i.ok,
                    headers: i.headers,
                    body: i.body,
                    text: i.text,
                    status: i.status,
                };
                O(t, d);
                let p = !1,
                    m = (i, a) => {
                        let s = _(f({}, t), {
                            headers: f({}, t.headers, i),
                            interceptResponse: a,
                        });
                        (p = !0), E(e, s, n, r, o);
                    },
                    b = (e) => {
                        p ||
                            (r(e),
                            null == o ||
                                o({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e,
                                }));
                    };
                if (
                    (null == t || null == (a = t.interceptResponse) ? void 0 : a.call(t, i, m, b)) !== !0 &&
                    (null == D || null == (c = D.interceptResponse) ? void 0 : c.call(D, i, m, b)) !== !0
                ) {
                    if (i.ok) n(d);
                    else {
                        if (t.oldFormErrors && (null == d || null == (u = d.body) ? void 0 : u.code) === s.f$) {
                            let { errors: e } = d.body;
                            null != e && (d.body = (0, l.J)(e));
                        }
                        t.rejectWithError
                            ? r(
                                  new g({
                                      method: e,
                                      url: t.url,
                                      ok: d.ok,
                                      status: d.status,
                                      body: d.body,
                                      text: d.text,
                                      headers: d.headers,
                                  }),
                              )
                            : r(d);
                    }
                    null != o && o(f({ hasErr: !1 }, d));
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? y()
                    : (O(t),
                      r(e),
                      null != o &&
                          o({
                              ok: !1,
                              hasErr: !0,
                              err: e,
                          }));
            },
        ),
        (null == (p = t.signal) ? void 0 : p.aborted)
            ? b.abort()
            : null == (m = t.signal) || m.addEventListener("abort", () => b.abort(), { once: !0 });
}
let b = new Map();
function y(e) {
    let t = b.get(e);
    if (null == t)
        return void m.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        m.verbose("rateLimitExpirationHandler: removing key for", e), b.delete(e);
        return;
    }
    m.verbose("rateLimitExpirationHandler: moving to next record for ", e), n();
}
function O(e, t) {
    let n = b.get(e.url);
    if (null != t && 429 === t.status) {
        var r, i, a;
        let o = (null == (r = t.body) ? void 0 : r.retry_after) || 5,
            s = Date.now() + 1000 * o;
        if (null != n)
            if (!(n.retryAfterTimestamp < s))
                return void m.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
            else m.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
        m.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(o, " seconds"));
        let l = setTimeout(() => y(e.url), 1000 * o);
        b.set(e.url, {
            queue: null != (a = null == n ? void 0 : n.queue) ? a : [],
            retryAfterTimestamp: s,
            latestErrorMessage: String(null == (i = t.body) ? void 0 : i.message),
            timeoutId: l,
        });
    } else
        null != n &&
            n.retryAfterTimestamp < Date.now() &&
            (m.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), y(e.url));
}
let v = (e, t, n) => {
    let r = Math.round((t.retryAfterTimestamp - Date.now()) / 1000);
    e({
        status: 429,
        body: {
            message: t.latestErrorMessage,
            retry_after: r,
        },
    }),
        null != n &&
            n({
                ok: !0,
                hasErr: !1,
                status: 429,
                body: {
                    message: t.latestErrorMessage,
                    retry_after: r,
                },
                text: "",
                headers: {},
            });
};
function S(e, t, n) {
    return new Promise((r, i) => {
        "string" == typeof t &&
            (t = {
                url: t,
                rejectWithError: !1,
            });
        let a = b.get(t.url);
        if (null != a && t.failImmediatelyWhenRateLimited) return v(i, a, n);
        null != a
            ? (m.verbose("makeRequest: queueing request for ", t.url), a.queue.push(E.bind(null, e, t, r, i, n)))
            : E(e, t, r, i, n);
    });
}
let I = S.bind(null, "get"),
    T = S.bind(null, "post"),
    A = S.bind(null, "put"),
    C = S.bind(null, "patch"),
    N = S.bind(null, "del"),
    P = {
        get: I,
        post: T,
        put: A,
        patch: C,
        del: N,
    };
if (n.g.isServerRendering) {
    let e = (e, t) =>
        Promise.resolve({
            ok: !0,
            status: 200,
            headers: {},
            body: null,
            text: "",
        });
    (I = e), (T = e), (A = e), (C = e), (N = e);
}
function R() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "");
}
let D = null;
function w(e) {
    D = e;
}
let x = () => Promise.resolve();
function L(e) {
    x = e;
}
function j(e) {
    try {
        return u.from(JSON.stringify(e)).toString("base64");
    } catch (e) {
        return null;
    }
}
