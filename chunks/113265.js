"use strict";
n.d(t, { z: () => l });
var i = n(64700),
    r = n(575593),
    s = n(466459),
    a = n(116833),
    o = n(152472);
function l(e) {
    let { userId: t, product: n, selectedVariantIndex: l, location: u, onError: c } = e,
        d = i.useMemo(
            () => (n.type === r.R.VARIANTS_GROUP && null != l && n.variants?.[l] != null ? n.variants[l] : n),
            [n, l],
        ),
        _ = d.skuId,
        f = (0, o.c)({
            userId: t,
            skuId: _,
            nuxGraphic: (function (e) {
                let { product: t } = e,
                    n = "6/4";
                switch (t.type) {
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
                    component: a.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: n,
                    props: { product: t, forCollectedModal: !0 },
                };
            })({ product: d }),
            location: u,
            onError: c,
        }),
        { isPurchased: h } = (0, s.h)(d);
    return { ...f, specificProductOrVariant: d, isPurchased: h };
}
