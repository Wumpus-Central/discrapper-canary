n.d(t, { z: () => d });
var a = n(582128),
    i = n(575593),
    l = n(466459),
    s = n(116833),
    r = n(152472);
function d(e) {
    let { userId: t, product: n, selectedVariantIndex: d, location: c, onError: u } = e,
        o = a.useMemo(
            () => (n.type === i.R.VARIANTS_GROUP && null != d && n.variants?.[d] != null ? n.variants[d] : n),
            [n, d],
        ),
        h = o.skuId,
        f = (0, r.c)({
            userId: t,
            skuId: h,
            nuxGraphic: (function (e) {
                let { product: t } = e,
                    n = "6/4";
                switch (t.type) {
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
                    component: s.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: n,
                    props: { product: t, forCollectedModal: !0 },
                };
            })({ product: o }),
            location: c,
            onError: u,
        }),
        { isPurchased: m } = (0, l.h)(o);
    return { ...f, specificProductOrVariant: o, isPurchased: m };
}
