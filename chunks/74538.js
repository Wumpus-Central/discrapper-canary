n.d(t, {
    Af: () => B,
    Am: () => ey,
    Ap: () => eT,
    CY: () => Z,
    Gf: () => X,
    I5: () => S.I5,
    JE: () => eH,
    JP: () => K,
    L7: () => z,
    M5: () => S.M5,
    MY: () => eY,
    N1: () => eb,
    PK: () => eP,
    PV: () => em,
    Px: () => en,
    Qo: () => eW,
    Rd: () => Q,
    Rt: () => eZ,
    T4: () => H,
    U2: () => G,
    Ue: () => eK,
    V7: () => es,
    W_: () => eU,
    Wz: () => tS,
    XK: () => eq,
    Z8: () => eh,
    ZP: () => tP,
    Zx: () => eQ,
    _O: () => tI,
    a5: () => eB,
    aS: () => F,
    al: () => ez,
    aq: () => $,
    bt: () => eC,
    dn: () => eG,
    eP: () => q,
    fr: () => eF,
    gB: () => eX,
    gq: () => et,
    gy: () => eR,
    he: () => e2,
    if: () => eV,
    jP: () => J,
    k5: () => e1,
    lY: () => eE,
    qV: () => ei,
    uV: () => ef,
    uZ: () => e_,
    v6: () => eA,
    v9: () => eJ,
    xG: () => tR,
    yd: () => S.yd,
    zL: () => eo,
    zV: () => eL
}),
    n(411104),
    n(26686),
    n(47120),
    n(733860),
    n(653041);
var r = n(512722),
    i = n.n(r),
    o = n(913527),
    a = n.n(o);
