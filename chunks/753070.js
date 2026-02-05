"use strict";
n.d(t, {
    AC: () => c,
    F0: () => o,
    Jk: () => h,
    ZV: () => _,
    ce: () => m,
    jQ: () => u,
    kn: () => l,
    on: () => s,
    yw: () => d,
    zr: () => p,
});
var r = n(652215),
    i = n(788868),
    a = n(985018),
    s = (function (e) {
        return (
            (e[(e.RESOLUTION_480 = 480)] = "RESOLUTION_480"),
            (e[(e.RESOLUTION_720 = 720)] = "RESOLUTION_720"),
            (e[(e.RESOLUTION_1080 = 1080)] = "RESOLUTION_1080"),
            (e[(e.RESOLUTION_1440 = 1440)] = "RESOLUTION_1440"),
            (e[(e.RESOLUTION_SOURCE = 0)] = "RESOLUTION_SOURCE"),
            e
        );
    })({});
function o(e) {
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
var l = (function (e) {
        return (
            (e[(e.FPS_5 = 5)] = "FPS_5"),
            (e[(e.FPS_15 = 15)] = "FPS_15"),
            (e[(e.FPS_30 = 30)] = "FPS_30"),
            (e[(e.FPS_60 = 60)] = "FPS_60"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e[(e.PRESET_VIDEO = 1)] = "PRESET_VIDEO"),
            (e[(e.PRESET_DOCUMENTS = 2)] = "PRESET_DOCUMENTS"),
            (e[(e.PRESET_CUSTOM = 3)] = "PRESET_CUSTOM"),
            (e[(e.PRESET_AUTO = 4)] = "PRESET_AUTO"),
            e
        );
    })({});
function c(e) {
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
let d = {
        2: [
            { resolution: 0, fps: 15 },
            { resolution: 0, fps: 5 },
        ],
        1: [
            { resolution: 1440, fps: 60 },
            { resolution: 1080, fps: 60 },
            { resolution: 720, fps: 60 },
            { resolution: 720, fps: 30 },
        ],
        4: [],
        3: [],
    },
    _ = [
        { resolution: 0, fps: 60, quality: i.uP.HIGH_STREAMING_QUALITY },
        { resolution: 0, fps: 30, quality: i.uP.HIGH_STREAMING_QUALITY },
        { resolution: 0, fps: 15, quality: i.uP.HIGH_STREAMING_QUALITY },
        { resolution: 0, fps: 5, preset: 2 },
        { resolution: 1440, fps: 60, guildPremiumTier: r.TVA.TIER_2, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 1440, fps: 30, guildPremiumTier: r.TVA.TIER_2, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 1440, fps: 15, guildPremiumTier: r.TVA.TIER_2, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 1080, fps: 60, guildPremiumTier: r.TVA.TIER_2, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 1080, fps: 30, guildPremiumTier: r.TVA.TIER_2, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 1080, fps: 15, guildPremiumTier: r.TVA.TIER_2, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 720, fps: 60, guildPremiumTier: r.TVA.TIER_1, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 720, fps: 30 },
        { resolution: 720, fps: 15 },
        { resolution: 720, fps: 5 },
        { resolution: 480, fps: 60, guildPremiumTier: r.TVA.TIER_1, quality: i.uP.MID_STREAMING_QUALITY },
        { resolution: 480, fps: 30 },
        { resolution: 480, fps: 15 },
        { resolution: 480, fps: 5 },
    ];
function f(e, t, n) {
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
f(720), f(1080), f(1440), f(0, () => a.intl.string(a.t.XjXqzh)), f(720), f(1080), f(1440);
let p = (e) => (0 === e ? a.intl.string(a.t.XjXqzh) : a.intl.formatToPlainString(a.t.TEOC0I, { resolution: e })),
    h = [f(480, () => p(480)), f(720, () => p(720)), f(1080, () => p(1080)), f(1440, () => p(1440)), f(0, () => p(0))];
f(15), f(30), f(60);
let m = [
    f(15, () => a.intl.formatToPlainString(a.t["bW+JCW"], { value: 15 })),
    f(30, () => a.intl.formatToPlainString(a.t["bW+JCW"], { value: 30 })),
    f(60, () => a.intl.formatToPlainString(a.t["bW+JCW"], { value: 60 })),
];
