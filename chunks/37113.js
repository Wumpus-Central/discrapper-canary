n.d(t, {
    L9: () => u,
    LY: () => a,
    ND: () => f,
    WC: () => p,
    aW: () => s,
    af: () => b,
    k0: () => E,
    km: () => g,
    no: () => d,
    o6: () => m,
    tI: () => c,
    ws: () => l,
    z8: () => h
}),
    n(411104);
var r = n(981631),
    i = n(474936),
    o = n(388032),
    a = (function (e) {
        return (e[(e.RESOLUTION_480 = 480)] = 'RESOLUTION_480'), (e[(e.RESOLUTION_720 = 720)] = 'RESOLUTION_720'), (e[(e.RESOLUTION_1080 = 1080)] = 'RESOLUTION_1080'), (e[(e.RESOLUTION_1440 = 1440)] = 'RESOLUTION_1440'), (e[(e.RESOLUTION_SOURCE = 0)] = 'RESOLUTION_SOURCE'), e;
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
            throw Error('Unknown resolution: '.concat(e));
    }
}
var l = (function (e) {
        return (e[(e.FPS_5 = 5)] = 'FPS_5'), (e[(e.FPS_15 = 15)] = 'FPS_15'), (e[(e.FPS_30 = 30)] = 'FPS_30'), (e[(e.FPS_60 = 60)] = 'FPS_60'), e;
    })({}),
    c = (function (e) {
        return (e[(e.PRESET_VIDEO = 1)] = 'PRESET_VIDEO'), (e[(e.PRESET_DOCUMENTS = 2)] = 'PRESET_DOCUMENTS'), (e[(e.PRESET_CUSTOM = 3)] = 'PRESET_CUSTOM'), e;
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
            throw Error('Unknown frame rate: '.concat(e));
    }
}
let d = {
        2: [
            {
                resolution: 0,
                fps: 15
            },
            {
                resolution: 0,
                fps: 5
            }
        ],
        1: [
            {
                resolution: 1440,
                fps: 60
            },
            {
                resolution: 1080,
                fps: 60
            },
            {
                resolution: 720,
                fps: 60
            },
            {
                resolution: 720,
                fps: 30
            }
        ],
        3: []
    },
    f = [
        {
            resolution: 0,
            fps: 60,
            quality: i.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 30,
            quality: i.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 15,
            quality: i.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 5,
            preset: 2
        },
        {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: r.Eu4.TIER_2,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_1,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 30
        },
        {
            resolution: 720,
            fps: 15
        },
        {
            resolution: 720,
            fps: 5
        },
        {
            resolution: 480,
            fps: 60,
            guildPremiumTier: r.Eu4.TIER_1,
            quality: i.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 480,
            fps: 30
        },
        {
            resolution: 480,
            fps: 15
        },
        {
            resolution: 480,
            fps: 5
        }
    ];
function _(e, t) {
    return {
        value: e,
        get label() {
            return null != t ? t() : e;
        }
    };
}
let p = [_(720), _(1080), _(1440), _(0, () => o.NW.string(o.t.XjXqzs))],
    h = [_(720), _(1080), _(1440)],
    m = (e) => (0 === e ? o.NW.string(o.t.XjXqzs) : o.NW.formatToPlainString(o.t.TEOC0N, { resolution: e })),
    g = [_(480, () => m(480)), _(720, () => m(720)), _(1080, () => m(1080)), _(1440, () => m(1440)), _(0, () => m(0))],
    E = [_(15), _(30), _(60)],
    b = [_(15, () => o.NW.formatToPlainString(o.t['bW+JCQ'], { value: 15 })), _(30, () => o.NW.formatToPlainString(o.t['bW+JCQ'], { value: 30 })), _(60, () => o.NW.formatToPlainString(o.t['bW+JCQ'], { value: 60 }))];
