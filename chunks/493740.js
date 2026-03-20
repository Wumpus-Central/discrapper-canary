"use strict";
n.d(t, {
    DG: () => V,
    G3: () => C,
    G5: () => H,
    GS: () => E,
    He: () => g,
    II: () => L,
    JK: () => m,
    OW: () => T,
    Pm: () => G,
    Qz: () => F,
    RM: () => $,
    T7: () => R,
    Zc: () => U,
    _V: () => b,
    _w: () => P,
    aE: () => D,
    cS: () => N,
    gQ: () => h,
    ii: () => A,
    lx: () => y,
    nI: () => v,
    nh: () => S,
    sj: () => w,
    u6: () => B,
    x: () => k,
    z0: () => I,
    zL: () => O,
});
var r = n(83790),
    i = n(988506),
    s = n(626584),
    a = n(125584),
    o = n(124856),
    l = n(594579),
    u = n(975757),
    c = n(817857),
    d = n(788868);
let _ = new s.A("ProductCatalog.tsx");
function f(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = d.u0[t.premiumType];
        if (null == n)
            return _.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`), !1;
        let r = j[n];
        if (null == r)
            return (
                _.warn(
                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                ),
                !1
            );
        return r.skuFeatures.includes(e);
    } catch (e) {
        _.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
    }
    return !1;
}
class p extends o.A {
    constructor(e, t) {
        super(e, (e) => f(this, e), t);
    }
}
let h = new p(r.w.ANIMATED_EMOJIS),
    m = new p(r.w.EMOJIS_EVERYWHERE),
    E = new p(r.w.STICKERS_EVERYWHERE),
    g = new p(r.w.SOUNDBOARD_EVERYWHERE),
    A = new p(r.w.CUSTOM_CALL_SOUNDS),
    I = new p(r.w.PREMIUM_VOICE_FILTERS),
    T = new p(r.w.ANIMATED_AVATAR),
    S = new p(r.w.CUSTOM_DISCRIMINATOR),
    y = new p(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    v = new p("profileBadges"),
    N = new p(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    C = new p("collectibles"),
    R = new p("appIcons"),
    O = new p(r.w.CLIENT_THEMES),
    b = new p("boostDiscount"),
    D = new p("freeBoosts"),
    L = new p(r.w.STREAM_MID_QUALITY),
    w = new p(r.w.STREAM_HIGH_QUALITY),
    M = new p(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    x = new p("fancyVoiceChannelReactions"),
    P = new p("installPremiumApplications"),
    k = new p("redeemPremiumPerks"),
    U = new p(r.w.VIDEO_FILTER_ASSETS);
new o.A(r.w.INCREASED_FILE_UPLOAD_SIZE, a.f);
let G = new p(r.w.INCREASED_GUILD_LIMIT),
    F = new p(r.w.INCREASED_MESSAGE_LENGTH),
    V = new p("increasedVideoUploadQuality"),
    B = new p("uploadLargeFiles"),
    H = new p(r.w.QUEST_ORB_MULTIPLIER),
    j = Object.freeze({
        [d.pe.TIER_0]: new l.A(d.pe.TIER_0, [h, m, E, v, U, V, B, R]),
        [d.pe.TIER_1]: new l.A(d.pe.TIER_1, [h, m, T, S, v, b, L, x, V, B, R]),
        [d.pe.TIER_2]: new l.A(d.pe.TIER_2, [
            h,
            m,
            E,
            g,
            A,
            T,
            S,
            y,
            v,
            N,
            O,
            b,
            D,
            L,
            w,
            x,
            P,
            k,
            U,
            G,
            F,
            V,
            B,
            R,
            C,
            M,
            I,
            H,
        ]),
    }),
    Y = [b, D, H],
    W = [],
    K = new Map([
        [h, i.bb.ANIMATED_EMOJIS],
        [m, i.bb.EMOJIS_EVERYWHERE],
        [E, i.bb.STICKERS_EVERYWHERE],
        [g, i.bb.SOUNDBOARD_EVERYWHERE],
        [A, i.bb.CUSTOM_CALL_SOUNDS],
        [I, i.bb.PREMIUM_VOICE_FILTERS],
        [T, i.bb.ANIMATED_AVATAR],
        [S, i.bb.CUSTOM_DISCRIMINATOR],
        [y, i.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [N, i.bb.PROFILE_PREMIUM_FEATURES],
        [C, i.bb.PREMIUM_COLLECTIBLES],
        [O, i.bb.CLIENT_THEMES],
        [L, i.bb.STREAM_MID_QUALITY],
        [w, i.bb.STREAM_HIGH_QUALITY],
        [U, i.bb.VIDEO_FILTER_ASSETS],
        [G, i.bb.INCREASED_GUILD_LIMIT],
        [F, i.bb.INCREASED_MESSAGE_LENGTH],
        [B, i.bb.INCREASED_FILE_UPLOAD_SIZE],
    ]);
function $(e, t, n) {
    if ((null != t && t.isPremiumWithFractionalPremiumOnly() && Y.includes(e)) || (n && W.includes(e))) return !1;
    let r = K.get(e);
    if (null != r) {
        let n = u.A.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== u.I.CONTROL) {
            let i = e.getFeatureValue(t),
                s = (0, c.Nh)(t?.perks, r);
            return n === u.I.DUAL_READ_RETURN_NEW ? s : i;
        }
    }
    return e.getFeatureValue(t);
}
