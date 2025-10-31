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
        var n, r, o;
        let s = null != e.getPurchase(t.skuId),
            l = null != (n = t.items) ? n : [],
            c = i()(l.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case a.Z.BUNDLE:
                return {
                    isPurchased: s || (l.length > 0 && c.length === l.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < l.length,
                    isPartiallyOwnedVariantsGroup: !1,
                };
            case a.Z.VARIANTS_GROUP:
                let u = null == (r = t.variants) ? void 0 : r.every((t) => null != e.getPurchase(t.skuId)),
                    d = (null == (o = t.variants) ? void 0 : o.some((t) => null != e.getPurchase(t.skuId))) && !u;
                return {
                    isPurchased: null != u && u,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != d && d,
                };
            default:
                return {
                    isPurchased: s,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1,
                };
        }
    },
    c = (e) => (0, o.cj)([s.Z], () => l(s.Z, e));
