n.d(t, {
    A3: () => v,
    Cp: () => _,
    Du: () => I,
    Fq: () => f,
    H2: () => m,
    Hk: () => y,
    NL: () => T,
    NO: () => u,
    Q1: () => h,
    Rx: () => O,
    T1: () => p,
    Tg: () => g,
    Us: () => c,
    ad: () => d,
    am: () => A,
    d5: () => b,
    os: () => S,
    uc: () => E,
}),
    n(388685);
var r = n(494497),
    i = n(704215),
    o = n(267642),
    a = n(474936),
    s = n(981631),
    l = n(388032),
    c = (function (e) {
        return (e.PERK = "perk"), (e.LEVEL = "level"), e;
    })({});
let u = "1340102344645283891",
    d = new Set([r.h_, r.NJ, r.XW]),
    f = "525479941211684874",
    _ = {
        [s.Eu4.TIER_1]: r.h_,
        [s.Eu4.TIER_2]: r.NJ,
        [s.Eu4.TIER_3]: r.XW,
        [s.Eu4.NONE]: void 0,
    },
    p = {
        [r.h_]: s.Eu4.TIER_1,
        [r.NJ]: s.Eu4.TIER_2,
        [r.XW]: s.Eu4.TIER_3,
    },
    h = {
        [s.Eu4.TIER_1]: i.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [s.Eu4.TIER_2]: i.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [s.Eu4.TIER_3]: i.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [s.Eu4.NONE]: void 0,
    },
    m = "guild_powerup_modal",
    g = [[r.IN], [r.If], [r.A$], [r.MB, r.Vk]],
    E = new Set([r.IN, r.If, r.A$]),
    b = () => ({
        [s.oNc.VIDEO_BITRATE_ENHANCED]: {
            perkIcon: o.Ro.STREAM,
            description: l.intl.string(l.t.y4ft4O),
        },
        [s.oNc.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: o.Ro.AUDIO,
            description: l.intl.formatToPlainString(l.t.zoT1ZG, { bitrate: a.HO[s.Eu4.TIER_1].limits.bitrate / 1000 }),
        },
        [s.oNc.INVITE_SPLASH]: {
            perkIcon: o.Ro.CUSTOMIZATION,
            description: l.intl.string(l.t.Qwlpoq),
        },
        [s.oNc.ANIMATED_ICON]: {
            perkIcon: o.Ro.ANIMATED,
            description: l.intl.string(l.t.PbAyub),
        },
        [s.oNc.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: o.Ro.AUDIO,
            description: l.intl.formatToPlainString(l.t.zoT1ZG, { bitrate: a.HO[s.Eu4.TIER_2].limits.bitrate / 1000 }),
        },
        [s.oNc.ROLE_ICONS]: {
            perkIcon: o.Ro.CUSTOM_ROLE_ICON,
            description: l.intl.string(l.t["6PV6QU"]),
        },
        [s.oNc.MAX_FILE_SIZE_50_MB]: {
            perkIcon: o.Ro.UPLOAD,
            description: l.intl.formatToPlainString(l.t["aFRl5+"], { uploadSizeLimit: l.intl.string(l.t.M6qV8v) }),
        },
        [s.oNc.BANNER]: {
            perkIcon: o.Ro.CUSTOMIZATION,
            description: l.intl.string(l.t["1a5rjo"]),
        },
        [s.oNc.ANIMATED_BANNER]: {
            perkIcon: o.Ro.ANIMATED,
            description: l.intl.string(l.t["1+Vmh4"]),
        },
        [s.oNc.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: o.Ro.AUDIO,
            description: l.intl.formatToPlainString(l.t.zoT1ZG, { bitrate: a.HO[s.Eu4.TIER_3].limits.bitrate / 1000 }),
        },
        [s.oNc.VANITY_URL]: {
            perkIcon: o.Ro.VANITY,
            description: l.intl.string(l.t["5XZKy8"]),
        },
        [s.oNc.MAX_FILE_SIZE_100_MB]: {
            perkIcon: o.Ro.UPLOAD,
            description: l.intl.formatToPlainString(l.t["aFRl5+"], { uploadSizeLimit: l.intl.string(l.t.yMOW8P) }),
        },
    }),
    y = {
        [s.oNc.VANITY_URL]: {
            boostPrice: 5,
            includedInLevel: s.Eu4.TIER_3,
        },
        [s.oNc.GUILD_TAGS]: {
            boostPrice: 3,
            includedInLevel: void 0,
        },
        [s.oNc.ENHANCED_ROLE_COLORS]: {
            boostPrice: 3,
            includedInLevel: void 0,
        },
        [s.oNc.GUILD_TAGS_BADGE_PACK_PETS]: {
            boostPrice: 3,
            includedInLevel: void 0,
        },
        [s.oNc.GUILD_TAGS_BADGE_PACK_FLEX]: {
            boostPrice: 5,
            includedInLevel: void 0,
        },
    },
    O = { [r.A$]: s.Eu4.TIER_3 };
var v = (function (e) {
        return (
            (e.INACTIVE = "inactive"),
            (e.POWERUP_ACTIVATED = "powerup_activated"),
            (e.LEVEL_ACTIVATED = "level_activated"),
            (e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
            e
        );
    })({}),
    I = (function (e) {
        return (
            (e[(e.VANITY_URL = 1)] = "VANITY_URL"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
            e
        );
    })({});
let T = new Set([r.MB, r.Vk]),
    S = {
        1: new Set([r.A$]),
        2: T,
    },
    A = "powerupId";
