"use strict";
n.d(t, { A: () => h });
var r = n(197094),
    i = n(439372),
    s = n(626584),
    a = n(430452),
    o = n(873985),
    l = n(927813),
    u = n(723702),
    c = n(731854);
let d = +l.A.Millis.SECOND,
    _ = 30 * l.A.Millis.SECOND,
    f = new s.A("RTCLatencyTestManager");
f.enableNativeLogger(!0);
class p extends i.A {
    refetchTimeout;
    actions = { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() };
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    _handleTestRegionsResponse = (e) => {
        let t = e.map((e) => e.region);
        o.A.shouldPerformLatencyTest(t)
            ? a.Ay.getMediaEngine()
                  .rankRtcRegions(e)
                  .then((e) => {
                      f.verbose("RTC region latency test completed, ranked regions are: ", e), (0, r.b)(e, t);
                  })
                  .catch((e) => f.warn(e))
            : f.verbose(`RTC cached ranked preferred regions are ${o.A.getPreferredRegions()}`);
    };
    _fetchAndScheduleRefetch = () => {
        let e = a.Ay.supports(c.O5.PORT_AWARE_LATENCY_TESTING) ? 2 : 1;
        (0, r.B)(e)
            .then((e) => this._handleTestRegionsResponse(e.body))
            .catch((e) => f.warn(e)),
            (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * l.A.Millis.MINUTE));
    };
    _handleConnectionOpen = () => {
        if (u.isPlatformEmbedded && !__OVERLAY__) {
            let e = Math.floor(d + Math.random() * _);
            null != this.refetchTimeout && clearTimeout(this.refetchTimeout),
                (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
        }
    };
}
let h = new p();
