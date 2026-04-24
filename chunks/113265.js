s.d(e, { z: () => o });
var r = s(64700),
    i = s(575593),
    n = s(466459),
    l = s(116833),
    a = s(152472);
function o(t) {
    let { userId: e, product: s, selectedVariantIndex: o, location: u, onError: d } = t,
        c = r.useMemo(
            () => (s.type === i.R.VARIANTS_GROUP && null != o && s.variants?.[o] != null ? s.variants[o] : s),
            [s, o],
        ),
        S = c.skuId,
        h = (0, a.c)({
            userId: e,
            skuId: S,
            nuxGraphic: (function (t) {
                let { product: e } = t,
                    s = "6/4";
                switch (e.type) {
                    case i.R.NAMEPLATE:
                    case i.R.AVATAR_DECORATION:
                        s = "16/9";
                        break;
                    case i.R.BUNDLE:
                    case i.R.PROFILE_EFFECT:
                    default:
                        s = "6/4";
                }
                return {
                    type: "dynamic",
                    component: l.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: s,
                    props: { product: e, forCollectedModal: !0 },
                };
            })({ product: c }),
            location: u,
            onError: d,
        }),
        { isPurchased: p } = (0, n.h)(c);
    return { ...h, specificProductOrVariant: c, isPurchased: p };
}
