n.d(t, {
    J: () => o,
    o: () => a
});
var r = n(544891),
    i = n(570140);
function o() {
    var e;
    return r.tn.get({
        url: ''.concat(((e = 'https:'), 'https:')).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT),
        rejectWithError: !1
    });
}
function a(e, t) {
    i.Z.dispatch({
        type: 'RTC_LATENCY_TEST_COMPLETE',
        latencyRankedRegions: e,
        geoRankedRegions: t
    });
}
