"use strict";
n.d(t, { A: () => f });
var i = n(636537),
    r = n(228366),
    s = n(439372),
    a = n(626584),
    o = n(969341),
    l = n(873985),
    d = n(927813),
    _ = n(723702),
    u = n(731854);
let c = +d.A.Millis.SECOND,
    E = 30 * d.A.Millis.SECOND,
    h = new a.A("RTCLatencyTestManager");
h.enableNativeLogger(!0);
class m extends s.A {
    refetchTimeout;
    actions = { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() };
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    _handleTestRegionsResponse = (e) => {
        let t = e.map((e) => e.region);
        l.A.shouldPerformLatencyTest(t)
            ? o.Ay.getMediaEngine()
                  .rankRtcRegions(e)
                  .then((e) => {
                      h.verbose("RTC region latency test completed, ranked regions are: ", e),
                          r.h.dispatch({
                              type: "RTC_LATENCY_TEST_COMPLETE",
                              latencyRankedRegions: e,
                              geoRankedRegions: t,
                          });
                  })
                  .catch((e) => h.warn(e))
            : h.verbose(`RTC cached ranked preferred regions are ${l.A.getPreferredRegions()}`);
    };
    _fetchAndScheduleRefetch = () => {
        var e;
        ((e = o.Ay.supports(u.O5.PORT_AWARE_LATENCY_TESTING) ? 2 : 1),
        i.Bo.get({ url: `https:${window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT}?v=${e}`, rejectWithError: !1 }))
            .then((e) => this._handleTestRegionsResponse(e.body))
            .catch((e) => h.warn(e)),
            (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * d.A.Millis.MINUTE));
    };
    _handleConnectionOpen = () => {
        if (_.isPlatformEmbedded && !__OVERLAY__) {
            let e = Math.floor(c + Math.random() * E);
            null != this.refetchTimeout && clearTimeout(this.refetchTimeout),
                (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
        }
    };
}
let f = new m();
