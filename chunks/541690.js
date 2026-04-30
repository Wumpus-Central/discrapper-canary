"use strict";
n.d(t, {
    OW: () => y,
    nh: () => C,
    G3: () => b,
    JK: () => A,
    sj: () => x,
    u6: () => Y,
    II: () => P,
    DG: () => j,
    lx: () => v,
    nI: () => O,
    cS: () => R,
    He: () => T,
    ii: () => S,
    Qz: () => H,
    aE: () => M,
    _V: () => w,
    Zc: () => V,
    GS: () => I,
    G5: () => W,
    gQ: () => g,
    T7: () => D,
    Pm: () => B,
    RM: () => Z,
    _w: () => G,
    zL: () => L,
    x: () => F,
});
var i,
    r,
    s =
        (((i = {}).ANIMATED_EMOJIS = "animatedEmojis"),
        (i.EMOJIS_EVERYWHERE = "emojisEverywhere"),
        (i.STICKERS_EVERYWHERE = "stickersEverywhere"),
        (i.SOUNDBOARD_EVERYWHERE = "soundboardEverywhere"),
        (i.ANIMATED_AVATAR = "animatedAvatar"),
        (i.CUSTOM_DISCRIMINATOR = "customDiscriminator"),
        (i.PREMIUM_GUILD_MEMBER_PROFILE = "premiumGuildMemberProfile"),
        (i.PROFILE_PREMIUM_FEATURES = "profilePremiumFeatures"),
        (i.STREAM_MID_QUALITY = "streamMidQuality"),
        (i.STREAM_HIGH_QUALITY = "streamHighQuality"),
        (i.VIDEO_FILTER_ASSETS = "videoFilterAssets"),
        (i.INCREASED_FILE_UPLOAD_SIZE = "increasedFileUploadSize"),
        (i.INCREASED_GUILD_LIMIT = "increasedGuildLimit"),
        (i.INCREASED_MESSAGE_LENGTH = "increasedMessageLength"),
        (i.NITRO_REACTION_TOGGLE = "nitroReactionToggle"),
        (i.CLIENT_THEMES = "clientThemes"),
        (i.PREMIUM_COLLECTIBLES = "premiumCollectibles"),
        (i.CUSTOM_CALL_SOUNDS = "customCallSounds"),
        (i.CUSTOM_NOTIFICATION_SOUNDS = "customNotificationSounds"),
        (i.SAVED_MESSAGES = "savedMessages"),
        (i.PREMIUM_VOICE_FILTERS = "premiumVoiceFilters"),
        (i.APP_ICONS = "appIcons"),
        (i.CHAT_WALLPAPERS = "chatWallpapers"),
        (i.QUEST_ORB_MULTIPLIER = "questOrbMultiplier"),
        i),
    a = n(441574),
    o = n(626584),
    l = n(125584);
