r.d(t, { h: () => D, I: () => N });
var n = r(64700),
    l = r(17928),
    i = r(228366),
    s = r(181658),
    o = r(773669),
    a = r(927813),
    u = r(371794);
let c = {},
    d = {};
class f extends l.Ay.Store {
    static displayName = "StorefrontCollectionStore";
    getFetchState(e) {
        return null != e ? c[e]?.state : void 0;
    }
    getFetchStateForApplication(e) {
        return null != e ? d[e]?.state : void 0;
    }
    getFetchedAt(e) {
        return null != e ? c[e]?.fetchedAt : void 0;
    }
    getFetchedAtForApplication(e) {
        return null != e ? d[e]?.fetchedAt : void 0;
    }
    getFetchError(e) {
        return null != e ? c[e]?.fetchError : void 0;
    }
    getFetchErrorForApplication(e) {
        return null != e ? d[e]?.fetchError : void 0;
    }
    getCollection(e) {
        let t = null != e ? c[e] : null;
        return null == t || t?.state === "error" || null == t.collection ? null : t.collection;
    }
    getCollectionsForApplication(e) {
        let t = null != e ? d[e] : null;
        return null == t || "error" === t.state || null == t.collections ? null : t.collections;
    }
}
let C = new f(i.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (e) {
        let { collectionIds: t } = e;
        t.forEach((e) => {
            c[e] = { state: "loading", collection: c[e]?.collection };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { collectionIds: t, collections: r } = e,
            n = Date.now(),
            l = new Set();
        r.forEach((e) => {
            l.add(e.id), (c[e.id] = { state: "success", collection: e, fetchedAt: n });
        }),
            t.forEach((e) => {
                l.has(e) || delete c[e];
            });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (e) {
        let { collectionIds: t, apiError: r } = e,
            n = Date.now();
        t.forEach((e) => {
            c[e] = { state: "error", fetchedAt: n, fetchError: r };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (e) {
        let { applicationId: t } = e;
        d[t] = { state: "loading", collections: d[t]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (e) {
        let { applicationId: t, collections: r } = e,
            n = Date.now();
        (d[t] = { state: "success", collections: r, fetchedAt: n }),
            r.forEach((e) => {
                c[e.id] = { state: "success", collection: e, fetchedAt: n };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (e) {
        let { applicationId: t, apiError: r } = e;
        d[t] = { state: "error", fetchedAt: Date.now(), fetchError: r };
    },
    LOGOUT: function (e) {
        (c = {}), (d = {});
    },
});
var _ = r(442007),
    p = r(652215);
let h = 12 * a.A.Millis.HOUR,
    E = 10 * a.A.Millis.MINUTE;
async function I(e) {
    let {
            collectionIds: t,
            includeUnpublishedProducts: r = !1,
            includeUnpublishedCollections: n = !1,
            ignoreCache: l = !1,
        } = e,
        a = t.filter((e) => {
            if (!e) return !1;
            let t = C.getFetchState(e);
            if ("loading" === t) return !1;
            let r = C.getFetchedAt(e);
            return null == r || Date.now() - r > ("error" === t ? E : h);
        });
    if (0 !== a.length)
        try {
            i.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: a });
            let e = await (0, u.aP)({
                url: p.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: a,
                    locale: o.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: r,
                    include_unpublished_collections: n,
                    ignore_cache: l,
                },
                rejectWithError: !0,
            });
            i.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: a,
                collections: e.body.collections.map(_.A.fromServer),
            });
        } catch (e) {
            i.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: a,
                apiError: new s.A(e),
            });
        }
}
var g = r(540737),
    S = r(821925),
    A = r(662388);
r(321073);
let T = new Set(),
    R = new Set(),
    k = null,
    m = null;
function O(e) {
    let t = [];
    for (let r = 0; r < e.length; r += 100) t.push(e.slice(r, r + 100));
    return t;
}
function v() {
    k = null;
    let e = [...T];
    for (let t of (T.clear(), O(e))) (0, g.tu)({ skuIds: t });
}
function x() {
    m = null;
    let e = [...R];
    for (let t of (R.clear(), O(e))) I({ collectionIds: t });
}
let y = {
    requestProducts(e) {
        for (let t of e) "" !== t && "loading" !== S.A.getFetchStateForSku(t) && T.add(t);
        T.size > 0 && null == k && (k = setTimeout(v, 32));
    },
    requestCollections(e) {
        for (let t of e) "" !== t && "loading" !== C.getFetchState(t) && R.add(t);
        R.size > 0 && null == m && (m = setTimeout(x, 32));
    },
    reset() {
        T.clear(), R.clear(), null != k && (clearTimeout(k), (k = null)), null != m && (clearTimeout(m), (m = null));
    },
};
i.h.subscribe("LOGOUT", y.reset);
var P = r(510801),
    F = r(986630);
function L(e) {
    let {
        productFetchState: t,
        productAbsent: r,
        collectionFetchState: n,
        collectionAbsent: l,
        needsCategory: i,
        collectionId: s,
        product: o,
        category: a,
    } = e;
    return "error" === t || r || (i && ("error" === n || l)) || ("success" === t && (null == o || (i && "" === s)))
        ? "error"
        : null == o || (i && null == a)
          ? "loading"
          : "ready";
}
function j(e, t) {
    let [r, l] = n.useState({ id: e, sawFetch: !1 }),
        i = r.sawFetch;
    return (
        r.id !== e
            ? l({ id: e, sawFetch: (i = null != t) })
            : null == t || r.sawFetch || l({ id: e, sawFetch: (i = !0) }),
        "" !== e && null == t && i
    );
}
function N(e) {
    let {
        needsCategory: t = !0,
        seedCategoryStore: r = !1,
        shouldFetchProduct: i = !0,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    n.useEffect(() => {
        i && y.requestProducts([e]);
    }, [e, i]);
    let { products: s, fetchState: o } = (0, l.cf)(
            [S.A],
            () => ({ products: S.A.getProductsForSku(e), fetchState: S.A.getFetchStateForSku(e) }),
            [e],
        ),
        a = s?.[0],
        u = t ? (a?.primaryCollectionId ?? "") : "";
    n.useEffect(() => {
        t && "" !== u && y.requestCollections([u]);
    }, [t, u]);
    let { collection: c, fetchState: d } = (0, l.cf)(
            [C],
            () => ({ collection: C.getCollection(u), fetchState: C.getFetchState(u) }),
            [u],
        ),
        f = n.useMemo(() => (null != a ? (F.A.fromStorefrontProductRecord(a) ?? null) : null), [a]),
        _ = n.useMemo(() => (t && null != c ? P.A.fromStorefrontCollectionRecord(c) : null), [t, c]),
        p = j(e, o),
        h = j(t ? u : "", d),
        E = n.useMemo(
            () =>
                L({
                    productFetchState: o,
                    productAbsent: p,
                    collectionFetchState: d,
                    collectionAbsent: h,
                    needsCategory: t,
                    collectionId: u,
                    product: f,
                    category: _,
                }),
            [o, p, d, h, t, u, f, _],
        );
    return (
        n.useEffect(() => {
            r && null != f && (0, A.rh)(f);
        }, [r, f]),
        {
            product: f,
            category: _,
            state: E,
            retry: n.useCallback(() => {
                (0, g.tu)({ skuIds: [e], ignoreCache: !0 }),
                    t && "" !== u && I({ collectionIds: [u], ignoreCache: !0 });
            }, [e, t, u]),
        }
    );
}
function b(e) {
    let [t, r] = n.useState(() => new Set()),
        l = Object.entries(e)
            .filter((e) => {
                let [t, r] = e;
                return "" !== t && null != r;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        i = l.some((e) => !t.has(e)),
        s = i ? new Set([...t, ...l]) : t;
    i && r(s);
    let o = new Set();
    for (let [t, r] of Object.entries(e)) "" !== t && null == r && s.has(t) && o.add(t);
    return o;
}
function D(e) {
    let { needsCategory: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = n.useMemo(() => e.filter((e) => "" !== e), [e]),
        i = r.join(",");
    n.useEffect(() => {
        r.length > 0 && y.requestProducts(r);
    }, [i]);
    let s = (0, l.cf)([S.A], () => {
            let e = {};
            for (let t of r) e[t] = S.A.getProductsForSku(t)?.[0];
            return e;
        }, [r]),
        o = (0, l.cf)([S.A], () => {
            let e = {};
            for (let t of r) e[t] = S.A.getFetchStateForSku(t);
            return e;
        }, [r]),
        a = n.useMemo(() => {
            let e = {};
            for (let n of r) e[n] = t ? (s[n]?.primaryCollectionId ?? "") : "";
            return e;
        }, [r, s, t]),
        u = n.useMemo(() => [...new Set(Object.values(a).filter((e) => "" !== e))], [a]),
        c = u.join(",");
    n.useEffect(() => {
        t && u.length > 0 && y.requestCollections(u);
    }, [t, c]);
    let d = (0, l.cf)([C], () => {
            let e = {};
            for (let t of u) e[t] = C.getCollection(t);
            return e;
        }, [u]),
        f = (0, l.cf)([C], () => {
            let e = {};
            for (let t of u) e[t] = C.getFetchState(t);
            return e;
        }, [u]),
        _ = b(o),
        p = b(f);
    return n.useMemo(() => {
        let e = {};
        for (let n of r) {
            let r = s[n],
                l = o[n],
                i = a[n] ?? "",
                u = d[i] ?? null,
                c = f[i],
                C = null != r ? (F.A.fromStorefrontProductRecord(r) ?? null) : null,
                h = t && null != u ? P.A.fromStorefrontCollectionRecord(u) : null;
            e[n] = {
                product: C,
                category: h,
                state: L({
                    productFetchState: l,
                    productAbsent: _.has(n),
                    collectionFetchState: c,
                    collectionAbsent: "" !== i && p.has(i),
                    needsCategory: t,
                    collectionId: i,
                    product: C,
                    category: h,
                }),
            };
        }
        return e;
    }, [r, s, o, a, d, f, _, p, t]);
}
