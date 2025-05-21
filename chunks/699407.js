let r, i, o;
n.d(t, {
    X: () => F,
    l: () => Y
}),
    n(358797),
    n(290780),
    n(388685),
    n(539854),
    n(17089);
var a,
    s = n(756647),
    l = n(442837),
    c = n(544891),
    u = n(761609),
    d = n(231338);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
let m = 1500,
    g = 10000,
    E = 3600000,
    b = 60000,
    y = 3600000,
    O = E,
    v = b,
    I = y,
    S = m,
    T = 0,
    A = Number.MAX_SAFE_INTEGER - 1,
    N = 0,
    C = 0,
    P = 0,
    R = 0,
    w = null,
    D = 0,
    L = Number.MAX_SAFE_INTEGER,
    x = 0,
    k = 0,
    M = null;
function j() {
    (N = 0), (C = 0), (P = 0), (D = 0), (L = Number.MAX_SAFE_INTEGER), (x = 0), (k = 0), (w = Date.now()), (R = T);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t >= A ? 0 : e + t;
}
let G = null != (a = window.requestIdleCallback) ? a : (e) => setImmediate(() => e()),
    B = new u.R(),
    F = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    V = [],
    Z = null,
    H = () => Promise.resolve({ sessionId: void 0 }),
    Y = (e) => {
        var t;
        let { dispatcher: n, actionHandler: a, getFingerprint: u, getSessionId: p = H, TRACKING_URL: E, drainTimeoutOverride: b, waitFor: y, scheduleWhenIdle: Y = G } = e;
        function W(e) {
            var t;
            if (null != o) return o;
            let n = null != (t = e.fingerprint) ? t : u();
            return null != n ? (0, s.s)(n) : null;
        }
        function K() {
            return 0 !== V.length && (null != o ? null != i : null != u());
        }
        function z(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == Z && K() && (Z = t ? setTimeout(q, 0) : Y(q, { timeout: S }));
        }
        function q() {
            if (((Z = null), !K())) return Promise.resolve();
            let e = V.slice();
            (V = []), (D = U(D));
            let t = e.length;
            (L = Math.min(L, t)), (x = Math.max(x, t)), (k = U(k, t));
            let n = Q(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null == (t = e.resolve) || t.call(e);
                        }),
                            (C = U(C));
                    },
                    (t) => {
                        V.unshift(...e), (P = U(P));
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                ),
                n
            );
        }
        function Q(e) {
            let t = Date.now(),
                n = e.map((e) => h(_({}, e), { properties: h(_({}, e.properties), { client_send_timestamp: t }) }));
            return c.tn.post({
                url: E,
                body: {
                    token: i,
                    events: n
                },
                retries: 3,
                rejectWithError: !1
            });
        }
        function X() {
            let e = {
                type: d.cN.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    client_heartbeat_session_id: r,
                    rpc_success_count: C,
                    rpc_failure_count: P,
                    first_seen_event_sequence_number: R,
                    last_seen_event_sequence_number: T,
                    telemetry_period_start_timestamp: w,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: N,
                    event_queue_batch_count: D,
                    event_queue_batch_min_size: L === Number.MAX_SAFE_INTEGER ? 0 : L,
                    event_queue_batch_max_size: x,
                    event_queue_batch_avg_size: D > 0 ? k / D : 0
                }
            };
            return j(), Q([e]);
        }
        function J() {
            if (null == M) return !1;
            switch (M.type) {
                case 'timeout':
                    clearTimeout(M.id);
                    break;
                case 'interval':
                    clearInterval(M.id);
                    break;
                default:
                    M.type;
            }
            return (M = null), !0;
        }
        function $() {
            if (null != M) return;
            let e = () => {
                let t = 0.1 * O;
                M = {
                    type: 'timeout',
                    id: setTimeout(
                        () => {
                            X(), e();
                        },
                        Math.max(O + (Math.floor(Math.random() * t * 2) - t), v)
                    )
                };
            };
            M = {
                type: 'timeout',
                id: setTimeout(
                    () => {
                        X(), e();
                    },
                    Math.floor(Math.random() * (I - v) + v)
                )
            };
        }
        function ee() {
            if (!J()) return;
        }
        (S = null != b ? b : m),
            (F.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (i = t), null != n.id && (o = n.id), $(), z({ shouldFlushOnNextTick: !1 }), !1;
            }),
            (F.handleConnectionClosed = function () {
                return q(), ee(), (i = null), (o = null), !1;
            }),
            (F.handleFingerprint = function () {
                return q(), !1;
            }),
            (F.handleTrack = function (e) {
                let { event: t, properties: n, flush: i, fingerprint: o, resolve: a } = e;
                return (
                    p().then((e) => {
                        let { sessionId: s } = e;
                        (s !== r || T >= A) && ((T = 0), (r = s), j());
                        let l = {
                                type: t,
                                fingerprint: o,
                                properties: _(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: s,
                                        event_sequence_number: ++T
                                    },
                                    n
                                ),
                                resolve: a
                            },
                            c = W(l);
                        if ((null != c && (l.properties.client_uuid = B.generate(c)), V.push(l), V.length > g)) {
                            let e = V.length - g;
                            (N = U(N, e)), (V = V.slice(-g));
                        }
                        i ? z({ shouldFlushOnNextTick: !0 }) : z({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            });
        class et extends (t = l.ZP.Store) {
            initialize() {
                null != y && this.waitFor(...y);
            }
            constructor(...e) {
                super(...e), f(this, 'submitEventsImmediately', Q);
            }
        }
        return f(et, 'displayName', 'AnalyticsTrackingStore'), new et(n, a);
    };
