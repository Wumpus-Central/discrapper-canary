a.d(t, { N: () => r, e: () => c });
var e = a(116833),
    p = a(871123);
function c(n) {
    let { imageUrl: t, backgroundImageUrl: a, altText: p, overlayImageUrl: c, customClassNames: r } = n;
    return {
        type: "dynamic",
        component: e.DynamicGraphicComponent.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: { imageUrl: t, backgroundImageUrl: a, altText: p, overlayImageUrl: c, customClassNames: r },
    };
}
function r(n) {
    return c({ imageUrl: (0, p.fq)(n), backgroundImageUrl: (0, p.xf)(n), altText: n.name });
}
