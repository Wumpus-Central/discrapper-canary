n.d(t, { h: () => c, o: () => d });
var a = n(588234),
    i = n.n(a),
    l = n(575593),
    s = n(17928),
    r = n(4227);
function d(e, t) {
    let n = null != e.getPurchase(t.skuId),
        a = t.items ?? [],
        s = i()(a.map((t) => e.getPurchase(t.skuId)));
    switch (t?.type) {
        case l.R.BUNDLE:
            return {
                isPurchased: n || (a.length > 0 && s.length === a.length),
                isPartiallyOwnedBundle: s.length > 0 && s.length < a.length,
                isPartiallyOwnedVariantsGroup: !1,
            };
        case l.R.VARIANTS_GROUP:
            let r = t.variants?.every((t) => null != e.getPurchase(t.skuId)),
                d = t.variants?.some((t) => null != e.getPurchase(t.skuId)) && !r;
            return { isPurchased: r ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: d ?? !1 };
        default:
            return { isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
    }
}
function c(e) {
    return (0, s.cf)([r.A], () => d(r.A, e));
}
