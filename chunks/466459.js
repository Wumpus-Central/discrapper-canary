"use strict";
n.d(t, { h: () => u, o: () => l });
var r = n(791282),
    i = n.n(r),
    a = n(575593),
    s = n(311907),
    o = n(4227);
let l = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            r = t.items ?? [],
            s = i()(r.map((t) => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case a.R.BUNDLE:
                return {
                    isPurchased: n || (r.length > 0 && s.length === r.length),
                    isPartiallyOwnedBundle: s.length > 0 && s.length < r.length,
                    isPartiallyOwnedVariantsGroup: !1,
                };
            case a.R.VARIANTS_GROUP:
                let o = t.variants?.every((t) => null != e.getPurchase(t.skuId)),
                    l = t.variants?.some((t) => null != e.getPurchase(t.skuId)) && !o;
                return { isPurchased: o ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: l ?? !1 };
            default:
                return { isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
        }
    },
    u = (e) => (0, s.cf)([o.A], () => l(o.A, e));
