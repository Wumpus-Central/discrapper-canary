t.d(l, { RV: () => u, yx: () => s });
var r = t(73153),
    o = t(198982),
    n = t(371794),
    a = t(16667),
    i = t(265212),
    d = t(19945),
    c = t(652215);
async function s(e) {
    let {
        collectionId: l,
        includeUnpublishedProducts: t = !1,
        includeUnpublishedCollection: d = !1,
        includePricing: s = !1,
        ignoreCache: u = !1,
    } = e;
    if (!l || a.A.isFetching(l)) return;
    let h = a.A.getApiError(l);
    if (h?.status !== 404 && h?.status !== 429)
        try {
            r.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH", collectionId: l });
            let e = await (0, n.aP)({
                url: c.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(l),
                query: {
                    collection_id: l,
                    include_unpublished_products: t,
                    include_unpublished_collection: d,
                    include_pricing: s,
                    ignore_cache: u,
                },
                rejectWithError: !0,
            });
            r.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH_SUCCESS", collection: i.A.fromServer(e.body) });
        } catch (t) {
            let e = new o.LG(t);
            throw (r.h.dispatch({ type: "COLLECTIBLES_COLLECTION_FETCH_FAILURE", collectionId: l, apiError: e }), e);
        }
}
async function u(e) {
    let { productId: l, includePricing: t = !1, includeUnpublished: i = !1, ignoreCache: s = !1 } = e;
    if (!l || a.A.isFetching(l)) return;
    let u = a.A.getApiError(l);
    if (u?.status !== 404 && u?.status !== 429)
        try {
            r.h.dispatch({ type: "COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH", productId: l });
            let e = await (0, n.aP)({
                url: c.Rsh.PRODUCT_WITH_SKUS(l),
                query: { include_pricing: t, include_unpublished: i, ignore_cache: s },
                rejectWithError: !0,
            });
            r.h.dispatch({ type: "COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH_SUCCESS", product: d.A.fromServer(e.body) });
        } catch (t) {
            let e = new o.LG(t);
            throw (
                (r.h.dispatch({ type: "COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH_FAILURE", productId: l, apiError: e }), e)
            );
        }
}
