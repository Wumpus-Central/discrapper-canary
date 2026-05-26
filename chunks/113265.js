i.d(e, { z: () => u });
var r = i(64700),
    l = i(575593),
    s = i(466459),
    n = i(116833),
    a = i(152472);
function u(t) {
    let { userId: e, product: i, selectedVariantIndex: u, location: o, onError: d } = t,
        c = r.useMemo(
            () => (i.type === l.R.VARIANTS_GROUP && null != u && i.variants?.[u] != null ? i.variants[u] : i),
            [i, u],
        ),
        p = c.skuId,
        h = (0, a.c)({
            userId: e,
            skuId: p,
            nuxGraphic: (function (t) {
                let { product: e } = t,
                    i = "6/4";
                switch (e.type) {
                    case l.R.NAMEPLATE:
                    case l.R.AVATAR_DECORATION:
                        i = "16/9";
                        break;
                    case l.R.BUNDLE:
                    case l.R.PROFILE_EFFECT:
                    default:
                        i = "6/4";
                }
                return {
                    type: "dynamic",
                    component: n.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: i,
                    props: { product: e, forCollectedModal: !0 },
                };
            })({ product: c }),
            location: o,
            onError: d,
        }),
        { isPurchased: S } = (0, s.h)(c);
    return { ...h, specificProductOrVariant: c, isPurchased: S };
}
