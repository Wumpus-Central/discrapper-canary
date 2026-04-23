n.d(t, {
    DG: () => V,
    G3: () => L,
    G5: () => k,
    GS: () => T,
    He: () => S,
    II: () => U,
    JK: () => A,
    OW: () => R,
    Pm: () => w,
    Qz: () => F,
    RM: () => K,
    T7: () => D,
    Zc: () => B,
    _V: () => g,
    _w: () => G,
    aE: () => b,
    cS: () => m,
    gQ: () => I,
    ii: () => N,
    lx: () => C,
    nI: () => p,
    nh: () => f,
    sj: () => P,
    u6: () => H,
    x: () => v,
    zL: () => h,
});
var i = n(83790),
    r = n(441574),
    a = n(626584),
    s = n(125584),
    _ = n(124856),
    l = n(594579),
    o = n(975757),
    E = n(817857),
    d = n(788868);
let c = new a.A("ProductCatalog.tsx");
class u extends _.A {
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
                                c.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = x[n];
                        if (null == i)
                            return (
                                c.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        c.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let I = new u(i.w.ANIMATED_EMOJIS),
    A = new u(i.w.EMOJIS_EVERYWHERE),
    T = new u(i.w.STICKERS_EVERYWHERE),
    S = new u(i.w.SOUNDBOARD_EVERYWHERE),
    N = new u(i.w.CUSTOM_CALL_SOUNDS),
    O = new u(i.w.PREMIUM_VOICE_FILTERS),
    R = new u(i.w.ANIMATED_AVATAR),
    f = new u(i.w.CUSTOM_DISCRIMINATOR),
    C = new u(i.w.PREMIUM_GUILD_MEMBER_PROFILE),
    p = new u("profileBadges"),
    m = new u(i.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    L = new u("collectibles"),
    D = new u("appIcons"),
    h = new u(i.w.CLIENT_THEMES),
    g = new u("boostDiscount"),
    b = new u("freeBoosts"),
    U = new u(i.w.STREAM_MID_QUALITY),
    P = new u(i.w.STREAM_HIGH_QUALITY),
    M = new u(i.w.CUSTOM_NOTIFICATION_SOUNDS),
    y = new u("fancyVoiceChannelReactions"),
    G = new u("installPremiumApplications"),
    v = new u("redeemPremiumPerks"),
    B = new u(i.w.VIDEO_FILTER_ASSETS);
new _.A(i.w.INCREASED_FILE_UPLOAD_SIZE, s.f);
let w = new u(i.w.INCREASED_GUILD_LIMIT),
    F = new u(i.w.INCREASED_MESSAGE_LENGTH),
    V = new u("increasedVideoUploadQuality"),
    H = new u("uploadLargeFiles"),
    k = new u(i.w.QUEST_ORB_MULTIPLIER),
    x = Object.freeze({
        [d.pe.TIER_0]: new l.A(d.pe.TIER_0, [I, A, T, p, B, V, H, D]),
        [d.pe.TIER_1]: new l.A(d.pe.TIER_1, [I, A, R, f, p, g, U, y, V, H, D]),
        [d.pe.TIER_2]: new l.A(d.pe.TIER_2, [
            I,
            A,
            T,
            S,
            N,
            R,
            f,
            C,
            p,
            m,
            h,
            g,
            b,
            U,
            P,
            y,
            G,
            v,
            B,
            w,
            F,
            V,
            H,
            D,
            L,
            M,
            O,
            k,
        ]),
    }),
    W = [g, b, k],
    Y = [],
    j = new Map([
        [I, r.bb.ANIMATED_EMOJIS],
        [A, r.bb.EMOJIS_EVERYWHERE],
        [T, r.bb.STICKERS_EVERYWHERE],
        [S, r.bb.SOUNDBOARD_EVERYWHERE],
        [N, r.bb.CUSTOM_CALL_SOUNDS],
        [O, r.bb.PREMIUM_VOICE_FILTERS],
        [R, r.bb.ANIMATED_AVATAR],
        [f, r.bb.CUSTOM_DISCRIMINATOR],
        [C, r.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [m, r.bb.PROFILE_PREMIUM_FEATURES],
        [L, r.bb.PREMIUM_COLLECTIBLES],
        [h, r.bb.CLIENT_THEMES],
        [U, r.bb.STREAM_MID_QUALITY],
        [P, r.bb.STREAM_HIGH_QUALITY],
        [B, r.bb.VIDEO_FILTER_ASSETS],
        [w, r.bb.INCREASED_GUILD_LIMIT],
        [F, r.bb.INCREASED_MESSAGE_LENGTH],
        [H, r.bb.INCREASED_FILE_UPLOAD_SIZE],
        [p, r.bb.PROFILE_BADGES],
        [D, r.bb.APP_ICONS],
        [g, r.bb.BOOST_DISCOUNT],
        [b, r.bb.FREE_BOOSTS],
        [G, r.bb.INSTALL_PREMIUM_APPLICATIONS],
        [V, r.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function K(e, t, n) {
    if ((null != t && t.isPremiumWithFractionalPremiumOnly() && W.includes(e)) || (n && Y.includes(e))) return !1;
    let i = j.get(e);
    if (null != i && t?.perks != null) {
        let n = o.A.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== o.I.CONTROL) {
            let r = e.getFeatureValue(t),
                a = (0, E.Nh)(t?.perks, i);
            return n === o.I.DUAL_READ_RETURN_NEW ? a : r;
        }
    }
    return e.getFeatureValue(t);
}
