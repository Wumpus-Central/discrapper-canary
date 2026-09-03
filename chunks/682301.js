r.d(t, { Hd: () => h, IK: () => _, hv: () => T });
var l = r(582128),
    o = r(17928),
    u = r(350172),
    n = r(730202),
    c = r(540737),
    s = r(821925),
    a = r(839534),
    d = r(295586),
    i = r(510801),
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
        _ && d.p.requestProducts([e]);
    }, [e, _]);
    let { products: F, fetchState: C } = (0, o.cf)(
            [s.A],
            () => ({ products: s.A.getProductsForSku(e), fetchState: s.A.getFetchStateForSku(e) }),
            [e],
        ),
        O = F?.[0],
        R = t ? (O?.primaryCollectionId ?? "") : "";
    l.useEffect(() => {
        t && "" !== R && d.p.requestCollections([R], { includeUnpublished: E });
    }, [t, R, E]);
    let { collection: p, fetchState: A } = (0, o.cf)(
            [n.A],
            () => ({ collection: n.A.getCollection(R), fetchState: n.A.getFetchState(R) }),
            [R],
        ),
        g = l.useMemo(
            () =>
                null != O
                    ? (S.A.fromStorefrontProductRecord(O, { flattenVariantSkuId: T ? e : void 0 }) ?? null)
                    : null,
            [O, T, e],
        ),
        U = l.useMemo(() => (t && null != p ? i.A.fromStorefrontCollectionRecord(p) : null), [t, p]),
        I = h(e, C),
        P = h(t ? R : "", A),
        k = l.useMemo(
            () =>
                f({
                    productFetchState: C,
                    productAbsent: I,
                    collectionFetchState: A,
                    collectionAbsent: P,
                    needsCategory: t,
                    collectionId: R,
                    product: g,
                    category: U,
                }),
            [C, I, A, P, t, R, g, U],
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
                        "" !== R &&
                        (0, u._v)({
                            collectionIds: [R],
                            includeUnpublishedCollections: E,
                            includeUnpublishedProducts: E,
                            ignoreCache: !0,
                        });
            }, [e, t, R, E]),
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
    let c = new Set();
    for (let [t, r] of Object.entries(e)) "" !== t && null == r && n.has(t) && c.add(t);
    return c;
}
function T(e) {
    let { needsCategory: t = !1, flattenVariants: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = l.useMemo(() => e.filter((e) => "" !== e), [e]),
        c = u.join(",");
    l.useEffect(() => {
        u.length > 0 && d.p.requestProducts(u);
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
        t && T.length > 0 && d.p.requestCollections(T);
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
        R = E(h),
        p = E(O);
    return l.useMemo(() => {
        let e = {};
        for (let l of u) {
            let o = a[l],
                u = h[l],
                n = _[l] ?? "",
                c = C[n] ?? null,
                s = O[n],
                d =
                    null != o
                        ? (S.A.fromStorefrontProductRecord(o, { flattenVariantSkuId: r ? l : void 0 }) ?? null)
                        : null,
                E = t && null != c ? i.A.fromStorefrontCollectionRecord(c) : null;
            e[l] = {
                product: d,
                category: E,
                state: f({
                    productFetchState: u,
                    productAbsent: R.has(l),
                    collectionFetchState: s,
                    collectionAbsent: "" !== n && p.has(n),
                    needsCategory: t,
                    collectionId: n,
                    product: d,
                    category: E,
                }),
            };
        }
        return e;
    }, [u, a, h, _, C, O, R, p, t, r]);
}
