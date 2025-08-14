let r, i, l;
n.d(t, { Z: () => p }), n(388685);
var a,
    o,
    s = n(442837),
    c = n(570140);
function u() {
    (i = {}), (r = {}), (l = new Set());
}
u();
class d extends (a = s.ZP.Store) {
    getStatisticsForApplication(e) {
        return r[e];
    }
    shouldFetchStatisticsForApplication(e) {
        let t = i[e];
        return !l.has(e) && (null == t || Date.now() - t > 3600000);
    }
}
(o = "displayName") in d
    ? Object.defineProperty(d, o, {
          value: "ApplicationStatisticsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[o] = "ApplicationStatisticsStore");
let p = new d(c.Z, {
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
