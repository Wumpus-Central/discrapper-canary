t.d(l, { A: () => u });
var r = t(311907),
    o = t(73153);
let n = {},
    a = {},
    i = {},
    d = new Set(),
    c = {};
class s extends r.Ay.Store {
    static displayName = "CollectiblesStore";
    getCollection(e) {
        return null != e ? n[e] : null;
    }
    getProduct(e) {
        return null != e ? a[e] : null;
    }
    getProductForSku(e) {
        let l = null != e ? i[e] : null;
        return l?.productId != null ? a[l.productId] : null;
    }
    getSku(e) {
        return null != e ? i[e] : null;
    }
    isFetching(e) {
        return null != e && d.has(e);
    }
    getApiError(e) {
        return null != e ? c[e] : null;
    }
}
let u = new s(o.h, {
    COLLECTIBLES_COLLECTION_FETCH: (e) => {
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
    COLLECTIBLES_COLLECTION_FETCH_SUCCESS: (e) => {
        let { collection: l } = e;
        l.products?.forEach((e) => {
            e.skus.forEach((e) => {
                (i[e.id] = e), delete c[e.id], d.delete(e.id);
            }),
                (a[e.id] = e),
                delete c[e.id],
                d.delete(e.id);
        }),
            (n[l.id] = l),
            delete c[l.id],
            d.delete(l.id);
    },
    COLLECTIBLES_COLLECTION_FETCH_FAILURE: (e) => {
        let { collectionId: l, apiError: t } = e,
            r = n[l];
        r?.products?.forEach((e) => {
            e.skuIds.forEach((e) => {
                d.delete(e);
            }),
                d.delete(e.id);
        }),
            (c[l] = t),
            d.delete(l);
    },
    COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH: (e) => {
        let { productId: l } = e,
            t = a[l];
        t?.skuIds.forEach((e) => {
            d.add(e);
        }),
            d.add(l);
    },
    COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH_SUCCESS: (e) => {
        let { product: l } = e;
        l.skus.forEach((e) => {
            (i[e.id] = e), delete c[e.id], d.delete(e.id);
        }),
            (a[l.id] = l),
            d.delete(l.id),
            delete c[l.id];
    },
    COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH_FAILURE: (e) => {
        let { productId: l, apiError: t } = e,
            r = a[l];
        r?.skuIds.forEach((e) => {
            d.delete(e);
        }),
            (c[l] = t),
            d.delete(l);
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH: (e) => {
        let { skuId: l } = e,
            t = i[l],
            r = t?.productId != null ? a[t.productId] : null;
        r?.skuIds.forEach((e) => {
            d.add(e);
        }),
            null != r && d.add(r.id),
            d.add(l);
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS: (e) => {
        let { product: l } = e;
        l.skus.forEach((e) => {
            (i[e.id] = e), delete c[e.id], d.delete(e.id);
        }),
            (a[l.id] = l),
            delete c[l.id],
            d.delete(l.id);
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE: (e) => {
        let { skuId: l, apiError: t } = e,
            r = i[l],
            o = r?.productId != null ? a[r.productId] : null;
        o?.skuIds.forEach((e) => {
            d.delete(e);
        }),
            (c[l] = t),
            d.delete(l);
    },
    LOGOUT: (e) => {
        (n = {}), (a = {}), (i = {}), (d = new Set()), (c = {});
    },
});
