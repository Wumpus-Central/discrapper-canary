"use strict";
n.d(t, { B: () => a, b: () => s });
var r = n(562465),
    i = n(73153);
function a(e) {
    return r.Bo.get({ url: `https:${window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT}?v=${e}`, rejectWithError: !1 });
}
function s(e, t) {
    i.h.dispatch({ type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions: e, geoRankedRegions: t });
}
