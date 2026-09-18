r.d(t, { Hd: () => h, IK: () => _, hv: () => T });
var l = r(582128),
    o = r(17928),
    u = r(350172),
    n = r(730202),
    c = r(540737),
    s = r(821925),
    i = r(839534),
    a = r(295586),
    d = r(510801),
    f = r(986630);
function S(e) {
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
        _ && a.p.requestProducts([e]);
    }, [e, _]);
    let { products: C, fetchState: F } = (0, o.cf)(
            [s.A],
            () => ({ products: s.A.getProductsForSku(e), fetchState: s.A.getFetchStateForSku(e) }),
            [e],
        ),
        O = C?.[0],
        p = t ? (O?.primaryCollectionId ?? "") : "";
    l.useEffect(() => {
        t && "" !== p && a.p.requestCollections([p], { includeUnpublished: E });
    }, [t, p, E]);
    let { collection: g, fetchState: R } = (0, o.cf)(
            [n.A],
            () => ({ collection: n.A.getCollection(p), fetchState: n.A.getFetchState(p) }),
            [p],
        ),
        A = l.useMemo(
            () =>
                null != O
                    ? (f.A.fromStorefrontProductRecord(O, { flattenVariantSkuId: T ? e : void 0 }) ?? null)
                    : null,
            [O, T, e],
        ),
        P = l.useMemo(() => (t && null != g ? d.A.fromStorefrontCollectionRecord(g) : null), [t, g]),
        I = h(e, F),
        U = h(t ? p : "", R),
        k = l.useMemo(
            () =>
                S({
                    productFetchState: F,
                    productAbsent: I,
                    collectionFetchState: R,
                    collectionAbsent: U,
                    needsCategory: t,
                    collectionId: p,
                    product: A,
                    category: P,
                }),
            [F, I, R, U, t, p, A, P],
        );
    return (
        l.useEffect(() => {
            r && null != A && (0, i.rh)(A);
        }, [r, A]),
        {
            product: A,
            category: P,
            state: k,
            retry: l.useCallback(() => {
                ((0, c.tu)({ skuIds: [e], ignoreCache: !0 }),
                    t &&
                        "" !== p &&
                        (0, u._v)({
                            collectionIds: [p],
                            includeUnpublishedCollections: E,
                            includeUnpublishedProducts: E,
                            ignoreCache: !0,
                        }));
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
        u.length > 0 && a.p.requestProducts(u);
    }, [c]);
    let i = (0, o.cf)(
            [s.A],
            () => {
                let e = {};
                for (let t of u) e[t] = s.A.getProductsForSku(t)?.[0];
                return e;
            },
            [u],
        ),
        h = (0, o.cf)(
            [s.A],
            () => {
                let e = {};
                for (let t of u) e[t] = s.A.getFetchStateForSku(t);
                return e;
            },
            [u],
        ),
        _ = l.useMemo(() => {
            let e = {};
            for (let r of u) e[r] = t ? (i[r]?.primaryCollectionId ?? "") : "";
            return e;
        }, [u, i, t]),
        T = l.useMemo(() => [...new Set(Object.values(_).filter((e) => "" !== e))], [_]),
        C = T.join(",");
    l.useEffect(() => {
        t && T.length > 0 && a.p.requestCollections(T);
    }, [t, C]);
    let F = (0, o.cf)(
            [n.A],
            () => {
                let e = {};
                for (let t of T) e[t] = n.A.getCollection(t);
                return e;
            },
            [T],
        ),
        O = (0, o.cf)(
            [n.A],
            () => {
                let e = {};
                for (let t of T) e[t] = n.A.getFetchState(t);
                return e;
            },
            [T],
        ),
        p = E(h),
        g = E(O);
    return l.useMemo(() => {
        let e = {};
        for (let l of u) {
            let o = i[l],
                u = h[l],
                n = _[l] ?? "",
                c = F[n] ?? null,
                s = O[n],
                a =
                    null != o
                        ? (f.A.fromStorefrontProductRecord(o, { flattenVariantSkuId: r ? l : void 0 }) ?? null)
                        : null,
                E = t && null != c ? d.A.fromStorefrontCollectionRecord(c) : null;
            e[l] = {
                product: a,
                category: E,
                state: S({
                    productFetchState: u,
                    productAbsent: p.has(l),
                    collectionFetchState: s,
                    collectionAbsent: "" !== n && g.has(n),
                    needsCategory: t,
                    collectionId: n,
                    product: a,
                    category: E,
                }),
            };
        }
        return e;
    }, [u, i, h, _, F, O, p, g, t, r]);
}
