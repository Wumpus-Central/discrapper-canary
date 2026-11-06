var l = r(855986),
    n = r(73153);
let c = {},
    o = {},
    i = {},
    u = {},
    s = {},
    _ = {};
class a extends l.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(t) {
        return null != t ? c[t]?.state : void 0;
    }
    getFetchStateForApplication(t) {
        return null != t ? o[t]?.state : void 0;
    }
    getFetchedAt(t) {
        return null != t ? c[t]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(t) {
        return null != t ? o[t]?.fetchedAt : void 0;
    }
    getFetchError(t) {
        return null != t ? c[t]?.fetchError : void 0;
    }
    getFetchErrorForApplication(t) {
        return null != t ? o[t]?.fetchError : void 0;
    }
    getCollection(t) {
        let e = null != t ? c[t] : null;
        return null == e || e?.state === "error" || null == e.collection ? null : e.collection;
    }
    hasPricingCoverage(t) {
        return !0 === (null != t && c[t]?.includePricing);
    }
    getPricingKey(t) {
        let e = null != t ? c[t] : null;
        return e?.state === "success" ? e.pricingKey : void 0;
    }
    getFetchParamsForApplication(t) {
        let e = null != t ? o[t] : null;
        return e?.state === "success" ? { includePricing: e.includePricing, skuTypes: e.skuTypes } : void 0;
    }
    getCollectionsForApplication(t) {
        let e = null != t ? o[t] : null;
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
        return u[t];
    }
    getCollectionsAfterFetchState(t) {
        return s[t]?.state;
    }
    getCollectionsAfterFetchedAt(t) {
        return s[t]?.fetchedAt;
    }
    getCollectionsAfterIds(t) {
        let e = s[t];
        return null == e || "error" === e.state || null == e.collectionIds ? null : e.collectionIds;
    }
    getCollectionOrSummary(t) {
        return null == t ? null : (this.getCollection(t) ?? _[t] ?? null);
    }
}
let d = new a(n.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (t) {
        let { collectionIds: e, includePricing: r } = t;
        e.forEach((t) => {
            let e = c[t];
            c[t] = {
                state: "loading",
                collection: e?.collection,
                includePricing: r || (e?.collection != null && !0 === e.includePricing),
            };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { collectionIds: e, collections: r, includePricing: l, pricingKey: n = "" } = t,
            o = Date.now(),
            i = new Set();
        (r.forEach((t) => {
            i.add(t.id);
            let e = c[t.id];
            if (!l && e?.state === "success" && e.includePricing) {
                c[t.id] = { ...e, fetchedAt: o };
                return;
            }
            c[t.id] = { state: "success", collection: t, fetchedAt: o, includePricing: l, pricingKey: n };
        }),
            e.forEach((t) => {
                i.has(t) || delete c[t];
            }));
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (t) {
        let { collectionIds: e, apiError: r } = t,
            l = Date.now();
        e.forEach((t) => {
            c[t] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (t) {
        let { applicationId: e } = t;
        o[e] = { state: "loading", collections: o[e]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (t) {
        let { applicationId: e, collections: r, includePricing: l, skuTypes: n } = t,
            i = Date.now();
        ((o[e] = { state: "success", collections: r, fetchedAt: i, includePricing: l, skuTypes: n }),
            r.forEach((t) => {
                c[t.id] = { state: "success", collection: t, fetchedAt: i, includePricing: l, pricingKey: "" };
            }));
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (t) {
        let { applicationId: e, apiError: r } = t;
        o[e] = { state: "error", fetchedAt: Date.now(), fetchError: r };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH: function (t) {
        let { pageKey: e } = t;
        i[e] = { state: "loading", collectionIds: i[e]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function (t) {
        let { pageKey: e, listKey: r, collections: l, total: n, pricingKey: o = "" } = t,
            s = Date.now();
        ((i[e] = { state: "success", collectionIds: l.map((t) => t.id), fetchedAt: s }),
            (u[r] = n),
            l.forEach((t) => {
                c[t.id] = { state: "success", collection: t, fetchedAt: s, includePricing: !0, pricingKey: o };
            }));
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE: function (t) {
        let { pageKey: e, apiError: r } = t;
        i[e] = { state: "error", fetchedAt: Date.now(), fetchError: r };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH: function (t) {
        let { requestKey: e } = t;
        s[e] = { state: "loading", collectionIds: s[e]?.collectionIds };
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS: function (t) {
        let { requestKey: e, collections: r } = t;
        ((s[e] = { state: "success", collectionIds: r.map((t) => t.id), fetchedAt: Date.now() }),
            r.forEach((t) => {
                _[t.id] = t;
            }));
    },
    STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE: function (t) {
        let { requestKey: e, apiError: r } = t;
        s[e] = { state: "error", fetchedAt: Date.now(), fetchError: r };
    },
    LOGOUT: function (t) {
        ((c = {}), (o = {}), (i = {}), (u = {}), (s = {}), (_ = {}));
    },
});
r.d(e, {}, { A: d });
