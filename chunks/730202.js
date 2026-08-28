l.d(t, { A: () => O });
var c = l(17928),
    o = l(228366);
let n = {},
    r = {},
    i = {},
    _ = {},
    u = {},
    s = {};
class a extends c.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(e) {
        return null != e ? n[e]?.state : void 0;
    }
    getFetchStateForApplication(e) {
        return null != e ? r[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? n[e]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(e) {
        return null != e ? r[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? n[e]?.fetchError : void 0;
    }
    getFetchErrorForApplication(e) {
        return null != e ? r[e]?.fetchError : void 0;
    }
    getCollection(e) {
        let t = null != e ? n[e] : null;
        return null == t || t?.state === "error" || null == t.collection ? null : t.collection;
    }
    getFetchParamsForApplication(e) {
        let t = null != e ? r[e] : null;
        return t?.state === "success" ? { includePricing: t.includePricing, skuTypes: t.skuTypes } : void 0;
    }
    getCollectionsForApplication(e) {
        let t = null != e ? r[e] : null;
        return null == t || "error" === t.state || null == t.collections ? null : t.collections;
    }
    getCollectionPageFetchState(e) {
        return i[e]?.state;
    }
    getCollectionPageFetchedAt(e) {
        return i[e]?.fetchedAt;
    }
    getCollectionPageIds(e) {
        let t = i[e];
        return null == t || "error" === t.state || null == t.collectionIds ? null : t.collectionIds;
    }
    getCollectionListTotal(e) {
        return _[e];
    }
    getCollectionsAfterFetchState(e) {
        return u[e]?.state;
    }
    getCollectionsAfterFetchedAt(e) {
        return u[e]?.fetchedAt;
    }
    getCollectionsAfterIds(e) {
        let t = u[e];
        return null == t || "error" === t.state || null == t.collectionIds ? null : t.collectionIds;
    }
    getCollectionOrSummary(e) {
        return null == e ? null : (this.getCollection(e) ?? s[e] ?? null);
    }
}
let O = new a(o.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (e) {
        let { collectionIds: t } = e;
        t.forEach((e) => {
            n[e] = { state: "loading", collection: n[e]?.collection };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { collectionIds: t, collections: l } = e,
            c = Date.now(),
            o = new Set();
        l.forEach((e) => {
            o.add(e.id), (n[e.id] = { state: "success", collection: e, fetchedAt: c });
        }),
            t.forEach((e) => {
                o.has(e) || delete n[e];
            });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (e) {
        let { collectionIds: t, apiError: l } = e,
            c = Date.now();
        t.forEach((e) => {
            n[e] = { state: "error", fetchedAt: c, fetchError: l };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (e) {
        let { applicationId: t } = e;
        r[t] = { state: "loading", collections: r[t]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (e) {
        let { applicationId: t, collections: l, includePricing: c, skuTypes: o } = e,
            i = Date.now();
        (r[t] = { state: "success", collections: l, fetchedAt: i, includePricing: c, skuTypes: o }),
            l.forEach((e) => {
                n[e.id] = { state: "success", collection: e, fetchedAt: i };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (e) {
        let { applicationId: t, apiError: l } = e;
        r[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH: function (e) {
        let { pageKey: t } = e;
        i[t] = { state: "loading", collectionIds: i[t]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function (e) {
        let { pageKey: t, listKey: l, collections: c, total: o } = e,
            r = Date.now();
        (i[t] = { state: "success", collectionIds: c.map((e) => e.id), fetchedAt: r }),
            (_[l] = o),
            c.forEach((e) => {
                n[e.id] = { state: "success", collection: e, fetchedAt: r };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE: function (e) {
        let { pageKey: t, apiError: l } = e;
        i[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH: function (e) {
        let { requestKey: t } = e;
        u[t] = { state: "loading", collectionIds: u[t]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS: function (e) {
        let { requestKey: t, collections: l } = e;
        (u[t] = { state: "success", collectionIds: l.map((e) => e.id), fetchedAt: Date.now() }),
            l.forEach((e) => {
                s[e.id] = e;
            });
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE: function (e) {
        let { requestKey: t, apiError: l } = e;
        u[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    LOGOUT: function (e) {
        (n = {}), (r = {}), (i = {}), (_ = {}), (u = {}), (s = {});
    },
});
