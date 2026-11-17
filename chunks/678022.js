n.d(t, {
    E2: () => I,
    Vj: () => R,
    QS: () => D,
    zG: () => P,
    yF: () => x,
    ab: () => N,
    iU: () => y,
    wK: () => m,
    QB: () => C,
    Zg: () => G,
    Pi: () => H,
    Qb: () => V,
    tx: () => S,
    PL: () => B,
    vB: () => g,
    hF: () => O,
    hw: () => v,
    JZ: () => b,
    nm: () => W,
    xd: () => K,
    CZ: () => U,
    jE: () => w,
    tn: () => M,
    Sw: () => k,
    _A: () => Y,
    MK: () => T,
    Sn: () => j,
    EJ: () => p,
    Hd: () => L,
    F6: () => F,
});
var i,
    r = n(76573),
    a = n(255438),
    s = n(474090),
    l = n(626584),
    o = n(683760),
    d = n(948325),
    c = n(682901);
let u = new l.A("ProductCatalog.tsx"),
    _ = {
        [c.PremiumTypes.TIER_0]: new Set([
            r.bb.ANIMATED_EMOJIS,
            r.bb.EMOJIS_EVERYWHERE,
            r.bb.STICKERS_EVERYWHERE,
            r.bb.PROFILE_BADGES,
            r.bb.VIDEO_FILTER_ASSETS,
            r.bb.INCREASED_VIDEO_UPLOAD_QUALITY,
            r.bb.INCREASED_FILE_UPLOAD_SIZE,
            r.bb.APP_ICONS,
        ]),
        [c.PremiumTypes.TIER_1]: new Set([
            r.bb.ANIMATED_EMOJIS,
            r.bb.EMOJIS_EVERYWHERE,
            r.bb.ANIMATED_AVATAR,
            r.bb.CUSTOM_DISCRIMINATOR,
            r.bb.PROFILE_BADGES,
            r.bb.BOOST_DISCOUNT,
            r.bb.STREAM_MID_QUALITY,
            r.bb.INCREASED_VIDEO_UPLOAD_QUALITY,
            r.bb.INCREASED_FILE_UPLOAD_SIZE,
            r.bb.APP_ICONS,
        ]),
        [c.PremiumTypes.TIER_2]: new Set([
            r.bb.ANIMATED_EMOJIS,
            r.bb.EMOJIS_EVERYWHERE,
            r.bb.STICKERS_EVERYWHERE,
            r.bb.SOUNDBOARD_EVERYWHERE,
            r.bb.CUSTOM_CALL_SOUNDS,
            r.bb.ANIMATED_AVATAR,
            r.bb.CUSTOM_DISCRIMINATOR,
            r.bb.PREMIUM_GUILD_MEMBER_PROFILE,
            r.bb.PROFILE_BADGES,
            r.bb.PROFILE_PREMIUM_FEATURES,
            r.bb.CLIENT_THEMES,
            r.bb.BOOST_DISCOUNT,
            r.bb.FREE_BOOSTS,
            r.bb.STREAM_MID_QUALITY,
            r.bb.STREAM_HIGH_QUALITY,
            r.bb.INSTALL_PREMIUM_APPLICATIONS,
            r.bb.VIDEO_FILTER_ASSETS,
            r.bb.INCREASED_GUILD_LIMIT,
            r.bb.INCREASED_MESSAGE_LENGTH,
            r.bb.INCREASED_VIDEO_UPLOAD_QUALITY,
            r.bb.INCREASED_FILE_UPLOAD_SIZE,
            r.bb.APP_ICONS,
            r.bb.PREMIUM_COLLECTIBLES,
            r.bb.PREMIUM_TENURE_BADGE,
        ]),
    },
    E = new Set([r.bb.BOOST_DISCOUNT, r.bb.FREE_BOOSTS, r.bb.PREMIUM_TENURE_BADGE]);
function A(e, t) {
    if (t?.premiumType == null) return !1;
    let n = _[t.premiumType];
    return null == n ? (u.warn(`Cannot find the perks for the user's premium type ${t.premiumType}`), !1) : n.has(e);
}
function f(e, t) {
    return (
        !(null != t && t.isPremiumWithFractionalPremiumOnly() && E.has(e)) &&
        (o.A.hasPremiumTypeOverride(t) ? A(e, t) : t?.perks != null ? (0, d.jv)(t.perks, e) : A(e, t))
    );
}
var h = n(219882),
    I = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = e === c.PremiumTypes.TIER_2 ? (0, h.ew)({ location: "getMaxFileSizeForPremiumType" }) : c.f5[e].fileSize;
    return (0, a.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function m(e) {
    return f(r.bb.ANIMATED_EMOJIS, e);
}
function g(e) {
    return f(r.bb.EMOJIS_EVERYWHERE, e);
}
function T(e) {
    return f(r.bb.SOUNDBOARD_EVERYWHERE, e);
}
function S(e) {
    return f(r.bb.CUSTOM_CALL_SOUNDS, e);
}
function N(e) {
    return f(r.bb.INCREASED_FILE_UPLOAD_SIZE, e);
}
function C(e) {
    return f(r.bb.PROFILE_BADGES, e);
}
function O(e) {
    return f(r.bb.INCREASED_VIDEO_UPLOAD_QUALITY, e);
}
function R(e) {
    return f(r.bb.CUSTOM_DISCRIMINATOR, e);
}
function L(e) {
    return f(r.bb.BOOST_DISCOUNT, e);
}
function y(e) {
    return f(r.bb.ANIMATED_AVATAR, e);
}
function D(e) {
    return f(r.bb.INSTALL_PREMIUM_APPLICATIONS, e);
}
function b(e) {
    return f(r.bb.INCREASED_MESSAGE_LENGTH, e);
}
function v(e) {
    return f(r.bb.INCREASED_GUILD_LIMIT, e);
}
function P(e) {
    return (0, s.YE)(e, c.PremiumTypes.TIER_2);
}
function M(e) {
    return f(r.bb.PROFILE_PREMIUM_FEATURES, e);
}
function U(e) {
    return f(r.bb.APP_ICONS, e);
}
function w(e) {
    return f(r.bb.PREMIUM_GUILD_MEMBER_PROFILE, e);
}
function G(e) {
    return f(r.bb.CLIENT_THEMES, e);
}
function x(e, t) {
    return "high" === e ? f(r.bb.STREAM_HIGH_QUALITY, t) : f(r.bb.STREAM_MID_QUALITY, t);
}
function k(e) {
    return null != e && !e.isFractionalPremiumWithNoStandardSub() && (0, s.YE)(e, c.PremiumTypes.TIER_2);
}
function F(e) {
    return f(r.bb.FREE_BOOSTS, e);
}
function B(e) {
    return f(r.bb.STICKERS_EVERYWHERE, e);
}
function V(e) {
    return f(r.bb.VIDEO_FILTER_ASSETS, e);
}
function H(e) {
    return f(r.bb.PREMIUM_COLLECTIBLES, e);
}
function j(e) {
    return f(r.bb.PREMIUM_TENURE_BADGE, e);
}
function W(e) {
    return (0, d.Nh)(e?.perks, r.bb.MONTHLY_ORBS);
}
function Y(e) {
    return (0, d.Nh)(e?.perks, r.bb.SHOP_DISCOUNTS) || H(e);
}
function K(e) {
    return (0, d.Nh)(e?.perks, r.bb.MORE_QUEST_ORBS) || k(e);
}
