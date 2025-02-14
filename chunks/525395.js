let i, l, r;
n.d(t, { Z: () => m }), n(47120);
var a,
    s,
    o,
    d = n(442837),
    c = n(570140);
function u() {
    (l = {}), (i = {}), (r = new Set());
}
u();
class h extends (a = d.ZP.Store) {
    getStatisticsForApplication(e) {
        return i[e];
    }
    shouldFetchStatisticsForApplication(e) {
        let t = l[e];
        return !r.has(e) && (null == t || Date.now() - t > 3600000);
    }
}
(o = 'ApplicationStatisticsStore'),
    (s = 'displayName') in h
        ? Object.defineProperty(h, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[s] = o);
let m = new h(c.Z, {
    APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function (e) {
        let { applicationId: t } = e;
        r.add(t);
    },
    APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function (e) {
        let { applicationId: t } = e;
        r.delete(t);
    },
    APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
        let { statistics: t, applicationId: n } = e;
        (l[n] = Date.now()), r.delete(n), (i[n] = t);
    },
    LOGOUT: u
});
