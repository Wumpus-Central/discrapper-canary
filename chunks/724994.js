n.d(t, {
    L: function () {
        return c;
    },
    U: function () {
        return o;
    }
});
var r = n(24217),
    i = n.n(r),
    l = n(979554),
    s = n(442837),
    a = n(1870);
let o = (e, t) => {
        var n, r, s;
        let a = null != e.getPurchase(t.skuId),
            o = null !== (n = t.items) && void 0 !== n ? n : [],
            c = i()(o.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case l.Z.BUNDLE:
                return {
                    isPurchased: a || (o.length > 0 && c.length === o.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < o.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case l.Z.VARIANTS_GROUP:
                let d = null === (r = t.variants) || void 0 === r ? void 0 : r.every((t) => null != e.getPurchase(t.skuId)),
                    u = (null === (s = t.variants) || void 0 === s ? void 0 : s.some((t) => null != e.getPurchase(t.skuId))) && !d;
                return {
                    isPurchased: null != d && d,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != u && u
                };
            default:
                return {
                    isPurchased: a,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1
                };
        }
    },
    c = (e) => (0, s.cj)([a.Z], () => o(a.Z, e));
