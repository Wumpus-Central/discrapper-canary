r.d(e, { z: () => a });
var i = r(582128),
    n = r(575593),
    s = r(466459),
    l = r(116833),
    u = r(152472);
function a(t) {
    let { userId: e, product: r, selectedVariantIndex: a, location: o, onError: d } = t,
        c = i.useMemo(
            () => (r.type === n.R.VARIANTS_GROUP && null != a && r.variants?.[a] != null ? r.variants[a] : r),
            [r, a],
        ),
        S = c.skuId,
        I = (0, u.c)({
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
            })({ product: c }),
            location: o,
            onError: d,
        }),
        { isPurchased: p } = (0, s.h)(c);
    return { ...I, specificProductOrVariant: c, isPurchased: p };
}
