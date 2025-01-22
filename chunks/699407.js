let i, a, o;
r.d(n, {
    X: function () {
        return I;
    },
    l: function () {
        return A;
    }
});
var s,
    l = r(177593);
var u = r(733860);
var c = r(47120);
var d = r(653041);
var f = r(756647),
    p = r(442837),
    h = r(544891),
    _ = r(761609);
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
    y = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : (e) => setImmediate(() => e()),
    b = new _.R(),
    I = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {}
    },
    T = [],
    S = () => Promise.resolve({ sessionId: void 0 }),
    A = (e) => {
        var n;
        let { dispatcher: r, actionHandler: s, getFingerprint: l, getSessionId: u = S, TRACKING_URL: c, drainTimeoutOverride: d, waitFor: _ } = e;
        function A(e) {
            if (null != a) return a;
            let n = e.fingerprint || l();
            return null != n ? (0, f.s)(n) : null;
        }
        function C() {
            return 0 !== T.length && (null != a ? null != i : null != l());
        }
        function N() {
            null == o && C() && (o = y(R, { timeout: v }));
        }
        function R() {
            if (((o = null), !C())) return;
            let e = T.slice();
            (T = []),
                O(e).then(
                    () => {
                        e.forEach((e) => {
                            var n;
                            null === (n = e.resolve) || void 0 === n || n.call(e);
                        });
                    },
                    (n) => {
                        T.unshift(...e);
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
            (I.handleConnectionOpen = function (e) {
                let { analyticsToken: n, user: r } = e;
                return null != n && (i = n), null != r.id && (a = r.id), N(), !1;
            }),
            (I.handleConnectionClosed = function () {
                return R(), (i = null), (a = null), !1;
            }),
            (I.handleFingerprint = function () {
                return R(), !1;
            }),
            (I.handleTrack = function (e) {
                let { event: n, properties: r, flush: i, fingerprint: a, resolve: o } = e;
                return (
                    u().then((e) => {
                        let { sessionId: s } = e,
                            l = {
                                type: n,
                                fingerprint: a,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: s,
                                    ...r
                                },
                                resolve: o
                            },
                            u = A(l);
                        null != u && (l.properties.client_uuid = b.generate(u)), T.push(l);
                        T.length > E && (T = T.slice(-E)), i ? R() : N();
                    }),
                    !1
                );
            });
        class D extends (n = p.ZP.Store) {
            initialize() {
                null != _ && this.waitFor(..._);
            }
            constructor(...e) {
                super(...e), m(this, 'submitEventsImmediately', O);
            }
        }
        return m(D, 'displayName', 'AnalyticsTrackingStore'), new D(r, s);
    };
