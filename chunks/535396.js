n.d(t, {
    Cp: () => h,
    Fq: () => p,
    H2: () => b,
    IN: () => g,
    If: () => E,
    KW: () => y,
    NO: () => c,
    Q1: () => m,
    Us: () => l,
    XW: () => f,
    ad: () => _,
    d5: () => v,
    uc: () => O
}),
    n(388685);
var r = n(704215),
    i = n(267642),
    a = n(474936),
    o = n(981631),
    s = n(388032),
    l = (function (e) {
        return (e.PERK = 'perk'), (e.LEVEL = 'level'), e;
    })({});
let c = '1340102344645283891',
    u = '1341586379779604621',
    d = '1341586379779604622',
    f = '1341586379779604623',
    _ = new Set([u, d, f]),
    p = '525479941211684874',
    h = {
        [o.Eu4.TIER_1]: u,
        [o.Eu4.TIER_2]: d,
        [o.Eu4.TIER_3]: f,
        [o.Eu4.NONE]: void 0
    },
    m = {
        [o.Eu4.TIER_1]: r.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [o.Eu4.TIER_2]: r.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [o.Eu4.TIER_3]: r.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [o.Eu4.NONE]: void 0
    },
    g = '1351706802684952639',
    E = '1354906318279807056',
    b = 'guild_powerup_modal',
    y = new Set([g, E]),
    O = new Set([g, E]),
    v = () => ({
        [o.oNc.VIDEO_BITRATE_ENHANCED]: {
            perkIcon: i.Ro.STREAM,
            description: s.intl.string(s.t.y4ft4O)
        },
        [o.oNc.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: i.Ro.AUDIO,
            description: s.intl.formatToPlainString(s.t.zoT1ZG, { bitrate: a.HO[o.Eu4.TIER_1].limits.bitrate / 1000 })
        },
        [o.oNc.INVITE_SPLASH]: {
            perkIcon: i.Ro.CUSTOMIZATION,
            description: s.intl.string(s.t.Qwlpoq)
        },
        [o.oNc.ANIMATED_ICON]: {
            perkIcon: i.Ro.ANIMATED,
            description: s.intl.string(s.t.PbAyub)
        },
        [o.oNc.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: i.Ro.AUDIO,
            description: s.intl.formatToPlainString(s.t.zoT1ZG, { bitrate: a.HO[o.Eu4.TIER_2].limits.bitrate / 1000 })
        },
        [o.oNc.ROLE_ICONS]: {
            perkIcon: i.Ro.CUSTOM_ROLE_ICON,
            description: s.intl.string(s.t['6PV6QU'])
        },
        [o.oNc.MAX_FILE_SIZE_50_MB]: {
            perkIcon: i.Ro.UPLOAD,
            description: s.intl.formatToPlainString(s.t['aFRl5+'], { uploadSizeLimit: s.intl.string(s.t.yMOW8P) })
        },
        [o.oNc.BANNER]: {
            perkIcon: i.Ro.CUSTOMIZATION,
            description: s.intl.string(s.t['1a5rjo'])
        },
        [o.oNc.ANIMATED_BANNER]: {
            perkIcon: i.Ro.ANIMATED,
            description: s.intl.string(s.t['1+Vmh4'])
        },
        [o.oNc.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: i.Ro.AUDIO,
            description: s.intl.formatToPlainString(s.t.zoT1ZG, { bitrate: a.HO[o.Eu4.TIER_3].limits.bitrate / 1000 })
        },
        [o.oNc.VANITY_URL]: {
            perkIcon: i.Ro.VANITY,
            description: s.intl.string(s.t.adNGjY)
        },
        [o.oNc.MAX_FILE_SIZE_100_MB]: {
            perkIcon: i.Ro.UPLOAD,
            description: s.intl.formatToPlainString(s.t['aFRl5+'], { uploadSizeLimit: s.intl.string(s.t.yMOW8P) })
        }
    });
