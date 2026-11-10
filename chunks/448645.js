(n.d(t, {
    VA: () => eJ,
    z_: () => e1,
    XN: () => e2,
    mH: () => eK,
    qn: () => eB,
    Ay: () => e6,
    pb: () => j,
    _e: () => ef,
    re: () => eP,
    _J: () => eY,
    FY: () => eb,
    LE: () => ev,
    tS: () => eD,
    ji: () => eE,
    ff: () => eR,
    To: () => e3,
    Rr: () => ey,
    JM: () => F,
    Ke: () => $,
    Mn: () => Q,
    Zw: () => Z,
    OU: () => er,
    tW: () => eM,
    sS: () => eS,
    iv: () => eq,
    Ge: () => eL,
    D8: () => X,
    FJ: () => z,
    UC: () => Y,
    aE: () => ew,
    Pg: () => ex,
    Om: () => eF,
    GX: () => ek,
    ee: () => eG,
    EJ: () => f.EJ,
    bx: () => el,
    e1: () => eX,
    nB: () => ei,
    Uf: () => eg,
    EL: () => k,
    Tm: () => ea,
    aZ: () => eH,
    m6: () => q,
    Dd: () => et,
    y8: () => H,
    L_: () => eZ,
    $Q: () => W,
    U8: () => K,
    Q8: () => ep,
    RH: () => J,
    kX: () => eh,
    Of: () => eU,
    ki: () => eN,
    mv: () => ej,
    Em: () => e$,
    TW: () => i.ki,
    CC: () => i.CC,
    xq: () => ed,
    YE: () => i.YE,
    Zb: () => e_,
    $k: () => eT,
    z4: () => ec,
    ys: () => eu,
    J$: () => em,
    PK: () => eC,
    Nc: () => eI,
    Pr: () => V,
    l6: () => B,
}),
    n(667532),
    n(321073));
var i = n(474090),
    r = n(582128),
    a = n(284009),
    s = n.n(a),
    l = n(536637),
    o = n.n(l);
n(855986);
var d = n(975807),
    c = n(366999),
    u = n(930767),
    _ = n(626584),
    E = n(981088),
    A = n(367888),
    f = n(678022),
    h = n(832946),
    I = n(287809),
    p = n(615405),
    m = n(295405),
    T = n(97352),
    g = n(166403),
    S = n(739508),
    N = n(5377),
    C = n(927813),
    O = n(683760),
    R = n(219882),
    L = n(652215),
    y = n(682901),
    D = n(580630),
    b = n(88001),
    v = n(818348),
    P = n(792996),
    M = n(50302),
    U = n(107198);
