"use strict";
n.d(t, { N: () => r, e: () => s });
var a = n(397927),
    l = n(871123);
function s(e) {
    let { imageUrl: t, backgroundImageUrl: n, altText: l, overlayImageUrl: s, customClassNames: r } = e;
    return {
        type: "dynamic",
        component: a.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: { imageUrl: t, backgroundImageUrl: n, altText: l, overlayImageUrl: s, customClassNames: r },
    };
}
function r(e) {
    return s({ imageUrl: (0, l.fq)(e), backgroundImageUrl: (0, l.xf)(e), altText: e.name });
}
