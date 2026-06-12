"use strict";
let i, r;
n.d(t, { A: () => g });
var s = n(17928),
    a = n(228366),
    o = n(758836),
    l = n(788868);
let u = [],
    c = new Map(),
    d = new Map(),
    _ = new Map(),
    h = new Map(),
    f = new Map(),
    p = new Map(),
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
        return h.get(e);
    }
    getIsFetchingShopHome(e) {
        return f.get(e);
    }
    getShopBlocks(e) {
        return E.get(e) ?? u;
    }
    getHasKnownStaleData(e) {
        return p.get(e);
    }
    getShopHomeConfigOverride() {
        return i;
    }
    getShopLayoutUrlOverride() {
        return r;
    }
}
let g = new m(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: (e) => {
        f.set(e.tab, !0),
            h.set(e.tab, void 0),
            _.set(e.tab, e.options),
            _.set(e.tab, e.options),
            d.set(e.tab, void 0),
            p.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        E.set(e.tab, e.shopHome.shopBlocks),
            c.set(e.tab, Date.now()),
            f.set(e.tab, !1),
            h.set(e.tab, void 0),
            d.set(e.tab, void 0),
            p.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: (e) => {
        E.set(e.tab, u), f.set(e.tab, !1), h.set(e.tab, e.error), d.set(e.tab, Date.now()), p.set(e.tab, !0);
    },
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: (e) => {
        i = e.shopHomeConfigOverride;
    },
    COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: (e) => {
        r = e.shopLayoutUrlOverride;
    },
    SKU_PURCHASE_SUCCESS: (e) => {
        null != e.appliedUserDiscounts &&
            e.appliedUserDiscounts.some(
                (e) => e.discount.id === l.eR || e.discount.id === l.Qz || e.discount.id === l.tU,
            ) &&
            p.set(o.G2.HOME, !0);
    },
    LOGOUT: () => {
        E.clear(), _.clear(), h.clear(), f.clear(), c.clear(), d.clear(), p.clear(), (i = void 0), (r = void 0);
    },
});
