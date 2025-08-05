r.d(t, {
    L: () => c,
    U: () => s
});
var n = r(24217),
    l = r.n(n),
    a = r(979554),
    i = r(442837),
    o = r(1870);
let s = (e, t) => {
        var r, n, i;
        let o = null != e.getPurchase(t.skuId),
            s = null != (r = t.items) ? r : [],
            c = l()(s.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case a.Z.BUNDLE:
                return {
                    isPurchased: o || (s.length > 0 && c.length === s.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < s.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case a.Z.VARIANTS_GROUP:
                let u = null == (n = t.variants) ? void 0 : n.every((t) => null != e.getPurchase(t.skuId)),
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
