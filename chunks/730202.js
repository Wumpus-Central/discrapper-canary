l.d(t, { A: () => O });
var c = l(17928),
    n = l(228366);
let r = {},
    o = {},
    i = {},
    u = {},
    _ = {},
    s = {};
class a extends c.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(e) {
        return null != e ? r[e]?.state : void 0;
    }
    getFetchStateForApplication(e) {
        return null != e ? o[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? r[e]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(e) {
        return null != e ? o[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? r[e]?.fetchError : void 0;
    }
    getFetchErrorForApplication(e) {
        return null != e ? o[e]?.fetchError : void 0;
    }
    getCollection(e) {
        let t = null != e ? r[e] : null;
        return null == t || t?.state === "error" || null == t.collection ? null : t.collection;
    }
    hasPricingCoverage(e) {
        return !0 === (null != e && r[e]?.includePricing);
    }
    getFetchParamsForApplication(e) {
        let t = null != e ? o[e] : null;
        return t?.state === "success" ? { includePricing: t.includePricing, skuTypes: t.skuTypes } : void 0;
    }
    getCollectionsForApplication(e) {
        let t = null != e ? o[e] : null;
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
        return u[e];
    }
    getCollectionsAfterFetchState(e) {
        return _[e]?.state;
    }
    getCollectionsAfterFetchedAt(e) {
        return _[e]?.fetchedAt;
    }
    getCollectionsAfterIds(e) {
        let t = _[e];
        return null == t || "error" === t.state || null == t.collectionIds ? null : t.collectionIds;
    }
    getCollectionOrSummary(e) {
        return null == e ? null : (this.getCollection(e) ?? s[e] ?? null);
    }
}
let O = new a(n.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (e) {
        let { collectionIds: t, includePricing: l } = e;
        t.forEach((e) => {
            let t = r[e];
            r[e] = {
                state: "loading",
                collection: t?.collection,
                includePricing: l || (t?.collection != null && !0 === t.includePricing),
            };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { collectionIds: t, collections: l, includePricing: c } = e,
            n = Date.now(),
            o = new Set();
        (l.forEach((e) => {
            o.add(e.id);
            let t = r[e.id];
            if (!c && t?.state === "success" && t.includePricing) {
                r[e.id] = { ...t, fetchedAt: n };
                return;
            }
            r[e.id] = { state: "success", collection: e, fetchedAt: n, includePricing: c };
        }),
            t.forEach((e) => {
                o.has(e) || delete r[e];
            }));
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (e) {
        let { collectionIds: t, apiError: l } = e,
            c = Date.now();
        t.forEach((e) => {
            r[e] = { state: "error", fetchedAt: c, fetchError: l };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (e) {
        let { applicationId: t } = e;
        o[t] = { state: "loading", collections: o[t]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (e) {
        let { applicationId: t, collections: l, includePricing: c, skuTypes: n } = e,
            i = Date.now();
        ((o[t] = { state: "success", collections: l, fetchedAt: i, includePricing: c, skuTypes: n }),
            l.forEach((e) => {
                r[e.id] = { state: "success", collection: e, fetchedAt: i, includePricing: c };
            }));
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (e) {
        let { applicationId: t, apiError: l } = e;
        o[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH: function (e) {
        let { pageKey: t } = e;
        i[t] = { state: "loading", collectionIds: i[t]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function (e) {
        let { pageKey: t, listKey: l, collections: c, total: n } = e,
            o = Date.now();
        ((i[t] = { state: "success", collectionIds: c.map((e) => e.id), fetchedAt: o }),
            (u[l] = n),
            c.forEach((e) => {
                r[e.id] = { state: "success", collection: e, fetchedAt: o, includePricing: !0 };
            }));
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE: function (e) {
        let { pageKey: t, apiError: l } = e;
        i[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH: function (e) {
        let { requestKey: t } = e;
        _[t] = { state: "loading", collectionIds: _[t]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS: function (e) {
        let { requestKey: t, collections: l } = e;
        ((_[t] = { state: "success", collectionIds: l.map((e) => e.id), fetchedAt: Date.now() }),
            l.forEach((e) => {
                s[e.id] = e;
            }));
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE: function (e) {
        let { requestKey: t, apiError: l } = e;
        _[t] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    LOGOUT: function (e) {
        ((r = {}), (o = {}), (i = {}), (u = {}), (_ = {}), (s = {}));
    },
});
