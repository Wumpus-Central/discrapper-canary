let i;
n.d(t, { A: () => I });
var r = n(17928),
    a = n(73153);
let s = [],
    l = [],
    o = new Map(),
    d = new Map(),
    c = new Map(),
    u = new Map(),
    _ = new Map(),
    E = new Map(),
    A = new Map(),
    h = new Map();
class f extends r.Ay.Store {
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
        return A.get(e) ?? s;
    }
    getCategories(e) {
        return h.get(e) ?? l;
    }
    getHasKnownStaleData(e) {
        return E.get(e);
    }
    getShopHomeConfigOverride() {
        return i;
    }
}
let I = new f(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH: function (e) {
        (_.set(e.tab, !0),
            u.set(e.tab, void 0),
            c.set(e.tab, e.options),
            c.set(e.tab, e.options),
            d.set(e.tab, void 0),
            E.set(e.tab, !1));
    },
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function (e) {
        (A.set(e.tab, e.shopHome.shopBlocks),
            h.set(e.tab, e.shopHome.categories),
            o.set(e.tab, Date.now()),
            _.set(e.tab, !1),
            u.set(e.tab, void 0),
            d.set(e.tab, void 0),
            E.set(e.tab, !1));
    },
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: function (e) {
        (A.set(e.tab, s),
            h.set(e.tab, l),
            _.set(e.tab, !1),
            u.set(e.tab, e.error),
            d.set(e.tab, Date.now()),
            E.set(e.tab, !0));
    },
    COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: function (e) {
        i = e.shopHomeConfigOverride;
    },
    LOGOUT: function () {
        (A.clear(), h.clear(), c.clear(), u.clear(), _.clear(), o.clear(), d.clear(), E.clear(), (i = void 0));
    },
});
