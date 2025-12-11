n.d(t, {
    Af: () => V,
    Ap: () => eP,
    BK: () => q,
    CY: () => H,
    EK: () => tA,
    Gf: () => er,
    I5: () => T.I5,
    JE: () => ez,
    JP: () => $,
    Ju: () => ey,
    L7: () => ee,
    M5: () => T.M5,
    MF: () => ea,
    MY: () => eQ,
    N1: () => eI,
    PK: () => eL,
    PV: () => eb,
    Px: () => es,
    Qo: () => eq,
    Rd: () => en,
    Rt: () => eY,
    T4: () => K,
    U2: () => F,
    UV: () => tU,
    UX: () => Q,
    Ue: () => eX,
    V7: () => ef,
    Vw: () => ek,
    W_: () => eF,
    Wz: () => tT,
    XK: () => e$,
    YN: () => tZ,
    Z8: () => eE,
    ZP: () => tB,
    Zx: () => e0,
    _O: () => tC,
    a5: () => eH,
    aS: () => Y,
    al: () => eJ,
    bt: () => eD,
    dn: () => eV,
    eP: () => et,
    fr: () => eW,
    gB: () => e1,
    gy: () => ex,
    if: () => eK,
    jP: () => ei,
    jp: () => eT,
    k: () => tG,
    k5: () => e5,
    lY: () => ev,
    m3: () => eC,
    nd: () => eA,
    qV: () => ec,
    sG: () => X,
    uV: () => em,
    uZ: () => eg,
    v6: () => ew,
    v9: () => e3,
    xG: () => tk,
    yd: () => T.yd,
    yg: () => tw,
    zL: () => eu,
    zV: () => eU,
}),
    n(415506),
    n(49124),
    n(388685),
    n(290780),
    n(539854);
var r = n(512722),
    i = n.n(r),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(782568),
    c = n(927359),
    u = n(710845),
    d = n(491819),
    f = n(803905),
    p = n(301766),
    _ = n(594174),
    m = n(351402),
    h = n(853872),
    g = n(509545),
    E = n(78839),
    b = n(122289),
    y = n(55935),
    O = n(70956),
    v = n(424218),
    S = n(358085),
    I = n(380684),
    T = n(111361),
    C = n(937615),
    A = n(981631),
    N = n(334431),
    P = n(474936),
    R = n(282793),
    w = n(231338),
    D = n(388032),
    x = n(137427);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    G = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    Z = new u.Z("PremiumUtils.tsx"),
    B = 2592000000;
