(n.d(t, {
    VA: () => e1,
    z_: () => e3,
    XN: () => e6,
    mH: () => e$,
    qn: () => eV,
    Ay: () => e7,
    pb: () => W,
    _e: () => eh,
    re: () => eM,
    _J: () => eK,
    FY: () => ev,
    LE: () => eP,
    tS: () => eb,
    ji: () => eA,
    ff: () => eL,
    To: () => e5,
    Rr: () => eD,
    JM: () => B,
    Ke: () => X,
    Mn: () => J,
    Zw: () => Z,
    OU: () => ea,
    tW: () => eU,
    sS: () => eN,
    iv: () => eJ,
    Ge: () => ey,
    D8: () => z,
    FJ: () => q,
    UC: () => K,
    aE: () => eG,
    Pg: () => ek,
    Om: () => eB,
    GX: () => eF,
    ee: () => ex,
    EJ: () => h.EJ,
    bx: () => eo,
    e1: () => eq,
    nB: () => er,
    Uf: () => eS,
    EL: () => F,
    Tm: () => es,
    aZ: () => ej,
    m6: () => Q,
    Dd: () => en,
    y8: () => j,
    L_: () => e0,
    $Q: () => Y,
    U8: () => $,
    Q8: () => em,
    RH: () => ee,
    kX: () => eI,
    Of: () => ew,
    ki: () => eC,
    mv: () => eW,
    Em: () => eX,
    TW: () => i.ki,
    CC: () => i.CC,
    xq: () => ec,
    YE: () => i.YE,
    Zb: () => eE,
    $k: () => eg,
    z4: () => eu,
    ys: () => e_,
    J$: () => eT,
    PK: () => eO,
    Nc: () => ep,
    nK: () => ez,
    Pr: () => H,
    l6: () => V,
}),
    n(667532),
    n(321073));
var i = n(474090),
    r = n(582128),
    a = n(284009),
    s = n.n(a),
    l = n(536637),
    o = n.n(l),
    d = n(855986),
    c = n(975807),
    u = n(366999),
    _ = n(930767),
    E = n(626584),
    A = n(981088),
    f = n(367888),
    h = n(678022),
    I = n(832946),
    p = n(287809),
    m = n(615405),
    T = n(295405),
    g = n(97352),
    S = n(166403),
    N = n(949192),
    C = n(5377),
    O = n(927813),
    R = n(683760),
    L = n(219882),
    y = n(652215),
    D = n(682901),
    b = n(580630),
    v = n(88001),
    P = n(818348),
    M = n(792996),
    U = n(50302),
    w = n(107198);
