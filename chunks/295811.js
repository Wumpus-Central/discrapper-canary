"use strict";
let r, i;
n.d(t, { A: () => g });
var s = n(311907),
    a = n(73153),
    o = n(758836),
    l = n(788868);
let u = [],
    c = new Map(),
    d = new Map(),
    _ = new Map(),
    f = new Map(),
    p = new Map(),
    h = new Map(),
    E = new Map();
class m extends s.Ay.Store {
    static displayName = "CollectiblesShopHomesStore";
    getLastSuccessfulFetch(e) {
        return c.get(e);
    }
    getLastErrorTimestamp(e) {
        return d.get(e);
    }
    getLastFetchOptions(e) {
        return _.get(e);
    }
    getFetchShopHomeError(e) {
        return f.get(e);
    }
    getIsFetchingShopHome(e) {
        return p.get(e);
    }
    getShopBlocks(e) {
        return E.get(e) ?? u;
    }
    getHasKnownStaleData(e) {
        return h.get(e);
    }
    getShopHomeConfigOverride() {
        return r;
    }
    getShopLayoutUrlOverride() {
        return i;
    }
}
let g = new m(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: (e) => {
        p.set(e.tab, !0),
            f.set(e.tab, void 0),
            _.set(e.tab, e.options),
            _.set(e.tab, e.options),
            d.set(e.tab, void 0),
            h.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        E.set(e.tab, e.shopHome.shopBlocks),
            c.set(e.tab, Date.now()),
            p.set(e.tab, !1),
            f.set(e.tab, void 0),
            d.set(e.tab, void 0),
            h.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: (e) => {
        E.set(e.tab, u), p.set(e.tab, !1), f.set(e.tab, e.error), d.set(e.tab, Date.now()), h.set(e.tab, !0);
    },
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: (e) => {
        r = e.shopHomeConfigOverride;
    },
    COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: (e) => {
        i = e.shopLayoutUrlOverride;
    },
    SKU_PURCHASE_SUCCESS: (e) => {
        null != e.appliedUserDiscounts &&
            e.appliedUserDiscounts.some(
                (e) => e.discount.id === l.eR || e.discount.id === l.Qz || e.discount.id === l.tU,
            ) &&
            h.set(o.G2.HOME, !0);
    },
    LOGOUT: () => {
        E.clear(), _.clear(), f.clear(), p.clear(), c.clear(), d.clear(), h.clear(), (r = void 0), (i = void 0);
    },
});
