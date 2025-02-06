n.d(t, { Z: () => v }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = [],
    l = new Map(),
    u = new Map(),
    c = new Map(),
    d = new Map(),
    f = new Map(),
    _ = new Map(),
    p = (e) => {
        f.set(e.tab, !0), d.set(e.tab, void 0), c.set(e.tab, e.options), c.set(e.tab, e.options), u.set(e.tab, void 0);
    },
    h = (e) => {
        _.set(e.tab, e.shopHome.shopBlocks), l.set(e.tab, Date.now()), f.set(e.tab, !1), d.set(e.tab, void 0), u.set(e.tab, void 0);
    },
    m = (e) => {
        _.set(e.tab, o), f.set(e.tab, !1), d.set(e.tab, e.error), u.set(e.tab, Date.now());
    },
    g = () => {
        _.clear(), c.clear(), d.clear(), f.clear(), l.clear(), u.clear();
    };
class E extends (i = r.ZP.Store) {
    getLastSuccessfulFetch(e) {
        return l.get(e);
    }
    getLastErrorTimestamp(e) {
        return u.get(e);
    }
    getLastFetchOptions(e) {
        return c.get(e);
    }
    getFetchShopHomeError(e) {
        return d.get(e);
    }
    getIsFetchingShopHome(e) {
        return f.get(e);
    }
    getShopBlocks(e) {
        var t;
        return null !== (t = _.get(e)) && void 0 !== t ? t : o;
    }
}
s(E, 'displayName', 'CollectiblesShopHomesStore');
let v = new E(a.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH: p,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: h,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: m,
    LOGOUT: g
});
