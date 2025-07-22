(n.d(t, {
    Af: () => Z,
    Ap: () => ew,
    BK: () => q,
    CY: () => H,
    EK: () => tD,
    EO: () => tt,
    Gf: () => er,
    I5: () => A.I5,
    JE: () => eX,
    JP: () => $,
    L7: () => ee,
    M5: () => A.M5,
    MY: () => eJ,
    N1: () => eA,
    PK: () => ek,
    PV: () => ev,
    Px: () => el,
    Qo: () => eQ,
    Rd: () => en,
    Rt: () => eK,
    T4: () => K,
    U2: () => F,
    UV: () => tG,
    UX: () => X,
    Ue: () => e$,
    V7: () => ef,
    W_: () => eH,
    Wz: () => tP,
    XK: () => e1,
    Z8: () => eO,
    ZP: () => tB,
    Zx: () => e2,
    _O: () => tw,
    a5: () => eW,
    aS: () => Y,
    al: () => e0,
    aq: () => ea,
    bt: () => ex,
    dn: () => eY,
    eP: () => et,
    fr: () => ez,
    gB: () => e3,
    gq: () => es,
    gy: () => eM,
    if: () => eq,
    jP: () => ei,
    jp: () => eN,
    k5: () => e8,
    lY: () => eT,
    m3: () => eC,
    nd: () => eR,
    qV: () => eu,
    sG: () => Q,
    uV: () => eE,
    uZ: () => ey,
    v6: () => eL,
    v9: () => e4,
    xG: () => tU,
    xe: () => tx,
    yd: () => A.yd,
    zL: () => ed,
    zV: () => eB
}),
    n(415506),
    n(49124),
    n(388685),
    n(290780),
    n(539854));
var r = n(512722),
    i = n.n(r),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(782568),
    c = n(927359),
    u = n(710845),
    d = n(491819),
    _ = n(803905),
    f = n(790060),
    p = n(301766),
    h = n(594174),
    m = n(351402),
    g = n(853872),
    E = n(509545),
    b = n(78839),
    y = n(122289),
    O = n(55935),
    v = n(70956),
    I = n(424218),
    T = n(358085),
    S = n(380684),
    A = n(111361),
    N = n(937615),
    C = n(981631),
    R = n(334431),
    P = n(474936),
    w = n(231338),
    D = n(388032);
function L(e, t, n) {
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let j = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    U = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    G = new u.Z('PremiumUtils.tsx'),
    B = {
        [P.Xh.NONE_MONTH]: [P.Xh.NONE_YEAR, P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1],
        [P.Xh.NONE_YEAR]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1],
        [P.Xh.PREMIUM_MONTH_TIER_0]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1, P.Xh.PREMIUM_YEAR_TIER_0],
        [P.Xh.PREMIUM_YEAR_TIER_0]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1],
        [P.Xh.PREMIUM_MONTH_TIER_1]: [P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1],
        [P.Xh.PREMIUM_YEAR_TIER_1]: [P.Xh.PREMIUM_YEAR_TIER_2],
        [P.Xh.PREMIUM_MONTH_TIER_2]: [P.Xh.PREMIUM_YEAR_TIER_2],
        [P.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [P.Xh.NONE_MONTH, P.Xh.NONE_YEAR, P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_MONTH_TIER_1, P.Xh.PREMIUM_YEAR_TIER_0, P.Xh.PREMIUM_MONTH_TIER_0]
    },
    V = 2592000000;
