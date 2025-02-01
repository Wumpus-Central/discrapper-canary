n.d(t, { Z: () => m }), n(47120);
var i = n(70780),
    r = n(147913),
    a = n(710845),
    s = n(131951),
    o = n(936349),
    l = n(70956),
    u = n(358085);
function c(e, t, n) {
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
let d = 1 * l.Z.Millis.SECOND,
    f = 30 * l.Z.Millis.SECOND,
    _ = 360,
    p = new a.Z('RTCLatencyTestManager');
p.enableNativeLogger(!0);
class h extends r.Z {
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    constructor(...e) {
        super(...e),
            c(this, 'refetchTimeout', void 0),
            c(this, 'actions', { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() }),
            c(this, '_handleTestRegionsResponse', (e) => {
                let t = e.map((e) => e.region);
                o.Z.shouldPerformLatencyTest(t)
                    ? s.Z.getMediaEngine()
                          .rankRtcRegions(e)
                          .then((e) => {
                              p.verbose('RTC region latency test completed, ranked regions are: ', e), (0, i.o)(e, t);
                          })
                          .catch((e) => p.warn(e))
                    : p.verbose('RTC cached ranked preferred regions are '.concat(o.Z.getPreferredRegions()));
            }),
            c(this, '_fetchAndScheduleRefetch', () => {
                (0, i.J)()
                    .then((e) => this._handleTestRegionsResponse(e.body))
                    .catch((e) => p.warn(e)),
                    (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, _ * l.Z.Millis.MINUTE));
            }),
            c(this, '_handleConnectionOpen', () => {
                if (u.isPlatformEmbedded && !__OVERLAY__) {
                    let e = Math.floor(d + Math.random() * f);
                    null != this.refetchTimeout && clearTimeout(this.refetchTimeout), (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
                }
            });
    }
}
let m = new h();
