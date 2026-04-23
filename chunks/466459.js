"use strict";
n.d(t, { h: () => u, o: () => l });
var r = n(791282),
    i = n.n(r),
    s = n(575593),
    a = n(311907),
    o = n(4227);
let l = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            r = t.items ?? [],
            a = i()(r.map((t) => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case s.R.BUNDLE:
                return {
                    isPurchased: n || (r.length > 0 && a.length === r.length),
                    isPartiallyOwnedBundle: a.length > 0 && a.length < r.length,
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
