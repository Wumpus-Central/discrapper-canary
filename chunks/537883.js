n.d(t, { Z: () => m });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(331114),
    c = n(356164);
let d = [];
function u() {
    d = [];
}
class h extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, c.Z);
    }
    getVisibleTabs() {
        return d;
    }
}
(l = 'GlobalDiscoveryServersSearchLayoutStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = l);
let m = new h(s.Z, {
    CONNECTION_OPEN: u,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: u,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = o.Z.getCounts(t);
        if (null == n) return !1;
        d = n;
    }
});
