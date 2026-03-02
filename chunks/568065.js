"use strict";
n.d(t, {
    At: () => x,
    Fq: () => g,
    G0: () => D,
    HO: () => I,
    On: () => E,
    Pn: () => w,
    Wb: () => _,
    YV: () => y,
    a8: () => h,
    aH: () => R,
    b_: () => N,
    mB: () => p,
    m_: () => O,
    o2: () => f,
    o9: () => d,
    oN: () => A,
    q: () => C,
    r9: () => b,
    sy: () => S,
    w$: () => T,
    wr: () => v,
    y7: () => m,
    yG: () => L,
    z0: () => M,
}),
    n(64700);
var r = n(512750),
    i = n(554146),
    s = n(473145),
    a = n(488803),
    o = n(128069),
    l = n(788868),
    u = n(652215),
    c = n(985018),
    d = (function (e) {
        return (e.PERK = "perk"), (e.LEVEL = "level"), e;
    })({});
let _ = "1340102344645283891",
    f = new Set([r.ec, r.RV, r.YG]),
    p = "525479941211684874",
    h = { [u.TVA.TIER_1]: r.ec, [u.TVA.TIER_2]: r.RV, [u.TVA.TIER_3]: r.YG, [u.TVA.NONE]: void 0 },
    m = { [r.ec]: u.TVA.TIER_1, [r.RV]: u.TVA.TIER_2, [r.YG]: u.TVA.TIER_3 },
    E = {
        [u.TVA.TIER_1]: i.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [u.TVA.TIER_2]: i.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [u.TVA.TIER_3]: i.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [u.TVA.NONE]: void 0,
    },
    g = "guild_powerup_modal",
    A = [[r.SL], [r.aN], [r.FB], [r.OJ, r.jF], [r.Ht, r.tv]],
    I = new Set([r.SL, r.aN, r.FB, r.OJ, r.jF, r.Ht, r.tv]);
r.aN;
let T = () => ({
        [u.GuildFeatures.VIDEO_QUALITY_1080_60FPS]: { perkIcon: s.TP.STREAM, description: c.intl.string(c.t.y4ft4D) },
        [u.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: l.TG[u.TVA.TIER_1].limits.bitrate / 1e3 }),
        },
        [u.GuildFeatures.INVITE_SPLASH]: { perkIcon: s.TP.CUSTOMIZATION, description: c.intl.string(c.t.Qwlpov) },
        [u.GuildFeatures.ANIMATED_ICON]: { perkIcon: s.TP.ANIMATED, description: c.intl.string(c.t.PbAyub) },
        [u.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: l.TG[u.TVA.TIER_2].limits.bitrate / 1e3 }),
        },
        [u.GuildFeatures.ROLE_ICONS]: { perkIcon: s.TP.CUSTOM_ROLE_ICON, description: c.intl.string(c.t["6PV6Qc"]) },
        [u.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
            perkIcon: s.TP.UPLOAD,
            description: c.intl.formatToPlainString(c.t.aFRl53, { uploadSizeLimit: c.intl.string(c.t.M6qV8j) }),
        },
        [u.GuildFeatures.BANNER]: { perkIcon: s.TP.CUSTOMIZATION, description: c.intl.string(c.t["1a5rjl"]) },
        [u.GuildFeatures.ANIMATED_BANNER]: { perkIcon: s.TP.ANIMATED, description: c.intl.string(c.t["1+Vmh9"]) },
        [u.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: l.TG[u.TVA.TIER_3].limits.bitrate / 1e3 }),
        },
        [u.GuildFeatures.VANITY_URL]: { perkIcon: s.TP.VANITY, description: c.intl.string(c.t["5XZKy/"]) },
        [u.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
            perkIcon: s.TP.UPLOAD,
            description: c.intl.formatToPlainString(c.t.aFRl53, { uploadSizeLimit: c.intl.string(c.t.yMOW8D) }),
        },
    }),
    S = {
        [u.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: u.TVA.TIER_3 },
        [u.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [u.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: {
            boostPrice: 3,
            isEnabled: (e) => (0, o.Kp)(e, "GuildPowerupsConstants"),
        },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: {
            boostPrice: 2,
            isEnabled: (e) => (0, o.Kp)(e, "GuildPowerupsConstants"),
        },
    },
    y = { [u.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, a.TS)(e, "GuildPowerupsConstants") } },
    v = { [r.FB]: u.TVA.TIER_3 };
var N = (function (e) {
        return (
            (e.INACTIVE = "inactive"),
            (e.POWERUP_ACTIVATED = "powerup_activated"),
            (e.LEVEL_ACTIVATED = "level_activated"),
            (e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
            e
        );
    })({}),
    C = (function (e) {
        return (
            (e[(e.VANITY_URL = 1)] = "VANITY_URL"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
            (e[(e.GAME_SERVER_HOSTING = 3)] = "GAME_SERVER_HOSTING"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_TWO = 4)] = "GUILD_TAG_BADGE_PACKS_WAVE_TWO"),
            e
        );
    })({});
let R = new Set([r.OJ, r.jF]),
    O = new Set([r.Ht, r.tv]),
    b = { 1: new Set([r.FB]), 2: R, 3: new Set(), 4: O },
    D = "powerupId";
var L = (function (e) {
        return (e[(e.AVAILABLE = 0)] = "AVAILABLE"), (e[(e.SPENT = 1)] = "SPENT"), (e[(e.TOTAL = 2)] = "TOTAL"), e;
    })({}),
    w = (function (e) {
        return (e[(e.LEVEL = 0)] = "LEVEL"), (e[(e.PERK = 1)] = "PERK"), e;
    })({}),
    x = (function (e) {
        return (e.START = "start"), (e.MIDDLE = "middle"), (e.END = "end"), e;
    })({}),
    M = (function (e) {
        return (e.FULL = "full"), (e.HALF = "half"), (e.NONE = "none"), e;
    })({});
