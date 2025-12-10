n.d(t, {
    A3: () => I,
    Cp: () => _,
    Du: () => T,
    Fq: () => p,
    H2: () => g,
    Hk: () => O,
    NL: () => C,
    NO: () => d,
    P2: () => R,
    Q1: () => h,
    Rx: () => S,
    T1: () => m,
    Tg: () => E,
    Us: () => u,
    ad: () => f,
    am: () => N,
    br: () => P,
    cG: () => v,
    d5: () => y,
    os: () => A,
    uc: () => b,
}),
    n(388685);
var r = n(494497),
    i = n(704215),
    a = n(267642),
    o = n(755458),
    s = n(474936),
    l = n(981631),
    c = n(388032),
    u = (function (e) {
        return (e.PERK = "perk"), (e.LEVEL = "level"), e;
    })({});
let d = "1340102344645283891",
    f = new Set([r.h_, r.NJ, r.XW]),
    p = "525479941211684874",
    _ = {
        [l.Eu4.TIER_1]: r.h_,
        [l.Eu4.TIER_2]: r.NJ,
        [l.Eu4.TIER_3]: r.XW,
        [l.Eu4.NONE]: void 0,
    },
    m = {
        [r.h_]: l.Eu4.TIER_1,
        [r.NJ]: l.Eu4.TIER_2,
        [r.XW]: l.Eu4.TIER_3,
    },
    h = {
        [l.Eu4.TIER_1]: i.C.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [l.Eu4.TIER_2]: i.C.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [l.Eu4.TIER_3]: i.C.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [l.Eu4.NONE]: void 0,
    },
    g = "guild_powerup_modal",
    E = [[r.IN], [r.If], [r.A$], [r.MB, r.Vk]],
    b = new Set([r.IN, r.If, r.A$, r.MB, r.Vk]),
    y = () => ({
        [l.GuildFeatures.VIDEO_BITRATE_ENHANCED]: {
            perkIcon: a.Ro.STREAM,
            description: c.intl.string(c.t.y4ft4D),
        },
        [l.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: a.Ro.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: s.HO[l.Eu4.TIER_1].limits.bitrate / 1000 }),
        },
        [l.GuildFeatures.INVITE_SPLASH]: {
            perkIcon: a.Ro.CUSTOMIZATION,
            description: c.intl.string(c.t.Qwlpov),
        },
        [l.GuildFeatures.ANIMATED_ICON]: {
            perkIcon: a.Ro.ANIMATED,
            description: c.intl.string(c.t.PbAyub),
        },
        [l.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: a.Ro.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: s.HO[l.Eu4.TIER_2].limits.bitrate / 1000 }),
        },
        [l.GuildFeatures.ROLE_ICONS]: {
            perkIcon: a.Ro.CUSTOM_ROLE_ICON,
            description: c.intl.string(c.t["6PV6Qc"]),
        },
        [l.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
            perkIcon: a.Ro.UPLOAD,
            description: c.intl.formatToPlainString(c.t.aFRl53, { uploadSizeLimit: c.intl.string(c.t.M6qV8j) }),
        },
        [l.GuildFeatures.BANNER]: {
            perkIcon: a.Ro.CUSTOMIZATION,
            description: c.intl.string(c.t["1a5rjl"]),
        },
        [l.GuildFeatures.ANIMATED_BANNER]: {
            perkIcon: a.Ro.ANIMATED,
            description: c.intl.string(c.t["1+Vmh9"]),
        },
        [l.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: a.Ro.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: s.HO[l.Eu4.TIER_3].limits.bitrate / 1000 }),
        },
        [l.GuildFeatures.VANITY_URL]: {
            perkIcon: a.Ro.VANITY,
            description: c.intl.string(c.t["5XZKy/"]),
        },
        [l.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
            perkIcon: a.Ro.UPLOAD,
            description: c.intl.formatToPlainString(c.t.aFRl53, { uploadSizeLimit: c.intl.string(c.t.yMOW8D) }),
        },
    }),
    O = {
        [l.GuildFeatures.VANITY_URL]: {
            boostPrice: 5,
            includedInLevel: l.Eu4.TIER_3,
        },
        [l.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [l.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [l.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [l.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
    },
    v = {
        [l.GuildFeatures.GAME_SERVERS]: {
            boostPrice: 3,
            isEnabled: (e) => (0, o.v$)(e, "GuildPowerupsConstants"),
        },
    },
    S = { [r.A$]: l.Eu4.TIER_3 };
var I = (function (e) {
        return (
            (e.INACTIVE = "inactive"),
            (e.POWERUP_ACTIVATED = "powerup_activated"),
            (e.LEVEL_ACTIVATED = "level_activated"),
            (e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
            e
        );
    })({}),
    T = (function (e) {
        return (
            (e[(e.VANITY_URL = 1)] = "VANITY_URL"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
            (e[(e.GAME_SERVER_HOSTING = 3)] = "GAME_SERVER_HOSTING"),
            e
        );
    })({});
let C = new Set([r.MB, r.Vk]),
    A = {
        1: new Set([r.A$]),
        2: C,
        3: new Set(),
    },
    N = "powerupId";
var P = (function (e) {
        return (e[(e.AVAILABLE = 0)] = "AVAILABLE"), (e[(e.SPENT = 1)] = "SPENT"), (e[(e.TOTAL = 2)] = "TOTAL"), e;
    })({}),
    R = (function (e) {
        return (e[(e.NONE = 0)] = "NONE"), (e[(e.LEVEL = 1)] = "LEVEL"), (e[(e.PERK = 2)] = "PERK"), e;
    })({});
