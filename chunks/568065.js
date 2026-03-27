"use strict";
n.d(t, {
    At: () => P,
    Fq: () => g,
    G0: () => L,
    HO: () => T,
    On: () => E,
    Pn: () => M,
    Wb: () => _,
    YV: () => v,
    a8: () => h,
    aH: () => O,
    b_: () => C,
    mB: () => p,
    m_: () => b,
    o2: () => f,
    o9: () => d,
    oN: () => A,
    q: () => R,
    r9: () => D,
    sy: () => y,
    w$: () => S,
    wr: () => N,
    y7: () => m,
    yG: () => w,
    ys: () => I,
    z0: () => x,
}),
    n(64700);
var r = n(512750),
    i = n(554146),
    s = n(473145),
    a = n(488803),
    o = n(788868),
    l = n(800007),
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
    A = [[r.SL], [r.aN], [r.FB], [r.OJ, r.jF], [r.Ht, r.tv], [r.zY]],
    I = { [l.W5]: "beta", [r.zY]: "beta" },
    T = new Set([r.SL, r.aN, r.FB, r.OJ, r.jF, r.Ht, r.tv]);
r.aN;
let S = () => ({
        [u.GuildFeatures.VIDEO_QUALITY_1080_60FPS]: { perkIcon: s.TP.STREAM, description: c.intl.string(c.t.y4ft4D) },
        [u.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: o.TG[u.TVA.TIER_1].limits.bitrate / 1e3 }),
        },
        [u.GuildFeatures.INVITE_SPLASH]: { perkIcon: s.TP.CUSTOMIZATION, description: c.intl.string(c.t.Qwlpov) },
        [u.GuildFeatures.ANIMATED_ICON]: { perkIcon: s.TP.ANIMATED, description: c.intl.string(c.t.PbAyub) },
        [u.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: o.TG[u.TVA.TIER_2].limits.bitrate / 1e3 }),
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
            description: c.intl.formatToPlainString(c.t.zoT1ZE, { bitrate: o.TG[u.TVA.TIER_3].limits.bitrate / 1e3 }),
        },
        [u.GuildFeatures.VANITY_URL]: { perkIcon: s.TP.VANITY, description: c.intl.string(c.t["5XZKy/"]) },
        [u.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
            perkIcon: s.TP.UPLOAD,
            description: c.intl.formatToPlainString(c.t.aFRl53, { uploadSizeLimit: c.intl.string(c.t.yMOW8D) }),
        },
    }),
    y = {
        [u.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: u.TVA.TIER_3 },
        [u.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [u.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: { boostPrice: 3 },
        [u.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: { boostPrice: 2 },
    },
    v = { [u.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, a.TS)(e, "GuildPowerupsConstants") } },
    N = { [r.FB]: u.TVA.TIER_3 };
var C = (function (e) {
        return (
            (e.INACTIVE = "inactive"),
            (e.POWERUP_ACTIVATED = "powerup_activated"),
            (e.LEVEL_ACTIVATED = "level_activated"),
            (e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
            e
        );
    })({}),
    R = (function (e) {
        return (
            (e[(e.VANITY_URL = 1)] = "VANITY_URL"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
            (e[(e.GAME_SERVER_HOSTING = 3)] = "GAME_SERVER_HOSTING"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_TWO = 4)] = "GUILD_TAG_BADGE_PACKS_WAVE_TWO"),
            (e[(e.FILE_UPLOAD_250_MB = 5)] = "FILE_UPLOAD_250_MB"),
            e
        );
    })({});
let O = new Set([r.OJ, r.jF]),
    b = new Set([r.Ht, r.tv]),
    D = { 1: new Set([r.FB]), 2: O, 3: new Set(), 4: b, 5: new Set([r.zY]) },
    L = "powerupId";
var w = (function (e) {
        return (e[(e.AVAILABLE = 0)] = "AVAILABLE"), (e[(e.SPENT = 1)] = "SPENT"), (e[(e.TOTAL = 2)] = "TOTAL"), e;
    })({}),
    M = (function (e) {
        return (e[(e.LEVEL = 0)] = "LEVEL"), (e[(e.PERK = 1)] = "PERK"), e;
    })({}),
    P = (function (e) {
        return (e.START = "start"), (e.MIDDLE = "middle"), (e.END = "end"), e;
    })({}),
    x = (function (e) {
        return (e.FULL = "full"), (e.HALF = "half"), (e.NONE = "none"), e;
    })({});
