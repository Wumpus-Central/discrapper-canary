n.d(t, {
    J9: () => l.J,
    Jt: () => x,
    K0: () => P,
    Pd: () => g,
    f$: () => s.f$,
    lg: () => D,
    sX: () => s.Hx,
    tn: () => R,
    yZ: () => c.H
}),
    n(47120),
    n(757143),
    n(301563),
    n(411104),
    n(653041),
    n(26686);
var r = n(203651),
    i = n.n(r),
    o = n(261470);
n(17089);
var a = n(259443),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = new a.Yd('HTTPUtils'),
    m = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class g extends Error {
    constructor({ method: e, url: t, ok: n, status: r, body: i, text: o, headers: a }, ...s) {
        super(''.concat(e.toUpperCase(), ' ').concat(t.replace(/\d+/g, 'xxx'), ' [').concat(r, ']'), ...s), d(this, 'method', void 0), d(this, 'url', void 0), d(this, 'ok', void 0), d(this, 'status', void 0), d(this, 'body', void 0), d(this, 'text', void 0), d(this, 'headers', void 0), (this.name = 'HTTPResponseError'), (this.method = e), (this.url = t), (this.ok = n), (this.status = r), (this.body = i), (this.text = o), (this.headers = a);
    }
}
function E(e, t, n, r, a) {
    var c, u, d, _, h;
    let b = i()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(b), null != t.query)) {
        let e = t.query;
        if ('object' == typeof e) {
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
        null != t.reason && b.set('X-Audit-Log-Reason', encodeURIComponent(t.reason)),
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
        let e = M(t.context);
        null != e && b.set('X-Context-Properties', e);
    }
    null != t.retried && 0 !== t.retried && b.set('X-Failed-Requests', ''.concat(t.retried)),
        null != t.timeout && 0 !== t.timeout && b.timeout(t.timeout),
        t.binary && b.responseType('blob'),
        null != t.onRequestProgress &&
            b.on('progress', (e) => {
                var n;
                null == (n = t.onRequestProgress) || n.call(t, e);
            });
    let y = () => {
        (t.backoff = null != t.backoff ? t.backoff : new o.Z()), (t.retried = (null != t.retried ? t.retried : 0) + 1), t.backoff.fail(() => L(t.url).then(() => E(e, t, n, r, a)));
    };
    null == w || null == (d = w.prepareRequest) || d.call(w, b),
        b.ok((e) => null != e.status),
        b.then(
            (i) => {
                var o, c, u;
                if (null != t.retries && t.retries-- > 0 && m.has(i.status)) return y();
                let d = {
                    ok: i.ok,
                    headers: i.headers,
                    body: i.body,
                    text: i.text,
                    status: i.status
                };
                v(t, d);
                let _ = !1,
                    h = (i, o) => {
                        let s = p(f({}, t), {
                            headers: f({}, t.headers, i),
                            interceptResponse: o
                        });
                        (_ = !0), E(e, s, n, r, a);
                    },
                    b = (e) => {
                        _ ||
                            (r(e),
                            null == a ||
                                a({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e
                                }));
                    };
                if ((null == t || null == (o = t.interceptResponse) ? void 0 : o.call(t, i, h, b)) !== !0 && (null == w || null == (c = w.interceptResponse) ? void 0 : c.call(w, i, h, b)) !== !0) {
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
                                      headers: d.headers
                                  })
                              )
                            : r(d);
                    }
                    null != a && a(f({ hasErr: !1 }, d));
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && 'ABORTED' !== e.code
                    ? y()
                    : (v(t),
                      r(e),
                      null != a &&
                          a({
                              ok: !1,
                              hasErr: !0,
                              err: e
                          }));
            }
        ),
        (null == (_ = t.signal) ? void 0 : _.aborted) ? b.abort() : null == (h = t.signal) || h.addEventListener('abort', () => b.abort(), { once: !0 });
}
let b = new Map();
function y(e) {
    let t = b.get(e);
    if (null == t) return void h.verbose('rateLimitExpirationHandler: rate limit for', e, 'expired, but record was already removed');
    let n = t.queue.shift();
    if (null == n) {
        h.verbose('rateLimitExpirationHandler: removing key for', e), b.delete(e);
        return;
    }
    h.verbose('rateLimitExpirationHandler: moving to next record for ', e), n();
}
function v(e, t) {
    let n = b.get(e.url);
    if (null != t && 429 === t.status) {
        var r, i, o;
        let a = (null == (r = t.body) ? void 0 : r.retry_after) || 5,
            s = Date.now() + 1000 * a;
        if (null != n)
            if (!(n.retryAfterTimestamp < s)) return void h.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
            else h.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(n.timeoutId);
        h.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(a, ' seconds'));
        let l = setTimeout(() => y(e.url), 1000 * a);
        b.set(e.url, {
            queue: null != (o = null == n ? void 0 : n.queue) ? o : [],
            retryAfterTimestamp: s,
            latestErrorMessage: String(null == (i = t.body) ? void 0 : i.message),
            timeoutId: l
        });
    } else null != n && n.retryAfterTimestamp < Date.now() && (h.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), y(e.url));
}
let O = (e, t) => {
    let n = Math.round((t.retryAfterTimestamp - Date.now()) / 1000);
    return e({
        status: 429,
        body: {
            message: t.latestErrorMessage,
            retry_after: n
        }
    });
};
function I(e, t, n) {
    return new Promise((r, i) => {
        'string' == typeof t &&
            (t = {
                url: t,
                rejectWithError: !1
            });
        let o = b.get(t.url);
        if (null != o && t.failImmediatelyWhenRateLimited) return O(i, o);
        null != o ? (h.verbose('makeRequest: queueing request for ', t.url), o.queue.push(E.bind(null, e, t, r, i, n))) : E(e, t, r, i, n);
    });
}
let S = I.bind(null, 'get'),
    T = I.bind(null, 'post'),
    N = I.bind(null, 'put'),
    A = I.bind(null, 'patch'),
    C = I.bind(null, 'del'),
    R = {
        get: S,
        post: T,
        put: N,
        patch: A,
        del: C
    };
if (n.g.isServerRendering) {
    let e = (e, t) =>
        Promise.resolve({
            ok: !0,
            status: 200,
            headers: {},
            body: null,
            text: ''
        });
    (S = e), (T = e), (N = e), (A = e), (C = e);
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let w = null;
function D(e) {
    w = e;
}
let L = () => Promise.resolve();
function x(e) {
    L = e;
}
function M(e) {
    try {
        return u.from(JSON.stringify(e)).toString('base64');
    } catch (e) {
        return null;
    }
}
