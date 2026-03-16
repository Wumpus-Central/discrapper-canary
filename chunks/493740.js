"use strict";
n.d(t, {
    DG: () => U,
    G3: () => y,
    GS: () => p,
    He: () => h,
    II: () => O,
    JK: () => f,
    OW: () => g,
    Pm: () => P,
    Qz: () => k,
    RM: () => H,
    T7: () => v,
    WQ: () => L,
    Zc: () => x,
    _V: () => C,
    _w: () => w,
    aE: () => R,
    cS: () => S,
    gQ: () => _,
    ii: () => m,
    lx: () => I,
    nI: () => T,
    nh: () => A,
    sj: () => b,
    u6: () => G,
    x: () => M,
    z0: () => E,
    zL: () => N,
});
var r = n(83790),
    i = n(626584),
    s = n(125584),
    a = n(124856),
    o = n(594579),
    l = n(788868);
let u = new i.A("ProductCatalog.tsx");
function c(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = l.u0[t.premiumType];
        if (null == n)
            return u.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`), !1;
        let r = F[n];
        if (null == r)
            return (
                u.warn(
                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                ),
                !1
            );
        return r.skuFeatures.includes(e);
    } catch (e) {
        u.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
    }
    return !1;
}
class d extends a.A {
    constructor(e, t) {
        super(e, (e) => c(this, e), t);
    }
}
let _ = new d(r.w.ANIMATED_EMOJIS),
    f = new d(r.w.EMOJIS_EVERYWHERE),
    p = new d(r.w.STICKERS_EVERYWHERE),
    h = new d(r.w.SOUNDBOARD_EVERYWHERE),
    m = new d(r.w.CUSTOM_CALL_SOUNDS),
    E = new d(r.w.PREMIUM_VOICE_FILTERS),
    g = new d(r.w.ANIMATED_AVATAR),
    A = new d(r.w.CUSTOM_DISCRIMINATOR),
    I = new d(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    T = new d("profileBadges"),
    S = new d(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    y = new d("collectibles"),
    v = new d("appIcons"),
    N = new d(r.w.CLIENT_THEMES),
    C = new d("boostDiscount"),
    R = new d("freeBoosts"),
    O = new d(r.w.STREAM_MID_QUALITY),
    b = new d(r.w.STREAM_HIGH_QUALITY),
    D = new d(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    L = new d("fancyVoiceChannelReactions"),
    w = new d("installPremiumApplications"),
    M = new d("redeemPremiumPerks"),
    x = new d(r.w.VIDEO_FILTER_ASSETS);
new a.A(r.w.INCREASED_FILE_UPLOAD_SIZE, s.f);
let P = new d(r.w.INCREASED_GUILD_LIMIT),
    k = new d(r.w.INCREASED_MESSAGE_LENGTH),
    U = new d("increasedVideoUploadQuality"),
    G = new d("uploadLargeFiles"),
    F = Object.freeze({
        [l.pe.TIER_0]: new o.A(l.pe.TIER_0, [_, f, p, T, x, U, G, v]),
        [l.pe.TIER_1]: new o.A(l.pe.TIER_1, [_, f, g, A, T, C, O, L, U, G, v]),
        [l.pe.TIER_2]: new o.A(l.pe.TIER_2, [
            _,
            f,
            p,
            h,
            m,
            g,
            A,
            I,
            T,
            S,
            N,
            C,
            R,
            O,
            b,
            L,
            w,
            M,
            x,
            P,
            k,
            U,
            G,
            v,
            y,
            D,
            E,
        ]),
    }),
    V = [C, R],
    B = [];
function H(e, t, n) {
    return (
        !((null != t && t.isPremiumWithFractionalPremiumOnly() && V.includes(e)) || (n && B.includes(e))) &&
        e.getFeatureValue(t)
    );
}
