let r, i, o;
n.d(t, {
    X: () => b,
    l: () => S
}),
    n(177593),
    n(733860),
    n(47120),
    n(653041),
    n(17089);
var a,
    s = n(756647),
    l = n(442837),
    c = n(544891),
    u = n(761609);
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
let h = 1500,
    m = 10000,
    g = 1500,
    E = null !== (a = window.requestIdleCallback) && void 0 !== a ? a : (e) => setImmediate(() => e()),
    v = new u.R(),
    b = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    y = [],
    O = () => Promise.resolve({ sessionId: void 0 }),
    S = (e) => {
        var t;
        let { dispatcher: n, actionHandler: a, getFingerprint: u, getSessionId: p = O, TRACKING_URL: S, drainTimeoutOverride: I, waitFor: T } = e;
        function N(e) {
            if (null != i) return i;
            let t = e.fingerprint || u();
            return null != t ? (0, s.s)(t) : null;
        }
        function A() {
            return 0 !== y.length && (null != i ? null != r : null != u());
        }
        function C() {
            null == o && A() && (o = E(R, { timeout: g }));
        }
        function R() {
            if (((o = null), !A())) return;
            let e = y.slice();
            (y = []),
                P(e).then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null === (t = e.resolve) || void 0 === t || t.call(e);
                        });
                    },
                    (t) => {
                        y.unshift(...e);
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                );
        }
        function P(e) {
            let t = Date.now(),
                n = e.map((e) => _(f({}, e), { properties: _(f({}, e.properties), { client_send_timestamp: t }) }));
            return c.tn.post({
                url: S,
                body: {
                    token: r,
                    events: n
                },
                retries: 3,
                rejectWithError: !1
            });
        }
        (g = null != I ? I : h),
            (b.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (r = t), null != n.id && (i = n.id), C(), !1;
            }),
            (b.handleConnectionClosed = function () {
                return R(), (r = null), (i = null), !1;
            }),
            (b.handleFingerprint = function () {
                return R(), !1;
            }),
            (b.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: o } = e;
                return (
                    p().then((e) => {
                        let { sessionId: a } = e,
                            s = {
                                type: t,
                                fingerprint: i,
                                properties: f(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: a
                                    },
                                    n
                                ),
                                resolve: o
                            },
                            l = N(s);
                        null != l && (s.properties.client_uuid = v.generate(l)), y.push(s), y.length > m && (y = y.slice(-m)), r ? R() : C();
                    }),
                    !1
                );
            });
        class w extends (t = l.ZP.Store) {
            initialize() {
                null != T && this.waitFor(...T);
            }
            constructor(...e) {
                super(...e), d(this, 'submitEventsImmediately', P);
            }
        }
        return d(w, 'displayName', 'AnalyticsTrackingStore'), new w(n, a);
    };
