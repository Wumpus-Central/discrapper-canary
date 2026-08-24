a.d(t, { B$: () => b, Wt: () => f, jB: () => o });
var d,
    c = a(508425),
    n = a(559949),
    s = a(375708),
    r =
        (((d = {}).ABOVE_THE_CLOUDS = "above_the_clouds"),
        (d.CYBERPUNK = "cyberpunk"),
        (d.STARLIT_DREAM = "starlit_dream"),
        (d.SHADOW_REALM = "shadow_realm"),
        (d.NEON_SPACE = "neon_space"),
        d);
let o = {
    above_the_clouds: {
        preset: "above_the_clouds",
        themeColorsLegacy: [752280, 9215590],
        themeColors: { dark: [5600251, 6553557], light: [2790911, 0xa3ffd4] },
        avatarDecorationSkuId: "1144059132517826601",
        displayNameStyles: { fontId: n.x.CHICLE, effectId: c.z.POP, colors: [959694] },
        getName: () => s.intl.string(s.t["TFc+iF"]),
        getHeaderSrc: () => a(702051).A,
        getPreviewThumbnailSrc: () => a(544309).A,
        getBannerSrc: (e) => (e ? a(283228).A : a(887e3).A),
        getBannerAltText: () => s.intl.string(s.t["8Q9iXo"]),
    },
    cyberpunk: {
        preset: "cyberpunk",
        themeColorsLegacy: [1967991, 742532],
        themeColors: { dark: [0xd846bb, 4395410], light: [0xff7ab6, 5028863] },
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: n.x.PIXELIFY, effectId: c.z.NEON, colors: [2949343] },
        getName: () => s.intl.string(s.t["4g+5bq"]),
        getHeaderSrc: () => a(272017).A,
        getPreviewThumbnailSrc: () => a(168914).A,
        getBannerSrc: (e) => (e ? a(457773).A : a(208574).A),
        getBannerAltText: () => s.intl.string(s.t.y6WngK),
    },
    shadow_realm: {
        preset: "shadow_realm",
        themeColorsLegacy: [0, 4458504],
        themeColors: { dark: [3880879, 0xad3e3a], light: [8154109, 0xc74200] },
        avatarDecorationSkuId: "1144058522808614923",
        displayNameStyles: { fontId: n.x.NEO_CASTEL, effectId: c.z.TOON, colors: [0xff0000] },
        getName: () => s.intl.string(s.t.ycg1xj),
        getHeaderSrc: () => a(863653).A,
        getPreviewThumbnailSrc: () => a(82939).A,
        getBannerSrc: (e) => (e ? a(229904).A : a(576974).A),
        getBannerAltText: () => s.intl.string(s.t.bwRnYf),
    },
    starlit_dream: {
        preset: "starlit_dream",
        themeColorsLegacy: [5123751, 590625],
        themeColors: { dark: [4334982, 0xe4e2d3], light: [0xf6dca7, 3805885] },
        avatarDecorationSkuId: "1144058844004233369",
        displayNameStyles: { fontId: n.x.CHERRY_BOMB, effectId: c.z.TOON, colors: [3343795] },
        getName: () => s.intl.string(s.t["9WLHvr"]),
        getHeaderSrc: () => a(434361).A,
        getPreviewThumbnailSrc: () => a(28636).A,
        getBannerSrc: (e) => (e ? a(610157).A : a(135572).A),
        getBannerAltText: () => s.intl.string(s.t.emZXBr),
    },
    neon_space: {
        preset: "neon_space",
        themeColorsLegacy: [6094952, 1007678],
        themeColors: { dark: [0xd620ff, 5826546], light: [583042, 0xee2eff] },
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: n.x.MUSEO_MODERNO, effectId: c.z.NEON, colors: [28737] },
        getName: () => s.intl.string(s.t.UdNuqi),
        getHeaderSrc: () => a(301928).A,
        getPreviewThumbnailSrc: () => a(823330).A,
        getBannerSrc: (e) => (e ? a(214875).A : a(775627).A),
        getBannerAltText: () => s.intl.string(s.t.si7znt),
    },
};
function f(e) {
    return o[e];
}
function b(e) {
    let t = Object.values(r),
        a = null == e ? t : t.filter((t) => t !== e);
    return a[Math.floor(Math.random() * a.length)];
}
