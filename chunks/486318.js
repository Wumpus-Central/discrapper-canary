e.d(r, { N: () => c, e: () => p });
var n = e(116833),
    t = e(871123);
function p(a) {
    let {
        imageUrl: r,
        backgroundImageUrl: e,
        altText: t,
        overlayImageUrl: p,
        customClassNames: c,
        rewardGraphic: i,
    } = a;
    return {
        type: "dynamic",
        component: n.DynamicGraphicComponent.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: null != i ? "16/9" : "6/4",
        props: {
            imageUrl: r,
            backgroundImageUrl: e,
            altText: t,
            overlayImageUrl: p,
            customClassNames: c,
            rewardGraphic: i,
        },
    };
}
function c(a) {
    let { reward: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return p({ imageUrl: (0, t.fq)(a), backgroundImageUrl: (0, t.xf)(a), altText: a.name, rewardGraphic: r?.graphic });
}
