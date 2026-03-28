"use strict";
n.d(t, {
    At: () => k,
    Fq: () => I,
    G0: () => M,
    HO: () => y,
    On: () => A,
    Pn: () => P,
    Wb: () => p,
    YV: () => C,
    a8: () => E,
    aH: () => D,
    b_: () => O,
    mB: () => m,
    m_: () => L,
    o2: () => h,
    o9: () => f,
    oN: () => T,
    q: () => b,
    r9: () => w,
    sy: () => N,
    w$: () => v,
    wr: () => R,
    y7: () => g,
    yG: () => x,
    ys: () => S,
    z0: () => U,
}),
    n(64700);
var r = n(512750),
    i = n(554146),
    s = n(473145),
    a = n(488803),
    o = n(313205),
    l = n(228756),
    u = n(788868),
    c = n(800007),
    d = n(652215),
    _ = n(985018),
    f = (function (e) {
        return (e.PERK = "perk"), (e.LEVEL = "level"), e;
    })({});
let p = "1340102344645283891",
    h = new Set([r.ec, r.RV, r.YG]),
    m = "525479941211684874",
    E = { [d.TVA.TIER_1]: r.ec, [d.TVA.TIER_2]: r.RV, [d.TVA.TIER_3]: r.YG, [d.TVA.NONE]: void 0 },
    g = { [r.ec]: d.TVA.TIER_1, [r.RV]: d.TVA.TIER_2, [r.YG]: d.TVA.TIER_3 },
    A = {
        [d.TVA.TIER_1]: i.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [d.TVA.TIER_2]: i.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [d.TVA.TIER_3]: i.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [d.TVA.NONE]: void 0,
    },
    I = "guild_powerup_modal",
    T = [[r.SL], [r.aN], [r.FB], [r.OJ, r.jF], [r.Ht, r.tv], [r.zY]],
    S = { [c.W5]: "beta", [r.zY]: "beta" },
    y = new Set([r.SL, r.aN, r.FB, r.OJ, r.jF, r.Ht, r.tv]);
r.aN;
let v = () => ({
        [d.GuildFeatures.VIDEO_QUALITY_1080_60FPS]: { perkIcon: s.TP.STREAM, description: _.intl.string(_.t.y4ft4D) },
        [d.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: _.intl.formatToPlainString(_.t.zoT1ZE, { bitrate: u.TG[d.TVA.TIER_1].limits.bitrate / 1e3 }),
        },
        [d.GuildFeatures.INVITE_SPLASH]: { perkIcon: s.TP.CUSTOMIZATION, description: _.intl.string(_.t.Qwlpov) },
        [d.GuildFeatures.ANIMATED_ICON]: { perkIcon: s.TP.ANIMATED, description: _.intl.string(_.t.PbAyub) },
        [d.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: _.intl.formatToPlainString(_.t.zoT1ZE, { bitrate: u.TG[d.TVA.TIER_2].limits.bitrate / 1e3 }),
        },
        [d.GuildFeatures.ROLE_ICONS]: { perkIcon: s.TP.CUSTOM_ROLE_ICON, description: _.intl.string(_.t["6PV6Qc"]) },
        [d.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
            perkIcon: s.TP.UPLOAD,
            description: _.intl.formatToPlainString(_.t.aFRl53, { uploadSizeLimit: _.intl.string(_.t.M6qV8j) }),
        },
        [d.GuildFeatures.BANNER]: { perkIcon: s.TP.CUSTOMIZATION, description: _.intl.string(_.t["1a5rjl"]) },
        [d.GuildFeatures.ANIMATED_BANNER]: { perkIcon: s.TP.ANIMATED, description: _.intl.string(_.t["1+Vmh9"]) },
        [d.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: _.intl.formatToPlainString(_.t.zoT1ZE, { bitrate: u.TG[d.TVA.TIER_3].limits.bitrate / 1e3 }),
        },
        [d.GuildFeatures.VANITY_URL]: { perkIcon: s.TP.VANITY, description: _.intl.string(_.t["5XZKy/"]) },
        [d.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
            perkIcon: s.TP.UPLOAD,
            description: _.intl.formatToPlainString(_.t.aFRl53, { uploadSizeLimit: _.intl.string(_.t.yMOW8D) }),
        },
    }),
    N = {
        [d.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: d.TVA.TIER_3 },
        [d.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [d.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [d.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [d.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
        [d.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: { boostPrice: 3 },
        [d.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: { boostPrice: 2 },
        [d.GuildFeatures.MAX_FILE_SIZE_250_MB]: {
            boostPrice: 4,
            isEnabled: (e) =>
                !l.E.getConfig({ location: "GuildPowerupsConstants" }).enabled &&
                (0, o.J2)(e, "GuildPowerupsConstants"),
        },
    },
    C = { [d.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, a.TS)(e, "GuildPowerupsConstants") } },
    R = { [r.FB]: d.TVA.TIER_3 };
var O = (function (e) {
        return (
            (e.INACTIVE = "inactive"),
            (e.POWERUP_ACTIVATED = "powerup_activated"),
            (e.LEVEL_ACTIVATED = "level_activated"),
            (e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
            e
        );
    })({}),
    b = (function (e) {
        return (
            (e[(e.VANITY_URL = 1)] = "VANITY_URL"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
            (e[(e.GAME_SERVER_HOSTING = 3)] = "GAME_SERVER_HOSTING"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_TWO = 4)] = "GUILD_TAG_BADGE_PACKS_WAVE_TWO"),
            (e[(e.FILE_UPLOAD_250_MB = 5)] = "FILE_UPLOAD_250_MB"),
            e
        );
    })({});
let D = new Set([r.OJ, r.jF]),
    L = new Set([r.Ht, r.tv]),
    w = { 1: new Set([r.FB]), 2: D, 3: new Set(), 4: L, 5: new Set([r.zY]) },
    M = "powerupId";
var x = (function (e) {
        return (e[(e.AVAILABLE = 0)] = "AVAILABLE"), (e[(e.SPENT = 1)] = "SPENT"), (e[(e.TOTAL = 2)] = "TOTAL"), e;
    })({}),
    P = (function (e) {
        return (e[(e.LEVEL = 0)] = "LEVEL"), (e[(e.PERK = 1)] = "PERK"), e;
    })({}),
    k = (function (e) {
        return (e.START = "start"), (e.MIDDLE = "middle"), (e.END = "end"), e;
    })({}),
    U = (function (e) {
        return (e.FULL = "full"), (e.HALF = "half"), (e.NONE = "none"), e;
    })({});
