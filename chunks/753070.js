"use strict";
n.d(t, {
    AC: () => f,
    F0: () => d,
    Jk: () => m,
    ZV: () => E,
    ce: () => g,
    jQ: () => _,
    kn: () => c,
    on: () => u,
    zr: () => p,
});
var r,
    i,
    s,
    a = n(652215),
    o = n(788868),
    l = n(985018),
    u =
        (((r = {})[(r.RESOLUTION_480 = 480)] = "RESOLUTION_480"),
        (r[(r.RESOLUTION_720 = 720)] = "RESOLUTION_720"),
        (r[(r.RESOLUTION_1080 = 1080)] = "RESOLUTION_1080"),
        (r[(r.RESOLUTION_1440 = 1440)] = "RESOLUTION_1440"),
        (r[(r.RESOLUTION_SOURCE = 0)] = "RESOLUTION_SOURCE"),
        r);
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
var c =
        (((i = {})[(i.FPS_5 = 5)] = "FPS_5"),
        (i[(i.FPS_15 = 15)] = "FPS_15"),
        (i[(i.FPS_30 = 30)] = "FPS_30"),
        (i[(i.FPS_60 = 60)] = "FPS_60"),
        i),
    _ =
        (((s = {})[(s.PRESET_VIDEO = 1)] = "PRESET_VIDEO"),
        (s[(s.PRESET_DOCUMENTS = 2)] = "PRESET_DOCUMENTS"),
        (s[(s.PRESET_CUSTOM = 3)] = "PRESET_CUSTOM"),
        (s[(s.PRESET_AUTO = 4)] = "PRESET_AUTO"),
        s);
function f(e) {
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
let E = [
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
function h(e, t, n) {
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
h(720), h(1080), h(1440), h(0, () => l.intl.string(l.t.XjXqzh)), h(720), h(1080), h(1440);
let p = (e) => (0 === e ? l.intl.string(l.t.XjXqzh) : l.intl.formatToPlainString(l.t.TEOC0I, { resolution: e })),
    m = [h(480, () => p(480)), h(720, () => p(720)), h(1080, () => p(1080)), h(1440, () => p(1440)), h(0, () => p(0))];
h(15), h(30), h(60);
let g = [
    h(15, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 15 })),
    h(30, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 30 })),
    h(60, () => l.intl.formatToPlainString(l.t["bW+JCW"], { value: 60 })),
];
