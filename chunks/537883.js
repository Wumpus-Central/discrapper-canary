n.d(t, { Z: () => h });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(331114),
    c = n(356164);
let u = [];
function d() {
    u = [];
}
class p extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, c.Z);
    }
    getVisibleTabs() {
        return u;
    }
}
(i = 'GlobalDiscoveryServersSearchLayoutStore'),
    (r = 'displayName') in p
        ? Object.defineProperty(p, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[r] = i);
let h = new p(o.Z, {
    CONNECTION_OPEN: d,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: d,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = s.Z.getCounts(t);
        if (null == n) return !1;
        u = n;
    }
});
