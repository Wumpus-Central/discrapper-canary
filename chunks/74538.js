n.d(t, {
    Af: () => V,
    Ap: () => eR,
    BK: () => K,
    CY: () => F,
    Gf: () => et,
    I5: () => S.I5,
    JE: () => ez,
    JP: () => X,
    L7: () => J,
    M5: () => S.M5,
    MY: () => eQ,
    N1: () => eS,
    PK: () => ex,
    PV: () => ey,
    Px: () => ea,
    Qo: () => eq,
    Rd: () => ee,
    Rt: () => eY,
    T4: () => Y,
    U2: () => B,
    UX: () => z,
    Ue: () => eX,
    V7: () => ed,
    W_: () => eF,
    Wz: () => tN,
    XK: () => e$,
    Z8: () => eb,
    ZP: () => tM,
    Zx: () => e0,
    _O: () => tC,
    a5: () => eH,
    aS: () => Z,
    al: () => eJ,
    aq: () => er,
    bt: () => eD,
    dn: () => eZ,
    eP: () => $,
    fr: () => eW,
    gB: () => e1,
    gq: () => eo,
    gy: () => eL,
    he: () => e6,
    if: () => eK,
    jP: () => en,
    jp: () => eT,
    k5: () => e5,
    lY: () => ev,
    m3: () => eA,
    nd: () => eN,
    qV: () => el,
    sG: () => q,
    uV: () => em,
    uZ: () => eE,
    v6: () => ew,
    v9: () => e2,
    xG: () => tx,
    xe: () => tP,
    yd: () => S.yd,
    zL: () => ec,
    zV: () => eU
}),
    n(415506),
    n(49124),
    n(388685),
    n(290780),
    n(539854);
var r = n(512722),
    i = n.n(r),
    o = n(913527),
    a = n.n(o);
