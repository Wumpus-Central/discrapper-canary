let r;
n.d(t, {
    A: () => I,
}),
    n(896048);
var i,
    a = n(311907),
    s = n(73153),
    o = n(758836),
    l = n(788868);

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
    h = new Map(),
    m = new Map(),
    g = new Map(),
    E = (e) => {
        h.set(e.tab, !0),
            _.set(e.tab, void 0),
            p.set(e.tab, e.options),
            p.set(e.tab, e.options),
            f.set(e.tab, void 0),
            m.set(e.tab, !1);
    },
    b = (e) => {
        g.set(e.tab, e.shopHome.shopBlocks),
            d.set(e.tab, Date.now()),
            h.set(e.tab, !1),
            _.set(e.tab, void 0),
            f.set(e.tab, void 0),
            m.set(e.tab, !1);
    },
    y = (e) => {
        g.set(e.tab, u), h.set(e.tab, !1), _.set(e.tab, e.error), f.set(e.tab, Date.now()), m.set(e.tab, !0);
    },
    O = (e) => {
        null != e.appliedUserDiscounts &&
            e.appliedUserDiscounts.some(
                (e) => e.discount.id === l.eR || e.discount.id === l.Qz || e.discount.id === l.tU,
            ) &&
            m.set(o.G2.HOME, !0);
    },
    A = () => {
        g.clear(), p.clear(), _.clear(), h.clear(), d.clear(), f.clear(), m.clear(), (r = void 0);
    },
    v = (e) => {
        r = e.shopHomeConfigOverride;
    };
class S extends (i = a.Ay.Store) {
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
        return h.get(e);
    }
    getShopBlocks(e) {
        var t;
        return null != (t = g.get(e)) ? t : u;
    }
    getHasKnownStaleData(e) {
        return m.get(e);
    }
    getShopHomeConfigOverride() {
        return r;
    }
}
c(S, "displayName", "CollectiblesShopHomesStore");
let I = new S(s.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: E,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: b,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: y,
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: v,
    SKU_PURCHASE_SUCCESS: O,
    LOGOUT: A,
});
