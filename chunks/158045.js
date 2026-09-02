"use strict";
n.d(t, {
    ki: () => ts,
    Ke: () => eB,
    FY: () => tE,
    ff: () => td,
    aZ: () => tR,
    Nc: () => te,
    Rr: () => tu,
    YE: () => a.YE,
    OU: () => eX,
    qn: () => tN,
    CC: () => a.CC,
    iv: () => tG,
    RH: () => e$,
    z_: () => tB,
    FJ: () => ej,
    ee: () => tT,
    $k: () => ti,
    VA: () => tF,
    Dd: () => ez,
    kX: () => e9,
    To: () => tj,
    _e: () => e8,
    l6: () => eU,
    y8: () => eG,
    re: () => th,
    nB: () => eZ,
    pb: () => ex,
    Zb: () => e6,
    Pr: () => ew,
    nK: () => tP,
    mv: () => tL,
    Tm: () => eQ,
    J$: () => tn,
    Pg: () => tm,
    D8: () => eH,
    TW: () => a.ki,
    $Q: () => ek,
    aE: () => tp,
    L_: () => tk,
    Uf: () => tr,
    sS: () => ta,
    ji: () => e4,
    Q8: () => tt,
    Mn: () => eY,
    m6: () => eW,
    Em: () => tM,
    xq: () => e2,
    Ge: () => tc,
    Of: () => tf,
    tW: () => tI,
    mH: () => tb,
    XN: () => tH,
    Ay: () => tW,
    EL: () => eM,
    bx: () => e0,
    Zw: () => eK,
    Om: () => tS,
    GX: () => tg,
    JM: () => eP,
    UC: () => eF,
    e1: () => tU,
    PK: () => tl,
    z4: () => e3,
    LE: () => tA,
    ys: () => e5,
    U8: () => eV,
    tS: () => t_,
    EJ: () => tC,
}),
    n(667532),
    n(321073);
var i,
    r,
    a = n(474090),
    s = n(582128),
    l = n(284009),
    o = n.n(l),
    d = n(536637),
    c = n.n(d),
    u = n(17928),
    _ = n(441574),
    E = n(975807),
    A = n(366999),
    h = n(930767),
    I = n(626584),
    f = n(981088),
    p = n(114516),
    T = n(367888),
    m = n(83790),
    g = n(683760),
    S = n(652215),
    N = n(202541);
