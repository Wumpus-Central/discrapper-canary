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
    E = n(682901),
    A = n(652215);
n(628049);
var f = n(792996),
    h = (((i = {}).PERK = "perk"), (i.LEVEL = "level"), i);
let I = new Set([c.ec, c.RV, c.YG, c.SL, c.aN, c.OJ, c.jF, c.Ht, c.tv]),
    p = new Set([
        A.GuildFeatures.GUILD_TAGS,
        A.GuildFeatures.ENHANCED_ROLE_COLORS,
        A.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS,
        A.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX,
        A.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT,
        A.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES,
    ]),
    m = { [A.TVA.TIER_1]: c.ec, [A.TVA.TIER_2]: c.RV, [A.TVA.TIER_3]: c.YG, [A.TVA.NONE]: void 0 },
    g = { [c.ec]: A.TVA.TIER_1, [c.RV]: A.TVA.TIER_2, [c.YG]: A.TVA.TIER_3 },
    T = {
        [A.TVA.TIER_1]: u.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        [A.TVA.TIER_2]: u.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        [A.TVA.TIER_3]: u.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        [A.TVA.NONE]: void 0,
    },
    S = [[c.SL], [c.aN], [c.FB], [c.OJ, c.jF], [c.Ht, c.tv], [c.zY], [c.d0]],
    N = { 0: "beta", [c.zY]: "beta", [c.d0]: "beta" },
    C = new Set([c.SL, c.aN, c.FB, c.OJ, c.jF, c.Ht, c.tv, c.d0]);
