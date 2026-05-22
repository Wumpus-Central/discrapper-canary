"use strict";
n.d(t, {
    ki: () => ts,
    Ke: () => eV,
    FY: () => t_,
    ff: () => tl,
    aZ: () => tC,
    Nc: () => e8,
    Rr: () => tc,
    YE: () => I.YE,
    OU: () => eZ,
    qn: () => tS,
    CC: () => I.CC,
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
    TW: () => I.ki,
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
    E = n(981088),
    m = n(367888),
    g =
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
    A = n(683760),
    I = n(474090),
    T = n(652215),
    S = n(788868);
function N(e) {
    if (null == e) return T.TbF;
    let t = A.A.getPremiumTypeOverride();
    return e.isStaff() && t === S.$I
        ? T.mu
        : null != e.premiumType && (0, I.ki)(e)
          ? S.f5[e.premiumType].fileSize
          : T.TbF;
}
class y {
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
var v = n(945810),
    O =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (r[(r.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        r);
let R = (0, v.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var b = n(349871);
let D = new p.A("ProductCatalog.tsx");
class L extends y {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = S.u0[t.premiumType];
                        if (null == n)
                            return (
                                D.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = ea[n];
                        if (null == i)
                            return (
                                D.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        D.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let w = new L(g.ANIMATED_EMOJIS),
    M = new L(g.EMOJIS_EVERYWHERE),
    P = new L(g.STICKERS_EVERYWHERE),
    x = new L(g.SOUNDBOARD_EVERYWHERE),
    U = new L(g.CUSTOM_CALL_SOUNDS),
    k = new L(g.PREMIUM_VOICE_FILTERS),
    G = new L(g.ANIMATED_AVATAR),
    F = new L(g.CUSTOM_DISCRIMINATOR),
    V = new L(g.PREMIUM_GUILD_MEMBER_PROFILE),
    B = new L("profileBadges"),
    H = new L(g.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    j = new L("collectibles"),
    Y = new L("appIcons"),
    W = new L(g.CLIENT_THEMES),
    K = new L("boostDiscount"),
    z = new L("freeBoosts"),
    $ = new L(g.STREAM_MID_QUALITY),
    q = new L(g.STREAM_HIGH_QUALITY),
    Z = new L(g.CUSTOM_NOTIFICATION_SOUNDS),
    X = new L("fancyVoiceChannelReactions"),
    Q = new L("installPremiumApplications"),
    J = new L("redeemPremiumPerks"),
    ee = new L(g.VIDEO_FILTER_ASSETS);
new y(g.INCREASED_FILE_UPLOAD_SIZE, N);
let et = new L(g.INCREASED_GUILD_LIMIT),
    en = new L(g.INCREASED_MESSAGE_LENGTH),
    ei = new L("increasedVideoUploadQuality"),
    er = new L("uploadLargeFiles"),
    es = new L(g.QUEST_ORB_MULTIPLIER),
    ea = Object.freeze({
        [S.pe.TIER_0]: new C(S.pe.TIER_0, [w, M, P, B, ee, ei, er, Y]),
        [S.pe.TIER_1]: new C(S.pe.TIER_1, [w, M, G, F, B, K, $, X, ei, er, Y]),
        [S.pe.TIER_2]: new C(S.pe.TIER_2, [
            w,
            M,
            P,
            x,
            U,
            G,
            F,
            V,
            B,
            H,
            W,
            K,
            z,
            $,
            q,
            X,
            Q,
            J,
            ee,
            et,
            en,
            ei,
            er,
            Y,
            j,
            Z,
            k,
            es,
        ]),
    }),
    eo = [K, z],
    el = [es],
    eu = [],
    ec = new Map([
        [w, d.bb.ANIMATED_EMOJIS],
        [M, d.bb.EMOJIS_EVERYWHERE],
        [P, d.bb.STICKERS_EVERYWHERE],
        [x, d.bb.SOUNDBOARD_EVERYWHERE],
        [U, d.bb.CUSTOM_CALL_SOUNDS],
        [k, d.bb.PREMIUM_VOICE_FILTERS],
        [G, d.bb.ANIMATED_AVATAR],
        [F, d.bb.CUSTOM_DISCRIMINATOR],
        [V, d.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [H, d.bb.PROFILE_PREMIUM_FEATURES],
        [j, d.bb.PREMIUM_COLLECTIBLES],
        [W, d.bb.CLIENT_THEMES],
        [$, d.bb.STREAM_MID_QUALITY],
        [q, d.bb.STREAM_HIGH_QUALITY],
        [ee, d.bb.VIDEO_FILTER_ASSETS],
        [et, d.bb.INCREASED_GUILD_LIMIT],
        [en, d.bb.INCREASED_MESSAGE_LENGTH],
        [er, d.bb.INCREASED_FILE_UPLOAD_SIZE],
        [B, d.bb.PROFILE_BADGES],
        [Y, d.bb.APP_ICONS],
        [K, d.bb.BOOST_DISCOUNT],
        [z, d.bb.FREE_BOOSTS],
        [Q, d.bb.INSTALL_PREMIUM_APPLICATIONS],
        [ei, d.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function ed(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && eo.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && el.includes(e)) ||
        (n && eu.includes(e))
    )
        return !1;
    let i = ec.get(e);
    if (null != i && t?.perks != null) {
        let n = R.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== O.CONTROL) {
            let r = e.getFeatureValue(t),
                s = (0, b.Nh)(t?.perks, i);
            return n === O.DUAL_READ_RETURN_NEW ? s : r;
        }
    }
    return e.getFeatureValue(t);
}
var e_ = n(906023),
    ef = n(832946),
    eh = n(287809),
    ep = n(615405),
    eE = n(295405),
    em = n(97352),
    eg = n(166403),
    eA = n(739508),
    eI = n(58703),
    eT = n(927813),
    eS = n(255438),
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
    return e.items.find((e) => S.JM.has(e.planId));
}
function eM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = eE.A.defaultPaymentSourceId ?? void 0,
        a = eg.A.getPremiumTypeSubscription();
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
    if (null != em.A.get(e)) {
        let i = T.lid.DEFAULT;
        n ? (i = T.lid.GIFT) : t && (i = T.lid.PREMIUM_TIER_1);
        let o = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: T.lid.DEFAULT },
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
                    (0, eA.pM)(t, {
                        extra: { paymentSourceId: s },
                        tags: { purchaseType: i.toString(), planId: e, currency: a ?? "unknown" },
                    }),
                t)
            );
        }
        return o;
    }
    let l = Error("Plan not found");
    throw (r && (0, eA.pM)(l, { tags: { planId: e, currency: a ?? "unknown" }, extra: { ...i, isGift: n } }), l);
}
function eU(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: T.lid.DEFAULT },
        i = (function (e, t) {
            let n = em.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, eA.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
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
            (0, eA.pM)(s, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        eD.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, eA.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
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
        a = (0, m._1)(e);
    null != a && (i = S.hd[a.planId].premiumType);
    let o = (0, I.CC)(i, S.PremiumTypes.TIER_0),
        l = (0, I.CC)(i, S.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = S.pW.has(i.planId) ? l : !S.JM.has(i.planId) && o),
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
        case S.Ff.MONTH:
            return ev.intl.string(ev.t.FPybU7);
        case S.Ff.YEAR:
            return ev.intl.string(ev.t.tfqrhj);
        case S.Ff.DAY:
        case S.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function eB(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : S.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case S.WT.MONTH:
                let a = ev.intl.formatToPlainString(s === S.PremiumTypes.TIER_0 ? ev.t.NPKsLz : ev.t.poEovT, {
                    timeInterval: ev.intl.string(ev.t.FPybU7),
                });
                return r ? a : ev.intl.string(ev.t.Mh9bTt);
            case S.WT.YEAR:
                let o = ev.intl.formatToPlainString(s === S.PremiumTypes.TIER_0 ? ev.t.NPKsLz : ev.t.poEovT, {
                    timeInterval: ev.intl.string(ev.t.tfqrhj),
                });
                return r ? o : ev.intl.string(ev.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case S.WT.MONTH:
            if (1 !== i) return ev.intl.formatToPlainString(ev.t["0UlZnH"], { intervalCount: i });
            return ev.intl.string(ev.t.DKzs96);
        case S.WT.YEAR:
            return ev.intl.string(ev.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function eH(e) {
    switch (e) {
        case S.WT.MONTH:
            return ev.intl.string(ev.t.FPybU7);
        case S.WT.YEAR:
            return ev.intl.string(ev.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function ej(e) {
    let t = S.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, eA.pM)(n, { tags: { planId: e } }), n);
}
function eY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case S.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? ev.intl.format(ev.t.TZXHNj, { duration: i })
                : n
                  ? ev.intl.string(ev.t["81iAgs"])
                  : ev.intl.string(ev.t["0efVPy"]);
        case S.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? ev.intl.format(ev.t.eqRhC7, { duration: i })
                : n
                  ? ev.intl.string(ev.t.UvzqY1)
                  : ev.intl.string(ev.t.eoVuBn);
        case S.gD.PREMIUM_MONTH_TIER_1:
            return n ? ev.intl.string(ev.t["g/dH5g"]) : ev.intl.string(ev.t["7O6qSq"]);
        case S.gD.PREMIUM_YEAR_TIER_1:
            return n ? ev.intl.string(ev.t.pdZJaq) : ev.intl.string(ev.t.Md5xbi);
        case S.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? ev.intl.format(ev.t.aI6QXz, { duration: i })
                : n
                  ? ev.intl.string(ev.t.SmVbHc)
                  : ev.intl.string(ev.t.FKYNC6);
        case S.gD.PREMIUM_GROUP_MONTH:
            return n ? ev.intl.string(ev.t.SmVbHc) : ev.intl.string(ev.t.FKYNC6);
        case S.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? ev.intl.format(ev.t["1wBcPi"], { duration: i })
                : n
                  ? ev.intl.string(ev.t.JIq4O1)
                  : ev.intl.string(ev.t["cfu/5d"]);
        case S.gD.PREMIUM_3_MONTH_TIER_2:
            return ev.intl.string(ev.t.wCbINr);
        case S.gD.PREMIUM_6_MONTH_TIER_2:
            return ev.intl.string(ev.t["e3/ArU"]);
        case S.gD.PREMIUM_MONTH_GUILD:
            return n ? ev.intl.string(ev.t["6ZR3By"]) : ev.intl.string(ev.t["h80cx/"]);
        case S.gD.PREMIUM_YEAR_GUILD:
            return n ? ev.intl.string(ev.t.YDpAzZ) : ev.intl.string(ev.t.ZHkls0);
        case S.gD.PREMIUM_3_MONTH_GUILD:
            return ev.intl.string(ev.t.EZHHB6);
        case S.gD.PREMIUM_6_MONTH_GUILD:
            return ev.intl.string(ev.t.X2KDO2);
        case S.gD.PREMIUM_MONTH_LEGACY:
            return ev.intl.string(ev.t.PD6k79);
        case S.gD.PREMIUM_YEAR_LEGACY:
            return ev.intl.string(ev.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, eA.pM)(r, { tags: { planId: e } }), r);
}
function eW(e) {
    switch (e) {
        case S.pe.TIER_0:
            return ev.intl.string(ev.t["t9uG/o"]);
        case S.pe.TIER_1:
            return ev.intl.string(ev.t.FSOz78);
        case S.pe.TIER_2:
            return ev.intl.string(ev.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, eA.pM)(t, { tags: { skuId: e } }), t);
}
function eK(e) {
    let t = S.hd[e]?.premiumType,
        n = null != t ? S.Mr[t] : null;
    if (null != n) return ev.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, eA.pM)(i, { tags: { planId: e } }), i);
}
function ez(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case S.PremiumTypes.TIER_0:
            return t ? "Basic" : ev.intl.string(ev.t["t9uG/o"]);
        case S.PremiumTypes.TIER_1:
            return t ? "Classic" : ev.intl.string(ev.t.FSOz78);
        case S.PremiumTypes.TIER_2:
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
        d = S.hd[n],
        f = tb(eM(d.id), d.interval),
        h = null != l && 0 === l.subtotal,
        p =
            ts(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !eh.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        E = null != i && null == t.paymentGateway,
        m = t.status === T.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === T.lT7.OPEN,
        g = p ? T.Dmq.CANCELED : m ? T.Dmq.UNPAID : t.status,
        A = o?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        I = S.M4 + (r ? eJ(t.additionalPlans) : 0),
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
                ? ev.intl.format(ev.t["jRy6/J"], { price: i, num: I })
                : ev.intl.format(ev.t.tTNE8M, { price: i, num: I })
            : ev.intl.format(ev.t["U+z/HJ"], { num: I });
    switch (n) {
        case S.gD.PREMIUM_MONTH_TIER_0:
        case S.gD.PREMIUM_YEAR_TIER_0:
            switch (g) {
                case T.Dmq.CANCELED:
                    return E
                        ? A
                            ? ev.intl.format(ev.t["USi/nc"], { price: i })
                            : ev.intl.format(ev.t["FS//l2"], { price: i })
                        : ev.intl.string(ev.t.JshLzq);
                case T.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? ev.intl.format(ev.t["5mv+2i"], { price: i })
                            : ev.intl.format(ev.t.nkAEfZ, { price: i })
                        : ev.intl.format(ev.t.SsLIXS, {});
                case T.Dmq.UNPAID:
                    return ev.intl.format(ev.t.cmkbFB, {});
                case T.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? ev.intl.format(ev.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : ev.intl.format(ev.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case T.Dmq.PAUSED:
                    if (c) return N;
                    return ev.intl.format(ev.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case T.Dmq.PAST_DUE:
                    return ev.intl.format(ev.t["d+0vwo"], {
                        endDate: (0, eI.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return N;
            }
        case S.gD.PREMIUM_MONTH_TIER_1:
        case S.gD.PREMIUM_YEAR_TIER_1:
            switch (g) {
                case T.Dmq.CANCELED:
                    return E
                        ? A
                            ? ev.intl.format(ev.t.cXy8Bp, { price: i })
                            : ev.intl.format(ev.t["C/XsHt"], { price: i })
                        : ev.intl.string(ev.t.K6tYFa);
                case T.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? ev.intl.format(ev.t.HBkIBi, { price: i })
                            : ev.intl.format(ev.t.ZsO1Sx, { price: i })
                        : ev.intl.format(ev.t["0+/WH7"], {});
                case T.Dmq.UNPAID:
                    return ev.intl.format(ev.t.McIzwj, {});
                case T.Dmq.PAUSE_PENDING:
                    let O = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != O
                        ? ev.intl.format(ev.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: O })
                        : ev.intl.format(ev.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case T.Dmq.PAUSED:
                    if (c) return y;
                    return ev.intl.format(ev.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case T.Dmq.PAST_DUE:
                    return ev.intl.format(ev.t["d+0vwo"], {
                        endDate: (0, eI.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return y;
            }
        case S.gD.PREMIUM_MONTH_TIER_2:
        case S.gD.PREMIUM_YEAR_TIER_2:
        case S.gD.PREMIUM_3_MONTH_TIER_2:
        case S.gD.PREMIUM_6_MONTH_TIER_2:
        case S.gD.PREMIUM_GROUP_MONTH:
            switch (g) {
                case T.Dmq.CANCELED:
                    return E
                        ? A
                            ? ev.intl.format(ev.t.xoFgRh, { price: i, num: I })
                            : ev.intl.format(ev.t.nXdbKo, { price: i, num: I })
                        : ev.intl.format(ev.t.EcSdRH, { num: I });
                case T.Dmq.ACCOUNT_HOLD:
                    return E
                        ? A
                            ? ev.intl.format(ev.t["5C/0QG"], { price: i, num: I })
                            : ev.intl.format(ev.t.xfYkhu, { price: i, num: I })
                        : ev.intl.format(ev.t.ivjxcn, { num: I });
                case T.Dmq.UNPAID:
                    return ev.intl.format(ev.t["0HopYf"], { num: I });
                case T.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? u()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? ev.intl.format(ev.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : ev.intl.format(ev.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case T.Dmq.PAUSED:
                    if (c) return C;
                    return ev.intl.format(ev.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case T.Dmq.BILLING_RETRY:
                    return ev.intl.format(ev.t["IlJ/HV"], {
                        endDate: u()(t.currentPeriodStart).add(S.bx, "days").toDate(),
                    });
                case T.Dmq.PAST_DUE:
                    return ev.intl.format(ev.t["d+0vwo"], {
                        endDate: (0, eI.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, _.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return s
                        ? n === S.gD.PREMIUM_YEAR_TIER_2
                            ? ev.intl.format(ev.t["+qqh6g"], { percent: a?.percentage ?? S.Cq, regularPrice: f })
                            : A
                              ? ev.intl.formatToPlainString(ev.t["3ZiutU"], {
                                    percent: a?.percentage ?? S._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? S.OJ,
                                })
                              : ev.intl.formatToPlainString(ev.t["G6+XOT"], {
                                    percent: a?.percentage ?? S._$,
                                    regularPrice: f,
                                    numMonths: a?.duration ?? S.OJ,
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
        p = em.A.get(c);
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
        i = (0, ef.m1)(t) ? null : eY(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return S.pW.has(t);
        }),
        s = r?.planId === S.gD.PREMIUM_MONTH_GUILD || r?.planId === S.gD.PREMIUM_YEAR_GUILD ? ev.t.Pi5yMJ : null,
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
    let r = void 0 !== i && t === S.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case S.pe.TIER_0:
            s = [S.gD.PREMIUM_YEAR_TIER_0, S.gD.PREMIUM_MONTH_TIER_0];
            break;
        case S.pe.TIER_1:
            s = [S.gD.PREMIUM_MONTH_TIER_1];
            break;
        case S.pe.TIER_2:
            s = [S.gD.PREMIUM_YEAR_TIER_2, S.gD.PREMIUM_MONTH_TIER_2];
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
    let t = S.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, eA.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eJ(e) {
    let t = em.A.getPlanIdsForSkus([tD(S.pe.GUILD)]);
    o()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e0 = new Set([
    S.gD.NONE_MONTH,
    S.gD.NONE_3_MONTH,
    S.gD.NONE_6_MONTH,
    S.gD.NONE_YEAR,
    S.gD.PREMIUM_MONTH_TIER_0,
    S.gD.PREMIUM_MONTH_TIER_1,
    S.gD.PREMIUM_MONTH_TIER_2,
    S.gD.PREMIUM_YEAR_TIER_0,
    S.gD.PREMIUM_YEAR_TIER_1,
    S.gD.PREMIUM_YEAR_TIER_2,
    S.gD.PREMIUM_3_MONTH_TIER_2,
    S.gD.PREMIUM_6_MONTH_TIER_2,
    S.gD.PREMIUM_GROUP_MONTH,
]);
function e1(e) {
    return e0.has(e);
}
function e2(e) {
    return S.pW.has(e);
}
function e3(e) {
    return e1(e) || e2(e);
}
function e6(e) {
    return null != e && e === S.gD.PREMIUM_GROUP_MONTH;
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
        let t = e.isPurchasedViaApple ? S.U1 : S.L9;
        return { days: t, expiresDate: u()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: u()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: u()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? S.a5 : S.EV;
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
    if (!(t > 0 && e.fractionalState === S.xc.NONE)) return "";
    let n = { days: ev.t.fYmirx, hours: ev.t["C3RO+g"], minutes: ev.t.r77oHc },
        i = (0, f.Vb)((0, eI.Tf)(0, t * eT.A.Millis.HOUR));
    return (0, eI.uN)(i, n);
}
function e8(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === T.Dmq.PAST_DUE;
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
    let t = eE.A.getPaymentSource(e);
    return null != t && eC.AD.has(t.type);
}
function tt(e) {
    return e.isPurchasedExternally
        ? e.status === T.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eJ(n);
              return 0 === (null != t ? eJ(t.additionalPlans) : null) && 0 !== r ? T.Dmq.CANCELED : i;
          })(e) === T.Dmq.CANCELED;
}
function tn(e) {
    let { subscription: t, user: n, price: i, renewalInvoicePreview: r, fractionalPremiumInfo: s } = e,
        { planId: a, additionalPlans: l } = t,
        u = em.A.get(a);
    o()(null != u, "Missing plan");
    let c = eJ(l),
        d = to(t.planId, t.paymentSourceId, t.currency, n).amount * c;
    if (null != r) {
        let e = r.invoiceItems.find((e) => S.pW.has(e.subscriptionPlanId));
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
        case T.Dmq.ACCOUNT_HOLD:
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
        case T.Dmq.PAUSE_PENDING:
        case T.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return ev.intl.string(ev.t.CduWAm);
            return ev.intl.format(ev.t["5iud9s"], { quantity: c });
        case T.Dmq.PAST_DUE:
            if (t.isBoostOnly)
                return ev.intl.format(ev.t["d+0vwo"], {
                    endDate: (0, eI.i$)(e4(t).expiresDate, "LL"),
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
    return t === T.Dmq.CANCELED || (null != n && (0, ef.m1)(n.planId) && !e.isPurchasedExternally);
}
function ta(e) {
    return e === T.Dmq.PAST_DUE || e === T.Dmq.ACCOUNT_HOLD || e === T.Dmq.BILLING_RETRY;
}
function to(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: ep.A.ipCountryCodeWithFallback, currency: n },
        s = em.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, eA.pM)(t, { tags: { planId: e } }), t);
    }
    let a = em.A.getForSkuAndInterval(tD(S.pe.GUILD), s.interval, s.intervalCount);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, eA.pM)(t, { tags: { planId: e } }), t);
    }
    return ex(a.id, (0, I.ki)(i), !1, r);
}
function tl(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case S.gD.PREMIUM_MONTH_TIER_0:
                return ev.intl.string(ev.t["0ggVqN"]);
            case S.gD.PREMIUM_YEAR_TIER_0:
                return ev.intl.string(ev.t["jm+ZQw"]);
            case S.gD.PREMIUM_MONTH_TIER_1:
                return ev.intl.string(ev.t.uph4Jx);
            case S.gD.PREMIUM_YEAR_TIER_1:
                return ev.intl.string(ev.t["D/l7Yt"]);
            case S.gD.PREMIUM_MONTH_TIER_2:
            case S.gD.PREMIUM_GROUP_MONTH:
                return ev.intl.string(ev.t["5l1MuV"]);
            case S.gD.PREMIUM_YEAR_TIER_2:
                return ev.intl.string(ev.t.G0mISV);
        }
    switch (i) {
        case S.gD.PREMIUM_MONTH_TIER_0:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["/G3aKw"]);
        case S.gD.PREMIUM_YEAR_TIER_0:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["2eQpsL"]);
        case S.gD.PREMIUM_MONTH_TIER_1:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t.gueLg5);
        case S.gD.PREMIUM_YEAR_TIER_1:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["MhH/vW"]);
        case S.gD.PREMIUM_MONTH_TIER_2:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t.LQVQIq);
        case S.gD.PREMIUM_GROUP_MONTH:
            return ev.intl.formatToPlainString(eO.default.LwdrNi, { premiumGroupProductName: (0, ey.DP)() });
        case S.gD.PREMIUM_YEAR_TIER_2:
            return n ? ev.intl.string(ev.t.cRCCJ3) : ev.intl.string(ev.t["0nfg1x"]);
        case S.gD.PREMIUM_3_MONTH_TIER_2:
        case S.gD.PREMIUM_6_MONTH_TIER_2:
            return ev.intl.formatToPlainString(ev.t.BCD4fT, { intervalCount: t.intervalCount });
        case S.gD.NONE_MONTH:
        case S.gD.NONE_YEAR:
        case S.gD.NONE_3_MONTH:
        case S.gD.NONE_6_MONTH:
        case S.gD.PREMIUM_MONTH_GUILD:
        case S.gD.PREMIUM_YEAR_GUILD:
        case S.gD.PREMIUM_3_MONTH_GUILD:
        case S.gD.PREMIUM_6_MONTH_GUILD:
            return ev.intl.string(ev.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, eA.pM)(r, { tags: { planId: i } }), r);
}
function tu(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = em.A.get(t);
    return o()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function tc() {
    let e = eC.Yr.USD;
    try {
        e = eM(S.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function td(e) {
    let { intervalType: t = S.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case S.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? ev.intl.formatToPlainString(ev.t.fRNBRX, { weeks: n / 7 })
                    : ev.intl.formatToPlainString(ev.t.EIpHEj, { weeks: n / 7 });
            return i
                ? ev.intl.formatToPlainString(ev.t["6Cdzoy"], { days: n })
                : ev.intl.formatToPlainString(ev.t["kbBj/h"], { days: n });
        case S.WT.MONTH:
            return i
                ? ev.intl.formatToPlainString(ev.t.x5MgxS, { months: n })
                : ev.intl.formatToPlainString(ev.t["4SEnCZ"], { months: n });
        case S.WT.YEAR:
            return i
                ? ev.intl.formatToPlainString(ev.t["h+63yl"], { years: n })
                : ev.intl.formatToPlainString(ev.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function t_(e) {
    let { intervalType: t = S.WT.MONTH, intervalCount: n = 1 } = e,
        i = tc(),
        r = (0, eN.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case S.WT.DAY:
            if (n >= 7 && n % 7 == 0) return ev.intl.formatToPlainString(ev.t.C6i5Jt, { weeks: n / 7, price: r });
            return ev.intl.formatToPlainString(ev.t.cR9ifw, { days: n, price: r });
        case S.WT.MONTH:
            return ev.intl.formatToPlainString(ev.t["8FZfNo"], { months: n, price: r });
        case S.WT.YEAR:
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
    let { intervalType: t = S.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case S.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? ev.intl.formatToPlainString(ev.t.iVZYyl, { weeks: n / 7 })
                    : ev.intl.formatToPlainString(ev.t.EmoBD2, { weeks: n / 7 });
            return i
                ? ev.intl.formatToPlainString(ev.t.jzH70Z, { days: n })
                : ev.intl.formatToPlainString(ev.t["k2UNz+"], { days: n });
        case S.WT.MONTH:
            return i
                ? ev.intl.formatToPlainString(ev.t.erUSmA, { months: n })
                : ev.intl.formatToPlainString(ev.t.kridzK, { months: n });
        case S.WT.YEAR:
            return i
                ? ev.intl.formatToPlainString(ev.t.IfYQVC, { years: n })
                : ev.intl.formatToPlainString(ev.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tp(e, t) {
    switch (e) {
        case T.kM_.APPLE_PARTNER:
        case T.kM_.APPLE_ADVANCED_COMMERCE:
        case T.kM_.APPLE:
            return eR[t];
        case T.kM_.GOOGLE:
            return eb[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tE(e, t) {
    return (0, I.ki)(e) || ta(t?.status);
}
function tm(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => S.JM.has(e.planId));
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
    return e.filter((e) => !S.JM.has(e.planId));
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
    return tA(e, t, 1, S.JM);
}
function tT(e, t, n) {
    return tA(e, n, t, S.pW);
}
function tS(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => S.JM.has(e.planId));
    if (null != t) {
        let n = em.A.get(t.planId);
        o()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = em.A.get(e.planId);
                if ((o()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = em.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return o()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function tN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = S.f5[e].fileSize;
    return (0, eS.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function ty(e) {
    return null == e ? null : e.items.find((e) => S.pW.has(e.planId));
}
function tC(e) {
    let t = null != e ? ew(e) : null;
    return null != t ? eQ(t.planId) : null;
}
let tv = (e) => null != e && Date.now() - e.createdAt.getTime() < 2592e6;
function tO(e) {
    return ed(es, e);
}
function tR(e) {
    return ed(j, e);
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
    let e = (0, c.bG)([eh.default], () => eh.default.getCurrentUser());
    return (0, I.YE)(e, S.PremiumTypes.TIER_2);
}
function tM(e) {
    var t;
    let n = S.Eg;
    if (null != (t = e) && "trial_id" in t)
        switch (e.trial_id) {
            case S.Tt:
                return S.h7;
            case S.yo:
                return S.CA;
        }
    else;
    return n;
}
function tP(e) {
    return tx(e.map((e) => e.skuId));
}
function tx(e) {
    return e.reduce((e, t) => {
        let [n, i] = S.NL[t],
            r = 1;
        switch (n) {
            case S.T.HOUR:
                r = 1;
                break;
            case S.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let tU = (e) => {
        let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
            r = S.En[t.skuId];
        return null == r ? null : ex(r, !1, n, i);
    },
    tk = (e) => {
        let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
            { enabled: s } = e_.A.getConfig({ location: "getSavingsPercent" }),
            a = S.XE[t];
        return s && null != r && (a = tF(r, n, i)), a;
    };
function tG(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === S.WT.DAY || (t.interval === S.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tU({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let s = t.interval === S.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * s;
}
function tF(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === S.WT.YEAR) {
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
    return null == e ? 0 : Math.max((0, eI.m_)(new Date(), new Date(e)), 0);
}
let tB = Object.freeze({
    isNewUser: tv,
    isPremiumAtLeast: I.CC,
    isPremium: I.ki,
    isPremiumExactly: I.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: ex,
    getDefaultPrice: eM,
    getInterval: function (e) {
        let t = S.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, eA.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: eB,
    getIntervalStringAsNoun: eH,
    getPremiumType: ej,
    getTierDisplayNameByPlanId: eK,
    getDisplayName: eY,
    getPremiumPlanOptions: eX,
    formatInterval: function (e) {
        if (e === S.WT.YEAR) return ev.intl.string(ev.t.tfqrhj);
        if (e === S.WT.MONTH) return ev.intl.string(ev.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: e$,
    isPremiumSku: function (e) {
        return e === S.pe.TIER_0 || e === S.pe.TIER_1 || e === S.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === S.WT.MONTH) return t;
        if (e === S.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: N,
    getSkuIdForPlan: eQ,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case S.PremiumTypes.TIER_0:
                return S.pe.TIER_0;
            case S.PremiumTypes.TIER_1:
                return S.pe.TIER_1;
            case S.PremiumTypes.TIER_2:
                return S.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return ej(e) === S.PremiumTypes.TIER_2 ? S.M4 : 0;
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
                          fractionalState: S.xc.NONE,
                          startsAt: u()(0),
                          endsAt: u()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: u()(0),
                          unactivatedUnits: [],
                      },
            s = null !== n && e.status === T.Dmq.PAST_DUE ? n : t,
            a = i
                ? (0, eN.$g)(
                      s.invoiceItems
                          .filter((e) => S.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      s.currency,
                  )
                : (0, eN.$g)(s.total, s.currency);
        if (eh.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return ev.intl.format(ev.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === T.Dmq.CANCELED) return ev.intl.format(ev.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === T.Dmq.PAUSE_PENDING)
            return ev.intl.format(ev.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === T.Dmq.PAUSED)
            return r.fractionalState !== S.xc.NONE
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
        if (e.status === T.Dmq.PAST_DUE) {
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
            if (e.status === T.Dmq.BILLING_RETRY)
                return ev.intl.format(ev.t.EMTLOT, {
                    endDate: u()(e.currentPeriodStart).add(S.bx, "days").toDate(),
                    price: a,
                });
            if (e.status === T.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, E.xv)()
                    ? ev.intl.format(ev.t["dtcxw+"], {
                          endDate: u()(e.currentPeriodStart).add(S.ph, "days").toDate(),
                          paymentGatewayName: eC.qm[e.paymentGateway],
                          paymentSourceLink: tp(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : ev.intl.format(ev.t.EMTLOT, {
                          endDate: u()(e.currentPeriodStart).add(S.ph, "days").toDate(),
                          price: a,
                      });
            if (null != (o = e).paymentSourceId && te(o.paymentSourceId))
                return ev.intl.format(ev.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === T.Dmq.UNPAID) return ev.intl.format(ev.t.CzTKom, { maxProcessingTimeInDays: S.G4 });
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
    isNoneSubscription: ef.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === T.Dmq.CANCELED || e.status === T.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e1(t);
        });
        return null == i ||
            (0, ef.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === T.Dmq.CANCELED || e.status === T.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e1(t);
        });
        return (null == i || (0, ef.m1)(i.subscriptionPlanId)) && (n = T.Dmq.CANCELED), n;
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
        return Math.max(1, Math.ceil((0, eI.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return ed(w, e);
    },
    canUseEmojisEverywhere: function (e) {
        return ed(M, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return ed(x, e);
    },
    canUseCustomCallSounds: function (e) {
        return ed(U, e);
    },
    canUploadLargeFiles: function (e) {
        return ed(er, e);
    },
    canUseBadges: function (e) {
        return ed(B, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return ed(ei, e);
    },
    canEditDiscriminator: function (e) {
        return ed(F, e);
    },
    hasBoostDiscount: function (e) {
        return ed(K, e);
    },
    canUseAnimatedAvatar: function (e) {
        return ed(G, e);
    },
    canInstallPremiumApplications: function (e) {
        return ed(Q, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return ed(en, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return ed(et, e);
    },
    canRedeemPremiumPerks: function (e) {
        return ed(J, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return ed(H, e);
    },
    canUsePremiumAppIcons: function (e) {
        return ed(Y, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return ed(V, e);
    },
    canUseClientThemes: function (e) {
        return ed(W, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? ed(q, t) : "mid" === e && ed($, t);
    },
    canUseQuestOrbMultiplier: tO,
    hasFreeBoosts: function (e) {
        return ed(z, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return ed(P, e);
    },
    canUseCustomBackgrounds: function (e) {
        return ed(ee, e);
    },
    canUseCollectibles: tR,
    canUseMonthlyOrbs: function (e) {
        return !!(0, h.f0)("canUseMonthlyOrbs") && (0, b.Nh)(e?.perks, d.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ((0, h.f0)("canUseShopDiscounts") && (0, b.Nh)(e?.perks, d.bb.SHOP_DISCOUNTS)) || tR(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return ((0, h.f0)("canUseMoreQuestOrbs") && (0, b.Nh)(e?.perks, d.bb.MORE_QUEST_ORBS)) || tO(e);
    },
    formatPriceString: tb,
    StreamQuality: eL,
});
