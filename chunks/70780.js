r.d(n, {
    J: function () {
        return o;
    },
    o: function () {
        return s;
    }
});
var i = r(544891),
    a = r(570140);
function o() {
    var e;
    return i.tn.get({
        url: ''.concat(((e = 'https:'), 'https:')).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT),
        rejectWithError: !1
    });
}
function s(e, n) {
    a.Z.dispatch({
        type: 'RTC_LATENCY_TEST_COMPLETE',
        latencyRankedRegions: e,
        geoRankedRegions: n
    });
}
