n.d(e, { N: () => i, e: () => s });
var r = n(397927),
    a = n(871123);
function s(t) {
    let { imageUrl: e, backgroundImageUrl: n, altText: a, customClassNames: s } = t;
    return {
        type: "dynamic",
        component: r.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: { imageUrl: e, backgroundImageUrl: n, altText: a, customClassNames: s },
    };
}
function i(t) {
    return s({ imageUrl: (0, a.fq)(t), backgroundImageUrl: (0, a.xf)(t), altText: t.name });
}
