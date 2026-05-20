"use strict";
n.d(t, {
    ki: () => ts,
    Ke: () => eV,
    FY: () => t_,
    ff: () => tl,
    aZ: () => tC,
    Nc: () => e8,
    Rr: () => tc,
    YE: () => A.YE,
    OU: () => eZ,
    qn: () => tS,
    CC: () => A.CC,
    iv: () => tx,
    RH: () => eK,
    jh: () => tr,
    FJ: () => eH,
    ee: () => tg,
    $k: () => tt,
    VA: () => tG,
    Dd: () => ez,
    kX: () => e7,
    To: () => tV,
    _e: () => e5,
    l6: () => eP,
    y8: () => ex,
    re: () => th,
    nB: () => eq,
    pb: () => eU,
    Zb: () => e6,
    nK: () => tw,
    mv: () => tv,
    Tm: () => eX,
    J$: () => te,
    Pg: () => tA,
    D8: () => eB,
    TW: () => A.ki,
    $Q: () => ek,
    aE: () => tm,
    L_: () => tk,
    Uf: () => tn,
    sS: () => ti,
    ji: () => e4,
    Q8: () => e9,
    Mn: () => eY,
    m6: () => ej,
    Em: () => tL,
    xq: () => e1,
    Ge: () => tu,
    Of: () => tE,
    tW: () => tp,
    mH: () => tD,
    Ay: () => tB,
    EL: () => ew,
    bx: () => eJ,
    Zw: () => eW,
    Om: () => tT,
    GX: () => tI,
    UC: () => eG,
    JM: () => eM,
    e1: () => tM,
    PK: () => ta,
    z4: () => e2,
    LE: () => tf,
    ys: () => e3,
    U8: () => eF,
    tS: () => td,
    EJ: () => tN,
}),
    n(667532),
    n(321073);
var i,
    r,
    s,
    a = n(284009),
    o = n.n(a),
    l = n(989349),
    u = n.n(l),
    c = n(17928),
    d = n(441574),
    _ = n(975807),
    f = n(366999),
    h = n(968671),
    p = n(626584),
    E = n(367888),
    m =
        (((i = {}).ANIMATED_EMOJIS = "animatedEmojis"),
        (i.EMOJIS_EVERYWHERE = "emojisEverywhere"),
        (i.STICKERS_EVERYWHERE = "stickersEverywhere"),
        (i.SOUNDBOARD_EVERYWHERE = "soundboardEverywhere"),
        (i.ANIMATED_AVATAR = "animatedAvatar"),
        (i.CUSTOM_DISCRIMINATOR = "customDiscriminator"),
        (i.PREMIUM_GUILD_MEMBER_PROFILE = "premiumGuildMemberProfile"),
        (i.PROFILE_PREMIUM_FEATURES = "profilePremiumFeatures"),
        (i.STREAM_MID_QUALITY = "streamMidQuality"),
        (i.STREAM_HIGH_QUALITY = "streamHighQuality"),
        (i.VIDEO_FILTER_ASSETS = "videoFilterAssets"),
        (i.INCREASED_FILE_UPLOAD_SIZE = "increasedFileUploadSize"),
        (i.INCREASED_GUILD_LIMIT = "increasedGuildLimit"),
        (i.INCREASED_MESSAGE_LENGTH = "increasedMessageLength"),
        (i.NITRO_REACTION_TOGGLE = "nitroReactionToggle"),
        (i.CLIENT_THEMES = "clientThemes"),
        (i.PREMIUM_COLLECTIBLES = "premiumCollectibles"),
        (i.CUSTOM_CALL_SOUNDS = "customCallSounds"),
        (i.CUSTOM_NOTIFICATION_SOUNDS = "customNotificationSounds"),
        (i.SAVED_MESSAGES = "savedMessages"),
        (i.PREMIUM_VOICE_FILTERS = "premiumVoiceFilters"),
        (i.APP_ICONS = "appIcons"),
        (i.CHAT_WALLPAPERS = "chatWallpapers"),
        (i.QUEST_ORB_MULTIPLIER = "questOrbMultiplier"),
        i),
    g = n(683760),
    A = n(474090),
    I = n(652215),
    T = n(788868);
