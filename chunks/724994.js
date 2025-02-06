n.d(t, {
    L: () => d,
    U: () => o
});
var r = n(24217),
    l = n.n(r),
    i = n(979554),
    a = n(442837),
    s = n(1870);
let o = (e, t) => {
        var n, r, a;
        let s = null != e.getPurchase(t.skuId),
            o = null !== (n = t.items) && void 0 !== n ? n : [],
            d = l()(o.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case i.Z.BUNDLE:
                return {
                    isPurchased: s || (o.length > 0 && d.length === o.length),
                    isPartiallyOwnedBundle: d.length > 0 && d.length < o.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case i.Z.VARIANTS_GROUP:
                let c = null === (r = t.variants) || void 0 === r ? void 0 : r.every((t) => null != e.getPurchase(t.skuId)),
                    u = (null === (a = t.variants) || void 0 === a ? void 0 : a.some((t) => null != e.getPurchase(t.skuId))) && !c;
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
    d = (e) => (0, a.cj)([s.Z], () => o(s.Z, e));
