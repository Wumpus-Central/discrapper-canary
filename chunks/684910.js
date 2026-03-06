t.d(l, { A: () => d });
var r = t(64700),
    o = t(311907),
    n = t(475743),
    a = t(828596),
    i = t(124338);
function d(e) {
    let { productId: l, includePricing: t = !1, ignoreCache: d = !1 } = e,
        [s, c, u] = (0, o.yK)([i.A], () => [i.A.getProduct(l), i.A.isFetching(l), i.A.getApiError(l)]),
        h = (0, n.A)(t),
        p = (0, n.A)(d),
        m = !!l && !c && u?.status !== 404 && u?.status !== 429,
        _ = null == s || t !== h || d !== p;
    return (
        (0, r.useEffect)(() => {
            m && _ && (0, a.M0)({ productId: l, includePricing: t, ignoreCache: d });
        }, [m, _, l, t, d]),
        { product: s, isFetching: c, apiError: u }
    );
}
