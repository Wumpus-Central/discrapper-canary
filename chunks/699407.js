let r, i;
(n.d(t, {
    X: () => H,
    l: () => z
}),
    n(358797),
    n(290780),
    n(388685),
    n(539854));
var a,
    o = n(772848);
n(17089);
var s = n(756647),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let m = 'x-science-test',
    g = 1500,
    E = 10000,
    b = 3600000,
    y = 60000,
    O = 3600000,
    v = b,
    I = y,
    T = O,
    S = g,
    A = 0,
    N = 0,
    C = 0,
    w = 0,
    R = 0,
    P = null,
    D = 0,
    L = Number.MAX_SAFE_INTEGER,
    x = 0,
    k = 0,
    j = null,
    M = !1,
    U = null,
    G = null;
function B() {
    ((N = 0), (C = 0), (w = 0), (D = 0), (L = Number.MAX_SAFE_INTEGER), (x = 0), (k = 0), (P = Date.now()), (R = A));
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let F = null != (a = window.requestIdleCallback) ? a : (e) => setImmediate(() => e()),
    V = new u.R(),
    H = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    Y = [],
    W = null,
    K = () => Promise.resolve({ sessionId: void 0 }),
    z = (e) => {
        var t;
        let { dispatcher: n, actionHandler: a, getFingerprint: u, getSessionId: p = K, TRACKING_URL: b, drainTimeoutOverride: y, waitFor: O, scheduleWhenIdle: z = F, getLaunchSignature: q = () => null } = e;
        function $(e) {
            var t;
            if (null != i) return i;
            let n = null != (t = e.fingerprint) ? t : u();
            return null != n ? (0, s.s)(n) : null;
        }
        function X() {
            return 0 !== Y.length && (null != i ? null != r : null != u());
        }
        function Q(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == W && X() && (W = t ? setTimeout(J, 0) : z(J, { timeout: S }));
        }
        function J() {
            if (((W = null), !X())) return Promise.resolve();
            let e = Y.slice();
            ((Y = []), (D = Z(D)));
            let t = e.length;
            ((L = Math.min(L, t)), (x = Math.max(x, t)), (k = Z(k, t)));
            let n = ee(e);
            return (
                n.then(
                    () => {
                        (e.forEach((e) => {
                            var t;
                            null == (t = e.resolve) || t.call(e);
                        }),
                            (C = Z(C)));
                    },
                    (t) => {
                        (Y.unshift(...e), (w = Z(w)));
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                ),
                n
            );
        }
        function ee(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                n = Date.now(),
                i = e.map((e) => h(_({}, e), { properties: h(_({}, e.properties), { client_send_timestamp: n }) })),
                a = {};
            return (
                M || ((G = (0, o.Z)()), (a[m] = G), (M = !0)),
                c.tn
                    .post({
                        url: t,
                        headers: a,
                        body: {
                            token: r,
                            events: i
                        },
                        retries: 3,
                        rejectWithError: !1
                    })
                    .then((e) => {
                        if (a[m]) {
                            var t, n;
                            U = null != (n = null == e || null == (t = e.headers) ? void 0 : t[m]) ? n : null;
                        }
                        return e;
                    })
            );
        }
        function et() {
            let e = {
                type: d.cN.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: C,
                    rpc_failure_count: w,
                    first_seen_event_sequence_number: R,
                    last_seen_event_sequence_number: A,
                    telemetry_period_start_timestamp: P,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: N,
                    event_queue_batch_count: D,
                    event_queue_batch_min_size: L === Number.MAX_SAFE_INTEGER ? 0 : L,
                    event_queue_batch_max_size: x,
                    event_queue_batch_avg_size: D > 0 ? k / D : 0,
                    science_request_id: G,
                    science_response: U,
                    launch_signature: q()
                }
            };
            return (B(), ee([e], d.tx.CLIENT_TELEMETRY));
        }
        function en() {
            if (null == j) return !1;
            switch (j.type) {
                case 'timeout':
                    clearTimeout(j.id);
                    break;
                case 'interval':
                    clearInterval(j.id);
                    break;
                default:
                    j.type;
            }
            return ((j = null), !0);
        }
        function er() {
            if (null != j) return;
            let e = () => {
                let t = 0.1 * v;
                j = {
                    type: 'timeout',
                    id: setTimeout(
                        () => {
                            (et(), e());
                        },
                        Math.max(v + (Math.floor(Math.random() * t * 2) - t), I)
                    )
                };
            };
            j = {
                type: 'timeout',
                id: setTimeout(
                    () => {
                        (et(), e());
                    },
                    Math.floor(Math.random() * (T - I) + I)
                )
            };
        }
        function ei() {
            if (!en()) return;
        }
        ((S = null != y ? y : g),
            (H.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (null != t && (r = t), null != n.id && (i = n.id), er(), Q({ shouldFlushOnNextTick: !1 }), !1);
            }),
            (H.handleConnectionClosed = function () {
                return (J(), ei(), (r = null), (i = null), !1);
            }),
            (H.handleFingerprint = function () {
                return (J(), !1);
            }),
            (H.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: a } = e;
                return (
                    p().then((e) => {
                        let { sessionId: o } = e,
                            s = {
                                type: t,
                                fingerprint: i,
                                properties: _(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: o,
                                        event_sequence_number: ++A
                                    },
                                    n
                                ),
                                resolve: a
                            },
                            l = $(s);
                        if ((null != l && (s.properties.client_uuid = V.generate(l)), Y.push(s), Y.length > E)) {
                            let e = Y.length - E;
                            ((N = Z(N, e)), (Y = Y.slice(-E)));
                        }
                        r ? Q({ shouldFlushOnNextTick: !0 }) : Q({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }));
        class ea extends (t = l.ZP.Store) {
            initialize() {
                null != O && this.waitFor(...O);
            }
            constructor(...e) {
                (super(...e), f(this, 'submitEventsImmediately', ee));
            }
        }
        return (f(ea, 'displayName', 'AnalyticsTrackingStore'), new ea(n, a));
    };
