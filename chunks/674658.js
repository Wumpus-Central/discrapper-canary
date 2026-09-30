n.d(t, { q: () => c });
var r = n(582128),
    u = n(575593),
    l = n(702841),
    i = n(67480),
    o = n(815996),
    s = n(590180),
    a = n(652215);
function c(e, t) {
    let n = (0, l.bG)([i.A], () => (null != e ? i.A.get(e) : null)),
        c = null != n && n.productLine !== a.EZt.COLLECTIBLES,
        [d, f] = (0, l.yK)([s.A], () => [s.A.getProduct(e), s.A.getProductFetch(e)]),
        A = (0, l.bG)([s.A], () => s.A.isProductFetchBackedOff(e)),
        E = !0 === t && d?.type === u.R.BUNDLE && 0 === d.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != d && !E) || c || f?.state === "fetching" || A || (0, o.Jp)(e, { includeBundles: t });
        }, [e, d, c, f, t, E, A]),
        { product: d, isFetching: f?.state === "fetching" }
    );
}
