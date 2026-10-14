(n.d(t, {
    ki: () => to,
    Ke: () => eH,
    FY: () => th,
    ff: () => tu,
    aZ: () => ty,
    Nc: () => tn,
    Rr: () => tE,
    YE: () => a.YE,
    OU: () => eJ,
    qn: () => tO,
    CC: () => a.CC,
    iv: () => tF,
    RH: () => ez,
    _J: () => tP,
    z_: () => tW,
    FJ: () => eW,
    ee: () => tg,
    $k: () => ta,
    VA: () => tH,
    Dd: () => eZ,
    kX: () => tt,
    To: () => tK,
    _e: () => te,
    l6: () => ew,
    y8: () => ex,
    re: () => tI,
    nB: () => eQ,
    pb: () => ek,
    Zb: () => e7,
    Pr: () => eG,
    nK: () => tG,
    mv: () => tD,
    Tm: () => e0,
    J$: () => tr,
    Pg: () => tS,
    D8: () => ej,
    TW: () => a.ki,
    $Q: () => eF,
    aE: () => tm,
    L_: () => tV,
    Uf: () => ts,
    sS: () => tl,
    ji: () => e8,
    Q8: () => ti,
    Mn: () => eK,
    m6: () => eY,
    Em: () => tw,
    xq: () => e6,
    Ge: () => t_,
    Of: () => tT,
    tW: () => tp,
    mH: () => tU,
    XN: () => tY,
    Ay: () => t$,
    EL: () => eP,
    bx: () => e2,
    Zw: () => e$,
    Om: () => tC,
    GX: () => tN,
    JM: () => eU,
    UC: () => eB,
    e1: () => tx,
    PK: () => td,
    z4: () => e5,
    LE: () => tf,
    ys: () => e4,
    U8: () => eV,
    tS: () => tA,
    EJ: () => tR,
}),
    n(667532),
    n(321073));
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
    f = n(626584),
    I = n(981088),
    p = n(367888),
    T = n(83790),
    m = n(683760),
    g = n(219882),
    S = n(652215),
    N = n(202541);
