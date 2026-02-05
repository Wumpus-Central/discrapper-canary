let i, r, a;
n.d(t, { A: () => c });
var l = n(311907),
    s = n(73153);
function o() {
    (r = {}), (i = {}), (a = new Set());
}
o();
class d extends l.Ay.Store {
    static displayName = "ApplicationStatisticsStore";
    getStatisticsForApplication(e) {
        return i[e];
    }
    shouldFetchStatisticsForApplication(e) {
        let t = r[e];
        return !a.has(e) && (null == t || Date.now() - t > 36e5);
    }
}
let c = new d(s.h, {
    APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function (e) {
        let { applicationId: t } = e;
        a.add(t);
    },
    APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function (e) {
        let { applicationId: t } = e;
        a.delete(t);
    },
    APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
        let { statistics: t, applicationId: n } = e;
        (r[n] = Date.now()), a.delete(n), (i[n] = t);
    },
    LOGOUT: o,
});
