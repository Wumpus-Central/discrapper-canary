"use strict";
l.d(t, { A: () => o });
var r = l(64700),
    a = l(311907),
    n = l(475743),
    s = l(602823),
    i = l(16667);
let o = (e) => {
    let { skuId: t, includePricing: l = !1, includeUnpublished: o = !1, ignoreCache: d = !1 } = e,
        [c, u, h] = (0, a.yK)([i.A], () => [i.A.getProductForSku(t), i.A.isFetching(t), i.A.getApiError(t)]),
        m = (0, n.A)(l),
        x = (0, n.A)(o),
        b = (0, n.A)(d),
        p = !!t && !u && h?.status !== 404 && h?.status !== 429,
        g = null == c || l !== m || o !== x || d !== b;
    return (
        (0, r.useEffect)(() => {
            p && g && (0, s.x)({ skuId: t, includePricing: l, includeUnpublished: o, ignoreCache: d });
        }, [p, g, t, l, o, d]),
        { product: c, isFetching: u, apiError: h }
    );
};
