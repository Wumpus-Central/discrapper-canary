"use strict";
n.d(t, {
    ki: () => ti,
    Ke: () => eG,
    FY: () => tc,
    ff: () => ta,
    aZ: () => tN,
    Nc: () => e5,
    Rr: () => tl,
    YE: () => g.YE,
    OU: () => e$,
    qn: () => tI,
    CC: () => g.CC,
    iv: () => tM,
    RH: () => eY,
    jh: () => tn,
    FJ: () => eV,
    ee: () => tE,
    $k: () => e9,
    Dd: () => eW,
    kX: () => e4,
    To: () => tU,
    _e: () => e6,
    l6: () => ew,
    y8: () => eM,
    re: () => t_,
    nB: () => ez,
    pb: () => eP,
    Zb: () => e2,
    nK: () => tD,
    mv: () => ty,
    Tm: () => eq,
    J$: () => e8,
    Pg: () => tm,
    D8: () => eF,
    TW: () => g.ki,
    $Q: () => ex,
    aE: () => tp,
    L_: () => tP,
    Uf: () => te,
    sS: () => tt,
    ji: () => e3,
    Q8: () => e7,
    Mn: () => eH,
    m6: () => eB,
    Em: () => tb,
    xq: () => eJ,
    Ge: () => to,
    Of: () => th,
    tW: () => tf,
    mH: () => tR,
    Ay: () => tk,
    EL: () => eD,
    bx: () => eX,
    Zw: () => ej,
    Om: () => tA,
    GX: () => tg,
    UC: () => eU,
    JM: () => eL,
    e1: () => tL,
    PK: () => tr,
    z4: () => e0,
    LE: () => td,
    ys: () => e1,
    U8: () => ek,
    tS: () => tu,
    EJ: () => tT,
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
    h = n(626584),
    p = n(367888),
    E =
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
    m = n(683760),
    g = n(474090),
    A = n(652215),
    I = n(788868);
function T(e) {
    if (null == e) return A.TbF;
    let t = m.A.getPremiumTypeOverride();
    return e.isStaff() && t === I.$I
        ? A.mu
        : null != e.premiumType && (0, g.ki)(e)
          ? I.f5[e.premiumType].fileSize
          : A.TbF;
}
class S {
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
class N {
    skuId;
    skuFeatures;
    constructor(e, t) {
        (this.skuId = e), (this.skuFeatures = t);
    }
}
var y = n(945810),
    C =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (r[(r.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        r);
let v = (0, y.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var O = n(349871);
let R = new h.A("ProductCatalog.tsx");
class b extends S {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = I.u0[t.premiumType];
                        if (null == n)
                            return (
                                R.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = er[n];
                        if (null == i)
                            return (
                                R.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        R.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let D = new b(E.ANIMATED_EMOJIS),
    L = new b(E.EMOJIS_EVERYWHERE),
    w = new b(E.STICKERS_EVERYWHERE),
    M = new b(E.SOUNDBOARD_EVERYWHERE),
    P = new b(E.CUSTOM_CALL_SOUNDS),
    x = new b(E.PREMIUM_VOICE_FILTERS),
    U = new b(E.ANIMATED_AVATAR),
    k = new b(E.CUSTOM_DISCRIMINATOR),
    G = new b(E.PREMIUM_GUILD_MEMBER_PROFILE),
    F = new b("profileBadges"),
    V = new b(E.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    B = new b("collectibles"),
    H = new b("appIcons"),
    j = new b(E.CLIENT_THEMES),
    Y = new b("boostDiscount"),
    W = new b("freeBoosts"),
    K = new b(E.STREAM_MID_QUALITY),
    z = new b(E.STREAM_HIGH_QUALITY),
    $ = new b(E.CUSTOM_NOTIFICATION_SOUNDS),
    q = new b("fancyVoiceChannelReactions"),
    Z = new b("installPremiumApplications"),
    X = new b("redeemPremiumPerks"),
    Q = new b(E.VIDEO_FILTER_ASSETS);
new S(E.INCREASED_FILE_UPLOAD_SIZE, T);
let J = new b(E.INCREASED_GUILD_LIMIT),
    ee = new b(E.INCREASED_MESSAGE_LENGTH),
    et = new b("increasedVideoUploadQuality"),
    en = new b("uploadLargeFiles"),
    ei = new b(E.QUEST_ORB_MULTIPLIER),
    er = Object.freeze({
        [I.pe.TIER_0]: new N(I.pe.TIER_0, [D, L, w, F, Q, et, en, H]),
        [I.pe.TIER_1]: new N(I.pe.TIER_1, [D, L, U, k, F, Y, K, q, et, en, H]),
        [I.pe.TIER_2]: new N(I.pe.TIER_2, [
            D,
            L,
            w,
            M,
            P,
            U,
            k,
            G,
            F,
            V,
            j,
            Y,
            W,
            K,
            z,
            q,
            Z,
            X,
            Q,
            J,
            ee,
            et,
            en,
            H,
            B,
            $,
            x,
            ei,
        ]),
    }),
    es = [Y, W],
    ea = [ei],
    eo = [],
    el = new Map([
        [D, d.bb.ANIMATED_EMOJIS],
        [L, d.bb.EMOJIS_EVERYWHERE],
        [w, d.bb.STICKERS_EVERYWHERE],
        [M, d.bb.SOUNDBOARD_EVERYWHERE],
        [P, d.bb.CUSTOM_CALL_SOUNDS],
        [x, d.bb.PREMIUM_VOICE_FILTERS],
        [U, d.bb.ANIMATED_AVATAR],
        [k, d.bb.CUSTOM_DISCRIMINATOR],
        [G, d.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [V, d.bb.PROFILE_PREMIUM_FEATURES],
        [B, d.bb.PREMIUM_COLLECTIBLES],
        [j, d.bb.CLIENT_THEMES],
        [K, d.bb.STREAM_MID_QUALITY],
        [z, d.bb.STREAM_HIGH_QUALITY],
        [Q, d.bb.VIDEO_FILTER_ASSETS],
        [J, d.bb.INCREASED_GUILD_LIMIT],
        [ee, d.bb.INCREASED_MESSAGE_LENGTH],
        [en, d.bb.INCREASED_FILE_UPLOAD_SIZE],
        [F, d.bb.PROFILE_BADGES],
        [H, d.bb.APP_ICONS],
        [Y, d.bb.BOOST_DISCOUNT],
        [W, d.bb.FREE_BOOSTS],
        [Z, d.bb.INSTALL_PREMIUM_APPLICATIONS],
        [et, d.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function eu(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && es.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && ea.includes(e)) ||
        (n && eo.includes(e))
    )
        return !1;
    let i = el.get(e);
    if (null != i && t?.perks != null) {
        let n = v.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== C.CONTROL) {
            let r = e.getFeatureValue(t),
                s = (0, O.Nh)(t?.perks, i);
            return n === C.DUAL_READ_RETURN_NEW ? s : r;
        }
    }
    return e.getFeatureValue(t);
}
var ec = n(832946),
    ed = n(287809),
    e_ = n(615405),
    ef = n(295405),
    eh = n(97352),
    ep = n(166403),
    eE = n(739508),
    em = n(58703),
    eg = n(927813),
    eA = n(255438),
    eI = n(723702),
    eT = n(580630),
    eS = n(88001),
    eN = n(818348),
    ey = n(375708),
    eC = n(466919);
let ev = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    eO = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    eR = new h.A("PremiumUtils.tsx");
var eb = (((s = {}).MID = "mid"), (s.HIGH = "high"), s);
function eD(e) {
    return e.items.find((e) => I.JM.has(e.planId));
}
function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = ef.A.defaultPaymentSourceId ?? void 0,
        a = ep.A.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (s = a.paymentSourceId),
        eM(e, t, n, { paymentSourceId: s, currency: i }, r)
    );
}
function ew(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function eM(e) {
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
    if (null != eh.A.get(e)) {
        let i = A.lid.DEFAULT;
        n ? (i = A.lid.GIFT) : t && (i = A.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.lid.DEFAULT },
                r = eP(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    eR.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let s = r.find((e) => e.currency === i.toLowerCase());
                return null != s
                    ? s
                    : null != t
                      ? eP(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: s, purchaseType: i, currency: a });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, eE.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: i.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (r && (0, eE.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function eP(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.lid.DEFAULT },
        i = (function (e, t) {
            let n = eh.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, eE.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (eR.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            eR.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                eR.info(`prices: ${r}`);
            let s = Error("Missing prices for payment source on subscription plan");
            (0, eE.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        eR.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, eE.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function ex(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function eU(e, t, n) {
    let i,
        r,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        a = (0, p._1)(e);
    null != a && (i = I.hd[a.planId].premiumType);
    let o = (0, g.CC)(i, I.PremiumTypes.TIER_0),
        l = (0, g.CC)(i, I.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = I.pW.has(i.planId) ? l : !I.JM.has(i.planId) && o),
            (e = void 0 === n ? eL(i.planId, r, !1, t) : eM(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity);
    }
    return ex(s);
}
function ek(e, t, n, i) {
    return (
        null === t && (o()(null !== e, "Subscription can't be null"), (t = [])), eU(null !== e ? tp(e, t) : tE(t), n, i)
    );
}
function eG(e) {
    switch (e) {
        case I.Ff.MONTH:
            return ey.intl.string(ey.t.FPybU7);
        case I.Ff.YEAR:
            return ey.intl.string(ey.t.tfqrhj);
        case I.Ff.DAY:
        case I.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function eF(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : I.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case I.WT.MONTH:
                let a = ey.intl.formatToPlainString(s === I.PremiumTypes.TIER_0 ? ey.t.NPKsLz : ey.t.poEovT, {
                    timeInterval: ey.intl.string(ey.t.FPybU7),
                });
                return r ? a : ey.intl.string(ey.t.Mh9bTt);
            case I.WT.YEAR:
                let o = ey.intl.formatToPlainString(s === I.PremiumTypes.TIER_0 ? ey.t.NPKsLz : ey.t.poEovT, {
                    timeInterval: ey.intl.string(ey.t.tfqrhj),
                });
                return r ? o : ey.intl.string(ey.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case I.WT.MONTH:
            if (1 !== i) return ey.intl.formatToPlainString(ey.t["0UlZnH"], { intervalCount: i });
            return ey.intl.string(ey.t.DKzs96);
        case I.WT.YEAR:
            return ey.intl.string(ey.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eV(e) {
    switch (e) {
        case I.WT.MONTH:
            return ey.intl.string(ey.t.FPybU7);
        case I.WT.YEAR:
            return ey.intl.string(ey.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function eB(e) {
    let t = I.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, eE.pM)(n, { tags: { planId: e } }), n);
}
function eH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case I.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? ey.intl.format(ey.t.TZXHNj, { duration: i })
                : n
                  ? ey.intl.string(ey.t["81iAgs"])
                  : ey.intl.string(ey.t["0efVPy"]);
        case I.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? ey.intl.format(ey.t.eqRhC7, { duration: i })
                : n
                  ? ey.intl.string(ey.t.UvzqY1)
                  : ey.intl.string(ey.t.eoVuBn);
        case I.gD.PREMIUM_MONTH_TIER_1:
            return n ? ey.intl.string(ey.t["g/dH5g"]) : ey.intl.string(ey.t["7O6qSq"]);
        case I.gD.PREMIUM_YEAR_TIER_1:
            return n ? ey.intl.string(ey.t.pdZJaq) : ey.intl.string(ey.t.Md5xbi);
        case I.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? ey.intl.format(ey.t.aI6QXz, { duration: i })
                : n
                  ? ey.intl.string(ey.t.SmVbHc)
                  : ey.intl.string(ey.t.FKYNC6);
        case I.gD.PREMIUM_GROUP_MONTH:
            return n ? ey.intl.string(ey.t.SmVbHc) : ey.intl.string(ey.t.FKYNC6);
        case I.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? ey.intl.format(ey.t["1wBcPi"], { duration: i })
                : n
                  ? ey.intl.string(ey.t.JIq4O1)
                  : ey.intl.string(ey.t["cfu/5d"]);
        case I.gD.PREMIUM_3_MONTH_TIER_2:
            return ey.intl.string(ey.t.wCbINr);
        case I.gD.PREMIUM_6_MONTH_TIER_2:
            return ey.intl.string(ey.t["e3/ArU"]);
        case I.gD.PREMIUM_MONTH_GUILD:
            return n ? ey.intl.string(ey.t["6ZR3By"]) : ey.intl.string(ey.t["h80cx/"]);
        case I.gD.PREMIUM_YEAR_GUILD:
            return n ? ey.intl.string(ey.t.YDpAzZ) : ey.intl.string(ey.t.ZHkls0);
        case I.gD.PREMIUM_3_MONTH_GUILD:
            return ey.intl.string(ey.t.EZHHB6);
        case I.gD.PREMIUM_6_MONTH_GUILD:
            return ey.intl.string(ey.t.X2KDO2);
        case I.gD.PREMIUM_MONTH_LEGACY:
            return ey.intl.string(ey.t.PD6k79);
        case I.gD.PREMIUM_YEAR_LEGACY:
            return ey.intl.string(ey.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, eE.pM)(r, { tags: { planId: e } }), r);
}
function ej(e) {
    switch (e) {
        case I.pe.TIER_0:
            return ey.intl.string(ey.t["t9uG/o"]);
        case I.pe.TIER_1:
            return ey.intl.string(ey.t.FSOz78);
        case I.pe.TIER_2:
            return ey.intl.string(ey.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, eE.pM)(t, { tags: { skuId: e } }), t);
}
function eY(e) {
    let t = I.hd[e]?.premiumType,
        n = null != t ? I.Mr[t] : null;
    if (null != n) return ey.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, eE.pM)(i, { tags: { planId: e } }), i);
}
function eW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case I.PremiumTypes.TIER_0:
            return t ? "Basic" : ey.intl.string(ey.t["t9uG/o"]);
        case I.PremiumTypes.TIER_1:
            return t ? "Classic" : ey.intl.string(ey.t.FSOz78);
        case I.PremiumTypes.TIER_2:
            return ey.intl.string(ey.t.lG6a5x);
    }
}
function eK(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: s,
            activeDiscountInfo: a,
            renewalInvoicePreview: o,
            hasFractionalPremiumWithSub: l,
        } = e,
        c = I.hd[n],
        d = tO(eL(c.id), c.interval),
        f =
            ti(t) ||
            (null == t.paymentSourceId && !t.isPurchasedExternally && !ed.default.getCurrentUser()?.hasFreePremium()),
        h = null != i && null == t.paymentGateway,
        p = t.status === A.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === A.lT7.OPEN,
        E = f ? A.Dmq.CANCELED : p ? A.Dmq.UNPAID : t.status,
        m = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        g = I.M4 + (r ? eX(t.additionalPlans) : 0),
        T = h
            ? m
                ? ey.intl.format(ey.t["cd+hqB"], { price: i })
                : ey.intl.format(ey.t.NUkcpF, { price: i })
            : ey.intl.string(ey.t.zYx3Y6),
        S = h
            ? m
                ? ey.intl.format(ey.t.VsKcFB, { price: i })
                : ey.intl.format(ey.t.hJ5xEX, { price: i })
            : ey.intl.string(ey.t["8rSipI"]),
        N = h
            ? m
                ? ey.intl.format(ey.t["jRy6/J"], { price: i, num: g })
                : ey.intl.format(ey.t.tTNE8M, { price: i, num: g })
            : ey.intl.format(ey.t["U+z/HJ"], { num: g });
    switch (n) {
        case I.gD.PREMIUM_MONTH_TIER_0:
        case I.gD.PREMIUM_YEAR_TIER_0:
            switch (E) {
                case A.Dmq.CANCELED:
                    return h
                        ? m
                            ? ey.intl.format(ey.t["USi/nc"], { price: i })
                            : ey.intl.format(ey.t["FS//l2"], { price: i })
                        : ey.intl.string(ey.t.JshLzq);
                case A.Dmq.ACCOUNT_HOLD:
                    return h
                        ? m
                            ? ey.intl.format(ey.t["5mv+2i"], { price: i })
                            : ey.intl.format(ey.t.nkAEfZ, { price: i })
                        : ey.intl.format(ey.t.SsLIXS, {});
                case A.Dmq.UNPAID:
                    return ey.intl.format(ey.t.cmkbFB, {});
                case A.Dmq.PAUSE_PENDING:
                    let y = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != y
                        ? ey.intl.format(ey.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: y })
                        : ey.intl.format(ey.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case A.Dmq.PAUSED:
                    if (l) return T;
                    return ey.intl.format(ey.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case A.Dmq.PAST_DUE:
                    return ey.intl.format(ey.t["d+0vwo"], {
                        endDate: (0, em.i$)(e3(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return T;
            }
        case I.gD.PREMIUM_MONTH_TIER_1:
        case I.gD.PREMIUM_YEAR_TIER_1:
            switch (E) {
                case A.Dmq.CANCELED:
                    return h
                        ? m
                            ? ey.intl.format(ey.t.cXy8Bp, { price: i })
                            : ey.intl.format(ey.t["C/XsHt"], { price: i })
                        : ey.intl.string(ey.t.K6tYFa);
                case A.Dmq.ACCOUNT_HOLD:
                    return h
                        ? m
                            ? ey.intl.format(ey.t.HBkIBi, { price: i })
                            : ey.intl.format(ey.t.ZsO1Sx, { price: i })
                        : ey.intl.format(ey.t["0+/WH7"], {});
                case A.Dmq.UNPAID:
                    return ey.intl.format(ey.t.McIzwj, {});
                case A.Dmq.PAUSE_PENDING:
                    let C = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != C
                        ? ey.intl.format(ey.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: C })
                        : ey.intl.format(ey.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case A.Dmq.PAUSED:
                    if (l) return S;
                    return ey.intl.format(ey.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case A.Dmq.PAST_DUE:
                    return ey.intl.format(ey.t["d+0vwo"], {
                        endDate: (0, em.i$)(e3(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return S;
            }
        case I.gD.PREMIUM_MONTH_TIER_2:
        case I.gD.PREMIUM_YEAR_TIER_2:
        case I.gD.PREMIUM_3_MONTH_TIER_2:
        case I.gD.PREMIUM_6_MONTH_TIER_2:
        case I.gD.PREMIUM_GROUP_MONTH:
            switch (E) {
                case A.Dmq.CANCELED:
                    return h
                        ? m
                            ? ey.intl.format(ey.t.xoFgRh, { price: i, num: g })
                            : ey.intl.format(ey.t.nXdbKo, { price: i, num: g })
                        : ey.intl.format(ey.t.EcSdRH, { num: g });
                case A.Dmq.ACCOUNT_HOLD:
                    return h
                        ? m
                            ? ey.intl.format(ey.t["5C/0QG"], { price: i, num: g })
                            : ey.intl.format(ey.t.xfYkhu, { price: i, num: g })
                        : ey.intl.format(ey.t.ivjxcn, { num: g });
                case A.Dmq.UNPAID:
                    return ey.intl.format(ey.t["0HopYf"], { num: g });
                case A.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? ey.intl.format(ey.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : ey.intl.format(ey.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case A.Dmq.PAUSED:
                    if (l) return N;
                    return ey.intl.format(ey.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case A.Dmq.BILLING_RETRY:
                    return ey.intl.format(ey.t["IlJ/HV"], {
                        endDate: u()(t.currentPeriodStart).add(I.bx, "days").toDate(),
                    });
                case A.Dmq.PAST_DUE:
                    return ey.intl.format(ey.t["d+0vwo"], {
                        endDate: (0, em.i$)(e3(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === I.gD.PREMIUM_YEAR_TIER_2
                            ? ey.intl.format(ey.t["+qqh6g"], { percent: a?.percentage ?? I.Cq, regularPrice: d })
                            : m
                              ? ey.intl.formatToPlainString(ey.t["3ZiutU"], {
                                    percent: a?.percentage ?? I._$,
                                    regularPrice: d,
                                    numMonths: a?.duration ?? I.OJ,
                                })
                              : ey.intl.formatToPlainString(ey.t["G6+XOT"], {
                                    percent: a?.percentage ?? I._$,
                                    regularPrice: d,
                                    numMonths: a?.duration ?? I.OJ,
                                })
                        : N;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ez(e) {
    var t, n, i;
    let r,
        s,
        {
            renewalInvoicePreview: a,
            subscription: l,
            planId: u,
            includePremiumGuilds: c = !1,
            hasDiscountApplied: d = !1,
            activeDiscountInfo: _,
            hasFractionalPremiumWithSub: f = !1,
        } = e,
        h = eh.A.get(u);
    return (
        o()(null != h, "Missing plan"),
        eK({
            subscription: l,
            planId: h.id,
            price:
                ((t = a),
                (n = l),
                (i = h),
                (s =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? eM(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, eT.CE)((0, eT.$g)(s, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: c,
            hasDiscountApplied: d,
            activeDiscountInfo: _,
            renewalInvoicePreview: a,
            hasFractionalPremiumWithSub: f,
        })
    );
}
function e$(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, ec.m1)(t) ? null : eH(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return I.pW.has(t);
        }),
        s = r?.planId === I.gD.PREMIUM_MONTH_GUILD || r?.planId === I.gD.PREMIUM_YEAR_GUILD ? ey.t.Pi5yMJ : null,
        a = null != s ? ey.intl.formatToPlainString(s, { num: r?.quantity }) : void 0;
    if (null != i && null != a)
        return ey.intl.formatToPlainString(ey.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: a });
    if (null != i) return i;
    if (null != a) return a;
    throw Error("Subscription without premium or premium guild subscription");
}
function eq(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === I.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case I.pe.TIER_0:
            s = [I.gD.PREMIUM_YEAR_TIER_0, I.gD.PREMIUM_MONTH_TIER_0];
            break;
        case I.pe.TIER_1:
            s = [I.gD.PREMIUM_MONTH_TIER_1];
            break;
        case I.pe.TIER_2:
            s = [I.gD.PREMIUM_YEAR_TIER_2, I.gD.PREMIUM_MONTH_TIER_2];
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
function eZ(e) {
    let t = I.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, eE.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eX(e) {
    let t = eh.A.getPlanIdsForSkus([tR(I.pe.GUILD)]);
    o()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eQ = new Set([
    I.gD.NONE_MONTH,
    I.gD.NONE_3_MONTH,
    I.gD.NONE_6_MONTH,
    I.gD.NONE_YEAR,
    I.gD.PREMIUM_MONTH_TIER_0,
    I.gD.PREMIUM_MONTH_TIER_1,
    I.gD.PREMIUM_MONTH_TIER_2,
    I.gD.PREMIUM_YEAR_TIER_0,
    I.gD.PREMIUM_YEAR_TIER_1,
    I.gD.PREMIUM_YEAR_TIER_2,
    I.gD.PREMIUM_3_MONTH_TIER_2,
    I.gD.PREMIUM_6_MONTH_TIER_2,
    I.gD.PREMIUM_GROUP_MONTH,
]);
function eJ(e) {
    return eQ.has(e);
}
function e0(e) {
    return I.pW.has(e);
}
function e1(e) {
    return eJ(e) || e0(e);
}
function e2(e) {
    return null != e && e === I.gD.PREMIUM_GROUP_MONTH;
}
function e3(e) {
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
        let t = e.isPurchasedViaApple ? I.U1 : I.L9;
        return { days: t, expiresDate: u()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: u()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: u()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? I.a5 : I.EV;
        return { days: t, expiresDate: u()(e.currentPeriodStart).add(t, "days") };
    }
}
function e6(e, t, n, i) {
    let r = u()(i ? void 0 : e);
    if (t.length > 0) {
        let e = tw(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = u()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function e4(e) {
    let t = tw(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === I.xc.NONE)) return "";
    let n = { days: ey.t.fYmirx, hours: ey.t["C3RO+g"], minutes: ey.t.r77oHc },
        i = (0, f.Vb)((0, em.Tf)(0, t * eg.A.Millis.HOUR));
    return (0, em.uN)(i, n);
}
function e5(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === A.Dmq.PAST_DUE;
}
function e7(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t =
                e.renewalMutations.planId !== e.planId
                    ? ey.intl.string(ey.t["0rzJ4J"])
                    : ey.intl.string(ey.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = ey.intl.string(ey.t.a9Mdb3)),
        t
    );
}
function e8(e) {
    if (null == e) return !1;
    let t = ef.A.getPaymentSource(e);
    return null != t && eN.AD.has(t.type);
}
function e9(e) {
    return e.isPurchasedExternally
        ? e.status === A.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eX(n);
              return 0 === (null != t ? eX(t.additionalPlans) : null) && 0 !== r ? A.Dmq.CANCELED : i;
          })(e) === A.Dmq.CANCELED;
}
function te(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: r, fractionalPremiumInfo: s } = e,
        { planId: a, additionalPlans: l } = t,
        u = eh.A.get(a);
    o()(null != u, "Missing plan");
    let c = eX(l),
        d = ts(t.planId, t.paymentSourceId, t.currency, n).amount * c;
    if (null != r) {
        let e = r.invoiceItems.find((e) => I.pW.has(e.subscriptionPlanId));
        null != e && (d = e.amount);
    }
    i = i ?? (0, eT.$g)(d, t.currency);
    let f = r?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0;
    if (e9(t))
        return t.isPurchasedViaGoogle
            ? ey.intl.format(ey.t["3/WTrI"], { quantity: c })
            : f
              ? ey.intl.format(ey.t["0ozBSB"], { quantity: c, rate: (0, eT.CE)(i, u.interval, u.intervalCount) })
              : ey.intl.format(ey.t["yjsv/s"], { quantity: c, rate: (0, eT.CE)(i, u.interval, u.intervalCount) });
    switch (t.status) {
        case A.Dmq.ACCOUNT_HOLD:
            return t.isPurchasedViaGoogle
                ? ey.intl.format(ey.t.Nlf3nc, { quantity: c, boostQuantity: c })
                : f
                  ? ey.intl.format(ey.t.oiRy7v, {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eT.CE)(i, u.interval, u.intervalCount),
                    })
                  : ey.intl.format(ey.t["0QxOAi"], {
                        quantity: c,
                        boostQuantity: c,
                        rate: (0, eT.CE)(i, u.interval, u.intervalCount),
                    });
        case A.Dmq.PAUSE_PENDING:
        case A.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return ey.intl.string(ey.t.CduWAm);
            return ey.intl.format(ey.t["5iud9s"], { quantity: c });
        case A.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return ey.intl.format(ey.t["d+0vwo"], {
                    endDate: (0, em.i$)(e3(t).expiresDate, "LL"),
                    onClick: () => {
                        (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            return t.isPurchasedViaGoogle
                ? ey.intl.format(ey.t["5iud9s"], { quantity: c })
                : f
                  ? ey.intl.format(ey.t.eDwrLA, { quantity: c, rate: (0, eT.CE)(i, u.interval, u.intervalCount) })
                  : ey.intl.format(ey.t.ijSDcI, { quantity: c, rate: (0, eT.CE)(i, u.interval, u.intervalCount) });
    }
}
function tt(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t)
        try {
            i = eM(e.id, !1, r, t);
        } catch {
            i = eL(e.id, !1, r);
        }
    else i = eL(e.id, !1, r);
    let s = (0, eT.$g)(i.amount, i.currency);
    return e.currency !== eN.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function tn(e, t, n) {
    let i = tt(e, t, n);
    return (0, eT.CE)(i, e.interval, e.intervalCount);
}
function ti(e) {
    let { status: t, renewalMutations: n } = e;
    return t === A.Dmq.CANCELED || (null != n && (0, ec.m1)(n.planId) && !e.isPurchasedExternally);
}
function tr(e) {
    return e === A.Dmq.PAST_DUE || e === A.Dmq.ACCOUNT_HOLD || e === A.Dmq.BILLING_RETRY;
}
function ts(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: e_.A.ipCountryCodeWithFallback, currency: n },
        s = eh.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, eE.pM)(t, { tags: { planId: e } }), t);
    }
    let a = eh.A.getForSkuAndInterval(tR(I.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, eE.pM)(t, { tags: { planId: e } }), t);
    }
    return eM(a.id, (0, g.ki)(i), !1, r);
}
function ta(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case I.gD.PREMIUM_MONTH_TIER_0:
                return ey.intl.string(ey.t["0ggVqN"]);
            case I.gD.PREMIUM_YEAR_TIER_0:
                return ey.intl.string(ey.t["jm+ZQw"]);
            case I.gD.PREMIUM_MONTH_TIER_1:
                return ey.intl.string(ey.t.uph4Jx);
            case I.gD.PREMIUM_YEAR_TIER_1:
                return ey.intl.string(ey.t["D/l7Yt"]);
            case I.gD.PREMIUM_MONTH_TIER_2:
            case I.gD.PREMIUM_GROUP_MONTH:
                return ey.intl.string(ey.t["5l1MuV"]);
            case I.gD.PREMIUM_YEAR_TIER_2:
                return ey.intl.string(ey.t.G0mISV);
        }
    switch (i) {
        case I.gD.PREMIUM_MONTH_TIER_0:
            return n ? ey.intl.string(ey.t.cRCCJ3) : ey.intl.string(ey.t["/G3aKw"]);
        case I.gD.PREMIUM_YEAR_TIER_0:
            return n ? ey.intl.string(ey.t.cRCCJ3) : ey.intl.string(ey.t["2eQpsL"]);
        case I.gD.PREMIUM_MONTH_TIER_1:
            return n ? ey.intl.string(ey.t.cRCCJ3) : ey.intl.string(ey.t.gueLg5);
        case I.gD.PREMIUM_YEAR_TIER_1:
            return n ? ey.intl.string(ey.t.cRCCJ3) : ey.intl.string(ey.t["MhH/vW"]);
        case I.gD.PREMIUM_MONTH_TIER_2:
            return n ? ey.intl.string(ey.t.cRCCJ3) : ey.intl.string(ey.t.LQVQIq);
        case I.gD.PREMIUM_GROUP_MONTH:
            return ey.intl.formatToPlainString(eC.default.LwdrNi, { premiumGroupProductName: (0, eS.DP)() });
        case I.gD.PREMIUM_YEAR_TIER_2:
            return n ? ey.intl.string(ey.t.cRCCJ3) : ey.intl.string(ey.t["0nfg1x"]);
        case I.gD.PREMIUM_3_MONTH_TIER_2:
        case I.gD.PREMIUM_6_MONTH_TIER_2:
            return ey.intl.formatToPlainString(ey.t.BCD4fT, { intervalCount: t.intervalCount });
        case I.gD.NONE_MONTH:
        case I.gD.NONE_YEAR:
        case I.gD.NONE_3_MONTH:
        case I.gD.NONE_6_MONTH:
        case I.gD.PREMIUM_MONTH_GUILD:
        case I.gD.PREMIUM_YEAR_GUILD:
        case I.gD.PREMIUM_3_MONTH_GUILD:
        case I.gD.PREMIUM_6_MONTH_GUILD:
            return ey.intl.string(ey.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, eE.pM)(r, { tags: { planId: i } }), r);
}
function to(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = eh.A.get(t);
    return o()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function tl() {
    let e = eN.Yr.USD;
    try {
        e = eL(I.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function tu(e) {
    let { intervalType: t = I.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case I.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? ey.intl.formatToPlainString(ey.t.fRNBRX, { weeks: n / 7 })
                    : ey.intl.formatToPlainString(ey.t.EIpHEj, { weeks: n / 7 });
            return i
                ? ey.intl.formatToPlainString(ey.t["6Cdzoy"], { days: n })
                : ey.intl.formatToPlainString(ey.t["kbBj/h"], { days: n });
        case I.WT.MONTH:
            return i
                ? ey.intl.formatToPlainString(ey.t.x5MgxS, { months: n })
                : ey.intl.formatToPlainString(ey.t["4SEnCZ"], { months: n });
        case I.WT.YEAR:
            return i
                ? ey.intl.formatToPlainString(ey.t["h+63yl"], { years: n })
                : ey.intl.formatToPlainString(ey.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tc(e) {
    let { intervalType: t = I.WT.MONTH, intervalCount: n = 1 } = e,
        i = tl(),
        r = (0, eT.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case I.WT.DAY:
            if (n >= 7 && n % 7 == 0) return ey.intl.formatToPlainString(ey.t.C6i5Jt, { weeks: n / 7, price: r });
            return ey.intl.formatToPlainString(ey.t.cR9ifw, { days: n, price: r });
        case I.WT.MONTH:
            return ey.intl.formatToPlainString(ey.t["8FZfNo"], { months: n, price: r });
        case I.WT.YEAR:
            return ey.intl.formatToPlainString(ey.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function td(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return tc({ intervalType: t.interval, intervalCount: t.interval_count });
    }
    return null;
}
function t_(e) {
    let { intervalType: t = I.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case I.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? ey.intl.formatToPlainString(ey.t.iVZYyl, { weeks: n / 7 })
                    : ey.intl.formatToPlainString(ey.t.EmoBD2, { weeks: n / 7 });
            return i
                ? ey.intl.formatToPlainString(ey.t.jzH70Z, { days: n })
                : ey.intl.formatToPlainString(ey.t["k2UNz+"], { days: n });
        case I.WT.MONTH:
            return i
                ? ey.intl.formatToPlainString(ey.t.erUSmA, { months: n })
                : ey.intl.formatToPlainString(ey.t.kridzK, { months: n });
        case I.WT.YEAR:
            return i
                ? ey.intl.formatToPlainString(ey.t.IfYQVC, { years: n })
                : ey.intl.formatToPlainString(ey.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tf(e, t) {
    switch (e) {
        case A.kM_.APPLE_PARTNER:
        case A.kM_.APPLE_ADVANCED_COMMERCE:
        case A.kM_.APPLE:
            return ev[t];
        case A.kM_.GOOGLE:
            return eO[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function th(e, t) {
    return (0, g.ki)(e) || tr(t?.status);
}
function tp(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => I.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function tE(e) {
    return e.filter((e) => !I.JM.has(e.planId));
}
function tm(e, t, n, i) {
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
function tg(e, t) {
    return tm(e, t, 1, I.JM);
}
function tA(e, t, n) {
    return tm(e, n, t, I.pW);
}
function tI(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => I.JM.has(e.planId));
    if (null != t) {
        let n = eh.A.get(t.planId);
        o()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = eh.A.get(e.planId);
                if ((o()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = eh.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return o()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function tT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = I.f5[e].fileSize;
    return (0, eA.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function tS(e) {
    return null == e ? null : e.items.find((e) => I.pW.has(e.planId));
}
function tN(e) {
    let t = null != e ? eD(e) : null;
    return null != t ? eZ(t.planId) : null;
}
let ty = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function tC(e) {
    return eu(ei, e);
}
function tv(e) {
    return eu(B, e);
}
function tO(e, t) {
    let n = (0, eT.$g)(e.amount, e.currency),
        i = eV(t);
    return `${n}/${i}`;
}
function tR(e) {
    return e;
}
function tb(e) {
    return "isNitroLocked" in e;
}
function tD() {
    let e = (0, c.bG)([ed.default], () => ed.default.getCurrentUser());
    return (0, g.YE)(e, I.PremiumTypes.TIER_2);
}
function tL(e) {
    var t;
    let n = I.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case I.Tt:
                return I.h7;
            case I.yo:
                return I.CA;
        }
    else;
    return n;
}
function tw(e) {
    return tM(e.map((e) => e.skuId));
}
function tM(e) {
    return e.reduce((e, t) => {
        let [n, i] = I.NL[t],
            r = 1;
        switch (n) {
            case I.T.HOUR:
                r = 1;
                break;
            case I.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let tP = (e) => {
    let { planId: t, shouldUseCalculatedDiscount: n, isGift: i, priceOptions: r, subscriptionPlan: s } = e,
        a = I.XE[t];
    return n && (a = tx(s, i, r)), a;
};
function tx(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === I.WT.YEAR) {
        try {
            if (
                ((t = ((e) => {
                    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
                        r = I.En[t.skuId];
                    return null == r ? null : eM(r, !1, n, i);
                })({ subscriptionPlan: e, isGift: i, priceOptions: r })),
                null == t)
            )
                return;
            n = eM(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tU(e) {
    return null == e ? 0 : Math.max((0, em.m_)(new Date(), new Date(e)), 0);
}
let tk = Object.freeze({
    isNewUser: ty,
    isPremiumAtLeast: g.CC,
    isPremium: g.ki,
    isPremiumExactly: g.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: eM,
    getDefaultPrice: eL,
    getInterval: function (e) {
        let t = I.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, eE.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: eF,
    getIntervalStringAsNoun: eV,
    getPremiumType: eB,
    getTierDisplayNameByPlanId: eY,
    getDisplayName: eH,
    getPremiumPlanOptions: eq,
    formatInterval: function (e) {
        if (e === I.WT.YEAR) return ey.intl.string(ey.t.tfqrhj);
        if (e === I.WT.MONTH) return ey.intl.string(ey.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eK,
    isPremiumSku: function (e) {
        return e === I.pe.TIER_0 || e === I.pe.TIER_1 || e === I.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === I.WT.MONTH) return t;
        if (e === I.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: T,
    getSkuIdForPlan: eZ,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case I.PremiumTypes.TIER_0:
                return I.pe.TIER_0;
            case I.PremiumTypes.TIER_1:
                return I.pe.TIER_1;
            case I.PremiumTypes.TIER_2:
                return I.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return eB(e) === I.PremiumTypes.TIER_2 ? I.M4 : 0;
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
                          fractionalState: I.xc.NONE,
                          startsAt: u()(0),
                          endsAt: u()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: u()(0),
                          unactivatedUnits: [],
                      },
            s = null !== n && e.status === A.Dmq.PAST_DUE ? n : t,
            a = i
                ? (0, eT.$g)(
                      s.invoiceItems
                          .filter((e) => I.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, eT.$g)(s.total, s.currency);
        if (ed.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return ey.intl.format(ey.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === A.Dmq.CANCELED) return ey.intl.format(ey.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === A.Dmq.PAUSE_PENDING)
            return ey.intl.format(ey.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === A.Dmq.PAUSED)
            return r.fractionalState !== I.xc.NONE
                ? ey.intl.format(ey.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: a })
                : null == e.pauseEndsAt
                  ? i
                      ? ey.intl.format(ey.t.KTYQCg, { planName: ey.intl.string(ey.t.Ipxkog), price: a })
                      : ey.intl.string(ey.t.fMz6Lg)
                  : i
                    ? ey.intl.format(ey.t.zcgtzf, {
                          planName: ey.intl.string(ey.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: a,
                      })
                    : ey.intl.format(ey.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === A.Dmq.PAST_DUE) {
            let t = e3(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = u()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = u()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? ey.intl.format(ey.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: eN.qm[e.paymentGateway],
                      paymentSourceLink: tf(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : ey.intl.format(ey.t.qEIzyi, { endDate: t.toDate(), price: a });
        }
        {
            var o;
            if (e.status === A.Dmq.BILLING_RETRY)
                return ey.intl.format(ey.t.EMTLOT, {
                    endDate: u()(e.currentPeriodStart).add(I.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === A.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, eI.isAndroid)()
                    ? ey.intl.format(ey.t["dtcxw+"], {
                          endDate: u()(e.currentPeriodStart).add(I.ph, "days").toDate(),
                          paymentGatewayName: eN.qm[e.paymentGateway],
                          paymentSourceLink: tf(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : ey.intl.format(ey.t.EMTLOT, {
                          endDate: u()(e.currentPeriodStart).add(I.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (o = e).paymentSourceId && e8(o.paymentSourceId))
                return ey.intl.format(ey.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === A.Dmq.UNPAID) return ey.intl.format(ey.t.CzTKom, { maxProcessingTimeInDays: I.G4 });
            if (e.isPurchasedExternally)
                return ey.intl.format(ey.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: eN.qm[e.paymentGateway],
                    subscriptionManagementLink: tf(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = e6(n, r.unactivatedUnits)),
                i
                    ? ey.intl.format(ey.t.Vl3cED, { planName: ey.intl.string(ey.t.Ipxkog), renewalDate: n, price: a })
                    : ey.intl.format(ey.t.Q18lRK, { renewalDate: n, price: a })
            );
        }
    },
    extendDateWithUnconsumedFractionalPremium: e6,
    getUnactivatedFractionalPremiumDurationString: e4,
    isSwitchingPlansDisabled: e5,
    getSwitchingPlansDisabledMessage: e7,
    isNoneSubscription: ec.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === A.Dmq.CANCELED || e.status === A.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eJ(t);
        });
        return null == i ||
            (0, ec.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === A.Dmq.CANCELED || e.status === A.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return eJ(t);
        });
        return (null == i || (0, ec.m1)(i.subscriptionPlanId)) && (n = A.Dmq.CANCELED), n;
    },
    isBaseSubscriptionCanceled: ti,
    getPremiumGuildIntervalPrice: ts,
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
    getBillingReviewSubheader: ta,
    getIntervalForInvoice: to,
    getPremiumPlanItem: eD,
    getGuildBoostPlanItem: tS,
    isBoostOnlySubscription: function (e) {
        return null != e && null == eD(e) && null != tS(e);
    },
    getPremiumSkuIdForSubscription: tN,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = eD(e);
            if (null != t) return eB(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tw,
    castPremiumSubscriptionAsSkuId: tR,
    calculateDiscountPercentageForYearlyPlan: tx,
    getDaysSincePremium: tU,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, em.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return eu(D, e);
    },
    canUseEmojisEverywhere: function (e) {
        return eu(L, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return eu(M, e);
    },
    canUseCustomCallSounds: function (e) {
        return eu(P, e);
    },
    canUploadLargeFiles: function (e) {
        return eu(en, e);
    },
    canUseBadges: function (e) {
        return eu(F, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return eu(et, e);
    },
    canEditDiscriminator: function (e) {
        return eu(k, e);
    },
    hasBoostDiscount: function (e) {
        return eu(Y, e);
    },
    canUseAnimatedAvatar: function (e) {
        return eu(U, e);
    },
    canInstallPremiumApplications: function (e) {
        return eu(Z, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return eu(ee, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return eu(J, e);
    },
    canRedeemPremiumPerks: function (e) {
        return eu(X, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return eu(V, e);
    },
    canUsePremiumAppIcons: function (e) {
        return eu(H, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return eu(G, e);
    },
    canUseClientThemes: function (e) {
        return eu(j, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? eu(z, t) : "mid" === e && eu(K, t);
    },
    canUseQuestOrbMultiplier: tC,
    hasFreeBoosts: function (e) {
        return eu(W, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return eu(w, e);
    },
    canUseCustomBackgrounds: function (e) {
        return eu(Q, e);
    },
    canUseCollectibles: tv,
    canUseMonthlyOrbs: function (e) {
        return (0, O.Nh)(e?.perks, d.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        let { getIsCrepeEnabled: t } = n(968671);
        return (t("canUseShopDiscounts") && (0, O.Nh)(e?.perks, d.bb.SHOP_DISCOUNTS)) || tv(e);
    },
    canUseMoreQuestOrbs: function (e) {
        let { getIsCrepeEnabled: t } = n(968671);
        return (t("canUseMoreQuestOrbs") && (0, O.Nh)(e?.perks, d.bb.MORE_QUEST_ORBS)) || tC(e);
    },
    formatPriceString: tO,
    StreamQuality: eb,
});
