n.d(t, {
    DG: () => B,
    G3: () => R,
    G5: () => k,
    GS: () => T,
    He: () => h,
    II: () => M,
    JK: () => I,
    OW: () => f,
    Pm: () => x,
    Qz: () => V,
    RM: () => K,
    T7: () => g,
    Zc: () => w,
    _V: () => D,
    _w: () => y,
    aE: () => b,
    cS: () => C,
    gQ: () => A,
    ii: () => S,
    lx: () => m,
    nI: () => O,
    nh: () => p,
    sj: () => P,
    u6: () => F,
    x: () => G,
    zL: () => L,
});
var i = n(83790),
    a = n(441574),
    r = n(626584),
    s = n(125584),
    l = n(124856),
    o = n(594579),
    d = n(975757),
    c = n(349871),
    _ = n(788868);
let E = new r.A("ProductCatalog.tsx");
class u extends l.A {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = _.u0[t.premiumType];
                        if (null == n)
                            return (
                                E.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = H[n];
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
let A = new u(i.w.ANIMATED_EMOJIS),
    I = new u(i.w.EMOJIS_EVERYWHERE),
    T = new u(i.w.STICKERS_EVERYWHERE),
    h = new u(i.w.SOUNDBOARD_EVERYWHERE),
    S = new u(i.w.CUSTOM_CALL_SOUNDS),
    N = new u(i.w.PREMIUM_VOICE_FILTERS),
    f = new u(i.w.ANIMATED_AVATAR),
    p = new u(i.w.CUSTOM_DISCRIMINATOR),
    m = new u(i.w.PREMIUM_GUILD_MEMBER_PROFILE),
    O = new u("profileBadges"),
    C = new u(i.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    R = new u("collectibles"),
    g = new u("appIcons"),
    L = new u(i.w.CLIENT_THEMES),
    D = new u("boostDiscount"),
    b = new u("freeBoosts"),
    M = new u(i.w.STREAM_MID_QUALITY),
    P = new u(i.w.STREAM_HIGH_QUALITY),
    U = new u(i.w.CUSTOM_NOTIFICATION_SOUNDS),
    v = new u("fancyVoiceChannelReactions"),
    y = new u("installPremiumApplications"),
    G = new u("redeemPremiumPerks"),
    w = new u(i.w.VIDEO_FILTER_ASSETS);
new l.A(i.w.INCREASED_FILE_UPLOAD_SIZE, s.f);
let x = new u(i.w.INCREASED_GUILD_LIMIT),
    V = new u(i.w.INCREASED_MESSAGE_LENGTH),
    B = new u("increasedVideoUploadQuality"),
    F = new u("uploadLargeFiles"),
    k = new u(i.w.QUEST_ORB_MULTIPLIER),
    H = Object.freeze({
        [_.pe.TIER_0]: new o.A(_.pe.TIER_0, [A, I, T, O, w, B, F, g]),
        [_.pe.TIER_1]: new o.A(_.pe.TIER_1, [A, I, f, p, O, D, M, v, B, F, g]),
        [_.pe.TIER_2]: new o.A(_.pe.TIER_2, [
            A,
            I,
            T,
            h,
            S,
            f,
            p,
            m,
            O,
            C,
            L,
            D,
            b,
            M,
            P,
            v,
            y,
            G,
            w,
            x,
            V,
            B,
            F,
            g,
            R,
            U,
            N,
            k,
        ]),
    }),
    j = [D, b, k],
    Y = [],
    W = new Map([
        [A, a.bb.ANIMATED_EMOJIS],
        [I, a.bb.EMOJIS_EVERYWHERE],
        [T, a.bb.STICKERS_EVERYWHERE],
        [h, a.bb.SOUNDBOARD_EVERYWHERE],
        [S, a.bb.CUSTOM_CALL_SOUNDS],
        [N, a.bb.PREMIUM_VOICE_FILTERS],
        [f, a.bb.ANIMATED_AVATAR],
        [p, a.bb.CUSTOM_DISCRIMINATOR],
        [m, a.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [C, a.bb.PROFILE_PREMIUM_FEATURES],
        [R, a.bb.PREMIUM_COLLECTIBLES],
        [L, a.bb.CLIENT_THEMES],
        [M, a.bb.STREAM_MID_QUALITY],
        [P, a.bb.STREAM_HIGH_QUALITY],
        [w, a.bb.VIDEO_FILTER_ASSETS],
        [x, a.bb.INCREASED_GUILD_LIMIT],
        [V, a.bb.INCREASED_MESSAGE_LENGTH],
        [F, a.bb.INCREASED_FILE_UPLOAD_SIZE],
        [O, a.bb.PROFILE_BADGES],
        [g, a.bb.APP_ICONS],
        [D, a.bb.BOOST_DISCOUNT],
        [b, a.bb.FREE_BOOSTS],
        [y, a.bb.INSTALL_PREMIUM_APPLICATIONS],
        [B, a.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function K(e, t, n) {
    if ((null != t && t.isPremiumWithFractionalPremiumOnly() && j.includes(e)) || (n && Y.includes(e))) return !1;
    let i = W.get(e);
    if (null != i && t?.perks != null) {
        let n = d.A.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== d.I.CONTROL) {
            let a = e.getFeatureValue(t),
                r = (0, c.Nh)(t?.perks, i);
            return n === d.I.DUAL_READ_RETURN_NEW ? r : a;
        }
    }
    return e.getFeatureValue(t);
}
