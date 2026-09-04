r.d(t, { Hd: () => h, IK: () => _, hv: () => T });
var l = r(582128),
    o = r(17928),
    u = r(350172),
    n = r(730202),
    c = r(540737),
    s = r(821925),
    a = r(839534),
    i = r(295586),
    d = r(510801),
    S = r(986630);
function f(e) {
    let {
        productFetchState: t,
        productAbsent: r,
        collectionFetchState: l,
        collectionAbsent: o,
        needsCategory: u,
        collectionId: n,
        product: c,
        category: s,
    } = e;
    return "error" === t || r || (u && ("error" === l || o)) || ("success" === t && (null == c || (u && "" === n)))
        ? "error"
        : null == c || (u && null == s)
          ? "loading"
          : "ready";
}
function h(e, t) {
    let [r, o] = l.useState({ id: e, sawFetch: !1 }),
        u = r.sawFetch;
    return (
        r.id !== e
            ? o({ id: e, sawFetch: (u = null != t) })
            : null == t || r.sawFetch || o({ id: e, sawFetch: (u = !0) }),
        "" !== e && null == t && u
    );
}
function _(e) {
    let {
        needsCategory: t = !0,
        seedCategoryStore: r = !1,
        shouldFetchProduct: _ = !0,
        includeUnpublished: E = !1,
        flattenVariants: T = !1,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.useEffect(() => {
        _ && i.p.requestProducts([e]);
    }, [e, _]);
    let { products: F, fetchState: C } = (0, o.cf)(
            [s.A],
            () => ({ products: s.A.getProductsForSku(e), fetchState: s.A.getFetchStateForSku(e) }),
            [e],
        ),
        O = F?.[0],
        p = t ? (O?.primaryCollectionId ?? "") : "";
    l.useEffect(() => {
        t && "" !== p && i.p.requestCollections([p], { includeUnpublished: E });
    }, [t, p, E]);
    let { collection: R, fetchState: A } = (0, o.cf)(
            [n.A],
            () => ({ collection: n.A.getCollection(p), fetchState: n.A.getFetchState(p) }),
            [p],
        ),
        g = l.useMemo(
            () =>
                null != O
                    ? (S.A.fromStorefrontProductRecord(O, { flattenVariantSkuId: T ? e : void 0 }) ?? null)
                    : null,
            [O, T, e],
        ),
        U = l.useMemo(() => (t && null != R ? d.A.fromStorefrontCollectionRecord(R) : null), [t, R]),
        I = h(e, C),
        P = h(t ? p : "", A),
        k = l.useMemo(
            () =>
                f({
                    productFetchState: C,
                    productAbsent: I,
                    collectionFetchState: A,
                    collectionAbsent: P,
                    needsCategory: t,
                    collectionId: p,
                    product: g,
                    category: U,
                }),
            [C, I, A, P, t, p, g, U],
        );
    return (
        l.useEffect(() => {
            r && null != g && (0, a.rh)(g);
        }, [r, g]),
        {
            product: g,
            category: U,
            state: k,
            retry: l.useCallback(() => {
                (0, c.tu)({ skuIds: [e], ignoreCache: !0 }),
                    t &&
                        "" !== p &&
                        (0, u._v)({
                            collectionIds: [p],
                            includeUnpublishedCollections: E,
                            includeUnpublishedProducts: E,
                            ignoreCache: !0,
                        });
            }, [e, t, p, E]),
        }
    );
}
function E(e) {
    let [t, r] = l.useState(() => new Set()),
        o = Object.entries(e)
            .filter((e) => {
                let [t, r] = e;
                return "" !== t && null != r;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        u = o.some((e) => !t.has(e)),
        n = u ? new Set([...t, ...o]) : t;
    u && r(n);
    let c = Object.entries(e)
        .filter((e) => {
            let [t, r] = e;
            return "" !== t && null == r && n.has(t);
        })
        .map((e) => {
            let [t] = e;
            return t;
        })
        .join(",");
    return l.useMemo(() => new Set("" === c ? [] : c.split(",")), [c]);
}
function T(e) {
    let { needsCategory: t = !1, flattenVariants: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = l.useMemo(() => e.filter((e) => "" !== e), [e]),
        c = u.join(",");
    l.useEffect(() => {
        u.length > 0 && i.p.requestProducts(u);
    }, [c]);
    let a = (0, o.cf)([s.A], () => {
            let e = {};
            for (let t of u) e[t] = s.A.getProductsForSku(t)?.[0];
            return e;
        }, [u]),
        h = (0, o.cf)([s.A], () => {
            let e = {};
            for (let t of u) e[t] = s.A.getFetchStateForSku(t);
            return e;
        }, [u]),
        _ = l.useMemo(() => {
            let e = {};
            for (let r of u) e[r] = t ? (a[r]?.primaryCollectionId ?? "") : "";
            return e;
        }, [u, a, t]),
        T = l.useMemo(() => [...new Set(Object.values(_).filter((e) => "" !== e))], [_]),
        F = T.join(",");
    l.useEffect(() => {
        t && T.length > 0 && i.p.requestCollections(T);
    }, [t, F]);
    let C = (0, o.cf)([n.A], () => {
            let e = {};
            for (let t of T) e[t] = n.A.getCollection(t);
            return e;
        }, [T]),
        O = (0, o.cf)([n.A], () => {
            let e = {};
            for (let t of T) e[t] = n.A.getFetchState(t);
            return e;
        }, [T]),
        p = E(h),
        R = E(O);
    return l.useMemo(() => {
        let e = {};
        for (let l of u) {
            let o = a[l],
                u = h[l],
                n = _[l] ?? "",
                c = C[n] ?? null,
                s = O[n],
                i =
                    null != o
                        ? (S.A.fromStorefrontProductRecord(o, { flattenVariantSkuId: r ? l : void 0 }) ?? null)
                        : null,
                E = t && null != c ? d.A.fromStorefrontCollectionRecord(c) : null;
            e[l] = {
                product: i,
                category: E,
                state: f({
                    productFetchState: u,
                    productAbsent: p.has(l),
                    collectionFetchState: s,
                    collectionAbsent: "" !== n && R.has(n),
                    needsCategory: t,
                    collectionId: n,
                    product: i,
                    category: E,
                }),
            };
        }
        return e;
    }, [u, a, h, _, C, O, p, R, t, r]);
}