n(442837);
var s = n(782568),
    l = n(927359),
    c = n(710845),
    u = n(491819),
    d = n(803905),
    f = n(301766),
    _ = n(594174),
    p = n(351402),
    h = n(853872),
    m = n(509545),
    g = n(78839),
    E = n(122289),
    b = n(55935),
    y = n(70956),
    O = n(424218),
    v = n(358085),
    I = n(380684),
    S = n(111361),
    T = n(937615),
    A = n(981631),
    N = n(334431),
    C = n(474936),
    R = n(231338),
    P = n(388032);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
            : L(Object(t)).forEach(function (n) {
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
    k = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    j = new c.Z('PremiumUtils.tsx'),
    U = {
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
    G = 2592000000;
var B = (function (e) {
    return (e.MID = 'mid'), (e.HIGH = 'high'), e;
})({});
function V(e) {
    return e.items.find((e) => C.dJ.has(e.planId));
}
function F(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        o = null != (t = h.Z.defaultPaymentSourceId) ? t : void 0,
        a = g.ZP.getPremiumTypeSubscription();
    return (
        null != a && null != a.paymentSourceId && (o = a.paymentSourceId),
        Z(e, n, r, {
            paymentSourceId: o,
            currency: i
        })
    );
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: o } = r;
    if (null != m.Z.get(e)) {
        let r = A.tuJ.DEFAULT;
        n ? (r = A.tuJ.GIFT) : t && (r = A.tuJ.PREMIUM_TIER_1);
        let a = W(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: o
        });
        if (null == a) {
            let t = Error("Couldn't find price");
            throw (
                ((0, E.q2)(t, {
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
        ((0, E.q2)(a, {
            tags: {
                planId: e,
                currency: null != o ? o : 'unknown'
            },
            extra: x(D({}, r), { isGift: n })
        }),
        a)
    );
}
function H(e, t) {
    let n = m.Z.get(e);
    if (null == n) {
        let n = Error('Plan not found');
        throw (
            ((0, E.q2)(n, {
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
    if (null == r) throw (j.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return r;
}
function Y(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.tuJ.DEFAULT },
        r = H(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            j.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), j.info('prices: '.concat(i));
            let o = Error('Missing prices for payment source on subscription plan');
            (0, E.q2)(o, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        j.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            ((0, E.q2)(t, {
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
    let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: A.tuJ.DEFAULT },
        i = Y(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === i.length && j.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r.toLowerCase()) : i[0];
}
function K(e) {
    return {
        amount: e.amount,
        currency: e.currency,
        exponent: e.exponent
    };
}
function z(e, t, n) {
    let r,
        i,
        o = {
            currency: t,
            amount: 0,
            tax: 0,
            taxInclusive: !1
        },
        a = (0, u.MY)(e);
    null != a && (r = C.GP[a.planId].premiumType);
    let s = (0, S.yd)(r, C.p9.TIER_0),
        l = (0, S.yd)(r, C.p9.TIER_2);
    for (let r of e) {
        let e;
        (i = C.Z1.has(r.planId) ? l : !C.dJ.has(r.planId) && s),
            (e =
                void 0 === n
                    ? F(r.planId, i, !1, t)
                    : Z(r.planId, i, !1, {
                          paymentSourceId: n,
                          currency: t
                      })),
            (o.amount += e.amount * r.quantity);
    }
    return K(o);
}
function q(e, t, n, r) {
    let o;
    return null === t && (i()(null !== e, "Subscription can't be null"), (t = [])), z((o = null !== e ? eQ(e, t) : eX(t)), n, r);
}
function Q(e) {
    let t = C.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, E.q2)(n, { tags: { planId: e } }), n);
}
function X(e) {
    switch (e) {
        case C.EA.MONTH:
            return P.intl.string(P.t.FPybU1);
        case C.EA.YEAR:
            return P.intl.string(P.t.tfqrho);
        case C.EA.DAY:
        case C.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function J(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : C.p9.TIER_2;
    if (t || n)
        switch (e) {
            case C.rV.MONTH:
                let a = P.intl.formatToPlainString(o === C.p9.TIER_0 ? P.t.NPKsLy : P.t.poEovb, { timeInterval: P.intl.string(P.t.FPybU1) });
                return i ? a : P.intl.string(P.t.Mh9bTk);
            case C.rV.YEAR:
                let s = P.intl.formatToPlainString(o === C.p9.TIER_0 ? P.t.NPKsLy : P.t.poEovb, { timeInterval: P.intl.string(P.t.tfqrho) });
                return i ? s : P.intl.string(P.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case C.rV.MONTH:
            if (1 !== r) return P.intl.formatToPlainString(P.t['0UlZnJ'], { intervalCount: r });
            return P.intl.string(P.t['DKzs9/']);
        case C.rV.YEAR:
            return P.intl.string(P.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function $(e) {
    switch (e) {
        case C.rV.MONTH:
            return P.intl.string(P.t.FPybU1);
        case C.rV.YEAR:
            return P.intl.string(P.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function ee(e) {
    let t = C.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, E.q2)(n, { tags: { planId: e } }), n);
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
            return t ? P.intl.format(P.t.TZXHNj, { duration: r }) : n ? P.intl.string(P.t['81iAgo']) : P.intl.string(P.t['0efVPz']);
        case C.Xh.PREMIUM_YEAR_TIER_0:
            return t ? P.intl.format(P.t.eqRhCw, { duration: r }) : n ? P.intl.string(P.t.UvzqY2) : P.intl.string(P.t.eoVuBg);
        case C.Xh.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t['g/dH5u']) : P.intl.string(P.t['7O6qSk']);
        case C.Xh.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.pdZJam) : P.intl.string(P.t.Md5xbm);
        case C.Xh.PREMIUM_MONTH_TIER_2:
            return t ? P.intl.format(P.t.aI6QX1, { duration: r }) : n ? P.intl.string(P.t.SmVbHR) : P.intl.string(P.t.FKYNCw);
        case C.Xh.PREMIUM_YEAR_TIER_2:
            return t ? P.intl.format(P.t['1wBcPj'], { duration: r }) : n ? P.intl.string(P.t.JIq4Oz) : P.intl.string(P.t['cfu/5e']);
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
            return P.intl.string(P.t.wCbINj);
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
            return P.intl.string(P.t['e3/Ara']);
        case C.Xh.PREMIUM_MONTH_GUILD:
            return n ? P.intl.string(P.t['6ZR3Bw']) : P.intl.string(P.t.h80cx8);
        case C.Xh.PREMIUM_YEAR_GUILD:
            return n ? P.intl.string(P.t.YDpAzc) : P.intl.string(P.t.ZHkls7);
        case C.Xh.PREMIUM_3_MONTH_GUILD:
            return P.intl.string(P.t.EZHHBw);
        case C.Xh.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.X2KDOz);
        case C.Xh.PREMIUM_MONTH_LEGACY:
            return P.intl.string(P.t['PD6k7+']);
        case C.Xh.PREMIUM_YEAR_LEGACY:
            return P.intl.string(P.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, E.q2)(i, { tags: { planId: e } }), i);
}
function en(e) {
    switch (e) {
        case C.Si.TIER_0:
            return P.intl.string(P.t['t9uG/v']);
        case C.Si.TIER_1:
            return P.intl.string(P.t['FSOz7+']);
        case C.Si.TIER_2:
            return P.intl.string(P.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, E.q2)(t, { tags: { skuId: e } }), t);
}
function er(e) {
    switch (e) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
        case C.Xh.PREMIUM_YEAR_TIER_0:
            return P.intl.string(P.t['t9uG/v']);
        case C.Xh.PREMIUM_MONTH_TIER_1:
        case C.Xh.PREMIUM_YEAR_TIER_1:
            return P.intl.string(P.t['FSOz7+']);
        case C.Xh.PREMIUM_MONTH_TIER_2:
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
        case C.Xh.PREMIUM_YEAR_TIER_2:
            return P.intl.string(P.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, E.q2)(t, { tags: { planId: e } }), t);
}
function ei(e, t) {
    if (e === C.rV.MONTH) return t;
    if (e === C.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function eo(e) {
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
    throw ((0, E.q2)(n, { tags: { planId: e } }), n);
}
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case C.p9.TIER_0:
            return t ? 'Basic' : P.intl.string(P.t['t9uG/v']);
        case C.p9.TIER_1:
            return t ? 'Classic' : P.intl.string(P.t['FSOz7+']);
        case C.p9.TIER_2:
            return P.intl.string(P.t['lG6a5+']);
    }
}
function es(e) {
    var t, n, r, i, o, l, c, u, d, f;
    let { subscription: p, planId: h, price: m, includePremiumGuilds: g, hasDiscountApplied: E, activeDiscountInfo: y, renewalInvoicePreview: O, hasFractionalPremiumWithSub: v } = e,
        I = C.GP[h],
        S = tA(F(I.id), I.interval),
        T = ej(p) || (null == p.paymentSourceId && !p.isPurchasedExternally && !(null == (t = _.default.getCurrentUser()) ? void 0 : t.hasFreePremium())),
        N = null != m && null == p.paymentGateway,
        R = p.status === A.O0b.UNPAID && null !== p.latestInvoice && (null == (n = p.latestInvoice) ? void 0 : n.status) === A.hUK.OPEN,
        w = T ? A.O0b.CANCELED : R ? A.O0b.UNPAID : p.status,
        D = null == (o = null != (i = null == O ? void 0 : O.taxInclusive) ? i : null == (r = p.latestInvoice) ? void 0 : r.taxInclusive) || o,
        L = C.cb + (g ? em(p.additionalPlans) : 0),
        x = N ? (D ? P.intl.format(P.t['cd+hqK'], { price: m }) : P.intl.format(P.t.NUkcpK, { price: m })) : P.intl.string(P.t.zYx3Y2),
        M = N ? (D ? P.intl.format(P.t.VsKcFB, { price: m }) : P.intl.format(P.t.hJ5xER, { price: m })) : P.intl.string(P.t['8rSipK']),
        k = N
            ? D
                ? P.intl.format(P.t['jRy6/P'], {
                      price: m,
                      num: L
                  })
                : P.intl.format(P.t.tTNE8P, {
                      price: m,
                      num: L
                  })
            : P.intl.format(P.t['U+z/HB'], { num: L });
    switch (h) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
        case C.Xh.PREMIUM_YEAR_TIER_0:
            switch (w) {
                case A.O0b.CANCELED:
                    return N ? (D ? P.intl.format(P.t['USi/nZ'], { price: m }) : P.intl.format(P.t['FS//l5'], { price: m })) : P.intl.string(P.t.JshLzs);
                case A.O0b.ACCOUNT_HOLD:
                    return N ? (D ? P.intl.format(P.t['5mv+2t'], { price: m }) : P.intl.format(P.t.nkAEfX, { price: m })) : P.intl.format(P.t.SsLIXV, {});
                case A.O0b.UNPAID:
                    return P.intl.format(P.t.cmkbFB, {});
                case A.O0b.PAUSE_PENDING:
                    let j = null != p.pauseEndsAt ? a()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != j
                        ? P.intl.format(P.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: j
                          })
                        : P.intl.format(P.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (v) return x;
                    return P.intl.format(P.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case A.O0b.PAST_DUE:
                    return P.intl.format(P.t['d+0vws'], {
                        endDate: (0, b.vc)(ev(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return x;
            }
        case C.Xh.PREMIUM_MONTH_TIER_1:
        case C.Xh.PREMIUM_YEAR_TIER_1:
            switch (w) {
                case A.O0b.CANCELED:
                    return N ? (D ? P.intl.format(P.t.cXy8Bg, { price: m }) : P.intl.format(P.t['C/XsHh'], { price: m })) : P.intl.string(P.t.K6tYFR);
                case A.O0b.ACCOUNT_HOLD:
                    return N ? (D ? P.intl.format(P.t.HBkIBg, { price: m }) : P.intl.format(P.t.ZsO1S0, { price: m })) : P.intl.format(P.t['0+/WHx'], {});
                case A.O0b.UNPAID:
                    return P.intl.format(P.t.McIzws, {});
                case A.O0b.PAUSE_PENDING:
                    let U = null != p.pauseEndsAt ? a()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? P.intl.format(P.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : P.intl.format(P.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (v) return M;
                    return P.intl.format(P.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case A.O0b.PAST_DUE:
                    return P.intl.format(P.t['d+0vws'], {
                        endDate: (0, b.vc)(ev(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return M;
            }
        case C.Xh.PREMIUM_MONTH_TIER_2:
        case C.Xh.PREMIUM_YEAR_TIER_2:
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (w) {
                case A.O0b.CANCELED:
                    return N
                        ? D
                            ? P.intl.format(P.t.xoFgRk, {
                                  price: m,
                                  num: L
                              })
                            : P.intl.format(P.t.nXdbKi, {
                                  price: m,
                                  num: L
                              })
                        : P.intl.format(P.t.EcSdRE, { num: L });
                case A.O0b.ACCOUNT_HOLD:
                    return N
                        ? D
                            ? P.intl.format(P.t['5C/0QE'], {
                                  price: m,
                                  num: L
                              })
                            : P.intl.format(P.t.xfYkho, {
                                  price: m,
                                  num: L
                              })
                        : P.intl.format(P.t.ivjxcn, { num: L });
                case A.O0b.UNPAID:
                    return P.intl.format(P.t['0HopYW'], { num: L });
                case A.O0b.PAUSE_PENDING:
                    let G = null != p.pauseEndsAt ? a()(p.pauseEndsAt).diff(p.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? P.intl.format(P.t.WUfODw, {
                              pauseDate: p.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : P.intl.format(P.t.VlWufn, { pauseDate: p.currentPeriodEnd });
                case A.O0b.PAUSED:
                    if (v) return k;
                    return P.intl.format(P.t['6RTdZG'], { resumeDate: p.pauseEndsAt });
                case A.O0b.BILLING_RETRY:
                    return P.intl.format(P.t['IlJ/HR'], { endDate: a()(p.currentPeriodStart).add(C.A5, 'days').toDate() });
                case A.O0b.PAST_DUE:
                    return P.intl.format(P.t['d+0vws'], {
                        endDate: (0, b.vc)(ev(p).expiresDate, 'LL'),
                        onClick: () => {
                            (0, s.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return E
                        ? h === C.Xh.PREMIUM_YEAR_TIER_2
                            ? P.intl.format(P.t['+qqh6u'], {
                                  percent: null != (l = null == y ? void 0 : y.percentage) ? l : C.Bo,
                                  regularPrice: S
                              })
                            : D
                              ? P.intl.formatToPlainString(P.t['3Ziutb'], {
                                    percent: null != (c = null == y ? void 0 : y.percentage) ? c : C.M_,
                                    regularPrice: S,
                                    numMonths: null != (u = null == y ? void 0 : y.duration) ? u : C.rt
                                })
                              : P.intl.formatToPlainString(P.t['G6+XOT'], {
                                    percent: null != (d = null == y ? void 0 : y.percentage) ? d : C.M_,
                                    regularPrice: S,
                                    numMonths: null != (f = null == y ? void 0 : y.duration) ? f : C.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(h));
    }
}
function el(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: o = !1, hasDiscountApplied: a = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: l = !1 } = e,
        c = m.Z.get(r);
    return (
        i()(null != c, 'Missing plan'),
        es({
            subscription: n,
            planId: c.id,
            price: eG(t, n, c),
            includePremiumGuilds: o,
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function ec(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, f.Q0)(t) ? null : et(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return C.Z1.has(t);
                  }),
        o = (null == i ? void 0 : i.planId) === C.Xh.PREMIUM_MONTH_GUILD || (null == i ? void 0 : i.planId) === C.Xh.PREMIUM_YEAR_GUILD ? P.t.Pi5yMD : null,
        a = null != o ? P.intl.formatToPlainString(o, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != a)
        return P.intl.formatToPlainString(P.t.FN5T9v, {
            premiumDescription: r,
            premiumGuildDescription: a
        });
    if (null != r) return r;
    if (null != a) return a;
    throw Error('Subscription without premium or premium guild subscription');
}
function eu(e) {
    return e === C.Si.TIER_0 || e === C.Si.TIER_1 || e === C.Si.TIER_2;
}
function ed(e) {
    let { skuId: t, isPremium: n, multiMonthPlans: r, currentSubscription: i, defaultPlanId: o } = e;
    if (null == t || !n) return [];
    let a = void 0 !== o && t === C.GP[o].skuId ? o : void 0,
        s = [];
    switch (t) {
        case C.Si.TIER_0:
            s = [C.Xh.PREMIUM_YEAR_TIER_0, C.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case C.Si.TIER_1:
            s = [C.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case C.Si.TIER_2:
            let l = r;
            if (null != i) {
                let e = i.items[0].planId;
                if (C.o4.has(e)) {
                    let t = C.GP[e];
                    l = [...C.o4].filter((e) => {
                        let n = C.GP[e];
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === C.Si.TIER_2;
                    });
                } else l = [];
            }
            s = [C.Xh.PREMIUM_YEAR_TIER_2, ...l, C.Xh.PREMIUM_MONTH_TIER_2];
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
function ef(e) {
    let t = C.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, E.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function e_(e) {
    switch (e) {
        case C.p9.TIER_0:
            return C.Si.TIER_0;
        case C.p9.TIER_1:
            return C.Si.TIER_1;
        case C.p9.TIER_2:
            return C.Si.TIER_2;
    }
}
function ep(e) {
    var t;
    return null == e ? U.ALL : null != (t = U[e]) ? t : [];
}
function eh(e) {
    let t = C.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        r = ep(e);
    for (let e of Object.keys(C.GP)) {
        let { interval: t } = C.GP[e];
        if (n === t && r.includes(e)) return e;
    }
    return null;
}
function em(e) {
    let t = m.Z.getPlanIdsForSkus([tN(C.Si.GUILD)]);
    i()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eg = new Set([C.Xh.NONE_MONTH, C.Xh.NONE_3_MONTH, C.Xh.NONE_6_MONTH, C.Xh.NONE_YEAR, C.Xh.PREMIUM_MONTH_TIER_0, C.Xh.PREMIUM_MONTH_TIER_1, C.Xh.PREMIUM_MONTH_TIER_2, C.Xh.PREMIUM_YEAR_TIER_0, C.Xh.PREMIUM_YEAR_TIER_1, C.Xh.PREMIUM_YEAR_TIER_2, C.Xh.PREMIUM_3_MONTH_TIER_2, C.Xh.PREMIUM_6_MONTH_TIER_2]);
function eE(e) {
    return eg.has(e);
}
function eb(e) {
    return C.Z1.has(e);
}
function ey(e) {
    return eE(e) || eb(e);
}
function eO(e) {
    return ee(e) === C.p9.TIER_2 ? C.cb : 0;
}
function ev(e) {
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
        let t = e.isPurchasedViaApple ? C.$7 : C.Ue;
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
        let t = null == e.paymentSourceId ? C.UA : C.zp;
        return {
            days: t,
            expiresDate: a()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function eI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: C.a$.NONE,
                      startsAt: a()(0),
                      endsAt: a()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        i = n
            ? (0, T.T4)(
                  t.invoiceItems
                      .filter((e) => C.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, T.T4)(t.total, t.currency);
    if (null != e.trialId && C.h8.includes(e.trialId) && null == e.paymentSourceId) return P.intl.format(P.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === A.O0b.CANCELED) return P.intl.format(P.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === A.O0b.PAUSE_PENDING)
        return P.intl.format(P.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === A.O0b.PAUSED)
        return r.fractionalState !== C.a$.NONE
            ? P.intl.format(P.t.Q18lRE, {
                  renewalDate: r.endsAt.toDate(),
                  price: i
              })
            : null == e.pauseEndsAt
              ? n
                  ? P.intl.format(P.t.KTYQCg, {
                        planName: P.intl.string(P.t.Ipxkoq),
                        price: i
                    })
                  : P.intl.string(P.t.fMz6Li)
              : n
                ? P.intl.format(P.t.zcgtzc, {
                      planName: P.intl.string(P.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: i
                  })
                : P.intl.format(P.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === A.O0b.PAST_DUE) {
        var o, s;
        let t = ev(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null == (o = e.metadata) ? void 0 : o.google_grace_period_expires_date) != null && (t = a()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null == (s = e.metadata) ? void 0 : s.apple_grace_period_expires_date) != null && (t = a()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? P.intl.format(P.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: R.Vz[e.paymentGateway],
                  paymentSourceLink: ez(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : P.intl.format(P.t.qEIzys, {
                  endDate: t.toDate(),
                  price: i
              });
    }
    {
        if (e.status === A.O0b.BILLING_RETRY)
            return P.intl.format(P.t.EMTLOT, {
                endDate: a()(e.currentPeriodStart).add(C.A5, 'days').toDate(),
                price: i
            });
        if (e.status === A.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, v.isAndroid)()
                ? P.intl.format(P.t.dtcxw8, {
                      endDate: a()(e.currentPeriodStart).add(C.gh, 'days').toDate(),
                      paymentGatewayName: R.Vz[e.paymentGateway],
                      paymentSourceLink: ez(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : P.intl.format(P.t.EMTLOT, {
                      endDate: a()(e.currentPeriodStart).add(C.gh, 'days').toDate(),
                      price: i
                  });
        if (eC(e)) return P.intl.format(P.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === A.O0b.UNPAID) return P.intl.format(P.t.CzTKoq, { maxProcessingTimeInDays: C.Rg });
        if (e.isPurchasedExternally)
            return P.intl.format(P.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: R.Vz[e.paymentGateway],
                subscriptionManagementLink: ez(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let o = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (o = eS(o, r.unactivatedUnits)),
            n
                ? P.intl.format(P.t.Vl3cEB, {
                      planName: P.intl.string(P.t.Ipxkoq),
                      renewalDate: o,
                      price: i
                  })
                : P.intl.format(P.t.Q18lRE, {
                      renewalDate: o,
                      price: i
                  })
        );
    }
}
function eS(e, t, n) {
    let r = a()(e);
    if (t.length > 0) {
        let e = tL(t);
        r = r.add(e, 'hours');
    }
    if (void 0 !== n) {
        let e = a()(),
            t = n.diff(e, 'hours', !0);
        t > 0 && (r = r.add(t, 'hours'));
    }
    return r.toDate();
}
function eT(e) {
    let t = tL(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === C.a$.NONE)) return '';
    let n = {
            days: P.t.fYmir6,
            hours: P.t['C3RO+v'],
            minutes: P.t.r77oHR
        },
        r = (0, l.eB)((0, b.TD)(0, t * y.Z.Millis.HOUR));
    return (0, b.QX)(r, n);
}
function eA(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === A.O0b.PAST_DUE;
}
function eN(e) {
    let t = null;
    return null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? P.intl.string(P.t['0rzJ4O']) : P.intl.string(P.t['9dLQ09'])), null != e.trialEndsAt && (t = P.intl.string(P.t.a9Mdb2)), t;
}
function eC(e) {
    return null != e.paymentSourceId && eR(e.paymentSourceId);
}
function eR(e) {
    if (null == e) return !1;
    let t = h.Z.getPaymentSource(e);
    return null != t && R.Uk.has(t.type);
}
function eP(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = em(n);
    return 0 === (null != t ? em(t.additionalPlans) : null) && 0 !== i ? A.O0b.CANCELED : r;
}
function ew(e) {
    return e.isPurchasedExternally ? e.status === A.O0b.CANCELED : eP(e) === A.O0b.CANCELED;
}
function eD(e) {
    var t, n, r;
    let { subscription: o, user: a, price: s, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = o,
        f = m.Z.get(u);
    i()(null != f, 'Missing plan');
    let _ = em(d),
        p = eB(o.planId, o.paymentSourceId, o.currency, a).amount * _;
    if (null != l) {
        let e = l.invoiceItems.find((e) => C.Z1.has(e.subscriptionPlanId));
        null != e && (p = e.amount);
    }
    s = null != s ? s : (0, T.T4)(p, o.currency);
    let h = null == (r = null != (n = null == l ? void 0 : l.taxInclusive) ? n : null == (t = o.latestInvoice) ? void 0 : t.taxInclusive) || r;
    if (ew(o))
        return o.isPurchasedViaGoogle
            ? P.intl.format(P.t['3/WTrK'], { quantity: _ })
            : h
              ? P.intl.format(P.t['0ozBSE'], {
                    quantity: _,
                    rate: (0, T.og)(s, f.interval, f.intervalCount)
                })
              : P.intl.format(P.t['yjsv/v'], {
                    quantity: _,
                    rate: (0, T.og)(s, f.interval, f.intervalCount)
                });
    switch (o.status) {
        case A.O0b.ACCOUNT_HOLD:
            return o.isPurchasedViaGoogle
                ? P.intl.format(P.t.Nlf3nZ, {
                      quantity: _,
                      boostQuantity: _
                  })
                : h
                  ? P.intl.format(P.t.oiRy7u, {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, T.og)(s, f.interval, f.intervalCount)
                    })
                  : P.intl.format(P.t['0QxOAg'], {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, T.og)(s, f.interval, f.intervalCount)
                    });
        case A.O0b.PAUSE_PENDING:
        case A.O0b.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return P.intl.string(P.t.CduWAg);
            return P.intl.format(P.t['5iud9v'], { quantity: _ });
        default:
            return o.isPurchasedViaGoogle
                ? P.intl.format(P.t['5iud9v'], { quantity: _ })
                : h
                  ? P.intl.format(P.t.eDwrLC, {
                        quantity: _,
                        rate: (0, T.og)(s, f.interval, f.intervalCount)
                    })
                  : P.intl.format(P.t.ijSDcH, {
                        quantity: _,
                        rate: (0, T.og)(s, f.interval, f.intervalCount)
                    });
    }
}
function eL(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? Z(e.id, !1, r, t) : F(e.id, !1, r),
        o = (0, T.T4)(i.amount, i.currency);
    return e.currency !== R.pK.USD && !0 === n && (o = o.concat('*')), o;
}
function ex(e, t, n) {
    let r = eL(e, t, n);
    return (0, T.og)(r, e.interval, e.intervalCount);
}
function eM(e, t) {
    let { planId: n } = e;
    if (e.status === A.O0b.CANCELED || e.status === A.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eE(t);
    });
    return null == r || (0, f.Q0)(r.subscriptionPlanId) || (null != e.renewalMutations && e.renewalMutations.planId !== e.planId) ? e.planId : r.subscriptionPlanId;
}
function ek(e, t) {
    let { status: n } = e;
    if (e.status === A.O0b.CANCELED || e.status === A.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return eE(t);
    });
    return (null == r || (0, f.Q0)(r.subscriptionPlanId)) && (n = A.O0b.CANCELED), n;
}
function ej(e) {
    let { status: t, renewalMutations: n } = e;
    return t === A.O0b.CANCELED || (null != n && (0, f.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eU(e) {
    return e === A.O0b.PAST_DUE || e === A.O0b.ACCOUNT_HOLD || e === A.O0b.BILLING_RETRY;
}
function eG(e, t, n) {
    let r = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return t === n.id;
        }),
        i =
            null == r
                ? Z(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency
                  }).amount
                : r.amount;
    return (0, T.og)((0, T.T4)(i, e.currency), n.interval, n.intervalCount);
}
function eB(e, t, n, r) {
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
        o = m.Z.get(e);
    if (null == o) {
        let t = Error('Unsupported plan');
        throw ((0, E.q2)(t, { tags: { planId: e } }), t);
    }
    let a = m.Z.getForSkuAndInterval(tN(C.Si.GUILD), o.interval, o.intervalCount);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, E.q2)(t, { tags: { planId: e } }), t);
    }
    return Z(a.id, (0, S.I5)(r), !1, i);
}
function eV(e) {
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
            case C.Xh.PREMIUM_MONTH_TIER_0:
                return P.intl.string(P.t['0ggVqK']);
            case C.Xh.PREMIUM_YEAR_TIER_0:
                return P.intl.string(P.t['jm+ZQ0']);
            case C.Xh.PREMIUM_MONTH_TIER_1:
                return P.intl.string(P.t.uph4Jy);
            case C.Xh.PREMIUM_YEAR_TIER_1:
                return P.intl.string(P.t['D/l7Ym']);
            case C.Xh.PREMIUM_MONTH_TIER_2:
                return P.intl.string(P.t['5l1Mub']);
            case C.Xh.PREMIUM_YEAR_TIER_2:
                return P.intl.string(P.t.G0mISU);
        }
    switch (r) {
        case C.Xh.PREMIUM_MONTH_TIER_0:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['/G3aKy']);
        case C.Xh.PREMIUM_YEAR_TIER_0:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['2eQpsL']);
        case C.Xh.PREMIUM_MONTH_TIER_1:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t.gueLg4);
        case C.Xh.PREMIUM_YEAR_TIER_1:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['MhH/vb']);
        case C.Xh.PREMIUM_MONTH_TIER_2:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t.LQVQIi);
        case C.Xh.PREMIUM_YEAR_TIER_2:
            return n ? P.intl.string(P.t.cRCCJy) : P.intl.string(P.t['0nfg19']);
        case C.Xh.PREMIUM_3_MONTH_TIER_2:
        case C.Xh.PREMIUM_6_MONTH_TIER_2:
            return P.intl.formatToPlainString(P.t.BCD4fX, { intervalCount: t.intervalCount });
        case C.Xh.NONE_MONTH:
        case C.Xh.NONE_YEAR:
        case C.Xh.NONE_3_MONTH:
        case C.Xh.NONE_6_MONTH:
        case C.Xh.PREMIUM_MONTH_GUILD:
        case C.Xh.PREMIUM_YEAR_GUILD:
        case C.Xh.PREMIUM_3_MONTH_GUILD:
        case C.Xh.PREMIUM_6_MONTH_GUILD:
            return P.intl.string(P.t.eUEeCg);
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, E.q2)(i, { tags: { planId: r } }), i);
}
function eZ(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = m.Z.get(t);
    return (
        i()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eH(e) {
    let { intervalType: t = C.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case C.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? P.intl.formatToPlainString(P.t.fRNBRU, { weeks: n / 7 }) : P.intl.formatToPlainString(P.t.EIpHEh, { weeks: n / 7 });
            return r ? P.intl.formatToPlainString(P.t['6Cdzo6'], { days: n }) : P.intl.formatToPlainString(P.t['kbBj/v'], { days: n });
        case C.rV.MONTH:
            return r ? P.intl.formatToPlainString(P.t.x5Mgxc, { months: n }) : P.intl.formatToPlainString(P.t['4SEnCQ'], { months: n });
        case C.rV.YEAR:
            return r ? P.intl.formatToPlainString(P.t['h+63ys'], { years: n }) : P.intl.formatToPlainString(P.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eY(e) {
    let { intervalType: t = C.rV.MONTH, intervalCount: n = 1 } = e;
    switch (t) {
        case C.rV.DAY:
            if (n >= 7 && n % 7 == 0) return P.intl.formatToPlainString(P.t['8awlzM'], { weeks: n / 7 });
            return P.intl.formatToPlainString(P.t.ZsgnLC, { days: n });
        case C.rV.MONTH:
            return P.intl.formatToPlainString(P.t.Y0HCVV, { months: n });
        case C.rV.YEAR:
            return P.intl.formatToPlainString(P.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eW(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eY({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eK(e) {
    let { intervalType: t = C.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case C.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? P.intl.formatToPlainString(P.t.iVZYys, { weeks: n / 7 }) : P.intl.formatToPlainString(P.t.EmoBDw, { weeks: n / 7 });
            return r ? P.intl.formatToPlainString(P.t.jzH70d, { days: n }) : P.intl.formatToPlainString(P.t.k2UNz8, { days: n });
        case C.rV.MONTH:
            return r ? P.intl.formatToPlainString(P.t.erUSmJ, { months: n }) : P.intl.formatToPlainString(P.t.kridzM, { months: n });
        case C.rV.YEAR:
            return r ? P.intl.formatToPlainString(P.t.IfYQVF, { years: n }) : P.intl.formatToPlainString(P.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function ez(e, t) {
    switch (e) {
        case A.gg$.APPLE_PARTNER:
        case A.gg$.APPLE:
            return M[t];
        case A.gg$.GOOGLE:
            return k[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eq(e, t) {
    return (0, S.I5)(e) || eU(null == t ? void 0 : t.status);
}
function eQ(e, t) {
    var n, r;
    let i = [],
        o = (null != (r = null == (n = e.renewalMutations) ? void 0 : n.items) ? r : e.items).find((e) => C.dJ.has(e.planId));
    return (
        null != o && i.push(o),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return D({}, n, t);
            return t;
        })
    );
}
function eX(e) {
    return e.filter((e) => !C.dJ.has(e.planId));
}
function eJ(e, t, n, r) {
    var o, a;
    i()(r.has(t), 'Expected planId in group');
    let s = !1,
        l = (null != (a = null == (o = e.renewalMutations) ? void 0 : o.items) ? a : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  x(D({}, e), {
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
function e$(e, t) {
    return eJ(e, t, 1, C.dJ);
}
function e0(e, t, n) {
    return eJ(e, n, t, C.Z1);
}
function e1(e) {
    var t;
    let n = null != (t = e.find((e) => !('id' in e))) ? t : e.find((e) => C.dJ.has(e.planId));
    if (null != n) {
        let t = m.Z.get(n.planId);
        i()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = m.Z.get(e.planId);
                i()(null != r, 'Missing plan');
                let o = m.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return i()(null != o, 'Missing planForInterval'), x(D({}, e), { planId: o.id });
            }));
    }
    return e;
}
function e2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = C.a1[e].fileSize;
    return (0, O.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function e3(e) {
    return null == e ? null : e.items.find((e) => C.Z1.has(e.planId));
}
function e4(e) {
    return null != e && null == V(e) && null != e3(e);
}
function e5(e) {
    let t = null != e ? V(e) : null;
    return null != t ? ef(t.planId) : null;
}
function e6(e) {
    if (null != e) {
        let t = V(e);
        if (null != t) return ee(t.planId);
    }
}
function e8(e) {
    if (null != e && null != e.renewalMutations) {
        let t = V(e.renewalMutations);
        if (null != t) return ee(t.planId);
    }
}
function e7(e) {
    switch (e) {
        case C.p9.TIER_0:
            return N.Rj.PREMIUM_TIER_0;
        case C.p9.TIER_1:
            return N.Rj.PREMIUM_TIER_1;
        case C.p9.TIER_2:
            return N.Rj.PREMIUM_TIER_2;
    }
}
function e9(e) {
    return (0, d.ks)(d.g_, e);
}
function te(e) {
    return (0, d.ks)(d.m_, e);
}
function tt(e) {
    return (0, d.ks)(d._y, e);
}
function tn(e) {
    return (0, d.ks)(d.tj, e);
}
function tr(e) {
    return (0, d.ks)(d.EQ, e);
}
function ti(e) {
    return (0, d.ks)(d.Pl, e);
}
function to(e) {
    return (0, d.ks)(d.wN, e);
}
function ta(e) {
    return (0, d.ks)(d._G, e);
}
function ts(e, t) {
    return (0, d.ks)(d.j4, e, t);
}
function tl(e) {
    return (0, d.ks)(d.lX, e);
}
function tc(e) {
    return (0, d.ks)(d.Uw, e);
}
function tu(e) {
    return (0, d.ks)(d.zm, e);
}
function td(e) {
    return (0, d.ks)(d.zZ, e);
}
function tf(e) {
    return (0, d.ks)(d.do, e);
}
function t_(e) {
    return (0, d.ks)(d.ZE, e);
}
function tp(e) {
    return (0, d.ks)(d.Ej, e);
}
function th(e) {
    return (0, d.ks)(d.Ct, e);
}
function tm(e) {
    return (0, d.ks)(d.O1, e);
}
function tg(e) {
    return (0, d.ks)(d.uw, e);
}
function tE(e, t) {
    return 'high' === e ? (0, d.ks)(d.O8, t) : 'mid' === e && (0, d.ks)(d.g7, t);
}
function tb(e, t) {
    return (0, d.ks)(d.$0, e, t);
}
function ty(e) {
    return (0, d.ks)(d.ME, e);
}
function tO(e) {
    return (0, d.ks)(d.AN, e);
}
function tv(e) {
    return (0, d.ks)(d._O, e);
}
function tI(e) {
    return (0, d.ks)(d.qH, e);
}
function tS(e) {
    return (0, d.ks)(d.hs, e);
}
function tT(e) {
    return (0, d.ks)(d.DU, e);
}
function tA(e, t) {
    let n = (0, T.T4)(e.amount, e.currency),
        r = $(t);
    return ''.concat(n, '/').concat(r);
}
function tN(e) {
    return e;
}
function tC(e) {
    return 'isNitroLocked' in e;
}
function tR(e) {
    return null != e && C.OT.includes(e) ? 1 : 2;
}
function tP(e) {
    return e === C.Rt ? C.FL : C.ff;
}
function tw(e) {
    if (e === C.rV.YEAR) return P.intl.string(P.t.tfqrho);
    if (e === C.rV.MONTH) return P.intl.string(P.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tD(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tL(e) {
    return tx(e.map((e) => e.skuId));
}
function tx(e) {
    return e.reduce((e, t) => {
        let [n, r] = C.Cx[t],
            i = 1;
        switch (n) {
            case C.Se.HOUR:
                i = 1;
                break;
            case C.Se.DAY:
                i = 24;
        }
        return e + i * r;
    }, 0);
}
let tM = Object.freeze({
    isNewUser: (e) => null != e && Date.now() - e.createdAt.getTime() < G,
    isPremiumAtLeast: S.yd,
    isPremium: S.I5,
    isPremiumExactly: S.M5,
    isPremiumEligible: tD,
    getPrice: Z,
    getDefaultPrice: F,
    getInterval: Q,
    getIntervalString: J,
    getIntervalStringAsNoun: $,
    getPremiumType: ee,
    getDisplayName: et,
    getDisplayPremiumType: eo,
    getPremiumPlanOptions: ed,
    getUpgradeEligibilities: ep,
    getReverseTrialWeeks: tR,
    formatInterval: tw,
    getPlanDescription: es,
    isPremiumSku: eu,
    getClosestUpgrade: eh,
    getIntervalMonths: ei,
    getUserMaxFileSize: I.h,
    getSkuIdForPlan: ef,
    getSkuIdForPremiumType: e_,
    getNumIncludedPremiumGuildSubscriptionSlots: eO,
    getBillingInformationString: eI,
    extendDateWithUnconsumedFractionalPremium: eS,
    getUnactivatedFractionalPremiumDurationString: eT,
    isSwitchingPlansDisabled: eA,
    getSwitchingPlansDisabledMessage: eN,
    isNoneSubscription: f.Q0,
    getPlanIdFromInvoice: eM,
    getStatusFromInvoice: ek,
    isBaseSubscriptionCanceled: ej,
    getPremiumGuildIntervalPrice: eB,
    hasAccountCredit: eV,
    getBillingReviewSubheader: eF,
    getIntervalForInvoice: eZ,
    getPremiumPlanItem: V,
    getGuildBoostPlanItem: e3,
    isBoostOnlySubscription: e4,
    getPremiumSkuIdForSubscription: e5,
    getPremiumTypeFromSubscription: e6,
    getPremiumTypeFromSubscriptionRenewalMutations: e8,
    getPremiumGradientColor: e7,
    getUnactivatedFractionalPremiumHours: tL,
    castPremiumSubscriptionAsSkuId: tN,
    canUseAnimatedEmojis: e9,
    canUseEmojisEverywhere: te,
    canUseSoundboardEverywhere: tt,
    canUseCustomCallSounds: tn,
    canUploadLargeFiles: tr,
    canUseBadges: ti,
    canUseHighVideoUploadQuality: to,
    canEditDiscriminator: ta,
    hasBoostDiscount: ts,
    canUseAnimatedAvatar: tl,
    canUseFancyVoiceChannelReactions: tc,
    canInstallPremiumApplications: tu,
    canUseIncreasedMessageLength: td,
    canUseIncreasedGuildCap: tf,
    canRedeemPremiumPerks: t_,
    canUsePremiumProfileCustomization: tp,
    canUsePremiumAppIcons: th,
    canUsePremiumGuildMemberProfile: tm,
    canUseClientThemes: tg,
    canStreamQuality: tE,
    hasFreeBoosts: tb,
    canUseCustomStickersEverywhere: ty,
    canUseCustomBackgrounds: tO,
    canUseCollectibles: tv,
    canUseCustomNotificationSounds: tI,
    canUsePremiumVoiceFilters: tS,
    canUseChatWallpapers: tT,
    formatPriceString: tA,
    StreamQuality: B
});