function C(e) {
    if (null == e) return S.TbF;
    let t = g.A.getPremiumTypeOverride();
    return e.isStaff() && t === N.$I
        ? S.mu
        : null != e.premiumType && (0, a.ki)(e)
          ? N.f5[e.premiumType].fileSize
          : S.TbF;
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
class R {
    skuId;
    skuFeatures;
    constructor(e, t) {
        (this.skuId = e), (this.skuFeatures = t);
    }
}
var L = n(945810),
    y =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (i[(i.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        i);
let D = (0, L.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var v = n(349871);
let b = new I.A("ProductCatalog.tsx");
class M extends O {
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
                                b.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = el[n];
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
let P = new M(m.w.ANIMATED_EMOJIS),
    U = new M(m.w.EMOJIS_EVERYWHERE),
    w = new M(m.w.STICKERS_EVERYWHERE),
    G = new M(m.w.SOUNDBOARD_EVERYWHERE),
    x = new M(m.w.CUSTOM_CALL_SOUNDS),
    k = new M(m.w.PREMIUM_VOICE_FILTERS),
    F = new M(m.w.ANIMATED_AVATAR),
    V = new M(m.w.CUSTOM_DISCRIMINATOR),
    B = new M(m.w.PREMIUM_GUILD_MEMBER_PROFILE),
    H = new M("profileBadges"),
    j = new M(m.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    W = new M("collectibles"),
    Y = new M("appIcons"),
    K = new M(m.w.CLIENT_THEMES),
    $ = new M("boostDiscount"),
    z = new M("freeBoosts"),
    q = new M(m.w.STREAM_MID_QUALITY),
    Z = new M(m.w.STREAM_HIGH_QUALITY),
    X = new M(m.w.CUSTOM_NOTIFICATION_SOUNDS),
    Q = new M("fancyVoiceChannelReactions"),
    J = new M("installPremiumApplications"),
    ee = new M("redeemPremiumPerks"),
    et = new M(m.w.VIDEO_FILTER_ASSETS);
new O(m.w.INCREASED_FILE_UPLOAD_SIZE, C);
let en = new M(m.w.INCREASED_GUILD_LIMIT),
    ei = new M(m.w.INCREASED_MESSAGE_LENGTH),
    er = new M("increasedVideoUploadQuality"),
    ea = new M("uploadLargeFiles"),
    es = new M(m.w.QUEST_ORB_MULTIPLIER),
    el = Object.freeze({
        [N.pe.TIER_0]: new R(N.pe.TIER_0, [P, U, w, H, et, er, ea, Y]),
        [N.pe.TIER_1]: new R(N.pe.TIER_1, [P, U, F, V, H, $, q, Q, er, ea, Y]),
        [N.pe.TIER_2]: new R(N.pe.TIER_2, [
            P,
            U,
            w,
            G,
            x,
            F,
            V,
            B,
            H,
            j,
            K,
            $,
            z,
            q,
            Z,
            Q,
            J,
            ee,
            et,
            en,
            ei,
            er,
            ea,
            Y,
            W,
            X,
            k,
            es,
        ]),
    }),
    eo = [$, z],
    ed = [es],
    ec = [],
    eu = new Map([
        [P, _.bb.ANIMATED_EMOJIS],
        [U, _.bb.EMOJIS_EVERYWHERE],
        [w, _.bb.STICKERS_EVERYWHERE],
        [G, _.bb.SOUNDBOARD_EVERYWHERE],
        [x, _.bb.CUSTOM_CALL_SOUNDS],
        [k, _.bb.PREMIUM_VOICE_FILTERS],
        [F, _.bb.ANIMATED_AVATAR],
        [V, _.bb.CUSTOM_DISCRIMINATOR],
        [B, _.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [j, _.bb.PROFILE_PREMIUM_FEATURES],
        [W, _.bb.PREMIUM_COLLECTIBLES],
        [K, _.bb.CLIENT_THEMES],
        [q, _.bb.STREAM_MID_QUALITY],
        [Z, _.bb.STREAM_HIGH_QUALITY],
        [et, _.bb.VIDEO_FILTER_ASSETS],
        [en, _.bb.INCREASED_GUILD_LIMIT],
        [ei, _.bb.INCREASED_MESSAGE_LENGTH],
        [ea, _.bb.INCREASED_FILE_UPLOAD_SIZE],
        [H, _.bb.PROFILE_BADGES],
        [Y, _.bb.APP_ICONS],
        [$, _.bb.BOOST_DISCOUNT],
        [z, _.bb.FREE_BOOSTS],
        [J, _.bb.INSTALL_PREMIUM_APPLICATIONS],
        [er, _.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function e_(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && eo.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && ed.includes(e)) ||
        (n && ec.includes(e))
    )
        return !1;
    let i = eu.get(e);
    if (null != i && t?.perks != null) {
        let n = D.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== y.CONTROL) {
            let r = e.getFeatureValue(t),
                a = (0, v.Nh)(t?.perks, i);
            return n === y.DUAL_READ_RETURN_NEW ? a : r;
        }
    }
    return e.getFeatureValue(t);
}
var eE = n(832946),
    eA = n(287809),
    eh = n(615405),
    eI = n(295405),
    ef = n(97352),
    ep = n(166403),
    eT = n(739508),
    em = n(58703),
    eg = n(927813),
    eS = n(255438),
    eN = n(580630),
    eC = n(88001),
    eO = n(818348),
    eR = n(375708),
    eL = n(148155);
let ey = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    eD = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    ev = new I.A("PremiumUtils.tsx");
var eb = (((r = {}).MID = "mid"), (r.HIGH = "high"), r);
function eM(e) {
    return e.items.find((e) => N.JM.has(e.planId));
}
function eP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = eI.A.defaultPaymentSourceId ?? void 0,
        s = ep.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        eG(e, t, n, { paymentSourceId: a, currency: i }, r)
    );
}
function eU(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function ew(e, t, n) {
    let i = s.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return s.useMemo(
        () => ({
            priceOptions: eU(e, i),
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
        { paymentSourceId: a, currency: s, contextPlanPrices: l } = i;
    if (null != l) {
        let t = l[e],
            n = null != s && null != t && t.currency !== s;
        if (null != t && !n)
            return { amount: t.amount, currency: t.currency, exponent: t.exponent, tax: 0, taxInclusive: !1 };
    }
    if (null != ef.A.get(e)) {
        let i = S.lid.DEFAULT;
        n ? (i = S.lid.GIFT) : t && (i = S.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.lid.DEFAULT },
                r = ex(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    ev.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let a = r.find((e) => e.currency === i.toLowerCase());
                return null != a
                    ? a
                    : null != t
                      ? ex(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: a, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                (r &&
                    (0, eT.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t)
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, eT.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function ex(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.lid.DEFAULT },
        i = (function (e, t) {
            let n = ef.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, eT.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    (ev.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`))
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            ev.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                ev.info(`prices: ${r}`);
            let a = Error("Missing prices for payment source on subscription plan");
            (0, eT.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        ev.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, eT.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function ek(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function eF(e, t, n) {
    let i,
        r,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        l = (0, T._1)(e);
    null != l && (i = N.hd[l.planId].premiumType);
    let o = (0, a.CC)(i, N.PremiumTypes.TIER_0),
        d = (0, a.CC)(i, N.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        (r = N.pW.has(i.planId) ? d : !N.JM.has(i.planId) && o),
            (e = void 0 === n ? eP(i.planId, r, !1, t) : eG(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity);
    }
    return ek(s);
}
function eV(e, t, n, i) {
    return (
        null === t && (o()(null !== e, "Subscription can't be null"), (t = [])), eF(null !== e ? tp(e, t) : tT(t), n, i)
    );
}
function eB(e) {
    switch (e) {
        case N.Ff.MONTH:
            return eR.intl.string(eR.t.FPybU7);
        case N.Ff.YEAR:
            return eR.intl.string(eR.t.tfqrhj);
        case N.Ff.DAY:
        case N.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function eH(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : N.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case N.WT.MONTH:
                let s = eR.intl.formatToPlainString(a === N.PremiumTypes.TIER_0 ? eR.t.NPKsLz : eR.t.poEovT, {
                    timeInterval: eR.intl.string(eR.t.FPybU7),
                });
                return r ? s : eR.intl.string(eR.t.Mh9bTt);
            case N.WT.YEAR:
                let l = eR.intl.formatToPlainString(a === N.PremiumTypes.TIER_0 ? eR.t.NPKsLz : eR.t.poEovT, {
                    timeInterval: eR.intl.string(eR.t.tfqrhj),
                });
                return r ? l : eR.intl.string(eR.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case N.WT.MONTH:
            if (1 !== i) return eR.intl.formatToPlainString(eR.t["0UlZnH"], { intervalCount: i });
            return eR.intl.string(eR.t.DKzs96);
        case N.WT.YEAR:
            return eR.intl.string(eR.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function ej(e) {
    switch (e) {
        case N.WT.MONTH:
            return eR.intl.string(eR.t.FPybU7);
        case N.WT.YEAR:
            return eR.intl.string(eR.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function eW(e) {
    let t = N.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, eT.pM)(n, { tags: { planId: e } }), n);
}
function eY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case N.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? eR.intl.format(eR.t.TZXHNj, { duration: i })
                : n
                  ? eR.intl.string(eR.t["81iAgs"])
                  : eR.intl.string(eR.t["0efVPy"]);
        case N.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? eR.intl.format(eR.t.eqRhC7, { duration: i })
                : n
                  ? eR.intl.string(eR.t.UvzqY1)
                  : eR.intl.string(eR.t.eoVuBn);
        case N.gD.PREMIUM_MONTH_TIER_1:
            return n ? eR.intl.string(eR.t["g/dH5g"]) : eR.intl.string(eR.t["7O6qSq"]);
        case N.gD.PREMIUM_YEAR_TIER_1:
            return n ? eR.intl.string(eR.t.pdZJaq) : eR.intl.string(eR.t.Md5xbi);
        case N.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? eR.intl.format(eR.t.aI6QXz, { duration: i })
                : n
                  ? eR.intl.string(eR.t.SmVbHc)
                  : eR.intl.string(eR.t.FKYNC6);
        case N.gD.PREMIUM_GROUP_MONTH:
            return n
                ? eR.intl.string(eR.t.SmVbHc)
                : eR.intl.formatToPlainString(eL.default["8bPDtb"], { premiumGroupProductName: (0, eC.DP)() });
        case N.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? eR.intl.format(eR.t["1wBcPi"], { duration: i })
                : n
                  ? eR.intl.string(eR.t.JIq4O1)
                  : eR.intl.string(eR.t["cfu/5d"]);
        case N.gD.PREMIUM_3_MONTH_TIER_2:
            return eR.intl.string(eR.t.wCbINr);
        case N.gD.PREMIUM_6_MONTH_TIER_2:
            return eR.intl.string(eR.t["e3/ArU"]);
        case N.gD.PREMIUM_MONTH_GUILD:
            return n ? eR.intl.string(eR.t["6ZR3By"]) : eR.intl.string(eR.t["h80cx/"]);
        case N.gD.PREMIUM_YEAR_GUILD:
            return n ? eR.intl.string(eR.t.YDpAzZ) : eR.intl.string(eR.t.ZHkls0);
        case N.gD.PREMIUM_3_MONTH_GUILD:
            return eR.intl.string(eR.t.EZHHB6);
        case N.gD.PREMIUM_6_MONTH_GUILD:
            return eR.intl.string(eR.t.X2KDO2);
        case N.gD.PREMIUM_MONTH_LEGACY:
            return eR.intl.string(eR.t.PD6k79);
        case N.gD.PREMIUM_YEAR_LEGACY:
            return eR.intl.string(eR.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, eT.pM)(r, { tags: { planId: e } }), r);
}
function eK(e) {
    switch (e) {
        case N.pe.TIER_0:
            return eR.intl.string(eR.t["t9uG/o"]);
        case N.pe.TIER_1:
            return eR.intl.string(eR.t.FSOz78);
        case N.pe.TIER_2:
            return eR.intl.string(eR.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, eT.pM)(t, { tags: { skuId: e } }), t);
}
function e$(e) {
    let t = N.hd[e]?.premiumType,
        n = null != t ? N.Mr[t] : null;
    if (null != n) return eR.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, eT.pM)(i, { tags: { planId: e } }), i);
}
function ez(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case N.PremiumTypes.TIER_0:
            return t ? "Basic" : eR.intl.string(eR.t["t9uG/o"]);
        case N.PremiumTypes.TIER_1:
            return t ? "Classic" : eR.intl.string(eR.t.FSOz78);
        case N.PremiumTypes.TIER_2:
            return eR.intl.string(eR.t.lG6a5x);
    }
}
function eq(e) {
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
        _ = N.hd[n],
        A = tv(eP(_.id), _.interval),
        h = null != o && 0 === o.subtotal,
        I =
            ts(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !eA.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        f = null != i && null == t.paymentGateway,
        p = t.status === S.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === S.lT7.OPEN,
        T = I ? S.Dmq.CANCELED : p ? S.Dmq.UNPAID : t.status,
        m = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        g = N.M4 + (r ? e0(t.additionalPlans) : 0),
        C = f
            ? m
                ? eR.intl.format(eR.t["cd+hqB"], { price: i })
                : eR.intl.format(eR.t.NUkcpF, { price: i })
            : eR.intl.string(eR.t.zYx3Y6),
        O = f
            ? m
                ? eR.intl.format(eR.t.VsKcFB, { price: i })
                : eR.intl.format(eR.t.hJ5xEX, { price: i })
            : eR.intl.string(eR.t["8rSipI"]),
        R = f
            ? m
                ? eR.intl.format(eR.t["jRy6/J"], { price: i, num: g })
                : eR.intl.format(eR.t.tTNE8M, { price: i, num: g })
            : eR.intl.format(eR.t["U+z/HJ"], { num: g });
    switch (n) {
        case N.gD.PREMIUM_MONTH_TIER_0:
        case N.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case S.Dmq.CANCELED:
                    return f
                        ? m
                            ? eR.intl.format(eR.t["USi/nc"], { price: i })
                            : eR.intl.format(eR.t["FS//l2"], { price: i })
                        : eR.intl.string(eR.t.JshLzq);
                case S.Dmq.ACCOUNT_HOLD:
                    return f
                        ? m
                            ? eR.intl.format(eR.t["5mv+2i"], { price: i })
                            : eR.intl.format(eR.t.nkAEfZ, { price: i })
                        : eR.intl.format(eR.t.SsLIXS, {});
                case S.Dmq.UNPAID:
                    return eR.intl.format(eR.t.cmkbFB, {});
                case S.Dmq.PAUSE_PENDING:
                    let L = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != L
                        ? eR.intl.format(eR.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: L })
                        : eR.intl.format(eR.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case S.Dmq.PAUSED:
                    if (d) return C;
                    return eR.intl.format(eR.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case S.Dmq.PAST_DUE:
                    return eR.intl.format(eR.t["d+0vwo"], {
                        endDate: (0, em.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return C;
            }
        case N.gD.PREMIUM_MONTH_TIER_1:
        case N.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case S.Dmq.CANCELED:
                    return f
                        ? m
                            ? eR.intl.format(eR.t.cXy8Bp, { price: i })
                            : eR.intl.format(eR.t["C/XsHt"], { price: i })
                        : eR.intl.string(eR.t.K6tYFa);
                case S.Dmq.ACCOUNT_HOLD:
                    return f
                        ? m
                            ? eR.intl.format(eR.t.HBkIBi, { price: i })
                            : eR.intl.format(eR.t.ZsO1Sx, { price: i })
                        : eR.intl.format(eR.t["0+/WH7"], {});
                case S.Dmq.UNPAID:
                    return eR.intl.format(eR.t.McIzwj, {});
                case S.Dmq.PAUSE_PENDING:
                    let y = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != y
                        ? eR.intl.format(eR.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: y })
                        : eR.intl.format(eR.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case S.Dmq.PAUSED:
                    if (d) return O;
                    return eR.intl.format(eR.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case S.Dmq.PAST_DUE:
                    return eR.intl.format(eR.t["d+0vwo"], {
                        endDate: (0, em.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return O;
            }
        case N.gD.PREMIUM_MONTH_TIER_2:
        case N.gD.PREMIUM_YEAR_TIER_2:
        case N.gD.PREMIUM_3_MONTH_TIER_2:
        case N.gD.PREMIUM_6_MONTH_TIER_2:
        case N.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case S.Dmq.CANCELED:
                    return f
                        ? m
                            ? eR.intl.format(eR.t.xoFgRh, { price: i, num: g })
                            : eR.intl.format(eR.t.nXdbKo, { price: i, num: g })
                        : eR.intl.format(eR.t.EcSdRH, { num: g });
                case S.Dmq.ACCOUNT_HOLD:
                    return f
                        ? m
                            ? eR.intl.format(eR.t["5C/0QG"], { price: i, num: g })
                            : eR.intl.format(eR.t.xfYkhu, { price: i, num: g })
                        : eR.intl.format(eR.t.ivjxcn, { num: g });
                case S.Dmq.UNPAID:
                    return eR.intl.format(eR.t["0HopYf"], { num: g });
                case S.Dmq.PAUSE_PENDING:
                    let D = null != t.pauseEndsAt ? c()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != D
                        ? eR.intl.format(eR.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: D })
                        : eR.intl.format(eR.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case S.Dmq.PAUSED:
                    if (d) return R;
                    return eR.intl.format(eR.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case S.Dmq.BILLING_RETRY:
                    return eR.intl.format(eR.t["IlJ/HV"], {
                        endDate: c()(t.currentPeriodStart).add(N.bx, "days").toDate(),
                    });
                case S.Dmq.PAST_DUE:
                    return eR.intl.format(eR.t["d+0vwo"], {
                        endDate: (0, em.i$)(e4(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === N.gD.PREMIUM_YEAR_TIER_2
                            ? eR.intl.format(eR.t.z2oQtA, {
                                  percent: s?.percentage ?? N.Cq,
                                  regularPrice: A,
                                  renewalDate: e7(t, u),
                              })
                            : m
                              ? eR.intl.formatToPlainString(eR.t["3ZiutU"], {
                                    percent: s?.percentage ?? N._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? N.OJ,
                                })
                              : eR.intl.formatToPlainString(eR.t["G6+XOT"], {
                                    percent: s?.percentage ?? N._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? N.OJ,
                                })
                        : R;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function eZ(e) {
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
        I = ef.A.get(c);
    return (
        o()(null != I, "Missing plan"),
        eq({
            subscription: d,
            planId: I.id,
            price:
                ((t = s),
                (n = d),
                (i = I),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? eG(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, eN.CE)((0, eN.$g)(a, t.currency), i.interval, i.intervalCount)),
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
function eX(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, eE.m1)(t) ? null : eY(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return N.pW.has(t);
        }),
        a =
            r?.planId === N.gD.PREMIUM_MONTH_GUILD
                ? eR.t.Pi5yMJ
                : r?.planId === N.gD.PREMIUM_YEAR_GUILD
                  ? eR.t.H4KPuV
                  : null,
        s = null != a ? eR.intl.formatToPlainString(a, { num: r?.quantity }) : void 0;
    if (null != i && null != s)
        return eR.intl.formatToPlainString(eR.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function eQ(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i } = e;
    if (null == t || !n) return [];
    let r = void 0 !== i && t === N.hd[i].skuId ? i : void 0,
        a = [];
    switch (t) {
        case N.pe.TIER_0:
            a = [N.gD.PREMIUM_YEAR_TIER_0, N.gD.PREMIUM_MONTH_TIER_0];
            break;
        case N.pe.TIER_1:
            a = [N.gD.PREMIUM_MONTH_TIER_1];
            break;
        case N.pe.TIER_2:
            a = [N.gD.PREMIUM_YEAR_TIER_2, N.gD.PREMIUM_MONTH_TIER_2];
            break;
        case N.pe.GUILD:
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
function eJ(e) {
    let t = N.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e0(e) {
    let t = ef.A.getPlanIdsForSkus([tb(N.pe.GUILD)]);
    o()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e1 = new Set([
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
function e2(e) {
    return e1.has(e);
}
function e3(e) {
    return N.pW.has(e);
}
function e5(e) {
    return e2(e) || e3(e);
}
function e6(e) {
    return null != e && e === N.gD.PREMIUM_GROUP_MONTH;
}
function e4(e) {
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
function e7(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = e8(n, t.unactivatedUnits)), n;
}
function e8(e, t, n, i) {
    let r = c()(i ? void 0 : e);
    if (t.length > 0) {
        let e = tw(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = c()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function e9(e) {
    let t = tw(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === N.xc.NONE)) return "";
    let n = { days: eR.t.fYmirx, hours: eR.t["C3RO+g"], minutes: eR.t.r77oHc },
        i = (0, A.Vb)((0, em.Tf)(0, t * eg.A.Millis.HOUR));
    return (0, em.uN)(i, n);
}
function te(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === S.Dmq.PAST_DUE;
}
function tt(e) {
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
function tn(e) {
    if (null == e) return !1;
    let t = eI.A.getPaymentSource(e);
    return null != t && eO.AD.has(t.type);
}
function ti(e) {
    return e.isPurchasedExternally
        ? e.status === S.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = e0(n);
              return 0 === (null != t ? e0(t.additionalPlans) : null) && 0 !== r ? S.Dmq.CANCELED : i;
          })(e) === S.Dmq.CANCELED;
}
function tr(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: l, additionalPlans: d, renewalMutations: c } = n,
        u = ef.A.get(l);
    o()(null != u, "Missing plan");
    let _ = e0(d),
        A = c?.additionalPlans != null ? e0(c.additionalPlans) : _,
        h = Math.max(0, _ - A),
        I = A > 0 && h > 0,
        f = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => N.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = I ? A : _;
            try {
                e = to(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                f = !0;
            }
        }
        t = null != e ? (0, eN.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || f,
        T = null != t ? (0, eN.CE)(t, u.interval, u.intervalCount) : "",
        m = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (ti(n))
        return p
            ? eR.intl.format(eR.t["3/WTrI"], { quantity: _ })
            : m
              ? eR.intl.format(eR.t["0ozBSB"], { quantity: _, rate: T })
              : eR.intl.format(eR.t["yjsv/s"], { quantity: _, rate: T });
    switch (n.status) {
        case S.Dmq.ACCOUNT_HOLD:
            return p
                ? eR.intl.format(eR.t.Nlf3nc, { quantity: _, boostQuantity: _ })
                : m
                  ? eR.intl.format(eR.t.oiRy7v, { quantity: _, boostQuantity: _, rate: T })
                  : eR.intl.format(eR.t["0QxOAi"], { quantity: _, boostQuantity: _, rate: T });
        case S.Dmq.PAUSE_PENDING:
        case S.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return eR.intl.string(eR.t.CduWAm);
            return eR.intl.format(eR.t["5iud9s"], { quantity: _ });
        case S.Dmq.PAST_DUE:
            if (n.isBoostOnly)
                return eR.intl.format(eR.t["d+0vwo"], {
                    endDate: (0, em.i$)(e4(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (I) {
                if (p) return eR.intl.format(eR.t["krRy+d"], { activeQuantity: A, pendingQuantity: h });
                let e = m ? eR.t["4nc7+E"] : eR.t.BmaudS;
                return eR.intl.format(e, { activeQuantity: A, pendingQuantity: h, rate: T });
            }
            return p
                ? eR.intl.format(eR.t["5iud9s"], { quantity: _ })
                : m
                  ? eR.intl.format(eR.t.eDwrLA, { quantity: _, rate: T })
                  : eR.intl.format(eR.t.ijSDcI, { quantity: _, rate: T });
    }
}
function ta(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    if (null != t)
        try {
            i = eG(e.id, !1, r, t, a);
        } catch {
            i = eP(e.id, !1, r, void 0, a);
        }
    else i = eP(e.id, !1, r, void 0, a);
    let s = (0, eN.$g)(i.amount, i.currency);
    return e.currency !== eO.Yr.USD && !0 === n && (s = s.concat("*")), s;
}
function ts(e) {
    let { status: t, renewalMutations: n } = e;
    return t === S.Dmq.CANCELED || (null != n && (0, eE.m1)(n.planId) && !e.isPurchasedExternally);
}
function tl(e) {
    return e === S.Dmq.PAST_DUE || e === S.Dmq.ACCOUNT_HOLD || e === S.Dmq.BILLING_RETRY;
}
function to(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: eh.A.ipCountryCodeWithFallback, currency: n },
        s = ef.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    let l = ef.A.getForSkuAndInterval(tb(N.pe.GUILD), s.interval, s.intervalCount);
    if (null == l) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    return eG(l.id, (0, a.ki)(i), !1, r);
}
function td(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case N.gD.PREMIUM_MONTH_TIER_0:
                return eR.intl.string(eR.t["0ggVqN"]);
            case N.gD.PREMIUM_YEAR_TIER_0:
                return eR.intl.string(eR.t["jm+ZQw"]);
            case N.gD.PREMIUM_MONTH_TIER_1:
                return eR.intl.string(eR.t.uph4Jx);
            case N.gD.PREMIUM_YEAR_TIER_1:
                return eR.intl.string(eR.t["D/l7Yt"]);
            case N.gD.PREMIUM_MONTH_TIER_2:
            case N.gD.PREMIUM_GROUP_MONTH:
                return eR.intl.string(eR.t["5l1MuV"]);
            case N.gD.PREMIUM_YEAR_TIER_2:
                return eR.intl.string(eR.t.G0mISV);
        }
    switch (i) {
        case N.gD.PREMIUM_MONTH_TIER_0:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["/G3aKw"]);
        case N.gD.PREMIUM_YEAR_TIER_0:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["2eQpsL"]);
        case N.gD.PREMIUM_MONTH_TIER_1:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t.gueLg5);
        case N.gD.PREMIUM_YEAR_TIER_1:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["MhH/vW"]);
        case N.gD.PREMIUM_MONTH_TIER_2:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t.LQVQIq);
        case N.gD.PREMIUM_GROUP_MONTH:
            return eR.intl.formatToPlainString(eL.default.LwdrNi, { premiumGroupProductName: (0, eC.DP)() });
        case N.gD.PREMIUM_YEAR_TIER_2:
            return n ? eR.intl.string(eR.t.cRCCJ3) : eR.intl.string(eR.t["0nfg1x"]);
        case N.gD.PREMIUM_3_MONTH_TIER_2:
        case N.gD.PREMIUM_6_MONTH_TIER_2:
            return eR.intl.formatToPlainString(eR.t.BCD4fT, { intervalCount: t.intervalCount });
        case N.gD.NONE_MONTH:
        case N.gD.NONE_YEAR:
        case N.gD.NONE_3_MONTH:
        case N.gD.NONE_6_MONTH:
        case N.gD.PREMIUM_MONTH_GUILD:
        case N.gD.PREMIUM_YEAR_GUILD:
        case N.gD.PREMIUM_3_MONTH_GUILD:
        case N.gD.PREMIUM_6_MONTH_GUILD:
            return eR.intl.string(eR.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, eT.pM)(r, { tags: { planId: i } }), r);
}
function tc(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = ef.A.get(t);
    return o()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount };
}
function tu() {
    let e = eO.Yr.USD;
    try {
        e = eP(N.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function t_(e) {
    let { intervalType: t = N.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case N.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eR.intl.formatToPlainString(eR.t.fRNBRX, { weeks: n / 7 })
                    : eR.intl.formatToPlainString(eR.t.EIpHEj, { weeks: n / 7 });
            return i
                ? eR.intl.formatToPlainString(eR.t["6Cdzoy"], { days: n })
                : eR.intl.formatToPlainString(eR.t["kbBj/h"], { days: n });
        case N.WT.MONTH:
            return i
                ? eR.intl.formatToPlainString(eR.t.x5MgxS, { months: n })
                : eR.intl.formatToPlainString(eR.t["4SEnCZ"], { months: n });
        case N.WT.YEAR:
            return i
                ? eR.intl.formatToPlainString(eR.t["h+63yl"], { years: n })
                : eR.intl.formatToPlainString(eR.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tE(e) {
    let { intervalType: t = N.WT.MONTH, intervalCount: n = 1 } = e,
        i = tu(),
        r = (0, eN.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case N.WT.DAY:
            if (n >= 7 && n % 7 == 0) return eR.intl.formatToPlainString(eR.t.C6i5Jt, { weeks: n / 7, price: r });
            return eR.intl.formatToPlainString(eR.t.cR9ifw, { days: n, price: r });
        case N.WT.MONTH:
            return eR.intl.formatToPlainString(eR.t["8FZfNo"], { months: n, price: r });
        case N.WT.YEAR:
            return eR.intl.formatToPlainString(eR.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tA(e, t) {
    if (null != e && null != e.subscriptionTrial && e.subscriptionTrial.skuId === t) {
        let t = e.subscriptionTrial;
        return tE({ intervalType: t.interval, intervalCount: t.intervalCount });
    }
    return null;
}
function th(e) {
    let { intervalType: t = N.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case N.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? eR.intl.formatToPlainString(eR.t.iVZYyl, { weeks: n / 7 })
                    : eR.intl.formatToPlainString(eR.t.EmoBD2, { weeks: n / 7 });
            return i
                ? eR.intl.formatToPlainString(eR.t.jzH70Z, { days: n })
                : eR.intl.formatToPlainString(eR.t["k2UNz+"], { days: n });
        case N.WT.MONTH:
            return i
                ? eR.intl.formatToPlainString(eR.t.erUSmA, { months: n })
                : eR.intl.formatToPlainString(eR.t.kridzK, { months: n });
        case N.WT.YEAR:
            return i
                ? eR.intl.formatToPlainString(eR.t.IfYQVC, { years: n })
                : eR.intl.formatToPlainString(eR.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function tI(e, t) {
    switch (e) {
        case S.kM_.APPLE_PARTNER:
        case S.kM_.APPLE_ADVANCED_COMMERCE:
        case S.kM_.APPLE:
            return ey[t];
        case S.kM_.GOOGLE:
            return eD[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tf(e, t) {
    return (0, a.ki)(e) || tl(t?.status);
}
function tp(e, t) {
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
function tm(e, t, n, i) {
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
function tg(e, t) {
    return tm(e, t, 1, N.JM);
}
function tS(e, t, n) {
    return tm(e, n, t, N.pW);
}
function tN(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => N.JM.has(e.planId));
    if (null != t) {
        let n = ef.A.get(t.planId);
        o()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = ef.A.get(e.planId);
                if ((o()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = ef.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return o()(null != r, "Missing planForInterval"), { ...e, planId: r.id };
            }));
    }
    return e;
}
function tC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = N.f5[e].fileSize;
    return (0, eS.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function tO(e) {
    return null == e ? null : e.items.find((e) => N.pW.has(e.planId));
}
function tR(e) {
    let t = null != e ? eM(e) : null;
    return null != t ? eJ(t.planId) : null;
}
function tL(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function ty(e) {
    return e_(es, e);
}
function tD(e) {
    return e_(W, e);
}
function tv(e, t) {
    let n = (0, eN.$g)(e.amount, e.currency),
        i = ej(t);
    return `${n}/${i}`;
}
function tb(e) {
    return e;
}
function tM(e) {
    return "isNitroLocked" in e;
}
function tP() {
    let e = (0, u.bG)([eA.default], () => eA.default.getCurrentUser());
    return (0, a.YE)(e, N.PremiumTypes.TIER_2);
}
function tU(e) {
    var t;
    let n = N.Eg;
    if (null != (t = e) && "trialId" in t)
        switch (e.trialId) {
            case N.Tt:
                return N.h7;
            case N.yo:
                return N.CA;
        }
    else;
    return n;
}
function tw(e) {
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
function tx(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = N.En[t.skuId];
    return null == r ? null : eG(r, !1, n, i);
}
function tk(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = N.XE[t];
    return null != r && (a = tV(r, n, i)), a;
}
function tF(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === N.WT.DAY || (t.interval === N.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tx({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === N.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function tV(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval === N.WT.YEAR) {
        try {
            if (((t = tx({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = eG(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (12 * t.amount)));
    }
}
function tB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = tF({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = eG(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function tH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== N.WT.YEAR) return null;
    let i = eG(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function tj(e) {
    return null == e ? 0 : Math.max((0, em.m_)(new Date(), new Date(e)), 0);
}
let tW = Object.freeze({
    isNewUser: tL,
    isPremiumAtLeast: a.CC,
    isPremium: a.ki,
    isPremiumExactly: a.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: eG,
    getDefaultPrice: eP,
    getInterval: function (e) {
        let t = N.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, eT.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: eH,
    getIntervalStringAsNoun: ej,
    getPremiumType: eW,
    getTierDisplayNameByPlanId: e$,
    getDisplayName: eY,
    getPremiumPlanOptions: eQ,
    formatInterval: function (e) {
        if (e === N.WT.YEAR) return eR.intl.string(eR.t.tfqrhj);
        if (e === N.WT.MONTH) return eR.intl.string(eR.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eq,
    isPremiumSku: function (e) {
        return e === N.pe.TIER_0 || e === N.pe.TIER_1 || e === N.pe.TIER_2;
    },
    getIntervalMonths: function (e, t) {
        if (e === N.WT.MONTH) return t;
        if (e === N.WT.YEAR) return 12 * t;
        throw Error(`${e} interval subscription period not implemented`);
    },
    getUserMaxFileSize: C,
    getSkuIdForPlan: eJ,
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
        return eW(e) === N.PremiumTypes.TIER_2 ? N.M4 : 0;
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
            a = null !== n && e.status === S.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, eN.$g)(
                      a.invoiceItems
                          .filter((e) => N.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      a.currency,
                  )
                : (0, eN.$g)(a.total, a.currency);
        if (eA.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return eR.intl.format(eR.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === S.Dmq.CANCELED) return eR.intl.format(eR.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === S.Dmq.PAUSE_PENDING)
            return eR.intl.format(eR.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === S.Dmq.PAUSED)
            return r.fractionalState !== N.xc.NONE
                ? eR.intl.format(eR.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? eR.intl.format(eR.t.KTYQCg, { planName: eR.intl.string(eR.t.Ipxkog), price: s })
                      : eR.intl.string(eR.t.fMz6Lg)
                  : i
                    ? eR.intl.format(eR.t.zcgtzf, {
                          planName: eR.intl.string(eR.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : eR.intl.format(eR.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === S.Dmq.PAST_DUE) {
            let t = e4(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = c()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = c()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? eR.intl.format(eR.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: eO.qm[e.paymentGateway],
                      paymentSourceLink: tI(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : eR.intl.format(eR.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        {
            var l;
            if (e.status === S.Dmq.BILLING_RETRY)
                return eR.intl.format(eR.t.EMTLOT, {
                    endDate: c()(e.currentPeriodStart).add(N.bx, "days").toDate(),
                    price: s,
                });
            if (e.status === S.Dmq.ACCOUNT_HOLD)
                return e.isPurchasedViaGoogle && !(0, f.xv)()
                    ? eR.intl.format(eR.t["dtcxw+"], {
                          endDate: c()(e.currentPeriodStart).add(N.ph, "days").toDate(),
                          paymentGatewayName: eO.qm[e.paymentGateway],
                          paymentSourceLink: tI(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                    : eR.intl.format(eR.t.EMTLOT, {
                          endDate: c()(e.currentPeriodStart).add(N.ph, "days").toDate(),
                          price: s,
                      });
            if (null != (l = e).paymentSourceId && tn(l.paymentSourceId))
                return eR.intl.format(eR.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === S.Dmq.UNPAID) return eR.intl.format(eR.t.CzTKom, { maxProcessingTimeInDays: N.G4 });
            if (e.isPurchasedExternally)
                return eR.intl.format(eR.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: eO.qm[e.paymentGateway],
                    subscriptionManagementLink: tI(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = e8(n, r.unactivatedUnits)),
                i
                    ? eR.intl.format(eR.t.Vl3cED, { planName: eR.intl.string(eR.t.Ipxkog), renewalDate: n, price: s })
                    : eR.intl.format(eR.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: e7,
    extendDateWithUnconsumedFractionalPremium: e8,
    getUnactivatedFractionalPremiumDurationString: e9,
    isSwitchingPlansDisabled: te,
    getSwitchingPlansDisabledMessage: tt,
    isNoneSubscription: eE.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === S.Dmq.CANCELED || e.status === S.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e2(t);
        });
        return null == i ||
            (0, eE.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === S.Dmq.CANCELED || e.status === S.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e2(t);
        });
        return (null == i || (0, eE.m1)(i.subscriptionPlanId)) && (n = S.Dmq.CANCELED), n;
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
    getBillingReviewSubheader: td,
    getIntervalForInvoice: tc,
    getPremiumPlanItem: eM,
    getGuildBoostPlanItem: tO,
    isBoostOnlySubscription: function (e) {
        return null != e && null == eM(e) && null != tO(e);
    },
    getPremiumSkuIdForSubscription: tR,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = eM(e);
            if (null != t) return eW(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tw,
    castPremiumSubscriptionAsSkuId: tb,
    calculateDiscountPercentageForYearlyPlan: tV,
    calculateYearlyPlanDollarSavingsAmount: tB,
    calculateYearlyPlanMonthlyRateAmount: tH,
    getDaysSincePremium: tj,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, em.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return e_(P, e);
    },
    canUseEmojisEverywhere: function (e) {
        return e_(U, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return e_(G, e);
    },
    canUseCustomCallSounds: function (e) {
        return e_(x, e);
    },
    canUploadLargeFiles: function (e) {
        return e_(ea, e);
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
        return e_(Y, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return e_(B, e);
    },
    canUseClientThemes: function (e) {
        return e_(K, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? e_(Z, t) : e_(q, t);
    },
    canUseQuestOrbMultiplier: ty,
    hasFreeBoosts: function (e) {
        return e_(z, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return e_(w, e);
    },
    canUseCustomBackgrounds: function (e) {
        return e_(et, e);
    },
    canUseCollectibles: tD,
    canUseMonthlyOrbs: function (e) {
        return !!(0, p.v)("canUseMonthlyOrbs") && (0, v.Nh)(e?.perks, _.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return ((0, p.v)("canUseShopDiscounts") && (0, v.Nh)(e?.perks, _.bb.SHOP_DISCOUNTS)) || tD(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return ((0, p.v)("canUseMoreQuestOrbs") && (0, v.Nh)(e?.perks, _.bb.MORE_QUEST_ORBS)) || ty(e);
    },
    formatPriceString: tv,
    StreamQuality: eb,
});
