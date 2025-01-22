r.d(n, {
    Af: function () {
        return Y;
    },
    Am: function () {
        return eC;
    },
    Ap: function () {
        return eL;
    },
    CY: function () {
        return W;
    },
    Gf: function () {
        return en;
    },
    I5: function () {
        return w.I5;
    },
    JE: function () {
        return eQ;
    },
    JP: function () {
        return J;
    },
    L7: function () {
        return $;
    },
    M5: function () {
        return w.M5;
    },
    MY: function () {
        return eJ;
    },
    N1: function () {
        return eN;
    },
    PK: function () {
        return ek;
    },
    PV: function () {
        return eb;
    },
    Px: function () {
        return eo;
    },
    Qo: function () {
        return eX;
    },
    Rd: function () {
        return et;
    },
    Rt: function () {
        return eK;
    },
    T4: function () {
        return q;
    },
    U2: function () {
        return a;
    },
    Ue: function () {
        return e$;
    },
    V7: function () {
        return ef;
    },
    W_: function () {
        return eH;
    },
    Wz: function () {
        return tO;
    },
    XK: function () {
        return e1;
    },
    Z8: function () {
        return eT;
    },
    Zx: function () {
        return e2;
    },
    _O: function () {
        return tD;
    },
    a5: function () {
        return eW;
    },
    aS: function () {
        return K;
    },
    al: function () {
        return e0;
    },
    aq: function () {
        return ei;
    },
    bt: function () {
        return eP;
    },
    dn: function () {
        return eY;
    },
    eP: function () {
        return ee;
    },
    fr: function () {
        return ez;
    },
    gB: function () {
        return e3;
    },
    gq: function () {
        return es;
    },
    gy: function () {
        return eM;
    },
    he: function () {
        return e8;
    },
    if: function () {
        return eq;
    },
    jP: function () {
        return er;
    },
    k5: function () {
        return e7;
    },
    lY: function () {
        return eS;
    },
    qV: function () {
        return eu;
    },
    u0: function () {
        return tL;
    },
    uV: function () {
        return eg;
    },
    uZ: function () {
        return eI;
    },
    v6: function () {
        return ew;
    },
    v9: function () {
        return e4;
    },
    xG: function () {
        return tM;
    },
    yd: function () {
        return w.yd;
    },
    zL: function () {
        return ec;
    },
    zV: function () {
        return eF;
    }
});
var i,
    a,
    s = r(411104);
var o = r(47120);
var l = r(733860);
var u = r(724458);
var c = r(653041);
var d = r(512722),
    f = r.n(d),
    _ = r(913527),
    h = r.n(_),
    p = r(848246);
r(442837);
var m = r(782568),
    g = r(710845),
    E = r(114064),
    v = r(803905),
    I = r(439017),
    T = r(301766),
    b = r(594174),
    y = r(351402),
    S = r(853872),
    A = r(509545),
    N = r(78839),
    C = r(122289),
    R = r(55935),
    O = r(70956),
    D = r(424218),
    L = r(358085),
    x = r(380684),
    w = r(111361),
    P = r(937615),
    M = r(981631),
    k = r(334431),
    U = r(474936),
    B = r(231338),
    G = r(388032);
let F = {
        PAYMENT_SOURCE_MANAGEMENT: 'https://support.apple.com/HT201266',
        BILLING_HISTORY: 'https://support.apple.com/HT201266',
        SUBSCRIPTION_MANAGEMENT: 'https://support.apple.com/HT202039'
    },
    Z = {
        SUBSCRIPTION_MANAGEMENT: 'https://play.google.com/store/account/subscriptions',
        PAYMENT_SOURCE_MANAGEMENT: 'https://play.google.com/store/paymentmethods',
        BILLING_HISTORY: 'https://play.google.com/store/account/orderhistory'
    },
    V = new g.Z('PremiumUtils.tsx'),
    j = {
        [U.Xh.NONE_MONTH]: [U.Xh.NONE_YEAR, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
        [U.Xh.NONE_YEAR]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
        [U.Xh.PREMIUM_MONTH_TIER_0]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_YEAR_TIER_0],
        [U.Xh.PREMIUM_YEAR_TIER_0]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1],
        [U.Xh.PREMIUM_MONTH_TIER_1]: [U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1],
        [U.Xh.PREMIUM_YEAR_TIER_1]: [U.Xh.PREMIUM_YEAR_TIER_2],
        [U.Xh.PREMIUM_MONTH_TIER_2]: [U.Xh.PREMIUM_YEAR_TIER_2],
        [U.Xh.PREMIUM_YEAR_TIER_2]: [],
        ALL: [U.Xh.NONE_MONTH, U.Xh.NONE_YEAR, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_MONTH_TIER_0]
    },
    H = 2592000000;
!(function (e) {
    (e.BUNDLE = 'bundle'), (e.TIER_0 = 'tier_0'), (e.TIER_1 = 'tier_1'), (e.TIER_2 = 'tier_2'), (e.PREMIUM_GUILD = 'premium_guild');
})(i || (i = {})),
    !(function (e) {
        (e.MID = 'mid'), (e.HIGH = 'high');
    })(a || (a = {}));
