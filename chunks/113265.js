n.d(e, { z: () => c });
var a = n(582128),
    r = n(575593),
    i = n(466459),
    l = n(116833),
    s = n(152472);
function c(t) {
    let { userId: e, product: n, selectedVariantIndex: c, location: u, onError: d } = t,
        o = a.useMemo(
            () => (n.type === r.R.VARIANTS_GROUP && null != c && n.variants?.[c] != null ? n.variants[c] : n),
            [n, c],
        ),
        h = o.skuId,
        p = (0, s.c)({
            userId: e,
            skuId: h,
            nuxGraphic: (function (t) {
                let { product: e } = t,
                    n = "6/4";
                switch (e.type) {
                    case r.R.NAMEPLATE:
                    case r.R.AVATAR_DECORATION:
                        n = "16/9";
                        break;
                    case r.R.BUNDLE:
                    case r.R.PROFILE_EFFECT:
                    default:
                        n = "6/4";
                }
                return {
                    type: "dynamic",
                    component: l.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: n,
                    props: { product: e, forCollectedModal: !0 },
                };
            })({ product: o }),
            location: u,
            onError: d,
        }),
        { isPurchased: A } = (0, i.h)(o);
    return { ...p, specificProductOrVariant: o, isPurchased: A };
}
