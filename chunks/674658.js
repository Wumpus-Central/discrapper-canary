n.d(t, { q: () => d });
var r = n(582128),
    u = n(575593),
    l = n(702841),
    i = n(67480),
    o = n(815996),
    s = n(590180),
    a = n(652215);
function d(e, t) {
    let n = (0, l.bG)([i.A], () => (null != e ? i.A.get(e) : null)),
        d = null != n && n.productLine !== a.EZt.COLLECTIBLES,
        [c, f] = (0, l.yK)([s.A], () => [s.A.getProduct(e), s.A.getProductFetch(e)]),
        A = (0, l.bG)([s.A], () => s.A.isProductFetchBackedOff(e)),
        E = !0 === t && c?.type === u.R.BUNDLE && 0 === c.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != c && !E) || d || f?.state === "fetching" || A || (0, o.Jp)(e, { includeBundles: t });
        }, [e, c, d, f, t, E, A]),
        { product: c, isFetching: f?.state === "fetching" }
    );
}
