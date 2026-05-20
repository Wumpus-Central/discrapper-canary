"use strict";
n.d(t, {
    ki: () => tr,
    Ke: () => eF,
    FY: () => td,
    ff: () => to,
    aZ: () => ty,
    Nc: () => e7,
    Rr: () => tu,
    YE: () => A.YE,
    OU: () => eq,
    qn: () => tT,
    CC: () => A.CC,
    iv: () => tP,
    RH: () => eW,
    jh: () => ti,
    FJ: () => eB,
    ee: () => tm,
    $k: () => te,
    Dd: () => eK,
    kX: () => e5,
    To: () => tk,
    _e: () => e4,
    l6: () => eM,
    y8: () => eP,
    re: () => tf,
    nB: () => e$,
    pb: () => ex,
    Zb: () => e3,
    nK: () => tL,
    mv: () => tC,
    Tm: () => eZ,
    J$: () => e9,
    Pg: () => tg,
    D8: () => eV,
    TW: () => A.ki,
    $Q: () => eU,
    aE: () => tE,
    L_: () => tx,
    Uf: () => tt,
    sS: () => tn,
    ji: () => e6,
    Q8: () => e8,
    Mn: () => ej,
    m6: () => eH,
    Em: () => tD,
    xq: () => e0,
    Ge: () => tl,
    Of: () => tp,
    tW: () => th,
    mH: () => tb,
    Ay: () => tG,
    EL: () => eL,
    bx: () => eQ,
    Zw: () => eY,
    Om: () => tI,
    GX: () => tA,
    UC: () => ek,
    JM: () => ew,
    e1: () => tw,
    PK: () => ts,
    z4: () => e1,
    LE: () => t_,
    ys: () => e2,
    U8: () => eG,
    tS: () => tc,
    EJ: () => tS,
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
var ed = n(832946),
    e_ = n(287809),
    ef = n(615405),
    eh = n(295405),
    ep = n(97352),
    eE = n(166403),
    em = n(739508),
    eg = n(58703),
    eA = n(927813),
    eI = n(255438),
    eT = n(723702),
    eS = n(580630),
    eN = n(88001),
    ey = n(818348),
    eC = n(375708),
    ev = n(466919);
let eO = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    eR = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    eb = new p.A("PremiumUtils.tsx");
var eD = (((s = {}).MID = "mid"), (s.HIGH = "high"), s);
function eL(e) {
    return e.items.find((e) => T.JM.has(e.planId));
}
function ew(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = eh.A.defaultPaymentSourceId ?? void 0,
        a = eE.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        eP(e, t, n, { paymentSourceId: s, currency: i }, r)
    );
}
function eM(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function eP(e) {
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
    if (null != ep.A.get(e)) {
        let i = I.lid.DEFAULT;
        n ? (i = I.lid.GIFT) : t && (i = I.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: I.lid.DEFAULT },
                r = ex(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    eb.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let s = r.find((e) => e.currency === i.toLowerCase());
                return null != s
                    ? s
                    : null != t
                      ? ex(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: s, purchaseType: i, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, em.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: i.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (r && (0, em.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function ex(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: I.lid.DEFAULT },
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
            let s = Error("Missing prices for payment source on subscription plan");
            (0, em.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        eb.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, em.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function eU(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function ek(e, t, n) {
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
            (e = void 0 === n ? ew(i.planId, r, !1, t) : eP(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity);
    }
    return eU(s);
}
function eG(e, t, n, i) {
    return (
        null === t && (o()(null !== e, "Subscription can't be null"), (t = [])), ek(null !== e ? tE(e, t) : tm(t), n, i)
    );
}
function eF(e) {
    switch (e) {
        case T.Ff.MONTH:
            return eC.intl.string(eC.t.FPybU7);
        case T.Ff.YEAR:
            return eC.intl.string(eC.t.tfqrhj);
        case T.Ff.DAY:
        case T.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function eV(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : T.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case T.WT.MONTH:
                let a = eC.intl.formatToPlainString(s === T.PremiumTypes.TIER_0 ? eC.t.NPKsLz : eC.t.poEovT, {
                    timeInterval: eC.intl.string(eC.t.FPybU7),
                });
                return r ? a : eC.intl.string(eC.t.Mh9bTt);
            case T.WT.YEAR:
                let o = eC.intl.formatToPlainString(s === T.PremiumTypes.TIER_0 ? eC.t.NPKsLz : eC.t.poEovT, {
                    timeInterval: eC.intl.string(eC.t.tfqrhj),
                });
                return r ? o : eC.intl.string(eC.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case T.WT.MONTH:
            if (1 !== i) return eC.intl.formatToPlainString(eC.t["0UlZnH"], { intervalCount: i });
            return eC.intl.string(eC.t.DKzs96);
        case T.WT.YEAR:
            return eC.intl.string(eC.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eB(e) {
    switch (e) {
        case T.WT.MONTH:
            return eC.intl.string(eC.t.FPybU7);
        case T.WT.YEAR:
            return eC.intl.string(eC.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function eH(e) {
    let t = T.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, em.pM)(n, { tags: { planId: e } }), n);
}
function ej(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case T.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? eC.intl.format(eC.t.TZXHNj, { duration: i })
                : n
                  ? eC.intl.string(eC.t["81iAgs"])
                  : eC.intl.string(eC.t["0efVPy"]);
        case T.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? eC.intl.format(eC.t.eqRhC7, { duration: i })
                : n
                  ? eC.intl.string(eC.t.UvzqY1)
                  : eC.intl.string(eC.t.eoVuBn);
        case T.gD.PREMIUM_MONTH_TIER_1:
            return n ? eC.intl.string(eC.t["g/dH5g"]) : eC.intl.string(eC.t["7O6qSq"]);
        case T.gD.PREMIUM_YEAR_TIER_1:
            return n ? eC.intl.string(eC.t.pdZJaq) : eC.intl.string(eC.t.Md5xbi);
        case T.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? eC.intl.format(eC.t.aI6QXz, { duration: i })
                : n
                  ? eC.intl.string(eC.t.SmVbHc)
                  : eC.intl.string(eC.t.FKYNC6);
        case T.gD.PREMIUM_GROUP_MONTH:
            return n ? eC.intl.string(eC.t.SmVbHc) : eC.intl.string(eC.t.FKYNC6);
        case T.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? eC.intl.format(eC.t["1wBcPi"], { duration: i })
                : n
                  ? eC.intl.string(eC.t.JIq4O1)
                  : eC.intl.string(eC.t["cfu/5d"]);
        case T.gD.PREMIUM_3_MONTH_TIER_2:
            return eC.intl.string(eC.t.wCbINr);
        case T.gD.PREMIUM_6_MONTH_TIER_2:
            return eC.intl.string(eC.t["e3/ArU"]);
        case T.gD.PREMIUM_MONTH_GUILD:
            return n ? eC.intl.string(eC.t["6ZR3By"]) : eC.intl.string(eC.t["h80cx/"]);
        case T.gD.PREMIUM_YEAR_GUILD:
            return n ? eC.intl.string(eC.t.YDpAzZ) : eC.intl.string(eC.t.ZHkls0);
        case T.gD.PREMIUM_3_MONTH_GUILD:
            return eC.intl.string(eC.t.EZHHB6);
        case T.gD.PREMIUM_6_MONTH_GUILD:
            return eC.intl.string(eC.t.X2KDO2);
        case T.gD.PREMIUM_MONTH_LEGACY:
            return eC.intl.string(eC.t.PD6k79);
        case T.gD.PREMIUM_YEAR_LEGACY:
            return eC.intl.string(eC.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, em.pM)(r, { tags: { planId: e } }), r);
}
function eY(e) {
    switch (e) {
        case T.pe.TIER_0:
            return eC.intl.string(eC.t["t9uG/o"]);
        case T.pe.TIER_1:
            return eC.intl.string(eC.t.FSOz78);
        case T.pe.TIER_2:
            return eC.intl.string(eC.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, em.pM)(t, { tags: { skuId: e } }), t);
}
function eW(e) {
    let t = T.hd[e]?.premiumType,
        n = null != t ? T.Mr[t] : null;
    if (null != n) return eC.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, em.pM)(i, { tags: { planId: e } }), i);
}
function eK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case T.PremiumTypes.TIER_0:
            return t ? "Basic" : eC.intl.string(eC.t["t9uG/o"]);
        case T.PremiumTypes.TIER_1:
            return t ? "Classic" : eC.intl.string(eC.t.FSOz78);
        case T.PremiumTypes.TIER_2:
            return eC.intl.string(eC.t.lG6a5x);
    }
}
function ez(e) {
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
        f = tR(ew(d.id), d.interval),
        h = null != l && 0 === l.subtotal,
        p =
            tr(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !e_.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        E = null != i && null == t.paymentGateway,
        m = t.status === I.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === I.lT7.OPEN,
        g = p ? I.Dmq.CANCELED : m ? I.Dmq.UNPAID : t.status,
        A = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        S = T.M4 + (r ? eQ(t.additionalPlans) : 0),
        N = E
            ? A
                ? eC.intl.format(eC.t["cd+hqB"], { price: i })
                : eC.intl.format(eC.t.NUkcpF, { price: i })
            : eC.intl.string(eC.t.zYx3Y6),
        y = E
            ? A
                ? eC.intl.format(eC.t.VsKcFB, { price: i })
                : eC.intl.format(eC.t.hJ5xEX, { price: i })
            : eC.intl.string(eC.t["8rSipI"]),
        C = E
            ? A
                ? eC.intl.format(eC.t["jRy6/J"], { price: i, num: S })
                : eC.intl.format(eC.t.tTNE8M, { price: i, num: S })
            : eC.intl.format(eC.t["U+z/HJ"], { num: S });
    switch (n) {
        case T.gD.PREMIUM_MONTH_TIER_0:
        case T.gD.PREMIUM_YEAR_TIER_0:
            switch (g) {
                case I.Dmq.CANCELED:
                    return E
                        ? A
                            ? eC.intl.format(eC.t["USi/nc"], { price: i })
                            : eC.intl.format(eC.t["FS//l2"], { price: i })
                        : eC.intl.string(eC.t.JshLzq);
                case I.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? eC.intl.format(eC.t["5mv+2i"], { price: i })
                            : eC.intl.format(eC.t.nkAEfZ, { price: i })
                        : eC.intl.format(eC.t.SsLIXS, {});
                case I.Dmq.UNPAID:
                    return eC.intl.format(eC.t.cmkbFB, {});
                case I.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? eC.intl.format(eC.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : eC.intl.format(eC.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case I.Dmq.PAUSED:
                    if (c) return N;
                    return eC.intl.format(eC.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case I.Dmq.PAST_DUE:
                    return eC.intl.format(eC.t["d+0vwo"], {
                        endDate: (0, eg.i$)(e6(t).expiresDate, "LL"),
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
                            ? eC.intl.format(eC.t.cXy8Bp, { price: i })
                            : eC.intl.format(eC.t["C/XsHt"], { price: i })
                        : eC.intl.string(eC.t.K6tYFa);
                case I.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? eC.intl.format(eC.t.HBkIBi, { price: i })
                            : eC.intl.format(eC.t.ZsO1Sx, { price: i })
                        : eC.intl.format(eC.t["0+/WH7"], {});
                case I.Dmq.UNPAID:
                    return eC.intl.format(eC.t.McIzwj, {});
                case I.Dmq.PAUSE_PENDING:
                    let O = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != O
                        ? eC.intl.format(eC.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: O })
                        : eC.intl.format(eC.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case I.Dmq.PAUSED:
                    if (c) return y;
                    return eC.intl.format(eC.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case I.Dmq.PAST_DUE:
                    return eC.intl.format(eC.t["d+0vwo"], {
                        endDate: (0, eg.i$)(e6(t).expiresDate, "LL"),
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
                            ? eC.intl.format(eC.t.xoFgRh, { price: i, num: S })
                            : eC.intl.format(eC.t.nXdbKo, { price: i, num: S })
                        : eC.intl.format(eC.t.EcSdRH, { num: S });
                case I.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? eC.intl.format(eC.t["5C/0QG"], { price: i, num: S })
                            : eC.intl.format(eC.t.xfYkhu, { price: i, num: S })
                        : eC.intl.format(eC.t.ivjxcn, { num: S });
                case I.Dmq.UNPAID:
                    return eC.intl.format(eC.t["0HopYf"], { num: S });
                case I.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? eC.intl.format(eC.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : eC.intl.format(eC.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case I.Dmq.PAUSED:
                    if (c) return C;
                    return eC.intl.format(eC.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case I.Dmq.BILLING_RETRY:
                    return eC.intl.format(eC.t["IlJ/HV"], {
                        endDate: u()(t.currentPeriodStart).add(T.bx, "days").toDate(),
                    });
                case I.Dmq.PAST_DUE:
                    return eC.intl.format(eC.t["d+0vwo"], {
                        endDate: (0, eg.i$)(e6(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === T.gD.PREMIUM_YEAR_TIER_2
                            ? eC.intl.format(eC.t["+qqh6g"], { percent: a?.percentage ?? T.Cq, regularPrice: f })
                            : A
                              ? eC.intl.formatToPlainString(eC.t["3ZiutU"], {
                                    percent: a?.percentage ?? T._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? T.OJ,
                                })
                              : eC.intl.formatToPlainString(eC.t["G6+XOT"], {
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
function e$(e) {
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
        p = ep.A.get(c);
    return (
        o()(null != p, "Missing plan"),
        ez({
            subscription: u,
            planId: p.id,
            price:
                ((t = a),
                (n = u),
                (i = p),
                (s =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? eP(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, eS.CE)((0, eS.$g)(s, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: d,
            hasDiscountApplied: _,
            activeDiscountInfo: f,
            renewalInvoiceWithoutEntitlementsPreview: a,
            renewalInvoiceWithEntitlementsPreview: l,
            hasFractionalPremiumWithSub: h,
        })
    );
}
function eq(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, ed.m1)(t) ? null : ej(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return T.pW.has(t);
        }),
        s = r?.planId === T.gD.PREMIUM_MONTH_GUILD || r?.planId === T.gD.PREMIUM_YEAR_GUILD ? eC.t.Pi5yMJ : null,
        a = null != s ? eC.intl.formatToPlainString(s, { num: r?.quantity }) : void 0;
    if (null != i && null != a)
        return eC.intl.formatToPlainString(eC.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: a });
    if (null != i) return i;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function eZ(e) {
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
function eX(e) {
    let t = T.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, em.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eQ(e) {
    let t = ep.A.getPlanIdsForSkus([tb(T.pe.GUILD)]);
    o()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eJ = new Set([
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
function e0(e) {
    return eJ.has(e);
}
function e1(e) {
    return T.pW.has(e);
}
function e2(e) {
    return e0(e) || e1(e);
}
function e3(e) {
    return null != e && e === T.gD.PREMIUM_GROUP_MONTH;
}
function e6(e) {
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
function e4(e, t, n, i) {
    let r = u()(i ? void 0 : e);
    if (t.length > 0) {
        let e = tM(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = u()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function e5(e) {
    let t = tM(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === T.xc.NONE)) return "";
    let n = { days: eC.t.fYmirx, hours: eC.t["C3RO+g"], minutes: eC.t.r77oHc },
        i = (0, f.Vb)((0, eg.Tf)(0, t * eA.A.Millis.HOUR));
    return (0, eg.uN)(i, n);
}
function e7(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === I.Dmq.PAST_DUE;
}
function e8(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t =
                e.renewalMutations.planId !== e.planId
                    ? eC.intl.string(eC.t["0rzJ4J"])
                    : eC.intl.string(eC.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = eC.intl.string(eC.t.a9Mdb3)),
        t
    );
}
function e9(e) {
    if (null == e) return !1;
    let t = eh.A.getPaymentSource(e);
    return null != t && ey.AD.has(t.type);
}
function te(e) {
    return e.isPurchasedExternally
        ? e.status === I.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eQ(n);
              return 0 === (null != t ? eQ(t.additionalPlans) : null) && 0 !== r ? I.Dmq.CANCELED : i;
          })(e) === I.Dmq.CANCELED;
}
function tt(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: r, fractionalPremiumInfo: s } = e,
        { planId: a, additionalPlans: l } = t,
        u = ep.A.get(a);
    o()(null != u, "Missing plan");
    let c = eQ(l),
        d = ta(t.planId, t.paymentSourceId, t.currency, n).amount * c;
    if (null != r) {
        let e = r.invoiceItems.find((e) => T.pW.has(e.subscriptionPlanId));
        null != e && (d = e.amount);
    }
    i = i ?? (0, eS.$g)(d, t.currency);
    let f = r?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (te(t))
        return t.isPurchasedViaGoogle
            ? eC.intl.format(eC.t["3/WTrI"], { quantity: c })
            : f
              ? eC.intl.format(eC.t["0ozBSB"], { quantity: c, rate: (0, eS.CE)(i, u.interval, u.intervalCount) })
              : eC.intl.format(eC.t["yjsv/s"], { quantity: c, rate: (0, eS.CE)(i, u.interval, u.intervalCount) });
    switch (t.status) {
        case I.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? eC.intl.format(eC.t.Nlf3nc, { quantity: c, boostQuantity: c })
                : f
                  ? eC.intl.format(eC.t.oiRy7v, {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eS.CE)(i, u.interval, u.intervalCount),
                    })
                  : eC.intl.format(eC.t["0QxOAi"], {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eS.CE)(i, u.interval, u.intervalCount),
                    });
        case I.Dmq.PAUSE_PENDING:
        case I.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return eC.intl.string(eC.t.CduWAm);
            return eC.intl.format(eC.t["5iud9s"], { quantity: c });
        case I.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return eC.intl.format(eC.t["d+0vwo"], {
                    endDate: (0, eg.i$)(e6(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? eC.intl.format(eC.t["5iud9s"], { quantity: c })
                : f
                  ? eC.intl.format(eC.t.eDwrLA, { quantity: c, rate: (0, eS.CE)(i, u.interval, u.intervalCount) })
                  : eC.intl.format(eC.t.ijSDcI, { quantity: c, rate: (0, eS.CE)(i, u.interval, u.intervalCount) });
    }
}
function tn(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = eP(e.id, !1, r, t);
        } catch {
            i = ew(e.id, !1, r);
        }
    else i = ew(e.id, !1, r);
    let s = (0, eS.$g)(i.amount, i.currency);
    return e.currency !== ey.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function ti(e, t, n) {
    let i = tn(e, t, n);
    return (0, eS.CE)(i, e.interval, e.intervalCount);
}
function tr(e) {
    let { status: t, renewalMutations: n } = e;
    return t === I.Dmq.CANCELED || (null != n && (0, ed.m1)(n.planId) && !e.isPurchasedExternally);
}
function ts(e) {
    return e === I.Dmq.PAST_DUE || e === I.Dmq.ACCOUNT_HOLD || e === I.Dmq.BILLING_RETRY;
}
function ta(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: ef.A.ipCountryCodeWithFallback, currency: n },
        s = ep.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, em.pM)(t, { tags: { planId: e } }), t);
    }
    let a = ep.A.getForSkuAndInterval(tb(T.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, em.pM)(t, { tags: { planId: e } }), t);
    }
    return eP(a.id, (0, A.ki)(i), !1, r);
}
function to(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case T.gD.PREMIUM_MONTH_TIER_0:
                return eC.intl.string(eC.t["0ggVqN"]);
            case T.gD.PREMIUM_YEAR_TIER_0:
                return eC.intl.string(eC.t["jm+ZQw"]);
            case T.gD.PREMIUM_MONTH_TIER_1:
                return eC.intl.string(eC.t.uph4Jx);
            case T.gD.PREMIUM_YEAR_TIER_1:
                return eC.intl.string(eC.t["D/l7Yt"]);
            case T.gD.PREMIUM_MONTH_TIER_2:
            case T.gD.PREMIUM_GROUP_MONTH:
                return eC.intl.string(eC.t["5l1MuV"]);
            case T.gD.PREMIUM_YEAR_TIER_2:
                return eC.intl.string(eC.t.G0mISV);
        }
    switch (i) {
        case T.gD.PREMIUM_MONTH_TIER_0:
            return n ? eC.intl.string(eC.t.cRCCJ3) : eC.intl.string(eC.t["/G3aKw"]);
        case T.gD.PREMIUM_YEAR_TIER_0:
            return n ? eC.intl.string(eC.t.cRCCJ3) : eC.intl.string(eC.t["2eQpsL"]);
        case T.gD.PREMIUM_MONTH_TIER_1:
            return n ? eC.intl.string(eC.t.cRCCJ3) : eC.intl.string(eC.t.gueLg5);
        case T.gD.PREMIUM_YEAR_TIER_1:
            return n ? eC.intl.string(eC.t.cRCCJ3) : eC.intl.string(eC.t["MhH/vW"]);
        case T.gD.PREMIUM_MONTH_TIER_2:
            return n ? eC.intl.string(eC.t.cRCCJ3) : eC.intl.string(eC.t.LQVQIq);
        case T.gD.PREMIUM_GROUP_MONTH:
            return eC.intl.formatToPlainString(ev.default.LwdrNi, { premiumGroupProductName: (0, eN.DP)() });
        case T.gD.PREMIUM_YEAR_TIER_2:
            return n ? eC.intl.string(eC.t.cRCCJ3) : eC.intl.string(eC.t["0nfg1x"]);
        case T.gD.PREMIUM_3_MONTH_TIER_2:
        case T.gD.PREMIUM_6_MONTH_TIER_2:
            return eC.intl.formatToPlainString(eC.t.BCD4fT, { intervalCount: t.intervalCount });
        case T.gD.NONE_MONTH:
        case T.gD.NONE_YEAR:
        case T.gD.NONE_3_MONTH:
        case T.gD.NONE_6_MONTH:
        case T.gD.PREMIUM_MONTH_GUILD:
        case T.gD.PREMIUM_YEAR_GUILD:
        case T.gD.PREMIUM_3_MONTH_GUILD:
        case T.gD.PREMIUM_6_MONTH_GUILD:
            return eC.intl.string(eC.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, em.pM)(r, { tags: { planId: i } }), r);
}
function tl(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = ep.A.get(t);
    return o()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function tu() {
    let e = ey.Yr.USD;
    try {
        e = ew(T.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function tc(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eC.intl.formatToPlainString(eC.t.fRNBRX, { weeks: n / 7 })
                    : eC.intl.formatToPlainString(eC.t.EIpHEj, { weeks: n / 7 });
            return i
                ? eC.intl.formatToPlainString(eC.t["6Cdzoy"], { days: n })
                : eC.intl.formatToPlainString(eC.t["kbBj/h"], { days: n });
        case T.WT.MONTH:
            return i
                ? eC.intl.formatToPlainString(eC.t.x5MgxS, { months: n })
                : eC.intl.formatToPlainString(eC.t["4SEnCZ"], { months: n });
        case T.WT.YEAR:
            return i
                ? eC.intl.formatToPlainString(eC.t["h+63yl"], { years: n })
                : eC.intl.formatToPlainString(eC.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function td(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1 } = e,
        i = tu(),
        r = (0, eS.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0) return eC.intl.formatToPlainString(eC.t.C6i5Jt, { weeks: n / 7, price: r });
            return eC.intl.formatToPlainString(eC.t.cR9ifw, { days: n, price: r });
        case T.WT.MONTH:
            return eC.intl.formatToPlainString(eC.t["8FZfNo"], { months: n, price: r });
        case T.WT.YEAR:
            return eC.intl.formatToPlainString(eC.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function t_(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return td({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function tf(e) {
    let { intervalType: t = T.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case T.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eC.intl.formatToPlainString(eC.t.iVZYyl, { weeks: n / 7 })
                    : eC.intl.formatToPlainString(eC.t.EmoBD2, { weeks: n / 7 });
            return i
                ? eC.intl.formatToPlainString(eC.t.jzH70Z, { days: n })
                : eC.intl.formatToPlainString(eC.t["k2UNz+"], { days: n });
        case T.WT.MONTH:
            return i
                ? eC.intl.formatToPlainString(eC.t.erUSmA, { months: n })
                : eC.intl.formatToPlainString(eC.t.kridzK, { months: n });
        case T.WT.YEAR:
            return i
                ? eC.intl.formatToPlainString(eC.t.IfYQVC, { years: n })
                : eC.intl.formatToPlainString(eC.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function th(e, t) {
    switch (e) {
        case I.kM_.APPLE_PARTNER:
        case I.kM_.APPLE_ADVANCED_COMMERCE:
        case I.kM_.APPLE:
            return eO[t];
        case I.kM_.GOOGLE:
            return eR[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tp(e, t) {
    return (0, A.ki)(e) || ts(t?.status);
}
function tE(e, t) {
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
function tm(e) {
    return e.filter((e) => !T.JM.has(e.planId));
}
function tg(e, t, n, i) {
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
function tA(e, t) {
    return tg(e, t, 1, T.JM);
}
function tI(e, t, n) {
    return tg(e, n, t, T.pW);
}
function tT(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => T.JM.has(e.planId));
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
function tS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = T.f5[e].fileSize;
    return (0, eI.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function tN(e) {
    return null == e ? null : e.items.find((e) => T.pW.has(e.planId));
}
function ty(e) {
    let t = null != e ? eL(e) : null;
    return null != t ? eX(t.planId) : null;
}
let tC = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function tv(e) {
    return ec(er, e);
}
function tO(e) {
    return ec(H, e);
}
function tR(e, t) {
    let n = (0, eS.$g)(e.amount, e.currency),
        i = eB(t);
    return `${n}/${i}`;
}
function tb(e) {
    return e;
}
function tD(e) {
    return "isNitroLocked" in e;
}
function tL() {
    let e = (0, c.bG)([e_.default], () => e_.default.getCurrentUser());
    return (0, A.YE)(e, T.PremiumTypes.TIER_2);
}
function tw(e) {
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
function tM(e) {
    return tP(e.map((e) => e.skuId));
}
function tP(e) {
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
let tx = (e) => {
    let { planId: t, shouldUseCalculatedDiscount: n, isGift: i, priceOptions: r, subscriptionPlan: s } = e,
        a = T.XE[t];
    return n && (a = tU(s, i, r)), a;
};
function tU(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === T.WT.YEAR) {
        try {
            if (
                ((t = ((e) => {
                    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
                        r = T.En[t.skuId];
                    return null == r ? null : eP(r, !1, n, i);
                })({ subscriptionPlan: e, isGift: i, priceOptions: r })),
                null == t)
            )
                return;
            n = eP(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tk(e) {
    return null == e ? 0 : Math.max((0, eg.m_)(new Date(), new Date(e)), 0);
}
let tG = Object.freeze({
    isNewUser: tC,
    isPremiumAtLeast: A.CC,
    isPremium: A.ki,
    isPremiumExactly: A.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: eP,
    getDefaultPrice: ew,
    getInterval: function (e) {
        let t = T.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, em.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: eV,
    getIntervalStringAsNoun: eB,
    getPremiumType: eH,
    getTierDisplayNameByPlanId: eW,
    getDisplayName: ej,
    getPremiumPlanOptions: eZ,
    formatInterval: function (e) {
        if (e === T.WT.YEAR) return eC.intl.string(eC.t.tfqrhj);
        if (e === T.WT.MONTH) return eC.intl.string(eC.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: ez,
    isPremiumSku: function (e) {
        return e === T.pe.TIER_0 || e === T.pe.TIER_1 || e === T.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === T.WT.MONTH) return t;
        if (e === T.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: S,
    getSkuIdForPlan: eX,
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
        return eH(e) === T.PremiumTypes.TIER_2 ? T.M4 : 0;
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
                ? (0, eS.$g)(
                      s.invoiceItems
                          .filter((e) => T.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, eS.$g)(s.total, s.currency);
        if (e_.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return eC.intl.format(eC.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === I.Dmq.CANCELED) return eC.intl.format(eC.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === I.Dmq.PAUSE_PENDING)
            return eC.intl.format(eC.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === I.Dmq.PAUSED)
            return r.fractionalState !== T.xc.NONE
                ? eC.intl.format(eC.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: a })
                : null == e.pauseEndsAt
                  ? i
                      ? eC.intl.format(eC.t.KTYQCg, { planName: eC.intl.string(eC.t.Ipxkog), price: a })
                      : eC.intl.string(eC.t.fMz6Lg)
                  : i
                    ? eC.intl.format(eC.t.zcgtzf, {
                          planName: eC.intl.string(eC.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: a,
                      })
                    : eC.intl.format(eC.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === I.Dmq.PAST_DUE) {
            let t = e6(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = u()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = u()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? eC.intl.format(eC.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: ey.qm[e.paymentGateway],
                      paymentSourceLink: th(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : eC.intl.format(eC.t.qEIzyi, { endDate: t.toDate(), price: a });
        }
        {
            var o;
            if (e.status === I.Dmq.BILLING_RETRY)
                return eC.intl.format(eC.t.EMTLOT, {
                    endDate: u()(e.currentPeriodStart).add(T.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === I.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, eT.isAndroid)()
                    ? eC.intl.format(eC.t["dtcxw+"], {
                          endDate: u()(e.currentPeriodStart).add(T.ph, "days").toDate(),
                          paymentGatewayName: ey.qm[e.paymentGateway],
                          paymentSourceLink: th(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : eC.intl.format(eC.t.EMTLOT, {
                          endDate: u()(e.currentPeriodStart).add(T.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (o = e).paymentSourceId && e9(o.paymentSourceId))
                return eC.intl.format(eC.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === I.Dmq.UNPAID) return eC.intl.format(eC.t.CzTKom, { maxProcessingTimeInDays: T.G4 });
            if (e.isPurchasedExternally)
                return eC.intl.format(eC.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: ey.qm[e.paymentGateway],
                    subscriptionManagementLink: th(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = e4(n, r.unactivatedUnits)),
                i
                    ? eC.intl.format(eC.t.Vl3cED, { planName: eC.intl.string(eC.t.Ipxkog), renewalDate: n, price: a })
                    : eC.intl.format(eC.t.Q18lRK, { renewalDate: n, price: a })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: e4,
    getUnactivatedFractionalPremiumDurationString: e5,
    isSwitchingPlansDisabled: e7,
    getSwitchingPlansDisabledMessage: e8,
    isNoneSubscription: ed.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === I.Dmq.CANCELED || e.status === I.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e0(t);
        });
        return null == i ||
            (0, ed.m1)(i.subscriptionPlanId) ||
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
            return e0(t);
        });
        return (null == i || (0, ed.m1)(i.subscriptionPlanId)) && (n = I.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: tr,
    getPremiumGuildIntervalPrice: ta,
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
    getBillingReviewSubheader: to,
    getIntervalForInvoice: tl,
    getPremiumPlanItem: eL,
    getGuildBoostPlanItem: tN,
    isBoostOnlySubscription: function (e) {
        return null != e && null == eL(e) && null != tN(e);
    },
    getPremiumSkuIdForSubscription: ty,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = eL(e);
            if (null != t) return eH(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tM,
    castPremiumSubscriptionAsSkuId: tb,
    calculateDiscountPercentageForYearlyPlan: tU,
    getDaysSincePremium: tk,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, eg.c_)(new Date(e.currentPeriodEnd), new Date())));
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
    canUseQuestOrbMultiplier: tv,
    hasFreeBoosts: function (e) {
        return ec(K, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return ec(M, e);
    },
    canUseCustomBackgrounds: function (e) {
        return ec(J, e);
    },
    canUseCollectibles: tO,
    canUseMonthlyOrbs: function (e) {
        return !!(0, h.f0)("canUseMonthlyOrbs") && (0, R.Nh)(e?.perks, d.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ((0, h.f0)("canUseShopDiscounts") && (0, R.Nh)(e?.perks, d.bb.SHOP_DISCOUNTS)) || tO(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return ((0, h.f0)("canUseMoreQuestOrbs") && (0, R.Nh)(e?.perks, d.bb.MORE_QUEST_ORBS)) || tv(e);
    },
    formatPriceString: tR,
    StreamQuality: eD,
});
