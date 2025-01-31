let i, r, a;
n.d(t, {
    X: () => g,
    l: () => y
}),
    n(177593),
    n(733860),
    n(47120),
    n(653041),
    n(17089);
var s,
    o = n(756647),
    l = n(442837),
    u = n(544891),
    c = n(761609);
function d(e, t, n) {
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
let f = 1500,
    _ = 10000,
    p = 1500,
    h = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : (e) => setImmediate(() => e()),
    m = new c.R(),
    g = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    E = [],
    v = () => Promise.resolve({ sessionId: void 0 }),
    y = (e) => {
        var t;
        let { dispatcher: n, actionHandler: s, getFingerprint: c, getSessionId: y = v, TRACKING_URL: I, drainTimeoutOverride: b, waitFor: T } = e;
        function S(e) {
            if (null != r) return r;
            let t = e.fingerprint || c();
            return null != t ? (0, o.s)(t) : null;
        }
        function A() {
            return 0 !== E.length && (null != r ? null != i : null != c());
        }
        function N() {
            null == a && A() && (a = h(C, { timeout: p }));
        }
        function C() {
            if (((a = null), !A())) return;
            let e = E.slice();
            (E = []),
                R(e).then(
                    () => {
                        e.forEach((e) => {
                            var t;
                            null === (t = e.resolve) || void 0 === t || t.call(e);
                        });
                    },
                    (t) => {
                        E.unshift(...e);
                        let { message: n } = t.body || t;
                        console.warn('[AnalyticsTrackingStore] Track:', n);
                    }
                );
        }
        function R(e) {
            let t = Date.now(),
                n = e.map((e) => ({
                    ...e,
                    properties: {
                        ...e.properties,
                        client_send_timestamp: t
                    }
                }));
            return u.tn.post({
                url: I,
                body: {
                    token: i,
                    events: n
                },
                retries: 3,
                rejectWithError: !1
            });
        }
        (p = null != b ? b : f),
            (g.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return null != t && (i = t), null != n.id && (r = n.id), N(), !1;
            }),
            (g.handleConnectionClosed = function () {
                return C(), (i = null), (r = null), !1;
            }),
            (g.handleFingerprint = function () {
                return C(), !1;
            }),
            (g.handleTrack = function (e) {
                let { event: t, properties: n, flush: i, fingerprint: r, resolve: a } = e;
                return (
                    y().then((e) => {
                        let { sessionId: s } = e,
                            o = {
                                type: t,
                                fingerprint: r,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: s,
                                    ...n
                                },
                                resolve: a
                            },
                            l = S(o);
                        null != l && (o.properties.client_uuid = m.generate(l)), E.push(o), E.length > _ && (E = E.slice(-_)), i ? C() : N();
                    }),
                    !1
                );
            });
        class O extends (t = l.ZP.Store) {
            initialize() {
                null != T && this.waitFor(...T);
            }
            constructor(...e) {
                super(...e), d(this, 'submitEventsImmediately', R);
            }
        }
        return d(O, 'displayName', 'AnalyticsTrackingStore'), new O(n, s);
    };
