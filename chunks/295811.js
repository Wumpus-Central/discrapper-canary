"use strict";
let r, i;
n.d(t, { A: () => N });
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
    m = new Map(),
    E = (e) => {
        p.set(e.tab, !0),
            f.set(e.tab, void 0),
            _.set(e.tab, e.options),
            _.set(e.tab, e.options),
            d.set(e.tab, void 0),
            h.set(e.tab, !1);
    },
    g = (e) => {
        m.set(e.tab, e.shopHome.shopBlocks),
            c.set(e.tab, Date.now()),
            p.set(e.tab, !1),
            f.set(e.tab, void 0),
            d.set(e.tab, void 0),
            h.set(e.tab, !1);
    },
    A = (e) => {
        m.set(e.tab, u), p.set(e.tab, !1), f.set(e.tab, e.error), d.set(e.tab, Date.now()), h.set(e.tab, !0);
    },
    I = (e) => {
        null != e.appliedUserDiscounts &&
            e.appliedUserDiscounts.some(
                (e) => e.discount.id === l.eR || e.discount.id === l.Qz || e.discount.id === l.tU,
            ) &&
            h.set(o.G2.HOME, !0);
    },
    T = () => {
        m.clear(), _.clear(), f.clear(), p.clear(), c.clear(), d.clear(), h.clear(), (r = void 0), (i = void 0);
    },
    S = (e) => {
        r = e.shopHomeConfigOverride;
    },
    y = (e) => {
        i = e.shopLayoutUrlOverride;
    };
class v extends s.Ay.Store {
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
        return m.get(e) ?? u;
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
let N = new v(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: E,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: g,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: A,
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: S,
    COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: y,
    SKU_PURCHASE_SUCCESS: I,
    LOGOUT: T,
});
