"use strict";
let r, i;
n.d(t, { b: () => P, q: () => D }), n(142703), n(667532), n(321073);
var s = n(835245);
n(423034);
var a = n(80703),
    o = n(311907),
    l = n(562465),
    u = n(187207),
    c = n(818348);
let d = "x-science-test",
    _ = 1500,
    f = 0,
    p = 0,
    h = 0,
    E = 0,
    m = 0,
    g = null,
    A = 0,
    I = Number.MAX_SAFE_INTEGER,
    T = 0,
    S = 0,
    y = null,
    N = !1,
    v = null,
    C = null;
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let R = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
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
            TRACKING_URL: x,
            drainTimeoutOverride: k,
            waitFor: U,
            scheduleWhenIdle: G = R,
            getLaunchSignature: F = () => null,
        } = e;
        function V() {
            return 0 !== L.length && (null != i ? null != r : null != u());
        }
        function B(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == w && V() && (w = t ? setTimeout(H, 0) : G(H, { timeout: _ }));
        }
        function H() {
            if (((w = null), !V())) return Promise.resolve();
            let e = L.slice();
            (L = []), (A = O(A));
            let t = e.length;
            (I = Math.min(I, t)), (T = Math.max(T, t)), (S = O(S, t));
            let n = j(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (h = O(h));
                    },
                    (t) => {
                        L.unshift(...e), (E = O(E));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function j(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
                n = Date.now(),
                i = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } })),
                a = {};
            return (
                N || ((C = (0, s.A)()), (a[d] = C), (N = !0)),
                l.Bo.post({ url: t, headers: a, body: { token: r, events: i }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (a[d] && (v = e?.headers?.[d] ?? null), e),
                )
            );
        }
        function Y() {
            let e = {
                type: c.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: h,
                    rpc_failure_count: E,
                    first_seen_event_sequence_number: m,
                    last_seen_event_sequence_number: f,
                    telemetry_period_start_timestamp: g,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: p,
                    event_queue_batch_count: A,
                    event_queue_batch_min_size: I === Number.MAX_SAFE_INTEGER ? 0 : I,
                    event_queue_batch_max_size: T,
                    event_queue_batch_avg_size: A > 0 ? S / A : 0,
                    science_request_id: C,
                    science_response: v,
                    launch_signature: F(),
                },
            };
            return (
                (p = 0),
                (h = 0),
                (E = 0),
                (A = 0),
                (I = Number.MAX_SAFE_INTEGER),
                (T = 0),
                (S = 0),
                (g = Date.now()),
                (m = f),
                j([e], c.mX.CLIENT_TELEMETRY)
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
                                        Y(), e();
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        y = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    Y(), e();
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
                            c = {
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
                            d = (function (e) {
                                if (null != i) return i;
                                let t = e.fingerprint ?? u();
                                return null != t ? (0, a.d)(t) : null;
                            })(c);
                        if ((null != d && (c.properties.client_uuid = b.generate(d)), L.push(c), L.length > 1e4)) {
                            let e = L.length - 1e4;
                            (p = O(p, e)), (L = L.slice(-1e4));
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
        class W extends o.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != U && this.waitFor(...U);
            }
            submitEventsImmediately = j;
        }
        return new W(t, n);
    };
