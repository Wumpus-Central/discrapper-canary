"use strict";
l.d(t, { x: () => m, y: () => u });
var r = l(73153),
    a = l(198982),
    n = l(287809),
    i = l(371794),
    s = l(16667),
    o = l(265212),
    d = l(19945),
    c = l(652215);
async function u(e) {
    if (s.A.isFetching(e)) return;
    let t = s.A.getApiError(e);
    if (t?.status !== 404 && t?.status !== 429)
        try {
            r.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH", collectionId: e });
            let t = n.default.getCurrentUser()?.isStaff() ?? !1,
                l = await (0, i.aP)({
                    url: c.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(e),
                    query: { collection_id: e, include_unpublished_products: t, include_unpublished_collection: t },
                    rejectWithError: !0,
                });
            r.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH_SUCCESS", collection: o.A.fromServer(l.body) });
        } catch (l) {
            let t = new a.LG(l);
            throw (r.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH_FAILURE", collectionId: e, apiError: t }), t);
        }
}
async function m(e) {
    if (s.A.isFetching(e)) return;
    let t = s.A.getApiError(e);
    if (t?.status !== 404 && t?.status !== 429)
        try {
            r.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH", skuId: e });
            let t = n.default.getCurrentUser()?.isStaff() ?? !1,
                l = await (0, i.aP)({
                    url: c.Rsh.PRODUCT_FOR_SKU(e),
                    query: { include_unpublished: t },
                    rejectWithError: !0,
                });
            r.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS", product: d.A.fromServer(l.body) });
        } catch (l) {
            let t = new a.LG(l);
            throw (r.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE", skuId: e, apiError: t }), t);
        }
}
