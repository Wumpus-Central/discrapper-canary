r.d(n, {
    J9: function () {
        return h.J;
    },
    Jt: function () {
        return U;
    },
    K0: function () {
        return w;
    },
    Pd: function () {
        return y;
    },
    f$: function () {
        return p.f$;
    },
    lg: function () {
        return M;
    },
    sX: function () {
        return p.Hx;
    },
    tn: function () {
        return x;
    },
    yZ: function () {
        return _.H;
    }
});
var i = r(47120);
var a = r(757143);
var o = r(411104);
var s = r(653041);
var l = r(203651),
    u = r.n(l),
    c = r(261470),
    d = r(17089),
    f = r(259443),
    p = r(343817),
    h = r(357280);
r(380094);
var _ = r(817109),
    m = r(413135).Buffer;
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new f.Yd('HTTPUtils'),
    v = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class y extends Error {
    constructor({ method: e, url: n, ok: r, status: i, body: a, text: o, headers: s }, ...l) {
        let u = n.replace(/\d+/g, 'xxx');
        super(''.concat(e.toUpperCase(), ' ').concat(u, ' [').concat(i, ']'), ...l), g(this, 'method', void 0), g(this, 'url', void 0), g(this, 'ok', void 0), g(this, 'status', void 0), g(this, 'body', void 0), g(this, 'text', void 0), g(this, 'headers', void 0), (this.name = 'HTTPResponseError'), (this.method = e), (this.url = n), (this.ok = r), (this.status = i), (this.body = a), (this.text = o), (this.headers = s);
    }
}
function b(e, n, r, i, a) {
    var o, s, l, d, f;
    let _ = u()[e](n.url);
    if ((null != n.onRequestCreated && n.onRequestCreated(_), null != n.query)) {
        let e = n.query;
        if ('object' == typeof e) {
            let n = { ...e };
            Object.keys(n).map((e) => {
                null == n[e] && delete n[e];
            }),
                (e = n);
        }
        _.query(e);
    }
    if (
        (n.body && _.send(n.body),
        null != n.headers && _.set(n.headers),
        null != n.reason && _.set('X-Audit-Log-Reason', encodeURIComponent(n.reason)),
        null === (o = n.attachments) ||
            void 0 === o ||
            o.forEach((e) => {
                _.attach(e.name, e.file, e.filename);
            }),
        null === (s = n.fields) ||
            void 0 === s ||
            s.forEach((e) => {
                _.field(e.name, e.value);
            }),
        null != n.context)
    ) {
        let e = B(n.context);
        null != e && _.set('X-Context-Properties', e);
    }
    null != n.retried && 0 !== n.retried && _.set('X-Failed-Requests', ''.concat(n.retried)),
        null != n.timeout && 0 !== n.timeout && _.timeout(n.timeout),
        n.binary && _.responseType('blob'),
        null != n.onRequestProgress &&
            _.on('progress', (e) => {
                var r;
                null === (r = n.onRequestProgress) || void 0 === r || r.call(n, e);
            });
    let m = () => {
        (n.backoff = null != n.backoff ? n.backoff : new c.Z()), (n.retried = (null != n.retried ? n.retried : 0) + 1), n.backoff.fail(() => k(n.url).then(() => b(e, n, r, i, a)));
    };
    null == P || null === (l = P.prepareRequest) || void 0 === l || l.call(P, _),
        _.ok((e) => null != e.status),
        _.then(
            (o) => {
                var s, l, u;
                if (null != n.retries && n.retries-- > 0 && v.has(o.status)) return m();
                let c = {
                    ok: o.ok,
                    headers: o.headers,
                    body: o.body,
                    text: o.text,
                    status: o.status
                };
                S(n, c);
                let d = !1,
                    f = (o, s) => {
                        let l = {
                            ...n,
                            headers: {
                                ...n.headers,
                                ...o
                            },
                            interceptResponse: s
                        };
                        (d = !0), b(e, l, r, i, a);
                    },
                    _ = (e) => {
                        !d &&
                            (i(e),
                            null == a ||
                                a({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e
                                }));
                    };
                if ((null == n ? void 0 : null === (s = n.interceptResponse) || void 0 === s ? void 0 : s.call(n, o, f, _)) !== !0 && (null == P ? void 0 : null === (l = P.interceptResponse) || void 0 === l ? void 0 : l.call(P, o, f, _)) !== !0) {
                    if (o.ok) r(c);
                    else {
                        if (n.oldFormErrors && (null == c ? void 0 : null === (u = c.body) || void 0 === u ? void 0 : u.code) === p.f$) {
                            let { errors: e } = c.body;
                            null != e && (c.body = (0, h.J)(e));
                        }
                        n.rejectWithError
                            ? i(
                                  new y({
                                      method: e,
                                      url: n.url,
                                      ok: c.ok,
                                      status: c.status,
                                      body: c.body,
                                      text: c.text,
                                      headers: c.headers
                                  })
                              )
                            : i(c);
                    }
                    null != a &&
                        a({
                            hasErr: !1,
                            ...c
                        });
                }
            },
            (e) => {
                null != n.retries && n.retries-- > 0 && 'ABORTED' !== e.code
                    ? m()
                    : (S(n),
                      i(e),
                      null != a &&
                          a({
                              ok: !1,
                              hasErr: !0,
                              err: e
                          }));
            }
        ),
        (null === (d = n.signal) || void 0 === d ? void 0 : d.aborted) ? _.abort() : null === (f = n.signal) || void 0 === f || f.addEventListener('abort', () => _.abort(), { once: !0 });
}
let I = new Map();
function T(e) {
    let n = I.get(e);
    if (null == n) {
        E.verbose('rateLimitExpirationHandler: rate limit for', e, 'expired, but record was already removed');
        return;
    }
    let r = n.queue.shift();
    if (null == r) {
        E.verbose('rateLimitExpirationHandler: removing key for', e), I.delete(e);
        return;
    }
    E.verbose('rateLimitExpirationHandler: moving to next record for ', e), r();
}
function S(e, n) {
    let r = I.get(e.url);
    if (null != n && 429 === n.status) {
        var i, a, o;
        let s = (null === (i = n.body) || void 0 === i ? void 0 : i.retry_after) || 5,
            l = Date.now() + 1000 * s;
        if (null != r) {
            if (r.retryAfterTimestamp < l) E.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(r.timeoutId);
            else {
                E.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
                return;
            }
        }
        E.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(s, ' seconds'));
        let u = setTimeout(() => T(e.url), 1000 * s);
        I.set(e.url, {
            queue: null !== (o = null == r ? void 0 : r.queue) && void 0 !== o ? o : [],
            retryAfterTimestamp: l,
            latestErrorMessage: String(null === (a = n.body) || void 0 === a ? void 0 : a.message),
            timeoutId: u
        });
    } else null != r && r.retryAfterTimestamp < Date.now() && (E.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), T(e.url));
}
let A = (e, n) => {
    let r = Math.round((n.retryAfterTimestamp - Date.now()) / 1000);
    return e({
        status: 429,
        body: {
            message: n.latestErrorMessage,
            retry_after: r
        }
    });
};
function C(e, n, r) {
    return new Promise((i, a) => {
        'string' == typeof n &&
            (n = {
                url: n,
                rejectWithError: !1
            });
        let o = I.get(n.url);
        if (null != o && n.failImmediatelyWhenRateLimited) return A(a, o);
        null != o ? (E.verbose('makeRequest: queueing request for ', n.url), o.queue.push(b.bind(null, e, n, i, a, r))) : b(e, n, i, a, r);
    });
}
let N = C.bind(null, 'get'),
    R = C.bind(null, 'post'),
    O = C.bind(null, 'put'),
    D = C.bind(null, 'patch'),
    L = C.bind(null, 'del'),
    x = {
        get: N,
        post: R,
        put: O,
        patch: D,
        del: L
    };
if (r.g.isServerRendering) {
    let e = (e, n) =>
        Promise.resolve({
            ok: !0,
            status: 200,
            headers: {},
            body: null,
            text: ''
        });
    (N = e), (R = e), (O = e), (D = e), (L = e);
}
function w() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let P = null;
function M(e) {
    P = e;
}
let k = () => Promise.resolve();
function U(e) {
    k = e;
}
function B(e) {
    try {
        return m.from(JSON.stringify(e)).toString('base64');
    } catch (e) {
        return null;
    }
}
