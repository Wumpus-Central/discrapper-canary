(n.d(t, {
    ki: () => eM,
    Ke: () => en,
    FY: () => eF,
    ff: () => ew,
    aZ: () => eZ,
    Nc: () => eR,
    Rr: () => ex,
    YE: () => r.YE,
    OU: () => eE,
    qn: () => eX,
    CC: () => r.CC,
    iv: () => e6,
    RH: () => eo,
    _J: () => e0,
    z_: () => tt,
    FJ: () => er,
    ee: () => eY,
    $k: () => eD,
    VA: () => e9,
    Dd: () => ec,
    kX: () => eO,
    To: () => ti,
    _e: () => eC,
    l6: () => X,
    y8: () => Z,
    re: () => eV,
    nB: () => e_,
    pb: () => Q,
    Zb: () => eg,
    Pr: () => q,
    nK: () => e3,
    mv: () => eQ,
    Tm: () => eA,
    J$: () => ey,
    Pg: () => eK,
    D8: () => ei,
    TW: () => r.ki,
    $Q: () => J,
    aE: () => eW,
    L_: () => e8,
    Uf: () => ev,
    sS: () => eb,
    ji: () => eS,
    Q8: () => eL,
    Mn: () => es,
    m6: () => ea,
    Em: () => e2,
    xq: () => ep,
    Ge: () => eG,
    Of: () => ej,
    tW: () => eH,
    mH: () => e1,
    XN: () => tn,
    Ay: () => tr,
    EL: () => $,
    bx: () => ef,
    Zw: () => el,
    Om: () => ez,
    GX: () => e$,
    JM: () => z,
    UC: () => ee,
    e1: () => e5,
    PK: () => eP,
    z4: () => eT,
    LE: () => eB,
    ys: () => em,
    U8: () => et,
    tS: () => ek,
    EJ: () => C,
}),
    n(667532),
    n(321073));
var i,
    r = n(474090),
    a = n(582128),
    s = n(284009),
    l = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(17928),
    u = n(975807),
    _ = n(366999),
    E = n(930767),
    A = n(626584),
    h = n(981088),
    f = n(367888),
    I = n(441574),
    p = n(255438),
    T = n(836714),
    m = n(219882),
    g = n(349871),
    S = n(202541),
    N = (((i = {}).MID = "mid"), (i.HIGH = "high"), i);
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = e === S.PremiumTypes.TIER_2 ? (0, m.ew)({ location: "getMaxFileSizeForPremiumType" }) : S.f5[e].fileSize;
    return (0, p.Xq)(n / 1024, { useKibibytes: !0, useSpace: t.useSpace });
}
function O(e) {
    return (0, T.RM)(T.G5, e);
}
function R(e) {
    return (0, T.RM)(T.G3, e);
}
var L = n(832946),
    y = n(287809),
    D = n(615405),
    v = n(295405),
    b = n(97352),
    M = n(166403),
    P = n(739508),
    U = n(58703),
    w = n(927813),
    G = n(125584),
    x = n(580630),
    k = n(652215),
    F = n(88001),
    B = n(818348),
    V = n(105292),
    H = n(926701),
    j = n(222065);