var F = (function (e) {
    return ((e.MID = 'mid'), (e.HIGH = 'high'), e);
})({});
function Z(e) {
    return e.items.find((e) => P.dJ.has(e.planId));
}
function H(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = null != (t = g.Z.defaultPaymentSourceId) ? t : void 0,
        o = b.Z.getPremiumTypeSubscription();
    return (
        null != o && null != o.paymentSourceId && (a = o.paymentSourceId),
        Y(e, n, r, {
            paymentSourceId: a,
            currency: i
        })
    );
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: i, currency: a } = r;
    if (null != E.Z.get(e)) {
        let r = C.tuJ.DEFAULT;
        n ? (r = C.tuJ.GIFT) : t && (r = C.tuJ.PREMIUM_TIER_1);
        let o = z(e, {
            paymentSourceId: i,
            purchaseType: r,
            currency: a
        });
        if (null == o) {
            let t = Error("Couldn't find price");
            throw (
                (0, y.q2)(t, {
                    extra: { paymentSourceId: i },
                    tags: {
                        purchaseType: r.toString(),
                        planId: e,
                        currency: null != a ? a : 'unknown'
                    }
                }),
                t
            );
        }
        return o;
    }
    let o = Error('Plan not found');
    throw (
        (0, y.q2)(o, {
            tags: {
                planId: e,
                currency: null != a ? a : 'unknown'
            },
            extra: k(x({}, r), { isGift: n })
        }),
        o
    );
}
function W(e, t) {
    let n = E.Z.get(e);
    if (null == n) {
        let n = Error('Plan not found');
        throw (
            (0, y.q2)(n, {
                tags: {
                    planId: e,
                    purchaseType: t.toString()
                }
            }),
            n
        );
    }
    if (null == n.prices) throw Error('No prices returned for '.concat(e, ', is your user in the experiment?'));
    let r = n.prices[t];
    if (null == r) throw (G.info('Purchase types: '.concat(JSON.stringify(Object.keys(n.prices)))), Error('No prices returned for purchase type '.concat(t, ' for plan ').concat(e)));
    return r;
}
function K(e) {
    let { paymentSourceId: t, purchaseType: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: C.tuJ.DEFAULT },
        r = W(e, n);
    if (null != t) {
        let i = r.paymentSourcePrices[t];
        if (null == i) {
            (G.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(r.paymentSourcePrices)))), G.info('prices: '.concat(i)));
            let a = Error('Missing prices for payment source on subscription plan');
            (0, y.q2)(a, {
                extra: { paymentSourceId: t },
                tags: {
                    purchaseType: n.toString(),
                    planId: e
                }
            });
        } else if (0 !== i.length) return i;
    }
    if (null == r.countryPrices.prices) {
        G.info('countryPrices: '.concat(JSON.stringify(r.countryPrices)));
        let t = Error('Missing prices for country');
        throw (
            (0, y.q2)(t, {
                tags: {
                    countryCode: r.countryPrices.countryCode,
                    planId: e
                }
            }),
            t
        );
    }
    return r.countryPrices.prices;
}
function z(e) {
    let { paymentSourceId: t, purchaseType: n, currency: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: C.tuJ.DEFAULT },
        i = K(e, {
            paymentSourceId: t,
            purchaseType: n
        });
    return (0 === i.length && G.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(t, ', purchaseType: ').concat(n)), null != r) ? i.find((e) => e.currency === r.toLowerCase()) : i[0];
}
function q(e) {
    return {
        amount: e.amount,
        currency: e.currency,
        exponent: e.exponent
    };
}
function X(e, t, n) {
    let r,
        i,
        a = {
            currency: t,
            amount: 0,
            tax: 0,
            taxInclusive: !1
        },
        o = (0, d.MY)(e);
    null != o && (r = P.GP[o.planId].premiumType);
    let s = (0, A.yd)(r, P.p9.TIER_0),
        l = (0, A.yd)(r, P.p9.TIER_2);
    for (let r of e) {
        let e;
        ((i = P.Z1.has(r.planId) ? l : !P.dJ.has(r.planId) && s),
            (e =
                void 0 === n
                    ? H(r.planId, i, !1, t)
                    : Y(r.planId, i, !1, {
                          paymentSourceId: n,
                          currency: t
                      })),
            (a.amount += e.amount * r.quantity));
    }
    return q(a);
}
function Q(e, t, n, r) {
    let a;
    return (null === t && (i()(null !== e, "Subscription can't be null"), (t = [])), X((a = null !== e ? eJ(e, t) : e$(t)), n, r));
}
function J(e) {
    let t = P.GP[e];
    if (null != t)
        return {
            intervalType: t.interval,
            intervalCount: t.intervalCount
        };
    let n = Error('Unsupported plan');
    throw ((0, y.q2)(n, { tags: { planId: e } }), n);
}
function $(e) {
    switch (e) {
        case P.EA.MONTH:
            return D.intl.string(D.t.FPybU1);
        case P.EA.YEAR:
            return D.intl.string(D.t.tfqrho);
        case P.EA.DAY:
        case P.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function ee(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : P.p9.TIER_2;
    if (t || n)
        switch (e) {
            case P.rV.MONTH:
                let o = D.intl.formatToPlainString(a === P.p9.TIER_0 ? D.t.NPKsLy : D.t.poEovb, { timeInterval: D.intl.string(D.t.FPybU1) });
                return i ? o : D.intl.string(D.t.Mh9bTk);
            case P.rV.YEAR:
                let s = D.intl.formatToPlainString(a === P.p9.TIER_0 ? D.t.NPKsLy : D.t.poEovb, { timeInterval: D.intl.string(D.t.tfqrho) });
                return i ? s : D.intl.string(D.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case P.rV.MONTH:
            if (1 !== r) return D.intl.formatToPlainString(D.t['0UlZnJ'], { intervalCount: r });
            return D.intl.string(D.t['DKzs9/']);
        case P.rV.YEAR:
            return D.intl.string(D.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function et(e) {
    switch (e) {
        case P.rV.MONTH:
            return D.intl.string(D.t.FPybU1);
        case P.rV.YEAR:
            return D.intl.string(D.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function en(e) {
    let t = P.GP[e];
    if (null != t) return t.premiumType;
    let n = Error('Unsupported plan');
    throw ((0, y.q2)(n, { tags: { planId: e } }), n);
}
function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
            return t ? D.intl.format(D.t.TZXHNj, { duration: r }) : n ? D.intl.string(D.t['81iAgo']) : D.intl.string(D.t['0efVPz']);
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return t ? D.intl.format(D.t.eqRhCw, { duration: r }) : n ? D.intl.string(D.t.UvzqY2) : D.intl.string(D.t.eoVuBg);
        case P.Xh.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t['g/dH5u']) : D.intl.string(D.t['7O6qSk']);
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.pdZJam) : D.intl.string(D.t.Md5xbm);
        case P.Xh.PREMIUM_MONTH_TIER_2:
            return t ? D.intl.format(D.t.aI6QX1, { duration: r }) : n ? D.intl.string(D.t.SmVbHR) : D.intl.string(D.t.FKYNCw);
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return t ? D.intl.format(D.t['1wBcPj'], { duration: r }) : n ? D.intl.string(D.t.JIq4Oz) : D.intl.string(D.t['cfu/5e']);
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
            return D.intl.string(D.t.wCbINj);
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return D.intl.string(D.t['e3/Ara']);
        case P.Xh.PREMIUM_MONTH_GUILD:
            return n ? D.intl.string(D.t['6ZR3Bw']) : D.intl.string(D.t.h80cx8);
        case P.Xh.PREMIUM_YEAR_GUILD:
            return n ? D.intl.string(D.t.YDpAzc) : D.intl.string(D.t.ZHkls7);
        case P.Xh.PREMIUM_3_MONTH_GUILD:
            return D.intl.string(D.t.EZHHBw);
        case P.Xh.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.X2KDOz);
        case P.Xh.PREMIUM_MONTH_LEGACY:
            return D.intl.string(D.t['PD6k7+']);
        case P.Xh.PREMIUM_YEAR_LEGACY:
            return D.intl.string(D.t.LtJgTE);
    }
    let i = Error('Unsupported plan');
    throw ((0, y.q2)(i, { tags: { planId: e } }), i);
}
function ei(e) {
    switch (e) {
        case P.Si.TIER_0:
            return D.intl.string(D.t['t9uG/v']);
        case P.Si.TIER_1:
            return D.intl.string(D.t['FSOz7+']);
        case P.Si.TIER_2:
            return D.intl.string(D.t['lG6a5+']);
    }
    let t = Error('Unsupported sku');
    throw ((0, y.q2)(t, { tags: { skuId: e } }), t);
}
function ea(e) {
    switch (e) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return D.intl.string(D.t['t9uG/v']);
        case P.Xh.PREMIUM_MONTH_TIER_1:
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return D.intl.string(D.t['FSOz7+']);
        case P.Xh.PREMIUM_MONTH_TIER_2:
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return D.intl.string(D.t['lG6a5+']);
    }
    let t = Error('Unsupported plan');
    throw ((0, y.q2)(t, { tags: { planId: e } }), t);
}
function eo(e, t) {
    if (e === P.rV.MONTH) return t;
    if (e === P.rV.YEAR) return 12 * t;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return t ? 'Basic' : 'Nitro Basic';
        case P.Xh.PREMIUM_MONTH_TIER_1:
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return t ? 'Classic' : 'Nitro Classic';
        case P.Xh.PREMIUM_MONTH_TIER_2:
        case P.Xh.PREMIUM_YEAR_TIER_2:
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let n = Error('Unsupported plan');
    throw ((0, y.q2)(n, { tags: { planId: e } }), n);
}
function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case P.p9.TIER_0:
            return t ? 'Basic' : D.intl.string(D.t['t9uG/v']);
        case P.p9.TIER_1:
            return t ? 'Classic' : D.intl.string(D.t['FSOz7+']);
        case P.p9.TIER_2:
            return D.intl.string(D.t['lG6a5+']);
    }
}
function ec(e) {
    var t, n, r, i, a, s, c, u, d, _;
    let { subscription: f, planId: p, price: m, includePremiumGuilds: g, hasDiscountApplied: E, activeDiscountInfo: b, renewalInvoicePreview: y, hasFractionalPremiumWithSub: v } = e,
        I = P.GP[p],
        T = tR(H(I.id), I.interval),
        S = eG(f) || (null == f.paymentSourceId && !f.isPurchasedExternally && !(null == (t = h.default.getCurrentUser()) ? void 0 : t.hasFreePremium())),
        A = null != m && null == f.paymentGateway,
        N = f.status === C.O0b.UNPAID && null !== f.latestInvoice && (null == (n = f.latestInvoice) ? void 0 : n.status) === C.hUK.OPEN,
        R = S ? C.O0b.CANCELED : N ? C.O0b.UNPAID : f.status,
        w = null == (a = null != (i = null == y ? void 0 : y.taxInclusive) ? i : null == (r = f.latestInvoice) ? void 0 : r.taxInclusive) || a,
        L = P.cb + (g ? eE(f.additionalPlans) : 0),
        x = A ? (w ? D.intl.format(D.t['cd+hqK'], { price: m }) : D.intl.format(D.t.NUkcpK, { price: m })) : D.intl.string(D.t.zYx3Y2),
        M = A ? (w ? D.intl.format(D.t.VsKcFB, { price: m }) : D.intl.format(D.t.hJ5xER, { price: m })) : D.intl.string(D.t['8rSipK']),
        k = A
            ? w
                ? D.intl.format(D.t['jRy6/P'], {
                      price: m,
                      num: L
                  })
                : D.intl.format(D.t.tTNE8P, {
                      price: m,
                      num: L
                  })
            : D.intl.format(D.t['U+z/HB'], { num: L });
    switch (p) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
        case P.Xh.PREMIUM_YEAR_TIER_0:
            switch (R) {
                case C.O0b.CANCELED:
                    return A ? (w ? D.intl.format(D.t['USi/nZ'], { price: m }) : D.intl.format(D.t['FS//l5'], { price: m })) : D.intl.string(D.t.JshLzs);
                case C.O0b.ACCOUNT_HOLD:
                    return A ? (w ? D.intl.format(D.t['5mv+2t'], { price: m }) : D.intl.format(D.t.nkAEfX, { price: m })) : D.intl.format(D.t.SsLIXV, {});
                case C.O0b.UNPAID:
                    return D.intl.format(D.t.cmkbFB, {});
                case C.O0b.PAUSE_PENDING:
                    let j = null != f.pauseEndsAt ? o()(f.pauseEndsAt).diff(f.currentPeriodEnd, 'days') : null;
                    return null != j
                        ? D.intl.format(D.t.WUfODw, {
                              pauseDate: f.currentPeriodEnd,
                              pauseDuration: j
                          })
                        : D.intl.format(D.t.VlWufn, { pauseDate: f.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (v) return x;
                    return D.intl.format(D.t['6RTdZG'], { resumeDate: f.pauseEndsAt });
                case C.O0b.PAST_DUE:
                    return D.intl.format(D.t['d+0vws'], {
                        endDate: (0, O.vc)(eT(f).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return x;
            }
        case P.Xh.PREMIUM_MONTH_TIER_1:
        case P.Xh.PREMIUM_YEAR_TIER_1:
            switch (R) {
                case C.O0b.CANCELED:
                    return A ? (w ? D.intl.format(D.t.cXy8Bg, { price: m }) : D.intl.format(D.t['C/XsHh'], { price: m })) : D.intl.string(D.t.K6tYFR);
                case C.O0b.ACCOUNT_HOLD:
                    return A ? (w ? D.intl.format(D.t.HBkIBg, { price: m }) : D.intl.format(D.t.ZsO1S0, { price: m })) : D.intl.format(D.t['0+/WHx'], {});
                case C.O0b.UNPAID:
                    return D.intl.format(D.t.McIzws, {});
                case C.O0b.PAUSE_PENDING:
                    let U = null != f.pauseEndsAt ? o()(f.pauseEndsAt).diff(f.currentPeriodEnd, 'days') : null;
                    return null != U
                        ? D.intl.format(D.t.WUfODw, {
                              pauseDate: f.currentPeriodEnd,
                              pauseDuration: U
                          })
                        : D.intl.format(D.t.VlWufn, { pauseDate: f.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (v) return M;
                    return D.intl.format(D.t['6RTdZG'], { resumeDate: f.pauseEndsAt });
                case C.O0b.PAST_DUE:
                    return D.intl.format(D.t['d+0vws'], {
                        endDate: (0, O.vc)(eT(f).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return M;
            }
        case P.Xh.PREMIUM_MONTH_TIER_2:
        case P.Xh.PREMIUM_YEAR_TIER_2:
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (R) {
                case C.O0b.CANCELED:
                    return A
                        ? w
                            ? D.intl.format(D.t.xoFgRk, {
                                  price: m,
                                  num: L
                              })
                            : D.intl.format(D.t.nXdbKi, {
                                  price: m,
                                  num: L
                              })
                        : D.intl.format(D.t.EcSdRE, { num: L });
                case C.O0b.ACCOUNT_HOLD:
                    return A
                        ? w
                            ? D.intl.format(D.t['5C/0QE'], {
                                  price: m,
                                  num: L
                              })
                            : D.intl.format(D.t.xfYkho, {
                                  price: m,
                                  num: L
                              })
                        : D.intl.format(D.t.ivjxcn, { num: L });
                case C.O0b.UNPAID:
                    return D.intl.format(D.t['0HopYW'], { num: L });
                case C.O0b.PAUSE_PENDING:
                    let G = null != f.pauseEndsAt ? o()(f.pauseEndsAt).diff(f.currentPeriodEnd, 'days') : null;
                    return null != G
                        ? D.intl.format(D.t.WUfODw, {
                              pauseDate: f.currentPeriodEnd,
                              pauseDuration: G
                          })
                        : D.intl.format(D.t.VlWufn, { pauseDate: f.currentPeriodEnd });
                case C.O0b.PAUSED:
                    if (v) return k;
                    return D.intl.format(D.t['6RTdZG'], { resumeDate: f.pauseEndsAt });
                case C.O0b.BILLING_RETRY:
                    return D.intl.format(D.t['IlJ/HR'], { endDate: o()(f.currentPeriodStart).add(P.A5, 'days').toDate() });
                case C.O0b.PAST_DUE:
                    return D.intl.format(D.t['d+0vws'], {
                        endDate: (0, O.vc)(eT(f).expiresDate, 'LL'),
                        onClick: () => {
                            (0, l.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return E
                        ? p === P.Xh.PREMIUM_YEAR_TIER_2
                            ? D.intl.format(D.t['+qqh6u'], {
                                  percent: null != (s = null == b ? void 0 : b.percentage) ? s : P.Bo,
                                  regularPrice: T
                              })
                            : w
                              ? D.intl.formatToPlainString(D.t['3Ziutb'], {
                                    percent: null != (c = null == b ? void 0 : b.percentage) ? c : P.M_,
                                    regularPrice: T,
                                    numMonths: null != (u = null == b ? void 0 : b.duration) ? u : P.rt
                                })
                              : D.intl.formatToPlainString(D.t['G6+XOT'], {
                                    percent: null != (d = null == b ? void 0 : b.percentage) ? d : P.M_,
                                    regularPrice: T,
                                    numMonths: null != (_ = null == b ? void 0 : b.duration) ? _ : P.rt
                                })
                        : k;
            }
        default:
            throw Error('Invalid planId '.concat(p));
    }
}
function eu(e) {
    let { renewalInvoicePreview: t, subscription: n, planId: r, includePremiumGuilds: a = !1, hasDiscountApplied: o = !1, activeDiscountInfo: s, hasFractionalPremiumWithSub: l = !1 } = e,
        c = E.Z.get(r);
    return (
        i()(null != c, 'Missing plan'),
        ec({
            subscription: n,
            planId: c.id,
            price: eV(t, n, c),
            includePremiumGuilds: a,
            hasDiscountApplied: o,
            activeDiscountInfo: s,
            renewalInvoicePreview: t,
            hasFractionalPremiumWithSub: l
        })
    );
}
function ed(e) {
    let { planId: t, additionalPlans: n } = e,
        r = (0, p.Q0)(t) ? null : er(t),
        i =
            null == n
                ? void 0
                : n.find((e) => {
                      let { planId: t } = e;
                      return P.Z1.has(t);
                  }),
        a = (null == i ? void 0 : i.planId) === P.Xh.PREMIUM_MONTH_GUILD || (null == i ? void 0 : i.planId) === P.Xh.PREMIUM_YEAR_GUILD ? D.t.Pi5yMD : null,
        o = null != a ? D.intl.formatToPlainString(a, { num: null == i ? void 0 : i.quantity }) : void 0;
    if (null != r && null != o)
        return D.intl.formatToPlainString(D.t.FN5T9v, {
            premiumDescription: r,
            premiumGuildDescription: o
        });
    if (null != r) return r;
    if (null != o) return o;
    throw Error('Subscription without premium or premium guild subscription');
}
function e_(e) {
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
                        return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === P.Si.TIER_2;
                    });
                } else l = [];
            }
            s = [P.Xh.PREMIUM_YEAR_TIER_2, ...l, P.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(t));
    }
    if (void 0 !== o) {
        let e = s.indexOf(o);
        (s.splice(e, 1), s.unshift(o));
    }
    return s;
}
function ep(e) {
    let t = P.GP[e];
    if (null == t) {
        let t = Error('Unsupported plan');
        throw ((0, y.q2)(t, { tags: { planId: e } }), t);
    }
    return t.skuId;
}
function eh(e) {
    switch (e) {
        case P.p9.TIER_0:
            return P.Si.TIER_0;
        case P.p9.TIER_1:
            return P.Si.TIER_1;
        case P.p9.TIER_2:
            return P.Si.TIER_2;
    }
}
function em(e) {
    var t;
    return null == e ? B.ALL : null != (t = B[e]) ? t : [];
}
function eg(e) {
    let t = P.GP[e];
    if (null == t) throw Error('Unrecognized plan.');
    let { interval: n } = t,
        r = em(e);
    for (let e of Object.keys(P.GP)) {
        let { interval: t } = P.GP[e];
        if (n === t && r.includes(e)) return e;
    }
    return null;
}
function eE(e) {
    let t = E.Z.getPlanIdsForSkus([tP(P.Si.GUILD)]);
    i()(null != t, 'Missing guildSubscriptionPlanIds');
    let n = e.find((e) => {
        let { planId: n } = e;
        return t.includes(n);
    });
    return null != n ? n.quantity : 0;
}
let eb = new Set([P.Xh.NONE_MONTH, P.Xh.NONE_3_MONTH, P.Xh.NONE_6_MONTH, P.Xh.NONE_YEAR, P.Xh.PREMIUM_MONTH_TIER_0, P.Xh.PREMIUM_MONTH_TIER_1, P.Xh.PREMIUM_MONTH_TIER_2, P.Xh.PREMIUM_YEAR_TIER_0, P.Xh.PREMIUM_YEAR_TIER_1, P.Xh.PREMIUM_YEAR_TIER_2, P.Xh.PREMIUM_3_MONTH_TIER_2, P.Xh.PREMIUM_6_MONTH_TIER_2]);
function ey(e) {
    return eb.has(e);
}
function eO(e) {
    return P.Z1.has(e);
}
function ev(e) {
    return ey(e) || eO(e);
}
function eI(e) {
    return en(e) === P.p9.TIER_2 ? P.cb : 0;
}
function eT(e) {
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
        let t = e.isPurchasedViaApple ? P.$7 : P.Ue;
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
        let t = null == e.paymentSourceId ? P.UA : P.zp;
        return {
            days: t,
            expiresDate: o()(e.currentPeriodStart).add(t, 'days')
        };
    }
}
function eS(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      isFractionalPremiumActive: !1,
                      fetched: !0,
                      fractionalState: P.a$.NONE,
                      startsAt: o()(0),
                      endsAt: o()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        i = n
            ? (0, N.T4)(
                  t.invoiceItems
                      .filter((e) => P.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, t) => t + e, 0),
                  t.currency
              )
            : (0, N.T4)(t.total, t.currency);
    if (null != e.trialId && P.h8.includes(e.trialId) && null == e.paymentSourceId) return D.intl.format(D.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === C.O0b.CANCELED) return D.intl.format(D.t['Whp/qq'], { endDate: t.subscriptionPeriodStart });
    if (e.status === C.O0b.PAUSE_PENDING)
        return D.intl.format(D.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === C.O0b.PAUSED)
        return r.fractionalState !== P.a$.NONE
            ? D.intl.format(D.t.Q18lRE, {
                  renewalDate: r.endsAt.toDate(),
                  price: i
              })
            : null == e.pauseEndsAt
              ? n
                  ? D.intl.format(D.t.KTYQCg, {
                        planName: D.intl.string(D.t.Ipxkoq),
                        price: i
                    })
                  : D.intl.string(D.t.fMz6Li)
              : n
                ? D.intl.format(D.t.zcgtzc, {
                      planName: D.intl.string(D.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: i
                  })
                : D.intl.format(D.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    if (e.status === C.O0b.PAST_DUE) {
        var a, s;
        let t = eT(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null == (a = e.metadata) ? void 0 : a.google_grace_period_expires_date) != null && (t = o()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null == (s = e.metadata) ? void 0 : s.apple_grace_period_expires_date) != null && (t = o()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? D.intl.format(D.t.U2hb3d, {
                  endDate: t.toDate(),
                  paymentGatewayName: w.Vz[e.paymentGateway],
                  paymentSourceLink: eX(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : D.intl.format(D.t.qEIzys, {
                  endDate: t.toDate(),
                  price: i
              });
    }
    {
        if (e.status === C.O0b.BILLING_RETRY)
            return D.intl.format(D.t.EMTLOT, {
                endDate: o()(e.currentPeriodStart).add(P.A5, 'days').toDate(),
                price: i
            });
        if (e.status === C.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, T.isAndroid)()
                ? D.intl.format(D.t.dtcxw8, {
                      endDate: o()(e.currentPeriodStart).add(P.gh, 'days').toDate(),
                      paymentGatewayName: w.Vz[e.paymentGateway],
                      paymentSourceLink: eX(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : D.intl.format(D.t.EMTLOT, {
                      endDate: o()(e.currentPeriodStart).add(P.gh, 'days').toDate(),
                      price: i
                  });
        if (eP(e)) return D.intl.format(D.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === C.O0b.UNPAID) return D.intl.format(D.t.CzTKoq, { maxProcessingTimeInDays: P.Rg });
        if (e.isPurchasedExternally)
            return D.intl.format(D.t.ZlWXgY, {
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: w.Vz[e.paymentGateway],
                subscriptionManagementLink: eX(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let a = new Date(t.subscriptionPeriodStart);
        return (
            e.isBoostOnly || (a = eA(a, r.unactivatedUnits)),
            n
                ? D.intl.format(D.t.Vl3cEB, {
                      planName: D.intl.string(D.t.Ipxkoq),
                      renewalDate: a,
                      price: i
                  })
                : D.intl.format(D.t.Q18lRE, {
                      renewalDate: a,
                      price: i
                  })
        );
    }
}
function eA(e, t, n, r) {
    let i = o()(r ? void 0 : e);
    if (t.length > 0) {
        let e = tj(t);
        i = i.add(e, 'hours');
    }
    if (!r && void 0 !== n) {
        let e = o()(),
            t = n.diff(e, 'hours', !0);
        t > 0 && (i = i.add(t, 'hours'));
    }
    return i.toDate();
}
function eN(e) {
    let t = tj(e.unactivatedUnits);
    if (!(t > 0 && e.fractionalState === P.a$.NONE)) return '';
    let n = {
            days: D.t.fYmir6,
            hours: D.t['C3RO+v'],
            minutes: D.t.r77oHR
        },
        r = (0, c.eB)((0, O.TD)(0, t * v.Z.Millis.HOUR));
    return (0, O.QX)(r, n);
}
function eC(e) {
    return null != e.renewalMutations || null != e.trialEndsAt || e.status === C.O0b.PAST_DUE;
}
function eR(e) {
    let t = null;
    return (null != e.renewalMutations && (t = e.renewalMutations.planId !== e.planId ? D.intl.string(D.t['0rzJ4O']) : D.intl.string(D.t['9dLQ09'])), null != e.trialEndsAt && (t = D.intl.string(D.t.a9Mdb2)), t);
}
function eP(e) {
    return null != e.paymentSourceId && ew(e.paymentSourceId);
}
function ew(e) {
    if (null == e) return !1;
    let t = g.Z.getPaymentSource(e);
    return null != t && w.Uk.has(t.type);
}
function eD(e) {
    let { renewalMutations: t, additionalPlans: n, status: r } = e,
        i = eE(n);
    return 0 === (null != t ? eE(t.additionalPlans) : null) && 0 !== i ? C.O0b.CANCELED : r;
}
function eL(e) {
    return e.isPurchasedExternally ? e.status === C.O0b.CANCELED : eD(e) === C.O0b.CANCELED;
}
function ex(e) {
    var t, n, r;
    let { subscription: a, user: o, price: s, renewalInvoicePreview: l, fractionalPremiumInfo: c } = e,
        { planId: u, additionalPlans: d } = a,
        _ = E.Z.get(u);
    i()(null != _, 'Missing plan');
    let f = eE(d),
        p = eF(a.planId, a.paymentSourceId, a.currency, o).amount * f;
    if (null != l) {
        let e = l.invoiceItems.find((e) => P.Z1.has(e.subscriptionPlanId));
        null != e && (p = e.amount);
    }
    s = null != s ? s : (0, N.T4)(p, a.currency);
    let h = null == (r = null != (n = null == l ? void 0 : l.taxInclusive) ? n : null == (t = a.latestInvoice) ? void 0 : t.taxInclusive) || r;
    if (eL(a))
        return a.isPurchasedViaGoogle
            ? D.intl.format(D.t['3/WTrK'], { quantity: f })
            : h
              ? D.intl.format(D.t['0ozBSE'], {
                    quantity: f,
                    rate: (0, N.og)(s, _.interval, _.intervalCount)
                })
              : D.intl.format(D.t['yjsv/v'], {
                    quantity: f,
                    rate: (0, N.og)(s, _.interval, _.intervalCount)
                });
    switch (a.status) {
        case C.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t.Nlf3nZ, {
                      quantity: f,
                      boostQuantity: f
                  })
                : h
                  ? D.intl.format(D.t.oiRy7u, {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, N.og)(s, _.interval, _.intervalCount)
                    })
                  : D.intl.format(D.t['0QxOAg'], {
                        quantity: f,
                        boostQuantity: f,
                        rate: (0, N.og)(s, _.interval, _.intervalCount)
                    });
        case C.O0b.PAUSE_PENDING:
        case C.O0b.PAUSED:
            if (null != c && !c.isFractionalPremiumActive) return D.intl.string(D.t.CduWAg);
            return D.intl.format(D.t['5iud9v'], { quantity: f });
        default:
            return a.isPurchasedViaGoogle
                ? D.intl.format(D.t['5iud9v'], { quantity: f })
                : h
                  ? D.intl.format(D.t.eDwrLC, {
                        quantity: f,
                        rate: (0, N.og)(s, _.interval, _.intervalCount)
                    })
                  : D.intl.format(D.t.ijSDcH, {
                        quantity: f,
                        rate: (0, N.og)(s, _.interval, _.intervalCount)
                    });
    }
}
function eM(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = null != t ? Y(e.id, !1, r, t) : H(e.id, !1, r),
        a = (0, N.T4)(i.amount, i.currency);
    return (e.currency !== w.pK.USD && !0 === n && (a = a.concat('*')), a);
}
function ek(e, t, n) {
    let r = eM(e, t, n);
    return (0, N.og)(r, e.interval, e.intervalCount);
}
function ej(e, t) {
    let { planId: n } = e;
    if (e.status === C.O0b.CANCELED || e.status === C.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ey(t);
    });
    return null == r || (0, p.Q0)(r.subscriptionPlanId) || (null != e.renewalMutations && e.renewalMutations.planId !== e.planId) ? e.planId : r.subscriptionPlanId;
}
function eU(e, t) {
    let { status: n } = e;
    if (e.status === C.O0b.CANCELED || e.status === C.O0b.PAUSE_PENDING) return n;
    i()(null != t, 'Expected invoicePreview');
    let r = t.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return ey(t);
    });
    return ((null == r || (0, p.Q0)(r.subscriptionPlanId)) && (n = C.O0b.CANCELED), n);
}
function eG(e) {
    let { status: t, renewalMutations: n } = e;
    return t === C.O0b.CANCELED || (null != n && (0, p.Q0)(n.planId) && !e.isPurchasedExternally);
}
function eB(e) {
    return e === C.O0b.PAST_DUE || e === C.O0b.ACCOUNT_HOLD || e === C.O0b.BILLING_RETRY;
}
function eV(e, t, n) {
    let r = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return t === n.id;
        }),
        i =
            null == r
                ? Y(n.id, !1, !1, {
                      paymentSourceId: t.paymentSourceId,
                      currency: t.currency
                  }).amount
                : r.amount;
    return (0, N.og)((0, N.T4)(i, e.currency), n.interval, n.intervalCount);
}
function eF(e, t, n, r) {
    let i =
            null != t
                ? {
                      paymentSourceId: t,
                      currency: n
                  }
                : {
                      country: m.Z.ipCountryCodeWithFallback,
                      currency: n
                  },
        a = E.Z.get(e);
    if (null == a) {
        let t = Error('Unsupported plan');
        throw ((0, y.q2)(t, { tags: { planId: e } }), t);
    }
    let o = E.Z.getForSkuAndInterval(tP(P.Si.GUILD), a.interval, a.intervalCount);
    if (null == o) {
        let t = Error('Unsupported plan');
        throw ((0, y.q2)(t, { tags: { planId: e } }), t);
    }
    return Y(o.id, (0, A.I5)(r), !1, i);
}
function eZ(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
            return null != t && null != n && !r;
        })
    );
}
function eH(e, t, n) {
    let r = t.id;
    if (null != e)
        switch (r) {
            case P.Xh.PREMIUM_MONTH_TIER_0:
                return D.intl.string(D.t['0ggVqK']);
            case P.Xh.PREMIUM_YEAR_TIER_0:
                return D.intl.string(D.t['jm+ZQ0']);
            case P.Xh.PREMIUM_MONTH_TIER_1:
                return D.intl.string(D.t.uph4Jy);
            case P.Xh.PREMIUM_YEAR_TIER_1:
                return D.intl.string(D.t['D/l7Ym']);
            case P.Xh.PREMIUM_MONTH_TIER_2:
                return D.intl.string(D.t['5l1Mub']);
            case P.Xh.PREMIUM_YEAR_TIER_2:
                return D.intl.string(D.t.G0mISU);
        }
    switch (r) {
        case P.Xh.PREMIUM_MONTH_TIER_0:
            return n ? D.intl.string(D.t.cRCCJy) : D.intl.string(D.t['/G3aKy']);
        case P.Xh.PREMIUM_YEAR_TIER_0:
            return n ? D.intl.string(D.t.cRCCJy) : D.intl.string(D.t['2eQpsL']);
        case P.Xh.PREMIUM_MONTH_TIER_1:
            return n ? D.intl.string(D.t.cRCCJy) : D.intl.string(D.t.gueLg4);
        case P.Xh.PREMIUM_YEAR_TIER_1:
            return n ? D.intl.string(D.t.cRCCJy) : D.intl.string(D.t['MhH/vb']);
        case P.Xh.PREMIUM_MONTH_TIER_2:
            return n ? D.intl.string(D.t.cRCCJy) : D.intl.string(D.t.LQVQIi);
        case P.Xh.PREMIUM_YEAR_TIER_2:
            return n ? D.intl.string(D.t.cRCCJy) : D.intl.string(D.t['0nfg19']);
        case P.Xh.PREMIUM_3_MONTH_TIER_2:
        case P.Xh.PREMIUM_6_MONTH_TIER_2:
            return D.intl.formatToPlainString(D.t.BCD4fX, { intervalCount: t.intervalCount });
        case P.Xh.NONE_MONTH:
        case P.Xh.NONE_YEAR:
        case P.Xh.NONE_3_MONTH:
        case P.Xh.NONE_6_MONTH:
        case P.Xh.PREMIUM_MONTH_GUILD:
        case P.Xh.PREMIUM_YEAR_GUILD:
        case P.Xh.PREMIUM_3_MONTH_GUILD:
        case P.Xh.PREMIUM_6_MONTH_GUILD:
            return D.intl.string(D.t.eUEeCg);
    }
    let i = Error('User is purchasing an unsupported plan');
    throw ((0, y.q2)(i, { tags: { planId: r } }), i);
}
function eY(e) {
    let t = e.invoiceItems[0].subscriptionPlanId,
        n = E.Z.get(t);
    return (
        i()(null != n, 'Missing subscriptionPlan'),
        {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    );
}
function eW(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? D.intl.formatToPlainString(D.t.fRNBRU, { weeks: n / 7 }) : D.intl.formatToPlainString(D.t.EIpHEh, { weeks: n / 7 });
            return r ? D.intl.formatToPlainString(D.t['6Cdzo6'], { days: n }) : D.intl.formatToPlainString(D.t['kbBj/v'], { days: n });
        case P.rV.MONTH:
            return r ? D.intl.formatToPlainString(D.t.x5Mgxc, { months: n }) : D.intl.formatToPlainString(D.t['4SEnCQ'], { months: n });
        case P.rV.YEAR:
            return r ? D.intl.formatToPlainString(D.t['h+63ys'], { years: n }) : D.intl.formatToPlainString(D.t['9DFiHh'], { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eK(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1 } = e,
        { enabled: r, bucket: i } = f.L.getConfig({ location: 'formatTrialCtaIntervalDuration' });
    if (r) {
        if (i === f.R.TREATMENT_1) {
            let e = H(P.Xh.PREMIUM_MONTH_TIER_2).currency,
                r = (0, N.T4)(0, e, { maximumFractionDigits: 0 });
            switch (t) {
                case P.rV.DAY:
                    if (n >= 7 && n % 7 == 0)
                        return D.intl.formatToPlainString(D.t.C6i5Ji, {
                            weeks: n / 7,
                            price: r
                        });
                    return D.intl.formatToPlainString(D.t.cR9if3, {
                        days: n,
                        price: r
                    });
                case P.rV.MONTH:
                    return D.intl.formatToPlainString(D.t['8FZfNj'], {
                        months: n,
                        price: r
                    });
                case P.rV.YEAR:
                    return D.intl.formatToPlainString(D.t.xzAcSU, {
                        years: n,
                        price: r
                    });
                default:
                    throw Error('Unsupported interval duration.');
            }
        } else if (i === f.R.TREATMENT_2)
            switch (t) {
                case P.rV.DAY:
                    if (n >= 7 && n % 7 == 0) return D.intl.formatToPlainString(D.t['3GVMLi'], { weeks: n / 7 });
                    return D.intl.formatToPlainString(D.t.kLnKcX, { days: n });
                case P.rV.MONTH:
                    return D.intl.formatToPlainString(D.t.azyIQ0, { months: n });
                case P.rV.YEAR:
                    return D.intl.formatToPlainString(D.t.sqDHKC, { years: n });
                default:
                    throw Error('Unsupported interval duration.');
            }
    }
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0) return D.intl.formatToPlainString(D.t['8awlzM'], { weeks: n / 7 });
            return D.intl.formatToPlainString(D.t.ZsgnLC, { days: n });
        case P.rV.MONTH:
            return D.intl.formatToPlainString(D.t.Y0HCVV, { months: n });
        case P.rV.YEAR:
            return D.intl.formatToPlainString(D.t.ns1zkZ, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function ez(e) {
    if (null != e && null != e.subscription_trial) {
        let t = e.subscription_trial;
        return eK({
            intervalType: t.interval,
            intervalCount: t.interval_count
        });
    }
    return null;
}
function eq(e) {
    let { intervalType: t = P.rV.MONTH, intervalCount: n = 1, capitalize: r = !1 } = e;
    switch (t) {
        case P.rV.DAY:
            if (n >= 7 && n % 7 == 0) return r ? D.intl.formatToPlainString(D.t.iVZYys, { weeks: n / 7 }) : D.intl.formatToPlainString(D.t.EmoBDw, { weeks: n / 7 });
            return r ? D.intl.formatToPlainString(D.t.jzH70d, { days: n }) : D.intl.formatToPlainString(D.t.k2UNz8, { days: n });
        case P.rV.MONTH:
            return r ? D.intl.formatToPlainString(D.t.erUSmJ, { months: n }) : D.intl.formatToPlainString(D.t.kridzM, { months: n });
        case P.rV.YEAR:
            return r ? D.intl.formatToPlainString(D.t.IfYQVF, { years: n }) : D.intl.formatToPlainString(D.t.PClsr6, { years: n });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eX(e, t) {
    switch (e) {
        case C.gg$.APPLE_PARTNER:
        case C.gg$.APPLE:
            return j[t];
        case C.gg$.GOOGLE:
            return U[t];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eQ(e, t) {
    return (0, A.I5)(e) || eB(null == t ? void 0 : t.status);
}
function eJ(e, t) {
    var n, r;
    let i = [],
        a = (null != (r = null == (n = e.renewalMutations) ? void 0 : n.items) ? r : e.items).find((e) => P.dJ.has(e.planId));
    return (
        null != a && i.push(a),
        i.push(...t),
        i.map((t) => {
            for (let n of e.items) if (t.planId === n.planId) return x({}, n, t);
            return t;
        })
    );
}
function e$(e) {
    return e.filter((e) => !P.dJ.has(e.planId));
}
function e0(e, t, n, r) {
    var a, o;
    i()(r.has(t), 'Expected planId in group');
    let s = !1,
        l = (null != (o = null == (a = e.renewalMutations) ? void 0 : a.items) ? o : e.items).map((e) =>
            r.has(e.planId)
                ? ((s = !0),
                  k(x({}, e), {
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
        (null != i && (r.id = i.id), l.push(r));
    }
    return l.filter((e) => 0 !== e.quantity);
}
function e1(e, t) {
    return e0(e, t, 1, P.dJ);
}
function e2(e, t, n) {
    return e0(e, n, t, P.Z1);
}
function e3(e) {
    var t;
    let n = null != (t = e.find((e) => !('id' in e))) ? t : e.find((e) => P.dJ.has(e.planId));
    if (null != n) {
        let t = E.Z.get(n.planId);
        (i()(null != t, 'Missing plan'),
            (e = e.map((e) => {
                if (e === n) return e;
                let r = E.Z.get(e.planId);
                i()(null != r, 'Missing plan');
                let a = E.Z.getForSkuAndInterval(r.skuId, t.interval, t.intervalCount);
                return (i()(null != a, 'Missing planForInterval'), k(x({}, e), { planId: a.id }));
            })));
    }
    return e;
}
function e4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        n = P.a1[e].fileSize;
    return (0, I.BU)(n / 1024, {
        useKibibytes: !0,
        useSpace: t.useSpace
    });
}
function e5(e) {
    return null == e ? null : e.items.find((e) => P.Z1.has(e.planId));
}
function e6(e) {
    return null != e && null == Z(e) && null != e5(e);
}
function e8(e) {
    let t = null != e ? Z(e) : null;
    return null != t ? ep(t.planId) : null;
}
function e7(e) {
    if (null != e) {
        let t = Z(e);
        if (null != t) return en(t.planId);
    }
}
function e9(e) {
    if (null != e && null != e.renewalMutations) {
        let t = Z(e.renewalMutations);
        if (null != t) return en(t.planId);
    }
}
function te(e) {
    switch (e) {
        case P.p9.TIER_0:
            return R.Rj.PREMIUM_TIER_0;
        case P.p9.TIER_1:
            return R.Rj.PREMIUM_TIER_1;
        case P.p9.TIER_2:
            return R.Rj.PREMIUM_TIER_2;
    }
}
let tt = (e) => null != e && Date.now() - e.createdAt.getTime() < V;
function tn(e) {
    return (0, _.ks)(_.g_, e);
}
function tr(e) {
    return (0, _.ks)(_.m_, e);
}
function ti(e) {
    return (0, _.ks)(_._y, e);
}
function ta(e) {
    return (0, _.ks)(_.tj, e);
}
function to(e) {
    return (0, _.ks)(_.EQ, e);
}
function ts(e) {
    return (0, _.ks)(_.Pl, e);
}
function tl(e) {
    return (0, _.ks)(_.wN, e);
}
function tc(e) {
    return (0, _.ks)(_._G, e);
}
function tu(e, t) {
    return (0, _.ks)(_.j4, e, t);
}
function td(e) {
    return (0, _.ks)(_.lX, e);
}
function t_(e) {
    return (0, _.ks)(_.Uw, e);
}
function tf(e) {
    return (0, _.ks)(_.zm, e);
}
function tp(e) {
    return (0, _.ks)(_.zZ, e);
}
function th(e) {
    return (0, _.ks)(_.do, e);
}
function tm(e) {
    return (0, _.ks)(_.ZE, e);
}
function tg(e) {
    return (0, _.ks)(_.Ej, e);
}
function tE(e) {
    return (0, _.ks)(_.Ct, e);
}
function tb(e) {
    return (0, _.ks)(_.O1, e);
}
function ty(e) {
    return (0, _.ks)(_.uw, e);
}
function tO(e, t) {
    return 'high' === e ? (0, _.ks)(_.O8, t) : 'mid' === e && (0, _.ks)(_.g7, t);
}
function tv(e, t) {
    return (0, _.ks)(_.$0, e, t);
}
function tI(e) {
    return (0, _.ks)(_.ME, e);
}
function tT(e) {
    return (0, _.ks)(_.AN, e);
}
function tS(e) {
    return (0, _.ks)(_._O, e);
}
function tA(e) {
    return (0, _.ks)(_.qH, e);
}
function tN(e) {
    return (0, _.ks)(_.hs, e);
}
function tC(e) {
    return (0, _.ks)(_.DU, e);
}
function tR(e, t) {
    let n = (0, N.T4)(e.amount, e.currency),
        r = et(t);
    return ''.concat(n, '/').concat(r);
}
function tP(e) {
    return e;
}
function tw(e) {
    return 'isNitroLocked' in e;
}
function tD() {
    let e = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    return (0, A.M5)(e, P.p9.TIER_2);
}
function tL(e) {
    return null != e && P.OT.includes(e) ? 1 : 2;
}
function tx(e) {
    return e === P.Rt ? P.FL : P.ff;
}
function tM(e) {
    if (e === P.rV.YEAR) return D.intl.string(D.t.tfqrho);
    if (e === P.rV.MONTH) return D.intl.string(D.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tk(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tj(e) {
    return tU(e.map((e) => e.skuId));
}
function tU(e) {
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
function tG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (e.interval !== P.rV.YEAR) return;
    let r = P.IW[e.skuId];
    if (null == r) return;
    let i = Y(r, !1, t, n),
        a = Y(e.id, !1, t, n);
    if (0 !== i.amount) return Math.floor(100 * (1 - a.amount / (12 * i.amount)));
}
let tB = Object.freeze({
    isNewUser: tt,
    isPremiumAtLeast: A.yd,
    isPremium: A.I5,
    isPremiumExactly: A.M5,
    isPremiumEligible: tk,
    getPrice: Y,
    getDefaultPrice: H,
    getInterval: J,
    getIntervalString: ee,
    getIntervalStringAsNoun: et,
    getPremiumType: en,
    getDisplayName: er,
    getDisplayPremiumType: es,
    getPremiumPlanOptions: ef,
    getUpgradeEligibilities: em,
    getReverseTrialWeeks: tL,
    formatInterval: tM,
    getPlanDescription: ec,
    isPremiumSku: e_,
    getClosestUpgrade: eg,
    getIntervalMonths: eo,
    getUserMaxFileSize: S.h,
    getSkuIdForPlan: ep,
    getSkuIdForPremiumType: eh,
    getNumIncludedPremiumGuildSubscriptionSlots: eI,
    getBillingInformationString: eS,
    extendDateWithUnconsumedFractionalPremium: eA,
    getUnactivatedFractionalPremiumDurationString: eN,
    isSwitchingPlansDisabled: eC,
    getSwitchingPlansDisabledMessage: eR,
    isNoneSubscription: p.Q0,
    getPlanIdFromInvoice: ej,
    getStatusFromInvoice: eU,
    isBaseSubscriptionCanceled: eG,
    getPremiumGuildIntervalPrice: eF,
    hasAccountCredit: eZ,
    getBillingReviewSubheader: eH,
    getIntervalForInvoice: eY,
    getPremiumPlanItem: Z,
    getGuildBoostPlanItem: e5,
    isBoostOnlySubscription: e6,
    getPremiumSkuIdForSubscription: e8,
    getPremiumTypeFromSubscription: e7,
    getPremiumTypeFromSubscriptionRenewalMutations: e9,
    getPremiumGradientColor: te,
    getUnactivatedFractionalPremiumHours: tj,
    castPremiumSubscriptionAsSkuId: tP,
    calculateDiscountPercentageForYearlyPlan: tG,
    canUseAnimatedEmojis: tn,
    canUseEmojisEverywhere: tr,
    canUseSoundboardEverywhere: ti,
    canUseCustomCallSounds: ta,
    canUploadLargeFiles: to,
    canUseBadges: ts,
    canUseHighVideoUploadQuality: tl,
    canEditDiscriminator: tc,
    hasBoostDiscount: tu,
    canUseAnimatedAvatar: td,
    canUseFancyVoiceChannelReactions: t_,
    canInstallPremiumApplications: tf,
    canUseIncreasedMessageLength: tp,
    canUseIncreasedGuildCap: th,
    canRedeemPremiumPerks: tm,
    canUsePremiumProfileCustomization: tg,
    canUsePremiumAppIcons: tE,
    canUsePremiumGuildMemberProfile: tb,
    canUseClientThemes: ty,
    canStreamQuality: tO,
    hasFreeBoosts: tv,
    canUseCustomStickersEverywhere: tI,
    canUseCustomBackgrounds: tT,
    canUseCollectibles: tS,
    canUseCustomNotificationSounds: tA,
    canUsePremiumVoiceFilters: tN,
    canUseChatWallpapers: tC,
    formatPriceString: tR,
    StreamQuality: F
});
