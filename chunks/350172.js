var l = r(73153),
    n = r(181658),
    c = r(773669),
    o = r(371794),
    i = r(100704),
    u = r(730202),
    s = r(634393),
    _ = r(442007),
    a = r(652215);
function d(t) {
    let {
            applicationId: e,
            useShopOrdering: r = !0,
            includeUnpublishedProducts: l = !1,
            includeUnpublishedCollections: n = !1,
        } = t,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, s.Kd)();
    return `${e}:${r}:${l}:${n}:${c}`;
}
function T(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, s.Kd)();
    return `${d(t, e)}:${t.offset}:${t.limit}`;
}
function O(t) {
    let {
        applicationId: e,
        anchorCollectionId: r,
        limit: l,
        includeUnpublishedProducts: n = !1,
        includeUnpublishedCollections: c = !1,
    } = t;
    return `${e}:after:${r}:${l}:${n}:${c}`;
}
r.d(
    e,
    {},
    {
        H: T,
        HX: O,
        Su: async function (t) {
            let {
                applicationId: e,
                anchorCollectionId: r,
                limit: s,
                includeUnpublishedProducts: d = !1,
                includeUnpublishedCollections: T = !1,
                ignoreCache: E = !1,
            } = t;
            if (!e || !r) return;
            let C = O(t),
                S = u.A.getCollectionsAfterFetchState(C);
            if ("loading" === S) return;
            let h = u.A.getCollectionsAfterFetchedAt(C);
            if (!E && null != h) {
                let t = "error" === S ? i.qq : i.HB;
                if (Date.now() - h <= t) return;
            }
            try {
                l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: C });
                let t = await (0, o.aP)({
                    url: a.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                    query: {
                        application_id: e,
                        use_shop_ordering: !0,
                        anchor_collection_id: r,
                        limit: s,
                        include_products: !1,
                        include_pricing: !1,
                        include_google_sku_ids: !1,
                        locale: c.default.locale,
                        include_unpublished_products: d,
                        include_unpublished_collections: T,
                        ignore_cache: E,
                    },
                    rejectWithError: !0,
                });
                l.h.dispatch({
                    type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS",
                    requestKey: C,
                    collections: t.body.collections.map(_.A.fromServer),
                });
            } catch (t) {
                l.h.dispatch({
                    type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE",
                    requestKey: C,
                    apiError: new n.A(t),
                });
            }
        },
        _v: async function (t) {
            let {
                    collectionIds: e,
                    includeUnpublishedProducts: r = !1,
                    includeUnpublishedCollections: d = !1,
                    ignoreCache: T = !1,
                    includePricing: O = !1,
                } = t,
                { retryAfterError: E = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                C = (0, s.tz)(),
                S = (0, s.Kd)(C),
                h = e.filter((t) => {
                    if (!t) return !1;
                    let e = u.A.getFetchState(t);
                    return (
                        !!(
                            (E && "error" === e) ||
                            (O && "success" === e && u.A.hasPricingCoverage(t) && u.A.getPricingKey(t) !== S)
                        ) ||
                        (0, i.d3)({
                            fetchState: e,
                            fetchedAt: u.A.getFetchedAt(t),
                            needsPricing: O,
                            hasPricingCoverage: u.A.hasPricingCoverage(t),
                        })
                    );
                });
            if (0 !== h.length)
                try {
                    l.h.dispatch({
                        type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH",
                        collectionIds: h,
                        includePricing: O,
                    });
                    let t = await (0, o.aP)({
                        url: a.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                        query: {
                            ...C,
                            collection_ids: h,
                            locale: c.default.locale,
                            with_bundled_skus: !0,
                            include_pricing: O,
                            include_google_sku_ids: !1,
                            include_unpublished_products: r,
                            include_unpublished_collections: d,
                            ignore_cache: T,
                        },
                        rejectWithError: !0,
                    });
                    l.h.dispatch({
                        type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                        collectionIds: h,
                        collections: t.body.collections.map(_.A.fromServer),
                        includePricing: O,
                        pricingKey: S,
                    });
                } catch (t) {
                    l.h.dispatch({
                        type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                        collectionIds: h,
                        apiError: new n.A(t),
                    });
                }
        },
        cS: async function (t) {
            let { retryAfterError: e = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                {
                    applicationId: r,
                    offset: O,
                    limit: E,
                    useShopOrdering: C = !0,
                    includeUnpublishedProducts: S = !1,
                    includeUnpublishedCollections: h = !1,
                    ignoreCache: F = !1,
                } = t;
            if (!r) return;
            let R = (0, s.tz)(),
                f = (0, s.Kd)(R),
                A = T(t, f),
                g = d(t, f),
                I = u.A.getCollectionPageFetchState(A);
            if ("loading" === I) return;
            let p = u.A.getCollectionPageFetchedAt(A);
            if (!F && null != p && !(e && "error" === I)) {
                let t = "error" === I ? i.qq : i.HB;
                if (Date.now() - p <= t) return;
            }
            try {
                l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey: A });
                let t = await (0, o.aP)({
                    url: a.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                    query: {
                        ...R,
                        application_id: r,
                        use_shop_ordering: C,
                        offset: O,
                        limit: E,
                        include_pricing: !0,
                        locale: c.default.locale,
                        with_bundled_skus: !0,
                        include_google_sku_ids: !1,
                        include_unpublished_products: S,
                        include_unpublished_collections: h,
                        ignore_cache: F,
                    },
                    rejectWithError: !0,
                });
                l.h.dispatch({
                    type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS",
                    pageKey: A,
                    listKey: g,
                    applicationId: r,
                    collections: t.body.collections.map(_.A.fromServer),
                    total: t.body.total,
                    pricingKey: f,
                });
            } catch (t) {
                l.h.dispatch({
                    type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE",
                    pageKey: A,
                    apiError: new n.A(t),
                });
            }
        },
        d2: async function (t) {
            let {
                applicationId: e,
                includeUnpublishedProducts: r = !1,
                includeUnpublishedCollections: s = !1,
                ignoreCache: d = !1,
                skuTypes: T,
                includePricing: O = !1,
            } = t;
            if (!e) return;
            let E = u.A.getFetchStateForApplication(e);
            if ("loading" === E) return;
            let C = u.A.getFetchedAtForApplication(e);
            if (null != C) {
                let t = "error" === E ? i.qq : i.HB;
                if (Date.now() - C <= t) {
                    let t = u.A.getFetchParamsForApplication(e);
                    if (
                        "error" === E ||
                        (null != t &&
                            (function (t, e) {
                                if (e.includePricing && !t.includePricing) return !1;
                                let r = new Set(t.skuTypes ?? []);
                                return (e.skuTypes ?? []).every((t) => r.has(t));
                            })(t, { includePricing: O, skuTypes: T }))
                    )
                        return;
                }
            }
            try {
                l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId: e });
                let t = await (0, o.aP)({
                    url: a.Rsh.STOREFRONT_COLLECTIONS_FOR_APPLICATION,
                    query: {
                        application_id: e,
                        locale: c.default.locale,
                        with_bundled_skus: !0,
                        include_google_sku_ids: !1,
                        include_unpublished_products: r,
                        include_unpublished_collections: s,
                        ignore_cache: d,
                        ...(null != T ? { sku_types: T } : {}),
                        ...(O ? { include_pricing: !0 } : {}),
                    },
                    rejectWithError: !0,
                });
                l.h.dispatch({
                    type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS",
                    applicationId: e,
                    collections: t.body.collections.map(_.A.fromServer),
                    includePricing: O,
                    skuTypes: T,
                });
            } catch (t) {
                l.h.dispatch({
                    type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE",
                    applicationId: e,
                    apiError: new n.A(t),
                });
            }
        },
        q7: d,
    },
);
