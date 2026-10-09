let i, r;
n.d(t, { A: () => p });
var a = n(17928),
    s = n(73153);
let l = [],
    o = [],
    d = new Map(),
    c = new Map(),
    u = new Map(),
    _ = new Map(),
    E = new Map(),
    A = new Map(),
    h = new Map(),
    f = new Map();
class I extends a.Ay.Store {
    static displayName = "CollectiblesShopHomesStore";
    getLastSuccessfulFetch(e) {
        return d.get(e);
    }
    getLastErrorTimestamp(e) {
        return c.get(e);
    }
    getLastFetchOptions(e) {
        return u.get(e);
    }
    getFetchShopHomeError(e) {
        return _.get(e);
    }
    getIsFetchingShopHome(e) {
        return E.get(e);
    }
    getShopBlocks(e) {
        return h.get(e) ?? l;
    }
    getCategories(e) {
        return f.get(e) ?? o;
    }
    getHasKnownStaleData(e) {
        return A.get(e);
    }
    getShopHomeConfigOverride() {
        return i;
    }
    getShopLayoutUrlOverride() {
        return r;
    }
}
let p = new I(s.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: function (e) {
        (E.set(e.tab, !0),
            _.set(e.tab, void 0),
            u.set(e.tab, e.options),
            u.set(e.tab, e.options),
            c.set(e.tab, void 0),
            A.set(e.tab, !1));
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function (e) {
        (h.set(e.tab, e.shopHome.shopBlocks),
            f.set(e.tab, e.shopHome.categories),
            d.set(e.tab, Date.now()),
            E.set(e.tab, !1),
            _.set(e.tab, void 0),
            c.set(e.tab, void 0),
            A.set(e.tab, !1));
    },
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: function (e) {
        (h.set(e.tab, l),
            f.set(e.tab, o),
            E.set(e.tab, !1),
            _.set(e.tab, e.error),
            c.set(e.tab, Date.now()),
            A.set(e.tab, !0));
    },
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: function (e) {
        i = e.shopHomeConfigOverride;
    },
    COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: function (e) {
        r = e.shopLayoutUrlOverride;
    },
    LOGOUT: function () {
        (h.clear(),
            f.clear(),
            u.clear(),
            _.clear(),
            E.clear(),
            d.clear(),
            c.clear(),
            A.clear(),
            (i = void 0),
            (r = void 0));
    },
});
