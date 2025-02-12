n.d(t, {
    R: () => w,
    Z: () => U
}),
    n(411104);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(512722),
    a = n.n(r),
    o = n(481060),
    c = n(366939),
    d = n(100527),
    u = n(906732),
    h = n(975298),
    m = n(710845),
    g = n(963249),
    x = n(301766),
    _ = n(509545),
    p = n(931331),
    E = n(754347),
    C = n(122289),
    f = n(74538),
    N = n(212895),
    I = n(296848),
    T = n(140465),
    S = n(695349),
    j = n(879463),
    v = n(104494),
    b = n(987997),
    A = n(833569),
    O = n(823188),
    R = n(474936),
    D = n(981631),
    P = n(388032),
    y = n(949095);
let Z = new m.Z('SubscriptionHeader.tsx'),
    L = {
        page: D.ZY5.USER_SETTINGS,
        section: D.jXE.SETTINGS_PREMIUM,
        object: D.qAy.CARD
    },
    k = [D.O0b.PAUSED, D.O0b.PAUSE_PENDING, D.O0b.BILLING_RETRY];
function B(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: r, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: l()(y.banner, r),
        children: [
            (0, i.jsx)('div', { className: y.bannerBackgroundImage }),
            (0, i.jsxs)('div', {
                className: y.detailsContainer,
                children: [
                    (0, i.jsx)('div', { className: y.image }),
                    (0, i.jsxs)('div', {
                        className: y.details,
                        children: [
                            (0, i.jsxs)('div', {
                                className: y.headerLabel,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(O.Cy, {
                                            text: P.intl.formatToPlainString(P.t.iiLbvr, { percent: o }),
                                            className: y.discountPill,
                                            colorOptions: O.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        })
                                ]
                            }),
                            n
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: y.buttons,
                children: s
            })
        ]
    });
}
function M(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: r, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: l()(y.banner, r, y.repositioned),
        children: [
            (0, i.jsx)('div', { className: y.bannerBackgroundImage }),
            (0, i.jsx)('div', {
                className: y.detailsContainer,
                children: (0, i.jsx)('div', {
                    className: y.details,
                    children: (0, i.jsxs)('div', {
                        className: y.headerLabel,
                        children: [
                            (0, i.jsx)('div', { className: y.image }),
                            (0, i.jsxs)('div', {
                                className: y.headerColumnB,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(O.Cy, {
                                            text: P.intl.formatToPlainString(P.t.iiLbvr, { percent: o }),
                                            className: y.discountPill,
                                            colorOptions: O.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        }),
                                    n
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: y.buttons,
                children: s
            })
        ]
    });
}
function V() {
    return (0, i.jsxs)('div', {
        className: y.wordMark,
        children: [
            (0, i.jsx)(E.Z, {
                className: y.discordWordmark,
                'aria-label': P.intl.string(P.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: y.classicWordmark })
        ]
    });
}
function w() {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(B, {
        wordMark: (0, i.jsx)(V, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: y.planInfo,
            children: P.intl.string(P.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(b.Z, {
            className: y.toolsButton,
            onClick: () =>
                (0, g.Z)({
                    subscriptionTier: R.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: L
                }),
            children: P.intl.string(P.t['/ygMUV'])
        }),
        statusClasses: { [y.tier1]: !0 }
    });
}
let U = function (e) {
    var t;
    let { subscription: s, renewalInvoicePreview: r, paymentSource: m, busy: O, analyticsLocation: w } = e,
        { analyticsLocations: U } = (0, u.ZP)(d.Z.SUBSCRIPTION_HEADER),
        { fractionalState: G } = (0, h.Z)({ forceFetch: !1 }),
        F = G === R.a$.FP_SUB_PAUSED,
        { enabled: z } = (0, j.ZP)({ location: 'subscription_header' });
    (R.pj.has(s.planId) && D.JwP.ALL_PAUSEABLE.has(s.status) && !F) || (z = !1);
    let Y = (0, v.Ng)(),
        H = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
        W = (0, T.t7)(),
        K = (0, T.lr)(),
        X = (0, S.W)(),
        q = () => {
            (s.status === D.O0b.ACTIVE || s.status === D.O0b.PAST_DUE || s.status === D.O0b.PAUSED) && $(A.R.PAUSE_SELECT);
        },
        J = () => {
            (s.status === D.O0b.ACTIVE || s.status === D.O0b.PAST_DUE || s.status === D.O0b.PAUSE_PENDING || F) && $();
        },
        Q = () => {
            s.status === D.O0b.BILLING_RETRY && $(A.R.CONFIRM);
        },
        $ = (e) => {
            (0, o.ZDy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: s,
                        analyticsLocation: w,
                        analyticsLocations: U,
                        initialStep: e
                    });
            });
        },
        ee = () => {
            if (null != s && null != s.planIdFromItems) {
                let e = _.Z.get(s.planIdFromItems);
                if (null == e) {
                    Z.info('Plan not fetched for plan id: '.concat(s.planIdFromItems));
                    return;
                }
                let t = (0, N.DE)(e, null == m ? void 0 : m.id, !1),
                    n = t.length > 0 ? t[0] : s.currency,
                    i = !1;
                1 === t.length && (null == m ? void 0 : m.id) === s.paymentSourceId && (0, N.tD)(e.id, n, null == m ? void 0 : m.id) && (i = !0),
                    i
                        ? c.O5(s, U)
                        : (0, g.Z)({
                              initialPlanId: s.planIdFromItems,
                              analyticsLocations: U,
                              analyticsLocation: w,
                              analyticsObject: L,
                              subscription: s
                          });
            }
        },
        et = () => {
            if (!k.includes(s.status) || null == s.pauseEndsAt) {
                (0, C.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: s.id,
                        status: s.status,
                        pauseEndsAt: s.pauseEndsAt
                    }
                });
                return;
            }
            s.status === D.O0b.PAUSED
                ? (0, g.Z)({
                      initialPlanId: s.planIdFromItems,
                      analyticsLocations: U,
                      analyticsLocation: w,
                      analyticsObject: L,
                      subscription: s,
                      skipConfirm: !0
                  })
                : c.v4(s, U);
        },
        en = () => {
            s.status === D.O0b.PAUSED && $(A.R.PAUSE_SELECT);
        },
        ei = () => {
            $(A.R.WHAT_YOU_LOSE);
        },
        es = f.ZP.getPlanIdFromInvoice(s, r);
    if ((0, x.Q0)(es)) return null;
    let el = f.ZP.getStatusFromInvoice(s, r),
        er = f.ZP.getPremiumType(es),
        ea = {
            [y.tier0]: er === R.p9.TIER_0,
            [y.tier1]: er === R.p9.TIER_1,
            [y.tier2]: er === R.p9.TIER_2,
            [y.canceled]: el === D.O0b.CANCELED,
            [y.pausePending]: el === D.O0b.PAUSE_PENDING,
            [y.paused]: el === D.O0b.PAUSED && !F,
            [y.failedPayment]: (0, f.zV)(el)
        },
        eo = null;
    switch (er) {
        case R.p9.TIER_0:
            eo = (0, i.jsxs)('div', {
                className: y.wordMark,
                children: [
                    (0, i.jsx)(E.Z, {
                        className: y.discordWordmark,
                        'aria-label': P.intl.string(P.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: y.basicWordmark })
                ]
            });
            break;
        case R.p9.TIER_1:
            eo = (0, i.jsx)(V, {});
            break;
        case R.p9.TIER_2:
            eo = (0, i.jsx)(p.Z, {
                className: y.planName,
                'aria-label': P.intl.string(P.t.lpNrPj)
            });
    }
    let ec = k.includes(s.status) && !F ? M : B;
    return (0, i.jsx)(ec, {
        wordMark: eo,
        subscriptionInfo:
            (a()(null != r, 'Expected renewalInvoicePreview'),
            (0, i.jsx)('div', {
                className: y.planInfo,
                children: X
                    ? P.intl.format(P.t['/SfHws'], { weeks: 1 })
                    : (0, f.qV)({
                          planId: es,
                          subscription: s,
                          renewalInvoicePreview: r,
                          hasDiscountApplied: W,
                          activeDiscountInfo: K,
                          hasFractionalPremiumWithSub: F
                      })
            })),
        buttons: (() => {
            let { status: e } = s;
            if (s.isPurchasedExternally) {
                let e = (0, f.JE)(s.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(o.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(o.zxk, {
                        className: l()(y.toolsButton, y.externalButton),
                        size: o.zxk.Sizes.SMALL,
                        look: o.iLD.OUTLINED,
                        color: o.Ttl.WHITE,
                        submitting: O,
                        children: P.intl.string(P.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = f.ZP.isSwitchingPlansDisabled(s, G),
                    t = f.ZP.getSwitchingPlansDisabledMessage(s);
                return (0, i.jsxs)('div', {
                    className: y.toolsButtons,
                    children: [
                        z
                            ? (0, i.jsx)(o.zxk, {
                                  className: y.toolsButton,
                                  size: o.zxk.Sizes.SMALL,
                                  look: o.iLD.LINK,
                                  color: o.Ttl.WHITE,
                                  submitting: O,
                                  onClick: q,
                                  children: P.intl.string(P.t.eFlYVF)
                              })
                            : (0, i.jsx)(o.zxk, {
                                  className: y.toolsButton,
                                  size: o.zxk.Sizes.SMALL,
                                  look: o.iLD.LINK,
                                  color: o.Ttl.WHITE,
                                  submitting: O,
                                  onClick: J,
                                  children: P.intl.string(P.t['ETE/oK'])
                              }),
                        (0, i.jsx)(o.ua7, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(b.Z, {
                                    ...t,
                                    disabled: e,
                                    className: y.toolsButton,
                                    onClick: () => {
                                        (0, g.Z)({
                                            analyticsLocations: U,
                                            analyticsLocation: w,
                                            analyticsObject: L,
                                            subscription: s
                                        });
                                    },
                                    children: P.intl.string(P.t['dylp//'])
                                })
                        })
                    ]
                });
            }
            if (f.ZP.isBaseSubscriptionCanceled(s))
                return (0, i.jsx)(o.zxk, {
                    className: y.toolsButton,
                    size: o.zxk.Sizes.SMALL,
                    color: o.Ttl.BRAND_INVERTED,
                    submitting: O,
                    onClick: ee,
                    children: P.intl.string(P.t.iIvF29)
                });
            switch (e) {
                case D.O0b.BILLING_RETRY:
                    return (0, i.jsx)(o.zxk, {
                        className: y.billingRetryCancel,
                        size: o.zxk.Sizes.SMALL,
                        color: o.Ttl.CUSTOM,
                        submitting: O,
                        onClick: Q,
                        children: P.intl.string(P.t['ETE/oK'])
                    });
                case D.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: y.toolsButtons,
                        children: [
                            (0, i.jsx)(o.zxk, {
                                className: y.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                look: o.iLD.LINK,
                                color: o.Ttl.WHITE,
                                submitting: O,
                                onClick: J,
                                children: P.intl.string(P.t.cM1H0N)
                            }),
                            (0, i.jsx)(o.zxk, {
                                className: y.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                color: o.Ttl.BRAND_INVERTED,
                                submitting: O,
                                onClick: et,
                                children: P.intl.string(P.t.TgV5QU)
                            })
                        ]
                    });
                case D.O0b.PAUSED:
                    if (F) return t();
                    let { durations: n } = (0, I.AT)(s);
                    return (0, i.jsxs)('div', {
                        className: y.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(o.zxk, {
                                      className: y.linkButton,
                                      size: o.zxk.Sizes.SMALL,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.WHITE,
                                      submitting: O,
                                      onClick: en,
                                      children: P.intl.string(P.t.jNHWt7)
                                  })
                                : (0, i.jsx)(o.zxk, {
                                      className: y.linkButton,
                                      size: o.zxk.Sizes.SMALL,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.WHITE,
                                      submitting: O,
                                      onClick: ei,
                                      children: P.intl.string(P.t.cM1H0N)
                                  }),
                            (0, i.jsx)(o.zxk, {
                                className: y.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                color: o.Ttl.BRAND_INVERTED,
                                submitting: O,
                                onClick: et,
                                children: P.intl.string(P.t.zpi5pq)
                            })
                        ]
                    });
                case D.O0b.ACTIVE:
                case D.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: ea,
        shouldUseDiscountMarketing: W,
        discountAmount: H
    });
};
