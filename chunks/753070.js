n.d(t, {
    AC: () => u,
    F0: () => E,
    Jk: () => S,
    ZV: () => I,
    ce: () => N,
    jQ: () => c,
    kn: () => d,
    on: () => o,
    zr: () => T,
});
var i,
    r,
    a,
    s = n(652215),
    _ = n(788868),
    l = n(985018),
    o =
        (((i = {})[(i.RESOLUTION_480 = 480)] = "RESOLUTION_480"),
        (i[(i.RESOLUTION_720 = 720)] = "RESOLUTION_720"),
        (i[(i.RESOLUTION_1080 = 1080)] = "RESOLUTION_1080"),
        (i[(i.RESOLUTION_1440 = 1440)] = "RESOLUTION_1440"),
        (i[(i.RESOLUTION_SOURCE = 0)] = "RESOLUTION_SOURCE"),
        i);
function E(e) {
    switch (e) {
        case 480:
            return 480;
        case 720:
            return 720;
        case 1080:
            return 1080;
        case 1440:
            return 1440;
        case 0:
            return 0;
        default:
            throw Error(`Unknown resolution: ${e}`);
    }
}
var d =
        (((r = {})[(r.FPS_5 = 5)] = "FPS_5"),
        (r[(r.FPS_15 = 15)] = "FPS_15"),
        (r[(r.FPS_30 = 30)] = "FPS_30"),
        (r[(r.FPS_60 = 60)] = "FPS_60"),
        r),
    c =
        (((a = {})[(a.PRESET_VIDEO = 1)] = "PRESET_VIDEO"),
        (a[(a.PRESET_DOCUMENTS = 2)] = "PRESET_DOCUMENTS"),
        (a[(a.PRESET_CUSTOM = 3)] = "PRESET_CUSTOM"),
        (a[(a.PRESET_AUTO = 4)] = "PRESET_AUTO"),
        (a[(a.PRESET_MOBILE_DEFAULT = 5)] = "PRESET_MOBILE_DEFAULT"),
        (a[(a.PRESET_MOBILE_PERFORMANCE = 6)] = "PRESET_MOBILE_PERFORMANCE"),
        (a[(a.PRESET_MOBILE_HIGH_QUALITY = 7)] = "PRESET_MOBILE_HIGH_QUALITY"),
        a);
function u(e) {
    switch (e) {
        case 5:
            return 5;
        case 15:
            return 15;
        case 30:
            return 30;
        case 60:
            return 60;
        default:
            throw Error(`Unknown frame rate: ${e}`);
    }
}
let I = [
    { resolution: 0, fps: 60, quality: _.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 30, quality: _.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 15, quality: _.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 5, preset: 2 },
    { resolution: 1440, fps: 60, guildPremiumTier: s.TVA.TIER_2, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 1440, fps: 30, guildPremiumTier: s.TVA.TIER_2, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 1440, fps: 15, guildPremiumTier: s.TVA.TIER_2, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 60, guildPremiumTier: s.TVA.TIER_2, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 30, guildPremiumTier: s.TVA.TIER_2, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 15, guildPremiumTier: s.TVA.TIER_2, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 720, fps: 60, guildPremiumTier: s.TVA.TIER_1, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 720, fps: 30 },
    { resolution: 720, fps: 15 },
    { resolution: 720, fps: 5 },
    { resolution: 480, fps: 60, guildPremiumTier: s.TVA.TIER_1, quality: _.uP.MID_STREAMING_QUALITY },
    { resolution: 480, fps: 30 },
    { resolution: 480, fps: 15 },
    { resolution: 480, fps: 5 },
];
function A(e, t, n) {
    return {
        value: e,
        get label() {
            return null != t ? t() : String(e);
        },
        get subtext() {
            return null != n ? n() : void 0;
        },
    };
}
A(720), A(1080), A(1440), A(0, () => l.intl.string(l.t.XjXqzh)), A(720), A(1080), A(1440);
let T = (e) => (0 === e ? l.intl.string(l.t.XjXqzh) : l.intl.formatToPlainString(l.t.TEOC0I, { resolution: e })),
    S = [A(480, () => T(480)), A(720, () => T(720)), A(1080, () => T(1080)), A(1440, () => T(1440)), A(0, () => T(0))];
A(15), A(30), A(60);
let N = [
    A(15, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 15 })),
    A(30, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 30 })),
    A(60, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 60 })),
];
