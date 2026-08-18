"use strict";
n.d(t, { h: () => u, o: () => o });
var l = n(588234),
    i = n.n(l),
    s = n(575593),
    r = n(17928),
    a = n(4227);
function o(e, t) {
    let n = null != e.getPurchase(t.skuId),
        l = t.items ?? [],
        r = i()(l.map((t) => e.getPurchase(t.skuId)));
    switch (t?.type) {
        case s.R.BUNDLE:
            return {
                isPurchased: n || (l.length > 0 && r.length === l.length),
                isPartiallyOwnedBundle: r.length > 0 && r.length < l.length,
                isPartiallyOwnedVariantsGroup: !1,
            };
        case s.R.VARIANTS_GROUP:
            let a = t.variants?.every((t) => null != e.getPurchase(t.skuId)),
                o = t.variants?.some((t) => null != e.getPurchase(t.skuId)) && !a;
            return { isPurchased: a ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1 };
        default:
            return { isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
    }
}
function u(e) {
    return (0, r.cf)([a.A], () => o(a.A, e));
}
