n.d(t, {
    Af: () => k,
    Am: () => eg,
    Ap: () => eI,
    CY: () => U,
    Gf: () => K,
    I5: () => b.I5,
    JE: () => eZ,
    JP: () => j,
    L7: () => H,
    M5: () => b.M5,
    MY: () => eV,
    N1: () => em,
    PK: () => eN,
    PV: () => ef,
    Px: () => J,
    Qo: () => eF,
    Rd: () => W,
    Rt: () => eU,
    T4: () => Z,
    U2: () => M,
    Ue: () => ej,
    V7: () => ei,
    W_: () => ew,
    Wz: () => tv,
    XK: () => eY,
    Z8: () => ed,
    ZP: () => tN,
    Zx: () => eW,
    _O: () => ty,
    a5: () => ek,
    aS: () => G,
    al: () => eH,
    aq: () => q,
    bt: () => eS,
    dn: () => eM,
    eP: () => Y,
    fr: () => eG,
    gB: () => eK,
    gq: () => X,
    gy: () => eA,
    he: () => eJ,
    if: () => eB,
    jP: () => z,
    k5: () => eX,
    lY: () => ep,
    qV: () => ee,
    uV: () => el,
    uZ: () => ec,
    v6: () => eb,
    v9: () => ez,
    xG: () => tA,
    yd: () => b.yd,
    zL: () => et,
    zV: () => eD
}),
    n(411104),
    n(47120),
    n(733860),
    n(724458),
    n(653041);
var i = n(512722),
    r = n.n(i),
    a = n(913527),
    s = n.n(a);
n(442837);
var o = n(782568),
    l = n(710845),
    u = n(803905),
    c = n(439017),
    d = n(301766),
    f = n(594174),
    _ = n(351402),
    p = n(853872),
    h = n(509545),
    m = n(78839),
    g = n(122289),
    E = n(55935),
    v = n(70956),
    y = n(424218),
    I = n(358085),
    T = n(380684),
    b = n(111361),
    S = n(937615),
    A = n(981631),
    N = n(334431),
    C = n(474936),
    R = n(231338),
    O = n(388032);
