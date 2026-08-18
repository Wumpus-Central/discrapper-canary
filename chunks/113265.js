"use strict";
n.d(t, { z: () => o });
var l = n(582128),
    i = n(575593),
    s = n(466459),
    r = n(116833),
    a = n(152472);
function o(e) {
    let { userId: t, product: n, selectedVariantIndex: o, location: u, onError: c } = e,
        d = l.useMemo(
            () => (n.type === i.R.VARIANTS_GROUP && null != o && n.variants?.[o] != null ? n.variants[o] : n),
            [n, o],
        ),
        h = d.skuId,
        m = (0, a.c)({
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
                    component: r.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: n,
                    props: { product: t, forCollectedModal: !0 },
                };
            })({ product: d }),
            location: u,
            onError: c,
        }),
        { isPurchased: f } = (0, s.h)(d);
    return { ...m, specificProductOrVariant: d, isPurchased: f };
}
