r.d(n, {
    L9: function () {
        return f;
    },
    LY: function () {
        return i;
    },
    ND: function () {
        return h;
    },
    WC: function () {
        return m;
    },
    aW: function () {
        return d;
    },
    af: function () {
        return b;
    },
    k0: function () {
        return y;
    },
    km: function () {
        return v;
    },
    no: function () {
        return p;
    },
    o6: function () {
        return E;
    },
    tI: function () {
        return o;
    },
    ws: function () {
        return a;
    },
    z8: function () {
        return g;
    }
});
var i,
    a,
    o,
    s = r(411104);
var l = r(981631),
    u = r(474936),
    c = r(388032);
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
            throw Error('Unknown resolution: '.concat(e));
    }
}
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
            throw Error('Unknown frame rate: '.concat(e));
    }
}
!(function (e) {
    (e[(e.RESOLUTION_480 = 480)] = 'RESOLUTION_480'), (e[(e.RESOLUTION_720 = 720)] = 'RESOLUTION_720'), (e[(e.RESOLUTION_1080 = 1080)] = 'RESOLUTION_1080'), (e[(e.RESOLUTION_1440 = 1440)] = 'RESOLUTION_1440'), (e[(e.RESOLUTION_SOURCE = 0)] = 'RESOLUTION_SOURCE');
})(i || (i = {})),
    !(function (e) {
        (e[(e.FPS_5 = 5)] = 'FPS_5'), (e[(e.FPS_15 = 15)] = 'FPS_15'), (e[(e.FPS_30 = 30)] = 'FPS_30'), (e[(e.FPS_60 = 60)] = 'FPS_60');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.PRESET_VIDEO = 1)] = 'PRESET_VIDEO'), (e[(e.PRESET_DOCUMENTS = 2)] = 'PRESET_DOCUMENTS'), (e[(e.PRESET_CUSTOM = 3)] = 'PRESET_CUSTOM');
    })(o || (o = {}));
let p = {
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
    h = [
        {
            resolution: 0,
            fps: 60,
            quality: u.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 30,
            quality: u.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 15,
            quality: u.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 5,
            preset: 2
        },
        {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: l.Eu4.TIER_2,
            quality: u.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: l.Eu4.TIER_2,
            quality: u.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: l.Eu4.TIER_2,
            quality: u.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: l.Eu4.TIER_2,
            quality: u.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: l.Eu4.TIER_2,
            quality: u.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: l.Eu4.TIER_2,
            quality: u.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 60,
            guildPremiumTier: l.Eu4.TIER_1,
            quality: u.ys.MID_STREAMING_QUALITY
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
            guildPremiumTier: l.Eu4.TIER_1,
            quality: u.ys.MID_STREAMING_QUALITY
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
function _(e, n) {
    return {
        value: e,
        get label() {
            return null != n ? n() : e;
        }
    };
}
let m = [_(720), _(1080), _(1440), _(0, () => c.intl.string(c.t.XjXqzs))],
    g = [_(720), _(1080), _(1440)],
    E = (e) => (0 === e ? c.intl.string(c.t.XjXqzs) : c.intl.formatToPlainString(c.t.TEOC0N, { resolution: e })),
    v = [_(480, () => E(480)), _(720, () => E(720)), _(1080, () => E(1080)), _(1440, () => E(1440)), _(0, () => E(0))],
    y = [_(15), _(30), _(60)],
    b = [_(15, () => c.intl.formatToPlainString(c.t['bW+JCQ'], { value: 15 })), _(30, () => c.intl.formatToPlainString(c.t['bW+JCQ'], { value: 30 })), _(60, () => c.intl.formatToPlainString(c.t['bW+JCQ'], { value: 60 }))];
