let i, a, s;
r.d(n, {
    X: function () {
        return b;
    },
    l: function () {
        return A;
    }
});
var o,
    l = r(177593);
var u = r(733860);
var c = r(47120);
var d = r(653041);
var f = r(756647),
    _ = r(442837),
    h = r(544891),
    p = r(761609);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = 1500,
    E = 10000,
    v = 1500,
    I = null !== (o = window.requestIdleCallback) && void 0 !== o ? o : (e) => setImmediate(() => e()),
    T = new p.R(),
    b = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    y = [],
    S = () => Promise.resolve({ sessionId: void 0 }),
    A = (e) => {
        var n;
        let { dispatcher: r, actionHandler: o, getFingerprint: l, getSessionId: u = S, TRACKING_URL: c, drainTimeoutOverride: d, waitFor: p } = e;
        function A(e) {
            if (null != a) return a;
            let n = e.fingerprint || l();
            return null != n ? (0, f.s)(n) : null;
        }
        function N() {
            return 0 !== y.length && (null != a ? null != i : null != l());
        }
        function C() {
            null == s && N() && (s = I(R, { timeout: v }));
        }
        function R() {
            if (((s = null), !N())) return;
            let e = y.slice();
            (y = []),
                O(e).then(
                    () => {
                        e.forEach((e) => {
                            var n;
                            null === (n = e.resolve) || void 0 === n || n.call(e);
                        });
                    },
                    (n) => {
                        y.unshift(...e);
                        let { message: r } = n.body || n;
                        console.warn('[AnalyticsTrackingStore] Track:', r);
                    }
                );
        }
        function O(e) {
            let n = Date.now(),
                r = e.map((e) => ({
                    ...e,
                    properties: {
                        ...e.properties,
                        client_send_timestamp: n
                    }
                }));
            return h.tn.post({
                url: c,
                body: {
                    token: i,
                    events: r
                },
                retries: 3,
                rejectWithError: !1
            });
        }
        (v = null != d ? d : g),
            (b.handleConnectionOpen = function (e) {
                let { analyticsToken: n, user: r } = e;
                return null != n && (i = n), null != r.id && (a = r.id), C(), !1;
            }),
            (b.handleConnectionClosed = function () {
                return R(), (i = null), (a = null), !1;
            }),
            (b.handleFingerprint = function () {
                return R(), !1;
            }),
            (b.handleTrack = function (e) {
                let { event: n, properties: r, flush: i, fingerprint: a, resolve: s } = e;
                return (
                    u().then((e) => {
                        let { sessionId: o } = e,
                            l = {
                                type: n,
                                fingerprint: a,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: o,
                                    ...r
                                },
                                resolve: s
                            },
                            u = A(l);
                        null != u && (l.properties.client_uuid = T.generate(u)), y.push(l);
                        y.length > E && (y = y.slice(-E)), i ? R() : C();
                    }),
                    !1
                );
            });
        class D extends (n = _.ZP.Store) {
            initialize() {
                null != p && this.waitFor(...p);
            }
            constructor(...e) {
                super(...e), m(this, 'submitEventsImmediately', O);
            }
        }
        return m(D, 'displayName', 'AnalyticsTrackingStore'), new D(r, o);
    };
