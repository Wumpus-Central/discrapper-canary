l.d(t, { _: () => O, d: () => d });
var r = l(228366),
    c = l(181658),
    n = l(773669),
    o = l(927813),
    i = l(371794),
    u = l(730202),
    s = l(442007),
    _ = l(652215);
let a = 12 * o.A.Millis.HOUR,
    T = 10 * o.A.Millis.MINUTE;
async function O(e) {
    let {
            collectionIds: t,
            includeUnpublishedProducts: l = !1,
            includeUnpublishedCollections: o = !1,
            ignoreCache: O = !1,
        } = e,
        d = t.filter((e) => {
            if (!e) return !1;
            let t = u.A.getFetchState(e);
            if ("loading" === t) return !1;
            let l = u.A.getFetchedAt(e);
            return null == l || Date.now() - l > ("error" === t ? T : a);
        });
    if (0 !== d.length)
        try {
            r.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: d });
            let e = await (0, i.aP)({
                url: _.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: d,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: l,
                    include_unpublished_collections: o,
                    ignore_cache: O,
                },
                rejectWithError: !0,
            });
            r.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: d,
                collections: e.body.collections.map(s.A.fromServer),
            });
        } catch (e) {
            r.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: d,
                apiError: new c.A(e),
            });
        }
}
async function d(e) {
    let {
        applicationId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollections: o = !1,
        ignoreCache: O = !1,
        skuTypes: d,
        includePricing: C = !1,
    } = e;
    if (!t) return;
    let E = u.A.getFetchStateForApplication(t);
    if ("loading" === E) return;
    let h = u.A.getFetchedAtForApplication(t);
    if (null != h && Date.now() - h <= ("error" === E ? T : a)) {
        let e = u.A.getFetchParamsForApplication(t);
        if (
            "error" === E ||
            (null != e &&
                (function (e, t) {
                    if (t.includePricing && !e.includePricing) return !1;
                    let l = new Set(e.skuTypes ?? []);
                    return (t.skuTypes ?? []).every((e) => l.has(e));
                })(e, { includePricing: C, skuTypes: d }))
        )
            return;
    }
    try {
        r.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: t });
        let e = await (0, i.aP)({
            url: _.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                locale: n.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: l,
                include_unpublished_collections: o,
                ignore_cache: O,
                ...(null != d ? { sku_types: d } : {}),
                ...(C ? { include_pricing: !0 } : {}),
            },
            rejectWithError: !0,
        });
        r.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
            applicationId: t,
            collections: e.body.collections.map(s.A.fromServer),
            includePricing: C,
            skuTypes: d,
        });
    } catch (e) {
        r.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
            applicationId: t,
            apiError: new c.A(e),
        });
    }
}
