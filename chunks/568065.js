n(582128);
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(512750),
    u = n(554146),
    _ = n(831617),
    E = n(383272),
    A = n(414133),
    f = n(682901),
    h = n(652215);
n(628049);
var I = n(792996),
    p = (((i = {}).PERK = "perk"), (i.LEVEL = "level"), i);
let m = new Set([c.ec, c.RV, c.YG, c.SL, c.aN, c.OJ, c.jF, c.Ht, c.tv]),
    g = new Set([
        h.GuildFeatures.GUILD_TAGS,
        h.GuildFeatures.ENHANCED_ROLE_COLORS,
        h.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS,
        h.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX,
        h.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT,
        h.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES,
    ]),
    T = { [h.TVA.TIER_1]: c.ec, [h.TVA.TIER_2]: c.RV, [h.TVA.TIER_3]: c.YG, [h.TVA.NONE]: void 0 },
    S = { [c.ec]: h.TVA.TIER_1, [c.RV]: h.TVA.TIER_2, [c.YG]: h.TVA.TIER_3 },
    N = {
        [h.TVA.TIER_1]: u.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [h.TVA.TIER_2]: u.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [h.TVA.TIER_3]: u.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [h.TVA.NONE]: void 0,
    },
    C = [[c.SL], [c.aN], [c.FB], [c.OJ, c.jF], [c.Ht, c.tv], [c.zY], [c.d0]],
    O = { 0: "beta", [c.zY]: "beta", [c.d0]: "beta" },
    R = new Set([c.SL, c.aN, c.FB, c.OJ, c.jF, c.Ht, c.tv, c.d0]);
(c.aN, c.SL);
let L = {
        [h.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: h.TVA.TIER_3 },
        [h.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [h.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [h.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [h.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
        [h.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: { boostPrice: 3 },
        [h.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: { boostPrice: 2 },
        [h.GuildFeatures.GUILD_THEME]: {
            boostPrice: 3,
            isEnabled: (e) => (0, A.ht)("GuildPowerupsConstants") && (0, E.Qs)(e, "GuildPowerupsConstants"),
        },
    },
    y = { [h.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, _.TS)(e, "GuildPowerupsConstants") } },
    D = { [c.FB]: h.TVA.TIER_3 };
var b =
        (((r = {}).INACTIVE = "inactive"),
        (r.POWERUP_ACTIVATED = "powerup_activated"),
        (r.LEVEL_ACTIVATED = "level_activated"),
        (r.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
        r),
    v =
        (((a = {})[(a.VANITY_URL = 1)] = "VANITY_URL"),
        (a[(a.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
        (a[(a.GAME_SERVER_HOSTING = 3)] = "GAME_SERVER_HOSTING"),
        (a[(a.GUILD_TAG_BADGE_PACKS_WAVE_TWO = 4)] = "GUILD_TAG_BADGE_PACKS_WAVE_TWO"),
        (a[(a.FILE_UPLOAD_250_MB = 5)] = "FILE_UPLOAD_250_MB"),
        (a[(a.GUILD_THEME = 6)] = "GUILD_THEME"),
        (a[(a.GUILD_TAG = 7)] = "GUILD_TAG"),
        a);
let P = new Set([c.OJ, c.jF]),
    M = new Set([c.Ht, c.tv]),
    U = { 1: new Set([c.FB]), 2: P, 3: new Set(), 4: M, 5: new Set([c.zY]), 6: new Set([c.d0]), 7: new Set([c.SL]) };
var w = (((s = {})[(s.AVAILABLE = 0)] = "AVAILABLE"), (s[(s.SPENT = 1)] = "SPENT"), (s[(s.TOTAL = 2)] = "TOTAL"), s),
    G = (((l = {})[(l.LEVEL = 0)] = "LEVEL"), (l[(l.PERK = 1)] = "PERK"), l),
    x = (((o = {}).START = "start"), (o.MIDDLE = "middle"), (o.END = "end"), o),
    k = (((d = {}).FULL = "full"), (d.HALF = "half"), (d.NONE = "none"), d);
n.d(
    t,
    {},
    {
        At: x,
        Fq: "guild_powerup_modal",
        G0: "powerupId",
        HO: R,
        On: N,
        Pn: G,
        Q0: U,
        QS: v,
        Wb: "1340102344645283891",
        YV: y,
        a8: T,
        aH: P,
        b_: b,
        mB: "525479941211684874",
        m_: M,
        o2: m,
        o9: p,
        oN: C,
        sy: L,
        w$: () => ({
            [h.GuildFeatures.VIDEO_QUALITY_1080_60FPS]: {
                perkIcon: f.TP.STREAM,
                description: I.intl.string(I.t.y4ft4D),
            },
            [h.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
                perkIcon: f.TP.AUDIO,
                description: I.intl.formatToPlainString(I.t.zoT1ZE, {
                    bitrate: f.TG[h.TVA.TIER_1].limits.bitrate / 1e3,
                }),
            },
            [h.GuildFeatures.INVITE_SPLASH]: { perkIcon: f.TP.CUSTOMIZATION, description: I.intl.string(I.t.Qwlpov) },
            [h.GuildFeatures.ANIMATED_ICON]: { perkIcon: f.TP.ANIMATED, description: I.intl.string(I.t.PbAyub) },
            [h.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
                perkIcon: f.TP.AUDIO,
                description: I.intl.formatToPlainString(I.t.zoT1ZE, {
                    bitrate: f.TG[h.TVA.TIER_2].limits.bitrate / 1e3,
                }),
            },
            [h.GuildFeatures.ROLE_ICONS]: {
                perkIcon: f.TP.CUSTOM_ROLE_ICON,
                description: I.intl.string(I.t["6PV6Qc"]),
            },
            [h.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
                perkIcon: f.TP.UPLOAD,
                description: I.intl.formatToPlainString(I.t.aFRl53, { uploadSizeLimit: I.intl.string(I.t.M6qV8j) }),
            },
            [h.GuildFeatures.BANNER]: { perkIcon: f.TP.CUSTOMIZATION, description: I.intl.string(I.t["1a5rjl"]) },
            [h.GuildFeatures.ANIMATED_BANNER]: { perkIcon: f.TP.ANIMATED, description: I.intl.string(I.t["1+Vmh9"]) },
            [h.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
                perkIcon: f.TP.AUDIO,
                description: I.intl.formatToPlainString(I.t.zoT1ZE, {
                    bitrate: f.TG[h.TVA.TIER_3].limits.bitrate / 1e3,
                }),
            },
            [h.GuildFeatures.VANITY_URL]: { perkIcon: f.TP.VANITY, description: I.intl.string(I.t["5XZKy/"]) },
            [h.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
                perkIcon: f.TP.UPLOAD,
                description: I.intl.formatToPlainString(I.t.aFRl53, { uploadSizeLimit: I.intl.string(I.t.yMOW8D) }),
            },
        }),
        wc: g,
        wr: D,
        y7: S,
        yG: w,
        ys: O,
        z0: k,
    },
);
