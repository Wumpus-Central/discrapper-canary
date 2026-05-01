let r, i;
n.d(t, { b: () => O, q: () => K }), n(142703), n(667532), n(321073);
var a = n(132500);
n(423034);
var l = n(80703),
    s = n(17928),
    o = n(636537),
    u = n(187207),
    d = n(818348);
let c = "x-science-test",
    h = 1500,
    y = 0,
    p = 0,
    f = 0,
    m = 0,
    E = 0,
    _ = null,
    g = 0,
    C = Number.MAX_SAFE_INTEGER,
    v = 0,
    S = 0,
    A = null,
    w = !1,
    M = null,
    k = null;
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let b = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    T = new u.n(),
    K = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    I = [],
    N = null,
    P = () => Promise.resolve({ sessionId: void 0 }),
    O = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: O = P,
            TRACKING_URL: x,
            drainTimeoutOverride: D,
            waitFor: R,
            scheduleWhenIdle: F = b,
            getLaunchSignature: U = () => null,
        } = e;
        function j() {
            return 0 !== I.length && (null != i ? null != r : null != u());
        }
        function z(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == N && j() && (N = t ? setTimeout(B, 0) : F(B, { timeout: h }));
        }
        function B() {
            if (((N = null), !j())) return Promise.resolve();
            let e = I.slice();
            (I = []), (g = L(g));
            let t = e.length;
            (C = Math.min(C, t)), (v = Math.max(v, t)), (S = L(S, t));
            let n = $(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (f = L(f));
                    },
                    (t) => {
                        I.unshift(...e), (m = L(m));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function $(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
                n = Date.now(),
                i = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } })),
                l = {};
            return (
                w || ((k = (0, a.A)()), (l[c] = k), (w = !0)),
                o.Bo.post({ url: t, headers: l, body: { token: r, events: i }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (l[c] && (M = e?.headers?.[c] ?? null), e),
                )
            );
        }
        function G() {
            let e = {
                type: d.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: f,
                    rpc_failure_count: m,
                    first_seen_event_sequence_number: E,
                    last_seen_event_sequence_number: y,
                    telemetry_period_start_timestamp: _,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: p,
                    event_queue_batch_count: g,
                    event_queue_batch_min_size: C === Number.MAX_SAFE_INTEGER ? 0 : C,
                    event_queue_batch_max_size: v,
                    event_queue_batch_avg_size: g > 0 ? S / g : 0,
                    science_request_id: k,
                    science_response: M,
                    launch_signature: U(),
                },
            };
            return (
                (p = 0),
                (f = 0),
                (m = 0),
                (g = 0),
                (C = Number.MAX_SAFE_INTEGER),
                (v = 0),
                (S = 0),
                (_ = Date.now()),
                (E = y),
                $([e], d.mX.CLIENT_TELEMETRY)
            );
        }
        (h = D ?? 1500),
            (K.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (r = t),
                    null != n.id && (i = n.id),
                    !(function () {
                        if (null != A) return;
                        let e = () => {
                            A = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        G(), e();
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        A = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    G(), e();
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    z({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            (K.handleConnectionClosed = function () {
                return (
                    B(),
                    (function () {
                        if (null == A) return;
                        switch (A.type) {
                            case "timeout":
                                clearTimeout(A.id);
                                break;
                            case "interval":
                                clearInterval(A.id);
                                break;
                            default:
                                A.type;
                        }
                        A = null;
                    })(),
                    (r = null),
                    (i = null),
                    !1
                );
            }),
            (K.handleFingerprint = function () {
                return B(), !1;
            }),
            (K.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: a, resolve: s } = e;
                return (
                    O().then((e) => {
                        let { sessionId: o } = e,
                            d = {
                                type: t,
                                fingerprint: a,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: o,
                                    event_sequence_number: ++y,
                                    ...n,
                                },
                                resolve: s,
                            },
                            c = (function (e) {
                                if (null != i) return i;
                                let t = e.fingerprint ?? u();
                                return null != t ? (0, l.d)(t) : null;
                            })(d);
                        if ((null != c && (d.properties.client_uuid = T.generate(c)), I.push(d), I.length > 1e4)) {
                            let e = I.length - 1e4;
                            (p = L(p, e)), (I = I.slice(-1e4));
                        }
                        r ? z({ shouldFlushOnNextTick: !0 }) : z({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (K.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == r && null != t && ((r = t), (i = n), z({ shouldFlushOnNextTick: !1 })), !1;
            });
        class V extends s.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != R && this.waitFor(...R);
            }
            submitEventsImmediately = $;
        }
        return new V(t, n);
    };
