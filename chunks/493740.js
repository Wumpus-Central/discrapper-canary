"use strict";
n.d(t, {
    DG: () => V,
    G3: () => O,
    G5: () => B,
    GS: () => p,
    He: () => m,
    II: () => D,
    JK: () => h,
    OW: () => I,
    Pm: () => x,
    Qz: () => G,
    RM: () => K,
    T7: () => R,
    Zc: () => k,
    _V: () => C,
    _w: () => P,
    aE: () => b,
    cS: () => N,
    gQ: () => E,
    ii: () => g,
    lx: () => S,
    nI: () => y,
    nh: () => T,
    sj: () => L,
    u6: () => F,
    x: () => U,
    zL: () => v,
});
var r = n(83790),
    i = n(988506),
    s = n(626584),
    a = n(125584),
    o = n(124856),
    l = n(594579),
    u = n(975757),
    d = n(817857),
    c = n(788868);
let _ = new s.A("ProductCatalog.tsx");
class f extends o.A {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = c.u0[t.premiumType];
                        if (null == n)
                            return (
                                _.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let r = H[n];
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
                })(this, e),
            t,
        );
    }
}
let E = new f(r.w.ANIMATED_EMOJIS),
    h = new f(r.w.EMOJIS_EVERYWHERE),
    p = new f(r.w.STICKERS_EVERYWHERE),
    m = new f(r.w.SOUNDBOARD_EVERYWHERE),
    g = new f(r.w.CUSTOM_CALL_SOUNDS),
    A = new f(r.w.PREMIUM_VOICE_FILTERS),
    I = new f(r.w.ANIMATED_AVATAR),
    T = new f(r.w.CUSTOM_DISCRIMINATOR),
    S = new f(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    y = new f("profileBadges"),
    N = new f(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    O = new f("collectibles"),
    R = new f("appIcons"),
    v = new f(r.w.CLIENT_THEMES),
    C = new f("boostDiscount"),
    b = new f("freeBoosts"),
    D = new f(r.w.STREAM_MID_QUALITY),
    L = new f(r.w.STREAM_HIGH_QUALITY),
    w = new f(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    M = new f("fancyVoiceChannelReactions"),
    P = new f("installPremiumApplications"),
    U = new f("redeemPremiumPerks"),
    k = new f(r.w.VIDEO_FILTER_ASSETS);
new o.A(r.w.INCREASED_FILE_UPLOAD_SIZE, a.f);
let x = new f(r.w.INCREASED_GUILD_LIMIT),
    G = new f(r.w.INCREASED_MESSAGE_LENGTH),
    V = new f("increasedVideoUploadQuality"),
    F = new f("uploadLargeFiles"),
    B = new f(r.w.QUEST_ORB_MULTIPLIER),
    H = Object.freeze({
        [c.pe.TIER_0]: new l.A(c.pe.TIER_0, [E, h, p, y, k, V, F, R]),
        [c.pe.TIER_1]: new l.A(c.pe.TIER_1, [E, h, I, T, y, C, D, M, V, F, R]),
        [c.pe.TIER_2]: new l.A(c.pe.TIER_2, [
            E,
            h,
            p,
            m,
            g,
            I,
            T,
            S,
            y,
            N,
            v,
            C,
            b,
            D,
            L,
            M,
            P,
            U,
            k,
            x,
            G,
            V,
            F,
            R,
            O,
            w,
            A,
            B,
        ]),
    }),
    Y = [C, b, B],
    W = [],
    j = new Map([
        [E, i.bb.ANIMATED_EMOJIS],
        [h, i.bb.EMOJIS_EVERYWHERE],
        [p, i.bb.STICKERS_EVERYWHERE],
        [m, i.bb.SOUNDBOARD_EVERYWHERE],
        [g, i.bb.CUSTOM_CALL_SOUNDS],
        [A, i.bb.PREMIUM_VOICE_FILTERS],
        [I, i.bb.ANIMATED_AVATAR],
        [T, i.bb.CUSTOM_DISCRIMINATOR],
        [S, i.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [N, i.bb.PROFILE_PREMIUM_FEATURES],
        [O, i.bb.PREMIUM_COLLECTIBLES],
        [v, i.bb.CLIENT_THEMES],
        [D, i.bb.STREAM_MID_QUALITY],
        [L, i.bb.STREAM_HIGH_QUALITY],
        [k, i.bb.VIDEO_FILTER_ASSETS],
        [x, i.bb.INCREASED_GUILD_LIMIT],
        [G, i.bb.INCREASED_MESSAGE_LENGTH],
        [F, i.bb.INCREASED_FILE_UPLOAD_SIZE],
        [y, i.bb.PROFILE_BADGES],
        [R, i.bb.APP_ICONS],
        [C, i.bb.BOOST_DISCOUNT],
        [b, i.bb.FREE_BOOSTS],
        [P, i.bb.INSTALL_PREMIUM_APPLICATIONS],
        [V, i.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function K(e, t, n) {
    if ((null != t && t.isPremiumWithFractionalPremiumOnly() && Y.includes(e)) || (n && W.includes(e))) return !1;
    let r = j.get(e);
    if (null != r && t?.perks != null) {
        let n = u.A.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== u.I.CONTROL) {
            let i = e.getFeatureValue(t),
                s = (0, d.Nh)(t?.perks, r);
            return n === u.I.DUAL_READ_RETURN_NEW ? s : i;
        }
    }
    return e.getFeatureValue(t);
}
