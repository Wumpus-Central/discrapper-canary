"use strict";
n.d(t, {
    ki: () => tl,
    Ke: () => eH,
    FY: () => tA,
    ff: () => tc,
    aZ: () => tL,
    Nc: () => tt,
    Rr: () => t_,
    YE: () => S.YE,
    OU: () => eQ,
    qn: () => tC,
    CC: () => S.CC,
    iv: () => tx,
    RH: () => ez,
    z_: () => tH,
    FJ: () => eW,
    ee: () => tm,
    $k: () => tr,
    VA: () => tV,
    Dd: () => eq,
    kX: () => te,
    To: () => tY,
    _e: () => e9,
    l6: () => ew,
    y8: () => ex,
    re: () => tI,
    nB: () => eX,
    pb: () => ek,
    Zb: () => e5,
    Pr: () => eG,
    nK: () => tU,
    Tm: () => eJ,
    mv: () => tD,
    J$: () => ti,
    Pg: () => tg,
    D8: () => ej,
    TW: () => S.ki,
    $Q: () => eF,
    aE: () => tT,
    L_: () => tF,
    Uf: () => ta,
    sS: () => ts,
    ji: () => e7,
    Q8: () => tn,
    Mn: () => eK,
    m6: () => eY,
    Em: () => tP,
    xq: () => e3,
    Ge: () => tu,
    Of: () => tp,
    tW: () => tf,
    mH: () => tM,
    XN: () => tW,
    Ay: () => tK,
    EL: () => eP,
    bx: () => e1,
    Zw: () => e$,
    Om: () => tN,
    GX: () => tS,
    qi: () => tj,
    JM: () => eU,
    UC: () => eV,
    e1: () => tw,
    PK: () => to,
    z4: () => e6,
    LE: () => th,
    ys: () => e4,
    U8: () => eB,
    tS: () => tE,
    EJ: () => tR,
}),
    n(667532),
    n(321073);
var i,
    r,
    a,
    s = n(64700),
    l = n(284009),
    o = n.n(l),
    d = n(989349),
    c = n.n(d),
    u = n(17928),
    _ = n(441574),
    E = n(975807),
    A = n(366999),
    h = n(930767),
    I = n(968671),
    f = n(626584),
    p = n(981088),
    T = n(367888),
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
    S = n(474090),
    N = n(652215),
    C = n(202541);
