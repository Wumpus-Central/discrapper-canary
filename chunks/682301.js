r.d(t, { Hd: () => h, IK: () => _, hv: () => T });
var l = r(582128),
    o = r(17928),
    u = r(350172),
    c = r(730202),
    n = r(540737),
    s = r(821925),
    a = r(839534),
    S = r(295586),
    f = r(510801),
    d = r(986630);
function i(e) {
    let {
        productFetchState: t,
        productAbsent: r,
        collectionFetchState: l,
        collectionAbsent: o,
        needsCategory: u,
        collectionId: c,
        product: n,
        category: s,
    } = e;
    return "error" === t || r || (u && ("error" === l || o)) || ("success" === t && (null == n || (u && "" === c)))
        ? "error"
        : null == n || (u && null == s)
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
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.useEffect(() => {
        _ && S.p.requestProducts([e]);
    }, [e, _]);
    let { products: E, fetchState: T } = (0, o.cf)(
            [s.A],
            () => ({ products: s.A.getProductsForSku(e), fetchState: s.A.getFetchStateForSku(e) }),
            [e],
        ),
        F = E?.[0],
        C = t ? (F?.primaryCollectionId ?? "") : "";
    l.useEffect(() => {
        t && "" !== C && S.p.requestCollections([C]);
    }, [t, C]);
    let { collection: O, fetchState: R } = (0, o.cf)(
            [c.A],
            () => ({ collection: c.A.getCollection(C), fetchState: c.A.getFetchState(C) }),
            [C],
        ),
        p = l.useMemo(() => (null != F ? (d.A.fromStorefrontProductRecord(F) ?? null) : null), [F]),
        A = l.useMemo(() => (t && null != O ? f.A.fromStorefrontCollectionRecord(O) : null), [t, O]),
        g = h(e, T),
        I = h(t ? C : "", R),
        U = l.useMemo(
            () =>
                i({
                    productFetchState: T,
                    productAbsent: g,
                    collectionFetchState: R,
                    collectionAbsent: I,
                    needsCategory: t,
                    collectionId: C,
                    product: p,
                    category: A,
                }),
            [T, g, R, I, t, C, p, A],
        );
    return (
        l.useEffect(() => {
            r && null != p && (0, a.rh)(p);
        }, [r, p]),
        {
            product: p,
            category: A,
            state: U,
            retry: l.useCallback(() => {
                (0, n.tu)({ skuIds: [e], ignoreCache: !0 }),
                    t && "" !== C && (0, u._v)({ collectionIds: [C], ignoreCache: !0 });
            }, [e, t, C]),
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
        c = u ? new Set([...t, ...o]) : t;
    u && r(c);
    let n = new Set();
    for (let [t, r] of Object.entries(e)) "" !== t && null == r && c.has(t) && n.add(t);
    return n;
}
function T(e) {
    let { needsCategory: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = l.useMemo(() => e.filter((e) => "" !== e), [e]),
        u = r.join(",");
    l.useEffect(() => {
        r.length > 0 && S.p.requestProducts(r);
    }, [u]);
    let n = (0, o.cf)([s.A], () => {
            let e = {};
            for (let t of r) e[t] = s.A.getProductsForSku(t)?.[0];
            return e;
        }, [r]),
        a = (0, o.cf)([s.A], () => {
            let e = {};
            for (let t of r) e[t] = s.A.getFetchStateForSku(t);
            return e;
        }, [r]),
        h = l.useMemo(() => {
            let e = {};
            for (let l of r) e[l] = t ? (n[l]?.primaryCollectionId ?? "") : "";
            return e;
        }, [r, n, t]),
        _ = l.useMemo(() => [...new Set(Object.values(h).filter((e) => "" !== e))], [h]),
        T = _.join(",");
    l.useEffect(() => {
        t && _.length > 0 && S.p.requestCollections(_);
    }, [t, T]);
    let F = (0, o.cf)([c.A], () => {
            let e = {};
            for (let t of _) e[t] = c.A.getCollection(t);
            return e;
        }, [_]),
        C = (0, o.cf)([c.A], () => {
            let e = {};
            for (let t of _) e[t] = c.A.getFetchState(t);
            return e;
        }, [_]),
        O = E(a),
        R = E(C);
    return l.useMemo(() => {
        let e = {};
        for (let l of r) {
            let r = n[l],
                o = a[l],
                u = h[l] ?? "",
                c = F[u] ?? null,
                s = C[u],
                S = null != r ? (d.A.fromStorefrontProductRecord(r) ?? null) : null,
                _ = t && null != c ? f.A.fromStorefrontCollectionRecord(c) : null;
            e[l] = {
                product: S,
                category: _,
                state: i({
                    productFetchState: o,
                    productAbsent: O.has(l),
                    collectionFetchState: s,
                    collectionAbsent: "" !== u && R.has(u),
                    needsCategory: t,
                    collectionId: u,
                    product: S,
                    category: _,
                }),
            };
        }
        return e;
    }, [r, n, a, h, F, C, O, R, t]);
}
