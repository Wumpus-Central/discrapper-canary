n.d(t, { A: () => p });
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(823448),
    o = n(351022);
let c = [];
function u() {
    c = [];
}
class d extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(s.A, o.A);
    }
    getVisibleTabs() {
        return c;
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "GlobalDiscoveryServersSearchLayoutStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "GlobalDiscoveryServersSearchLayoutStore");
let p = new d(a.h, {
    CONNECTION_OPEN: u,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: u,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = s.A.getCounts(t);
        if (null == n) return !1;
        c = n;
    },
});
