"use strict";
n.d(t, { N: () => s, e: () => r });
var a = n(397927),
    l = n(871123);
function r(e) {
    let { imageUrl: t, backgroundImageUrl: n, altText: l, customClassNames: r } = e;
    return {
        type: "dynamic",
        component: a.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: { imageUrl: t, backgroundImageUrl: n, altText: l, customClassNames: r },
    };
}
function s(e) {
    return r({ imageUrl: (0, l.fq)(e), backgroundImageUrl: (0, l.xf)(e), altText: e.name });
}
