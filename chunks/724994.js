r.d(t, {
    L: () => c,
    U: () => s
});
var n = r(24217),
    i = r.n(n),
    o = r(979554),
    l = r(442837),
    a = r(1870);
let s = (e, t) => {
        var r, n, l;
        let a = null != e.getPurchase(t.skuId),
            s = null != (r = t.items) ? r : [],
            c = i()(s.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case o.Z.BUNDLE:
                return {
                    isPurchased: a || (s.length > 0 && c.length === s.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < s.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case o.Z.VARIANTS_GROUP:
                let u = null == (n = t.variants) ? void 0 : n.every((t) => null != e.getPurchase(t.skuId)),
                    d = (null == (l = t.variants) ? void 0 : l.some((t) => null != e.getPurchase(t.skuId))) && !u;
                return {
                    isPurchased: null != u && u,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != d && d
                };
            default:
                return {
                    isPurchased: a,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1
                };
        }
    },
    c = (e) => (0, l.cj)([a.Z], () => s(a.Z, e));
