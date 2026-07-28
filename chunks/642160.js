l.d(e, { h: () => y, I: () => m });
var r = l(582128),
    o = l(17928),
    n = l(228366),
    c = l(181658),
    u = l(773669),
    s = l(927813),
    i = l(371794);
let a = {},
    S = {};
class d extends o.Ay.Store {
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
let _ = new d(n.h, {
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function (t) {
        let { collectionIds: e } = t;
        e.forEach((t) => {
            a[t] = { state: "loading", collection: a[t]?.collection };
        });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { collectionIds: e, collections: l } = t,
            r = Date.now(),
            o = new Set();
        l.forEach((t) => {
            o.add(t.id), (a[t.id] = { state: "success", collection: t, fetchedAt: r });
        }),
            e.forEach((t) => {
                o.has(t) || delete a[t];
            });
    },
    STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function (t) {
        let { collectionIds: e, apiError: l } = t,
            r = Date.now();
        e.forEach((t) => {
            a[t] = { state: "error", fetchedAt: r, fetchError: l };
        });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function (t) {
        let { applicationId: e } = t;
        S[e] = { state: "loading", collections: S[e]?.collections };
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function (t) {
        let { applicationId: e, collections: l } = t,
            r = Date.now();
        (S[e] = { state: "success", collections: l, fetchedAt: r }),
            l.forEach((t) => {
                a[t.id] = { state: "success", collection: t, fetchedAt: r };
            });
    },
    STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function (t) {
        let { applicationId: e, apiError: l } = t;
        S[e] = { state: "error", fetchedAt: Date.now(), fetchError: l };
    },
    LOGOUT: function (t) {
        (a = {}), (S = {});
    },
});
var f = l(442007),
    T = l(652215);
let h = 12 * s.A.Millis.HOUR,
    E = 10 * s.A.Millis.MINUTE;
async function O(t) {
    let {
            collectionIds: e,
            includeUnpublishedProducts: l = !1,
            includeUnpublishedCollections: r = !1,
            ignoreCache: o = !1,
        } = t,
        s = e.filter((t) => {
            if (!t) return !1;
            let e = _.getFetchState(t);
            if ("loading" === e) return !1;
            let l = _.getFetchedAt(t);
            return null == l || Date.now() - l > ("error" === e ? E : h);
        });
    if (0 !== s.length)
        try {
            n.h.dispatch({ type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: s });
            let t = await (0, i.aP)({
                url: T.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
                query: {
                    collection_ids: s,
                    locale: u.default.locale,
                    with_bundled_skus: !0,
                    include_google_sku_ids: !1,
                    include_unpublished_products: l,
                    include_unpublished_collections: r,
                    ignore_cache: o,
                },
                rejectWithError: !0,
            });
            n.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS",
                collectionIds: s,
                collections: t.body.collections.map(f.A.fromServer),
            });
        } catch (t) {
            n.h.dispatch({
                type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE",
                collectionIds: s,
                apiError: new c.A(t),
            });
        }
}
var C = l(540737),
    F = l(821925),
    R = l(34332);
l(321073);
let I = new Set(),
    A = new Set(),
    p = null,
    g = null;
function U(t) {
    let e = [];
    for (let l = 0; l < t.length; l += 100) e.push(t.slice(l, l + 100));
    return e;
}
function N() {
    p = null;
    let t = [...I];
    for (let e of (I.clear(), U(t))) (0, C.tu)({ skuIds: e });
}
function P() {
    g = null;
    let t = [...A];
    for (let e of (A.clear(), U(t))) O({ collectionIds: e });
}
let D = {
    requestProducts(t) {
        for (let e of t) "" !== e && "loading" !== F.A.getFetchStateForSku(e) && I.add(e);
        I.size > 0 && null == p && (p = setTimeout(N, 32));
    },
    requestCollections(t) {
        for (let e of t) "" !== e && "loading" !== _.getFetchState(e) && A.add(e);
        A.size > 0 && null == g && (g = setTimeout(P, 32));
    },
    reset() {
        I.clear(), A.clear(), null != p && (clearTimeout(p), (p = null)), null != g && (clearTimeout(g), (g = null));
    },
};
n.h.subscribe("LOGOUT", D.reset);
var L = l(510801),
    w = l(986630);
function H(t) {
    let {
        productFetchState: e,
        productAbsent: l,
        collectionFetchState: r,
        collectionAbsent: o,
        needsCategory: n,
        collectionId: c,
        product: u,
        category: s,
    } = t;
    return "error" === e || l || (n && ("error" === r || o)) || ("success" === e && (null == u || (n && "" === c)))
        ? "error"
        : null == u || (n && null == s)
          ? "loading"
          : "ready";
}
function k(t, e) {
    let [l, o] = r.useState({ id: t, sawFetch: !1 }),
        n = l.sawFetch;
    return (
        l.id !== t
            ? o({ id: t, sawFetch: (n = null != e) })
            : null == e || l.sawFetch || o({ id: t, sawFetch: (n = !0) }),
        "" !== t && null == e && n
    );
}
function m(t) {
    let {
        needsCategory: e = !0,
        seedCategoryStore: l = !1,
        shouldFetchProduct: n = !0,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.useEffect(() => {
        n && D.requestProducts([t]);
    }, [t, n]);
    let { products: c, fetchState: u } = (0, o.cf)(
            [F.A],
            () => ({ products: F.A.getProductsForSku(t), fetchState: F.A.getFetchStateForSku(t) }),
            [t],
        ),
        s = c?.[0],
        i = e ? (s?.primaryCollectionId ?? "") : "";
    r.useEffect(() => {
        e && "" !== i && D.requestCollections([i]);
    }, [e, i]);
    let { collection: a, fetchState: S } = (0, o.cf)(
            [_],
            () => ({ collection: _.getCollection(i), fetchState: _.getFetchState(i) }),
            [i],
        ),
        d = r.useMemo(() => (null != s ? (w.A.fromStorefrontProductRecord(s) ?? null) : null), [s]),
        f = r.useMemo(() => (e && null != a ? L.A.fromStorefrontCollectionRecord(a) : null), [e, a]),
        T = k(t, u),
        h = k(e ? i : "", S),
        E = r.useMemo(
            () =>
                H({
                    productFetchState: u,
                    productAbsent: T,
                    collectionFetchState: S,
                    collectionAbsent: h,
                    needsCategory: e,
                    collectionId: i,
                    product: d,
                    category: f,
                }),
            [u, T, S, h, e, i, d, f],
        );
    return (
        r.useEffect(() => {
            l && null != d && (0, R.rh)(d);
        }, [l, d]),
        {
            product: d,
            category: f,
            state: E,
            retry: r.useCallback(() => {
                (0, C.tu)({ skuIds: [t], ignoreCache: !0 }),
                    e && "" !== i && O({ collectionIds: [i], ignoreCache: !0 });
            }, [t, e, i]),
        }
    );
}
function v(t) {
    let [e, l] = r.useState(() => new Set()),
        o = Object.entries(t)
            .filter((t) => {
                let [e, l] = t;
                return "" !== e && null != l;
            })
            .map((t) => {
                let [e] = t;
                return e;
            }),
        n = o.some((t) => !e.has(t)),
        c = n ? new Set([...e, ...o]) : e;
    n && l(c);
    let u = new Set();
    for (let [e, l] of Object.entries(t)) "" !== e && null == l && c.has(e) && u.add(e);
    return u;
}
function y(t) {
    let { needsCategory: e = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = r.useMemo(() => t.filter((t) => "" !== t), [t]),
        n = l.join(",");
    r.useEffect(() => {
        l.length > 0 && D.requestProducts(l);
    }, [n]);
    let c = (0, o.cf)([F.A], () => {
            let t = {};
            for (let e of l) t[e] = F.A.getProductsForSku(e)?.[0];
            return t;
        }, [l]),
        u = (0, o.cf)([F.A], () => {
            let t = {};
            for (let e of l) t[e] = F.A.getFetchStateForSku(e);
            return t;
        }, [l]),
        s = r.useMemo(() => {
            let t = {};
            for (let r of l) t[r] = e ? (c[r]?.primaryCollectionId ?? "") : "";
            return t;
        }, [l, c, e]),
        i = r.useMemo(() => [...new Set(Object.values(s).filter((t) => "" !== t))], [s]),
        a = i.join(",");
    r.useEffect(() => {
        e && i.length > 0 && D.requestCollections(i);
    }, [e, a]);
    let S = (0, o.cf)([_], () => {
            let t = {};
            for (let e of i) t[e] = _.getCollection(e);
            return t;
        }, [i]),
        d = (0, o.cf)([_], () => {
            let t = {};
            for (let e of i) t[e] = _.getFetchState(e);
            return t;
        }, [i]),
        f = v(u),
        T = v(d);
    return r.useMemo(() => {
        let t = {};
        for (let r of l) {
            let l = c[r],
                o = u[r],
                n = s[r] ?? "",
                i = S[n] ?? null,
                a = d[n],
                _ = null != l ? (w.A.fromStorefrontProductRecord(l) ?? null) : null,
                h = e && null != i ? L.A.fromStorefrontCollectionRecord(i) : null;
            t[r] = {
                product: _,
                category: h,
                state: H({
                    productFetchState: o,
                    productAbsent: f.has(r),
                    collectionFetchState: a,
                    collectionAbsent: "" !== n && T.has(n),
                    needsCategory: e,
                    collectionId: n,
                    product: _,
                    category: h,
                }),
            };
        }
        return t;
    }, [l, c, u, s, S, d, f, T, e]);
}
