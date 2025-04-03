let r, i, l;
n.d(t, { Z: () => h }), n(47120);
var a,
    o,
    s,
    c = n(442837),
    u = n(570140);
function d() {
    (i = {}), (r = {}), (l = new Set());
}
d();
class p extends (a = c.ZP.Store) {
    getStatisticsForApplication(e) {
        return r[e];
    }
    shouldFetchStatisticsForApplication(e) {
        let t = i[e];
        return !l.has(e) && (null == t || Date.now() - t > 3600000);
    }
}
(s = 'ApplicationStatisticsStore'),
    (o = 'displayName') in p
        ? Object.defineProperty(p, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[o] = s);
let h = new p(u.Z, {
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
    LOGOUT: d
});
