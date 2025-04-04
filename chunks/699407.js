let r, i;
n.d(t, {
    X: () => b,
    l: () => I
}),
    n(177593),
    n(733860),
    n(47120),
    n(653041),
    n(17089);
var o,
    a = n(756647),
    s = n(442837),
    l = n(544891),
    c = n(761609);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 1500,
    h = 10000,
    m = 1500,
    g = null != (o = window.requestIdleCallback) ? o : (e) => setImmediate(() => e()),
    E = new c.R(),
    b = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    y = [],
    v = null,
    O = () => Promise.resolve({ sessionId: void 0 }),
    I = (e) => {
        var t;
        let { dispatcher: n, actionHandler: o, getFingerprint: c, getSessionId: f = O, TRACKING_URL: I, drainTimeoutOverride: S, waitFor: T } = e;
        function N(e) {
            if (null != i) return i;
            let t = e.fingerprint || c();
            return null != t ? (0, a.s)(t) : null;
        }
        function A() {
            return 0 !== y.length && (null != i ? null != r : null != c());
        }
        function C(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == v && A() && (v = t ? setTimeout(R, 0) : g(R, { timeout: m }));
        }
        function R() {
            if (((v = null), !A())) return;
            let e = y.slice();
            (y = []),
                P(e).then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null == (t = e.resolve) || t.call(e);
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
                n = e.map((e) => _(d({}, e), { properties: _(d({}, e.properties), { client_send_timestamp: t }) }));
            return l.tn.post({
                url: I,
                body: {
                    token: r,
                    events: n
                },
                retries: 3,
                rejectWithError: !1
            });
        }
        (m = null != S ? S : p),
            (b.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (r = t), null != n.id && (i = n.id), C({ shouldFlushOnNextTick: !1 }), !1;
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
                    f().then((e) => {
                        let { sessionId: a } = e,
                            s = {
                                type: t,
                                fingerprint: i,
                                properties: d(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: a
                                    },
                                    n
                                ),
                                resolve: o
                            },
                            l = N(s);
                        null != l && (s.properties.client_uuid = E.generate(l)), y.push(s), y.length > h && (y = y.slice(-h)), r ? C({ shouldFlushOnNextTick: !0 }) : C({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            });
        class w extends (t = s.ZP.Store) {
            initialize() {
                null != T && this.waitFor(...T);
            }
            constructor(...e) {
                super(...e), u(this, 'submitEventsImmediately', P);
            }
        }
        return u(w, 'displayName', 'AnalyticsTrackingStore'), new w(n, o);
    };
