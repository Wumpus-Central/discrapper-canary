n.d(t, { D: () => c, q: () => d });
var i = n(582128),
    r = n(575593),
    s = n(702841),
    o = n(67480),
    a = n(839534),
    l = n(590180),
    u = n(652215);
function d(e, t) {
    let n = (0, s.bG)([o.A], () => (null != e ? o.A.get(e) : null)),
        d = null != n && n.productLine !== u.EZt.COLLECTIBLES,
        [c, C] = (0, s.yK)([l.A], () => [l.A.getProduct(e), l.A.getProductFetch(e)]),
        f = (0, s.bG)([l.A], () => l.A.isProductFetchBackedOff(e)),
        E = !0 === t && c?.type === r.R.BUNDLE && 0 === c.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e || (null != c && !E) || d || C?.state === "fetching" || f || (0, a.Jp)(e, { includeBundles: t });
        }, [e, c, d, C, t, E, f]),
        { product: c, isFetching: C?.state === "fetching" }
    );
}
function c(e, t) {
    let n = (0, s.bG)([o.A], () => e.map((e) => o.A.get(e))),
        [d, c, C] = (0, s.yK)([l.A], () => [
            e.map((e) => l.A.getProduct(e)),
            e.map((e) => l.A.getProductFetch(e)),
            e.map((e) => l.A.isProductFetchBackedOff(e)),
        ]);
    return (
        (0, i.useEffect)(() => {
            e.forEach((e, i) => {
                let s = n[i],
                    o = null != s && s.productLine !== u.EZt.COLLECTIBLES,
                    l = d[i],
                    f = c[i],
                    E = C[i],
                    m = !0 === t && l?.type === r.R.BUNDLE && 0 === l.items.length;
                (null != l && !m) || o || f?.state === "fetching" || E || (0, a.Jp)(e, { includeBundles: t });
            });
        }, [e, n, d, c, C, t]),
        { products: d.filter((e) => null != e), isFetching: c.some((e) => e?.state === "fetching") }
    );
}
