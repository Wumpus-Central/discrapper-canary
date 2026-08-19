r.d(t, { h: () => U, I: () => g });
var l = r(582128),
    o = r(17928),
    u = r(350172),
    n = r(730202),
    c = r(540737),
    s = r(821925),
    a = r(839534);
r(321073);
var S = r(228366);
let f = new Set(),
    i = new Set(),
    d = null,
    h = null;
function _(e) {
    let t = [];
    for (let r = 0; r < e.length; r += 100) t.push(e.slice(r, r + 100));
    return t;
}
function E() {
    d = null;
    let e = [...f];
    for (let t of (f.clear(), _(e))) (0, c.tu)({ skuIds: t });
}
function T() {
    h = null;
    let e = [...i];
    for (let t of (i.clear(), _(e))) (0, u._)({ collectionIds: t });
}
let F = {
    requestProducts(e) {
        for (let t of e) "" !== t && "loading" !== s.A.getFetchStateForSku(t) && f.add(t);
        f.size > 0 && null == d && (d = setTimeout(E, 32));
    },
    requestCollections(e) {
        for (let t of e) "" !== t && "loading" !== n.A.getFetchState(t) && i.add(t);
        i.size > 0 && null == h && (h = setTimeout(T, 32));
    },
    reset() {
        f.clear(), i.clear(), null != d && (clearTimeout(d), (d = null)), null != h && (clearTimeout(h), (h = null));
    },
};
S.h.subscribe("LOGOUT", F.reset);
var C = r(510801),
    O = r(986630);
function R(e) {
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
function A(e, t) {
    let [r, o] = l.useState({ id: e, sawFetch: !1 }),
        u = r.sawFetch;
    return (
        r.id !== e
            ? o({ id: e, sawFetch: (u = null != t) })
            : null == t || r.sawFetch || o({ id: e, sawFetch: (u = !0) }),
        "" !== e && null == t && u
    );
}
function g(e) {
    let {
        needsCategory: t = !0,
        seedCategoryStore: r = !1,
        shouldFetchProduct: S = !0,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.useEffect(() => {
        S && F.requestProducts([e]);
    }, [e, S]);
    let { products: f, fetchState: i } = (0, o.cf)(
            [s.A],
            () => ({ products: s.A.getProductsForSku(e), fetchState: s.A.getFetchStateForSku(e) }),
            [e],
        ),
        d = f?.[0],
        h = t ? (d?.primaryCollectionId ?? "") : "";
    l.useEffect(() => {
        t && "" !== h && F.requestCollections([h]);
    }, [t, h]);
    let { collection: _, fetchState: E } = (0, o.cf)(
            [n.A],
            () => ({ collection: n.A.getCollection(h), fetchState: n.A.getFetchState(h) }),
            [h],
        ),
        T = l.useMemo(() => (null != d ? (O.A.fromStorefrontProductRecord(d) ?? null) : null), [d]),
        g = l.useMemo(() => (t && null != _ ? C.A.fromStorefrontCollectionRecord(_) : null), [t, _]),
        p = A(e, i),
        U = A(t ? h : "", E),
        I = l.useMemo(
            () =>
                R({
                    productFetchState: i,
                    productAbsent: p,
                    collectionFetchState: E,
                    collectionAbsent: U,
                    needsCategory: t,
                    collectionId: h,
                    product: T,
                    category: g,
                }),
            [i, p, E, U, t, h, T, g],
        );
    return (
        l.useEffect(() => {
            r && null != T && (0, a.rh)(T);
        }, [r, T]),
        {
            product: T,
            category: g,
            state: I,
            retry: l.useCallback(() => {
                (0, c.tu)({ skuIds: [e], ignoreCache: !0 }),
                    t && "" !== h && (0, u._)({ collectionIds: [h], ignoreCache: !0 });
            }, [e, t, h]),
        }
    );
}
function p(e) {
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
function U(e) {
    let { needsCategory: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = l.useMemo(() => e.filter((e) => "" !== e), [e]),
        u = r.join(",");
    l.useEffect(() => {
        r.length > 0 && F.requestProducts(r);
    }, [u]);
    let c = (0, o.cf)([s.A], () => {
            let e = {};
            for (let t of r) e[t] = s.A.getProductsForSku(t)?.[0];
            return e;
        }, [r]),
        a = (0, o.cf)([s.A], () => {
            let e = {};
            for (let t of r) e[t] = s.A.getFetchStateForSku(t);
            return e;
        }, [r]),
        S = l.useMemo(() => {
            let e = {};
            for (let l of r) e[l] = t ? (c[l]?.primaryCollectionId ?? "") : "";
            return e;
        }, [r, c, t]),
        f = l.useMemo(() => [...new Set(Object.values(S).filter((e) => "" !== e))], [S]),
        i = f.join(",");
    l.useEffect(() => {
        t && f.length > 0 && F.requestCollections(f);
    }, [t, i]);
    let d = (0, o.cf)([n.A], () => {
            let e = {};
            for (let t of f) e[t] = n.A.getCollection(t);
            return e;
        }, [f]),
        h = (0, o.cf)([n.A], () => {
            let e = {};
            for (let t of f) e[t] = n.A.getFetchState(t);
            return e;
        }, [f]),
        _ = p(a),
        E = p(h);
    return l.useMemo(() => {
        let e = {};
        for (let l of r) {
            let r = c[l],
                o = a[l],
                u = S[l] ?? "",
                n = d[u] ?? null,
                s = h[u],
                f = null != r ? (O.A.fromStorefrontProductRecord(r) ?? null) : null,
                i = t && null != n ? C.A.fromStorefrontCollectionRecord(n) : null;
            e[l] = {
                product: f,
                category: i,
                state: R({
                    productFetchState: o,
                    productAbsent: _.has(l),
                    collectionFetchState: s,
                    collectionAbsent: "" !== u && E.has(u),
                    needsCategory: t,
                    collectionId: u,
                    product: f,
                    category: i,
                }),
            };
        }
        return e;
    }, [r, c, a, S, d, h, _, E, t]);
}
