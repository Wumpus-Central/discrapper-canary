n.d(t, { A: () => g }), n(896048);
var r = n(197094),
    i = n(439372),
    a = n(626584),
    s = n(430452),
    o = n(873985),
    l = n(927813),
    c = n(723702),
    u = n(731854);
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
let f = +l.A.Millis.SECOND,
    p = 30 * l.A.Millis.SECOND,
    _ = 360,
    h = new a.A("RTCLatencyTestManager");
h.enableNativeLogger(!0);
class m extends i.A {
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    constructor(...e) {
        super(...e),
            d(this, "refetchTimeout", void 0),
            d(this, "actions", { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() }),
            d(this, "_handleTestRegionsResponse", (e) => {
                let t = e.map((e) => e.region);
                o.A.shouldPerformLatencyTest(t)
                    ? s.A.getMediaEngine()
                          .rankRtcRegions(e)
                          .then((e) => {
                              h.verbose("RTC region latency test completed, ranked regions are: ", e), (0, r.b)(e, t);
                          })
                          .catch((e) => h.warn(e))
                    : h.verbose("RTC cached ranked preferred regions are ".concat(o.A.getPreferredRegions()));
            }),
            d(this, "_fetchAndScheduleRefetch", () => {
                let e = s.A.supports(u.O5.PORT_AWARE_LATENCY_TESTING) ? 2 : 1;
                (0, r.B)(e)
                    .then((e) => this._handleTestRegionsResponse(e.body))
                    .catch((e) => h.warn(e)),
                    (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, _ * l.A.Millis.MINUTE));
            }),
            d(this, "_handleConnectionOpen", () => {
                if (c.isPlatformEmbedded && !__OVERLAY__) {
                    let e = Math.floor(f + Math.random() * p);
                    null != this.refetchTimeout && clearTimeout(this.refetchTimeout),
                        (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
                }
            });
    }
}
let g = new m();
