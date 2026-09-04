r.d(e, { h: () => o, o: () => a });
var i = r(588234),
    n = r.n(i),
    l = r(575593),
    s = r(17928),
    u = r(4227);
function a(t, e) {
    let r = null != t.getPurchase(e.skuId),
        i = e.items ?? [],
        s = n()(i.map((e) => t.getPurchase(e.skuId)));
    switch (e?.type) {
        case l.R.BUNDLE:
            return {
                isPurchased: r || (i.length > 0 && s.length === i.length),
                isPartiallyOwnedBundle: s.length > 0 && s.length < i.length,
                isPartiallyOwnedVariantsGroup: !1,
            };
        case l.R.VARIANTS_GROUP:
            let u = e.variants?.every((e) => null != t.getPurchase(e.skuId)),
                a = e.variants?.some((e) => null != t.getPurchase(e.skuId)) && !u;
            return { isPurchased: u ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: a ?? !1 };
        default:
            return { isPurchased: r, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
    }
}
function o(t) {
    return (0, s.cf)([u.A], () => a(u.A, t));
}
