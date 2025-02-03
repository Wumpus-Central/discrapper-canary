n.d(t, {
    Af: () => G,
    Am: () => ev,
    Ap: () => eT,
    CY: () => B,
    Gf: () => q,
    I5: () => A.I5,
    JE: () => eV,
    JP: () => Y,
    L7: () => W,
    M5: () => A.M5,
    MY: () => eH,
    N1: () => eE,
    PK: () => eR,
    PV: () => ep,
    Px: () => ee,
    Qo: () => ej,
    Rd: () => z,
    Rt: () => eB,
    T4: () => V,
    U2: () => U,
    Ue: () => eY,
    V7: () => ea,
    W_: () => ek,
    Wz: () => ty,
    XK: () => eK,
    Z8: () => e_,
    ZP: () => tC,
    Zx: () => ez,
    _O: () => tI,
    a5: () => eG,
    aS: () => Z,
    al: () => eW,
    aq: () => X,
    bt: () => eN,
    dn: () => eU,
    eP: () => K,
    fr: () => eZ,
    gB: () => eq,
    gq: () => $,
    gy: () => eC,
    he: () => e0,
    if: () => eF,
    jP: () => Q,
    k5: () => e$,
    lY: () => em,
    qV: () => en,
    u0: () => tb,
    uV: () => ec,
    uZ: () => ef,
    v6: () => eA,
    v9: () => eQ,
    xG: () => tN,
    yd: () => A.yd,
    zL: () => ei,
    zV: () => eL
}),
    n(411104),
    n(47120),
    n(733860),
    n(724458),
    n(653041);
var i = n(512722),
    r = n.n(i),
    a = n(913527),
    s = n.n(a),
    o = n(848246);
n(442837);
var l = n(782568),
    u = n(710845),
    c = n(114064),
    d = n(803905),
    f = n(439017),
    _ = n(301766),
    p = n(594174),
    h = n(351402),
    m = n(853872),
    g = n(509545),
    E = n(78839),
    v = n(122289),
    y = n(55935),
    I = n(70956),
    b = n(424218),
    T = n(358085),
    S = n(380684),
    A = n(111361),
    N = n(937615),
    C = n(981631),
    R = n(334431),
    O = n(474936),
    D = n(231338),
    x = n(388032);
