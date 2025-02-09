n.d(t, {
    R: () => U,
    Z: () => G
}),
    n(411104);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(512722),
    a = n.n(r),
    o = n(442837),
    c = n(481060),
    d = n(366939),
    u = n(100527),
    h = n(906732),
    m = n(975298),
    g = n(710845),
    x = n(963249),
    _ = n(301766),
    p = n(509545),
    E = n(78839),
    C = n(931331),
    N = n(754347),
    f = n(122289),
    I = n(74538),
    T = n(212895),
    S = n(296848),
    j = n(140465),
    v = n(879463),
    b = n(104494),
    A = n(987997),
    O = n(833569),
    R = n(823188),
    D = n(474936),
    P = n(981631),
    y = n(388032),
    Z = n(949095);
let L = new g.Z('SubscriptionHeader.tsx'),
    k = {
        page: P.ZY5.USER_SETTINGS,
        section: P.jXE.SETTINGS_PREMIUM,
        object: P.qAy.CARD
    },
    B = [P.O0b.PAUSED, P.O0b.PAUSE_PENDING, P.O0b.BILLING_RETRY];
function M(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: r, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: l()(Z.banner, r),
        children: [
            (0, i.jsx)('div', { className: Z.bannerBackgroundImage }),
            (0, i.jsxs)('div', {
                className: Z.detailsContainer,
                children: [
                    (0, i.jsx)('div', { className: Z.image }),
                    (0, i.jsxs)('div', {
                        className: Z.details,
                        children: [
                            (0, i.jsxs)('div', {
                                className: Z.headerLabel,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: y.intl.formatToPlainString(y.t.iiLbvr, { percent: o }),
                                            className: Z.discountPill,
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
                className: Z.buttons,
                children: s
            })
        ]
    });
}
function V(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: r, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: l()(Z.banner, r, Z.repositioned),
        children: [
            (0, i.jsx)('div', { className: Z.bannerBackgroundImage }),
            (0, i.jsx)('div', {
                className: Z.detailsContainer,
                children: (0, i.jsx)('div', {
                    className: Z.details,
                    children: (0, i.jsxs)('div', {
                        className: Z.headerLabel,
                        children: [
                            (0, i.jsx)('div', { className: Z.image }),
                            (0, i.jsxs)('div', {
                                className: Z.headerColumnB,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: y.intl.formatToPlainString(y.t.iiLbvr, { percent: o }),
                                            className: Z.discountPill,
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
                className: Z.buttons,
                children: s
            })
        ]
    });
}
function w() {
    return (0, i.jsxs)('div', {
        className: Z.wordMark,
        children: [
            (0, i.jsx)(N.Z, {
                className: Z.discordWordmark,
                'aria-label': y.intl.string(y.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: Z.classicWordmark })
        ]
    });
}
function U() {
    let { analyticsLocations: e } = (0, h.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(M, {
        wordMark: (0, i.jsx)(w, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: Z.planInfo,
            children: y.intl.string(y.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(A.Z, {
            className: Z.toolsButton,
            onClick: () =>
                (0, x.Z)({
                    subscriptionTier: D.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: k
                }),
            children: y.intl.string(y.t['/ygMUV'])
        }),
        statusClasses: { [Z.tier1]: !0 }
    });
}
let G = function (e) {
    var t;
    let { subscription: s, renewalInvoicePreview: r, paymentSource: g, busy: R, analyticsLocation: U } = e,
        { analyticsLocations: G } = (0, h.ZP)(u.Z.SUBSCRIPTION_HEADER),
        { fractionalState: F } = (0, m.Z)({ forceFetch: !1 }),
        z = F === D.a$.FP_SUB_PAUSED,
        { enabled: Y } = (0, v.ZP)({ location: 'subscription_header' });
    (D.pj.has(s.planId) && P.JwP.ALL_PAUSEABLE.has(s.status) && !z) || (Y = !1);
    let H = (0, b.Ng)(),
        W = null == H ? void 0 : null === (t = H.discount) || void 0 === t ? void 0 : t.amount,
        K = (0, j.t7)(),
        X = (0, j.lr)(),
        q = (0, o.e7)([E.ZP], () => E.ZP.inReverseTrial()),
        J = () => {
            (s.status === P.O0b.ACTIVE || s.status === P.O0b.PAST_DUE || s.status === P.O0b.PAUSED) && ee(O.R.PAUSE_SELECT);
        },
        Q = () => {
            (s.status === P.O0b.ACTIVE || s.status === P.O0b.PAST_DUE || s.status === P.O0b.PAUSE_PENDING || z) && ee();
        },
        $ = () => {
            s.status === P.O0b.BILLING_RETRY && ee(O.R.CONFIRM);
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
                    L.info('Plan not fetched for plan id: '.concat(s.planIdFromItems));
                    return;
                }
                let t = (0, T.DE)(e, null == g ? void 0 : g.id, !1),
                    n = t.length > 0 ? t[0] : s.currency,
                    i = !1;
                1 === t.length && (null == g ? void 0 : g.id) === s.paymentSourceId && (0, T.tD)(e.id, n, null == g ? void 0 : g.id) && (i = !0),
                    i
                        ? d.O5(s, G)
                        : (0, x.Z)({
                              initialPlanId: s.planIdFromItems,
                              analyticsLocations: G,
                              analyticsLocation: U,
                              analyticsObject: k,
                              subscription: s
                          });
            }
        },
        en = () => {
            if (!B.includes(s.status) || null == s.pauseEndsAt) {
                (0, f.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: s.id,
                        status: s.status,
                        pauseEndsAt: s.pauseEndsAt
                    }
                });
                return;
            }
            s.status === P.O0b.PAUSED
                ? (0, x.Z)({
                      initialPlanId: s.planIdFromItems,
                      analyticsLocations: G,
                      analyticsLocation: U,
                      analyticsObject: k,
                      subscription: s,
                      skipConfirm: !0
                  })
                : d.v4(s, G);
        },
        ei = () => {
            s.status === P.O0b.PAUSED && ee(O.R.PAUSE_SELECT);
        },
        es = () => {
            ee(O.R.WHAT_YOU_LOSE);
        },
        el = I.ZP.getPlanIdFromInvoice(s, r);
    if ((0, _.Q0)(el)) return null;
    let er = I.ZP.getStatusFromInvoice(s, r),
        ea = I.ZP.getPremiumType(el),
        eo = {
            [Z.tier0]: ea === D.p9.TIER_0,
            [Z.tier1]: ea === D.p9.TIER_1,
            [Z.tier2]: ea === D.p9.TIER_2,
            [Z.canceled]: er === P.O0b.CANCELED,
            [Z.pausePending]: er === P.O0b.PAUSE_PENDING,
            [Z.paused]: er === P.O0b.PAUSED && !z,
            [Z.failedPayment]: (0, I.zV)(er)
        },
        ec = null;
    switch (ea) {
        case D.p9.TIER_0:
            ec = (0, i.jsxs)('div', {
                className: Z.wordMark,
                children: [
                    (0, i.jsx)(N.Z, {
                        className: Z.discordWordmark,
                        'aria-label': y.intl.string(y.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: Z.basicWordmark })
                ]
            });
            break;
        case D.p9.TIER_1:
            ec = (0, i.jsx)(w, {});
            break;
        case D.p9.TIER_2:
            ec = (0, i.jsx)(C.Z, {
                className: Z.planName,
                'aria-label': y.intl.string(y.t.lpNrPj)
            });
    }
    let ed = B.includes(s.status) && !z ? V : M;
    return (0, i.jsx)(ed, {
        wordMark: ec,
        subscriptionInfo: ((e) => {
            a()(null != r, 'Expected renewalInvoicePreview');
            let t = I.ZP.getReverseTrialWeeks(s.trialId);
            return (0, i.jsx)('div', {
                className: Z.planInfo,
                children: q
                    ? y.intl.format(y.t.jLglur, { weeks: t })
                    : (0, I.qV)({
                          planId: e,
                          subscription: s,
                          renewalInvoicePreview: r,
                          hasDiscountApplied: K,
                          activeDiscountInfo: X,
                          hasFractionalPremiumWithSub: z
                      })
            });
        })(el),
        buttons: (() => {
            let { status: e } = s;
            if (s.isPurchasedExternally) {
                let e = (0, I.JE)(s.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(c.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.zxk, {
                        className: l()(Z.toolsButton, Z.externalButton),
                        size: c.zxk.Sizes.SMALL,
                        look: c.iLD.OUTLINED,
                        color: c.Ttl.WHITE,
                        submitting: R,
                        children: y.intl.string(y.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = I.ZP.isSwitchingPlansDisabled(s, F),
                    t = I.ZP.getSwitchingPlansDisabledMessage(s);
                return (0, i.jsxs)('div', {
                    className: Z.toolsButtons,
                    children: [
                        Y
                            ? (0, i.jsx)(c.zxk, {
                                  className: Z.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: J,
                                  children: y.intl.string(y.t.eFlYVF)
                              })
                            : (0, i.jsx)(c.zxk, {
                                  className: Z.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: Q,
                                  children: y.intl.string(y.t['ETE/oK'])
                              }),
                        (0, i.jsx)(c.ua7, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(A.Z, {
                                    ...t,
                                    disabled: e,
                                    className: Z.toolsButton,
                                    onClick: () => {
                                        (0, x.Z)({
                                            analyticsLocations: G,
                                            analyticsLocation: U,
                                            analyticsObject: k,
                                            subscription: s
                                        });
                                    },
                                    children: y.intl.string(y.t['dylp//'])
                                })
                        })
                    ]
                });
            }
            if (I.ZP.isBaseSubscriptionCanceled(s))
                return (0, i.jsx)(c.zxk, {
                    className: Z.toolsButton,
                    size: c.zxk.Sizes.SMALL,
                    color: c.Ttl.BRAND_INVERTED,
                    submitting: R,
                    onClick: et,
                    children: y.intl.string(y.t.iIvF29)
                });
            switch (e) {
                case P.O0b.BILLING_RETRY:
                    return (0, i.jsx)(c.zxk, {
                        className: Z.billingRetryCancel,
                        size: c.zxk.Sizes.SMALL,
                        color: c.Ttl.CUSTOM,
                        submitting: R,
                        onClick: $,
                        children: y.intl.string(y.t['ETE/oK'])
                    });
                case P.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: Z.toolsButtons,
                        children: [
                            (0, i.jsx)(c.zxk, {
                                className: Z.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                look: c.iLD.LINK,
                                color: c.Ttl.WHITE,
                                submitting: R,
                                onClick: Q,
                                children: y.intl.string(y.t.cM1H0N)
                            }),
                            (0, i.jsx)(c.zxk, {
                                className: Z.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: y.intl.string(y.t.TgV5QU)
                            })
                        ]
                    });
                case P.O0b.PAUSED:
                    if (z) return t();
                    let { durations: n } = (0, S.AT)(s);
                    return (0, i.jsxs)('div', {
                        className: Z.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(c.zxk, {
                                      className: Z.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: ei,
                                      children: y.intl.string(y.t.jNHWt7)
                                  })
                                : (0, i.jsx)(c.zxk, {
                                      className: Z.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: es,
                                      children: y.intl.string(y.t.cM1H0N)
                                  }),
                            (0, i.jsx)(c.zxk, {
                                className: Z.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: y.intl.string(y.t.zpi5pq)
                            })
                        ]
                    });
                case P.O0b.ACTIVE:
                case P.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: eo,
        shouldUseDiscountMarketing: K,
        discountAmount: W
    });
};
