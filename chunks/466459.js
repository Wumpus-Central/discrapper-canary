n.d(t, {
    h: () => c,
    o: () => l,
});
var r = n(791282),
    i = n.n(r),
    a = n(575593),
    s = n(311907),
    o = n(4227);
let l = (e, t) => {
        var n, r, s, o;
        let l = e.getPurchase(t.skuId),
            c = null != l,
            u = null != (n = null == l ? void 0 : l.expiresAt) ? n : null,
            d = null != u,
            f = null != (r = t.items) ? r : [],
            p = i()(f.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case a.R.BUNDLE:
                return {
                    isPurchased: c || (f.length > 0 && p.length === f.length),
                    isPartiallyOwnedBundle: p.length > 0 && p.length < f.length,
                    isPartiallyOwnedVariantsGroup: !1,
                    isRented: !1,
                    rentalExpiresAt: null,
                };
            case a.R.VARIANTS_GROUP:
                let _ = null == (s = t.variants) ? void 0 : s.every((t) => null != e.getPurchase(t.skuId)),
                    h = (null == (o = t.variants) ? void 0 : o.some((t) => null != e.getPurchase(t.skuId))) && !_;
                return {
                    isPurchased: null != _ && _,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != h && h,
                    isRented: d,
                    rentalExpiresAt: u,
                };
            default:
                return {
                    isPurchased: c,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1,
                    isRented: d,
                    rentalExpiresAt: u,
                };
        }
    },
    c = (e) => (0, s.cf)([o.A], () => l(o.A, e));
