"use strict";
n.d(t, {
    DG: () => F,
    G3: () => v,
    G5: () => B,
    GS: () => E,
    He: () => m,
    II: () => D,
    JK: () => h,
    OW: () => I,
    Pm: () => U,
    Qz: () => G,
    RM: () => K,
    T7: () => C,
    Zc: () => k,
    _V: () => R,
    _w: () => P,
    aE: () => b,
    cS: () => N,
    gQ: () => p,
    ii: () => g,
    lx: () => S,
    nI: () => y,
    nh: () => T,
    sj: () => L,
    u6: () => V,
    x: () => x,
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
class f extends o.A {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = d.u0[t.premiumType];
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
let p = new f(r.w.ANIMATED_EMOJIS),
    h = new f(r.w.EMOJIS_EVERYWHERE),
    E = new f(r.w.STICKERS_EVERYWHERE),
    m = new f(r.w.SOUNDBOARD_EVERYWHERE),
    g = new f(r.w.CUSTOM_CALL_SOUNDS),
    A = new f(r.w.PREMIUM_VOICE_FILTERS),
    I = new f(r.w.ANIMATED_AVATAR),
    T = new f(r.w.CUSTOM_DISCRIMINATOR),
    S = new f(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    y = new f("profileBadges"),
    N = new f(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    v = new f("collectibles"),
    C = new f("appIcons"),
    O = new f(r.w.CLIENT_THEMES),
    R = new f("boostDiscount"),
    b = new f("freeBoosts"),
    D = new f(r.w.STREAM_MID_QUALITY),
    L = new f(r.w.STREAM_HIGH_QUALITY),
    w = new f(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    M = new f("fancyVoiceChannelReactions"),
    P = new f("installPremiumApplications"),
    x = new f("redeemPremiumPerks"),
    k = new f(r.w.VIDEO_FILTER_ASSETS);
new o.A(r.w.INCREASED_FILE_UPLOAD_SIZE, a.f);
let U = new f(r.w.INCREASED_GUILD_LIMIT),
    G = new f(r.w.INCREASED_MESSAGE_LENGTH),
    F = new f("increasedVideoUploadQuality"),
    V = new f("uploadLargeFiles"),
    B = new f(r.w.QUEST_ORB_MULTIPLIER),
    H = Object.freeze({
        [d.pe.TIER_0]: new l.A(d.pe.TIER_0, [p, h, E, y, k, F, V, C]),
        [d.pe.TIER_1]: new l.A(d.pe.TIER_1, [p, h, I, T, y, R, D, M, F, V, C]),
        [d.pe.TIER_2]: new l.A(d.pe.TIER_2, [
            p,
            h,
            E,
            m,
            g,
            I,
            T,
            S,
            y,
            N,
            O,
            R,
            b,
            D,
            L,
            M,
            P,
            x,
            k,
            U,
            G,
            F,
            V,
            C,
            v,
            w,
            A,
            B,
        ]),
    }),
    j = [R, b, B],
    Y = [],
    W = new Map([
        [p, i.bb.ANIMATED_EMOJIS],
        [h, i.bb.EMOJIS_EVERYWHERE],
        [E, i.bb.STICKERS_EVERYWHERE],
        [m, i.bb.SOUNDBOARD_EVERYWHERE],
        [g, i.bb.CUSTOM_CALL_SOUNDS],
        [A, i.bb.PREMIUM_VOICE_FILTERS],
        [I, i.bb.ANIMATED_AVATAR],
        [T, i.bb.CUSTOM_DISCRIMINATOR],
        [S, i.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [N, i.bb.PROFILE_PREMIUM_FEATURES],
        [v, i.bb.PREMIUM_COLLECTIBLES],
        [O, i.bb.CLIENT_THEMES],
        [D, i.bb.STREAM_MID_QUALITY],
        [L, i.bb.STREAM_HIGH_QUALITY],
        [k, i.bb.VIDEO_FILTER_ASSETS],
        [U, i.bb.INCREASED_GUILD_LIMIT],
        [G, i.bb.INCREASED_MESSAGE_LENGTH],
        [V, i.bb.INCREASED_FILE_UPLOAD_SIZE],
        [y, i.bb.PROFILE_BADGES],
        [C, i.bb.APP_ICONS],
        [R, i.bb.BOOST_DISCOUNT],
        [b, i.bb.FREE_BOOSTS],
        [P, i.bb.INSTALL_PREMIUM_APPLICATIONS],
        [F, i.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function K(e, t, n) {
    if ((null != t && t.isPremiumWithFractionalPremiumOnly() && j.includes(e)) || (n && Y.includes(e))) return !1;
    let r = W.get(e);
    if (null != r && t?.perks != null) {
        let n = u.A.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== u.I.CONTROL) {
            let i = e.getFeatureValue(t),
                s = (0, c.Nh)(t?.perks, r);
            return n === u.I.DUAL_READ_RETURN_NEW ? s : i;
        }
    }
    return e.getFeatureValue(t);
}
