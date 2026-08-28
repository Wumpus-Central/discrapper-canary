l.d(t, { H: () => C, HX: () => F, Su: () => S, _v: () => T, cS: () => E, d2: () => h, q7: () => d });
var c = l(228366),
    o = l(181658),
    n = l(773669),
    r = l(927813),
    i = l(371794),
    _ = l(730202),
    u = l(442007),
    s = l(652215);
let a = 12 * r.A.Millis.HOUR,
    O = 10 * r.A.Millis.MINUTE;
async function T(e) {
    let {
            collectionIds: t,
            includeUnpublishedProducts: l = !1,
            includeUnpublishedCollections: r = !1,
            ignoreCache: T = !1,
        } = e,
        d = t.filter((e) => {
            if (!e) return !1;
            let t = _.A.getFetchState(e);
            if ("loading" === t) return !1;
            let l = _.A.getFetchedAt(e);
            return null == l || Date.now() - l > ("error" === t ? O : a);
        });
    if (0 !== d.length)
        try {
            c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: d });
            let e = await (0, i.aP)({
                url: s.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: d,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: l,
                    include_unpublished_collections: r,
                    ignore_cache: T,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: d,
                collections: e.body.collections.map(u.A.fromServer),
            });
        } catch (e) {
            c.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: d,
                apiError: new o.A(e),
            });
        }
}
function d(e) {
    let {
        applicationId: t,
        useShopOrdering: l = !0,
        includeUnpublishedProducts: c = !1,
        includeUnpublishedCollections: o = !1,
    } = e;
    return `${t}:${l}:${c}:${o}`;
}
function C(e) {
    return `${d(e)}:${e.offset}:${e.limit}`;
}
async function E(e) {
    let {
        applicationId: t,
        offset: l,
        limit: r,
        useShopOrdering: T = !0,
        includeUnpublishedProducts: E = !1,
        includeUnpublishedCollections: F = !1,
        ignoreCache: S = !1,
    } = e;
    if (!t) return;
    let h = C(e),
        A = d(e),
        R = _.A.getCollectionPageFetchState(h);
    if ("loading" === R) return;
    let I = _.A.getCollectionPageFetchedAt(h);
    if (!(!S && null != I && Date.now() - I <= ("error" === R ? O : a)))
        try {
            c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: h });
            let e = await (0, i.aP)({
                url: s.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                query: {
                    application_id: t,
                    use_shop_ordering: T,
                    offset: l,
                    limit: r,
                    include_pricing: !0,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: E,
                    include_unpublished_collections: F,
                    ignore_cache: S,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS",
                pageKey: h,
                listKey: A,
                applicationId: t,
                collections: e.body.collections.map(u.A.fromServer),
                total: e.body.total,
            });
        } catch (e) {
            c.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE",
                pageKey: h,
                apiError: new o.A(e),
            });
        }
}
function F(e) {
    let {
        applicationId: t,
        anchorCollectionId: l,
        limit: c,
        includeUnpublishedProducts: o = !1,
        includeUnpublishedCollections: n = !1,
    } = e;
    return `${t}:after:${l}:${c}:${o}:${n}`;
}
async function S(e) {
    let {
        applicationId: t,
        anchorCollectionId: l,
        limit: r,
        includeUnpublishedProducts: T = !1,
        includeUnpublishedCollections: d = !1,
        ignoreCache: C = !1,
    } = e;
    if (!t || !l) return;
    let E = F(e),
        S = _.A.getCollectionsAfterFetchState(E);
    if ("loading" === S) return;
    let h = _.A.getCollectionsAfterFetchedAt(E);
    if (!(!C && null != h && Date.now() - h <= ("error" === S ? O : a)))
        try {
            c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: E });
            let e = await (0, i.aP)({
                url: s.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                query: {
                    application_id: t,
                    use_shop_ordering: !0,
                    anchor_collection_id: l,
                    limit: r,
                    include_products: !1,
                    include_pricing: !1,
                    include_google_sku_ids: !1,
                    locale: n.default.locale,
                    include_unpublished_products: T,
                    include_unpublished_collections: d,
                    ignore_cache: C,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS",
                requestKey: E,
                collections: e.body.collections.map(u.A.fromServer),
            });
        } catch (e) {
            c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE", requestKey: E, apiError: new o.A(e) });
        }
}
async function h(e) {
    let {
        applicationId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollections: r = !1,
        ignoreCache: T = !1,
        skuTypes: d,
        includePricing: C = !1,
    } = e;
    if (!t) return;
    let E = _.A.getFetchStateForApplication(t);
    if ("loading" === E) return;
    let F = _.A.getFetchedAtForApplication(t);
    if (null != F && Date.now() - F <= ("error" === E ? O : a)) {
        let e = _.A.getFetchParamsForApplication(t);
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
        c.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: t });
        let e = await (0, i.aP)({
            url: s.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
            query: {
                application_id: t,
                locale: n.default.locale,
                with_bundled_skus: !0,
                include_google_sku_ids: !1,
                include_unpublished_products: l,
                include_unpublished_collections: r,
                ignore_cache: T,
                ...(null != d ? { sku_types: d } : {}),
                ...(C ? { include_pricing: !0 } : {}),
            },
            rejectWithError: !0,
        });
        c.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
            applicationId: t,
            collections: e.body.collections.map(u.A.fromServer),
            includePricing: C,
            skuTypes: d,
        });
    } catch (e) {
        c.h.dispatch({
            type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
            applicationId: t,
            apiError: new o.A(e),
        });
    }
}
