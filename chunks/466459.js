r.d(e, { h: () => o, o: () => u });
var i = r(588234),
    n = r.n(i),
    s = r(575593),
    l = r(17928),
    a = r(4227);
function u(t, e) {
    let r = null != t.getPurchase(e.skuId),
        i = e.items ?? [],
        l = n()(i.map((e) => t.getPurchase(e.skuId)));
    switch (e?.type) {
        case s.R.BUNDLE:
            return {
                isPurchased: r || (i.length > 0 && l.length === i.length),
                isPartiallyOwnedBundle: l.length > 0 && l.length < i.length,
                isPartiallyOwnedVariantsGroup: !1,
            };
        case s.R.VARIANTS_GROUP:
            let a = e.variants?.every((e) => null != t.getPurchase(e.skuId)),
                u = e.variants?.some((e) => null != t.getPurchase(e.skuId)) && !a;
            return { isPurchased: a ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: u ?? !1 };
        default:
            return { isPurchased: r, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
    }
}
function o(t) {
    return (0, l.cf)([a.A], () => u(a.A, t));
}
