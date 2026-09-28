n.d(t, { q: () => d });
var i = n(582128),
    r = n(575593),
    s = n(702841),
    o = n(67480),
    u = n(815996),
    a = n(590180),
    l = n(652215);
function d(e, t) {
    let n = (0, s.bG)([o.A], () => (null != e ? o.A.get(e) : null)),
        d = null != n && n.productLine !== l.EZt.COLLECTIBLES,
        [c, C] = (0, s.yK)([a.A], () => [a.A.getProduct(e), a.A.getProductFetch(e)]),
        f = (0, s.bG)([a.A], () => a.A.isProductFetchBackedOff(e)),
        A = !0 === t && c?.type === r.R.BUNDLE && 0 === c.items.length;
    return (
        (0, i.useEffect)(() => {
            null == e || (null != c && !A) || d || C?.state === "fetching" || f || (0, u.Jp)(e, { includeBundles: t });
        }, [e, c, d, C, t, A, f]),
        { product: c, isFetching: C?.state === "fetching" }
    );
}
