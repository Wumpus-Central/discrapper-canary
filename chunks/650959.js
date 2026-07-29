l.d(t, { h: () => g, I: () => p });
var r = l(582128),
    o = l(17928),
    n = l(350172),
    c = l(730202),
    u = l(540737),
    i = l(821925),
    s = l(839534);
l(321073);
var a = l(228366);
let d = new Set(),
    _ = new Set(),
    S = null,
    T = null;
function f(e) {
    let t = [];
    for (let l = 0; l < e.length; l += 100) t.push(e.slice(l, l + 100));
    return t;
}
function h() {
    S = null;
    let e = [...d];
    for (let t of (d.clear(), f(e))) (0, u.tu)({ skuIds: t });
}
function O() {
    T = null;
    let e = [..._];
    for (let t of (_.clear(), f(e))) (0, n._)({ collectionIds: t });
}
let E = {
    requestProducts(e) {
        for (let t of e) "" !== t && "loading" !== i.A.getFetchStateForSku(t) && d.add(t);
        d.size > 0 && null == S && (S = setTimeout(h, 32));
    },
    requestCollections(e) {
        for (let t of e) "" !== t && "loading" !== c.A.getFetchState(t) && _.add(t);
        _.size > 0 && null == T && (T = setTimeout(O, 32));
    },
    reset() {
        d.clear(), _.clear(), null != S && (clearTimeout(S), (S = null)), null != T && (clearTimeout(T), (T = null));
    },
};
a.h.subscribe("LOGOUT", E.reset);
var C = l(510801),
    F = l(986630);
function R(e) {
    let {
        productFetchState: t,
        productAbsent: l,
        collectionFetchState: r,
        collectionAbsent: o,
        needsCategory: n,
        collectionId: c,
        product: u,
        category: i,
    } = e;
    return "error" === t || l || (n && ("error" === r || o)) || ("success" === t && (null == u || (n && "" === c)))
        ? "error"
        : null == u || (n && null == i)
          ? "loading"
          : "ready";
}
function A(e, t) {
    let [l, o] = r.useState({ id: e, sawFetch: !1 }),
        n = l.sawFetch;
    return (
        l.id !== e
            ? o({ id: e, sawFetch: (n = null != t) })
            : null == t || l.sawFetch || o({ id: e, sawFetch: (n = !0) }),
        "" !== e && null == t && n
    );
}
function p(e) {
    let {
        needsCategory: t = !0,
        seedCategoryStore: l = !1,
        shouldFetchProduct: a = !0,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.useEffect(() => {
        a && E.requestProducts([e]);
    }, [e, a]);
    let { products: d, fetchState: _ } = (0, o.cf)(
            [i.A],
            () => ({ products: i.A.getProductsForSku(e), fetchState: i.A.getFetchStateForSku(e) }),
            [e],
        ),
        S = d?.[0],
        T = t ? (S?.primaryCollectionId ?? "") : "";
    r.useEffect(() => {
        t && "" !== T && E.requestCollections([T]);
    }, [t, T]);
    let { collection: f, fetchState: h } = (0, o.cf)(
            [c.A],
            () => ({ collection: c.A.getCollection(T), fetchState: c.A.getFetchState(T) }),
            [T],
        ),
        O = r.useMemo(() => (null != S ? (F.A.fromStorefrontProductRecord(S) ?? null) : null), [S]),
        p = r.useMemo(() => (t && null != f ? C.A.fromStorefrontCollectionRecord(f) : null), [t, f]),
        I = A(e, _),
        g = A(t ? T : "", h),
        N = r.useMemo(
            () =>
                R({
                    productFetchState: _,
                    productAbsent: I,
                    collectionFetchState: h,
                    collectionAbsent: g,
                    needsCategory: t,
                    collectionId: T,
                    product: O,
                    category: p,
                }),
            [_, I, h, g, t, T, O, p],
        );
    return (
        r.useEffect(() => {
            l && null != O && (0, s.rh)(O);
        }, [l, O]),
        {
            product: O,
            category: p,
            state: N,
            retry: r.useCallback(() => {
                (0, u.tu)({ skuIds: [e], ignoreCache: !0 }),
                    t && "" !== T && (0, n._)({ collectionIds: [T], ignoreCache: !0 });
            }, [e, t, T]),
        }
    );
}
function I(e) {
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
        n = o.some((e) => !t.has(e)),
        c = n ? new Set([...t, ...o]) : t;
    n && l(c);
    let u = new Set();
    for (let [t, l] of Object.entries(e)) "" !== t && null == l && c.has(t) && u.add(t);
    return u;
}
function g(e) {
    let { needsCategory: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = r.useMemo(() => e.filter((e) => "" !== e), [e]),
        n = l.join(",");
    r.useEffect(() => {
        l.length > 0 && E.requestProducts(l);
    }, [n]);
    let u = (0, o.cf)([i.A], () => {
            let e = {};
            for (let t of l) e[t] = i.A.getProductsForSku(t)?.[0];
            return e;
        }, [l]),
        s = (0, o.cf)([i.A], () => {
            let e = {};
            for (let t of l) e[t] = i.A.getFetchStateForSku(t);
            return e;
        }, [l]),
        a = r.useMemo(() => {
            let e = {};
            for (let r of l) e[r] = t ? (u[r]?.primaryCollectionId ?? "") : "";
            return e;
        }, [l, u, t]),
        d = r.useMemo(() => [...new Set(Object.values(a).filter((e) => "" !== e))], [a]),
        _ = d.join(",");
    r.useEffect(() => {
        t && d.length > 0 && E.requestCollections(d);
    }, [t, _]);
    let S = (0, o.cf)([c.A], () => {
            let e = {};
            for (let t of d) e[t] = c.A.getCollection(t);
            return e;
        }, [d]),
        T = (0, o.cf)([c.A], () => {
            let e = {};
            for (let t of d) e[t] = c.A.getFetchState(t);
            return e;
        }, [d]),
        f = I(s),
        h = I(T);
    return r.useMemo(() => {
        let e = {};
        for (let r of l) {
            let l = u[r],
                o = s[r],
                n = a[r] ?? "",
                c = S[n] ?? null,
                i = T[n],
                d = null != l ? (F.A.fromStorefrontProductRecord(l) ?? null) : null,
                _ = t && null != c ? C.A.fromStorefrontCollectionRecord(c) : null;
            e[r] = {
                product: d,
                category: _,
                state: R({
                    productFetchState: o,
                    productAbsent: f.has(r),
                    collectionFetchState: i,
                    collectionAbsent: "" !== n && h.has(n),
                    needsCategory: t,
                    collectionId: n,
                    product: d,
                    category: _,
                }),
            };
        }
        return e;
    }, [l, u, s, a, S, T, f, h, t]);
}
