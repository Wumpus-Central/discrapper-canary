d.d(t, { B$: () => b, Wt: () => f, jB: () => r });
var a,
    c = d(508425),
    s = d(559949),
    n = d(375708),
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
        themeColorsLight: [2790911, 0xa3ffd4],
        avatarDecorationSkuId: "1144059132517826601",
        displayNameStyles: { fontId: s.x.CHICLE, effectId: c.z.POP, colors: [959694] },
        getName: () => n.intl.string(n.t["TFc+iF"]),
        getHeaderSrc: () => d(702051).A,
        getPreviewThumbnailSrc: () => d(544309).A,
        getBannerSrc: (e) => (e ? d(283228).A : d(887e3).A),
        getBannerAltText: () => n.intl.string(n.t["8Q9iXo"]),
    },
    cyberpunk: {
        preset: "cyberpunk",
        themeColors: [1967991, 742532],
        themeColorsLight: [0xff7ab6, 5028863],
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: s.x.PIXELIFY, effectId: c.z.NEON, colors: [2949343] },
        getName: () => n.intl.string(n.t["4g+5bq"]),
        getHeaderSrc: () => d(272017).A,
        getPreviewThumbnailSrc: () => d(168914).A,
        getBannerSrc: (e) => (e ? d(457773).A : d(208574).A),
        getBannerAltText: () => n.intl.string(n.t.y6WngK),
    },
    shadow_realm: {
        preset: "shadow_realm",
        themeColors: [0, 4458504],
        themeColorsLight: [8154109, 0xc74200],
        avatarDecorationSkuId: "1144058522808614923",
        displayNameStyles: { fontId: s.x.NEO_CASTEL, effectId: c.z.TOON, colors: [0xff0000] },
        getName: () => n.intl.string(n.t.ycg1xj),
        getHeaderSrc: () => d(863653).A,
        getPreviewThumbnailSrc: () => d(82939).A,
        getBannerSrc: (e) => (e ? d(229904).A : d(576974).A),
        getBannerAltText: () => n.intl.string(n.t.bwRnYf),
    },
    starlit_dream: {
        preset: "starlit_dream",
        themeColors: [5123751, 590625],
        themeColorsLight: [0xf6dca7, 3805885],
        avatarDecorationSkuId: "1144058844004233369",
        displayNameStyles: { fontId: s.x.CHERRY_BOMB, effectId: c.z.TOON, colors: [3343795] },
        getName: () => n.intl.string(n.t["9WLHvr"]),
        getHeaderSrc: () => d(434361).A,
        getPreviewThumbnailSrc: () => d(28636).A,
        getBannerSrc: (e) => (e ? d(610157).A : d(135572).A),
        getBannerAltText: () => n.intl.string(n.t.emZXBr),
    },
    neon_space: {
        preset: "neon_space",
        themeColors: [6094952, 1007678],
        themeColorsLight: [583042, 0xee2eff],
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: s.x.MUSEO_MODERNO, effectId: c.z.NEON, colors: [28737] },
        getName: () => n.intl.string(n.t.UdNuqi),
        getHeaderSrc: () => d(301928).A,
        getPreviewThumbnailSrc: () => d(823330).A,
        getBannerSrc: (e) => (e ? d(214875).A : d(775627).A),
        getBannerAltText: () => n.intl.string(n.t.si7znt),
    },
};
function f(e) {
    return r[e];
}
function b(e) {
    let t = Object.values(o),
        d = null == e ? t : t.filter((t) => t !== e);
    return d[Math.floor(Math.random() * d.length)];
}
