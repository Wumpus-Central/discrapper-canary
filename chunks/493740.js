n.d(t, {
    DG: () => U,
    G3: () => S,
    GS: () => h,
    He: () => m,
    II: () => R,
    JK: () => _,
    OW: () => b,
    Pm: () => M,
    Qz: () => k,
    RM: () => Y,
    T7: () => I,
    Uc: () => V,
    WQ: () => D,
    Zc: () => j,
    _V: () => C,
    _w: () => x,
    aE: () => N,
    cS: () => v,
    gQ: () => p,
    ii: () => g,
    lx: () => O,
    nI: () => A,
    nh: () => y,
    sj: () => w,
    u6: () => G,
    x: () => L,
    z0: () => E,
    zL: () => T,
}),
    n(457529);
var r = n(83790),
    i = n(626584),
    a = n(125584),
    s = n(124856),
    o = n(276767),
    l = n(594579),
    c = n(788868);
let u = new i.A("ProductCatalog.tsx");

function d(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = c.u0[t.premiumType];
        if (null == n)
            return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let r = F[n];
        if (null == r)
            return (
                u.warn(
                    "Cannot find the corresponding product catalog entry to the user's SKU "
                        .concat(n, " and premium type ")
                        .concat(t.premiumType),
                ),
                !1
            );
        return r.skuFeatures.includes(e);
    } catch (e) {
        var n;
        u.error(
            "Error while retrieving user's feature access: ".concat(null != (n = e.message) ? n : JSON.stringify(e)),
        );
    }
    return !1;
}
class f extends s.A {
    constructor(e, t) {
        super(e, (e) => d(this, e), t);
    }
}
let p = new f(r.w.ANIMATED_EMOJIS),
    _ = new f(r.w.EMOJIS_EVERYWHERE),
    h = new f(r.w.STICKERS_EVERYWHERE),
    m = new f(r.w.SOUNDBOARD_EVERYWHERE),
    g = new f(r.w.CUSTOM_CALL_SOUNDS),
    E = new f(r.w.PREMIUM_VOICE_FILTERS),
    b = new f(r.w.ANIMATED_AVATAR),
    y = new f(r.w.CUSTOM_DISCRIMINATOR),
    O = new f(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    A = new f("profileBadges"),
    v = new f(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    S = new f("collectibles"),
    I = new f("appIcons"),
    T = new f(r.w.CLIENT_THEMES),
    C = new f("boostDiscount"),
    N = new f("freeBoosts"),
    R = new f(r.w.STREAM_MID_QUALITY),
    w = new f(r.w.STREAM_HIGH_QUALITY),
    P = new f(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    D = new f("fancyVoiceChannelReactions"),
    x = new f("installPremiumApplications"),
    L = new f("redeemPremiumPerks"),
    j = new f(r.w.VIDEO_FILTER_ASSETS);
new s.A(r.w.INCREASED_FILE_UPLOAD_SIZE, a.f);
let M = new f(r.w.INCREASED_GUILD_LIMIT),
    k = new f(r.w.INCREASED_MESSAGE_LENGTH),
    U = new f("increasedVideoUploadQuality"),
    G = new f("uploadLargeFiles"),
    V = new f("warpPrivateBrowsing"),
    F = Object.freeze({
        [c.pe.TIER_0]: new l.A(c.pe.TIER_0, [p, _, h, A, j, U, G, I]),
        [c.pe.TIER_1]: new l.A(c.pe.TIER_1, [p, _, b, y, A, C, R, D, U, G, I]),
        [c.pe.TIER_2]: new l.A(c.pe.TIER_2, [
            p,
            _,
            h,
            m,
            g,
            b,
            y,
            O,
            A,
            v,
            T,
            C,
            N,
            R,
            w,
            D,
            x,
            L,
            j,
            M,
            k,
            U,
            G,
            I,
            S,
            P,
            E,
            V,
        ]),
    }),
    B = [C, N, V],
    H = [V];

function Y(e, t, n) {
    return (
        !(
            (0, o.Z)("canUserUse", t) ||
            (null != t && t.isPremiumWithFractionalPremiumOnly() && B.includes(e)) ||
            (n && H.includes(e))
        ) && e.getFeatureValue(t)
    );
}
