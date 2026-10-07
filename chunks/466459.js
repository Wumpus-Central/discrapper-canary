n.d(e, { h: () => u, o: () => c });
var a = n(588234),
    i = n.n(a),
    r = n(575593),
    l = n(17928),
    s = n(4227);
function c(t, e) {
    let n = null != t.getPurchase(e.skuId),
        a = e.items ?? [],
        l = i()(a.map((e) => t.getPurchase(e.skuId)));
    switch (e?.type) {
        case r.R.BUNDLE:
            return {
                isPurchased: n || (a.length > 0 && l.length === a.length),
                isPartiallyOwnedBundle: l.length > 0 && l.length < a.length,
                isPartiallyOwnedVariantsGroup: !1,
            };
        case r.R.VARIANTS_GROUP:
            let s = e.variants?.every((e) => null != t.getPurchase(e.skuId)),
                c = e.variants?.some((e) => null != t.getPurchase(e.skuId)) && !s;
            return { isPurchased: s ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: c ?? !1 };
        default:
            return { isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
    }
}
function u(t) {
    return (0, l.cf)([s.A], () => c(s.A, t));
}
