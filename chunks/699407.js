let r, i, a;
n.d(t, {
    X: () => W,
    l: () => X
}),
    n(358797),
    n(290780),
    n(388685),
    n(539854);
var o,
    s = n(772848);
n(17089);
var l = n(756647),
    c = n(442837),
    u = n(544891),
    d = n(761609),
    f = n(231338);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 'x-science-test',
    E = 1500,
    b = 10000,
    y = 3600000,
    O = 60000,
    v = 3600000,
    I = y,
    T = O,
    S = v,
    A = E,
    N = 0,
    C = Number.MAX_SAFE_INTEGER - 1,
    R = 0,
    P = 0,
    w = 0,
    D = 0,
    L = null,
    x = 0,
    k = Number.MAX_SAFE_INTEGER,
    M = 0,
    j = 0,
    U = null,
    G = !1,
    B = null,
    V = null;
function F() {
    (R = 0), (P = 0), (w = 0), (x = 0), (k = Number.MAX_SAFE_INTEGER), (M = 0), (j = 0), (L = Date.now()), (D = N);
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t >= C ? 0 : e + t;
}
let H = null != (o = window.requestIdleCallback) ? o : (e) => setImmediate(() => e()),
    Y = new d.R(),
    W = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    K = [],
    z = null,
    q = () => Promise.resolve({ sessionId: void 0 }),
    X = (e) => {
        var t;
        let { dispatcher: n, actionHandler: o, getFingerprint: d, getSessionId: h = q, TRACKING_URL: y, drainTimeoutOverride: O, waitFor: v, scheduleWhenIdle: X = H, getLaunchSignature: Q = () => null } = e;
        function J(e) {
            var t;
            if (null != a) return a;
            let n = null != (t = e.fingerprint) ? t : d();
            return null != n ? (0, l.s)(n) : null;
        }
        function $() {
            return 0 !== K.length && (null != a ? null != i : null != d());
        }
        function ee(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == z && $() && (z = t ? setTimeout(et, 0) : X(et, { timeout: A }));
        }
        function et() {
            if (((z = null), !$())) return Promise.resolve();
            let e = K.slice();
            (K = []), (x = Z(x));
            let t = e.length;
            (k = Math.min(k, t)), (M = Math.max(M, t)), (j = Z(j, t));
            let n = en(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null == (t = e.resolve) || t.call(e);
                        }),
                            (P = Z(P));
                    },
                    (t) => {
                        K.unshift(...e), (w = Z(w));
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                ),
                n
            );
        }
        function en(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
                n = Date.now(),
                r = e.map((e) => m(p({}, e), { properties: m(p({}, e.properties), { client_send_timestamp: n }) })),
                a = {};
            return (
                G || ((V = (0, s.Z)()), (a[g] = V), (G = !0)),
                u.tn
                    .post({
                        url: t,
                        headers: a,
                        body: {
                            token: i,
                            events: r
                        },
                        retries: 3,
                        rejectWithError: !1
                    })
                    .then((e) => {
                        if (a[g]) {
                            var t, n;
                            B = null != (n = null == e || null == (t = e.headers) ? void 0 : t[g]) ? n : null;
                        }
                        return e;
                    })
            );
        }
        function er() {
            let e = {
                type: f.cN.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    client_heartbeat_session_id: r,
                    rpc_success_count: P,
                    rpc_failure_count: w,
                    first_seen_event_sequence_number: D,
                    last_seen_event_sequence_number: N,
                    telemetry_period_start_timestamp: L,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: R,
                    event_queue_batch_count: x,
                    event_queue_batch_min_size: k === Number.MAX_SAFE_INTEGER ? 0 : k,
                    event_queue_batch_max_size: M,
                    event_queue_batch_avg_size: x > 0 ? j / x : 0,
                    science_request_id: V,
                    science_response: B,
                    launch_signature: Q()
                }
            };
            return F(), en([e], f.tx.CLIENT_TELEMETRY);
        }
        function ei() {
            if (null == U) return !1;
            switch (U.type) {
                case 'timeout':
                    clearTimeout(U.id);
                    break;
                case 'interval':
                    clearInterval(U.id);
                    break;
                default:
                    U.type;
            }
            return (U = null), !0;
        }
        function ea() {
            if (null != U) return;
            let e = () => {
                let t = 0.1 * I;
                U = {
                    type: 'timeout',
                    id: setTimeout(
                        () => {
                            er(), e();
                        },
                        Math.max(I + (Math.floor(Math.random() * t * 2) - t), T)
                    )
                };
            };
            U = {
                type: 'timeout',
                id: setTimeout(
                    () => {
                        er(), e();
                    },
                    Math.floor(Math.random() * (S - T) + T)
                )
            };
        }
        function eo() {
            if (!ei()) return;
        }
        (A = null != O ? O : E),
            (W.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (i = t), null != n.id && (a = n.id), ea(), ee({ shouldFlushOnNextTick: !1 }), !1;
            }),
            (W.handleConnectionClosed = function () {
                return et(), eo(), (i = null), (a = null), !1;
            }),
            (W.handleFingerprint = function () {
                return et(), !1;
            }),
            (W.handleTrack = function (e) {
                let { event: t, properties: n, flush: i, fingerprint: a, resolve: o } = e;
                return (
                    h().then((e) => {
                        let { sessionId: s } = e;
                        (s !== r || N >= C) && ((N = 0), (r = s), (G = !1), (B = null), (V = null), F());
                        let l = {
                                type: t,
                                fingerprint: a,
                                properties: p(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: s,
                                        event_sequence_number: ++N
                                    },
                                    n
                                ),
                                resolve: o
                            },
                            c = J(l);
                        if ((null != c && (l.properties.client_uuid = Y.generate(c)), K.push(l), K.length > b)) {
                            let e = K.length - b;
                            (R = Z(R, e)), (K = K.slice(-b));
                        }
                        i ? ee({ shouldFlushOnNextTick: !0 }) : ee({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            });
        class es extends (t = c.ZP.Store) {
            initialize() {
                null != v && this.waitFor(...v);
            }
            constructor(...e) {
                super(...e), _(this, 'submitEventsImmediately', en);
            }
        }
        return _(es, 'displayName', 'AnalyticsTrackingStore'), new es(n, o);
    };
