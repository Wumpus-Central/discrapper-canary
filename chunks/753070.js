"use strict";
n.d(t, {
    AC: () => E,
    F0: () => d,
    Jk: () => g,
    ZV: () => h,
    ce: () => A,
    jQ: () => c,
    kn: () => u,
    on: () => _,
    zr: () => f,
});
var i,
    r,
    s,
    a = n(652215),
    o = n(788868),
    l = n(985018),
    _ =
        (((i = {})[(i.RESOLUTION_480 = 480)] = "RESOLUTION_480"),
        (i[(i.RESOLUTION_720 = 720)] = "RESOLUTION_720"),
        (i[(i.RESOLUTION_1080 = 1080)] = "RESOLUTION_1080"),
        (i[(i.RESOLUTION_1440 = 1440)] = "RESOLUTION_1440"),
        (i[(i.RESOLUTION_SOURCE = 0)] = "RESOLUTION_SOURCE"),
        i);
function d(e) {
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
var u =
        (((r = {})[(r.FPS_5 = 5)] = "FPS_5"),
        (r[(r.FPS_15 = 15)] = "FPS_15"),
        (r[(r.FPS_30 = 30)] = "FPS_30"),
        (r[(r.FPS_60 = 60)] = "FPS_60"),
        r),
    c =
        (((s = {})[(s.PRESET_VIDEO = 1)] = "PRESET_VIDEO"),
        (s[(s.PRESET_DOCUMENTS = 2)] = "PRESET_DOCUMENTS"),
        (s[(s.PRESET_CUSTOM = 3)] = "PRESET_CUSTOM"),
        (s[(s.PRESET_AUTO = 4)] = "PRESET_AUTO"),
        (s[(s.PRESET_MOBILE_DEFAULT = 5)] = "PRESET_MOBILE_DEFAULT"),
        (s[(s.PRESET_MOBILE_PERFORMANCE = 6)] = "PRESET_MOBILE_PERFORMANCE"),
        (s[(s.PRESET_MOBILE_HIGH_QUALITY = 7)] = "PRESET_MOBILE_HIGH_QUALITY"),
        s);
function E(e) {
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
let h = [
    { resolution: 0, fps: 60, quality: o.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 30, quality: o.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 15, quality: o.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 5, preset: 2 },
    { resolution: 1440, fps: 60, guildPremiumTier: a.TVA.TIER_2, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 1440, fps: 30, guildPremiumTier: a.TVA.TIER_2, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 1440, fps: 15, guildPremiumTier: a.TVA.TIER_2, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 60, guildPremiumTier: a.TVA.TIER_2, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 30, guildPremiumTier: a.TVA.TIER_2, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 15, guildPremiumTier: a.TVA.TIER_2, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 720, fps: 60, guildPremiumTier: a.TVA.TIER_1, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 720, fps: 30 },
    { resolution: 720, fps: 15 },
    { resolution: 720, fps: 5 },
    { resolution: 480, fps: 60, guildPremiumTier: a.TVA.TIER_1, quality: o.uP.MID_STREAMING_QUALITY },
    { resolution: 480, fps: 30 },
    { resolution: 480, fps: 15 },
    { resolution: 480, fps: 5 },
];
function m(e, t, n) {
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
m(720), m(1080), m(1440), m(0, () => l.intl.string(l.t.XjXqzh)), m(720), m(1080), m(1440);
let f = (e) => (0 === e ? l.intl.string(l.t.XjXqzh) : l.intl.formatToPlainString(l.t.TEOC0I, { resolution: e })),
    g = [m(480, () => f(480)), m(720, () => f(720)), m(1080, () => f(1080)), m(1440, () => f(1440)), m(0, () => f(0))];
m(15), m(30), m(60);
let A = [
    m(15, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 15 })),
    m(30, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 30 })),
    m(60, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 60 })),
];
