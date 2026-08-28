n.d(t, { D: () => c, q: () => d });
var i = n(582128),
    r = n(575593),
    s = n(702841),
    o = n(67480),
    l = n(839534),
    a = n(590180),
    u = n(652215);
function d(e, t) {
    let n = (0, s.bG)([o.A], () => (null != e ? o.A.get(e) : null)),
        d = null != n && n.productLine !== u.EZt.COLLECTIBLES,
        [c, C] = (0, s.yK)([a.A], () => [a.A.getProduct(e), a.A.getProductFetch(e)]),
        f = (0, s.bG)([a.A], () => a.A.isProductFetchBackedOff(e)),
        E = !0 === t && c?.type === r.R.BUNDLE && 0 === c.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e || (null != c && !E) || d || C?.state === "fetching" || f || (0, l.Jp)(e, { includeBundles: t });
        }, [e, c, d, C, t, E, f]),
        { product: c, isFetching: C?.state === "fetching" }
    );
}
function c(e, t) {
    let n = (0, s.bG)([o.A], () => e.map((e) => o.A.get(e))),
        [d, c, C] = (0, s.yK)([a.A], () => [
            e.map((e) => a.A.getProduct(e)),
            e.map((e) => a.A.getProductFetch(e)),
            e.map((e) => a.A.isProductFetchBackedOff(e)),
        ]);
    return (
        (0, i.useEffect)(() => {
            e.forEach((e, i) => {
                let s = n[i],
                    o = null != s && s.productLine !== u.EZt.COLLECTIBLES,
                    a = d[i],
                    f = c[i],
                    E = C[i],
                    m = !0 === t && a?.type === r.R.BUNDLE && 0 === a.items.length;
                (null != a && !m) || o || f?.state === "fetching" || E || (0, l.Jp)(e, { includeBundles: t });
            });
        }, [e, n, d, c, C, t]),
        { products: d.filter((e) => null != e), isFetching: c.some((e) => e?.state === "fetching") }
    );
}
