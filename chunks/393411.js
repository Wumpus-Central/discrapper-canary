n.d(t, {
    R: () => U,
    Z: () => G
}),
    n(411104);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(366939),
    u = n(100527),
    m = n(906732),
    h = n(975298),
    g = n(710845),
    _ = n(963249),
    x = n(301766),
    p = n(509545),
    E = n(78839),
    C = n(931331),
    f = n(754347),
    T = n(122289),
    N = n(74538),
    I = n(212895),
    S = n(296848),
    b = n(140465),
    v = n(879463),
    j = n(104494),
    A = n(987997),
    O = n(833569),
    R = n(823188),
    P = n(474936),
    D = n(981631),
    Z = n(388032),
    y = n(236438);
let k = new g.Z('SubscriptionHeader.tsx'),
    L = {
        page: D.ZY5.USER_SETTINGS,
        section: D.jXE.SETTINGS_PREMIUM,
        object: D.qAy.CARD
    },
    B = [D.O0b.PAUSED, D.O0b.PAUSE_PENDING, D.O0b.BILLING_RETRY];
function M(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: l, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: r()(y.banner, l),
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
                                        (0, i.jsx)(R.Cy, {
                                            text: Z.intl.formatToPlainString(Z.t.iiLbvr, { percent: o }),
                                            className: y.discountPill,
                                            colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL,
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
function w(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: l, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: r()(y.banner, l, y.repositioned),
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
                                        (0, i.jsx)(R.Cy, {
                                            text: Z.intl.formatToPlainString(Z.t.iiLbvr, { percent: o }),
                                            className: y.discountPill,
                                            colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL,
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
            (0, i.jsx)(f.Z, {
                className: y.discordWordmark,
                'aria-label': Z.intl.string(Z.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: y.classicWordmark })
        ]
    });
}
function U() {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(M, {
        wordMark: (0, i.jsx)(V, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: y.planInfo,
            children: Z.intl.string(Z.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(A.Z, {
            className: y.toolsButton,
            onClick: () =>
                (0, _.Z)({
                    subscriptionTier: P.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: L
                }),
            children: Z.intl.string(Z.t['/ygMUV'])
        }),
        statusClasses: { [y.tier1]: !0 }
    });
}
let G = function (e) {
    var t;
    let { subscription: s, renewalInvoicePreview: l, paymentSource: g, busy: R, analyticsLocation: U } = e,
        { analyticsLocations: G } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER),
        { fractionalState: F } = (0, h.Z)({ forceFetch: !1 }),
        H = F === P.a$.FP_SUB_PAUSED,
        { enabled: z } = (0, v.ZP)({ location: 'subscription_header' });
    (P.pj.has(s.planId) && D.JwP.ALL_PAUSEABLE.has(s.status) && !H) || (z = !1);
    let Y = (0, j.Ng)(),
        W = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
        K = (0, b.t7)(),
        X = (0, b.lr)(),
        q = (0, o.e7)([E.ZP], () => E.ZP.inReverseTrial()),
        J = () => {
            (s.status === D.O0b.ACTIVE || s.status === D.O0b.PAST_DUE || s.status === D.O0b.PAUSED) && ee(O.R.PAUSE_SELECT);
        },
        Q = () => {
            (s.status === D.O0b.ACTIVE || s.status === D.O0b.PAST_DUE || s.status === D.O0b.PAUSE_PENDING || H) && ee();
        },
        $ = () => {
            s.status === D.O0b.BILLING_RETRY && ee(O.R.CONFIRM);
        },
        ee = (e) => {
            (0, c.ZDy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: s,
                        analyticsLocation: U,
                        analyticsLocations: G,
                        initialStep: e
                    });
            });
        },
        et = () => {
            if (null != s && null != s.planIdFromItems) {
                let e = p.Z.get(s.planIdFromItems);
                if (null == e) {
                    k.info('Plan not fetched for plan id: '.concat(s.planIdFromItems));
                    return;
                }
                let t = (0, I.DE)(e, null == g ? void 0 : g.id, !1),
                    n = t.length > 0 ? t[0] : s.currency,
                    i = !1;
                1 === t.length && (null == g ? void 0 : g.id) === s.paymentSourceId && (0, I.tD)(e.id, n, null == g ? void 0 : g.id) && (i = !0),
                    i
                        ? d.O5(s, G)
                        : (0, _.Z)({
                              initialPlanId: s.planIdFromItems,
                              analyticsLocations: G,
                              analyticsLocation: U,
                              analyticsObject: L,
                              subscription: s
                          });
            }
        },
        en = () => {
            if (!B.includes(s.status) || null == s.pauseEndsAt) {
                (0, T.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: s.id,
                        status: s.status,
                        pauseEndsAt: s.pauseEndsAt
                    }
                });
                return;
            }
            s.status === D.O0b.PAUSED
                ? (0, _.Z)({
                      initialPlanId: s.planIdFromItems,
                      analyticsLocations: G,
                      analyticsLocation: U,
                      analyticsObject: L,
                      subscription: s,
                      skipConfirm: !0
                  })
                : d.v4(s, G);
        },
        ei = () => {
            s.status === D.O0b.PAUSED && ee(O.R.PAUSE_SELECT);
        },
        es = () => {
            ee(O.R.WHAT_YOU_LOSE);
        },
        er = N.ZP.getPlanIdFromInvoice(s, l);
    if ((0, x.Q0)(er)) return null;
    let el = N.ZP.getStatusFromInvoice(s, l),
        ea = N.ZP.getPremiumType(er),
        eo = {
            [y.tier0]: ea === P.p9.TIER_0,
            [y.tier1]: ea === P.p9.TIER_1,
            [y.tier2]: ea === P.p9.TIER_2,
            [y.canceled]: el === D.O0b.CANCELED,
            [y.pausePending]: el === D.O0b.PAUSE_PENDING,
            [y.paused]: el === D.O0b.PAUSED && !H,
            [y.failedPayment]: (0, N.zV)(el)
        },
        ec = null;
    switch (ea) {
        case P.p9.TIER_0:
            ec = (0, i.jsxs)('div', {
                className: y.wordMark,
                children: [
                    (0, i.jsx)(f.Z, {
                        className: y.discordWordmark,
                        'aria-label': Z.intl.string(Z.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: y.basicWordmark })
                ]
            });
            break;
        case P.p9.TIER_1:
            ec = (0, i.jsx)(V, {});
            break;
        case P.p9.TIER_2:
            ec = (0, i.jsx)(C.Z, {
                className: y.planName,
                'aria-label': Z.intl.string(Z.t.lpNrPj)
            });
    }
    let ed = B.includes(s.status) && !H ? w : M;
    return (0, i.jsx)(ed, {
        wordMark: ec,
        subscriptionInfo: ((e) => {
            a()(null != l, 'Expected renewalInvoicePreview');
            let t = N.ZP.getReverseTrialWeeks(s.trialId);
            return (0, i.jsx)('div', {
                className: y.planInfo,
                children: q
                    ? Z.intl.format(Z.t.jLglur, { weeks: t })
                    : (0, N.qV)({
                          planId: e,
                          subscription: s,
                          renewalInvoicePreview: l,
                          hasDiscountApplied: K,
                          activeDiscountInfo: X,
                          hasFractionalPremiumWithSub: H
                      })
            });
        })(er),
        buttons: (() => {
            let { status: e } = s;
            if (s.isPurchasedExternally) {
                let e = (0, N.JE)(s.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(c.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.zxk, {
                        className: r()(y.toolsButton, y.externalButton),
                        size: c.zxk.Sizes.SMALL,
                        look: c.iLD.OUTLINED,
                        color: c.Ttl.WHITE,
                        submitting: R,
                        children: Z.intl.string(Z.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = N.ZP.isSwitchingPlansDisabled(s, F),
                    t = N.ZP.getSwitchingPlansDisabledMessage(s);
                return (0, i.jsxs)('div', {
                    className: y.toolsButtons,
                    children: [
                        z
                            ? (0, i.jsx)(c.zxk, {
                                  className: y.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: J,
                                  children: Z.intl.string(Z.t.eFlYVF)
                              })
                            : (0, i.jsx)(c.zxk, {
                                  className: y.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: Q,
                                  children: Z.intl.string(Z.t['ETE/oK'])
                              }),
                        (0, i.jsx)(c.ua7, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(A.Z, {
                                    ...t,
                                    disabled: e,
                                    className: y.toolsButton,
                                    onClick: () => {
                                        (0, _.Z)({
                                            analyticsLocations: G,
                                            analyticsLocation: U,
                                            analyticsObject: L,
                                            subscription: s
                                        });
                                    },
                                    children: Z.intl.string(Z.t['dylp//'])
                                })
                        })
                    ]
                });
            }
            if (N.ZP.isBaseSubscriptionCanceled(s))
                return (0, i.jsx)(c.zxk, {
                    className: y.toolsButton,
                    size: c.zxk.Sizes.SMALL,
                    color: c.Ttl.BRAND_INVERTED,
                    submitting: R,
                    onClick: et,
                    children: Z.intl.string(Z.t.iIvF29)
                });
            switch (e) {
                case D.O0b.BILLING_RETRY:
                    return (0, i.jsx)(c.zxk, {
                        className: y.billingRetryCancel,
                        size: c.zxk.Sizes.SMALL,
                        color: c.Ttl.CUSTOM,
                        submitting: R,
                        onClick: $,
                        children: Z.intl.string(Z.t['ETE/oK'])
                    });
                case D.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: y.toolsButtons,
                        children: [
                            (0, i.jsx)(c.zxk, {
                                className: y.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                look: c.iLD.LINK,
                                color: c.Ttl.WHITE,
                                submitting: R,
                                onClick: Q,
                                children: Z.intl.string(Z.t.cM1H0N)
                            }),
                            (0, i.jsx)(c.zxk, {
                                className: y.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: Z.intl.string(Z.t.TgV5QU)
                            })
                        ]
                    });
                case D.O0b.PAUSED:
                    if (H) return t();
                    let { durations: n } = (0, S.AT)(s);
                    return (0, i.jsxs)('div', {
                        className: y.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(c.zxk, {
                                      className: y.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: ei,
                                      children: Z.intl.string(Z.t.jNHWt7)
                                  })
                                : (0, i.jsx)(c.zxk, {
                                      className: y.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: es,
                                      children: Z.intl.string(Z.t.cM1H0N)
                                  }),
                            (0, i.jsx)(c.zxk, {
                                className: y.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: Z.intl.string(Z.t.zpi5pq)
                            })
                        ]
                    });
                case D.O0b.ACTIVE:
                case D.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: eo,
        shouldUseDiscountMarketing: K,
        discountAmount: W
    });
};
