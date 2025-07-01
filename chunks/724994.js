n.d(t, {
    L: () => c,
    U: () => s
});
var r = n(24217),
    l = n.n(r),
    a = n(979554),
    i = n(442837),
    o = n(1870);
let s = (e, t) => {
        var n, r, i;
        let o = null != e.getPurchase(t.skuId),
            s = null != (n = t.items) ? n : [],
            c = l()(s.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case a.Z.BUNDLE:
                return {
                    isPurchased: o || (s.length > 0 && c.length === s.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < s.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case a.Z.VARIANTS_GROUP:
                let u = null == (r = t.variants) ? void 0 : r.every((t) => null != e.getPurchase(t.skuId)),
                    d = (null == (i = t.variants) ? void 0 : i.some((t) => null != e.getPurchase(t.skuId))) && !u;
                return {
                    isPurchased: null != u && u,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != d && d
                };
            default:
                return {
                    isPurchased: o,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1
                };
        }
    },
    c = (e) => (0, i.cj)([o.Z], () => s(o.Z, e));
