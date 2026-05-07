"use strict";
n.d(t, { A: () => E });
var i = n(636537),
    r = n(228366),
    s = n(439372),
    a = n(626584),
    o = n(235058),
    l = n(873985),
    u = n(927813),
    c = n(723702),
    d = n(731854);
let _ = +u.A.Millis.SECOND,
    f = 30 * u.A.Millis.SECOND,
    h = new a.A("RTCLatencyTestManager");
h.enableNativeLogger(!0);
class p extends s.A {
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
        ((e = o.Ay.supports(d.O5.PORT_AWARE_LATENCY_TESTING) ? 2 : 1),
        i.Bo.get({ url: `https:${window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT}?v=${e}`, rejectWithError: !1 }))
            .then((e) => this._handleTestRegionsResponse(e.body))
            .catch((e) => h.warn(e)),
            (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * u.A.Millis.MINUTE));
    };
    _handleConnectionOpen = () => {
        if (c.isPlatformEmbedded && !__OVERLAY__) {
            let e = Math.floor(_ + Math.random() * f);
            null != this.refetchTimeout && clearTimeout(this.refetchTimeout),
                (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
        }
    };
}
let E = new p();
