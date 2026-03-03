t.d(l, { A: () => h });
var r = t(311907),
    o = t(73153);
let n = {},
    i = {},
    a = {},
    d = {},
    c = new Set(),
    s = {};
class u extends r.Ay.Store {
    static displayName = "StorefrontStore";
    getCollection(e) {
        return null != e ? n[e] : null;
    }
    getProduct(e) {
        return null != e ? i[e] : null;
    }
    getProductBySkuId(e) {
        let l = null != e ? a[e] : null;
        return l?.productId != null ? i[l.productId] : null;
    }
    getSku(e) {
        return null != e ? a[e] : null;
    }
    getSkuPrices(e) {
        return null != e ? d[e] : null;
    }
    isFetching(e) {
        return null != e && c.has(e);
    }
    getApiError(e) {
        return null != e ? s[e] : null;
    }
}
let h = new u(o.h, {
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH: (e) => {
        let { collectionId: l } = e,
            t = n[l];
        t?.products?.forEach((e) => {
            e.skuIds.forEach((e) => {
                c.add(e);
            }),
                c.add(e.id);
        }),
            c.add(l);
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS: (e) => {
        let { collection: l } = e;
        l.products?.forEach((e) => {
            e.skus.forEach((e) => {
                (a[e.id] = e), delete s[e.id], c.delete(e.id);
            }),
                (i[e.id] = e),
                delete s[e.id],
                c.delete(e.id);
        }),
            (n[l.id] = l),
            delete s[l.id],
            c.delete(l.id);
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE: (e) => {
        let { collectionId: l, apiError: t } = e,
            r = n[l];
        r?.products?.forEach((e) => {
            e.skuIds.forEach((e) => {
                c.delete(e);
            }),
                c.delete(e.id);
        }),
            (s[l] = t),
            c.delete(l);
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH: (e) => {
        let { productId: l } = e,
            t = i[l];
        t?.skuIds.forEach((e) => {
            c.add(e);
        }),
            c.add(l);
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS: (e) => {
        let { product: l } = e;
        l.skus.forEach((e) => {
            (a[e.id] = e), delete s[e.id], c.delete(e.id);
        }),
            (i[l.id] = l),
            c.delete(l.id),
            delete s[l.id];
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE: (e) => {
        let { productId: l, apiError: t } = e,
            r = i[l];
        r?.skuIds.forEach((e) => {
            c.delete(e);
        }),
            (s[l] = t),
            c.delete(l);
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH: (e) => {
        let { skuId: l } = e,
            t = a[l],
            r = t?.productId != null ? i[t.productId] : null;
        r?.skuIds.forEach((e) => {
            c.add(e);
        }),
            null != r && c.add(r.id),
            c.add(l);
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_SUCCESS: (e) => {
        let { product: l } = e;
        l.skus.forEach((e) => {
            (a[e.id] = e), delete s[e.id], c.delete(e.id);
        }),
            (i[l.id] = l),
            delete s[l.id],
            c.delete(l.id);
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_FAILURE: (e) => {
        let { skuId: l, apiError: t } = e,
            r = a[l],
            o = r?.productId != null ? i[r.productId] : null;
        o?.skuIds.forEach((e) => {
            c.delete(e);
        }),
            null != o && c.delete(o.id),
            (s[l] = t),
            c.delete(l);
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: (e) => {
        let { skuIds: l } = e;
        l.forEach((e) => {
            let l = a[e],
                t = l?.productId != null ? i[l.productId] : null;
            t?.skuIds.forEach((e) => {
                c.add(e);
            }),
                null != t && c.add(t.id),
                c.add(e);
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: (e) => {
        let { products: l } = e;
        l.forEach((e) => {
            e.skus.forEach((e) => {
                (a[e.id] = e), delete s[e.id], c.delete(e.id);
            }),
                (i[e.id] = e),
                delete s[e.id],
                c.delete(e.id);
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: (e) => {
        let { skuIds: l, apiError: t } = e;
        l.forEach((e) => {
            let l = a[e],
                r = l?.productId != null ? i[l.productId] : null;
            r?.skuIds.forEach((e) => {
                c.delete(e);
            }),
                null != r && c.delete(r.id),
                (s[e] = t),
                c.delete(e);
        });
    },
    STOREFRONT_SKU_PRICES_FETCH: (e) => {
        let { skuIds: l } = e;
        l.forEach((e) => {
            c.add(e);
        });
    },
    STOREFRONT_SKU_PRICES_FETCH_SUCCESS: (e) => {
        let { skuPrices: l } = e;
        Object.entries(l).forEach((e) => {
            let [l, t] = e;
            (d[l] = t), delete s[l], c.delete(l);
        });
    },
    STOREFRONT_SKU_PRICES_FETCH_FAILURE: (e) => {
        let { skuIds: l, apiError: t } = e;
        l.forEach((e) => {
            c.delete(e), (s[e] = t);
        });
    },
    LOGOUT: (e) => {
        (n = {}), (i = {}), (a = {}), (d = {}), (c = new Set()), (s = {});
    },
});
