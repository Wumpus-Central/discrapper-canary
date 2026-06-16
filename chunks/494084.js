r.d(t, { A: () => H });
var l = r(64700),
    o = r(228366),
    c = r(181658),
    n = r(773669),
    s = r(927813),
    a = r(371794),
    u = r(17928);
let i = {},
    d = {};
class S extends u.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(e) {
        return null != e ? i[e]?.state : void 0;
    }
    getFetchStateForApplication(e) {
        return null != e ? d[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? i[e]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(e) {
        return null != e ? d[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? i[e]?.fetchError : void 0;
    }
    getFetchErrorForApplication(e) {
        return null != e ? d[e]?.fetchError : void 0;
    }
    getCollection(e) {
        let t = null != e ? i[e] : null;
        return null == t || t?.state === "error" || null == t.collection ? null : t.collection;
    }
    getCollectionsForApplication(e) {
        let t = null != e ? d[e] : null;
        return null == t || "error" === t.state || null == t.collections ? null : t.collections;
    }
}
let _ = new S(o.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: (e) => {
        let { collectionIds: t } = e;
        t.forEach((e) => {
            i[e] = { state: "loading", collection: i[e]?.collection };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: (e) => {
        let { collectionIds: t, collections: r } = e,
            l = Date.now(),
            o = new Set();
        r.forEach((e) => {
            o.add(e.id), (i[e.id] = { state: "success", collection: e, fetchedAt: l });
        }),
            t.forEach((e) => {
                o.has(e) || delete i[e];
            });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: (e) => {
        let { collectionIds: t, apiError: r } = e,
            l = Date.now();
        t.forEach((e) => {
            i[e] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: (e) => {
        let { applicationId: t } = e;
        d[t] = { state: "loading", collections: d[t]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: (e) => {
        let { applicationId: t, collections: r } = e,
            l = Date.now();
        (d[t] = { state: "success", collections: r, fetchedAt: l }),
            r.forEach((e) => {
                i[e.id] = { state: "success", collection: e, fetchedAt: l };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: (e) => {
        let { applicationId: t, apiError: r } = e;
        d[t] = { state: "error", fetchedAt: Date.now(), fetchError: r };
    },
    LOGOUT: (e) => {
        (i = {}), (d = {});
    },
});
var h = r(442007),
    E = r(652215);
let T = 12 * s.A.Millis.HOUR,
    O = 10 * s.A.Millis.MINUTE;
async function C(e) {
    let {
            collectionIds: t,
            includeUnpublishedProducts: r = !1,
            includeUnpublishedCollections: l = !1,
            ignoreCache: s = !1,
        } = e,
        u = t.filter((e) => {
            if (!e) return !1;
            let t = _.getFetchState(e);
            if ("loading" === t) return !1;
            let r = _.getFetchedAt(e);
            return null == r || Date.now() - r > ("error" === t ? O : T);
        });
    if (0 !== u.length)
        try {
            o.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: u });
            let e = await (0, a.aP)({
                url: E.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: u,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: r,
                    include_unpublished_collections: l,
                    ignore_cache: s,
                },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: u,
                collections: e.body.collections.map(h.A.fromServer),
            });
        } catch (e) {
            o.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: u,
                apiError: new c.A(e),
            });
        }
}
r(321073);
let F = {},
    f = {};
class R extends u.Ay.Store {
    static displayName = "StorefrontProductStore";
    getFetchState(e) {
        return null != e ? F[e]?.state : void 0;
    }
    getFetchStateForSku(e) {
        return null != e ? f[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? F[e]?.fetchedAt : void 0;
    }
    getFetchedAtForSku(e) {
        return null != e ? f[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? F[e]?.fetchError : void 0;
    }
    getFetchErrorForSku(e) {
        return null != e ? f[e]?.fetchError : void 0;
    }
    getProduct(e) {
        let t = null != e ? F[e] : null;
        return null == t || t?.state === "error" || null == t.product ? null : t.product;
    }
    getProductsForSku(e) {
        return null != e ? f[e]?.products : void 0;
    }
}
let p = new R(o.h, {
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: (e) => {
        let { productIds: t } = e;
        t.forEach((e) => {
            F[e] = { state: "loading", product: F[e]?.product };
        });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: (e) => {
        let { productIds: t, products: r } = e,
            l = Date.now(),
            o = new Set();
        r.forEach((e) => {
            o.add(e.id), (F[e.id] = { state: "success", product: e, fetchedAt: l });
        }),
            t.forEach((e) => {
                o.has(e) || delete F[e];
            });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: (e) => {
        let { productIds: t, apiError: r } = e,
            l = Date.now();
        t.forEach((e) => {
            F[e] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: (e) => {
        let { skuIds: t } = e;
        t.forEach((e) => {
            f[e] = { state: "loading", products: f[e]?.products };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: (e) => {
        let { skuIds: t, products: r } = e,
            l = Date.now(),
            o = r.reduce(
                (e, t) => (
                    t.skuIds.forEach((r) => {
                        null == e[r] ? (e[r] = [t]) : e[r].push(t);
                    }),
                    e
                ),
                {},
            );
        t.forEach((e) => {
            null == o[e] ? delete f[e] : (f[e] = { state: "success", products: o[e], fetchedAt: l });
        }),
            r.forEach((e) => {
                F[e.id] = { state: "success", product: e, fetchedAt: l };
            });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: (e) => {
        let { skuIds: t, apiError: r } = e,
            l = Date.now();
        t.forEach((e) => {
            f[e] = { state: "error", fetchedAt: l, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: (e) => {
        let { collections: t } = e,
            r = Date.now();
        t.forEach((e) => {
            e.products.forEach((e) => {
                F[e.id] = { state: "success", product: e, fetchedAt: r };
            });
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: (e) => {
        let { collections: t } = e,
            r = Date.now();
        t.forEach((e) => {
            e.products.forEach((e) => {
                F[e.id] = { state: "success", product: e, fetchedAt: r };
            });
        });
    },
    LOGOUT: (e) => {
        (F = {}), (f = {});
    },
});
var I = r(103348);
let g = 12 * s.A.Millis.HOUR,
    U = 10 * s.A.Millis.MINUTE;
async function A(e) {
    let { skuIds: t, ignoreCache: r = !1 } = e,
        l = t.filter((e) => {
            if (!e) return !1;
            let t = p.getFetchStateForSku(e);
            if ("loading" === t) return !1;
            let r = p.getFetchedAtForSku(e);
            return null == r || Date.now() - r > ("error" === t ? U : g);
        });
    if (0 !== l.length)
        try {
            o.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: l });
            let e = await (0, a.aP)({
                url: E.Rsh.STOREFRONT_PRODUCTS_BY_SKU_IDS,
                query: {
                    sku_ids: l,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    ignore_cache: r,
                },
                rejectWithError: !0,
            });
            o.h.dispatch({
                type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
                skuIds: l,
                products: e.body.products.map(I.A.fromServer),
            });
        } catch (e) {
            o.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: l, apiError: new c.A(e) });
        }
}
var L = r(564064),
    N = r(510801),
    D = r(986630);
function P(e, t) {
    let [r, o] = l.useState({ id: e, sawFetch: !1 }),
        c = r.sawFetch;
    return (
        r.id !== e
            ? o({ id: e, sawFetch: (c = null != t) })
            : null == t || r.sawFetch || o({ id: e, sawFetch: (c = !0) }),
        "" !== e && null == t && c
    );
}
function H(e) {
    let { needsCategory: t = !0, seedCategoryStore: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { products: o, fetchState: c } = (function (e) {
            let { skuId: t, ignoreCache: r = !1 } = e;
            return (
                l.useEffect(() => {
                    A({ skuIds: [t], ignoreCache: r });
                }, [t, r]),
                (0, u.cf)([p], () => ({
                    products: p.getProductsForSku(t),
                    fetchState: p.getFetchStateForSku(t),
                    fetchedAt: p.getFetchedAtForSku(t),
                    fetchError: p.getFetchErrorForSku(t),
                }))
            );
        })({ skuId: e }),
        n = o?.[0],
        s = t ? (n?.primaryCollectionId ?? "") : "",
        { collection: a, fetchState: i } = (function (e) {
            let {
                collectionId: t,
                includeUnpublishedProducts: r = !1,
                includeUnpublishedCollections: o = !1,
                ignoreCache: c = !1,
            } = e;
            return (
                l.useEffect(() => {
                    C({
                        collectionIds: [t],
                        includeUnpublishedProducts: r,
                        includeUnpublishedCollections: o,
                        ignoreCache: c,
                    });
                }, [t, r, o, c]),
                (0, u.cf)([_], () => ({
                    collection: _.getCollection(t),
                    fetchState: _.getFetchState(t),
                    fetchedAt: _.getFetchedAt(t),
                    fetchError: _.getFetchError(t),
                }))
            );
        })({ collectionId: s }),
        d = l.useMemo(() => (null != n ? (D.A.fromStorefrontProductRecord(n) ?? null) : null), [n]),
        S = l.useMemo(() => (t && null != a ? N.A.fromStorefrontCollectionRecord(a) : null), [t, a]),
        h = P(e, c),
        E = P(t ? s : "", i),
        T = l.useMemo(
            () =>
                "error" === c || h || (t && ("error" === i || E)) || ("success" === c && (null == d || (t && "" === s)))
                    ? "error"
                    : null == d || (t && null == S)
                      ? "loading"
                      : "ready",
            [c, h, i, E, t, s, d, S],
        );
    return (
        l.useEffect(() => {
            r && null != d && (0, L.rh)(d);
        }, [r, d]),
        {
            product: d,
            category: S,
            state: T,
            retry: l.useCallback(() => {
                A({ skuIds: [e], ignoreCache: !0 }), t && "" !== s && C({ collectionIds: [s], ignoreCache: !0 });
            }, [e, t, s]),
        }
    );
}
