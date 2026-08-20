r.d(e, { z: () => u });
var i = r(582128),
    n = r(575593),
    s = r(466459),
    l = r(116833),
    a = r(152472);
function u(t) {
    let { userId: e, product: r, selectedVariantIndex: u, location: o, onError: c } = t,
        d = i.useMemo(
            () => (r.type === n.R.VARIANTS_GROUP && null != u && r.variants?.[u] != null ? r.variants[u] : r),
            [r, u],
        ),
        S = d.skuId,
        I = (0, a.c)({
            userId: e,
            skuId: S,
            nuxGraphic: (function (t) {
                let { product: e } = t,
                    r = "6/4";
                switch (e.type) {
                    case n.R.NAMEPLATE:
                    case n.R.AVATAR_DECORATION:
                        r = "16/9";
                        break;
                    case n.R.BUNDLE:
                    case n.R.PROFILE_EFFECT:
                    default:
                        r = "6/4";
                }
                return {
                    type: "dynamic",
                    component: l.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: r,
                    props: { product: e, forCollectedModal: !0 },
                };
            })({ product: d }),
            location: o,
            onError: c,
        }),
        { isPurchased: p } = (0, s.h)(d);
    return { ...I, specificProductOrVariant: d, isPurchased: p };
}
