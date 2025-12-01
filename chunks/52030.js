let r;
n.d(t, { Z: () => T }), n(388685);
var i,
    a = n(442837),
    o = n(570140),
    s = n(215023),
    l = n(474936);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = [],
    d = new Map(),
    f = new Map(),
    p = new Map(),
    _ = new Map(),
    m = new Map(),
    h = new Map(),
    g = new Map(),
    E = (e) => {
        m.set(e.tab, !0),
            _.set(e.tab, void 0),
            p.set(e.tab, e.options),
            p.set(e.tab, e.options),
            f.set(e.tab, void 0),
            h.set(e.tab, !1);
    },
    b = (e) => {
        g.set(e.tab, e.shopHome.shopBlocks),
            d.set(e.tab, Date.now()),
            m.set(e.tab, !1),
            _.set(e.tab, void 0),
            f.set(e.tab, void 0),
            h.set(e.tab, !1);
    },
    y = (e) => {
        g.set(e.tab, u), m.set(e.tab, !1), _.set(e.tab, e.error), f.set(e.tab, Date.now()), h.set(e.tab, !0);
    },
    O = (e) => {
        null != e.appliedUserDiscounts &&
            e.appliedUserDiscounts.some((e) => e.discount.id === l.$X || e.discount.id === l.nC) &&
            h.set(s.AW.HOME, !0);
    },
    v = () => {
        g.clear(), p.clear(), _.clear(), m.clear(), d.clear(), f.clear(), h.clear(), (r = void 0);
    },
    S = (e) => {
        r = e.shopHomeConfigOverride;
    };
class I extends (i = a.ZP.Store) {
    getLastSuccessfulFetch(e) {
        return d.get(e);
    }
    getLastErrorTimestamp(e) {
        return f.get(e);
    }
    getLastFetchOptions(e) {
        return p.get(e);
    }
    getFetchShopHomeError(e) {
        return _.get(e);
    }
    getIsFetchingShopHome(e) {
        return m.get(e);
    }
    getShopBlocks(e) {
        var t;
        return null != (t = g.get(e)) ? t : u;
    }
    getHasKnownStaleData(e) {
        return h.get(e);
    }
    getShopHomeConfigOverride() {
        return r;
    }
}
c(I, "displayName", "CollectiblesShopHomesStore");
let T = new I(o.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH: E,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: b,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: y,
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: S,
    SKU_PURCHASE_SUCCESS: O,
    LOGOUT: v,
});
