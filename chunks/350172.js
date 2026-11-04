l.d(t, { H: () => d, HX: () => C, Su: () => E, _v: () => a, cS: () => T, d2: () => h, q7: () => O });
var n = l(73153),
    c = l(181658),
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
            includePricing: d = !1,
        } = e,
        { retryAfterError: T = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        C = t.filter((e) => {
            if (!e) return !1;
            let t = u.A.getFetchState(e);
            return (
                (!!T && "error" === t) ||
                (0, i.d3)({
                    fetchState: t,
                    fetchedAt: u.A.getFetchedAt(e),
                    needsPricing: d,
                    hasPricingCoverage: u.A.hasPricingCoverage(e),
                })
            );
        });
    if (0 !== C.length)
        try {
            n.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: C, includePricing: d });
            let e = await (0, o.aP)({
                url: s.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: C,
                    locale: r.default.locale,
                    with_bundled_skus: !0,
                    include_pricing: d,
                    include_google_sku_ids: !1,
                    include_unpublished_products: l,
                    include_unpublished_collections: a,
                    ignore_cache: O,
                },
                rejectWithError: !0,
            });
            n.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: C,
                collections: e.body.collections.map(_.A.fromServer),
                includePricing: d,
            });
        } catch (e) {
            n.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: C,
                apiError: new c.A(e),
            });
        }
}
function O(e) {
    let {
        applicationId: t,
        useShopOrdering: l = !0,
        includeUnpublishedProducts: n = !1,
        includeUnpublishedCollections: c = !1,
    } = e;
    return `${t}:${l}:${n}:${c}`;
}
function d(e) {
    return `${O(e)}:${e.offset}:${e.limit}`;
}
async function T(e) {
    let { retryAfterError: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            applicationId: l,
            offset: a,
            limit: T,
            useShopOrdering: C = !0,
            includeUnpublishedProducts: E = !1,
            includeUnpublishedCollections: h = !1,
            ignoreCache: F = !1,
        } = e;
    if (!l) return;
    let S = d(e),
        A = O(e),
        R = u.A.getCollectionPageFetchState(S);
    if ("loading" === R) return;
    let I = u.A.getCollectionPageFetchedAt(S);
    if (!F && null != I && !(t && "error" === R)) {
        let e = "error" === R ? i.qq : i.HB;
        if (Date.now() - I <= e) return;
    }
    try {
        n.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: S });
        let e = await (0, o.aP)({
            url: s.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: l,
                use_shop_ordering: C,
                offset: a,
                limit: T,
                include_pricing: !0,
                locale: r.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: E,
                include_unpublished_collections: h,
                ignore_cache: F,
            },
            rejectWithError: !0,
        });
        n.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS",
            pageKey: S,
            listKey: A,
            applicationId: l,
            collections: e.body.collections.map(_.A.fromServer),
            total: e.body.total,
        });
    } catch (e) {
        n.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE",
            pageKey: S,
            apiError: new c.A(e),
        });
    }
}
function C(e) {
    let {
        applicationId: t,
        anchorCollectionId: l,
        limit: n,
        includeUnpublishedProducts: c = !1,
        includeUnpublishedCollections: r = !1,
    } = e;
    return `${t}:after:${l}:${n}:${c}:${r}`;
}
async function E(e) {
    let {
        applicationId: t,
        anchorCollectionId: l,
        limit: a,
        includeUnpublishedProducts: O = !1,
        includeUnpublishedCollections: d = !1,
        ignoreCache: T = !1,
    } = e;
    if (!t || !l) return;
    let E = C(e),
        h = u.A.getCollectionsAfterFetchState(E);
    if ("loading" === h) return;
    let F = u.A.getCollectionsAfterFetchedAt(E);
    if (!T && null != F) {
        let e = "error" === h ? i.qq : i.HB;
        if (Date.now() - F <= e) return;
    }
    try {
        n.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: E });
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
                include_unpublished_collections: d,
                ignore_cache: T,
            },
            rejectWithError: !0,
        });
        n.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS",
            requestKey: E,
            collections: e.body.collections.map(_.A.fromServer),
        });
    } catch (e) {
        n.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE", requestKey: E, apiError: new c.A(e) });
    }
}
async function h(e) {
    let {
        applicationId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollections: a = !1,
        ignoreCache: O = !1,
        skuTypes: d,
        includePricing: T = !1,
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
                    })(e, { includePricing: T, skuTypes: d }))
            )
                return;
        }
    }
    try {
        n.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: t });
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
                ...(null != d ? { sku_types: d } : {}),
                ...(T ? { include_pricing: !0 } : {}),
            },
            rejectWithError: !0,
        });
        n.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
            applicationId: t,
            collections: e.body.collections.map(_.A.fromServer),
            includePricing: T,
            skuTypes: d,
        });
    } catch (e) {
        n.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
            applicationId: t,
            apiError: new c.A(e),
        });
    }
}
