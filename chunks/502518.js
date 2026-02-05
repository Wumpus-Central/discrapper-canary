"use strict";
let r, i;
n.d(t, { b: () => H, q: () => V }), n(142703), n(667532), n(321073);
var a = n(835245);
n(423034);
var s = n(80703),
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
    g = p,
    E = h,
    A = m,
    I = _,
    T = 0,
    y = 0,
    S = 0,
    v = 0,
    C = 0,
    b = null,
    N = 0,
    R = Number.MAX_SAFE_INTEGER,
    O = 0,
    D = 0,
    L = null,
    w = !1,
    x = null,
    P = null;
function M() {
    (y = 0), (S = 0), (v = 0), (N = 0), (R = Number.MAX_SAFE_INTEGER), (O = 0), (D = 0), (b = Date.now()), (C = T);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let U = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    G = new u.n(),
    V = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    F = [],
    B = null,
    j = () => Promise.resolve({ sessionId: void 0 }),
    H = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: p = j,
            TRACKING_URL: h,
            drainTimeoutOverride: m,
            waitFor: H,
            scheduleWhenIdle: Y = U,
            getLaunchSignature: W = () => null,
        } = e;
        function K(e) {
            if (null != i) return i;
            let t = e.fingerprint ?? u();
            return null != t ? (0, s.d)(t) : null;
        }
        function z() {
            return 0 !== F.length && (null != i ? null != r : null != u());
        }
        function $(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == B && z() && (B = t ? setTimeout(q, 0) : Y(q, { timeout: I }));
        }
        function q() {
            if (((B = null), !z())) return Promise.resolve();
            let e = F.slice();
            (F = []), (N = k(N));
            let t = e.length;
            (R = Math.min(R, t)), (O = Math.max(O, t)), (D = k(D, t));
            let n = Z(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (S = k(S));
                    },
                    (t) => {
                        F.unshift(...e), (v = k(v));
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
                s = {};
            return (
                w || ((P = (0, a.A)()), (s[d] = P), (w = !0)),
                l.Bo.post({ url: t, headers: s, body: { token: r, events: i }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (s[d] && (x = e?.headers?.[d] ?? null), e),
                )
            );
        }
        function Q() {
            let e = {
                type: c.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: S,
                    rpc_failure_count: v,
                    first_seen_event_sequence_number: C,
                    last_seen_event_sequence_number: T,
                    telemetry_period_start_timestamp: b,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: y,
                    event_queue_batch_count: N,
                    event_queue_batch_min_size: R === Number.MAX_SAFE_INTEGER ? 0 : R,
                    event_queue_batch_max_size: O,
                    event_queue_batch_avg_size: N > 0 ? D / N : 0,
                    science_request_id: P,
                    science_response: x,
                    launch_signature: W(),
                },
            };
            return M(), Z([e], c.mX.CLIENT_TELEMETRY);
        }
        function X() {
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
                let t = 0.1 * g;
                L = {
                    type: "timeout",
                    id: setTimeout(
                        () => {
                            Q(), e();
                        },
                        Math.max(g + (Math.floor(Math.random() * t * 2) - t), E),
                    ),
                };
            };
            L = {
                type: "timeout",
                id: setTimeout(
                    () => {
                        Q(), e();
                    },
                    Math.floor(Math.random() * (A - E) + E),
                ),
            };
        }
        function ee() {
            if (!X()) return;
        }
        (I = m ?? _),
            (V.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (r = t), null != n.id && (i = n.id), J(), $({ shouldFlushOnNextTick: !1 }), !1;
            }),
            (V.handleConnectionClosed = function () {
                return q(), ee(), (r = null), (i = null), !1;
            }),
            (V.handleFingerprint = function () {
                return q(), !1;
            }),
            (V.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: a } = e;
                return (
                    p().then((e) => {
                        let { sessionId: s } = e,
                            o = {
                                type: t,
                                fingerprint: i,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: s,
                                    event_sequence_number: ++T,
                                    ...n,
                                },
                                resolve: a,
                            },
                            l = K(o);
                        if ((null != l && (o.properties.client_uuid = G.generate(l)), F.push(o), F.length > f)) {
                            let e = F.length - f;
                            (y = k(y, e)), (F = F.slice(-f));
                        }
                        r ? $({ shouldFlushOnNextTick: !0 }) : $({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (V.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == r && null != t && ((r = t), (i = n), $({ shouldFlushOnNextTick: !1 })), !1;
            });
        class et extends o.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != H && this.waitFor(...H);
            }
            submitEventsImmediately = Z;
        }
        return new et(t, n);
    };
