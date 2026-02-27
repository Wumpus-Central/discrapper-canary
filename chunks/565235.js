t.d(l, { A: () => d });
var r = t(64700),
    o = t(311907),
    n = t(475743),
    a = t(602823),
    i = t(16667);
let d = (e) => {
    let { productId: l, includePricing: t = !1, includeUnpublished: d = !1, ignoreCache: c = !1 } = e,
        [s, u, h] = (0, o.yK)([i.A], () => [i.A.getProduct(l), i.A.isFetching(l), i.A.getApiError(l)]),
        m = (0, n.A)(t),
        p = (0, n.A)(d),
        b = (0, n.A)(c),
        C = !!l && !u && h?.status !== 404 && h?.status !== 429,
        _ = null == s || t !== m || d !== p || c !== b;
    return (
        (0, r.useEffect)(() => {
            C && _ && (0, a.RV)({ productId: l, includePricing: t, includeUnpublished: d, ignoreCache: c });
        }, [C, _, l, t, d, c]),
        { product: s, isFetching: u, apiError: h }
    );
};
