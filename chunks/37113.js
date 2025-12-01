n.d(t, {
    ApplicationStreamFPS: () => l,
    ApplicationStreamPresets: () => c,
    ApplicationStreamResolutions: () => o,
    L9: () => u,
    ND: () => f,
    WC: () => _,
    aW: () => s,
    af: () => b,
    k0: () => E,
    km: () => g,
    no: () => d,
    o6: () => h,
    z8: () => m,
}),
    n(415506);
var r = n(981631),
    i = n(474936),
    a = n(388032),
    o = (function (e) {
        return (
            (e[(e.RESOLUTION_480 = 480)] = "RESOLUTION_480"),
            (e[(e.RESOLUTION_720 = 720)] = "RESOLUTION_720"),
            (e[(e.RESOLUTION_1080 = 1080)] = "RESOLUTION_1080"),
            (e[(e.RESOLUTION_1440 = 1440)] = "RESOLUTION_1440"),
            (e[(e.RESOLUTION_SOURCE = 0)] = "RESOLUTION_SOURCE"),
            e
        );
    })({});
function s(e) {
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
            throw Error("Unknown resolution: ".concat(e));
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
    c = (function (e) {
        return (
            (e[(e.PRESET_VIDEO = 1)] = "PRESET_VIDEO"),
            (e[(e.PRESET_DOCUMENTS = 2)] = "PRESET_DOCUMENTS"),
            (e[(e.PRESET_CUSTOM = 3)] = "PRESET_CUSTOM"),
            (e[(e.PRESET_AUTO = 4)] = "PRESET_AUTO"),
            e
        );
    })({});
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
            throw Error("Unknown frame rate: ".concat(e));
    }
}
let d = {
        2: [
            {
                resolution: 0,
                fps: 15,
            },
            {
                resolution: 0,
                fps: 5,
            },
        ],
        1: [
            {
                resolution: 1440,
                fps: 60,
            },
            {
                resolution: 1080,
                fps: 60,
            },
            {
                resolution: 720,
                fps: 60,
            },
            {
                resolution: 720,
                fps: 30,
            },
        ],
        4: [],
        3: [],
    },
    f = [
        {
            resolution: 0,
            fps: 60,
            quality: i.ys.HIGH_STREAMING_QUALITY,
        },
        {
            resolution: 0,
            fps: 30,
            quality: i.ys.HIGH_STREAMING_QUALITY,
        },
        {
            resolution: 0,
            fps: 15,
            quality: i.ys.HIGH_STREAMING_QUALITY,
        },
        {
            resolution: 0,
            fps: 5,
            preset: 2,
        },
        {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 720,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_1,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 720,
            fps: 30,
        },
        {
            resolution: 720,
            fps: 15,
        },
        {
            resolution: 720,
            fps: 5,
        },
        {
            resolution: 480,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_1,
            quality: i.ys.MID_STREAMING_QUALITY,
        },
        {
            resolution: 480,
            fps: 30,
        },
        {
            resolution: 480,
            fps: 15,
        },
        {
            resolution: 480,
            fps: 5,
        },
    ];
function p(e, t) {
    return {
        value: e,
        get label() {
            return null != t ? t() : e;
        },
    };
}
let _ = [p(720), p(1080), p(1440), p(0, () => a.intl.string(a.t.XjXqzh))],
    m = [p(720), p(1080), p(1440)],
    h = (e) => (0 === e ? a.intl.string(a.t.XjXqzh) : a.intl.formatToPlainString(a.t.TEOC0I, { resolution: e })),
    g = [p(480, () => h(480)), p(720, () => h(720)), p(1080, () => h(1080)), p(1440, () => h(1440)), p(0, () => h(0))],
    E = [p(15), p(30), p(60)],
    b = [
        p(15, () => a.intl.formatToPlainString(a.t["bW+JCW"], { value: 15 })),
        p(30, () => a.intl.formatToPlainString(a.t["bW+JCW"], { value: 30 })),
        p(60, () => a.intl.formatToPlainString(a.t["bW+JCW"], { value: 60 })),
    ];
