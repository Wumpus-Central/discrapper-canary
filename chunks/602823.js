l.d(r, { x: () => h, y: () => u });
var t = l(73153),
    o = l(198982),
    i = l(287809),
    n = l(371794),
    a = l(16667),
    c = l(265212),
    d = l(19945),
    s = l(652215);
async function u(e) {
    if (a.A.isFetching(e)) return;
    let r = a.A.getApiError(e);
    if (r?.status !== 404 && r?.status !== 429)
        try {
            t.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH", collectionId: e });
            let r = i.default.getCurrentUser()?.isStaff() ?? !1,
                l = await (0, n.aP)({
                    url: s.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(e),
                    query: { collection_id: e, include_unpublished_products: r, include_unpublished_collection: r },
                    rejectWithError: !0,
                });
            t.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH_SUCCESS", collection: c.A.fromServer(l.body) });
        } catch (l) {
            let r = new o.LG(l);
            throw (t.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH_FAILURE", collectionId: e, apiError: r }), r);
        }
}
async function h(e) {
    if (a.A.isFetching(e)) return;
    let r = a.A.getApiError(e);
    if (r?.status !== 404 && r?.status !== 429)
        try {
            t.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH", skuId: e });
            let r = i.default.getCurrentUser()?.isStaff() ?? !1,
                l = await (0, n.aP)({
                    url: s.Rsh.PRODUCT_FOR_SKU(e),
                    query: { include_unpublished: r },
                    rejectWithError: !0,
                });
            t.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS", product: d.A.fromServer(l.body) });
        } catch (l) {
            let r = new o.LG(l);
            throw (t.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE", skuId: e, apiError: r }), r);
        }
}
