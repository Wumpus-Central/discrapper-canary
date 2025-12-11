n.d(t, { Z: () => g }), n(388685);
var r = n(70780),
    i = n(147913),
    a = n(710845),
    o = n(131951),
    s = n(936349),
    l = n(70956),
    c = n(358085),
    u = n(65154);
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
let f = +l.Z.Millis.SECOND,
    p = 30 * l.Z.Millis.SECOND,
    _ = 360,
    m = new a.Z("RTCLatencyTestManager");
m.enableNativeLogger(!0);
class h extends i.Z {
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    constructor(...e) {
        super(...e),
            d(this, "refetchTimeout", void 0),
            d(this, "actions", { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() }),
            d(this, "_handleTestRegionsResponse", (e) => {
                let t = e.map((e) => e.region);
                s.Z.shouldPerformLatencyTest(t)
                    ? o.Z.getMediaEngine()
                          .rankRtcRegions(e)
                          .then((e) => {
                              m.verbose("RTC region latency test completed, ranked regions are: ", e), (0, r.o)(e, t);
                          })
                          .catch((e) => m.warn(e))
                    : m.verbose("RTC cached ranked preferred regions are ".concat(s.Z.getPreferredRegions()));
            }),
            d(this, "_fetchAndScheduleRefetch", () => {
                let e = o.Z.supports(u.AN.PORT_AWARE_LATENCY_TESTING) ? 2 : 1;
                (0, r.J)(e)
                    .then((e) => this._handleTestRegionsResponse(e.body))
                    .catch((e) => m.warn(e)),
                    (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, _ * l.Z.Millis.MINUTE));
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
let g = new h();
