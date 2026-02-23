"use strict";
l.d(t, { A: () => c });
var r = l(311907),
    a = l(73153);
let n = {},
    i = {},
    s = new Set(),
    o = {};
class d extends r.Ay.Store {
    static displayName = "CollectiblesStore";
    getCollection(e) {
        return null != e ? n[e] : null;
    }
    getProductForSku(e) {
        return null != e ? i[e] : null;
    }
    isFetching(e) {
        return null != e && s.has(e);
    }
    getApiError(e) {
        return null != e ? o[e] : null;
    }
}
let c = new d(a.h, {
    COLLECTIBLES_COLLECTION_FETCH: (e) => {
        let { collectionId: t } = e;
        s.add(t);
    },
    COLLECTIBLES_COLLECTION_FETCH_SUCCESS: (e) => {
        let { collection: t } = e;
        (n[t.id] = t),
            t.products?.forEach((e) => {
                e.skus.forEach((t) => {
                    (i[t.id] = e), delete o[t.id], s.delete(t.id);
                });
            }),
            delete o[t.id],
            s.delete(t.id);
    },
    COLLECTIBLES_COLLECTION_FETCH_FAILURE: (e) => {
        let { collectionId: t, apiError: l } = e;
        (o[t] = l), s.delete(t);
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH: (e) => {
        let { skuId: t } = e;
        s.add(t);
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS: (e) => {
        let { product: t } = e;
        t.skuIds.forEach((e) => {
            (i[e] = t), delete o[e], s.delete(e);
        });
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE: (e) => {
        let { skuId: t, apiError: l } = e;
        (o[t] = l), s.delete(t);
    },
    LOGOUT: (e) => {
        (n = {}), (i = {}), (s = new Set()), (o = {});
    },
});
