"use strict";
n.d(t, { A: () => I });
var i = n(636537),
    r = n(228366),
    a = n(439372),
    s = n(626584),
    l = n(186295),
    o = n(873985),
    d = n(927813),
    c = n(723702),
    u = n(731854);
let _ = +d.A.Millis.SECOND,
    E = 30 * d.A.Millis.SECOND,
    A = new s.A("RTCLatencyTestManager");
A.enableNativeLogger(!0);
class h extends a.A {
    refetchTimeout;
    actions = { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() };
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    _handleTestRegionsResponse = (e) => {
        let t = e.map((e) => e.region);
        o.A.shouldPerformLatencyTest(t)
            ? l.Ay.getMediaEngine()
                  .rankRtcRegions(e)
                  .then((e) => {
                      A.verbose("RTC region latency test completed, ranked regions are: ", e),
                          r.h.dispatch({
                              type: "RTC_LATENCY_TEST_COMPLETE",
                              latencyRankedRegions: e,
                              geoRankedRegions: t,
                          });
                  })
                  .catch((e) => A.warn(e))
            : A.verbose(`RTC cached ranked preferred regions are ${o.A.getPreferredRegions()}`);
    };
    _fetchAndScheduleRefetch = () => {
        var e;
        ((e = l.Ay.supports(u.O5.PORT_AWARE_LATENCY_TESTING) ? 2 : 1),
        i.Bo.get({ url: `https:${window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT}?v=${e}`, rejectWithError: (0, i.fT)() }))
            .then((e) => this._handleTestRegionsResponse(e.body))
            .catch((e) => A.warn(e)),
            (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * d.A.Millis.MINUTE));
    };
    _handleConnectionOpen = () => {
        if (c.isPlatformEmbedded && !__OVERLAY__) {
            let e = Math.floor(_ + Math.random() * E);
            null != this.refetchTimeout && clearTimeout(this.refetchTimeout),
                (this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e));
        }
    };
}
let I = new h();
