var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140),
    c = n(331114),
    d = n(356164);
let u = [];
function h() {
    u = [];
}
class m extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.Z);
    }
    getVisibleTabs() {
        return u;
    }
}
(l = 'GlobalDiscoveryServersSearchLayoutStore'),
    (r = 'displayName') in (i = m)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new m(o.Z, {
        CONNECTION_OPEN: h,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: h,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
            let { query: t } = e,
                n = c.Z.getCounts(t);
            if (null == n) return !1;
            u = n;
        }
    }));