(c.aN, c.SL);
let O = {
        [A.GuildFeatures.VANITY_URL]: { boostPrice: 5, includedInLevel: A.TVA.TIER_3 },
        [A.GuildFeatures.GUILD_TAGS]: { boostPrice: 3 },
        [A.GuildFeatures.ENHANCED_ROLE_COLORS]: { boostPrice: 3 },
        [A.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: { boostPrice: 3 },
        [A.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: { boostPrice: 5 },
        [A.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: { boostPrice: 3 },
        [A.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: { boostPrice: 2 },
        [A.GuildFeatures.GUILD_THEME]: { boostPrice: 3, isEnabled: () => !1 },
    },
    R = { [A.GuildFeatures.GAME_SERVERS]: { boostPrice: 3, isEnabled: (e) => (0, _.TS)(e, "GuildPowerupsConstants") } },
    L = { [c.FB]: A.TVA.TIER_3 };
var y =
        (((r = {}).INACTIVE = "inactive"),
        (r.POWERUP_ACTIVATED = "powerup_activated"),
        (r.LEVEL_ACTIVATED = "level_activated"),
        (r.TIER_OVERRIDE_ACTIVATED = "tier_override_activated"),
        r),
    D =
        (((a = {})[(a.VANITY_URL = 1)] = "VANITY_URL"),
        (a[(a.GUILD_TAG_BADGE_PACKS_WAVE_ONE = 2)] = "GUILD_TAG_BADGE_PACKS_WAVE_ONE"),
        (a[(a.GAME_SERVER_HOSTING = 3)] = "GAME_SERVER_HOSTING"),
        (a[(a.GUILD_TAG_BADGE_PACKS_WAVE_TWO = 4)] = "GUILD_TAG_BADGE_PACKS_WAVE_TWO"),
        (a[(a.FILE_UPLOAD_250_MB = 5)] = "FILE_UPLOAD_250_MB"),
        (a[(a.GUILD_THEME = 6)] = "GUILD_THEME"),
        (a[(a.GUILD_TAG = 7)] = "GUILD_TAG"),
        a);
let b = new Set([c.OJ, c.jF]),
    v = new Set([c.Ht, c.tv]),
    P = { 1: new Set([c.FB]), 2: b, 3: new Set(), 4: v, 5: new Set([c.zY]), 6: new Set([c.d0]), 7: new Set([c.SL]) };
var M = (((s = {})[(s.AVAILABLE = 0)] = "AVAILABLE"), (s[(s.SPENT = 1)] = "SPENT"), (s[(s.TOTAL = 2)] = "TOTAL"), s),
    U = (((l = {})[(l.LEVEL = 0)] = "LEVEL"), (l[(l.PERK = 1)] = "PERK"), l),
    w = (((o = {}).START = "start"), (o.MIDDLE = "middle"), (o.END = "end"), o),
    G = (((d = {}).FULL = "full"), (d.HALF = "half"), (d.NONE = "none"), d);
n.d(
    t,
    {},
    {
        At: w,
        Fq: "guild_powerup_modal",
        G0: "powerupId",
        HO: C,
        On: T,
        Pn: U,
        Q0: P,
        QS: D,
        Wb: "1340102344645283891",
        YV: R,
        a8: m,
        aH: b,
        b_: y,
        mB: "525479941211684874",
        m_: v,
        o2: I,
        o9: h,
        oN: S,
        sy: O,
        w$: () => ({
            [A.GuildFeatures.VIDEO_QUALITY_1080_60FPS]: {
                perkIcon: E.TP.STREAM,
                description: f.intl.string(f.t.y4ft4D),
            },
            [A.GuildFeatures.AUDIO_BITRATE_128_KBPS]: {
                perkIcon: E.TP.AUDIO,
                description: f.intl.formatToPlainString(f.t.zoT1ZE, {
                    bitrate: E.TG[A.TVA.TIER_1].limits.bitrate / 1e3,
                }),
            },
            [A.GuildFeatures.INVITE_SPLASH]: { perkIcon: E.TP.CUSTOMIZATION, description: f.intl.string(f.t.Qwlpov) },
            [A.GuildFeatures.ANIMATED_ICON]: { perkIcon: E.TP.ANIMATED, description: f.intl.string(f.t.PbAyub) },
            [A.GuildFeatures.AUDIO_BITRATE_256_KBPS]: {
                perkIcon: E.TP.AUDIO,
                description: f.intl.formatToPlainString(f.t.zoT1ZE, {
                    bitrate: E.TG[A.TVA.TIER_2].limits.bitrate / 1e3,
                }),
            },
            [A.GuildFeatures.ROLE_ICONS]: {
                perkIcon: E.TP.CUSTOM_ROLE_ICON,
                description: f.intl.string(f.t["6PV6Qc"]),
            },
            [A.GuildFeatures.MAX_FILE_SIZE_50_MB]: {
                perkIcon: E.TP.UPLOAD,
                description: f.intl.formatToPlainString(f.t.aFRl53, { uploadSizeLimit: f.intl.string(f.t.M6qV8j) }),
            },
            [A.GuildFeatures.BANNER]: { perkIcon: E.TP.CUSTOMIZATION, description: f.intl.string(f.t["1a5rjl"]) },
            [A.GuildFeatures.ANIMATED_BANNER]: { perkIcon: E.TP.ANIMATED, description: f.intl.string(f.t["1+Vmh9"]) },
            [A.GuildFeatures.AUDIO_BITRATE_384_KBPS]: {
                perkIcon: E.TP.AUDIO,
                description: f.intl.formatToPlainString(f.t.zoT1ZE, {
                    bitrate: E.TG[A.TVA.TIER_3].limits.bitrate / 1e3,
                }),
            },
            [A.GuildFeatures.VANITY_URL]: { perkIcon: E.TP.VANITY, description: f.intl.string(f.t["5XZKy/"]) },
            [A.GuildFeatures.MAX_FILE_SIZE_100_MB]: {
                perkIcon: E.TP.UPLOAD,
                description: f.intl.formatToPlainString(f.t.aFRl53, { uploadSizeLimit: f.intl.string(f.t.yMOW8D) }),
            },
        }),
        wc: p,
        wr: L,
        y7: g,
        yG: M,
        ys: N,
        z0: G,
    },
);
