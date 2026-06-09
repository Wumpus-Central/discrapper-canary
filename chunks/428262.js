"use strict";
n.d(t, {
    ki: () => tl,
    Ke: () => ej,
    FY: () => tp,
    ff: () => td,
    aZ: () => tO,
    Nc: () => tn,
    Rr: () => th,
    YE: () => S.YE,
    OU: () => eJ,
    qn: () => tv,
    CC: () => S.CC,
    iv: () => tG,
    RH: () => eq,
    FJ: () => eW,
    ee: () => tT,
    $k: () => ts,
    VA: () => tB,
    Dd: () => eX,
    kX: () => tt,
    To: () => tj,
    _e: () => te,
    l6: () => ek,
    y8: () => eG,
    re: () => tm,
    nB: () => eQ,
    pb: () => eF,
    Zb: () => e7,
    Pr: () => eU,
    nK: () => tx,
    mv: () => tb,
    Tm: () => e0,
    J$: () => tr,
    Pg: () => tS,
    D8: () => eY,
    TW: () => S.ki,
    $Q: () => eV,
    aE: () => tI,
    L_: () => tV,
    Uf: () => ta,
    sS: () => to,
    ji: () => e8,
    Q8: () => ti,
    Mn: () => e$,
    m6: () => eK,
    Em: () => tP,
    xq: () => e6,
    Ge: () => t_,
    Of: () => tA,
    tW: () => tg,
    mH: () => tM,
    Ay: () => tY,
    EL: () => eP,
    bx: () => e2,
    Zw: () => ez,
    Om: () => tN,
    GX: () => ty,
    JM: () => ex,
    UC: () => eB,
    e1: () => tk,
    PK: () => tu,
    z4: () => e4,
    LE: () => tE,
    ys: () => e5,
    U8: () => eH,
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
    p = n(930767),
    E = n(968671),
    m = n(626584),
    g = n(981088),
    A = n(367888),
    I =
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
    T = n(683760),
    S = n(474090),
    y = n(652215),
    N = n(788868);
function v(e) {
    if (null == e) return y.TbF;
    let t = T.A.getPremiumTypeOverride();
    return e.isStaff() && t === N.$I
        ? y.mu
        : null != e.premiumType && (0, S.ki)(e)
          ? N.f5[e.premiumType].fileSize
          : y.TbF;
}
class C {
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
class R {
    skuId;
    skuFeatures;
    constructor(e, t) {
        (this.skuId = e), (this.skuFeatures = t);
    }
}
var O = n(945810),
    b =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (r[(r.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        r);
let D = (0, O.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var L = n(349871);
let w = new m.A("ProductCatalog.tsx");
class M extends C {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = N.u0[t.premiumType];
                        if (null == n)
                            return (
                                w.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = el[n];
                        if (null == i)
                            return (
                                w.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        w.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let P = new M(I.ANIMATED_EMOJIS),
    x = new M(I.EMOJIS_EVERYWHERE),
    k = new M(I.STICKERS_EVERYWHERE),
    U = new M(I.SOUNDBOARD_EVERYWHERE),
    G = new M(I.CUSTOM_CALL_SOUNDS),
    F = new M(I.PREMIUM_VOICE_FILTERS),
    V = new M(I.ANIMATED_AVATAR),
    B = new M(I.CUSTOM_DISCRIMINATOR),
    H = new M(I.PREMIUM_GUILD_MEMBER_PROFILE),
    j = new M("profileBadges"),
    Y = new M(I.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    W = new M("collectibles"),
    K = new M("appIcons"),
    $ = new M(I.CLIENT_THEMES),
    z = new M("boostDiscount"),
    q = new M("freeBoosts"),
    X = new M(I.STREAM_MID_QUALITY),
    Z = new M(I.STREAM_HIGH_QUALITY),
    Q = new M(I.CUSTOM_NOTIFICATION_SOUNDS),
    J = new M("fancyVoiceChannelReactions"),
    ee = new M("installPremiumApplications"),
    et = new M("redeemPremiumPerks"),
    en = new M(I.VIDEO_FILTER_ASSETS);
new C(I.INCREASED_FILE_UPLOAD_SIZE, v);
let ei = new M(I.INCREASED_GUILD_LIMIT),
    er = new M(I.INCREASED_MESSAGE_LENGTH),
    es = new M("increasedVideoUploadQuality"),
    ea = new M("uploadLargeFiles"),
    eo = new M(I.QUEST_ORB_MULTIPLIER),
    el = Object.freeze({
        [N.pe.TIER_0]: new R(N.pe.TIER_0, [P, x, k, j, en, es, ea, K]),
        [N.pe.TIER_1]: new R(N.pe.TIER_1, [P, x, V, B, j, z, X, J, es, ea, K]),
        [N.pe.TIER_2]: new R(N.pe.TIER_2, [
            P,
            x,
            k,
            U,
            G,
            V,
            B,
            H,
            j,
            Y,
            $,
            z,
            q,
            X,
            Z,
            J,
            ee,
            et,
            en,
            ei,
            er,
            es,
            ea,
            K,
            W,
            Q,
            F,
            eo,
        ]),
    }),
    eu = [z, q],
    ec = [eo],
    ed = [],
    e_ = new Map([
        [P, _.bb.ANIMATED_EMOJIS],
        [x, _.bb.EMOJIS_EVERYWHERE],
        [k, _.bb.STICKERS_EVERYWHERE],
        [U, _.bb.SOUNDBOARD_EVERYWHERE],
        [G, _.bb.CUSTOM_CALL_SOUNDS],
        [F, _.bb.PREMIUM_VOICE_FILTERS],
        [V, _.bb.ANIMATED_AVATAR],
        [B, _.bb.CUSTOM_DISCRIMINATOR],
        [H, _.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [Y, _.bb.PROFILE_PREMIUM_FEATURES],
        [W, _.bb.PREMIUM_COLLECTIBLES],
        [$, _.bb.CLIENT_THEMES],
        [X, _.bb.STREAM_MID_QUALITY],
        [Z, _.bb.STREAM_HIGH_QUALITY],
        [en, _.bb.VIDEO_FILTER_ASSETS],
        [ei, _.bb.INCREASED_GUILD_LIMIT],
        [er, _.bb.INCREASED_MESSAGE_LENGTH],
        [ea, _.bb.INCREASED_FILE_UPLOAD_SIZE],
        [j, _.bb.PROFILE_BADGES],
        [K, _.bb.APP_ICONS],
        [z, _.bb.BOOST_DISCOUNT],
        [q, _.bb.FREE_BOOSTS],
        [ee, _.bb.INSTALL_PREMIUM_APPLICATIONS],
        [es, _.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function eh(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && eu.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && ec.includes(e)) ||
        (n && ed.includes(e))
    )
        return !1;
    let i = e_.get(e);
    if (null != i && t?.perks != null) {
        let n = D.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== b.CONTROL) {
            let r = e.getFeatureValue(t),
                s = (0, L.Nh)(t?.perks, i);
            return n === b.DUAL_READ_RETURN_NEW ? s : r;
        }
    }
    return e.getFeatureValue(t);
}
var ef = n(906023),
    ep = n(832946),
    eE = n(287809),
    em = n(615405),
    eg = n(295405),
    eA = n(97352),
    eI = n(166403),
    eT = n(739508),
    eS = n(58703),
    ey = n(927813),
    eN = n(255438),
    ev = n(580630),
    eC = n(88001),
    eR = n(818348),
    eO = n(375708),
    eb = n(466919);
let eD = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    eL = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    ew = new m.A("PremiumUtils.tsx");
var eM = (((s = {}).MID = "mid"), (s.HIGH = "high"), s);
function eP(e) {
    return e.items.find((e) => N.JM.has(e.planId));
}
function ex(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = eg.A.defaultPaymentSourceId ?? void 0,
        a = eI.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        eG(e, t, n, { paymentSourceId: s, currency: i }, r)
    );
}
function ek(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function eU(e, t, n) {
    let i = a.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return a.useMemo(
        () => ({
            priceOptions: ek(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function eG(e) {
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
    if (null != eA.A.get(e)) {
        let i = y.lid.DEFAULT;
        n ? (i = y.lid.GIFT) : t && (i = y.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: y.lid.DEFAULT },
                r = eF(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    ew.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let s = r.find((e) => e.currency === i.toLowerCase());
                return null != s
                    ? s
                    : null != t
                      ? eF(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: s, purchaseType: i, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, eT.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: i.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (r && (0, eT.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function eF(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: y.lid.DEFAULT },
        i = (function (e, t) {
            let n = eA.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, eT.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (ew.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            ew.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                ew.info(`prices: ${r}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, eT.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        ew.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, eT.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function eV(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function eB(e, t, n) {
    let i,
        r,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, A._1)(e);
    null != a && (i = N.hd[a.planId].premiumType);
    let o = (0, S.CC)(i, N.PremiumTypes.TIER_0),
        l = (0, S.CC)(i, N.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = N.pW.has(i.planId) ? l : !N.JM.has(i.planId) && o),
            (e = void 0 === n ? ex(i.planId, r, !1, t) : eG(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity);
    }
    return eV(s);
}
function eH(e, t, n, i) {
    return (
        null === t && (l()(null !== e, "Subscription can't be null"), (t = [])), eB(null !== e ? tI(e, t) : tT(t), n, i)
    );
}
function ej(e) {
    switch (e) {
        case N.Ff.MONTH:
            return eO.intl.string(eO.t.FPybU7);
        case N.Ff.YEAR:
            return eO.intl.string(eO.t.tfqrhj);
        case N.Ff.DAY:
        case N.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function eY(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : N.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case N.WT.MONTH:
                let a = eO.intl.formatToPlainString(s === N.PremiumTypes.TIER_0 ? eO.t.NPKsLz : eO.t.poEovT, {
                    timeInterval: eO.intl.string(eO.t.FPybU7),
                });
                return r ? a : eO.intl.string(eO.t.Mh9bTt);
            case N.WT.YEAR:
                let o = eO.intl.formatToPlainString(s === N.PremiumTypes.TIER_0 ? eO.t.NPKsLz : eO.t.poEovT, {
                    timeInterval: eO.intl.string(eO.t.tfqrhj),
                });
                return r ? o : eO.intl.string(eO.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case N.WT.MONTH:
            if (1 !== i) return eO.intl.formatToPlainString(eO.t["0UlZnH"], { intervalCount: i });
            return eO.intl.string(eO.t.DKzs96);
        case N.WT.YEAR:
            return eO.intl.string(eO.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eW(e) {
    switch (e) {
        case N.WT.MONTH:
            return eO.intl.string(eO.t.FPybU7);
        case N.WT.YEAR:
            return eO.intl.string(eO.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function eK(e) {
    let t = N.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, eT.pM)(n, { tags: { planId: e } }), n);
}
function e$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case N.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? eO.intl.format(eO.t.TZXHNj, { duration: i })
                : n
                  ? eO.intl.string(eO.t["81iAgs"])
                  : eO.intl.string(eO.t["0efVPy"]);
        case N.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? eO.intl.format(eO.t.eqRhC7, { duration: i })
                : n
                  ? eO.intl.string(eO.t.UvzqY1)
                  : eO.intl.string(eO.t.eoVuBn);
        case N.gD.PREMIUM_MONTH_TIER_1:
            return n ? eO.intl.string(eO.t["g/dH5g"]) : eO.intl.string(eO.t["7O6qSq"]);
        case N.gD.PREMIUM_YEAR_TIER_1:
            return n ? eO.intl.string(eO.t.pdZJaq) : eO.intl.string(eO.t.Md5xbi);
        case N.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? eO.intl.format(eO.t.aI6QXz, { duration: i })
                : n
                  ? eO.intl.string(eO.t.SmVbHc)
                  : eO.intl.string(eO.t.FKYNC6);
        case N.gD.PREMIUM_GROUP_MONTH:
            return n
                ? eO.intl.string(eO.t.SmVbHc)
                : eO.intl.formatToPlainString(eb.default["8bPDtb"], { premiumGroupProductName: (0, eC.DP)() });
        case N.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? eO.intl.format(eO.t["1wBcPi"], { duration: i })
                : n
                  ? eO.intl.string(eO.t.JIq4O1)
                  : eO.intl.string(eO.t["cfu/5d"]);
        case N.gD.PREMIUM_3_MONTH_TIER_2:
            return eO.intl.string(eO.t.wCbINr);
        case N.gD.PREMIUM_6_MONTH_TIER_2:
            return eO.intl.string(eO.t["e3/ArU"]);
        case N.gD.PREMIUM_MONTH_GUILD:
            return n ? eO.intl.string(eO.t["6ZR3By"]) : eO.intl.string(eO.t["h80cx/"]);
        case N.gD.PREMIUM_YEAR_GUILD:
            return n ? eO.intl.string(eO.t.YDpAzZ) : eO.intl.string(eO.t.ZHkls0);
        case N.gD.PREMIUM_3_MONTH_GUILD:
            return eO.intl.string(eO.t.EZHHB6);
        case N.gD.PREMIUM_6_MONTH_GUILD:
            return eO.intl.string(eO.t.X2KDO2);
        case N.gD.PREMIUM_MONTH_LEGACY:
            return eO.intl.string(eO.t.PD6k79);
        case N.gD.PREMIUM_YEAR_LEGACY:
            return eO.intl.string(eO.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, eT.pM)(r, { tags: { planId: e } }), r);
}
function ez(e) {
    switch (e) {
        case N.pe.TIER_0:
            return eO.intl.string(eO.t["t9uG/o"]);
        case N.pe.TIER_1:
            return eO.intl.string(eO.t.FSOz78);
        case N.pe.TIER_2:
            return eO.intl.string(eO.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, eT.pM)(t, { tags: { skuId: e } }), t);
}
function eq(e) {
    let t = N.hd[e]?.premiumType,
        n = null != t ? N.Mr[t] : null;
    if (null != n) return eO.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, eT.pM)(i, { tags: { planId: e } }), i);
}
function eX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case N.PremiumTypes.TIER_0:
            return t ? "Basic" : eO.intl.string(eO.t["t9uG/o"]);
        case N.PremiumTypes.TIER_1:
            return t ? "Classic" : eO.intl.string(eO.t.FSOz78);
        case N.PremiumTypes.TIER_2:
            return eO.intl.string(eO.t.lG6a5x);
    }
}
function eZ(e) {
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
        _ = N.hd[n],
        f = tw(ex(_.id), _.interval),
        p = null != l && 0 === l.subtotal,
        E =
            tl(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !eE.default.getCurrentUser()?.hasFreePremium() &&
                !p),
        m = null != i && null == t.paymentGateway,
        g = t.status === y.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === y.lT7.OPEN,
        A = E ? y.Dmq.CANCELED : g ? y.Dmq.UNPAID : t.status,
        I = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        T = N.M4 + (r ? e2(t.additionalPlans) : 0),
        S = m
            ? I
                ? eO.intl.format(eO.t["cd+hqB"], { price: i })
                : eO.intl.format(eO.t.NUkcpF, { price: i })
            : eO.intl.string(eO.t.zYx3Y6),
        v = m
            ? I
                ? eO.intl.format(eO.t.VsKcFB, { price: i })
                : eO.intl.format(eO.t.hJ5xEX, { price: i })
            : eO.intl.string(eO.t["8rSipI"]),
        C = m
            ? I
                ? eO.intl.format(eO.t["jRy6/J"], { price: i, num: T })
                : eO.intl.format(eO.t.tTNE8M, { price: i, num: T })
            : eO.intl.format(eO.t["U+z/HJ"], { num: T });
    switch (n) {
        case N.gD.PREMIUM_MONTH_TIER_0:
        case N.gD.PREMIUM_YEAR_TIER_0:
            switch (A) {
                case y.Dmq.CANCELED:
                    return m
                        ? I
                            ? eO.intl.format(eO.t["USi/nc"], { price: i })
                            : eO.intl.format(eO.t["FS//l2"], { price: i })
                        : eO.intl.string(eO.t.JshLzq);
                case y.Dmq.ACCOUNT_HOLD:
                    return m
                        ? I
                            ? eO.intl.format(eO.t["5mv+2i"], { price: i })
                            : eO.intl.format(eO.t.nkAEfZ, { price: i })
                        : eO.intl.format(eO.t.SsLIXS, {});
                case y.Dmq.UNPAID:
                    return eO.intl.format(eO.t.cmkbFB, {});
                case y.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? eO.intl.format(eO.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : eO.intl.format(eO.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case y.Dmq.PAUSED:
                    if (u) return S;
                    return eO.intl.format(eO.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case y.Dmq.PAST_DUE:
                    return eO.intl.format(eO.t["d+0vwo"], {
                        endDate: (0, eS.i$)(e8(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return S;
            }
        case N.gD.PREMIUM_MONTH_TIER_1:
        case N.gD.PREMIUM_YEAR_TIER_1:
            switch (A) {
                case y.Dmq.CANCELED:
                    return m
                        ? I
                            ? eO.intl.format(eO.t.cXy8Bp, { price: i })
                            : eO.intl.format(eO.t["C/XsHt"], { price: i })
                        : eO.intl.string(eO.t.K6tYFa);
                case y.Dmq.ACCOUNT_HOLD:
                    return m
                        ? I
                            ? eO.intl.format(eO.t.HBkIBi, { price: i })
                            : eO.intl.format(eO.t.ZsO1Sx, { price: i })
                        : eO.intl.format(eO.t["0+/WH7"], {});
                case y.Dmq.UNPAID:
                    return eO.intl.format(eO.t.McIzwj, {});
                case y.Dmq.PAUSE_PENDING:
                    let O = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != O
                        ? eO.intl.format(eO.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: O })
                        : eO.intl.format(eO.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case y.Dmq.PAUSED:
                    if (u) return v;
                    return eO.intl.format(eO.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case y.Dmq.PAST_DUE:
                    return eO.intl.format(eO.t["d+0vwo"], {
                        endDate: (0, eS.i$)(e8(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return v;
            }
        case N.gD.PREMIUM_MONTH_TIER_2:
        case N.gD.PREMIUM_YEAR_TIER_2:
        case N.gD.PREMIUM_3_MONTH_TIER_2:
        case N.gD.PREMIUM_6_MONTH_TIER_2:
        case N.gD.PREMIUM_GROUP_MONTH:
            switch (A) {
                case y.Dmq.CANCELED:
                    return m
                        ? I
                            ? eO.intl.format(eO.t.xoFgRh, { price: i, num: T })
                            : eO.intl.format(eO.t.nXdbKo, { price: i, num: T })
                        : eO.intl.format(eO.t.EcSdRH, { num: T });
                case y.Dmq.ACCOUNT_HOLD:
                    return m
                        ? I
                            ? eO.intl.format(eO.t["5C/0QG"], { price: i, num: T })
                            : eO.intl.format(eO.t.xfYkhu, { price: i, num: T })
                        : eO.intl.format(eO.t.ivjxcn, { num: T });
                case y.Dmq.UNPAID:
                    return eO.intl.format(eO.t["0HopYf"], { num: T });
                case y.Dmq.PAUSE_PENDING:
                    let b = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != b
                        ? eO.intl.format(eO.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: b })
                        : eO.intl.format(eO.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case y.Dmq.PAUSED:
                    if (u) return C;
                    return eO.intl.format(eO.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case y.Dmq.BILLING_RETRY:
                    return eO.intl.format(eO.t["IlJ/HV"], {
                        endDate: c()(t.currentPeriodStart).add(N.bx, "days").toDate(),
                    });
                case y.Dmq.PAST_DUE:
                    return eO.intl.format(eO.t["d+0vwo"], {
                        endDate: (0, eS.i$)(e8(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === N.gD.PREMIUM_YEAR_TIER_2
                            ? eO.intl.format(eO.t.z2oQtA, {
                                  percent: a?.percentage ?? N.Cq,
                                  regularPrice: f,
                                  renewalDate: e9(t, d),
                              })
                            : I
                              ? eO.intl.formatToPlainString(eO.t["3ZiutU"], {
                                    percent: a?.percentage ?? N._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? N.OJ,
                                })
                              : eO.intl.formatToPlainString(eO.t["G6+XOT"], {
                                    percent: a?.percentage ?? N._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? N.OJ,
                                })
                        : C;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function eQ(e) {
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
        E = eA.A.get(c);
    return (
        l()(null != E, "Missing plan"),
        eZ({
            subscription: u,
            planId: E.id,
            price:
                ((t = a),
                (n = u),
                (i = E),
                (s =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? eG(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, ev.CE)((0, ev.$g)(s, t.currency), i.interval, i.intervalCount)),
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
function eJ(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, ep.m1)(t) ? null : e$(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return N.pW.has(t);
        }),
        s = r?.planId === N.gD.PREMIUM_MONTH_GUILD || r?.planId === N.gD.PREMIUM_YEAR_GUILD ? eO.t.Pi5yMJ : null,
        a = null != s ? eO.intl.formatToPlainString(s, { num: r?.quantity }) : void 0;
    if (null != i && null != a)
        return eO.intl.formatToPlainString(eO.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: a });
    if (null != i) return i;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function e0(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === N.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case N.pe.TIER_0:
            s = [N.gD.PREMIUM_YEAR_TIER_0, N.gD.PREMIUM_MONTH_TIER_0];
            break;
        case N.pe.TIER_1:
            s = [N.gD.PREMIUM_MONTH_TIER_1];
            break;
        case N.pe.TIER_2:
            s = [N.gD.PREMIUM_YEAR_TIER_2, N.gD.PREMIUM_MONTH_TIER_2];
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
function e1(e) {
    let t = N.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e2(e) {
    let t = eA.A.getPlanIdsForSkus([tM(N.pe.GUILD)]);
    l()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e3 = new Set([
    N.gD.NONE_MONTH,
    N.gD.NONE_3_MONTH,
    N.gD.NONE_6_MONTH,
    N.gD.NONE_YEAR,
    N.gD.PREMIUM_MONTH_TIER_0,
    N.gD.PREMIUM_MONTH_TIER_1,
    N.gD.PREMIUM_MONTH_TIER_2,
    N.gD.PREMIUM_YEAR_TIER_0,
    N.gD.PREMIUM_YEAR_TIER_1,
    N.gD.PREMIUM_YEAR_TIER_2,
    N.gD.PREMIUM_3_MONTH_TIER_2,
    N.gD.PREMIUM_6_MONTH_TIER_2,
    N.gD.PREMIUM_GROUP_MONTH,
]);
function e6(e) {
    return e3.has(e);
}
function e4(e) {
    return N.pW.has(e);
}
function e5(e) {
    return e6(e) || e4(e);
}
function e7(e) {
    return null != e && e === N.gD.PREMIUM_GROUP_MONTH;
}
function e8(e) {
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
        let t = e.isPurchasedViaApple ? N.U1 : N.L9;
        return { days: t, expiresDate: c()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: c()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: c()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? N.a5 : N.EV;
        return { days: t, expiresDate: c()(e.currentPeriodStart).add(t, "days") };
    }
}
function e9(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = te(n, t.unactivatedUnits)), n;
}
function te(e, t, n, i) {
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
function tt(e) {
    let t = tU(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === N.xc.NONE)) return "";
    let n = { days: eO.t.fYmirx, hours: eO.t["C3RO+g"], minutes: eO.t.r77oHc },
        i = (0, f.Vb)((0, eS.Tf)(0, t * ey.A.Millis.HOUR));
    return (0, eS.uN)(i, n);
}
function tn(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === y.Dmq.PAST_DUE;
}
function ti(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t =
                e.renewalMutations.planId !== e.planId
                    ? eO.intl.string(eO.t["0rzJ4J"])
                    : eO.intl.string(eO.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = eO.intl.string(eO.t.a9Mdb3)),
        t
    );
}
function tr(e) {
    if (null == e) return !1;
    let t = eg.A.getPaymentSource(e);
    return null != t && eR.AD.has(t.type);
}
function ts(e) {
    return e.isPurchasedExternally
        ? e.status === y.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = e2(n);
              return 0 === (null != t ? e2(t.additionalPlans) : null) && 0 !== r ? y.Dmq.CANCELED : i;
          })(e) === y.Dmq.CANCELED;
}
function ta(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: r, fractionalPremiumInfo: s } = e,
        { planId: a, additionalPlans: o, renewalMutations: u } = t,
        c = eA.A.get(a);
    l()(null != c, "Missing plan");
    let d = e2(o),
        _ = u?.additionalPlans != null ? e2(u.additionalPlans) : d,
        f = Math.max(0, d - _),
        p = _ > 0 && f > 0,
        E = tc(t.planId, t.paymentSourceId, t.currency, n),
        m = p ? _ : d,
        g = E.amount * m;
    if (null != r) {
        let e = r.invoiceItems.find((e) => N.pW.has(e.subscriptionPlanId));
        null != e && (g = e.amount);
    }
    i = i ?? (0, ev.$g)(g, t.currency);
    let A = r?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (ts(t))
        return t.isPurchasedViaGoogle
            ? eO.intl.format(eO.t["3/WTrI"], { quantity: d })
            : A
              ? eO.intl.format(eO.t["0ozBSB"], { quantity: d, rate: (0, ev.CE)(i, c.interval, c.intervalCount) })
              : eO.intl.format(eO.t["yjsv/s"], { quantity: d, rate: (0, ev.CE)(i, c.interval, c.intervalCount) });
    switch (t.status) {
        case y.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? eO.intl.format(eO.t.Nlf3nc, { quantity: d, boostQuantity: d })
                : A
                  ? eO.intl.format(eO.t.oiRy7v, {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, ev.CE)(i, c.interval, c.intervalCount),
                    })
                  : eO.intl.format(eO.t["0QxOAi"], {
                        quantity: d,
                        boostQuantity: d,
                        rate: (0, ev.CE)(i, c.interval, c.intervalCount),
                    });
        case y.Dmq.PAUSE_PENDING:
        case y.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return eO.intl.string(eO.t.CduWAm);
            return eO.intl.format(eO.t["5iud9s"], { quantity: d });
        case y.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return eO.intl.format(eO.t["d+0vwo"], {
                    endDate: (0, eS.i$)(e8(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, h.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (p) {
                if (t.isPurchasedViaGoogle)
                    return eO.intl.format(eO.t["krRy+d"], { activeQuantity: _, pendingQuantity: f });
                let e = A ? eO.t["4nc7+E"] : eO.t.BmaudS;
                return eO.intl.format(e, {
                    activeQuantity: _,
                    pendingQuantity: f,
                    rate: (0, ev.CE)(i, c.interval, c.intervalCount),
                });
            }
            return t.isPurchasedViaGoogle
                ? eO.intl.format(eO.t["5iud9s"], { quantity: d })
                : A
                  ? eO.intl.format(eO.t.eDwrLA, { quantity: d, rate: (0, ev.CE)(i, c.interval, c.intervalCount) })
                  : eO.intl.format(eO.t.ijSDcI, { quantity: d, rate: (0, ev.CE)(i, c.interval, c.intervalCount) });
    }
}
function to(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = eG(e.id, !1, r, t);
        } catch {
            i = ex(e.id, !1, r);
        }
    else i = ex(e.id, !1, r);
    let s = (0, ev.$g)(i.amount, i.currency);
    return e.currency !== eR.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function tl(e) {
    let { status: t, renewalMutations: n } = e;
    return t === y.Dmq.CANCELED || (null != n && (0, ep.m1)(n.planId) && !e.isPurchasedExternally);
}
function tu(e) {
    return e === y.Dmq.PAST_DUE || e === y.Dmq.ACCOUNT_HOLD || e === y.Dmq.BILLING_RETRY;
}
function tc(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: em.A.ipCountryCodeWithFallback, currency: n },
        s = eA.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    let a = eA.A.getForSkuAndInterval(tM(N.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    return eG(a.id, (0, S.ki)(i), !1, r);
}
function td(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case N.gD.PREMIUM_MONTH_TIER_0:
                return eO.intl.string(eO.t["0ggVqN"]);
            case N.gD.PREMIUM_YEAR_TIER_0:
                return eO.intl.string(eO.t["jm+ZQw"]);
            case N.gD.PREMIUM_MONTH_TIER_1:
                return eO.intl.string(eO.t.uph4Jx);
            case N.gD.PREMIUM_YEAR_TIER_1:
                return eO.intl.string(eO.t["D/l7Yt"]);
            case N.gD.PREMIUM_MONTH_TIER_2:
            case N.gD.PREMIUM_GROUP_MONTH:
                return eO.intl.string(eO.t["5l1MuV"]);
            case N.gD.PREMIUM_YEAR_TIER_2:
                return eO.intl.string(eO.t.G0mISV);
        }
    switch (i) {
        case N.gD.PREMIUM_MONTH_TIER_0:
            return n ? eO.intl.string(eO.t.cRCCJ3) : eO.intl.string(eO.t["/G3aKw"]);
        case N.gD.PREMIUM_YEAR_TIER_0:
            return n ? eO.intl.string(eO.t.cRCCJ3) : eO.intl.string(eO.t["2eQpsL"]);
        case N.gD.PREMIUM_MONTH_TIER_1:
            return n ? eO.intl.string(eO.t.cRCCJ3) : eO.intl.string(eO.t.gueLg5);
        case N.gD.PREMIUM_YEAR_TIER_1:
            return n ? eO.intl.string(eO.t.cRCCJ3) : eO.intl.string(eO.t["MhH/vW"]);
        case N.gD.PREMIUM_MONTH_TIER_2:
            return n ? eO.intl.string(eO.t.cRCCJ3) : eO.intl.string(eO.t.LQVQIq);
        case N.gD.PREMIUM_GROUP_MONTH:
            return eO.intl.formatToPlainString(eb.default.LwdrNi, { premiumGroupProductName: (0, eC.DP)() });
        case N.gD.PREMIUM_YEAR_TIER_2:
            return n ? eO.intl.string(eO.t.cRCCJ3) : eO.intl.string(eO.t["0nfg1x"]);
        case N.gD.PREMIUM_3_MONTH_TIER_2:
        case N.gD.PREMIUM_6_MONTH_TIER_2:
            return eO.intl.formatToPlainString(eO.t.BCD4fT, { intervalCount: t.intervalCount });
        case N.gD.NONE_MONTH:
        case N.gD.NONE_YEAR:
        case N.gD.NONE_3_MONTH:
        case N.gD.NONE_6_MONTH:
        case N.gD.PREMIUM_MONTH_GUILD:
        case N.gD.PREMIUM_YEAR_GUILD:
        case N.gD.PREMIUM_3_MONTH_GUILD:
        case N.gD.PREMIUM_6_MONTH_GUILD:
            return eO.intl.string(eO.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, eT.pM)(r, { tags: { planId: i } }), r);
}
function t_(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = eA.A.get(t);
    return l()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function th() {
    let e = eR.Yr.USD;
    try {
        e = ex(N.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function tf(e) {
    let { intervalType: t = N.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case N.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eO.intl.formatToPlainString(eO.t.fRNBRX, { weeks: n / 7 })
                    : eO.intl.formatToPlainString(eO.t.EIpHEj, { weeks: n / 7 });
            return i
                ? eO.intl.formatToPlainString(eO.t["6Cdzoy"], { days: n })
                : eO.intl.formatToPlainString(eO.t["kbBj/h"], { days: n });
        case N.WT.MONTH:
            return i
                ? eO.intl.formatToPlainString(eO.t.x5MgxS, { months: n })
                : eO.intl.formatToPlainString(eO.t["4SEnCZ"], { months: n });
        case N.WT.YEAR:
            return i
                ? eO.intl.formatToPlainString(eO.t["h+63yl"], { years: n })
                : eO.intl.formatToPlainString(eO.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tp(e) {
    let { intervalType: t = N.WT.MONTH, intervalCount: n = 1 } = e,
        i = th(),
        r = (0, ev.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case N.WT.DAY:
            if (n >= 7 && n % 7 == 0) return eO.intl.formatToPlainString(eO.t.C6i5Jt, { weeks: n / 7, price: r });
            return eO.intl.formatToPlainString(eO.t.cR9ifw, { days: n, price: r });
        case N.WT.MONTH:
            return eO.intl.formatToPlainString(eO.t["8FZfNo"], { months: n, price: r });
        case N.WT.YEAR:
            return eO.intl.formatToPlainString(eO.t.xzAcST, { years: n, price: r });
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
    let { intervalType: t = N.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case N.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eO.intl.formatToPlainString(eO.t.iVZYyl, { weeks: n / 7 })
                    : eO.intl.formatToPlainString(eO.t.EmoBD2, { weeks: n / 7 });
            return i
                ? eO.intl.formatToPlainString(eO.t.jzH70Z, { days: n })
                : eO.intl.formatToPlainString(eO.t["k2UNz+"], { days: n });
        case N.WT.MONTH:
            return i
                ? eO.intl.formatToPlainString(eO.t.erUSmA, { months: n })
                : eO.intl.formatToPlainString(eO.t.kridzK, { months: n });
        case N.WT.YEAR:
            return i
                ? eO.intl.formatToPlainString(eO.t.IfYQVC, { years: n })
                : eO.intl.formatToPlainString(eO.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tg(e, t) {
    switch (e) {
        case y.kM_.APPLE_PARTNER:
        case y.kM_.APPLE_ADVANCED_COMMERCE:
        case y.kM_.APPLE:
            return eD[t];
        case y.kM_.GOOGLE:
            return eL[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tA(e, t) {
    return (0, S.ki)(e) || tu(t?.status);
}
function tI(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => N.JM.has(e.planId));
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
    return e.filter((e) => !N.JM.has(e.planId));
}
function tS(e, t, n, i) {
    if (!i.has(t))
        throw new p.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
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
    return tS(e, t, 1, N.JM);
}
function tN(e, t, n) {
    return tS(e, n, t, N.pW);
}
function tv(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => N.JM.has(e.planId));
    if (null != t) {
        let n = eA.A.get(t.planId);
        l()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = eA.A.get(e.planId);
                if ((l()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = eA.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return l()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function tC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = N.f5[e].fileSize;
    return (0, eN.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function tR(e) {
    return null == e ? null : e.items.find((e) => N.pW.has(e.planId));
}
function tO(e) {
    let t = null != e ? eP(e) : null;
    return null != t ? e1(t.planId) : null;
}
let tb = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function tD(e) {
    return eh(eo, e);
}
function tL(e) {
    return eh(W, e);
}
function tw(e, t) {
    let n = (0, ev.$g)(e.amount, e.currency),
        i = eW(t);
    return `${n}/${i}`;
}
function tM(e) {
    return e;
}
function tP(e) {
    return "isNitroLocked" in e;
}
function tx() {
    let e = (0, d.bG)([eE.default], () => eE.default.getCurrentUser());
    return (0, S.YE)(e, N.PremiumTypes.TIER_2);
}
function tk(e) {
    var t;
    let n = N.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case N.Tt:
                return N.h7;
            case N.yo:
                return N.CA;
        }
    else;
    return n;
}
function tU(e) {
    return tG(e.map((e) => e.skuId));
}
function tG(e) {
    return e.reduce((e, t) => {
        let [n, i] = N.NL[t],
            r = 1;
        switch (n) {
            case N.T.HOUR:
                r = 1;
                break;
            case N.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let tF = (e) => {
        let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
            r = N.En[t.skuId];
        return null == r ? null : eG(r, !1, n, i);
    },
    tV = (e) => {
        let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
            { enabled: s } = ef.A.getConfig({ location: "getSavingsPercent" }),
            a = N.XE[t];
        return s && null != r && (a = tH(r, n, i)), a;
    };
function tB(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === N.WT.DAY || (t.interval === N.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tF({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let s = t.interval === N.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * s;
}
function tH(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === N.WT.YEAR) {
        try {
            if (((t = tF({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = eG(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tj(e) {
    return null == e ? 0 : Math.max((0, eS.m_)(new Date(), new Date(e)), 0);
}
let tY = Object.freeze({
    isNewUser: tb,
    isPremiumAtLeast: S.CC,
    isPremium: S.ki,
    isPremiumExactly: S.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: eG,
    getDefaultPrice: ex,
    getInterval: function (e) {
        let t = N.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, eT.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: eY,
    getIntervalStringAsNoun: eW,
    getPremiumType: eK,
    getTierDisplayNameByPlanId: eq,
    getDisplayName: e$,
    getPremiumPlanOptions: e0,
    formatInterval: function (e) {
        if (e === N.WT.YEAR) return eO.intl.string(eO.t.tfqrhj);
        if (e === N.WT.MONTH) return eO.intl.string(eO.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eZ,
    isPremiumSku: function (e) {
        return e === N.pe.TIER_0 || e === N.pe.TIER_1 || e === N.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === N.WT.MONTH) return t;
        if (e === N.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: v,
    getSkuIdForPlan: e1,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case N.PremiumTypes.TIER_0:
                return N.pe.TIER_0;
            case N.PremiumTypes.TIER_1:
                return N.pe.TIER_1;
            case N.PremiumTypes.TIER_2:
                return N.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return eK(e) === N.PremiumTypes.TIER_2 ? N.M4 : 0;
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
                          fractionalState: N.xc.NONE,
                          startsAt: c()(0),
                          endsAt: c()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: c()(0),
                          unactivatedUnits: [],
                      },
            s = null !== n && e.status === y.Dmq.PAST_DUE ? n : t,
            a = i
                ? (0, ev.$g)(
                      s.invoiceItems
                          .filter((e) => N.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, ev.$g)(s.total, s.currency);
        if (eE.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return eO.intl.format(eO.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === y.Dmq.CANCELED) return eO.intl.format(eO.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === y.Dmq.PAUSE_PENDING)
            return eO.intl.format(eO.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === y.Dmq.PAUSED)
            return r.fractionalState !== N.xc.NONE
                ? eO.intl.format(eO.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: a })
                : null == e.pauseEndsAt
                  ? i
                      ? eO.intl.format(eO.t.KTYQCg, { planName: eO.intl.string(eO.t.Ipxkog), price: a })
                      : eO.intl.string(eO.t.fMz6Lg)
                  : i
                    ? eO.intl.format(eO.t.zcgtzf, {
                          planName: eO.intl.string(eO.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: a,
                      })
                    : eO.intl.format(eO.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === y.Dmq.PAST_DUE) {
            let t = e8(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = c()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = c()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? eO.intl.format(eO.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: eR.qm[e.paymentGateway],
                      paymentSourceLink: tg(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : eO.intl.format(eO.t.qEIzyi, { endDate: t.toDate(), price: a });
        }
        {
            var o;
            if (e.status === y.Dmq.BILLING_RETRY)
                return eO.intl.format(eO.t.EMTLOT, {
                    endDate: c()(e.currentPeriodStart).add(N.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === y.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, g.xv)()
                    ? eO.intl.format(eO.t["dtcxw+"], {
                          endDate: c()(e.currentPeriodStart).add(N.ph, "days").toDate(),
                          paymentGatewayName: eR.qm[e.paymentGateway],
                          paymentSourceLink: tg(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : eO.intl.format(eO.t.EMTLOT, {
                          endDate: c()(e.currentPeriodStart).add(N.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (o = e).paymentSourceId && tr(o.paymentSourceId))
                return eO.intl.format(eO.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === y.Dmq.UNPAID) return eO.intl.format(eO.t.CzTKom, { maxProcessingTimeInDays: N.G4 });
            if (e.isPurchasedExternally)
                return eO.intl.format(eO.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: eR.qm[e.paymentGateway],
                    subscriptionManagementLink: tg(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = te(n, r.unactivatedUnits)),
                i
                    ? eO.intl.format(eO.t.Vl3cED, { planName: eO.intl.string(eO.t.Ipxkog), renewalDate: n, price: a })
                    : eO.intl.format(eO.t.Q18lRK, { renewalDate: n, price: a })
            );
        }
    },
    getExpectedRenewalDate: e9,
    extendDateWithUnconsumedFractionalPremium: te,
    getUnactivatedFractionalPremiumDurationString: tt,
    isSwitchingPlansDisabled: tn,
    getSwitchingPlansDisabledMessage: ti,
    isNoneSubscription: ep.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === y.Dmq.CANCELED || e.status === y.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e6(t);
        });
        return null == i ||
            (0, ep.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === y.Dmq.CANCELED || e.status === y.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e6(t);
        });
        return (null == i || (0, ep.m1)(i.subscriptionPlanId)) && (n = y.Dmq.CANCELED), n;
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
    getPremiumPlanItem: eP,
    getGuildBoostPlanItem: tR,
    isBoostOnlySubscription: function (e) {
        return null != e && null == eP(e) && null != tR(e);
    },
    getPremiumSkuIdForSubscription: tO,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = eP(e);
            if (null != t) return eK(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tU,
    castPremiumSubscriptionAsSkuId: tM,
    calculateDiscountPercentageForYearlyPlan: tH,
    getDaysSincePremium: tj,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, eS.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return eh(P, e);
    },
    canUseEmojisEverywhere: function (e) {
        return eh(x, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return eh(U, e);
    },
    canUseCustomCallSounds: function (e) {
        return eh(G, e);
    },
    canUploadLargeFiles: function (e) {
        return eh(ea, e);
    },
    canUseBadges: function (e) {
        return eh(j, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return eh(es, e);
    },
    canEditDiscriminator: function (e) {
        return eh(B, e);
    },
    hasBoostDiscount: function (e) {
        return eh(z, e);
    },
    canUseAnimatedAvatar: function (e) {
        return eh(V, e);
    },
    canInstallPremiumApplications: function (e) {
        return eh(ee, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return eh(er, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return eh(ei, e);
    },
    canRedeemPremiumPerks: function (e) {
        return eh(et, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return eh(Y, e);
    },
    canUsePremiumAppIcons: function (e) {
        return eh(K, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return eh(H, e);
    },
    canUseClientThemes: function (e) {
        return eh($, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? eh(Z, t) : eh(X, t);
    },
    canUseQuestOrbMultiplier: tD,
    hasFreeBoosts: function (e) {
        return eh(q, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return eh(k, e);
    },
    canUseCustomBackgrounds: function (e) {
        return eh(en, e);
    },
    canUseCollectibles: tL,
    canUseMonthlyOrbs: function (e) {
        return !!(0, E.f0)("canUseMonthlyOrbs") && (0, L.Nh)(e?.perks, _.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ((0, E.f0)("canUseShopDiscounts") && (0, L.Nh)(e?.perks, _.bb.SHOP_DISCOUNTS)) || tL(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return ((0, E.f0)("canUseMoreQuestOrbs") && (0, L.Nh)(e?.perks, _.bb.MORE_QUEST_ORBS)) || tD(e);
    },
    formatPriceString: tw,
    StreamQuality: eM,
});
