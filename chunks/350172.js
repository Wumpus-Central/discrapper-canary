l.d(t, { H: () => T, HX: () => C, Su: () => E, _v: () => a, cS: () => d, d2: () => h, q7: () => O });
var c = l(228366),
    n = l(181658),
    r = l(773669),
    o = l(371794),
    i = l(100704),
    u = l(730202),
    _ = l(442007),
    s = l(652215);
async function a(e) {
    let {
            collectionIds: t,
            includeUnpublishedProducts: l = !1,
            includeUnpublishedCollections: a = !1,
            ignoreCache: O = !1,
            includePricing: T = !1,
        } = e,
        d = t.filter(
            (e) =>
                !!e &&
                (0, i.d3)({
                    fetchState: u.A.getFetchState(e),
                    fetchedAt: u.A.getFetchedAt(e),
                    needsPricing: T,
                    hasPricingCoverage: u.A.hasPricingCoverage(e),
                }),
        );
    if (0 !== d.length)
        try {
            c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: d, includePricing: T });
            let e = await (0, o.aP)({
                url: s.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: d,
                    locale: r.default.locale,
                    with_bundled_skus: !0,
                    include_pricing: T,
                    include_google_sku_ids: !1,
                    include_unpublished_products: l,
                    include_unpublished_collections: a,
                    ignore_cache: O,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: d,
                collections: e.body.collections.map(_.A.fromServer),
                includePricing: T,
            });
        } catch (e) {
            c.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: d,
                apiError: new n.A(e),
            });
        }
}
function O(e) {
    let {
        applicationId: t,
        useShopOrdering: l = !0,
        includeUnpublishedProducts: c = !1,
        includeUnpublishedCollections: n = !1,
    } = e;
    return `${t}:${l}:${c}:${n}`;
}
function T(e) {
    return `${O(e)}:${e.offset}:${e.limit}`;
}
async function d(e) {
    let {
        applicationId: t,
        offset: l,
        limit: a,
        useShopOrdering: d = !0,
        includeUnpublishedProducts: C = !1,
        includeUnpublishedCollections: E = !1,
        ignoreCache: h = !1,
    } = e;
    if (!t) return;
    let F = T(e),
        S = O(e),
        A = u.A.getCollectionPageFetchState(F);
    if ("loading" === A) return;
    let R = u.A.getCollectionPageFetchedAt(F);
    if (!h && null != R) {
        let e = "error" === A ? i.qq : i.HB;
        if (Date.now() - R <= e) return;
    }
    try {
        c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: F });
        let e = await (0, o.aP)({
            url: s.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                use_shop_ordering: d,
                offset: l,
                limit: a,
                include_pricing: !0,
                locale: r.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: C,
                include_unpublished_collections: E,
                ignore_cache: h,
            },
            rejectWithError: !0,
        });
        c.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS",
            pageKey: F,
            listKey: S,
            applicationId: t,
            collections: e.body.collections.map(_.A.fromServer),
            total: e.body.total,
        });
    } catch (e) {
        c.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE",
            pageKey: F,
            apiError: new n.A(e),
        });
    }
}
function C(e) {
    let {
        applicationId: t,
        anchorCollectionId: l,
        limit: c,
        includeUnpublishedProducts: n = !1,
        includeUnpublishedCollections: r = !1,
    } = e;
    return `${t}:after:${l}:${c}:${n}:${r}`;
}
async function E(e) {
    let {
        applicationId: t,
        anchorCollectionId: l,
        limit: a,
        includeUnpublishedProducts: O = !1,
        includeUnpublishedCollections: T = !1,
        ignoreCache: d = !1,
    } = e;
    if (!t || !l) return;
    let E = C(e),
        h = u.A.getCollectionsAfterFetchState(E);
    if ("loading" === h) return;
    let F = u.A.getCollectionsAfterFetchedAt(E);
    if (!d && null != F) {
        let e = "error" === h ? i.qq : i.HB;
        if (Date.now() - F <= e) return;
    }
    try {
        c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: E });
        let e = await (0, o.aP)({
            url: s.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                use_shop_ordering: !0,
                anchor_collection_id: l,
                limit: a,
                include_products: !1,
                include_pricing: !1,
                include_google_sku_ids: !1,
                locale: r.default.locale,
                include_unpublished_products: O,
                include_unpublished_collections: T,
                ignore_cache: d,
            },
            rejectWithError: !0,
        });
        c.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS",
            requestKey: E,
            collections: e.body.collections.map(_.A.fromServer),
        });
    } catch (e) {
        c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE", requestKey: E, apiError: new n.A(e) });
    }
}
async function h(e) {
    let {
        applicationId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollections: a = !1,
        ignoreCache: O = !1,
        skuTypes: T,
        includePricing: d = !1,
    } = e;
    if (!t) return;
    let C = u.A.getFetchStateForApplication(t);
    if ("loading" === C) return;
    let E = u.A.getFetchedAtForApplication(t);
    if (null != E) {
        let e = "error" === C ? i.qq : i.HB;
        if (Date.now() - E <= e) {
            let e = u.A.getFetchParamsForApplication(t);
            if (
                "error" === C ||
                (null != e &&
                    (function (e, t) {
                        if (t.includePricing && !e.includePricing) return !1;
                        let l = new Set(e.skuTypes ?? []);
                        return (t.skuTypes ?? []).every((e) => l.has(e));
                    })(e, { includePricing: d, skuTypes: T }))
            )
                return;
        }
    }
    try {
        c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: t });
        let e = await (0, o.aP)({
            url: s.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                locale: r.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: l,
                include_unpublished_collections: a,
                ignore_cache: O,
                ...(null != T ? { sku_types: T } : {}),
                ...(d ? { include_pricing: !0 } : {}),
            },
            rejectWithError: !0,
        });
        c.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
            applicationId: t,
            collections: e.body.collections.map(_.A.fromServer),
            includePricing: d,
            skuTypes: T,
        });
    } catch (e) {
        c.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
            applicationId: t,
            apiError: new n.A(e),
        });
    }
}
