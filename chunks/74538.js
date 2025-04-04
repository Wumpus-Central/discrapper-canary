n.d(t, {
    Af: () => G,
    Am: () => ey,
    Ap: () => eS,
    CY: () => B,
    Gf: () => Q,
    I5: () => O.I5,
    JE: () => eZ,
    JP: () => Y,
    L7: () => K,
    M5: () => O.M5,
    MY: () => eW,
    N1: () => eb,
    PK: () => eR,
    PV: () => eh,
    Px: () => et,
    Qo: () => eH,
    Rd: () => q,
    Rt: () => eB,
    T4: () => Z,
    U2: () => U,
    Ue: () => eY,
    V7: () => ea,
    W_: () => ej,
    Wz: () => tI,
    XK: () => ez,
    Z8: () => ep,
    ZP: () => tP,
    Zx: () => eq,
    _O: () => tS,
    a5: () => eG,
    aS: () => F,
    al: () => eK,
    aq: () => J,
    bt: () => eA,
    dn: () => eU,
    eP: () => z,
    fr: () => eF,
    gB: () => eQ,
    gq: () => ee,
    gy: () => eC,
    he: () => e1,
    if: () => eV,
    jP: () => X,
    k5: () => e0,
    lY: () => eg,
    qV: () => er,
    uV: () => ed,
    uZ: () => e_,
    v6: () => eN,
    v9: () => eX,
    xG: () => tR,
    yd: () => O.yd,
    zL: () => ei,
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
    u = n(301766),
    d = n(594174),
    f = n(351402),
    _ = n(853872),
    p = n(509545),
    h = n(78839),
    m = n(122289),
    g = n(55935),
    E = n(70956),
    b = n(424218),
    y = n(358085),
    v = n(380684),
    O = n(111361),
    I = n(937615),
    S = n(981631),
    T = n(334431),
    N = n(474936),
    A = n(231338),
    C = n(388032);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
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
    x = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    M = new l.Z('PremiumUtils.tsx'),
    k = {
        [N.Xh.NONE_MONTH]: [N.Xh.NONE_YEAR, N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_1, N.Xh.PREMIUM_MONTH_TIER_1],
        [N.Xh.NONE_YEAR]: [N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_1, N.Xh.PREMIUM_MONTH_TIER_1],
        [N.Xh.PREMIUM_MONTH_TIER_0]: [N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_1, N.Xh.PREMIUM_MONTH_TIER_1, N.Xh.PREMIUM_YEAR_TIER_0],
        [N.Xh.PREMIUM_YEAR_TIER_0]: [N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_1, N.Xh.PREMIUM_MONTH_TIER_1],
        [N.Xh.PREMIUM_MONTH_TIER_1]: [N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_1],
        [N.Xh.PREMIUM_YEAR_TIER_1]: [N.Xh.PREMIUM_YEAR_TIER_2],
        [N.Xh.PREMIUM_MONTH_TIER_2]: [N.Xh.PREMIUM_YEAR_TIER_2],
        [N.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [N.Xh.NONE_MONTH, N.Xh.NONE_YEAR, N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_1, N.Xh.PREMIUM_MONTH_TIER_1, N.Xh.PREMIUM_YEAR_TIER_0, N.Xh.PREMIUM_MONTH_TIER_0]
    },
    j = 2592000000;
var U = (function (e) {
    return (e.MID = 'mid'), (e.HIGH = 'high'), e;
})({});
function G(e) {
    return e.items.find((e) => N.dJ.has(e.planId));
}
function B(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null != (t = _.Z.defaultPaymentSourceId) ? t : void 0,
        o = h.ZP.getPremiumTypeSubscription();
    return null != o && null != o.paymentSourceId && (i = o.paymentSourceId), F(e, n, r, { paymentSourceId: i });
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: o } = r;
    if (null != p.Z.get(e)) {
        let r = S.tuJ.DEFAULT;
        n ? (r = S.tuJ.GIFT) : t && (r = S.tuJ.PREMIUM_TIER_1);
        let a = H(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: o
        });
        if (null == a) {
            let t = Error("Couldn't find price");
            throw (
                ((0, m.q2)(t, {
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
        ((0, m.q2)(a, {
            tags: {
                planId: e,
                currency: null != o ? o : 'unknown'
            },
            extra: D(P({}, r), { isGift: n })
        }),
        a)
    );
}
function V(e, t) {
    let n = p.Z.get(e);
    if (null == n) {
        let n = Error('Plan not found');
        throw (
            ((0, m.q2)(n, {
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
    if (null == r) throw (M.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return r;
}
function Z(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.tuJ.DEFAULT },
        r = V(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            M.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), M.info('prices: '.concat(i));
            let o = Error('Missing prices for payment source on subscription plan');
            (0, m.q2)(o, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        M.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, m.q2)(t, {
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
function H(e) {
    let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: S.tuJ.DEFAULT },
        i = Z(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === i.length && M.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
}
function W(e) {
    let t = N.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, m.q2)(n, { tags: { planId: e } }), n);
}
function Y(e) {
    switch (e) {
        case N.EA.MONTH:
            return C.NW.string(C.t.FPybU1);
        case N.EA.YEAR:
            return C.NW.string(C.t.tfqrho);
        case N.EA.DAY:
        case N.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function K(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : N.p9.TIER_2;
    if (t || n)
        switch (e) {
            case N.rV.MONTH:
                let a = C.NW.formatToPlainString(o === N.p9.TIER_0 ? C.t.NPKsLy : C.t.poEovb, { timeInterval: C.NW.string(C.t.FPybU1) });
                return i ? a : C.NW.string(C.t.Mh9bTk);
            case N.rV.YEAR:
                let s = C.NW.formatToPlainString(o === N.p9.TIER_0 ? C.t.NPKsLy : C.t.poEovb, { timeInterval: C.NW.string(C.t.tfqrho) });
                return i ? s : C.NW.string(C.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case N.rV.MONTH:
            if (1 !== r) return C.NW.formatToPlainString(C.t['0UlZnJ'], { intervalCount: r });
            return C.NW.string(C.t['DKzs9/']);
        case N.rV.YEAR:
            return C.NW.string(C.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function z(e) {
    switch (e) {
        case N.rV.MONTH:
            return C.NW.string(C.t.FPybU1);
        case N.rV.YEAR:
            return C.NW.string(C.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function q(e) {
    let t = N.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, m.q2)(n, { tags: { planId: e } }), n);
}
function Q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
            return t ? C.NW.format(C.t.TZXHNj, { duration: r }) : n ? C.NW.string(C.t['81iAgo']) : C.NW.string(C.t['0efVPz']);
        case N.Xh.PREMIUM_YEAR_TIER_0:
            return t ? C.NW.format(C.t.eqRhCw, { duration: r }) : n ? C.NW.string(C.t.UvzqY2) : C.NW.string(C.t.eoVuBg);
        case N.Xh.PREMIUM_MONTH_TIER_1:
            return n ? C.NW.string(C.t['g/dH5u']) : C.NW.string(C.t['7O6qSk']);
        case N.Xh.PREMIUM_YEAR_TIER_1:
            return n ? C.NW.string(C.t.pdZJam) : C.NW.string(C.t.Md5xbm);
        case N.Xh.PREMIUM_MONTH_TIER_2:
            return t ? C.NW.format(C.t.aI6QX1, { duration: r }) : n ? C.NW.string(C.t.SmVbHR) : C.NW.string(C.t.FKYNCw);
        case N.Xh.PREMIUM_YEAR_TIER_2:
            return t ? C.NW.format(C.t['1wBcPj'], { duration: r }) : n ? C.NW.string(C.t.JIq4Oz) : C.NW.string(C.t['cfu/5e']);
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
            return C.NW.string(C.t.wCbINj);
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
            return C.NW.string(C.t['e3/Ara']);
        case N.Xh.PREMIUM_MONTH_GUILD:
            return n ? C.NW.string(C.t['6ZR3Bw']) : C.NW.string(C.t.h80cx8);
        case N.Xh.PREMIUM_YEAR_GUILD:
            return n ? C.NW.string(C.t.YDpAzc) : C.NW.string(C.t.ZHkls7);
        case N.Xh.PREMIUM_3_MONTH_GUILD:
            return C.NW.string(C.t.EZHHBw);
        case N.Xh.PREMIUM_6_MONTH_GUILD:
            return C.NW.string(C.t.X2KDOz);
        case N.Xh.PREMIUM_MONTH_LEGACY:
            return C.NW.string(C.t['PD6k7+']);
        case N.Xh.PREMIUM_YEAR_LEGACY:
            return C.NW.string(C.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, m.q2)(i, { tags: { planId: e } }), i);
}
function X(e) {
    switch (e) {
        case N.Si.TIER_0:
            return C.NW.string(C.t['t9uG/v']);
        case N.Si.TIER_1:
            return C.NW.string(C.t['FSOz7+']);
        case N.Si.TIER_2:
            return C.NW.string(C.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, m.q2)(t, { tags: { skuId: e } }), t);
}
function J(e) {
    switch (e) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
        case N.Xh.PREMIUM_YEAR_TIER_0:
            return C.NW.string(C.t['t9uG/v']);
        case N.Xh.PREMIUM_MONTH_TIER_1:
        case N.Xh.PREMIUM_YEAR_TIER_1:
            return C.NW.string(C.t['FSOz7+']);
        case N.Xh.PREMIUM_MONTH_TIER_2:
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
        case N.Xh.PREMIUM_YEAR_TIER_2:
            return C.NW.string(C.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, m.q2)(t, { tags: { planId: e } }), t);
}
function $(e, t) {
    if (e === N.rV.MONTH) return t;
    if (e === N.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
        case N.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case N.Xh.PREMIUM_MONTH_TIER_1:
        case N.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case N.Xh.PREMIUM_MONTH_TIER_2:
        case N.Xh.PREMIUM_YEAR_TIER_2:
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, m.q2)(n, { tags: { planId: e } }), n);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case N.p9.TIER_0:
            return t ? 'Basic' : C.NW.string(C.t['t9uG/v']);
        case N.p9.TIER_1:
            return t ? 'Classic' : C.NW.string(C.t['FSOz7+']);
        case N.p9.TIER_2:
            return C.NW.string(C.t['lG6a5+']);
    }
}
function en(e) {
    var t, n, r, i, o, l, c, u, f, _;
    let { subscription: p, planId: h, price: m, includePremiumGuilds: E, hasDiscountApplied: b, activeDiscountInfo: y, renewalInvoicePreview: v, hasFractionalPremiumWithSub: O } = e,
        I = N.GP[h],
        T = tO(B(I.id), I.interval),
        A = eD(p) || (null == p.paymentSourceId && !p.isPurchasedExternally && !(null == (t = d.default.getCurrentUser()) ? void 0 : t.hasFreePremium())),
        R = null != m && null == p.paymentGateway,
        P = p.status === S.O0b.UNPAID && null !== p.latestInvoice && (null == (n = p.latestInvoice) ? void 0 : n.status) === S.hUK.OPEN,
        w = A ? S.O0b.CANCELED : P ? S.O0b.UNPAID : p.status,
        D = null == (o = null != (i = null == v ? void 0 : v.taxInclusive) ? i : null == (r = p.latestInvoice) ? void 0 : r.taxInclusive) || o,
        L = N.cb + (E ? ed(p.additionalPlans) : 0),
        x = R ? (D ? C.NW.format(C.t['cd+hqK'], { price: m }) : C.NW.format(C.t.NUkcpK, { price: m })) : C.NW.string(C.t.zYx3Y2),
        M = R ? (D ? C.NW.format(C.t.VsKcFB, { price: m }) : C.NW.format(C.t.hJ5xER, { price: m })) : C.NW.string(C.t['8rSipK']),
        k = R
            ? D
                ? C.NW.format(C.t['jRy6/P'], {
                      price: m,
                      num: L
                  })
                : C.NW.format(C.t.tTNE8P, {
                      price: m,
                      num: L
                  })
            : C.NW.format(C.t['U+z/HB'], { num: L });
    switch (h) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
        case N.Xh.PREMIUM_YEAR_TIER_0:
            switch (w) {
                case S.O0b.CANCELED:
                    return R ? (D ? C.NW.format(C.t['USi/nZ'], { price: m }) : C.NW.format(C.t['FS//l5'], { price: m })) : C.NW.string(C.t.JshLzs);
                case S.O0b.ACCOUNT_HOLD:
                    return R ? (D ? C.NW.format(C.t['5mv+2t'], { price: m }) : C.NW.format(C.t.nkAEfX, { price: m })) : C.NW.format(C.t.SsLIXV, {});
                case S.O0b.UNPAID:
                    return C.NW.format(C.t.cmkbFB, {});
                case S.O0b.PAUSE_PENDING:
                    let j = null != p.pauseEndsAt ? a()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != j
                        ? C.NW.format(C.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: j
                          })
                        : C.NW.format(C.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case S.O0b.PAUSED:
                    if (O) return x;
                    return C.NW.format(C.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case S.O0b.PAST_DUE:
                    return C.NW.format(C.t['d+0vws'], {
                        endDate: (0, g.vc)(eg(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return x;
            }
        case N.Xh.PREMIUM_MONTH_TIER_1:
        case N.Xh.PREMIUM_YEAR_TIER_1:
            switch (w) {
                case S.O0b.CANCELED:
                    return R ? (D ? C.NW.format(C.t.cXy8Bg, { price: m }) : C.NW.format(C.t['C/XsHh'], { price: m })) : C.NW.string(C.t.K6tYFR);
                case S.O0b.ACCOUNT_HOLD:
                    return R ? (D ? C.NW.format(C.t.HBkIBg, { price: m }) : C.NW.format(C.t.ZsO1S0, { price: m })) : C.NW.format(C.t['0+/WHx'], {});
                case S.O0b.UNPAID:
                    return C.NW.format(C.t.McIzws, {});
                case S.O0b.PAUSE_PENDING:
                    let U = null != p.pauseEndsAt ? a()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? C.NW.format(C.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : C.NW.format(C.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case S.O0b.PAUSED:
                    if (O) return M;
                    return C.NW.format(C.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case S.O0b.PAST_DUE:
                    return C.NW.format(C.t['d+0vws'], {
                        endDate: (0, g.vc)(eg(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return M;
            }
        case N.Xh.PREMIUM_MONTH_TIER_2:
        case N.Xh.PREMIUM_YEAR_TIER_2:
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (w) {
                case S.O0b.CANCELED:
                    return R
                        ? D
                            ? C.NW.format(C.t.xoFgRk, {
                                  price: m,
                                  num: L
                              })
                            : C.NW.format(C.t.nXdbKi, {
                                  price: m,
                                  num: L
                              })
                        : C.NW.format(C.t.EcSdRE, { num: L });
                case S.O0b.ACCOUNT_HOLD:
                    return R
                        ? D
                            ? C.NW.format(C.t['5C/0QE'], {
                                  price: m,
                                  num: L
                              })
                            : C.NW.format(C.t.xfYkho, {
                                  price: m,
                                  num: L
                              })
                        : C.NW.format(C.t.ivjxcn, { num: L });
                case S.O0b.UNPAID:
                    return C.NW.format(C.t['0HopYW'], { num: L });
                case S.O0b.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? a()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? C.NW.format(C.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : C.NW.format(C.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case S.O0b.PAUSED:
                    if (O) return k;
                    return C.NW.format(C.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case S.O0b.BILLING_RETRY:
                    return C.NW.format(C.t['IlJ/HR'], { endDate: a()(p.currentPeriodStart).add(N.A5, 'days').toDate() });
                case S.O0b.PAST_DUE:
                    return C.NW.format(C.t['d+0vws'], {
                        endDate: (0, g.vc)(eg(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return b
                        ? h === N.Xh.PREMIUM_YEAR_TIER_2
                            ? C.NW.format(C.t['+qqh6u'], {
                                  percent: null != (l = null == y ? void 0 : y.percentage) ? l : N.Bo,
                                  regularPrice: T
                              })
                            : D
                              ? C.NW.formatToPlainString(C.t['3Ziutb'], {
                                    percent: null != (c = null == y ? void 0 : y.percentage) ? c : N.M_,
                                    regularPrice: T,
                                    numMonths: null != (u = null == y ? void 0 : y.duration) ? u : N.rt
                                })
                              : C.NW.formatToPlainString(C.t['G6+XOT'], {
                                    percent: null != (f = null == y ? void 0 : y.percentage) ? f : N.M_,
                                    regularPrice: T,
                                    numMonths: null != (_ = null == y ? void 0 : y.duration) ? _ : N.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(h));
    }
}
function er(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: o = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: l = !1 } = e,
        c = p.Z.get(r);
    return (
        i()(null != c, 'Missing plan'),
        en({
            subscription: n,
            planId: c.id,
            price: ex(t, n, c),
            includePremiumGuilds: o,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function ei(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, u.Q0)(t) ? null : Q(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return N.Z1.has(t);
                  }),
        o = (null == i ? void 0 : i.planId) === N.Xh.PREMIUM_MONTH_GUILD || (null == i ? void 0 : i.planId) === N.Xh.PREMIUM_YEAR_GUILD ? C.t.Pi5yMD : null,
        a = null != o ? C.NW.formatToPlainString(o, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != a)
        return C.NW.formatToPlainString(C.t.FN5T9v, {
            premiumDescription: r,
            premiumGuildDescription: a
        });
    if (null != r) return r;
    if (null != a) return a;
    throw Error('Subscription without premium or premium guild subscription');
}
function eo(e) {
    return e === N.Si.TIER_0 || e === N.Si.TIER_1 || e === N.Si.TIER_2;
}
function ea(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: o } = e;
    if (null == t || !n) return [];
    let a = void 0 !== o && t === N.GP[o].skuId ? o : void 0,
        s = [];
    switch (t) {
        case N.Si.TIER_0:
            s = [N.Xh.PREMIUM_YEAR_TIER_0, N.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case N.Si.TIER_1:
            s = [N.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case N.Si.TIER_2:
            let l = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (N.o4.has(e)) {
                    let t = N.GP[e];
                    l = [...N.o4].filter((e) => {
                        let n = N.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === N.Si.TIER_2;
                    });
                } else l = [];
            }
            s = [N.Xh.PREMIUM_YEAR_TIER_2, ...l, N.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(t));
    }
    if (void 0 !== a) {
        let e = s.indexOf(a);
        s.splice(e, 1), s.unshift(a);
    }
    return s;
}
function es(e) {
    let t = N.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, m.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function el(e) {
    switch (e) {
        case N.p9.TIER_0:
            return N.Si.TIER_0;
        case N.p9.TIER_1:
            return N.Si.TIER_1;
        case N.p9.TIER_2:
            return N.Si.TIER_2;
    }
}
function ec(e) {
    var t;
    return null == e ? k.ALL : null != (t = k[e]) ? t : [];
}
function eu(e) {
    let t = N.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        r = ec(e);
    for (let e of Object.keys(N.GP)) {
        let { interval: t } = N.GP[e];
        if (n === t && r.includes(e)) return e;
    }
    return null;
}
function ed(e) {
    let t = p.Z.getPlanIdsForSkus([tI(N.Si.GUILD)]);
    i()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let ef = new Set([N.Xh.NONE_MONTH, N.Xh.NONE_3_MONTH, N.Xh.NONE_6_MONTH, N.Xh.NONE_YEAR, N.Xh.PREMIUM_MONTH_TIER_0, N.Xh.PREMIUM_MONTH_TIER_1, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_0, N.Xh.PREMIUM_YEAR_TIER_1, N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_3_MONTH_TIER_2, N.Xh.PREMIUM_6_MONTH_TIER_2]);
function e_(e) {
    return ef.has(e);
}
function ep(e) {
    return N.Z1.has(e);
}
function eh(e) {
    return e_(e) || ep(e);
}
function em(e) {
    return q(e) === N.p9.TIER_2 ? N.cb : 0;
}
function eg(e) {
    var t, n, r, i, o;
    if (e.isPurchasedViaApple && (null == (t = e.metadata) ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = a()(e.metadata.apple_grace_period_expires_date);
        return {
            days: a().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedViaGoogle && (null == (n = e.metadata) ? void 0 : n.google_grace_period_expires_date) != null && (null == (r = e.metadata) ? void 0 : r.google_original_expires_date) != null) {
        let t = a()(e.metadata.google_grace_period_expires_date),
            n = a()(e.metadata.google_original_expires_date);
        return {
            days: a().duration(t.diff(n)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? N.$7 : N.Ue;
        return {
            days: t,
            expiresDate: a()(e.currentPeriodStart).add(t, 'days')
        };
    }
    if ((null == (i = e.metadata) ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: a()(null == (o = e.metadata) ? void 0 : o.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: a()(e.metadata.grace_period_expires_date)
        };
    {
        let t = null == e.paymentSourceId ? N.UA : N.zp;
        return {
            days: t,
            expiresDate: a()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function eE(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: N.a$.NONE,
                      startsAt: a()(0),
                      endsAt: a()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        i = n
            ? (0, I.T4)(
                  t.invoiceItems
                      .filter((e) => N.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, I.T4)(t.total, t.currency);
    if (null != e.trialId && N.h8.includes(e.trialId) && null == e.paymentSourceId) return C.NW.format(C.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === S.O0b.CANCELED) return C.NW.format(C.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === S.O0b.PAUSE_PENDING)
        return C.NW.format(C.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === S.O0b.PAUSED)
        return r.fractionalState !== N.a$.NONE
            ? C.NW.format(C.t.Q18lRE, {
                  renewalDate: r.endsAt.toDate(),
                  price: i
              })
            : null == e.pauseEndsAt
              ? n
                  ? C.NW.format(C.t.KTYQCg, {
                        planName: C.NW.string(C.t.Ipxkoq),
                        price: i
                    })
                  : C.NW.string(C.t.fMz6Li)
              : n
                ? C.NW.format(C.t.zcgtzc, {
                      planName: C.NW.string(C.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: i
                  })
                : C.NW.format(C.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === S.O0b.PAST_DUE) {
        var o, s;
        let t = eg(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null == (o = e.metadata) ? void 0 : o.google_grace_period_expires_date) != null && (t = a()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null == (s = e.metadata) ? void 0 : s.apple_grace_period_expires_date) != null && (t = a()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? C.NW.format(C.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: A.Vz[e.paymentGateway],
                  paymentSourceLink: eZ(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : C.NW.format(C.t.qEIzys, {
                  endDate: t.toDate(),
                  price: i
              });
    }
    {
        if (e.status === S.O0b.BILLING_RETRY)
            return C.NW.format(C.t.EMTLOT, {
                endDate: a()(e.currentPeriodStart).add(N.A5, 'days').toDate(),
                price: i
            });
        if (e.status === S.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, y.isAndroid)()
                ? C.NW.format(C.t.dtcxw8, {
                      endDate: a()(e.currentPeriodStart).add(N.gh, 'days').toDate(),
                      paymentGatewayName: A.Vz[e.paymentGateway],
                      paymentSourceLink: eZ(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : C.NW.format(C.t.EMTLOT, {
                      endDate: a()(e.currentPeriodStart).add(N.gh, 'days').toDate(),
                      price: i
                  });
        if (eI(e)) return C.NW.format(C.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === S.O0b.UNPAID) return C.NW.format(C.t.CzTKoq, { maxProcessingTimeInDays: N.Rg });
        if (e.isPurchasedExternally)
            return C.NW.format(C.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: A.Vz[e.paymentGateway],
                subscriptionManagementLink: eZ(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let o = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (o = eb(o, r.unactivatedUnits)),
            n
                ? C.NW.format(C.t.Vl3cEB, {
                      planName: C.NW.string(C.t.Ipxkoq),
                      renewalDate: o,
                      price: i
                  })
                : C.NW.format(C.t.Q18lRE, {
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
    if (!(t > 0 && e.fractionalState === N.a$.NONE)) return '';
    let n = {
            days: C.t.fYmir6,
            hours: C.t['C3RO+v'],
            minutes: C.t.r77oHR
        },
        r = (0, g.TD)(0, t * E.Z.Millis.HOUR);
    return (0, g.QX)(r, n);
}
function ev(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === S.O0b.PAST_DUE;
}
function eO(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? C.NW.string(C.t['0rzJ4O']) : C.NW.string(C.t['9dLQ09'])), null != e.trialEndsAt && (t = C.NW.string(C.t.a9Mdb2)), t;
}
function eI(e) {
    return null != e.paymentSourceId && eS(e.paymentSourceId);
}
function eS(e) {
    if (null == e) return !1;
    let t = _.Z.getPaymentSource(e);
    return null != t && A.Uk.has(t.type);
}
function eT(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = ed(n);
    return 0 === (null != t ? ed(t.additionalPlans) : null) && 0 !== i ? S.O0b.CANCELED : r;
}
function eN(e) {
    return e.isPurchasedExternally ? e.status === S.O0b.CANCELED : eT(e) === S.O0b.CANCELED;
}
function eA(e) {
    var t, n, r;
    let { subscription: o, user: a, price: s, renewalInvoicePreview: l } = e,
        { planId: c, additionalPlans: u } = o,
        d = p.Z.get(c);
    i()(null != d, 'Missing plan');
    let f = ed(u),
        _ = eM(o.planId, o.paymentSourceId, o.currency, a).amount * f;
    if (null != l) {
        let e = l.invoiceItems.find((e) => N.Z1.has(e.subscriptionPlanId));
        null != e && (_ = e.amount);
    }
    s = null != s ? s : (0, I.T4)(_, o.currency);
    let h = null == (r = null != (n = null == l ? void 0 : l.taxInclusive) ? n : null == (t = o.latestInvoice) ? void 0 : t.taxInclusive) || r;
    if (eN(o))
        return o.isPurchasedViaGoogle
            ? C.NW.format(C.t['3/WTrK'], { quantity: f })
            : h
              ? C.NW.format(C.t['0ozBSE'], {
                    quantity: f,
                    rate: (0, I.og)(s, d.interval, d.intervalCount)
                })
              : C.NW.format(C.t['yjsv/v'], {
                    quantity: f,
                    rate: (0, I.og)(s, d.interval, d.intervalCount)
                });
    switch (o.status) {
        case S.O0b.ACCOUNT_HOLD:
            return o.isPurchasedViaGoogle
                ? C.NW.format(C.t.Nlf3nZ, {
                      quantity: f,
                      boostQuantity: f
                  })
                : h
                  ? C.NW.format(C.t.oiRy7u, {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    })
                  : C.NW.format(C.t['0QxOAg'], {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    });
        case S.O0b.PAUSE_PENDING:
        case S.O0b.PAUSED:
            return C.NW.string(C.t.CduWAg);
        default:
            return o.isPurchasedViaGoogle
                ? C.NW.format(C.t['5iud9v'], { quantity: f })
                : h
                  ? C.NW.format(C.t.eDwrLC, {
                        quantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    })
                  : C.NW.format(C.t.ijSDcH, {
                        quantity: f,
                        rate: (0, I.og)(s, d.interval, d.intervalCount)
                    });
    }
}
function eC(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? F(e.id, !1, r, t) : B(e.id, !1, r),
        o = (0, I.T4)(i.amount, i.currency);
    return e.currency !== A.pK.USD && !0 === n && (o = o.concat('*')), o;
}
function eR(e, t, n) {
    let r = eC(e, t, n);
    return (0, I.og)(r, e.interval, e.intervalCount);
}
function eP(e, t) {
    let { planId: n } = e;
    if (e.status === S.O0b.CANCELED || e.status === S.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return e_(t);
    });
    return null == r || (0, u.Q0)(r.subscriptionPlanId) || (null != e.renewalMutations && e.renewalMutations.planId !== e.planId) ? e.planId : r.subscriptionPlanId;
}
function ew(e, t) {
    let { status: n } = e;
    if (e.status === S.O0b.CANCELED || e.status === S.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return e_(t);
    });
    return (null == r || (0, u.Q0)(r.subscriptionPlanId)) && (n = S.O0b.CANCELED), n;
}
function eD(e) {
    let { status: t, renewalMutations: n } = e;
    return t === S.O0b.CANCELED || (null != n && (0, u.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eL(e) {
    return e === S.O0b.PAST_DUE || e === S.O0b.ACCOUNT_HOLD || e === S.O0b.BILLING_RETRY;
}
function ex(e, t, n) {
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
function eM(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: f.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        o = p.Z.get(e);
    if (null == o) {
        let t = Error('Unsupported plan');
        throw ((0, m.q2)(t, { tags: { planId: e } }), t);
    }
    let a = p.Z.getForSkuAndInterval(tI(N.Si.GUILD), o.interval, o.intervalCount);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, m.q2)(t, { tags: { planId: e } }), t);
    }
    return F(a.id, (0, O.I5)(r), !1, i);
}
function ek(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function ej(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case N.Xh.PREMIUM_MONTH_TIER_0:
                return C.NW.string(C.t['0ggVqK']);
            case N.Xh.PREMIUM_YEAR_TIER_0:
                return C.NW.string(C.t['jm+ZQ0']);
            case N.Xh.PREMIUM_MONTH_TIER_1:
                return C.NW.string(C.t.uph4Jy);
            case N.Xh.PREMIUM_YEAR_TIER_1:
                return C.NW.string(C.t['D/l7Ym']);
            case N.Xh.PREMIUM_MONTH_TIER_2:
                return C.NW.string(C.t['5l1Mub']);
            case N.Xh.PREMIUM_YEAR_TIER_2:
                return C.NW.string(C.t.G0mISU);
        }
    switch (r) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
            return n ? C.NW.string(C.t.cRCCJy) : C.NW.string(C.t['/G3aKy']);
        case N.Xh.PREMIUM_YEAR_TIER_0:
            return n ? C.NW.string(C.t.cRCCJy) : C.NW.string(C.t['2eQpsL']);
        case N.Xh.PREMIUM_MONTH_TIER_1:
            return n ? C.NW.string(C.t.cRCCJy) : C.NW.string(C.t.gueLg4);
        case N.Xh.PREMIUM_YEAR_TIER_1:
            return n ? C.NW.string(C.t.cRCCJy) : C.NW.string(C.t['MhH/vb']);
        case N.Xh.PREMIUM_MONTH_TIER_2:
            return n ? C.NW.string(C.t.cRCCJy) : C.NW.string(C.t.LQVQIi);
        case N.Xh.PREMIUM_YEAR_TIER_2:
            return n ? C.NW.string(C.t.cRCCJy) : C.NW.string(C.t['0nfg19']);
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
            return C.NW.formatToPlainString(C.t.BCD4fX, { intervalCount: t.intervalCount });
        case N.Xh.NONE_MONTH:
        case N.Xh.NONE_YEAR:
        case N.Xh.NONE_3_MONTH:
        case N.Xh.NONE_6_MONTH:
        case N.Xh.PREMIUM_MONTH_GUILD:
        case N.Xh.PREMIUM_YEAR_GUILD:
        case N.Xh.PREMIUM_3_MONTH_GUILD:
        case N.Xh.PREMIUM_6_MONTH_GUILD:
            return C.NW.string(C.t.eUEeCg);
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, m.q2)(i, { tags: { planId: r } }), i);
}
function eU(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = p.Z.get(t);
    return (
        i()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eG(e) {
    let { intervalType: t = N.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case N.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? C.NW.formatToPlainString(C.t.fRNBRU, { weeks: n / 7 }) : C.NW.formatToPlainString(C.t.EIpHEh, { weeks: n / 7 });
            return r ? C.NW.formatToPlainString(C.t['6Cdzo6'], { days: n }) : C.NW.formatToPlainString(C.t['kbBj/v'], { days: n });
        case N.rV.MONTH:
            return r ? C.NW.formatToPlainString(C.t.x5Mgxc, { months: n }) : C.NW.formatToPlainString(C.t['4SEnCQ'], { months: n });
        case N.rV.YEAR:
            return r ? C.NW.formatToPlainString(C.t['h+63ys'], { years: n }) : C.NW.formatToPlainString(C.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eB(e) {
    let { intervalType: t = N.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case N.rV.DAY:
            if (n >= 7 && n % 7 == 0) return C.NW.formatToPlainString(C.t['8awlzM'], { weeks: n / 7 });
            return C.NW.formatToPlainString(C.t.ZsgnLC, { days: n });
        case N.rV.MONTH:
            return C.NW.formatToPlainString(C.t.Y0HCVV, { months: n });
        case N.rV.YEAR:
            return C.NW.formatToPlainString(C.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eF(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eB({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eV(e) {
    let { intervalType: t = N.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case N.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? C.NW.formatToPlainString(C.t.iVZYys, { weeks: n / 7 }) : C.NW.formatToPlainString(C.t.EmoBDw, { weeks: n / 7 });
            return r ? C.NW.formatToPlainString(C.t.jzH70d, { days: n }) : C.NW.formatToPlainString(C.t.k2UNz8, { days: n });
        case N.rV.MONTH:
            return r ? C.NW.formatToPlainString(C.t.erUSmJ, { months: n }) : C.NW.formatToPlainString(C.t.kridzM, { months: n });
        case N.rV.YEAR:
            return r ? C.NW.formatToPlainString(C.t.IfYQVF, { years: n }) : C.NW.formatToPlainString(C.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eZ(e, t) {
    switch (e) {
        case S.gg$.APPLE_PARTNER:
        case S.gg$.APPLE:
            return L[t];
        case S.gg$.GOOGLE:
            return x[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eH(e, t) {
    return (0, O.I5)(e) || eL(null == t ? void 0 : t.status);
}
function eW(e, t) {
    var n, r;
    let i = [],
        o = (null != (r = null == (n = e.renewalMutations) ? void 0 : n.items) ? r : e.items).find((e) => N.dJ.has(e.planId));
    return (
        null != o && i.push(o),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return P({}, n, t);
            return t;
        })
    );
}
function eY(e) {
    return e.filter((e) => !N.dJ.has(e.planId));
}
function eK(e, t, n, r) {
    var o, a;
    i()(r.has(t), 'Expected planId in group');
    let s = !1,
        l = (null != (a = null == (o = e.renewalMutations) ? void 0 : o.items) ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  D(P({}, e), {
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
function ez(e, t) {
    return eK(e, t, 1, N.dJ);
}
function eq(e, t, n) {
    return eK(e, n, t, N.Z1);
}
function eQ(e) {
    var t;
    let n = null != (t = e.find((e) => !('id' in e))) ? t : e.find((e) => N.dJ.has(e.planId));
    if (null != n) {
        let t = p.Z.get(n.planId);
        i()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = p.Z.get(e.planId);
                i()(null != r, 'Missing plan');
                let o = p.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return i()(null != o, 'Missing planForInterval'), D(P({}, e), { planId: o.id });
            }));
    }
    return e;
}
function eX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = N.a1[e].fileSize;
    return (0, b.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function eJ(e) {
    return null == e ? null : e.items.find((e) => N.Z1.has(e.planId));
}
function e$(e) {
    return null != e && null == G(e) && null != eJ(e);
}
function e0(e) {
    let t = null != e ? G(e) : null;
    return null != t ? es(t.planId) : null;
}
function e1(e) {
    if (null != e) {
        let t = G(e);
        if (null != t) return q(t.planId);
    }
}
function e2(e) {
    if (null != e && null != e.renewalMutations) {
        let t = G(e.renewalMutations);
        if (null != t) return q(t.planId);
    }
}
function e3(e) {
    switch (e) {
        case N.p9.TIER_0:
            return T.Rj.PREMIUM_TIER_0;
        case N.p9.TIER_1:
            return T.Rj.PREMIUM_TIER_1;
        case N.p9.TIER_2:
            return T.Rj.PREMIUM_TIER_2;
    }
}
function e4(e) {
    return (0, c.ks)(c.g_, e);
}
function e6(e) {
    return (0, c.ks)(c.m_, e);
}
function e5(e) {
    return (0, c.ks)(c._y, e);
}
function e7(e) {
    return (0, c.ks)(c.tj, e);
}
function e8(e) {
    return (0, c.ks)(c.EQ, e);
}
function e9(e) {
    return (0, c.ks)(c.Pl, e);
}
function te(e) {
    return (0, c.ks)(c.wN, e);
}
function tt(e) {
    return (0, c.ks)(c._G, e);
}
function tn(e, t) {
    return (0, c.ks)(c.j4, e, t);
}
function tr(e) {
    return (0, c.ks)(c.lX, e);
}
function ti(e) {
    return (0, c.ks)(c.Uw, e);
}
function to(e) {
    return (0, c.ks)(c.zm, e);
}
function ta(e) {
    return (0, c.ks)(c.zZ, e);
}
function ts(e) {
    return (0, c.ks)(c.do, e);
}
function tl(e) {
    return (0, c.ks)(c.ZE, e);
}
function tc(e) {
    return (0, c.ks)(c.Ej, e);
}
function tu(e) {
    return (0, c.ks)(c.Ct, e);
}
function td(e) {
    return (0, c.ks)(c.O1, e);
}
function tf(e) {
    return (0, c.ks)(c.uw, e);
}
function t_(e, t) {
    return 'high' === e ? (0, c.ks)(c.O8, t) : 'mid' === e && (0, c.ks)(c.g7, t);
}
function tp(e, t) {
    return (0, c.ks)(c.$0, e, t);
}
function th(e) {
    return (0, c.ks)(c.ME, e);
}
function tm(e) {
    return (0, c.ks)(c.AN, e);
}
function tg(e) {
    return (0, c.ks)(c._O, e);
}
function tE(e) {
    return (0, c.ks)(c.qH, e);
}
function tb(e) {
    return (0, c.ks)(c.hs, e);
}
function ty(e) {
    return (0, c.ks)(c.Ry, e);
}
function tv(e) {
    return (0, c.ks)(c.DU, e);
}
function tO(e, t) {
    let n = (0, I.T4)(e.amount, e.currency),
        r = z(t);
    return ''.concat(n, '/').concat(r);
}
function tI(e) {
    return e;
}
function tS(e) {
    return 'isNitroLocked' in e;
}
function tT(e) {
    return null != e && N.OT.includes(e) ? 1 : 2;
}
function tN(e) {
    if (e === N.rV.YEAR) return C.NW.string(C.t.tfqrho);
    if (e === N.rV.MONTH) return C.NW.string(C.t.FPybU1);
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
        let [n, r] = N.Cx[t],
            i = 1;
        switch (n) {
            case N.Se.HOUR:
                i = 1;
                break;
            case N.Se.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
let tP = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < j,
    isPremiumAtLeast: O.yd,
    isPremium: O.I5,
    isPremiumExactly: O.M5,
    isPremiumEligible: tA,
    getPrice: F,
    getDefaultPrice: B,
    getInterval: W,
    getIntervalString: K,
    getIntervalStringAsNoun: z,
    getPremiumType: q,
    getDisplayName: Q,
    getDisplayPremiumType: ee,
    getPremiumPlanOptions: ea,
    getUpgradeEligibilities: ec,
    getReverseTrialWeeks: tT,
    formatInterval: tN,
    getPlanDescription: en,
    isPremiumSku: eo,
    getClosestUpgrade: eu,
    getIntervalMonths: $,
    getUserMaxFileSize: v.h,
    getSkuIdForPlan: es,
    getSkuIdForPremiumType: el,
    getNumIncludedPremiumGuildSubscriptionSlots: em,
    getBillingInformationString: eE,
    extendDateWithUnconsumedFractionalPremium: eb,
    getUnactivatedFractionalPremiumHoursString: ey,
    isSwitchingPlansDisabled: ev,
    getSwitchingPlansDisabledMessage: eO,
    isNoneSubscription: u.Q0,
    getPlanIdFromInvoice: eP,
    getStatusFromInvoice: ew,
    isBaseSubscriptionCanceled: eD,
    getPremiumGuildIntervalPrice: eM,
    hasAccountCredit: ek,
    getBillingReviewSubheader: ej,
    getIntervalForInvoice: eU,
    getPremiumPlanItem: G,
    getGuildBoostPlanItem: eJ,
    isBoostOnlySubscription: e$,
    getPremiumSkuIdForSubscription: e0,
    getPremiumTypeFromSubscription: e1,
    getPremiumTypeFromSubscriptionRenewalMutations: e2,
    getPremiumGradientColor: e3,
    getUnactivatedFractionalPremiumHours: tC,
    castPremiumSubscriptionAsSkuId: tI,
    canUseAnimatedEmojis: e4,
    canUseEmojisEverywhere: e6,
    canUseSoundboardEverywhere: e5,
    canUseCustomCallSounds: e7,
    canUploadLargeFiles: e8,
    canUseBadges: e9,
    canUseHighVideoUploadQuality: te,
    canEditDiscriminator: tt,
    hasBoostDiscount: tn,
    canUseAnimatedAvatar: tr,
    canUseFancyVoiceChannelReactions: ti,
    canInstallPremiumApplications: to,
    canUseIncreasedMessageLength: ta,
    canUseIncreasedGuildCap: ts,
    canRedeemPremiumPerks: tl,
    canUsePremiumProfileCustomization: tc,
    canUsePremiumAppIcons: tu,
    canUsePremiumGuildMemberProfile: td,
    canUseClientThemes: tf,
    canStreamQuality: t_,
    hasFreeBoosts: tp,
    canUseCustomStickersEverywhere: th,
    canUseCustomBackgrounds: tm,
    canUseCollectibles: tg,
    canUseCustomNotificationSounds: tE,
    canUsePremiumVoiceFilters: tb,
    canUseIncreasedRecentAvatarsLimit: ty,
    canUseChatWallpapers: tv,
    formatPriceString: tO,
    StreamQuality: U
});
