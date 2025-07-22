let r;
(n.d(t, { Z: () => O }), n(388685));
var i,
    a = n(442837),
    o = n(570140);
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
    _ = new Map(),
    f = new Map(),
    p = new Map(),
    h = (e) => {
        (f.set(e.tab, !0), _.set(e.tab, void 0), d.set(e.tab, e.options), d.set(e.tab, e.options), u.set(e.tab, void 0));
    },
    m = (e) => {
        (p.set(e.tab, e.shopHome.shopBlocks), c.set(e.tab, Date.now()), f.set(e.tab, !1), _.set(e.tab, void 0), u.set(e.tab, void 0));
    },
    g = (e) => {
        (p.set(e.tab, l), f.set(e.tab, !1), _.set(e.tab, e.error), u.set(e.tab, Date.now()));
    },
    E = () => {
        (p.clear(), d.clear(), _.clear(), f.clear(), c.clear(), u.clear(), (r = void 0));
    },
    b = (e) => {
        r = e.shopHomeConfigOverride;
    };
class y extends (i = a.ZP.Store) {
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
        return _.get(e);
    }
    getIsFetchingShopHome(e) {
        return f.get(e);
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
let O = new y(o.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH: h,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: m,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: g,
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: b,
    LOGOUT: E
});
