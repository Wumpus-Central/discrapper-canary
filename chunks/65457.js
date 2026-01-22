let r;
n.d(t, { A: () => p }), n(896048);
var i = n(205693),
    a = n(827343),
    s = n(439372),
    o = n(430452),
    l = n(723702),
    c = n(855454),
    u = n(652215);
function d(e, t, n) {
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
class f extends s.A {
    constructor(...e) {
        super(...e),
            d(this, "handlePostConnectionOpen", () => {
                null == r || r(),
                    (0, l.isWeb)() ||
                        (r = c.C.subscribe({ location: "KrispExperimentManager handlePostConnectionOpen" }, (e) => {
                            var t;
                            let { enableStats: n } = e;
                            null == (t = a.A.setNoiseCancellationEnableStats) || t.call(a.A, n);
                        }));
            }),
            d(this, "handleRtcConnectionState", (e) => {
                let { state: t, context: n } = e;
                (0, l.isWeb)() ||
                    (n === i.x.DEFAULT &&
                        t !== u.S7L.DISCONNECTED &&
                        t === u.S7L.RTC_CONNECTED &&
                        o.A.getKrispEnableStats() &&
                        o.A.getNoiseCancellation() &&
                        (a.A.setNoiseCancellation(!1), a.A.setNoiseCancellation(!0)));
            }),
            d(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RTC_CONNECTION_STATE: this.handleRtcConnectionState,
            });
    }
}
let p = new f();