let w = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    G = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    x = new _.A("PremiumUtils.tsx");
function k(e) {
    return e.items.find((e) => y.JM.has(e.planId));
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = m.A.defaultPaymentSourceId ?? void 0,
        s = g.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        H(e, t, n, { paymentSourceId: a, currency: i }, r)
    );
}
function B(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function V(e, t, n) {
    let i = r.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return r.useMemo(
        () => ({
            priceOptions: B(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function H(e) {
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
    if (null != T.A.get(e)) {
        let i = L.lid.DEFAULT;
        n ? (i = L.lid.GIFT) : t && (i = L.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: L.lid.DEFAULT },
                r = j(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    x.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let a = r.find((e) => e.currency === i.toLowerCase());
                return null != a
                    ? a
                    : null != t
                      ? j(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: a, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                r &&
                    (0, S.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, S.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function j(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: L.lid.DEFAULT },
        i = (function (e, t) {
            let n = T.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, S.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    x.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`)
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            (x.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                x.info(`prices: ${r}`));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, S.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        x.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, S.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function W(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function Y(e, t, n) {
    let r,
        a,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        l = (0, A._1)(e);
    null != l && (r = y.hd[l.planId].premiumType);
    let o = (0, i.CC)(r, y.PremiumTypes.TIER_0),
        d = (0, i.CC)(r, y.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        ((a = y.pW.has(i.planId) ? d : !y.JM.has(i.planId) && o),
            (e = void 0 === n ? F(i.planId, a, !1, t) : H(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity));
    }
    return W(s);
}
function K(e, t, n, i) {
    return (
        null === t && (s()(null !== e, "Subscription can't be null"), (t = [])), Y(null !== e ? ew(e, t) : eG(t), n, i)
    );
}
function $(e) {
    switch (e) {
        case y.Ff.MONTH:
            return P.intl.string(P.t.FPybU7);
        case y.Ff.YEAR:
            return P.intl.string(P.t.tfqrhj);
        case y.Ff.DAY:
        case y.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function X(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : y.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case y.WT.MONTH:
                if (i > 1)
                    return r
                        ? P.intl.formatToPlainString(M.default.G1Q40N, { intervalCount: i })
                        : P.intl.formatToPlainString(P.t["0UlZnH"], { intervalCount: i });
                let s = P.intl.formatToPlainString(a === y.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.FPybU7),
                });
                return r ? s : P.intl.string(P.t.Mh9bTt);
            case y.WT.YEAR:
                let l = P.intl.formatToPlainString(a === y.PremiumTypes.TIER_0 ? P.t.NPKsLz : P.t.poEovT, {
                    timeInterval: P.intl.string(P.t.tfqrhj),
                });
                return r ? l : P.intl.string(P.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case y.WT.MONTH:
            if (1 !== i) return P.intl.formatToPlainString(P.t["0UlZnH"], { intervalCount: i });
            return P.intl.string(P.t.DKzs96);
        case y.WT.YEAR:
            return P.intl.string(P.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function z(e) {
    switch (e) {
        case y.WT.MONTH:
            return P.intl.string(P.t.FPybU7);
        case y.WT.YEAR:
            return P.intl.string(P.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function q(e) {
    let t = y.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, S.pM)(n, { tags: { planId: e } }), n);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case y.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? P.intl.format(P.t.TZXHNj, { duration: i })
                : n
                  ? P.intl.string(P.t["81iAgs"])
                  : P.intl.string(P.t["0efVPy"]);
        case y.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? P.intl.format(P.t.eqRhC7, { duration: i })
                : n
                  ? P.intl.string(P.t.UvzqY1)
                  : P.intl.string(P.t.eoVuBn);
        case y.gD.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t["g/dH5g"]) : P.intl.string(P.t["7O6qSq"]);
        case y.gD.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.pdZJaq) : P.intl.string(P.t.Md5xbi);
        case y.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? P.intl.format(P.t.aI6QXz, { duration: i })
                : n
                  ? P.intl.string(P.t.SmVbHc)
                  : P.intl.string(P.t.FKYNC6);
        case y.gD.PREMIUM_GROUP_MONTH:
            return n
                ? P.intl.string(P.t.SmVbHc)
                : P.intl.formatToPlainString(U.default["8bPDtb"], { premiumGroupProductName: (0, b.DP)() });
        case y.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? P.intl.format(P.t["1wBcPi"], { duration: i })
                : n
                  ? P.intl.string(P.t.JIq4O1)
                  : P.intl.string(P.t["cfu/5d"]);
        case y.gD.PREMIUM_3_MONTH_TIER_2:
            return P.intl.string(P.t.wCbINr);
        case y.gD.PREMIUM_6_MONTH_TIER_2:
            return P.intl.string(P.t["e3/ArU"]);
        case y.gD.PREMIUM_MONTH_GUILD:
            return n ? P.intl.string(P.t["6ZR3By"]) : P.intl.string(P.t["h80cx/"]);
        case y.gD.PREMIUM_YEAR_GUILD:
            return n ? P.intl.string(P.t.YDpAzZ) : P.intl.string(P.t.ZHkls0);
        case y.gD.PREMIUM_3_MONTH_GUILD:
            return P.intl.string(P.t.EZHHB6);
        case y.gD.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.X2KDO2);
        case y.gD.PREMIUM_MONTH_LEGACY:
            return P.intl.string(P.t.PD6k79);
        case y.gD.PREMIUM_YEAR_LEGACY:
            return P.intl.string(P.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, S.pM)(r, { tags: { planId: e } }), r);
}
function Z(e) {
    switch (e) {
        case y.pe.TIER_0:
            return P.intl.string(P.t["t9uG/o"]);
        case y.pe.TIER_1:
            return P.intl.string(P.t.FSOz78);
        case y.pe.TIER_2:
            return P.intl.string(P.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, S.pM)(t, { tags: { skuId: e } }), t);
}
function J(e) {
    let t = y.hd[e]?.premiumType,
        n = null != t ? y.Mr[t] : null;
    if (null != n) return P.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, S.pM)(i, { tags: { planId: e } }), i);
}
function ee(e, t) {
    if (e === y.WT.MONTH) return t;
    if (e === y.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case y.PremiumTypes.TIER_0:
            return t ? "Basic" : P.intl.string(P.t["t9uG/o"]);
        case y.PremiumTypes.TIER_1:
            return t ? "Classic" : P.intl.string(P.t.FSOz78);
        case y.PremiumTypes.TIER_2:
            return P.intl.string(P.t.lG6a5x);
    }
}
function en(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoiceWithoutEntitlementsPreview: l,
            renewalInvoiceWithEntitlementsPreview: c,
            hasFractionalPremiumWithSub: u,
            fractionalPremiumInfo: _,
        } = e,
        E = y.hd[n],
        A = eW(F(E.id), E.interval),
        f = null != c && 0 === c.subtotal,
        h =
            eN(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !I.default.getCurrentUser()?.hasFreePremium() &&
                !f),
        p = null != i && null == t.paymentGateway,
        m = t.status === L.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === L.lT7.OPEN,
        T = h ? L.Dmq.CANCELED : m ? L.Dmq.UNPAID : t.status,
        g = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        S = 2 + (r ? el(t.additionalPlans) : 0),
        C = p
            ? g
                ? P.intl.format(P.t["cd+hqB"], { price: i })
                : P.intl.format(P.t.NUkcpF, { price: i })
            : P.intl.string(P.t.zYx3Y6),
        O = p
            ? g
                ? P.intl.format(P.t.VsKcFB, { price: i })
                : P.intl.format(P.t.hJ5xEX, { price: i })
            : P.intl.string(P.t["8rSipI"]),
        R = p
            ? g
                ? P.intl.format(P.t["jRy6/J"], { price: i, num: S })
                : P.intl.format(P.t.tTNE8M, { price: i, num: S })
            : P.intl.format(P.t["U+z/HJ"], { num: S });
    switch (n) {
        case y.gD.PREMIUM_MONTH_TIER_0:
        case y.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case L.Dmq.CANCELED:
                    return p
                        ? g
                            ? P.intl.format(P.t["USi/nc"], { price: i })
                            : P.intl.format(P.t["FS//l2"], { price: i })
                        : P.intl.string(P.t.JshLzq);
                case L.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? P.intl.format(P.t["5mv+2i"], { price: i })
                            : P.intl.format(P.t.nkAEfZ, { price: i })
                        : P.intl.format(P.t.SsLIXS, {});
                case L.Dmq.UNPAID:
                    return P.intl.format(P.t.cmkbFB, {});
                case L.Dmq.PAUSE_PENDING:
                    let D = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != D
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: D })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case L.Dmq.PAUSED:
                    if (u) return C;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case L.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, N.i$)(eE(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return C;
            }
        case y.gD.PREMIUM_MONTH_TIER_1:
        case y.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case L.Dmq.CANCELED:
                    return p
                        ? g
                            ? P.intl.format(P.t.cXy8Bp, { price: i })
                            : P.intl.format(P.t["C/XsHt"], { price: i })
                        : P.intl.string(P.t.K6tYFa);
                case L.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? P.intl.format(P.t.HBkIBi, { price: i })
                            : P.intl.format(P.t.ZsO1Sx, { price: i })
                        : P.intl.format(P.t["0+/WH7"], {});
                case L.Dmq.UNPAID:
                    return P.intl.format(P.t.McIzwj, {});
                case L.Dmq.PAUSE_PENDING:
                    let b = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != b
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: b })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case L.Dmq.PAUSED:
                    if (u) return O;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case L.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, N.i$)(eE(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return O;
            }
        case y.gD.PREMIUM_MONTH_TIER_2:
        case y.gD.PREMIUM_YEAR_TIER_2:
        case y.gD.PREMIUM_3_MONTH_TIER_2:
        case y.gD.PREMIUM_6_MONTH_TIER_2:
        case y.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case L.Dmq.CANCELED:
                    return p
                        ? g
                            ? P.intl.format(P.t.xoFgRh, { price: i, num: S })
                            : P.intl.format(P.t.nXdbKo, { price: i, num: S })
                        : P.intl.format(P.t.EcSdRH, { num: S });
                case L.Dmq.ACCOUNT_HOLD:
                    return p
                        ? g
                            ? P.intl.format(P.t["5C/0QG"], { price: i, num: S })
                            : P.intl.format(P.t.xfYkhu, { price: i, num: S })
                        : P.intl.format(P.t.ivjxcn, { num: S });
                case L.Dmq.UNPAID:
                    return P.intl.format(P.t["0HopYf"], { num: S });
                case L.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? P.intl.format(P.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : P.intl.format(P.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case L.Dmq.PAUSED:
                    if (u) return R;
                    return P.intl.format(P.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case L.Dmq.BILLING_RETRY:
                    return P.intl.format(P.t["IlJ/HV"], { endDate: o()(t.currentPeriodStart).add(7, "days").toDate() });
                case L.Dmq.PAST_DUE:
                    return P.intl.format(P.t["d+0vwo"], {
                        endDate: (0, N.i$)(eE(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === y.gD.PREMIUM_YEAR_TIER_2
                            ? P.intl.format(P.t.z2oQtA, {
                                  percent: s?.percentage ?? 20,
                                  regularPrice: A,
                                  renewalDate: eA(t, _),
                              })
                            : g
                              ? P.intl.formatToPlainString(P.t["3ZiutU"], {
                                    percent: s?.percentage ?? 30,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? 1,
                                })
                              : P.intl.formatToPlainString(P.t["G6+XOT"], {
                                    percent: s?.percentage ?? 30,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? 1,
                                })
                        : R;
            }
        default:
            throw Error(`Invalid planId ${n}`);
    }
}
function ei(e) {
    var t, n, i;
    let r,
        a,
        {
            renewalInvoicePreview: l,
            renewalInvoiceWithEntitlementsPreview: o,
            subscription: d,
            planId: c,
            includePremiumGuilds: u = !1,
            hasDiscountApplied: _ = !1,
            activeDiscountInfo: E,
            hasFractionalPremiumWithSub: A = !1,
            fractionalPremiumInfo: f,
        } = e,
        h = T.A.get(c);
    return (
        s()(null != h, "Missing plan"),
        en({
            subscription: d,
            planId: h.id,
            price:
                ((t = l),
                (n = d),
                (i = h),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? H(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, D.CE)((0, D.$g)(a, t.currency), i.interval, i.intervalCount)),
            includePremiumGuilds: u,
            hasDiscountApplied: _,
            activeDiscountInfo: E,
            renewalInvoiceWithoutEntitlementsPreview: l,
            renewalInvoiceWithEntitlementsPreview: o,
            hasFractionalPremiumWithSub: A,
            fractionalPremiumInfo: f,
        })
    );
}
function er(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, h.m1)(t) ? null : Q(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return y.pW.has(t);
        }),
        a =
            r?.planId === y.gD.PREMIUM_MONTH_GUILD
                ? P.t.Pi5yMJ
                : r?.planId === y.gD.PREMIUM_YEAR_GUILD
                  ? P.t.H4KPuV
                  : null,
        s = null != a ? P.intl.formatToPlainString(a, { num: r?.quantity }) : void 0;
    if (null != i && null != s)
        return P.intl.formatToPlainString(P.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function ea(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i, isThreeMonthGiftingEnabled: r = !1 } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === y.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case y.pe.TIER_0:
            s = [y.gD.PREMIUM_YEAR_TIER_0, y.gD.PREMIUM_MONTH_TIER_0];
            break;
        case y.pe.TIER_1:
            s = [y.gD.PREMIUM_MONTH_TIER_1];
            break;
        case y.pe.TIER_2:
            s = r
                ? [y.gD.PREMIUM_YEAR_TIER_2, y.gD.PREMIUM_3_MONTH_TIER_2, y.gD.PREMIUM_MONTH_TIER_2]
                : [y.gD.PREMIUM_YEAR_TIER_2, y.gD.PREMIUM_MONTH_TIER_2];
            break;
        case y.pe.GUILD:
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
function es(e) {
    let t = y.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function el(e) {
    let t = T.A.getPlanIdsForSkus([eK(y.pe.GUILD)]);
    s()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eo = new Set([
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
function ed(e) {
    return eo.has(e);
}
function ec(e) {
    return y.pW.has(e);
}
function eu(e) {
    return ed(e) || ec(e);
}
function e_(e) {
    return null != e && e === y.gD.PREMIUM_GROUP_MONTH;
}
function eE(e) {
    if (e.isPurchasedViaApple && e.metadata?.apple_grace_period_expires_date != null) {
        let t = o()(e.metadata.apple_grace_period_expires_date);
        return { days: o().duration(t.diff(e.currentPeriodStart)).days(), expiresDate: t };
    }
    if (
        e.isPurchasedViaGoogle &&
        e.metadata?.google_grace_period_expires_date != null &&
        e.metadata?.google_original_expires_date != null
    ) {
        let t = o()(e.metadata.google_grace_period_expires_date),
            n = o()(e.metadata.google_original_expires_date);
        return { days: o().duration(t.diff(n)).days(), expiresDate: t };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? 28 : 30;
        return { days: t, expiresDate: o()(e.currentPeriodStart).add(t, "days") };
    }
    if (e.metadata?.grace_period_expires_date != null)
        return {
            days: o()(e.metadata?.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: o()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? 3 : 30;
        return { days: t, expiresDate: o()(e.currentPeriodStart).add(t, "days") };
    }
}
function eA(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return (null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = ef(n, t.unactivatedUnits)), n);
}
function ef(e, t, n, i) {
    let r = o()(i ? void 0 : e);
    if (t.length > 0) {
        let e = ez(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function eh(e) {
    let t = ez(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === y.xc.NONE)) return "";
    let n = { days: P.t.fYmirx, hours: P.t["C3RO+g"], minutes: P.t.r77oHc },
        i = (0, c.Vb)((0, N.Tf)(0, t * C.A.Millis.HOUR));
    return (0, N.uN)(i, n);
}
function eI(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === L.Dmq.PAST_DUE;
}
function ep(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? P.intl.string(P.t["0rzJ4J"]) : P.intl.string(P.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = P.intl.string(P.t.a9Mdb3)),
        t
    );
}
function em(e) {
    if (null == e) return !1;
    let t = m.A.getPaymentSource(e);
    return null != t && v.AD.has(t.type);
}
function eT(e) {
    return e.isPurchasedExternally
        ? e.status === L.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = el(n);
              return 0 === (null != t ? el(t.additionalPlans) : null) && 0 !== r ? L.Dmq.CANCELED : i;
          })(e) === L.Dmq.CANCELED;
}
function eg(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: l } = e,
        { planId: o, additionalPlans: c, renewalMutations: u } = n,
        _ = T.A.get(o);
    s()(null != _, "Missing plan");
    let E = el(c),
        A = u?.additionalPlans != null ? el(u.additionalPlans) : E,
        f = Math.max(0, E - A),
        h = A > 0 && f > 0,
        I = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => y.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = h ? A : E;
            try {
                e = eO(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                I = !0;
            }
        }
        t = null != e ? (0, D.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || I,
        m = null != t ? (0, D.CE)(t, _.interval, _.intervalCount) : "",
        g = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (eT(n))
        return p
            ? P.intl.format(P.t["3/WTrI"], { quantity: E })
            : g
              ? P.intl.format(P.t["0ozBSB"], { quantity: E, rate: m })
              : P.intl.format(P.t["yjsv/s"], { quantity: E, rate: m });
    switch (n.status) {
        case L.Dmq.ACCOUNT_HOLD:
            return p
                ? P.intl.format(P.t.Nlf3nc, { quantity: E, boostQuantity: E })
                : g
                  ? P.intl.format(P.t.oiRy7v, { quantity: E, boostQuantity: E, rate: m })
                  : P.intl.format(P.t["0QxOAi"], { quantity: E, boostQuantity: E, rate: m });
        case L.Dmq.PAUSE_PENDING:
        case L.Dmq.PAUSED:
            if (null != l && !l.isFractionalPremiumActive) return P.intl.string(P.t.CduWAm);
            return P.intl.format(P.t["5iud9s"], { quantity: E });
        case L.Dmq.PAST_DUE:
            if (n.isBoostOnly)
                return P.intl.format(P.t["d+0vwo"], {
                    endDate: (0, N.i$)(eE(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, d.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (h) {
                if (p) return P.intl.format(P.t["krRy+d"], { activeQuantity: A, pendingQuantity: f });
                let e = g ? P.t["4nc7+E"] : P.t.BmaudS;
                return P.intl.format(e, { activeQuantity: A, pendingQuantity: f, rate: m });
            }
            return p
                ? P.intl.format(P.t["5iud9s"], { quantity: E })
                : g
                  ? P.intl.format(P.t.eDwrLA, { quantity: E, rate: m })
                  : P.intl.format(P.t.ijSDcI, { quantity: E, rate: m });
    }
}
function eS(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    if (null != t)
        try {
            i = H(e.id, !1, r, t, a);
        } catch {
            i = F(e.id, !1, r, void 0, a);
        }
    else i = F(e.id, !1, r, void 0, a);
    let s = (0, D.$g)(i.amount, i.currency);
    return (e.currency !== v.Yr.USD && !0 === n && (s = s.concat("*")), s);
}
function eN(e) {
    let { status: t, renewalMutations: n } = e;
    return t === L.Dmq.CANCELED || (null != n && (0, h.m1)(n.planId) && !e.isPurchasedExternally);
}
function eC(e) {
    return e === L.Dmq.PAST_DUE || e === L.Dmq.ACCOUNT_HOLD || e === L.Dmq.BILLING_RETRY;
}
function eO(e, t, n, r) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: p.A.ipCountryCodeWithFallback, currency: n },
        s = T.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    let l = T.A.getForSkuAndInterval(eK(y.pe.GUILD), s.interval, s.intervalCount);
    if (null == l) {
        let t = Error("Unsupported plan");
        throw ((0, S.pM)(t, { tags: { planId: e } }), t);
    }
    return H(l.id, (0, i.ki)(r), !1, a);
}
function eR(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case y.gD.PREMIUM_MONTH_TIER_0:
                return P.intl.string(P.t["0ggVqN"]);
            case y.gD.PREMIUM_YEAR_TIER_0:
                return P.intl.string(P.t["jm+ZQw"]);
            case y.gD.PREMIUM_MONTH_TIER_1:
                return P.intl.string(P.t.uph4Jx);
            case y.gD.PREMIUM_YEAR_TIER_1:
                return P.intl.string(P.t["D/l7Yt"]);
            case y.gD.PREMIUM_MONTH_TIER_2:
            case y.gD.PREMIUM_GROUP_MONTH:
                return P.intl.string(P.t["5l1MuV"]);
            case y.gD.PREMIUM_YEAR_TIER_2:
                return P.intl.string(P.t.G0mISV);
        }
    switch (i) {
        case y.gD.PREMIUM_MONTH_TIER_0:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["/G3aKw"]);
        case y.gD.PREMIUM_YEAR_TIER_0:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["2eQpsL"]);
        case y.gD.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t.gueLg5);
        case y.gD.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["MhH/vW"]);
        case y.gD.PREMIUM_MONTH_TIER_2:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t.LQVQIq);
        case y.gD.PREMIUM_GROUP_MONTH:
            return P.intl.formatToPlainString(U.default.LwdrNi, { premiumGroupProductName: (0, b.DP)() });
        case y.gD.PREMIUM_YEAR_TIER_2:
            return n ? P.intl.string(P.t.cRCCJ3) : P.intl.string(P.t["0nfg1x"]);
        case y.gD.PREMIUM_3_MONTH_TIER_2:
        case y.gD.PREMIUM_6_MONTH_TIER_2:
            return P.intl.formatToPlainString(P.t.BCD4fT, { intervalCount: t.intervalCount });
        case y.gD.NONE_MONTH:
        case y.gD.NONE_YEAR:
        case y.gD.NONE_3_MONTH:
        case y.gD.NONE_6_MONTH:
        case y.gD.PREMIUM_MONTH_GUILD:
        case y.gD.PREMIUM_YEAR_GUILD:
        case y.gD.PREMIUM_3_MONTH_GUILD:
        case y.gD.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, S.pM)(r, { tags: { planId: i } }), r);
}
function eL(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = T.A.get(t);
    return (s()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount });
}
function ey() {
    let e = v.Yr.USD;
    try {
        e = F(y.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eD(e) {
    let { intervalType: t = y.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case y.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? P.intl.formatToPlainString(P.t.fRNBRX, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EIpHEj, { weeks: n / 7 });
            return i
                ? P.intl.formatToPlainString(P.t["6Cdzoy"], { days: n })
                : P.intl.formatToPlainString(P.t["kbBj/h"], { days: n });
        case y.WT.MONTH:
            return i
                ? P.intl.formatToPlainString(P.t.x5MgxS, { months: n })
                : P.intl.formatToPlainString(P.t["4SEnCZ"], { months: n });
        case y.WT.YEAR:
            return i
                ? P.intl.formatToPlainString(P.t["h+63yl"], { years: n })
                : P.intl.formatToPlainString(P.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eb(e) {
    let { intervalType: t = y.WT.MONTH, intervalCount: n = 1 } = e,
        i = ey(),
        r = (0, D.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case y.WT.DAY:
            if (n >= 7 && n % 7 == 0) return P.intl.formatToPlainString(P.t.C6i5Jt, { weeks: n / 7, price: r });
            return P.intl.formatToPlainString(P.t.cR9ifw, { days: n, price: r });
        case y.WT.MONTH:
            return P.intl.formatToPlainString(P.t["8FZfNo"], { months: n, price: r });
        case y.WT.YEAR:
            return P.intl.formatToPlainString(P.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ev(e, t) {
    if (null != e && null != e.subscriptionTrial && e.subscriptionTrial.skuId === t) {
        let t = e.subscriptionTrial;
        return eb({ intervalType: t.interval, intervalCount: t.intervalCount });
    }
    return null;
}
function eP(e) {
    let { intervalType: t = y.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case y.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? P.intl.formatToPlainString(P.t.iVZYyl, { weeks: n / 7 })
                    : P.intl.formatToPlainString(P.t.EmoBD2, { weeks: n / 7 });
            return i
                ? P.intl.formatToPlainString(P.t.jzH70Z, { days: n })
                : P.intl.formatToPlainString(P.t["k2UNz+"], { days: n });
        case y.WT.MONTH:
            return i
                ? P.intl.formatToPlainString(P.t.erUSmA, { months: n })
                : P.intl.formatToPlainString(P.t.kridzK, { months: n });
        case y.WT.YEAR:
            return i
                ? P.intl.formatToPlainString(P.t.IfYQVC, { years: n })
                : P.intl.formatToPlainString(P.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eM(e, t) {
    switch (e) {
        case L.kM_.APPLE_PARTNER:
        case L.kM_.APPLE_ADVANCED_COMMERCE:
        case L.kM_.APPLE:
            return w[t];
        case L.kM_.GOOGLE:
            return G[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function eU(e, t) {
    return (0, i.ki)(e) || eC(t?.status);
}
function ew(e, t) {
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
function eG(e) {
    return e.filter((e) => !y.JM.has(e.planId));
}
function ex(e, t, n, i) {
    if (!i.has(t))
        throw new u.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
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
function ek(e, t) {
    return ex(e, t, 1, y.JM);
}
function eF(e, t, n) {
    return ex(e, n, t, y.pW);
}
function eB(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => y.JM.has(e.planId));
    if (null != t) {
        let n = T.A.get(t.planId);
        (s()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = T.A.get(e.planId);
                if ((s()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = T.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return (s()(null != r, "Missing planForInterval"), { ...e, planId: r.id });
            })));
    }
    return e;
}
function eV(e) {
    return null == e ? null : e.items.find((e) => y.pW.has(e.planId));
}
function eH(e) {
    let t = null != e ? k(e) : null;
    return null != t ? es(t.planId) : null;
}
function ej(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function eW(e, t) {
    let n = (0, D.$g)(e.amount, e.currency),
        i = z(t);
    return `${n}/${i}`;
}
function eY(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = H(e.id);
    return (0, D.CE)((0, D.$g)(n.amount, n.currency), e.interval, t);
}
function eK(e) {
    return e;
}
function e$(e) {
    return "isNitroLocked" in e;
}
function eX(e) {
    var t;
    let n = y.Eg;
    if (null != (t = e) && "trialId" in t)
        switch (e.trialId) {
            case y.Tt:
                return y.h7;
            case y.yo:
                return y.CA;
        }
    else;
    return n;
}
function ez(e) {
    return eq(e.map((e) => e.skuId));
}
function eq(e) {
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
function eQ(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = y.En[t.skuId];
    return null == r ? null : H(r, !1, n, i);
}
function eZ(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = y.XE[t];
    if (null != r) {
        let e = e0(r, n, i);
        null != e && (a = e);
    }
    return a;
}
function eJ(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === y.WT.DAY || (t.interval === y.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = eQ({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === y.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function e0(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { interval: a, intervalCount: s } = e;
    if (a !== y.WT.MONTH && a !== y.WT.YEAR) return;
    let l = ee(a, s);
    if (!(l <= 1)) {
        try {
            if (((t = eQ({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = H(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (t.amount * l)));
    }
}
function e1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = eJ({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = H(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function e2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== y.WT.YEAR) return null;
    let i = H(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function e3(e) {
    return null == e ? 0 : Math.max((0, N.m_)(new Date(), new Date(e)), 0);
}
let e6 = Object.freeze({
    isNewUser: ej,
    isPremiumAtLeast: i.CC,
    isPremium: i.ki,
    isPremiumExactly: i.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: H,
    getDefaultPrice: F,
    getInterval: function (e) {
        let t = y.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, S.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: X,
    getIntervalStringAsNoun: z,
    getPremiumType: q,
    getTierDisplayNameByPlanId: J,
    getDisplayName: Q,
    getPremiumPlanOptions: ea,
    formatInterval: function (e) {
        if (e === y.WT.YEAR) return P.intl.string(P.t.tfqrhj);
        if (e === y.WT.MONTH) return P.intl.string(P.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: en,
    isPremiumSku: function (e) {
        return e === y.pe.TIER_0 || e === y.pe.TIER_1 || e === y.pe.TIER_2;
    },
    getIntervalMonths: ee,
    getUserMaxFileSize: function (e) {
        return null == e
            ? L.TbF
            : e.isStaff() && !O.A.hasPremiumTypeOverride(e)
              ? L.mu
              : null != e.premiumType && (0, i.ki)(e)
                ? e.premiumType === y.PremiumTypes.TIER_2
                    ? (0, R.ew)({ location: "getUserMaxFileSize" })
                    : y.f5[e.premiumType].fileSize
                : L.TbF;
    },
    getSkuIdForPlan: es,
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
        return 2 * (q(e) === y.PremiumTypes.TIER_2);
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
                          startsAt: o()(0),
                          endsAt: o()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: o()(0),
                          unactivatedUnits: [],
                      },
            a = null !== n && e.status === L.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, D.$g)(
                      a.invoiceItems
                          .filter((e) => y.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      a.currency,
                  )
                : (0, D.$g)(a.total, a.currency);
        if (I.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return P.intl.format(P.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === L.Dmq.CANCELED) return P.intl.format(P.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === L.Dmq.PAUSE_PENDING)
            return P.intl.format(P.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === L.Dmq.PAUSED)
            return r.fractionalState !== y.xc.NONE
                ? P.intl.format(P.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? P.intl.format(P.t.KTYQCg, { planName: P.intl.string(P.t.Ipxkog), price: s })
                      : P.intl.string(P.t.fMz6Lg)
                  : i
                    ? P.intl.format(P.t.zcgtzf, {
                          planName: P.intl.string(P.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : P.intl.format(P.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === L.Dmq.PAST_DUE) {
            let t = eE(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = o()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = o()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? P.intl.format(P.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: v.qm[e.paymentGateway],
                      paymentSourceLink: eM(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : P.intl.format(P.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        if (e.status === L.Dmq.BILLING_RETRY || e.status === L.Dmq.ACCOUNT_HOLD) {
            let t = o()(e.currentPeriodStart)
                .add(e.status === L.Dmq.BILLING_RETRY ? 7 : 30, "days")
                .toDate();
            return e.isPurchasedExternally
                ? e.isPurchasedViaGoogle && (0, E.xv)()
                    ? P.intl.format(P.t["IlJ/HV"], { endDate: t })
                    : P.intl.format(P.t["dtcxw+"], {
                          endDate: t,
                          paymentGatewayName: v.qm[e.paymentGateway],
                          paymentSourceLink: eM(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                : P.intl.format(P.t.EMTLOT, { endDate: t, price: s });
        } else {
            var l;
            if (null != (l = e).paymentSourceId && em(l.paymentSourceId))
                return P.intl.format(P.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === L.Dmq.UNPAID) return P.intl.format(P.t.CzTKom, { maxProcessingTimeInDays: 14 });
            if (e.isPurchasedExternally)
                return P.intl.format(P.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: v.qm[e.paymentGateway],
                    subscriptionManagementLink: eM(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = ef(n, r.unactivatedUnits)),
                i
                    ? P.intl.format(P.t.Vl3cED, { planName: P.intl.string(P.t.Ipxkog), renewalDate: n, price: s })
                    : P.intl.format(P.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: eA,
    extendDateWithUnconsumedFractionalPremium: ef,
    getUnactivatedFractionalPremiumDurationString: eh,
    isSwitchingPlansDisabled: eI,
    getSwitchingPlansDisabledMessage: ep,
    isNoneSubscription: h.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === L.Dmq.CANCELED || e.status === L.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ed(t);
        });
        return null == i ||
            (0, h.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === L.Dmq.CANCELED || e.status === L.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
                let { subscriptionPlanId: t } = e;
                return ed(t);
            }),
            r = e.isPurchasedExternally && null != e.renewalMutations;
        return ((null == i || (0, h.m1)(i.subscriptionPlanId)) && !r && (n = L.Dmq.CANCELED), n);
    },
    isBaseSubscriptionCanceled: eN,
    getPremiumGuildIntervalPrice: eO,
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
    getBillingReviewSubheader: eR,
    getIntervalForInvoice: eL,
    getPremiumPlanItem: k,
    getGuildBoostPlanItem: eV,
    isBoostOnlySubscription: function (e) {
        return null != e && null == k(e) && null != eV(e);
    },
    getPremiumSkuIdForSubscription: eH,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = k(e);
            if (null != t) return q(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: ez,
    castPremiumSubscriptionAsSkuId: eK,
    calculateDiscountPercentageForPlan: e0,
    calculateYearlyPlanDollarSavingsAmount: e1,
    calculateYearlyPlanMonthlyRateAmount: e2,
    getDaysSincePremium: e3,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, N.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: f.wK,
    canUseEmojisEverywhere: f.vB,
    canUseSoundboardEverywhere: f.MK,
    canUseCustomCallSounds: f.tx,
    canUploadLargeFiles: f.ab,
    canUseBadges: f.QB,
    canUseHighVideoUploadQuality: f.hF,
    canEditDiscriminator: f.Vj,
    hasBoostDiscount: f.Hd,
    canUseAnimatedAvatar: f.iU,
    canInstallPremiumApplications: f.QS,
    canUseIncreasedMessageLength: f.JZ,
    canUseIncreasedGuildCap: f.hw,
    canRedeemPremiumPerks: f.zG,
    canUsePremiumProfileCustomization: f.tn,
    canUsePremiumAppIcons: f.CZ,
    canUsePremiumGuildMemberProfile: f.jE,
    canUseClientThemes: f.Zg,
    canStreamQuality: f.yF,
    canUseQuestOrbMultiplier: f.Sw,
    hasFreeBoosts: f.F6,
    canUseCustomStickersEverywhere: f.PL,
    canUseCustomBackgrounds: f.Qb,
    canUseCollectibles: f.Pi,
    canUseMonthlyOrbs: f.nm,
    canUseShopDiscounts: f._A,
    canUseMoreQuestOrbs: f.xd,
    formatPriceString: eW,
    StreamQuality: f.E2,
});