function C(e) {
    if (null == e) return S.TbF;
    let t = m.A.getPremiumTypeOverride();
    return e.isStaff() && t === N.$I
        ? S.mu
        : null != e.premiumType && (0, a.ki)(e)
          ? e.premiumType === N.PremiumTypes.TIER_2
              ? (0, g.ew)({ location: "getUserMaxFileSize" })
              : N.f5[e.premiumType].fileSize
          : S.TbF;
}
class O {
    name;
    description;
    getFeatureValue;
    constructor(e, t, n) {
        ((this.name = e),
            (this.description = n),
            (this.getFeatureValue = t),
            Object.defineProperty(this, "getFeatureValue", { value: t, configurable: !1, writable: !1 }));
    }
}
class R {
    skuId;
    skuFeatures;
    constructor(e, t) {
        ((this.skuId = e), (this.skuFeatures = t));
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
let b = new f.A("ProductCatalog.tsx");
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
let P = new M(T.w.ANIMATED_EMOJIS),
    U = new M(T.w.EMOJIS_EVERYWHERE),
    w = new M(T.w.STICKERS_EVERYWHERE),
    G = new M(T.w.SOUNDBOARD_EVERYWHERE),
    x = new M(T.w.CUSTOM_CALL_SOUNDS),
    k = new M(T.w.PREMIUM_VOICE_FILTERS),
    F = new M(T.w.ANIMATED_AVATAR),
    B = new M(T.w.CUSTOM_DISCRIMINATOR),
    V = new M(T.w.PREMIUM_GUILD_MEMBER_PROFILE),
    H = new M("profileBadges"),
    j = new M(T.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    W = new M("collectibles"),
    Y = new M("appIcons"),
    K = new M(T.w.CLIENT_THEMES),
    $ = new M("boostDiscount"),
    z = new M("freeBoosts"),
    X = new M(T.w.STREAM_MID_QUALITY),
    Z = new M(T.w.STREAM_HIGH_QUALITY),
    q = new M(T.w.CUSTOM_NOTIFICATION_SOUNDS),
    Q = new M("fancyVoiceChannelReactions"),
    J = new M("installPremiumApplications"),
    ee = new M("redeemPremiumPerks"),
    et = new M(T.w.VIDEO_FILTER_ASSETS);
new O(T.w.INCREASED_FILE_UPLOAD_SIZE, C);
let en = new M(T.w.INCREASED_GUILD_LIMIT),
    ei = new M(T.w.INCREASED_MESSAGE_LENGTH),
    er = new M("increasedVideoUploadQuality"),
    ea = new M("uploadLargeFiles"),
    es = new M(T.w.QUEST_ORB_MULTIPLIER),
    el = Object.freeze({
        [N.pe.TIER_0]: new R(N.pe.TIER_0, [P, U, w, H, et, er, ea, Y]),
        [N.pe.TIER_1]: new R(N.pe.TIER_1, [P, U, F, B, H, $, X, Q, er, ea, Y]),
        [N.pe.TIER_2]: new R(N.pe.TIER_2, [
            P,
            U,
            w,
            G,
            x,
            F,
            B,
            V,
            H,
            j,
            K,
            $,
            z,
            X,
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
            q,
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
        [B, _.bb.CUSTOM_DISCRIMINATOR],
        [V, _.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [j, _.bb.PROFILE_PREMIUM_FEATURES],
        [W, _.bb.PREMIUM_COLLECTIBLES],
        [K, _.bb.CLIENT_THEMES],
        [X, _.bb.STREAM_MID_QUALITY],
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
    ef = n(295405),
    eI = n(97352),
    ep = n(166403),
    eT = n(739508),
    em = n(58703),
    eg = n(927813),
    eS = n(255438),
    eN = n(580630),
    eC = n(88001),
    eO = n(818348),
    eR = n(660183),
    eL = n(341535),
    ey = n(148155);
let eD = {
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
var eM = (((r = {}).MID = "mid"), (r.HIGH = "high"), r);
function eP(e) {
    return e.items.find((e) => N.JM.has(e.planId));
}
function eU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = ef.A.defaultPaymentSourceId ?? void 0,
        s = ep.A.getPremiumTypeSubscription();
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
    if (null != eI.A.get(e)) {
        let i = S.lid.DEFAULT;
        n ? (i = S.lid.GIFT) : t && (i = S.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.lid.DEFAULT },
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
                r &&
                    (0, eT.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, eT.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function ek(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.lid.DEFAULT },
        i = (function (e, t) {
            let n = eI.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, eT.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    eb.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`)
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            (eb.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                eb.info(`prices: ${r}`));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, eT.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        eb.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, eT.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function eF(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function eB(e, t, n) {
    let i,
        r,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        l = (0, p._1)(e);
    null != l && (i = N.hd[l.planId].premiumType);
    let o = (0, a.CC)(i, N.PremiumTypes.TIER_0),
        d = (0, a.CC)(i, N.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        ((r = N.pW.has(i.planId) ? d : !N.JM.has(i.planId) && o),
            (e = void 0 === n ? eU(i.planId, r, !1, t) : ex(i.planId, r, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity));
    }
    return eF(s);
}
function eV(e, t, n, i) {
    return (
        null === t && (o()(null !== e, "Subscription can't be null"), (t = [])), eB(null !== e ? tm(e, t) : tg(t), n, i)
    );
}
function eH(e) {
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
function ej(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : N.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case N.WT.MONTH:
                if (i > 1)
                    return r
                        ? eR.intl.formatToPlainString(eL.default.G1Q40N, { intervalCount: i })
                        : eR.intl.formatToPlainString(eR.t["0UlZnH"], { intervalCount: i });
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
function eW(e) {
    switch (e) {
        case N.WT.MONTH:
            return eR.intl.string(eR.t.FPybU7);
        case N.WT.YEAR:
            return eR.intl.string(eR.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function eY(e) {
    let t = N.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, eT.pM)(n, { tags: { planId: e } }), n);
}
function eK(e) {
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
                : eR.intl.formatToPlainString(ey.default["8bPDtb"], { premiumGroupProductName: (0, eC.DP)() });
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
function e$(e) {
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
function ez(e) {
    let t = N.hd[e]?.premiumType,
        n = null != t ? N.Mr[t] : null;
    if (null != n) return eR.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, eT.pM)(i, { tags: { planId: e } }), i);
}
function eX(e, t) {
    if (e === N.WT.MONTH) return t;
    if (e === N.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function eZ(e) {
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
        A = tM(eU(_.id), _.interval),
        h = null != o && 0 === o.subtotal,
        f =
            to(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !eA.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        I = null != i && null == t.paymentGateway,
        p = t.status === S.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === S.lT7.OPEN,
        T = f ? S.Dmq.CANCELED : p ? S.Dmq.UNPAID : t.status,
        m = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        g = N.M4 + (r ? e2(t.additionalPlans) : 0),
        C = I
            ? m
                ? eR.intl.format(eR.t["cd+hqB"], { price: i })
                : eR.intl.format(eR.t.NUkcpF, { price: i })
            : eR.intl.string(eR.t.zYx3Y6),
        O = I
            ? m
                ? eR.intl.format(eR.t.VsKcFB, { price: i })
                : eR.intl.format(eR.t.hJ5xEX, { price: i })
            : eR.intl.string(eR.t["8rSipI"]),
        R = I
            ? m
                ? eR.intl.format(eR.t["jRy6/J"], { price: i, num: g })
                : eR.intl.format(eR.t.tTNE8M, { price: i, num: g })
            : eR.intl.format(eR.t["U+z/HJ"], { num: g });
    switch (n) {
        case N.gD.PREMIUM_MONTH_TIER_0:
        case N.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case S.Dmq.CANCELED:
                    return I
                        ? m
                            ? eR.intl.format(eR.t["USi/nc"], { price: i })
                            : eR.intl.format(eR.t["FS//l2"], { price: i })
                        : eR.intl.string(eR.t.JshLzq);
                case S.Dmq.ACCOUNT_HOLD:
                    return I
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
                        endDate: (0, em.i$)(e8(t).expiresDate, "LL"),
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
                    return I
                        ? m
                            ? eR.intl.format(eR.t.cXy8Bp, { price: i })
                            : eR.intl.format(eR.t["C/XsHt"], { price: i })
                        : eR.intl.string(eR.t.K6tYFa);
                case S.Dmq.ACCOUNT_HOLD:
                    return I
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
                        endDate: (0, em.i$)(e8(t).expiresDate, "LL"),
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
                    return I
                        ? m
                            ? eR.intl.format(eR.t.xoFgRh, { price: i, num: g })
                            : eR.intl.format(eR.t.nXdbKo, { price: i, num: g })
                        : eR.intl.format(eR.t.EcSdRH, { num: g });
                case S.Dmq.ACCOUNT_HOLD:
                    return I
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
                        endDate: (0, em.i$)(e8(t).expiresDate, "LL"),
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
                                  renewalDate: e9(t, u),
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
function eQ(e) {
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
        f = eI.A.get(c);
    return (
        o()(null != f, "Missing plan"),
        eq({
            subscription: d,
            planId: f.id,
            price:
                ((t = s),
                (n = d),
                (i = f),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? ex(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
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
function eJ(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, eE.m1)(t) ? null : eK(t),
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
function e0(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i, isThreeMonthGiftingEnabled: r = !1 } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === N.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case N.pe.TIER_0:
            s = [N.gD.PREMIUM_YEAR_TIER_0, N.gD.PREMIUM_MONTH_TIER_0];
            break;
        case N.pe.TIER_1:
            s = [N.gD.PREMIUM_MONTH_TIER_1];
            break;
        case N.pe.TIER_2:
            s = r
                ? [N.gD.PREMIUM_YEAR_TIER_2, N.gD.PREMIUM_3_MONTH_TIER_2, N.gD.PREMIUM_MONTH_TIER_2]
                : [N.gD.PREMIUM_YEAR_TIER_2, N.gD.PREMIUM_MONTH_TIER_2];
            break;
        case N.pe.GUILD:
            return [];
        default:
            throw Error(`Unexpected SKU: ${t}`);
    }
    if (void 0 !== a) {
        let e = s.indexOf(a);
        -1 !== e && (s.splice(e, 1), s.unshift(a));
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
    let t = eI.A.getPlanIdsForSkus([tU(N.pe.GUILD)]);
    o()(null != t, "Missing guildSubscriptionPlanIds");
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
function e5(e) {
    return N.pW.has(e);
}
function e4(e) {
    return e6(e) || e5(e);
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
    return (null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = te(n, t.unactivatedUnits)), n);
}
function te(e, t, n, i) {
    let r = c()(i ? void 0 : e);
    if (t.length > 0) {
        let e = tk(t);
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
    let t = tk(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === N.xc.NONE)) return "";
    let n = { days: eR.t.fYmirx, hours: eR.t["C3RO+g"], minutes: eR.t.r77oHc },
        i = (0, A.Vb)((0, em.Tf)(0, t * eg.A.Millis.HOUR));
    return (0, em.uN)(i, n);
}
function tn(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === S.Dmq.PAST_DUE;
}
function ti(e) {
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
function tr(e) {
    if (null == e) return !1;
    let t = ef.A.getPaymentSource(e);
    return null != t && eO.AD.has(t.type);
}
function ta(e) {
    return e.isPurchasedExternally
        ? e.status === S.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = e2(n);
              return 0 === (null != t ? e2(t.additionalPlans) : null) && 0 !== r ? S.Dmq.CANCELED : i;
          })(e) === S.Dmq.CANCELED;
}
function ts(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: l, additionalPlans: d, renewalMutations: c } = n,
        u = eI.A.get(l);
    o()(null != u, "Missing plan");
    let _ = e2(d),
        A = c?.additionalPlans != null ? e2(c.additionalPlans) : _,
        h = Math.max(0, _ - A),
        f = A > 0 && h > 0,
        I = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => N.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = f ? A : _;
            try {
                e = tc(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                I = !0;
            }
        }
        t = null != e ? (0, eN.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || I,
        T = null != t ? (0, eN.CE)(t, u.interval, u.intervalCount) : "",
        m = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (ta(n))
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
                    endDate: (0, em.i$)(e8(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, E.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (f) {
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
function tl(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    if (null != t)
        try {
            i = ex(e.id, !1, r, t, a);
        } catch {
            i = eU(e.id, !1, r, void 0, a);
        }
    else i = eU(e.id, !1, r, void 0, a);
    let s = (0, eN.$g)(i.amount, i.currency);
    return (e.currency !== eO.Yr.USD && !0 === n && (s = s.concat("*")), s);
}
function to(e) {
    let { status: t, renewalMutations: n } = e;
    return t === S.Dmq.CANCELED || (null != n && (0, eE.m1)(n.planId) && !e.isPurchasedExternally);
}
function td(e) {
    return e === S.Dmq.PAST_DUE || e === S.Dmq.ACCOUNT_HOLD || e === S.Dmq.BILLING_RETRY;
}
function tc(e, t, n, i) {
    let r = null != t ? { paymentSourceId: t, currency: n } : { country: eh.A.ipCountryCodeWithFallback, currency: n },
        s = eI.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    let l = eI.A.getForSkuAndInterval(tU(N.pe.GUILD), s.interval, s.intervalCount);
    if (null == l) {
        let t = Error("Unsupported plan");
        throw ((0, eT.pM)(t, { tags: { planId: e } }), t);
    }
    return ex(l.id, (0, a.ki)(i), !1, r);
}
function tu(e, t, n) {
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
            return eR.intl.formatToPlainString(ey.default.LwdrNi, { premiumGroupProductName: (0, eC.DP)() });
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
function t_(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = eI.A.get(t);
    return (o()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount });
}
function tE() {
    let e = eO.Yr.USD;
    try {
        e = eU(N.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function tA(e) {
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
function th(e) {
    let { intervalType: t = N.WT.MONTH, intervalCount: n = 1 } = e,
        i = tE(),
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
function tf(e, t) {
    if (null != e && null != e.subscriptionTrial && e.subscriptionTrial.skuId === t) {
        let t = e.subscriptionTrial;
        return th({ intervalType: t.interval, intervalCount: t.intervalCount });
    }
    return null;
}
function tI(e) {
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
function tp(e, t) {
    switch (e) {
        case S.kM_.APPLE_PARTNER:
        case S.kM_.APPLE_ADVANCED_COMMERCE:
        case S.kM_.APPLE:
            return eD[t];
        case S.kM_.GOOGLE:
            return ev[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function tT(e, t) {
    return (0, a.ki)(e) || td(t?.status);
}
function tm(e, t) {
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
function tg(e) {
    return e.filter((e) => !N.JM.has(e.planId));
}
function tS(e, t, n, i) {
    if (!i.has(t))
        throw new h.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
    let r = !1,
        a = (e.renewalMutations?.items ?? e.items).map((e) =>
            i.has(e.planId) ? ((r = !0), { ...e, quantity: n, planId: t }) : e,
        );
    if (!r) {
        let i = { planId: t, quantity: n },
            r = e.items.find((e) => e.planId === t);
        (null != r && (i.id = r.id), a.push(i));
    }
    return a.filter((e) => 0 !== e.quantity);
}
function tN(e, t) {
    return tS(e, t, 1, N.JM);
}
function tC(e, t, n) {
    return tS(e, n, t, N.pW);
}
function tO(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => N.JM.has(e.planId));
    if (null != t) {
        let n = eI.A.get(t.planId);
        (o()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = eI.A.get(e.planId);
                if ((o()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = eI.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return (o()(null != r, "Missing planForInterval"), { ...e, planId: r.id });
            })));
    }
    return e;
}
function tR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = e === N.PremiumTypes.TIER_2 ? (0, g.ew)({ location: "getMaxFileSizeForPremiumType" }) : N.f5[e].fileSize;
    return (0, eS.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function tL(e) {
    return null == e ? null : e.items.find((e) => N.pW.has(e.planId));
}
function ty(e) {
    let t = null != e ? eP(e) : null;
    return null != t ? e1(t.planId) : null;
}
function tD(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function tv(e) {
    return e_(es, e);
}
function tb(e) {
    return e_(W, e);
}
function tM(e, t) {
    let n = (0, eN.$g)(e.amount, e.currency),
        i = eW(t);
    return `${n}/${i}`;
}
function tP(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = ex(e.id);
    return (0, eN.CE)((0, eN.$g)(n.amount, n.currency), e.interval, t);
}
function tU(e) {
    return e;
}
function tw(e) {
    return "isNitroLocked" in e;
}
function tG() {
    let e = (0, u.bG)([eA.default], () => eA.default.getCurrentUser());
    return (0, a.YE)(e, N.PremiumTypes.TIER_2);
}
function tx(e) {
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
function tk(e) {
    return tF(e.map((e) => e.skuId));
}
function tF(e) {
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
function tB(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = N.En[t.skuId];
    return null == r ? null : ex(r, !1, n, i);
}
function tV(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = N.XE[t];
    if (null != r) {
        let e = tj(r, n, i);
        null != e && (a = e);
    }
    return a;
}
function tH(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === N.WT.DAY || (t.interval === N.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = tB({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === N.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function tj(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { interval: a, intervalCount: s } = e;
    if (a !== N.WT.MONTH && a !== N.WT.YEAR) return;
    let l = eX(a, s);
    if (!(l <= 1)) {
        try {
            if (((t = tB({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = ex(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (t.amount * l)));
    }
}
function tW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = tH({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = ex(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function tY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== N.WT.YEAR) return null;
    let i = ex(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function tK(e) {
    return null == e ? 0 : Math.max((0, em.m_)(new Date(), new Date(e)), 0);
}
let t$ = Object.freeze({
    isNewUser: tD,
    isPremiumAtLeast: a.CC,
    isPremium: a.ki,
    isPremiumExactly: a.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: ex,
    getDefaultPrice: eU,
    getInterval: function (e) {
        let t = N.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, eT.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: ej,
    getIntervalStringAsNoun: eW,
    getPremiumType: eY,
    getTierDisplayNameByPlanId: ez,
    getDisplayName: eK,
    getPremiumPlanOptions: e0,
    formatInterval: function (e) {
        if (e === N.WT.YEAR) return eR.intl.string(eR.t.tfqrhj);
        if (e === N.WT.MONTH) return eR.intl.string(eR.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eq,
    isPremiumSku: function (e) {
        return e === N.pe.TIER_0 || e === N.pe.TIER_1 || e === N.pe.TIER_2;
    },
    getIntervalMonths: eX,
    getUserMaxFileSize: C,
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
        return eY(e) === N.PremiumTypes.TIER_2 ? N.M4 : 0;
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
            let t = e8(e).expiresDate;
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
                      paymentSourceLink: tp(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : eR.intl.format(eR.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        if (e.status === S.Dmq.BILLING_RETRY || e.status === S.Dmq.ACCOUNT_HOLD) {
            let t = c()(e.currentPeriodStart)
                .add(e.status === S.Dmq.BILLING_RETRY ? N.bx : N.ph, "days")
                .toDate();
            return e.isPurchasedExternally
                ? e.isPurchasedViaGoogle && (0, I.xv)()
                    ? eR.intl.format(eR.t["IlJ/HV"], { endDate: t })
                    : eR.intl.format(eR.t["dtcxw+"], {
                          endDate: t,
                          paymentGatewayName: eO.qm[e.paymentGateway],
                          paymentSourceLink: tp(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                : eR.intl.format(eR.t.EMTLOT, { endDate: t, price: s });
        } else {
            var l;
            if (null != (l = e).paymentSourceId && tr(l.paymentSourceId))
                return eR.intl.format(eR.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === S.Dmq.UNPAID) return eR.intl.format(eR.t.CzTKom, { maxProcessingTimeInDays: N.G4 });
            if (e.isPurchasedExternally)
                return eR.intl.format(eR.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: eO.qm[e.paymentGateway],
                    subscriptionManagementLink: tp(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = te(n, r.unactivatedUnits)),
                i
                    ? eR.intl.format(eR.t.Vl3cED, { planName: eR.intl.string(eR.t.Ipxkog), renewalDate: n, price: s })
                    : eR.intl.format(eR.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: e9,
    extendDateWithUnconsumedFractionalPremium: te,
    getUnactivatedFractionalPremiumDurationString: tt,
    isSwitchingPlansDisabled: tn,
    getSwitchingPlansDisabledMessage: ti,
    isNoneSubscription: eE.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === S.Dmq.CANCELED || e.status === S.Dmq.PAUSE_PENDING) return n;
        o()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return e6(t);
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
                return e6(t);
            }),
            r = e.isPurchasedExternally && null != e.renewalMutations;
        return ((null == i || (0, eE.m1)(i.subscriptionPlanId)) && !r && (n = S.Dmq.CANCELED), n);
    },
    isBaseSubscriptionCanceled: to,
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
    getBillingReviewSubheader: tu,
    getIntervalForInvoice: t_,
    getPremiumPlanItem: eP,
    getGuildBoostPlanItem: tL,
    isBoostOnlySubscription: function (e) {
        return null != e && null == eP(e) && null != tL(e);
    },
    getPremiumSkuIdForSubscription: ty,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = eP(e);
            if (null != t) return eY(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: tk,
    castPremiumSubscriptionAsSkuId: tU,
    calculateDiscountPercentageForPlan: tj,
    calculateYearlyPlanDollarSavingsAmount: tW,
    calculateYearlyPlanMonthlyRateAmount: tY,
    getDaysSincePremium: tK,
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
        return e_(B, e);
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
        return e_(V, e);
    },
    canUseClientThemes: function (e) {
        return e_(K, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? e_(Z, t) : e_(X, t);
    },
    canUseQuestOrbMultiplier: tv,
    hasFreeBoosts: function (e) {
        return e_(z, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return e_(w, e);
    },
    canUseCustomBackgrounds: function (e) {
        return e_(et, e);
    },
    canUseCollectibles: tb,
    canUseMonthlyOrbs: function (e) {
        return (0, v.Nh)(e?.perks, _.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return (0, v.Nh)(e?.perks, _.bb.SHOP_DISCOUNTS) || tb(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return (0, v.Nh)(e?.perks, _.bb.MORE_QUEST_ORBS) || tv(e);
    },
    formatPriceString: tM,
    StreamQuality: eM,
});
