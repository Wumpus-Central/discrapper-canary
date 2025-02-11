n.d(t, {
    L: () => d,
    U: () => o
});
var r = n(24217),
    l = n.n(r),
    a = n(979554),
    i = n(442837),
    s = n(1870);
let o = (e, t) => {
        var n, r, i;
        let s = null != e.getPurchase(t.skuId),
            o = null !== (n = t.items) && void 0 !== n ? n : [],
            d = l()(o.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case a.Z.BUNDLE:
                return {
                    isPurchased: s || (o.length > 0 && d.length === o.length),
                    isPartiallyOwnedBundle: d.length > 0 && d.length < o.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case a.Z.VARIANTS_GROUP:
                let c = null === (r = t.variants) || void 0 === r ? void 0 : r.every((t) => null != e.getPurchase(t.skuId)),
                    u = (null === (i = t.variants) || void 0 === i ? void 0 : i.some((t) => null != e.getPurchase(t.skuId))) && !c;
                return {
                    isPurchased: null != c && c,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != u && u
                };
            default:
                return {
                    isPurchased: s,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1
                };
        }
    },
    d = (e) => (0, i.cj)([s.Z], () => o(s.Z, e));
