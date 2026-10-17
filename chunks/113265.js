n.d(e, { z: () => c });
var a = n(582128),
    i = n(575593),
    r = n(466459),
    l = n(116833),
    s = n(152472);
function c(t) {
    let { userId: e, product: n, selectedVariantIndex: c, location: u, onError: d } = t,
        o = a.useMemo(
            () => (n.type === i.R.VARIANTS_GROUP && null != c && n.variants?.[c] != null ? n.variants[c] : n),
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
                    case i.R.NAMEPLATE:
                    case i.R.AVATAR_DECORATION:
                        n = "16/9";
                        break;
                    case i.R.BUNDLE:
                    case i.R.PROFILE_EFFECT:
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
        { isPurchased: f } = (0, r.h)(o);
    return { ...p, specificProductOrVariant: o, isPurchased: f };
}
