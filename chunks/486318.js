n.d(t, {
    N: () => s,
    e: () => a,
});
var r = n(397927),
    i = n(871123);

function a(e) {
    let { imageUrl: t, backgroundImageUrl: n, altText: i, customClassNames: a } = e;
    return {
        type: "dynamic",
        component: r.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: {
            imageUrl: t,
            backgroundImageUrl: n,
            altText: i,
            customClassNames: a,
        },
    };
}

function s(e) {
    return a({
        imageUrl: (0, i.fq)(e),
        backgroundImageUrl: (0, i.xf)(e),
        altText: e.name,
    });
}
