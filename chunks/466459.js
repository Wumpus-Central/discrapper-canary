"use strict";
n.d(t, { h: () => u, o: () => l });
var r = n(791282),
    i = n.n(r),
    a = n(575593),
    s = n(311907),
    o = n(4227);
let l = (e, t) => {
        let n = e.getPurchase(t.skuId),
            r = null != n,
            s = n?.expiresAt ?? null,
            o = null != s,
            l = t.items ?? [],
            u = i()(l.map((t) => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case a.R.BUNDLE:
                return {
                    isPurchased: r || (l.length > 0 && u.length === l.length),
                    isPartiallyOwnedBundle: u.length > 0 && u.length < l.length,
                    isPartiallyOwnedVariantsGroup: !1,
                    isRented: !1,
                    rentalExpiresAt: null,
                };
            case a.R.VARIANTS_GROUP:
                let c = t.variants?.every((t) => null != e.getPurchase(t.skuId)),
                    d = t.variants?.some((t) => null != e.getPurchase(t.skuId)) && !c;
                return {
                    isPurchased: c ?? !1,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: d ?? !1,
                    isRented: o,
                    rentalExpiresAt: s,
                };
            default:
                return {
                    isPurchased: r,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1,
                    isRented: o,
                    rentalExpiresAt: s,
                };
        }
    },
    u = (e) => (0, s.cf)([o.A], () => l(o.A, e));
