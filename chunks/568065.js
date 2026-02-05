"use strict";
n.d(t, {
    At: () => L,
    Fq: () => g,
    G0: () => R,
    HO: () => A,
    On: () => m,
    Pn: () => D,
    Wb: () => d,
    YV: () => y,
    a8: () => p,
    aH: () => b,
    b_: () => v,
    mB: () => f,
    o2: () => _,
    o9: () => c,
    oN: () => E,
    q: () => C,
    r9: () => N,
    sy: () => T,
    w$: () => I,
    wr: () => S,
    y7: () => h,
    yG: () => O,
    z0: () => w,
}),
    n(64700);
var r = n(512750),
    i = n(554146),
    a = n(473145),
    s = n(488803),
    o = n(788868),
    l = n(652215),
    u = n(985018),
    c = (function (e) {
        return (e.PERK = "perk"), (e.LEVEL = "level"), e;
    })({});
let d = "1340102344645283891",
    _ = new Set([r.ec, r.RV, r.YG]),
    f = "525479941211684874",
    p = { [l.TVA.TIER_1]: r.ec, [l.TVA.TIER_2]: r.RV, [l.TVA.TIER_3]: r.YG, [l.TVA.NONE]: void 0 },
    h = { [r.ec]: l.TVA.TIER_1, [r.RV]: l.TVA.TIER_2, [r.YG]: l.TVA.TIER_3 },
    m = {
        [l.TVA.TIER_1]: i.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [l.TVA.TIER_2]: i.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [l.TVA.TIER_3]: i.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [l.TVA.NONE]: void 0,
    },
    g = "guild_powerup_modal",
    E = [[r.SL], [r.aN], [r.FB], [r.OJ, r.jF]],
    A = new Set([r.SL, r.aN, r.FB, r.OJ, r.jF]);
r.aN;
let I = () => ({
        [l.GuildFeatures.VIDEO_BITRATE_ENHANCED]: { perkIcon: a.TP.STREAM, description: u.intl.string(u.t.y4ft4D) },
        [l.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
            perkIcon: a.TP.AUDIO,
            description: u.intl.formatToPlainString(u.t.zoT1ZE, { bitrate: o.TG[l.TVA.TIER_1].limits.bitrate / 1e3 }),
        },
        [l.GuildFeatures.INVITE_SPLASH]: { perkIcon: a.TP.CUSTOMIZATION, description: u.intl.string(u.t.Qwlpov) },
        [l.GuildFeatures.ANIMATED_ICON]: { perkIcon: a.TP.ANIMATED, description: u.intl.string(u.t.PbAyub) },
        [l.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
            perkIcon: a.TP.AUDIO,
            description: u.intl.formatToPlainString(u.t.zoT1ZE, { bitrate: o.TG[l.TVA.TIER_2].limits.bitrate / 1e3 }),
        },
        [l.GuildFeatures.ROLE_ICONS]: { perkIcon: a.TP.CUSTOM_ROLE_ICON, description: u.intl.string(u.t["6PV6Qc"]) },
        [l.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
            perkIcon: a.TP.UPLOAD,
            description: u.intl.formatToPlainString(u.t.aFRl53, { uploadSizeLimit: u.intl.string(u.t.M6qV8j) }),
        },
        [l.GuildFeatures.BANNER]: { perkIcon: a.TP.CUSTOMIZATION, description: u.intl.string(u.t["1a5rjl"]) },
        [l.GuildFeatures.ANIMATED_BANNER]: { perkIcon: a.TP.ANIMATED, description: u.intl.string(u.t["1+Vmh9"]) },
        [l.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
            perkIcon: a.TP.AUDIO,
            description: u.intl.formatToPlainString(u.t.zoT1ZE, { bitrate: o.TG[l.TVA.TIER_3].limits.bitrate / 1e3 }),
        },
        [l.GuildFeatures.VANITY_URL]: { perkIcon: a.TP.VANITY, description: u.intl.string(u.t["5XZKy/"]) },
        [l.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
            perkIcon: a.TP.UPLOAD,
            description: u.intl.formatToPlainString(u.t.aFRl53, { uploadSizeLimit: u.intl.string(u.t.yMOW8D) }),
        },
    }),
    T = {
        [l.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: l.TVA.TIER_3 },
        [l.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [l.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [l.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [l.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
    },
    y = { [l.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, s.TS)(e, "GuildPowerupsConstants") } },
    S = { [r.FB]: l.TVA.TIER_3 };
var v = (function (e) {
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
            e
        );
    })({});
let b = new Set([r.OJ, r.jF]),
    N = { 1: new Set([r.FB]), 2: b, 3: new Set() },
    R = "powerupId";
var O = (function (e) {
        return (e[(e.AVAILABLE = 0)] = "AVAILABLE"), (e[(e.SPENT = 1)] = "SPENT"), (e[(e.TOTAL = 2)] = "TOTAL"), e;
    })({}),
    D = (function (e) {
        return (e[(e.LEVEL = 0)] = "LEVEL"), (e[(e.PERK = 1)] = "PERK"), e;
    })({}),
    L = (function (e) {
        return (e.START = "start"), (e.MIDDLE = "middle"), (e.END = "end"), e;
    })({}),
    w = (function (e) {
        return (e.FULL = "full"), (e.HALF = "half"), (e.NONE = "none"), e;
    })({});
