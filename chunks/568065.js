"use strict";
n.d(t, {
    At: () => U,
    Fq: () => T,
    G0: () => P,
    HO: () => v,
    On: () => I,
    Pn: () => k,
    Wb: () => h,
    YV: () => R,
    a8: () => g,
    aH: () => L,
    b_: () => b,
    mB: () => E,
    m_: () => w,
    o2: () => m,
    o9: () => p,
    oN: () => S,
    q: () => D,
    r9: () => M,
    sy: () => C,
    w$: () => N,
    wr: () => O,
    y7: () => A,
    yG: () => x,
    ys: () => y,
    z0: () => G,
}),
    n(64700);
var r = n(512750),
    i = n(554146),
    s = n(473145),
    a = n(488803),
    o = n(313205),
    l = n(228756),
    u = n(383272),
    c = n(788868),
    d = n(800007),
    _ = n(652215),
    f = n(985018),
    p = (function (e) {
        return (e.PERK = "perk"), (e.LEVEL = "level"), e;
    })({});
let h = "1340102344645283891",
    m = new Set([r.ec, r.RV, r.YG]),
    E = "525479941211684874",
    g = { [_.TVA.TIER_1]: r.ec, [_.TVA.TIER_2]: r.RV, [_.TVA.TIER_3]: r.YG, [_.TVA.NONE]: void 0 },
    A = { [r.ec]: _.TVA.TIER_1, [r.RV]: _.TVA.TIER_2, [r.YG]: _.TVA.TIER_3 },
    I = {
        [_.TVA.TIER_1]: i.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [_.TVA.TIER_2]: i.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [_.TVA.TIER_3]: i.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [_.TVA.NONE]: void 0,
    },
    T = "guild_powerup_modal",
    S = [[r.SL], [r.aN], [r.FB], [r.OJ, r.jF], [r.Ht, r.tv], [r.zY]],
    y = { [d.W5]: "beta", [r.zY]: "beta" },
    v = new Set([r.SL, r.aN, r.FB, r.OJ, r.jF, r.Ht, r.tv]);
r.aN;
let N = () => ({
        [_.GuildFeatures.VIDEO_QUALITY_1080_60FPS]: { perkIcon: s.TP.STREAM, description: f.intl.string(f.t.y4ft4D) },
        [_.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: f.intl.formatToPlainString(f.t.zoT1ZE, { bitrate: c.TG[_.TVA.TIER_1].limits.bitrate / 1e3 }),
        },
        [_.GuildFeatures.INVITE_SPLASH]: { perkIcon: s.TP.CUSTOMIZATION, description: f.intl.string(f.t.Qwlpov) },
        [_.GuildFeatures.ANIMATED_ICON]: { perkIcon: s.TP.ANIMATED, description: f.intl.string(f.t.PbAyub) },
        [_.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: f.intl.formatToPlainString(f.t.zoT1ZE, { bitrate: c.TG[_.TVA.TIER_2].limits.bitrate / 1e3 }),
        },
        [_.GuildFeatures.ROLE_ICONS]: { perkIcon: s.TP.CUSTOM_ROLE_ICON, description: f.intl.string(f.t["6PV6Qc"]) },
        [_.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
            perkIcon: s.TP.UPLOAD,
            description: f.intl.formatToPlainString(f.t.aFRl53, { uploadSizeLimit: f.intl.string(f.t.M6qV8j) }),
        },
        [_.GuildFeatures.BANNER]: { perkIcon: s.TP.CUSTOMIZATION, description: f.intl.string(f.t["1a5rjl"]) },
        [_.GuildFeatures.ANIMATED_BANNER]: { perkIcon: s.TP.ANIMATED, description: f.intl.string(f.t["1+Vmh9"]) },
        [_.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: s.TP.AUDIO,
            description: f.intl.formatToPlainString(f.t.zoT1ZE, { bitrate: c.TG[_.TVA.TIER_3].limits.bitrate / 1e3 }),
        },
        [_.GuildFeatures.VANITY_URL]: { perkIcon: s.TP.VANITY, description: f.intl.string(f.t["5XZKy/"]) },
        [_.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
            perkIcon: s.TP.UPLOAD,
            description: f.intl.formatToPlainString(f.t.aFRl53, { uploadSizeLimit: f.intl.string(f.t.yMOW8D) }),
        },
    }),
    C = {
        [_.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: _.TVA.TIER_3 },
        [_.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [_.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [_.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [_.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
        [_.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: { boostPrice: 3 },
        [_.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: { boostPrice: 2 },
        [_.GuildFeatures.MAX_FILE_SIZE_250_MB]: {
            boostPrice: 4,
            isEnabled: (e) =>
                !l.E.getConfig({ location: "GuildPowerupsConstants" }).enabled &&
                (0, o.J2)(e, "GuildPowerupsConstants"),
        },
        [_.GuildFeatures.GUILD_THEME]: { boostPrice: 3, isEnabled: (e) => (0, u.Qs)(e, "GuildPowerupsConstants") },
    },
    R = { [_.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, a.TS)(e, "GuildPowerupsConstants") } },
    O = { [r.FB]: _.TVA.TIER_3 };
var b = (function (e) {
        return (
            (e.INACTIVE = "inactive"),
            (e.POWERUP_ACTIVATED = "powerup_activated"),
            (e.LEVEL_ACTIVATED = "level_activated"),
            (e.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
            e
        );
    })({}),
    D = (function (e) {
        return (
            (e[(e.VANITY_URL = 1)] = "VANITY_URL"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
            (e[(e.GAME_SERVER_HOSTING = 3)] = "GAME_SERVER_HOSTING"),
            (e[(e.GUILD_TAG_BADGE_PACKS_WAVE_TWO = 4)] = "GUILD_TAG_BADGE_PACKS_WAVE_TWO"),
            (e[(e.FILE_UPLOAD_250_MB = 5)] = "FILE_UPLOAD_250_MB"),
            e
        );
    })({});
let L = new Set([r.OJ, r.jF]),
    w = new Set([r.Ht, r.tv]),
    M = { 1: new Set([r.FB]), 2: L, 3: new Set(), 4: w, 5: new Set([r.zY]) },
    P = "powerupId";
var x = (function (e) {
        return (e[(e.AVAILABLE = 0)] = "AVAILABLE"), (e[(e.SPENT = 1)] = "SPENT"), (e[(e.TOTAL = 2)] = "TOTAL"), e;
    })({}),
    k = (function (e) {
        return (e[(e.LEVEL = 0)] = "LEVEL"), (e[(e.PERK = 1)] = "PERK"), e;
    })({}),
    U = (function (e) {
        return (e.START = "start"), (e.MIDDLE = "middle"), (e.END = "end"), e;
    })({}),
    G = (function (e) {
        return (e.FULL = "full"), (e.HALF = "half"), (e.NONE = "none"), e;
    })({});
