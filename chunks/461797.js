a.d(t, { B$: () => b, Wt: () => f, jB: () => r });
var d,
    c = a(508425),
    s = a(559949),
    n = a(375708),
    o =
        (((d = {}).ABOVE_THE_CLOUDS = "above_the_clouds"),
        (d.CYBERPUNK = "cyberpunk"),
        (d.STARLIT_DREAM = "starlit_dream"),
        (d.SHADOW_REALM = "shadow_realm"),
        (d.NEON_SPACE = "neon_space"),
        d);
let r = {
    above_the_clouds: {
        preset: "above_the_clouds",
        themeColors: [752280, 9215590],
        avatarDecorationSkuId: "1144059132517826601",
        displayNameStyles: { fontId: s.x.CHICLE, effectId: c.z.POP, colors: [959694] },
        getName: () => n.intl.string(n.t["TFc+iF"]),
        getHeaderSrc: () => a(702051).A,
        getPreviewThumbnailSrc: () => a(544309).A,
        getBannerSrc: (e) => (e ? a(735161).A : a(887e3).A),
        getBannerAltText: () => n.intl.string(n.t["8Q9iXo"]),
    },
    cyberpunk: {
        preset: "cyberpunk",
        themeColors: [1967991, 742532],
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: s.x.PIXELIFY, effectId: c.z.NEON, colors: [2949343] },
        getName: () => n.intl.string(n.t["4g+5bq"]),
        getHeaderSrc: () => a(272017).A,
        getPreviewThumbnailSrc: () => a(168914).A,
        getBannerSrc: (e) => (e ? a(735271).A : a(208574).A),
        getBannerAltText: () => n.intl.string(n.t.y6WngK),
    },
    shadow_realm: {
        preset: "shadow_realm",
        themeColors: [0, 4458504],
        avatarDecorationSkuId: "1144058522808614923",
        displayNameStyles: { fontId: s.x.NEO_CASTEL, effectId: c.z.TOON, colors: [0xff0000] },
        getName: () => n.intl.string(n.t.ycg1xj),
        getHeaderSrc: () => a(863653).A,
        getPreviewThumbnailSrc: () => a(82939).A,
        getBannerSrc: (e) => (e ? a(538263).A : a(576974).A),
        getBannerAltText: () => n.intl.string(n.t.bwRnYf),
    },
    starlit_dream: {
        preset: "starlit_dream",
        themeColors: [5123751, 590625],
        avatarDecorationSkuId: "1144058844004233369",
        displayNameStyles: { fontId: s.x.CHERRY_BOMB, effectId: c.z.TOON, colors: [3343795] },
        getName: () => n.intl.string(n.t["9WLHvr"]),
        getHeaderSrc: () => a(434361).A,
        getPreviewThumbnailSrc: () => a(28636).A,
        getBannerSrc: (e) => (e ? a(700309).A : a(135572).A),
        getBannerAltText: () => n.intl.string(n.t.emZXBr),
    },
    neon_space: {
        preset: "neon_space",
        themeColors: [6094952, 1007678],
        avatarDecorationSkuId: null,
        displayNameStyles: { fontId: s.x.MUSEO_MODERNO, effectId: c.z.NEON, colors: [28737] },
        getName: () => n.intl.string(n.t.UdNuqi),
        getHeaderSrc: () => a(301928).A,
        getPreviewThumbnailSrc: () => a(823330).A,
        getBannerSrc: (e) => (e ? a(285974).A : a(775627).A),
        getBannerAltText: () => n.intl.string(n.t.si7znt),
    },
};
function f(e) {
    return r[e];
}
function b(e) {
    let t = Object.values(o),
        a = null == e ? t : t.filter((t) => t !== e);
    return a[Math.floor(Math.random() * a.length)];
}
