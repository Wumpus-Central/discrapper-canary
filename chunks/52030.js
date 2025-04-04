let r;
n.d(t, { Z: () => v }), n(47120);
var i,
    o = n(442837),
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
let l = [],
    c = new Map(),
    u = new Map(),
    d = new Map(),
    f = new Map(),
    _ = new Map(),
    p = new Map(),
    h = (e) => {
        _.set(e.tab, !0), f.set(e.tab, void 0), d.set(e.tab, e.options), d.set(e.tab, e.options), u.set(e.tab, void 0);
    },
    m = (e) => {
        p.set(e.tab, e.shopHome.shopBlocks), c.set(e.tab, Date.now()), _.set(e.tab, !1), f.set(e.tab, void 0), u.set(e.tab, void 0);
    },
    g = (e) => {
        p.set(e.tab, l), _.set(e.tab, !1), f.set(e.tab, e.error), u.set(e.tab, Date.now());
    },
    E = () => {
        p.clear(), d.clear(), f.clear(), _.clear(), c.clear(), u.clear(), (r = void 0);
    },
    b = (e) => {
        r = e.shopHomeConfigOverride;
    };
class y extends (i = o.ZP.Store) {
    getLastSuccessfulFetch(e) {
        return c.get(e);
    }
    getLastErrorTimestamp(e) {
        return u.get(e);
    }
    getLastFetchOptions(e) {
        return d.get(e);
    }
    getFetchShopHomeError(e) {
        return f.get(e);
    }
    getIsFetchingShopHome(e) {
        return _.get(e);
    }
    getShopBlocks(e) {
        var t;
        return null != (t = p.get(e)) ? t : l;
    }
    getShopHomeConfigOverride() {
        return r;
    }
}
s(y, 'displayName', 'CollectiblesShopHomesStore');
let v = new y(a.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH: h,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: m,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: g,
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: b,
    LOGOUT: E
});
