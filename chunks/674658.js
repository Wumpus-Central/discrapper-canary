n.d(t, { q: () => c });
var r = n(582128),
    u = n(575593),
    i = n(702841),
    o = n(67480),
    l = n(815996),
    s = n(590180),
    a = n(652215);
function c(e, t) {
    let n = (0, i.bG)([o.A], () => (null != e ? o.A.get(e) : null)),
        c = null != n && n.productLine !== a.EZt.COLLECTIBLES,
        [d, f] = (0, i.yK)([s.A], () => [s.A.getProduct(e), s.A.getProductFetch(e)]),
        E = (0, i.bG)([s.A], () => s.A.isProductFetchBackedOff(e)),
        A = !0 === t && d?.type === u.R.BUNDLE && 0 === d.items.length;
    return (
        (0, r.useEffect)(() => {
            null == e || (null != d && !A) || c || f?.state === "fetching" || E || (0, l.Jp)(e, { includeBundles: t });
        }, [e, d, c, f, t, A, E]),
        { product: d, isFetching: f?.state === "fetching" }
    );
}
