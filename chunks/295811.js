"use strict";
let r;
n.d(t, { A: () => S });
var i = n(311907),
    a = n(73153),
    s = n(758836),
    o = n(788868);
let l = [],
    u = new Map(),
    c = new Map(),
    d = new Map(),
    _ = new Map(),
    f = new Map(),
    p = new Map(),
    h = new Map(),
    m = (e) => {
        f.set(e.tab, !0),
            _.set(e.tab, void 0),
            d.set(e.tab, e.options),
            d.set(e.tab, e.options),
            c.set(e.tab, void 0),
            p.set(e.tab, !1);
    },
    g = (e) => {
        h.set(e.tab, e.shopHome.shopBlocks),
            u.set(e.tab, Date.now()),
            f.set(e.tab, !1),
            _.set(e.tab, void 0),
            c.set(e.tab, void 0),
            p.set(e.tab, !1);
    },
    E = (e) => {
        h.set(e.tab, l), f.set(e.tab, !1), _.set(e.tab, e.error), c.set(e.tab, Date.now()), p.set(e.tab, !0);
    },
    A = (e) => {
        null != e.appliedUserDiscounts &&
            e.appliedUserDiscounts.some(
                (e) => e.discount.id === o.eR || e.discount.id === o.Qz || e.discount.id === o.tU,
            ) &&
            p.set(s.G2.HOME, !0);
    },
    I = () => {
        h.clear(), d.clear(), _.clear(), f.clear(), u.clear(), c.clear(), p.clear(), (r = void 0);
    },
    T = (e) => {
        r = e.shopHomeConfigOverride;
    };
class y extends i.Ay.Store {
    static displayName = "CollectiblesShopHomesStore";
    getLastSuccessfulFetch(e) {
        return u.get(e);
    }
    getLastErrorTimestamp(e) {
        return c.get(e);
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
        return h.get(e) ?? l;
    }
    getHasKnownStaleData(e) {
        return p.get(e);
    }
    getShopHomeConfigOverride() {
        return r;
    }
}
let S = new y(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: m,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: g,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: E,
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: T,
    SKU_PURCHASE_SUCCESS: A,
    LOGOUT: I,
});
