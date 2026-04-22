i.d(e, { h: () => u, o: () => o });
var r = i(791282),
    s = i.n(r),
    n = i(575593),
    l = i(311907),
    a = i(4227);
let o = (t, e) => {
        let i = null != t.getPurchase(e.skuId),
            r = e.items ?? [],
            l = s()(r.map((e) => t.getPurchase(e.skuId)));
        switch (e?.type) {
            case n.R.BUNDLE:
                return {
                    isPurchased: i || (r.length > 0 && l.length === r.length),
                    isPartiallyOwnedBundle: l.length > 0 && l.length < r.length,
                    isPartiallyOwnedVariantsGroup: !1,
                };
            case n.R.VARIANTS_GROUP:
                let a = e.variants?.every((e) => null != t.getPurchase(e.skuId)),
                    o = e.variants?.some((e) => null != t.getPurchase(e.skuId)) && !a;
                return { isPurchased: a ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1 };
            default:
                return { isPurchased: i, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
        }
    },
    u = (t) => (0, l.cf)([a.A], () => o(a.A, t));