var F = (function (e) {
    return (e.MID = "mid"), (e.HIGH = "high"), e;
})({});
function V(e) {
    return e.items.find((e) => P.dJ.has(e.planId));
}
function H(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        o = null != (t = h.Z.defaultPaymentSourceId) ? t : void 0,
        s = E.Z.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (o = s.paymentSourceId),
        Y(
            e,
            n,
            r,
            {
                paymentSourceId: o,
                currency: i,
            },
            a,
        )
    );
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: o } = r;
    if (null != g.Z.get(e)) {
        let r = A.tuJ.DEFAULT;
        n ? (r = A.tuJ.GIFT) : t && (r = A.tuJ.PREMIUM_TIER_1);
        let s = z(e, {
            paymentSourceId: a,
            purchaseType: r,
            currency: o,
        });
        if (null == s) {
            let t = Error("Couldn't find price");
            throw (
                (i &&
                    (0, b.q2)(t, {
                        extra: { paymentSourceId: a },
                        tags: {
                            purchaseType: r.toString(),
                            planId: e,
                            currency: null != o ? o : "unknown",
                        },
                    }),
                t)
            );
        }
        return s;
    }
    let s = Error("Plan not found");
    throw (
        (i &&
            (0, b.q2)(s, {
                tags: {
                    planId: e,
                    currency: null != o ? o : "unknown",
                },
                extra: k(j({}, r), { isGift: n }),
            }),
        s)
    );
}
function W(e, t) {
    let n = g.Z.get(e);
    if (null == n) {
        let n = Error("Plan not found");
        throw (
            ((0, b.q2)(n, {
                tags: {
                    planId: e,
                    purchaseType: t.toString(),
                },
            }),
            n)
        );
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let r = n.prices[t];
    if (null == r)
        throw (
            (Z.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))),
            Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e)))
        );
    return r;
}
function K(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.tuJ.DEFAULT },
        r = W(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            Z.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))),
                Z.info("prices: ".concat(i));
            let a = Error("Missing prices for payment source on subscription plan");
            (0, b.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e,
                },
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        Z.info("countryPrices: ".concat(JSON.stringify(r.countryPrices)));
        let t = Error("Missing prices for country");
        throw (
            ((0, b.q2)(t, {
                tags: {
                    countryCode: r.countryPrices.countryCode,
                    planId: e,
                },
            }),
            t)
        );
    }
    return r.countryPrices.prices;
}
function z(e) {
    let {
            paymentSourceId: t,
            purchaseType: n,
            currency: r,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.tuJ.DEFAULT },
        i = K(e, {
            paymentSourceId: t,
            purchaseType: n,
        });
    return (0 === i.length &&
        Z.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)),
    null != r)
        ? i.find((e) => e.currency === r.toLowerCase())
        : i[0];
}
function q(e) {
    return {
        amount: e.amount,
        currency: e.currency,
        exponent: e.exponent,
    };
}
function Q(e, t, n) {
    let r,
        i,
        a = {
            currency: t,
            amount: 0,
            tax: 0,
            taxInclusive: !1,
        },
        o = (0, d.MY)(e);
    null != o && (r = P.GP[o.planId].premiumType);
    let s = (0, T.yd)(r, P.PremiumTypes.TIER_0),
        l = (0, T.yd)(r, P.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = P.Z1.has(r.planId) ? l : !P.dJ.has(r.planId) && s),
            (e =
                void 0 === n
                    ? H(r.planId, i, !1, t)
                    : Y(r.planId, i, !1, {
                          paymentSourceId: n,
                          currency: t,
                      })),
            (a.amount += e.amount * r.quantity);
    }
    return q(a);
}
function X(e, t, n, r) {
    let a;
    return (
        null === t && (i()(null !== e, "Subscription can't be null"), (t = [])),
        Q((a = null !== e ? eQ(e, t) : eX(t)), n, r)
    );
}
function J(e) {
    let t = P.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount,
        };
    let n = Error("Unsupported plan");
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function $(e) {
    switch (e) {
        case P.EA.MONTH:
            return D.intl.string(D.t.FPybU7);
        case P.EA.YEAR:
            return D.intl.string(D.t.tfqrhj);
        case P.EA.DAY:
        case P.EA.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function ee(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : P.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case P.rV.MONTH:
                let o = D.intl.formatToPlainString(a === P.PremiumTypes.TIER_0 ? D.t.NPKsLz : D.t.poEovT, {
                    timeInterval: D.intl.string(D.t.FPybU7),
                });
                return i ? o : D.intl.string(D.t.Mh9bTt);
            case P.rV.YEAR:
                let s = D.intl.formatToPlainString(a === P.PremiumTypes.TIER_0 ? D.t.NPKsLz : D.t.poEovT, {
                    timeInterval: D.intl.string(D.t.tfqrhj),
                });
                return i ? s : D.intl.string(D.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case P.rV.MONTH:
            if (1 !== r) return D.intl.formatToPlainString(D.t["0UlZnH"], { intervalCount: r });
            return D.intl.string(D.t.DKzs96);
        case P.rV.YEAR:
            return D.intl.string(D.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function et(e) {
    switch (e) {
        case P.rV.MONTH:
            return D.intl.string(D.t.FPybU7);
        case P.rV.YEAR:
            return D.intl.string(D.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function en(e) {
    let t = P.GP[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
            return t
                ? D.intl.format(D.t.TZXHNj, { duration: r })
                : n
                  ? D.intl.string(D.t["81iAgs"])
                  : D.intl.string(D.t["0efVPy"]);
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return t
                ? D.intl.format(D.t.eqRhC7, { duration: r })
                : n
                  ? D.intl.string(D.t.UvzqY1)
                  : D.intl.string(D.t.eoVuBn);
        case P.Xh.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t["g/dH5g"]) : D.intl.string(D.t["7O6qSq"]);
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.pdZJaq) : D.intl.string(D.t.Md5xbi);
        case P.Xh.PREMIUM_MONTH_TIER_2:
            return t
                ? D.intl.format(D.t.aI6QXz, { duration: r })
                : n
                  ? D.intl.string(D.t.SmVbHc)
                  : D.intl.string(D.t.FKYNC6);
        case P.Xh.PREMIUM_GROUP_MONTH:
            return n ? D.intl.string(D.t.SmVbHc) : D.intl.string(D.t.FKYNC6);
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return t
                ? D.intl.format(D.t["1wBcPi"], { duration: r })
                : n
                  ? D.intl.string(D.t.JIq4O1)
                  : D.intl.string(D.t["cfu/5d"]);
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
            return D.intl.string(D.t.wCbINr);
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return D.intl.string(D.t["e3/ArU"]);
        case P.Xh.PREMIUM_MONTH_GUILD:
            return n ? D.intl.string(D.t["6ZR3By"]) : D.intl.string(D.t["h80cx/"]);
        case P.Xh.PREMIUM_YEAR_GUILD:
            return n ? D.intl.string(D.t.YDpAzZ) : D.intl.string(D.t.ZHkls0);
        case P.Xh.PREMIUM_3_MONTH_GUILD:
            return D.intl.string(D.t.EZHHB6);
        case P.Xh.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.X2KDO2);
        case P.Xh.PREMIUM_MONTH_LEGACY:
            return D.intl.string(D.t.PD6k79);
        case P.Xh.PREMIUM_YEAR_LEGACY:
            return D.intl.string(D.t.LtJgTC);
    }
    let i = Error("Unsupported plan");
    throw ((0, b.q2)(i, { tags: { planId: e } }), i);
}
function ei(e) {
    switch (e) {
        case P.Si.TIER_0:
            return D.intl.string(D.t["t9uG/o"]);
        case P.Si.TIER_1:
            return D.intl.string(D.t.FSOz78);
        case P.Si.TIER_2:
            return D.intl.string(D.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, b.q2)(t, { tags: { skuId: e } }), t);
}
function ea(e) {
    var t;
    let n = null == (t = P.GP[e]) ? void 0 : t.premiumType,
        r = null != n ? P.HS[n] : null;
    if (null != r) return D.intl.string(r);
    let i = Error("Unsupported plan");
    throw ((0, b.q2)(i, { tags: { planId: e } }), i);
}
function eo(e, t) {
    if (e === P.rV.MONTH) return t;
    if (e === P.rV.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"));
}
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case P.PremiumTypes.TIER_0:
            return t ? "Basic" : D.intl.string(D.t["t9uG/o"]);
        case P.PremiumTypes.TIER_1:
            return t ? "Classic" : D.intl.string(D.t.FSOz78);
        case P.PremiumTypes.TIER_2:
            return D.intl.string(D.t.lG6a5x);
    }
}
function el(e) {
    var t, n, r, i, a, s, c, u, d, f;
    let {
            subscription: p,
            planId: m,
            price: h,
            includePremiumGuilds: g,
            hasDiscountApplied: E,
            activeDiscountInfo: b,
            renewalInvoicePreview: O,
            hasFractionalPremiumWithSub: v,
        } = e,
        S = P.GP[m],
        I = tI(H(S.id), S.interval),
        T =
            ek(p) ||
            (null == p.paymentSourceId &&
                !p.isPurchasedExternally &&
                !(null == (t = _.default.getCurrentUser()) ? void 0 : t.hasFreePremium())),
        C = null != h && null == p.paymentGateway,
        N =
            p.status === A.O0b.UNPAID &&
            null !== p.latestInvoice &&
            (null == (n = p.latestInvoice) ? void 0 : n.status) === A.hUK.OPEN,
        R = T ? A.O0b.CANCELED : N ? A.O0b.UNPAID : p.status,
        w =
            null ==
                (a =
                    null != (i = null == O ? void 0 : O.taxInclusive)
                        ? i
                        : null == (r = p.latestInvoice)
                          ? void 0
                          : r.taxInclusive) || a,
        x = P.cb + (g ? em(p.additionalPlans) : 0),
        L = C
            ? w
                ? D.intl.format(D.t["cd+hqB"], { price: h })
                : D.intl.format(D.t.NUkcpF, { price: h })
            : D.intl.string(D.t.zYx3Y6),
        j = C
            ? w
                ? D.intl.format(D.t.VsKcFB, { price: h })
                : D.intl.format(D.t.hJ5xEX, { price: h })
            : D.intl.string(D.t["8rSipI"]),
        M = C
            ? w
                ? D.intl.format(D.t["jRy6/J"], {
                      price: h,
                      num: x,
                  })
                : D.intl.format(D.t.tTNE8M, {
                      price: h,
                      num: x,
                  })
            : D.intl.format(D.t["U+z/HJ"], { num: x });
    switch (m) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
        case P.Xh.PREMIUM_YEAR_TIER_0:
            switch (R) {
                case A.O0b.CANCELED:
                    return C
                        ? w
                            ? D.intl.format(D.t["USi/nc"], { price: h })
                            : D.intl.format(D.t["FS//l2"], { price: h })
                        : D.intl.string(D.t.JshLzq);
                case A.O0b.ACCOUNT_HOLD:
                    return C
                        ? w
                            ? D.intl.format(D.t["5mv+2i"], { price: h })
                            : D.intl.format(D.t.nkAEfZ, { price: h })
                        : D.intl.format(D.t.SsLIXS, {});
                case A.O0b.UNPAID:
                    return D.intl.format(D.t.cmkbFB, {});
                case A.O0b.PAUSE_PENDING:
                    let k = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != k
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: k,
                          })
                        : D.intl.format(D.t.VlWufv, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (v) return L;
                    return D.intl.format(D.t["6RTdZA"], { resumeDate: p.pauseEndsAt });
                case A.O0b.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.vc)(ev(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.Z)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return L;
            }
        case P.Xh.PREMIUM_MONTH_TIER_1:
        case P.Xh.PREMIUM_YEAR_TIER_1:
            switch (R) {
                case A.O0b.CANCELED:
                    return C
                        ? w
                            ? D.intl.format(D.t.cXy8Bp, { price: h })
                            : D.intl.format(D.t["C/XsHt"], { price: h })
                        : D.intl.string(D.t.K6tYFa);
                case A.O0b.ACCOUNT_HOLD:
                    return C
                        ? w
                            ? D.intl.format(D.t.HBkIBi, { price: h })
                            : D.intl.format(D.t.ZsO1Sx, { price: h })
                        : D.intl.format(D.t["0+/WH7"], {});
                case A.O0b.UNPAID:
                    return D.intl.format(D.t.McIzwj, {});
                case A.O0b.PAUSE_PENDING:
                    let U = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != U
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: U,
                          })
                        : D.intl.format(D.t.VlWufv, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (v) return j;
                    return D.intl.format(D.t["6RTdZA"], { resumeDate: p.pauseEndsAt });
                case A.O0b.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.vc)(ev(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.Z)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return j;
            }
        case P.Xh.PREMIUM_MONTH_TIER_2:
        case P.Xh.PREMIUM_YEAR_TIER_2:
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
        case P.Xh.PREMIUM_GROUP_MONTH:
            switch (R) {
                case A.O0b.CANCELED:
                    return C
                        ? w
                            ? D.intl.format(D.t.xoFgRh, {
                                  price: h,
                                  num: x,
                              })
                            : D.intl.format(D.t.nXdbKo, {
                                  price: h,
                                  num: x,
                              })
                        : D.intl.format(D.t.EcSdRH, { num: x });
                case A.O0b.ACCOUNT_HOLD:
                    return C
                        ? w
                            ? D.intl.format(D.t["5C/0QG"], {
                                  price: h,
                                  num: x,
                              })
                            : D.intl.format(D.t.xfYkhu, {
                                  price: h,
                                  num: x,
                              })
                        : D.intl.format(D.t.ivjxcn, { num: x });
                case A.O0b.UNPAID:
                    return D.intl.format(D.t["0HopYf"], { num: x });
                case A.O0b.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, "days") : null;
                    return null != G
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G,
                          })
                        : D.intl.format(D.t.VlWufv, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (v) return M;
                    return D.intl.format(D.t["6RTdZA"], { resumeDate: p.pauseEndsAt });
                case A.O0b.BILLING_RETRY:
                    return D.intl.format(D.t["IlJ/HV"], {
                        endDate: o()(p.currentPeriodStart).add(P.A5, "days").toDate(),
                    });
                case A.O0b.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.vc)(ev(p).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.Z)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return E
                        ? m === P.Xh.PREMIUM_YEAR_TIER_2
                            ? D.intl.format(D.t["+qqh6g"], {
                                  percent: null != (s = null == b ? void 0 : b.percentage) ? s : P.Bo,
                                  regularPrice: I,
                              })
                            : w
                              ? D.intl.formatToPlainString(D.t["3ZiutU"], {
                                    percent: null != (c = null == b ? void 0 : b.percentage) ? c : P.M_,
                                    regularPrice: I,
                                    numMonths: null != (u = null == b ? void 0 : b.duration) ? u : P.rt,
                                })
                              : D.intl.formatToPlainString(D.t["G6+XOT"], {
                                    percent: null != (d = null == b ? void 0 : b.percentage) ? d : P.M_,
                                    regularPrice: I,
                                    numMonths: null != (f = null == b ? void 0 : b.duration) ? f : P.rt,
                                })
                        : M;
            }
        default:
            throw Error("Invalid planId ".concat(m));
    }
}
function ec(e) {
    let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: r,
            includePremiumGuilds: a = !1,
            hasDiscountApplied: o = !1,
            activeDiscountInfo: s,
            hasFractionalPremiumWithSub: l = !1,
        } = e,
        c = g.Z.get(r);
    return (
        i()(null != c, "Missing plan"),
        el({
            subscription: n,
            planId: c.id,
            price: eG(t, n, c),
            includePremiumGuilds: a,
            hasDiscountApplied: o,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l,
        })
    );
}
function eu(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, p.Q0)(t) ? null : er(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return P.Z1.has(t);
                  }),
        a =
            (null == i ? void 0 : i.planId) === P.Xh.PREMIUM_MONTH_GUILD ||
            (null == i ? void 0 : i.planId) === P.Xh.PREMIUM_YEAR_GUILD
                ? D.t.Pi5yMJ
                : null,
        o = null != a ? D.intl.formatToPlainString(a, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != o)
        return D.intl.formatToPlainString(D.t.FN5T9r, {
            premiumDescription: r,
            premiumGuildDescription: o,
        });
    if (null != r) return r;
    if (null != o) return o;
    throw Error("Subscription without premium or premium guild subscription");
}
function ed(e) {
    return e === P.Si.TIER_0 || e === P.Si.TIER_1 || e === P.Si.TIER_2;
}
function ef(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: a } = e;
    if (null == t || !n) return [];
    let o = void 0 !== a && t === P.GP[a].skuId ? a : void 0,
        s = [];
    switch (t) {
        case P.Si.TIER_0:
            s = [P.Xh.PREMIUM_YEAR_TIER_0, P.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case P.Si.TIER_1:
            s = [P.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case P.Si.TIER_2:
            let l = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (P.o4.has(e)) {
                    let t = P.GP[e];
                    l = [...P.o4].filter((e) => {
                        let n = P.GP[e];
                        return (
                            n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === P.Si.TIER_2
                        );
                    });
                } else l = [];
            }
            s = [P.Xh.PREMIUM_YEAR_TIER_2, ...l, P.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error("Unexpected SKU: ".concat(t));
    }
    if (void 0 !== o) {
        let e = s.indexOf(o);
        s.splice(e, 1), s.unshift(o);
    }
    return s;
}
function ep(e) {
    let t = P.GP[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e_(e) {
    switch (e) {
        case P.PremiumTypes.TIER_0:
            return P.Si.TIER_0;
        case P.PremiumTypes.TIER_1:
            return P.Si.TIER_1;
        case P.PremiumTypes.TIER_2:
            return P.Si.TIER_2;
    }
}
function em(e) {
    let t = g.Z.getPlanIdsForSkus([tT(P.Si.GUILD)]);
    i()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eh = new Set([
    P.Xh.NONE_MONTH,
    P.Xh.NONE_3_MONTH,
    P.Xh.NONE_6_MONTH,
    P.Xh.NONE_YEAR,
    P.Xh.PREMIUM_MONTH_TIER_0,
    P.Xh.PREMIUM_MONTH_TIER_1,
    P.Xh.PREMIUM_MONTH_TIER_2,
    P.Xh.PREMIUM_YEAR_TIER_0,
    P.Xh.PREMIUM_YEAR_TIER_1,
    P.Xh.PREMIUM_YEAR_TIER_2,
    P.Xh.PREMIUM_3_MONTH_TIER_2,
    P.Xh.PREMIUM_6_MONTH_TIER_2,
    P.Xh.PREMIUM_GROUP_MONTH,
]);
function eg(e) {
    return eh.has(e);
}
function eE(e) {
    return P.Z1.has(e);
}
function eb(e) {
    return eg(e) || eE(e);
}
function ey(e) {
    return null != e && e === P.Xh.PREMIUM_GROUP_MONTH;
}
function eO(e) {
    return en(e) === P.PremiumTypes.TIER_2 ? P.cb : 0;
}
function ev(e) {
    var t, n, r, i, a;
    if (e.isPurchasedViaApple && (null == (t = e.metadata) ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = o()(e.metadata.apple_grace_period_expires_date);
        return {
            days: o().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t,
        };
    }
    if (
        e.isPurchasedViaGoogle &&
        (null == (n = e.metadata) ? void 0 : n.google_grace_period_expires_date) != null &&
        (null == (r = e.metadata) ? void 0 : r.google_original_expires_date) != null
    ) {
        let t = o()(e.metadata.google_grace_period_expires_date),
            n = o()(e.metadata.google_original_expires_date);
        return {
            days: o().duration(t.diff(n)).days(),
            expiresDate: t,
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? P.$7 : P.Ue;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, "days"),
        };
    }
    if ((null == (i = e.metadata) ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: o()(null == (a = e.metadata) ? void 0 : a.grace_period_expires_date).diff(
                e.currentPeriodStart,
                "days",
            ),
            expiresDate: o()(e.metadata.grace_period_expires_date),
        };
    {
        let t = null == e.paymentSourceId ? P.UA : P.zp;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, "days"),
        };
    }
}
function eS(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i =
            arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: P.a$.NONE,
                      startsAt: o()(0),
                      endsAt: o()(0),
                      currentEntitlementId: "",
                      unactivatedUnits: [],
                  },
        a = null !== n && e.status === A.O0b.PAST_DUE ? n : t,
        s = r
            ? (0, C.T4)(
                  a.invoiceItems
                      .filter((e) => P.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  a.currency,
              )
            : (0, C.T4)(a.total, a.currency);
    if (null != e.trialId && P.h8.includes(e.trialId) && null == e.paymentSourceId)
        return D.intl.format(D.t["7ZS2m1"], { trialEnd: e.currentPeriodEnd });
    if (e.status === A.O0b.CANCELED) return D.intl.format(D.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
    if (e.status === A.O0b.PAUSE_PENDING)
        return D.intl.format(D.t.uBLUGU, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt,
        });
    if (e.status === A.O0b.PAUSED)
        return i.fractionalState !== P.a$.NONE
            ? D.intl.format(D.t.Q18lRK, {
                  renewalDate: i.endsAt.toDate(),
                  price: s,
              })
            : null == e.pauseEndsAt
              ? r
                  ? D.intl.format(D.t.KTYQCg, {
                        planName: D.intl.string(D.t.Ipxkog),
                        price: s,
                    })
                  : D.intl.string(D.t.fMz6Lg)
              : r
                ? D.intl.format(D.t.zcgtzf, {
                      planName: D.intl.string(D.t.Ipxkog),
                      resumeDate: e.pauseEndsAt,
                      price: s,
                  })
                : D.intl.format(D.t["V8+l6k"], { resumeDate: e.pauseEndsAt });
    if (e.status === A.O0b.PAST_DUE) {
        var l, c;
        let t = ev(e).expiresDate;
        return (e.isPurchasedViaGoogle &&
            (null == (l = e.metadata) ? void 0 : l.google_grace_period_expires_date) != null &&
            (t = o()(e.metadata.google_grace_period_expires_date)),
        e.isPurchasedViaApple &&
            (null == (c = e.metadata) ? void 0 : c.apple_grace_period_expires_date) != null &&
            (t = o()(e.metadata.apple_grace_period_expires_date)),
        e.isPurchasedExternally)
            ? D.intl.format(D.t.U2hb3W, {
                  endDate: t.toDate(),
                  paymentGatewayName: w.Vz[e.paymentGateway],
                  paymentSourceLink: ez(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
              })
            : D.intl.format(D.t.qEIzyi, {
                  endDate: t.toDate(),
                  price: s,
              });
    }
    {
        if (e.status === A.O0b.BILLING_RETRY)
            return D.intl.format(D.t.EMTLOT, {
                endDate: o()(e.currentPeriodStart).add(P.A5, "days").toDate(),
                price: s,
            });
        if (e.status === A.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, S.isAndroid)()
                ? D.intl.format(D.t["dtcxw+"], {
                      endDate: o()(e.currentPeriodStart).add(P.gh, "days").toDate(),
                      paymentGatewayName: w.Vz[e.paymentGateway],
                      paymentSourceLink: ez(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : D.intl.format(D.t.EMTLOT, {
                      endDate: o()(e.currentPeriodStart).add(P.gh, "days").toDate(),
                      price: s,
                  });
        if (eN(e)) return D.intl.format(D.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === A.O0b.UNPAID) return D.intl.format(D.t.CzTKom, { maxProcessingTimeInDays: P.Rg });
        if (e.isPurchasedExternally)
            return D.intl.format(D.t.ZlWXgR, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: w.Vz[e.paymentGateway],
                subscriptionManagementLink: ez(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            });
        let n = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (n = eI(n, i.unactivatedUnits)),
            r
                ? D.intl.format(D.t.Vl3cED, {
                      planName: D.intl.string(D.t.Ipxkog),
                      renewalDate: n,
                      price: s,
                  })
                : D.intl.format(D.t.Q18lRK, {
                      renewalDate: n,
                      price: s,
                  })
        );
    }
}
function eI(e, t, n, r) {
    let i = o()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tM(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}
function eT(e) {
    let t = tM(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === P.a$.NONE)) return "";
    let n = {
            days: D.t.fYmirx,
            hours: D.t["C3RO+g"],
            minutes: D.t.r77oHc,
        },
        r = (0, c.eB)((0, y.TD)(0, t * O.Z.Millis.HOUR));
    return (0, y.QX)(r, n);
}
function eC(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === A.O0b.PAST_DUE;
}
function eA(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? D.intl.string(D.t["0rzJ4J"]) : D.intl.string(D.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = D.intl.string(D.t.a9Mdb3)),
        t
    );
}
function eN(e) {
    return null != e.paymentSourceId && eP(e.paymentSourceId);
}
function eP(e) {
    if (null == e) return !1;
    let t = h.Z.getPaymentSource(e);
    return null != t && w.Uk.has(t.type);
}
function eR(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = em(n);
    return 0 === (null != t ? em(t.additionalPlans) : null) && 0 !== i ? A.O0b.CANCELED : r;
}
function ew(e) {
    return e.isPurchasedExternally ? e.status === A.O0b.CANCELED : eR(e) === A.O0b.CANCELED;
}
function eD(e) {
    var t, n, r;
    let { subscription: a, user: o, price: s, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = a,
        f = g.Z.get(u);
    i()(null != f, "Missing plan");
    let p = em(d),
        _ = eZ(a.planId, a.paymentSourceId, a.currency, o).amount * p;
    if (null != l) {
        let e = l.invoiceItems.find((e) => P.Z1.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    s = null != s ? s : (0, C.T4)(_, a.currency);
    let m =
        null ==
            (r =
                null != (n = null == l ? void 0 : l.taxInclusive)
                    ? n
                    : null == (t = a.latestInvoice)
                      ? void 0
                      : t.taxInclusive) || r;
    if (ew(a))
        return a.isPurchasedViaGoogle
            ? D.intl.format(D.t["3/WTrI"], { quantity: p })
            : m
              ? D.intl.format(D.t["0ozBSB"], {
                    quantity: p,
                    rate: (0, C.og)(s, f.interval, f.intervalCount),
                })
              : D.intl.format(D.t["yjsv/s"], {
                    quantity: p,
                    rate: (0, C.og)(s, f.interval, f.intervalCount),
                });
    switch (a.status) {
        case A.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t.Nlf3nc, {
                      quantity: p,
                      boostQuantity: p,
                  })
                : m
                  ? D.intl.format(D.t.oiRy7v, {
                        quantity: p,
                        boostQuantity: p,
                        rate: (0, C.og)(s, f.interval, f.intervalCount),
                    })
                  : D.intl.format(D.t["0QxOAi"], {
                        quantity: p,
                        boostQuantity: p,
                        rate: (0, C.og)(s, f.interval, f.intervalCount),
                    });
        case A.O0b.PAUSE_PENDING:
        case A.O0b.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return D.intl.string(D.t.CduWAm);
            return D.intl.format(D.t["5iud9s"], { quantity: p });
        default:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t["5iud9s"], { quantity: p })
                : m
                  ? D.intl.format(D.t.eDwrLA, {
                        quantity: p,
                        rate: (0, C.og)(s, f.interval, f.intervalCount),
                    })
                  : D.intl.format(D.t.ijSDcI, {
                        quantity: p,
                        rate: (0, C.og)(s, f.interval, f.intervalCount),
                    });
    }
}
function ex(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? Y(e.id, !1, r, t) : H(e.id, !1, r),
        a = (0, C.T4)(i.amount, i.currency);
    return e.currency !== w.pK.USD && !0 === n && (a = a.concat("*")), a;
}
function eL(e, t, n) {
    let r = ex(e, t, n);
    return (0, C.og)(r, e.interval, e.intervalCount);
}
function ej(e, t) {
    let { planId: n } = e;
    if (e.status === A.O0b.CANCELED || e.status === A.O0b.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eg(t);
    });
    return null == r ||
        (0, p.Q0)(r.subscriptionPlanId) ||
        (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
        ? e.planId
        : r.subscriptionPlanId;
}
function eM(e, t) {
    let { status: n } = e;
    if (e.status === A.O0b.CANCELED || e.status === A.O0b.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eg(t);
    });
    return (null == r || (0, p.Q0)(r.subscriptionPlanId)) && (n = A.O0b.CANCELED), n;
}
function ek(e) {
    let { status: t, renewalMutations: n } = e;
    return t === A.O0b.CANCELED || (null != n && (0, p.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eU(e) {
    return e === A.O0b.PAST_DUE || e === A.O0b.ACCOUNT_HOLD || e === A.O0b.BILLING_RETRY;
}
function eG(e, t, n) {
    let r = e.findInvoiceItemByPlanId(n.id),
        i =
            null == r
                ? Y(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency,
                  }).amount
                : r.amount;
    return (0, C.og)((0, C.T4)(i, e.currency), n.interval, n.intervalCount);
}
function eZ(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n,
                  }
                : {
                      country: m.Z.ipCountryCodeWithFallback,
                      currency: n,
                  },
        a = g.Z.get(e);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    let o = g.Z.getForSkuAndInterval(tT(P.Si.GUILD), a.interval, a.intervalCount);
    if (null == o) {
        let t = Error("Unsupported plan");
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return Y(o.id, (0, T.I5)(r), !1, i);
}
function eB(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eF(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case P.Xh.PREMIUM_MONTH_TIER_0:
                return D.intl.string(D.t["0ggVqN"]);
            case P.Xh.PREMIUM_YEAR_TIER_0:
                return D.intl.string(D.t["jm+ZQw"]);
            case P.Xh.PREMIUM_MONTH_TIER_1:
                return D.intl.string(D.t.uph4Jx);
            case P.Xh.PREMIUM_YEAR_TIER_1:
                return D.intl.string(D.t["D/l7Yt"]);
            case P.Xh.PREMIUM_MONTH_TIER_2:
            case P.Xh.PREMIUM_GROUP_MONTH:
                return D.intl.string(D.t["5l1MuV"]);
            case P.Xh.PREMIUM_YEAR_TIER_2:
                return D.intl.string(D.t.G0mISV);
        }
    switch (r) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["/G3aKw"]);
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["2eQpsL"]);
        case P.Xh.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t.gueLg5);
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["MhH/vW"]);
        case P.Xh.PREMIUM_MONTH_TIER_2:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t.LQVQIq);
        case P.Xh.PREMIUM_GROUP_MONTH:
            return D.intl.formatToPlainString(x.default.LwdrNi, { premiumGroupProductName: (0, R.sO)() });
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["0nfg1x"]);
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return D.intl.formatToPlainString(D.t.BCD4fT, { intervalCount: t.intervalCount });
        case P.Xh.NONE_MONTH:
        case P.Xh.NONE_YEAR:
        case P.Xh.NONE_3_MONTH:
        case P.Xh.NONE_6_MONTH:
        case P.Xh.PREMIUM_MONTH_GUILD:
        case P.Xh.PREMIUM_YEAR_GUILD:
        case P.Xh.PREMIUM_3_MONTH_GUILD:
        case P.Xh.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.eUEeCt);
    }
    let i = Error("User is purchasing an unsupported plan");
    throw ((0, b.q2)(i, { tags: { planId: r } }), i);
}
function eV(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = g.Z.get(t);
    return (
        i()(null != n, "Missing subscriptionPlan"),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount,
        }
    );
}
function eH(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? D.intl.formatToPlainString(D.t.fRNBRX, { weeks: n / 7 })
                    : D.intl.formatToPlainString(D.t.EIpHEj, { weeks: n / 7 });
            return r
                ? D.intl.formatToPlainString(D.t["6Cdzoy"], { days: n })
                : D.intl.formatToPlainString(D.t["kbBj/h"], { days: n });
        case P.rV.MONTH:
            return r
                ? D.intl.formatToPlainString(D.t.x5MgxS, { months: n })
                : D.intl.formatToPlainString(D.t["4SEnCZ"], { months: n });
        case P.rV.YEAR:
            return r
                ? D.intl.formatToPlainString(D.t["h+63yl"], { years: n })
                : D.intl.formatToPlainString(D.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eY(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1 } = e,
        r = w.pK.USD;
    try {
        r = H(P.Xh.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch (e) {}
    let i = (0, C.T4)(0, r, {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0)
                return D.intl.formatToPlainString(D.t.C6i5Jt, {
                    weeks: n / 7,
                    price: i,
                });
            return D.intl.formatToPlainString(D.t.cR9ifw, {
                days: n,
                price: i,
            });
        case P.rV.MONTH:
            return D.intl.formatToPlainString(D.t["8FZfNo"], {
                months: n,
                price: i,
            });
        case P.rV.YEAR:
            return D.intl.formatToPlainString(D.t.xzAcST, {
                years: n,
                price: i,
            });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eW(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eY({
            intervalType: t.interval,
            intervalCount: t.interval_count,
        });
    }
    return null;
}
function eK(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? D.intl.formatToPlainString(D.t.iVZYyl, { weeks: n / 7 })
                    : D.intl.formatToPlainString(D.t.EmoBD2, { weeks: n / 7 });
            return r
                ? D.intl.formatToPlainString(D.t.jzH70Z, { days: n })
                : D.intl.formatToPlainString(D.t["k2UNz+"], { days: n });
        case P.rV.MONTH:
            return r
                ? D.intl.formatToPlainString(D.t.erUSmA, { months: n })
                : D.intl.formatToPlainString(D.t.kridzK, { months: n });
        case P.rV.YEAR:
            return r
                ? D.intl.formatToPlainString(D.t.IfYQVC, { years: n })
                : D.intl.formatToPlainString(D.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function ez(e, t) {
    switch (e) {
        case A.gg$.APPLE_PARTNER:
        case A.gg$.APPLE_ADVANCED_COMMERCE:
        case A.gg$.APPLE:
            return U[t];
        case A.gg$.GOOGLE:
            return G[t];
    }
    throw Error("Invalid external payment gateway ".concat(e));
}
function eq(e, t) {
    return (0, T.I5)(e) || eU(null == t ? void 0 : t.status);
}
function eQ(e, t) {
    var n, r;
    let i = [],
        a = (null != (r = null == (n = e.renewalMutations) ? void 0 : n.items) ? r : e.items).find((e) =>
            P.dJ.has(e.planId),
        );
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return j({}, n, t);
            return t;
        })
    );
}
function eX(e) {
    return e.filter((e) => !P.dJ.has(e.planId));
}
function eJ(e, t, n, r) {
    var a, o;
    i()(r.has(t), "Expected planId in group");
    let s = !1,
        l = (null != (o = null == (a = e.renewalMutations) ? void 0 : a.items) ? o : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  k(j({}, e), {
                      quantity: n,
                      planId: t,
                  }))
                : e,
        );
    if (!s) {
        let r = {
                planId: t,
                quantity: n,
            },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), l.push(r);
    }
    return l.filter((e) => 0 !== e.quantity);
}
function e$(e, t) {
    return eJ(e, t, 1, P.dJ);
}
function e0(e, t, n) {
    return eJ(e, n, t, P.Z1);
}
function e1(e) {
    var t;
    let n = null != (t = e.find((e) => !("id" in e))) ? t : e.find((e) => P.dJ.has(e.planId));
    if (null != n) {
        let t = g.Z.get(n.planId);
        i()(null != t, "Missing plan"),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = g.Z.get(e.planId);
                if ((i()(null != r, "Missing plan"), t.interval === r.interval && t.intervalCount === r.intervalCount))
                    return e;
                let a = g.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return i()(null != a, "Missing planForInterval"), k(j({}, e), { planId: a.id });
            }));
    }
    return e;
}
function e3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = P.a1[e].fileSize;
    return (0, v.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace,
    });
}
function e2(e) {
    return null == e ? null : e.items.find((e) => P.Z1.has(e.planId));
}
function e4(e) {
    return null != e && null == V(e) && null != e2(e);
}
function e5(e) {
    let t = null != e ? V(e) : null;
    return null != t ? ep(t.planId) : null;
}
function e8(e) {
    if (null != e) {
        let t = V(e);
        if (null != t) return en(t.planId);
    }
}
function e6(e) {
    if (null != e && null != e.renewalMutations) {
        let t = V(e.renewalMutations);
        if (null != t) return en(t.planId);
    }
}
function e7(e) {
    switch (e) {
        case P.PremiumTypes.TIER_0:
            return N.Rj.PREMIUM_TIER_0;
        case P.PremiumTypes.TIER_1:
            return N.Rj.PREMIUM_TIER_1;
        case P.PremiumTypes.TIER_2:
            return N.Rj.PREMIUM_TIER_2;
    }
}
function e9(e) {
    return (0, f.ks)(f.g_, e);
}
function te(e) {
    return (0, f.ks)(f.m_, e);
}
function tt(e) {
    return (0, f.ks)(f._y, e);
}
function tn(e) {
    return (0, f.ks)(f.tj, e);
}
function tr(e) {
    return (0, f.ks)(f.EQ, e);
}
function ti(e) {
    return (0, f.ks)(f.Pl, e);
}
function ta(e) {
    return (0, f.ks)(f.wN, e);
}
function to(e) {
    return (0, f.ks)(f._G, e);
}
function ts(e) {
    return (0, f.ks)(f.j4, e);
}
function tl(e) {
    return (0, f.ks)(f.lX, e);
}
function tc(e) {
    return (0, f.ks)(f.Uw, e);
}
function tu(e) {
    return (0, f.ks)(f.zm, e);
}
function td(e) {
    return (0, f.ks)(f.zZ, e);
}
function tf(e) {
    return (0, f.ks)(f.do, e);
}
function tp(e) {
    return (0, f.ks)(f.ZE, e);
}
function t_(e) {
    return (0, f.ks)(f.Ej, e);
}
function tm(e) {
    return (0, f.ks)(f.Ct, e);
}
function th(e) {
    return (0, f.ks)(f.O1, e);
}
function tg(e) {
    return (0, f.ks)(f.uw, e);
}
function tE(e, t) {
    return "high" === e ? (0, f.ks)(f.O8, t) : "mid" === e && (0, f.ks)(f.g7, t);
}
function tb(e) {
    return (0, f.ks)(f.$0, e);
}
function ty(e) {
    return (0, f.ks)(f.ME, e);
}
function tO(e) {
    return (0, f.ks)(f.AN, e);
}
function tv(e) {
    return (0, f.ks)(f._O, e);
}
function tS(e) {
    return (0, f.ks)(f.hs, e);
}
function tI(e, t) {
    let n = (0, C.T4)(e.amount, e.currency),
        r = et(t);
    return "".concat(n, "/").concat(r);
}
function tT(e) {
    return e;
}
function tC(e) {
    return "isNitroLocked" in e;
}
function tA() {
    let e = (0, s.e7)([_.default], () => _.default.getCurrentUser());
    return (0, T.M5)(e, P.PremiumTypes.TIER_2);
}
function tN(e) {
    return null != e && P.OT.includes(e) ? 1 : 2;
}
function tP(e) {
    return e === P.Rt ? P.NV : P.tL;
}
function tR() {
    return P.tL;
}
function tw(e) {
    return tD(e) ? tP(e.trial_id) : tx(e) ? tR() : P.tL;
}
function tD(e) {
    return null != e && "trial_id" in e;
}
function tx(e) {
    return null != e && "discount_id" in e;
}
function tL(e) {
    if (e === P.rV.YEAR) return D.intl.string(D.t.tfqrhj);
    if (e === P.rV.MONTH) return D.intl.string(D.t.FPybU7);
    throw Error("Invalid interval type: ".concat(e));
}
function tj(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tM(e) {
    return tk(e.map((e) => e.skuId));
}
function tk(e) {
    return e.reduce((e, t) => {
        let [n, r] = P.Cx[t],
            i = 1;
        switch (n) {
            case P.Se.HOUR:
                i = 1;
                break;
            case P.Se.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
function tU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== P.rV.YEAR) return;
    let r = P.IW[e.skuId];
    if (null == r) return;
    let i = Y(r, !1, t, n),
        a = Y(e.id, !1, t, n);
    if (0 !== i.amount) return Math.floor(100 * (1 - a.amount / (12 * i.amount)));
}
function tG(e) {
    return null == e ? 0 : Math.max((0, y.wY)(new Date(), new Date(e)), 0);
}
function tZ(e) {
    return Math.max(1, Math.ceil((0, y.jc)(new Date(e.currentPeriodEnd), new Date())));
}
let tB = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < B,
    isPremiumAtLeast: T.yd,
    isPremium: T.I5,
    isPremiumExactly: T.M5,
    isPremiumEligible: tj,
    getPrice: Y,
    getDefaultPrice: H,
    getInterval: J,
    getIntervalString: ee,
    getIntervalStringAsNoun: et,
    getPremiumType: en,
    getTierDisplayNameByPlanId: ea,
    getDisplayName: er,
    getPremiumPlanOptions: ef,
    getReverseTrialWeeks: tN,
    formatInterval: tL,
    getPlanDescription: el,
    isPremiumSku: ed,
    getIntervalMonths: eo,
    getUserMaxFileSize: I.h,
    getSkuIdForPlan: ep,
    getSkuIdForPremiumType: e_,
    getNumIncludedPremiumGuildSubscriptionSlots: eO,
    getBillingInformationString: eS,
    extendDateWithUnconsumedFractionalPremium: eI,
    getUnactivatedFractionalPremiumDurationString: eT,
    isSwitchingPlansDisabled: eC,
    getSwitchingPlansDisabledMessage: eA,
    isNoneSubscription: p.Q0,
    getPlanIdFromInvoice: ej,
    getStatusFromInvoice: eM,
    isBaseSubscriptionCanceled: ek,
    getPremiumGuildIntervalPrice: eZ,
    hasAccountCredit: eB,
    getBillingReviewSubheader: eF,
    getIntervalForInvoice: eV,
    getPremiumPlanItem: V,
    getGuildBoostPlanItem: e2,
    isBoostOnlySubscription: e4,
    getPremiumSkuIdForSubscription: e5,
    getPremiumTypeFromSubscription: e8,
    getPremiumTypeFromSubscriptionRenewalMutations: e6,
    getPremiumGradientColor: e7,
    getUnactivatedFractionalPremiumHours: tM,
    castPremiumSubscriptionAsSkuId: tT,
    calculateDiscountPercentageForYearlyPlan: tU,
    getDaysSincePremium: tG,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: tZ,
    canUseAnimatedEmojis: e9,
    canUseEmojisEverywhere: te,
    canUseSoundboardEverywhere: tt,
    canUseCustomCallSounds: tn,
    canUploadLargeFiles: tr,
    canUseBadges: ti,
    canUseHighVideoUploadQuality: ta,
    canEditDiscriminator: to,
    hasBoostDiscount: ts,
    canUseAnimatedAvatar: tl,
    canUseFancyVoiceChannelReactions: tc,
    canInstallPremiumApplications: tu,
    canUseIncreasedMessageLength: td,
    canUseIncreasedGuildCap: tf,
    canRedeemPremiumPerks: tp,
    canUsePremiumProfileCustomization: t_,
    canUsePremiumAppIcons: tm,
    canUsePremiumGuildMemberProfile: th,
    canUseClientThemes: tg,
    canStreamQuality: tE,
    hasFreeBoosts: tb,
    canUseCustomStickersEverywhere: ty,
    canUseCustomBackgrounds: tO,
    canUseCollectibles: tv,
    canUsePremiumVoiceFilters: tS,
    formatPriceString: tI,
    StreamQuality: F,
});
