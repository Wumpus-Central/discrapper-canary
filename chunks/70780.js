n.d(t, {
    J: () => a,
    o: () => o,
});
var r = n(544891),
    i = n(570140);
function a(e) {
    return r.tn.get({
        url: "".concat("https:").concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT, "?v=").concat(e),
        rejectWithError: !1,
    });
}
function o(e, t) {
    i.Z.dispatch({
        type: "RTC_LATENCY_TEST_COMPLETE",
        latencyRankedRegions: e,
        geoRankedRegions: t,
    });
}
