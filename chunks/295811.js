"use strict";
let i, r;
n.d(t, { A: () => I });
var a = n(17928),
    s = n(228366);
let l = [],
    o = new Map(),
    d = new Map(),
    c = new Map(),
    u = new Map(),
    _ = new Map(),
    E = new Map(),
    A = new Map();
class h extends a.Ay.Store {
    static displayName = "CollectiblesShopHomesStore";
    getLastSuccessfulFetch(e) {
        return o.get(e);
    }
    getLastErrorTimestamp(e) {
        return d.get(e);
    }
    getLastFetchOptions(e) {
        return c.get(e);
    }
    getFetchShopHomeError(e) {
        return u.get(e);
    }
    getIsFetchingShopHome(e) {
        return _.get(e);
    }
    getShopBlocks(e) {
        return A.get(e) ?? l;
    }
    getHasKnownStaleData(e) {
        return E.get(e);
    }
    getShopHomeConfigOverride() {
        return i;
    }
    getShopLayoutUrlOverride() {
        return r;
    }
}
let I = new h(s.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: function (e) {
        _.set(e.tab, !0),
            u.set(e.tab, void 0),
            c.set(e.tab, e.options),
            c.set(e.tab, e.options),
            d.set(e.tab, void 0),
            E.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function (e) {
        A.set(e.tab, e.shopHome.shopBlocks),
            o.set(e.tab, Date.now()),
            _.set(e.tab, !1),
            u.set(e.tab, void 0),
            d.set(e.tab, void 0),
            E.set(e.tab, !1);
    },
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: function (e) {
        A.set(e.tab, l), _.set(e.tab, !1), u.set(e.tab, e.error), d.set(e.tab, Date.now()), E.set(e.tab, !0);
    },
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: function (e) {
        i = e.shopHomeConfigOverride;
    },
    COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: function (e) {
        r = e.shopLayoutUrlOverride;
    },
    LOGOUT: function () {
        A.clear(), c.clear(), u.clear(), _.clear(), o.clear(), d.clear(), E.clear(), (i = void 0), (r = void 0);
    },
});
