l.d(e, { A: () => T });
var n = l(17928),
    c = l(228366);
let o = {},
    r = {},
    i = {},
    s = {},
    u = {},
    a = {};
class C extends n.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(t) {
        return null != t ? o[t]?.state : void 0;
    }
    getFetchStateForApplication(t) {
        return null != t ? r[t]?.state : void 0;
    }
    getFetchedAt(t) {
        return null != t ? o[t]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(t) {
        return null != t ? r[t]?.fetchedAt : void 0;
    }
    getFetchError(t) {
        return null != t ? o[t]?.fetchError : void 0;
    }
    getFetchErrorForApplication(t) {
        return null != t ? r[t]?.fetchError : void 0;
    }
    getCollection(t) {
        let e = null != t ? o[t] : null;
        return null == e || e?.state === "error" || null == e.collection ? null : e.collection;
    }
    hasPricingCoverage(t) {
        return !0 === (null != t && o[t]?.includePricing);
    }
    getFetchParamsForApplication(t) {
        let e = null != t ? r[t] : null;
        return e?.state === "success" ? { includePricing: e.includePricing, skuTypes: e.skuTypes } : void 0;
    }
    getCollectionsForApplication(t) {
        let e = null != t ? r[t] : null;
        return null == e || "error" === e.state || null == e.collections ? null : e.collections;
    }
    getCollectionPageFetchState(t) {
        return i[t]?.state;
    }
    getCollectionPageFetchedAt(t) {
        return i[t]?.fetchedAt;
    }
    getCollectionPageIds(t) {
        let e = i[t];
        return null == e || "error" === e.state || null == e.collectionIds ? null : e.collectionIds;
    }
    getCollectionListTotal(t) {
        return s[t];
    }
    getCollectionsAfterFetchState(t) {
        return u[t]?.state;
    }
    getCollectionsAfterFetchedAt(t) {
        return u[t]?.fetchedAt;
    }
    getCollectionsAfterIds(t) {
        let e = u[t];
        return null == e || "error" === e.state || null == e.collectionIds ? null : e.collectionIds;
    }
    getCollectionOrSummary(t) {
        return null == t ? null : (this.getCollection(t) ?? a[t] ?? null);
    }
}
let T = new C(c.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (t) {
        let { collectionIds: e, includePricing: l } = t;
        e.forEach((t) => {
            let e = o[t];
            o[t] = {
                state: "loading",
                collection: e?.collection,
                includePricing: l || (e?.collection != null && !0 === e.includePricing),
            };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { collectionIds: e, collections: l, includePricing: n } = t,
            c = Date.now(),
            r = new Set();
        (l.forEach((t) => {
            r.add(t.id);
            let e = o[t.id];
            if (!n && e?.state === "success" && e.includePricing) {
                o[t.id] = { ...e, fetchedAt: c };
                return;
            }
            o[t.id] = { state: "success", collection: t, fetchedAt: c, includePricing: n };
        }),
            e.forEach((t) => {
                r.has(t) || delete o[t];
            }));
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (t) {
        let { collectionIds: e, apiError: l } = t,
            n = Date.now();
        e.forEach((t) => {
            o[t] = { state: "error", fetchedAt: n, fetchError: l };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (t) {
        let { applicationId: e } = t;
        r[e] = { state: "loading", collections: r[e]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (t) {
        let { applicationId: e, collections: l, includePricing: n, skuTypes: c } = t,
            i = Date.now();
        ((r[e] = { state: "success", collections: l, fetchedAt: i, includePricing: n, skuTypes: c }),
            l.forEach((t) => {
                o[t.id] = { state: "success", collection: t, fetchedAt: i, includePricing: n };
            }));
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (t) {
        let { applicationId: e, apiError: l } = t;
        r[e] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH: function (t) {
        let { pageKey: e } = t;
        i[e] = { state: "loading", collectionIds: i[e]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function (t) {
        let { pageKey: e, listKey: l, collections: n, total: c } = t,
            r = Date.now();
        ((i[e] = { state: "success", collectionIds: n.map((t) => t.id), fetchedAt: r }),
            (s[l] = c),
            n.forEach((t) => {
                o[t.id] = { state: "success", collection: t, fetchedAt: r, includePricing: !0 };
            }));
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE: function (t) {
        let { pageKey: e, apiError: l } = t;
        i[e] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH: function (t) {
        let { requestKey: e } = t;
        u[e] = { state: "loading", collectionIds: u[e]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS: function (t) {
        let { requestKey: e, collections: l } = t;
        ((u[e] = { state: "success", collectionIds: l.map((t) => t.id), fetchedAt: Date.now() }),
            l.forEach((t) => {
                a[t.id] = t;
            }));
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE: function (t) {
        let { requestKey: e, apiError: l } = t;
        u[e] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    LOGOUT: function (t) {
        ((o = {}), (r = {}), (i = {}), (s = {}), (u = {}), (a = {}));
    },
});
