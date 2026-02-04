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
    o = n(835245);
n(423034);
var s = n(80703),
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
    E = 1e4,
    y = 36e5,
    b = 6e4,
    O = 36e5,
    v = y,
    A = b,
    I = O,
    S = g,
    T = 0,
    C = 0,
    N = 0,
    w = 0,
    R = 0,
    P = null,
    D = 0,
    L = Number.MAX_SAFE_INTEGER,
    x = 0,
    M = 0,
    j = null,
    k = !1,
    U = null,
    G = null;

function F() {
    (C = 0), (N = 0), (w = 0), (D = 0), (L = Number.MAX_SAFE_INTEGER), (x = 0), (M = 0), (P = Date.now()), (R = T);
}

function V(e) {
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
        handleSetAnalyticsToken: () => {},
    },
    W = [],
    K = null,
    z = () =>
        Promise.resolve({
            sessionId: void 0,
        }),
    q = (e) => {
        var t;
        let {
            dispatcher: n,
            actionHandler: a,
            getFingerprint: u,
            getSessionId: _ = z,
            TRACKING_URL: y,
            drainTimeoutOverride: b,
            waitFor: O,
            scheduleWhenIdle: q = B,
            getLaunchSignature: Z = () => null,
        } = e;

        function Q(e) {
            var t;
            if (null != i) return i;
            let n = null != (t = e.fingerprint) ? t : u();
            return null != n ? (0, s.d)(n) : null;
        }

        function X() {
            return 0 !== W.length && (null != i ? null != r : null != u());
        }

        function J(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == K &&
                X() &&
                (K = t
                    ? setTimeout($, 0)
                    : q($, {
                          timeout: S,
                      }));
        }

        function $() {
            if (((K = null), !X())) return Promise.resolve();
            let e = W.slice();
            (W = []), (D = V(D));
            let t = e.length;
            (L = Math.min(L, t)), (x = Math.max(x, t)), (M = V(M, t));
            let n = ee(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null == (t = e.resolve) || t.call(e);
                        }),
                            (N = V(N));
                    },
                    (t) => {
                        W.unshift(...e), (w = V(w));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }

        function ee(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
                n = Date.now(),
                i = e.map((e) =>
                    h(p({}, e), {
                        properties: h(p({}, e.properties), {
                            client_send_timestamp: n,
                        }),
                    }),
                ),
                a = {};
            return (
                k || ((G = (0, o.A)()), (a[m] = G), (k = !0)),
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
                    rpc_failure_count: w,
                    first_seen_event_sequence_number: R,
                    last_seen_event_sequence_number: T,
                    telemetry_period_start_timestamp: P,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: C,
                    event_queue_batch_count: D,
                    event_queue_batch_min_size: L === Number.MAX_SAFE_INTEGER ? 0 : L,
                    event_queue_batch_max_size: x,
                    event_queue_batch_avg_size: D > 0 ? M / D : 0,
                    science_request_id: G,
                    science_response: U,
                    launch_signature: Z(),
                },
            };
            return F(), ee([e], d.mX.CLIENT_TELEMETRY);
        }

        function en() {
            if (null == j) return !1;
            switch (j.type) {
                case "timeout":
                    clearTimeout(j.id);
                    break;
                case "interval":
                    clearInterval(j.id);
                    break;
                default:
                    j.type;
            }
            return (j = null), !0;
        }

        function er() {
            if (null != j) return;
            let e = () => {
                let t = 0.1 * v;
                j = {
                    type: "timeout",
                    id: setTimeout(
                        () => {
                            et(), e();
                        },
                        Math.max(v + (Math.floor(Math.random() * t * 2) - t), A),
                    ),
                };
            };
            j = {
                type: "timeout",
                id: setTimeout(
                    () => {
                        et(), e();
                    },
                    Math.floor(Math.random() * (I - A) + A),
                ),
            };
        }

        function ei() {
            if (!en()) return;
        }
        (S = null != b ? b : g),
            (Y.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (r = t),
                    null != n.id && (i = n.id),
                    er(),
                    J({
                        shouldFlushOnNextTick: !1,
                    }),
                    !1
                );
            }),
            (Y.handleConnectionClosed = function () {
                return $(), ei(), (r = null), (i = null), !1;
            }),
            (Y.handleFingerprint = function () {
                return $(), !1;
            }),
            (Y.handleTrack = function (e) {
                let { event: t, properties: n, flush: r, fingerprint: i, resolve: a } = e;
                return (
                    _().then((e) => {
                        let { sessionId: o } = e,
                            s = {
                                type: t,
                                fingerprint: i,
                                properties: p(
                                    {
                                        client_track_timestamp: Date.now(),
                                        client_heartbeat_session_id: o,
                                        event_sequence_number: ++T,
                                    },
                                    n,
                                ),
                                resolve: a,
                            },
                            l = Q(s);
                        if ((null != l && (s.properties.client_uuid = H.generate(l)), W.push(s), W.length > E)) {
                            let e = W.length - E;
                            (C = V(C, e)), (W = W.slice(-E));
                        }
                        r
                            ? J({
                                  shouldFlushOnNextTick: !0,
                              })
                            : J({
                                  shouldFlushOnNextTick: !1,
                              });
                    }),
                    !1
                );
            }),
            (Y.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return (
                    null == r &&
                        null != t &&
                        ((r = t),
                        (i = n),
                        J({
                            shouldFlushOnNextTick: !1,
                        })),
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
