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
    h = n(682901),
    f = n(652215);
n(628049);
var I = n(792996),
    p = (((i = {}).PERK = "perk"), (i.LEVEL = "level"), i);
let m = new Set([c.ec, c.RV, c.YG, c.SL, c.aN, c.OJ, c.jF, c.Ht, c.tv]),
    T = new Set([
        f.GuildFeatures.GUILD_TAGS,
        f.GuildFeatures.ENHANCED_ROLE_COLORS,
        f.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS,
        f.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX,
        f.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT,
        f.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES,
    ]),
    g = { [f.TVA.TIER_1]: c.ec, [f.TVA.TIER_2]: c.RV, [f.TVA.TIER_3]: c.YG, [f.TVA.NONE]: void 0 },
    S = { [c.ec]: f.TVA.TIER_1, [c.RV]: f.TVA.TIER_2, [c.YG]: f.TVA.TIER_3 },
    N = {
        [f.TVA.TIER_1]: u.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [f.TVA.TIER_2]: u.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [f.TVA.TIER_3]: u.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [f.TVA.NONE]: void 0,
    },
    C = [[c.SL], [c.aN], [c.FB], [c.OJ, c.jF], [c.Ht, c.tv], [c.zY], [c.d0]],
    O = { 0: "beta", [c.zY]: "beta", [c.d0]: "beta" },
    R = new Set([c.SL, c.aN, c.FB, c.OJ, c.jF, c.Ht, c.tv, c.d0]);
(c.aN, c.SL);
let L = {
        [f.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: f.TVA.TIER_3 },
        [f.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [f.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [f.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [f.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
        [f.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: { boostPrice: 3 },
        [f.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: { boostPrice: 2 },
        [f.GuildFeatures.GUILD_THEME]: {
            boostPrice: 3,
            isEnabled: (e) => (0, A.ht)("GuildPowerupsConstants") && (0, E.Qs)(e, "GuildPowerupsConstants"),
        },
    },
    y = { [f.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, _.TS)(e, "GuildPowerupsConstants") } },
    D = { [c.FB]: f.TVA.TIER_3 };
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
        a8: g,
        aH: P,
        b_: b,
        mB: "525479941211684874",
        m_: M,
        o2: m,
        o9: p,
        oN: C,
        sy: L,
        w$: () => ({
            [f.GuildFeatures.VIDEO_QUALITY_1080_60FPS]: {
                perkIcon: h.TP.STREAM,
                description: I.intl.string(I.t.y4ft4D),
            },
            [f.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
                perkIcon: h.TP.AUDIO,
                description: I.intl.formatToPlainString(I.t.zoT1ZE, {
                    bitrate: h.TG[f.TVA.TIER_1].limits.bitrate / 1e3,
                }),
            },
            [f.GuildFeatures.INVITE_SPLASH]: { perkIcon: h.TP.CUSTOMIZATION, description: I.intl.string(I.t.Qwlpov) },
            [f.GuildFeatures.ANIMATED_ICON]: { perkIcon: h.TP.ANIMATED, description: I.intl.string(I.t.PbAyub) },
            [f.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
                perkIcon: h.TP.AUDIO,
                description: I.intl.formatToPlainString(I.t.zoT1ZE, {
                    bitrate: h.TG[f.TVA.TIER_2].limits.bitrate / 1e3,
                }),
            },
            [f.GuildFeatures.ROLE_ICONS]: {
                perkIcon: h.TP.CUSTOM_ROLE_ICON,
                description: I.intl.string(I.t["6PV6Qc"]),
            },
            [f.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
                perkIcon: h.TP.UPLOAD,
                description: I.intl.formatToPlainString(I.t.aFRl53, { uploadSizeLimit: I.intl.string(I.t.M6qV8j) }),
            },
            [f.GuildFeatures.BANNER]: { perkIcon: h.TP.CUSTOMIZATION, description: I.intl.string(I.t["1a5rjl"]) },
            [f.GuildFeatures.ANIMATED_BANNER]: { perkIcon: h.TP.ANIMATED, description: I.intl.string(I.t["1+Vmh9"]) },
            [f.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
                perkIcon: h.TP.AUDIO,
                description: I.intl.formatToPlainString(I.t.zoT1ZE, {
                    bitrate: h.TG[f.TVA.TIER_3].limits.bitrate / 1e3,
                }),
            },
            [f.GuildFeatures.VANITY_URL]: { perkIcon: h.TP.VANITY, description: I.intl.string(I.t["5XZKy/"]) },
            [f.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
                perkIcon: h.TP.UPLOAD,
                description: I.intl.formatToPlainString(I.t.aFRl53, { uploadSizeLimit: I.intl.string(I.t.yMOW8D) }),
            },
        }),
        wc: T,
        wr: D,
        y7: S,
        yG: w,
        ys: O,
        z0: k,
    },
);