n(442837);
var s = n(782568),
    l = n(710845),
    c = n(803905),
    u = n(439017),
    d = n(301766),
    f = n(594174),
    p = n(351402),
    _ = n(853872),
    h = n(509545),
    m = n(78839),
    g = n(122289),
    E = n(55935),
    v = n(70956),
    b = n(424218),
    y = n(358085),
    O = n(380684),
    S = n(111361),
    I = n(937615),
    T = n(981631),
    N = n(334431),
    A = n(474936),
    C = n(231338),
    R = n(388032);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    M = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    k = new l.Z('PremiumUtils.tsx'),
    j = {
        [A.Xh.NONE_MONTH]: [A.Xh.NONE_YEAR, A.Xh.PREMIUM_YEAR_TIER_2, A.Xh.PREMIUM_MONTH_TIER_2, A.Xh.PREMIUM_YEAR_TIER_1, A.Xh.PREMIUM_MONTH_TIER_1],
        [A.Xh.NONE_YEAR]: [A.Xh.PREMIUM_YEAR_TIER_2, A.Xh.PREMIUM_MONTH_TIER_2, A.Xh.PREMIUM_YEAR_TIER_1, A.Xh.PREMIUM_MONTH_TIER_1],
        [A.Xh.PREMIUM_MONTH_TIER_0]: [A.Xh.PREMIUM_YEAR_TIER_2, A.Xh.PREMIUM_MONTH_TIER_2, A.Xh.PREMIUM_YEAR_TIER_1, A.Xh.PREMIUM_MONTH_TIER_1, A.Xh.PREMIUM_YEAR_TIER_0],
        [A.Xh.PREMIUM_YEAR_TIER_0]: [A.Xh.PREMIUM_YEAR_TIER_2, A.Xh.PREMIUM_MONTH_TIER_2, A.Xh.PREMIUM_YEAR_TIER_1, A.Xh.PREMIUM_MONTH_TIER_1],
        [A.Xh.PREMIUM_MONTH_TIER_1]: [A.Xh.PREMIUM_YEAR_TIER_2, A.Xh.PREMIUM_MONTH_TIER_2, A.Xh.PREMIUM_YEAR_TIER_1],
        [A.Xh.PREMIUM_YEAR_TIER_1]: [A.Xh.PREMIUM_YEAR_TIER_2],
        [A.Xh.PREMIUM_MONTH_TIER_2]: [A.Xh.PREMIUM_YEAR_TIER_2],
        [A.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [A.Xh.NONE_MONTH, A.Xh.NONE_YEAR, A.Xh.PREMIUM_YEAR_TIER_2, A.Xh.PREMIUM_MONTH_TIER_2, A.Xh.PREMIUM_YEAR_TIER_1, A.Xh.PREMIUM_MONTH_TIER_1, A.Xh.PREMIUM_YEAR_TIER_0, A.Xh.PREMIUM_MONTH_TIER_0]
    },
    U = 2592000000;
var G = (function (e) {
    return (e.MID = 'mid'), (e.HIGH = 'high'), e;
})({});
function B(e) {
    return e.items.find((e) => A.dJ.has(e.planId));
}
function Z(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null !== (t = _.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
        o = m.ZP.getPremiumTypeSubscription();
    return null != o && null != o.paymentSourceId && (i = o.paymentSourceId), F(e, n, r, { paymentSourceId: i });
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: o } = r;
    if (null != h.Z.get(e)) {
        let r = T.tuJ.DEFAULT;
        n ? (r = T.tuJ.GIFT) : t && (r = T.tuJ.PREMIUM_TIER_1);
        let a = W(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: o
        });
        if (null == a) {
            let t = Error("Couldn't find price");
            throw (
                ((0, g.q2)(t, {
                    extra: { paymentSourceId: i },
                    tags: {
                        purchaseType: r.toString(),
                        planId: e,
                        currency: null != o ? o : 'unknown'
                    }
                }),
                t)
            );
        }
        return a;
    }
    let a = Error('Plan not found');
    throw (
        ((0, g.q2)(a, {
            tags: {
                planId: e,
                currency: null != o ? o : 'unknown'
            },
            extra: x(w({}, r), { isGift: n })
        }),
        a)
    );
}
function V(e, t) {
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
    let r = n.prices[t];
    if (null == r) throw (k.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return r;
}
function H(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: T.tuJ.DEFAULT },
        r = V(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            k.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), k.info('prices: '.concat(i));
            let o = Error('Missing prices for payment source on subscription plan');
            (0, g.q2)(o, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        k.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, g.q2)(t, {
                tags: {
                    countryCode: r.countryPrices.countryCode,
                    planId: e
                }
            }),
            t)
        );
    }
    return r.countryPrices.prices;
}
function W(e) {
    let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: T.tuJ.DEFAULT },
        i = H(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === i.length && k.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
}
function Y(e) {
    let t = A.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function K(e) {
    switch (e) {
        case A.EA.MONTH:
            return R.NW.string(R.t.FPybU1);
        case A.EA.YEAR:
            return R.NW.string(R.t.tfqrho);
        case A.EA.DAY:
        case A.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function z(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : A.p9.TIER_2;
    if (t || n)
        switch (e) {
            case A.rV.MONTH:
                let a = R.NW.formatToPlainString(o === A.p9.TIER_0 ? R.t.NPKsLy : R.t.poEovb, { timeInterval: R.NW.string(R.t.FPybU1) });
                return i ? a : R.NW.string(R.t.Mh9bTk);
            case A.rV.YEAR:
                let s = R.NW.formatToPlainString(o === A.p9.TIER_0 ? R.t.NPKsLy : R.t.poEovb, { timeInterval: R.NW.string(R.t.tfqrho) });
                return i ? s : R.NW.string(R.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case A.rV.MONTH:
            if (1 !== r) return R.NW.formatToPlainString(R.t['0UlZnJ'], { intervalCount: r });
            return R.NW.string(R.t['DKzs9/']);
        case A.rV.YEAR:
            return R.NW.string(R.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function q(e) {
    switch (e) {
        case A.rV.MONTH:
            return R.NW.string(R.t.FPybU1);
        case A.rV.YEAR:
            return R.NW.string(R.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function Q(e) {
    let t = A.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case A.Xh.PREMIUM_MONTH_TIER_0:
            return t ? R.NW.format(R.t.TZXHNj, { duration: r }) : n ? R.NW.string(R.t['81iAgo']) : R.NW.string(R.t['0efVPz']);
        case A.Xh.PREMIUM_YEAR_TIER_0:
            return t ? R.NW.format(R.t.eqRhCw, { duration: r }) : n ? R.NW.string(R.t.UvzqY2) : R.NW.string(R.t.eoVuBg);
        case A.Xh.PREMIUM_MONTH_TIER_1:
            return n ? R.NW.string(R.t['g/dH5u']) : R.NW.string(R.t['7O6qSk']);
        case A.Xh.PREMIUM_YEAR_TIER_1:
            return n ? R.NW.string(R.t.pdZJam) : R.NW.string(R.t.Md5xbm);
        case A.Xh.PREMIUM_MONTH_TIER_2:
            return t ? R.NW.format(R.t.aI6QX1, { duration: r }) : n ? R.NW.string(R.t.SmVbHR) : R.NW.string(R.t.FKYNCw);
        case A.Xh.PREMIUM_YEAR_TIER_2:
            return t ? R.NW.format(R.t['1wBcPj'], { duration: r }) : n ? R.NW.string(R.t.JIq4Oz) : R.NW.string(R.t['cfu/5e']);
        case A.Xh.PREMIUM_3_MONTH_TIER_2:
            return R.NW.string(R.t.wCbINj);
        case A.Xh.PREMIUM_6_MONTH_TIER_2:
            return R.NW.string(R.t['e3/Ara']);
        case A.Xh.PREMIUM_MONTH_GUILD:
            return n ? R.NW.string(R.t['6ZR3Bw']) : R.NW.string(R.t.h80cx8);
        case A.Xh.PREMIUM_YEAR_GUILD:
            return n ? R.NW.string(R.t.YDpAzc) : R.NW.string(R.t.ZHkls7);
        case A.Xh.PREMIUM_3_MONTH_GUILD:
            return R.NW.string(R.t.EZHHBw);
        case A.Xh.PREMIUM_6_MONTH_GUILD:
            return R.NW.string(R.t.X2KDOz);
        case A.Xh.PREMIUM_MONTH_LEGACY:
            return R.NW.string(R.t['PD6k7+']);
        case A.Xh.PREMIUM_YEAR_LEGACY:
            return R.NW.string(R.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, g.q2)(i, { tags: { planId: e } }), i);
}
function J(e) {
    switch (e) {
        case A.Si.TIER_0:
            return R.NW.string(R.t['t9uG/v']);
        case A.Si.TIER_1:
            return R.NW.string(R.t['FSOz7+']);
        case A.Si.TIER_2:
            return R.NW.string(R.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, g.q2)(t, { tags: { skuId: e } }), t);
}
function $(e) {
    switch (e) {
        case A.Xh.PREMIUM_MONTH_TIER_0:
        case A.Xh.PREMIUM_YEAR_TIER_0:
            return R.NW.string(R.t['t9uG/v']);
        case A.Xh.PREMIUM_MONTH_TIER_1:
        case A.Xh.PREMIUM_YEAR_TIER_1:
            return R.NW.string(R.t['FSOz7+']);
        case A.Xh.PREMIUM_MONTH_TIER_2:
        case A.Xh.PREMIUM_3_MONTH_TIER_2:
        case A.Xh.PREMIUM_6_MONTH_TIER_2:
        case A.Xh.PREMIUM_YEAR_TIER_2:
            return R.NW.string(R.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, g.q2)(t, { tags: { planId: e } }), t);
}
function ee(e, t) {
    if (e === A.rV.MONTH) return t;
    if (e === A.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case A.Xh.PREMIUM_MONTH_TIER_0:
        case A.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case A.Xh.PREMIUM_MONTH_TIER_1:
        case A.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case A.Xh.PREMIUM_MONTH_TIER_2:
        case A.Xh.PREMIUM_YEAR_TIER_2:
        case A.Xh.PREMIUM_3_MONTH_TIER_2:
        case A.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case A.p9.TIER_0:
            return t ? 'Basic' : R.NW.string(R.t['t9uG/v']);
        case A.p9.TIER_1:
            return t ? 'Classic' : R.NW.string(R.t['FSOz7+']);
        case A.p9.TIER_2:
            return R.NW.string(R.t['lG6a5+']);
    }
}
function er(e) {
    var t, n, r, i, o, l, c, u, d, p;
    let { subscription: _, planId: h, price: m, includePremiumGuilds: g, hasDiscountApplied: v, activeDiscountInfo: b, renewalInvoicePreview: y, hasFractionalPremiumWithSub: O } = e,
        S = A.GP[h],
        I = tO(Z(S.id), S.interval),
        N = ex(_) || (null == _.paymentSourceId && !_.isPurchasedExternally && !(null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium())),
        C = null != m && null == _.paymentGateway,
        P = _.status === T.O0b.UNPAID && null !== _.latestInvoice && (null === (n = _.latestInvoice) || void 0 === n ? void 0 : n.status) === T.hUK.OPEN,
        w = N ? T.O0b.CANCELED : P ? T.O0b.UNPAID : _.status,
        D = null === (o = null !== (i = null == y ? void 0 : y.taxInclusive) && void 0 !== i ? i : null === (r = _.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === o || o,
        x = A.cb + (g ? ef(_.additionalPlans) : 0),
        L = C ? (D ? R.NW.format(R.t['cd+hqK'], { price: m }) : R.NW.format(R.t.NUkcpK, { price: m })) : R.NW.string(R.t.zYx3Y2),
        M = C ? (D ? R.NW.format(R.t.VsKcFB, { price: m }) : R.NW.format(R.t.hJ5xER, { price: m })) : R.NW.string(R.t['8rSipK']),
        k = C
            ? D
                ? R.NW.format(R.t['jRy6/P'], {
                      price: m,
                      num: x
                  })
                : R.NW.format(R.t.tTNE8P, {
                      price: m,
                      num: x
                  })
            : R.NW.format(R.t['U+z/HB'], { num: x });
    switch (h) {
        case A.Xh.PREMIUM_MONTH_TIER_0:
        case A.Xh.PREMIUM_YEAR_TIER_0:
            switch (w) {
                case T.O0b.CANCELED:
                    return C ? (D ? R.NW.format(R.t['USi/nZ'], { price: m }) : R.NW.format(R.t['FS//l5'], { price: m })) : R.NW.string(R.t.JshLzs);
                case T.O0b.ACCOUNT_HOLD:
                    return C ? (D ? R.NW.format(R.t['5mv+2t'], { price: m }) : R.NW.format(R.t.nkAEfX, { price: m })) : R.NW.format(R.t.SsLIXV, {});
                case T.O0b.UNPAID:
                    return R.NW.format(R.t.cmkbFB, {});
                case T.O0b.PAUSE_PENDING:
                    let j = null != _.pauseEndsAt ? a()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != j
                        ? R.NW.format(R.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: j
                          })
                        : R.NW.format(R.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case T.O0b.PAUSED:
                    if (O) return L;
                    return R.NW.format(R.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case T.O0b.PAST_DUE:
                    return R.NW.format(R.t['d+0vws'], {
                        endDate: (0, E.vc)(eE(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return L;
            }
        case A.Xh.PREMIUM_MONTH_TIER_1:
        case A.Xh.PREMIUM_YEAR_TIER_1:
            switch (w) {
                case T.O0b.CANCELED:
                    return C ? (D ? R.NW.format(R.t.cXy8Bg, { price: m }) : R.NW.format(R.t['C/XsHh'], { price: m })) : R.NW.string(R.t.K6tYFR);
                case T.O0b.ACCOUNT_HOLD:
                    return C ? (D ? R.NW.format(R.t.HBkIBg, { price: m }) : R.NW.format(R.t.ZsO1S0, { price: m })) : R.NW.format(R.t['0+/WHx'], {});
                case T.O0b.UNPAID:
                    return R.NW.format(R.t.McIzws, {});
                case T.O0b.PAUSE_PENDING:
                    let U = null != _.pauseEndsAt ? a()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? R.NW.format(R.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : R.NW.format(R.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case T.O0b.PAUSED:
                    if (O) return M;
                    return R.NW.format(R.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case T.O0b.PAST_DUE:
                    return R.NW.format(R.t['d+0vws'], {
                        endDate: (0, E.vc)(eE(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return M;
            }
        case A.Xh.PREMIUM_MONTH_TIER_2:
        case A.Xh.PREMIUM_YEAR_TIER_2:
        case A.Xh.PREMIUM_3_MONTH_TIER_2:
        case A.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (w) {
                case T.O0b.CANCELED:
                    return C
                        ? D
                            ? R.NW.format(R.t.xoFgRk, {
                                  price: m,
                                  num: x
                              })
                            : R.NW.format(R.t.nXdbKi, {
                                  price: m,
                                  num: x
                              })
                        : R.NW.format(R.t.EcSdRE, { num: x });
                case T.O0b.ACCOUNT_HOLD:
                    return C
                        ? D
                            ? R.NW.format(R.t['5C/0QE'], {
                                  price: m,
                                  num: x
                              })
                            : R.NW.format(R.t.xfYkho, {
                                  price: m,
                                  num: x
                              })
                        : R.NW.format(R.t.ivjxcn, { num: x });
                case T.O0b.UNPAID:
                    return R.NW.format(R.t['0HopYW'], { num: x });
                case T.O0b.PAUSE_PENDING:
                    let G = null != _.pauseEndsAt ? a()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? R.NW.format(R.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : R.NW.format(R.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case T.O0b.PAUSED:
                    if (O) return k;
                    return R.NW.format(R.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case T.O0b.BILLING_RETRY:
                    return R.NW.format(R.t['IlJ/HR'], { endDate: a()(_.currentPeriodStart).add(A.A5, 'days').toDate() });
                case T.O0b.PAST_DUE:
                    return R.NW.format(R.t['d+0vws'], {
                        endDate: (0, E.vc)(eE(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return v
                        ? h === A.Xh.PREMIUM_YEAR_TIER_2
                            ? R.NW.format(R.t['+qqh6u'], {
                                  percent: null !== (l = null == b ? void 0 : b.percentage) && void 0 !== l ? l : A.Bo,
                                  regularPrice: I
                              })
                            : D
                              ? R.NW.formatToPlainString(R.t['3Ziutb'], {
                                    percent: null !== (c = null == b ? void 0 : b.percentage) && void 0 !== c ? c : A.M_,
                                    regularPrice: I,
                                    numMonths: null !== (u = null == b ? void 0 : b.duration) && void 0 !== u ? u : A.rt
                                })
                              : R.NW.formatToPlainString(R.t['G6+XOT'], {
                                    percent: null !== (d = null == b ? void 0 : b.percentage) && void 0 !== d ? d : A.M_,
                                    regularPrice: I,
                                    numMonths: null !== (p = null == b ? void 0 : b.duration) && void 0 !== p ? p : A.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(h));
    }
}
function ei(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: o = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: l = !1 } = e,
        c = h.Z.get(r);
    return (
        i()(null != c, 'Missing plan'),
        er({
            subscription: n,
            planId: c.id,
            price: eM(t, n, c),
            includePremiumGuilds: o,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function eo(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, d.Q0)(t) ? null : X(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return A.Z1.has(t);
                  }),
        o = (null == i ? void 0 : i.planId) === A.Xh.PREMIUM_MONTH_GUILD ? R.t.Pi5yMD : (null == i ? void 0 : i.planId) === A.Xh.PREMIUM_YEAR_GUILD ? R.t.Pi5yMD : null,
        a = null != o ? R.NW.formatToPlainString(o, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != a)
        return R.NW.formatToPlainString(R.t.FN5T9v, {
            premiumDescription: r,
            premiumGuildDescription: a
        });
    if (null != r) return r;
    if (null != a) return a;
    throw Error('Subscription without premium or premium guild subscription');
}
function ea(e) {
    return e === A.Si.TIER_0 || e === A.Si.TIER_1 || e === A.Si.TIER_2;
}
function es(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, isGift: o, isEligibleForTrial: a, defaultPlanId: s, defaultToMonthlyPlan: l } = e;
    if (null == t || !n) return [];
    let c = void 0 !== s && t === A.GP[s].skuId ? s : void 0;
    void 0 === c && l && !o && (c = A.IW[t]), a && !o && (void 0 === s || (l && A.No.has(s))) && u.k.trackExposure({ location: 'de805e_1' });
    let d = [];
    switch (t) {
        case A.Si.TIER_0:
            d = [A.Xh.PREMIUM_YEAR_TIER_0, A.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case A.Si.TIER_1:
            d = [A.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case A.Si.TIER_2:
            let f = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (A.o4.has(e)) {
                    let t = A.GP[e];
                    f = [...A.o4].filter((e) => {
                        let n = A.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === A.Si.TIER_2;
                    });
                } else f = [];
            }
            d = [A.Xh.PREMIUM_YEAR_TIER_2, ...f, A.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(t));
    }
    if (void 0 !== c) {
        let e = d.indexOf(c);
        d.splice(e, 1), d.unshift(c);
    }
    return d;
}
function el(e) {
    let t = A.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ec(e) {
    switch (e) {
        case A.p9.TIER_0:
            return A.Si.TIER_0;
        case A.p9.TIER_1:
            return A.Si.TIER_1;
        case A.p9.TIER_2:
            return A.Si.TIER_2;
    }
}
function eu(e) {
    var t;
    return null == e ? j.ALL : null !== (t = j[e]) && void 0 !== t ? t : [];
}
function ed(e) {
    let t = A.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        r = eu(e);
    for (let e of Object.keys(A.GP)) {
        let { interval: t } = A.GP[e];
        if (n === t && r.includes(e)) return e;
    }
    return null;
}
function ef(e) {
    let t = h.Z.getPlanIdsForSkus([tS(A.Si.GUILD)]);
    i()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ep = new Set([A.Xh.NONE_MONTH, A.Xh.NONE_3_MONTH, A.Xh.NONE_6_MONTH, A.Xh.NONE_YEAR, A.Xh.PREMIUM_MONTH_TIER_0, A.Xh.PREMIUM_MONTH_TIER_1, A.Xh.PREMIUM_MONTH_TIER_2, A.Xh.PREMIUM_YEAR_TIER_0, A.Xh.PREMIUM_YEAR_TIER_1, A.Xh.PREMIUM_YEAR_TIER_2, A.Xh.PREMIUM_3_MONTH_TIER_2, A.Xh.PREMIUM_6_MONTH_TIER_2]);
function e_(e) {
    return ep.has(e);
}
function eh(e) {
    return A.Z1.has(e);
}
function em(e) {
    return e_(e) || eh(e);
}
function eg(e) {
    return Q(e) === A.p9.TIER_2 ? A.cb : 0;
}
function eE(e) {
    var t, n, r, i, o;
    if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = a()(e.metadata.apple_grace_period_expires_date);
        return {
            days: a().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_original_expires_date) != null) {
        let t = a()(e.metadata.google_grace_period_expires_date),
            n = a()(e.metadata.google_original_expires_date);
        return {
            days: a().duration(t.diff(n)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? A.$7 : A.Ue;
        return {
            days: t,
            expiresDate: a()(e.currentPeriodStart).add(t, 'days')
        };
    }
    if ((null === (i = e.metadata) || void 0 === i ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: a()(null === (o = e.metadata) || void 0 === o ? void 0 : o.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: a()(e.metadata.grace_period_expires_date)
        };
    {
        let t = null == e.paymentSourceId ? A.UA : A.zp;
        return {
            days: t,
            expiresDate: a()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function ev(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      fractionalState: A.a$.NONE,
                      startsAt: a()(0),
                      endsAt: a()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        i = n
            ? (0, I.T4)(
                  t.invoiceItems
                      .filter((e) => A.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, I.T4)(t.total, t.currency);
    if (null != e.trialId && A.h8.includes(e.trialId) && null == e.paymentSourceId) return R.NW.format(R.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === T.O0b.CANCELED) return R.NW.format(R.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === T.O0b.PAUSE_PENDING)
        return R.NW.format(R.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === T.O0b.PAUSED)
        return r.fractionalState !== A.a$.NONE
            ? R.NW.format(R.t.Q18lRE, {
                  renewalDate: r.endsAt.toDate(),
                  price: i
              })
            : null == e.pauseEndsAt
              ? n
                  ? R.NW.format(R.t.KTYQCg, {
                        planName: R.NW.string(R.t.Ipxkoq),
                        price: i
                    })
                  : R.NW.string(R.t.fMz6Li)
              : n
                ? R.NW.format(R.t.zcgtzc, {
                      planName: R.NW.string(R.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: i
                  })
                : R.NW.format(R.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === T.O0b.PAST_DUE) {
        var o, s;
        let t = eE(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null === (o = e.metadata) || void 0 === o ? void 0 : o.google_grace_period_expires_date) != null && (t = a()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (s = e.metadata) || void 0 === s ? void 0 : s.apple_grace_period_expires_date) != null && (t = a()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? R.NW.format(R.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: C.Vz[e.paymentGateway],
                  paymentSourceLink: eH(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : R.NW.format(R.t.qEIzys, {
                  endDate: t.toDate(),
                  price: i
              });
    }
    {
        if (e.status === T.O0b.BILLING_RETRY)
            return R.NW.format(R.t.EMTLOT, {
                endDate: a()(e.currentPeriodStart).add(A.A5, 'days').toDate(),
                price: i
            });
        if (e.status === T.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, y.isAndroid)()
                ? R.NW.format(R.t.dtcxw8, {
                      endDate: a()(e.currentPeriodStart).add(A.gh, 'days').toDate(),
                      paymentGatewayName: C.Vz[e.paymentGateway],
                      paymentSourceLink: eH(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : R.NW.format(R.t.EMTLOT, {
                      endDate: a()(e.currentPeriodStart).add(A.gh, 'days').toDate(),
                      price: i
                  });
        if (eI(e)) return R.NW.format(R.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === T.O0b.UNPAID) return R.NW.format(R.t.CzTKoq, { maxProcessingTimeInDays: A.Rg });
        if (e.isPurchasedExternally)
            return R.NW.format(R.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: C.Vz[e.paymentGateway],
                subscriptionManagementLink: eH(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let o = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (o = eb(o, r.unactivatedUnits)),
            n
                ? R.NW.format(R.t.Vl3cEB, {
                      planName: R.NW.string(R.t.Ipxkoq),
                      renewalDate: o,
                      price: i
                  })
                : R.NW.format(R.t.Q18lRE, {
                      renewalDate: o,
                      price: i
                  })
        );
    }
}
function eb(e, t) {
    let n = a()(e);
    if (t.length > 0) {
        let e = tC(t);
        n = n.add(e, 'hours');
    }
    return n.toDate();
}
function ey(e) {
    let t = tC(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === A.a$.NONE)) return '';
    let n = {
            days: R.t.fYmir6,
            hours: R.t['C3RO+v'],
            minutes: R.t.r77oHR
        },
        r = (0, E.TD)(0, t * v.Z.Millis.HOUR);
    return (0, E.QX)(r, n);
}
function eO(e, t) {
    return (null != t && t !== A.a$.NONE) || null != e.renewalMutations || null != e.trialEndsAt || e.status === T.O0b.PAST_DUE;
}
function eS(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? R.NW.string(R.t['0rzJ4O']) : R.NW.string(R.t['9dLQ09'])), null != e.trialEndsAt && (t = R.NW.string(R.t.a9Mdb2)), t;
}
function eI(e) {
    return null != e.paymentSourceId && eT(e.paymentSourceId);
}
function eT(e) {
    if (null == e) return !1;
    let t = _.Z.getPaymentSource(e);
    return null != t && C.Uk.has(t.type);
}
function eN(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = ef(n);
    return 0 === (null != t ? ef(t.additionalPlans) : null) && 0 !== i ? T.O0b.CANCELED : r;
}
function eA(e) {
    return e.isPurchasedExternally ? e.status === T.O0b.CANCELED : eN(e) === T.O0b.CANCELED;
}
function eC(e) {
    var t, n, r;
    let { subscription: o, user: a, price: s, renewalInvoicePreview: l } = e,
        { planId: c, additionalPlans: u } = o,
        d = h.Z.get(c);
    i()(null != d, 'Missing plan');
    let f = ef(u),
        p = ek(o.planId, o.paymentSourceId, o.currency, a).amount * f;
    if (null != l) {
        let e = l.invoiceItems.find((e) => A.Z1.has(e.subscriptionPlanId));
        null != e && (p = e.amount);
    }
    s = null != s ? s : (0, I.T4)(p, o.currency);
    let _ = null === (r = null !== (n = null == l ? void 0 : l.taxInclusive) && void 0 !== n ? n : null === (t = o.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
    if (eA(o))
        return o.isPurchasedViaGoogle
            ? R.NW.format(R.t['3/WTrK'], { quantity: f })
            : _
              ? R.NW.format(R.t['0ozBSE'], {
                    quantity: f,
                    rate: (0, I.og)(s, d.interval, d.intervalCount)
                })
              : R.NW.format(R.t['yjsv/v'], {
                    quantity: f,
                    rate: (0, I.og)(s, d.interval, d.intervalCount)
                });
    switch (o.status) {
        case T.O0b.ACCOUNT_HOLD:
            return o.isPurchasedViaGoogle
                ? R.NW.format(R.t.Nlf3nZ, {
                      quantity: f,
                      boostQuantity: f
                  })
                : _
                  ? R.NW.format(R.t.oiRy7u, {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    })
                  : R.NW.format(R.t['0QxOAg'], {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    });
        case T.O0b.PAUSE_PENDING:
        case T.O0b.PAUSED:
            return R.NW.string(R.t.CduWAg);
        default:
            return o.isPurchasedViaGoogle
                ? R.NW.format(R.t['5iud9v'], { quantity: f })
                : _
                  ? R.NW.format(R.t.eDwrLC, {
                        quantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    })
                  : R.NW.format(R.t.ijSDcH, {
                        quantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    });
    }
}
function eR(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? F(e.id, !1, r, t) : Z(e.id, !1, r),
        o = (0, I.T4)(i.amount, i.currency);
    return e.currency !== C.pK.USD && !0 === n && (o = o.concat('*')), o;
}
function eP(e, t, n) {
    let r = eR(e, t, n);
    return (0, I.og)(r, e.interval, e.intervalCount);
}
function ew(e, t) {
    let { planId: n } = e;
    if (e.status === T.O0b.CANCELED || e.status === T.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return e_(t);
    });
    return null == r || (0, d.Q0)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId;
}
function eD(e, t) {
    let { status: n } = e;
    if (e.status === T.O0b.CANCELED || e.status === T.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return e_(t);
    });
    return (null == r || (0, d.Q0)(r.subscriptionPlanId)) && (n = T.O0b.CANCELED), n;
}
function ex(e) {
    let { status: t, renewalMutations: n } = e;
    return t === T.O0b.CANCELED || (null != n && (0, d.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eL(e) {
    return e === T.O0b.PAST_DUE || e === T.O0b.ACCOUNT_HOLD || e === T.O0b.BILLING_RETRY;
}
function eM(e, t, n) {
    let r = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return t === n.id;
        }),
        i =
            null == r
                ? F(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency
                  }).amount
                : r.amount;
    return (0, I.og)((0, I.T4)(i, e.currency), n.interval, n.intervalCount);
}
function ek(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: p.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        o = h.Z.get(e);
    if (null == o) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    let a = h.Z.getForSkuAndInterval(tS(A.Si.GUILD), o.interval, o.intervalCount);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    return F(a.id, (0, S.I5)(r), !1, i);
}
function ej(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eU(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case A.Xh.PREMIUM_MONTH_TIER_0:
                return R.NW.string(R.t['0ggVqK']);
            case A.Xh.PREMIUM_YEAR_TIER_0:
                return R.NW.string(R.t['jm+ZQ0']);
            case A.Xh.PREMIUM_MONTH_TIER_1:
                return R.NW.string(R.t.uph4Jy);
            case A.Xh.PREMIUM_YEAR_TIER_1:
                return R.NW.string(R.t['D/l7Ym']);
            case A.Xh.PREMIUM_MONTH_TIER_2:
                return R.NW.string(R.t['5l1Mub']);
            case A.Xh.PREMIUM_YEAR_TIER_2:
                return R.NW.string(R.t.G0mISU);
        }
    switch (r) {
        case A.Xh.PREMIUM_MONTH_TIER_0:
            return n ? R.NW.string(R.t.cRCCJy) : R.NW.string(R.t['/G3aKy']);
        case A.Xh.PREMIUM_YEAR_TIER_0:
            return n ? R.NW.string(R.t.cRCCJy) : R.NW.string(R.t['2eQpsL']);
        case A.Xh.PREMIUM_MONTH_TIER_1:
            return n ? R.NW.string(R.t.cRCCJy) : R.NW.string(R.t.gueLg4);
        case A.Xh.PREMIUM_YEAR_TIER_1:
            return n ? R.NW.string(R.t.cRCCJy) : R.NW.string(R.t['MhH/vb']);
        case A.Xh.PREMIUM_MONTH_TIER_2:
            return n ? R.NW.string(R.t.cRCCJy) : R.NW.string(R.t.LQVQIi);
        case A.Xh.PREMIUM_YEAR_TIER_2:
            return n ? R.NW.string(R.t.cRCCJy) : R.NW.string(R.t['0nfg19']);
        case A.Xh.PREMIUM_3_MONTH_TIER_2:
        case A.Xh.PREMIUM_6_MONTH_TIER_2:
            return R.NW.formatToPlainString(R.t.BCD4fX, { intervalCount: t.intervalCount });
        case A.Xh.NONE_MONTH:
        case A.Xh.NONE_YEAR:
        case A.Xh.NONE_3_MONTH:
        case A.Xh.NONE_6_MONTH:
        case A.Xh.PREMIUM_MONTH_GUILD:
        case A.Xh.PREMIUM_YEAR_GUILD:
        case A.Xh.PREMIUM_3_MONTH_GUILD:
        case A.Xh.PREMIUM_6_MONTH_GUILD:
            return R.NW.string(R.t.eUEeCg);
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, g.q2)(i, { tags: { planId: r } }), i);
}
function eG(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = h.Z.get(t);
    return (
        i()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eB(e) {
    let { intervalType: t = A.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case A.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? R.NW.formatToPlainString(R.t.fRNBRU, { weeks: n / 7 }) : R.NW.formatToPlainString(R.t.EIpHEh, { weeks: n / 7 });
            return r ? R.NW.formatToPlainString(R.t['6Cdzo6'], { days: n }) : R.NW.formatToPlainString(R.t['kbBj/v'], { days: n });
        case A.rV.MONTH:
            return r ? R.NW.formatToPlainString(R.t.x5Mgxc, { months: n }) : R.NW.formatToPlainString(R.t['4SEnCQ'], { months: n });
        case A.rV.YEAR:
            return r ? R.NW.formatToPlainString(R.t['h+63ys'], { years: n }) : R.NW.formatToPlainString(R.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eZ(e) {
    let { intervalType: t = A.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case A.rV.DAY:
            if (n >= 7 && n % 7 == 0) return R.NW.formatToPlainString(R.t['8awlzM'], { weeks: n / 7 });
            return R.NW.formatToPlainString(R.t.ZsgnLC, { days: n });
        case A.rV.MONTH:
            return R.NW.formatToPlainString(R.t.Y0HCVV, { months: n });
        case A.rV.YEAR:
            return R.NW.formatToPlainString(R.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eF(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eZ({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eV(e) {
    let { intervalType: t = A.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case A.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? R.NW.formatToPlainString(R.t.iVZYys, { weeks: n / 7 }) : R.NW.formatToPlainString(R.t.EmoBDw, { weeks: n / 7 });
            return r ? R.NW.formatToPlainString(R.t.jzH70d, { days: n }) : R.NW.formatToPlainString(R.t.k2UNz8, { days: n });
        case A.rV.MONTH:
            return r ? R.NW.formatToPlainString(R.t.erUSmJ, { months: n }) : R.NW.formatToPlainString(R.t.kridzM, { months: n });
        case A.rV.YEAR:
            return r ? R.NW.formatToPlainString(R.t.IfYQVF, { years: n }) : R.NW.formatToPlainString(R.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eH(e, t) {
    switch (e) {
        case T.gg$.APPLE_PARTNER:
        case T.gg$.APPLE:
            return L[t];
        case T.gg$.GOOGLE:
            return M[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eW(e, t) {
    return (0, S.I5)(e) || eL(null == t ? void 0 : t.status);
}
function eY(e, t) {
    var n, r;
    let i = [],
        o = (null !== (r = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : e.items).find((e) => A.dJ.has(e.planId));
    return (
        null != o && i.push(o),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return w({}, n, t);
            return t;
        })
    );
}
function eK(e) {
    return e.filter((e) => !A.dJ.has(e.planId));
}
function ez(e, t, n, r) {
    var o, a;
    i()(r.has(t), 'Expected planId in group');
    let s = !1,
        l = (null !== (a = null === (o = e.renewalMutations) || void 0 === o ? void 0 : o.items) && void 0 !== a ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  x(w({}, e), {
                      quantity: n,
                      planId: t
                  }))
                : e
        );
    if (!s) {
        let r = {
                planId: t,
                quantity: n
            },
            i = e.items.find((e) => e.planId === t);
        null != i && (r.id = i.id), l.push(r);
    }
    return l.filter((e) => 0 !== e.quantity);
}
function eq(e, t) {
    return ez(e, t, 1, A.dJ);
}
function eQ(e, t, n) {
    return ez(e, n, t, A.Z1);
}
function eX(e) {
    var t;
    let n = null !== (t = e.find((e) => !('id' in e))) && void 0 !== t ? t : e.find((e) => A.dJ.has(e.planId));
    if (null != n) {
        let t = h.Z.get(n.planId);
        i()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = h.Z.get(e.planId);
                i()(null != r, 'Missing plan');
                let o = h.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return i()(null != o, 'Missing planForInterval'), x(w({}, e), { planId: o.id });
            }));
    }
    return e;
}
function eJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = A.a1[e].fileSize;
    return (0, b.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function e$(e) {
    return null == e ? null : e.items.find((e) => A.Z1.has(e.planId));
}
function e0(e) {
    return null != e && null == B(e) && null != e$(e);
}
function e1(e) {
    let t = null != e ? B(e) : null;
    return null != t ? el(t.planId) : null;
}
function e2(e) {
    if (null != e) {
        let t = B(e);
        if (null != t) return Q(t.planId);
    }
}
function e3(e) {
    if (null != e && null != e.renewalMutations) {
        let t = B(e.renewalMutations);
        if (null != t) return Q(t.planId);
    }
}
function e4(e) {
    switch (e) {
        case A.p9.TIER_0:
            return N.Rj.PREMIUM_TIER_0;
        case A.p9.TIER_1:
            return N.Rj.PREMIUM_TIER_1;
        case A.p9.TIER_2:
            return N.Rj.PREMIUM_TIER_2;
    }
}
function e6(e) {
    return (0, c.ks)(c.g_, e);
}
function e5(e) {
    return (0, c.ks)(c.m_, e);
}
function e7(e) {
    return (0, c.ks)(c._y, e);
}
function e8(e) {
    return (0, c.ks)(c.tj, e);
}
function e9(e) {
    return (0, c.ks)(c.EQ, e);
}
function te(e) {
    return (0, c.ks)(c.Pl, e);
}
function tt(e) {
    return (0, c.ks)(c.wN, e);
}
function tn(e) {
    return (0, c.ks)(c._G, e);
}
function tr(e) {
    return (0, c.ks)(c.j4, e);
}
function ti(e) {
    return (0, c.ks)(c.lX, e);
}
function to(e) {
    return (0, c.ks)(c.Uw, e);
}
function ta(e) {
    return (0, c.ks)(c.zm, e);
}
function ts(e) {
    return (0, c.ks)(c.zZ, e);
}
function tl(e) {
    return (0, c.ks)(c.do, e);
}
function tc(e) {
    return (0, c.ks)(c.ZE, e);
}
function tu(e) {
    return (0, c.ks)(c.Ej, e);
}
function td(e) {
    return (0, c.ks)(c.Ct, e);
}
function tf(e) {
    return (0, c.ks)(c.O1, e);
}
function tp(e) {
    return (0, c.ks)(c.uw, e);
}
function t_(e, t) {
    return 'high' === e ? (0, c.ks)(c.O8, t) : 'mid' === e && (0, c.ks)(c.g7, t);
}
function th(e) {
    return (0, c.ks)(c.$0, e);
}
function tm(e) {
    return (0, c.ks)(c.ME, e);
}
function tg(e) {
    return (0, c.ks)(c.AN, e);
}
function tE(e) {
    return (0, c.ks)(c._O, e);
}
function tv(e) {
    return (0, c.ks)(c.qH, e);
}
function tb(e) {
    return (0, c.ks)(c.hs, e);
}
function ty(e) {
    return (0, c.ks)(c.Ry, e);
}
function tO(e, t) {
    let n = (0, I.T4)(e.amount, e.currency),
        r = q(t);
    return ''.concat(n, '/').concat(r);
}
function tS(e) {
    return e;
}
function tI(e) {
    return 'isNitroLocked' in e;
}
function tT(e) {
    return null != e && A.OT.includes(e) ? 1 : 2;
}
function tN(e) {
    if (e === A.rV.YEAR) return R.NW.string(R.t.tfqrho);
    if (e === A.rV.MONTH) return R.NW.string(R.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tA(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tC(e) {
    return tR(e.map((e) => e.skuId));
}
function tR(e) {
    return e.reduce((e, t) => {
        let [n, r] = A.Cx[t],
            i = 1;
        switch (n) {
            case A.Se.HOUR:
                i = 1;
                break;
            case A.Se.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
let tP = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < U,
    isPremiumAtLeast: S.yd,
    isPremium: S.I5,
    isPremiumExactly: S.M5,
    isPremiumEligible: tA,
    getPrice: F,
    getDefaultPrice: Z,
    getInterval: Y,
    getIntervalString: z,
    getIntervalStringAsNoun: q,
    getPremiumType: Q,
    getDisplayName: X,
    getDisplayPremiumType: et,
    getPremiumPlanOptions: es,
    getUpgradeEligibilities: eu,
    getReverseTrialWeeks: tT,
    formatInterval: tN,
    getPlanDescription: er,
    isPremiumSku: ea,
    getClosestUpgrade: ed,
    getIntervalMonths: ee,
    getUserMaxFileSize: O.h,
    getSkuIdForPlan: el,
    getSkuIdForPremiumType: ec,
    getNumIncludedPremiumGuildSubscriptionSlots: eg,
    getBillingInformationString: ev,
    extendDateWithUnconsumedFractionalPremium: eb,
    getUnactivatedFractionalPremiumHoursString: ey,
    isSwitchingPlansDisabled: eO,
    getSwitchingPlansDisabledMessage: eS,
    isNoneSubscription: d.Q0,
    getPlanIdFromInvoice: ew,
    getStatusFromInvoice: eD,
    isBaseSubscriptionCanceled: ex,
    getPremiumGuildIntervalPrice: ek,
    hasAccountCredit: ej,
    getBillingReviewSubheader: eU,
    getIntervalForInvoice: eG,
    getPremiumPlanItem: B,
    getGuildBoostPlanItem: e$,
    isBoostOnlySubscription: e0,
    getPremiumSkuIdForSubscription: e1,
    getPremiumTypeFromSubscription: e2,
    getPremiumTypeFromSubscriptionRenewalMutations: e3,
    getPremiumGradientColor: e4,
    getUnactivatedFractionalPremiumHours: tC,
    castPremiumSubscriptionAsSkuId: tS,
    canUseAnimatedEmojis: e6,
    canUseEmojisEverywhere: e5,
    canUseSoundboardEverywhere: e7,
    canUseCustomCallSounds: e8,
    canUploadLargeFiles: e9,
    canUseBadges: te,
    canUseHighVideoUploadQuality: tt,
    canEditDiscriminator: tn,
    hasBoostDiscount: tr,
    canUseAnimatedAvatar: ti,
    canUseFancyVoiceChannelReactions: to,
    canInstallPremiumApplications: ta,
    canUseIncreasedMessageLength: ts,
    canUseIncreasedGuildCap: tl,
    canRedeemPremiumPerks: tc,
    canUsePremiumProfileCustomization: tu,
    canUsePremiumAppIcons: td,
    canUsePremiumGuildMemberProfile: tf,
    canUseClientThemes: tp,
    canStreamQuality: t_,
    hasFreeBoosts: th,
    canUseCustomStickersEverywhere: tm,
    canUseCustomBackgrounds: tg,
    canUseCollectibles: tE,
    canUseCustomNotificationSounds: tv,
    canUsePremiumVoiceFilters: tb,
    canUseIncreasedRecentAvatarsLimit: ty,
    formatPriceString: tO,
    StreamQuality: G
});