let D = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    L = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    x = new l.Z('PremiumUtils.tsx'),
    P = {
        [C.Xh.NONE_MONTH]: [C.Xh.NONE_YEAR, C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_1, C.Xh.PREMIUM_MONTH_TIER_1],
        [C.Xh.NONE_YEAR]: [C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_1, C.Xh.PREMIUM_MONTH_TIER_1],
        [C.Xh.PREMIUM_MONTH_TIER_0]: [C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_1, C.Xh.PREMIUM_MONTH_TIER_1, C.Xh.PREMIUM_YEAR_TIER_0],
        [C.Xh.PREMIUM_YEAR_TIER_0]: [C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_1, C.Xh.PREMIUM_MONTH_TIER_1],
        [C.Xh.PREMIUM_MONTH_TIER_1]: [C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_1],
        [C.Xh.PREMIUM_YEAR_TIER_1]: [C.Xh.PREMIUM_YEAR_TIER_2],
        [C.Xh.PREMIUM_MONTH_TIER_2]: [C.Xh.PREMIUM_YEAR_TIER_2],
        [C.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [C.Xh.NONE_MONTH, C.Xh.NONE_YEAR, C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_1, C.Xh.PREMIUM_MONTH_TIER_1, C.Xh.PREMIUM_YEAR_TIER_0, C.Xh.PREMIUM_MONTH_TIER_0]
    },
    w = 2592000000;
var M = (function (e) {
    return (e.MID = 'mid'), (e.HIGH = 'high'), e;
})({});
function k(e) {
    return e.items.find((e) => C.dJ.has(e.planId));
}
function U(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null !== (t = p.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        a = m.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (r = a.paymentSourceId), G(e, n, i, { paymentSourceId: r });
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: r, currency: a } = i;
    if (null != h.Z.get(e)) {
        let i = A.tuJ.DEFAULT;
        n ? (i = A.tuJ.GIFT) : t && (i = A.tuJ.PREMIUM_TIER_1);
        let s = F(e, {
            paymentSourceId: r,
            purchaseType: i,
            currency: a
        });
        if (null == s) {
            let t = Error("Couldn't find price");
            throw (
                ((0, g.q2)(t, {
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
        ((0, g.q2)(s, {
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
function B(e, t) {
    let n = h.Z.get(e);
    if (null == n) {
        let n = Error('Plan not found');
        throw (
            ((0, g.q2)(n, {
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
    if (null == i) throw (x.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return i;
}
function Z(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.tuJ.DEFAULT },
        i = B(e, n);
    if (null != t) {
        let r = i.paymentSourcePrices[t];
        if (null == r) {
            x.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), x.info('prices: '.concat(r));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, g.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== r.length) return r;
    }
    if (null == i.countryPrices.prices) {
        x.info('countryPrices: '.concat(JSON.stringify(i.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, g.q2)(t, {
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
function F(e) {
    let { paymentSourceId: t, purchaseType: n, currency: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.tuJ.DEFAULT },
        r = Z(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === r.length && x.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != i) ? r.find((e) => e.currency === i) : r[0];
}
function V(e) {
    let t = C.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function j(e) {
    switch (e) {
        case C.EA.MONTH:
            return O.intl.string(O.t.FPybU1);
        case C.EA.YEAR:
            return O.intl.string(O.t.tfqrho);
        case C.EA.DAY:
        case C.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function H(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : C.p9.TIER_2;
    if (t || n)
        switch (e) {
            case C.rV.MONTH:
                let s = O.intl.formatToPlainString(a === C.p9.TIER_0 ? O.t.NPKsLy : O.t.poEovb, { timeInterval: O.intl.string(O.t.FPybU1) });
                return r ? s : O.intl.string(O.t.Mh9bTk);
            case C.rV.YEAR:
                let o = O.intl.formatToPlainString(a === C.p9.TIER_0 ? O.t.NPKsLy : O.t.poEovb, { timeInterval: O.intl.string(O.t.tfqrho) });
                return r ? o : O.intl.string(O.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case C.rV.MONTH:
            if (1 !== i) return O.intl.formatToPlainString(O.t['0UlZnJ'], { intervalCount: i });
            return O.intl.string(O.t['DKzs9/']);
        case C.rV.YEAR:
            return O.intl.string(O.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function Y(e) {
    switch (e) {
        case C.rV.MONTH:
            return O.intl.string(O.t.FPybU1);
        case C.rV.YEAR:
            return O.intl.string(O.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function W(e) {
    let t = C.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
            return t ? O.intl.format(O.t.TZXHNj, { duration: i }) : n ? O.intl.string(O.t['81iAgo']) : O.intl.string(O.t['0efVPz']);
        case C.Xh.PREMIUM_YEAR_TIER_0:
            return t ? O.intl.format(O.t.eqRhCw, { duration: i }) : n ? O.intl.string(O.t.UvzqY2) : O.intl.string(O.t.eoVuBg);
        case C.Xh.PREMIUM_MONTH_TIER_1:
            return n ? O.intl.string(O.t['g/dH5u']) : O.intl.string(O.t['7O6qSk']);
        case C.Xh.PREMIUM_YEAR_TIER_1:
            return n ? O.intl.string(O.t.pdZJam) : O.intl.string(O.t.Md5xbm);
        case C.Xh.PREMIUM_MONTH_TIER_2:
            return t ? O.intl.format(O.t.aI6QX1, { duration: i }) : n ? O.intl.string(O.t.SmVbHR) : O.intl.string(O.t.FKYNCw);
        case C.Xh.PREMIUM_YEAR_TIER_2:
            return t ? O.intl.format(O.t['1wBcPj'], { duration: i }) : n ? O.intl.string(O.t.JIq4Oz) : O.intl.string(O.t['cfu/5e']);
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
            return O.intl.string(O.t.wCbINj);
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
            return O.intl.string(O.t['e3/Ara']);
        case C.Xh.PREMIUM_MONTH_GUILD:
            return n ? O.intl.string(O.t['6ZR3Bw']) : O.intl.string(O.t.h80cx8);
        case C.Xh.PREMIUM_YEAR_GUILD:
            return n ? O.intl.string(O.t.YDpAzc) : O.intl.string(O.t.ZHkls7);
        case C.Xh.PREMIUM_3_MONTH_GUILD:
            return O.intl.string(O.t.EZHHBw);
        case C.Xh.PREMIUM_6_MONTH_GUILD:
            return O.intl.string(O.t.X2KDOz);
        case C.Xh.PREMIUM_MONTH_LEGACY:
            return O.intl.string(O.t['PD6k7+']);
        case C.Xh.PREMIUM_YEAR_LEGACY:
            return O.intl.string(O.t.LtJgTE);
    }
    let r = Error('Unsupported plan');
    throw ((0, g.q2)(r, { tags: { planId: e } }), r);
}
function z(e) {
    switch (e) {
        case C.Si.TIER_0:
            return O.intl.string(O.t['t9uG/v']);
        case C.Si.TIER_1:
            return O.intl.string(O.t['FSOz7+']);
        case C.Si.TIER_2:
            return O.intl.string(O.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, g.q2)(t, { tags: { skuId: e } }), t);
}
function q(e) {
    switch (e) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
        case C.Xh.PREMIUM_YEAR_TIER_0:
            return O.intl.string(O.t['t9uG/v']);
        case C.Xh.PREMIUM_MONTH_TIER_1:
        case C.Xh.PREMIUM_YEAR_TIER_1:
            return O.intl.string(O.t['FSOz7+']);
        case C.Xh.PREMIUM_MONTH_TIER_2:
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
        case C.Xh.PREMIUM_YEAR_TIER_2:
            return O.intl.string(O.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, g.q2)(t, { tags: { planId: e } }), t);
}
function Q(e, t) {
    if (e === C.rV.MONTH) return t;
    if (e === C.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
        case C.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case C.Xh.PREMIUM_MONTH_TIER_1:
        case C.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case C.Xh.PREMIUM_MONTH_TIER_2:
        case C.Xh.PREMIUM_YEAR_TIER_2:
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case C.p9.TIER_0:
            return t ? 'Basic' : O.intl.string(O.t['t9uG/v']);
        case C.p9.TIER_1:
            return t ? 'Classic' : O.intl.string(O.t['FSOz7+']);
        case C.p9.TIER_2:
            return O.intl.string(O.t['lG6a5+']);
    }
}
function $(e) {
    var t, n, i, r, a, l, u, c, d, _;
    let { subscription: p, planId: h, price: m, includePremiumGuilds: g, hasDiscountApplied: v, activeDiscountInfo: y, renewalInvoicePreview: I, hasFractionalPremiumWithSub: T } = e,
        b = C.GP[h],
        S = tE(U(b.id), b.interval),
        N = eO(p) || (null == p.paymentSourceId && !p.isPurchasedExternally && !(null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        R = null != m && null == p.paymentGateway,
        D = p.status === A.O0b.UNPAID && null !== p.latestInvoice && (null === (n = p.latestInvoice) || void 0 === n ? void 0 : n.status) === A.hUK.OPEN,
        L = N ? A.O0b.CANCELED : D ? A.O0b.UNPAID : p.status,
        x = null === (a = null !== (r = null == I ? void 0 : I.taxInclusive) && void 0 !== r ? r : null === (i = p.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === a || a,
        P = C.cb + (g ? el(p.additionalPlans) : 0),
        w = R ? (x ? O.intl.format(O.t['cd+hqK'], { price: m }) : O.intl.format(O.t.NUkcpK, { price: m })) : O.intl.string(O.t.zYx3Y2),
        M = R ? (x ? O.intl.format(O.t.VsKcFB, { price: m }) : O.intl.format(O.t.hJ5xER, { price: m })) : O.intl.string(O.t['8rSipK']),
        k = R
            ? x
                ? O.intl.format(O.t['jRy6/P'], {
                      price: m,
                      num: P
                  })
                : O.intl.format(O.t.tTNE8P, {
                      price: m,
                      num: P
                  })
            : O.intl.format(O.t['U+z/HB'], { num: P });
    switch (h) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
        case C.Xh.PREMIUM_YEAR_TIER_0:
            switch (L) {
                case A.O0b.CANCELED:
                    return R ? (x ? O.intl.format(O.t['USi/nZ'], { price: m }) : O.intl.format(O.t['FS//l5'], { price: m })) : O.intl.string(O.t.JshLzs);
                case A.O0b.ACCOUNT_HOLD:
                    return R ? (x ? O.intl.format(O.t['5mv+2t'], { price: m }) : O.intl.format(O.t.nkAEfX, { price: m })) : O.intl.format(O.t.SsLIXV, {});
                case A.O0b.UNPAID:
                    return O.intl.format(O.t.cmkbFB, {});
                case A.O0b.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? s()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? O.intl.format(O.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : O.intl.format(O.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (T) return w;
                    return O.intl.format(O.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case A.O0b.PAST_DUE:
                    return O.intl.format(O.t['d+0vws'], {
                        endDate: (0, E.vc)(ep(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, o.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return w;
            }
        case C.Xh.PREMIUM_MONTH_TIER_1:
        case C.Xh.PREMIUM_YEAR_TIER_1:
            switch (L) {
                case A.O0b.CANCELED:
                    return R ? (x ? O.intl.format(O.t.cXy8Bg, { price: m }) : O.intl.format(O.t['C/XsHh'], { price: m })) : O.intl.string(O.t.K6tYFR);
                case A.O0b.ACCOUNT_HOLD:
                    return R ? (x ? O.intl.format(O.t.HBkIBg, { price: m }) : O.intl.format(O.t.ZsO1S0, { price: m })) : O.intl.format(O.t['0+/WHx'], {});
                case A.O0b.UNPAID:
                    return O.intl.format(O.t.McIzws, {});
                case A.O0b.PAUSE_PENDING:
                    let B = null != p.pauseEndsAt ? s()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != B
                        ? O.intl.format(O.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: B
                          })
                        : O.intl.format(O.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (T) return M;
                    return O.intl.format(O.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case A.O0b.PAST_DUE:
                    return O.intl.format(O.t['d+0vws'], {
                        endDate: (0, E.vc)(ep(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, o.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return M;
            }
        case C.Xh.PREMIUM_MONTH_TIER_2:
        case C.Xh.PREMIUM_YEAR_TIER_2:
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (L) {
                case A.O0b.CANCELED:
                    return R
                        ? x
                            ? O.intl.format(O.t.xoFgRk, {
                                  price: m,
                                  num: P
                              })
                            : O.intl.format(O.t.nXdbKi, {
                                  price: m,
                                  num: P
                              })
                        : O.intl.format(O.t.EcSdRE, { num: P });
                case A.O0b.ACCOUNT_HOLD:
                    return R
                        ? x
                            ? O.intl.format(O.t['5C/0QE'], {
                                  price: m,
                                  num: P
                              })
                            : O.intl.format(O.t.xfYkho, {
                                  price: m,
                                  num: P
                              })
                        : O.intl.format(O.t.ivjxcn, { num: P });
                case A.O0b.UNPAID:
                    return O.intl.format(O.t['0HopYW'], { num: P });
                case A.O0b.PAUSE_PENDING:
                    let Z = null != p.pauseEndsAt ? s()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != Z
                        ? O.intl.format(O.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: Z
                          })
                        : O.intl.format(O.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (T) return k;
                    return O.intl.format(O.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case A.O0b.BILLING_RETRY:
                    return O.intl.format(O.t['IlJ/HR'], { endDate: s()(p.currentPeriodStart).add(C.A5, 'days').toDate() });
                case A.O0b.PAST_DUE:
                    return O.intl.format(O.t['d+0vws'], {
                        endDate: (0, E.vc)(ep(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, o.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return v
                        ? h === C.Xh.PREMIUM_YEAR_TIER_2
                            ? O.intl.format(O.t['+qqh6u'], {
                                  percent: null !== (l = null == y ? void 0 : y.percentage) && void 0 !== l ? l : C.Bo,
                                  regularPrice: S
                              })
                            : x
                              ? O.intl.formatToPlainString(O.t['3Ziutb'], {
                                    percent: null !== (u = null == y ? void 0 : y.percentage) && void 0 !== u ? u : C.M_,
                                    regularPrice: S,
                                    numMonths: null !== (c = null == y ? void 0 : y.duration) && void 0 !== c ? c : C.rt
                                })
                              : O.intl.formatToPlainString(O.t['G6+XOT'], {
                                    percent: null !== (d = null == y ? void 0 : y.percentage) && void 0 !== d ? d : C.M_,
                                    regularPrice: S,
                                    numMonths: null !== (_ = null == y ? void 0 : y.duration) && void 0 !== _ ? _ : C.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(h));
    }
}
function ee(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: i, includePremiumGuilds: a = !1, hasDiscountApplied: s = !1, activeDiscountInfo: o, hasFractionalPremiumWithSub: l = !1 } = e,
        u = h.Z.get(i);
    return (
        r()(null != u, 'Missing plan'),
        $({
            subscription: n,
            planId: u.id,
            price: eL(t, n, u),
            includePremiumGuilds: a,
            hasDiscountApplied: s,
            activeDiscountInfo: o,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function et(e) {
    let { planId: t, additionalPlans: n } = e,
        i = (0, d.Q0)(t) ? null : K(t),
        r =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return C.Z1.has(t);
                  }),
        a = (null == r ? void 0 : r.planId) === C.Xh.PREMIUM_MONTH_GUILD ? O.t.Pi5yMD : (null == r ? void 0 : r.planId) === C.Xh.PREMIUM_YEAR_GUILD ? O.t.Pi5yMD : null,
        s = null != a ? O.intl.formatToPlainString(a, { num: null == r ? void 0 : r.quantity }) : void 0;
    if (null != i && null != s)
        return O.intl.formatToPlainString(O.t.FN5T9v, {
            premiumDescription: i,
            premiumGuildDescription: s
        });
    if (null != i) return i;
    if (null != s) return s;
    throw Error('Subscription without premium or premium guild subscription');
}
function en(e) {
    return e === C.Si.TIER_0 || e === C.Si.TIER_1 || e === C.Si.TIER_2;
}
function ei(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: i, currentSubscription: r, isGift: a, isEligibleForTrial: s, defaultPlanId: o, defaultToMonthlyPlan: l } = e;
    if (null == t || !n) return [];
    let u = void 0 !== o && t === C.GP[o].skuId ? o : void 0;
    void 0 === u && l && !a && (u = C.IW[t]), s && !a && (void 0 === o || (l && C.No.has(o))) && c.k.trackExposure({ location: 'de805e_1' });
    let d = [];
    switch (t) {
        case C.Si.TIER_0:
            d = [C.Xh.PREMIUM_YEAR_TIER_0, C.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case C.Si.TIER_1:
            d = [C.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case C.Si.TIER_2:
            let f = i;
            if (null != r) {
                let e = r.items[0].planId;
                if (C.o4.has(e)) {
                    let t = C.GP[e];
                    f = [...C.o4].filter((e) => {
                        let n = C.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === C.Si.TIER_2;
                    });
                } else f = [];
            }
            d = [C.Xh.PREMIUM_YEAR_TIER_2, ...f, C.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(t));
    }
    if (void 0 !== u) {
        let e = d.indexOf(u);
        d.splice(e, 1), d.unshift(u);
    }
    return d;
}
function er(e) {
    let t = C.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ea(e) {
    switch (e) {
        case C.p9.TIER_0:
            return C.Si.TIER_0;
        case C.p9.TIER_1:
            return C.Si.TIER_1;
        case C.p9.TIER_2:
            return C.Si.TIER_2;
    }
}
function es(e) {
    var t;
    return null == e ? P.ALL : null !== (t = P[e]) && void 0 !== t ? t : [];
}
function eo(e) {
    let t = C.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        i = es(e);
    for (let e of Object.keys(C.GP)) {
        let { interval: t } = C.GP[e];
        if (n === t && i.includes(e)) return e;
    }
    return null;
}
function el(e) {
    let t = h.Z.getPlanIdsForSkus([tv(C.Si.GUILD)]);
    r()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eu = new Set([C.Xh.NONE_MONTH, C.Xh.NONE_3_MONTH, C.Xh.NONE_6_MONTH, C.Xh.NONE_YEAR, C.Xh.PREMIUM_MONTH_TIER_0, C.Xh.PREMIUM_MONTH_TIER_1, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_0, C.Xh.PREMIUM_YEAR_TIER_1, C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_3_MONTH_TIER_2, C.Xh.PREMIUM_6_MONTH_TIER_2]);
function ec(e) {
    return eu.has(e);
}
function ed(e) {
    return C.Z1.has(e);
}
function ef(e) {
    return ec(e) || ed(e);
}
function e_(e) {
    return W(e) === C.p9.TIER_2 ? C.cb : 0;
}
function ep(e) {
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
        let t = e.isPurchasedViaApple ? C.$7 : C.Ue;
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
        let t = null == e.paymentSourceId ? C.UA : C.zp;
        return {
            days: t,
            expiresDate: s()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function eh(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      fractionalState: C.a$.NONE,
                      startsAt: s()(0),
                      endsAt: s()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        r = n
            ? (0, S.T4)(
                  t.invoiceItems
                      .filter((e) => C.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, S.T4)(t.total, t.currency);
    if (null != e.trialId && C.h8.includes(e.trialId) && null == e.paymentSourceId) return O.intl.format(O.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === A.O0b.CANCELED) return O.intl.format(O.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === A.O0b.PAUSE_PENDING)
        return O.intl.format(O.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === A.O0b.PAUSED)
        return i.fractionalState !== C.a$.NONE
            ? O.intl.format(O.t.Q18lRE, {
                  renewalDate: i.endsAt.toDate(),
                  price: r
              })
            : null == e.pauseEndsAt
              ? n
                  ? O.intl.format(O.t.KTYQCg, {
                        planName: O.intl.string(O.t.Ipxkoq),
                        price: r
                    })
                  : O.intl.string(O.t.fMz6Li)
              : n
                ? O.intl.format(O.t.zcgtzc, {
                      planName: O.intl.string(O.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: r
                  })
                : O.intl.format(O.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === A.O0b.PAST_DUE) {
        var a, o;
        let t = ep(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null === (a = e.metadata) || void 0 === a ? void 0 : a.google_grace_period_expires_date) != null && (t = s()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (o = e.metadata) || void 0 === o ? void 0 : o.apple_grace_period_expires_date) != null && (t = s()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? O.intl.format(O.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: R.Vz[e.paymentGateway],
                  paymentSourceLink: eZ(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : O.intl.format(O.t.qEIzys, {
                  endDate: t.toDate(),
                  price: r
              });
    }
    {
        if (e.status === A.O0b.BILLING_RETRY)
            return O.intl.format(O.t.EMTLOT, {
                endDate: s()(e.currentPeriodStart).add(C.A5, 'days').toDate(),
                price: r
            });
        if (e.status === A.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, I.isAndroid)()
                ? O.intl.format(O.t.dtcxw8, {
                      endDate: s()(e.currentPeriodStart).add(C.gh, 'days').toDate(),
                      paymentGatewayName: R.Vz[e.paymentGateway],
                      paymentSourceLink: eZ(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : O.intl.format(O.t.EMTLOT, {
                      endDate: s()(e.currentPeriodStart).add(C.gh, 'days').toDate(),
                      price: r
                  });
        if (ey(e)) return O.intl.format(O.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === A.O0b.UNPAID) return O.intl.format(O.t.CzTKoq, { maxProcessingTimeInDays: C.Rg });
        if (e.isPurchasedExternally)
            return O.intl.format(O.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: R.Vz[e.paymentGateway],
                subscriptionManagementLink: eZ(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let a = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (a = em(a, i.unactivatedUnits)),
            n
                ? O.intl.format(O.t.Vl3cEB, {
                      planName: O.intl.string(O.t.Ipxkoq),
                      renewalDate: a,
                      price: r
                  })
                : O.intl.format(O.t.Q18lRE, {
                      renewalDate: a,
                      price: r
                  })
        );
    }
}
function em(e, t) {
    let n = s()(e);
    if (t.length > 0) {
        let e = tS(t);
        n = n.add(e, 'hours');
    }
    return n.toDate();
}
function eg(e) {
    let t = tS(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === C.a$.NONE)) return '';
    let n = {
            days: O.t.fYmir6,
            hours: O.t['C3RO+v'],
            minutes: O.t.r77oHR
        },
        i = (0, E.TD)(0, t * v.Z.Millis.HOUR);
    return (0, E.QX)(i, n);
}
function eE(e, t) {
    return (null != t && t !== C.a$.NONE) || null != e.renewalMutations || null != e.trialEndsAt || e.status === A.O0b.PAST_DUE;
}
function ev(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? O.intl.string(O.t['0rzJ4O']) : O.intl.string(O.t['9dLQ09'])), null != e.trialEndsAt && (t = O.intl.string(O.t.a9Mdb2)), t;
}
function ey(e) {
    return null != e.paymentSourceId && eI(e.paymentSourceId);
}
function eI(e) {
    if (null == e) return !1;
    let t = p.Z.getPaymentSource(e);
    return null != t && R.Uk.has(t.type);
}
function eT(e) {
    let { renewalMutations: t, additionalPlans: n, status: i } = e,
        r = el(n);
    return 0 === (null != t ? el(t.additionalPlans) : null) && 0 !== r ? A.O0b.CANCELED : i;
}
function eb(e) {
    return e.isPurchasedExternally ? e.status === A.O0b.CANCELED : eT(e) === A.O0b.CANCELED;
}
function eS(e) {
    var t, n, i;
    let { subscription: a, user: s, price: o, renewalInvoicePreview: l } = e,
        { planId: u, additionalPlans: c } = a,
        d = h.Z.get(u);
    r()(null != d, 'Missing plan');
    let f = el(c),
        _ = ex(a.planId, a.paymentSourceId, a.currency, s).amount * f;
    if (null != l) {
        let e = l.invoiceItems.find((e) => C.Z1.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    o = null != o ? o : (0, S.T4)(_, a.currency);
    let p = null === (i = null !== (n = null == l ? void 0 : l.taxInclusive) && void 0 !== n ? n : null === (t = a.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
    if (eb(a))
        return a.isPurchasedViaGoogle
            ? O.intl.format(O.t['3/WTrK'], { quantity: f })
            : p
              ? O.intl.format(O.t['0ozBSE'], {
                    quantity: f,
                    rate: (0, S.og)(o, d.interval, d.intervalCount)
                })
              : O.intl.format(O.t['yjsv/v'], {
                    quantity: f,
                    rate: (0, S.og)(o, d.interval, d.intervalCount)
                });
    switch (a.status) {
        case A.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? O.intl.format(O.t.Nlf3nZ, {
                      quantity: f,
                      boostQuantity: f
                  })
                : p
                  ? O.intl.format(O.t.oiRy7u, {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, S.og)(o, d.interval, d.intervalCount)
                    })
                  : O.intl.format(O.t['0QxOAg'], {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, S.og)(o, d.interval, d.intervalCount)
                    });
        case A.O0b.PAUSE_PENDING:
        case A.O0b.PAUSED:
            return O.intl.string(O.t.CduWAg);
        default:
            return a.isPurchasedViaGoogle
                ? O.intl.format(O.t['5iud9v'], { quantity: f })
                : p
                  ? O.intl.format(O.t.eDwrLC, {
                        quantity: f,
                        rate: (0, S.og)(o, d.interval, d.intervalCount)
                    })
                  : O.intl.format(O.t.ijSDcH, {
                        quantity: f,
                        rate: (0, S.og)(o, d.interval, d.intervalCount)
                    });
    }
}
function eA(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = null != t ? G(e.id, !1, i, t) : U(e.id, !1, i),
        a = (0, S.T4)(r.amount, r.currency);
    return e.currency !== R.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function eN(e, t, n) {
    let i = eA(e, t, n);
    return (0, S.og)(i, e.interval, e.intervalCount);
}
function eC(e, t) {
    let { planId: n } = e;
    if (e.status === A.O0b.CANCELED || e.status === A.O0b.PAUSE_PENDING) return n;
    r()(null != t, 'Expected invoicePreview');
    let i = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ec(t);
    });
    return null == i || (0, d.Q0)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId;
}
function eR(e, t) {
    let { status: n } = e;
    if (e.status === A.O0b.CANCELED || e.status === A.O0b.PAUSE_PENDING) return n;
    r()(null != t, 'Expected invoicePreview');
    let i = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ec(t);
    });
    return (null == i || (0, d.Q0)(i.subscriptionPlanId)) && (n = A.O0b.CANCELED), n;
}
function eO(e) {
    let { status: t, renewalMutations: n } = e;
    return t === A.O0b.CANCELED || (null != n && (0, d.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eD(e) {
    return e === A.O0b.PAST_DUE || e === A.O0b.ACCOUNT_HOLD || e === A.O0b.BILLING_RETRY;
}
function eL(e, t, n) {
    let i = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return t === n.id;
        }),
        r =
            null == i
                ? G(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency
                  }).amount
                : i.amount;
    return (0, S.og)((0, S.T4)(r, e.currency), n.interval, n.intervalCount);
}
function ex(e, t, n, i) {
    let r =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: _.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        a = h.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    let s = h.Z.getForSkuAndInterval(tv(C.Si.GUILD), a.interval, a.intervalCount);
    if (null == s) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    return G(s.id, (0, b.I5)(i), !1, r);
}
function eP(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
            return null != t && null != n && !i;
        })
    );
}
function ew(e, t, n) {
    let i = t.id;
    if (null != e)
        switch (i) {
            case C.Xh.PREMIUM_MONTH_TIER_0:
                return O.intl.string(O.t['0ggVqK']);
            case C.Xh.PREMIUM_YEAR_TIER_0:
                return O.intl.string(O.t['jm+ZQ0']);
            case C.Xh.PREMIUM_MONTH_TIER_1:
                return O.intl.string(O.t.uph4Jy);
            case C.Xh.PREMIUM_YEAR_TIER_1:
                return O.intl.string(O.t['D/l7Ym']);
            case C.Xh.PREMIUM_MONTH_TIER_2:
                return O.intl.string(O.t['5l1Mub']);
            case C.Xh.PREMIUM_YEAR_TIER_2:
                return O.intl.string(O.t.G0mISU);
        }
    switch (i) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
            return n ? O.intl.string(O.t.cRCCJy) : O.intl.string(O.t['/G3aKy']);
        case C.Xh.PREMIUM_YEAR_TIER_0:
            return n ? O.intl.string(O.t.cRCCJy) : O.intl.string(O.t['2eQpsL']);
        case C.Xh.PREMIUM_MONTH_TIER_1:
            return n ? O.intl.string(O.t.cRCCJy) : O.intl.string(O.t.gueLg4);
        case C.Xh.PREMIUM_YEAR_TIER_1:
            return n ? O.intl.string(O.t.cRCCJy) : O.intl.string(O.t['MhH/vb']);
        case C.Xh.PREMIUM_MONTH_TIER_2:
            return n ? O.intl.string(O.t.cRCCJy) : O.intl.string(O.t.LQVQIi);
        case C.Xh.PREMIUM_YEAR_TIER_2:
            return n ? O.intl.string(O.t.cRCCJy) : O.intl.string(O.t['0nfg19']);
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
            return O.intl.formatToPlainString(O.t.BCD4fX, { intervalCount: t.intervalCount });
        case C.Xh.NONE_MONTH:
        case C.Xh.NONE_YEAR:
        case C.Xh.NONE_3_MONTH:
        case C.Xh.NONE_6_MONTH:
        case C.Xh.PREMIUM_MONTH_GUILD:
        case C.Xh.PREMIUM_YEAR_GUILD:
        case C.Xh.PREMIUM_3_MONTH_GUILD:
        case C.Xh.PREMIUM_6_MONTH_GUILD:
            return O.intl.string(O.t.eUEeCg);
    }
    let r = Error('User is purchasing an unsupported plan');
    throw ((0, g.q2)(r, { tags: { planId: i } }), r);
}
function eM(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = h.Z.get(t);
    return (
        r()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function ek(e) {
    let { intervalType: t = C.rV.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case C.rV.DAY:
            if (n >= 7 && n % 7 == 0) return i ? O.intl.formatToPlainString(O.t.fRNBRU, { weeks: n / 7 }) : O.intl.formatToPlainString(O.t.EIpHEh, { weeks: n / 7 });
            return i ? O.intl.formatToPlainString(O.t['6Cdzo6'], { days: n }) : O.intl.formatToPlainString(O.t['kbBj/v'], { days: n });
        case C.rV.MONTH:
            return i ? O.intl.formatToPlainString(O.t.x5Mgxc, { months: n }) : O.intl.formatToPlainString(O.t['4SEnCQ'], { months: n });
        case C.rV.YEAR:
            return i ? O.intl.formatToPlainString(O.t['h+63ys'], { years: n }) : O.intl.formatToPlainString(O.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eU(e) {
    let { intervalType: t = C.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case C.rV.DAY:
            if (n >= 7 && n % 7 == 0) return O.intl.formatToPlainString(O.t['8awlzM'], { weeks: n / 7 });
            return O.intl.formatToPlainString(O.t.ZsgnLC, { days: n });
        case C.rV.MONTH:
            return O.intl.formatToPlainString(O.t.Y0HCVV, { months: n });
        case C.rV.YEAR:
            return O.intl.formatToPlainString(O.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eG(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eU({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eB(e) {
    let { intervalType: t = C.rV.MONTH, intervalCount: n = 1, capitalize: i = !1 } = e;
    switch (t) {
        case C.rV.DAY:
            if (n >= 7 && n % 7 == 0) return i ? O.intl.formatToPlainString(O.t.iVZYys, { weeks: n / 7 }) : O.intl.formatToPlainString(O.t.EmoBDw, { weeks: n / 7 });
            return i ? O.intl.formatToPlainString(O.t.jzH70d, { days: n }) : O.intl.formatToPlainString(O.t.k2UNz8, { days: n });
        case C.rV.MONTH:
            return i ? O.intl.formatToPlainString(O.t.erUSmJ, { months: n }) : O.intl.formatToPlainString(O.t.kridzM, { months: n });
        case C.rV.YEAR:
            return i ? O.intl.formatToPlainString(O.t.IfYQVF, { years: n }) : O.intl.formatToPlainString(O.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eZ(e, t) {
    switch (e) {
        case A.gg$.APPLE_PARTNER:
        case A.gg$.APPLE:
            return D[t];
        case A.gg$.GOOGLE:
            return L[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eF(e, t) {
    return (0, b.I5)(e) || eD(null == t ? void 0 : t.status);
}
function eV(e, t) {
    var n, i;
    let r = [],
        a = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find((e) => C.dJ.has(e.planId));
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
function ej(e) {
    return e.filter((e) => !C.dJ.has(e.planId));
}
function eH(e, t, n, i) {
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
function eY(e, t) {
    return eH(e, t, 1, C.dJ);
}
function eW(e, t, n) {
    return eH(e, n, t, C.Z1);
}
function eK(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => C.dJ.has(e.planId));
    if (null != n) {
        let t = h.Z.get(n.planId);
        r()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let i = h.Z.get(e.planId);
                r()(null != i, 'Missing plan');
                let a = h.Z.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
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
function ez(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = C.a1[e].fileSize;
    return (0, y.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function eq(e) {
    return null == e ? null : e.items.find((e) => C.Z1.has(e.planId));
}
function eQ(e) {
    return null != e && null == k(e) && null != eq(e);
}
function eX(e) {
    let t = null != e ? k(e) : null;
    return null != t ? er(t.planId) : null;
}
function eJ(e) {
    if (null != e) {
        let t = k(e);
        if (null != t) return W(t.planId);
    }
}
function e$(e) {
    if (null != e && null != e.renewalMutations) {
        let t = k(e.renewalMutations);
        if (null != t) return W(t.planId);
    }
}
function e0(e) {
    switch (e) {
        case C.p9.TIER_0:
            return N.Rj.PREMIUM_TIER_0;
        case C.p9.TIER_1:
            return N.Rj.PREMIUM_TIER_1;
        case C.p9.TIER_2:
            return N.Rj.PREMIUM_TIER_2;
    }
}
function e1(e) {
    return (0, u.ks)(u.g_, e);
}
function e2(e) {
    return (0, u.ks)(u.m_, e);
}
function e3(e) {
    return (0, u.ks)(u._y, e);
}
function e4(e) {
    return (0, u.ks)(u.tj, e);
}
function e6(e) {
    return (0, u.ks)(u.EQ, e);
}
function e5(e) {
    return (0, u.ks)(u.Pl, e);
}
function e7(e) {
    return (0, u.ks)(u.wN, e);
}
function e8(e) {
    return (0, u.ks)(u._G, e);
}
function e9(e) {
    return (0, u.ks)(u.j4, e);
}
function te(e) {
    return (0, u.ks)(u.lX, e);
}
function tt(e) {
    return (0, u.ks)(u.Uw, e);
}
function tn(e) {
    return (0, u.ks)(u.zm, e);
}
function ti(e) {
    return (0, u.ks)(u.zZ, e);
}
function tr(e) {
    return (0, u.ks)(u.do, e);
}
function ta(e) {
    return (0, u.ks)(u.ZE, e);
}
function ts(e) {
    return (0, u.ks)(u.Ej, e);
}
function to(e) {
    return (0, u.ks)(u.Ct, e);
}
function tl(e) {
    return (0, u.ks)(u.O1, e);
}
function tu(e) {
    return (0, u.ks)(u.uw, e);
}
function tc(e, t) {
    return 'high' === e ? (0, u.ks)(u.O8, t) : 'mid' === e && (0, u.ks)(u.g7, t);
}
function td(e) {
    return (0, u.ks)(u.$0, e);
}
function tf(e) {
    return (0, u.ks)(u.ME, e);
}
function t_(e) {
    return (0, u.ks)(u.AN, e);
}
function tp(e) {
    return (0, u.ks)(u._O, e);
}
function th(e) {
    return (0, u.ks)(u.qH, e);
}
function tm(e) {
    return (0, u.ks)(u.hs, e);
}
function tg(e) {
    return (0, u.ks)(u.Ry, e);
}
function tE(e, t) {
    let n = (0, S.T4)(e.amount, e.currency),
        i = Y(t);
    return ''.concat(n, '/').concat(i);
}
function tv(e) {
    return e;
}
function ty(e) {
    return 'isNitroLocked' in e;
}
function tI(e) {
    return null != e && C.OT.includes(e) ? 1 : 2;
}
function tT(e) {
    if (e === C.rV.YEAR) return O.intl.string(O.t.tfqrho);
    if (e === C.rV.MONTH) return O.intl.string(O.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tb(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tS(e) {
    return tA(e.map((e) => e.skuId));
}
function tA(e) {
    return e.reduce((e, t) => {
        let [n, i] = C.Cx[t],
            r = 1;
        switch (n) {
            case C.Se.HOUR:
                r = 1;
                break;
            case C.Se.DAY:
                r = 24;
        }
        return e + r * i;
    }, 0);
}
let tN = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < w,
    isPremiumAtLeast: b.yd,
    isPremium: b.I5,
    isPremiumExactly: b.M5,
    isPremiumEligible: tb,
    getPrice: G,
    getDefaultPrice: U,
    getInterval: V,
    getIntervalString: H,
    getIntervalStringAsNoun: Y,
    getPremiumType: W,
    getDisplayName: K,
    getDisplayPremiumType: X,
    getPremiumPlanOptions: ei,
    getUpgradeEligibilities: es,
    getReverseTrialWeeks: tI,
    formatInterval: tT,
    getPlanDescription: $,
    isPremiumSku: en,
    getClosestUpgrade: eo,
    getIntervalMonths: Q,
    getUserMaxFileSize: T.h,
    getSkuIdForPlan: er,
    getSkuIdForPremiumType: ea,
    getNumIncludedPremiumGuildSubscriptionSlots: e_,
    getBillingInformationString: eh,
    extendDateWithUnconsumedFractionalPremium: em,
    getUnactivatedFractionalPremiumHoursString: eg,
    isSwitchingPlansDisabled: eE,
    getSwitchingPlansDisabledMessage: ev,
    isNoneSubscription: d.Q0,
    getPlanIdFromInvoice: eC,
    getStatusFromInvoice: eR,
    isBaseSubscriptionCanceled: eO,
    getPremiumGuildIntervalPrice: ex,
    hasAccountCredit: eP,
    getBillingReviewSubheader: ew,
    getIntervalForInvoice: eM,
    getPremiumPlanItem: k,
    getGuildBoostPlanItem: eq,
    isBoostOnlySubscription: eQ,
    getPremiumSkuIdForSubscription: eX,
    getPremiumTypeFromSubscription: eJ,
    getPremiumTypeFromSubscriptionRenewalMutations: e$,
    getPremiumGradientColor: e0,
    getUnactivatedFractionalPremiumHours: tS,
    castPremiumSubscriptionAsSkuId: tv,
    canUseAnimatedEmojis: e1,
    canUseEmojisEverywhere: e2,
    canUseSoundboardEverywhere: e3,
    canUseCustomCallSounds: e4,
    canUploadLargeFiles: e6,
    canUseBadges: e5,
    canUseHighVideoUploadQuality: e7,
    canEditDiscriminator: e8,
    hasBoostDiscount: e9,
    canUseAnimatedAvatar: te,
    canUseFancyVoiceChannelReactions: tt,
    canInstallPremiumApplications: tn,
    canUseIncreasedMessageLength: ti,
    canUseIncreasedGuildCap: tr,
    canRedeemPremiumPerks: ta,
    canUsePremiumProfileCustomization: ts,
    canUsePremiumAppIcons: to,
    canUsePremiumGuildMemberProfile: tl,
    canUseClientThemes: tu,
    canStreamQuality: tc,
    hasFreeBoosts: td,
    canUseCustomStickersEverywhere: tf,
    canUseCustomBackgrounds: t_,
    canUseCollectibles: tp,
    canUseCustomNotificationSounds: th,
    canUsePremiumVoiceFilters: tm,
    canUseIncreasedRecentAvatarsLimit: tg,
    formatPriceString: tE,
    StreamQuality: M
});
