n.d(t, {
    Af: () => F,
    Ap: () => eP,
    BK: () => z,
    CY: () => Z,
    EK: () => tP,
    Gf: () => en,
    I5: () => S.I5,
    JE: () => eq,
    JP: () => J,
    L7: () => $,
    M5: () => S.M5,
    MY: () => eQ,
    N1: () => eS,
    PK: () => ek,
    PV: () => eO,
    Px: () => es,
    Qo: () => eX,
    Rd: () => et,
    Rt: () => eW,
    T4: () => W,
    U2: () => V,
    UX: () => q,
    Ue: () => eJ,
    V7: () => ef,
    W_: () => eZ,
    Wz: () => tC,
    XK: () => e0,
    Z8: () => ey,
    ZP: () => tj,
    Zx: () => e1,
    _O: () => tR,
    a5: () => eY,
    aS: () => H,
    al: () => e$,
    aq: () => ei,
    bt: () => eL,
    dn: () => eH,
    eP: () => ee,
    fr: () => eK,
    gB: () => e2,
    gq: () => eo,
    gy: () => ex,
    he: () => e8,
    if: () => ez,
    jP: () => er,
    jp: () => eA,
    k5: () => e6,
    lY: () => eI,
    m3: () => eN,
    nd: () => eC,
    qV: () => ec,
    sG: () => X,
    uV: () => eg,
    uZ: () => eb,
    v6: () => eD,
    v9: () => e3,
    xG: () => tM,
    xe: () => tD,
    yd: () => S.yd,
    zL: () => eu,
    zV: () => eG
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
    N = n(981631),
    C = n(334431),
    R = n(474936),
    P = n(231338),
    w = n(388032);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
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
function k(e, t) {
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
let M = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    j = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    U = new u.Z('PremiumUtils.tsx'),
    G = {
        [R.Xh.NONE_MONTH]: [R.Xh.NONE_YEAR, R.Xh.PREMIUM_YEAR_TIER_2, R.Xh.PREMIUM_MONTH_TIER_2, R.Xh.PREMIUM_YEAR_TIER_1, R.Xh.PREMIUM_MONTH_TIER_1],
        [R.Xh.NONE_YEAR]: [R.Xh.PREMIUM_YEAR_TIER_2, R.Xh.PREMIUM_MONTH_TIER_2, R.Xh.PREMIUM_YEAR_TIER_1, R.Xh.PREMIUM_MONTH_TIER_1],
        [R.Xh.PREMIUM_MONTH_TIER_0]: [R.Xh.PREMIUM_YEAR_TIER_2, R.Xh.PREMIUM_MONTH_TIER_2, R.Xh.PREMIUM_YEAR_TIER_1, R.Xh.PREMIUM_MONTH_TIER_1, R.Xh.PREMIUM_YEAR_TIER_0],
        [R.Xh.PREMIUM_YEAR_TIER_0]: [R.Xh.PREMIUM_YEAR_TIER_2, R.Xh.PREMIUM_MONTH_TIER_2, R.Xh.PREMIUM_YEAR_TIER_1, R.Xh.PREMIUM_MONTH_TIER_1],
        [R.Xh.PREMIUM_MONTH_TIER_1]: [R.Xh.PREMIUM_YEAR_TIER_2, R.Xh.PREMIUM_MONTH_TIER_2, R.Xh.PREMIUM_YEAR_TIER_1],
        [R.Xh.PREMIUM_YEAR_TIER_1]: [R.Xh.PREMIUM_YEAR_TIER_2],
        [R.Xh.PREMIUM_MONTH_TIER_2]: [R.Xh.PREMIUM_YEAR_TIER_2],
        [R.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [R.Xh.NONE_MONTH, R.Xh.NONE_YEAR, R.Xh.PREMIUM_YEAR_TIER_2, R.Xh.PREMIUM_MONTH_TIER_2, R.Xh.PREMIUM_YEAR_TIER_1, R.Xh.PREMIUM_MONTH_TIER_1, R.Xh.PREMIUM_YEAR_TIER_0, R.Xh.PREMIUM_MONTH_TIER_0]
    },
    B = 2592000000;
var V = (function (e) {
    return (e.MID = 'mid'), (e.HIGH = 'high'), e;
})({});
function F(e) {
    return e.items.find((e) => R.dJ.has(e.planId));
}
function Z(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = null != (t = m.Z.defaultPaymentSourceId) ? t : void 0,
        o = E.ZP.getPremiumTypeSubscription();
    return (
        null != o && null != o.paymentSourceId && (a = o.paymentSourceId),
        H(e, n, r, {
            paymentSourceId: a,
            currency: i
        })
    );
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != g.Z.get(e)) {
        let r = N.tuJ.DEFAULT;
        n ? (r = N.tuJ.GIFT) : t && (r = N.tuJ.PREMIUM_TIER_1);
        let o = K(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: a
        });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                ((0, b.q2)(t, {
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
        ((0, b.q2)(o, {
            tags: {
                planId: e,
                currency: null != a ? a : 'unknown'
            },
            extra: k(L({}, r), { isGift: n })
        }),
        o)
    );
}
function Y(e, t) {
    let n = g.Z.get(e);
    if (null == n) {
        let n = Error('Plan not found');
        throw (
            ((0, b.q2)(n, {
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
    if (null == r) throw (U.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return r;
}
function W(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: N.tuJ.DEFAULT },
        r = Y(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            U.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), U.info('prices: '.concat(i));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, b.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        U.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, b.q2)(t, {
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
function K(e) {
    let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: N.tuJ.DEFAULT },
        i = W(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === i.length && U.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r.toLowerCase()) : i[0];
}
function z(e) {
    return {
        amount: e.amount,
        currency: e.currency,
        exponent: e.exponent
    };
}
function q(e, t, n) {
    let r,
        i,
        a = {
            currency: t,
            amount: 0,
            tax: 0,
            taxInclusive: !1
        },
        o = (0, d.MY)(e);
    null != o && (r = R.GP[o.planId].premiumType);
    let s = (0, S.yd)(r, R.p9.TIER_0),
        l = (0, S.yd)(r, R.p9.TIER_2);
    for (let r of e) {
        let e;
        (i = R.Z1.has(r.planId) ? l : !R.dJ.has(r.planId) && s),
            (e =
                void 0 === n
                    ? Z(r.planId, i, !1, t)
                    : H(r.planId, i, !1, {
                          paymentSourceId: n,
                          currency: t
                      })),
            (a.amount += e.amount * r.quantity);
    }
    return z(a);
}
function X(e, t, n, r) {
    let a;
    return null === t && (i()(null !== e, "Subscription can't be null"), (t = [])), q((a = null !== e ? eQ(e, t) : eJ(t)), n, r);
}
function Q(e) {
    let t = R.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function J(e) {
    switch (e) {
        case R.EA.MONTH:
            return w.intl.string(w.t.FPybU1);
        case R.EA.YEAR:
            return w.intl.string(w.t.tfqrho);
        case R.EA.DAY:
        case R.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function $(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : R.p9.TIER_2;
    if (t || n)
        switch (e) {
            case R.rV.MONTH:
                let o = w.intl.formatToPlainString(a === R.p9.TIER_0 ? w.t.NPKsLy : w.t.poEovb, { timeInterval: w.intl.string(w.t.FPybU1) });
                return i ? o : w.intl.string(w.t.Mh9bTk);
            case R.rV.YEAR:
                let s = w.intl.formatToPlainString(a === R.p9.TIER_0 ? w.t.NPKsLy : w.t.poEovb, { timeInterval: w.intl.string(w.t.tfqrho) });
                return i ? s : w.intl.string(w.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case R.rV.MONTH:
            if (1 !== r) return w.intl.formatToPlainString(w.t['0UlZnJ'], { intervalCount: r });
            return w.intl.string(w.t['DKzs9/']);
        case R.rV.YEAR:
            return w.intl.string(w.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function ee(e) {
    switch (e) {
        case R.rV.MONTH:
            return w.intl.string(w.t.FPybU1);
        case R.rV.YEAR:
            return w.intl.string(w.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function et(e) {
    let t = R.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
            return t ? w.intl.format(w.t.TZXHNj, { duration: r }) : n ? w.intl.string(w.t['81iAgo']) : w.intl.string(w.t['0efVPz']);
        case R.Xh.PREMIUM_YEAR_TIER_0:
            return t ? w.intl.format(w.t.eqRhCw, { duration: r }) : n ? w.intl.string(w.t.UvzqY2) : w.intl.string(w.t.eoVuBg);
        case R.Xh.PREMIUM_MONTH_TIER_1:
            return n ? w.intl.string(w.t['g/dH5u']) : w.intl.string(w.t['7O6qSk']);
        case R.Xh.PREMIUM_YEAR_TIER_1:
            return n ? w.intl.string(w.t.pdZJam) : w.intl.string(w.t.Md5xbm);
        case R.Xh.PREMIUM_MONTH_TIER_2:
            return t ? w.intl.format(w.t.aI6QX1, { duration: r }) : n ? w.intl.string(w.t.SmVbHR) : w.intl.string(w.t.FKYNCw);
        case R.Xh.PREMIUM_YEAR_TIER_2:
            return t ? w.intl.format(w.t['1wBcPj'], { duration: r }) : n ? w.intl.string(w.t.JIq4Oz) : w.intl.string(w.t['cfu/5e']);
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
            return w.intl.string(w.t.wCbINj);
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            return w.intl.string(w.t['e3/Ara']);
        case R.Xh.PREMIUM_MONTH_GUILD:
            return n ? w.intl.string(w.t['6ZR3Bw']) : w.intl.string(w.t.h80cx8);
        case R.Xh.PREMIUM_YEAR_GUILD:
            return n ? w.intl.string(w.t.YDpAzc) : w.intl.string(w.t.ZHkls7);
        case R.Xh.PREMIUM_3_MONTH_GUILD:
            return w.intl.string(w.t.EZHHBw);
        case R.Xh.PREMIUM_6_MONTH_GUILD:
            return w.intl.string(w.t.X2KDOz);
        case R.Xh.PREMIUM_MONTH_LEGACY:
            return w.intl.string(w.t['PD6k7+']);
        case R.Xh.PREMIUM_YEAR_LEGACY:
            return w.intl.string(w.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, b.q2)(i, { tags: { planId: e } }), i);
}
function er(e) {
    switch (e) {
        case R.Si.TIER_0:
            return w.intl.string(w.t['t9uG/v']);
        case R.Si.TIER_1:
            return w.intl.string(w.t['FSOz7+']);
        case R.Si.TIER_2:
            return w.intl.string(w.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, b.q2)(t, { tags: { skuId: e } }), t);
}
function ei(e) {
    switch (e) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
        case R.Xh.PREMIUM_YEAR_TIER_0:
            return w.intl.string(w.t['t9uG/v']);
        case R.Xh.PREMIUM_MONTH_TIER_1:
        case R.Xh.PREMIUM_YEAR_TIER_1:
            return w.intl.string(w.t['FSOz7+']);
        case R.Xh.PREMIUM_MONTH_TIER_2:
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
        case R.Xh.PREMIUM_YEAR_TIER_2:
            return w.intl.string(w.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, b.q2)(t, { tags: { planId: e } }), t);
}
function ea(e, t) {
    if (e === R.rV.MONTH) return t;
    if (e === R.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
        case R.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case R.Xh.PREMIUM_MONTH_TIER_1:
        case R.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case R.Xh.PREMIUM_MONTH_TIER_2:
        case R.Xh.PREMIUM_YEAR_TIER_2:
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, b.q2)(n, { tags: { planId: e } }), n);
}
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case R.p9.TIER_0:
            return t ? 'Basic' : w.intl.string(w.t['t9uG/v']);
        case R.p9.TIER_1:
            return t ? 'Classic' : w.intl.string(w.t['FSOz7+']);
        case R.p9.TIER_2:
            return w.intl.string(w.t['lG6a5+']);
    }
}
function el(e) {
    var t, n, r, i, a, s, c, u, d, f;
    let { subscription: _, planId: h, price: m, includePremiumGuilds: g, hasDiscountApplied: E, activeDiscountInfo: b, renewalInvoicePreview: O, hasFractionalPremiumWithSub: v } = e,
        I = R.GP[h],
        T = tN(Z(I.id), I.interval),
        S = eU(_) || (null == _.paymentSourceId && !_.isPurchasedExternally && !(null == (t = p.default.getCurrentUser()) ? void 0 : t.hasFreePremium())),
        A = null != m && null == _.paymentGateway,
        C = _.status === N.O0b.UNPAID && null !== _.latestInvoice && (null == (n = _.latestInvoice) ? void 0 : n.status) === N.hUK.OPEN,
        P = S ? N.O0b.CANCELED : C ? N.O0b.UNPAID : _.status,
        D = null == (a = null != (i = null == O ? void 0 : O.taxInclusive) ? i : null == (r = _.latestInvoice) ? void 0 : r.taxInclusive) || a,
        L = R.cb + (g ? eg(_.additionalPlans) : 0),
        x = A ? (D ? w.intl.format(w.t['cd+hqK'], { price: m }) : w.intl.format(w.t.NUkcpK, { price: m })) : w.intl.string(w.t.zYx3Y2),
        k = A ? (D ? w.intl.format(w.t.VsKcFB, { price: m }) : w.intl.format(w.t.hJ5xER, { price: m })) : w.intl.string(w.t['8rSipK']),
        M = A
            ? D
                ? w.intl.format(w.t['jRy6/P'], {
                      price: m,
                      num: L
                  })
                : w.intl.format(w.t.tTNE8P, {
                      price: m,
                      num: L
                  })
            : w.intl.format(w.t['U+z/HB'], { num: L });
    switch (h) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
        case R.Xh.PREMIUM_YEAR_TIER_0:
            switch (P) {
                case N.O0b.CANCELED:
                    return A ? (D ? w.intl.format(w.t['USi/nZ'], { price: m }) : w.intl.format(w.t['FS//l5'], { price: m })) : w.intl.string(w.t.JshLzs);
                case N.O0b.ACCOUNT_HOLD:
                    return A ? (D ? w.intl.format(w.t['5mv+2t'], { price: m }) : w.intl.format(w.t.nkAEfX, { price: m })) : w.intl.format(w.t.SsLIXV, {});
                case N.O0b.UNPAID:
                    return w.intl.format(w.t.cmkbFB, {});
                case N.O0b.PAUSE_PENDING:
                    let j = null != _.pauseEndsAt ? o()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != j
                        ? w.intl.format(w.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: j
                          })
                        : w.intl.format(w.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case N.O0b.PAUSED:
                    if (v) return x;
                    return w.intl.format(w.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case N.O0b.PAST_DUE:
                    return w.intl.format(w.t['d+0vws'], {
                        endDate: (0, y.vc)(eI(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return x;
            }
        case R.Xh.PREMIUM_MONTH_TIER_1:
        case R.Xh.PREMIUM_YEAR_TIER_1:
            switch (P) {
                case N.O0b.CANCELED:
                    return A ? (D ? w.intl.format(w.t.cXy8Bg, { price: m }) : w.intl.format(w.t['C/XsHh'], { price: m })) : w.intl.string(w.t.K6tYFR);
                case N.O0b.ACCOUNT_HOLD:
                    return A ? (D ? w.intl.format(w.t.HBkIBg, { price: m }) : w.intl.format(w.t.ZsO1S0, { price: m })) : w.intl.format(w.t['0+/WHx'], {});
                case N.O0b.UNPAID:
                    return w.intl.format(w.t.McIzws, {});
                case N.O0b.PAUSE_PENDING:
                    let U = null != _.pauseEndsAt ? o()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? w.intl.format(w.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : w.intl.format(w.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case N.O0b.PAUSED:
                    if (v) return k;
                    return w.intl.format(w.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case N.O0b.PAST_DUE:
                    return w.intl.format(w.t['d+0vws'], {
                        endDate: (0, y.vc)(eI(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return k;
            }
        case R.Xh.PREMIUM_MONTH_TIER_2:
        case R.Xh.PREMIUM_YEAR_TIER_2:
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (P) {
                case N.O0b.CANCELED:
                    return A
                        ? D
                            ? w.intl.format(w.t.xoFgRk, {
                                  price: m,
                                  num: L
                              })
                            : w.intl.format(w.t.nXdbKi, {
                                  price: m,
                                  num: L
                              })
                        : w.intl.format(w.t.EcSdRE, { num: L });
                case N.O0b.ACCOUNT_HOLD:
                    return A
                        ? D
                            ? w.intl.format(w.t['5C/0QE'], {
                                  price: m,
                                  num: L
                              })
                            : w.intl.format(w.t.xfYkho, {
                                  price: m,
                                  num: L
                              })
                        : w.intl.format(w.t.ivjxcn, { num: L });
                case N.O0b.UNPAID:
                    return w.intl.format(w.t['0HopYW'], { num: L });
                case N.O0b.PAUSE_PENDING:
                    let G = null != _.pauseEndsAt ? o()(_.pauseEndsAt).diff(_.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? w.intl.format(w.t.WUfODw, {
                              pauseDate: _.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : w.intl.format(w.t.VlWufn, { pauseDate: _.currentPeriodEnd });
                case N.O0b.PAUSED:
                    if (v) return M;
                    return w.intl.format(w.t['6RTdZG'], { resumeDate: _.pauseEndsAt });
                case N.O0b.BILLING_RETRY:
                    return w.intl.format(w.t['IlJ/HR'], { endDate: o()(_.currentPeriodStart).add(R.A5, 'days').toDate() });
                case N.O0b.PAST_DUE:
                    return w.intl.format(w.t['d+0vws'], {
                        endDate: (0, y.vc)(eI(_).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return E
                        ? h === R.Xh.PREMIUM_YEAR_TIER_2
                            ? w.intl.format(w.t['+qqh6u'], {
                                  percent: null != (s = null == b ? void 0 : b.percentage) ? s : R.Bo,
                                  regularPrice: T
                              })
                            : D
                              ? w.intl.formatToPlainString(w.t['3Ziutb'], {
                                    percent: null != (c = null == b ? void 0 : b.percentage) ? c : R.M_,
                                    regularPrice: T,
                                    numMonths: null != (u = null == b ? void 0 : b.duration) ? u : R.rt
                                })
                              : w.intl.formatToPlainString(w.t['G6+XOT'], {
                                    percent: null != (d = null == b ? void 0 : b.percentage) ? d : R.M_,
                                    regularPrice: T,
                                    numMonths: null != (f = null == b ? void 0 : b.duration) ? f : R.rt
                                })
                        : M;
            }
        default:
            throw Error('Invalid planId '.concat(h));
    }
}
function ec(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: a = !1, hasDiscountApplied: o = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: l = !1 } = e,
        c = g.Z.get(r);
    return (
        i()(null != c, 'Missing plan'),
        el({
            subscription: n,
            planId: c.id,
            price: eB(t, n, c),
            includePremiumGuilds: a,
            hasDiscountApplied: o,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function eu(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, _.Q0)(t) ? null : en(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return R.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === R.Xh.PREMIUM_MONTH_GUILD || (null == i ? void 0 : i.planId) === R.Xh.PREMIUM_YEAR_GUILD ? w.t.Pi5yMD : null,
        o = null != a ? w.intl.formatToPlainString(a, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != o)
        return w.intl.formatToPlainString(w.t.FN5T9v, {
            premiumDescription: r,
            premiumGuildDescription: o
        });
    if (null != r) return r;
    if (null != o) return o;
    throw Error('Subscription without premium or premium guild subscription');
}
function ed(e) {
    return e === R.Si.TIER_0 || e === R.Si.TIER_1 || e === R.Si.TIER_2;
}
function ef(e) {
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
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === R.Si.TIER_2;
                    });
                } else l = [];
            }
            s = [R.Xh.PREMIUM_YEAR_TIER_2, ...l, R.Xh.PREMIUM_MONTH_TIER_2];
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
function e_(e) {
    let t = R.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function ep(e) {
    switch (e) {
        case R.p9.TIER_0:
            return R.Si.TIER_0;
        case R.p9.TIER_1:
            return R.Si.TIER_1;
        case R.p9.TIER_2:
            return R.Si.TIER_2;
    }
}
function eh(e) {
    var t;
    return null == e ? G.ALL : null != (t = G[e]) ? t : [];
}
function em(e) {
    let t = R.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        r = eh(e);
    for (let e of Object.keys(R.GP)) {
        let { interval: t } = R.GP[e];
        if (n === t && r.includes(e)) return e;
    }
    return null;
}
function eg(e) {
    let t = g.Z.getPlanIdsForSkus([tC(R.Si.GUILD)]);
    i()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eE = new Set([R.Xh.NONE_MONTH, R.Xh.NONE_3_MONTH, R.Xh.NONE_6_MONTH, R.Xh.NONE_YEAR, R.Xh.PREMIUM_MONTH_TIER_0, R.Xh.PREMIUM_MONTH_TIER_1, R.Xh.PREMIUM_MONTH_TIER_2, R.Xh.PREMIUM_YEAR_TIER_0, R.Xh.PREMIUM_YEAR_TIER_1, R.Xh.PREMIUM_YEAR_TIER_2, R.Xh.PREMIUM_3_MONTH_TIER_2, R.Xh.PREMIUM_6_MONTH_TIER_2]);
function eb(e) {
    return eE.has(e);
}
function ey(e) {
    return R.Z1.has(e);
}
function eO(e) {
    return eb(e) || ey(e);
}
function ev(e) {
    return et(e) === R.p9.TIER_2 ? R.cb : 0;
}
function eI(e) {
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
        let t = e.isPurchasedViaApple ? R.$7 : R.Ue;
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
        let t = null == e.paymentSourceId ? R.UA : R.zp;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function eT(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: R.a$.NONE,
                      startsAt: o()(0),
                      endsAt: o()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        i = n
            ? (0, A.T4)(
                  t.invoiceItems
                      .filter((e) => R.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, A.T4)(t.total, t.currency);
    if (null != e.trialId && R.h8.includes(e.trialId) && null == e.paymentSourceId) return w.intl.format(w.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === N.O0b.CANCELED) return w.intl.format(w.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === N.O0b.PAUSE_PENDING)
        return w.intl.format(w.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === N.O0b.PAUSED)
        return r.fractionalState !== R.a$.NONE
            ? w.intl.format(w.t.Q18lRE, {
                  renewalDate: r.endsAt.toDate(),
                  price: i
              })
            : null == e.pauseEndsAt
              ? n
                  ? w.intl.format(w.t.KTYQCg, {
                        planName: w.intl.string(w.t.Ipxkoq),
                        price: i
                    })
                  : w.intl.string(w.t.fMz6Li)
              : n
                ? w.intl.format(w.t.zcgtzc, {
                      planName: w.intl.string(w.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: i
                  })
                : w.intl.format(w.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === N.O0b.PAST_DUE) {
        var a, s;
        let t = eI(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null == (a = e.metadata) ? void 0 : a.google_grace_period_expires_date) != null && (t = o()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null == (s = e.metadata) ? void 0 : s.apple_grace_period_expires_date) != null && (t = o()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? w.intl.format(w.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: P.Vz[e.paymentGateway],
                  paymentSourceLink: eq(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : w.intl.format(w.t.qEIzys, {
                  endDate: t.toDate(),
                  price: i
              });
    }
    {
        if (e.status === N.O0b.BILLING_RETRY)
            return w.intl.format(w.t.EMTLOT, {
                endDate: o()(e.currentPeriodStart).add(R.A5, 'days').toDate(),
                price: i
            });
        if (e.status === N.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, I.isAndroid)()
                ? w.intl.format(w.t.dtcxw8, {
                      endDate: o()(e.currentPeriodStart).add(R.gh, 'days').toDate(),
                      paymentGatewayName: P.Vz[e.paymentGateway],
                      paymentSourceLink: eq(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : w.intl.format(w.t.EMTLOT, {
                      endDate: o()(e.currentPeriodStart).add(R.gh, 'days').toDate(),
                      price: i
                  });
        if (eR(e)) return w.intl.format(w.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === N.O0b.UNPAID) return w.intl.format(w.t.CzTKoq, { maxProcessingTimeInDays: R.Rg });
        if (e.isPurchasedExternally)
            return w.intl.format(w.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: P.Vz[e.paymentGateway],
                subscriptionManagementLink: eq(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let a = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (a = eS(a, r.unactivatedUnits)),
            n
                ? w.intl.format(w.t.Vl3cEB, {
                      planName: w.intl.string(w.t.Ipxkoq),
                      renewalDate: a,
                      price: i
                  })
                : w.intl.format(w.t.Q18lRE, {
                      renewalDate: a,
                      price: i
                  })
        );
    }
}
function eS(e, t, n, r) {
    let i = o()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tk(t);
        i = i.add(e, 'hours');
    }
    if (!r && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, 'hours', !0);
        t > 0 && (i = i.add(t, 'hours'));
    }
    return i.toDate();
}
function eA(e) {
    let t = tk(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === R.a$.NONE)) return '';
    let n = {
            days: w.t.fYmir6,
            hours: w.t['C3RO+v'],
            minutes: w.t.r77oHR
        },
        r = (0, c.eB)((0, y.TD)(0, t * O.Z.Millis.HOUR));
    return (0, y.QX)(r, n);
}
function eN(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === N.O0b.PAST_DUE;
}
function eC(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? w.intl.string(w.t['0rzJ4O']) : w.intl.string(w.t['9dLQ09'])), null != e.trialEndsAt && (t = w.intl.string(w.t.a9Mdb2)), t;
}
function eR(e) {
    return null != e.paymentSourceId && eP(e.paymentSourceId);
}
function eP(e) {
    if (null == e) return !1;
    let t = m.Z.getPaymentSource(e);
    return null != t && P.Uk.has(t.type);
}
function ew(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = eg(n);
    return 0 === (null != t ? eg(t.additionalPlans) : null) && 0 !== i ? N.O0b.CANCELED : r;
}
function eD(e) {
    return e.isPurchasedExternally ? e.status === N.O0b.CANCELED : ew(e) === N.O0b.CANCELED;
}
function eL(e) {
    var t, n, r;
    let { subscription: a, user: o, price: s, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = a,
        f = g.Z.get(u);
    i()(null != f, 'Missing plan');
    let _ = eg(d),
        p = eV(a.planId, a.paymentSourceId, a.currency, o).amount * _;
    if (null != l) {
        let e = l.invoiceItems.find((e) => R.Z1.has(e.subscriptionPlanId));
        null != e && (p = e.amount);
    }
    s = null != s ? s : (0, A.T4)(p, a.currency);
    let h = null == (r = null != (n = null == l ? void 0 : l.taxInclusive) ? n : null == (t = a.latestInvoice) ? void 0 : t.taxInclusive) || r;
    if (eD(a))
        return a.isPurchasedViaGoogle
            ? w.intl.format(w.t['3/WTrK'], { quantity: _ })
            : h
              ? w.intl.format(w.t['0ozBSE'], {
                    quantity: _,
                    rate: (0, A.og)(s, f.interval, f.intervalCount)
                })
              : w.intl.format(w.t['yjsv/v'], {
                    quantity: _,
                    rate: (0, A.og)(s, f.interval, f.intervalCount)
                });
    switch (a.status) {
        case N.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? w.intl.format(w.t.Nlf3nZ, {
                      quantity: _,
                      boostQuantity: _
                  })
                : h
                  ? w.intl.format(w.t.oiRy7u, {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount)
                    })
                  : w.intl.format(w.t['0QxOAg'], {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount)
                    });
        case N.O0b.PAUSE_PENDING:
        case N.O0b.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return w.intl.string(w.t.CduWAg);
            return w.intl.format(w.t['5iud9v'], { quantity: _ });
        default:
            return a.isPurchasedViaGoogle
                ? w.intl.format(w.t['5iud9v'], { quantity: _ })
                : h
                  ? w.intl.format(w.t.eDwrLC, {
                        quantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount)
                    })
                  : w.intl.format(w.t.ijSDcH, {
                        quantity: _,
                        rate: (0, A.og)(s, f.interval, f.intervalCount)
                    });
    }
}
function ex(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? H(e.id, !1, r, t) : Z(e.id, !1, r),
        a = (0, A.T4)(i.amount, i.currency);
    return e.currency !== P.pK.USD && !0 === n && (a = a.concat('*')), a;
}
function ek(e, t, n) {
    let r = ex(e, t, n);
    return (0, A.og)(r, e.interval, e.intervalCount);
}
function eM(e, t) {
    let { planId: n } = e;
    if (e.status === N.O0b.CANCELED || e.status === N.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eb(t);
    });
    return null == r || (0, _.Q0)(r.subscriptionPlanId) || (null != e.renewalMutations && e.renewalMutations.planId !== e.planId) ? e.planId : r.subscriptionPlanId;
}
function ej(e, t) {
    let { status: n } = e;
    if (e.status === N.O0b.CANCELED || e.status === N.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eb(t);
    });
    return (null == r || (0, _.Q0)(r.subscriptionPlanId)) && (n = N.O0b.CANCELED), n;
}
function eU(e) {
    let { status: t, renewalMutations: n } = e;
    return t === N.O0b.CANCELED || (null != n && (0, _.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eG(e) {
    return e === N.O0b.PAST_DUE || e === N.O0b.ACCOUNT_HOLD || e === N.O0b.BILLING_RETRY;
}
function eB(e, t, n) {
    let r = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return t === n.id;
        }),
        i =
            null == r
                ? H(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency
                  }).amount
                : r.amount;
    return (0, A.og)((0, A.T4)(i, e.currency), n.interval, n.intervalCount);
}
function eV(e, t, n, r) {
    let i =
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
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    let o = g.Z.getForSkuAndInterval(tC(R.Si.GUILD), a.interval, a.intervalCount);
    if (null == o) {
        let t = Error('Unsupported plan');
        throw ((0, b.q2)(t, { tags: { planId: e } }), t);
    }
    return H(o.id, (0, S.I5)(r), !1, i);
}
function eF(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eZ(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case R.Xh.PREMIUM_MONTH_TIER_0:
                return w.intl.string(w.t['0ggVqK']);
            case R.Xh.PREMIUM_YEAR_TIER_0:
                return w.intl.string(w.t['jm+ZQ0']);
            case R.Xh.PREMIUM_MONTH_TIER_1:
                return w.intl.string(w.t.uph4Jy);
            case R.Xh.PREMIUM_YEAR_TIER_1:
                return w.intl.string(w.t['D/l7Ym']);
            case R.Xh.PREMIUM_MONTH_TIER_2:
                return w.intl.string(w.t['5l1Mub']);
            case R.Xh.PREMIUM_YEAR_TIER_2:
                return w.intl.string(w.t.G0mISU);
        }
    switch (r) {
        case R.Xh.PREMIUM_MONTH_TIER_0:
            return n ? w.intl.string(w.t.cRCCJy) : w.intl.string(w.t['/G3aKy']);
        case R.Xh.PREMIUM_YEAR_TIER_0:
            return n ? w.intl.string(w.t.cRCCJy) : w.intl.string(w.t['2eQpsL']);
        case R.Xh.PREMIUM_MONTH_TIER_1:
            return n ? w.intl.string(w.t.cRCCJy) : w.intl.string(w.t.gueLg4);
        case R.Xh.PREMIUM_YEAR_TIER_1:
            return n ? w.intl.string(w.t.cRCCJy) : w.intl.string(w.t['MhH/vb']);
        case R.Xh.PREMIUM_MONTH_TIER_2:
            return n ? w.intl.string(w.t.cRCCJy) : w.intl.string(w.t.LQVQIi);
        case R.Xh.PREMIUM_YEAR_TIER_2:
            return n ? w.intl.string(w.t.cRCCJy) : w.intl.string(w.t['0nfg19']);
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            return w.intl.formatToPlainString(w.t.BCD4fX, { intervalCount: t.intervalCount });
        case R.Xh.NONE_MONTH:
        case R.Xh.NONE_YEAR:
        case R.Xh.NONE_3_MONTH:
        case R.Xh.NONE_6_MONTH:
        case R.Xh.PREMIUM_MONTH_GUILD:
        case R.Xh.PREMIUM_YEAR_GUILD:
        case R.Xh.PREMIUM_3_MONTH_GUILD:
        case R.Xh.PREMIUM_6_MONTH_GUILD:
            return w.intl.string(w.t.eUEeCg);
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, b.q2)(i, { tags: { planId: r } }), i);
}
function eH(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = g.Z.get(t);
    return (
        i()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eY(e) {
    let { intervalType: t = R.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? w.intl.formatToPlainString(w.t.fRNBRU, { weeks: n / 7 }) : w.intl.formatToPlainString(w.t.EIpHEh, { weeks: n / 7 });
            return r ? w.intl.formatToPlainString(w.t['6Cdzo6'], { days: n }) : w.intl.formatToPlainString(w.t['kbBj/v'], { days: n });
        case R.rV.MONTH:
            return r ? w.intl.formatToPlainString(w.t.x5Mgxc, { months: n }) : w.intl.formatToPlainString(w.t['4SEnCQ'], { months: n });
        case R.rV.YEAR:
            return r ? w.intl.formatToPlainString(w.t['h+63ys'], { years: n }) : w.intl.formatToPlainString(w.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eW(e) {
    let { intervalType: t = R.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case R.rV.DAY:
            if (n >= 7 && n % 7 == 0) return w.intl.formatToPlainString(w.t['8awlzM'], { weeks: n / 7 });
            return w.intl.formatToPlainString(w.t.ZsgnLC, { days: n });
        case R.rV.MONTH:
            return w.intl.formatToPlainString(w.t.Y0HCVV, { months: n });
        case R.rV.YEAR:
            return w.intl.formatToPlainString(w.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eK(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eW({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function ez(e) {
    let { intervalType: t = R.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case R.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? w.intl.formatToPlainString(w.t.iVZYys, { weeks: n / 7 }) : w.intl.formatToPlainString(w.t.EmoBDw, { weeks: n / 7 });
            return r ? w.intl.formatToPlainString(w.t.jzH70d, { days: n }) : w.intl.formatToPlainString(w.t.k2UNz8, { days: n });
        case R.rV.MONTH:
            return r ? w.intl.formatToPlainString(w.t.erUSmJ, { months: n }) : w.intl.formatToPlainString(w.t.kridzM, { months: n });
        case R.rV.YEAR:
            return r ? w.intl.formatToPlainString(w.t.IfYQVF, { years: n }) : w.intl.formatToPlainString(w.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eq(e, t) {
    switch (e) {
        case N.gg$.APPLE_PARTNER:
        case N.gg$.APPLE:
            return M[t];
        case N.gg$.GOOGLE:
            return j[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eX(e, t) {
    return (0, S.I5)(e) || eG(null == t ? void 0 : t.status);
}
function eQ(e, t) {
    var n, r;
    let i = [],
        a = (null != (r = null == (n = e.renewalMutations) ? void 0 : n.items) ? r : e.items).find((e) => R.dJ.has(e.planId));
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return L({}, n, t);
            return t;
        })
    );
}
function eJ(e) {
    return e.filter((e) => !R.dJ.has(e.planId));
}
function e$(e, t, n, r) {
    var a, o;
    i()(r.has(t), 'Expected planId in group');
    let s = !1,
        l = (null != (o = null == (a = e.renewalMutations) ? void 0 : a.items) ? o : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  k(L({}, e), {
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
function e0(e, t) {
    return e$(e, t, 1, R.dJ);
}
function e1(e, t, n) {
    return e$(e, n, t, R.Z1);
}
function e2(e) {
    var t;
    let n = null != (t = e.find((e) => !('id' in e))) ? t : e.find((e) => R.dJ.has(e.planId));
    if (null != n) {
        let t = g.Z.get(n.planId);
        i()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = g.Z.get(e.planId);
                i()(null != r, 'Missing plan');
                let a = g.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return i()(null != a, 'Missing planForInterval'), k(L({}, e), { planId: a.id });
            }));
    }
    return e;
}
function e3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = R.a1[e].fileSize;
    return (0, v.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function e4(e) {
    return null == e ? null : e.items.find((e) => R.Z1.has(e.planId));
}
function e5(e) {
    return null != e && null == F(e) && null != e4(e);
}
function e6(e) {
    let t = null != e ? F(e) : null;
    return null != t ? e_(t.planId) : null;
}
function e8(e) {
    if (null != e) {
        let t = F(e);
        if (null != t) return et(t.planId);
    }
}
function e7(e) {
    if (null != e && null != e.renewalMutations) {
        let t = F(e.renewalMutations);
        if (null != t) return et(t.planId);
    }
}
function e9(e) {
    switch (e) {
        case R.p9.TIER_0:
            return C.Rj.PREMIUM_TIER_0;
        case R.p9.TIER_1:
            return C.Rj.PREMIUM_TIER_1;
        case R.p9.TIER_2:
            return C.Rj.PREMIUM_TIER_2;
    }
}
function te(e) {
    return (0, f.ks)(f.g_, e);
}
function tt(e) {
    return (0, f.ks)(f.m_, e);
}
function tn(e) {
    return (0, f.ks)(f._y, e);
}
function tr(e) {
    return (0, f.ks)(f.tj, e);
}
function ti(e) {
    return (0, f.ks)(f.EQ, e);
}
function ta(e) {
    return (0, f.ks)(f.Pl, e);
}
function to(e) {
    return (0, f.ks)(f.wN, e);
}
function ts(e) {
    return (0, f.ks)(f._G, e);
}
function tl(e, t) {
    return (0, f.ks)(f.j4, e, t);
}
function tc(e) {
    return (0, f.ks)(f.lX, e);
}
function tu(e) {
    return (0, f.ks)(f.Uw, e);
}
function td(e) {
    return (0, f.ks)(f.zm, e);
}
function tf(e) {
    return (0, f.ks)(f.zZ, e);
}
function t_(e) {
    return (0, f.ks)(f.do, e);
}
function tp(e) {
    return (0, f.ks)(f.ZE, e);
}
function th(e) {
    return (0, f.ks)(f.Ej, e);
}
function tm(e) {
    return (0, f.ks)(f.Ct, e);
}
function tg(e) {
    return (0, f.ks)(f.O1, e);
}
function tE(e) {
    return (0, f.ks)(f.uw, e);
}
function tb(e, t) {
    return 'high' === e ? (0, f.ks)(f.O8, t) : 'mid' === e && (0, f.ks)(f.g7, t);
}
function ty(e, t) {
    return (0, f.ks)(f.$0, e, t);
}
function tO(e) {
    return (0, f.ks)(f.ME, e);
}
function tv(e) {
    return (0, f.ks)(f.AN, e);
}
function tI(e) {
    return (0, f.ks)(f._O, e);
}
function tT(e) {
    return (0, f.ks)(f.qH, e);
}
function tS(e) {
    return (0, f.ks)(f.hs, e);
}
function tA(e) {
    return (0, f.ks)(f.DU, e);
}
function tN(e, t) {
    let n = (0, A.T4)(e.amount, e.currency),
        r = ee(t);
    return ''.concat(n, '/').concat(r);
}
function tC(e) {
    return e;
}
function tR(e) {
    return 'isNitroLocked' in e;
}
function tP() {
    let e = (0, s.e7)([p.default], () => p.default.getCurrentUser());
    return (0, S.M5)(e, R.p9.TIER_2);
}
function tw(e) {
    return null != e && R.OT.includes(e) ? 1 : 2;
}
function tD(e) {
    return e === R.Rt ? R.FL : R.ff;
}
function tL(e) {
    if (e === R.rV.YEAR) return w.intl.string(w.t.tfqrho);
    if (e === R.rV.MONTH) return w.intl.string(w.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tx(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tk(e) {
    return tM(e.map((e) => e.skuId));
}
function tM(e) {
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
let tj = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < B,
    isPremiumAtLeast: S.yd,
    isPremium: S.I5,
    isPremiumExactly: S.M5,
    isPremiumEligible: tx,
    getPrice: H,
    getDefaultPrice: Z,
    getInterval: Q,
    getIntervalString: $,
    getIntervalStringAsNoun: ee,
    getPremiumType: et,
    getDisplayName: en,
    getDisplayPremiumType: eo,
    getPremiumPlanOptions: ef,
    getUpgradeEligibilities: eh,
    getReverseTrialWeeks: tw,
    formatInterval: tL,
    getPlanDescription: el,
    isPremiumSku: ed,
    getClosestUpgrade: em,
    getIntervalMonths: ea,
    getUserMaxFileSize: T.h,
    getSkuIdForPlan: e_,
    getSkuIdForPremiumType: ep,
    getNumIncludedPremiumGuildSubscriptionSlots: ev,
    getBillingInformationString: eT,
    extendDateWithUnconsumedFractionalPremium: eS,
    getUnactivatedFractionalPremiumDurationString: eA,
    isSwitchingPlansDisabled: eN,
    getSwitchingPlansDisabledMessage: eC,
    isNoneSubscription: _.Q0,
    getPlanIdFromInvoice: eM,
    getStatusFromInvoice: ej,
    isBaseSubscriptionCanceled: eU,
    getPremiumGuildIntervalPrice: eV,
    hasAccountCredit: eF,
    getBillingReviewSubheader: eZ,
    getIntervalForInvoice: eH,
    getPremiumPlanItem: F,
    getGuildBoostPlanItem: e4,
    isBoostOnlySubscription: e5,
    getPremiumSkuIdForSubscription: e6,
    getPremiumTypeFromSubscription: e8,
    getPremiumTypeFromSubscriptionRenewalMutations: e7,
    getPremiumGradientColor: e9,
    getUnactivatedFractionalPremiumHours: tk,
    castPremiumSubscriptionAsSkuId: tC,
    canUseAnimatedEmojis: te,
    canUseEmojisEverywhere: tt,
    canUseSoundboardEverywhere: tn,
    canUseCustomCallSounds: tr,
    canUploadLargeFiles: ti,
    canUseBadges: ta,
    canUseHighVideoUploadQuality: to,
    canEditDiscriminator: ts,
    hasBoostDiscount: tl,
    canUseAnimatedAvatar: tc,
    canUseFancyVoiceChannelReactions: tu,
    canInstallPremiumApplications: td,
    canUseIncreasedMessageLength: tf,
    canUseIncreasedGuildCap: t_,
    canRedeemPremiumPerks: tp,
    canUsePremiumProfileCustomization: th,
    canUsePremiumAppIcons: tm,
    canUsePremiumGuildMemberProfile: tg,
    canUseClientThemes: tE,
    canStreamQuality: tb,
    hasFreeBoosts: ty,
    canUseCustomStickersEverywhere: tO,
    canUseCustomBackgrounds: tv,
    canUseCollectibles: tI,
    canUseCustomNotificationSounds: tT,
    canUsePremiumVoiceFilters: tS,
    canUseChatWallpapers: tA,
    formatPriceString: tN,
    StreamQuality: V
});