let L = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    P = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    w = new u.Z('PremiumUtils.tsx'),
    M = {
        [O.Xh.NONE_MONTH]: [O.Xh.NONE_YEAR, O.Xh.PREMIUM_YEAR_TIER_2, O.Xh.PREMIUM_MONTH_TIER_2, O.Xh.PREMIUM_YEAR_TIER_1, O.Xh.PREMIUM_MONTH_TIER_1],
        [O.Xh.NONE_YEAR]: [O.Xh.PREMIUM_YEAR_TIER_2, O.Xh.PREMIUM_MONTH_TIER_2, O.Xh.PREMIUM_YEAR_TIER_1, O.Xh.PREMIUM_MONTH_TIER_1],
        [O.Xh.PREMIUM_MONTH_TIER_0]: [O.Xh.PREMIUM_YEAR_TIER_2, O.Xh.PREMIUM_MONTH_TIER_2, O.Xh.PREMIUM_YEAR_TIER_1, O.Xh.PREMIUM_MONTH_TIER_1, O.Xh.PREMIUM_YEAR_TIER_0],
        [O.Xh.PREMIUM_YEAR_TIER_0]: [O.Xh.PREMIUM_YEAR_TIER_2, O.Xh.PREMIUM_MONTH_TIER_2, O.Xh.PREMIUM_YEAR_TIER_1, O.Xh.PREMIUM_MONTH_TIER_1],
        [O.Xh.PREMIUM_MONTH_TIER_1]: [O.Xh.PREMIUM_YEAR_TIER_2, O.Xh.PREMIUM_MONTH_TIER_2, O.Xh.PREMIUM_YEAR_TIER_1],
        [O.Xh.PREMIUM_YEAR_TIER_1]: [O.Xh.PREMIUM_YEAR_TIER_2],
        [O.Xh.PREMIUM_MONTH_TIER_2]: [O.Xh.PREMIUM_YEAR_TIER_2],
        [O.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [O.Xh.NONE_MONTH, O.Xh.NONE_YEAR, O.Xh.PREMIUM_YEAR_TIER_2, O.Xh.PREMIUM_MONTH_TIER_2, O.Xh.PREMIUM_YEAR_TIER_1, O.Xh.PREMIUM_MONTH_TIER_1, O.Xh.PREMIUM_YEAR_TIER_0, O.Xh.PREMIUM_MONTH_TIER_0]
    },
    k = 2592000000;
var U = (function (e) {
    return (e.MID = 'mid'), (e.HIGH = 'high'), e;
})({});
function G(e) {
    return e.items.find((e) => O.dJ.has(e.planId));
}
function B(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null !== (t = m.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        a = E.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (r = a.paymentSourceId), Z(e, n, i, { paymentSourceId: r });
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: r, currency: a } = i;
    if (null != g.Z.get(e)) {
        let i = C.tuJ.DEFAULT;
        n ? (i = C.tuJ.GIFT) : t && (i = C.tuJ.PREMIUM_TIER_1);
        let s = j(e, {
            paymentSourceId: r,
            purchaseType: i,
            currency: a
        });
        if (null == s) {
            let t = Error("Couldn't find price");
            throw (
                ((0, v.q2)(t, {
                    extra: { paymentSourceId: r },
                    tags: {
                        purchaseType: i.toString(),
                        planId: e,
                        currency: null != a ? a : 'unknown'
                    }
                }),
                t)
            );
        }
        return s;
    }
    let s = Error('Plan not found');
    throw (
        ((0, v.q2)(s, {
            tags: {
                planId: e,
                currency: null != a ? a : 'unknown'
            },
            extra: {
                ...i,
                isGift: n
            }
        }),
        s)
    );
}
function F(e, t) {
    let n = g.Z.get(e);
    if (null == n) {
        let n = Error('Plan not found');
        throw (
            ((0, v.q2)(n, {
                tags: {
                    planId: e,
                    purchaseType: t.toString()
                }
            }),
            n)
        );
    }
    if (null == n.prices) throw Error('No prices returned for '.concat(e, ', is your user in the experiment?'));
    let i = n.prices[t];
    if (null == i) throw (w.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return i;
}
function V(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: C.tuJ.DEFAULT },
        i = F(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            w.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), w.info('prices: '.concat(r));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, v.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        w.info('countryPrices: '.concat(JSON.stringify(i.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, v.q2)(t, {
                tags: {
                    countryCode: i.countryPrices.countryCode,
                    planId: e
                }
            }),
            t)
        );
    }
    return i.countryPrices.prices;
}
function j(e) {
    let { paymentSourceId: t, purchaseType: n, currency: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: C.tuJ.DEFAULT },
        r = V(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === r.length && w.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != i) ? r.find((e) => e.currency === i) : r[0];
}
function H(e) {
    let t = O.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, v.q2)(n, { tags: { planId: e } }), n);
}
function Y(e) {
    switch (e) {
        case O.EA.MONTH:
            return x.intl.string(x.t.FPybU1);
        case O.EA.YEAR:
            return x.intl.string(x.t.tfqrho);
        case O.EA.DAY:
        case O.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function W(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : O.p9.TIER_2;
    if (t || n)
        switch (e) {
            case O.rV.MONTH:
                let s = x.intl.formatToPlainString(a === O.p9.TIER_0 ? x.t.NPKsLy : x.t.poEovb, { timeInterval: x.intl.string(x.t.FPybU1) });
                return r ? s : x.intl.string(x.t.Mh9bTk);
            case O.rV.YEAR:
                let o = x.intl.formatToPlainString(a === O.p9.TIER_0 ? x.t.NPKsLy : x.t.poEovb, { timeInterval: x.intl.string(x.t.tfqrho) });
                return r ? o : x.intl.string(x.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case O.rV.MONTH:
            if (1 !== i) return x.intl.formatToPlainString(x.t['0UlZnJ'], { intervalCount: i });
            return x.intl.string(x.t['DKzs9/']);
        case O.rV.YEAR:
            return x.intl.string(x.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function K(e) {
    switch (e) {
        case O.rV.MONTH:
            return x.intl.string(x.t.FPybU1);
        case O.rV.YEAR:
            return x.intl.string(x.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function z(e) {
    let t = O.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, v.q2)(n, { tags: { planId: e } }), n);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case O.Xh.PREMIUM_MONTH_TIER_0:
            return t ? x.intl.format(x.t.TZXHNj, { duration: i }) : n ? x.intl.string(x.t['81iAgo']) : x.intl.string(x.t['0efVPz']);
        case O.Xh.PREMIUM_YEAR_TIER_0:
            return t ? x.intl.format(x.t.eqRhCw, { duration: i }) : n ? x.intl.string(x.t.UvzqY2) : x.intl.string(x.t.eoVuBg);
        case O.Xh.PREMIUM_MONTH_TIER_1:
            return n ? x.intl.string(x.t['g/dH5u']) : x.intl.string(x.t['7O6qSk']);
        case O.Xh.PREMIUM_YEAR_TIER_1:
            return n ? x.intl.string(x.t.pdZJam) : x.intl.string(x.t.Md5xbm);
        case O.Xh.PREMIUM_MONTH_TIER_2:
            return t ? x.intl.format(x.t.aI6QX1, { duration: i }) : n ? x.intl.string(x.t.SmVbHR) : x.intl.string(x.t.FKYNCw);
        case O.Xh.PREMIUM_YEAR_TIER_2:
            return t ? x.intl.format(x.t['1wBcPj'], { duration: i }) : n ? x.intl.string(x.t.JIq4Oz) : x.intl.string(x.t['cfu/5e']);
        case O.Xh.PREMIUM_3_MONTH_TIER_2:
            return x.intl.string(x.t.wCbINj);
        case O.Xh.PREMIUM_6_MONTH_TIER_2:
            return x.intl.string(x.t['e3/Ara']);
        case O.Xh.PREMIUM_MONTH_GUILD:
            return n ? x.intl.string(x.t['6ZR3Bw']) : x.intl.string(x.t.h80cx8);
        case O.Xh.PREMIUM_YEAR_GUILD:
            return n ? x.intl.string(x.t.YDpAzc) : x.intl.string(x.t.ZHkls7);
        case O.Xh.PREMIUM_3_MONTH_GUILD:
            return x.intl.string(x.t.EZHHBw);
        case O.Xh.PREMIUM_6_MONTH_GUILD:
            return x.intl.string(x.t.X2KDOz);
        case O.Xh.PREMIUM_MONTH_LEGACY:
            return x.intl.string(x.t['PD6k7+']);
        case O.Xh.PREMIUM_YEAR_LEGACY:
            return x.intl.string(x.t.LtJgTE);
    }
    let r = Error('Unsupported plan');
    throw ((0, v.q2)(r, { tags: { planId: e } }), r);
}
function Q(e) {
    switch (e) {
        case O.Si.TIER_0:
            return x.intl.string(x.t['t9uG/v']);
        case O.Si.TIER_1:
            return x.intl.string(x.t['FSOz7+']);
        case O.Si.TIER_2:
            return x.intl.string(x.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, v.q2)(t, { tags: { skuId: e } }), t);
}
function X(e) {
    switch (e) {
        case O.Xh.PREMIUM_MONTH_TIER_0:
        case O.Xh.PREMIUM_YEAR_TIER_0:
            return x.intl.string(x.t['t9uG/v']);
        case O.Xh.PREMIUM_MONTH_TIER_1:
        case O.Xh.PREMIUM_YEAR_TIER_1:
            return x.intl.string(x.t['FSOz7+']);
        case O.Xh.PREMIUM_MONTH_TIER_2:
        case O.Xh.PREMIUM_3_MONTH_TIER_2:
        case O.Xh.PREMIUM_6_MONTH_TIER_2:
        case O.Xh.PREMIUM_YEAR_TIER_2:
            return x.intl.string(x.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, v.q2)(t, { tags: { planId: e } }), t);
}
function J(e, t) {
    if (e === O.rV.MONTH) return t;
    if (e === O.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case O.Xh.PREMIUM_MONTH_TIER_0:
        case O.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case O.Xh.PREMIUM_MONTH_TIER_1:
        case O.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case O.Xh.PREMIUM_MONTH_TIER_2:
        case O.Xh.PREMIUM_YEAR_TIER_2:
        case O.Xh.PREMIUM_3_MONTH_TIER_2:
        case O.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, v.q2)(n, { tags: { planId: e } }), n);
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case O.p9.TIER_0:
            return t ? 'Basic' : x.intl.string(x.t['t9uG/v']);
        case O.p9.TIER_1:
            return t ? 'Classic' : x.intl.string(x.t['FSOz7+']);
        case O.p9.TIER_2:
            return x.intl.string(x.t['lG6a5+']);
    }
}
function et(e) {
    var t, n, i, r, a, o, u, c, d, f;
    let { subscription: _, planId: h, price: m, includePremiumGuilds: g, hasDiscountApplied: E, activeDiscountInfo: v, renewalInvoicePreview: I, hasFractionalPremiumWithSub: b } = e,
        T = O.GP[h],
        S = tv(B(T.id), T.interval),
        A = ex(_) || (null == _.paymentSourceId && !_.isPurchasedExternally && !(null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        N = null != m && null == _.paymentGateway,
        R = _.status === C.O0b.UNPAID && null !== _.latestInvoice && (null === (n = _.latestInvoice) || void 0 === n ? void 0 : n.status) === C.hUK.OPEN,
        D = A ? C.O0b.CANCELED : R ? C.O0b.UNPAID : _.status,
        L = null === (a = null !== (r = null == I ? void 0 : I.taxInclusive) && void 0 !== r ? r : null === (i = _.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === a || a,
        P = O.cb + (g ? ec(_.additionalPlans) : 0),
        w = N ? (L ? x.intl.format(x.t['cd+hqK'], { price: m }) : x.intl.format(x.t.NUkcpK, { price: m })) : x.intl.string(x.t.zYx3Y2),
        M = N ? (L ? x.intl.format(x.t.VsKcFB, { price: m }) : x.intl.format(x.t.hJ5xER, { price: m })) : x.intl.string(x.t['8rSipK']),
        k = N
            ? L
                ? x.intl.format(x.t['jRy6/P'], {
                      price: m,
                      num: P
                  })
                : x.intl.format(x.t.tTNE8P, {
                      price: m,
                      num: P
                  })
            : x.intl.format(x.t['U+z/HB'], { num: P });
    switch (h) {
        case O.Xh.PREMIUM_MONTH_TIER_0:
        case O.Xh.PREMIUM_YEAR_TIER_0:
            switch (D) {
                case C.O0b.CANCELED:
                    return N ? (L ? x.intl.format(x.t['USi/nZ'], { price: m }) : x.intl.format(x.t['FS//l5'], { price: m })) : x.intl.string(x.t.JshLzs);
                case C.O0b.ACCOUNT_HOLD:
                    return N ? (L ? x.intl.format(x.t['5mv+2t'], { price: m }) : x.intl.format(x.t.nkAEfX, { price: m })) : x.intl.format(x.t.SsLIXV, {});
                case C.O0b.UNPAID:
                    return x.intl.format(x.t.cmkbFB, {});
                case C.O0b.PAUSE_PENDING:
                    let U = null != _.pauseEndsAt ? s()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? x.intl.format(x.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : x.intl.format(x.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (b) return w;
                    return x.intl.format(x.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case C.O0b.PAST_DUE:
                    return x.intl.format(x.t['d+0vws'], {
                        endDate: (0, y.vc)(em(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return w;
            }
        case O.Xh.PREMIUM_MONTH_TIER_1:
        case O.Xh.PREMIUM_YEAR_TIER_1:
            switch (D) {
                case C.O0b.CANCELED:
                    return N ? (L ? x.intl.format(x.t.cXy8Bg, { price: m }) : x.intl.format(x.t['C/XsHh'], { price: m })) : x.intl.string(x.t.K6tYFR);
                case C.O0b.ACCOUNT_HOLD:
                    return N ? (L ? x.intl.format(x.t.HBkIBg, { price: m }) : x.intl.format(x.t.ZsO1S0, { price: m })) : x.intl.format(x.t['0+/WHx'], {});
                case C.O0b.UNPAID:
                    return x.intl.format(x.t.McIzws, {});
                case C.O0b.PAUSE_PENDING:
                    let G = null != _.pauseEndsAt ? s()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? x.intl.format(x.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : x.intl.format(x.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (b) return M;
                    return x.intl.format(x.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case C.O0b.PAST_DUE:
                    return x.intl.format(x.t['d+0vws'], {
                        endDate: (0, y.vc)(em(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return M;
            }
        case O.Xh.PREMIUM_MONTH_TIER_2:
        case O.Xh.PREMIUM_YEAR_TIER_2:
        case O.Xh.PREMIUM_3_MONTH_TIER_2:
        case O.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (D) {
                case C.O0b.CANCELED:
                    return N
                        ? L
                            ? x.intl.format(x.t.xoFgRk, {
                                  price: m,
                                  num: P
                              })
                            : x.intl.format(x.t.nXdbKi, {
                                  price: m,
                                  num: P
                              })
                        : x.intl.format(x.t.EcSdRE, { num: P });
                case C.O0b.ACCOUNT_HOLD:
                    return N
                        ? L
                            ? x.intl.format(x.t['5C/0QE'], {
                                  price: m,
                                  num: P
                              })
                            : x.intl.format(x.t.xfYkho, {
                                  price: m,
                                  num: P
                              })
                        : x.intl.format(x.t.ivjxcn, { num: P });
                case C.O0b.UNPAID:
                    return x.intl.format(x.t['0HopYW'], { num: P });
                case C.O0b.PAUSE_PENDING:
                    let Z = null != _.pauseEndsAt ? s()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != Z
                        ? x.intl.format(x.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: Z
                          })
                        : x.intl.format(x.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (b) return k;
                    return x.intl.format(x.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case C.O0b.BILLING_RETRY:
                    return x.intl.format(x.t['IlJ/HR'], { endDate: s()(_.currentPeriodStart).add(O.A5, 'days').toDate() });
                case C.O0b.PAST_DUE:
                    return x.intl.format(x.t['d+0vws'], {
                        endDate: (0, y.vc)(em(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return E
                        ? h === O.Xh.PREMIUM_YEAR_TIER_2
                            ? x.intl.format(x.t['+qqh6u'], {
                                  percent: null !== (o = null == v ? void 0 : v.percentage) && void 0 !== o ? o : O.Bo,
                                  regularPrice: S
                              })
                            : L
                              ? x.intl.formatToPlainString(x.t['3Ziutb'], {
                                    percent: null !== (u = null == v ? void 0 : v.percentage) && void 0 !== u ? u : O.M_,
                                    regularPrice: S,
                                    numMonths: null !== (c = null == v ? void 0 : v.duration) && void 0 !== c ? c : O.rt
                                })
                              : x.intl.formatToPlainString(x.t['G6+XOT'], {
                                    percent: null !== (d = null == v ? void 0 : v.percentage) && void 0 !== d ? d : O.M_,
                                    regularPrice: S,
                                    numMonths: null !== (f = null == v ? void 0 : v.duration) && void 0 !== f ? f : O.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(h));
    }
}
function en(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: i, includePremiumGuilds: a = !1, hasDiscountApplied: s = !1, activeDiscountInfo: o, hasFractionalPremiumWithSub: l = !1 } = e,
        u = g.Z.get(i);
    return (
        r()(null != u, 'Missing plan'),
        et({
            subscription: n,
            planId: u.id,
            price: eP(t, n, u),
            includePremiumGuilds: a,
            hasDiscountApplied: s,
            activeDiscountInfo: o,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function ei(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, _.Q0)(t) ? null : q(t),
        r =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return O.Z1.has(t);
                  }),
        a = (null == r ? void 0 : r.planId) === O.Xh.PREMIUM_MONTH_GUILD ? x.t.Pi5yMD : (null == r ? void 0 : r.planId) === O.Xh.PREMIUM_YEAR_GUILD ? x.t.Pi5yMD : null,
        s = null != a ? x.intl.formatToPlainString(a, { num: null == r ? void 0 : r.quantity }) : void 0;
    if (null != i && null != s)
        return x.intl.formatToPlainString(x.t.FN5T9v, {
            premiumDescription: i,
            premiumGuildDescription: s
        });
    if (null != i) return i;
    if (null != s) return s;
    throw Error('Subscription without premium or premium guild subscription');
}
function er(e) {
    return e === O.Si.TIER_0 || e === O.Si.TIER_1 || e === O.Si.TIER_2;
}
function ea(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: i, currentSubscription: r, isGift: a, isEligibleForTrial: s, defaultPlanId: o, defaultToMonthlyPlan: l } = e;
    if (null == t || !n) return [];
    let u = void 0 !== o && t === O.GP[o].skuId ? o : void 0;
    void 0 === u && l && !a && (u = O.IW[t]), s && !a && (void 0 === o || (l && O.No.has(o))) && f.k.trackExposure({ location: 'de805e_1' });
    let c = [];
    switch (t) {
        case O.Si.TIER_0:
            c = [O.Xh.PREMIUM_YEAR_TIER_0, O.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case O.Si.TIER_1:
            c = [O.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case O.Si.TIER_2:
            let d = i;
            if (null != r) {
                let e = r.items[0].planId;
                if (O.o4.has(e)) {
                    let t = O.GP[e];
                    d = [...O.o4].filter((e) => {
                        let n = O.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === O.Si.TIER_2;
                    });
                } else d = [];
            }
            c = [O.Xh.PREMIUM_YEAR_TIER_2, ...d, O.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(t));
    }
    if (void 0 !== u) {
        let e = c.indexOf(u);
        c.splice(e, 1), c.unshift(u);
    }
    return c;
}
function es(e) {
    let t = O.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, v.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eo(e) {
    switch (e) {
        case O.p9.TIER_0:
            return O.Si.TIER_0;
        case O.p9.TIER_1:
            return O.Si.TIER_1;
        case O.p9.TIER_2:
            return O.Si.TIER_2;
    }
}
function el(e) {
    var t;
    return null == e ? M.ALL : null !== (t = M[e]) && void 0 !== t ? t : [];
}
function eu(e) {
    let t = O.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        i = el(e);
    for (let e of Object.keys(O.GP)) {
        let { interval: t } = O.GP[e];
        if (n === t && i.includes(e)) return e;
    }
    return null;
}
function ec(e) {
    let t = g.Z.getPlanIdsForSkus([ty(O.Si.GUILD)]);
    r()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ed = new Set([O.Xh.NONE_MONTH, O.Xh.NONE_3_MONTH, O.Xh.NONE_6_MONTH, O.Xh.NONE_YEAR, O.Xh.PREMIUM_MONTH_TIER_0, O.Xh.PREMIUM_MONTH_TIER_1, O.Xh.PREMIUM_MONTH_TIER_2, O.Xh.PREMIUM_YEAR_TIER_0, O.Xh.PREMIUM_YEAR_TIER_1, O.Xh.PREMIUM_YEAR_TIER_2, O.Xh.PREMIUM_3_MONTH_TIER_2, O.Xh.PREMIUM_6_MONTH_TIER_2]);
function ef(e) {
    return ed.has(e);
}
function e_(e) {
    return O.Z1.has(e);
}
function ep(e) {
    return ef(e) || e_(e);
}
function eh(e) {
    return z(e) === O.p9.TIER_2 ? O.cb : 0;
}
function em(e) {
    var t, n, i, r, a;
    if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = s()(e.metadata.apple_grace_period_expires_date);
        return {
            days: s().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
        let t = s()(e.metadata.google_grace_period_expires_date),
            n = s()(e.metadata.google_original_expires_date);
        return {
            days: s().duration(t.diff(n)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? O.$7 : O.Ue;
        return {
            days: t,
            expiresDate: s()(e.currentPeriodStart).add(t, 'days')
        };
    }
    if ((null === (r = e.metadata) || void 0 === r ? void 0 : r.grace_period_expires_date) != null)
        return {
            days: s()(null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: s()(e.metadata.grace_period_expires_date)
        };
    {
        let t = null == e.paymentSourceId ? O.UA : O.zp;
        return {
            days: t,
            expiresDate: s()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function eg(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      fractionalState: O.a$.NONE,
                      startsAt: s()(0),
                      endsAt: s()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        r = n
            ? (0, N.T4)(
                  t.invoiceItems
                      .filter((e) => O.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, N.T4)(t.total, t.currency);
    if (null != e.trialId && O.h8.includes(e.trialId) && null == e.paymentSourceId) return x.intl.format(x.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === C.O0b.CANCELED) return x.intl.format(x.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === C.O0b.PAUSE_PENDING)
        return x.intl.format(x.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === C.O0b.PAUSED)
        return i.fractionalState !== O.a$.NONE
            ? x.intl.format(x.t.Q18lRE, {
                  renewalDate: i.endsAt.toDate(),
                  price: r
              })
            : null == e.pauseEndsAt
              ? n
                  ? x.intl.format(x.t.KTYQCg, {
                        planName: x.intl.string(x.t.Ipxkoq),
                        price: r
                    })
                  : x.intl.string(x.t.fMz6Li)
              : n
                ? x.intl.format(x.t.zcgtzc, {
                      planName: x.intl.string(x.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: r
                  })
                : x.intl.format(x.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === C.O0b.PAST_DUE) {
        var a, o;
        let t = em(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null === (a = e.metadata) || void 0 === a ? void 0 : a.google_grace_period_expires_date) != null && (t = s()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (o = e.metadata) || void 0 === o ? void 0 : o.apple_grace_period_expires_date) != null && (t = s()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? x.intl.format(x.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: D.Vz[e.paymentGateway],
                  paymentSourceLink: eV(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : x.intl.format(x.t.qEIzys, {
                  endDate: t.toDate(),
                  price: r
              });
    }
    {
        if (e.status === C.O0b.BILLING_RETRY)
            return x.intl.format(x.t.EMTLOT, {
                endDate: s()(e.currentPeriodStart).add(O.A5, 'days').toDate(),
                price: r
            });
        if (e.status === C.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, T.isAndroid)()
                ? x.intl.format(x.t.dtcxw8, {
                      endDate: s()(e.currentPeriodStart).add(O.gh, 'days').toDate(),
                      paymentGatewayName: D.Vz[e.paymentGateway],
                      paymentSourceLink: eV(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : x.intl.format(x.t.EMTLOT, {
                      endDate: s()(e.currentPeriodStart).add(O.gh, 'days').toDate(),
                      price: r
                  });
        if (eb(e)) return x.intl.format(x.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === C.O0b.UNPAID) return x.intl.format(x.t.CzTKoq, { maxProcessingTimeInDays: O.Rg });
        if (e.isPurchasedExternally)
            return x.intl.format(x.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: D.Vz[e.paymentGateway],
                subscriptionManagementLink: eV(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let a = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (a = eE(a, i.unactivatedUnits)),
            n
                ? x.intl.format(x.t.Vl3cEB, {
                      planName: x.intl.string(x.t.Ipxkoq),
                      renewalDate: a,
                      price: r
                  })
                : x.intl.format(x.t.Q18lRE, {
                      renewalDate: a,
                      price: r
                  })
        );
    }
}
function eE(e, t) {
    let n = s()(e);
    if (t.length > 0) {
        let e = tA(t);
        n = n.add(e, 'hours');
    }
    return n.toDate();
}
function ev(e) {
    let t = tA(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === O.a$.NONE)) return '';
    let n = {
            days: x.t.fYmir6,
            hours: x.t['C3RO+v'],
            minutes: x.t.r77oHR
        },
        i = (0, y.TD)(0, t * I.Z.Millis.HOUR);
    return (0, y.QX)(i, n);
}
function ey(e, t) {
    return (null != t && t !== O.a$.NONE) || null != e.renewalMutations || null != e.trialEndsAt || e.status === C.O0b.PAST_DUE;
}
function eI(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? x.intl.string(x.t['0rzJ4O']) : x.intl.string(x.t['9dLQ09'])), null != e.trialEndsAt && (t = x.intl.string(x.t.a9Mdb2)), t;
}
function eb(e) {
    return null != e.paymentSourceId && eT(e.paymentSourceId);
}
function eT(e) {
    if (null == e) return !1;
    let t = m.Z.getPaymentSource(e);
    return null != t && D.Uk.has(t.type);
}
function eS(e) {
    let { renewalMutations: t, additionalPlans: n, status: i } = e,
        r = ec(n);
    return 0 === (null != t ? ec(t.additionalPlans) : null) && 0 !== r ? C.O0b.CANCELED : i;
}
function eA(e) {
    return e.isPurchasedExternally ? e.status === C.O0b.CANCELED : eS(e) === C.O0b.CANCELED;
}
function eN(e) {
    var t, n, i;
    let { subscription: a, user: s, price: o, renewalInvoicePreview: l } = e,
        { planId: u, additionalPlans: c } = a,
        d = g.Z.get(u);
    r()(null != d, 'Missing plan');
    let f = ec(c),
        _ = ew(a.planId, a.paymentSourceId, a.currency, s).amount * f;
    if (null != l) {
        let e = l.invoiceItems.find((e) => O.Z1.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    o = null != o ? o : (0, N.T4)(_, a.currency);
    let p = null === (i = null !== (n = null == l ? void 0 : l.taxInclusive) && void 0 !== n ? n : null === (t = a.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
    if (eA(a))
        return a.isPurchasedViaGoogle
            ? x.intl.format(x.t['3/WTrK'], { quantity: f })
            : p
              ? x.intl.format(x.t['0ozBSE'], {
                    quantity: f,
                    rate: (0, N.og)(o, d.interval, d.intervalCount)
                })
              : x.intl.format(x.t['yjsv/v'], {
                    quantity: f,
                    rate: (0, N.og)(o, d.interval, d.intervalCount)
                });
    switch (a.status) {
        case C.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? x.intl.format(x.t.Nlf3nZ, {
                      quantity: f,
                      boostQuantity: f
                  })
                : p
                  ? x.intl.format(x.t.oiRy7u, {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, N.og)(o, d.interval, d.intervalCount)
                    })
                  : x.intl.format(x.t['0QxOAg'], {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, N.og)(o, d.interval, d.intervalCount)
                    });
        case C.O0b.PAUSE_PENDING:
        case C.O0b.PAUSED:
            return x.intl.string(x.t.CduWAg);
        default:
            return a.isPurchasedViaGoogle
                ? x.intl.format(x.t['5iud9v'], { quantity: f })
                : p
                  ? x.intl.format(x.t.eDwrLC, {
                        quantity: f,
                        rate: (0, N.og)(o, d.interval, d.intervalCount)
                    })
                  : x.intl.format(x.t.ijSDcH, {
                        quantity: f,
                        rate: (0, N.og)(o, d.interval, d.intervalCount)
                    });
    }
}
function eC(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = null != t ? Z(e.id, !1, i, t) : B(e.id, !1, i),
        a = (0, N.T4)(r.amount, r.currency);
    return e.currency !== D.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function eR(e, t, n) {
    let i = eC(e, t, n);
    return (0, N.og)(i, e.interval, e.intervalCount);
}
function eO(e, t) {
    let { planId: n } = e;
    if (e.status === C.O0b.CANCELED || e.status === C.O0b.PAUSE_PENDING) return n;
    r()(null != t, 'Expected invoicePreview');
    let i = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ef(t);
    });
    return null == i || (0, _.Q0)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId;
}
function eD(e, t) {
    let { status: n } = e;
    if (e.status === C.O0b.CANCELED || e.status === C.O0b.PAUSE_PENDING) return n;
    r()(null != t, 'Expected invoicePreview');
    let i = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ef(t);
    });
    return (null == i || (0, _.Q0)(i.subscriptionPlanId)) && (n = C.O0b.CANCELED), n;
}
function ex(e) {
    let { status: t, renewalMutations: n } = e;
    return t === C.O0b.CANCELED || (null != n && (0, _.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eL(e) {
    return e === C.O0b.PAST_DUE || e === C.O0b.ACCOUNT_HOLD || e === C.O0b.BILLING_RETRY;
}
function eP(e, t, n) {
    let i = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return t === n.id;
        }),
        r =
            null == i
                ? Z(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency
                  }).amount
                : i.amount;
    return (0, N.og)((0, N.T4)(r, e.currency), n.interval, n.intervalCount);
}
function ew(e, t, n, i) {
    let r =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: h.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        a = g.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, v.q2)(t, { tags: { planId: e } }), t);
    }
    let s = g.Z.getForSkuAndInterval(ty(O.Si.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error('Unsupported plan');
        throw ((0, v.q2)(t, { tags: { planId: e } }), t);
    }
    return Z(s.id, (0, A.I5)(i), !1, r);
}
function eM(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
            return null != t && null != n && !i;
        })
    );
}
function ek(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case O.Xh.PREMIUM_MONTH_TIER_0:
                return x.intl.string(x.t['0ggVqK']);
            case O.Xh.PREMIUM_YEAR_TIER_0:
                return x.intl.string(x.t['jm+ZQ0']);
            case O.Xh.PREMIUM_MONTH_TIER_1:
                return x.intl.string(x.t.uph4Jy);
            case O.Xh.PREMIUM_YEAR_TIER_1:
                return x.intl.string(x.t['D/l7Ym']);
            case O.Xh.PREMIUM_MONTH_TIER_2:
                return x.intl.string(x.t['5l1Mub']);
            case O.Xh.PREMIUM_YEAR_TIER_2:
                return x.intl.string(x.t.G0mISU);
        }
    switch (i) {
        case O.Xh.PREMIUM_MONTH_TIER_0:
            return n ? x.intl.string(x.t.cRCCJy) : x.intl.string(x.t['/G3aKy']);
        case O.Xh.PREMIUM_YEAR_TIER_0:
            return n ? x.intl.string(x.t.cRCCJy) : x.intl.string(x.t['2eQpsL']);
        case O.Xh.PREMIUM_MONTH_TIER_1:
            return n ? x.intl.string(x.t.cRCCJy) : x.intl.string(x.t.gueLg4);
        case O.Xh.PREMIUM_YEAR_TIER_1:
            return n ? x.intl.string(x.t.cRCCJy) : x.intl.string(x.t['MhH/vb']);
        case O.Xh.PREMIUM_MONTH_TIER_2:
            return n ? x.intl.string(x.t.cRCCJy) : x.intl.string(x.t.LQVQIi);
        case O.Xh.PREMIUM_YEAR_TIER_2:
            return n ? x.intl.string(x.t.cRCCJy) : x.intl.string(x.t['0nfg19']);
        case O.Xh.PREMIUM_3_MONTH_TIER_2:
        case O.Xh.PREMIUM_6_MONTH_TIER_2:
            return x.intl.formatToPlainString(x.t.BCD4fX, { intervalCount: t.intervalCount });
        case O.Xh.NONE_MONTH:
        case O.Xh.NONE_YEAR:
        case O.Xh.NONE_3_MONTH:
        case O.Xh.NONE_6_MONTH:
        case O.Xh.PREMIUM_MONTH_GUILD:
        case O.Xh.PREMIUM_YEAR_GUILD:
        case O.Xh.PREMIUM_3_MONTH_GUILD:
        case O.Xh.PREMIUM_6_MONTH_GUILD:
            return x.intl.string(x.t.eUEeCg);
    }
    let r = Error('User is purchasing an unsupported plan');
    throw ((0, v.q2)(r, { tags: { planId: i } }), r);
}
function eU(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = g.Z.get(t);
    return (
        r()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eG(e) {
    let { intervalType: t = O.rV.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case O.rV.DAY:
            if (n >= 7 && n % 7 == 0) return i ? x.intl.formatToPlainString(x.t.fRNBRU, { weeks: n / 7 }) : x.intl.formatToPlainString(x.t.EIpHEh, { weeks: n / 7 });
            return i ? x.intl.formatToPlainString(x.t['6Cdzo6'], { days: n }) : x.intl.formatToPlainString(x.t['kbBj/v'], { days: n });
        case O.rV.MONTH:
            return i ? x.intl.formatToPlainString(x.t.x5Mgxc, { months: n }) : x.intl.formatToPlainString(x.t['4SEnCQ'], { months: n });
        case O.rV.YEAR:
            return i ? x.intl.formatToPlainString(x.t['h+63ys'], { years: n }) : x.intl.formatToPlainString(x.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eB(e) {
    let { intervalType: t = O.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case O.rV.DAY:
            if (n >= 7 && n % 7 == 0) return x.intl.formatToPlainString(x.t['8awlzM'], { weeks: n / 7 });
            return x.intl.formatToPlainString(x.t.ZsgnLC, { days: n });
        case O.rV.MONTH:
            return x.intl.formatToPlainString(x.t.Y0HCVV, { months: n });
        case O.rV.YEAR:
            return x.intl.formatToPlainString(x.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eZ(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eB({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eF(e) {
    let { intervalType: t = O.rV.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case O.rV.DAY:
            if (n >= 7 && n % 7 == 0) return i ? x.intl.formatToPlainString(x.t.iVZYys, { weeks: n / 7 }) : x.intl.formatToPlainString(x.t.EmoBDw, { weeks: n / 7 });
            return i ? x.intl.formatToPlainString(x.t.jzH70d, { days: n }) : x.intl.formatToPlainString(x.t.k2UNz8, { days: n });
        case O.rV.MONTH:
            return i ? x.intl.formatToPlainString(x.t.erUSmJ, { months: n }) : x.intl.formatToPlainString(x.t.kridzM, { months: n });
        case O.rV.YEAR:
            return i ? x.intl.formatToPlainString(x.t.IfYQVF, { years: n }) : x.intl.formatToPlainString(x.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eV(e, t) {
    switch (e) {
        case C.gg$.APPLE_PARTNER:
        case C.gg$.APPLE:
            return L[t];
        case C.gg$.GOOGLE:
            return P[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function ej(e, t) {
    return (0, A.I5)(e) || eL(null == t ? void 0 : t.status);
}
function eH(e, t) {
    var n, i;
    let r = [],
        a = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find((e) => O.dJ.has(e.planId));
    return (
        null != a && r.push(a),
        r.push(...t),
        r.map((t) => {
            for (let n of e.items)
                if (t.planId === n.planId)
                    return {
                        ...n,
                        ...t
                    };
            return t;
        })
    );
}
function eY(e) {
    return e.filter((e) => !O.dJ.has(e.planId));
}
function eW(e, t, n, i) {
    var a, s;
    r()(i.has(t), 'Expected planId in group');
    let o = !1,
        l = (null !== (s = null === (a = e.renewalMutations) || void 0 === a ? void 0 : a.items) && void 0 !== s ? s : e.items).map((e) =>
            i.has(e.planId)
                ? ((o = !0),
                  {
                      ...e,
                      quantity: n,
                      planId: t
                  })
                : e
        );
    if (!o) {
        let i = {
                planId: t,
                quantity: n
            },
            r = e.items.find((e) => e.planId === t);
        null != r && (i.id = r.id), l.push(i);
    }
    return l.filter((e) => 0 !== e.quantity);
}
function eK(e, t) {
    return eW(e, t, 1, O.dJ);
}
function ez(e, t, n) {
    return eW(e, n, t, O.Z1);
}
function eq(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => O.dJ.has(e.planId));
    if (null != n) {
        let t = g.Z.get(n.planId);
        r()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let i = g.Z.get(e.planId);
                r()(null != i, 'Missing plan');
                let a = g.Z.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
                return (
                    r()(null != a, 'Missing planForInterval'),
                    {
                        ...e,
                        planId: a.id
                    }
                );
            }));
    }
    return e;
}
function eQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = O.a1[e].fileSize;
    return (0, b.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function eX(e) {
    return null == e ? null : e.items.find((e) => O.Z1.has(e.planId));
}
function eJ(e) {
    return null != e && null == G(e) && null != eX(e);
}
function e$(e) {
    let t = null != e ? G(e) : null;
    return null != t ? es(t.planId) : null;
}
function e0(e) {
    if (null != e) {
        let t = G(e);
        if (null != t) return z(t.planId);
    }
}
function e1(e) {
    if (null != e && null != e.renewalMutations) {
        let t = G(e.renewalMutations);
        if (null != t) return z(t.planId);
    }
}
function e2(e) {
    switch (e) {
        case O.p9.TIER_0:
            return R.Rj.PREMIUM_TIER_0;
        case O.p9.TIER_1:
            return R.Rj.PREMIUM_TIER_1;
        case O.p9.TIER_2:
            return R.Rj.PREMIUM_TIER_2;
    }
}
function e3(e) {
    return (0, d.ks)(d.g_, e);
}
function e4(e) {
    return (0, d.ks)(d.m_, e);
}
function e6(e) {
    return (0, d.ks)(d._y, e);
}
function e5(e) {
    return (0, d.ks)(d.tj, e);
}
function e7(e) {
    return (0, d.ks)(d.EQ, e);
}
function e8(e) {
    return (0, d.ks)(d.Pl, e);
}
function e9(e) {
    return (0, d.ks)(d.wN, e);
}
function te(e) {
    return (0, d.ks)(d._G, e);
}
function tt(e) {
    return (0, d.ks)(d.j4, e);
}
function tn(e) {
    return (0, d.ks)(d.lX, e);
}
function ti(e) {
    return (0, d.ks)(d.Uw, e);
}
function tr(e) {
    return (0, d.ks)(d.zm, e);
}
function ta(e) {
    return (0, d.ks)(d.zZ, e);
}
function ts(e) {
    return (0, d.ks)(d.do, e);
}
function to(e) {
    return (0, d.ks)(d.ZE, e);
}
function tl(e) {
    return (0, d.ks)(d.Ej, e);
}
function tu(e) {
    return (0, d.ks)(d.Ct, e);
}
function tc(e) {
    return (0, d.ks)(d.O1, e);
}
function td(e) {
    return (0, d.ks)(d.uw, e);
}
function tf(e, t) {
    return !!c.Z.hasActiveDemo(o.q.STREAM_HIGH_QUALITY) || ('high' === e ? (0, d.ks)(d.O8, t) : 'mid' === e && (0, d.ks)(d.g7, t));
}
function t_(e) {
    return (0, d.ks)(d.$0, e);
}
function tp(e) {
    return (0, d.ks)(d.ME, e);
}
function th(e) {
    return (0, d.ks)(d.AN, e);
}
function tm(e) {
    return (0, d.ks)(d._O, e);
}
function tg(e) {
    return (0, d.ks)(d.qH, e);
}
function tE(e) {
    return (0, d.ks)(d.hs, e);
}
function tv(e, t) {
    let n = (0, N.T4)(e.amount, e.currency),
        i = K(t);
    return ''.concat(n, '/').concat(i);
}
function ty(e) {
    return e;
}
function tI(e) {
    return 'isNitroLocked' in e;
}
function tb(e) {
    return null != e && O.OT.includes(e) ? 1 : 2;
}
function tT(e) {
    if (e === O.rV.YEAR) return x.intl.string(x.t.tfqrho);
    if (e === O.rV.MONTH) return x.intl.string(x.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tS(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tA(e) {
    return tN(e.map((e) => e.skuId));
}
function tN(e) {
    return e.reduce((e, t) => {
        let [n, i] = O.Cx[t],
            r = 1;
        switch (n) {
            case O.Se.HOUR:
                r = 1;
                break;
            case O.Se.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let tC = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < k,
    isPremiumAtLeast: A.yd,
    isPremium: A.I5,
    isPremiumExactly: A.M5,
    isPremiumEligible: tS,
    getPrice: Z,
    getDefaultPrice: B,
    getInterval: H,
    getIntervalString: W,
    getIntervalStringAsNoun: K,
    getPremiumType: z,
    getDisplayName: q,
    getDisplayPremiumType: $,
    getPremiumPlanOptions: ea,
    getUpgradeEligibilities: el,
    getReverseTrialWeeks: tb,
    formatInterval: tT,
    getPlanDescription: et,
    isPremiumSku: er,
    getClosestUpgrade: eu,
    getIntervalMonths: J,
    getUserMaxFileSize: S.h,
    getSkuIdForPlan: es,
    getSkuIdForPremiumType: eo,
    getNumIncludedPremiumGuildSubscriptionSlots: eh,
    getBillingInformationString: eg,
    extendDateWithUnconsumedFractionalPremium: eE,
    getUnactivatedFractionalPremiumHoursString: ev,
    isSwitchingPlansDisabled: ey,
    getSwitchingPlansDisabledMessage: eI,
    isNoneSubscription: _.Q0,
    getPlanIdFromInvoice: eO,
    getStatusFromInvoice: eD,
    isBaseSubscriptionCanceled: ex,
    getPremiumGuildIntervalPrice: ew,
    hasAccountCredit: eM,
    getBillingReviewSubheader: ek,
    getIntervalForInvoice: eU,
    getPremiumPlanItem: G,
    getGuildBoostPlanItem: eX,
    isBoostOnlySubscription: eJ,
    getPremiumSkuIdForSubscription: e$,
    getPremiumTypeFromSubscription: e0,
    getPremiumTypeFromSubscriptionRenewalMutations: e1,
    getPremiumGradientColor: e2,
    getUnactivatedFractionalPremiumHours: tA,
    castPremiumSubscriptionAsSkuId: ty,
    canUseAnimatedEmojis: e3,
    canUseEmojisEverywhere: e4,
    canUseSoundboardEverywhere: e6,
    canUseCustomCallSounds: e5,
    canUploadLargeFiles: e7,
    canUseBadges: e8,
    canUseHighVideoUploadQuality: e9,
    canEditDiscriminator: te,
    hasBoostDiscount: tt,
    canUseAnimatedAvatar: tn,
    canUseFancyVoiceChannelReactions: ti,
    canInstallPremiumApplications: tr,
    canUseIncreasedMessageLength: ta,
    canUseIncreasedGuildCap: ts,
    canRedeemPremiumPerks: to,
    canUsePremiumProfileCustomization: tl,
    canUsePremiumAppIcons: tu,
    canUsePremiumGuildMemberProfile: tc,
    canUseClientThemes: td,
    canStreamQuality: tf,
    hasFreeBoosts: t_,
    canUseCustomStickersEverywhere: tp,
    canUseCustomBackgrounds: th,
    canUseCollectibles: tm,
    canUseCustomNotificationSounds: tg,
    canUsePremiumVoiceFilters: tE,
    formatPriceString: tv,
    StreamQuality: U
});
