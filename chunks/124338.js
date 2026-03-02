t.d(l, { A: () => u });
var r = t(311907),
    o = t(73153);
let n = {},
    i = {},
    a = {},
    d = new Set(),
    s = {};
class c extends r.Ay.Store {
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
    isFetching(e) {
        return null != e && d.has(e);
    }
    getApiError(e) {
        return null != e ? s[e] : null;
    }
}
let u = new c(o.h, {
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH: (e) => {
        let { collectionId: l } = e,
            t = n[l];
        t?.products?.forEach((e) => {
            e.skuIds.forEach((e) => {
                d.add(e);
            }),
                d.add(e.id);
        }),
            d.add(l);
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS: (e) => {
        let { collection: l } = e;
        l.products?.forEach((e) => {
            e.skus.forEach((e) => {
                (a[e.id] = e), delete s[e.id], d.delete(e.id);
            }),
                (i[e.id] = e),
                delete s[e.id],
                d.delete(e.id);
        }),
            (n[l.id] = l),
            delete s[l.id],
            d.delete(l.id);
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE: (e) => {
        let { collectionId: l, apiError: t } = e,
            r = n[l];
        r?.products?.forEach((e) => {
            e.skuIds.forEach((e) => {
                d.delete(e);
            }),
                d.delete(e.id);
        }),
            (s[l] = t),
            d.delete(l);
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH: (e) => {
        let { productId: l } = e,
            t = i[l];
        t?.skuIds.forEach((e) => {
            d.add(e);
        }),
            d.add(l);
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS: (e) => {
        let { product: l } = e;
        l.skus.forEach((e) => {
            (a[e.id] = e), delete s[e.id], d.delete(e.id);
        }),
            (i[l.id] = l),
            d.delete(l.id),
            delete s[l.id];
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE: (e) => {
        let { productId: l, apiError: t } = e,
            r = i[l];
        r?.skuIds.forEach((e) => {
            d.delete(e);
        }),
            (s[l] = t),
            d.delete(l);
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH: (e) => {
        let { skuId: l } = e,
            t = a[l],
            r = t?.productId != null ? i[t.productId] : null;
        r?.skuIds.forEach((e) => {
            d.add(e);
        }),
            null != r && d.add(r.id),
            d.add(l);
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_SUCCESS: (e) => {
        let { product: l } = e;
        l.skus.forEach((e) => {
            (a[e.id] = e), delete s[e.id], d.delete(e.id);
        }),
            (i[l.id] = l),
            delete s[l.id],
            d.delete(l.id);
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_FAILURE: (e) => {
        let { skuId: l, apiError: t } = e,
            r = a[l],
            o = r?.productId != null ? i[r.productId] : null;
        o?.skuIds.forEach((e) => {
            d.delete(e);
        }),
            (s[l] = t),
            d.delete(l);
    },
    LOGOUT: (e) => {
        (n = {}), (i = {}), (a = {}), (d = new Set()), (s = {});
    },
});
