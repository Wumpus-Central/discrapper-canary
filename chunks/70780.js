n.d(t, {
    J: () => a,
    o: () => s
});
var i = n(544891),
    r = n(570140);
function a() {
    var e;
    return i.tn.get({
        url: ''.concat(((e = 'https:'), 'https:')).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT),
        rejectWithError: !1
    });
}
function s(e, t) {
    r.Z.dispatch({
        type: 'RTC_LATENCY_TEST_COMPLETE',
        latencyRankedRegions: e,
        geoRankedRegions: t
    });
}
