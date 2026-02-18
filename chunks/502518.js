"use strict";
let r, i;
n.d(t, { b: () => j, q: () => F }), n(142703), n(667532), n(321073);
var s = n(835245);
n(423034);
var a = n(80703),
    o = n(311907),
    l = n(562465),
    u = n(187207),
    c = n(818348);
let d = "x-science-test",
    _ = 1500,
    f = 1e4,
    p = 36e5,
    h = 6e4,
    m = 36e5,
    E = p,
    g = h,
    A = m,
    I = _,
    T = 0,
    S = 0,
    y = 0,
    v = 0,
    N = 0,
    C = null,
    b = 0,
    R = Number.MAX_SAFE_INTEGER,
    O = 0,
    D = 0,
    L = null,
    w = !1,
    x = null,
    M = null;
function P() {
    (S = 0), (y = 0), (v = 0), (b = 0), (R = Number.MAX_SAFE_INTEGER), (O = 0), (D = 0), (C = Date.now()), (N = T);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let U = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    G = new u.n(),
    F = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    V = [],
    B = null,
    H = () => Promise.resolve({ sessionId: void 0 }),
    j = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: p = H,
            TRACKING_URL: h,
            drainTimeoutOverride: m,
            waitFor: j,
            scheduleWhenIdle: Y = U,
            getLaunchSignature: W = () => null,
        } = e;
        function K(e) {
            if (null != i) return i;
            let t = e.fingerprint ?? u();
            return null != t ? (0, a.d)(t) : null;
        }
        function z() {
            return 0 !== V.length && (null != i ? null != r : null != u());
        }
        function $(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == B && z() && (B = t ? setTimeout(q, 0) : Y(q, { timeout: I }));
        }
        function q() {
            if (((B = null), !z())) return Promise.resolve();
            let e = V.slice();
            (V = []), (b = k(b));
            let t = e.length;
            (R = Math.min(R, t)), (O = Math.max(O, t)), (D = k(D, t));
            let n = Z(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (y = k(y));
                    },
                    (t) => {
                        V.unshift(...e), (v = k(v));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function Z(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h,
                n = Date.now(),
                i = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } })),
                a = {};
            return (
                w || ((M = (0, s.A)()), (a[d] = M), (w = !0)),
                l.Bo.post({ url: t, headers: a, body: { token: r, events: i }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (a[d] && (x = e?.headers?.[d] ?? null), e),
                )
            );
        }
        function X() {
            let e = {
                type: c.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: y,
                    rpc_failure_count: v,
                    first_seen_event_sequence_number: N,
                    last_seen_event_sequence_number: T,
                    telemetry_period_start_timestamp: C,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: S,
                    event_queue_batch_count: b,
                    event_queue_batch_min_size: R === Number.MAX_SAFE_INTEGER ? 0 : R,
                    event_queue_batch_max_size: O,
                    event_queue_batch_avg_size: b > 0 ? D / b : 0,
                    science_request_id: M,
                    science_response: x,
                    launch_signature: W(),
                },
            };
            return P(), Z([e], c.mX.CLIENT_TELEMETRY);
        }
        function Q() {
            if (null == L) return !1;
            switch (L.type) {
                case "timeout":
                    clearTimeout(L.id);
                    break;
                case "interval":
                    clearInterval(L.id);
                    break;
                default:
                    L.type;
            }
            return (L = null), !0;
        }
        function J() {
            if (null != L) return;
            let e = () => {
                let t = 0.1 * E;
                L = {
                    type: "timeout",
                    id: setTimeout(
                        () => {
                            X(), e();
                        },
                        Math.max(E + (Math.floor(Math.random() * t * 2) - t), g),
                    ),
                };
            };
            L = {
                type: "timeout",
                id: setTimeout(
                    () => {
                        X(), e();
                    },
                    Math.floor(Math.random() * (A - g) + g),
                ),
            };
        }
        function ee() {
            if (!Q()) return;
        }
        (I = m ?? _),
            (F.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (r = t), null != n.id && (i = n.id), J(), $({ shouldFlushOnNextTick: !1 }), !1;
            }),
            (F.handleConnectionClosed = function () {
                return q(), ee(), (r = null), (i = null), !1;
            }),
            (F.handleFingerprint = function () {
                return q(), !1;
            }),
            (F.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: s } = e;
                return (
                    p().then((e) => {
                        let { sessionId: a } = e,
                            o = {
                                type: t,
                                fingerprint: i,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: a,
                                    event_sequence_number: ++T,
                                    ...n,
                                },
                                resolve: s,
                            },
                            l = K(o);
                        if ((null != l && (o.properties.client_uuid = G.generate(l)), V.push(o), V.length > f)) {
                            let e = V.length - f;
                            (S = k(S, e)), (V = V.slice(-f));
                        }
                        r ? $({ shouldFlushOnNextTick: !0 }) : $({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (F.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == r && null != t && ((r = t), (i = n), $({ shouldFlushOnNextTick: !1 })), !1;
            });
        class et extends o.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != j && this.waitFor(...j);
            }
            submitEventsImmediately = Z;
        }
        return new et(t, n);
    };
