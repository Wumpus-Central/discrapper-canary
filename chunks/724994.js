r.d(t, {
    L: () => c,
    U: () => s
});
var n = r(24217),
    i = r.n(n),
    l = r(979554),
    a = r(442837),
    o = r(1870);
let s = (e, t) => {
        var r, n, a;
        let o = null != e.getPurchase(t.skuId),
            s = null != (r = t.items) ? r : [],
            c = i()(s.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case l.Z.BUNDLE:
                return {
                    isPurchased: o || (s.length > 0 && c.length === s.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < s.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case l.Z.VARIANTS_GROUP:
                let u = null == (n = t.variants) ? void 0 : n.every((t) => null != e.getPurchase(t.skuId)),
                    d = (null == (a = t.variants) ? void 0 : a.some((t) => null != e.getPurchase(t.skuId))) && !u;
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
    c = (e) => (0, a.cj)([o.Z], () => s(o.Z, e));
