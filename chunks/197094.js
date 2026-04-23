"use strict";
n.d(t, { B: () => s, b: () => a });
var r = n(562465),
    i = n(73153);
function s(e) {
    return r.Bo.get({ url: `https:${window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT}?v=${e}`, rejectWithError: !1 });
}
function a(e, t) {
    i.h.dispatch({ type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions: e, geoRankedRegions: t });
}
