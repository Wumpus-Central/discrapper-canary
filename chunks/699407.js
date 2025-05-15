let r, i, a;
n.d(t, {
    X: () => v,
    l: () => A
}),
    n(358797),
    n(290780),
    n(388685),
    n(539854),
    n(17089);
var o,
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
let h = 1500,
    m = 10000,
    g = 1500,
    E = 0,
    b = Number.MAX_SAFE_INTEGER - 1,
    y = null != (o = window.requestIdleCallback) ? o : (e) => setImmediate(() => e()),
    O = new u.R(),
    v = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    I = [],
    S = null,
    T = () => Promise.resolve({ sessionId: void 0 }),
    A = (e) => {
        var t;
        let { dispatcher: n, actionHandler: o, getFingerprint: u, getSessionId: _ = T, TRACKING_URL: A, drainTimeoutOverride: N, waitFor: C, scheduleWhenIdle: P = y } = e;
        function R(e) {
            var t;
            if (null != a) return a;
            let n = null != (t = e.fingerprint) ? t : u();
            return null != n ? (0, s.s)(n) : null;
        }
        function w() {
            return 0 !== I.length && (null != a ? null != i : null != u());
        }
        function D(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == S && w() && (S = t ? setTimeout(L, 0) : P(L, { timeout: g }));
        }
        function L() {
            if (((S = null), !w())) return;
            let e = I.slice();
            (I = []),
                x(e).then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null == (t = e.resolve) || t.call(e);
                        });
                    },
                    (t) => {
                        I.unshift(...e);
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                );
        }
        function x(e) {
            let t = Date.now(),
                n = e.map((e) => p(f({}, e), { properties: p(f({}, e.properties), { client_send_timestamp: t }) }));
            return c.tn.post({
                url: A,
                body: {
                    token: i,
                    events: n
                },
                retries: 3,
                rejectWithError: !1
            });
        }
        (g = null != N ? N : h),
            (v.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (i = t), null != n.id && (a = n.id), D({ shouldFlushOnNextTick: !1 }), !1;
            }),
            (v.handleConnectionClosed = function () {
                return L(), (i = null), (a = null), !1;
            }),
            (v.handleFingerprint = function () {
                return L(), !1;
            }),
            (v.handleTrack = function (e) {
                let { event: t, properties: n, flush: i, fingerprint: a, resolve: o } = e;
                return (
                    _().then((e) => {
                        let { sessionId: s } = e;
                        (s !== r || E >= b) && ((E = 0), (r = s)), (E += 1);
                        let l = {
                                type: t,
                                fingerprint: a,
                                properties: f(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: s,
                                        event_sequence_number: E
                                    },
                                    n
                                ),
                                resolve: o
                            },
                            c = R(l);
                        null != c && (l.properties.client_uuid = O.generate(c)), I.push(l), I.length > m && (I = I.slice(-m)), i ? D({ shouldFlushOnNextTick: !0 }) : D({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            });
        class k extends (t = l.ZP.Store) {
            initialize() {
                null != C && this.waitFor(...C);
            }
            constructor(...e) {
                super(...e), d(this, 'submitEventsImmediately', x);
            }
        }
        return d(k, 'displayName', 'AnalyticsTrackingStore'), new k(n, o);
    };
