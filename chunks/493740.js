"use strict";
n.d(t, {
    DG: () => G,
    G3: () => v,
    GS: () => h,
    He: () => m,
    II: () => O,
    JK: () => p,
    OW: () => A,
    Pm: () => k,
    Qz: () => U,
    RM: () => Y,
    T7: () => C,
    Uc: () => F,
    WQ: () => w,
    Zc: () => M,
    _V: () => N,
    _w: () => x,
    aE: () => R,
    cS: () => S,
    gQ: () => f,
    ii: () => g,
    lx: () => T,
    nI: () => y,
    nh: () => I,
    sj: () => D,
    u6: () => V,
    x: () => P,
    z0: () => E,
    zL: () => b,
});
var r = n(83790),
    i = n(626584),
    a = n(125584),
    s = n(124856),
    o = n(276767),
    l = n(594579),
    u = n(788868);
let c = new i.A("ProductCatalog.tsx");
function d(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = u.u0[t.premiumType];
        if (null == n)
            return c.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`), !1;
        let r = B[n];
        if (null == r)
            return (
                c.warn(
                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                ),
                !1
            );
        return r.skuFeatures.includes(e);
    } catch (e) {
        c.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
    }
    return !1;
}
class _ extends s.A {
    constructor(e, t) {
        super(e, (e) => d(this, e), t);
    }
}
let f = new _(r.w.ANIMATED_EMOJIS),
    p = new _(r.w.EMOJIS_EVERYWHERE),
    h = new _(r.w.STICKERS_EVERYWHERE),
    m = new _(r.w.SOUNDBOARD_EVERYWHERE),
    g = new _(r.w.CUSTOM_CALL_SOUNDS),
    E = new _(r.w.PREMIUM_VOICE_FILTERS),
    A = new _(r.w.ANIMATED_AVATAR),
    I = new _(r.w.CUSTOM_DISCRIMINATOR),
    T = new _(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    y = new _("profileBadges"),
    S = new _(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    v = new _("collectibles"),
    C = new _("appIcons"),
    b = new _(r.w.CLIENT_THEMES),
    N = new _("boostDiscount"),
    R = new _("freeBoosts"),
    O = new _(r.w.STREAM_MID_QUALITY),
    D = new _(r.w.STREAM_HIGH_QUALITY),
    L = new _(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    w = new _("fancyVoiceChannelReactions"),
    x = new _("installPremiumApplications"),
    P = new _("redeemPremiumPerks"),
    M = new _(r.w.VIDEO_FILTER_ASSETS);
new s.A(r.w.INCREASED_FILE_UPLOAD_SIZE, a.f);
let k = new _(r.w.INCREASED_GUILD_LIMIT),
    U = new _(r.w.INCREASED_MESSAGE_LENGTH),
    G = new _("increasedVideoUploadQuality"),
    V = new _("uploadLargeFiles"),
    F = new _("warpPrivateBrowsing"),
    B = Object.freeze({
        [u.pe.TIER_0]: new l.A(u.pe.TIER_0, [f, p, h, y, M, G, V, C]),
        [u.pe.TIER_1]: new l.A(u.pe.TIER_1, [f, p, A, I, y, N, O, w, G, V, C]),
        [u.pe.TIER_2]: new l.A(u.pe.TIER_2, [
            f,
            p,
            h,
            m,
            g,
            A,
            I,
            T,
            y,
            S,
            b,
            N,
            R,
            O,
            D,
            w,
            x,
            P,
            M,
            k,
            U,
            G,
            V,
            C,
            v,
            L,
            E,
            F,
        ]),
    }),
    j = [N, R, F],
    H = [F];
function Y(e, t, n) {
    return (
        !(
            (0, o.Z)("canUserUse", t) ||
            (null != t && t.isPremiumWithFractionalPremiumOnly() && j.includes(e)) ||
            (n && H.includes(e))
        ) && e.getFeatureValue(t)
    );
}
