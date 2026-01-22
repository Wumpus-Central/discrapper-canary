let r, i;
n.d(t, {
    b: () => q,
    q: () => Y,
}),
    n(142703),
    n(667532),
    n(896048),
    n(321073);
var a,
    s = n(835245);
n(423034);
var o = n(80703),
    l = n(311907),
    c = n(562465),
    u = n(187207),
    d = n(818348);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
let m = "x-science-test",
    g = 1500,
    E = 10000,
    b = 3600000,
    y = 60000,
    O = 3600000,
    A = b,
    v = y,
    S = O,
    I = g,
    T = 0,
    C = 0,
    N = 0,
    R = 0,
    w = 0,
    P = null,
    D = 0,
    x = Number.MAX_SAFE_INTEGER,
    L = 0,
    j = 0,
    M = null,
    k = !1,
    U = null,
    G = null;
function V() {
    (C = 0), (N = 0), (R = 0), (D = 0), (x = Number.MAX_SAFE_INTEGER), (L = 0), (j = 0), (P = Date.now()), (w = T);
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let B = null != (a = window.requestIdleCallback) ? a : (e) => setImmediate(() => e()),
    H = new u.n(),
    Y = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
    },
    W = [],
    K = null,
    z = () => Promise.resolve({ sessionId: void 0 }),
    q = (e) => {
        var t;
        let {
            dispatcher: n,
            actionHandler: a,
            getFingerprint: u,
            getSessionId: _ = z,
            TRACKING_URL: b,
            drainTimeoutOverride: y,
            waitFor: O,
            scheduleWhenIdle: q = B,
            getLaunchSignature: X = () => null,
        } = e;
        function Z(e) {
            var t;
            if (null != i) return i;
            let n = null != (t = e.fingerprint) ? t : u();
            return null != n ? (0, o.d)(n) : null;
        }
        function Q() {
            return 0 !== W.length && (null != i ? null != r : null != u());
        }
        function $(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == K && Q() && (K = t ? setTimeout(J, 0) : q(J, { timeout: I }));
        }
        function J() {
            if (((K = null), !Q())) return Promise.resolve();
            let e = W.slice();
            (W = []), (D = F(D));
            let t = e.length;
            (x = Math.min(x, t)), (L = Math.max(L, t)), (j = F(j, t));
            let n = ee(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null == (t = e.resolve) || t.call(e);
                        }),
                            (N = F(N));
                    },
                    (t) => {
                        W.unshift(...e), (R = F(R));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function ee(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                n = Date.now(),
                i = e.map((e) => h(p({}, e), { properties: h(p({}, e.properties), { client_send_timestamp: n }) })),
                a = {};
            return (
                k || ((G = (0, s.A)()), (a[m] = G), (k = !0)),
                c.Bo.post({
                    url: t,
                    headers: a,
                    body: {
                        token: r,
                        events: i,
                    },
                    retries: 3,
                    rejectWithError: !1,
                }).then((e) => {
                    if (a[m]) {
                        var t, n;
                        U = null != (t = null == e || null == (n = e.headers) ? void 0 : n[m]) ? t : null;
                    }
                    return e;
                })
            );
        }
        function et() {
            let e = {
                type: d.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: N,
                    rpc_failure_count: R,
                    first_seen_event_sequence_number: w,
                    last_seen_event_sequence_number: T,
                    telemetry_period_start_timestamp: P,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: C,
                    event_queue_batch_count: D,
                    event_queue_batch_min_size: x === Number.MAX_SAFE_INTEGER ? 0 : x,
                    event_queue_batch_max_size: L,
                    event_queue_batch_avg_size: D > 0 ? j / D : 0,
                    science_request_id: G,
                    science_response: U,
                    launch_signature: X(),
                },
            };
            return V(), ee([e], d.mX.CLIENT_TELEMETRY);
        }
        function en() {
            if (null == M) return !1;
            switch (M.type) {
                case "timeout":
                    clearTimeout(M.id);
                    break;
                case "interval":
                    clearInterval(M.id);
                    break;
                default:
                    M.type;
            }
            return (M = null), !0;
        }
        function er() {
            if (null != M) return;
            let e = () => {
                let t = 0.1 * A;
                M = {
                    type: "timeout",
                    id: setTimeout(
                        () => {
                            et(), e();
                        },
                        Math.max(A + (Math.floor(Math.random() * t * 2) - t), v),
                    ),
                };
            };
            M = {
                type: "timeout",
                id: setTimeout(
                    () => {
                        et(), e();
                    },
                    Math.floor(Math.random() * (S - v) + v),
                ),
            };
        }
        function ei() {
            if (!en()) return;
        }
        (I = null != y ? y : g),
            (Y.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (r = t), null != n.id && (i = n.id), er(), $({ shouldFlushOnNextTick: !1 }), !1;
            }),
            (Y.handleConnectionClosed = function () {
                return J(), ei(), (r = null), (i = null), !1;
            }),
            (Y.handleFingerprint = function () {
                return J(), !1;
            }),
            (Y.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: a } = e;
                return (
                    _().then((e) => {
                        let { sessionId: s } = e,
                            o = {
                                type: t,
                                fingerprint: i,
                                properties: p(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: s,
                                        event_sequence_number: ++T,
                                    },
                                    n,
                                ),
                                resolve: a,
                            },
                            l = Z(o);
                        if ((null != l && (o.properties.client_uuid = H.generate(l)), W.push(o), W.length > E)) {
                            let e = W.length - E;
                            (C = F(C, e)), (W = W.slice(-E));
                        }
                        r ? $({ shouldFlushOnNextTick: !0 }) : $({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            });
        class ea extends (t = l.Ay.Store) {
            initialize() {
                null != O && this.waitFor(...O);
            }
            constructor(...e) {
                super(...e), f(this, "submitEventsImmediately", ee);
            }
        }
        return f(ea, "displayName", "AnalyticsTrackingStore"), new ea(n, a);
    };
