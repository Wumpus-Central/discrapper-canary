l.d(t, { A: () => u });
var r = l(17928),
    c = l(228366);
let n = {},
    o = {};
class i extends r.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(e) {
        return null != e ? n[e]?.state : void 0;
    }
    getFetchStateForApplication(e) {
        return null != e ? o[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? n[e]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(e) {
        return null != e ? o[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? n[e]?.fetchError : void 0;
    }
    getFetchErrorForApplication(e) {
        return null != e ? o[e]?.fetchError : void 0;
    }
    getCollection(e) {
        let t = null != e ? n[e] : null;
        return null == t || t?.state === "error" || null == t.collection ? null : t.collection;
    }
    getFetchParamsForApplication(e) {
        let t = null != e ? o[e] : null;
        return t?.state === "success" ? { includePricing: t.includePricing, skuTypes: t.skuTypes } : void 0;
    }
    getCollectionsForApplication(e) {
        let t = null != e ? o[e] : null;
        return null == t || "error" === t.state || null == t.collections ? null : t.collections;
    }
}
let u = new i(c.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (e) {
        let { collectionIds: t } = e;
        t.forEach((e) => {
            n[e] = { state: "loading", collection: n[e]?.collection };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { collectionIds: t, collections: l } = e,
            r = Date.now(),
            c = new Set();
        l.forEach((e) => {
            c.add(e.id), (n[e.id] = { state: "success", collection: e, fetchedAt: r });
        }),
            t.forEach((e) => {
                c.has(e) || delete n[e];
            });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (e) {
        let { collectionIds: t, apiError: l } = e,
            r = Date.now();
        t.forEach((e) => {
            n[e] = { state: "error", fetchedAt: r, fetchError: l };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (e) {
        let { applicationId: t } = e;
        o[t] = { state: "loading", collections: o[t]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (e) {
        let { applicationId: t, collections: l, includePricing: r, skuTypes: c } = e,
            i = Date.now();
        (o[t] = { state: "success", collections: l, fetchedAt: i, includePricing: r, skuTypes: c }),
            l.forEach((e) => {
                n[e.id] = { state: "success", collection: e, fetchedAt: i };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (e) {
        let { applicationId: t, apiError: l } = e;
        o[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    LOGOUT: function (e) {
        (n = {}), (o = {});
    },
});
