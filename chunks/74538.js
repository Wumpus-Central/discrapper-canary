n.d(t, {
    Af: () => B,
    Ap: () => eT,
    CY: () => V,
    Gf: () => X,
    I5: () => I.I5,
    JE: () => eH,
    JP: () => K,
    L7: () => z,
    M5: () => I.M5,
    MY: () => eW,
    N1: () => ey,
    PK: () => eP,
    PV: () => em,
    Px: () => en,
    Qo: () => eY,
    Rd: () => Q,
    Rt: () => eV,
    T4: () => H,
    U2: () => G,
    Ue: () => eK,
    V7: () => es,
    W_: () => eU,
    Wz: () => tI,
    XK: () => eq,
    Z8: () => eh,
    ZP: () => tw,
    Zx: () => eQ,
    _O: () => tS,
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
    if: () => eZ,
    jP: () => J,
    jp: () => ev,
    k5: () => e1,
    lY: () => eE,
    m3: () => eO,
    nd: () => eI,
    qV: () => ei,
    uV: () => ef,
    uZ: () => ep,
    v6: () => eN,
    v9: () => eJ,
    xG: () => tP,
    xe: () => tA,
    yd: () => I.yd,
    zL: () => ea,
    zV: () => ex
}),
    n(415506),
    n(49124),
    n(388685),
    n(290780),
    n(539854);
var r = n(512722),
    i = n.n(r),
    a = n(913527),
    o = n.n(a);
