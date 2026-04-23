"use strict";
let i, r;
n.d(t, { A: () => p });
var s = n(17928),
    a = n(228366),
    o = n(758836),
    l = n(788868);
let d = [],
    _ = new Map(),
    u = new Map(),
    c = new Map(),
    E = new Map(),
    h = new Map(),
    m = new Map(),
    f = new Map();
class g extends s.Ay.Store {
    static displayName = "CollectiblesShopHomesStore";
    getLastSuccessfulFetch(e) {
        return _.get(e);
    }
    getLastErrorTimestamp(e) {
        return u.get(e);
    }
    getLastFetchOptions(e) {
        return c.get(e);
    }
    getFetchShopHomeError(e) {
        return E.get(e);
    }
    getIsFetchingShopHome(e) {
        return h.get(e);
    }
    getShopBlocks(e) {
        return f.get(e) ?? d;
    }
    getHasKnownStaleData(e) {
        return m.get(e);
    }
    getShopHomeConfigOverride() {
        return i;
    }
    getShopLayoutUrlOverride() {
        return r;
    }
}
let p = new g(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: (e) => {
        h.set(e.tab, !0),
            E.set(e.tab, void 0),
            c.set(e.tab, e.options),
            c.set(e.tab, e.options),
            u.set(e.tab, void 0),
            m.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        f.set(e.tab, e.shopHome.shopBlocks),
            _.set(e.tab, Date.now()),
            h.set(e.tab, !1),
            E.set(e.tab, void 0),
            u.set(e.tab, void 0),
            m.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: (e) => {
        f.set(e.tab, d), h.set(e.tab, !1), E.set(e.tab, e.error), u.set(e.tab, Date.now()), m.set(e.tab, !0);
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
            m.set(o.G2.HOME, !0);
    },
    LOGOUT: () => {
        f.clear(), c.clear(), E.clear(), h.clear(), _.clear(), u.clear(), m.clear(), (i = void 0), (r = void 0);
    },
});
