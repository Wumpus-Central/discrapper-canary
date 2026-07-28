l.d(t, { _: () => S, d: () => T });
var r = l(228366),
    o = l(181658),
    n = l(773669),
    c = l(927813),
    u = l(371794),
    i = l(730202),
    s = l(442007),
    a = l(652215);
let d = 12 * c.A.Millis.HOUR,
    _ = 10 * c.A.Millis.MINUTE;
async function S(e) {
    let {
            collectionIds: t,
            includeUnpublishedProducts: l = !1,
            includeUnpublishedCollections: c = !1,
            ignoreCache: S = !1,
        } = e,
        T = t.filter((e) => {
            if (!e) return !1;
            let t = i.A.getFetchState(e);
            if ("loading" === t) return !1;
            let l = i.A.getFetchedAt(e);
            return null == l || Date.now() - l > ("error" === t ? _ : d);
        });
    if (0 !== T.length)
        try {
            r.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: T });
            let e = await (0, u.aP)({
                url: a.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: T,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: l,
                    include_unpublished_collections: c,
                    ignore_cache: S,
                },
                rejectWithError: !0,
            });
            r.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: T,
                collections: e.body.collections.map(s.A.fromServer),
            });
        } catch (e) {
            r.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: T,
                apiError: new o.A(e),
            });
        }
}
async function T(e) {
    let {
        applicationId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollections: c = !1,
        ignoreCache: S = !1,
        skuTypes: T,
        includePricing: f = !1,
    } = e;
    if (!t) return;
    let h = i.A.getFetchStateForApplication(t);
    if ("loading" === h) return;
    let O = i.A.getFetchedAtForApplication(t);
    if (null != O && Date.now() - O <= ("error" === h ? _ : d)) {
        let e = i.A.getFetchParamsForApplication(t);
        if (
            "error" === h ||
            (null != e &&
                (function (e, t) {
                    if (t.includePricing && !e.includePricing) return !1;
                    let l = new Set(e.skuTypes ?? []);
                    return (t.skuTypes ?? []).every((e) => l.has(e));
                })(e, { includePricing: f, skuTypes: T }))
        )
            return;
    }
    try {
        r.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: t });
        let e = await (0, u.aP)({
            url: a.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                locale: n.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: l,
                include_unpublished_collections: c,
                ignore_cache: S,
                ...(null != T ? { sku_types: T } : {}),
                ...(f ? { include_pricing: !0 } : {}),
            },
            rejectWithError: !0,
        });
        r.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
            applicationId: t,
            collections: e.body.collections.map(s.A.fromServer),
            includePricing: f,
            skuTypes: T,
        });
    } catch (e) {
        r.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
            applicationId: t,
            apiError: new o.A(e),
        });
    }
}
