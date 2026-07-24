d.d(t, { B$: () => p, Wt: () => f, jB: () => r });
var a,
    c = d(508425),
    n = d(559949),
    s = d(375708),
    o =
        (((a = {}).ABOVE_THE_CLOUDS = "above_the_clouds"),
        (a.CYBERPUNK = "cyberpunk"),
        (a.STARLIT_DREAM = "starlit_dream"),
        (a.SHADOW_REALM = "shadow_realm"),
        (a.NEON_SPACE = "neon_space"),
        a);
let r = {
    above_the_clouds: {
        preset: "above_the_clouds",
        themeColors: [752280, 9215590],
        avatarDecorationSkuId: "1144059132517826601",
        displayNameStyles: { fontId: n.x.CHICLE, effectId: c.z.POP, colors: [959694] },
        getName: () => s.intl.string(s.t["TFc+iF"]),
        getHeaderSrc: () => d(702051).A,
        getPreviewThumbnailSrc: () => d(544309).A,
        getBannerSrc: (e) => (e ? d(735161).A : d(887e3).A),
    },
    cyberpunk: {
        preset: "cyberpunk",
        themeColors: [1967991, 742532],
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: n.x.PIXELIFY, effectId: c.z.NEON, colors: [2949343] },
        getName: () => s.intl.string(s.t["4g+5bq"]),
        getHeaderSrc: () => d(272017).A,
        getPreviewThumbnailSrc: () => d(168914).A,
        getBannerSrc: (e) => (e ? d(735271).A : d(208574).A),
    },
    shadow_realm: {
        preset: "shadow_realm",
        themeColors: [0, 4458504],
        avatarDecorationSkuId: "1144058522808614923",
        displayNameStyles: { fontId: n.x.NEO_CASTEL, effectId: c.z.TOON, colors: [0xff0000] },
        getName: () => s.intl.string(s.t.ycg1xj),
        getHeaderSrc: () => d(863653).A,
        getPreviewThumbnailSrc: () => d(82939).A,
        getBannerSrc: (e) => (e ? d(538263).A : d(576974).A),
    },
    starlit_dream: {
        preset: "starlit_dream",
        themeColors: [5123751, 590625],
        avatarDecorationSkuId: "1144058844004233369",
        displayNameStyles: { fontId: n.x.CHERRY_BOMB, effectId: c.z.TOON, colors: [3343795] },
        getName: () => s.intl.string(s.t["9WLHvr"]),
        getHeaderSrc: () => d(434361).A,
        getPreviewThumbnailSrc: () => d(28636).A,
        getBannerSrc: (e) => (e ? d(700309).A : d(135572).A),
    },
    neon_space: {
        preset: "neon_space",
        themeColors: [6094952, 1007678],
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: n.x.MUSEO_MODERNO, effectId: c.z.NEON, colors: [28737] },
        getName: () => s.intl.string(s.t.UdNuqi),
        getHeaderSrc: () => d(301928).A,
        getPreviewThumbnailSrc: () => d(823330).A,
        getBannerSrc: (e) => (e ? d(285974).A : d(775627).A),
    },
};
function f(e) {
    return r[e];
}
function p(e) {
    let t = Object.values(o),
        d = null == e ? t : t.filter((t) => t !== e);
    return d[Math.floor(Math.random() * d.length)];
}
