"use strict";
n.d(t, { N: () => a, e: () => s });
var i = n(116833),
    r = n(871123);
function s(e) {
    let { imageUrl: t, backgroundImageUrl: n, altText: r, overlayImageUrl: s, customClassNames: a } = e;
    return {
        type: "dynamic",
        component: i.DynamicGraphicComponent.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: { imageUrl: t, backgroundImageUrl: n, altText: r, overlayImageUrl: s, customClassNames: a },
    };
}
function a(e) {
    return s({ imageUrl: (0, r.fq)(e), backgroundImageUrl: (0, r.xf)(e), altText: e.name });
}