function S(e) {
    if (null == e) return I.TbF;
    let t = g.A.getPremiumTypeOverride();
    return e.isStaff() && t === T.$I
        ? I.mu
        : null != e.premiumType && (0, A.ki)(e)
          ? T.f5[e.premiumType].fileSize
          : I.TbF;
}
class N {
    name;
    description;
    getFeatureValue;
    constructor(e, t, n) {
        (this.name = e),
            (this.description = n),
            (this.getFeatureValue = t),
            Object.defineProperty(this, "getFeatureValue", { value: t, configurable: !1, writable: !1 });
    }
}
class y {
    skuId;
    skuFeatures;
    constructor(e, t) {
        (this.skuId = e), (this.skuFeatures = t);
    }
}
var C = n(945810),
    v =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (r[(r.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        r);
let O = (0, C.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var R = n(349871);
let b = new p.A("ProductCatalog.tsx");
class D extends N {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = T.u0[t.premiumType];
                        if (null == n)
                            return (
                                b.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = es[n];
                        if (null == i)
                            return (
                                b.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        b.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let L = new D(m.ANIMATED_EMOJIS),
    w = new D(m.EMOJIS_EVERYWHERE),
    M = new D(m.STICKERS_EVERYWHERE),
    P = new D(m.SOUNDBOARD_EVERYWHERE),
    x = new D(m.CUSTOM_CALL_SOUNDS),
    U = new D(m.PREMIUM_VOICE_FILTERS),
    k = new D(m.ANIMATED_AVATAR),
    G = new D(m.CUSTOM_DISCRIMINATOR),
    F = new D(m.PREMIUM_GUILD_MEMBER_PROFILE),
    V = new D("profileBadges"),
    B = new D(m.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    H = new D("collectibles"),
    j = new D("appIcons"),
    Y = new D(m.CLIENT_THEMES),
    W = new D("boostDiscount"),
    K = new D("freeBoosts"),
    z = new D(m.STREAM_MID_QUALITY),
    $ = new D(m.STREAM_HIGH_QUALITY),
    q = new D(m.CUSTOM_NOTIFICATION_SOUNDS),
    Z = new D("fancyVoiceChannelReactions"),
    X = new D("installPremiumApplications"),
    Q = new D("redeemPremiumPerks"),
    J = new D(m.VIDEO_FILTER_ASSETS);
new N(m.INCREASED_FILE_UPLOAD_SIZE, S);
let ee = new D(m.INCREASED_GUILD_LIMIT),
    et = new D(m.INCREASED_MESSAGE_LENGTH),
    en = new D("increasedVideoUploadQuality"),
    ei = new D("uploadLargeFiles"),
    er = new D(m.QUEST_ORB_MULTIPLIER),
    es = Object.freeze({
        [T.pe.TIER_0]: new y(T.pe.TIER_0, [L, w, M, V, J, en, ei, j]),
        [T.pe.TIER_1]: new y(T.pe.TIER_1, [L, w, k, G, V, W, z, Z, en, ei, j]),
        [T.pe.TIER_2]: new y(T.pe.TIER_2, [
            L,
            w,
            M,
            P,
            x,
            k,
            G,
            F,
            V,
            B,
            Y,
            W,
            K,
            z,
            $,
            Z,
            X,
            Q,
            J,
            ee,
            et,
            en,
            ei,
            j,
            H,
            q,
            U,
            er,
        ]),
    }),
    ea = [W, K],
    eo = [er],
    el = [],
    eu = new Map([
        [L, d.bb.ANIMATED_EMOJIS],
        [w, d.bb.EMOJIS_EVERYWHERE],
        [M, d.bb.STICKERS_EVERYWHERE],
        [P, d.bb.SOUNDBOARD_EVERYWHERE],
        [x, d.bb.CUSTOM_CALL_SOUNDS],
        [U, d.bb.PREMIUM_VOICE_FILTERS],
        [k, d.bb.ANIMATED_AVATAR],
        [G, d.bb.CUSTOM_DISCRIMINATOR],
        [F, d.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [B, d.bb.PROFILE_PREMIUM_FEATURES],
        [H, d.bb.PREMIUM_COLLECTIBLES],
        [Y, d.bb.CLIENT_THEMES],
        [z, d.bb.STREAM_MID_QUALITY],
        [$, d.bb.STREAM_HIGH_QUALITY],
        [J, d.bb.VIDEO_FILTER_ASSETS],
        [ee, d.bb.INCREASED_GUILD_LIMIT],
        [et, d.bb.INCREASED_MESSAGE_LENGTH],
        [ei, d.bb.INCREASED_FILE_UPLOAD_SIZE],
        [V, d.bb.PROFILE_BADGES],
        [j, d.bb.APP_ICONS],
        [W, d.bb.BOOST_DISCOUNT],
        [K, d.bb.FREE_BOOSTS],
        [X, d.bb.INSTALL_PREMIUM_APPLICATIONS],
        [en, d.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function ec(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && ea.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && eo.includes(e)) ||
        (n && el.includes(e))
    )
        return !1;
    let i = eu.get(e);
    if (null != i && t?.perks != null) {
        let n = O.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== v.CONTROL) {
            let r = e.getFeatureValue(t),
                s = (0, R.Nh)(t?.perks, i);
            return n === v.DUAL_READ_RETURN_NEW ? s : r;
        }
    }
    return e.getFeatureValue(t);
}
var ed = n(906023),
    e_ = n(832946),
    ef = n(287809),
    eh = n(615405),
    ep = n(295405),
    eE = n(97352),
    em = n(166403),
    eg = n(739508),
    eA = n(58703),
    eI = n(927813),
    eT = n(255438),
    eS = n(723702),
    eN = n(580630),
    ey = n(88001),
    eC = n(818348),
    ev = n(375708),
    eO = n(466919);
let eR = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    eb = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    eD = new p.A("PremiumUtils.tsx");
var eL = (((s = {}).MID = "mid"), (s.HIGH = "high"), s);
function ew(e) {
    return e.items.find((e) => T.JM.has(e.planId));
}
function eM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = ep.A.defaultPaymentSourceId ?? void 0,
        a = em.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        ex(e, t, n, { paymentSourceId: s, currency: i }, r)
    );
}
function eP(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function ex(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: s, currency: a, contextPlanPrices: o } = i;
    if (null != o) {
        let t = o[e];
        if (null != t)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != eE.A.get(e)) {
        let i = I.lid.DEFAULT;
        n ? (i = I.lid.GIFT) : t && (i = I.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: I.lid.DEFAULT },
                r = eU(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    eD.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let s = r.find((e) => e.currency === i.toLowerCase());
                return null != s
                    ? s
                    : null != t
                      ? eU(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: s, purchaseType: i, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, eg.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: i.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (r && (0, eg.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function eU(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: I.lid.DEFAULT },
        i = (function (e, t) {
            let n = eE.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, eg.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (eD.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            eD.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                eD.info(`prices: ${r}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, eg.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        eD.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, eg.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function ek(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function eG(e, t, n) {
    let i,
        r,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, E._1)(e);
    null != a && (i = T.hd[a.planId].premiumType);
    let o = (0, A.CC)(i, T.PremiumTypes.TIER_0),
        l = (0, A.CC)(i, T.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = T.pW.has(i.planId) ? l : !T.JM.has(i.planId) && o),
            (e = void 0 === n ? eM(i.planId, r, !1, t) : ex(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity);
    }
    return ek(s);
}
function eF(e, t, n, i) {
    return (
        null === t && (o()(null !== e, "Subscription can't be null"), (t = [])), eG(null !== e ? tm(e, t) : tg(t), n, i)
    );
}
function eV(e) {
    switch (e) {
        case T.Ff.MONTH:
            return ev.intl.string(ev.t.FPybU7);
        case T.Ff.YEAR:
            return ev.intl.string(ev.t.tfqrhj);
        case T.Ff.DAY:
        case T.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function eB(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : T.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case T.WT.MONTH:
                let a = ev.intl.formatToPlainString(s === T.PremiumTypes.TIER_0 ? ev.t.NPKsLz : ev.t.poEovT, {
                    timeInterval: ev.intl.string(ev.t.FPybU7),
                });
                return r ? a : ev.intl.string(ev.t.Mh9bTt);
            case T.WT.YEAR:
                let o = ev.intl.formatToPlainString(s === T.PremiumTypes.TIER_0 ? ev.t.NPKsLz : ev.t.poEovT, {
                    timeInterval: ev.intl.string(ev.t.tfqrhj),
                });
                return r ? o : ev.intl.string(ev.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case T.WT.MONTH:
            if (1 !== i) return ev.intl.formatToPlainString(ev.t["0UlZnH"], { intervalCount: i });
            return ev.intl.string(ev.t.DKzs96);
        case T.WT.YEAR:
            return ev.intl.string(ev.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eH(e) {
    switch (e) {
        case T.WT.MONTH:
            return ev.intl.string(ev.t.FPybU7);
        case T.WT.YEAR:
            return ev.intl.string(ev.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function ej(e) {
    let t = T.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, eg.pM)(n, { tags: { planId: e } }), n);
}
function eY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case T.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? ev.intl.format(ev.t.TZXHNj, { duration: i })
                : n
                  ? ev.intl.string(ev.t["81iAgs"])
                  : ev.intl.string(ev.t["0efVPy"]);
        case T.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? ev.intl.format(ev.t.eqRhC7, { duration: i })
                : n
                  ? ev.intl.string(ev.t.UvzqY1)
                  : ev.intl.string(ev.t.eoVuBn);
        case T.gD.PREMIUM_MONTH_TIER_1:
            return n ? ev.intl.string(ev.t["g/dH5g"]) : ev.intl.string(ev.t["7O6qSq"]);
        case T.gD.PREMIUM_YEAR_TIER_1:
            return n ? ev.intl.string(ev.t.pdZJaq) : ev.intl.string(ev.t.Md5xbi);
        case T.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? ev.intl.format(ev.t.aI6QXz, { duration: i })
                : n
                  ? ev.intl.string(ev.t.SmVbHc)
                  : ev.intl.string(ev.t.FKYNC6);
        case T.gD.PREMIUM_GROUP_MONTH:
            return n ? ev.intl.string(ev.t.SmVbHc) : ev.intl.string(ev.t.FKYNC6);
        case T.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? ev.intl.format(ev.t["1wBcPi"], { duration: i })
                : n
                  ? ev.intl.string(ev.t.JIq4O1)
                  : ev.intl.string(ev.t["cfu/5d"]);
        case T.gD.PREMIUM_3_MONTH_TIER_2:
            return ev.intl.string(ev.t.wCbINr);
        case T.gD.PREMIUM_6_MONTH_TIER_2:
            return ev.intl.string(ev.t["e3/ArU"]);
        case T.gD.PREMIUM_MONTH_GUILD:
            return n ? ev.intl.string(ev.t["6ZR3By"]) : ev.intl.string(ev.t["h80cx/"]);
        case T.gD.PREMIUM_YEAR_GUILD:
            return n ? ev.intl.string(ev.t.YDpAzZ) : ev.intl.string(ev.t.ZHkls0);
        case T.gD.PREMIUM_3_MONTH_GUILD:
            return ev.intl.string(ev.t.EZHHB6);
        case T.gD.PREMIUM_6_MONTH_GUILD:
            return ev.intl.string(ev.t.X2KDO2);
        case T.gD.PREMIUM_MONTH_LEGACY:
            return ev.intl.string(ev.t.PD6k79);
        case T.gD.PREMIUM_YEAR_LEGACY:
            return ev.intl.string(ev.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, eg.pM)(r, { tags: { planId: e } }), r);
}
function eW(e) {
    switch (e) {
        case T.pe.TIER_0:
            return ev.intl.string(ev.t["t9uG/o"]);
        case T.pe.TIER_1:
            return ev.intl.string(ev.t.FSOz78);
        case T.pe.TIER_2:
            return ev.intl.string(ev.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, eg.pM)(t, { tags: { skuId: e } }), t);
}
function eK(e) {
    let t = T.hd[e]?.premiumType,
        n = null != t ? T.Mr[t] : null;
    if (null != n) return ev.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, eg.pM)(i, { tags: { planId: e } }), i);
}
function ez(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case T.PremiumTypes.TIER_0:
            return t ? "Basic" : ev.intl.string(ev.t["t9uG/o"]);
        case T.PremiumTypes.TIER_1:
            return t ? "Classic" : ev.intl.string(ev.t.FSOz78);
        case T.PremiumTypes.TIER_2:
            return ev.intl.string(ev.t.lG6a5x);
    }
}
function e$(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: s,
            activeDiscountInfo: a,
            renewalInvoiceWithoutEntitlementsPreview: o,
            renewalInvoiceWithEntitlementsPreview: l,
            hasFractionalPremiumWithSub: c,
        } = e,
        d = T.hd[n],
        f = tb(eM(d.id), d.interval),
        h = null != l && 0 === l.subtotal,
        p =
            ts(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !ef.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        E = null != i && null == t.paymentGateway,
        m = t.status === I.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === I.lT7.OPEN,
        g = p ? I.Dmq.CANCELED : m ? I.Dmq.UNPAID : t.status,
        A = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        S = T.M4 + (r ? eJ(t.additionalPlans) : 0),
        N = E
            ? A
                ? ev.intl.format(ev.t["cd+hqB"], { price: i })
                : ev.intl.format(ev.t.NUkcpF, { price: i })
            : ev.intl.string(ev.t.zYx3Y6),
        y = E
            ? A
                ? ev.intl.format(ev.t.VsKcFB, { price: i })
                : ev.intl.format(ev.t.hJ5xEX, { price: i })
            : ev.intl.string(ev.t["8rSipI"]),
        C = E
            ? A
                ? ev.intl.format(ev.t["jRy6/J"], { price: i, num: S })
                : ev.intl.format(ev.t.tTNE8M, { price: i, num: S })
            : ev.intl.format(ev.t["U+z/HJ"], { num: S });
    switch (n) {
        case T.gD.PREMIUM_MONTH_TIER_0:
        case T.gD.PREMIUM_YEAR_TIER_0:
            switch (g) {
                case I.Dmq.CANCELED:
                    return E
                        ? A
                            ? ev.intl.format(ev.t["USi/nc"], { price: i })
                            : ev.intl.format(ev.t["FS//l2"], { price: i })
                        : ev.intl.string(ev.t.JshLzq);
                case I.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? ev.intl.format(ev.t["5mv+2i"], { price: i })
                            : ev.intl.format(ev.t.nkAEfZ, { price: i })
                        : ev.intl.format(ev.t.SsLIXS, {});
                case I.Dmq.UNPAID:
                    return ev.intl.format(ev.t.cmkbFB, {});
                case I.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? ev.intl.format(ev.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : ev.intl.format(ev.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case I.Dmq.PAUSED:
                    if (c) return N;
                    return ev.intl.format(ev.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case I.Dmq.PAST_DUE:
                    return ev.intl.format(ev.t["d+0vwo"], {
                        endDate: (0, eA.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return N;
            }
        case T.gD.PREMIUM_MONTH_TIER_1:
        case T.gD.PREMIUM_YEAR_TIER_1:
            switch (g) {
                case I.Dmq.CANCELED:
                    return E
                        ? A
                            ? ev.intl.format(ev.t.cXy8Bp, { price: i })
                            : ev.intl.format(ev.t["C/XsHt"], { price: i })
                        : ev.intl.string(ev.t.K6tYFa);
                case I.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? ev.intl.format(ev.t.HBkIBi, { price: i })
                            : ev.intl.format(ev.t.ZsO1Sx, { price: i })
                        : ev.intl.format(ev.t["0+/WH7"], {});
                case I.Dmq.UNPAID:
                    return ev.intl.format(ev.t.McIzwj, {});
                case I.Dmq.PAUSE_PENDING:
                    let O = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != O
                        ? ev.intl.format(ev.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: O })
                        : ev.intl.format(ev.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case I.Dmq.PAUSED:
                    if (c) return y;
                    return ev.intl.format(ev.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case I.Dmq.PAST_DUE:
                    return ev.intl.format(ev.t["d+0vwo"], {
                        endDate: (0, eA.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return y;
            }
        case T.gD.PREMIUM_MONTH_TIER_2:
        case T.gD.PREMIUM_YEAR_TIER_2:
        case T.gD.PREMIUM_3_MONTH_TIER_2:
        case T.gD.PREMIUM_6_MONTH_TIER_2:
        case T.gD.PREMIUM_GROUP_MONTH:
            switch (g) {
                case I.Dmq.CANCELED:
                    return E
                        ? A
                            ? ev.intl.format(ev.t.xoFgRh, { price: i, num: S })
                            : ev.intl.format(ev.t.nXdbKo, { price: i, num: S })
                        : ev.intl.format(ev.t.EcSdRH, { num: S });
                case I.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? ev.intl.format(ev.t["5C/0QG"], { price: i, num: S })
                            : ev.intl.format(ev.t.xfYkhu, { price: i, num: S })
                        : ev.intl.format(ev.t.ivjxcn, { num: S });
                case I.Dmq.UNPAID:
                    return ev.intl.format(ev.t["0HopYf"], { num: S });
                case I.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? ev.intl.format(ev.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : ev.intl.format(ev.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case I.Dmq.PAUSED:
                    if (c) return C;
                    return ev.intl.format(ev.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case I.Dmq.BILLING_RETRY:
                    return ev.intl.format(ev.t["IlJ/HV"], {
                        endDate: u()(t.currentPeriodStart).add(T.bx, "days").toDate(),
                    });
                case I.Dmq.PAST_DUE:
                    return ev.intl.format(ev.t["d+0vwo"], {
                        endDate: (0, eA.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === T.gD.PREMIUM_YEAR_TIER_2
                            ? ev.intl.format(ev.t["+qqh6g"], { percent: a?.percentage ?? T.Cq, regularPrice: f })
                            : A
                              ? ev.intl.formatToPlainString(ev.t["3ZiutU"], {
                                    percent: a?.percentage ?? T._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? T.OJ,
                                })
                              : ev.intl.formatToPlainString(ev.t["G6+XOT"], {
                                    percent: a?.percentage ?? T._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? T.OJ,
                                })
                        : C;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function eq(e) {
    var t, n, i;
    let r,
        s,
        {
            renewalInvoicePreview: a,
            renewalInvoiceWithEntitlementsPreview: l,
            subscription: u,
            planId: c,
            includePremiumGuilds: d = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: f,
            hasFractionalPremiumWithSub: h = !1,
        } = e,
        p = eE.A.get(c);
    return (
        o()(null != p, "Missing plan"),
        e$({
            subscription: u,
            planId: p.id,
            price:
                ((t = a),
                (n = u),
                (i = p),
                (s =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? ex(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, eN.CE)((0, eN.$g)(s, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: d,
            hasDiscountApplied: _,
            activeDiscountInfo: f,
            renewalInvoiceWithoutEntitlementsPreview: a,
            renewalInvoiceWithEntitlementsPreview: l,
            hasFractionalPremiumWithSub: h,
        })
    );
}
function eZ(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, e_.m1)(t) ? null : eY(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return T.pW.has(t);
        }),
        s = r?.planId === T.gD.PREMIUM_MONTH_GUILD || r?.planId === T.gD.PREMIUM_YEAR_GUILD ? ev.t.Pi5yMJ : null,
        a = null != s ? ev.intl.formatToPlainString(s, { num: r?.quantity }) : void 0;
    if (null != i && null != a)
        return ev.intl.formatToPlainString(ev.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: a });
    if (null != i) return i;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function eX(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === T.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case T.pe.TIER_0:
            s = [T.gD.PREMIUM_YEAR_TIER_0, T.gD.PREMIUM_MONTH_TIER_0];
            break;
        case T.pe.TIER_1:
            s = [T.gD.PREMIUM_MONTH_TIER_1];
            break;
        case T.pe.TIER_2:
            s = [T.gD.PREMIUM_YEAR_TIER_2, T.gD.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== r) {
        let e = s.indexOf(r);
        s.splice(e, 1), s.unshift(r);
    }
    return s;
}
function eQ(e) {
    let t = T.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, eg.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eJ(e) {
    let t = eE.A.getPlanIdsForSkus([tD(T.pe.GUILD)]);
    o()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e0 = new Set([
    T.gD.NONE_MONTH,
    T.gD.NONE_3_MONTH,
    T.gD.NONE_6_MONTH,
    T.gD.NONE_YEAR,
    T.gD.PREMIUM_MONTH_TIER_0,
    T.gD.PREMIUM_MONTH_TIER_1,
    T.gD.PREMIUM_MONTH_TIER_2,
    T.gD.PREMIUM_YEAR_TIER_0,
    T.gD.PREMIUM_YEAR_TIER_1,
    T.gD.PREMIUM_YEAR_TIER_2,
    T.gD.PREMIUM_3_MONTH_TIER_2,
    T.gD.PREMIUM_6_MONTH_TIER_2,
    T.gD.PREMIUM_GROUP_MONTH,
]);
function e1(e) {
    return e0.has(e);
}
function e2(e) {
    return T.pW.has(e);
}
function e3(e) {
    return e1(e) || e2(e);
}
function e6(e) {
    return null != e && e === T.gD.PREMIUM_GROUP_MONTH;
}
function e4(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = u()(e.metadata.apple_grace_period_expires_date);
        return { days: u().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = u()(e.metadata.google_grace_period_expires_date),
            n = u()(e.metadata.google_original_expires_date);
        return { days: u().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? T.U1 : T.L9;
        return { days: t, expiresDate: u()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: u()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: u()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? T.a5 : T.EV;
        return { days: t, expiresDate: u()(e.currentPeriodStart).add(t, "days") };
    }
}
function e5(e, t, n, i) {
    let r = u()(i ? void 0 : e);
    if (t.length > 0) {
        let e = tP(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = u()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function e7(e) {
    let t = tP(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === T.xc.NONE)) return "";
    let n = { days: ev.t.fYmirx, hours: ev.t["C3RO+g"], minutes: ev.t.r77oHc },
        i = (0, f.Vb)((0, eA.Tf)(0, t * eI.A.Millis.HOUR));
    return (0, eA.uN)(i, n);
}
function e8(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === I.Dmq.PAST_DUE;
}
function e9(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t =
                e.renewalMutations.planId !== e.planId
                    ? ev.intl.string(ev.t["0rzJ4J"])
                    : ev.intl.string(ev.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = ev.intl.string(ev.t.a9Mdb3)),
        t
    );
}
function te(e) {
    if (null == e) return !1;
    let t = ep.A.getPaymentSource(e);
    return null != t && eC.AD.has(t.type);
}
function tt(e) {
    return e.isPurchasedExternally
        ? e.status === I.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eJ(n);
              return 0 === (null != t ? eJ(t.additionalPlans) : null) && 0 !== r ? I.Dmq.CANCELED : i;
          })(e) === I.Dmq.CANCELED;
}
function tn(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: r, fractionalPremiumInfo: s } = e,
        { planId: a, additionalPlans: l } = t,
        u = eE.A.get(a);
    o()(null != u, "Missing plan");
    let c = eJ(l),
        d = to(t.planId, t.paymentSourceId, t.currency, n).amount * c;
    if (null != r) {
        let e = r.invoiceItems.find((e) => T.pW.has(e.subscriptionPlanId));
        null != e && (d = e.amount);
    }
    i = i ?? (0, eN.$g)(d, t.currency);
    let f = r?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (tt(t))
        return t.isPurchasedViaGoogle
            ? ev.intl.format(ev.t["3/WTrI"], { quantity: c })
            : f
              ? ev.intl.format(ev.t["0ozBSB"], { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) })
              : ev.intl.format(ev.t["yjsv/s"], { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) });
    switch (t.status) {
        case I.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? ev.intl.format(ev.t.Nlf3nc, { quantity: c, boostQuantity: c })
                : f
                  ? ev.intl.format(ev.t.oiRy7v, {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eN.CE)(i, u.interval, u.intervalCount),
                    })
                  : ev.intl.format(ev.t["0QxOAi"], {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eN.CE)(i, u.interval, u.intervalCount),
                    });
        case I.Dmq.PAUSE_PENDING:
        case I.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return ev.intl.string(ev.t.CduWAm);
            return ev.intl.format(ev.t["5iud9s"], { quantity: c });
        case I.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return ev.intl.format(ev.t["d+0vwo"], {
                    endDate: (0, eA.i$)(e4(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? ev.intl.format(ev.t["5iud9s"], { quantity: c })
                : f
                  ? ev.intl.format(ev.t.eDwrLA, { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) })
                  : ev.intl.format(ev.t.ijSDcI, { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) });
    }
}
function ti(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = ex(e.id, !1, r, t);
        } catch {
            i = eM(e.id, !1, r);
        }
    else i = eM(e.id, !1, r);
    let s = (0, eN.$g)(i.amount, i.currency);
    return e.currency !== eC.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function tr(e, t, n) {
    let i = ti(e, t, n);
    return (0, eN.CE)(i, e.interval, e.intervalCount);
}
function ts(e) {
    let { status: t, renewalMutations: n } = e;
    return t === I.Dmq.CANCELED || (null != n && (0, e_.m1)(n.planId) && !e.isPurchasedExternally);
}
function ta(e) {
    return e === I.Dmq.PAST_DUE || e === I.Dmq.ACCOUNT_HOLD || e === I.Dmq.BILLING_RETRY;
}
function to(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: eh.A.ipCountryCodeWithFallback, currency: n },
        s = eE.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, eg.pM)(t, { tags: { planId: e } }), t);
    }
    let a = eE.A.getForSkuAndInterval(tD(T.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, eg.pM)(t, { tags: { planId: e } }), t);
    }
    return ex(a.id, (0, A.ki)(i), !1, r);
}
function tl(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case T.gD.PREMIUM_MONTH_TIER_0:
                return ev.intl.string(ev.t["0ggVqN"]);
            case T.gD.PREMIUM_YEAR_TIER_0:
                return ev.intl.string(ev.t["jm+ZQw"]);
            case T.gD.PREMIUM_MONTH_TIER_1:
                return ev.intl.string(ev.t.uph4Jx);
            case T.gD.PREMIUM_YEAR_TIER_1:
                return ev.intl.string(ev.t["D/l7Yt"]);
            case T.gD.PREMIUM_MONTH_TIER_2:
            case T.gD.PREMIUM_GROUP_MONTH:
                return ev.intl.string(ev.t["5l1MuV"]);
            case T.gD.PREMIUM_YEAR_TIER_2:
                return ev.intl.string(ev.t.G0mISV);
        }
    switch (i) {
        case T.gD.PREMIUM_MONTH_TIER_0:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["/G3aKw"]);
        case T.gD.PREMIUM_YEAR_TIER_0:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["2eQpsL"]);
        case T.gD.PREMIUM_MONTH_TIER_1:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t.gueLg5);
        case T.gD.PREMIUM_YEAR_TIER_1:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["MhH/vW"]);
        case T.gD.PREMIUM_MONTH_TIER_2:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t.LQVQIq);
        case T.gD.PREMIUM_GROUP_MONTH:
            return ev.intl.formatToPlainString(eO.default.LwdrNi, { premiumGroupProductName: (0, ey.DP)() });
        case T.gD.PREMIUM_YEAR_TIER_2:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["0nfg1x"]);
        case T.gD.PREMIUM_3_MONTH_TIER_2:
        case T.gD.PREMIUM_6_MONTH_TIER_2:
            return ev.intl.formatToPlainString(ev.t.BCD4fT, { intervalCount: t.intervalCount });
        case T.gD.NONE_MONTH:
        case T.gD.NONE_YEAR:
        case T.gD.NONE_3_MONTH:
        case T.gD.NONE_6_MONTH:
        case T.gD.PREMIUM_MONTH_GUILD:
        case T.gD.PREMIUM_YEAR_GUILD:
        case T.gD.PREMIUM_3_MONTH_GUILD:
        case T.gD.PREMIUM_6_MONTH_GUILD:
            return ev.intl.string(ev.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, eg.pM)(r, { tags: { planId: i } }), r);
}
function tu(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = eE.A.get(t);
    return o()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function tc() {
    let e = eC.Yr.USD;
    try {
        e = eM(T.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function td(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? ev.intl.formatToPlainString(ev.t.fRNBRX, { weeks: n / 7 })
                    : ev.intl.formatToPlainString(ev.t.EIpHEj, { weeks: n / 7 });
            return i
                ? ev.intl.formatToPlainString(ev.t["6Cdzoy"], { days: n })
                : ev.intl.formatToPlainString(ev.t["kbBj/h"], { days: n });
        case T.WT.MONTH:
            return i
                ? ev.intl.formatToPlainString(ev.t.x5MgxS, { months: n })
                : ev.intl.formatToPlainString(ev.t["4SEnCZ"], { months: n });
        case T.WT.YEAR:
            return i
                ? ev.intl.formatToPlainString(ev.t["h+63yl"], { years: n })
                : ev.intl.formatToPlainString(ev.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function t_(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1 } = e,
        i = tc(),
        r = (0, eN.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0) return ev.intl.formatToPlainString(ev.t.C6i5Jt, { weeks: n / 7, price: r });
            return ev.intl.formatToPlainString(ev.t.cR9ifw, { days: n, price: r });
        case T.WT.MONTH:
            return ev.intl.formatToPlainString(ev.t["8FZfNo"], { months: n, price: r });
        case T.WT.YEAR:
            return ev.intl.formatToPlainString(ev.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tf(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return t_({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function th(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? ev.intl.formatToPlainString(ev.t.iVZYyl, { weeks: n / 7 })
                    : ev.intl.formatToPlainString(ev.t.EmoBD2, { weeks: n / 7 });
            return i
                ? ev.intl.formatToPlainString(ev.t.jzH70Z, { days: n })
                : ev.intl.formatToPlainString(ev.t["k2UNz+"], { days: n });
        case T.WT.MONTH:
            return i
                ? ev.intl.formatToPlainString(ev.t.erUSmA, { months: n })
                : ev.intl.formatToPlainString(ev.t.kridzK, { months: n });
        case T.WT.YEAR:
            return i
                ? ev.intl.formatToPlainString(ev.t.IfYQVC, { years: n })
                : ev.intl.formatToPlainString(ev.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tp(e, t) {
    switch (e) {
        case I.kM_.APPLE_PARTNER:
        case I.kM_.APPLE_ADVANCED_COMMERCE:
        case I.kM_.APPLE:
            return eR[t];
        case I.kM_.GOOGLE:
            return eb[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tE(e, t) {
    return (0, A.ki)(e) || ta(t?.status);
}
function tm(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => T.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function tg(e) {
    return e.filter((e) => !T.JM.has(e.planId));
}
function tA(e, t, n, i) {
    o()(i.has(t), "Expected planId in group");
    let r = !1,
        s = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((r = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!r) {
        let i = { planId: t, quantity: n },
            r = e.items.find((e) => e.planId === t);
        null != r && (i.id = r.id), s.push(i);
    }
    return s.filter((e) => 0 !== e.quantity);
}
function tI(e, t) {
    return tA(e, t, 1, T.JM);
}
function tT(e, t, n) {
    return tA(e, n, t, T.pW);
}
function tS(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => T.JM.has(e.planId));
    if (null != t) {
        let n = eE.A.get(t.planId);
        o()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = eE.A.get(e.planId);
                if ((o()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = eE.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return o()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function tN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = T.f5[e].fileSize;
    return (0, eT.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function ty(e) {
    return null == e ? null : e.items.find((e) => T.pW.has(e.planId));
}
function tC(e) {
    let t = null != e ? ew(e) : null;
    return null != t ? eQ(t.planId) : null;
}
let tv = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function tO(e) {
    return ec(er, e);
}
function tR(e) {
    return ec(H, e);
}
function tb(e, t) {
    let n = (0, eN.$g)(e.amount, e.currency),
        i = eH(t);
    return `${n}/${i}`;
}
function tD(e) {
    return e;
}
function tL(e) {
    return "isNitroLocked" in e;
}
function tw() {
    let e = (0, c.bG)([ef.default], () => ef.default.getCurrentUser());
    return (0, A.YE)(e, T.PremiumTypes.TIER_2);
}
function tM(e) {
    var t;
    let n = T.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case T.Tt:
                return T.h7;
            case T.yo:
                return T.CA;
        }
    else;
    return n;
}
function tP(e) {
    return tx(e.map((e) => e.skuId));
}
function tx(e) {
    return e.reduce((e, t) => {
        let [n, i] = T.NL[t],
            r = 1;
        switch (n) {
            case T.T.HOUR:
                r = 1;
                break;
            case T.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let tU = (e) => {
        let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
            r = T.En[t.skuId];
        return null == r ? null : ex(r, !1, n, i);
    },
    tk = (e) => {
        let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
            { enabled: s } = ed.A.getConfig({ location: "getSavingsPercent" }),
            a = T.XE[t];
        return s && null != r && (a = tF(r, n, i)), a;
    };
function tG(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === T.WT.DAY || (t.interval === T.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tU({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let s = t.interval === T.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * s;
}
function tF(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === T.WT.YEAR) {
        try {
            if (((t = tU({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = ex(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tV(e) {
    return null == e ? 0 : Math.max((0, eA.m_)(new Date(), new Date(e)), 0);
}
let tB = Object.freeze({
    isNewUser: tv,
    isPremiumAtLeast: A.CC,
    isPremium: A.ki,
    isPremiumExactly: A.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: ex,
    getDefaultPrice: eM,
    getInterval: function (e) {
        let t = T.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, eg.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: eB,
    getIntervalStringAsNoun: eH,
    getPremiumType: ej,
    getTierDisplayNameByPlanId: eK,
    getDisplayName: eY,
    getPremiumPlanOptions: eX,
    formatInterval: function (e) {
        if (e === T.WT.YEAR) return ev.intl.string(ev.t.tfqrhj);
        if (e === T.WT.MONTH) return ev.intl.string(ev.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: e$,
    isPremiumSku: function (e) {
        return e === T.pe.TIER_0 || e === T.pe.TIER_1 || e === T.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === T.WT.MONTH) return t;
        if (e === T.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: S,
    getSkuIdForPlan: eQ,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case T.PremiumTypes.TIER_0:
                return T.pe.TIER_0;
            case T.PremiumTypes.TIER_1:
                return T.pe.TIER_1;
            case T.PremiumTypes.TIER_2:
                return T.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return ej(e) === T.PremiumTypes.TIER_2 ? T.M4 : 0;
    },
    getBillingInformationString: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {
                          isFractionalPremiumActive: !1,
                          fetched: !0,
                          fractionalState: T.xc.NONE,
                          startsAt: u()(0),
                          endsAt: u()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: u()(0),
                          unactivatedUnits: [],
                      },
            s = null !== n && e.status === I.Dmq.PAST_DUE ? n : t,
            a = i
                ? (0, eN.$g)(
                      s.invoiceItems
                          .filter((e) => T.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, eN.$g)(s.total, s.currency);
        if (ef.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return ev.intl.format(ev.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === I.Dmq.CANCELED) return ev.intl.format(ev.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === I.Dmq.PAUSE_PENDING)
            return ev.intl.format(ev.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === I.Dmq.PAUSED)
            return r.fractionalState !== T.xc.NONE
                ? ev.intl.format(ev.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: a })
                : null == e.pauseEndsAt
                  ? i
                      ? ev.intl.format(ev.t.KTYQCg, { planName: ev.intl.string(ev.t.Ipxkog), price: a })
                      : ev.intl.string(ev.t.fMz6Lg)
                  : i
                    ? ev.intl.format(ev.t.zcgtzf, {
                          planName: ev.intl.string(ev.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: a,
                      })
                    : ev.intl.format(ev.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === I.Dmq.PAST_DUE) {
            let t = e4(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = u()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = u()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? ev.intl.format(ev.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: eC.qm[e.paymentGateway],
                      paymentSourceLink: tp(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : ev.intl.format(ev.t.qEIzyi, { endDate: t.toDate(), price: a });
        }
        {
            var o;
            if (e.status === I.Dmq.BILLING_RETRY)
                return ev.intl.format(ev.t.EMTLOT, {
                    endDate: u()(e.currentPeriodStart).add(T.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === I.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, eS.isAndroid)()
                    ? ev.intl.format(ev.t["dtcxw+"], {
                          endDate: u()(e.currentPeriodStart).add(T.ph, "days").toDate(),
                          paymentGatewayName: eC.qm[e.paymentGateway],
                          paymentSourceLink: tp(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : ev.intl.format(ev.t.EMTLOT, {
                          endDate: u()(e.currentPeriodStart).add(T.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (o = e).paymentSourceId && te(o.paymentSourceId))
                return ev.intl.format(ev.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === I.Dmq.UNPAID) return ev.intl.format(ev.t.CzTKom, { maxProcessingTimeInDays: T.G4 });
            if (e.isPurchasedExternally)
                return ev.intl.format(ev.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: eC.qm[e.paymentGateway],
                    subscriptionManagementLink: tp(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = e5(n, r.unactivatedUnits)),
                i
                    ? ev.intl.format(ev.t.Vl3cED, { planName: ev.intl.string(ev.t.Ipxkog), renewalDate: n, price: a })
                    : ev.intl.format(ev.t.Q18lRK, { renewalDate: n, price: a })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: e5,
    getUnactivatedFractionalPremiumDurationString: e7,
    isSwitchingPlansDisabled: e8,
    getSwitchingPlansDisabledMessage: e9,
    isNoneSubscription: e_.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === I.Dmq.CANCELED || e.status === I.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e1(t);
        });
        return null == i ||
            (0, e_.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === I.Dmq.CANCELED || e.status === I.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e1(t);
        });
        return (null == i || (0, e_.m1)(i.subscriptionPlanId)) && (n = I.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: ts,
    getPremiumGuildIntervalPrice: to,
    hasAccountCredit: function (e) {
        return (
            null != e &&
            0 !== e.size &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
        );
    },
    hasUnconsumedGiftForSubscriptionPlan: function (e, t) {
        return (
            null != e &&
            0 !== e.size &&
            null != t &&
            Array.from(e).some((e) => {
                let { subscriptionPlanId: n, parentId: i, consumed: r } = e;
                return null != n && null != i && !r && n === t;
            })
        );
    },
    getBillingReviewSubheader: tl,
    getIntervalForInvoice: tu,
    getPremiumPlanItem: ew,
    getGuildBoostPlanItem: ty,
    isBoostOnlySubscription: function (e) {
        return null != e && null == ew(e) && null != ty(e);
    },
    getPremiumSkuIdForSubscription: tC,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = ew(e);
            if (null != t) return ej(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tP,
    castPremiumSubscriptionAsSkuId: tD,
    calculateDiscountPercentageForYearlyPlan: tF,
    getDaysSincePremium: tV,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, eA.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return ec(L, e);
    },
    canUseEmojisEverywhere: function (e) {
        return ec(w, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return ec(P, e);
    },
    canUseCustomCallSounds: function (e) {
        return ec(x, e);
    },
    canUploadLargeFiles: function (e) {
        return ec(ei, e);
    },
    canUseBadges: function (e) {
        return ec(V, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return ec(en, e);
    },
    canEditDiscriminator: function (e) {
        return ec(G, e);
    },
    hasBoostDiscount: function (e) {
        return ec(W, e);
    },
    canUseAnimatedAvatar: function (e) {
        return ec(k, e);
    },
    canInstallPremiumApplications: function (e) {
        return ec(X, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return ec(et, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return ec(ee, e);
    },
    canRedeemPremiumPerks: function (e) {
        return ec(Q, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return ec(B, e);
    },
    canUsePremiumAppIcons: function (e) {
        return ec(j, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return ec(F, e);
    },
    canUseClientThemes: function (e) {
        return ec(Y, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? ec($, t) : "mid" === e && ec(z, t);
    },
    canUseQuestOrbMultiplier: tO,
    hasFreeBoosts: function (e) {
        return ec(K, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return ec(M, e);
    },
    canUseCustomBackgrounds: function (e) {
        return ec(J, e);
    },
    canUseCollectibles: tR,
    canUseMonthlyOrbs: function (e) {
        return !!(0, h.f0)("canUseMonthlyOrbs") && (0, R.Nh)(e?.perks, d.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ((0, h.f0)("canUseShopDiscounts") && (0, R.Nh)(e?.perks, d.bb.SHOP_DISCOUNTS)) || tR(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return ((0, h.f0)("canUseMoreQuestOrbs") && (0, R.Nh)(e?.perks, d.bb.MORE_QUEST_ORBS)) || tO(e);
    },
    formatPriceString: tb,
    StreamQuality: eL,
});
