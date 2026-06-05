"use strict";
n.d(t, {
    ki: () => tl,
    Ke: () => eH,
    FY: () => tp,
    ff: () => td,
    aZ: () => tO,
    Nc: () => tt,
    Rr: () => th,
    YE: () => T.YE,
    OU: () => eQ,
    qn: () => tv,
    CC: () => T.CC,
    iv: () => tG,
    RH: () => ez,
    jh: () => to,
    FJ: () => eY,
    ee: () => tT,
    $k: () => tr,
    VA: () => tB,
    Dd: () => eq,
    kX: () => te,
    To: () => tj,
    _e: () => e9,
    l6: () => ex,
    y8: () => eU,
    re: () => tm,
    nB: () => eZ,
    pb: () => eG,
    Zb: () => e5,
    Pr: () => ek,
    nK: () => tx,
    mv: () => tb,
    Tm: () => eJ,
    J$: () => ti,
    Pg: () => tS,
    D8: () => ej,
    TW: () => T.ki,
    $Q: () => eF,
    aE: () => tI,
    L_: () => tV,
    Uf: () => ts,
    sS: () => ta,
    ji: () => e7,
    Q8: () => tn,
    Mn: () => eK,
    m6: () => eW,
    Em: () => tP,
    xq: () => e3,
    Ge: () => t_,
    Of: () => tA,
    tW: () => tg,
    mH: () => tM,
    Ay: () => tY,
    EL: () => eM,
    bx: () => e1,
    Zw: () => e$,
    Om: () => tN,
    GX: () => ty,
    UC: () => eV,
    JM: () => eP,
    e1: () => tk,
    PK: () => tu,
    z4: () => e6,
    LE: () => tE,
    ys: () => e4,
    U8: () => eB,
    tS: () => tf,
    EJ: () => tC,
}),
    n(667532),
    n(321073);
var i,
    r,
    s,
    a = n(64700),
    o = n(284009),
    l = n.n(o),
    u = n(989349),
    c = n.n(u),
    d = n(17928),
    _ = n(441574),
    h = n(975807),
    f = n(366999),
    p = n(968671),
    E = n(626584),
    m = n(981088),
    g = n(367888),
    A =
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
    I = n(683760),
    T = n(474090),
    S = n(652215),
    y = n(788868);