let G = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    x = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    k = new E.A("PremiumUtils.tsx");
function F(e) {
    return e.items.find((e) => D.JM.has(e.planId));
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = T.A.defaultPaymentSourceId ?? void 0,
        s = S.A.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (a = s.paymentSourceId),
        j(e, t, n, { paymentSourceId: a, currency: i }, r)
    );
}
function V(e, t) {
    return null == t ? e : { ...e, contextPlanPrices: Object.fromEntries(t.map((e) => [e.id, e.price])) };
}
function H(e, t, n) {
    let i = r.useMemo(
        () =>
            null == t || null == t.checkoutContext || null == t.checkoutContext.available_plans
                ? null
                : t.checkoutContext.available_plans,
        [t],
    );
    return r.useMemo(
        () => ({
            priceOptions: V(e, i),
            planPricesLoading: null != e.currency && null != t && t.currency !== e.currency && null == n,
        }),
        [e, t, i, n],
    );
}
function j(e) {
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
    if (null != g.A.get(e)) {
        let i = y.lid.DEFAULT;
        n ? (i = y.lid.GIFT) : t && (i = y.lid.PREMIUM_TIER_1);
        let l = (function (e) {
            let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: y.lid.DEFAULT },
                r = W(e, { paymentSourceId: t, purchaseType: n });
            if (
                (0 === r.length &&
                    k.warn(`No prices found for planId: ${e}, paymentSourceId: ${t}, purchaseType: ${n}`),
                null != i)
            ) {
                let a = r.find((e) => e.currency === i.toLowerCase());
                return null != a
                    ? a
                    : null != t
                      ? W(e, { purchaseType: n }).find((e) => e.currency === i.toLowerCase())
                      : void 0;
            }
            return r[0];
        })(e, { paymentSourceId: a, purchaseType: i, currency: s });
        if (null == l) {
            let t = Error("Couldn't find price");
            throw (
                r &&
                    (0, N.pM)(t, {
                        extra: { paymentSourceId: a },
                        tags: { purchaseType: i.toString(), planId: e, currency: s ?? "unknown" },
                    }),
                t
            );
        }
        return l;
    }
    let o = Error("Plan not found");
    throw (r && (0, N.pM)(o, { tags: { planId: e, currency: s ?? "unknown" }, extra: { ...i, isGift: n } }), o);
}
function W(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: y.lid.DEFAULT },
        i = (function (e, t) {
            let n = g.A.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw ((0, N.pM)(n, { tags: { planId: e, purchaseType: t.toString() } }), n);
            }
            if (null == n.prices) throw Error(`No prices returned for ${e}, is your user in the experiment?`);
            let i = n.prices[t];
            if (null == i)
                throw (
                    k.info(`Purchase types: ${JSON.stringify(Object.keys(n.prices))}`),
                    Error(`No prices returned for purchase type ${t} for plan ${e}`)
                );
            return i;
        })(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            (k.info(`Payment sources IDs: ${JSON.stringify(Object.keys(i.paymentSourcePrices))}`),
                k.info(`prices: ${r}`));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, N.pM)(a, { extra: { paymentSourceId: t }, tags: { purchaseType: n.toString(), planId: e } });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        k.info(`countryPrices: ${JSON.stringify(i.countryPrices)}`);
        let t = Error("Missing prices for country");
        throw ((0, N.pM)(t, { tags: { countryCode: i.countryPrices.countryCode, planId: e } }), t);
    }
    return i.countryPrices.prices;
}
function Y(e) {
    return { amount: e.amount, currency: e.currency, exponent: e.exponent };
}
function K(e, t, n) {
    let r,
        a,
        s = { currency: t, amount: 0, tax: 0, taxInclusive: !1 },
        l = (0, f._1)(e);
    null != l && (r = D.hd[l.planId].premiumType);
    let o = (0, i.CC)(r, D.PremiumTypes.TIER_0),
        d = (0, i.CC)(r, D.PremiumTypes.TIER_2);
    for (let i of e) {
        let e;
        ((a = D.pW.has(i.planId) ? d : !D.JM.has(i.planId) && o),
            (e = void 0 === n ? B(i.planId, a, !1, t) : j(i.planId, a, !1, { paymentSourceId: n, currency: t })),
            (s.amount += e.amount * i.quantity));
    }
    return Y(s);
}
function $(e, t, n, i) {
    return (
        null === t && (s()(null !== e, "Subscription can't be null"), (t = [])), K(null !== e ? eG(e, t) : ex(t), n, i)
    );
}
function X(e) {
    switch (e) {
        case D.Ff.MONTH:
            return M.intl.string(M.t.FPybU7);
        case D.Ff.YEAR:
            return M.intl.string(M.t.tfqrhj);
        case D.Ff.DAY:
        case D.Ff.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function z(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : D.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case D.WT.MONTH:
                if (i > 1)
                    return r
                        ? M.intl.formatToPlainString(U.default.G1Q40N, { intervalCount: i })
                        : M.intl.formatToPlainString(M.t["0UlZnH"], { intervalCount: i });
                let s = M.intl.formatToPlainString(a === D.PremiumTypes.TIER_0 ? M.t.NPKsLz : M.t.poEovT, {
                    timeInterval: M.intl.string(M.t.FPybU7),
                });
                return r ? s : M.intl.string(M.t.Mh9bTt);
            case D.WT.YEAR:
                let l = M.intl.formatToPlainString(a === D.PremiumTypes.TIER_0 ? M.t.NPKsLz : M.t.poEovT, {
                    timeInterval: M.intl.string(M.t.tfqrhj),
                });
                return r ? l : M.intl.string(M.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case D.WT.MONTH:
            if (1 !== i) return M.intl.formatToPlainString(M.t["0UlZnH"], { intervalCount: i });
            return M.intl.string(M.t.DKzs96);
        case D.WT.YEAR:
            return M.intl.string(M.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function q(e) {
    switch (e) {
        case D.WT.MONTH:
            return M.intl.string(M.t.FPybU7);
        case D.WT.YEAR:
            return M.intl.string(M.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function Q(e) {
    let t = D.hd[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, N.pM)(n, { tags: { planId: e } }), n);
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case D.gD.PREMIUM_MONTH_TIER_0:
            return t
                ? M.intl.format(M.t.TZXHNj, { duration: i })
                : n
                  ? M.intl.string(M.t["81iAgs"])
                  : M.intl.string(M.t["0efVPy"]);
        case D.gD.PREMIUM_YEAR_TIER_0:
            return t
                ? M.intl.format(M.t.eqRhC7, { duration: i })
                : n
                  ? M.intl.string(M.t.UvzqY1)
                  : M.intl.string(M.t.eoVuBn);
        case D.gD.PREMIUM_MONTH_TIER_1:
            return n ? M.intl.string(M.t["g/dH5g"]) : M.intl.string(M.t["7O6qSq"]);
        case D.gD.PREMIUM_YEAR_TIER_1:
            return n ? M.intl.string(M.t.pdZJaq) : M.intl.string(M.t.Md5xbi);
        case D.gD.PREMIUM_MONTH_TIER_2:
            return t
                ? M.intl.format(M.t.aI6QXz, { duration: i })
                : n
                  ? M.intl.string(M.t.SmVbHc)
                  : M.intl.string(M.t.FKYNC6);
        case D.gD.PREMIUM_GROUP_MONTH:
            return n
                ? M.intl.string(M.t.SmVbHc)
                : M.intl.formatToPlainString(w.default["8bPDtb"], { premiumGroupProductName: (0, v.DP)() });
        case D.gD.PREMIUM_YEAR_TIER_2:
            return t
                ? M.intl.format(M.t["1wBcPi"], { duration: i })
                : n
                  ? M.intl.string(M.t.JIq4O1)
                  : M.intl.string(M.t["cfu/5d"]);
        case D.gD.PREMIUM_3_MONTH_TIER_2:
            return M.intl.string(M.t.wCbINr);
        case D.gD.PREMIUM_6_MONTH_TIER_2:
            return M.intl.string(M.t["e3/ArU"]);
        case D.gD.PREMIUM_MONTH_GUILD:
            return n ? M.intl.string(M.t["6ZR3By"]) : M.intl.string(M.t["h80cx/"]);
        case D.gD.PREMIUM_YEAR_GUILD:
            return n ? M.intl.string(M.t.YDpAzZ) : M.intl.string(M.t.ZHkls0);
        case D.gD.PREMIUM_3_MONTH_GUILD:
            return M.intl.string(M.t.EZHHB6);
        case D.gD.PREMIUM_6_MONTH_GUILD:
            return M.intl.string(M.t.X2KDO2);
        case D.gD.PREMIUM_MONTH_LEGACY:
            return M.intl.string(M.t.PD6k79);
        case D.gD.PREMIUM_YEAR_LEGACY:
            return M.intl.string(M.t.LtJgTC);
    }
    let r = Error("Unsupported plan");
    throw ((0, N.pM)(r, { tags: { planId: e } }), r);
}
function Z(e) {
    switch (e) {
        case D.pe.TIER_0:
            return M.intl.string(M.t["t9uG/o"]);
        case D.pe.TIER_1:
            return M.intl.string(M.t.FSOz78);
        case D.pe.TIER_2:
            return M.intl.string(M.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, N.pM)(t, { tags: { skuId: e } }), t);
}
function ee(e) {
    let t = D.hd[e]?.premiumType,
        n = null != t ? D.Mr[t] : null;
    if (null != n) return M.intl.string(n);
    let i = Error("Unsupported plan");
    throw ((0, N.pM)(i, { tags: { planId: e } }), i);
}
function et(e, t) {
    if (e === D.WT.MONTH) return t;
    if (e === D.WT.YEAR) return 12 * t;
    throw Error(`${e} interval subscription period not implemented`);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case D.PremiumTypes.TIER_0:
            return t ? "Basic" : M.intl.string(M.t["t9uG/o"]);
        case D.PremiumTypes.TIER_1:
            return t ? "Classic" : M.intl.string(M.t.FSOz78);
        case D.PremiumTypes.TIER_2:
            return M.intl.string(M.t.lG6a5x);
    }
}
function ei(e) {
    let {
            subscription: t,
            planId: n,
            price: i,
            includePremiumGuilds: r,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoiceWithoutEntitlementsPreview: l,
            renewalInvoiceWithEntitlementsPreview: d,
            hasFractionalPremiumWithSub: u,
            fractionalPremiumInfo: _,
        } = e,
        E = D.hd[n],
        A = eY(B(E.id), E.interval),
        f = null != d && 0 === d.subtotal,
        h =
            eC(t) ||
            (null == t.paymentSourceId &&
                !t.isPurchasedExternally &&
                !p.default.getCurrentUser()?.hasFreePremium() &&
                !f),
        I = null != i && null == t.paymentGateway,
        m = t.status === y.Dmq.UNPAID && null !== t.latestInvoice && t.latestInvoice?.status === y.lT7.OPEN,
        T = h ? y.Dmq.CANCELED : m ? y.Dmq.UNPAID : t.status,
        g = l?.taxInclusive ?? t.latestInvoice?.taxInclusive ?? !0,
        S = 2 + (r ? eo(t.additionalPlans) : 0),
        N = I
            ? g
                ? M.intl.format(M.t["cd+hqB"], { price: i })
                : M.intl.format(M.t.NUkcpF, { price: i })
            : M.intl.string(M.t.zYx3Y6),
        O = I
            ? g
                ? M.intl.format(M.t.VsKcFB, { price: i })
                : M.intl.format(M.t.hJ5xEX, { price: i })
            : M.intl.string(M.t["8rSipI"]),
        R = I
            ? g
                ? M.intl.format(M.t["jRy6/J"], { price: i, num: S })
                : M.intl.format(M.t.tTNE8M, { price: i, num: S })
            : M.intl.format(M.t["U+z/HJ"], { num: S });
    switch (n) {
        case D.gD.PREMIUM_MONTH_TIER_0:
        case D.gD.PREMIUM_YEAR_TIER_0:
            switch (T) {
                case y.Dmq.CANCELED:
                    return I
                        ? g
                            ? M.intl.format(M.t["USi/nc"], { price: i })
                            : M.intl.format(M.t["FS//l2"], { price: i })
                        : M.intl.string(M.t.JshLzq);
                case y.Dmq.ACCOUNT_HOLD:
                    return I
                        ? g
                            ? M.intl.format(M.t["5mv+2i"], { price: i })
                            : M.intl.format(M.t.nkAEfZ, { price: i })
                        : M.intl.format(M.t.SsLIXS, {});
                case y.Dmq.UNPAID:
                    return M.intl.format(M.t.cmkbFB, {});
                case y.Dmq.PAUSE_PENDING:
                    let L = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != L
                        ? M.intl.format(M.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: L })
                        : M.intl.format(M.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case y.Dmq.PAUSED:
                    if (u) return N;
                    return M.intl.format(M.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case y.Dmq.PAST_DUE:
                    return M.intl.format(M.t["d+0vwo"], {
                        endDate: (0, C.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return N;
            }
        case D.gD.PREMIUM_MONTH_TIER_1:
        case D.gD.PREMIUM_YEAR_TIER_1:
            switch (T) {
                case y.Dmq.CANCELED:
                    return I
                        ? g
                            ? M.intl.format(M.t.cXy8Bp, { price: i })
                            : M.intl.format(M.t["C/XsHt"], { price: i })
                        : M.intl.string(M.t.K6tYFa);
                case y.Dmq.ACCOUNT_HOLD:
                    return I
                        ? g
                            ? M.intl.format(M.t.HBkIBi, { price: i })
                            : M.intl.format(M.t.ZsO1Sx, { price: i })
                        : M.intl.format(M.t["0+/WH7"], {});
                case y.Dmq.UNPAID:
                    return M.intl.format(M.t.McIzwj, {});
                case y.Dmq.PAUSE_PENDING:
                    let b = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != b
                        ? M.intl.format(M.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: b })
                        : M.intl.format(M.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case y.Dmq.PAUSED:
                    if (u) return O;
                    return M.intl.format(M.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case y.Dmq.PAST_DUE:
                    return M.intl.format(M.t["d+0vwo"], {
                        endDate: (0, C.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return O;
            }
        case D.gD.PREMIUM_MONTH_TIER_2:
        case D.gD.PREMIUM_YEAR_TIER_2:
        case D.gD.PREMIUM_3_MONTH_TIER_2:
        case D.gD.PREMIUM_6_MONTH_TIER_2:
        case D.gD.PREMIUM_GROUP_MONTH:
            switch (T) {
                case y.Dmq.CANCELED:
                    return I
                        ? g
                            ? M.intl.format(M.t.xoFgRh, { price: i, num: S })
                            : M.intl.format(M.t.nXdbKo, { price: i, num: S })
                        : M.intl.format(M.t.EcSdRH, { num: S });
                case y.Dmq.ACCOUNT_HOLD:
                    return I
                        ? g
                            ? M.intl.format(M.t["5C/0QG"], { price: i, num: S })
                            : M.intl.format(M.t.xfYkhu, { price: i, num: S })
                        : M.intl.format(M.t.ivjxcn, { num: S });
                case y.Dmq.UNPAID:
                    return M.intl.format(M.t["0HopYf"], { num: S });
                case y.Dmq.PAUSE_PENDING:
                    let v = null != t.pauseEndsAt ? o()(t.pauseEndsAt).diff(t.currentPeriodEnd, "days") : null;
                    return null != v
                        ? M.intl.format(M.t.WUfOD5, { pauseDate: t.currentPeriodEnd, pauseDuration: v })
                        : M.intl.format(M.t.VlWufv, { pauseDate: t.currentPeriodEnd });
                case y.Dmq.PAUSED:
                    if (u) return R;
                    return M.intl.format(M.t["6RTdZA"], { resumeDate: t.pauseEndsAt });
                case y.Dmq.BILLING_RETRY:
                    return M.intl.format(M.t["IlJ/HV"], { endDate: o()(t.currentPeriodStart).add(7, "days").toDate() });
                case y.Dmq.PAST_DUE:
                    return M.intl.format(M.t["d+0vwo"], {
                        endDate: (0, C.i$)(eA(t).expiresDate, "LL"),
                        onClick: () => {
                            (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return a
                        ? n === D.gD.PREMIUM_YEAR_TIER_2
                            ? M.intl.format(M.t.z2oQtA, {
                                  percent: s?.percentage ?? 20,
                                  regularPrice: A,
                                  renewalDate: ef(t, _),
                              })
                            : g
                              ? M.intl.formatToPlainString(M.t["3ZiutU"], {
                                    percent: s?.percentage ?? 30,
                                    regularPrice: A,
                                    numMonths: s?.duration ?? 1,
                                })
                              : M.intl.formatToPlainString(M.t["G6+XOT"], {
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
function er(e) {
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
        h = g.A.get(c);
    return (
        s()(null != h, "Missing plan"),
        ei({
            subscription: d,
            planId: h.id,
            price:
                ((t = l),
                (n = d),
                (i = h),
                (a =
                    null == (r = t.findInvoiceItemByPlanId(i.id))
                        ? j(i.id, !1, !1, { paymentSourceId: n.paymentSourceId, currency: n.currency }).amount
                        : r.amount),
                (0, b.CE)((0, b.$g)(a, t.currency), i.interval, i.intervalCount)),
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
function ea(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, I.m1)(t) ? null : J(t),
        r = n?.find((e) => {
            let { planId: t } = e;
            return D.pW.has(t);
        }),
        a =
            r?.planId === D.gD.PREMIUM_MONTH_GUILD
                ? M.t.Pi5yMJ
                : r?.planId === D.gD.PREMIUM_YEAR_GUILD
                  ? M.t.H4KPuV
                  : null,
        s = null != a ? M.intl.formatToPlainString(a, { num: r?.quantity }) : void 0;
    if (null != i && null != s)
        return M.intl.formatToPlainString(M.t.FN5T9r, { premiumDescription: i, premiumGuildDescription: s });
    if (null != i) return i;
    if (null != s) return s;
    throw Error("Subscription without premium or premium guild subscription");
}
function es(e) {
    let { skuId: t, isPremium: n, defaultPlanId: i, isThreeMonthGiftingEnabled: r = !1 } = e;
    if (null == t || !n) return [];
    let a = void 0 !== i && t === D.hd[i].skuId ? i : void 0,
        s = [];
    switch (t) {
        case D.pe.TIER_0:
            s = [D.gD.PREMIUM_YEAR_TIER_0, D.gD.PREMIUM_MONTH_TIER_0];
            break;
        case D.pe.TIER_1:
            s = [D.gD.PREMIUM_MONTH_TIER_1];
            break;
        case D.pe.TIER_2:
            s = r
                ? [D.gD.PREMIUM_YEAR_TIER_2, D.gD.PREMIUM_3_MONTH_TIER_2, D.gD.PREMIUM_MONTH_TIER_2]
                : [D.gD.PREMIUM_YEAR_TIER_2, D.gD.PREMIUM_MONTH_TIER_2];
            break;
        case D.pe.GUILD:
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
function el(e) {
    let t = D.hd[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, N.pM)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eo(e) {
    let t = g.A.getPlanIdsForSkus([e$(D.pe.GUILD)]);
    s()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ed = new Set([
    D.gD.NONE_MONTH,
    D.gD.NONE_3_MONTH,
    D.gD.NONE_6_MONTH,
    D.gD.NONE_YEAR,
    D.gD.PREMIUM_MONTH_TIER_0,
    D.gD.PREMIUM_MONTH_TIER_1,
    D.gD.PREMIUM_MONTH_TIER_2,
    D.gD.PREMIUM_YEAR_TIER_0,
    D.gD.PREMIUM_YEAR_TIER_1,
    D.gD.PREMIUM_YEAR_TIER_2,
    D.gD.PREMIUM_3_MONTH_TIER_2,
    D.gD.PREMIUM_6_MONTH_TIER_2,
    D.gD.PREMIUM_GROUP_MONTH,
]);
function ec(e) {
    return ed.has(e);
}
function eu(e) {
    return D.pW.has(e);
}
function e_(e) {
    return ec(e) || eu(e);
}
function eE(e) {
    return null != e && e === D.gD.PREMIUM_GROUP_MONTH;
}
function eA(e) {
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
function ef(e, t) {
    let n = new Date(e.currentPeriodEnd);
    return (null == t || e.isBoostOnly || e.hasAnyPremiumGroup || (n = eh(n, t.unactivatedUnits)), n);
}
function eh(e, t, n, i) {
    let r = o()(i ? void 0 : e);
    if (t.length > 0) {
        let e = eQ(t);
        r = r.add(e, "hours");
    }
    if (!i && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (r = r.add(t, "hours"));
    }
    return r.toDate();
}
function eI(e) {
    let t = eQ(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === D.xc.NONE)) return "";
    let n = { days: M.t.fYmirx, hours: M.t["C3RO+g"], minutes: M.t.r77oHc },
        i = (0, u.Vb)((0, C.Tf)(0, t * O.A.Millis.HOUR));
    return (0, C.uN)(i, n);
}
function ep(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === y.Dmq.PAST_DUE;
}
function em(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? M.intl.string(M.t["0rzJ4J"]) : M.intl.string(M.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = M.intl.string(M.t.a9Mdb3)),
        t
    );
}
function eT(e) {
    if (null == e) return !1;
    let t = T.A.getPaymentSource(e);
    return null != t && P.AD.has(t.type);
}
function eg(e) {
    return e.isPurchasedExternally
        ? e.status === y.Dmq.CANCELED
        : (function (e) {
              let { renewalMutations: t, additionalPlans: n, status: i } = e,
                  r = eo(n);
              return 0 === (null != t ? eo(t.additionalPlans) : null) && 0 !== r ? y.Dmq.CANCELED : i;
          })(e) === y.Dmq.CANCELED;
}
function eS(e) {
    let t,
        { subscription: n, user: i, price: r, renewalInvoicePreview: a, fractionalPremiumInfo: l } = e,
        { planId: o, additionalPlans: d, renewalMutations: u } = n,
        _ = g.A.get(o);
    s()(null != _, "Missing plan");
    let E = eo(d),
        A = u?.additionalPlans != null ? eo(u.additionalPlans) : E,
        f = Math.max(0, E - A),
        h = A > 0 && f > 0,
        I = !1;
    if (!n.isPurchasedExternally && null == (t = r)) {
        let e = null;
        if (null != a) {
            let t = a.invoiceItems.find((e) => D.pW.has(e.subscriptionPlanId));
            null != t && (e = t.amount);
        }
        if (null == e) {
            let t = h ? A : E;
            try {
                e = eR(n.planId, n.paymentSourceId, n.currency, i).amount * t;
            } catch {
                I = !0;
            }
        }
        t = null != e ? (0, b.$g)(e, n.currency) : void 0;
    }
    let p = n.isPurchasedExternally || I,
        m = null != t ? (0, b.CE)(t, _.interval, _.intervalCount) : "",
        T = a?.taxInclusive ?? n.latestInvoice?.taxInclusive ?? !0;
    if (eg(n))
        return p
            ? M.intl.format(M.t["3/WTrI"], { quantity: E })
            : T
              ? M.intl.format(M.t["0ozBSB"], { quantity: E, rate: m })
              : M.intl.format(M.t["yjsv/s"], { quantity: E, rate: m });
    switch (n.status) {
        case y.Dmq.ACCOUNT_HOLD:
            return p
                ? M.intl.format(M.t.Nlf3nc, { quantity: E, boostQuantity: E })
                : T
                  ? M.intl.format(M.t.oiRy7v, { quantity: E, boostQuantity: E, rate: m })
                  : M.intl.format(M.t["0QxOAi"], { quantity: E, boostQuantity: E, rate: m });
        case y.Dmq.PAUSE_PENDING:
        case y.Dmq.PAUSED:
            if (null != l && !l.isFractionalPremiumActive) return M.intl.string(M.t.CduWAm);
            return M.intl.format(M.t["5iud9s"], { quantity: E });
        case y.Dmq.PAST_DUE:
            if (n.isBoostOnly)
                return M.intl.format(M.t["d+0vwo"], {
                    endDate: (0, C.i$)(eA(n).expiresDate, "LL"),
                    onClick: () => {
                        (0, c.A)("https://support.discord.com/hc/articles/23082866222871");
                    },
                });
        default:
            if (h) {
                if (p) return M.intl.format(M.t["krRy+d"], { activeQuantity: A, pendingQuantity: f });
                let e = T ? M.t["4nc7+E"] : M.t.BmaudS;
                return M.intl.format(e, { activeQuantity: A, pendingQuantity: f, rate: m });
            }
            return p
                ? M.intl.format(M.t["5iud9s"], { quantity: E })
                : T
                  ? M.intl.format(M.t.eDwrLA, { quantity: E, rate: m })
                  : M.intl.format(M.t.ijSDcI, { quantity: E, rate: m });
    }
}
function eN(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
    if (null != t)
        try {
            i = j(e.id, !1, r, t, a);
        } catch {
            i = B(e.id, !1, r, void 0, a);
        }
    else i = B(e.id, !1, r, void 0, a);
    let s = (0, b.$g)(i.amount, i.currency);
    return (e.currency !== P.Yr.USD && !0 === n && (s = s.concat("*")), s);
}
function eC(e) {
    let { status: t, renewalMutations: n } = e;
    return t === y.Dmq.CANCELED || (null != n && (0, I.m1)(n.planId) && !e.isPurchasedExternally);
}
function eO(e) {
    return e === y.Dmq.PAST_DUE || e === y.Dmq.ACCOUNT_HOLD || e === y.Dmq.BILLING_RETRY;
}
function eR(e, t, n, r) {
    let a = null != t ? { paymentSourceId: t, currency: n } : { country: m.A.ipCountryCodeWithFallback, currency: n },
        s = g.A.get(e);
    if (null == s) {
        let t = Error("Unsupported plan");
        throw ((0, N.pM)(t, { tags: { planId: e } }), t);
    }
    let l = g.A.getForSkuAndInterval(e$(D.pe.GUILD), s.interval, s.intervalCount);
    if (null == l) {
        let t = Error("Unsupported plan");
        throw ((0, N.pM)(t, { tags: { planId: e } }), t);
    }
    return j(l.id, (0, i.ki)(r), !1, a);
}
function eL(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case D.gD.PREMIUM_MONTH_TIER_0:
                return M.intl.string(M.t["0ggVqN"]);
            case D.gD.PREMIUM_YEAR_TIER_0:
                return M.intl.string(M.t["jm+ZQw"]);
            case D.gD.PREMIUM_MONTH_TIER_1:
                return M.intl.string(M.t.uph4Jx);
            case D.gD.PREMIUM_YEAR_TIER_1:
                return M.intl.string(M.t["D/l7Yt"]);
            case D.gD.PREMIUM_MONTH_TIER_2:
            case D.gD.PREMIUM_GROUP_MONTH:
                return M.intl.string(M.t["5l1MuV"]);
            case D.gD.PREMIUM_YEAR_TIER_2:
                return M.intl.string(M.t.G0mISV);
        }
    switch (i) {
        case D.gD.PREMIUM_MONTH_TIER_0:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["/G3aKw"]);
        case D.gD.PREMIUM_YEAR_TIER_0:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["2eQpsL"]);
        case D.gD.PREMIUM_MONTH_TIER_1:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t.gueLg5);
        case D.gD.PREMIUM_YEAR_TIER_1:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["MhH/vW"]);
        case D.gD.PREMIUM_MONTH_TIER_2:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t.LQVQIq);
        case D.gD.PREMIUM_GROUP_MONTH:
            return M.intl.formatToPlainString(w.default.LwdrNi, { premiumGroupProductName: (0, v.DP)() });
        case D.gD.PREMIUM_YEAR_TIER_2:
            return n ? M.intl.string(M.t.cRCCJ3) : M.intl.string(M.t["0nfg1x"]);
        case D.gD.PREMIUM_3_MONTH_TIER_2:
        case D.gD.PREMIUM_6_MONTH_TIER_2:
            return M.intl.formatToPlainString(M.t.BCD4fT, { intervalCount: t.intervalCount });
        case D.gD.NONE_MONTH:
        case D.gD.NONE_YEAR:
        case D.gD.NONE_3_MONTH:
        case D.gD.NONE_6_MONTH:
        case D.gD.PREMIUM_MONTH_GUILD:
        case D.gD.PREMIUM_YEAR_GUILD:
        case D.gD.PREMIUM_3_MONTH_GUILD:
        case D.gD.PREMIUM_6_MONTH_GUILD:
            return M.intl.string(M.t.eUEeCt);
    }
    let r = Error("User is purchasing an unsupported plan");
    throw ((0, N.pM)(r, { tags: { planId: i } }), r);
}
function ey(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = g.A.get(t);
    return (s()(null != n, "Missing subscriptionPlan"), { intervalType: n.interval, intervalCount: n.intervalCount });
}
function eD() {
    let e = P.Yr.USD;
    try {
        e = B(D.gD.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch {}
    return e;
}
function eb(e) {
    let { intervalType: t = D.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case D.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? M.intl.formatToPlainString(M.t.fRNBRX, { weeks: n / 7 })
                    : M.intl.formatToPlainString(M.t.EIpHEj, { weeks: n / 7 });
            return i
                ? M.intl.formatToPlainString(M.t["6Cdzoy"], { days: n })
                : M.intl.formatToPlainString(M.t["kbBj/h"], { days: n });
        case D.WT.MONTH:
            return i
                ? M.intl.formatToPlainString(M.t.x5MgxS, { months: n })
                : M.intl.formatToPlainString(M.t["4SEnCZ"], { months: n });
        case D.WT.YEAR:
            return i
                ? M.intl.formatToPlainString(M.t["h+63yl"], { years: n })
                : M.intl.formatToPlainString(M.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ev(e) {
    let { intervalType: t = D.WT.MONTH, intervalCount: n = 1 } = e,
        i = eD(),
        r = (0, b.$g)(0, i, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    switch (t) {
        case D.WT.DAY:
            if (n >= 7 && n % 7 == 0) return M.intl.formatToPlainString(M.t.C6i5Jt, { weeks: n / 7, price: r });
            return M.intl.formatToPlainString(M.t.cR9ifw, { days: n, price: r });
        case D.WT.MONTH:
            return M.intl.formatToPlainString(M.t["8FZfNo"], { months: n, price: r });
        case D.WT.YEAR:
            return M.intl.formatToPlainString(M.t.xzAcST, { years: n, price: r });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eP(e, t) {
    if (null != e && null != e.subscriptionTrial && e.subscriptionTrial.skuId === t) {
        let t = e.subscriptionTrial;
        return ev({ intervalType: t.interval, intervalCount: t.intervalCount });
    }
    return null;
}
function eM(e) {
    let { intervalType: t = D.WT.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case D.WT.DAY:
            if (n >= 7 && n % 7 == 0)
                return i
                    ? M.intl.formatToPlainString(M.t.iVZYyl, { weeks: n / 7 })
                    : M.intl.formatToPlainString(M.t.EmoBD2, { weeks: n / 7 });
            return i
                ? M.intl.formatToPlainString(M.t.jzH70Z, { days: n })
                : M.intl.formatToPlainString(M.t["k2UNz+"], { days: n });
        case D.WT.MONTH:
            return i
                ? M.intl.formatToPlainString(M.t.erUSmA, { months: n })
                : M.intl.formatToPlainString(M.t.kridzK, { months: n });
        case D.WT.YEAR:
            return i
                ? M.intl.formatToPlainString(M.t.IfYQVC, { years: n })
                : M.intl.formatToPlainString(M.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eU(e, t) {
    switch (e) {
        case y.kM_.APPLE_PARTNER:
        case y.kM_.APPLE_ADVANCED_COMMERCE:
        case y.kM_.APPLE:
            return G[t];
        case y.kM_.GOOGLE:
            return x[t];
    }
    throw Error(`Invalid external payment gateway ${e}`);
}
function ew(e, t) {
    return (0, i.ki)(e) || eO(t?.status);
}
function eG(e, t) {
    let n = [],
        i = (e.renewalMutations?.items ?? e.items).find((e) => D.JM.has(e.planId));
    return (
        null != i && n.push(i),
        n.push(...t),
        n.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return { ...n, ...t };
            return t;
        })
    );
}
function ex(e) {
    return e.filter((e) => !D.JM.has(e.planId));
}
function ek(e, t, n, i) {
    if (!i.has(t))
        throw new _.v({ message: "Expected planId in group", extraSentryInformation: { newPlanId: t, planGroup: i } });
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
function eF(e, t) {
    return ek(e, t, 1, D.JM);
}
function eB(e, t, n) {
    return ek(e, n, t, D.pW);
}
function eV(e) {
    let t = e.find((e) => !("id" in e)) ?? e.find((e) => D.JM.has(e.planId));
    if (null != t) {
        let n = g.A.get(t.planId);
        (s()(null != n, "Missing plan"),
            (e = e.map((e) => {
                if (e === t) return e;
                let i = g.A.get(e.planId);
                if ((s()(null != i, "Missing plan"), n.interval === i.interval && n.intervalCount === i.intervalCount))
                    return e;
                let r = g.A.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return (s()(null != r, "Missing planForInterval"), { ...e, planId: r.id });
            })));
    }
    return e;
}
function eH(e) {
    return null == e ? null : e.items.find((e) => D.pW.has(e.planId));
}
function ej(e) {
    let t = null != e ? F(e) : null;
    return null != t ? el(t.planId) : null;
}
function eW(e) {
    return null != e && Date.now() - e.createdAt.getTime() < 2592e6;
}
function eY(e, t) {
    let n = (0, b.$g)(e.amount, e.currency),
        i = q(t);
    return `${n}/${i}`;
}
function eK(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = j(e.id);
    return (0, b.CE)((0, b.$g)(n.amount, n.currency), e.interval, t);
}
function e$(e) {
    return e;
}
function eX(e) {
    return "isNitroLocked" in e;
}
function ez() {
    let e = (0, d.bG)([p.default], () => p.default.getCurrentUser());
    return (0, i.YE)(e, D.PremiumTypes.TIER_2);
}
function eq(e) {
    var t;
    let n = D.Eg;
    if (null != (t = e) && "trialId" in t)
        switch (e.trialId) {
            case D.Tt:
                return D.h7;
            case D.yo:
                return D.CA;
        }
    else;
    return n;
}
function eQ(e) {
    return eJ(e.map((e) => e.skuId));
}
function eJ(e) {
    return e.reduce((e, t) => {
        let [n, i] = D.NL[t],
            r = 1;
        switch (n) {
            case D.T.HOUR:
                r = 1;
                break;
            case D.T.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
function eZ(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e,
        r = D.En[t.skuId];
    return null == r ? null : j(r, !1, n, i);
}
function e0(e) {
    let { planId: t, isGift: n, priceOptions: i, subscriptionPlan: r } = e,
        a = D.XE[t];
    if (null != r) {
        let e = e2(r, n, i);
        null != e && (a = e);
    }
    return a;
}
function e1(e) {
    let { subscriptionPlan: t, isGift: n = !1, priceOptions: i = {} } = e;
    if (t.interval === D.WT.DAY || (t.interval === D.WT.MONTH && 1 === t.intervalCount)) return null;
    let r = eZ({ subscriptionPlan: t, isGift: n, priceOptions: i });
    if (null == r) return null;
    let a = t.interval === D.WT.MONTH ? t.intervalCount : 12 * t.intervalCount;
    return r.amount * a;
}
function e2(e) {
    let t,
        n,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { interval: a, intervalCount: s } = e;
    if (a !== D.WT.MONTH && a !== D.WT.YEAR) return;
    let l = et(a, s);
    if (!(l <= 1)) {
        try {
            if (((t = eZ({ subscriptionPlan: e, isGift: i, priceOptions: r })), null == t)) return;
            n = j(e.id, !1, i, r);
        } catch {
            return;
        }
        if (0 !== t.amount) return Math.floor(100 * (1 - n.amount / (t.amount * l)));
    }
}
function e3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = e1({ subscriptionPlan: e, isGift: t, priceOptions: n });
    if (null == i || i <= 0) return null;
    let r = j(e.id, !1, t, n),
        a = i - r.amount;
    return a <= 0 ? null : { amount: a, currency: r.currency };
}
function e6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== D.WT.YEAR) return null;
    let i = j(e.id, !1, t, n);
    return 0 === i.amount ? null : { amount: Math.round(i.amount / 12), currency: i.currency };
}
function e5(e) {
    return null == e ? 0 : Math.max((0, C.m_)(new Date(), new Date(e)), 0);
}
let e7 = Object.freeze({
    isNewUser: eW,
    isPremiumAtLeast: i.CC,
    isPremium: i.ki,
    isPremiumExactly: i.YE,
    isPremiumEligible: function (e) {
        return null != e && !e.isProvisional && !e.bot;
    },
    getPrice: j,
    getDefaultPrice: B,
    getInterval: function (e) {
        let t = D.hd[e];
        if (null != t) return { intervalType: t.interval, intervalCount: t.intervalCount };
        let n = Error("Unsupported plan");
        throw ((0, N.pM)(n, { tags: { planId: e } }), n);
    },
    getIntervalString: z,
    getIntervalStringAsNoun: q,
    getPremiumType: Q,
    getTierDisplayNameByPlanId: ee,
    getDisplayName: J,
    getPremiumPlanOptions: es,
    formatInterval: function (e) {
        if (e === D.WT.YEAR) return M.intl.string(M.t.tfqrhj);
        if (e === D.WT.MONTH) return M.intl.string(M.t.FPybU7);
        throw Error(`Invalid interval type: ${e}`);
    },
    getPlanDescription: ei,
    isPremiumSku: function (e) {
        return e === D.pe.TIER_0 || e === D.pe.TIER_1 || e === D.pe.TIER_2;
    },
    getIntervalMonths: et,
    getUserMaxFileSize: function (e) {
        return null == e
            ? y.TbF
            : e.isStaff() && !R.A.hasPremiumTypeOverride(e)
              ? y.mu
              : null != e.premiumType && (0, i.ki)(e)
                ? e.premiumType === D.PremiumTypes.TIER_2
                    ? (0, L.ew)({ location: "getUserMaxFileSize" })
                    : D.f5[e.premiumType].fileSize
                : y.TbF;
    },
    getSkuIdForPlan: el,
    getSkuIdForPremiumType: function (e) {
        switch (e) {
            case D.PremiumTypes.TIER_0:
                return D.pe.TIER_0;
            case D.PremiumTypes.TIER_1:
                return D.pe.TIER_1;
            case D.PremiumTypes.TIER_2:
                return D.pe.TIER_2;
        }
    },
    getNumIncludedPremiumGuildSubscriptionSlots: function (e) {
        return 2 * (Q(e) === D.PremiumTypes.TIER_2);
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
                          fractionalState: D.xc.NONE,
                          startsAt: o()(0),
                          endsAt: o()(0),
                          currentEntitlementId: "",
                          currentEntitlementEndsAt: o()(0),
                          unactivatedUnits: [],
                      },
            a = null !== n && e.status === y.Dmq.PAST_DUE ? n : t,
            s = i
                ? (0, b.$g)(
                      a.invoiceItems
                          .filter((e) => D.VY.has(e.subscriptionPlanId))
                          .map((e) => e.amount)
                          .reduce((e, t) => t + e, 0),
                      a.currency,
                  )
                : (0, b.$g)(a.total, a.currency);
        if (p.default.getCurrentUser()?.isOnReverseTrial()) {
            let t = null != r.currentEntitlementEndsAt ? r.currentEntitlementEndsAt.toDate() : e.currentPeriodEnd;
            return M.intl.format(M.t["7ZS2m1"], { trialEnd: t });
        }
        if (e.status === y.Dmq.CANCELED) return M.intl.format(M.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
        if (e.status === y.Dmq.PAUSE_PENDING)
            return M.intl.format(M.t.uBLUGU, { pauseDate: e.currentPeriodEnd, resumeDate: e.pauseEndsAt });
        if (e.status === y.Dmq.PAUSED)
            return r.fractionalState !== D.xc.NONE
                ? M.intl.format(M.t.Q18lRK, { renewalDate: r.endsAt.toDate(), price: s })
                : null == e.pauseEndsAt
                  ? i
                      ? M.intl.format(M.t.KTYQCg, { planName: M.intl.string(M.t.Ipxkog), price: s })
                      : M.intl.string(M.t.fMz6Lg)
                  : i
                    ? M.intl.format(M.t.zcgtzf, {
                          planName: M.intl.string(M.t.Ipxkog),
                          resumeDate: e.pauseEndsAt,
                          price: s,
                      })
                    : M.intl.format(M.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
        if (e.status === y.Dmq.PAST_DUE) {
            let t = eA(e).expiresDate;
            return (e.isPurchasedViaGoogle &&
                e.metadata?.google_grace_period_expires_date != null &&
                (t = o()(e.metadata.google_grace_period_expires_date)),
            e.isPurchasedViaApple &&
                e.metadata?.apple_grace_period_expires_date != null &&
                (t = o()(e.metadata.apple_grace_period_expires_date)),
            e.isPurchasedExternally)
                ? M.intl.format(M.t.U2hb3W, {
                      endDate: t.toDate(),
                      paymentGatewayName: P.qm[e.paymentGateway],
                      paymentSourceLink: eU(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : M.intl.format(M.t.qEIzyi, { endDate: t.toDate(), price: s });
        }
        if (e.status === y.Dmq.BILLING_RETRY || e.status === y.Dmq.ACCOUNT_HOLD) {
            let t = o()(e.currentPeriodStart)
                .add(e.status === y.Dmq.BILLING_RETRY ? 7 : 30, "days")
                .toDate();
            return e.isPurchasedExternally
                ? e.isPurchasedViaGoogle && (0, A.xv)()
                    ? M.intl.format(M.t["IlJ/HV"], { endDate: t })
                    : M.intl.format(M.t["dtcxw+"], {
                          endDate: t,
                          paymentGatewayName: P.qm[e.paymentGateway],
                          paymentSourceLink: eU(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                      })
                : M.intl.format(M.t.EMTLOT, { endDate: t, price: s });
        } else {
            var l;
            if (null != (l = e).paymentSourceId && eT(l.paymentSourceId))
                return M.intl.format(M.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
            if (e.status === y.Dmq.UNPAID) return M.intl.format(M.t.CzTKom, { maxProcessingTimeInDays: 14 });
            if (e.isPurchasedExternally)
                return M.intl.format(M.t.ZlWXgR, {
                    renewalDate: t.subscriptionPeriodStart,
                    paymentGatewayName: P.qm[e.paymentGateway],
                    subscriptionManagementLink: eU(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                });
            let n = new Date(t.subscriptionPeriodStart);
            return (
                e.isBoostOnly || e.hasAnyPremiumGroup || (n = eh(n, r.unactivatedUnits)),
                i
                    ? M.intl.format(M.t.Vl3cED, { planName: M.intl.string(M.t.Ipxkog), renewalDate: n, price: s })
                    : M.intl.format(M.t.Q18lRK, { renewalDate: n, price: s })
            );
        }
    },
    getExpectedRenewalDate: ef,
    extendDateWithUnconsumedFractionalPremium: eh,
    getUnactivatedFractionalPremiumDurationString: eI,
    isSwitchingPlansDisabled: ep,
    getSwitchingPlansDisabledMessage: em,
    isNoneSubscription: I.m1,
    getPlanIdFromInvoice: function (e, t) {
        let { planId: n } = e;
        if (e.status === y.Dmq.CANCELED || e.status === y.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return ec(t);
        });
        return null == i ||
            (0, I.m1)(i.subscriptionPlanId) ||
            (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
            ? e.planId
            : i.subscriptionPlanId;
    },
    getStatusFromInvoice: function (e, t) {
        let { status: n } = e;
        if (e.status === y.Dmq.CANCELED || e.status === y.Dmq.PAUSE_PENDING) return n;
        s()(null != t, "Expected invoicePreview");
        let i = t.invoiceItems.find((e) => {
                let { subscriptionPlanId: t } = e;
                return ec(t);
            }),
            r = e.isPurchasedExternally && null != e.renewalMutations;
        return ((null == i || (0, I.m1)(i.subscriptionPlanId)) && !r && (n = y.Dmq.CANCELED), n);
    },
    isBaseSubscriptionCanceled: eC,
    getPremiumGuildIntervalPrice: eR,
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
    getBillingReviewSubheader: eL,
    getIntervalForInvoice: ey,
    getPremiumPlanItem: F,
    getGuildBoostPlanItem: eH,
    isBoostOnlySubscription: function (e) {
        return null != e && null == F(e) && null != eH(e);
    },
    getPremiumSkuIdForSubscription: ej,
    getPremiumTypeFromSubscription: function (e) {
        if (null != e) {
            let t = F(e);
            if (null != t) return Q(t.planId);
        }
    },
    getUnactivatedFractionalPremiumHours: eQ,
    castPremiumSubscriptionAsSkuId: e$,
    calculateDiscountPercentageForPlan: e2,
    calculateYearlyPlanDollarSavingsAmount: e3,
    calculateYearlyPlanMonthlyRateAmount: e6,
    getDaysSincePremium: e5,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: function (e) {
        return Math.max(1, Math.ceil((0, C.c_)(new Date(e.currentPeriodEnd), new Date())));
    },
    canUseAnimatedEmojis: h.wK,
    canUseEmojisEverywhere: h.vB,
    canUseSoundboardEverywhere: h.MK,
    canUseCustomCallSounds: h.tx,
    canUploadLargeFiles: h.ab,
    canUseBadges: h.QB,
    canUseHighVideoUploadQuality: h.hF,
    canEditDiscriminator: h.Vj,
    hasBoostDiscount: h.Hd,
    canUseAnimatedAvatar: h.iU,
    canInstallPremiumApplications: h.QS,
    canUseIncreasedMessageLength: h.JZ,
    canUseIncreasedGuildCap: h.hw,
    canRedeemPremiumPerks: h.zG,
    canUsePremiumProfileCustomization: h.tn,
    canUsePremiumAppIcons: h.CZ,
    canUsePremiumGuildMemberProfile: h.jE,
    canUseClientThemes: h.Zg,
    canStreamQuality: h.yF,
    canUseQuestOrbMultiplier: h.Sw,
    hasFreeBoosts: h.F6,
    canUseCustomStickersEverywhere: h.PL,
    canUseCustomBackgrounds: h.Qb,
    canUseCollectibles: h.Pi,
    canUseMonthlyOrbs: h.nm,
    canUseShopDiscounts: h._A,
    canUseMoreQuestOrbs: h.xd,
    formatPriceString: eY,
    StreamQuality: h.E2,
});
