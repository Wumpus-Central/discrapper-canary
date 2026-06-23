r.d(e, { A: () => P });
var o = r(64700),
    l = r(228366),
    c = r(181658),
    n = r(773669),
    u = r(927813),
    s = r(371794),
    i = r(17928);
let a = {},
    S = {};
class _ extends i.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(t) {
        return null != t ? a[t]?.state : void 0;
    }
    getFetchStateForApplication(t) {
        return null != t ? S[t]?.state : void 0;
    }
    getFetchedAt(t) {
        return null != t ? a[t]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(t) {
        return null != t ? S[t]?.fetchedAt : void 0;
    }
    getFetchError(t) {
        return null != t ? a[t]?.fetchError : void 0;
    }
    getFetchErrorForApplication(t) {
        return null != t ? S[t]?.fetchError : void 0;
    }
    getCollection(t) {
        let e = null != t ? a[t] : null;
        return null == e || e?.state === "error" || null == e.collection ? null : e.collection;
    }
    getCollectionsForApplication(t) {
        let e = null != t ? S[t] : null;
        return null == e || "error" === e.state || null == e.collections ? null : e.collections;
    }
}
let d = new _(l.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (t) {
        let { collectionIds: e } = t;
        e.forEach((t) => {
            a[t] = { state: "loading", collection: a[t]?.collection };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { collectionIds: e, collections: r } = t,
            o = Date.now(),
            l = new Set();
        r.forEach((t) => {
            l.add(t.id), (a[t.id] = { state: "success", collection: t, fetchedAt: o });
        }),
            e.forEach((t) => {
                l.has(t) || delete a[t];
            });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (t) {
        let { collectionIds: e, apiError: r } = t,
            o = Date.now();
        e.forEach((t) => {
            a[t] = { state: "error", fetchedAt: o, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (t) {
        let { applicationId: e } = t;
        S[e] = { state: "loading", collections: S[e]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (t) {
        let { applicationId: e, collections: r } = t,
            o = Date.now();
        (S[e] = { state: "success", collections: r, fetchedAt: o }),
            r.forEach((t) => {
                a[t.id] = { state: "success", collection: t, fetchedAt: o };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (t) {
        let { applicationId: e, apiError: r } = t;
        S[e] = { state: "error", fetchedAt: Date.now(), fetchError: r };
    },
    LOGOUT: function (t) {
        (a = {}), (S = {});
    },
});
var T = r(442007),
    E = r(652215);
let h = 12 * u.A.Millis.HOUR,
    O = 10 * u.A.Millis.MINUTE;
async function C(t) {
    let {
            collectionIds: e,
            includeUnpublishedProducts: r = !1,
            includeUnpublishedCollections: o = !1,
            ignoreCache: u = !1,
        } = t,
        i = e.filter((t) => {
            if (!t) return !1;
            let e = d.getFetchState(t);
            if ("loading" === e) return !1;
            let r = d.getFetchedAt(t);
            return null == r || Date.now() - r > ("error" === e ? O : h);
        });
    if (0 !== i.length)
        try {
            l.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: i });
            let t = await (0, s.aP)({
                url: E.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: i,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: r,
                    include_unpublished_collections: o,
                    ignore_cache: u,
                },
                rejectWithError: !0,
            });
            l.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: i,
                collections: t.body.collections.map(T.A.fromServer),
            });
        } catch (t) {
            l.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: i,
                apiError: new c.A(t),
            });
        }
}
r(321073);
let F = {},
    f = {};
class R extends i.Ay.Store {
    static displayName = "StorefrontProductStore";
    getFetchState(t) {
        return null != t ? F[t]?.state : void 0;
    }
    getFetchStateForSku(t) {
        return null != t ? f[t]?.state : void 0;
    }
    getFetchedAt(t) {
        return null != t ? F[t]?.fetchedAt : void 0;
    }
    getFetchedAtForSku(t) {
        return null != t ? f[t]?.fetchedAt : void 0;
    }
    getFetchError(t) {
        return null != t ? F[t]?.fetchError : void 0;
    }
    getFetchErrorForSku(t) {
        return null != t ? f[t]?.fetchError : void 0;
    }
    getProduct(t) {
        let e = null != t ? F[t] : null;
        return null == e || e?.state === "error" || null == e.product ? null : e.product;
    }
    getProductsForSku(t) {
        return null != t ? f[t]?.products : void 0;
    }
}
let I = new R(l.h, {
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function (t) {
        let { productIds: e } = t;
        e.forEach((t) => {
            F[t] = { state: "loading", product: F[t]?.product };
        });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function (t) {
        let { productIds: e, products: r } = t,
            o = Date.now(),
            l = new Set();
        r.forEach((t) => {
            l.add(t.id), (F[t.id] = { state: "success", product: t, fetchedAt: o });
        }),
            e.forEach((t) => {
                l.has(t) || delete F[t];
            });
    },
    STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function (t) {
        let { productIds: e, apiError: r } = t,
            o = Date.now();
        e.forEach((t) => {
            F[t] = { state: "error", fetchedAt: o, fetchError: r };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function (t) {
        let { skuIds: e } = t;
        e.forEach((t) => {
            f[t] = { state: "loading", products: f[t]?.products };
        });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function (t) {
        let { skuIds: e, products: r } = t,
            o = Date.now(),
            l = r.reduce(
                (t, e) => (
                    e.skuIds.forEach((r) => {
                        null == t[r] ? (t[r] = [e]) : t[r].push(e);
                    }),
                    t
                ),
                {},
            );
        e.forEach((t) => {
            null == l[t] ? delete f[t] : (f[t] = { state: "success", products: l[t], fetchedAt: o });
        }),
            r.forEach((t) => {
                F[t.id] = { state: "success", product: t, fetchedAt: o };
            });
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function (t) {
        let { skuIds: e, apiError: r } = t,
            o = Date.now();
        e.forEach((t) => {
            f[t] = { state: "error", fetchedAt: o, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { collections: e } = t,
            r = Date.now();
        e.forEach((t) => {
            t.products.forEach((t) => {
                F[t.id] = { state: "success", product: t, fetchedAt: r };
            });
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (t) {
        let { collections: e } = t,
            r = Date.now();
        e.forEach((t) => {
            t.products.forEach((t) => {
                F[t.id] = { state: "success", product: t, fetchedAt: r };
            });
        });
    },
    LOGOUT: function (t) {
        (F = {}), (f = {});
    },
});
var p = r(103348);
let U = 12 * u.A.Millis.HOUR,
    g = 10 * u.A.Millis.MINUTE;
async function A(t) {
    let { skuIds: e, ignoreCache: r = !1 } = t,
        o = e.filter((t) => {
            if (!t) return !1;
            let e = I.getFetchStateForSku(t);
            if ("loading" === e) return !1;
            let r = I.getFetchedAtForSku(t);
            return null == r || Date.now() - r > ("error" === e ? g : U);
        });
    if (0 !== o.length)
        try {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: o });
            let t = await (0, s.aP)({
                url: E.Rsh.STOREFRONT_PRODUCTS_BY_SKU_IDS,
                query: {
                    sku_ids: o,
                    locale: n.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    ignore_cache: r,
                },
                rejectWithError: !0,
            });
            l.h.dispatch({
                type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS",
                skuIds: o,
                products: t.body.products.map(p.A.fromServer),
            });
        } catch (t) {
            l.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: o, apiError: new c.A(t) });
        }
}
var N = r(564064),
    D = r(510801),
    L = r(986630);
function H(t, e) {
    let [r, l] = o.useState({ id: t, sawFetch: !1 }),
        c = r.sawFetch;
    return (
        r.id !== t
            ? l({ id: t, sawFetch: (c = null != e) })
            : null == e || r.sawFetch || l({ id: t, sawFetch: (c = !0) }),
        "" !== t && null == e && c
    );
}
function P(t) {
    let { needsCategory: e = !0, seedCategoryStore: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { products: l, fetchState: c } = (function (t) {
            let { skuId: e, ignoreCache: r = !1 } = t;
            return (
                o.useEffect(() => {
                    A({ skuIds: [e], ignoreCache: r });
                }, [e, r]),
                (0, i.cf)([I], () => ({
                    products: I.getProductsForSku(e),
                    fetchState: I.getFetchStateForSku(e),
                    fetchedAt: I.getFetchedAtForSku(e),
                    fetchError: I.getFetchErrorForSku(e),
                }))
            );
        })({ skuId: t }),
        n = l?.[0],
        u = e ? (n?.primaryCollectionId ?? "") : "",
        { collection: s, fetchState: a } = (function (t) {
            let {
                collectionId: e,
                includeUnpublishedProducts: r = !1,
                includeUnpublishedCollections: l = !1,
                ignoreCache: c = !1,
            } = t;
            return (
                o.useEffect(() => {
                    C({
                        collectionIds: [e],
                        includeUnpublishedProducts: r,
                        includeUnpublishedCollections: l,
                        ignoreCache: c,
                    });
                }, [e, r, l, c]),
                (0, i.cf)([d], () => ({
                    collection: d.getCollection(e),
                    fetchState: d.getFetchState(e),
                    fetchedAt: d.getFetchedAt(e),
                    fetchError: d.getFetchError(e),
                }))
            );
        })({ collectionId: u }),
        S = o.useMemo(() => (null != n ? (L.A.fromStorefrontProductRecord(n) ?? null) : null), [n]),
        _ = o.useMemo(() => (e && null != s ? D.A.fromStorefrontCollectionRecord(s) : null), [e, s]),
        T = H(t, c),
        E = H(e ? u : "", a),
        h = o.useMemo(
            () =>
                "error" === c || T || (e && ("error" === a || E)) || ("success" === c && (null == S || (e && "" === u)))
                    ? "error"
                    : null == S || (e && null == _)
                      ? "loading"
                      : "ready",
            [c, T, a, E, e, u, S, _],
        );
    return (
        o.useEffect(() => {
            r && null != S && (0, N.rh)(S);
        }, [r, S]),
        {
            product: S,
            category: _,
            state: h,
            retry: o.useCallback(() => {
                A({ skuIds: [t], ignoreCache: !0 }), e && "" !== u && C({ collectionIds: [u], ignoreCache: !0 });
            }, [t, e, u]),
        }
    );
}
