var r = l(582128),
    o = l(855986),
    u = l(350172),
    n = l(730202),
    c = l(540737),
    s = l(821925),
    i = l(634393),
    a = l(969935),
    d = l(295586),
    f = l(510801),
    h = l(986630);
function S(e) {
    let {
        productFetchState: t,
        productAbsent: l,
        collectionFetchState: r,
        collectionAbsent: o,
        needsCategory: u,
        collectionId: n,
        product: c,
        category: s,
    } = e;
    return "error" === t || l || (u && ("error" === r || o)) || ("success" === t && (null == c || (u && "" === n)))
        ? "error"
        : null == c || (u && null == s)
          ? "loading"
          : "ready";
}
function p(e, t) {
    let [l, o] = r.useState({ id: e, sawFetch: !1 }),
        u = l.sawFetch;
    return (
        l.id !== e
            ? o({ id: e, sawFetch: (u = null != t) })
            : null == t || l.sawFetch || o({ id: e, sawFetch: (u = !0) }),
        "" !== e && null == t && u
    );
}
function g(e) {
    let [t, l] = r.useState(() => new Set()),
        o = Object.entries(e)
            .filter((e) => {
                let [t, l] = e;
                return "" !== t && null != l;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        u = o.some((e) => !t.has(e)),
        n = u ? new Set([...t, ...o]) : t;
    u && l(n);
    let c = Object.entries(e)
        .filter((e) => {
            let [t, l] = e;
            return "" !== t && null == l && n.has(t);
        })
        .map((e) => {
            let [t] = e;
            return t;
        })
        .join(",");
    return r.useMemo(() => new Set("" === c ? [] : c.split(",")), [c]);
}
l.d(
    t,
    {},
    {
        Hd: p,
        IK: function (e) {
            let {
                    needsCategory: t = !0,
                    seedCategoryStore: l = !1,
                    shouldFetchProduct: g = !0,
                    includeUnpublished: _ = !1,
                    flattenVariants: A = !1,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                F = (0, i.Nm)();
            r.useEffect(() => {
                g && d.p.requestProducts([e]);
            }, [e, g, F]);
            let { products: C, fetchState: m } = (0, o.cf)(
                    [s.A],
                    () => ({ products: s.A.getProductsForSku(e), fetchState: s.A.getFetchStateForSku(e) }),
                    [e],
                ),
                k = C?.[0],
                T = t ? (k?.primaryCollectionId ?? "") : "";
            r.useEffect(() => {
                t && "" !== T && d.p.requestCollections([T], { includeUnpublished: _ });
            }, [t, T, _]);
            let { collection: R, fetchState: w } = (0, o.cf)(
                    [n.A],
                    () => ({ collection: n.A.getCollection(T), fetchState: n.A.getFetchState(T) }),
                    [T],
                ),
                I = r.useMemo(
                    () =>
                        null != k
                            ? (h.A.fromStorefrontProductRecord(k, { flattenVariantSkuId: A ? e : void 0 }) ?? null)
                            : null,
                    [k, A, e],
                ),
                O = r.useMemo(() => (t && null != R ? f.A.fromStorefrontCollectionRecord(R) : null), [t, R]),
                b = p(e, m),
                E = p(t ? T : "", w),
                P = r.useMemo(
                    () =>
                        S({
                            productFetchState: m,
                            productAbsent: b,
                            collectionFetchState: w,
                            collectionAbsent: E,
                            needsCategory: t,
                            collectionId: T,
                            product: I,
                            category: O,
                        }),
                    [m, b, w, E, t, T, I, O],
                );
            return (
                r.useEffect(() => {
                    l && null != I && (0, a.rh)(I);
                }, [l, I]),
                {
                    product: I,
                    category: O,
                    state: P,
                    retry: r.useCallback(() => {
                        ((0, c.tu)({ skuIds: [e], ignoreCache: !0 }),
                            t &&
                                "" !== T &&
                                (0, u._v)({
                                    collectionIds: [T],
                                    includeUnpublishedCollections: _,
                                    includeUnpublishedProducts: _,
                                    ignoreCache: !0,
                                }));
                    }, [e, t, T, _]),
                }
            );
        },
        hv: function (e) {
            let { needsCategory: t = !1, flattenVariants: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = r.useMemo(() => e.filter((e) => "" !== e), [e]),
                c = u.join(","),
                a = (0, i.Nm)();
            r.useEffect(() => {
                u.length > 0 && d.p.requestProducts(u);
            }, [c, a]);
            let p = (0, o.cf)(
                    [s.A],
                    () => {
                        let e = {};
                        for (let t of u) e[t] = s.A.getProductsForSku(t)?.[0];
                        return e;
                    },
                    [u],
                ),
                _ = (0, o.cf)(
                    [s.A],
                    () => {
                        let e = {};
                        for (let t of u) e[t] = s.A.getFetchStateForSku(t);
                        return e;
                    },
                    [u],
                ),
                A = r.useMemo(() => {
                    let e = {};
                    for (let l of u) e[l] = t ? (p[l]?.primaryCollectionId ?? "") : "";
                    return e;
                }, [u, p, t]),
                F = r.useMemo(() => [...new Set(Object.values(A).filter((e) => "" !== e))], [A]),
                C = F.join(",");
            r.useEffect(() => {
                t && F.length > 0 && d.p.requestCollections(F);
            }, [t, C]);
            let m = (0, o.cf)(
                    [n.A],
                    () => {
                        let e = {};
                        for (let t of F) e[t] = n.A.getCollection(t);
                        return e;
                    },
                    [F],
                ),
                k = (0, o.cf)(
                    [n.A],
                    () => {
                        let e = {};
                        for (let t of F) e[t] = n.A.getFetchState(t);
                        return e;
                    },
                    [F],
                ),
                T = g(_),
                R = g(k);
            return r.useMemo(() => {
                let e = {};
                for (let r of u) {
                    let o = p[r],
                        u = _[r],
                        n = A[r] ?? "",
                        c = m[n] ?? null,
                        s = k[n],
                        i =
                            null != o
                                ? (h.A.fromStorefrontProductRecord(o, { flattenVariantSkuId: l ? r : void 0 }) ?? null)
                                : null,
                        a = t && null != c ? f.A.fromStorefrontCollectionRecord(c) : null;
                    e[r] = {
                        product: i,
                        category: a,
                        state: S({
                            productFetchState: u,
                            productAbsent: T.has(r),
                            collectionFetchState: s,
                            collectionAbsent: "" !== n && R.has(n),
                            needsCategory: t,
                            collectionId: n,
                            product: i,
                            category: a,
                        }),
                    };
                }
                return e;
            }, [u, p, _, A, m, k, T, R, t, l]);
        },
    },
);
