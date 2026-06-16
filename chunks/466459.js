i.d(e, { h: () => o, o: () => u });
var r = i(791282),
    s = i.n(r),
    l = i(575593),
    n = i(17928),
    a = i(4227);
let u = (t, e) => {
        let i = null != t.getPurchase(e.skuId),
            r = e.items ?? [],
            n = s()(r.map((e) => t.getPurchase(e.skuId)));
        switch (e?.type) {
            case l.R.BUNDLE:
                return {
                    isPurchased: i || (r.length > 0 && n.length === r.length),
                    isPartiallyOwnedBundle: n.length > 0 && n.length < r.length,
                    isPartiallyOwnedVariantsGroup: !1,
                };
            case l.R.VARIANTS_GROUP:
                let a = e.variants?.every((e) => null != t.getPurchase(e.skuId)),
                    u = e.variants?.some((e) => null != t.getPurchase(e.skuId)) && !a;
                return { isPurchased: a ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: u ?? !1 };
            default:
                return { isPurchased: i, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
        }
    },
    o = (t) => (0, n.cf)([a.A], () => u(a.A, t));
