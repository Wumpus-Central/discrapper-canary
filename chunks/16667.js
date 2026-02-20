l.d(r, { A: () => s });
var t = l(311907),
    o = l(73153);
let i = {},
    n = {},
    a = new Set(),
    c = {};
class d extends t.Ay.Store {
    static displayName = "CollectiblesStore";
    getCollection(e) {
        return null != e ? i[e] : null;
    }
    getProductForSku(e) {
        return null != e ? n[e] : null;
    }
    isFetching(e) {
        return null != e && a.has(e);
    }
    getApiError(e) {
        return null != e ? c[e] : null;
    }
}
let s = new d(o.h, {
    COLLECTIBLES_COLLECTION_FETCH: (e) => {
        let { collectionId: r } = e;
        a.add(r);
    },
    COLLECTIBLES_COLLECTION_FETCH_SUCCESS: (e) => {
        let { collection: r } = e;
        (i[r.id] = r),
            r.products?.forEach((e) => {
                e.skus.forEach((r) => {
                    (n[r.id] = e), delete c[r.id], a.delete(r.id);
                });
            }),
            delete c[r.id],
            a.delete(r.id);
    },
    COLLECTIBLES_COLLECTION_FETCH_FAILURE: (e) => {
        let { collectionId: r, apiError: l } = e;
        (c[r] = l), a.delete(r);
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH: (e) => {
        let { skuId: r } = e;
        a.add(r);
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS: (e) => {
        let { product: r } = e;
        r.skuIds.forEach((e) => {
            (n[e] = r), delete c[e], a.delete(e);
        });
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE: (e) => {
        let { skuId: r, apiError: l } = e;
        (c[r] = l), a.delete(r);
    },
    LOGOUT: (e) => {
        (i = {}), (n = {}), (a = new Set()), (c = {});
    },
});