function N(e) {
    if (null == e) return S.TbF;
    let t = I.A.getPremiumTypeOverride();
    return e.isStaff() && t === y.$I
        ? S.mu
        : null != e.premiumType && (0, T.ki)(e)
          ? y.f5[e.premiumType].fileSize
          : S.TbF;
}
class v {
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
class C {
    skuId;
    skuFeatures;
    constructor(e, t) {
        (this.skuId = e), (this.skuFeatures = t);
    }
}
var R = n(945810),
    O =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (r[(r.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        r);
let b = (0, R.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var D = n(349871);
let L = new E.A("ProductCatalog.tsx");
class w extends v {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = y.u0[t.premiumType];
                        if (null == n)
                            return (
                                L.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = eo[n];
                        if (null == i)
                            return (
                                L.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        L.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let M = new w(A.ANIMATED_EMOJIS),
    P = new w(A.EMOJIS_EVERYWHERE),
    x = new w(A.STICKERS_EVERYWHERE),
    k = new w(A.SOUNDBOARD_EVERYWHERE),
    U = new w(A.CUSTOM_CALL_SOUNDS),
    G = new w(A.PREMIUM_VOICE_FILTERS),
    F = new w(A.ANIMATED_AVATAR),
    V = new w(A.CUSTOM_DISCRIMINATOR),
    B = new w(A.PREMIUM_GUILD_MEMBER_PROFILE),
    H = new w("profileBadges"),
    j = new w(A.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    Y = new w("collectibles"),
    W = new w("appIcons"),
    K = new w(A.CLIENT_THEMES),
    $ = new w("boostDiscount"),
    z = new w("freeBoosts"),
    q = new w(A.STREAM_MID_QUALITY),
    X = new w(A.STREAM_HIGH_QUALITY),
    Z = new w(A.CUSTOM_NOTIFICATION_SOUNDS),
    Q = new w("fancyVoiceChannelReactions"),
    J = new w("installPremiumApplications"),
    ee = new w("redeemPremiumPerks"),
    et = new w(A.VIDEO_FILTER_ASSETS);
new v(A.INCREASED_FILE_UPLOAD_SIZE, N);
let en = new w(A.INCREASED_GUILD_LIMIT),
    ei = new w(A.INCREASED_MESSAGE_LENGTH),
    er = new w("increasedVideoUploadQuality"),
    es = new w("uploadLargeFiles"),
    ea = new w(A.QUEST_ORB_MULTIPLIER),
    eo = Object.freeze({
        [y.pe.TIER_0]: new C(y.pe.TIER_0, [M, P, x, H, et, er, es, W]),
        [y.pe.TIER_1]: new C(y.pe.TIER_1, [M, P, F, V, H, $, q, Q, er, es, W]),
        [y.pe.TIER_2]: new C(y.pe.TIER_2, [
            M,
            P,
            x,
            k,
            U,
            F,
            V,
            B,
            H,
            j,
            K,
            $,
            z,
            q,
            X,
            Q,
            J,
            ee,
            et,
            en,
            ei,
            er,
            es,
            W,
            Y,
            Z,
            G,
            ea,
        ]),
    }),
    el = [$, z],
    eu = [ea],
    ec = [],
    ed = new Map([
        [M, _.bb.ANIMATED_EMOJIS],
        [P, _.bb.EMOJIS_EVERYWHERE],
        [x, _.bb.STICKERS_EVERYWHERE],
        [k, _.bb.SOUNDBOARD_EVERYWHERE],
        [U, _.bb.CUSTOM_CALL_SOUNDS],
        [G, _.bb.PREMIUM_VOICE_FILTERS],
        [F, _.bb.ANIMATED_AVATAR],
        [V, _.bb.CUSTOM_DISCRIMINATOR],
        [B, _.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [j, _.bb.PROFILE_PREMIUM_FEATURES],
        [Y, _.bb.PREMIUM_COLLECTIBLES],
        [K, _.bb.CLIENT_THEMES],
        [q, _.bb.STREAM_MID_QUALITY],
        [X, _.bb.STREAM_HIGH_QUALITY],
        [et, _.bb.VIDEO_FILTER_ASSETS],
        [en, _.bb.INCREASED_GUILD_LIMIT],
        [ei, _.bb.INCREASED_MESSAGE_LENGTH],
        [es, _.bb.INCREASED_FILE_UPLOAD_SIZE],
        [H, _.bb.PROFILE_BADGES],
        [W, _.bb.APP_ICONS],
        [$, _.bb.BOOST_DISCOUNT],
        [z, _.bb.FREE_BOOSTS],
        [J, _.bb.INSTALL_PREMIUM_APPLICATIONS],
        [er, _.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function e_(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && el.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && eu.includes(e)) ||
        (n && ec.includes(e))
    )
        return !1;
    let i = ed.get(e);
    if (null != i && t?.perks != null) {
        let n = b.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== O.CONTROL) {
            let r = e.getFeatureValue(t),
                s = (0, D.Nh)(t?.perks, i);
            return n === O.DUAL_READ_RETURN_NEW ? s : r;
        }
    }
    return e.getFeatureValue(t);
}
var eh = n(906023),
    ef = n(832946),
    ep = n(287809),
    eE = n(615405),
    em = n(295405),
    eg = n(97352),
    eA = n(166403),
    eI = n(739508),
    eT = n(58703),
    eS = n(927813),
    ey = n(255438),
    eN = n(580630),
    ev = n(88001),
    eC = n(818348),
    eR = n(375708),
    eO = n(466919);
let eb = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    eD = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    eL = new E.A("PremiumUtils.tsx");
var ew = (((s = {}).MID = "mid"), (s.HIGH = "high"), s);
function eM(e) {
    return e.items.find((e) => y.JM.has(e.planId));
}
function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = em.A.defaultPaymentSourceId ?? void 0,
        a = eA.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        eU(e, t, n, { paymentSourceId: s, currency: i }, r)
    );
}
function ex(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function ek(e, t, n) {
    let i = a.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return a.useMemo(
        () => ({
            priceOptions: ex(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function eU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: s, currency: a, contextPlanPrices: o } = i;
    if (null != o) {
        let t = o[e],
            n = null != a && null != t && t.currency !== a;
        if (null != t && !n)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != eg.A.get(e)) {
        let i = S.lid.DEFAULT;
        n ? (i = S.lid.GIFT) : t && (i = S.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.lid.DEFAULT },
                r = eG(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    eL.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let s = r.find((e) => e.currency === i.toLowerCase());
                return null != s
                    ? s
                    : null != t
                      ? eG(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: s, purchaseType: i, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, eI.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: i.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (r && (0, eI.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function eG(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.lid.DEFAULT },
        i = (function (e, t) {
            let n = eg.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, eI.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (eL.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            eL.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                eL.info(`prices: ${r}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, eI.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        eL.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, eI.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function eF(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function eV(e, t, n) {
    let i,
        r,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, g._1)(e);
    null != a && (i = y.hd[a.planId].premiumType);
    let o = (0, T.CC)(i, y.PremiumTypes.TIER_0),
        l = (0, T.CC)(i, y.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = y.pW.has(i.planId) ? l : !y.JM.has(i.planId) && o),
            (e = void 0 === n ? eP(i.planId, r, !1, t) : eU(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity);
    }
    return eF(s);
}
function eB(e, t, n, i) {
    return (
        null === t && (l()(null !== e, "Subscription can't be null"), (t = [])), eV(null !== e ? tI(e, t) : tT(t), n, i)
    );
}
function eH(e) {
    switch (e) {
        case y.Ff.MONTH:
            return eR.intl.string(eR.t.FPybU7);
        case y.Ff.YEAR:
            return eR.intl.string(eR.t.tfqrhj);
        case y.Ff.DAY:
        case y.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function ej(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : y.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case y.WT.MONTH:
                let a = eR.intl.formatToPlainString(s === y.PremiumTypes.TIER_0 ? eR.t.NPKsLz : eR.t.poEovT, {
                    timeInterval: eR.intl.string(eR.t.FPybU7),
                });
                return r ? a : eR.intl.string(eR.t.Mh9bTt);
            case y.WT.YEAR:
                let o = eR.intl.formatToPlainString(s === y.PremiumTypes.TIER_0 ? eR.t.NPKsLz : eR.t.poEovT, {
                    timeInterval: eR.intl.string(eR.t.tfqrhj),
                });
                return r ? o : eR.intl.string(eR.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case y.WT.MONTH:
            if (1 !== i) return eR.intl.formatToPlainString(eR.t["0UlZnH"], { intervalCount: i });
            return eR.intl.string(eR.t.DKzs96);
        case y.WT.YEAR:
            return eR.intl.string(eR.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eY(e) {
    switch (e) {
        case y.WT.MONTH:
            return eR.intl.string(eR.t.FPybU7);
        case y.WT.YEAR:
            return eR.intl.string(eR.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function eW(e) {
    let t = y.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, eI.pM)(n, { tags: { planId: e } }), n);
}
function eK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case y.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? eR.intl.format(eR.t.TZXHNj, { duration: i })
                : n
                  ? eR.intl.string(eR.t["81iAgs"])
                  : eR.intl.string(eR.t["0efVPy"]);
        case y.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? eR.intl.format(eR.t.eqRhC7, { duration: i })
                : n
                  ? eR.intl.string(eR.t.UvzqY1)
                  : eR.intl.string(eR.t.eoVuBn);
        case y.gD.PREMIUM_MONTH_TIER_1:
            return n ? eR.intl.string(eR.t["g/dH5g"]) : eR.intl.string(eR.t["7O6qSq"]);
        case y.gD.PREMIUM_YEAR_TIER_1:
            return n ? eR.intl.string(eR.t.pdZJaq) : eR.intl.string(eR.t.Md5xbi);
        case y.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? eR.intl.format(eR.t.aI6QXz, { duration: i })
                : n
                  ? eR.intl.string(eR.t.SmVbHc)
                  : eR.intl.string(eR.t.FKYNC6);
        case y.gD.PREMIUM_GROUP_MONTH:
            return n
                ? eR.intl.string(eR.t.SmVbHc)
                : eR.intl.formatToPlainString(eO.default["8bPDtb"], { premiumGroupProductName: (0, ev.DP)() });
        case y.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? eR.intl.format(eR.t["1wBcPi"], { duration: i })
                : n
                  ? eR.intl.string(eR.t.JIq4O1)
                  : eR.intl.string(eR.t["cfu/5d"]);
        case y.gD.PREMIUM_3_MONTH_TIER_2:
            return eR.intl.string(eR.t.wCbINr);
        case y.gD.PREMIUM_6_MONTH_TIER_2:
            return eR.intl.string(eR.t["e3/ArU"]);
        case y.gD.PREMIUM_MONTH_GUILD:
            return n ? eR.intl.string(eR.t["6ZR3By"]) : eR.intl.string(eR.t["h80cx/"]);
        case y.gD.PREMIUM_YEAR_GUILD:
            return n ? eR.intl.string(eR.t.YDpAzZ) : eR.intl.string(eR.t.ZHkls0);
        case y.gD.PREMIUM_3_MONTH_GUILD:
            return eR.intl.string(eR.t.EZHHB6);
        case y.gD.PREMIUM_6_MONTH_GUILD:
            return eR.intl.string(eR.t.X2KDO2);
        case y.gD.PREMIUM_MONTH_LEGACY:
            return eR.intl.string(eR.t.PD6k79);
        case y.gD.PREMIUM_YEAR_LEGACY:
            return eR.intl.string(eR.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, eI.pM)(r, { tags: { planId: e } }), r);
}
function e$(e) {
    switch (e) {
        case y.pe.TIER_0:
            return eR.intl.string(eR.t["t9uG/o"]);
        case y.pe.TIER_1:
            return eR.intl.string(eR.t.FSOz78);
        case y.pe.TIER_2:
            return eR.intl.string(eR.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, eI.pM)(t, { tags: { skuId: e } }), t);
}
function ez(e) {
    let t = y.hd[e]?.premiumType,
        n = null != t ? y.Mr[t] : null;
    if (null != n) return eR.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, eI.pM)(i, { tags: { planId: e } }), i);
}
function eq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case y.PremiumTypes.TIER_0:
            return t ? "Basic" : eR.intl.string(eR.t["t9uG/o"]);
        case y.PremiumTypes.TIER_1:
            return t ? "Classic" : eR.intl.string(eR.t.FSOz78);
        case y.PremiumTypes.TIER_2:
            return eR.intl.string(eR.t.lG6a5x);
    }
}
function eX(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: s,
            activeDiscountInfo: a,
            renewalInvoiceWithoutEntitlementsPreview: o,
            renewalInvoiceWithEntitlementsPreview: l,
            hasFractionalPremiumWithSub: u,
            fractionalPremiumInfo: d,
        } = e,
        _ = y.hd[n],
        f = tw(eP(_.id), _.interval),
        p = null != l && 0 === l.subtotal,
        E =
            tl(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !ep.default.getCurrentUser()?.hasFreePremium() &&
                !p),
        m = null != i && null == t.paymentGateway,
        g = t.status === S.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === S.lT7.OPEN,
        A = E ? S.Dmq.CANCELED : g ? S.Dmq.UNPAID : t.status,
        I = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        T = y.M4 + (r ? e1(t.additionalPlans) : 0),
        N = m
            ? I
                ? eR.intl.format(eR.t["cd+hqB"], { price: i })
                : eR.intl.format(eR.t.NUkcpF, { price: i })
            : eR.intl.string(eR.t.zYx3Y6),
        v = m
            ? I
                ? eR.intl.format(eR.t.VsKcFB, { price: i })
                : eR.intl.format(eR.t.hJ5xEX, { price: i })
            : eR.intl.string(eR.t["8rSipI"]),
        C = m
            ? I
                ? eR.intl.format(eR.t["jRy6/J"], { price: i, num: T })
                : eR.intl.format(eR.t.tTNE8M, { price: i, num: T })
            : eR.intl.format(eR.t["U+z/HJ"], { num: T });
    switch (n) {
        case y.gD.PREMIUM_MONTH_TIER_0:
        case y.gD.PREMIUM_YEAR_TIER_0:
            switch (A) {
                case S.Dmq.CANCELED:
                    return m
                        ? I
                            ? eR.intl.format(eR.t["USi/nc"], { price: i })
                            : eR.intl.format(eR.t["FS//l2"], { price: i })
                        : eR.intl.string(eR.t.JshLzq);
                case S.Dmq.ACCOUNT_HOLD:
                    return m
                        ? I
                            ? eR.intl.format(eR.t["5mv+2i"], { price: i })
                            : eR.intl.format(eR.t.nkAEfZ, { price: i })
                        : eR.intl.format(eR.t.SsLIXS, {});
                case S.Dmq.UNPAID:
                    return eR.intl.format(eR.t.cmkbFB, {});
                case S.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? eR.intl.format(eR.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : eR.intl.format(eR.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case S.Dmq.PAUSED:
                    if (u) return N;
                    return eR.intl.format(eR.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case S.Dmq.PAST_DUE:
                    return eR.intl.format(eR.t["d+0vwo"], {
                        endDate: (0, eT.i$)(e7(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return N;
            }
        case y.gD.PREMIUM_MONTH_TIER_1:
        case y.gD.PREMIUM_YEAR_TIER_1:
            switch (A) {
                case S.Dmq.CANCELED:
                    return m
                        ? I
                            ? eR.intl.format(eR.t.cXy8Bp, { price: i })
                            : eR.intl.format(eR.t["C/XsHt"], { price: i })
                        : eR.intl.string(eR.t.K6tYFa);
                case S.Dmq.ACCOUNT_HOLD:
                    return m
                        ? I
                            ? eR.intl.format(eR.t.HBkIBi, { price: i })
                            : eR.intl.format(eR.t.ZsO1Sx, { price: i })
                        : eR.intl.format(eR.t["0+/WH7"], {});
                case S.Dmq.UNPAID:
                    return eR.intl.format(eR.t.McIzwj, {});
                case S.Dmq.PAUSE_PENDING:
                    let O = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != O
                        ? eR.intl.format(eR.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: O })
                        : eR.intl.format(eR.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case S.Dmq.PAUSED:
                    if (u) return v;
                    return eR.intl.format(eR.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case S.Dmq.PAST_DUE:
                    return eR.intl.format(eR.t["d+0vwo"], {
                        endDate: (0, eT.i$)(e7(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return v;
            }
        case y.gD.PREMIUM_MONTH_TIER_2:
        case y.gD.PREMIUM_YEAR_TIER_2:
        case y.gD.PREMIUM_3_MONTH_TIER_2:
        case y.gD.PREMIUM_6_MONTH_TIER_2:
        case y.gD.PREMIUM_GROUP_MONTH:
            switch (A) {
                case S.Dmq.CANCELED:
                    return m
                        ? I
                            ? eR.intl.format(eR.t.xoFgRh, { price: i, num: T })
                            : eR.intl.format(eR.t.nXdbKo, { price: i, num: T })
                        : eR.intl.format(eR.t.EcSdRH, { num: T });
                case S.Dmq.ACCOUNT_HOLD:
                    return m
                        ? I
                            ? eR.intl.format(eR.t["5C/0QG"], { price: i, num: T })
                            : eR.intl.format(eR.t.xfYkhu, { price: i, num: T })
                        : eR.intl.format(eR.t.ivjxcn, { num: T });
                case S.Dmq.UNPAID:
                    return eR.intl.format(eR.t["0HopYf"], { num: T });
                case S.Dmq.PAUSE_PENDING:
                    let b = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != b
                        ? eR.intl.format(eR.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: b })
                        : eR.intl.format(eR.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case S.Dmq.PAUSED:
                    if (u) return C;
                    return eR.intl.format(eR.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case S.Dmq.BILLING_RETRY:
                    return eR.intl.format(eR.t["IlJ/HV"], {
                        endDate: c()(t.currentPeriodStart).add(y.bx, "days").toDate(),
                    });
                case S.Dmq.PAST_DUE:
                    return eR.intl.format(eR.t["d+0vwo"], {
                        endDate: (0, eT.i$)(e7(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === y.gD.PREMIUM_YEAR_TIER_2
                            ? eR.intl.format(eR.t.z2oQtA, {
                                  percent: a?.percentage ?? y.Cq,
                                  regularPrice: f,
                                  renewalDate: e8(t, d),
                              })
                            : I
                              ? eR.intl.formatToPlainString(eR.t["3ZiutU"], {
                                    percent: a?.percentage ?? y._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? y.OJ,
                                })
                              : eR.intl.formatToPlainString(eR.t["G6+XOT"], {
                                    percent: a?.percentage ?? y._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? y.OJ,
                                })
                        : C;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function eZ(e) {
    var t, n, i;
    let r,
        s,
        {
            renewalInvoicePreview: a,
            renewalInvoiceWithEntitlementsPreview: o,
            subscription: u,
            planId: c,
            includePremiumGuilds: d = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: h,
            hasFractionalPremiumWithSub: f = !1,
            fractionalPremiumInfo: p,
        } = e,
        E = eg.A.get(c);
    return (
        l()(null != E, "Missing plan"),
        eX({
            subscription: u,
            planId: E.id,
            price:
                ((t = a),
                (n = u),
                (i = E),
                (s =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? eU(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, eN.CE)((0, eN.$g)(s, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: d,
            hasDiscountApplied: _,
            activeDiscountInfo: h,
            renewalInvoiceWithoutEntitlementsPreview: a,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: f,
            fractionalPremiumInfo: p,
        })
    );
}
function eQ(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, ef.m1)(t) ? null : eK(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return y.pW.has(t);
        }),
        s = r?.planId === y.gD.PREMIUM_MONTH_GUILD || r?.planId === y.gD.PREMIUM_YEAR_GUILD ? eR.t.Pi5yMJ : null,
        a = null != s ? eR.intl.formatToPlainString(s, { num: r?.quantity }) : void 0;
    if (null != i && null != a)
        return eR.intl.formatToPlainString(eR.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: a });
    if (null != i) return i;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function eJ(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === y.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case y.pe.TIER_0:
            s = [y.gD.PREMIUM_YEAR_TIER_0, y.gD.PREMIUM_MONTH_TIER_0];
            break;
        case y.pe.TIER_1:
            s = [y.gD.PREMIUM_MONTH_TIER_1];
            break;
        case y.pe.TIER_2:
            s = [y.gD.PREMIUM_YEAR_TIER_2, y.gD.PREMIUM_MONTH_TIER_2];
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
function e0(e) {
    let t = y.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, eI.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e1(e) {
    let t = eg.A.getPlanIdsForSkus([tM(y.pe.GUILD)]);
    l()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e2 = new Set([
    y.gD.NONE_MONTH,
    y.gD.NONE_3_MONTH,
    y.gD.NONE_6_MONTH,
    y.gD.NONE_YEAR,
    y.gD.PREMIUM_MONTH_TIER_0,
    y.gD.PREMIUM_MONTH_TIER_1,
    y.gD.PREMIUM_MONTH_TIER_2,
    y.gD.PREMIUM_YEAR_TIER_0,
    y.gD.PREMIUM_YEAR_TIER_1,
    y.gD.PREMIUM_YEAR_TIER_2,
    y.gD.PREMIUM_3_MONTH_TIER_2,
    y.gD.PREMIUM_6_MONTH_TIER_2,
    y.gD.PREMIUM_GROUP_MONTH,
]);
function e3(e) {
    return e2.has(e);
}
function e6(e) {
    return y.pW.has(e);
}
function e4(e) {
    return e3(e) || e6(e);
}
function e5(e) {
    return null != e && e === y.gD.PREMIUM_GROUP_MONTH;
}
function e7(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = c()(e.metadata.apple_grace_period_expires_date);
        return { days: c().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = c()(e.metadata.google_grace_period_expires_date),
            n = c()(e.metadata.google_original_expires_date);
        return { days: c().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? y.U1 : y.L9;
        return { days: t, expiresDate: c()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: c()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: c()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? y.a5 : y.EV;
        return { days: t, expiresDate: c()(e.currentPeriodStart).add(t, "days") };
    }
}
function e8(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = e9(n, t.unactivatedUnits)), n;
}
function e9(e, t, n, i) {
    let r = c()(i ? void 0 : e);
    if (t.length > 0) {
        let e = tU(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = c()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function te(e) {
    let t = tU(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === y.xc.NONE)) return "";
    let n = { days: eR.t.fYmirx, hours: eR.t["C3RO+g"], minutes: eR.t.r77oHc },
        i = (0, f.Vb)((0, eT.Tf)(0, t * eS.A.Millis.HOUR));
    return (0, eT.uN)(i, n);
}
function tt(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === S.Dmq.PAST_DUE;
}
function tn(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t =
                e.renewalMutations.planId !== e.planId
                    ? eR.intl.string(eR.t["0rzJ4J"])
                    : eR.intl.string(eR.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = eR.intl.string(eR.t.a9Mdb3)),
        t
    );
}
function ti(e) {
    if (null == e) return !1;
    let t = em.A.getPaymentSource(e);
    return null != t && eC.AD.has(t.type);
}
function tr(e) {
    return e.isPurchasedExternally
        ? e.status === S.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = e1(n);
              return 0 === (null != t ? e1(t.additionalPlans) : null) && 0 !== r ? S.Dmq.CANCELED : i;
          })(e) === S.Dmq.CANCELED;
}
function ts(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: r, fractionalPremiumInfo: s } = e,
        { planId: a, additionalPlans: o } = t,
        u = eg.A.get(a);
    l()(null != u, "Missing plan");
    let c = e1(o),
        d = tc(t.planId, t.paymentSourceId, t.currency, n).amount * c;
    if (null != r) {
        let e = r.invoiceItems.find((e) => y.pW.has(e.subscriptionPlanId));
        null != e && (d = e.amount);
    }
    i = i ?? (0, eN.$g)(d, t.currency);
    let _ = r?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (tr(t))
        return t.isPurchasedViaGoogle
            ? eR.intl.format(eR.t["3/WTrI"], { quantity: c })
            : _
              ? eR.intl.format(eR.t["0ozBSB"], { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) })
              : eR.intl.format(eR.t["yjsv/s"], { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) });
    switch (t.status) {
        case S.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? eR.intl.format(eR.t.Nlf3nc, { quantity: c, boostQuantity: c })
                : _
                  ? eR.intl.format(eR.t.oiRy7v, {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eN.CE)(i, u.interval, u.intervalCount),
                    })
                  : eR.intl.format(eR.t["0QxOAi"], {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eN.CE)(i, u.interval, u.intervalCount),
                    });
        case S.Dmq.PAUSE_PENDING:
        case S.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return eR.intl.string(eR.t.CduWAm);
            return eR.intl.format(eR.t["5iud9s"], { quantity: c });
        case S.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return eR.intl.format(eR.t["d+0vwo"], {
                    endDate: (0, eT.i$)(e7(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? eR.intl.format(eR.t["5iud9s"], { quantity: c })
                : _
                  ? eR.intl.format(eR.t.eDwrLA, { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) })
                  : eR.intl.format(eR.t.ijSDcI, { quantity: c, rate: (0, eN.CE)(i, u.interval, u.intervalCount) });
    }
}
function ta(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = eU(e.id, !1, r, t);
        } catch {
            i = eP(e.id, !1, r);
        }
    else i = eP(e.id, !1, r);
    let s = (0, eN.$g)(i.amount, i.currency);
    return e.currency !== eC.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function to(e, t, n) {
    let i = ta(e, t, n);
    return (0, eN.CE)(i, e.interval, e.intervalCount);
}
function tl(e) {
    let { status: t, renewalMutations: n } = e;
    return t === S.Dmq.CANCELED || (null != n && (0, ef.m1)(n.planId) && !e.isPurchasedExternally);
}
function tu(e) {
    return e === S.Dmq.PAST_DUE || e === S.Dmq.ACCOUNT_HOLD || e === S.Dmq.BILLING_RETRY;
}
function tc(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: eE.A.ipCountryCodeWithFallback, currency: n },
        s = eg.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, eI.pM)(t, { tags: { planId: e } }), t);
    }
    let a = eg.A.getForSkuAndInterval(tM(y.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, eI.pM)(t, { tags: { planId: e } }), t);
    }
    return eU(a.id, (0, T.ki)(i), !1, r);
}
function td(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case y.gD.PREMIUM_MONTH_TIER_0:
                return eR.intl.string(eR.t["0ggVqN"]);
            case y.gD.PREMIUM_YEAR_TIER_0:
                return eR.intl.string(eR.t["jm+ZQw"]);
            case y.gD.PREMIUM_MONTH_TIER_1:
                return eR.intl.string(eR.t.uph4Jx);
            case y.gD.PREMIUM_YEAR_TIER_1:
                return eR.intl.string(eR.t["D/l7Yt"]);
            case y.gD.PREMIUM_MONTH_TIER_2:
            case y.gD.PREMIUM_GROUP_MONTH:
                return eR.intl.string(eR.t["5l1MuV"]);
            case y.gD.PREMIUM_YEAR_TIER_2:
                return eR.intl.string(eR.t.G0mISV);
        }
    switch (i) {
        case y.gD.PREMIUM_MONTH_TIER_0:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["/G3aKw"]);
        case y.gD.PREMIUM_YEAR_TIER_0:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["2eQpsL"]);
        case y.gD.PREMIUM_MONTH_TIER_1:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t.gueLg5);
        case y.gD.PREMIUM_YEAR_TIER_1:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["MhH/vW"]);
        case y.gD.PREMIUM_MONTH_TIER_2:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t.LQVQIq);
        case y.gD.PREMIUM_GROUP_MONTH:
            return eR.intl.formatToPlainString(eO.default.LwdrNi, { premiumGroupProductName: (0, ev.DP)() });
        case y.gD.PREMIUM_YEAR_TIER_2:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["0nfg1x"]);
        case y.gD.PREMIUM_3_MONTH_TIER_2:
        case y.gD.PREMIUM_6_MONTH_TIER_2:
            return eR.intl.formatToPlainString(eR.t.BCD4fT, { intervalCount: t.intervalCount });
        case y.gD.NONE_MONTH:
        case y.gD.NONE_YEAR:
        case y.gD.NONE_3_MONTH:
        case y.gD.NONE_6_MONTH:
        case y.gD.PREMIUM_MONTH_GUILD:
        case y.gD.PREMIUM_YEAR_GUILD:
        case y.gD.PREMIUM_3_MONTH_GUILD:
        case y.gD.PREMIUM_6_MONTH_GUILD:
            return eR.intl.string(eR.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, eI.pM)(r, { tags: { planId: i } }), r);
}
function t_(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = eg.A.get(t);
    return l()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function th() {
    let e = eC.Yr.USD;
    try {
        e = eP(y.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function tf(e) {
    let { intervalType: t = y.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case y.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eR.intl.formatToPlainString(eR.t.fRNBRX, { weeks: n / 7 })
                    : eR.intl.formatToPlainString(eR.t.EIpHEj, { weeks: n / 7 });
            return i
                ? eR.intl.formatToPlainString(eR.t["6Cdzoy"], { days: n })
                : eR.intl.formatToPlainString(eR.t["kbBj/h"], { days: n });
        case y.WT.MONTH:
            return i
                ? eR.intl.formatToPlainString(eR.t.x5MgxS, { months: n })
                : eR.intl.formatToPlainString(eR.t["4SEnCZ"], { months: n });
        case y.WT.YEAR:
            return i
                ? eR.intl.formatToPlainString(eR.t["h+63yl"], { years: n })
                : eR.intl.formatToPlainString(eR.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tp(e) {
    let { intervalType: t = y.WT.MONTH, intervalCount: n = 1 } = e,
        i = th(),
        r = (0, eN.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case y.WT.DAY:
            if (n >= 7 && n % 7 == 0) return eR.intl.formatToPlainString(eR.t.C6i5Jt, { weeks: n / 7, price: r });
            return eR.intl.formatToPlainString(eR.t.cR9ifw, { days: n, price: r });
        case y.WT.MONTH:
            return eR.intl.formatToPlainString(eR.t["8FZfNo"], { months: n, price: r });
        case y.WT.YEAR:
            return eR.intl.formatToPlainString(eR.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tE(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return tp({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function tm(e) {
    let { intervalType: t = y.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case y.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eR.intl.formatToPlainString(eR.t.iVZYyl, { weeks: n / 7 })
                    : eR.intl.formatToPlainString(eR.t.EmoBD2, { weeks: n / 7 });
            return i
                ? eR.intl.formatToPlainString(eR.t.jzH70Z, { days: n })
                : eR.intl.formatToPlainString(eR.t["k2UNz+"], { days: n });
        case y.WT.MONTH:
            return i
                ? eR.intl.formatToPlainString(eR.t.erUSmA, { months: n })
                : eR.intl.formatToPlainString(eR.t.kridzK, { months: n });
        case y.WT.YEAR:
            return i
                ? eR.intl.formatToPlainString(eR.t.IfYQVC, { years: n })
                : eR.intl.formatToPlainString(eR.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tg(e, t) {
    switch (e) {
        case S.kM_.APPLE_PARTNER:
        case S.kM_.APPLE_ADVANCED_COMMERCE:
        case S.kM_.APPLE:
            return eb[t];
        case S.kM_.GOOGLE:
            return eD[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tA(e, t) {
    return (0, T.ki)(e) || tu(t?.status);
}
function tI(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => y.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function tT(e) {
    return e.filter((e) => !y.JM.has(e.planId));
}
function tS(e, t, n, i) {
    l()(i.has(t), "Expected planId in group");
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
function ty(e, t) {
    return tS(e, t, 1, y.JM);
}
function tN(e, t, n) {
    return tS(e, n, t, y.pW);
}
function tv(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => y.JM.has(e.planId));
    if (null != t) {
        let n = eg.A.get(t.planId);
        l()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = eg.A.get(e.planId);
                if ((l()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = eg.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return l()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function tC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = y.f5[e].fileSize;
    return (0, ey.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function tR(e) {
    return null == e ? null : e.items.find((e) => y.pW.has(e.planId));
}
function tO(e) {
    let t = null != e ? eM(e) : null;
    return null != t ? e0(t.planId) : null;
}
let tb = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function tD(e) {
    return e_(ea, e);
}
function tL(e) {
    return e_(Y, e);
}
function tw(e, t) {
    let n = (0, eN.$g)(e.amount, e.currency),
        i = eY(t);
    return `${n}/${i}`;
}
function tM(e) {
    return e;
}
function tP(e) {
    return "isNitroLocked" in e;
}
function tx() {
    let e = (0, d.bG)([ep.default], () => ep.default.getCurrentUser());
    return (0, T.YE)(e, y.PremiumTypes.TIER_2);
}
function tk(e) {
    var t;
    let n = y.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case y.Tt:
                return y.h7;
            case y.yo:
                return y.CA;
        }
    else;
    return n;
}
function tU(e) {
    return tG(e.map((e) => e.skuId));
}
function tG(e) {
    return e.reduce((e, t) => {
        let [n, i] = y.NL[t],
            r = 1;
        switch (n) {
            case y.T.HOUR:
                r = 1;
                break;
            case y.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let tF = (e) => {
        let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
            r = y.En[t.skuId];
        return null == r ? null : eU(r, !1, n, i);
    },
    tV = (e) => {
        let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
            { enabled: s } = eh.A.getConfig({ location: "getSavingsPercent" }),
            a = y.XE[t];
        return s && null != r && (a = tH(r, n, i)), a;
    };
function tB(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === y.WT.DAY || (t.interval === y.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tF({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let s = t.interval === y.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * s;
}
function tH(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === y.WT.YEAR) {
        try {
            if (((t = tF({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = eU(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tj(e) {
    return null == e ? 0 : Math.max((0, eT.m_)(new Date(), new Date(e)), 0);
}
let tY = Object.freeze({
    isNewUser: tb,
    isPremiumAtLeast: T.CC,
    isPremium: T.ki,
    isPremiumExactly: T.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: eU,
    getDefaultPrice: eP,
    getInterval: function (e) {
        let t = y.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, eI.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: ej,
    getIntervalStringAsNoun: eY,
    getPremiumType: eW,
    getTierDisplayNameByPlanId: ez,
    getDisplayName: eK,
    getPremiumPlanOptions: eJ,
    formatInterval: function (e) {
        if (e === y.WT.YEAR) return eR.intl.string(eR.t.tfqrhj);
        if (e === y.WT.MONTH) return eR.intl.string(eR.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eX,
    isPremiumSku: function (e) {
        return e === y.pe.TIER_0 || e === y.pe.TIER_1 || e === y.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === y.WT.MONTH) return t;
        if (e === y.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: N,
    getSkuIdForPlan: e0,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case y.PremiumTypes.TIER_0:
                return y.pe.TIER_0;
            case y.PremiumTypes.TIER_1:
                return y.pe.TIER_1;
            case y.PremiumTypes.TIER_2:
                return y.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return eW(e) === y.PremiumTypes.TIER_2 ? y.M4 : 0;
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
                          fractionalState: y.xc.NONE,
                          startsAt: c()(0),
                          endsAt: c()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: c()(0),
                          unactivatedUnits: [],
                      },
            s = null !== n && e.status === S.Dmq.PAST_DUE ? n : t,
            a = i
                ? (0, eN.$g)(
                      s.invoiceItems
                          .filter((e) => y.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, eN.$g)(s.total, s.currency);
        if (ep.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return eR.intl.format(eR.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === S.Dmq.CANCELED) return eR.intl.format(eR.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === S.Dmq.PAUSE_PENDING)
            return eR.intl.format(eR.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === S.Dmq.PAUSED)
            return r.fractionalState !== y.xc.NONE
                ? eR.intl.format(eR.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: a })
                : null == e.pauseEndsAt
                  ? i
                      ? eR.intl.format(eR.t.KTYQCg, { planName: eR.intl.string(eR.t.Ipxkog), price: a })
                      : eR.intl.string(eR.t.fMz6Lg)
                  : i
                    ? eR.intl.format(eR.t.zcgtzf, {
                          planName: eR.intl.string(eR.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: a,
                      })
                    : eR.intl.format(eR.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === S.Dmq.PAST_DUE) {
            let t = e7(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = c()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = c()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? eR.intl.format(eR.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: eC.qm[e.paymentGateway],
                      paymentSourceLink: tg(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : eR.intl.format(eR.t.qEIzyi, { endDate: t.toDate(), price: a });
        }
        {
            var o;
            if (e.status === S.Dmq.BILLING_RETRY)
                return eR.intl.format(eR.t.EMTLOT, {
                    endDate: c()(e.currentPeriodStart).add(y.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === S.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, m.xv)()
                    ? eR.intl.format(eR.t["dtcxw+"], {
                          endDate: c()(e.currentPeriodStart).add(y.ph, "days").toDate(),
                          paymentGatewayName: eC.qm[e.paymentGateway],
                          paymentSourceLink: tg(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : eR.intl.format(eR.t.EMTLOT, {
                          endDate: c()(e.currentPeriodStart).add(y.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (o = e).paymentSourceId && ti(o.paymentSourceId))
                return eR.intl.format(eR.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === S.Dmq.UNPAID) return eR.intl.format(eR.t.CzTKom, { maxProcessingTimeInDays: y.G4 });
            if (e.isPurchasedExternally)
                return eR.intl.format(eR.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: eC.qm[e.paymentGateway],
                    subscriptionManagementLink: tg(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = e9(n, r.unactivatedUnits)),
                i
                    ? eR.intl.format(eR.t.Vl3cED, { planName: eR.intl.string(eR.t.Ipxkog), renewalDate: n, price: a })
                    : eR.intl.format(eR.t.Q18lRK, { renewalDate: n, price: a })
            );
        }
    },
    getExpectedRenewalDate: e8,
    extendDateWithUnconsumedFractionalPremium: e9,
    getUnactivatedFractionalPremiumDurationString: te,
    isSwitchingPlansDisabled: tt,
    getSwitchingPlansDisabledMessage: tn,
    isNoneSubscription: ef.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === S.Dmq.CANCELED || e.status === S.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e3(t);
        });
        return null == i ||
            (0, ef.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === S.Dmq.CANCELED || e.status === S.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e3(t);
        });
        return (null == i || (0, ef.m1)(i.subscriptionPlanId)) && (n = S.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: tl,
    getPremiumGuildIntervalPrice: tc,
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
    getBillingReviewSubheader: td,
    getIntervalForInvoice: t_,
    getPremiumPlanItem: eM,
    getGuildBoostPlanItem: tR,
    isBoostOnlySubscription: function (e) {
        return null != e && null == eM(e) && null != tR(e);
    },
    getPremiumSkuIdForSubscription: tO,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = eM(e);
            if (null != t) return eW(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tU,
    castPremiumSubscriptionAsSkuId: tM,
    calculateDiscountPercentageForYearlyPlan: tH,
    getDaysSincePremium: tj,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, eT.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return e_(M, e);
    },
    canUseEmojisEverywhere: function (e) {
        return e_(P, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return e_(k, e);
    },
    canUseCustomCallSounds: function (e) {
        return e_(U, e);
    },
    canUploadLargeFiles: function (e) {
        return e_(es, e);
    },
    canUseBadges: function (e) {
        return e_(H, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return e_(er, e);
    },
    canEditDiscriminator: function (e) {
        return e_(V, e);
    },
    hasBoostDiscount: function (e) {
        return e_($, e);
    },
    canUseAnimatedAvatar: function (e) {
        return e_(F, e);
    },
    canInstallPremiumApplications: function (e) {
        return e_(J, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return e_(ei, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return e_(en, e);
    },
    canRedeemPremiumPerks: function (e) {
        return e_(ee, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return e_(j, e);
    },
    canUsePremiumAppIcons: function (e) {
        return e_(W, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return e_(B, e);
    },
    canUseClientThemes: function (e) {
        return e_(K, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? e_(X, t) : "mid" === e && e_(q, t);
    },
    canUseQuestOrbMultiplier: tD,
    hasFreeBoosts: function (e) {
        return e_(z, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return e_(x, e);
    },
    canUseCustomBackgrounds: function (e) {
        return e_(et, e);
    },
    canUseCollectibles: tL,
    canUseMonthlyOrbs: function (e) {
        return !!(0, p.f0)("canUseMonthlyOrbs") && (0, D.Nh)(e?.perks, _.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ((0, p.f0)("canUseShopDiscounts") && (0, D.Nh)(e?.perks, _.bb.SHOP_DISCOUNTS)) || tL(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return ((0, p.f0)("canUseMoreQuestOrbs") && (0, D.Nh)(e?.perks, _.bb.MORE_QUEST_ORBS)) || tD(e);
    },
    formatPriceString: tw,
    StreamQuality: ew,
});
