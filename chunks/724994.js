r.d(t, {
    L: () => c,
    U: () => s
});
var n = r(24217),
    l = r.n(n),
    i = r(979554),
    o = r(442837),
    a = r(1870);
let s = (e, t) => {
        var r, n, o;
        let a = null != e.getPurchase(t.skuId),
            s = null != (r = t.items) ? r : [],
            c = l()(s.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case i.Z.BUNDLE:
                return {
                    isPurchased: a || (s.length > 0 && c.length === s.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < s.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case i.Z.VARIANTS_GROUP:
                let u = null == (n = t.variants) ? void 0 : n.every((t) => null != e.getPurchase(t.skuId)),
                    d = (null == (o = t.variants) ? void 0 : o.some((t) => null != e.getPurchase(t.skuId))) && !u;
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
    c = (e) => (0, o.cj)([a.Z], () => s(a.Z, e));
