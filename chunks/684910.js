t.d(l, { A: () => d });
var r = t(64700),
    o = t(311907),
    n = t(475743),
    i = t(828596),
    a = t(124338);
function d(e) {
    let { productId: l, includePricing: t = !1, includeUnpublished: d = !1, ignoreCache: s = !1 } = e,
        [c, u, h] = (0, o.yK)([a.A], () => [a.A.getProduct(l), a.A.isFetching(l), a.A.getApiError(l)]),
        p = (0, n.A)(t),
        m = (0, n.A)(d),
        b = (0, n.A)(s),
        _ = !!l && !u && h?.status !== 404 && h?.status !== 429,
        S = null == c || t !== p || d !== m || s !== b;
    return (
        (0, r.useEffect)(() => {
            _ && S && (0, i.M0)({ productId: l, includePricing: t, includeUnpublished: d, ignoreCache: s });
        }, [_, S, l, t, d, s]),
        { product: c, isFetching: u, apiError: h }
    );
}
