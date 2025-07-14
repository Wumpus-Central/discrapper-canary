(n.d(t, {
    Cp: () => m,
    Fq: () => h,
    H2: () => y,
    Hk: () => T,
    IN: () => E,
    If: () => b,
    KW: () => O,
    NO: () => u,
    Q1: () => g,
    Rx: () => S,
    Us: () => c,
    XW: () => _,
    ad: () => p,
    d5: () => I,
    uc: () => v
}),
    n(388685));
var r = n(494497),
    i = n(704215),
    a = n(267642),
    o = n(474936),
    s = n(981631),
    l = n(388032),
    c = (function (e) {
        return ((e.PERK = 'perk'), (e.LEVEL = 'level'), e);
    })({});
let u = '1340102344645283891',
    d = '1341586379779604621',
    f = '1341586379779604622',
    _ = '1341586379779604623',
    p = new Set([d, f, _]),
    h = '525479941211684874',
    m = {
        [s.Eu4.TIER_1]: d,
        [s.Eu4.TIER_2]: f,
        [s.Eu4.TIER_3]: _,
        [s.Eu4.NONE]: void 0
    },
    g = {
        [s.Eu4.TIER_1]: i.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [s.Eu4.TIER_2]: i.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [s.Eu4.TIER_3]: i.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [s.Eu4.NONE]: void 0
    },
    E = '1351706802684952639',
    b = '1354906318279807056',
    y = 'guild_powerup_modal',
    O = new Set([E, b]),
    v = new Set([E, b, r.A]),
    I = () => ({
        [s.oNc.VIDEO_BITRATE_ENHANCED]: {
            perkIcon: a.Ro.STREAM,
            description: l.intl.string(l.t.y4ft4O)
        },
        [s.oNc.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: a.Ro.AUDIO,
            description: l.intl.formatToPlainString(l.t.zoT1ZG, { bitrate: o.HO[s.Eu4.TIER_1].limits.bitrate / 1000 })
        },
        [s.oNc.INVITE_SPLASH]: {
            perkIcon: a.Ro.CUSTOMIZATION,
            description: l.intl.string(l.t.Qwlpoq)
        },
        [s.oNc.ANIMATED_ICON]: {
            perkIcon: a.Ro.ANIMATED,
            description: l.intl.string(l.t.PbAyub)
        },
        [s.oNc.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: a.Ro.AUDIO,
            description: l.intl.formatToPlainString(l.t.zoT1ZG, { bitrate: o.HO[s.Eu4.TIER_2].limits.bitrate / 1000 })
        },
        [s.oNc.ROLE_ICONS]: {
            perkIcon: a.Ro.CUSTOM_ROLE_ICON,
            description: l.intl.string(l.t['6PV6QU'])
        },
        [s.oNc.MAX_FILE_SIZE_50_MB]: {
            perkIcon: a.Ro.UPLOAD,
            description: l.intl.formatToPlainString(l.t['aFRl5+'], { uploadSizeLimit: l.intl.string(l.t.M6qV8v) })
        },
        [s.oNc.BANNER]: {
            perkIcon: a.Ro.CUSTOMIZATION,
            description: l.intl.string(l.t['1a5rjo'])
        },
        [s.oNc.ANIMATED_BANNER]: {
            perkIcon: a.Ro.ANIMATED,
            description: l.intl.string(l.t['1+Vmh4'])
        },
        [s.oNc.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: a.Ro.AUDIO,
            description: l.intl.formatToPlainString(l.t.zoT1ZG, { bitrate: o.HO[s.Eu4.TIER_3].limits.bitrate / 1000 })
        },
        [s.oNc.VANITY_URL]: {
            perkIcon: a.Ro.VANITY,
            description: l.intl.string(l.t.adNGjY)
        },
        [s.oNc.MAX_FILE_SIZE_100_MB]: {
            perkIcon: a.Ro.UPLOAD,
            description: l.intl.formatToPlainString(l.t['aFRl5+'], { uploadSizeLimit: l.intl.string(l.t.yMOW8P) })
        }
    }),
    T = {
        [s.oNc.VANITY_URL]: {
            boostPrice: 5,
            includedInLevel: s.Eu4.TIER_3
        },
        [s.oNc.GUILD_TAGS]: {
            boostPrice: 3,
            includedInLevel: void 0
        },
        [s.oNc.ENHANCED_ROLE_COLORS]: {
            boostPrice: 3,
            includedInLevel: void 0
        }
    },
    S = { [r.A]: s.Eu4.TIER_3 };
