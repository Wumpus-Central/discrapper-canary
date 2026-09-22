i.d(t, { H: () => O, HX: () => h, Su: () => p, _v: () => d, cS: () => T, d2: () => C, q7: () => s });
var l = i(228366),
    r = i(181658),
    c = i(773669),
    n = i(371794),
    o = i(100704),
    _ = i(730202),
    u = i(442007),
    a = i(652215);
async function d(e) {
    let {
            collectionIds: t,
            includeUnpublishedProducts: i = !1,
            includeUnpublishedCollections: d = !1,
            ignoreCache: s = !1,
            includePricing: O = !1,
        } = e,
        T = t.filter(
            (e) =>
                !!e &&
                (0, o.d3)({
                    fetchState: _.A.getFetchState(e),
                    fetchedAt: _.A.getFetchedAt(e),
                    needsPricing: O,
                    hasPricingCoverage: _.A.hasPricingCoverage(e),
                }),
        );
    if (0 !== T.length)
        try {
            l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: T, includePricing: O });
            let e = await (0, n.aP)({
                url: a.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: T,
                    locale: c.default.locale,
                    with_bundled_skus: !0,
                    include_pricing: O,
                    include_google_sku_ids: !1,
                    include_unpublished_products: i,
                    include_unpublished_collections: d,
                    ignore_cache: s,
                },
                rejectWithError: !0,
            });
            l.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: T,
                collections: e.body.collections.map(u.A.fromServer),
                includePricing: O,
            });
        } catch (e) {
            l.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: T,
                apiError: new r.A(e),
            });
        }
}
function s(e) {
    let {
        applicationId: t,
        useShopOrdering: i = !0,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollections: r = !1,
    } = e;
    return `${t}:${i}:${l}:${r}`;
}
function O(e) {
    return `${s(e)}:${e.offset}:${e.limit}`;
}
async function T(e) {
    let {
        applicationId: t,
        offset: i,
        limit: d,
        useShopOrdering: T = !0,
        includeUnpublishedProducts: h = !1,
        includeUnpublishedCollections: p = !1,
        ignoreCache: C = !1,
    } = e;
    if (!t) return;
    let E = O(e),
        S = s(e),
        A = _.A.getCollectionPageFetchState(E);
    if ("loading" === A) return;
    let R = _.A.getCollectionPageFetchedAt(E);
    if (!C && null != R) {
        let e = "error" === A ? o.qq : o.HB;
        if (Date.now() - R <= e) return;
    }
    try {
        l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: E });
        let e = await (0, n.aP)({
            url: a.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                use_shop_ordering: T,
                offset: i,
                limit: d,
                include_pricing: !0,
                locale: c.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: h,
                include_unpublished_collections: p,
                ignore_cache: C,
            },
            rejectWithError: !0,
        });
        l.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS",
            pageKey: E,
            listKey: S,
            applicationId: t,
            collections: e.body.collections.map(u.A.fromServer),
            total: e.body.total,
        });
    } catch (e) {
        l.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE",
            pageKey: E,
            apiError: new r.A(e),
        });
    }
}
function h(e) {
    let {
        applicationId: t,
        anchorCollectionId: i,
        limit: l,
        includeUnpublishedProducts: r = !1,
        includeUnpublishedCollections: c = !1,
    } = e;
    return `${t}:after:${i}:${l}:${r}:${c}`;
}
async function p(e) {
    let {
        applicationId: t,
        anchorCollectionId: i,
        limit: d,
        includeUnpublishedProducts: s = !1,
        includeUnpublishedCollections: O = !1,
        ignoreCache: T = !1,
    } = e;
    if (!t || !i) return;
    let p = h(e),
        C = _.A.getCollectionsAfterFetchState(p);
    if ("loading" === C) return;
    let E = _.A.getCollectionsAfterFetchedAt(p);
    if (!T && null != E) {
        let e = "error" === C ? o.qq : o.HB;
        if (Date.now() - E <= e) return;
    }
    try {
        l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: p });
        let e = await (0, n.aP)({
            url: a.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                use_shop_ordering: !0,
                anchor_collection_id: i,
                limit: d,
                include_products: !1,
                include_pricing: !1,
                include_google_sku_ids: !1,
                locale: c.default.locale,
                include_unpublished_products: s,
                include_unpublished_collections: O,
                ignore_cache: T,
            },
            rejectWithError: !0,
        });
        l.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS",
            requestKey: p,
            collections: e.body.collections.map(u.A.fromServer),
        });
    } catch (e) {
        l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE", requestKey: p, apiError: new r.A(e) });
    }
}
async function C(e) {
    let {
        applicationId: t,
        includeUnpublishedProducts: i = !1,
        includeUnpublishedCollections: d = !1,
        ignoreCache: s = !1,
        skuTypes: O,
        includePricing: T = !1,
    } = e;
    if (!t) return;
    let h = _.A.getFetchStateForApplication(t);
    if ("loading" === h) return;
    let p = _.A.getFetchedAtForApplication(t);
    if (null != p) {
        let e = "error" === h ? o.qq : o.HB;
        if (Date.now() - p <= e) {
            let e = _.A.getFetchParamsForApplication(t);
            if (
                "error" === h ||
                (null != e &&
                    (function (e, t) {
                        if (t.includePricing && !e.includePricing) return !1;
                        let i = new Set(e.skuTypes ?? []);
                        return (t.skuTypes ?? []).every((e) => i.has(e));
                    })(e, { includePricing: T, skuTypes: O }))
            )
                return;
        }
    }
    try {
        l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: t });
        let e = await (0, n.aP)({
            url: a.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                locale: c.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: i,
                include_unpublished_collections: d,
                ignore_cache: s,
                ...(null != O ? { sku_types: O } : {}),
                ...(T ? { include_pricing: !0 } : {}),
            },
            rejectWithError: !0,
        });
        l.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
            applicationId: t,
            collections: e.body.collections.map(u.A.fromServer),
            includePricing: T,
            skuTypes: O,
        });
    } catch (e) {
        l.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
            applicationId: t,
            apiError: new r.A(e),
        });
    }
}
