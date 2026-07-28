l.d(t, { A: () => i });
var r = l(17928),
    o = l(228366);
let n = {},
    c = {};
class u extends r.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(e) {
        return null != e ? n[e]?.state : void 0;
    }
    getFetchStateForApplication(e) {
        return null != e ? c[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? n[e]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(e) {
        return null != e ? c[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? n[e]?.fetchError : void 0;
    }
    getFetchErrorForApplication(e) {
        return null != e ? c[e]?.fetchError : void 0;
    }
    getCollection(e) {
        let t = null != e ? n[e] : null;
        return null == t || t?.state === "error" || null == t.collection ? null : t.collection;
    }
    getFetchParamsForApplication(e) {
        let t = null != e ? c[e] : null;
        return t?.state === "success" ? { includePricing: t.includePricing, skuTypes: t.skuTypes } : void 0;
    }
    getCollectionsForApplication(e) {
        let t = null != e ? c[e] : null;
        return null == t || "error" === t.state || null == t.collections ? null : t.collections;
    }
}
let i = new u(o.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (e) {
        let { collectionIds: t } = e;
        t.forEach((e) => {
            n[e] = { state: "loading", collection: n[e]?.collection };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { collectionIds: t, collections: l } = e,
            r = Date.now(),
            o = new Set();
        l.forEach((e) => {
            o.add(e.id), (n[e.id] = { state: "success", collection: e, fetchedAt: r });
        }),
            t.forEach((e) => {
                o.has(e) || delete n[e];
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
        c[t] = { state: "loading", collections: c[t]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (e) {
        let { applicationId: t, collections: l, includePricing: r, skuTypes: o } = e,
            u = Date.now();
        (c[t] = { state: "success", collections: l, fetchedAt: u, includePricing: r, skuTypes: o }),
            l.forEach((e) => {
                n[e.id] = { state: "success", collection: e, fetchedAt: u };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (e) {
        let { applicationId: t, apiError: l } = e;
        c[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    LOGOUT: function (e) {
        (n = {}), (c = {});
    },
});