function R(e) {
    if (null == e) return N.TbF;
    let t = g.A.getPremiumTypeOverride();
    return e.isStaff() && t === C.$I
        ? N.mu
        : null != e.premiumType && (0, S.ki)(e)
          ? C.f5[e.premiumType].fileSize
          : N.TbF;
}
class O {
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
class L {
    skuId;
    skuFeatures;
    constructor(e, t) {
        (this.skuId = e), (this.skuFeatures = t);
    }
}
var D = n(945810),
    y =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (r[(r.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        r);
let v = (0, D.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var b = n(349871);
let M = new f.A("ProductCatalog.tsx");
class P extends O {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = C.u0[t.premiumType];
                        if (null == n)
                            return (
                                M.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = eo[n];
                        if (null == i)
                            return (
                                M.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        M.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let U = new P(m.ANIMATED_EMOJIS),
    w = new P(m.EMOJIS_EVERYWHERE),
    G = new P(m.STICKERS_EVERYWHERE),
    x = new P(m.SOUNDBOARD_EVERYWHERE),
    k = new P(m.CUSTOM_CALL_SOUNDS),
    F = new P(m.PREMIUM_VOICE_FILTERS),
    V = new P(m.ANIMATED_AVATAR),
    B = new P(m.CUSTOM_DISCRIMINATOR),
    H = new P(m.PREMIUM_GUILD_MEMBER_PROFILE),
    j = new P("profileBadges"),
    W = new P(m.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    Y = new P("collectibles"),
    K = new P("appIcons"),
    $ = new P(m.CLIENT_THEMES),
    z = new P("boostDiscount"),
    q = new P("freeBoosts"),
    Z = new P(m.STREAM_MID_QUALITY),
    X = new P(m.STREAM_HIGH_QUALITY),
    Q = new P(m.CUSTOM_NOTIFICATION_SOUNDS),
    J = new P("fancyVoiceChannelReactions"),
    ee = new P("installPremiumApplications"),
    et = new P("redeemPremiumPerks"),
    en = new P(m.VIDEO_FILTER_ASSETS);
new O(m.INCREASED_FILE_UPLOAD_SIZE, R);
let ei = new P(m.INCREASED_GUILD_LIMIT),
    er = new P(m.INCREASED_MESSAGE_LENGTH),
    ea = new P("increasedVideoUploadQuality"),
    es = new P("uploadLargeFiles"),
    el = new P(m.QUEST_ORB_MULTIPLIER),
    eo = Object.freeze({
        [C.pe.TIER_0]: new L(C.pe.TIER_0, [U, w, G, j, en, ea, es, K]),
        [C.pe.TIER_1]: new L(C.pe.TIER_1, [U, w, V, B, j, z, Z, J, ea, es, K]),
        [C.pe.TIER_2]: new L(C.pe.TIER_2, [
            U,
            w,
            G,
            x,
            k,
            V,
            B,
            H,
            j,
            W,
            $,
            z,
            q,
            Z,
            X,
            J,
            ee,
            et,
            en,
            ei,
            er,
            ea,
            es,
            K,
            Y,
            Q,
            F,
            el,
        ]),
    }),
    ed = [z, q],
    ec = [el],
    eu = [],
    e_ = new Map([
        [U, _.bb.ANIMATED_EMOJIS],
        [w, _.bb.EMOJIS_EVERYWHERE],
        [G, _.bb.STICKERS_EVERYWHERE],
        [x, _.bb.SOUNDBOARD_EVERYWHERE],
        [k, _.bb.CUSTOM_CALL_SOUNDS],
        [F, _.bb.PREMIUM_VOICE_FILTERS],
        [V, _.bb.ANIMATED_AVATAR],
        [B, _.bb.CUSTOM_DISCRIMINATOR],
        [H, _.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [W, _.bb.PROFILE_PREMIUM_FEATURES],
        [Y, _.bb.PREMIUM_COLLECTIBLES],
        [$, _.bb.CLIENT_THEMES],
        [Z, _.bb.STREAM_MID_QUALITY],
        [X, _.bb.STREAM_HIGH_QUALITY],
        [en, _.bb.VIDEO_FILTER_ASSETS],
        [ei, _.bb.INCREASED_GUILD_LIMIT],
        [er, _.bb.INCREASED_MESSAGE_LENGTH],
        [es, _.bb.INCREASED_FILE_UPLOAD_SIZE],
        [j, _.bb.PROFILE_BADGES],
        [K, _.bb.APP_ICONS],
        [z, _.bb.BOOST_DISCOUNT],
        [q, _.bb.FREE_BOOSTS],
        [ee, _.bb.INSTALL_PREMIUM_APPLICATIONS],
        [ea, _.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function eE(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && ed.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && ec.includes(e)) ||
        (n && eu.includes(e))
    )
        return !1;
    let i = e_.get(e);
    if (null != i && t?.perks != null) {
        let n = v.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== y.CONTROL) {
            let r = e.getFeatureValue(t),
                a = (0, b.Nh)(t?.perks, i);
            return n === y.DUAL_READ_RETURN_NEW ? a : r;
        }
    }
    return e.getFeatureValue(t);
}
var eA = n(832946),
    eh = n(287809),
    eI = n(615405),
    ef = n(295405),
    ep = n(97352),
    eT = n(166403),
    em = n(739508),
    eg = n(58703),
    eS = n(927813),
    eN = n(255438),
    eC = n(580630),
    eR = n(88001),
    eO = n(818348),
    eL = n(375708),
    eD = n(466919);
let ey = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    ev = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    eb = new f.A("PremiumUtils.tsx");
var eM = (((a = {}).MID = "mid"), (a.HIGH = "high"), a);
function eP(e) {
    return e.items.find((e) => C.JM.has(e.planId));
}
function eU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = ef.A.defaultPaymentSourceId ?? void 0,
        s = eT.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        ex(e, t, n, { paymentSourceId: a, currency: i }, r)
    );
}
function ew(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function eG(e, t, n) {
    let i = s.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return s.useMemo(
        () => ({
            priceOptions: ew(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function ex(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: s, contextPlanPrices: l } = i;
    if (null != l) {
        let t = l[e],
            n = null != s && null != t && t.currency !== s;
        if (null != t && !n)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != ep.A.get(e)) {
        let i = N.lid.DEFAULT;
        n ? (i = N.lid.GIFT) : t && (i = N.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: N.lid.DEFAULT },
                r = ek(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    eb.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let a = r.find((e) => e.currency === i.toLowerCase());
                return null != a
                    ? a
                    : null != t
                      ? ek(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: a, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, em.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t)
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, em.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function ek(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: N.lid.DEFAULT },
        i = (function (e, t) {
            let n = ep.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, em.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (eb.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            eb.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                eb.info(`prices: ${r}`);
            let a = Error("Missing prices for payment source on subscription plan");
            (0, em.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        eb.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, em.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function eF(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function eV(e, t, n) {
    let i,
        r,
        a = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        s = (0, T._1)(e);
    null != s && (i = C.hd[s.planId].premiumType);
    let l = (0, S.CC)(i, C.PremiumTypes.TIER_0),
        o = (0, S.CC)(i, C.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = C.pW.has(i.planId) ? o : !C.JM.has(i.planId) && l),
            (e = void 0 === n ? eU(i.planId, r, !1, t) : ex(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (a.amount += e.amount * i.quantity);
    }
    return eF(a);
}
function eB(e, t, n, i) {
    return (
        null === t && (o()(null !== e, "Subscription can't be null"), (t = [])), eV(null !== e ? tT(e, t) : tm(t), n, i)
    );
}
function eH(e) {
    switch (e) {
        case C.Ff.MONTH:
            return eL.intl.string(eL.t.FPybU7);
        case C.Ff.YEAR:
            return eL.intl.string(eL.t.tfqrhj);
        case C.Ff.DAY:
        case C.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function ej(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : C.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case C.WT.MONTH:
                let s = eL.intl.formatToPlainString(a === C.PremiumTypes.TIER_0 ? eL.t.NPKsLz : eL.t.poEovT, {
                    timeInterval: eL.intl.string(eL.t.FPybU7),
                });
                return r ? s : eL.intl.string(eL.t.Mh9bTt);
            case C.WT.YEAR:
                let l = eL.intl.formatToPlainString(a === C.PremiumTypes.TIER_0 ? eL.t.NPKsLz : eL.t.poEovT, {
                    timeInterval: eL.intl.string(eL.t.tfqrhj),
                });
                return r ? l : eL.intl.string(eL.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case C.WT.MONTH:
            if (1 !== i) return eL.intl.formatToPlainString(eL.t["0UlZnH"], { intervalCount: i });
            return eL.intl.string(eL.t.DKzs96);
        case C.WT.YEAR:
            return eL.intl.string(eL.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eW(e) {
    switch (e) {
        case C.WT.MONTH:
            return eL.intl.string(eL.t.FPybU7);
        case C.WT.YEAR:
            return eL.intl.string(eL.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function eY(e) {
    let t = C.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, em.pM)(n, { tags: { planId: e } }), n);
}
function eK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case C.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? eL.intl.format(eL.t.TZXHNj, { duration: i })
                : n
                  ? eL.intl.string(eL.t["81iAgs"])
                  : eL.intl.string(eL.t["0efVPy"]);
        case C.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? eL.intl.format(eL.t.eqRhC7, { duration: i })
                : n
                  ? eL.intl.string(eL.t.UvzqY1)
                  : eL.intl.string(eL.t.eoVuBn);
        case C.gD.PREMIUM_MONTH_TIER_1:
            return n ? eL.intl.string(eL.t["g/dH5g"]) : eL.intl.string(eL.t["7O6qSq"]);
        case C.gD.PREMIUM_YEAR_TIER_1:
            return n ? eL.intl.string(eL.t.pdZJaq) : eL.intl.string(eL.t.Md5xbi);
        case C.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? eL.intl.format(eL.t.aI6QXz, { duration: i })
                : n
                  ? eL.intl.string(eL.t.SmVbHc)
                  : eL.intl.string(eL.t.FKYNC6);
        case C.gD.PREMIUM_GROUP_MONTH:
            return n
                ? eL.intl.string(eL.t.SmVbHc)
                : eL.intl.formatToPlainString(eD.default["8bPDtb"], { premiumGroupProductName: (0, eR.DP)() });
        case C.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? eL.intl.format(eL.t["1wBcPi"], { duration: i })
                : n
                  ? eL.intl.string(eL.t.JIq4O1)
                  : eL.intl.string(eL.t["cfu/5d"]);
        case C.gD.PREMIUM_3_MONTH_TIER_2:
            return eL.intl.string(eL.t.wCbINr);
        case C.gD.PREMIUM_6_MONTH_TIER_2:
            return eL.intl.string(eL.t["e3/ArU"]);
        case C.gD.PREMIUM_MONTH_GUILD:
            return n ? eL.intl.string(eL.t["6ZR3By"]) : eL.intl.string(eL.t["h80cx/"]);
        case C.gD.PREMIUM_YEAR_GUILD:
            return n ? eL.intl.string(eL.t.YDpAzZ) : eL.intl.string(eL.t.ZHkls0);
        case C.gD.PREMIUM_3_MONTH_GUILD:
            return eL.intl.string(eL.t.EZHHB6);
        case C.gD.PREMIUM_6_MONTH_GUILD:
            return eL.intl.string(eL.t.X2KDO2);
        case C.gD.PREMIUM_MONTH_LEGACY:
            return eL.intl.string(eL.t.PD6k79);
        case C.gD.PREMIUM_YEAR_LEGACY:
            return eL.intl.string(eL.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, em.pM)(r, { tags: { planId: e } }), r);
}
function e$(e) {
    switch (e) {
        case C.pe.TIER_0:
            return eL.intl.string(eL.t["t9uG/o"]);
        case C.pe.TIER_1:
            return eL.intl.string(eL.t.FSOz78);
        case C.pe.TIER_2:
            return eL.intl.string(eL.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, em.pM)(t, { tags: { skuId: e } }), t);
}
function ez(e) {
    let t = C.hd[e]?.premiumType,
        n = null != t ? C.Mr[t] : null;
    if (null != n) return eL.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, em.pM)(i, { tags: { planId: e } }), i);
}
function eq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case C.PremiumTypes.TIER_0:
            return t ? "Basic" : eL.intl.string(eL.t["t9uG/o"]);
        case C.PremiumTypes.TIER_1:
            return t ? "Classic" : eL.intl.string(eL.t.FSOz78);
        case C.PremiumTypes.TIER_2:
            return eL.intl.string(eL.t.lG6a5x);
    }
}
function eZ(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoiceWithoutEntitlementsPreview: l,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: d,
            fractionalPremiumInfo: u,
        } = e,
        _ = C.hd[n],
        A = tb(eU(_.id), _.interval),
        h = null != o && 0 === o.subtotal,
        I =
            tl(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !eh.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        f = null != i && null == t.paymentGateway,
        p = t.status === N.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === N.lT7.OPEN,
        T = I ? N.Dmq.CANCELED : p ? N.Dmq.UNPAID : t.status,
        m = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        g = C.M4 + (r ? e1(t.additionalPlans) : 0),
        S = f
            ? m
                ? eL.intl.format(eL.t["cd+hqB"], { price: i })
                : eL.intl.format(eL.t.NUkcpF, { price: i })
            : eL.intl.string(eL.t.zYx3Y6),
        R = f
            ? m
                ? eL.intl.format(eL.t.VsKcFB, { price: i })
                : eL.intl.format(eL.t.hJ5xEX, { price: i })
            : eL.intl.string(eL.t["8rSipI"]),
        O = f
            ? m
                ? eL.intl.format(eL.t["jRy6/J"], { price: i, num: g })
                : eL.intl.format(eL.t.tTNE8M, { price: i, num: g })
            : eL.intl.format(eL.t["U+z/HJ"], { num: g });
    switch (n) {
        case C.gD.PREMIUM_MONTH_TIER_0:
        case C.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case N.Dmq.CANCELED:
                    return f
                        ? m
                            ? eL.intl.format(eL.t["USi/nc"], { price: i })
                            : eL.intl.format(eL.t["FS//l2"], { price: i })
                        : eL.intl.string(eL.t.JshLzq);
                case N.Dmq.ACCOUNT_HOLD:
                    return f
                        ? m
                            ? eL.intl.format(eL.t["5mv+2i"], { price: i })
                            : eL.intl.format(eL.t.nkAEfZ, { price: i })
                        : eL.intl.format(eL.t.SsLIXS, {});
                case N.Dmq.UNPAID:
                    return eL.intl.format(eL.t.cmkbFB, {});
                case N.Dmq.PAUSE_PENDING:
                    let L = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != L
                        ? eL.intl.format(eL.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: L })
                        : eL.intl.format(eL.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case N.Dmq.PAUSED:
                    if (d) return S;
                    return eL.intl.format(eL.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case N.Dmq.PAST_DUE:
                    return eL.intl.format(eL.t["d+0vwo"], {
                        endDate: (0, eg.i$)(e7(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return S;
            }
        case C.gD.PREMIUM_MONTH_TIER_1:
        case C.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case N.Dmq.CANCELED:
                    return f
                        ? m
                            ? eL.intl.format(eL.t.cXy8Bp, { price: i })
                            : eL.intl.format(eL.t["C/XsHt"], { price: i })
                        : eL.intl.string(eL.t.K6tYFa);
                case N.Dmq.ACCOUNT_HOLD:
                    return f
                        ? m
                            ? eL.intl.format(eL.t.HBkIBi, { price: i })
                            : eL.intl.format(eL.t.ZsO1Sx, { price: i })
                        : eL.intl.format(eL.t["0+/WH7"], {});
                case N.Dmq.UNPAID:
                    return eL.intl.format(eL.t.McIzwj, {});
                case N.Dmq.PAUSE_PENDING:
                    let D = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != D
                        ? eL.intl.format(eL.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: D })
                        : eL.intl.format(eL.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case N.Dmq.PAUSED:
                    if (d) return R;
                    return eL.intl.format(eL.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case N.Dmq.PAST_DUE:
                    return eL.intl.format(eL.t["d+0vwo"], {
                        endDate: (0, eg.i$)(e7(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return R;
            }
        case C.gD.PREMIUM_MONTH_TIER_2:
        case C.gD.PREMIUM_YEAR_TIER_2:
        case C.gD.PREMIUM_3_MONTH_TIER_2:
        case C.gD.PREMIUM_6_MONTH_TIER_2:
        case C.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case N.Dmq.CANCELED:
                    return f
                        ? m
                            ? eL.intl.format(eL.t.xoFgRh, { price: i, num: g })
                            : eL.intl.format(eL.t.nXdbKo, { price: i, num: g })
                        : eL.intl.format(eL.t.EcSdRH, { num: g });
                case N.Dmq.ACCOUNT_HOLD:
                    return f
                        ? m
                            ? eL.intl.format(eL.t["5C/0QG"], { price: i, num: g })
                            : eL.intl.format(eL.t.xfYkhu, { price: i, num: g })
                        : eL.intl.format(eL.t.ivjxcn, { num: g });
                case N.Dmq.UNPAID:
                    return eL.intl.format(eL.t["0HopYf"], { num: g });
                case N.Dmq.PAUSE_PENDING:
                    let y = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != y
                        ? eL.intl.format(eL.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: y })
                        : eL.intl.format(eL.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case N.Dmq.PAUSED:
                    if (d) return O;
                    return eL.intl.format(eL.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case N.Dmq.BILLING_RETRY:
                    return eL.intl.format(eL.t["IlJ/HV"], {
                        endDate: c()(t.currentPeriodStart).add(C.bx, "days").toDate(),
                    });
                case N.Dmq.PAST_DUE:
                    return eL.intl.format(eL.t["d+0vwo"], {
                        endDate: (0, eg.i$)(e7(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === C.gD.PREMIUM_YEAR_TIER_2
                            ? eL.intl.format(eL.t.z2oQtA, {
                                  percent: s?.percentage ?? C.Cq,
                                  regularPrice: A,
                                  renewalDate: e8(t, u),
                              })
                            : m
                              ? eL.intl.formatToPlainString(eL.t["3ZiutU"], {
                                    percent: s?.percentage ?? C._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? C.OJ,
                                })
                              : eL.intl.formatToPlainString(eL.t["G6+XOT"], {
                                    percent: s?.percentage ?? C._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? C.OJ,
                                })
                        : O;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function eX(e) {
    var t, n, i;
    let r,
        a,
        {
            renewalInvoicePreview: s,
            renewalInvoiceWithEntitlementsPreview: l,
            subscription: d,
            planId: c,
            includePremiumGuilds: u = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: E,
            hasFractionalPremiumWithSub: A = !1,
            fractionalPremiumInfo: h,
        } = e,
        I = ep.A.get(c);
    return (
        o()(null != I, "Missing plan"),
        eZ({
            subscription: d,
            planId: I.id,
            price:
                ((t = s),
                (n = d),
                (i = I),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? ex(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, eC.CE)((0, eC.$g)(a, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: u,
            hasDiscountApplied: _,
            activeDiscountInfo: E,
            renewalInvoiceWithoutEntitlementsPreview: s,
            renewalInvoiceWithEntitlementsPreview: l,
            hasFractionalPremiumWithSub: A,
            fractionalPremiumInfo: h,
        })
    );
}
function eQ(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, eA.m1)(t) ? null : eK(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return C.pW.has(t);
        }),
        a = r?.planId === C.gD.PREMIUM_MONTH_GUILD || r?.planId === C.gD.PREMIUM_YEAR_GUILD ? eL.t.Pi5yMJ : null,
        s = null != a ? eL.intl.formatToPlainString(a, { num: r?.quantity }) : void 0;
    if (null != i && null != s)
        return eL.intl.formatToPlainString(eL.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function eJ(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === C.hd[i].skuId ? i : void 0,
        a = [];
    switch (t) {
        case C.pe.TIER_0:
            a = [C.gD.PREMIUM_YEAR_TIER_0, C.gD.PREMIUM_MONTH_TIER_0];
            break;
        case C.pe.TIER_1:
            a = [C.gD.PREMIUM_MONTH_TIER_1];
            break;
        case C.pe.TIER_2:
            a = [C.gD.PREMIUM_YEAR_TIER_2, C.gD.PREMIUM_MONTH_TIER_2];
            break;
        case C.pe.GUILD:
            return [];
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== r) {
        let e = a.indexOf(r);
        a.splice(e, 1), a.unshift(r);
    }
    return a;
}
function e0(e) {
    let t = C.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, em.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e1(e) {
    let t = ep.A.getPlanIdsForSkus([tM(C.pe.GUILD)]);
    o()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e2 = new Set([
    C.gD.NONE_MONTH,
    C.gD.NONE_3_MONTH,
    C.gD.NONE_6_MONTH,
    C.gD.NONE_YEAR,
    C.gD.PREMIUM_MONTH_TIER_0,
    C.gD.PREMIUM_MONTH_TIER_1,
    C.gD.PREMIUM_MONTH_TIER_2,
    C.gD.PREMIUM_YEAR_TIER_0,
    C.gD.PREMIUM_YEAR_TIER_1,
    C.gD.PREMIUM_YEAR_TIER_2,
    C.gD.PREMIUM_3_MONTH_TIER_2,
    C.gD.PREMIUM_6_MONTH_TIER_2,
    C.gD.PREMIUM_GROUP_MONTH,
]);
function e3(e) {
    return e2.has(e);
}
function e6(e) {
    return C.pW.has(e);
}
function e4(e) {
    return e3(e) || e6(e);
}
function e5(e) {
    return null != e && e === C.gD.PREMIUM_GROUP_MONTH;
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
        let t = e.isPurchasedViaApple ? C.U1 : C.L9;
        return { days: t, expiresDate: c()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: c()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: c()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? C.a5 : C.EV;
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
        let e = tG(t);
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
    let t = tG(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === C.xc.NONE)) return "";
    let n = { days: eL.t.fYmirx, hours: eL.t["C3RO+g"], minutes: eL.t.r77oHc },
        i = (0, A.Vb)((0, eg.Tf)(0, t * eS.A.Millis.HOUR));
    return (0, eg.uN)(i, n);
}
function tt(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === N.Dmq.PAST_DUE;
}
function tn(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t =
                e.renewalMutations.planId !== e.planId
                    ? eL.intl.string(eL.t["0rzJ4J"])
                    : eL.intl.string(eL.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = eL.intl.string(eL.t.a9Mdb3)),
        t
    );
}
function ti(e) {
    if (null == e) return !1;
    let t = ef.A.getPaymentSource(e);
    return null != t && eO.AD.has(t.type);
}
function tr(e) {
    return e.isPurchasedExternally
        ? e.status === N.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = e1(n);
              return 0 === (null != t ? e1(t.additionalPlans) : null) && 0 !== r ? N.Dmq.CANCELED : i;
          })(e) === N.Dmq.CANCELED;
}
function ta(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: l, additionalPlans: d, renewalMutations: c } = n,
        u = ep.A.get(l);
    o()(null != u, "Missing plan");
    let _ = e1(d),
        A = c?.additionalPlans != null ? e1(c.additionalPlans) : _,
        h = Math.max(0, _ - A),
        I = A > 0 && h > 0,
        f = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => C.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = I ? A : _;
            try {
                e = td(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                f = !0;
            }
        }
        t = null != e ? (0, eC.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || f,
        T = null != t ? (0, eC.CE)(t, u.interval, u.intervalCount) : "",
        m = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (tr(n))
        return p
            ? eL.intl.format(eL.t["3/WTrI"], { quantity: _ })
            : m
              ? eL.intl.format(eL.t["0ozBSB"], { quantity: _, rate: T })
              : eL.intl.format(eL.t["yjsv/s"], { quantity: _, rate: T });
    switch (n.status) {
        case N.Dmq.ACCOUNT_HOLD:
            return p
                ? eL.intl.format(eL.t.Nlf3nc, { quantity: _, boostQuantity: _ })
                : m
                  ? eL.intl.format(eL.t.oiRy7v, { quantity: _, boostQuantity: _, rate: T })
                  : eL.intl.format(eL.t["0QxOAi"], { quantity: _, boostQuantity: _, rate: T });
        case N.Dmq.PAUSE_PENDING:
        case N.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return eL.intl.string(eL.t.CduWAm);
            return eL.intl.format(eL.t["5iud9s"], { quantity: _ });
        case N.Dmq.PAST_DUE:
            if (n.isBoostOnly)
                return eL.intl.format(eL.t["d+0vwo"], {
                    endDate: (0, eg.i$)(e7(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (I) {
                if (p) return eL.intl.format(eL.t["krRy+d"], { activeQuantity: A, pendingQuantity: h });
                let e = m ? eL.t["4nc7+E"] : eL.t.BmaudS;
                return eL.intl.format(e, { activeQuantity: A, pendingQuantity: h, rate: T });
            }
            return p
                ? eL.intl.format(eL.t["5iud9s"], { quantity: _ })
                : m
                  ? eL.intl.format(eL.t.eDwrLA, { quantity: _, rate: T })
                  : eL.intl.format(eL.t.ijSDcI, { quantity: _, rate: T });
    }
}
function ts(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = ex(e.id, !1, r, t);
        } catch {
            i = eU(e.id, !1, r);
        }
    else i = eU(e.id, !1, r);
    let a = (0, eC.$g)(i.amount, i.currency);
    return e.currency !== eO.Yr.USD && !0 === n && (a = a.concat("*")), a;
}
function tl(e) {
    let { status: t, renewalMutations: n } = e;
    return t === N.Dmq.CANCELED || (null != n && (0, eA.m1)(n.planId) && !e.isPurchasedExternally);
}
function to(e) {
    return e === N.Dmq.PAST_DUE || e === N.Dmq.ACCOUNT_HOLD || e === N.Dmq.BILLING_RETRY;
}
function td(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: eI.A.ipCountryCodeWithFallback, currency: n },
        a = ep.A.get(e);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, em.pM)(t, { tags: { planId: e } }), t);
    }
    let s = ep.A.getForSkuAndInterval(tM(C.pe.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, em.pM)(t, { tags: { planId: e } }), t);
    }
    return ex(s.id, (0, S.ki)(i), !1, r);
}
function tc(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case C.gD.PREMIUM_MONTH_TIER_0:
                return eL.intl.string(eL.t["0ggVqN"]);
            case C.gD.PREMIUM_YEAR_TIER_0:
                return eL.intl.string(eL.t["jm+ZQw"]);
            case C.gD.PREMIUM_MONTH_TIER_1:
                return eL.intl.string(eL.t.uph4Jx);
            case C.gD.PREMIUM_YEAR_TIER_1:
                return eL.intl.string(eL.t["D/l7Yt"]);
            case C.gD.PREMIUM_MONTH_TIER_2:
            case C.gD.PREMIUM_GROUP_MONTH:
                return eL.intl.string(eL.t["5l1MuV"]);
            case C.gD.PREMIUM_YEAR_TIER_2:
                return eL.intl.string(eL.t.G0mISV);
        }
    switch (i) {
        case C.gD.PREMIUM_MONTH_TIER_0:
            return n ? eL.intl.string(eL.t.cRCCJ3) : eL.intl.string(eL.t["/G3aKw"]);
        case C.gD.PREMIUM_YEAR_TIER_0:
            return n ? eL.intl.string(eL.t.cRCCJ3) : eL.intl.string(eL.t["2eQpsL"]);
        case C.gD.PREMIUM_MONTH_TIER_1:
            return n ? eL.intl.string(eL.t.cRCCJ3) : eL.intl.string(eL.t.gueLg5);
        case C.gD.PREMIUM_YEAR_TIER_1:
            return n ? eL.intl.string(eL.t.cRCCJ3) : eL.intl.string(eL.t["MhH/vW"]);
        case C.gD.PREMIUM_MONTH_TIER_2:
            return n ? eL.intl.string(eL.t.cRCCJ3) : eL.intl.string(eL.t.LQVQIq);
        case C.gD.PREMIUM_GROUP_MONTH:
            return eL.intl.formatToPlainString(eD.default.LwdrNi, { premiumGroupProductName: (0, eR.DP)() });
        case C.gD.PREMIUM_YEAR_TIER_2:
            return n ? eL.intl.string(eL.t.cRCCJ3) : eL.intl.string(eL.t["0nfg1x"]);
        case C.gD.PREMIUM_3_MONTH_TIER_2:
        case C.gD.PREMIUM_6_MONTH_TIER_2:
            return eL.intl.formatToPlainString(eL.t.BCD4fT, { intervalCount: t.intervalCount });
        case C.gD.NONE_MONTH:
        case C.gD.NONE_YEAR:
        case C.gD.NONE_3_MONTH:
        case C.gD.NONE_6_MONTH:
        case C.gD.PREMIUM_MONTH_GUILD:
        case C.gD.PREMIUM_YEAR_GUILD:
        case C.gD.PREMIUM_3_MONTH_GUILD:
        case C.gD.PREMIUM_6_MONTH_GUILD:
            return eL.intl.string(eL.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, em.pM)(r, { tags: { planId: i } }), r);
}
function tu(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = ep.A.get(t);
    return o()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function t_() {
    let e = eO.Yr.USD;
    try {
        e = eU(C.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function tE(e) {
    let { intervalType: t = C.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case C.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eL.intl.formatToPlainString(eL.t.fRNBRX, { weeks: n / 7 })
                    : eL.intl.formatToPlainString(eL.t.EIpHEj, { weeks: n / 7 });
            return i
                ? eL.intl.formatToPlainString(eL.t["6Cdzoy"], { days: n })
                : eL.intl.formatToPlainString(eL.t["kbBj/h"], { days: n });
        case C.WT.MONTH:
            return i
                ? eL.intl.formatToPlainString(eL.t.x5MgxS, { months: n })
                : eL.intl.formatToPlainString(eL.t["4SEnCZ"], { months: n });
        case C.WT.YEAR:
            return i
                ? eL.intl.formatToPlainString(eL.t["h+63yl"], { years: n })
                : eL.intl.formatToPlainString(eL.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tA(e) {
    let { intervalType: t = C.WT.MONTH, intervalCount: n = 1 } = e,
        i = t_(),
        r = (0, eC.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case C.WT.DAY:
            if (n >= 7 && n % 7 == 0) return eL.intl.formatToPlainString(eL.t.C6i5Jt, { weeks: n / 7, price: r });
            return eL.intl.formatToPlainString(eL.t.cR9ifw, { days: n, price: r });
        case C.WT.MONTH:
            return eL.intl.formatToPlainString(eL.t["8FZfNo"], { months: n, price: r });
        case C.WT.YEAR:
            return eL.intl.formatToPlainString(eL.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function th(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return tA({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function tI(e) {
    let { intervalType: t = C.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case C.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eL.intl.formatToPlainString(eL.t.iVZYyl, { weeks: n / 7 })
                    : eL.intl.formatToPlainString(eL.t.EmoBD2, { weeks: n / 7 });
            return i
                ? eL.intl.formatToPlainString(eL.t.jzH70Z, { days: n })
                : eL.intl.formatToPlainString(eL.t["k2UNz+"], { days: n });
        case C.WT.MONTH:
            return i
                ? eL.intl.formatToPlainString(eL.t.erUSmA, { months: n })
                : eL.intl.formatToPlainString(eL.t.kridzK, { months: n });
        case C.WT.YEAR:
            return i
                ? eL.intl.formatToPlainString(eL.t.IfYQVC, { years: n })
                : eL.intl.formatToPlainString(eL.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tf(e, t) {
    switch (e) {
        case N.kM_.APPLE_PARTNER:
        case N.kM_.APPLE_ADVANCED_COMMERCE:
        case N.kM_.APPLE:
            return ey[t];
        case N.kM_.GOOGLE:
            return ev[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tp(e, t) {
    return (0, S.ki)(e) || to(t?.status);
}
function tT(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => C.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function tm(e) {
    return e.filter((e) => !C.JM.has(e.planId));
}
function tg(e, t, n, i) {
    if (!i.has(t))
        throw new h.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
    let r = !1,
        a = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((r = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!r) {
        let i = { planId: t, quantity: n },
            r = e.items.find((e) => e.planId === t);
        null != r && (i.id = r.id), a.push(i);
    }
    return a.filter((e) => 0 !== e.quantity);
}
function tS(e, t) {
    return tg(e, t, 1, C.JM);
}
function tN(e, t, n) {
    return tg(e, n, t, C.pW);
}
function tC(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => C.JM.has(e.planId));
    if (null != t) {
        let n = ep.A.get(t.planId);
        o()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = ep.A.get(e.planId);
                if ((o()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = ep.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return o()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function tR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = C.f5[e].fileSize;
    return (0, eN.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function tO(e) {
    return null == e ? null : e.items.find((e) => C.pW.has(e.planId));
}
function tL(e) {
    let t = null != e ? eP(e) : null;
    return null != t ? e0(t.planId) : null;
}
function tD(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function ty(e) {
    return eE(el, e);
}
function tv(e) {
    return eE(Y, e);
}
function tb(e, t) {
    let n = (0, eC.$g)(e.amount, e.currency),
        i = eW(t);
    return `${n}/${i}`;
}
function tM(e) {
    return e;
}
function tP(e) {
    return "isNitroLocked" in e;
}
function tU() {
    let e = (0, u.bG)([eh.default], () => eh.default.getCurrentUser());
    return (0, S.YE)(e, C.PremiumTypes.TIER_2);
}
function tw(e) {
    var t;
    let n = C.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case C.Tt:
                return C.h7;
            case C.yo:
                return C.CA;
        }
    else;
    return n;
}
function tG(e) {
    return tx(e.map((e) => e.skuId));
}
function tx(e) {
    return e.reduce((e, t) => {
        let [n, i] = C.NL[t],
            r = 1;
        switch (n) {
            case C.T.HOUR:
                r = 1;
                break;
            case C.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
function tk(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = C.En[t.skuId];
    return null == r ? null : ex(r, !1, n, i);
}
function tF(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = C.XE[t];
    return null != r && (a = tB(r, n, i)), a;
}
function tV(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === C.WT.DAY || (t.interval === C.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tk({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === C.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function tB(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === C.WT.YEAR) {
        try {
            if (((t = tk({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = ex(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = tV({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = ex(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function tj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== C.WT.YEAR) return null;
    let i = tk({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || 0 === i.amount) return null;
    let r = tH(e, t, n);
    if (null == r) return null;
    let a = Math.floor((r.amount / i.amount) * 2) / 2;
    return a <= 0 ? null : a;
}
function tW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== C.WT.YEAR) return null;
    let i = ex(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function tY(e) {
    return null == e ? 0 : Math.max((0, eg.m_)(new Date(), new Date(e)), 0);
}
let tK = Object.freeze({
    isNewUser: tD,
    isPremiumAtLeast: S.CC,
    isPremium: S.ki,
    isPremiumExactly: S.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: ex,
    getDefaultPrice: eU,
    getInterval: function (e) {
        let t = C.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, em.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: ej,
    getIntervalStringAsNoun: eW,
    getPremiumType: eY,
    getTierDisplayNameByPlanId: ez,
    getDisplayName: eK,
    getPremiumPlanOptions: eJ,
    formatInterval: function (e) {
        if (e === C.WT.YEAR) return eL.intl.string(eL.t.tfqrhj);
        if (e === C.WT.MONTH) return eL.intl.string(eL.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eZ,
    isPremiumSku: function (e) {
        return e === C.pe.TIER_0 || e === C.pe.TIER_1 || e === C.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === C.WT.MONTH) return t;
        if (e === C.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: R,
    getSkuIdForPlan: e0,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case C.PremiumTypes.TIER_0:
                return C.pe.TIER_0;
            case C.PremiumTypes.TIER_1:
                return C.pe.TIER_1;
            case C.PremiumTypes.TIER_2:
                return C.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return eY(e) === C.PremiumTypes.TIER_2 ? C.M4 : 0;
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
                          fractionalState: C.xc.NONE,
                          startsAt: c()(0),
                          endsAt: c()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: c()(0),
                          unactivatedUnits: [],
                      },
            a = null !== n && e.status === N.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, eC.$g)(
                      a.invoiceItems
                          .filter((e) => C.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      a.currency,
                  )
                : (0, eC.$g)(a.total, a.currency);
        if (eh.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return eL.intl.format(eL.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === N.Dmq.CANCELED) return eL.intl.format(eL.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === N.Dmq.PAUSE_PENDING)
            return eL.intl.format(eL.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === N.Dmq.PAUSED)
            return r.fractionalState !== C.xc.NONE
                ? eL.intl.format(eL.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? eL.intl.format(eL.t.KTYQCg, { planName: eL.intl.string(eL.t.Ipxkog), price: s })
                      : eL.intl.string(eL.t.fMz6Lg)
                  : i
                    ? eL.intl.format(eL.t.zcgtzf, {
                          planName: eL.intl.string(eL.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : eL.intl.format(eL.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === N.Dmq.PAST_DUE) {
            let t = e7(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = c()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = c()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? eL.intl.format(eL.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: eO.qm[e.paymentGateway],
                      paymentSourceLink: tf(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : eL.intl.format(eL.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        {
            var l;
            if (e.status === N.Dmq.BILLING_RETRY)
                return eL.intl.format(eL.t.EMTLOT, {
                    endDate: c()(e.currentPeriodStart).add(C.bx, "days").toDate(),
                    price: s,
                });
            if (e.status === N.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, p.xv)()
                    ? eL.intl.format(eL.t["dtcxw+"], {
                          endDate: c()(e.currentPeriodStart).add(C.ph, "days").toDate(),
                          paymentGatewayName: eO.qm[e.paymentGateway],
                          paymentSourceLink: tf(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : eL.intl.format(eL.t.EMTLOT, {
                          endDate: c()(e.currentPeriodStart).add(C.ph, "days").toDate(),
                          price: s,
                      });
            if (null != (l = e).paymentSourceId && ti(l.paymentSourceId))
                return eL.intl.format(eL.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === N.Dmq.UNPAID) return eL.intl.format(eL.t.CzTKom, { maxProcessingTimeInDays: C.G4 });
            if (e.isPurchasedExternally)
                return eL.intl.format(eL.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: eO.qm[e.paymentGateway],
                    subscriptionManagementLink: tf(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = e9(n, r.unactivatedUnits)),
                i
                    ? eL.intl.format(eL.t.Vl3cED, { planName: eL.intl.string(eL.t.Ipxkog), renewalDate: n, price: s })
                    : eL.intl.format(eL.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: e8,
    extendDateWithUnconsumedFractionalPremium: e9,
    getUnactivatedFractionalPremiumDurationString: te,
    isSwitchingPlansDisabled: tt,
    getSwitchingPlansDisabledMessage: tn,
    isNoneSubscription: eA.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === N.Dmq.CANCELED || e.status === N.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e3(t);
        });
        return null == i ||
            (0, eA.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === N.Dmq.CANCELED || e.status === N.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e3(t);
        });
        return (null == i || (0, eA.m1)(i.subscriptionPlanId)) && (n = N.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: tl,
    getPremiumGuildIntervalPrice: td,
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
    getBillingReviewSubheader: tc,
    getIntervalForInvoice: tu,
    getPremiumPlanItem: eP,
    getGuildBoostPlanItem: tO,
    isBoostOnlySubscription: function (e) {
        return null != e && null == eP(e) && null != tO(e);
    },
    getPremiumSkuIdForSubscription: tL,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = eP(e);
            if (null != t) return eY(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tG,
    castPremiumSubscriptionAsSkuId: tM,
    calculateDiscountPercentageForYearlyPlan: tB,
    calculateYearlyPlanDollarSavingsAmount: tH,
    calculateYearlyPlanMonthsSaved: tj,
    calculateYearlyPlanMonthlyRateAmount: tW,
    getDaysSincePremium: tY,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, eg.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return eE(U, e);
    },
    canUseEmojisEverywhere: function (e) {
        return eE(w, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return eE(x, e);
    },
    canUseCustomCallSounds: function (e) {
        return eE(k, e);
    },
    canUploadLargeFiles: function (e) {
        return eE(es, e);
    },
    canUseBadges: function (e) {
        return eE(j, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return eE(ea, e);
    },
    canEditDiscriminator: function (e) {
        return eE(B, e);
    },
    hasBoostDiscount: function (e) {
        return eE(z, e);
    },
    canUseAnimatedAvatar: function (e) {
        return eE(V, e);
    },
    canInstallPremiumApplications: function (e) {
        return eE(ee, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return eE(er, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return eE(ei, e);
    },
    canRedeemPremiumPerks: function (e) {
        return eE(et, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return eE(W, e);
    },
    canUsePremiumAppIcons: function (e) {
        return eE(K, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return eE(H, e);
    },
    canUseClientThemes: function (e) {
        return eE($, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? eE(X, t) : eE(Z, t);
    },
    canUseQuestOrbMultiplier: ty,
    hasFreeBoosts: function (e) {
        return eE(q, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return eE(G, e);
    },
    canUseCustomBackgrounds: function (e) {
        return eE(en, e);
    },
    canUseCollectibles: tv,
    canUseMonthlyOrbs: function (e) {
        return !!(0, I.f0)("canUseMonthlyOrbs") && (0, b.Nh)(e?.perks, _.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ((0, I.f0)("canUseShopDiscounts") && (0, b.Nh)(e?.perks, _.bb.SHOP_DISCOUNTS)) || tv(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return ((0, I.f0)("canUseMoreQuestOrbs") && (0, b.Nh)(e?.perks, _.bb.MORE_QUEST_ORBS)) || ty(e);
    },
    formatPriceString: tb,
    StreamQuality: eM,
});
