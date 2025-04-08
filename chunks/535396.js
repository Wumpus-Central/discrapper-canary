n.d(t, {
    Cp: () => p,
    Fq: () => _,
    H2: () => E,
    IN: () => m,
    If: () => g,
    KW: () => b,
    NO: () => c,
    Q1: () => h,
    Us: () => l,
    d5: () => v,
    uc: () => y
}),
    n(388685);
var r = n(704215),
    i = n(267642),
    o = n(474936),
    a = n(981631),
    s = n(388032),
    l = (function (e) {
        return (e.PERK = 'perk'), (e.LEVEL = 'level'), e;
    })({});
let c = '1340102344645283891',
    u = '1341586379779604621',
    d = '1341586379779604622',
    f = '1341586379779604623',
    _ = '525479941211684874',
    p = {
        [a.Eu4.TIER_1]: u,
        [a.Eu4.TIER_2]: d,
        [a.Eu4.TIER_3]: f,
        [a.Eu4.NONE]: void 0
    },
    h = {
        [a.Eu4.TIER_1]: r.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [a.Eu4.TIER_2]: r.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [a.Eu4.TIER_3]: r.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [a.Eu4.NONE]: void 0
    },
    m = '1351706802684952639',
    g = '1354906318279807056',
    E = 'guild_powerup_modal',
    b = new Set([m, g]),
    y = new Set([m, g]),
    v = () => ({
        [a.oNc.VIDEO_BITRATE_ENHANCED]: {
            perkIcon: i.Ro.STREAM,
            description: s.NW.string(s.t.y4ft4O)
        },
        [a.oNc.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: i.Ro.AUDIO,
            description: s.NW.formatToPlainString(s.t.zoT1ZG, { bitrate: o.HO[a.Eu4.TIER_1].limits.bitrate / 1000 })
        },
        [a.oNc.INVITE_SPLASH]: {
            perkIcon: i.Ro.CUSTOMIZATION,
            description: s.NW.string(s.t.Qwlpoq)
        },
        [a.oNc.ANIMATED_ICON]: {
            perkIcon: i.Ro.ANIMATED,
            description: s.NW.string(s.t.PbAyub)
        },
        [a.oNc.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: i.Ro.AUDIO,
            description: s.NW.formatToPlainString(s.t.zoT1ZG, { bitrate: o.HO[a.Eu4.TIER_2].limits.bitrate / 1000 })
        },
        [a.oNc.ROLE_ICONS]: {
            perkIcon: i.Ro.CUSTOM_ROLE_ICON,
            description: s.NW.string(s.t['6PV6QU'])
        },
        [a.oNc.MAX_FILE_SIZE_50_MB]: {
            perkIcon: i.Ro.UPLOAD,
            description: s.NW.formatToPlainString(s.t['aFRl5+'], { uploadSizeLimit: s.NW.string(s.t.yMOW8P) })
        },
        [a.oNc.BANNER]: {
            perkIcon: i.Ro.CUSTOMIZATION,
            description: s.NW.string(s.t['1a5rjo'])
        },
        [a.oNc.ANIMATED_BANNER]: {
            perkIcon: i.Ro.ANIMATED,
            description: s.NW.string(s.t['1+Vmh4'])
        },
        [a.oNc.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: i.Ro.AUDIO,
            description: s.NW.formatToPlainString(s.t.zoT1ZG, { bitrate: o.HO[a.Eu4.TIER_3].limits.bitrate / 1000 })
        },
        [a.oNc.VANITY_URL]: {
            perkIcon: i.Ro.VANITY,
            description: s.NW.string(s.t.adNGjY)
        },
        [a.oNc.MAX_FILE_SIZE_100_MB]: {
            perkIcon: i.Ro.UPLOAD,
            description: s.NW.formatToPlainString(s.t['aFRl5+'], { uploadSizeLimit: s.NW.string(s.t.yMOW8P) })
        }
    });
