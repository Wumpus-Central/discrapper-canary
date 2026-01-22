let r, i, l;
n.d(t, { A: () => p }), n(896048);
var a,
    s,
    o = n(311907),
    c = n(73153);
function u() {
    (i = {}), (r = {}), (l = new Set());
}
u();
class d extends (a = o.Ay.Store) {
    getStatisticsForApplication(e) {
        return r[e];
    }
    shouldFetchStatisticsForApplication(e) {
        let t = i[e];
        return !l.has(e) && (null == t || Date.now() - t > 3600000);
    }
}
(s = "displayName") in d
    ? Object.defineProperty(d, s, {
          value: "ApplicationStatisticsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[s] = "ApplicationStatisticsStore");
let p = new d(c.h, {
    APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function (e) {
        let { applicationId: t } = e;
        l.add(t);
    },
    APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function (e) {
        let { applicationId: t } = e;
        l.delete(t);
    },
    APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
        let { statistics: t, applicationId: n } = e;
        (i[n] = Date.now()), l.delete(n), (r[n] = t);
    },
    LOGOUT: u,
});
