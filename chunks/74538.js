n.d(t, {
    Af: () => Z,
    Ap: () => eA,
    BK: () => K,
    CY: () => F,
    EK: () => tT,
    Gf: () => et,
    I5: () => S.I5,
    JE: () => eW,
    JP: () => Q,
    L7: () => J,
    M5: () => S.M5,
    MF: () => er,
    MY: () => eK,
    N1: () => eO,
    PK: () => eD,
    PV: () => eg,
    Px: () => ea,
    Qo: () => eY,
    Rd: () => ee,
    Rt: () => eF,
    T4: () => W,
    U2: () => B,
    UV: () => tM,
    UX: () => z,
    Ue: () => ez,
    V7: () => eu,
    W_: () => eG,
    Wz: () => tv,
    XK: () => eX,
    YN: () => tj,
    Z8: () => em,
    ZP: () => tU,
    Zx: () => eQ,
    _O: () => tI,
    a5: () => eZ,
    aS: () => V,
    al: () => eq,
    bt: () => eR,
    dn: () => eB,
    eP: () => $,
    fr: () => eV,
    gB: () => eJ,
    gy: () => eP,
    if: () => eH,
    jP: () => en,
    jp: () => ev,
    k: () => tk,
    k5: () => e3,
    lY: () => eb,
    m3: () => eI,
    nd: () => eT,
    qV: () => es,
    sG: () => q,
    uV: () => e_,
    uZ: () => eh,
    v6: () => eN,
    v9: () => e$,
    xG: () => tx,
    yd: () => S.yd,
    yg: () => tN,
    zL: () => el,
    zV: () => eM,
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
    _ = n(301766),
    p = n(594174),
    h = n(351402),
    m = n(853872),
    g = n(509545),
    E = n(78839),
    b = n(122289),
    y = n(55935),
    O = n(70956),
    v = n(424218),
    I = n(358085),
    T = n(380684),
    S = n(111361),
    A = n(937615),
    C = n(981631),
    N = n(334431),
    R = n(474936),
    P = n(231338),
    D = n(388032);
function w(e, t, n) {
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
function L(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = {
        PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
        BILLING_HISTORY: "https://support.apple.com/HT201266",
        SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039",
    },
    j = {
        SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
        PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
        BILLING_HISTORY: "https://play.google.com/store/account/orderhistory",
    },
    U = new u.Z("PremiumUtils.tsx"),
    G = 2592000000;
var B = (function (e) {
    return (e.MID = "mid"), (e.HIGH = "high"), e;
})({});
function Z(e) {
    return e.items.find((e) => R.dJ.has(e.planId));
}
function F(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        o = null != (t = m.Z.defaultPaymentSourceId) ? t : void 0,
        s = E.Z.getPremiumTypeSubscription();
    return (
        null != s && null != s.paymentSourceId && (o = s.paymentSourceId),
        V(
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
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { paymentSourceId: a, currency: o } = r;
    if (null != g.Z.get(e)) {
        let r = C.tuJ.DEFAULT;
        n ? (r = C.tuJ.GIFT) : t && (r = C.tuJ.PREMIUM_TIER_1);
        let s = Y(e, {
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
                extra: M(L({}, r), { isGift: n }),
            }),
        s)
    );
}
function H(e, t) {
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
            (U.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))),
            Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e)))
        );
    return r;
}
function W(e) {
    let { paymentSourceId: t, purchaseType: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: C.tuJ.DEFAULT },
        r = H(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            U.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))),
                U.info("prices: ".concat(i));
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
        U.info("countryPrices: ".concat(JSON.stringify(r.countryPrices)));
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
function Y(e) {
    let {
            paymentSourceId: t,
            purchaseType: n,
            currency: r,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: C.tuJ.DEFAULT },
        i = W(e, {
            paymentSourceId: t,
            purchaseType: n,
        });
    return (0 === i.length &&
        U.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)),
    null != r)
        ? i.find((e) => e.currency === r.toLowerCase())
        : i[0];
}
function K(e) {
    return {
        amount: e.amount,
        currency: e.currency,
        exponent: e.exponent,
    };
}
function z(e, t, n) {
    let r,
        i,
        a = {
            currency: t,
            amount: 0,
            tax: 0,
            taxInclusive: !1,
        },
        o = (0, d.MY)(e);
    null != o && (r = R.GP[o.planId].premiumType);
    let s = (0, S.yd)(r, R.PremiumTypes.TIER_0),
        l = (0, S.yd)(r, R.PremiumTypes.TIER_2);
    for (let r of e) {
        let e;
        (i = R.Z1.has(r.planId) ? l : !R.dJ.has(r.planId) && s),
            (e =
                void 0 === n
                    ? F(r.planId, i, !1, t)
                    : V(r.planId, i, !1, {
                          paymentSourceId: n,
                          currency: t,
                      })),
            (a.amount += e.amount * r.quantity);
    }
    return K(a);
}
function q(e, t, n, r) {
    let a;
    return (
        null === t && (i()(null !== e, "Subscription can't be null"), (t = [])),
        z((a = null !== e ? eK(e, t) : ez(t)), n, r)
    );
}
function X(e) {
    let t = R.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount,
        };
    let n = Error("Unsupported plan");
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function Q(e) {
    switch (e) {
        case R.EA.MONTH:
            return D.intl.string(D.t.FPybU7);
        case R.EA.YEAR:
            return D.intl.string(D.t.tfqrhj);
        case R.EA.DAY:
        case R.EA.WEEK:
        default:
            throw Error("Unexpected interval");
    }
}
function J(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : R.PremiumTypes.TIER_2;
    if (t || n)
        switch (e) {
            case R.rV.MONTH:
                let o = D.intl.formatToPlainString(a === R.PremiumTypes.TIER_0 ? D.t.NPKsLz : D.t.poEovT, {
                    timeInterval: D.intl.string(D.t.FPybU7),
                });
                return i ? o : D.intl.string(D.t.Mh9bTt);
            case R.rV.YEAR:
                let s = D.intl.formatToPlainString(a === R.PremiumTypes.TIER_0 ? D.t.NPKsLz : D.t.poEovT, {
                    timeInterval: D.intl.string(D.t.tfqrhj),
                });
                return i ? s : D.intl.string(D.t.DRgqMo);
            default:
                throw Error("Unexpected interval");
        }
    switch (e) {
        case R.rV.MONTH:
            if (1 !== r) return D.intl.formatToPlainString(D.t["0UlZnH"], { intervalCount: r });
            return D.intl.string(D.t.DKzs96);
        case R.rV.YEAR:
            return D.intl.string(D.t["/Q4HRN"]);
        default:
            throw Error("Unexpected interval");
    }
}
function $(e) {
    switch (e) {
        case R.rV.MONTH:
            return D.intl.string(D.t.FPybU7);
        case R.rV.YEAR:
            return D.intl.string(D.t.tfqrhj);
        default:
            throw Error("Unexpected interval");
    }
}
function ee(e) {
    let t = R.GP[e];
    if (null != t) return t.premiumType;
    let n = Error("Unsupported plan");
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
            return t
                ? D.intl.format(D.t.TZXHNj, { duration: r })
                : n
                  ? D.intl.string(D.t["81iAgs"])
                  : D.intl.string(D.t["0efVPy"]);
        case R.Xh.PREMIUM_YEAR_TIER_0:
            return t
                ? D.intl.format(D.t.eqRhC7, { duration: r })
                : n
                  ? D.intl.string(D.t.UvzqY1)
                  : D.intl.string(D.t.eoVuBn);
        case R.Xh.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t["g/dH5g"]) : D.intl.string(D.t["7O6qSq"]);
        case R.Xh.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.pdZJaq) : D.intl.string(D.t.Md5xbi);
        case R.Xh.PREMIUM_MONTH_TIER_2:
            return t
                ? D.intl.format(D.t.aI6QXz, { duration: r })
                : n
                  ? D.intl.string(D.t.SmVbHc)
                  : D.intl.string(D.t.FKYNC6);
        case R.Xh.PREMIUM_YEAR_TIER_2:
            return t
                ? D.intl.format(D.t["1wBcPi"], { duration: r })
                : n
                  ? D.intl.string(D.t.JIq4O1)
                  : D.intl.string(D.t["cfu/5d"]);
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
            return D.intl.string(D.t.wCbINr);
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            return D.intl.string(D.t["e3/ArU"]);
        case R.Xh.PREMIUM_MONTH_GUILD:
            return n ? D.intl.string(D.t["6ZR3By"]) : D.intl.string(D.t["h80cx/"]);
        case R.Xh.PREMIUM_YEAR_GUILD:
            return n ? D.intl.string(D.t.YDpAzZ) : D.intl.string(D.t.ZHkls0);
        case R.Xh.PREMIUM_3_MONTH_GUILD:
            return D.intl.string(D.t.EZHHB6);
        case R.Xh.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.X2KDO2);
        case R.Xh.PREMIUM_MONTH_LEGACY:
            return D.intl.string(D.t.PD6k79);
        case R.Xh.PREMIUM_YEAR_LEGACY:
            return D.intl.string(D.t.LtJgTC);
    }
    let i = Error("Unsupported plan");
    throw ((0, b.q2)(i, { tags: { planId: e } }), i);
}
function en(e) {
    switch (e) {
        case R.Si.TIER_0:
            return D.intl.string(D.t["t9uG/o"]);
        case R.Si.TIER_1:
            return D.intl.string(D.t.FSOz78);
        case R.Si.TIER_2:
            return D.intl.string(D.t.lG6a5x);
    }
    let t = Error("Unsupported sku");
    throw ((0, b.q2)(t, { tags: { skuId: e } }), t);
}
function er(e) {
    var t;
    let n = null == (t = R.GP[e]) ? void 0 : t.premiumType,
        r = null != n ? R.HS[n] : null;
    if (null != r) return D.intl.string(r);
    let i = Error("Unsupported plan");
    throw ((0, b.q2)(i, { tags: { planId: e } }), i);
}
function ei(e, t) {
    if (e === R.rV.MONTH) return t;
    if (e === R.rV.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"));
}
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return t ? "Basic" : D.intl.string(D.t["t9uG/o"]);
        case R.PremiumTypes.TIER_1:
            return t ? "Classic" : D.intl.string(D.t.FSOz78);
        case R.PremiumTypes.TIER_2:
            return D.intl.string(D.t.lG6a5x);
    }
}
function eo(e) {
    var t, n, r, i, a, s, c, u, d, f;
    let {
            subscription: _,
            planId: h,
            price: m,
            includePremiumGuilds: g,
            hasDiscountApplied: E,
            activeDiscountInfo: b,
            renewalInvoicePreview: O,
            hasFractionalPremiumWithSub: v,
        } = e,
        I = R.GP[h],
        T = tO(F(I.id), I.interval),
        S =
            ex(_) ||
            (null == _.paymentSourceId &&
                !_.isPurchasedExternally &&
                !(null == (t = p.default.getCurrentUser()) ? void 0 : t.hasFreePremium())),
        A = null != m && null == _.paymentGateway,
        N =
            _.status === C.O0b.UNPAID &&
            null !== _.latestInvoice &&
            (null == (n = _.latestInvoice) ? void 0 : n.status) === C.hUK.OPEN,
        P = S ? C.O0b.CANCELED : N ? C.O0b.UNPAID : _.status,
        w =
            null ==
                (a =
                    null != (i = null == O ? void 0 : O.taxInclusive)
                        ? i
                        : null == (r = _.latestInvoice)
                          ? void 0
                          : r.taxInclusive) || a,
        L = R.cb + (g ? e_(_.additionalPlans) : 0),
        x = A
            ? w
                ? D.intl.format(D.t["cd+hqB"], { price: m })
                : D.intl.format(D.t.NUkcpF, { price: m })
            : D.intl.string(D.t.zYx3Y6),
        M = A
            ? w
                ? D.intl.format(D.t.VsKcFB, { price: m })
                : D.intl.format(D.t.hJ5xEX, { price: m })
            : D.intl.string(D.t["8rSipI"]),
        k = A
            ? w
                ? D.intl.format(D.t["jRy6/J"], {
                      price: m,
                      num: L,
                  })
                : D.intl.format(D.t.tTNE8M, {
                      price: m,
                      num: L,
                  })
            : D.intl.format(D.t["U+z/HJ"], { num: L });
    switch (h) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
        case R.Xh.PREMIUM_YEAR_TIER_0:
            switch (P) {
                case C.O0b.CANCELED:
                    return A
                        ? w
                            ? D.intl.format(D.t["USi/nc"], { price: m })
                            : D.intl.format(D.t["FS//l2"], { price: m })
                        : D.intl.string(D.t.JshLzq);
                case C.O0b.ACCOUNT_HOLD:
                    return A
                        ? w
                            ? D.intl.format(D.t["5mv+2i"], { price: m })
                            : D.intl.format(D.t.nkAEfZ, { price: m })
                        : D.intl.format(D.t.SsLIXS, {});
                case C.O0b.UNPAID:
                    return D.intl.format(D.t.cmkbFB, {});
                case C.O0b.PAUSE_PENDING:
                    let j = null != _.pauseEndsAt ? o()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                    return null != j
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: j,
                          })
                        : D.intl.format(D.t.VlWufv, { pauseDate: _.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (v) return x;
                    return D.intl.format(D.t["6RTdZA"], { resumeDate: _.pauseEndsAt });
                case C.O0b.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.vc)(eb(_).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.Z)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return x;
            }
        case R.Xh.PREMIUM_MONTH_TIER_1:
        case R.Xh.PREMIUM_YEAR_TIER_1:
            switch (P) {
                case C.O0b.CANCELED:
                    return A
                        ? w
                            ? D.intl.format(D.t.cXy8Bp, { price: m })
                            : D.intl.format(D.t["C/XsHt"], { price: m })
                        : D.intl.string(D.t.K6tYFa);
                case C.O0b.ACCOUNT_HOLD:
                    return A
                        ? w
                            ? D.intl.format(D.t.HBkIBi, { price: m })
                            : D.intl.format(D.t.ZsO1Sx, { price: m })
                        : D.intl.format(D.t["0+/WH7"], {});
                case C.O0b.UNPAID:
                    return D.intl.format(D.t.McIzwj, {});
                case C.O0b.PAUSE_PENDING:
                    let U = null != _.pauseEndsAt ? o()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                    return null != U
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: U,
                          })
                        : D.intl.format(D.t.VlWufv, { pauseDate: _.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (v) return M;
                    return D.intl.format(D.t["6RTdZA"], { resumeDate: _.pauseEndsAt });
                case C.O0b.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.vc)(eb(_).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.Z)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return M;
            }
        case R.Xh.PREMIUM_MONTH_TIER_2:
        case R.Xh.PREMIUM_YEAR_TIER_2:
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (P) {
                case C.O0b.CANCELED:
                    return A
                        ? w
                            ? D.intl.format(D.t.xoFgRh, {
                                  price: m,
                                  num: L,
                              })
                            : D.intl.format(D.t.nXdbKo, {
                                  price: m,
                                  num: L,
                              })
                        : D.intl.format(D.t.EcSdRH, { num: L });
                case C.O0b.ACCOUNT_HOLD:
                    return A
                        ? w
                            ? D.intl.format(D.t["5C/0QG"], {
                                  price: m,
                                  num: L,
                              })
                            : D.intl.format(D.t.xfYkhu, {
                                  price: m,
                                  num: L,
                              })
                        : D.intl.format(D.t.ivjxcn, { num: L });
                case C.O0b.UNPAID:
                    return D.intl.format(D.t["0HopYf"], { num: L });
                case C.O0b.PAUSE_PENDING:
                    let G = null != _.pauseEndsAt ? o()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                    return null != G
                        ? D.intl.format(D.t.WUfOD5, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: G,
                          })
                        : D.intl.format(D.t.VlWufv, { pauseDate: _.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (v) return k;
                    return D.intl.format(D.t["6RTdZA"], { resumeDate: _.pauseEndsAt });
                case C.O0b.BILLING_RETRY:
                    return D.intl.format(D.t["IlJ/HV"], {
                        endDate: o()(_.currentPeriodStart).add(R.A5, "days").toDate(),
                    });
                case C.O0b.PAST_DUE:
                    return D.intl.format(D.t["d+0vwo"], {
                        endDate: (0, y.vc)(eb(_).expiresDate, "LL"),
                        onClick: () => {
                            (0, l.Z)("https://support.discord.com/hc/articles/23082866222871");
                        },
                    });
                default:
                    return E
                        ? h === R.Xh.PREMIUM_YEAR_TIER_2
                            ? D.intl.format(D.t["+qqh6g"], {
                                  percent: null != (s = null == b ? void 0 : b.percentage) ? s : R.Bo,
                                  regularPrice: T,
                              })
                            : w
                              ? D.intl.formatToPlainString(D.t["3ZiutU"], {
                                    percent: null != (c = null == b ? void 0 : b.percentage) ? c : R.M_,
                                    regularPrice: T,
                                    numMonths: null != (u = null == b ? void 0 : b.duration) ? u : R.rt,
                                })
                              : D.intl.formatToPlainString(D.t["G6+XOT"], {
                                    percent: null != (d = null == b ? void 0 : b.percentage) ? d : R.M_,
                                    regularPrice: T,
                                    numMonths: null != (f = null == b ? void 0 : b.duration) ? f : R.rt,
                                })
                        : k;
            }
        default:
            throw Error("Invalid planId ".concat(h));
    }
}
function es(e) {
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
        eo({
            subscription: n,
            planId: c.id,
            price: ek(t, n, c),
            includePremiumGuilds: a,
            hasDiscountApplied: o,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l,
        })
    );
}
function el(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, _.Q0)(t) ? null : et(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return R.Z1.has(t);
                  }),
        a =
            (null == i ? void 0 : i.planId) === R.Xh.PREMIUM_MONTH_GUILD ||
            (null == i ? void 0 : i.planId) === R.Xh.PREMIUM_YEAR_GUILD
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
function ec(e) {
    return e === R.Si.TIER_0 || e === R.Si.TIER_1 || e === R.Si.TIER_2;
}
function eu(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: a } = e;
    if (null == t || !n) return [];
    let o = void 0 !== a && t === R.GP[a].skuId ? a : void 0,
        s = [];
    switch (t) {
        case R.Si.TIER_0:
            s = [R.Xh.PREMIUM_YEAR_TIER_0, R.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case R.Si.TIER_1:
            s = [R.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case R.Si.TIER_2:
            let l = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (R.o4.has(e)) {
                    let t = R.GP[e];
                    l = [...R.o4].filter((e) => {
                        let n = R.GP[e];
                        return (
                            n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === R.Si.TIER_2
                        );
                    });
                } else l = [];
            }
            s = [R.Xh.PREMIUM_YEAR_TIER_2, ...l, R.Xh.PREMIUM_MONTH_TIER_2];
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
function ed(e) {
    let t = R.GP[e];
    if (null == t) {
        let t = Error("Unsupported plan");
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ef(e) {
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return R.Si.TIER_0;
        case R.PremiumTypes.TIER_1:
            return R.Si.TIER_1;
        case R.PremiumTypes.TIER_2:
            return R.Si.TIER_2;
    }
}
function e_(e) {
    let t = g.Z.getPlanIdsForSkus([tv(R.Si.GUILD)]);
    i()(null != t, "Missing guildSubscriptionPlanIds");
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ep = new Set([
    R.Xh.NONE_MONTH,
    R.Xh.NONE_3_MONTH,
    R.Xh.NONE_6_MONTH,
    R.Xh.NONE_YEAR,
    R.Xh.PREMIUM_MONTH_TIER_0,
    R.Xh.PREMIUM_MONTH_TIER_1,
    R.Xh.PREMIUM_MONTH_TIER_2,
    R.Xh.PREMIUM_YEAR_TIER_0,
    R.Xh.PREMIUM_YEAR_TIER_1,
    R.Xh.PREMIUM_YEAR_TIER_2,
    R.Xh.PREMIUM_3_MONTH_TIER_2,
    R.Xh.PREMIUM_6_MONTH_TIER_2,
]);
function eh(e) {
    return ep.has(e);
}
function em(e) {
    return R.Z1.has(e);
}
function eg(e) {
    return eh(e) || em(e);
}
function eE(e) {
    return ee(e) === R.PremiumTypes.TIER_2 ? R.cb : 0;
}
function eb(e) {
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
        let t = e.isPurchasedViaApple ? R.$7 : R.Ue;
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
        let t = null == e.paymentSourceId ? R.UA : R.zp;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, "days"),
        };
    }
}
function ey(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i =
            arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: R.a$.NONE,
                      startsAt: o()(0),
                      endsAt: o()(0),
                      currentEntitlementId: "",
                      unactivatedUnits: [],
                  },
        a = null !== n && e.status === C.O0b.PAST_DUE ? n : t,
        s = r
            ? (0, A.T4)(
                  a.invoiceItems
                      .filter((e) => R.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  a.currency,
              )
            : (0, A.T4)(a.total, a.currency);
    if (null != e.trialId && R.h8.includes(e.trialId) && null == e.paymentSourceId)
        return D.intl.format(D.t["7ZS2m1"], { trialEnd: e.currentPeriodEnd });
    if (e.status === C.O0b.CANCELED) return D.intl.format(D.t["Whp/qk"], { endDate: t.subscriptionPeriodStart });
    if (e.status === C.O0b.PAUSE_PENDING)
        return D.intl.format(D.t.uBLUGU, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt,
        });
    if (e.status === C.O0b.PAUSED)
        return i.fractionalState !== R.a$.NONE
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
    if (e.status === C.O0b.PAST_DUE) {
        var l, c;
        let t = eb(e).expiresDate;
        return (e.isPurchasedViaGoogle &&
            (null == (l = e.metadata) ? void 0 : l.google_grace_period_expires_date) != null &&
            (t = o()(e.metadata.google_grace_period_expires_date)),
        e.isPurchasedViaApple &&
            (null == (c = e.metadata) ? void 0 : c.apple_grace_period_expires_date) != null &&
            (t = o()(e.metadata.apple_grace_period_expires_date)),
        e.isPurchasedExternally)
            ? D.intl.format(D.t.U2hb3W, {
                  endDate: t.toDate(),
                  paymentGatewayName: P.Vz[e.paymentGateway],
                  paymentSourceLink: eW(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
              })
            : D.intl.format(D.t.qEIzyi, {
                  endDate: t.toDate(),
                  price: s,
              });
    }
    {
        if (e.status === C.O0b.BILLING_RETRY)
            return D.intl.format(D.t.EMTLOT, {
                endDate: o()(e.currentPeriodStart).add(R.A5, "days").toDate(),
                price: s,
            });
        if (e.status === C.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, I.isAndroid)()
                ? D.intl.format(D.t["dtcxw+"], {
                      endDate: o()(e.currentPeriodStart).add(R.gh, "days").toDate(),
                      paymentGatewayName: P.Vz[e.paymentGateway],
                      paymentSourceLink: eW(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
                  })
                : D.intl.format(D.t.EMTLOT, {
                      endDate: o()(e.currentPeriodStart).add(R.gh, "days").toDate(),
                      price: s,
                  });
        if (eS(e)) return D.intl.format(D.t.awpB0C, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === C.O0b.UNPAID) return D.intl.format(D.t.CzTKom, { maxProcessingTimeInDays: R.Rg });
        if (e.isPurchasedExternally)
            return D.intl.format(D.t.ZlWXgR, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: P.Vz[e.paymentGateway],
                subscriptionManagementLink: eW(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            });
        let n = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (n = eO(n, i.unactivatedUnits)),
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
function eO(e, t, n, r) {
    let i = o()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tL(t);
        i = i.add(e, "hours");
    }
    if (!r && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, "hours", !0);
        t > 0 && (i = i.add(t, "hours"));
    }
    return i.toDate();
}
function ev(e) {
    let t = tL(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === R.a$.NONE)) return "";
    let n = {
            days: D.t.fYmirx,
            hours: D.t["C3RO+g"],
            minutes: D.t.r77oHc,
        },
        r = (0, c.eB)((0, y.TD)(0, t * O.Z.Millis.HOUR));
    return (0, y.QX)(r, n);
}
function eI(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === C.O0b.PAST_DUE;
}
function eT(e) {
    let t = null;
    return (
        null != e.renewalMutations &&
            (t = e.renewalMutations.planId !== e.planId ? D.intl.string(D.t["0rzJ4J"]) : D.intl.string(D.t["9dLQ0/"])),
        null != e.trialEndsAt && (t = D.intl.string(D.t.a9Mdb3)),
        t
    );
}
function eS(e) {
    return null != e.paymentSourceId && eA(e.paymentSourceId);
}
function eA(e) {
    if (null == e) return !1;
    let t = m.Z.getPaymentSource(e);
    return null != t && P.Uk.has(t.type);
}
function eC(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = e_(n);
    return 0 === (null != t ? e_(t.additionalPlans) : null) && 0 !== i ? C.O0b.CANCELED : r;
}
function eN(e) {
    return e.isPurchasedExternally ? e.status === C.O0b.CANCELED : eC(e) === C.O0b.CANCELED;
}
function eR(e) {
    var t, n, r;
    let { subscription: a, user: o, price: s, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = a,
        f = g.Z.get(u);
    i()(null != f, "Missing plan");
    let _ = e_(d),
        p = ej(a.planId, a.paymentSourceId, a.currency, o).amount * _;
    if (null != l) {
        let e = l.invoiceItems.find((e) => R.Z1.has(e.subscriptionPlanId));
        null != e && (p = e.amount);
    }
    s = null != s ? s : (0, A.T4)(p, a.currency);
    let h =
        null ==
            (r =
                null != (n = null == l ? void 0 : l.taxInclusive)
                    ? n
                    : null == (t = a.latestInvoice)
                      ? void 0
                      : t.taxInclusive) || r;
    if (eN(a))
        return a.isPurchasedViaGoogle
            ? D.intl.format(D.t["3/WTrI"], { quantity: _ })
            : h
              ? D.intl.format(D.t["0ozBSB"], {
                    quantity: _,
                    rate: (0, A.og)(s, f.interval, f.intervalCount),
                })
              : D.intl.format(D.t["yjsv/s"], {
                    quantity: _,
                    rate: (0, A.og)(s, f.interval, f.intervalCount),
                });
    switch (a.status) {
        case C.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t.Nlf3nc, {
                      quantity: _,
                      boostQuantity: _,
                  })
                : h
                  ? D.intl.format(D.t.oiRy7v, {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount),
                    })
                  : D.intl.format(D.t["0QxOAi"], {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount),
                    });
        case C.O0b.PAUSE_PENDING:
        case C.O0b.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return D.intl.string(D.t.CduWAm);
            return D.intl.format(D.t["5iud9s"], { quantity: _ });
        default:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t["5iud9s"], { quantity: _ })
                : h
                  ? D.intl.format(D.t.eDwrLA, {
                        quantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount),
                    })
                  : D.intl.format(D.t.ijSDcI, {
                        quantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount),
                    });
    }
}
function eP(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? V(e.id, !1, r, t) : F(e.id, !1, r),
        a = (0, A.T4)(i.amount, i.currency);
    return e.currency !== P.pK.USD && !0 === n && (a = a.concat("*")), a;
}
function eD(e, t, n) {
    let r = eP(e, t, n);
    return (0, A.og)(r, e.interval, e.intervalCount);
}
function ew(e, t) {
    let { planId: n } = e;
    if (e.status === C.O0b.CANCELED || e.status === C.O0b.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eh(t);
    });
    return null == r ||
        (0, _.Q0)(r.subscriptionPlanId) ||
        (null != e.renewalMutations && e.renewalMutations.planId !== e.planId)
        ? e.planId
        : r.subscriptionPlanId;
}
function eL(e, t) {
    let { status: n } = e;
    if (e.status === C.O0b.CANCELED || e.status === C.O0b.PAUSE_PENDING) return n;
    i()(null != t, "Expected invoicePreview");
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eh(t);
    });
    return (null == r || (0, _.Q0)(r.subscriptionPlanId)) && (n = C.O0b.CANCELED), n;
}
function ex(e) {
    let { status: t, renewalMutations: n } = e;
    return t === C.O0b.CANCELED || (null != n && (0, _.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eM(e) {
    return e === C.O0b.PAST_DUE || e === C.O0b.ACCOUNT_HOLD || e === C.O0b.BILLING_RETRY;
}
function ek(e, t, n) {
    let r = e.findInvoiceItemByPlanId(n.id),
        i =
            null == r
                ? V(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency,
                  }).amount
                : r.amount;
    return (0, A.og)((0, A.T4)(i, e.currency), n.interval, n.intervalCount);
}
function ej(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n,
                  }
                : {
                      country: h.Z.ipCountryCodeWithFallback,
                      currency: n,
                  },
        a = g.Z.get(e);
    if (null == a) {
        let t = Error("Unsupported plan");
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    let o = g.Z.getForSkuAndInterval(tv(R.Si.GUILD), a.interval, a.intervalCount);
    if (null == o) {
        let t = Error("Unsupported plan");
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return V(o.id, (0, S.I5)(r), !1, i);
}
function eU(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eG(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case R.Xh.PREMIUM_MONTH_TIER_0:
                return D.intl.string(D.t["0ggVqN"]);
            case R.Xh.PREMIUM_YEAR_TIER_0:
                return D.intl.string(D.t["jm+ZQw"]);
            case R.Xh.PREMIUM_MONTH_TIER_1:
                return D.intl.string(D.t.uph4Jx);
            case R.Xh.PREMIUM_YEAR_TIER_1:
                return D.intl.string(D.t["D/l7Yt"]);
            case R.Xh.PREMIUM_MONTH_TIER_2:
                return D.intl.string(D.t["5l1MuV"]);
            case R.Xh.PREMIUM_YEAR_TIER_2:
                return D.intl.string(D.t.G0mISV);
        }
    switch (r) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["/G3aKw"]);
        case R.Xh.PREMIUM_YEAR_TIER_0:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["2eQpsL"]);
        case R.Xh.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t.gueLg5);
        case R.Xh.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["MhH/vW"]);
        case R.Xh.PREMIUM_MONTH_TIER_2:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t.LQVQIq);
        case R.Xh.PREMIUM_YEAR_TIER_2:
            return n ? D.intl.string(D.t.cRCCJ3) : D.intl.string(D.t["0nfg1x"]);
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            return D.intl.formatToPlainString(D.t.BCD4fT, { intervalCount: t.intervalCount });
        case R.Xh.NONE_MONTH:
        case R.Xh.NONE_YEAR:
        case R.Xh.NONE_3_MONTH:
        case R.Xh.NONE_6_MONTH:
        case R.Xh.PREMIUM_MONTH_GUILD:
        case R.Xh.PREMIUM_YEAR_GUILD:
        case R.Xh.PREMIUM_3_MONTH_GUILD:
        case R.Xh.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.eUEeCt);
    }
    let i = Error("User is purchasing an unsupported plan");
    throw ((0, b.q2)(i, { tags: { planId: r } }), i);
}
function eB(e) {
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
function eZ(e) {
    let { intervalType: t = R.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.rV.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? D.intl.formatToPlainString(D.t.fRNBRX, { weeks: n / 7 })
                    : D.intl.formatToPlainString(D.t.EIpHEj, { weeks: n / 7 });
            return r
                ? D.intl.formatToPlainString(D.t["6Cdzoy"], { days: n })
                : D.intl.formatToPlainString(D.t["kbBj/h"], { days: n });
        case R.rV.MONTH:
            return r
                ? D.intl.formatToPlainString(D.t.x5MgxS, { months: n })
                : D.intl.formatToPlainString(D.t["4SEnCZ"], { months: n });
        case R.rV.YEAR:
            return r
                ? D.intl.formatToPlainString(D.t["h+63yl"], { years: n })
                : D.intl.formatToPlainString(D.t["9DFiHk"], { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eF(e) {
    let { intervalType: t = R.rV.MONTH, intervalCount: n = 1 } = e,
        r = P.pK.USD;
    try {
        r = F(R.Xh.PREMIUM_MONTH_TIER_2, !1, !1, void 0, !1).currency;
    } catch (e) {}
    let i = (0, A.T4)(0, r, {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    switch (t) {
        case R.rV.DAY:
            if (n >= 7 && n % 7 == 0)
                return D.intl.formatToPlainString(D.t.C6i5Jt, {
                    weeks: n / 7,
                    price: i,
                });
            return D.intl.formatToPlainString(D.t.cR9ifw, {
                days: n,
                price: i,
            });
        case R.rV.MONTH:
            return D.intl.formatToPlainString(D.t["8FZfNo"], {
                months: n,
                price: i,
            });
        case R.rV.YEAR:
            return D.intl.formatToPlainString(D.t.xzAcST, {
                years: n,
                price: i,
            });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eV(e, t) {
    if (null != e && null != e.subscription_trial && e.subscription_trial.sku_id === t) {
        let t = e.subscription_trial;
        return eF({
            intervalType: t.interval,
            intervalCount: t.interval_count,
        });
    }
    return null;
}
function eH(e) {
    let { intervalType: t = R.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.rV.DAY:
            if (n >= 7 && n % 7 == 0)
                return r
                    ? D.intl.formatToPlainString(D.t.iVZYyl, { weeks: n / 7 })
                    : D.intl.formatToPlainString(D.t.EmoBD2, { weeks: n / 7 });
            return r
                ? D.intl.formatToPlainString(D.t.jzH70Z, { days: n })
                : D.intl.formatToPlainString(D.t["k2UNz+"], { days: n });
        case R.rV.MONTH:
            return r
                ? D.intl.formatToPlainString(D.t.erUSmA, { months: n })
                : D.intl.formatToPlainString(D.t.kridzK, { months: n });
        case R.rV.YEAR:
            return r
                ? D.intl.formatToPlainString(D.t.IfYQVC, { years: n })
                : D.intl.formatToPlainString(D.t.PClsrw, { years: n });
        default:
            throw Error("Unsupported interval duration.");
    }
}
function eW(e, t) {
    switch (e) {
        case C.gg$.APPLE_PARTNER:
        case C.gg$.APPLE:
            return k[t];
        case C.gg$.GOOGLE:
            return j[t];
    }
    throw Error("Invalid external payment gateway ".concat(e));
}
function eY(e, t) {
    return (0, S.I5)(e) || eM(null == t ? void 0 : t.status);
}
function eK(e, t) {
    var n, r;
    let i = [],
        a = (null != (r = null == (n = e.renewalMutations) ? void 0 : n.items) ? r : e.items).find((e) =>
            R.dJ.has(e.planId),
        );
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return L({}, n, t);
            return t;
        })
    );
}
function ez(e) {
    return e.filter((e) => !R.dJ.has(e.planId));
}
function eq(e, t, n, r) {
    var a, o;
    i()(r.has(t), "Expected planId in group");
    let s = !1,
        l = (null != (o = null == (a = e.renewalMutations) ? void 0 : a.items) ? o : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  M(L({}, e), {
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
function eX(e, t) {
    return eq(e, t, 1, R.dJ);
}
function eQ(e, t, n) {
    return eq(e, n, t, R.Z1);
}
function eJ(e) {
    var t;
    let n = null != (t = e.find((e) => !("id" in e))) ? t : e.find((e) => R.dJ.has(e.planId));
    if (null != n) {
        let t = g.Z.get(n.planId);
        i()(null != t, "Missing plan"),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = g.Z.get(e.planId);
                i()(null != r, "Missing plan");
                let a = g.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return i()(null != a, "Missing planForInterval"), M(L({}, e), { planId: a.id });
            }));
    }
    return e;
}
function e$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = R.a1[e].fileSize;
    return (0, v.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace,
    });
}
function e0(e) {
    return null == e ? null : e.items.find((e) => R.Z1.has(e.planId));
}
function e1(e) {
    return null != e && null == Z(e) && null != e0(e);
}
function e3(e) {
    let t = null != e ? Z(e) : null;
    return null != t ? ed(t.planId) : null;
}
function e2(e) {
    if (null != e) {
        let t = Z(e);
        if (null != t) return ee(t.planId);
    }
}
function e4(e) {
    if (null != e && null != e.renewalMutations) {
        let t = Z(e.renewalMutations);
        if (null != t) return ee(t.planId);
    }
}
function e5(e) {
    switch (e) {
        case R.PremiumTypes.TIER_0:
            return N.Rj.PREMIUM_TIER_0;
        case R.PremiumTypes.TIER_1:
            return N.Rj.PREMIUM_TIER_1;
        case R.PremiumTypes.TIER_2:
            return N.Rj.PREMIUM_TIER_2;
    }
}
function e8(e) {
    return (0, f.ks)(f.g_, e);
}
function e6(e) {
    return (0, f.ks)(f.m_, e);
}
function e7(e) {
    return (0, f.ks)(f._y, e);
}
function e9(e) {
    return (0, f.ks)(f.tj, e);
}
function te(e) {
    return (0, f.ks)(f.EQ, e);
}
function tt(e) {
    return (0, f.ks)(f.Pl, e);
}
function tn(e) {
    return (0, f.ks)(f.wN, e);
}
function tr(e) {
    return (0, f.ks)(f._G, e);
}
function ti(e) {
    return (0, f.ks)(f.j4, e);
}
function ta(e) {
    return (0, f.ks)(f.lX, e);
}
function to(e) {
    return (0, f.ks)(f.Uw, e);
}
function ts(e) {
    return (0, f.ks)(f.zm, e);
}
function tl(e) {
    return (0, f.ks)(f.zZ, e);
}
function tc(e) {
    return (0, f.ks)(f.do, e);
}
function tu(e) {
    return (0, f.ks)(f.ZE, e);
}
function td(e) {
    return (0, f.ks)(f.Ej, e);
}
function tf(e) {
    return (0, f.ks)(f.Ct, e);
}
function t_(e) {
    return (0, f.ks)(f.O1, e);
}
function tp(e) {
    return (0, f.ks)(f.uw, e);
}
function th(e, t) {
    return "high" === e ? (0, f.ks)(f.O8, t) : "mid" === e && (0, f.ks)(f.g7, t);
}
function tm(e) {
    return (0, f.ks)(f.$0, e);
}
function tg(e) {
    return (0, f.ks)(f.ME, e);
}
function tE(e) {
    return (0, f.ks)(f.AN, e);
}
function tb(e) {
    return (0, f.ks)(f._O, e);
}
function ty(e) {
    return (0, f.ks)(f.hs, e);
}
function tO(e, t) {
    let n = (0, A.T4)(e.amount, e.currency),
        r = $(t);
    return "".concat(n, "/").concat(r);
}
function tv(e) {
    return e;
}
function tI(e) {
    return "isNitroLocked" in e;
}
function tT() {
    let e = (0, s.e7)([p.default], () => p.default.getCurrentUser());
    return (0, S.M5)(e, R.PremiumTypes.TIER_2);
}
function tS(e) {
    return null != e && R.OT.includes(e) ? 1 : 2;
}
function tA(e) {
    return e === R.Rt ? R.NV : R.tL;
}
function tC() {
    return R.tL;
}
function tN(e) {
    return tR(e) ? tA(e.trial_id) : tP(e) ? tC() : R.tL;
}
function tR(e) {
    return null != e && "trial_id" in e;
}
function tP(e) {
    return null != e && "discount_id" in e;
}
function tD(e) {
    if (e === R.rV.YEAR) return D.intl.string(D.t.tfqrhj);
    if (e === R.rV.MONTH) return D.intl.string(D.t.FPybU7);
    throw Error("Invalid interval type: ".concat(e));
}
function tw(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tL(e) {
    return tx(e.map((e) => e.skuId));
}
function tx(e) {
    return e.reduce((e, t) => {
        let [n, r] = R.Cx[t],
            i = 1;
        switch (n) {
            case R.Se.HOUR:
                i = 1;
                break;
            case R.Se.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
function tM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== R.rV.YEAR) return;
    let r = R.IW[e.skuId];
    if (null == r) return;
    let i = V(r, !1, t, n),
        a = V(e.id, !1, t, n);
    if (0 !== i.amount) return Math.floor(100 * (1 - a.amount / (12 * i.amount)));
}
function tk(e) {
    return null == e ? 0 : Math.max((0, y.wY)(new Date(), new Date(e)), 0);
}
function tj(e) {
    return Math.max(1, Math.ceil((0, y.jc)(new Date(e.currentPeriodEnd), new Date())));
}
let tU = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < G,
    isPremiumAtLeast: S.yd,
    isPremium: S.I5,
    isPremiumExactly: S.M5,
    isPremiumEligible: tw,
    getPrice: V,
    getDefaultPrice: F,
    getInterval: X,
    getIntervalString: J,
    getIntervalStringAsNoun: $,
    getPremiumType: ee,
    getTierDisplayNameByPlanId: er,
    getDisplayName: et,
    getPremiumPlanOptions: eu,
    getReverseTrialWeeks: tS,
    formatInterval: tD,
    getPlanDescription: eo,
    isPremiumSku: ec,
    getIntervalMonths: ei,
    getUserMaxFileSize: T.h,
    getSkuIdForPlan: ed,
    getSkuIdForPremiumType: ef,
    getNumIncludedPremiumGuildSubscriptionSlots: eE,
    getBillingInformationString: ey,
    extendDateWithUnconsumedFractionalPremium: eO,
    getUnactivatedFractionalPremiumDurationString: ev,
    isSwitchingPlansDisabled: eI,
    getSwitchingPlansDisabledMessage: eT,
    isNoneSubscription: _.Q0,
    getPlanIdFromInvoice: ew,
    getStatusFromInvoice: eL,
    isBaseSubscriptionCanceled: ex,
    getPremiumGuildIntervalPrice: ej,
    hasAccountCredit: eU,
    getBillingReviewSubheader: eG,
    getIntervalForInvoice: eB,
    getPremiumPlanItem: Z,
    getGuildBoostPlanItem: e0,
    isBoostOnlySubscription: e1,
    getPremiumSkuIdForSubscription: e3,
    getPremiumTypeFromSubscription: e2,
    getPremiumTypeFromSubscriptionRenewalMutations: e4,
    getPremiumGradientColor: e5,
    getUnactivatedFractionalPremiumHours: tL,
    castPremiumSubscriptionAsSkuId: tv,
    calculateDiscountPercentageForYearlyPlan: tM,
    getDaysSincePremium: tk,
    getDaysRemainingUntilSubscriptionCurrentPeriodEnds: tj,
    canUseAnimatedEmojis: e8,
    canUseEmojisEverywhere: e6,
    canUseSoundboardEverywhere: e7,
    canUseCustomCallSounds: e9,
    canUploadLargeFiles: te,
    canUseBadges: tt,
    canUseHighVideoUploadQuality: tn,
    canEditDiscriminator: tr,
    hasBoostDiscount: ti,
    canUseAnimatedAvatar: ta,
    canUseFancyVoiceChannelReactions: to,
    canInstallPremiumApplications: ts,
    canUseIncreasedMessageLength: tl,
    canUseIncreasedGuildCap: tc,
    canRedeemPremiumPerks: tu,
    canUsePremiumProfileCustomization: td,
    canUsePremiumAppIcons: tf,
    canUsePremiumGuildMemberProfile: t_,
    canUseClientThemes: tp,
    canStreamQuality: th,
    hasFreeBoosts: tm,
    canUseCustomStickersEverywhere: tg,
    canUseCustomBackgrounds: tE,
    canUseCollectibles: tb,
    canUsePremiumVoiceFilters: ty,
    formatPriceString: tO,
    StreamQuality: B,
});