function Y(e) {
    return e.items.find((e) => U.dJ.has(e.planId));
}
function W(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = null !== (n = S.Z.defaultPaymentSourceId) && void 0 !== n ? n : void 0,
        s = N.ZP.getPremiumTypeSubscription();
    return null != s && null != s.paymentSourceId && (a = s.paymentSourceId), K(e, r, i, { paymentSourceId: a });
}
function K(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        { paymentSourceId: a, currency: s } = i;
    if (null != A.Z.get(e)) {
        let i = M.tuJ.DEFAULT;
        r ? (i = M.tuJ.GIFT) : n && (i = M.tuJ.PREMIUM_TIER_1);
        let o = Q(e, {
            paymentSourceId: a,
            purchaseType: i,
            currency: s
        });
        if (null == o) {
            let n = Error("Couldn't find price");
            throw (
                ((0, C.q2)(n, {
                    extra: { paymentSourceId: a },
                    tags: {
                        purchaseType: i.toString(),
                        planId: e,
                        currency: null != s ? s : 'unknown'
                    }
                }),
                n)
            );
        }
        return o;
    }
    let o = Error('Plan not found');
    throw (
        ((0, C.q2)(o, {
            tags: {
                planId: e,
                currency: null != s ? s : 'unknown'
            },
            extra: {
                ...i,
                isGift: r
            }
        }),
        o)
    );
}
function z(e, n) {
    let r = A.Z.get(e);
    if (null == r) {
        let r = Error('Plan not found');
        throw (
            ((0, C.q2)(r, {
                tags: {
                    planId: e,
                    purchaseType: n.toString()
                }
            }),
            r)
        );
    }
    if (null == r.prices) throw Error('No prices returned for '.concat(e, ', is your user in the experiment?'));
    let i = r.prices[n];
    if (null == i) throw (V.info('Purchase types: '.concat(JSON.stringify(Object.keys(r.prices)))), Error('No prices returned for purchase type '.concat(n, ' for plan ').concat(e)));
    return i;
}
function q(e) {
    let { paymentSourceId: n, purchaseType: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: M.tuJ.DEFAULT },
        i = z(e, r);
    if (null != n) {
        let a = i.paymentSourcePrices[n];
        if (null == a) {
            V.info('Payment sources IDs: '.concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), V.info('prices: '.concat(a));
            let s = Error('Missing prices for payment source on subscription plan');
            (0, C.q2)(s, {
                extra: { paymentSourceId: n },
                tags: {
                    purchaseType: r.toString(),
                    planId: e
                }
            });
        } else if (0 !== a.length) return a;
    }
    if (null == i.countryPrices.prices) {
        V.info('countryPrices: '.concat(JSON.stringify(i.countryPrices)));
        let n = Error('Missing prices for country');
        throw (
            ((0, C.q2)(n, {
                tags: {
                    countryCode: i.countryPrices.countryCode,
                    planId: e
                }
            }),
            n)
        );
    }
    return i.countryPrices.prices;
}
function Q(e) {
    let { paymentSourceId: n, purchaseType: r, currency: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { purchaseType: M.tuJ.DEFAULT },
        a = q(e, {
            paymentSourceId: n,
            purchaseType: r
        });
    return (0 === a.length && V.warn('No prices found for planId: '.concat(e, ', paymentSourceId: ').concat(n, ', purchaseType: ').concat(r)), null != i) ? a.find((e) => e.currency === i) : a[0];
}
function X(e) {
    let n = U.GP[e];
    if (null != n)
        return {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        };
    let r = Error('Unsupported plan');
    throw ((0, C.q2)(r, { tags: { planId: e } }), r);
}
function J(e) {
    switch (e) {
        case U.EA.MONTH:
            return G.intl.string(G.t.FPybU1);
        case U.EA.YEAR:
            return G.intl.string(G.t.tfqrho);
        case U.EA.DAY:
        case U.EA.WEEK:
        default:
            throw Error('Unexpected interval');
    }
}
function $(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : U.p9.TIER_2;
    if (n || r)
        switch (e) {
            case U.rV.MONTH:
                let o = G.intl.formatToPlainString(s === U.p9.TIER_0 ? G.t.NPKsLy : G.t.poEovb, { timeInterval: G.intl.string(G.t.FPybU1) });
                return a ? o : G.intl.string(G.t.Mh9bTk);
            case U.rV.YEAR:
                let l = G.intl.formatToPlainString(s === U.p9.TIER_0 ? G.t.NPKsLy : G.t.poEovb, { timeInterval: G.intl.string(G.t.tfqrho) });
                return a ? l : G.intl.string(G.t.DRgqMj);
            default:
                throw Error('Unexpected interval');
        }
    switch (e) {
        case U.rV.MONTH:
            if (1 !== i) return G.intl.formatToPlainString(G.t['0UlZnJ'], { intervalCount: i });
            return G.intl.string(G.t['DKzs9/']);
        case U.rV.YEAR:
            return G.intl.string(G.t['/Q4HRE']);
        default:
            throw Error('Unexpected interval');
    }
}
function ee(e) {
    switch (e) {
        case U.rV.MONTH:
            return G.intl.string(G.t.FPybU1);
        case U.rV.YEAR:
            return G.intl.string(G.t.tfqrho);
        default:
            throw Error('Unexpected interval');
    }
}
function et(e) {
    let n = U.GP[e];
    if (null != n) return n.premiumType;
    let r = Error('Unsupported plan');
    throw ((0, C.q2)(r, { tags: { planId: e } }), r);
}
function en(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    switch (e) {
        case U.Xh.PREMIUM_MONTH_TIER_0:
            return n ? G.intl.format(G.t.TZXHNj, { duration: i }) : r ? G.intl.string(G.t['81iAgo']) : G.intl.string(G.t['0efVPz']);
        case U.Xh.PREMIUM_YEAR_TIER_0:
            return n ? G.intl.format(G.t.eqRhCw, { duration: i }) : r ? G.intl.string(G.t.UvzqY2) : G.intl.string(G.t.eoVuBg);
        case U.Xh.PREMIUM_MONTH_TIER_1:
            return r ? G.intl.string(G.t['g/dH5u']) : G.intl.string(G.t['7O6qSk']);
        case U.Xh.PREMIUM_YEAR_TIER_1:
            return r ? G.intl.string(G.t.pdZJam) : G.intl.string(G.t.Md5xbm);
        case U.Xh.PREMIUM_MONTH_TIER_2:
            return n ? G.intl.format(G.t.aI6QX1, { duration: i }) : r ? G.intl.string(G.t.SmVbHR) : G.intl.string(G.t.FKYNCw);
        case U.Xh.PREMIUM_YEAR_TIER_2:
            return n ? G.intl.format(G.t['1wBcPj'], { duration: i }) : r ? G.intl.string(G.t.JIq4Oz) : G.intl.string(G.t['cfu/5e']);
        case U.Xh.PREMIUM_3_MONTH_TIER_2:
            return G.intl.string(G.t.wCbINj);
        case U.Xh.PREMIUM_6_MONTH_TIER_2:
            return G.intl.string(G.t['e3/Ara']);
        case U.Xh.PREMIUM_MONTH_GUILD:
            return r ? G.intl.string(G.t['6ZR3Bw']) : G.intl.string(G.t.h80cx8);
        case U.Xh.PREMIUM_YEAR_GUILD:
            return r ? G.intl.string(G.t.YDpAzc) : G.intl.string(G.t.ZHkls7);
        case U.Xh.PREMIUM_3_MONTH_GUILD:
            return G.intl.string(G.t.EZHHBw);
        case U.Xh.PREMIUM_6_MONTH_GUILD:
            return G.intl.string(G.t.X2KDOz);
        case U.Xh.PREMIUM_MONTH_LEGACY:
            return G.intl.string(G.t['PD6k7+']);
        case U.Xh.PREMIUM_YEAR_LEGACY:
            return G.intl.string(G.t.LtJgTE);
    }
    let a = Error('Unsupported plan');
    throw ((0, C.q2)(a, { tags: { planId: e } }), a);
}
function er(e) {
    switch (e) {
        case U.Si.TIER_0:
            return G.intl.string(G.t['t9uG/v']);
        case U.Si.TIER_1:
            return G.intl.string(G.t['FSOz7+']);
        case U.Si.TIER_2:
            return G.intl.string(G.t['lG6a5+']);
    }
    let n = Error('Unsupported sku');
    throw ((0, C.q2)(n, { tags: { skuId: e } }), n);
}
function ei(e) {
    switch (e) {
        case U.Xh.PREMIUM_MONTH_TIER_0:
        case U.Xh.PREMIUM_YEAR_TIER_0:
            return G.intl.string(G.t['t9uG/v']);
        case U.Xh.PREMIUM_MONTH_TIER_1:
        case U.Xh.PREMIUM_YEAR_TIER_1:
            return G.intl.string(G.t['FSOz7+']);
        case U.Xh.PREMIUM_MONTH_TIER_2:
        case U.Xh.PREMIUM_3_MONTH_TIER_2:
        case U.Xh.PREMIUM_6_MONTH_TIER_2:
        case U.Xh.PREMIUM_YEAR_TIER_2:
            return G.intl.string(G.t['lG6a5+']);
    }
    let n = Error('Unsupported plan');
    throw ((0, C.q2)(n, { tags: { planId: e } }), n);
}
function ea(e, n) {
    if (e === U.rV.MONTH) return n;
    if (e === U.rV.YEAR) return 12 * n;
    throw Error(''.concat(e, ' interval subscription period not implemented'));
}
function es(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case U.Xh.PREMIUM_MONTH_TIER_0:
        case U.Xh.PREMIUM_YEAR_TIER_0:
            return n ? 'Basic' : 'Nitro Basic';
        case U.Xh.PREMIUM_MONTH_TIER_1:
        case U.Xh.PREMIUM_YEAR_TIER_1:
            return n ? 'Classic' : 'Nitro Classic';
        case U.Xh.PREMIUM_MONTH_TIER_2:
        case U.Xh.PREMIUM_YEAR_TIER_2:
        case U.Xh.PREMIUM_3_MONTH_TIER_2:
        case U.Xh.PREMIUM_6_MONTH_TIER_2:
            return 'Nitro';
    }
    let r = Error('Unsupported plan');
    throw ((0, C.q2)(r, { tags: { planId: e } }), r);
}
function eo(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case U.p9.TIER_0:
            return n ? 'Basic' : G.intl.string(G.t['t9uG/v']);
        case U.p9.TIER_1:
            return n ? 'Classic' : G.intl.string(G.t['FSOz7+']);
        case U.p9.TIER_2:
            return G.intl.string(G.t['lG6a5+']);
    }
}
function el(e) {
    var n, r, i, a, s, o, l, u, c, d;
    let { subscription: f, planId: _, price: p, includePremiumGuilds: g, hasDiscountApplied: E, activeDiscountInfo: v, renewalInvoicePreview: I, hasFractionalPremiumWithSub: T } = e,
        y = U.GP[_],
        S = tR(W(y.id), y.interval),
        A = eG(f) || (null == f.paymentSourceId && !f.isPurchasedExternally && !(null === (n = b.default.getCurrentUser()) || void 0 === n ? void 0 : n.hasFreePremium())),
        N = null != p && null == f.paymentGateway,
        C = f.status === M.O0b.UNPAID && null !== f.latestInvoice && (null === (r = f.latestInvoice) || void 0 === r ? void 0 : r.status) === M.hUK.OPEN,
        O = A ? M.O0b.CANCELED : C ? M.O0b.UNPAID : f.status,
        D = null === (s = null !== (a = null == I ? void 0 : I.taxInclusive) && void 0 !== a ? a : null === (i = f.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === s || s,
        L = U.cb + (g ? eg(f.additionalPlans) : 0),
        x = N ? (D ? G.intl.format(G.t['cd+hqK'], { price: p }) : G.intl.format(G.t.NUkcpK, { price: p })) : G.intl.string(G.t.zYx3Y2),
        w = N ? (D ? G.intl.format(G.t.VsKcFB, { price: p }) : G.intl.format(G.t.hJ5xER, { price: p })) : G.intl.string(G.t['8rSipK']),
        P = N
            ? D
                ? G.intl.format(G.t['jRy6/P'], {
                      price: p,
                      num: L
                  })
                : G.intl.format(G.t.tTNE8P, {
                      price: p,
                      num: L
                  })
            : G.intl.format(G.t['U+z/HB'], { num: L });
    switch (_) {
        case U.Xh.PREMIUM_MONTH_TIER_0:
        case U.Xh.PREMIUM_YEAR_TIER_0:
            switch (O) {
                case M.O0b.CANCELED:
                    return N ? (D ? G.intl.format(G.t['USi/nZ'], { price: p }) : G.intl.format(G.t['FS//l5'], { price: p })) : G.intl.string(G.t.JshLzs);
                case M.O0b.ACCOUNT_HOLD:
                    return N ? (D ? G.intl.format(G.t['5mv+2t'], { price: p }) : G.intl.format(G.t.nkAEfX, { price: p })) : G.intl.format(G.t.SsLIXV, {});
                case M.O0b.UNPAID:
                    return G.intl.format(G.t.cmkbFB, {});
                case M.O0b.PAUSE_PENDING:
                    let k = null != f.pauseEndsAt ? h()(f.pauseEndsAt).diff(f.currentPeriodEnd, 'days') : null;
                    return null != k
                        ? G.intl.format(G.t.WUfODw, {
                              pauseDate: f.currentPeriodEnd,
                              pauseDuration: k
                          })
                        : G.intl.format(G.t.VlWufn, { pauseDate: f.currentPeriodEnd });
                case M.O0b.PAUSED:
                    if (T) return x;
                    return G.intl.format(G.t['6RTdZG'], { resumeDate: f.pauseEndsAt });
                case M.O0b.PAST_DUE:
                    return G.intl.format(G.t['d+0vws'], {
                        endDate: (0, R.vc)(eS(f).expiresDate, 'LL'),
                        onClick: () => {
                            (0, m.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return x;
            }
        case U.Xh.PREMIUM_MONTH_TIER_1:
        case U.Xh.PREMIUM_YEAR_TIER_1:
            switch (O) {
                case M.O0b.CANCELED:
                    return N ? (D ? G.intl.format(G.t.cXy8Bg, { price: p }) : G.intl.format(G.t['C/XsHh'], { price: p })) : G.intl.string(G.t.K6tYFR);
                case M.O0b.ACCOUNT_HOLD:
                    return N ? (D ? G.intl.format(G.t.HBkIBg, { price: p }) : G.intl.format(G.t.ZsO1S0, { price: p })) : G.intl.format(G.t['0+/WHx'], {});
                case M.O0b.UNPAID:
                    return G.intl.format(G.t.McIzws, {});
                case M.O0b.PAUSE_PENDING:
                    let B = null != f.pauseEndsAt ? h()(f.pauseEndsAt).diff(f.currentPeriodEnd, 'days') : null;
                    return null != B
                        ? G.intl.format(G.t.WUfODw, {
                              pauseDate: f.currentPeriodEnd,
                              pauseDuration: B
                          })
                        : G.intl.format(G.t.VlWufn, { pauseDate: f.currentPeriodEnd });
                case M.O0b.PAUSED:
                    if (T) return w;
                    return G.intl.format(G.t['6RTdZG'], { resumeDate: f.pauseEndsAt });
                case M.O0b.PAST_DUE:
                    return G.intl.format(G.t['d+0vws'], {
                        endDate: (0, R.vc)(eS(f).expiresDate, 'LL'),
                        onClick: () => {
                            (0, m.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return w;
            }
        case U.Xh.PREMIUM_MONTH_TIER_2:
        case U.Xh.PREMIUM_YEAR_TIER_2:
        case U.Xh.PREMIUM_3_MONTH_TIER_2:
        case U.Xh.PREMIUM_6_MONTH_TIER_2:
            switch (O) {
                case M.O0b.CANCELED:
                    return N
                        ? D
                            ? G.intl.format(G.t.xoFgRk, {
                                  price: p,
                                  num: L
                              })
                            : G.intl.format(G.t.nXdbKi, {
                                  price: p,
                                  num: L
                              })
                        : G.intl.format(G.t.EcSdRE, { num: L });
                case M.O0b.ACCOUNT_HOLD:
                    return N
                        ? D
                            ? G.intl.format(G.t['5C/0QE'], {
                                  price: p,
                                  num: L
                              })
                            : G.intl.format(G.t.xfYkho, {
                                  price: p,
                                  num: L
                              })
                        : G.intl.format(G.t.ivjxcn, { num: L });
                case M.O0b.UNPAID:
                    return G.intl.format(G.t['0HopYW'], { num: L });
                case M.O0b.PAUSE_PENDING:
                    let F = null != f.pauseEndsAt ? h()(f.pauseEndsAt).diff(f.currentPeriodEnd, 'days') : null;
                    return null != F
                        ? G.intl.format(G.t.WUfODw, {
                              pauseDate: f.currentPeriodEnd,
                              pauseDuration: F
                          })
                        : G.intl.format(G.t.VlWufn, { pauseDate: f.currentPeriodEnd });
                case M.O0b.PAUSED:
                    if (T) return P;
                    return G.intl.format(G.t['6RTdZG'], { resumeDate: f.pauseEndsAt });
                case M.O0b.BILLING_RETRY:
                    return G.intl.format(G.t['IlJ/HR'], { endDate: h()(f.currentPeriodStart).add(U.A5, 'days').toDate() });
                case M.O0b.PAST_DUE:
                    return G.intl.format(G.t['d+0vws'], {
                        endDate: (0, R.vc)(eS(f).expiresDate, 'LL'),
                        onClick: () => {
                            (0, m.Z)('https://support.discord.com/hc/articles/23082866222871');
                        }
                    });
                default:
                    return E
                        ? _ === U.Xh.PREMIUM_YEAR_TIER_2
                            ? G.intl.format(G.t['+qqh6u'], {
                                  percent: null !== (o = null == v ? void 0 : v.percentage) && void 0 !== o ? o : U.Bo,
                                  regularPrice: S
                              })
                            : D
                              ? G.intl.formatToPlainString(G.t['3Ziutb'], {
                                    percent: null !== (l = null == v ? void 0 : v.percentage) && void 0 !== l ? l : U.M_,
                                    regularPrice: S,
                                    numMonths: null !== (u = null == v ? void 0 : v.duration) && void 0 !== u ? u : U.rt
                                })
                              : G.intl.formatToPlainString(G.t['G6+XOT'], {
                                    percent: null !== (c = null == v ? void 0 : v.percentage) && void 0 !== c ? c : U.M_,
                                    regularPrice: S,
                                    numMonths: null !== (d = null == v ? void 0 : v.duration) && void 0 !== d ? d : U.rt
                                })
                        : P;
            }
        default:
            throw Error('Invalid planId '.concat(_));
    }
}
function eu(e) {
    let { renewalInvoicePreview: n, subscription: r, planId: i, includePremiumGuilds: a = !1, hasDiscountApplied: s = !1, activeDiscountInfo: o, hasFractionalPremiumWithSub: l = !1 } = e,
        u = A.Z.get(i);
    return (
        f()(null != u, 'Missing plan'),
        el({
            subscription: r,
            planId: u.id,
            price: eZ(n, r, u),
            includePremiumGuilds: a,
            hasDiscountApplied: s,
            activeDiscountInfo: o,
            renewalInvoicePreview: n,
            hasFractionalPremiumWithSub: l
        })
    );
}
function ec(e) {
    let { planId: n, additionalPlans: r } = e,
        i = (0, T.Q0)(n) ? null : en(n),
        a =
            null == r
                ? void 0
                : r.find((e) => {
                      let { planId: n } = e;
                      return U.Z1.has(n);
                  }),
        s = (null == a ? void 0 : a.planId) === U.Xh.PREMIUM_MONTH_GUILD ? G.t.Pi5yMD : (null == a ? void 0 : a.planId) === U.Xh.PREMIUM_YEAR_GUILD ? G.t.Pi5yMD : null,
        o = null != s ? G.intl.formatToPlainString(s, { num: null == a ? void 0 : a.quantity }) : void 0;
    if (null != i && null != o)
        return G.intl.formatToPlainString(G.t.FN5T9v, {
            premiumDescription: i,
            premiumGuildDescription: o
        });
    if (null != i) return i;
    if (null != o) return o;
    else throw Error('Subscription without premium or premium guild subscription');
}
function ed(e) {
    return e === U.Si.TIER_0 || e === U.Si.TIER_1 || e === U.Si.TIER_2;
}
function ef(e) {
    let { skuId: n, isPremium: r, multiMonthPlans: i, currentSubscription: a, isGift: s, isEligibleForTrial: o, defaultPlanId: l, defaultToMonthlyPlan: u } = e;
    if (null == n || !r) return [];
    let c = void 0 !== l && n === U.GP[l].skuId ? l : void 0;
    void 0 === c && u && !s && (c = U.IW[n]), o && !s && (void 0 === l || (u && U.No.has(l))) && I.k.trackExposure({ location: 'de805e_1' });
    let d = [];
    switch (n) {
        case U.Si.TIER_0:
            d = [U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_MONTH_TIER_0];
            break;
        case U.Si.TIER_1:
            d = [U.Xh.PREMIUM_MONTH_TIER_1];
            break;
        case U.Si.TIER_2:
            let f = i;
            if (null != a) {
                let e = a.items[0].planId;
                if (U.o4.has(e)) {
                    let n = U.GP[e];
                    f = [...U.o4].filter((e) => {
                        let r = U.GP[e];
                        return r.interval === n.interval && r.intervalCount === n.intervalCount && r.skuId === U.Si.TIER_2;
                    });
                } else f = [];
            }
            d = [U.Xh.PREMIUM_YEAR_TIER_2, ...f, U.Xh.PREMIUM_MONTH_TIER_2];
            break;
        default:
            throw Error('Unexpected SKU: '.concat(n));
    }
    if (void 0 !== c) {
        let e = d.indexOf(c);
        d.splice(e, 1), d.unshift(c);
    }
    return d;
}
function e_(e) {
    let n = U.GP[e];
    if (null == n) {
        let n = Error('Unsupported plan');
        throw ((0, C.q2)(n, { tags: { planId: e } }), n);
    }
    return n.skuId;
}
function eh(e) {
    switch (e) {
        case U.p9.TIER_0:
            return U.Si.TIER_0;
        case U.p9.TIER_1:
            return U.Si.TIER_1;
        case U.p9.TIER_2:
            return U.Si.TIER_2;
    }
}
function ep(e) {
    var n;
    return null == e ? j.ALL : null !== (n = j[e]) && void 0 !== n ? n : [];
}
function em(e) {
    let n = U.GP[e];
    if (null == n) throw Error('Unrecognized plan.');
    let { interval: r } = n,
        i = ep(e);
    for (let e of Object.keys(U.GP)) {
        let { interval: n } = U.GP[e];
        if (r === n && i.includes(e)) return e;
    }
    return null;
}
function eg(e) {
    let n = A.Z.getPlanIdsForSkus([tO(U.Si.GUILD)]);
    f()(null != n, 'Missing guildSubscriptionPlanIds');
    let r = e.find((e) => {
        let { planId: r } = e;
        return n.includes(r);
    });
    return null != r ? r.quantity : 0;
}
function eE(e) {
    let { additionalPlans: n } = e;
    return eg(n) > 0;
}
let ev = new Set([U.Xh.NONE_MONTH, U.Xh.NONE_3_MONTH, U.Xh.NONE_6_MONTH, U.Xh.NONE_YEAR, U.Xh.PREMIUM_MONTH_TIER_0, U.Xh.PREMIUM_MONTH_TIER_1, U.Xh.PREMIUM_MONTH_TIER_2, U.Xh.PREMIUM_YEAR_TIER_0, U.Xh.PREMIUM_YEAR_TIER_1, U.Xh.PREMIUM_YEAR_TIER_2, U.Xh.PREMIUM_3_MONTH_TIER_2, U.Xh.PREMIUM_6_MONTH_TIER_2]);
function eI(e) {
    return ev.has(e);
}
function eT(e) {
    return U.Z1.has(e);
}
function eb(e) {
    return eI(e) || eT(e);
}
function ey(e) {
    if (et(e) === U.p9.TIER_2) return U.cb;
    return 0;
}
function eS(e) {
    var n, r, i, a, s;
    if (e.isPurchasedViaApple && (null === (n = e.metadata) || void 0 === n ? void 0 : n.apple_grace_period_expires_date) != null) {
        let n = h()(e.metadata.apple_grace_period_expires_date);
        return {
            days: h().duration(n.diff(e.currentPeriodStart)).days(),
            expiresDate: n
        };
    }
    if (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
        let n = h()(e.metadata.google_grace_period_expires_date),
            r = h()(e.metadata.google_original_expires_date);
        return {
            days: h().duration(n.diff(r)).days(),
            expiresDate: n
        };
    }
    if (e.isPurchasedExternally) {
        let n = e.isPurchasedViaApple ? U.$7 : U.Ue;
        return {
            days: n,
            expiresDate: h()(e.currentPeriodStart).add(n, 'days')
        };
    }
    if ((null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date) != null)
        return {
            days: h()(null === (s = e.metadata) || void 0 === s ? void 0 : s.grace_period_expires_date).diff(e.currentPeriodStart, 'days'),
            expiresDate: h()(e.metadata.grace_period_expires_date)
        };
    {
        let n = null == e.paymentSourceId ? U.UA : U.zp;
        return {
            days: n,
            expiresDate: h()(e.currentPeriodStart).add(n, 'days')
        };
    }
}
function eA(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      fractionalState: U.a$.NONE,
                      startsAt: h()(0),
                      endsAt: h()(0),
                      currentEntitlementId: '',
                      unactivatedUnits: []
                  },
        a = r
            ? (0, P.T4)(
                  n.invoiceItems
                      .filter((e) => U.UD.has(e.subscriptionPlanId))
                      .map((e) => e.amount)
                      .reduce((e, n) => n + e, 0),
                  n.currency
              )
            : (0, P.T4)(n.total, n.currency);
    if (null != e.trialId && U.h8.includes(e.trialId) && null == e.paymentSourceId) return G.intl.format(G.t['7ZS2m5'], { trialEnd: e.currentPeriodEnd });
    if (e.status === M.O0b.CANCELED) return G.intl.format(G.t['Whp/qq'], { endDate: n.subscriptionPeriodStart });
    if (e.status === M.O0b.PAUSE_PENDING)
        return G.intl.format(G.t.uBLUGR, {
            pauseDate: e.currentPeriodEnd,
            resumeDate: e.pauseEndsAt
        });
    if (e.status === M.O0b.PAUSED)
        return i.fractionalState !== U.a$.NONE
            ? G.intl.format(G.t.Q18lRE, {
                  renewalDate: i.endsAt.toDate(),
                  price: a
              })
            : null == e.pauseEndsAt
              ? r
                  ? G.intl.format(G.t.KTYQCg, {
                        planName: G.intl.string(G.t.Ipxkoq),
                        price: a
                    })
                  : G.intl.string(G.t.fMz6Li)
              : r
                ? G.intl.format(G.t.zcgtzc, {
                      planName: G.intl.string(G.t.Ipxkoq),
                      resumeDate: e.pauseEndsAt,
                      price: a
                  })
                : G.intl.format(G.t['V8+l6u'], { resumeDate: e.pauseEndsAt });
    else if (e.status === M.O0b.PAST_DUE) {
        var s, o;
        let n = eS(e).expiresDate;
        return (e.isPurchasedViaGoogle && (null === (s = e.metadata) || void 0 === s ? void 0 : s.google_grace_period_expires_date) != null && (n = h()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (o = e.metadata) || void 0 === o ? void 0 : o.apple_grace_period_expires_date) != null && (n = h()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally)
            ? G.intl.format(G.t.U2hb3d, {
                  endDate: n.toDate(),
                  paymentGatewayName: B.Vz[e.paymentGateway],
                  paymentSourceLink: eQ(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
              })
            : G.intl.format(G.t.qEIzys, {
                  endDate: n.toDate(),
                  price: a
              });
    } else {
        if (e.status === M.O0b.BILLING_RETRY)
            return G.intl.format(G.t.EMTLOT, {
                endDate: h()(e.currentPeriodStart).add(U.A5, 'days').toDate(),
                price: a
            });
        if (e.status === M.O0b.ACCOUNT_HOLD)
            return e.isPurchasedViaGoogle && !(0, L.isAndroid)()
                ? G.intl.format(G.t.dtcxw8, {
                      endDate: h()(e.currentPeriodStart).add(U.gh, 'days').toDate(),
                      paymentGatewayName: B.Vz[e.paymentGateway],
                      paymentSourceLink: eQ(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT')
                  })
                : G.intl.format(G.t.EMTLOT, {
                      endDate: h()(e.currentPeriodStart).add(U.gh, 'days').toDate(),
                      price: a
                  });
        if (eD(e)) return G.intl.format(G.t.awpB0N, { prepaidEndDate: e.currentPeriodEnd });
        if (e.status === M.O0b.UNPAID) return G.intl.format(G.t.CzTKoq, { maxProcessingTimeInDays: U.Rg });
        if (e.isPurchasedExternally)
            return G.intl.format(G.t.ZlWXgY, {
                renewalDate: n.subscriptionPeriodStart,
                paymentGatewayName: B.Vz[e.paymentGateway],
                subscriptionManagementLink: eQ(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
            });
        let s = new Date(n.subscriptionPeriodStart);
        return (
            !e.isBoostOnly && (s = eN(s, i.unactivatedUnits)),
            r
                ? G.intl.format(G.t.Vl3cEB, {
                      planName: G.intl.string(G.t.Ipxkoq),
                      renewalDate: s,
                      price: a
                  })
                : G.intl.format(G.t.Q18lRE, {
                      renewalDate: s,
                      price: a
                  })
        );
    }
}
function eN(e, n) {
    let r = h()(e);
    if (n.length > 0) {
        let e = tP(n);
        r = r.add(e, 'hours');
    }
    return r.toDate();
}
function eC(e) {
    let n = tP(e.unactivatedUnits);
    if (!(n > 0 && e.fractionalState === U.a$.NONE)) return '';
    let r = {
            days: G.t.fYmir6,
            hours: G.t['C3RO+v'],
            minutes: G.t.r77oHR
        },
        i = (0, R.TD)(0, n * O.Z.Millis.HOUR);
    return (0, R.QX)(i, r);
}
function eR(e, n) {
    return (null != n && n !== U.a$.NONE) || null != e.renewalMutations || null != e.trialEndsAt || e.status === M.O0b.PAST_DUE;
}
function eO(e) {
    let n = null;
    return null != e.renewalMutations && (n = e.renewalMutations.planId !== e.planId ? G.intl.string(G.t['0rzJ4O']) : G.intl.string(G.t['9dLQ09'])), null != e.trialEndsAt && (n = G.intl.string(G.t.a9Mdb2)), n;
}
function eD(e) {
    return null != e.paymentSourceId && eL(e.paymentSourceId);
}
function eL(e) {
    if (null == e) return !1;
    let n = S.Z.getPaymentSource(e);
    return null != n && B.Uk.has(n.type);
}
function ex(e) {
    let { renewalMutations: n, additionalPlans: r, status: i } = e,
        a = eg(r);
    return 0 === (null != n ? eg(n.additionalPlans) : null) && 0 !== a ? M.O0b.CANCELED : i;
}
function ew(e) {
    return e.isPurchasedExternally ? e.status === M.O0b.CANCELED : ex(e) === M.O0b.CANCELED;
}
function eP(e) {
    var n, r, i;
    let { subscription: a, user: s, price: o, renewalInvoicePreview: l } = e,
        { planId: u, additionalPlans: c } = a,
        d = A.Z.get(u);
    f()(null != d, 'Missing plan');
    let _ = eg(c),
        h = eV(a.planId, a.paymentSourceId, a.currency, s).amount * _;
    if (null != l) {
        let e = l.invoiceItems.find((e) => U.Z1.has(e.subscriptionPlanId));
        null != e && (h = e.amount);
    }
    o = null != o ? o : (0, P.T4)(h, a.currency);
    let p = null === (i = null !== (r = null == l ? void 0 : l.taxInclusive) && void 0 !== r ? r : null === (n = a.latestInvoice) || void 0 === n ? void 0 : n.taxInclusive) || void 0 === i || i;
    if (ew(a))
        return a.isPurchasedViaGoogle
            ? G.intl.format(G.t['3/WTrK'], { quantity: _ })
            : p
              ? G.intl.format(G.t['0ozBSE'], {
                    quantity: _,
                    rate: (0, P.og)(o, d.interval, d.intervalCount)
                })
              : G.intl.format(G.t['yjsv/v'], {
                    quantity: _,
                    rate: (0, P.og)(o, d.interval, d.intervalCount)
                });
    switch (a.status) {
        case M.O0b.ACCOUNT_HOLD:
            return a.isPurchasedViaGoogle
                ? G.intl.format(G.t.Nlf3nZ, {
                      quantity: _,
                      boostQuantity: _
                  })
                : p
                  ? G.intl.format(G.t.oiRy7u, {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, P.og)(o, d.interval, d.intervalCount)
                    })
                  : G.intl.format(G.t['0QxOAg'], {
                        quantity: _,
                        boostQuantity: _,
                        rate: (0, P.og)(o, d.interval, d.intervalCount)
                    });
        case M.O0b.PAUSE_PENDING:
        case M.O0b.PAUSED:
            return G.intl.string(G.t.CduWAg);
        default:
            return a.isPurchasedViaGoogle
                ? G.intl.format(G.t['5iud9v'], { quantity: _ })
                : p
                  ? G.intl.format(G.t.eDwrLC, {
                        quantity: _,
                        rate: (0, P.og)(o, d.interval, d.intervalCount)
                    })
                  : G.intl.format(G.t.ijSDcH, {
                        quantity: _,
                        rate: (0, P.og)(o, d.interval, d.intervalCount)
                    });
    }
}
function eM(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = null != n ? K(e.id, !1, i, n) : W(e.id, !1, i),
        s = (0, P.T4)(a.amount, a.currency);
    return e.currency !== B.pK.USD && !0 === r && (s = s.concat('*')), s;
}
function ek(e, n, r) {
    let i = eM(e, n, r);
    return (0, P.og)(i, e.interval, e.intervalCount);
}
function eU(e, n) {
    let { planId: r } = e;
    if (e.status === M.O0b.CANCELED || e.status === M.O0b.PAUSE_PENDING) return r;
    f()(null != n, 'Expected invoicePreview');
    let i = n.invoiceItems.find((e) => {
        let { subscriptionPlanId: n } = e;
        return eI(n);
    });
    return (r = null == i || (0, T.Q0)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId);
}
function eB(e, n) {
    let { status: r } = e;
    if (e.status === M.O0b.CANCELED || e.status === M.O0b.PAUSE_PENDING) return r;
    f()(null != n, 'Expected invoicePreview');
    let i = n.invoiceItems.find((e) => {
        let { subscriptionPlanId: n } = e;
        return eI(n);
    });
    return (null == i || (0, T.Q0)(i.subscriptionPlanId)) && (r = M.O0b.CANCELED), r;
}
function eG(e) {
    let { status: n, renewalMutations: r } = e;
    return n === M.O0b.CANCELED || (null != r && (0, T.Q0)(r.planId) && !e.isPurchasedExternally);
}
function eF(e) {
    return e === M.O0b.PAST_DUE || e === M.O0b.ACCOUNT_HOLD || e === M.O0b.BILLING_RETRY;
}
function eZ(e, n, r) {
    let i = e.invoiceItems.find((e) => {
            let { subscriptionPlanId: n } = e;
            return n === r.id;
        }),
        a =
            null == i
                ? K(r.id, !1, !1, {
                      paymentSourceId: n.paymentSourceId,
                      currency: n.currency
                  }).amount
                : i.amount;
    return (0, P.og)((0, P.T4)(a, e.currency), r.interval, r.intervalCount);
}
function eV(e, n, r, i) {
    let a =
            null != n
                ? {
                      paymentSourceId: n,
                      currency: r
                  }
                : {
                      country: y.Z.ipCountryCodeWithFallback,
                      currency: r
                  },
        s = A.Z.get(e);
    if (null == s) {
        let n = Error('Unsupported plan');
        throw ((0, C.q2)(n, { tags: { planId: e } }), n);
    }
    let o = A.Z.getForSkuAndInterval(tO(U.Si.GUILD), s.interval, s.intervalCount);
    if (null == o) {
        let n = Error('Unsupported plan');
        throw ((0, C.q2)(n, { tags: { planId: e } }), n);
    }
    return K(o.id, (0, w.I5)(i), !1, a);
}
function ej(e) {
    return (
        null != e &&
        0 !== e.size &&
        Array.from(e).some((e) => {
            let { subscriptionPlanId: n, parentId: r, consumed: i } = e;
            return null != n && null != r && !i;
        })
    );
}
function eH(e, n, r) {
    let i = n.id;
    if (null != e)
        switch (i) {
            case U.Xh.PREMIUM_MONTH_TIER_0:
                return G.intl.string(G.t['0ggVqK']);
            case U.Xh.PREMIUM_YEAR_TIER_0:
                return G.intl.string(G.t['jm+ZQ0']);
            case U.Xh.PREMIUM_MONTH_TIER_1:
                return G.intl.string(G.t.uph4Jy);
            case U.Xh.PREMIUM_YEAR_TIER_1:
                return G.intl.string(G.t['D/l7Ym']);
            case U.Xh.PREMIUM_MONTH_TIER_2:
                return G.intl.string(G.t['5l1Mub']);
            case U.Xh.PREMIUM_YEAR_TIER_2:
                return G.intl.string(G.t.G0mISU);
        }
    switch (i) {
        case U.Xh.PREMIUM_MONTH_TIER_0:
            return r ? G.intl.string(G.t.cRCCJy) : G.intl.string(G.t['/G3aKy']);
        case U.Xh.PREMIUM_YEAR_TIER_0:
            return r ? G.intl.string(G.t.cRCCJy) : G.intl.string(G.t['2eQpsL']);
        case U.Xh.PREMIUM_MONTH_TIER_1:
            return r ? G.intl.string(G.t.cRCCJy) : G.intl.string(G.t.gueLg4);
        case U.Xh.PREMIUM_YEAR_TIER_1:
            return r ? G.intl.string(G.t.cRCCJy) : G.intl.string(G.t['MhH/vb']);
        case U.Xh.PREMIUM_MONTH_TIER_2:
            return r ? G.intl.string(G.t.cRCCJy) : G.intl.string(G.t.LQVQIi);
        case U.Xh.PREMIUM_YEAR_TIER_2:
            return r ? G.intl.string(G.t.cRCCJy) : G.intl.string(G.t['0nfg19']);
        case U.Xh.PREMIUM_3_MONTH_TIER_2:
        case U.Xh.PREMIUM_6_MONTH_TIER_2:
            return G.intl.formatToPlainString(G.t.BCD4fX, { intervalCount: n.intervalCount });
        case U.Xh.NONE_MONTH:
        case U.Xh.NONE_YEAR:
        case U.Xh.NONE_3_MONTH:
        case U.Xh.NONE_6_MONTH:
        case U.Xh.PREMIUM_MONTH_GUILD:
        case U.Xh.PREMIUM_YEAR_GUILD:
        case U.Xh.PREMIUM_3_MONTH_GUILD:
        case U.Xh.PREMIUM_6_MONTH_GUILD:
            return G.intl.string(G.t.eUEeCg);
    }
    let a = Error('User is purchasing an unsupported plan');
    throw ((0, C.q2)(a, { tags: { planId: i } }), a);
}
function eY(e) {
    let n = e.invoiceItems[0].subscriptionPlanId,
        r = A.Z.get(n);
    return (
        f()(null != r, 'Missing subscriptionPlan'),
        {
            intervalType: r.interval,
            intervalCount: r.intervalCount
        }
    );
}
function eW(e) {
    let { intervalType: n = U.rV.MONTH, intervalCount: r = 1, capitalize: i = !1 } = e;
    switch (n) {
        case U.rV.DAY:
            if (r >= 7 && r % 7 == 0) return i ? G.intl.formatToPlainString(G.t.fRNBRU, { weeks: r / 7 }) : G.intl.formatToPlainString(G.t.EIpHEh, { weeks: r / 7 });
            return i ? G.intl.formatToPlainString(G.t['6Cdzo6'], { days: r }) : G.intl.formatToPlainString(G.t['kbBj/v'], { days: r });
        case U.rV.MONTH:
            return i ? G.intl.formatToPlainString(G.t.x5Mgxc, { months: r }) : G.intl.formatToPlainString(G.t['4SEnCQ'], { months: r });
        case U.rV.YEAR:
            return i ? G.intl.formatToPlainString(G.t['h+63ys'], { years: r }) : G.intl.formatToPlainString(G.t['9DFiHh'], { years: r });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eK(e) {
    let { intervalType: n = U.rV.MONTH, intervalCount: r = 1 } = e;
    switch (n) {
        case U.rV.DAY:
            if (r >= 7 && r % 7 == 0) return G.intl.formatToPlainString(G.t['8awlzM'], { weeks: r / 7 });
            return G.intl.formatToPlainString(G.t.ZsgnLC, { days: r });
        case U.rV.MONTH:
            return G.intl.formatToPlainString(G.t.Y0HCVV, { months: r });
        case U.rV.YEAR:
            return G.intl.formatToPlainString(G.t.ns1zkZ, { years: r });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function ez(e) {
    if (null != e && null != e.subscription_trial) {
        let n = e.subscription_trial;
        return eK({
            intervalType: n.interval,
            intervalCount: n.interval_count
        });
    }
    return null;
}
function eq(e) {
    let { intervalType: n = U.rV.MONTH, intervalCount: r = 1, capitalize: i = !1 } = e;
    switch (n) {
        case U.rV.DAY:
            if (r >= 7 && r % 7 == 0) return i ? G.intl.formatToPlainString(G.t.iVZYys, { weeks: r / 7 }) : G.intl.formatToPlainString(G.t.EmoBDw, { weeks: r / 7 });
            return i ? G.intl.formatToPlainString(G.t.jzH70d, { days: r }) : G.intl.formatToPlainString(G.t.k2UNz8, { days: r });
        case U.rV.MONTH:
            return i ? G.intl.formatToPlainString(G.t.erUSmJ, { months: r }) : G.intl.formatToPlainString(G.t.kridzM, { months: r });
        case U.rV.YEAR:
            return i ? G.intl.formatToPlainString(G.t.IfYQVF, { years: r }) : G.intl.formatToPlainString(G.t.PClsr6, { years: r });
        default:
            throw Error('Unsupported interval duration.');
    }
}
function eQ(e, n) {
    switch (e) {
        case M.gg$.APPLE_PARTNER:
        case M.gg$.APPLE:
            return F[n];
        case M.gg$.GOOGLE:
            return Z[n];
    }
    throw Error('Invalid external payment gateway '.concat(e));
}
function eX(e, n) {
    return (0, w.I5)(e) || eF(null == n ? void 0 : n.status);
}
function eJ(e, n) {
    var r, i;
    let a = [],
        s = (null !== (i = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== i ? i : e.items).find((e) => U.dJ.has(e.planId));
    return (
        null != s && a.push(s),
        a.push(...n),
        a.map((n) => {
            for (let r of e.items)
                if (n.planId === r.planId)
                    return {
                        ...r,
                        ...n
                    };
            return n;
        })
    );
}
function e$(e) {
    return e.filter((e) => !U.dJ.has(e.planId));
}
function e0(e, n, r, i) {
    var a, s;
    f()(i.has(n), 'Expected planId in group');
    let o = !1,
        l = (null !== (s = null === (a = e.renewalMutations) || void 0 === a ? void 0 : a.items) && void 0 !== s ? s : e.items).map((e) =>
            i.has(e.planId)
                ? ((o = !0),
                  {
                      ...e,
                      quantity: r,
                      planId: n
                  })
                : e
        );
    if (!o) {
        let i = {
                planId: n,
                quantity: r
            },
            a = e.items.find((e) => e.planId === n);
        null != a && (i.id = a.id), l.push(i);
    }
    return l.filter((e) => 0 !== e.quantity);
}
function e1(e, n) {
    return e0(e, n, 1, U.dJ);
}
function e2(e, n, r) {
    return e0(e, r, n, U.Z1);
}
function e3(e) {
    var n;
    let r = null !== (n = e.find((e) => !('id' in e))) && void 0 !== n ? n : e.find((e) => U.dJ.has(e.planId));
    if (null != r) {
        let n = A.Z.get(r.planId);
        f()(null != n, 'Missing plan'),
            (e = e.map((e) => {
                if (e === r) return e;
                let i = A.Z.get(e.planId);
                f()(null != i, 'Missing plan');
                let a = A.Z.getForSkuAndInterval(i.skuId, n.interval, n.intervalCount);
                return (
                    f()(null != a, 'Missing planForInterval'),
                    {
                        ...e,
                        planId: a.id
                    }
                );
            }));
    }
    return e;
}
function e4(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { useSpace: !0 },
        r = U.a1[e].fileSize;
    return (0, D.BU)(r / 1024, {
        useKibibytes: !0,
        useSpace: n.useSpace
    });
}
function e6(e) {
    return null == e ? null : e.items.find((e) => U.Z1.has(e.planId));
}
function e5(e) {
    return null != e && null == Y(e) && null != e6(e);
}
function e7(e) {
    let n = null != e ? Y(e) : null;
    return null != n ? e_(n.planId) : null;
}
function e8(e) {
    if (null != e) {
        let n = Y(e);
        if (null != n) return et(n.planId);
    }
}
function e9(e) {
    if (null != e && null != e.renewalMutations) {
        let n = Y(e.renewalMutations);
        if (null != n) return et(n.planId);
    }
}
function te(e) {
    switch (e) {
        case U.p9.TIER_0:
            return k.Rj.PREMIUM_TIER_0;
        case U.p9.TIER_1:
            return k.Rj.PREMIUM_TIER_1;
        case U.p9.TIER_2:
            return k.Rj.PREMIUM_TIER_2;
    }
}
let tt = (e) => null != e && Date.now() - e.createdAt.getTime() < H;
function tn(e) {
    return (0, v.ks)(v.g_, e);
}
function tr(e) {
    return (0, v.ks)(v.m_, e);
}
function ti(e) {
    return (0, v.ks)(v._y, e);
}
function ta(e) {
    return (0, v.ks)(v.tj, e);
}
function ts(e) {
    return (0, v.ks)(v.EQ, e);
}
function to(e) {
    return (0, v.ks)(v.Pl, e);
}
function tl(e) {
    return (0, v.ks)(v.wN, e);
}
function tu(e) {
    return (0, v.ks)(v._G, e);
}
function tc(e) {
    return (0, v.ks)(v.j4, e);
}
function td(e) {
    return (0, v.ks)(v.lX, e);
}
function tf(e) {
    return (0, v.ks)(v.Uw, e);
}
function t_(e) {
    return (0, v.ks)(v.zm, e);
}
function th(e) {
    return (0, v.ks)(v.zZ, e);
}
function tp(e) {
    return (0, v.ks)(v.do, e);
}
function tm(e) {
    return (0, v.ks)(v.ZE, e);
}
function tg(e) {
    return (0, v.ks)(v.Ej, e);
}
function tE(e) {
    return (0, v.ks)(v.Ct, e);
}
function tv(e) {
    return (0, v.ks)(v.O1, e);
}
function tI(e) {
    return (0, v.ks)(v.uw, e);
}
function tT(e, n) {
    return !!E.Z.hasActiveDemo(p.q.STREAM_HIGH_QUALITY) || ('high' === e ? (0, v.ks)(v.O8, n) : 'mid' === e && (0, v.ks)(v.g7, n));
}
function tb(e) {
    return (0, v.ks)(v.$0, e);
}
function ty(e) {
    return (0, v.ks)(v.ME, e);
}
function tS(e) {
    return (0, v.ks)(v.AN, e);
}
function tA(e) {
    return (0, v.ks)(v._O, e);
}
function tN(e) {
    return (0, v.ks)(v.qH, e);
}
function tC(e) {
    return (0, v.ks)(v.hs, e);
}
function tR(e, n) {
    let r = (0, P.T4)(e.amount, e.currency),
        i = ee(n);
    return ''.concat(r, '/').concat(i);
}
function tO(e) {
    return e;
}
function tD(e) {
    return 'isNitroLocked' in e;
}
function tL(e) {
    return null != e && U.OT.includes(e) ? 1 : 2;
}
function tx(e) {
    if (e === U.rV.YEAR) return G.intl.string(G.t.tfqrho);
    if (e === U.rV.MONTH) return G.intl.string(G.t.FPybU1);
    throw Error('Invalid interval type: '.concat(e));
}
function tw(e) {
    return null != e && !e.isProvisional && !e.bot;
}
function tP(e) {
    return tM(e.map((e) => e.skuId));
}
function tM(e) {
    return e.reduce((e, n) => {
        let [r, i] = U.Cx[n],
            a = 1;
        switch (r) {
            case U.Se.HOUR:
                a = 1;
                break;
            case U.Se.DAY:
                a = 24;
        }
        return e + a * i;
    }, 0);
}
n.ZP = Object.freeze({
    isNewUser: tt,
    isPremiumAtLeast: w.yd,
    isPremium: w.I5,
    isPremiumExactly: w.M5,
    isPremiumEligible: tw,
    getPrice: K,
    getDefaultPrice: W,
    getInterval: X,
    getIntervalString: $,
    getIntervalStringAsNoun: ee,
    getPremiumType: et,
    getDisplayName: en,
    getDisplayPremiumType: es,
    getPremiumPlanOptions: ef,
    getUpgradeEligibilities: ep,
    getReverseTrialWeeks: tL,
    formatInterval: tx,
    getPlanDescription: el,
    isPremiumSku: ed,
    getClosestUpgrade: em,
    getIntervalMonths: ea,
    getUserMaxFileSize: x.h6,
    getSkuIdForPlan: e_,
    getSkuIdForPremiumType: eh,
    getNumIncludedPremiumGuildSubscriptionSlots: ey,
    getBillingInformationString: eA,
    extendDateWithUnconsumedFractionalPremium: eN,
    getUnactivatedFractionalPremiumHoursString: eC,
    isSwitchingPlansDisabled: eR,
    getSwitchingPlansDisabledMessage: eO,
    isNoneSubscription: T.Q0,
    getPlanIdFromInvoice: eU,
    getStatusFromInvoice: eB,
    isBaseSubscriptionCanceled: eG,
    getPremiumGuildIntervalPrice: eV,
    hasAccountCredit: ej,
    getBillingReviewSubheader: eH,
    getIntervalForInvoice: eY,
    getPremiumPlanItem: Y,
    getGuildBoostPlanItem: e6,
    isBoostOnlySubscription: e5,
    getPremiumSkuIdForSubscription: e7,
    getPremiumTypeFromSubscription: e8,
    getPremiumTypeFromSubscriptionRenewalMutations: e9,
    getPremiumGradientColor: te,
    getUnactivatedFractionalPremiumHours: tP,
    castPremiumSubscriptionAsSkuId: tO,
    canUseAnimatedEmojis: tn,
    canUseEmojisEverywhere: tr,
    canUseSoundboardEverywhere: ti,
    canUseCustomCallSounds: ta,
    canUploadLargeFiles: ts,
    canUseBadges: to,
    canUseHighVideoUploadQuality: tl,
    canEditDiscriminator: tu,
    hasBoostDiscount: tc,
    canUseAnimatedAvatar: td,
    canUseFancyVoiceChannelReactions: tf,
    canInstallPremiumApplications: t_,
    canUseIncreasedMessageLength: th,
    canUseIncreasedGuildCap: tp,
    canRedeemPremiumPerks: tm,
    canUsePremiumProfileCustomization: tg,
    canUsePremiumAppIcons: tE,
    canUsePremiumGuildMemberProfile: tv,
    canUseClientThemes: tI,
    canStreamQuality: tT,
    hasFreeBoosts: tb,
    canUseCustomStickersEverywhere: ty,
    canUseCustomBackgrounds: tS,
    canUseCollectibles: tA,
    canUseCustomNotificationSounds: tN,
    canUsePremiumVoiceFilters: tC,
    formatPriceString: tR,
    StreamQuality: a
});
