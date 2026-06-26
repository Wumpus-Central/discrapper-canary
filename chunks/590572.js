r.d(e, { A: () => U });
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
async function F(t) {
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
var C = r(540737),
    f = r(821925),
    R = r(662388),
    I = r(510801),
    A = r(986630);
function p(t, e) {
    let [r, l] = o.useState({ id: t, sawFetch: !1 }),
        c = r.sawFetch;
    return (
        r.id !== t
            ? l({ id: t, sawFetch: (c = null != e) })
            : null == e || r.sawFetch || l({ id: t, sawFetch: (c = !0) }),
        "" !== t && null == e && c
    );
}
function U(t) {
    let {
            needsCategory: e = !0,
            seedCategoryStore: r = !1,
            shouldFetchProduct: l = !0,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { products: c, fetchState: n } = (function (t) {
            let { skuId: e, ignoreCache: r = !1, shouldFetch: l = !0 } = t;
            return (
                o.useEffect(() => {
                    l && (0, C.tu)({ skuIds: [e], ignoreCache: r });
                }, [e, r, l]),
                (0, i.cf)([f.A], () => ({
                    products: f.A.getProductsForSku(e),
                    fetchState: f.A.getFetchStateForSku(e),
                    fetchedAt: f.A.getFetchedAtForSku(e),
                    fetchError: f.A.getFetchErrorForSku(e),
                }))
            );
        })({ skuId: t, shouldFetch: l }),
        u = c?.[0],
        s = e ? (u?.primaryCollectionId ?? "") : "",
        { collection: a, fetchState: S } = (function (t) {
            let {
                collectionId: e,
                includeUnpublishedProducts: r = !1,
                includeUnpublishedCollections: l = !1,
                ignoreCache: c = !1,
            } = t;
            return (
                o.useEffect(() => {
                    F({
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
        })({ collectionId: s }),
        _ = o.useMemo(() => (null != u ? (A.A.fromStorefrontProductRecord(u) ?? null) : null), [u]),
        T = o.useMemo(() => (e && null != a ? I.A.fromStorefrontCollectionRecord(a) : null), [e, a]),
        E = p(t, n),
        h = p(e ? s : "", S),
        O = o.useMemo(
            () =>
                "error" === n || E || (e && ("error" === S || h)) || ("success" === n && (null == _ || (e && "" === s)))
                    ? "error"
                    : null == _ || (e && null == T)
                      ? "loading"
                      : "ready",
            [n, E, S, h, e, s, _, T],
        );
    return (
        o.useEffect(() => {
            r && null != _ && (0, R.rh)(_);
        }, [r, _]),
        {
            product: _,
            category: T,
            state: O,
            retry: o.useCallback(() => {
                (0, C.tu)({ skuIds: [t], ignoreCache: !0 }),
                    e && "" !== s && F({ collectionIds: [s], ignoreCache: !0 });
            }, [t, e, s]),
        }
    );
}
