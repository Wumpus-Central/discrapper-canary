"use strict";
n.d(t, { h: () => u, o: () => l });
var i = n(791282),
    r = n.n(i),
    s = n(575593),
    a = n(17928),
    o = n(4227);
let l = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            i = t.items ?? [],
            a = r()(i.map((t) => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case s.R.BUNDLE:
                return {
                    isPurchased: n || (i.length > 0 && a.length === i.length),
                    isPartiallyOwnedBundle: a.length > 0 && a.length < i.length,
                    isPartiallyOwnedVariantsGroup: !1,
                };
            case s.R.VARIANTS_GROUP:
                let o = t.variants?.every((t) => null != e.getPurchase(t.skuId)),
                    l = t.variants?.some((t) => null != e.getPurchase(t.skuId)) && !o;
                return { isPurchased: o ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: l ?? !1 };
            default:
                return { isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
        }
    },
    u = (e) => (0, a.cf)([o.A], () => l(o.A, e));