let W = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    Y = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    K = new A.A("PremiumUtils.tsx");
function $(e) {
    return e.items.find((e) => S.JM.has(e.planId));
}
function z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = v.A.defaultPaymentSourceId ?? void 0,
        s = M.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        Z(e, t, n, { paymentSourceId: a, currency: i }, r)
    );
}
function X(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function q(e, t, n) {
    let i = a.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return a.useMemo(
        () => ({
            priceOptions: X(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function Z(e) {
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
    if (null != b.A.get(e)) {
        let i = k.lid.DEFAULT;
        n ? (i = k.lid.GIFT) : t && (i = k.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: k.lid.DEFAULT },
                r = Q(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    K.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let a = r.find((e) => e.currency === i.toLowerCase());
                return null != a
                    ? a
                    : null != t
                      ? Q(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: a, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                r &&
                    (0, P.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, P.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function Q(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: k.lid.DEFAULT },
        i = (function (e, t) {
            let n = b.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, P.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    K.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`)
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            (K.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                K.info(`prices: ${r}`));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, P.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        K.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, P.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function J(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function ee(e, t, n) {
    let i,
        a,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        l = (0, f._1)(e);
    null != l && (i = S.hd[l.planId].premiumType);
    let o = (0, r.CC)(i, S.PremiumTypes.TIER_0),
        d = (0, r.CC)(i, S.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        ((a = S.pW.has(i.planId) ? d : !S.JM.has(i.planId) && o),
            (e = void 0 === n ? z(i.planId, a, !1, t) : Z(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity));
    }
    return J(s);
}
function et(e, t, n, i) {
    return (
        null === t && (l()(null !== e, "Subscription can't be null"), (t = [])), ee(null !== e ? eW(e, t) : eY(t), n, i)
    );
}
function en(e) {
    switch (e) {
        case S.Ff.MONTH:
            return V.intl.string(V.t.FPybU7);
        case S.Ff.YEAR:
            return V.intl.string(V.t.tfqrhj);
        case S.Ff.DAY:
        case S.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function ei(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : S.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case S.WT.MONTH:
                if (i > 1)
                    return r
                        ? V.intl.formatToPlainString(H.default.G1Q40N, { intervalCount: i })
                        : V.intl.formatToPlainString(V.t["0UlZnH"], { intervalCount: i });
                let s = V.intl.formatToPlainString(a === S.PremiumTypes.TIER_0 ? V.t.NPKsLz : V.t.poEovT, {
                    timeInterval: V.intl.string(V.t.FPybU7),
                });
                return r ? s : V.intl.string(V.t.Mh9bTt);
            case S.WT.YEAR:
                let l = V.intl.formatToPlainString(a === S.PremiumTypes.TIER_0 ? V.t.NPKsLz : V.t.poEovT, {
                    timeInterval: V.intl.string(V.t.tfqrhj),
                });
                return r ? l : V.intl.string(V.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case S.WT.MONTH:
            if (1 !== i) return V.intl.formatToPlainString(V.t["0UlZnH"], { intervalCount: i });
            return V.intl.string(V.t.DKzs96);
        case S.WT.YEAR:
            return V.intl.string(V.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function er(e) {
    switch (e) {
        case S.WT.MONTH:
            return V.intl.string(V.t.FPybU7);
        case S.WT.YEAR:
            return V.intl.string(V.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function ea(e) {
    let t = S.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, P.pM)(n, { tags: { planId: e } }), n);
}
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case S.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? V.intl.format(V.t.TZXHNj, { duration: i })
                : n
                  ? V.intl.string(V.t["81iAgs"])
                  : V.intl.string(V.t["0efVPy"]);
        case S.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? V.intl.format(V.t.eqRhC7, { duration: i })
                : n
                  ? V.intl.string(V.t.UvzqY1)
                  : V.intl.string(V.t.eoVuBn);
        case S.gD.PREMIUM_MONTH_TIER_1:
            return n ? V.intl.string(V.t["g/dH5g"]) : V.intl.string(V.t["7O6qSq"]);
        case S.gD.PREMIUM_YEAR_TIER_1:
            return n ? V.intl.string(V.t.pdZJaq) : V.intl.string(V.t.Md5xbi);
        case S.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? V.intl.format(V.t.aI6QXz, { duration: i })
                : n
                  ? V.intl.string(V.t.SmVbHc)
                  : V.intl.string(V.t.FKYNC6);
        case S.gD.PREMIUM_GROUP_MONTH:
            return n
                ? V.intl.string(V.t.SmVbHc)
                : V.intl.formatToPlainString(j.default["8bPDtb"], { premiumGroupProductName: (0, F.DP)() });
        case S.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? V.intl.format(V.t["1wBcPi"], { duration: i })
                : n
                  ? V.intl.string(V.t.JIq4O1)
                  : V.intl.string(V.t["cfu/5d"]);
        case S.gD.PREMIUM_3_MONTH_TIER_2:
            return V.intl.string(V.t.wCbINr);
        case S.gD.PREMIUM_6_MONTH_TIER_2:
            return V.intl.string(V.t["e3/ArU"]);
        case S.gD.PREMIUM_MONTH_GUILD:
            return n ? V.intl.string(V.t["6ZR3By"]) : V.intl.string(V.t["h80cx/"]);
        case S.gD.PREMIUM_YEAR_GUILD:
            return n ? V.intl.string(V.t.YDpAzZ) : V.intl.string(V.t.ZHkls0);
        case S.gD.PREMIUM_3_MONTH_GUILD:
            return V.intl.string(V.t.EZHHB6);
        case S.gD.PREMIUM_6_MONTH_GUILD:
            return V.intl.string(V.t.X2KDO2);
        case S.gD.PREMIUM_MONTH_LEGACY:
            return V.intl.string(V.t.PD6k79);
        case S.gD.PREMIUM_YEAR_LEGACY:
            return V.intl.string(V.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, P.pM)(r, { tags: { planId: e } }), r);
}
function el(e) {
    switch (e) {
        case S.pe.TIER_0:
            return V.intl.string(V.t["t9uG/o"]);
        case S.pe.TIER_1:
            return V.intl.string(V.t.FSOz78);
        case S.pe.TIER_2:
            return V.intl.string(V.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, P.pM)(t, { tags: { skuId: e } }), t);
}
function eo(e) {
    let t = S.hd[e]?.premiumType,
        n = null != t ? S.Mr[t] : null;
    if (null != n) return V.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, P.pM)(i, { tags: { planId: e } }), i);
}
function ed(e, t) {
    if (e === S.WT.MONTH) return t;
    if (e === S.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case S.PremiumTypes.TIER_0:
            return t ? "Basic" : V.intl.string(V.t["t9uG/o"]);
        case S.PremiumTypes.TIER_1:
            return t ? "Classic" : V.intl.string(V.t.FSOz78);
        case S.PremiumTypes.TIER_2:
            return V.intl.string(V.t.lG6a5x);
    }
}
function eu(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoiceWithoutEntitlementsPreview: l,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: c,
            fractionalPremiumInfo: _,
        } = e,
        E = S.hd[n],
        A = eJ(z(E.id), E.interval),
        h = null != o && 0 === o.subtotal,
        f =
            eM(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !y.default.getCurrentUser()?.hasFreePremium() &&
                !h),
        I = null != i && null == t.paymentGateway,
        p = t.status === k.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === k.lT7.OPEN,
        T = f ? k.Dmq.CANCELED : p ? k.Dmq.UNPAID : t.status,
        m = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        g = S.M4 + (r ? ef(t.additionalPlans) : 0),
        N = I
            ? m
                ? V.intl.format(V.t["cd+hqB"], { price: i })
                : V.intl.format(V.t.NUkcpF, { price: i })
            : V.intl.string(V.t.zYx3Y6),
        C = I
            ? m
                ? V.intl.format(V.t.VsKcFB, { price: i })
                : V.intl.format(V.t.hJ5xEX, { price: i })
            : V.intl.string(V.t["8rSipI"]),
        O = I
            ? m
                ? V.intl.format(V.t["jRy6/J"], { price: i, num: g })
                : V.intl.format(V.t.tTNE8M, { price: i, num: g })
            : V.intl.format(V.t["U+z/HJ"], { num: g });
    switch (n) {
        case S.gD.PREMIUM_MONTH_TIER_0:
        case S.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case k.Dmq.CANCELED:
                    return I
                        ? m
                            ? V.intl.format(V.t["USi/nc"], { price: i })
                            : V.intl.format(V.t["FS//l2"], { price: i })
                        : V.intl.string(V.t.JshLzq);
                case k.Dmq.ACCOUNT_HOLD:
                    return I
                        ? m
                            ? V.intl.format(V.t["5mv+2i"], { price: i })
                            : V.intl.format(V.t.nkAEfZ, { price: i })
                        : V.intl.format(V.t.SsLIXS, {});
                case k.Dmq.UNPAID:
                    return V.intl.format(V.t.cmkbFB, {});
                case k.Dmq.PAUSE_PENDING:
                    let R = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != R
                        ? V.intl.format(V.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: R })
                        : V.intl.format(V.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case k.Dmq.PAUSED:
                    if (c) return N;
                    return V.intl.format(V.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case k.Dmq.PAST_DUE:
                    return V.intl.format(V.t["d+0vwo"], {
                        endDate: (0, U.i$)(eS(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return N;
            }
        case S.gD.PREMIUM_MONTH_TIER_1:
        case S.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case k.Dmq.CANCELED:
                    return I
                        ? m
                            ? V.intl.format(V.t.cXy8Bp, { price: i })
                            : V.intl.format(V.t["C/XsHt"], { price: i })
                        : V.intl.string(V.t.K6tYFa);
                case k.Dmq.ACCOUNT_HOLD:
                    return I
                        ? m
                            ? V.intl.format(V.t.HBkIBi, { price: i })
                            : V.intl.format(V.t.ZsO1Sx, { price: i })
                        : V.intl.format(V.t["0+/WH7"], {});
                case k.Dmq.UNPAID:
                    return V.intl.format(V.t.McIzwj, {});
                case k.Dmq.PAUSE_PENDING:
                    let L = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != L
                        ? V.intl.format(V.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: L })
                        : V.intl.format(V.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case k.Dmq.PAUSED:
                    if (c) return C;
                    return V.intl.format(V.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case k.Dmq.PAST_DUE:
                    return V.intl.format(V.t["d+0vwo"], {
                        endDate: (0, U.i$)(eS(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return C;
            }
        case S.gD.PREMIUM_MONTH_TIER_2:
        case S.gD.PREMIUM_YEAR_TIER_2:
        case S.gD.PREMIUM_3_MONTH_TIER_2:
        case S.gD.PREMIUM_6_MONTH_TIER_2:
        case S.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case k.Dmq.CANCELED:
                    return I
                        ? m
                            ? V.intl.format(V.t.xoFgRh, { price: i, num: g })
                            : V.intl.format(V.t.nXdbKo, { price: i, num: g })
                        : V.intl.format(V.t.EcSdRH, { num: g });
                case k.Dmq.ACCOUNT_HOLD:
                    return I
                        ? m
                            ? V.intl.format(V.t["5C/0QG"], { price: i, num: g })
                            : V.intl.format(V.t.xfYkhu, { price: i, num: g })
                        : V.intl.format(V.t.ivjxcn, { num: g });
                case k.Dmq.UNPAID:
                    return V.intl.format(V.t["0HopYf"], { num: g });
                case k.Dmq.PAUSE_PENDING:
                    let D = null != t.pauseEndsAt ? d()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != D
                        ? V.intl.format(V.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: D })
                        : V.intl.format(V.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case k.Dmq.PAUSED:
                    if (c) return O;
                    return V.intl.format(V.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case k.Dmq.BILLING_RETRY:
                    return V.intl.format(V.t["IlJ/HV"], {
                        endDate: d()(t.currentPeriodStart).add(S.bx, "days").toDate(),
                    });
                case k.Dmq.PAST_DUE:
                    return V.intl.format(V.t["d+0vwo"], {
                        endDate: (0, U.i$)(eS(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === S.gD.PREMIUM_YEAR_TIER_2
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: s?.percentage ?? S.Cq,
                                  regularPrice: A,
                                  renewalDate: eN(t, _),
                              })
                            : m
                              ? V.intl.formatToPlainString(V.t["3ZiutU"], {
                                    percent: s?.percentage ?? S._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? S.OJ,
                                })
                              : V.intl.formatToPlainString(V.t["G6+XOT"], {
                                    percent: s?.percentage ?? S._$,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? S.OJ,
                                })
                        : O;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function e_(e) {
    var t, n, i;
    let r,
        a,
        {
            renewalInvoicePreview: s,
            renewalInvoiceWithEntitlementsPreview: o,
            subscription: d,
            planId: c,
            includePremiumGuilds: u = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: E,
            hasFractionalPremiumWithSub: A = !1,
            fractionalPremiumInfo: h,
        } = e,
        f = b.A.get(c);
    return (
        l()(null != f, "Missing plan"),
        eu({
            subscription: d,
            planId: f.id,
            price:
                ((t = s),
                (n = d),
                (i = f),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? Z(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, x.CE)((0, x.$g)(a, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: u,
            hasDiscountApplied: _,
            activeDiscountInfo: E,
            renewalInvoiceWithoutEntitlementsPreview: s,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: A,
            fractionalPremiumInfo: h,
        })
    );
}
function eE(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, L.m1)(t) ? null : es(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return S.pW.has(t);
        }),
        a =
            r?.planId === S.gD.PREMIUM_MONTH_GUILD
                ? V.t.Pi5yMJ
                : r?.planId === S.gD.PREMIUM_YEAR_GUILD
                  ? V.t.H4KPuV
                  : null,
        s = null != a ? V.intl.formatToPlainString(a, { num: r?.quantity }) : void 0;
    if (null != i && null != s)
        return V.intl.formatToPlainString(V.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function eA(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i, isThreeMonthGiftingEnabled: r = !1 } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === S.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case S.pe.TIER_0:
            s = [S.gD.PREMIUM_YEAR_TIER_0, S.gD.PREMIUM_MONTH_TIER_0];
            break;
        case S.pe.TIER_1:
            s = [S.gD.PREMIUM_MONTH_TIER_1];
            break;
        case S.pe.TIER_2:
            s = r
                ? [S.gD.PREMIUM_YEAR_TIER_2, S.gD.PREMIUM_3_MONTH_TIER_2, S.gD.PREMIUM_MONTH_TIER_2]
                : [S.gD.PREMIUM_YEAR_TIER_2, S.gD.PREMIUM_MONTH_TIER_2];
            break;
        case S.pe.GUILD:
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
function eh(e) {
    let t = S.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, P.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ef(e) {
    let t = b.A.getPlanIdsForSkus([e1(S.pe.GUILD)]);
    l()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eI = new Set([
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
function ep(e) {
    return eI.has(e);
}
function eT(e) {
    return S.pW.has(e);
}
function em(e) {
    return ep(e) || eT(e);
}
function eg(e) {
    return null != e && e === S.gD.PREMIUM_GROUP_MONTH;
}
function eS(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = d()(e.metadata.apple_grace_period_expires_date);
        return { days: d().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = d()(e.metadata.google_grace_period_expires_date),
            n = d()(e.metadata.google_original_expires_date);
        return { days: d().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? S.U1 : S.L9;
        return { days: t, expiresDate: d()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: d()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: d()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? S.a5 : S.EV;
        return { days: t, expiresDate: d()(e.currentPeriodStart).add(t, "days") };
    }
}
function eN(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return (null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = eC(n, t.unactivatedUnits)), n);
}
function eC(e, t, n, i) {
    let r = d()(i ? void 0 : e);
    if (t.length > 0) {
        let e = e4(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = d()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function eO(e) {
    let t = e4(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === S.xc.NONE)) return "";
    let n = { days: V.t.fYmirx, hours: V.t["C3RO+g"], minutes: V.t.r77oHc },
        i = (0, _.Vb)((0, U.Tf)(0, t * w.A.Millis.HOUR));
    return (0, U.uN)(i, n);
}
function eR(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === k.Dmq.PAST_DUE;
}
function eL(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? V.intl.string(V.t["0rzJ4J"]) : V.intl.string(V.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = V.intl.string(V.t.a9Mdb3)),
        t
    );
}
function ey(e) {
    if (null == e) return !1;
    let t = v.A.getPaymentSource(e);
    return null != t && B.AD.has(t.type);
}
function eD(e) {
    return e.isPurchasedExternally
        ? e.status === k.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = ef(n);
              return 0 === (null != t ? ef(t.additionalPlans) : null) && 0 !== r ? k.Dmq.CANCELED : i;
          })(e) === k.Dmq.CANCELED;
}
function ev(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: s } = e,
        { planId: o, additionalPlans: d, renewalMutations: c } = n,
        _ = b.A.get(o);
    l()(null != _, "Missing plan");
    let E = ef(d),
        A = c?.additionalPlans != null ? ef(c.additionalPlans) : E,
        h = Math.max(0, E - A),
        f = A > 0 && h > 0,
        I = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => S.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = f ? A : E;
            try {
                e = eU(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                I = !0;
            }
        }
        t = null != e ? (0, x.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || I,
        T = null != t ? (0, x.CE)(t, _.interval, _.intervalCount) : "",
        m = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (eD(n))
        return p
            ? V.intl.format(V.t["3/WTrI"], { quantity: E })
            : m
              ? V.intl.format(V.t["0ozBSB"], { quantity: E, rate: T })
              : V.intl.format(V.t["yjsv/s"], { quantity: E, rate: T });
    switch (n.status) {
        case k.Dmq.ACCOUNT_HOLD:
            return p
                ? V.intl.format(V.t.Nlf3nc, { quantity: E, boostQuantity: E })
                : m
                  ? V.intl.format(V.t.oiRy7v, { quantity: E, boostQuantity: E, rate: T })
                  : V.intl.format(V.t["0QxOAi"], { quantity: E, boostQuantity: E, rate: T });
        case k.Dmq.PAUSE_PENDING:
        case k.Dmq.PAUSED:
            if (null != s && !s.isFractionalPremiumActive) return V.intl.string(V.t.CduWAm);
            return V.intl.format(V.t["5iud9s"], { quantity: E });
        case k.Dmq.PAST_DUE:
            if (n.isBoostOnly)
                return V.intl.format(V.t["d+0vwo"], {
                    endDate: (0, U.i$)(eS(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, u.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (f) {
                if (p) return V.intl.format(V.t["krRy+d"], { activeQuantity: A, pendingQuantity: h });
                let e = m ? V.t["4nc7+E"] : V.t.BmaudS;
                return V.intl.format(e, { activeQuantity: A, pendingQuantity: h, rate: T });
            }
            return p
                ? V.intl.format(V.t["5iud9s"], { quantity: E })
                : m
                  ? V.intl.format(V.t.eDwrLA, { quantity: E, rate: T })
                  : V.intl.format(V.t.ijSDcI, { quantity: E, rate: T });
    }
}
function eb(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    if (null != t)
        try {
            i = Z(e.id, !1, r, t, a);
        } catch {
            i = z(e.id, !1, r, void 0, a);
        }
    else i = z(e.id, !1, r, void 0, a);
    let s = (0, x.$g)(i.amount, i.currency);
    return (e.currency !== B.Yr.USD && !0 === n && (s = s.concat("*")), s);
}
function eM(e) {
    let { status: t, renewalMutations: n } = e;
    return t === k.Dmq.CANCELED || (null != n && (0, L.m1)(n.planId) && !e.isPurchasedExternally);
}
function eP(e) {
    return e === k.Dmq.PAST_DUE || e === k.Dmq.ACCOUNT_HOLD || e === k.Dmq.BILLING_RETRY;
}
function eU(e, t, n, i) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: D.A.ipCountryCodeWithFallback, currency: n },
        s = b.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, P.pM)(t, { tags: { planId: e } }), t);
    }
    let l = b.A.getForSkuAndInterval(e1(S.pe.GUILD), s.interval, s.intervalCount);
    if (null == l) {
        let t = Error("Unsupported plan");
        throw ((0, P.pM)(t, { tags: { planId: e } }), t);
    }
    return Z(l.id, (0, r.ki)(i), !1, a);
}
function ew(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case S.gD.PREMIUM_MONTH_TIER_0:
                return V.intl.string(V.t["0ggVqN"]);
            case S.gD.PREMIUM_YEAR_TIER_0:
                return V.intl.string(V.t["jm+ZQw"]);
            case S.gD.PREMIUM_MONTH_TIER_1:
                return V.intl.string(V.t.uph4Jx);
            case S.gD.PREMIUM_YEAR_TIER_1:
                return V.intl.string(V.t["D/l7Yt"]);
            case S.gD.PREMIUM_MONTH_TIER_2:
            case S.gD.PREMIUM_GROUP_MONTH:
                return V.intl.string(V.t["5l1MuV"]);
            case S.gD.PREMIUM_YEAR_TIER_2:
                return V.intl.string(V.t.G0mISV);
        }
    switch (i) {
        case S.gD.PREMIUM_MONTH_TIER_0:
            return n ? V.intl.string(V.t.cRCCJ3) : V.intl.string(V.t["/G3aKw"]);
        case S.gD.PREMIUM_YEAR_TIER_0:
            return n ? V.intl.string(V.t.cRCCJ3) : V.intl.string(V.t["2eQpsL"]);
        case S.gD.PREMIUM_MONTH_TIER_1:
            return n ? V.intl.string(V.t.cRCCJ3) : V.intl.string(V.t.gueLg5);
        case S.gD.PREMIUM_YEAR_TIER_1:
            return n ? V.intl.string(V.t.cRCCJ3) : V.intl.string(V.t["MhH/vW"]);
        case S.gD.PREMIUM_MONTH_TIER_2:
            return n ? V.intl.string(V.t.cRCCJ3) : V.intl.string(V.t.LQVQIq);
        case S.gD.PREMIUM_GROUP_MONTH:
            return V.intl.formatToPlainString(j.default.LwdrNi, { premiumGroupProductName: (0, F.DP)() });
        case S.gD.PREMIUM_YEAR_TIER_2:
            return n ? V.intl.string(V.t.cRCCJ3) : V.intl.string(V.t["0nfg1x"]);
        case S.gD.PREMIUM_3_MONTH_TIER_2:
        case S.gD.PREMIUM_6_MONTH_TIER_2:
            return V.intl.formatToPlainString(V.t.BCD4fT, { intervalCount: t.intervalCount });
        case S.gD.NONE_MONTH:
        case S.gD.NONE_YEAR:
        case S.gD.NONE_3_MONTH:
        case S.gD.NONE_6_MONTH:
        case S.gD.PREMIUM_MONTH_GUILD:
        case S.gD.PREMIUM_YEAR_GUILD:
        case S.gD.PREMIUM_3_MONTH_GUILD:
        case S.gD.PREMIUM_6_MONTH_GUILD:
            return V.intl.string(V.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, P.pM)(r, { tags: { planId: i } }), r);
}
function eG(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = b.A.get(t);
    return (l()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount });
}
function ex() {
    let e = B.Yr.USD;
    try {
        e = z(S.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function ek(e) {
    let { intervalType: t = S.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case S.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? V.intl.formatToPlainString(V.t.fRNBRX, { weeks: n / 7 })
                    : V.intl.formatToPlainString(V.t.EIpHEj, { weeks: n / 7 });
            return i
                ? V.intl.formatToPlainString(V.t["6Cdzoy"], { days: n })
                : V.intl.formatToPlainString(V.t["kbBj/h"], { days: n });
        case S.WT.MONTH:
            return i
                ? V.intl.formatToPlainString(V.t.x5MgxS, { months: n })
                : V.intl.formatToPlainString(V.t["4SEnCZ"], { months: n });
        case S.WT.YEAR:
            return i
                ? V.intl.formatToPlainString(V.t["h+63yl"], { years: n })
                : V.intl.formatToPlainString(V.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eF(e) {
    let { intervalType: t = S.WT.MONTH, intervalCount: n = 1 } = e,
        i = ex(),
        r = (0, x.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case S.WT.DAY:
            if (n >= 7 && n % 7 == 0) return V.intl.formatToPlainString(V.t.C6i5Jt, { weeks: n / 7, price: r });
            return V.intl.formatToPlainString(V.t.cR9ifw, { days: n, price: r });
        case S.WT.MONTH:
            return V.intl.formatToPlainString(V.t["8FZfNo"], { months: n, price: r });
        case S.WT.YEAR:
            return V.intl.formatToPlainString(V.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eB(e, t) {
    if (null != e && null != e.subscriptionTrial && e.subscriptionTrial.skuId === t) {
        let t = e.subscriptionTrial;
        return eF({ intervalType: t.interval, intervalCount: t.intervalCount });
    }
    return null;
}
function eV(e) {
    let { intervalType: t = S.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case S.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? V.intl.formatToPlainString(V.t.iVZYyl, { weeks: n / 7 })
                    : V.intl.formatToPlainString(V.t.EmoBD2, { weeks: n / 7 });
            return i
                ? V.intl.formatToPlainString(V.t.jzH70Z, { days: n })
                : V.intl.formatToPlainString(V.t["k2UNz+"], { days: n });
        case S.WT.MONTH:
            return i
                ? V.intl.formatToPlainString(V.t.erUSmA, { months: n })
                : V.intl.formatToPlainString(V.t.kridzK, { months: n });
        case S.WT.YEAR:
            return i
                ? V.intl.formatToPlainString(V.t.IfYQVC, { years: n })
                : V.intl.formatToPlainString(V.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eH(e, t) {
    switch (e) {
        case k.kM_.APPLE_PARTNER:
        case k.kM_.APPLE_ADVANCED_COMMERCE:
        case k.kM_.APPLE:
            return W[t];
        case k.kM_.GOOGLE:
            return Y[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function ej(e, t) {
    return (0, r.ki)(e) || eP(t?.status);
}
function eW(e, t) {
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
function eY(e) {
    return e.filter((e) => !S.JM.has(e.planId));
}
function eK(e, t, n, i) {
    if (!i.has(t))
        throw new E.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
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
function e$(e, t) {
    return eK(e, t, 1, S.JM);
}
function ez(e, t, n) {
    return eK(e, n, t, S.pW);
}
function eX(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => S.JM.has(e.planId));
    if (null != t) {
        let n = b.A.get(t.planId);
        (l()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = b.A.get(e.planId);
                if ((l()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = b.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return (l()(null != r, "Missing planForInterval"), { ...e, planId: r.id });
            })));
    }
    return e;
}
function eq(e) {
    return null == e ? null : e.items.find((e) => S.pW.has(e.planId));
}
function eZ(e) {
    let t = null != e ? $(e) : null;
    return null != t ? eh(t.planId) : null;
}
function eQ(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function eJ(e, t) {
    let n = (0, x.$g)(e.amount, e.currency),
        i = er(t);
    return `${n}/${i}`;
}
function e0(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = Z(e.id);
    return (0, x.CE)((0, x.$g)(n.amount, n.currency), e.interval, t);
}
function e1(e) {
    return e;
}
function e2(e) {
    return "isNitroLocked" in e;
}
function e3() {
    let e = (0, c.bG)([y.default], () => y.default.getCurrentUser());
    return (0, r.YE)(e, S.PremiumTypes.TIER_2);
}
function e5(e) {
    var t;
    let n = S.Eg;
    if (null != (t = e) && "trialId" in t)
        switch (e.trialId) {
            case S.Tt:
                return S.h7;
            case S.yo:
                return S.CA;
        }
    else;
    return n;
}
function e4(e) {
    return e6(e.map((e) => e.skuId));
}
function e6(e) {
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
function e7(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = S.En[t.skuId];
    return null == r ? null : Z(r, !1, n, i);
}
function e8(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = S.XE[t];
    if (null != r) {
        let e = te(r, n, i);
        null != e && (a = e);
    }
    return a;
}
function e9(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === S.WT.DAY || (t.interval === S.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = e7({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === S.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function te(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { interval: a, intervalCount: s } = e;
    if (a !== S.WT.MONTH && a !== S.WT.YEAR) return;
    let l = ed(a, s);
    if (!(l <= 1)) {
        try {
            if (((t = e7({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = Z(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (t.amount * l)));
    }
}
function tt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = e9({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = Z(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function tn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== S.WT.YEAR) return null;
    let i = Z(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function ti(e) {
    return null == e ? 0 : Math.max((0, U.m_)(new Date(), new Date(e)), 0);
}
let tr = Object.freeze({
    isNewUser: eQ,
    isPremiumAtLeast: r.CC,
    isPremium: r.ki,
    isPremiumExactly: r.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: Z,
    getDefaultPrice: z,
    getInterval: function (e) {
        let t = S.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, P.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: ei,
    getIntervalStringAsNoun: er,
    getPremiumType: ea,
    getTierDisplayNameByPlanId: eo,
    getDisplayName: es,
    getPremiumPlanOptions: eA,
    formatInterval: function (e) {
        if (e === S.WT.YEAR) return V.intl.string(V.t.tfqrhj);
        if (e === S.WT.MONTH) return V.intl.string(V.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: eu,
    isPremiumSku: function (e) {
        return e === S.pe.TIER_0 || e === S.pe.TIER_1 || e === S.pe.TIER_2;
    },
    getIntervalMonths: ed,
    getUserMaxFileSize: G.f,
    getSkuIdForPlan: eh,
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
        return ea(e) === S.PremiumTypes.TIER_2 ? S.M4 : 0;
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
                          startsAt: d()(0),
                          endsAt: d()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: d()(0),
                          unactivatedUnits: [],
                      },
            a = null !== n && e.status === k.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, x.$g)(
                      a.invoiceItems
                          .filter((e) => S.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      a.currency,
                  )
                : (0, x.$g)(a.total, a.currency);
        if (y.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return V.intl.format(V.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === k.Dmq.CANCELED) return V.intl.format(V.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === k.Dmq.PAUSE_PENDING)
            return V.intl.format(V.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === k.Dmq.PAUSED)
            return r.fractionalState !== S.xc.NONE
                ? V.intl.format(V.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? V.intl.format(V.t.KTYQCg, { planName: V.intl.string(V.t.Ipxkog), price: s })
                      : V.intl.string(V.t.fMz6Lg)
                  : i
                    ? V.intl.format(V.t.zcgtzf, {
                          planName: V.intl.string(V.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : V.intl.format(V.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === k.Dmq.PAST_DUE) {
            let t = eS(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = d()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = d()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? V.intl.format(V.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: B.qm[e.paymentGateway],
                      paymentSourceLink: eH(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : V.intl.format(V.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        if (e.status === k.Dmq.BILLING_RETRY || e.status === k.Dmq.ACCOUNT_HOLD) {
            let t = d()(e.currentPeriodStart)
                .add(e.status === k.Dmq.BILLING_RETRY ? S.bx : S.ph, "days")
                .toDate();
            return e.isPurchasedExternally
                ? e.isPurchasedViaGoogle && (0, h.xv)()
                    ? V.intl.format(V.t["IlJ/HV"], { endDate: t })
                    : V.intl.format(V.t["dtcxw+"], {
                          endDate: t,
                          paymentGatewayName: B.qm[e.paymentGateway],
                          paymentSourceLink: eH(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                : V.intl.format(V.t.EMTLOT, { endDate: t, price: s });
        } else {
            var l;
            if (null != (l = e).paymentSourceId && ey(l.paymentSourceId))
                return V.intl.format(V.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === k.Dmq.UNPAID) return V.intl.format(V.t.CzTKom, { maxProcessingTimeInDays: S.G4 });
            if (e.isPurchasedExternally)
                return V.intl.format(V.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: B.qm[e.paymentGateway],
                    subscriptionManagementLink: eH(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eC(n, r.unactivatedUnits)),
                i
                    ? V.intl.format(V.t.Vl3cED, { planName: V.intl.string(V.t.Ipxkog), renewalDate: n, price: s })
                    : V.intl.format(V.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: eN,
    extendDateWithUnconsumedFractionalPremium: eC,
    getUnactivatedFractionalPremiumDurationString: eO,
    isSwitchingPlansDisabled: eR,
    getSwitchingPlansDisabledMessage: eL,
    isNoneSubscription: L.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === k.Dmq.CANCELED || e.status === k.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ep(t);
        });
        return null == i ||
            (0, L.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === k.Dmq.CANCELED || e.status === k.Dmq.PAUSE_PENDING) return n;
        l()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
                let { subscriptionPlanId: t } = e;
                return ep(t);
            }),
            r = e.isPurchasedExternally && null != e.renewalMutations;
        return ((null == i || (0, L.m1)(i.subscriptionPlanId)) && !r && (n = k.Dmq.CANCELED), n);
    },
    isBaseSubscriptionCanceled: eM,
    getPremiumGuildIntervalPrice: eU,
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
    getBillingReviewSubheader: ew,
    getIntervalForInvoice: eG,
    getPremiumPlanItem: $,
    getGuildBoostPlanItem: eq,
    isBoostOnlySubscription: function (e) {
        return null != e && null == $(e) && null != eq(e);
    },
    getPremiumSkuIdForSubscription: eZ,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = $(e);
            if (null != t) return ea(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: e4,
    castPremiumSubscriptionAsSkuId: e1,
    calculateDiscountPercentageForPlan: te,
    calculateYearlyPlanDollarSavingsAmount: tt,
    calculateYearlyPlanMonthlyRateAmount: tn,
    getDaysSincePremium: ti,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, U.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: function (e) {
        return (0, T.RM)(T.gQ, e);
    },
    canUseEmojisEverywhere: function (e) {
        return (0, T.RM)(T.JK, e);
    },
    canUseSoundboardEverywhere: function (e) {
        return (0, T.RM)(T.He, e);
    },
    canUseCustomCallSounds: function (e) {
        return (0, T.RM)(T.ii, e);
    },
    canUploadLargeFiles: function (e) {
        return (0, T.RM)(T.u6, e);
    },
    canUseBadges: function (e) {
        return (0, T.RM)(T.nI, e);
    },
    canUseHighVideoUploadQuality: function (e) {
        return (0, T.RM)(T.DG, e);
    },
    canEditDiscriminator: function (e) {
        return (0, T.RM)(T.nh, e);
    },
    hasBoostDiscount: function (e) {
        return (0, T.RM)(T._V, e);
    },
    canUseAnimatedAvatar: function (e) {
        return (0, T.RM)(T.OW, e);
    },
    canInstallPremiumApplications: function (e) {
        return (0, T.RM)(T._w, e);
    },
    canUseIncreasedMessageLength: function (e) {
        return (0, T.RM)(T.Qz, e);
    },
    canUseIncreasedGuildCap: function (e) {
        return (0, T.RM)(T.Pm, e);
    },
    canRedeemPremiumPerks: function (e) {
        return (0, T.RM)(T.x, e);
    },
    canUsePremiumProfileCustomization: function (e) {
        return (0, T.RM)(T.cS, e);
    },
    canUsePremiumAppIcons: function (e) {
        return (0, T.RM)(T.T7, e);
    },
    canUsePremiumGuildMemberProfile: function (e) {
        return (0, T.RM)(T.lx, e);
    },
    canUseClientThemes: function (e) {
        return (0, T.RM)(T.zL, e);
    },
    canStreamQuality: function (e, t) {
        return "high" === e ? (0, T.RM)(T.sj, t) : (0, T.RM)(T.II, t);
    },
    canUseQuestOrbMultiplier: O,
    hasFreeBoosts: function (e) {
        return (0, T.RM)(T.aE, e);
    },
    canUseCustomStickersEverywhere: function (e) {
        return (0, T.RM)(T.GS, e);
    },
    canUseCustomBackgrounds: function (e) {
        return (0, T.RM)(T.Zc, e);
    },
    canUseCollectibles: R,
    canUseMonthlyOrbs: function (e) {
        return (0, g.Nh)(e?.perks, I.bb.MONTHLY_ORBS);
    },
    canUseShopDiscounts: function (e) {
        return (0, g.Nh)(e?.perks, I.bb.SHOP_DISCOUNTS) || R(e);
    },
    canUseMoreQuestOrbs: function (e) {
        return (0, g.Nh)(e?.perks, I.bb.MORE_QUEST_ORBS) || O(e);
    },
    formatPriceString: eJ,
    StreamQuality: N,
});
