n.d(t, {
    L: () => c,
    U: () => s
});
var r = n(24217),
    l = n.n(r),
    o = n(979554),
    a = n(442837),
    i = n(1870);
let s = (e, t) => {
        var n, r, a;
        let i = null != e.getPurchase(t.skuId),
            s = null != (n = t.items) ? n : [],
            c = l()(s.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case o.Z.BUNDLE:
                return {
                    isPurchased: i || (s.length > 0 && c.length === s.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < s.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case o.Z.VARIANTS_GROUP:
                let u = null == (r = t.variants) ? void 0 : r.every((t) => null != e.getPurchase(t.skuId)),
                    d = (null == (a = t.variants) ? void 0 : a.some((t) => null != e.getPurchase(t.skuId))) && !u;
                return {
                    isPurchased: null != u && u,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != d && d
                };
            default:
                return {
                    isPurchased: i,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1
                };
        }
    },
    c = (e) => (0, a.cj)([i.Z], () => s(i.Z, e));
