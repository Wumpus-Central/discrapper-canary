n.d(t, { Z: () => p });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(331114),
    s = n(356164);
let c = [];
function u() {
    c = [];
}
class d extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, s.Z);
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
let p = new d(a.Z, {
    CONNECTION_OPEN: u,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: u,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = o.Z.getCounts(t);
        if (null == n) return !1;
        c = n;
    },
});