class u {
    name;
    description;
    getFeatureValue;
    constructor(e, t, n) {
        (this.name = e),
            (this.description = n),
            (this.getFeatureValue = t),
            Object.defineProperty(this, "getFeatureValue", { value: t, configurable: !1, writable: !1 });
    }
}
class c {
    skuId;
    skuFeatures;
    constructor(e, t) {
        (this.skuId = e), (this.skuFeatures = t);
    }
}
var d = n(945810),
    _ =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (r[(r.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        r);
let f = (0, d.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var h = n(349871),
    p = n(788868);
let E = new o.A("ProductCatalog.tsx");
class m extends u {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = p.u0[t.premiumType];
                        if (null == n)
                            return (
                                E.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = K[n];
                        if (null == i)
                            return (
                                E.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        E.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let g = new m(s.ANIMATED_EMOJIS),
    A = new m(s.EMOJIS_EVERYWHERE),
    I = new m(s.STICKERS_EVERYWHERE),
    T = new m(s.SOUNDBOARD_EVERYWHERE),
    S = new m(s.CUSTOM_CALL_SOUNDS),
    N = new m(s.PREMIUM_VOICE_FILTERS),
    y = new m(s.ANIMATED_AVATAR),
    C = new m(s.CUSTOM_DISCRIMINATOR),
    v = new m(s.PREMIUM_GUILD_MEMBER_PROFILE),
    O = new m("profileBadges"),
    R = new m(s.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    b = new m("collectibles"),
    D = new m("appIcons"),
    L = new m(s.CLIENT_THEMES),
    w = new m("boostDiscount"),
    M = new m("freeBoosts"),
    P = new m(s.STREAM_MID_QUALITY),
    x = new m(s.STREAM_HIGH_QUALITY),
    U = new m(s.CUSTOM_NOTIFICATION_SOUNDS),
    k = new m("fancyVoiceChannelReactions"),
    G = new m("installPremiumApplications"),
    F = new m("redeemPremiumPerks"),
    V = new m(s.VIDEO_FILTER_ASSETS);
new u(s.INCREASED_FILE_UPLOAD_SIZE, l.f);
let B = new m(s.INCREASED_GUILD_LIMIT),
    H = new m(s.INCREASED_MESSAGE_LENGTH),
    j = new m("increasedVideoUploadQuality"),
    Y = new m("uploadLargeFiles"),
    W = new m(s.QUEST_ORB_MULTIPLIER),
    K = Object.freeze({
        [p.pe.TIER_0]: new c(p.pe.TIER_0, [g, A, I, O, V, j, Y, D]),
        [p.pe.TIER_1]: new c(p.pe.TIER_1, [g, A, y, C, O, w, P, k, j, Y, D]),
        [p.pe.TIER_2]: new c(p.pe.TIER_2, [
            g,
            A,
            I,
            T,
            S,
            y,
            C,
            v,
            O,
            R,
            L,
            w,
            M,
            P,
            x,
            k,
            G,
            F,
            V,
            B,
            H,
            j,
            Y,
            D,
            b,
            U,
            N,
            W,
        ]),
    }),
    z = [w, M, W],
    $ = [],
    q = new Map([
        [g, a.bb.ANIMATED_EMOJIS],
        [A, a.bb.EMOJIS_EVERYWHERE],
        [I, a.bb.STICKERS_EVERYWHERE],
        [T, a.bb.SOUNDBOARD_EVERYWHERE],
        [S, a.bb.CUSTOM_CALL_SOUNDS],
        [N, a.bb.PREMIUM_VOICE_FILTERS],
        [y, a.bb.ANIMATED_AVATAR],
        [C, a.bb.CUSTOM_DISCRIMINATOR],
        [v, a.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [R, a.bb.PROFILE_PREMIUM_FEATURES],
        [b, a.bb.PREMIUM_COLLECTIBLES],
        [L, a.bb.CLIENT_THEMES],
        [P, a.bb.STREAM_MID_QUALITY],
        [x, a.bb.STREAM_HIGH_QUALITY],
        [V, a.bb.VIDEO_FILTER_ASSETS],
        [B, a.bb.INCREASED_GUILD_LIMIT],
        [H, a.bb.INCREASED_MESSAGE_LENGTH],
        [Y, a.bb.INCREASED_FILE_UPLOAD_SIZE],
        [O, a.bb.PROFILE_BADGES],
        [D, a.bb.APP_ICONS],
        [w, a.bb.BOOST_DISCOUNT],
        [M, a.bb.FREE_BOOSTS],
        [G, a.bb.INSTALL_PREMIUM_APPLICATIONS],
        [j, a.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function Z(e, t, n) {
    if ((null != t && t.isPremiumWithFractionalPremiumOnly() && z.includes(e)) || (n && $.includes(e))) return !1;
    let i = q.get(e);
    if (null != i && t?.perks != null) {
        let n = f.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== _.CONTROL) {
            let r = e.getFeatureValue(t),
                s = (0, h.Nh)(t?.perks, i);
            return n === _.DUAL_READ_RETURN_NEW ? s : r;
        }
    }
    return e.getFeatureValue(t);
}
