"use strict";
n.d(t, {
    AC: () => E,
    F0: () => c,
    Jk: () => f,
    ZV: () => A,
    ce: () => p,
    jQ: () => _,
    kn: () => u,
    on: () => d,
    zr: () => I,
});
var i,
    r,
    a,
    s = n(652215),
    l = n(202541),
    o = n(375708),
    d =
        (((i = {})[(i.RESOLUTION_480 = 480)] = "RESOLUTION_480"),
        (i[(i.RESOLUTION_720 = 720)] = "RESOLUTION_720"),
        (i[(i.RESOLUTION_1080 = 1080)] = "RESOLUTION_1080"),
        (i[(i.RESOLUTION_1440 = 1440)] = "RESOLUTION_1440"),
        (i[(i.RESOLUTION_SOURCE = 0)] = "RESOLUTION_SOURCE"),
        i);
function c(e) {
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
    _ =
        (((a = {})[(a.PRESET_VIDEO = 1)] = "PRESET_VIDEO"),
        (a[(a.PRESET_DOCUMENTS = 2)] = "PRESET_DOCUMENTS"),
        (a[(a.PRESET_CUSTOM = 3)] = "PRESET_CUSTOM"),
        (a[(a.PRESET_AUTO = 4)] = "PRESET_AUTO"),
        (a[(a.PRESET_MOBILE_DEFAULT = 5)] = "PRESET_MOBILE_DEFAULT"),
        (a[(a.PRESET_MOBILE_PERFORMANCE = 6)] = "PRESET_MOBILE_PERFORMANCE"),
        (a[(a.PRESET_MOBILE_HIGH_QUALITY = 7)] = "PRESET_MOBILE_HIGH_QUALITY"),
        a);
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
let A = [
    { resolution: 0, fps: 60, quality: l.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 30, quality: l.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 15, quality: l.uP.HIGH_STREAMING_QUALITY },
    { resolution: 0, fps: 5, preset: 2 },
    { resolution: 1440, fps: 60, guildPremiumTier: s.TVA.TIER_2, quality: l.uP.MID_STREAMING_QUALITY },
    { resolution: 1440, fps: 30, guildPremiumTier: s.TVA.TIER_2, quality: l.uP.MID_STREAMING_QUALITY },
    { resolution: 1440, fps: 15, guildPremiumTier: s.TVA.TIER_2, quality: l.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 60, guildPremiumTier: s.TVA.TIER_2, quality: l.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 30, guildPremiumTier: s.TVA.TIER_2, quality: l.uP.MID_STREAMING_QUALITY },
    { resolution: 1080, fps: 15, guildPremiumTier: s.TVA.TIER_2, quality: l.uP.MID_STREAMING_QUALITY },
    { resolution: 720, fps: 60, guildPremiumTier: s.TVA.TIER_1, quality: l.uP.MID_STREAMING_QUALITY },
    { resolution: 720, fps: 30 },
    { resolution: 720, fps: 15 },
    { resolution: 720, fps: 5 },
    { resolution: 480, fps: 60, guildPremiumTier: s.TVA.TIER_1, quality: l.uP.MID_STREAMING_QUALITY },
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
function I(e) {
    return 0 === e ? o.intl.string(o.t.XjXqzh) : o.intl.formatToPlainString(o.t.TEOC0I, { resolution: e });
}
h(720), h(1080), h(1440), h(0, () => o.intl.string(o.t.XjXqzh)), h(720), h(1080), h(1440);
let f = [h(480, () => I(480)), h(720, () => I(720)), h(1080, () => I(1080)), h(1440, () => I(1440)), h(0, () => I(0))];
h(15), h(30), h(60);
let p = [
    h(15, () => o.intl.formatToPlainString(o.t["bW+JCW"], { value: 15 })),
    h(30, () => o.intl.formatToPlainString(o.t["bW+JCW"], { value: 30 })),
    h(60, () => o.intl.formatToPlainString(o.t["bW+JCW"], { value: 60 })),
];
