"use strict";
n.d(t, {
    DG: () => G,
    G3: () => v,
    GS: () => h,
    He: () => m,
    II: () => b,
    JK: () => p,
    OW: () => A,
    Pm: () => k,
    Qz: () => U,
    RM: () => j,
    T7: () => N,
    WQ: () => w,
    Zc: () => P,
    _V: () => R,
    _w: () => M,
    aE: () => O,
    cS: () => y,
    gQ: () => f,
    ii: () => E,
    lx: () => T,
    nI: () => S,
    nh: () => I,
    sj: () => D,
    u6: () => F,
    x: () => x,
    z0: () => g,
    zL: () => C,
});
var r = n(83790),
    i = n(626584),
    s = n(125584),
    a = n(124856),
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
        let r = V[n];
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
class _ extends a.A {
    constructor(e, t) {
        super(e, (e) => d(this, e), t);
    }
}
let f = new _(r.w.ANIMATED_EMOJIS),
    p = new _(r.w.EMOJIS_EVERYWHERE),
    h = new _(r.w.STICKERS_EVERYWHERE),
    m = new _(r.w.SOUNDBOARD_EVERYWHERE),
    E = new _(r.w.CUSTOM_CALL_SOUNDS),
    g = new _(r.w.PREMIUM_VOICE_FILTERS),
    A = new _(r.w.ANIMATED_AVATAR),
    I = new _(r.w.CUSTOM_DISCRIMINATOR),
    T = new _(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    S = new _("profileBadges"),
    y = new _(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    v = new _("collectibles"),
    N = new _("appIcons"),
    C = new _(r.w.CLIENT_THEMES),
    R = new _("boostDiscount"),
    O = new _("freeBoosts"),
    b = new _(r.w.STREAM_MID_QUALITY),
    D = new _(r.w.STREAM_HIGH_QUALITY),
    L = new _(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    w = new _("fancyVoiceChannelReactions"),
    M = new _("installPremiumApplications"),
    x = new _("redeemPremiumPerks"),
    P = new _(r.w.VIDEO_FILTER_ASSETS);
new a.A(r.w.INCREASED_FILE_UPLOAD_SIZE, s.f);
let k = new _(r.w.INCREASED_GUILD_LIMIT),
    U = new _(r.w.INCREASED_MESSAGE_LENGTH),
    G = new _("increasedVideoUploadQuality"),
    F = new _("uploadLargeFiles"),
    V = Object.freeze({
        [u.pe.TIER_0]: new l.A(u.pe.TIER_0, [f, p, h, S, P, G, F, N]),
        [u.pe.TIER_1]: new l.A(u.pe.TIER_1, [f, p, A, I, S, R, b, w, G, F, N]),
        [u.pe.TIER_2]: new l.A(u.pe.TIER_2, [
            f,
            p,
            h,
            m,
            E,
            A,
            I,
            T,
            S,
            y,
            C,
            R,
            O,
            b,
            D,
            w,
            M,
            x,
            P,
            k,
            U,
            G,
            F,
            N,
            v,
            L,
            g,
        ]),
    }),
    B = [R, O],
    H = [];
function j(e, t, n) {
    return (
        !(
            (0, o.Z)("canUserUse", t) ||
            (null != t && t.isPremiumWithFractionalPremiumOnly() && B.includes(e)) ||
            (n && H.includes(e))
        ) && e.getFeatureValue(t)
    );
}
