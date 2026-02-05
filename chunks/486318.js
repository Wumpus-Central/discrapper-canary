n.d(t, { N: () => r, e: () => a });
var i = n(397927),
    l = n(871123);
function a(e) {
    let { imageUrl: t, backgroundImageUrl: n, altText: l, customClassNames: a } = e;
    return {
        type: "dynamic",
        component: i.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: { imageUrl: t, backgroundImageUrl: n, altText: l, customClassNames: a },
    };
}
function r(e) {
    return a({ imageUrl: (0, l.fq)(e), backgroundImageUrl: (0, l.xf)(e), altText: e.name });
}
