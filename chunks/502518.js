let r, i;
n.d(t, { b: () => O, q: () => T }), n(142703), n(667532), n(321073);
var a = n(132500);
n(423034);
var l = n(80703),
    o = n(17928),
    s = n(636537),
    u = n(187207),
    d = n(818348);
let c = "x-science-test",
    h = 1500,
    y = 0,
    p = 0,
    f = 0,
    m = 0,
    _ = 0,
    E = null,
    C = 0,
    g = Number.MAX_SAFE_INTEGER,
    A = 0,
    w = 0,
    k = null,
    v = !1,
    M = null,
    S = null;
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let b = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    L = new u.n(),
    T = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    N = [],
    K = null,
    D = () => Promise.resolve({ sessionId: void 0 }),
    O = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: O = D,
            TRACKING_URL: R,
            drainTimeoutOverride: x,
            waitFor: P,
            scheduleWhenIdle: F = b,
            getLaunchSignature: j = () => null,
        } = e;
        function U() {
            return 0 !== N.length && (null != i ? null != r : null != u());
        }
        function B(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == K && U() && (K = t ? setTimeout(z, 0) : F(z, { timeout: h }));
        }
        function z() {
            if (((K = null), !U())) return Promise.resolve();
            let e = N.slice();
            (N = []), (C = I(C));
            let t = e.length;
            (g = Math.min(g, t)), (A = Math.max(A, t)), (w = I(w, t));
            let n = G(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (f = I(f));
                    },
                    (t) => {
                        N.unshift(...e), (m = I(m));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function G(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R,
                n = Date.now(),
                i = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } })),
                l = {};
            return (
                v || ((S = (0, a.A)()), (l[c] = S), (v = !0)),
                s.Bo.post({ url: t, headers: l, body: { token: r, events: i }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (l[c] && (M = e?.headers?.[c] ?? null), e),
                )
            );
        }
        function H() {
            let e = {
                type: d.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: f,
                    rpc_failure_count: m,
                    first_seen_event_sequence_number: _,
                    last_seen_event_sequence_number: y,
                    telemetry_period_start_timestamp: E,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: p,
                    event_queue_batch_count: C,
                    event_queue_batch_min_size: g === Number.MAX_SAFE_INTEGER ? 0 : g,
                    event_queue_batch_max_size: A,
                    event_queue_batch_avg_size: C > 0 ? w / C : 0,
                    science_request_id: S,
                    science_response: M,
                    launch_signature: j(),
                },
            };
            return (
                (p = 0),
                (f = 0),
                (m = 0),
                (C = 0),
                (g = Number.MAX_SAFE_INTEGER),
                (A = 0),
                (w = 0),
                (E = Date.now()),
                (_ = y),
                G([e], d.mX.CLIENT_TELEMETRY)
            );
        }
        (h = x ?? 1500),
            (T.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (r = t),
                    null != n.id && (i = n.id),
                    !(function () {
                        if (null != k) return;
                        let e = () => {
                            k = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        H(), e();
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        k = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    H(), e();
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    B({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            (T.handleConnectionClosed = function () {
                return (
                    z(),
                    (function () {
                        if (null == k) return;
                        switch (k.type) {
                            case "timeout":
                                clearTimeout(k.id);
                                break;
                            case "interval":
                                clearInterval(k.id);
                                break;
                            default:
                                k.type;
                        }
                        k = null;
                    })(),
                    (r = null),
                    (i = null),
                    !1
                );
            }),
            (T.handleFingerprint = function () {
                return z(), !1;
            }),
            (T.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: a, resolve: o } = e;
                return (
                    O().then((e) => {
                        let { sessionId: s } = e,
                            d = {
                                type: t,
                                fingerprint: a,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: s,
                                    event_sequence_number: ++y,
                                    ...n,
                                },
                                resolve: o,
                            },
                            c = (function (e) {
                                if (null != i) return i;
                                let t = e.fingerprint ?? u();
                                return null != t ? (0, l.d)(t) : null;
                            })(d);
                        if ((null != c && (d.properties.client_uuid = L.generate(c)), N.push(d), N.length > 1e4)) {
                            let e = N.length - 1e4;
                            (p = I(p, e)), (N = N.slice(-1e4));
                        }
                        r ? B({ shouldFlushOnNextTick: !0 }) : B({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (T.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == r && null != t && ((r = t), (i = n), B({ shouldFlushOnNextTick: !1 })), !1;
            });
        class W extends o.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != P && this.waitFor(...P);
            }
            submitEventsImmediately = G;
        }
        return new W(t, n);
    };
