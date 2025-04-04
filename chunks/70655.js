n.d(t, { Z: () => m }), n(47120);
var r = n(70780),
    i = n(147913),
    o = n(710845),
    a = n(131951),
    s = n(936349),
    l = n(70956),
    c = n(358085);
function u(e, t, n) {
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
let d = +l.Z.Millis.SECOND,
    f = 30 * l.Z.Millis.SECOND,
    _ = 360,
    p = new o.Z('RTCLatencyTestManager');
p.enableNativeLogger(!0);
class h extends i.Z {
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    constructor(...e) {
        super(...e),
            u(this, 'refetchTimeout', void 0),
            u(this, 'actions', { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() }),
            u(this, '_handleTestRegionsResponse', (e) => {
                let t = e.map((e) => e.region);
                s.Z.shouldPerformLatencyTest(t)
                    ? a.Z.getMediaEngine()
                          .rankRtcRegions(e)
                          .then((e) => {
                              p.verbose('RTC region latency test completed, ranked regions are: ', e), (0, r.o)(e, t);
                          })
                          .catch((e) => p.warn(e))
                    : p.verbose('RTC cached ranked preferred regions are '.concat(s.Z.getPreferredRegions()));
            }),
            u(this, '_fetchAndScheduleRefetch', () => {
                (0, r.J)()
                    .then((e) => this._handleTestRegionsResponse(e.body))
                    .catch((e) => p.warn(e)),
                    (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, _ * l.Z.Millis.MINUTE));
            }),
            u(this, '_handleConnectionOpen', () => {
                if (c.isPlatformEmbedded && !__OVERLAY__) {
                    let e = Math.floor(d + Math.random() * f);
                    null != this.refetchTimeout && clearTimeout(this.refetchTimeout), (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
                }
            });
    }
}
let m = new h();
