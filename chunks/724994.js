n.d(t, {
    L: () => c,
    U: () => l,
});
var r = n(24217),
    i = n.n(r),
    a = n(979554),
    o = n(442837),
    s = n(1870);
let l = (e, t) => {
        var n, r, o, s;
        let l = e.getPurchase(t.skuId),
            c = null != l,
            u = null != (n = null == l ? void 0 : l.expiresAt) ? n : null,
            d = null != u,
            f = null != (r = t.items) ? r : [],
            _ = i()(f.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case a.Z.BUNDLE:
                return {
                    isPurchased: c || (f.length > 0 && _.length === f.length),
                    isPartiallyOwnedBundle: _.length > 0 && _.length < f.length,
                    isPartiallyOwnedVariantsGroup: !1,
                    isRented: !1,
                    rentalExpiresAt: null,
                };
            case a.Z.VARIANTS_GROUP:
                let p = null == (o = t.variants) ? void 0 : o.every((t) => null != e.getPurchase(t.skuId)),
                    h = (null == (s = t.variants) ? void 0 : s.some((t) => null != e.getPurchase(t.skuId))) && !p;
                return {
                    isPurchased: null != p && p,
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
    c = (e) => (0, o.cj)([s.Z], () => l(s.Z, e));
