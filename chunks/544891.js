n.d(t, {
    J9: () => l.J,
    Jt: () => L,
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
let h = new a.Yd('HTTPUtils'),
    m = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class g extends Error {
    constructor({ method: e, url: t, ok: n, status: r, body: i, text: o, headers: a }, ...s) {
        super(''.concat(e.toUpperCase(), ' ').concat(t.replace(/\d+/g, 'xxx'), ' [').concat(r, ']'), ...s), d(this, 'method', void 0), d(this, 'url', void 0), d(this, 'ok', void 0), d(this, 'status', void 0), d(this, 'body', void 0), d(this, 'text', void 0), d(this, 'headers', void 0), (this.name = 'HTTPResponseError'), (this.method = e), (this.url = t), (this.ok = n), (this.status = r), (this.body = i), (this.text = o), (this.headers = a);
    }
}
function E(e, t, n, r, a) {
    var c, u, d, p, h;
    let v = i()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(v), null != t.query)) {
        let e = t.query;
        if ('object' == typeof e) {
            let t = f({}, e);
            Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t);
        }
        v.query(e);
    }
    if (
        (t.body && v.send(t.body),
        null != t.headers && v.set(t.headers),
        null != t.reason && v.set('X-Audit-Log-Reason', encodeURIComponent(t.reason)),
        null === (c = t.attachments) ||
            void 0 === c ||
            c.forEach((e) => {
                v.attach(e.name, e.file, e.filename);
            }),
        null === (u = t.fields) ||
            void 0 === u ||
            u.forEach((e) => {
                v.field(e.name, e.value);
            }),
        null != t.context)
    ) {
        let e = M(t.context);
        null != e && v.set('X-Context-Properties', e);
    }
    null != t.retried && 0 !== t.retried && v.set('X-Failed-Requests', ''.concat(t.retried)),
        null != t.timeout && 0 !== t.timeout && v.timeout(t.timeout),
        t.binary && v.responseType('blob'),
        null != t.onRequestProgress &&
            v.on('progress', (e) => {
                var n;
                null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e);
            });
    let b = () => {
        (t.backoff = null != t.backoff ? t.backoff : new o.Z()), (t.retried = (null != t.retried ? t.retried : 0) + 1), t.backoff.fail(() => x(t.url).then(() => E(e, t, n, r, a)));
    };
    null == w || null === (d = w.prepareRequest) || void 0 === d || d.call(w, v),
        v.ok((e) => null != e.status),
        v.then(
            (i) => {
                var o, c, u;
                if (null != t.retries && t.retries-- > 0 && m.has(i.status)) return b();
                let d = {
                    ok: i.ok,
                    headers: i.headers,
                    body: i.body,
                    text: i.text,
                    status: i.status
                };
                y(t, d);
                let p = !1,
                    h = (i, o) => {
                        let s = _(f({}, t), {
                            headers: f({}, t.headers, i),
                            interceptResponse: o
                        });
                        (p = !0), E(e, s, n, r, a);
                    },
                    v = (e) => {
                        p ||
                            (r(e),
                            null == a ||
                                a({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e
                                }));
                    };
                if ((null == t ? void 0 : null === (o = t.interceptResponse) || void 0 === o ? void 0 : o.call(t, i, h, v)) !== !0 && (null == w ? void 0 : null === (c = w.interceptResponse) || void 0 === c ? void 0 : c.call(w, i, h, v)) !== !0) {
                    if (i.ok) n(d);
                    else {
                        if (t.oldFormErrors && (null == d ? void 0 : null === (u = d.body) || void 0 === u ? void 0 : u.code) === s.f$) {
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
                    ? b()
                    : (y(t),
                      r(e),
                      null != a &&
                          a({
                              ok: !1,
                              hasErr: !0,
                              err: e
                          }));
            }
        ),
        (null === (p = t.signal) || void 0 === p ? void 0 : p.aborted) ? v.abort() : null === (h = t.signal) || void 0 === h || h.addEventListener('abort', () => v.abort(), { once: !0 });
}
let v = new Map();
function b(e) {
    let t = v.get(e);
    if (null == t) {
        h.verbose('rateLimitExpirationHandler: rate limit for', e, 'expired, but record was already removed');
        return;
    }
    let n = t.queue.shift();
    if (null == n) {
        h.verbose('rateLimitExpirationHandler: removing key for', e), v.delete(e);
        return;
    }
    h.verbose('rateLimitExpirationHandler: moving to next record for ', e), n();
}
function y(e, t) {
    let n = v.get(e.url);
    if (null != t && 429 === t.status) {
        var r, i, o;
        let a = (null === (r = t.body) || void 0 === r ? void 0 : r.retry_after) || 5,
            s = Date.now() + 1000 * a;
        if (null != n) {
            if (n.retryAfterTimestamp < s) h.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(n.timeoutId);
            else {
                h.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
                return;
            }
        }
        h.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(a, ' seconds'));
        let l = setTimeout(() => b(e.url), 1000 * a);
        v.set(e.url, {
            queue: null !== (o = null == n ? void 0 : n.queue) && void 0 !== o ? o : [],
            retryAfterTimestamp: s,
            latestErrorMessage: String(null === (i = t.body) || void 0 === i ? void 0 : i.message),
            timeoutId: l
        });
    } else null != n && n.retryAfterTimestamp < Date.now() && (h.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), b(e.url));
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
function S(e, t, n) {
    return new Promise((r, i) => {
        'string' == typeof t &&
            (t = {
                url: t,
                rejectWithError: !1
            });
        let o = v.get(t.url);
        if (null != o && t.failImmediatelyWhenRateLimited) return O(i, o);
        null != o ? (h.verbose('makeRequest: queueing request for ', t.url), o.queue.push(E.bind(null, e, t, r, i, n))) : E(e, t, r, i, n);
    });
}
let I = S.bind(null, 'get'),
    T = S.bind(null, 'post'),
    N = S.bind(null, 'put'),
    A = S.bind(null, 'patch'),
    C = S.bind(null, 'del'),
    R = {
        get: I,
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
    (I = e), (T = e), (N = e), (A = e), (C = e);
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let w = null;
function D(e) {
    w = e;
}
let x = () => Promise.resolve();
function L(e) {
    x = e;
}
function M(e) {
    try {
        return u.from(JSON.stringify(e)).toString('base64');
    } catch (e) {
        return null;
    }
}
