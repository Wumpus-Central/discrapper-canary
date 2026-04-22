"use strict";
let r, i;
n.d(t, { b: () => P, q: () => D }), n(142703), n(667532), n(321073);
var s = n(835245);
n(423034);
var a = n(80703),
    o = n(311907),
    l = n(562465),
    u = n(187207),
    d = n(818348);
let c = "x-science-test",
    _ = 1500,
    f = 0,
    E = 0,
    h = 0,
    p = 0,
    m = 0,
    g = null,
    A = 0,
    I = Number.MAX_SAFE_INTEGER,
    T = 0,
    S = 0,
    y = null,
    N = !1,
    O = null,
    R = null;
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let C = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    b = new u.n(),
    D = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    L = [],
    w = null,
    M = () => Promise.resolve({ sessionId: void 0 }),
    P = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: P = M,
            TRACKING_URL: U,
            drainTimeoutOverride: k,
            waitFor: x,
            scheduleWhenIdle: G = C,
            getLaunchSignature: V = () => null,
        } = e;
        function F() {
            return 0 !== L.length && (null != i ? null != r : null != u());
        }
        function B(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == w && F() && (w = t ? setTimeout(H, 0) : G(H, { timeout: _ }));
        }
        function H() {
            if (((w = null), !F())) return Promise.resolve();
            let e = L.slice();
            (L = []), (A = v(A));
            let t = e.length;
            (I = Math.min(I, t)), (T = Math.max(T, t)), (S = v(S, t));
            let n = Y(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (h = v(h));
                    },
                    (t) => {
                        L.unshift(...e), (p = v(p));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function Y(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                n = Date.now(),
                i = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } })),
                a = {};
            return (
                N || ((R = (0, s.A)()), (a[c] = R), (N = !0)),
                l.Bo.post({ url: t, headers: a, body: { token: r, events: i }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (a[c] && (O = e?.headers?.[c] ?? null), e),
                )
            );
        }
        function W() {
            let e = {
                type: d.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: h,
                    rpc_failure_count: p,
                    first_seen_event_sequence_number: m,
                    last_seen_event_sequence_number: f,
                    telemetry_period_start_timestamp: g,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: E,
                    event_queue_batch_count: A,
                    event_queue_batch_min_size: I === Number.MAX_SAFE_INTEGER ? 0 : I,
                    event_queue_batch_max_size: T,
                    event_queue_batch_avg_size: A > 0 ? S / A : 0,
                    science_request_id: R,
                    science_response: O,
                    launch_signature: V(),
                },
            };
            return (
                (E = 0),
                (h = 0),
                (p = 0),
                (A = 0),
                (I = Number.MAX_SAFE_INTEGER),
                (T = 0),
                (S = 0),
                (g = Date.now()),
                (m = f),
                Y([e], d.mX.CLIENT_TELEMETRY)
            );
        }
        (_ = k ?? 1500),
            (D.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (r = t),
                    null != n.id && (i = n.id),
                    !(function () {
                        if (null != y) return;
                        let e = () => {
                            y = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        W(), e();
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        y = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    W(), e();
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    B({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            (D.handleConnectionClosed = function () {
                return (
                    H(),
                    (function () {
                        if (null == y) return;
                        switch (y.type) {
                            case "timeout":
                                clearTimeout(y.id);
                                break;
                            case "interval":
                                clearInterval(y.id);
                                break;
                            default:
                                y.type;
                        }
                        y = null;
                    })(),
                    (r = null),
                    (i = null),
                    !1
                );
            }),
            (D.handleFingerprint = function () {
                return H(), !1;
            }),
            (D.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: s, resolve: o } = e;
                return (
                    P().then((e) => {
                        let { sessionId: l } = e,
                            d = {
                                type: t,
                                fingerprint: s,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: l,
                                    event_sequence_number: ++f,
                                    ...n,
                                },
                                resolve: o,
                            },
                            c = (function (e) {
                                if (null != i) return i;
                                let t = e.fingerprint ?? u();
                                return null != t ? (0, a.d)(t) : null;
                            })(d);
                        if ((null != c && (d.properties.client_uuid = b.generate(c)), L.push(d), L.length > 1e4)) {
                            let e = L.length - 1e4;
                            (E = v(E, e)), (L = L.slice(-1e4));
                        }
                        r ? B({ shouldFlushOnNextTick: !0 }) : B({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (D.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == r && null != t && ((r = t), (i = n), B({ shouldFlushOnNextTick: !1 })), !1;
            });
        class j extends o.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != x && this.waitFor(...x);
            }
            submitEventsImmediately = Y;
        }
        return new j(t, n);
    };
