n.d(t, {
    $F: () => o.LG,
    Bo: () => R,
    Cu: () => L,
    IA: () => D,
    TP: () => w,
    Wl: () => c.L,
    bG: () => o.bG,
    ni: () => l.n,
    oh: () => g,
}),
    n(896048),
    n(747238),
    n(812715),
    n(65821),
    n(321073),
    n(457529);
var r = n(333405),
    i = n.n(r),
    a = n(158390);
n(423034);
var s = n(118356),
    o = n(319400),
    l = n(467710);
n(1880);
var c = n(335713),
    u = n(264572).Buffer;
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
let h = new s.Vy("HTTPUtils"),
    m = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class g extends Error {
    constructor({ method: e, url: t, ok: n, status: r, body: i, text: a, headers: s }, ...o) {
        const l = t.replace(/\d+/g, "xxx");
        super("".concat(e.toUpperCase(), " ").concat(l, " [").concat(r, "]"), ...o),
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
            (this.headers = s);
    }
}
function E(e, t, n, r, s) {
    var c, u, d, p, h;
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
        !0 === t.withCredentials && b.withCredentials(),
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
        (t.backoff = null != t.backoff ? t.backoff : new a.A()),
            (t.retried = (null != t.retried ? t.retried : 0) + 1),
            t.backoff.fail(() => x(t.url).then(() => E(e, t, n, r, s)));
    };
    null == P || null == (d = P.prepareRequest) || d.call(P, b),
        b.ok((e) => null != e.status),
        b.then(
            (i) => {
                var a, c, u;
                if (null != t.retries && t.retries-- > 0 && m.has(i.status)) return y();
                let d = {
                    ok: i.ok,
                    headers: i.headers,
                    body: i.body,
                    text: i.text,
                    status: i.status,
                };
                O(t, d);
                let p = !1,
                    h = (i, a) => {
                        let o = _(f({}, t), {
                            headers: f({}, t.headers, i),
                            interceptResponse: a,
                        });
                        (p = !0), E(e, o, n, r, s);
                    },
                    b = (e) => {
                        p ||
                            (r(e),
                            null == s ||
                                s({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e,
                                }));
                    };
                if (
                    (null == t || null == (a = t.interceptResponse) ? void 0 : a.call(t, i, h, b)) !== !0 &&
                    (null == P || null == (c = P.interceptResponse) ? void 0 : c.call(P, i, h, b)) !== !0
                ) {
                    if (i.ok) n(d);
                    else {
                        if (t.oldFormErrors && (null == d || null == (u = d.body) ? void 0 : u.code) === o.bG) {
                            let { errors: e } = d.body;
                            null != e && (d.body = (0, l.n)(e));
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
                    null != s && s(f({ hasErr: !1 }, d));
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code
                    ? y()
                    : (O(t),
                      r(e),
                      null != s &&
                          s({
                              ok: !1,
                              hasErr: !0,
                              err: e,
                          }));
            },
        ),
        (null == (p = t.signal) ? void 0 : p.aborted)
            ? b.abort()
            : null == (h = t.signal) || h.addEventListener("abort", () => b.abort(), { once: !0 });
}
let b = new Map();
function y(e) {
    let t = b.get(e);
    if (null == t)
        return void h.verbose(
            "rateLimitExpirationHandler: rate limit for",
            e,
            "expired, but record was already removed",
        );
    let n = t.queue.shift();
    if (null == n) {
        h.verbose("rateLimitExpirationHandler: removing key for", e), b.delete(e);
        return;
    }
    h.verbose("rateLimitExpirationHandler: moving to next record for ", e), n();
}
function O(e, t) {
    let n = b.get(e.url);
    if (null != t && 429 === t.status) {
        var r, i, a;
        let s = (null == (i = t.body) ? void 0 : i.retry_after) || 5,
            o = Date.now() + 1000 * s;
        if (null != n)
            if (!(n.retryAfterTimestamp < o))
                return void h.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
            else h.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
        h.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(s, " seconds"));
        let l = setTimeout(() => y(e.url), 1000 * s);
        b.set(e.url, {
            queue: null != (r = null == n ? void 0 : n.queue) ? r : [],
            retryAfterTimestamp: o,
            latestErrorMessage: String(null == (a = t.body) ? void 0 : a.message),
            timeoutId: l,
        });
    } else
        null != n &&
            n.retryAfterTimestamp < Date.now() &&
            (h.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), y(e.url));
}
let A = (e, t, n) => {
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
function v(e, t, n) {
    return new Promise((r, i) => {
        "string" == typeof t &&
            (t = {
                url: t,
                rejectWithError: !1,
            });
        let a = b.get(t.url);
        if (null != a && t.failImmediatelyWhenRateLimited) return A(i, a, n);
        null != a
            ? (h.verbose("makeRequest: queueing request for ", t.url), a.queue.push(E.bind(null, e, t, r, i, n)))
            : E(e, t, r, i, n);
    });
}
let S = v.bind(null, "get"),
    I = v.bind(null, "post"),
    T = v.bind(null, "put"),
    C = v.bind(null, "patch"),
    N = v.bind(null, "del"),
    R = {
        get: S,
        post: I,
        put: T,
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
    (S = e), (I = e), (T = e), (C = e), (N = e);
}
function w() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "");
}
let P = null;
function D(e) {
    P = e;
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
