"use strict";
let r, i;
n.d(t, { b: () => Y, q: () => V }), n(142703), n(667532), n(321073);
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
    h = 36e5,
    p = 6e4,
    g = 36e5,
    E = h,
    A = p,
    I = g,
    T = _,
    y = 0,
    S = 0,
    v = 0,
    C = 0,
    b = 0,
    N = null,
    R = 0,
    O = Number.MAX_SAFE_INTEGER,
    D = 0,
    L = 0,
    w = null,
    x = !1,
    P = null,
    M = null;
function k() {
    (S = 0), (v = 0), (C = 0), (R = 0), (O = Number.MAX_SAFE_INTEGER), (D = 0), (L = 0), (N = Date.now()), (b = y);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let G = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    F = new u.n(),
    V = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    B = [],
    j = null,
    H = () => Promise.resolve({ sessionId: void 0 }),
    Y = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: h = H,
            TRACKING_URL: p,
            drainTimeoutOverride: g,
            waitFor: Y,
            scheduleWhenIdle: W = G,
            getLaunchSignature: K = () => null,
        } = e;
        function $(e) {
            if (null != i) return i;
            let t = e.fingerprint ?? u();
            return null != t ? (0, s.d)(t) : null;
        }
        function z() {
            return 0 !== B.length && (null != i ? null != r : null != u());
        }
        function q(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == j && z() && (j = t ? setTimeout(X, 0) : W(X, { timeout: T }));
        }
        function X() {
            if (((j = null), !z())) return Promise.resolve();
            let e = B.slice();
            (B = []), (R = U(R));
            let t = e.length;
            (O = Math.min(O, t)), (D = Math.max(D, t)), (L = U(L, t));
            let n = Z(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (v = U(v));
                    },
                    (t) => {
                        B.unshift(...e), (C = U(C));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function Z(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
                n = Date.now(),
                i = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } })),
                s = {};
            return (
                x || ((M = (0, a.A)()), (s[d] = M), (x = !0)),
                l.Bo.post({ url: t, headers: s, body: { token: r, events: i }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (s[d] && (P = e?.headers?.[d] ?? null), e),
                )
            );
        }
        function Q() {
            let e = {
                type: c.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: v,
                    rpc_failure_count: C,
                    first_seen_event_sequence_number: b,
                    last_seen_event_sequence_number: y,
                    telemetry_period_start_timestamp: N,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: S,
                    event_queue_batch_count: R,
                    event_queue_batch_min_size: O === Number.MAX_SAFE_INTEGER ? 0 : O,
                    event_queue_batch_max_size: D,
                    event_queue_batch_avg_size: R > 0 ? L / R : 0,
                    science_request_id: M,
                    science_response: P,
                    launch_signature: K(),
                },
            };
            return k(), Z([e], c.mX.CLIENT_TELEMETRY);
        }
        function J() {
            if (null == w) return !1;
            switch (w.type) {
                case "timeout":
                    clearTimeout(w.id);
                    break;
                case "interval":
                    clearInterval(w.id);
                    break;
                default:
                    w.type;
            }
            return (w = null), !0;
        }
        function ee() {
            if (null != w) return;
            let e = () => {
                let t = 0.1 * E;
                w = {
                    type: "timeout",
                    id: setTimeout(
                        () => {
                            Q(), e();
                        },
                        Math.max(E + (Math.floor(Math.random() * t * 2) - t), A),
                    ),
                };
            };
            w = {
                type: "timeout",
                id: setTimeout(
                    () => {
                        Q(), e();
                    },
                    Math.floor(Math.random() * (I - A) + A),
                ),
            };
        }
        function et() {
            if (!J()) return;
        }
        (T = g ?? _),
            (V.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (r = t), null != n.id && (i = n.id), ee(), q({ shouldFlushOnNextTick: !1 }), !1;
            }),
            (V.handleConnectionClosed = function () {
                return X(), et(), (r = null), (i = null), !1;
            }),
            (V.handleFingerprint = function () {
                return X(), !1;
            }),
            (V.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: a } = e;
                return (
                    h().then((e) => {
                        let { sessionId: s } = e,
                            o = {
                                type: t,
                                fingerprint: i,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: s,
                                    event_sequence_number: ++y,
                                    ...n,
                                },
                                resolve: a,
                            },
                            l = $(o);
                        if ((null != l && (o.properties.client_uuid = F.generate(l)), B.push(o), B.length > f)) {
                            let e = B.length - f;
                            (S = U(S, e)), (B = B.slice(-f));
                        }
                        r ? q({ shouldFlushOnNextTick: !0 }) : q({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (V.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == r && null != t && ((r = t), (i = n), q({ shouldFlushOnNextTick: !1 })), !1;
            });
        class en extends o.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != Y && this.waitFor(...Y);
            }
            submitEventsImmediately = Z;
        }
        return new en(t, n);
    };