n(442837);
var s = n(782568),
    l = n(927359),
    c = n(710845),
    u = n(803905),
    d = n(301766),
    f = n(594174),
    _ = n(351402),
    p = n(853872),
    h = n(509545),
    m = n(78839),
    g = n(122289),
    E = n(55935),
    b = n(70956),
    y = n(424218),
    v = n(358085),
    O = n(380684),
    I = n(111361),
    S = n(937615),
    T = n(981631),
    A = n(334431),
    N = n(474936),
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
function L(e, t) {
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
let x = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    M = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    k = new c.Z('PremiumUtils.tsx'),
    j = {
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
    U = 2592000000;
var G = (function (e) {
    return (e.MID = 'mid'), (e.HIGH = 'high'), e;
})({});
function B(e) {
    return e.items.find((e) => N.dJ.has(e.planId));
}
function V(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null != (t = p.Z.defaultPaymentSourceId) ? t : void 0,
        a = m.ZP.getPremiumTypeSubscription();
    return null != a && null != a.paymentSourceId && (i = a.paymentSourceId), F(e, n, r, { paymentSourceId: i });
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != h.Z.get(e)) {
        let r = T.tuJ.DEFAULT;
        n ? (r = T.tuJ.GIFT) : t && (r = T.tuJ.PREMIUM_TIER_1);
        let o = Y(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: a
        });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                ((0, g.q2)(t, {
                    extra: { paymentSourceId: i },
                    tags: {
                        purchaseType: r.toString(),
                        planId: e,
                        currency: null != a ? a : 'unknown'
                    }
                }),
                t)
            );
        }
        return o;
    }
    let o = Error('Plan not found');
    throw (
        ((0, g.q2)(o, {
            tags: {
                planId: e,
                currency: null != a ? a : 'unknown'
            },
            extra: L(w({}, r), { isGift: n })
        }),
        o)
    );
}
function Z(e, t) {
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
        r = Z(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            k.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), k.info('prices: '.concat(i));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, g.q2)(a, {
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
function Y(e) {
    let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: T.tuJ.DEFAULT },
        i = H(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === i.length && k.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r) : i[0];
}
function W(e) {
    let t = N.GP[e];
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
        case N.EA.MONTH:
            return R.intl.string(R.t.FPybU1);
        case N.EA.YEAR:
            return R.intl.string(R.t.tfqrho);
        case N.EA.DAY:
        case N.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function z(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : N.p9.TIER_2;
    if (t || n)
        switch (e) {
            case N.rV.MONTH:
                let o = R.intl.formatToPlainString(a === N.p9.TIER_0 ? R.t.NPKsLy : R.t.poEovb, { timeInterval: R.intl.string(R.t.FPybU1) });
                return i ? o : R.intl.string(R.t.Mh9bTk);
            case N.rV.YEAR:
                let s = R.intl.formatToPlainString(a === N.p9.TIER_0 ? R.t.NPKsLy : R.t.poEovb, { timeInterval: R.intl.string(R.t.tfqrho) });
                return i ? s : R.intl.string(R.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case N.rV.MONTH:
            if (1 !== r) return R.intl.formatToPlainString(R.t['0UlZnJ'], { intervalCount: r });
            return R.intl.string(R.t['DKzs9/']);
        case N.rV.YEAR:
            return R.intl.string(R.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function q(e) {
    switch (e) {
        case N.rV.MONTH:
            return R.intl.string(R.t.FPybU1);
        case N.rV.YEAR:
            return R.intl.string(R.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function Q(e) {
    let t = N.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
            return t ? R.intl.format(R.t.TZXHNj, { duration: r }) : n ? R.intl.string(R.t['81iAgo']) : R.intl.string(R.t['0efVPz']);
        case N.Xh.PREMIUM_YEAR_TIER_0:
            return t ? R.intl.format(R.t.eqRhCw, { duration: r }) : n ? R.intl.string(R.t.UvzqY2) : R.intl.string(R.t.eoVuBg);
        case N.Xh.PREMIUM_MONTH_TIER_1:
            return n ? R.intl.string(R.t['g/dH5u']) : R.intl.string(R.t['7O6qSk']);
        case N.Xh.PREMIUM_YEAR_TIER_1:
            return n ? R.intl.string(R.t.pdZJam) : R.intl.string(R.t.Md5xbm);
        case N.Xh.PREMIUM_MONTH_TIER_2:
            return t ? R.intl.format(R.t.aI6QX1, { duration: r }) : n ? R.intl.string(R.t.SmVbHR) : R.intl.string(R.t.FKYNCw);
        case N.Xh.PREMIUM_YEAR_TIER_2:
            return t ? R.intl.format(R.t['1wBcPj'], { duration: r }) : n ? R.intl.string(R.t.JIq4Oz) : R.intl.string(R.t['cfu/5e']);
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
            return R.intl.string(R.t.wCbINj);
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
            return R.intl.string(R.t['e3/Ara']);
        case N.Xh.PREMIUM_MONTH_GUILD:
            return n ? R.intl.string(R.t['6ZR3Bw']) : R.intl.string(R.t.h80cx8);
        case N.Xh.PREMIUM_YEAR_GUILD:
            return n ? R.intl.string(R.t.YDpAzc) : R.intl.string(R.t.ZHkls7);
        case N.Xh.PREMIUM_3_MONTH_GUILD:
            return R.intl.string(R.t.EZHHBw);
        case N.Xh.PREMIUM_6_MONTH_GUILD:
            return R.intl.string(R.t.X2KDOz);
        case N.Xh.PREMIUM_MONTH_LEGACY:
            return R.intl.string(R.t['PD6k7+']);
        case N.Xh.PREMIUM_YEAR_LEGACY:
            return R.intl.string(R.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, g.q2)(i, { tags: { planId: e } }), i);
}
function J(e) {
    switch (e) {
        case N.Si.TIER_0:
            return R.intl.string(R.t['t9uG/v']);
        case N.Si.TIER_1:
            return R.intl.string(R.t['FSOz7+']);
        case N.Si.TIER_2:
            return R.intl.string(R.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, g.q2)(t, { tags: { skuId: e } }), t);
}
function $(e) {
    switch (e) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
        case N.Xh.PREMIUM_YEAR_TIER_0:
            return R.intl.string(R.t['t9uG/v']);
        case N.Xh.PREMIUM_MONTH_TIER_1:
        case N.Xh.PREMIUM_YEAR_TIER_1:
            return R.intl.string(R.t['FSOz7+']);
        case N.Xh.PREMIUM_MONTH_TIER_2:
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
        case N.Xh.PREMIUM_YEAR_TIER_2:
            return R.intl.string(R.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, g.q2)(t, { tags: { planId: e } }), t);
}
function ee(e, t) {
    if (e === N.rV.MONTH) return t;
    if (e === N.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function et(e) {
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
    throw ((0, g.q2)(n, { tags: { planId: e } }), n);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case N.p9.TIER_0:
            return t ? 'Basic' : R.intl.string(R.t['t9uG/v']);
        case N.p9.TIER_1:
            return t ? 'Classic' : R.intl.string(R.t['FSOz7+']);
        case N.p9.TIER_2:
            return R.intl.string(R.t['lG6a5+']);
    }
}
function er(e) {
    var t, n, r, i, a, l, c, u, d, _;
    let { subscription: p, planId: h, price: m, includePremiumGuilds: g, hasDiscountApplied: b, activeDiscountInfo: y, renewalInvoicePreview: v, hasFractionalPremiumWithSub: O } = e,
        I = N.GP[h],
        S = tO(V(I.id), I.interval),
        A = eL(p) || (null == p.paymentSourceId && !p.isPurchasedExternally && !(null == (t = f.default.getCurrentUser()) ? void 0 : t.hasFreePremium())),
        C = null != m && null == p.paymentGateway,
        P = p.status === T.O0b.UNPAID && null !== p.latestInvoice && (null == (n = p.latestInvoice) ? void 0 : n.status) === T.hUK.OPEN,
        w = A ? T.O0b.CANCELED : P ? T.O0b.UNPAID : p.status,
        D = null == (a = null != (i = null == v ? void 0 : v.taxInclusive) ? i : null == (r = p.latestInvoice) ? void 0 : r.taxInclusive) || a,
        L = N.cb + (g ? ef(p.additionalPlans) : 0),
        x = C ? (D ? R.intl.format(R.t['cd+hqK'], { price: m }) : R.intl.format(R.t.NUkcpK, { price: m })) : R.intl.string(R.t.zYx3Y2),
        M = C ? (D ? R.intl.format(R.t.VsKcFB, { price: m }) : R.intl.format(R.t.hJ5xER, { price: m })) : R.intl.string(R.t['8rSipK']),
        k = C
            ? D
                ? R.intl.format(R.t['jRy6/P'], {
                      price: m,
                      num: L
                  })
                : R.intl.format(R.t.tTNE8P, {
                      price: m,
                      num: L
                  })
            : R.intl.format(R.t['U+z/HB'], { num: L });
    switch (h) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
        case N.Xh.PREMIUM_YEAR_TIER_0:
            switch (w) {
                case T.O0b.CANCELED:
                    return C ? (D ? R.intl.format(R.t['USi/nZ'], { price: m }) : R.intl.format(R.t['FS//l5'], { price: m })) : R.intl.string(R.t.JshLzs);
                case T.O0b.ACCOUNT_HOLD:
                    return C ? (D ? R.intl.format(R.t['5mv+2t'], { price: m }) : R.intl.format(R.t.nkAEfX, { price: m })) : R.intl.format(R.t.SsLIXV, {});
                case T.O0b.UNPAID:
                    return R.intl.format(R.t.cmkbFB, {});
                case T.O0b.PAUSE_PENDING:
                    let j = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != j
                        ? R.intl.format(R.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: j
                          })
                        : R.intl.format(R.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case T.O0b.PAUSED:
                    if (O) return x;
                    return R.intl.format(R.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case T.O0b.PAST_DUE:
                    return R.intl.format(R.t['d+0vws'], {
                        endDate: (0, E.vc)(eE(p).expiresDate, 'LL'),
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
                case T.O0b.CANCELED:
                    return C ? (D ? R.intl.format(R.t.cXy8Bg, { price: m }) : R.intl.format(R.t['C/XsHh'], { price: m })) : R.intl.string(R.t.K6tYFR);
                case T.O0b.ACCOUNT_HOLD:
                    return C ? (D ? R.intl.format(R.t.HBkIBg, { price: m }) : R.intl.format(R.t.ZsO1S0, { price: m })) : R.intl.format(R.t['0+/WHx'], {});
                case T.O0b.UNPAID:
                    return R.intl.format(R.t.McIzws, {});
                case T.O0b.PAUSE_PENDING:
                    let U = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? R.intl.format(R.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : R.intl.format(R.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case T.O0b.PAUSED:
                    if (O) return M;
                    return R.intl.format(R.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case T.O0b.PAST_DUE:
                    return R.intl.format(R.t['d+0vws'], {
                        endDate: (0, E.vc)(eE(p).expiresDate, 'LL'),
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
                case T.O0b.CANCELED:
                    return C
                        ? D
                            ? R.intl.format(R.t.xoFgRk, {
                                  price: m,
                                  num: L
                              })
                            : R.intl.format(R.t.nXdbKi, {
                                  price: m,
                                  num: L
                              })
                        : R.intl.format(R.t.EcSdRE, { num: L });
                case T.O0b.ACCOUNT_HOLD:
                    return C
                        ? D
                            ? R.intl.format(R.t['5C/0QE'], {
                                  price: m,
                                  num: L
                              })
                            : R.intl.format(R.t.xfYkho, {
                                  price: m,
                                  num: L
                              })
                        : R.intl.format(R.t.ivjxcn, { num: L });
                case T.O0b.UNPAID:
                    return R.intl.format(R.t['0HopYW'], { num: L });
                case T.O0b.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? o()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? R.intl.format(R.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : R.intl.format(R.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case T.O0b.PAUSED:
                    if (O) return k;
                    return R.intl.format(R.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case T.O0b.BILLING_RETRY:
                    return R.intl.format(R.t['IlJ/HR'], { endDate: o()(p.currentPeriodStart).add(N.A5, 'days').toDate() });
                case T.O0b.PAST_DUE:
                    return R.intl.format(R.t['d+0vws'], {
                        endDate: (0, E.vc)(eE(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return b
                        ? h === N.Xh.PREMIUM_YEAR_TIER_2
                            ? R.intl.format(R.t['+qqh6u'], {
                                  percent: null != (l = null == y ? void 0 : y.percentage) ? l : N.Bo,
                                  regularPrice: S
                              })
                            : D
                              ? R.intl.formatToPlainString(R.t['3Ziutb'], {
                                    percent: null != (c = null == y ? void 0 : y.percentage) ? c : N.M_,
                                    regularPrice: S,
                                    numMonths: null != (u = null == y ? void 0 : y.duration) ? u : N.rt
                                })
                              : R.intl.formatToPlainString(R.t['G6+XOT'], {
                                    percent: null != (d = null == y ? void 0 : y.percentage) ? d : N.M_,
                                    regularPrice: S,
                                    numMonths: null != (_ = null == y ? void 0 : y.duration) ? _ : N.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(h));
    }
}
function ei(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: a = !1, hasDiscountApplied: o = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: l = !1 } = e,
        c = h.Z.get(r);
    return (
        i()(null != c, 'Missing plan'),
        er({
            subscription: n,
            planId: c.id,
            price: eM(t, n, c),
            includePremiumGuilds: a,
            hasDiscountApplied: o,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function ea(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, d.Q0)(t) ? null : X(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return N.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === N.Xh.PREMIUM_MONTH_GUILD || (null == i ? void 0 : i.planId) === N.Xh.PREMIUM_YEAR_GUILD ? R.t.Pi5yMD : null,
        o = null != a ? R.intl.formatToPlainString(a, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != o)
        return R.intl.formatToPlainString(R.t.FN5T9v, {
            premiumDescription: r,
            premiumGuildDescription: o
        });
    if (null != r) return r;
    if (null != o) return o;
    throw Error('Subscription without premium or premium guild subscription');
}
function eo(e) {
    return e === N.Si.TIER_0 || e === N.Si.TIER_1 || e === N.Si.TIER_2;
}
function es(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: a } = e;
    if (null == t || !n) return [];
    let o = void 0 !== a && t === N.GP[a].skuId ? a : void 0,
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
    if (void 0 !== o) {
        let e = s.indexOf(o);
        s.splice(e, 1), s.unshift(o);
    }
    return s;
}
function el(e) {
    let t = N.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ec(e) {
    switch (e) {
        case N.p9.TIER_0:
            return N.Si.TIER_0;
        case N.p9.TIER_1:
            return N.Si.TIER_1;
        case N.p9.TIER_2:
            return N.Si.TIER_2;
    }
}
function eu(e) {
    var t;
    return null == e ? j.ALL : null != (t = j[e]) ? t : [];
}
function ed(e) {
    let t = N.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        r = eu(e);
    for (let e of Object.keys(N.GP)) {
        let { interval: t } = N.GP[e];
        if (n === t && r.includes(e)) return e;
    }
    return null;
}
function ef(e) {
    let t = h.Z.getPlanIdsForSkus([tI(N.Si.GUILD)]);
    i()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let e_ = new Set([N.Xh.NONE_MONTH, N.Xh.NONE_3_MONTH, N.Xh.NONE_6_MONTH, N.Xh.NONE_YEAR, N.Xh.PREMIUM_MONTH_TIER_0, N.Xh.PREMIUM_MONTH_TIER_1, N.Xh.PREMIUM_MONTH_TIER_2, N.Xh.PREMIUM_YEAR_TIER_0, N.Xh.PREMIUM_YEAR_TIER_1, N.Xh.PREMIUM_YEAR_TIER_2, N.Xh.PREMIUM_3_MONTH_TIER_2, N.Xh.PREMIUM_6_MONTH_TIER_2]);
function ep(e) {
    return e_.has(e);
}
function eh(e) {
    return N.Z1.has(e);
}
function em(e) {
    return ep(e) || eh(e);
}
function eg(e) {
    return Q(e) === N.p9.TIER_2 ? N.cb : 0;
}
function eE(e) {
    var t, n, r, i, a;
    if (e.isPurchasedViaApple && (null == (t = e.metadata) ? void 0 : t.apple_grace_period_expires_date) != null) {
        let t = o()(e.metadata.apple_grace_period_expires_date);
        return {
            days: o().duration(t.diff(e.currentPeriodStart)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedViaGoogle && (null == (n = e.metadata) ? void 0 : n.google_grace_period_expires_date) != null && (null == (r = e.metadata) ? void 0 : r.google_original_expires_date) != null) {
        let t = o()(e.metadata.google_grace_period_expires_date),
            n = o()(e.metadata.google_original_expires_date);
        return {
            days: o().duration(t.diff(n)).days(),
            expiresDate: t
        };
    }
    if (e.isPurchasedExternally) {
        let t = e.isPurchasedViaApple ? N.$7 : N.Ue;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, 'days')
        };
    }
    if ((null == (i = e.metadata) ? void 0 : i.grace_period_expires_date) != null)
        return {
            days: o()(null == (a = e.metadata) ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: o()(e.metadata.grace_period_expires_date)
        };
    {
        let t = null == e.paymentSourceId ? N.UA : N.zp;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function eb(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: N.a$.NONE,
                      startsAt: o()(0),
                      endsAt: o()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        i = n
            ? (0, S.T4)(
                  t.invoiceItems
                      .filter((e) => N.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, S.T4)(t.total, t.currency);
    if (null != e.trialId && N.h8.includes(e.trialId) && null == e.paymentSourceId) return R.intl.format(R.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === T.O0b.CANCELED) return R.intl.format(R.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === T.O0b.PAUSE_PENDING)
        return R.intl.format(R.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === T.O0b.PAUSED)
        return r.fractionalState !== N.a$.NONE
            ? R.intl.format(R.t.Q18lRE, {
                  renewalDate: r.endsAt.toDate(),
                  price: i
              })
            : null == e.pauseEndsAt
              ? n
                  ? R.intl.format(R.t.KTYQCg, {
                        planName: R.intl.string(R.t.Ipxkoq),
                        price: i
                    })
                  : R.intl.string(R.t.fMz6Li)
              : n
                ? R.intl.format(R.t.zcgtzc, {
                      planName: R.intl.string(R.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: i
                  })
                : R.intl.format(R.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === T.O0b.PAST_DUE) {
        var a, s;
        let t = eE(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null == (a = e.metadata) ? void 0 : a.google_grace_period_expires_date) != null && (t = o()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null == (s = e.metadata) ? void 0 : s.apple_grace_period_expires_date) != null && (t = o()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? R.intl.format(R.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: C.Vz[e.paymentGateway],
                  paymentSourceLink: eH(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : R.intl.format(R.t.qEIzys, {
                  endDate: t.toDate(),
                  price: i
              });
    }
    {
        if (e.status === T.O0b.BILLING_RETRY)
            return R.intl.format(R.t.EMTLOT, {
                endDate: o()(e.currentPeriodStart).add(N.A5, 'days').toDate(),
                price: i
            });
        if (e.status === T.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, v.isAndroid)()
                ? R.intl.format(R.t.dtcxw8, {
                      endDate: o()(e.currentPeriodStart).add(N.gh, 'days').toDate(),
                      paymentGatewayName: C.Vz[e.paymentGateway],
                      paymentSourceLink: eH(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : R.intl.format(R.t.EMTLOT, {
                      endDate: o()(e.currentPeriodStart).add(N.gh, 'days').toDate(),
                      price: i
                  });
        if (eS(e)) return R.intl.format(R.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === T.O0b.UNPAID) return R.intl.format(R.t.CzTKoq, { maxProcessingTimeInDays: N.Rg });
        if (e.isPurchasedExternally)
            return R.intl.format(R.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: C.Vz[e.paymentGateway],
                subscriptionManagementLink: eH(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let a = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (a = ey(a, r.unactivatedUnits)),
            n
                ? R.intl.format(R.t.Vl3cEB, {
                      planName: R.intl.string(R.t.Ipxkoq),
                      renewalDate: a,
                      price: i
                  })
                : R.intl.format(R.t.Q18lRE, {
                      renewalDate: a,
                      price: i
                  })
        );
    }
}
function ey(e, t, n) {
    let r = o()(e);
    if (t.length > 0) {
        let e = tR(t);
        r = r.add(e, 'hours');
    }
    if (void 0 !== n) {
        let e = o()(),
            t = n.diff(e, 'hours', !0);
        t > 0 && (r = r.add(t, 'hours'));
    }
    return r.toDate();
}
function ev(e) {
    let t = tR(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === N.a$.NONE)) return '';
    let n = {
            days: R.t.fYmir6,
            hours: R.t['C3RO+v'],
            minutes: R.t.r77oHR
        },
        r = (0, l.eB)((0, E.TD)(0, t * b.Z.Millis.HOUR));
    return (0, E.QX)(r, n);
}
function eO(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === T.O0b.PAST_DUE;
}
function eI(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? R.intl.string(R.t['0rzJ4O']) : R.intl.string(R.t['9dLQ09'])), null != e.trialEndsAt && (t = R.intl.string(R.t.a9Mdb2)), t;
}
function eS(e) {
    return null != e.paymentSourceId && eT(e.paymentSourceId);
}
function eT(e) {
    if (null == e) return !1;
    let t = p.Z.getPaymentSource(e);
    return null != t && C.Uk.has(t.type);
}
function eA(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = ef(n);
    return 0 === (null != t ? ef(t.additionalPlans) : null) && 0 !== i ? T.O0b.CANCELED : r;
}
function eN(e) {
    return e.isPurchasedExternally ? e.status === T.O0b.CANCELED : eA(e) === T.O0b.CANCELED;
}
function eC(e) {
    var t, n, r;
    let { subscription: a, user: o, price: s, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = a,
        f = h.Z.get(u);
    i()(null != f, 'Missing plan');
    let _ = ef(d),
        p = ek(a.planId, a.paymentSourceId, a.currency, o).amount * _;
    if (null != l) {
        let e = l.invoiceItems.find((e) => N.Z1.has(e.subscriptionPlanId));
        null != e && (p = e.amount);
    }
    s = null != s ? s : (0, S.T4)(p, a.currency);
    let m = null == (r = null != (n = null == l ? void 0 : l.taxInclusive) ? n : null == (t = a.latestInvoice) ? void 0 : t.taxInclusive) || r;
    if (eN(a))
        return a.isPurchasedViaGoogle
            ? R.intl.format(R.t['3/WTrK'], { quantity: _ })
            : m
              ? R.intl.format(R.t['0ozBSE'], {
                    quantity: _,
                    rate: (0, S.og)(s, f.interval, f.intervalCount)
                })
              : R.intl.format(R.t['yjsv/v'], {
                    quantity: _,
                    rate: (0, S.og)(s, f.interval, f.intervalCount)
                });
    switch (a.status) {
        case T.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? R.intl.format(R.t.Nlf3nZ, {
                      quantity: _,
                      boostQuantity: _
                  })
                : m
                  ? R.intl.format(R.t.oiRy7u, {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, S.og)(s, f.interval, f.intervalCount)
                    })
                  : R.intl.format(R.t['0QxOAg'], {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, S.og)(s, f.interval, f.intervalCount)
                    });
        case T.O0b.PAUSE_PENDING:
        case T.O0b.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return R.intl.string(R.t.CduWAg);
            return R.intl.format(R.t['5iud9v'], { quantity: _ });
        default:
            return a.isPurchasedViaGoogle
                ? R.intl.format(R.t['5iud9v'], { quantity: _ })
                : m
                  ? R.intl.format(R.t.eDwrLC, {
                        quantity: _,
                        rate: (0, S.og)(s, f.interval, f.intervalCount)
                    })
                  : R.intl.format(R.t.ijSDcH, {
                        quantity: _,
                        rate: (0, S.og)(s, f.interval, f.intervalCount)
                    });
    }
}
function eR(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? F(e.id, !1, r, t) : V(e.id, !1, r),
        a = (0, S.T4)(i.amount, i.currency);
    return e.currency !== C.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function eP(e, t, n) {
    let r = eR(e, t, n);
    return (0, S.og)(r, e.interval, e.intervalCount);
}
function ew(e, t) {
    let { planId: n } = e;
    if (e.status === T.O0b.CANCELED || e.status === T.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ep(t);
    });
    return null == r || (0, d.Q0)(r.subscriptionPlanId) || (null != e.renewalMutations && e.renewalMutations.planId !== e.planId) ? e.planId : r.subscriptionPlanId;
}
function eD(e, t) {
    let { status: n } = e;
    if (e.status === T.O0b.CANCELED || e.status === T.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ep(t);
    });
    return (null == r || (0, d.Q0)(r.subscriptionPlanId)) && (n = T.O0b.CANCELED), n;
}
function eL(e) {
    let { status: t, renewalMutations: n } = e;
    return t === T.O0b.CANCELED || (null != n && (0, d.Q0)(n.planId) && !e.isPurchasedExternally);
}
function ex(e) {
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
    return (0, S.og)((0, S.T4)(i, e.currency), n.interval, n.intervalCount);
}
function ek(e, t, n, r) {
    let i =
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
    let o = h.Z.getForSkuAndInterval(tI(N.Si.GUILD), a.interval, a.intervalCount);
    if (null == o) {
        let t = Error('Unsupported plan');
        throw ((0, g.q2)(t, { tags: { planId: e } }), t);
    }
    return F(o.id, (0, I.I5)(r), !1, i);
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
            case N.Xh.PREMIUM_MONTH_TIER_0:
                return R.intl.string(R.t['0ggVqK']);
            case N.Xh.PREMIUM_YEAR_TIER_0:
                return R.intl.string(R.t['jm+ZQ0']);
            case N.Xh.PREMIUM_MONTH_TIER_1:
                return R.intl.string(R.t.uph4Jy);
            case N.Xh.PREMIUM_YEAR_TIER_1:
                return R.intl.string(R.t['D/l7Ym']);
            case N.Xh.PREMIUM_MONTH_TIER_2:
                return R.intl.string(R.t['5l1Mub']);
            case N.Xh.PREMIUM_YEAR_TIER_2:
                return R.intl.string(R.t.G0mISU);
        }
    switch (r) {
        case N.Xh.PREMIUM_MONTH_TIER_0:
            return n ? R.intl.string(R.t.cRCCJy) : R.intl.string(R.t['/G3aKy']);
        case N.Xh.PREMIUM_YEAR_TIER_0:
            return n ? R.intl.string(R.t.cRCCJy) : R.intl.string(R.t['2eQpsL']);
        case N.Xh.PREMIUM_MONTH_TIER_1:
            return n ? R.intl.string(R.t.cRCCJy) : R.intl.string(R.t.gueLg4);
        case N.Xh.PREMIUM_YEAR_TIER_1:
            return n ? R.intl.string(R.t.cRCCJy) : R.intl.string(R.t['MhH/vb']);
        case N.Xh.PREMIUM_MONTH_TIER_2:
            return n ? R.intl.string(R.t.cRCCJy) : R.intl.string(R.t.LQVQIi);
        case N.Xh.PREMIUM_YEAR_TIER_2:
            return n ? R.intl.string(R.t.cRCCJy) : R.intl.string(R.t['0nfg19']);
        case N.Xh.PREMIUM_3_MONTH_TIER_2:
        case N.Xh.PREMIUM_6_MONTH_TIER_2:
            return R.intl.formatToPlainString(R.t.BCD4fX, { intervalCount: t.intervalCount });
        case N.Xh.NONE_MONTH:
        case N.Xh.NONE_YEAR:
        case N.Xh.NONE_3_MONTH:
        case N.Xh.NONE_6_MONTH:
        case N.Xh.PREMIUM_MONTH_GUILD:
        case N.Xh.PREMIUM_YEAR_GUILD:
        case N.Xh.PREMIUM_3_MONTH_GUILD:
        case N.Xh.PREMIUM_6_MONTH_GUILD:
            return R.intl.string(R.t.eUEeCg);
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
    let { intervalType: t = N.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case N.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? R.intl.formatToPlainString(R.t.fRNBRU, { weeks: n / 7 }) : R.intl.formatToPlainString(R.t.EIpHEh, { weeks: n / 7 });
            return r ? R.intl.formatToPlainString(R.t['6Cdzo6'], { days: n }) : R.intl.formatToPlainString(R.t['kbBj/v'], { days: n });
        case N.rV.MONTH:
            return r ? R.intl.formatToPlainString(R.t.x5Mgxc, { months: n }) : R.intl.formatToPlainString(R.t['4SEnCQ'], { months: n });
        case N.rV.YEAR:
            return r ? R.intl.formatToPlainString(R.t['h+63ys'], { years: n }) : R.intl.formatToPlainString(R.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eV(e) {
    let { intervalType: t = N.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case N.rV.DAY:
            if (n >= 7 && n % 7 == 0) return R.intl.formatToPlainString(R.t['8awlzM'], { weeks: n / 7 });
            return R.intl.formatToPlainString(R.t.ZsgnLC, { days: n });
        case N.rV.MONTH:
            return R.intl.formatToPlainString(R.t.Y0HCVV, { months: n });
        case N.rV.YEAR:
            return R.intl.formatToPlainString(R.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eF(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eV({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eZ(e) {
    let { intervalType: t = N.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case N.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? R.intl.formatToPlainString(R.t.iVZYys, { weeks: n / 7 }) : R.intl.formatToPlainString(R.t.EmoBDw, { weeks: n / 7 });
            return r ? R.intl.formatToPlainString(R.t.jzH70d, { days: n }) : R.intl.formatToPlainString(R.t.k2UNz8, { days: n });
        case N.rV.MONTH:
            return r ? R.intl.formatToPlainString(R.t.erUSmJ, { months: n }) : R.intl.formatToPlainString(R.t.kridzM, { months: n });
        case N.rV.YEAR:
            return r ? R.intl.formatToPlainString(R.t.IfYQVF, { years: n }) : R.intl.formatToPlainString(R.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eH(e, t) {
    switch (e) {
        case T.gg$.APPLE_PARTNER:
        case T.gg$.APPLE:
            return x[t];
        case T.gg$.GOOGLE:
            return M[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eY(e, t) {
    return (0, I.I5)(e) || ex(null == t ? void 0 : t.status);
}
function eW(e, t) {
    var n, r;
    let i = [],
        a = (null != (r = null == (n = e.renewalMutations) ? void 0 : n.items) ? r : e.items).find((e) => N.dJ.has(e.planId));
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return w({}, n, t);
            return t;
        })
    );
}
function eK(e) {
    return e.filter((e) => !N.dJ.has(e.planId));
}
function ez(e, t, n, r) {
    var a, o;
    i()(r.has(t), 'Expected planId in group');
    let s = !1,
        l = (null != (o = null == (a = e.renewalMutations) ? void 0 : a.items) ? o : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  L(w({}, e), {
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
    return ez(e, t, 1, N.dJ);
}
function eQ(e, t, n) {
    return ez(e, n, t, N.Z1);
}
function eX(e) {
    var t;
    let n = null != (t = e.find((e) => !('id' in e))) ? t : e.find((e) => N.dJ.has(e.planId));
    if (null != n) {
        let t = h.Z.get(n.planId);
        i()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = h.Z.get(e.planId);
                i()(null != r, 'Missing plan');
                let a = h.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return i()(null != a, 'Missing planForInterval'), L(w({}, e), { planId: a.id });
            }));
    }
    return e;
}
function eJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = N.a1[e].fileSize;
    return (0, y.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function e$(e) {
    return null == e ? null : e.items.find((e) => N.Z1.has(e.planId));
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
        case N.p9.TIER_0:
            return A.Rj.PREMIUM_TIER_0;
        case N.p9.TIER_1:
            return A.Rj.PREMIUM_TIER_1;
        case N.p9.TIER_2:
            return A.Rj.PREMIUM_TIER_2;
    }
}
function e5(e) {
    return (0, u.ks)(u.g_, e);
}
function e6(e) {
    return (0, u.ks)(u.m_, e);
}
function e8(e) {
    return (0, u.ks)(u._y, e);
}
function e7(e) {
    return (0, u.ks)(u.tj, e);
}
function e9(e) {
    return (0, u.ks)(u.EQ, e);
}
function te(e) {
    return (0, u.ks)(u.Pl, e);
}
function tt(e) {
    return (0, u.ks)(u.wN, e);
}
function tn(e) {
    return (0, u.ks)(u._G, e);
}
function tr(e, t) {
    return (0, u.ks)(u.j4, e, t);
}
function ti(e) {
    return (0, u.ks)(u.lX, e);
}
function ta(e) {
    return (0, u.ks)(u.Uw, e);
}
function to(e) {
    return (0, u.ks)(u.zm, e);
}
function ts(e) {
    return (0, u.ks)(u.zZ, e);
}
function tl(e) {
    return (0, u.ks)(u.do, e);
}
function tc(e) {
    return (0, u.ks)(u.ZE, e);
}
function tu(e) {
    return (0, u.ks)(u.Ej, e);
}
function td(e) {
    return (0, u.ks)(u.Ct, e);
}
function tf(e) {
    return (0, u.ks)(u.O1, e);
}
function t_(e) {
    return (0, u.ks)(u.uw, e);
}
function tp(e, t) {
    return 'high' === e ? (0, u.ks)(u.O8, t) : 'mid' === e && (0, u.ks)(u.g7, t);
}
function th(e, t) {
    return (0, u.ks)(u.$0, e, t);
}
function tm(e) {
    return (0, u.ks)(u.ME, e);
}
function tg(e) {
    return (0, u.ks)(u.AN, e);
}
function tE(e) {
    return (0, u.ks)(u._O, e);
}
function tb(e) {
    return (0, u.ks)(u.qH, e);
}
function ty(e) {
    return (0, u.ks)(u.hs, e);
}
function tv(e) {
    return (0, u.ks)(u.DU, e);
}
function tO(e, t) {
    let n = (0, S.T4)(e.amount, e.currency),
        r = q(t);
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
function tA(e) {
    return e === N.Rt ? N.FL : N.ff;
}
function tN(e) {
    if (e === N.rV.YEAR) return R.intl.string(R.t.tfqrho);
    if (e === N.rV.MONTH) return R.intl.string(R.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tC(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tR(e) {
    return tP(e.map((e) => e.skuId));
}
function tP(e) {
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
let tw = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < U,
    isPremiumAtLeast: I.yd,
    isPremium: I.I5,
    isPremiumExactly: I.M5,
    isPremiumEligible: tC,
    getPrice: F,
    getDefaultPrice: V,
    getInterval: W,
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
    isPremiumSku: eo,
    getClosestUpgrade: ed,
    getIntervalMonths: ee,
    getUserMaxFileSize: O.h,
    getSkuIdForPlan: el,
    getSkuIdForPremiumType: ec,
    getNumIncludedPremiumGuildSubscriptionSlots: eg,
    getBillingInformationString: eb,
    extendDateWithUnconsumedFractionalPremium: ey,
    getUnactivatedFractionalPremiumDurationString: ev,
    isSwitchingPlansDisabled: eO,
    getSwitchingPlansDisabledMessage: eI,
    isNoneSubscription: d.Q0,
    getPlanIdFromInvoice: ew,
    getStatusFromInvoice: eD,
    isBaseSubscriptionCanceled: eL,
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
    getUnactivatedFractionalPremiumHours: tR,
    castPremiumSubscriptionAsSkuId: tI,
    canUseAnimatedEmojis: e5,
    canUseEmojisEverywhere: e6,
    canUseSoundboardEverywhere: e8,
    canUseCustomCallSounds: e7,
    canUploadLargeFiles: e9,
    canUseBadges: te,
    canUseHighVideoUploadQuality: tt,
    canEditDiscriminator: tn,
    hasBoostDiscount: tr,
    canUseAnimatedAvatar: ti,
    canUseFancyVoiceChannelReactions: ta,
    canInstallPremiumApplications: to,
    canUseIncreasedMessageLength: ts,
    canUseIncreasedGuildCap: tl,
    canRedeemPremiumPerks: tc,
    canUsePremiumProfileCustomization: tu,
    canUsePremiumAppIcons: td,
    canUsePremiumGuildMemberProfile: tf,
    canUseClientThemes: t_,
    canStreamQuality: tp,
    hasFreeBoosts: th,
    canUseCustomStickersEverywhere: tm,
    canUseCustomBackgrounds: tg,
    canUseCollectibles: tE,
    canUseCustomNotificationSounds: tb,
    canUsePremiumVoiceFilters: ty,
    canUseChatWallpapers: tv,
    formatPriceString: tO,
    StreamQuality: G
});
