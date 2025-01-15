n.d(t, {
    R: function () {
        return U;
    }
}),
    n(411104);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(366939),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    h = n(710845),
    p = n(963249),
    x = n(301766),
    f = n(509545),
    _ = n(78839),
    E = n(931331),
    C = n(754347),
    T = n(122289),
    S = n(74538),
    b = n(212895),
    I = n(296848),
    N = n(140465),
    v = n(879463),
    A = n(104494),
    j = n(987997),
    R = n(833569),
    O = n(823188),
    P = n(474936),
    y = n(981631),
    D = n(388032),
    B = n(236438);
let Z = new h.Z('SubscriptionHeader.tsx'),
    L = {
        page: y.ZY5.USER_SETTINGS,
        section: y.jXE.SETTINGS_PREMIUM,
        object: y.qAy.CARD
    },
    M = [y.O0b.PAUSED, y.O0b.PAUSE_PENDING, y.O0b.BILLING_RETRY];
function k(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: r()(B.banner, a),
        children: [
            (0, i.jsx)('div', { className: B.bannerBackgroundImage }),
            (0, i.jsxs)('div', {
                className: B.detailsContainer,
                children: [
                    (0, i.jsx)('div', { className: B.image }),
                    (0, i.jsxs)('div', {
                        className: B.details,
                        children: [
                            (0, i.jsxs)('div', {
                                className: B.headerLabel,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(O.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: o }),
                                            className: B.discountPill,
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
                className: B.buttons,
                children: s
            })
        ]
    });
}
function w(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: r()(B.banner, a, B.repositioned),
        children: [
            (0, i.jsx)('div', { className: B.bannerBackgroundImage }),
            (0, i.jsx)('div', {
                className: B.detailsContainer,
                children: (0, i.jsx)('div', {
                    className: B.details,
                    children: (0, i.jsxs)('div', {
                        className: B.headerLabel,
                        children: [
                            (0, i.jsx)('div', { className: B.image }),
                            (0, i.jsxs)('div', {
                                className: B.headerColumnB,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(O.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: o }),
                                            className: B.discountPill,
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
                className: B.buttons,
                children: s
            })
        ]
    });
}
function F() {
    return (0, i.jsxs)('div', {
        className: B.wordMark,
        children: [
            (0, i.jsx)(C.Z, {
                className: B.discordWordmark,
                'aria-label': D.intl.string(D.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: B.classicWordmark })
        ]
    });
}
function U() {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(k, {
        wordMark: (0, i.jsx)(F, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: B.planInfo,
            children: D.intl.string(D.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(j.Z, {
            className: B.toolsButton,
            onClick: () =>
                (0, p.Z)({
                    subscriptionTier: P.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: L
                }),
            children: D.intl.string(D.t['/ygMUV'])
        }),
        statusClasses: { [B.tier1]: !0 }
    });
}
t.Z = function (e) {
    var t;
    let { subscription: s, renewalInvoicePreview: a, paymentSource: h, busy: O, analyticsLocation: U } = e,
        { analyticsLocations: V } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER),
        { fractionalState: G } = (0, g.Z)({ forceFetch: !1 }),
        H = G === P.a$.FP_SUB_PAUSED,
        { enabled: Y } = (0, v.ZP)({ location: 'subscription_header' });
    (!P.pj.has(s.planId) || !y.JwP.ALL_PAUSEABLE.has(s.status) || H) && (Y = !1);
    let W = (0, A.Ng)(),
        z = null == W ? void 0 : null === (t = W.discount) || void 0 === t ? void 0 : t.amount,
        K = (0, N.t7)(),
        q = (0, N.lr)(),
        Q = (0, o.e7)([_.ZP], () => _.ZP.inReverseTrial()),
        X = () => {
            if (s.status === y.O0b.ACTIVE || s.status === y.O0b.PAST_DUE || s.status === y.O0b.PAUSED) ee(R.Steps.PAUSE_SELECT);
        },
        J = () => {
            if (s.status === y.O0b.ACTIVE || s.status === y.O0b.PAST_DUE || s.status === y.O0b.PAUSE_PENDING || !!H) ee();
        },
        $ = () => {
            if (s.status === y.O0b.BILLING_RETRY) ee(R.Steps.CONFIRM);
        },
        ee = (e) => {
            (0, c.openModalLazy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: s,
                        analyticsLocation: U,
                        analyticsLocations: V,
                        initialStep: e
                    });
            });
        },
        et = () => {
            if (null != s && null != s.planIdFromItems) {
                let e = f.Z.get(s.planIdFromItems);
                if (null == e) {
                    Z.info('Plan not fetched for plan id: '.concat(s.planIdFromItems));
                    return;
                }
                let t = (0, b.DE)(e, null == h ? void 0 : h.id, !1),
                    n = t.length > 0 ? t[0] : s.currency,
                    i = !1;
                1 === t.length && (null == h ? void 0 : h.id) === s.paymentSourceId && (0, b.tD)(e.id, n, null == h ? void 0 : h.id) && (i = !0),
                    i
                        ? d.O5(s, V)
                        : (0, p.Z)({
                              initialPlanId: s.planIdFromItems,
                              analyticsLocations: V,
                              analyticsLocation: U,
                              analyticsObject: L,
                              subscription: s
                          });
            }
        },
        en = () => {
            if (!M.includes(s.status) || null == s.pauseEndsAt) {
                (0, T.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: s.id,
                        status: s.status,
                        pauseEndsAt: s.pauseEndsAt
                    }
                });
                return;
            }
            s.status === y.O0b.PAUSED
                ? (0, p.Z)({
                      initialPlanId: s.planIdFromItems,
                      analyticsLocations: V,
                      analyticsLocation: U,
                      analyticsObject: L,
                      subscription: s,
                      skipConfirm: !0
                  })
                : d.v4(s, V);
        },
        ei = () => {
            if (s.status === y.O0b.PAUSED) ee(R.Steps.PAUSE_SELECT);
        },
        es = () => {
            ee(R.Steps.WHAT_YOU_LOSE);
        },
        er = S.ZP.getPlanIdFromInvoice(s, a);
    if ((0, x.Q0)(er)) return null;
    let ea = S.ZP.getStatusFromInvoice(s, a),
        el = S.ZP.getPremiumType(er),
        eo = {
            [B.tier0]: el === P.p9.TIER_0,
            [B.tier1]: el === P.p9.TIER_1,
            [B.tier2]: el === P.p9.TIER_2,
            [B.canceled]: ea === y.O0b.CANCELED,
            [B.pausePending]: ea === y.O0b.PAUSE_PENDING,
            [B.paused]: ea === y.O0b.PAUSED && !H,
            [B.failedPayment]: (0, S.zV)(ea)
        },
        ec = null;
    switch (el) {
        case P.p9.TIER_0:
            ec = (0, i.jsxs)('div', {
                className: B.wordMark,
                children: [
                    (0, i.jsx)(C.Z, {
                        className: B.discordWordmark,
                        'aria-label': D.intl.string(D.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: B.basicWordmark })
                ]
            });
            break;
        case P.p9.TIER_1:
            ec = (0, i.jsx)(F, {});
            break;
        case P.p9.TIER_2:
            ec = (0, i.jsx)(E.Z, {
                className: B.planName,
                'aria-label': D.intl.string(D.t.lpNrPj)
            });
    }
    let ed = M.includes(s.status) && !H ? w : k;
    return (0, i.jsx)(ed, {
        wordMark: ec,
        subscriptionInfo: ((e) => {
            l()(null != a, 'Expected renewalInvoicePreview');
            let t = S.ZP.getReverseTrialWeeks(s.trialId);
            return (0, i.jsx)('div', {
                className: B.planInfo,
                children: Q
                    ? D.intl.format(D.t.jLglur, { weeks: t })
                    : (0, S.qV)({
                          planId: e,
                          subscription: s,
                          renewalInvoicePreview: a,
                          hasDiscountApplied: K,
                          activeDiscountInfo: q,
                          hasFractionalPremiumWithSub: H
                      })
            });
        })(er),
        buttons: (() => {
            let { status: e } = s;
            if (s.isPurchasedExternally) {
                let e = (0, S.JE)(s.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(c.Anchor, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        className: r()(B.toolsButton, B.externalButton),
                        size: c.Button.Sizes.SMALL,
                        look: c.ButtonLooks.OUTLINED,
                        color: c.ButtonColors.WHITE,
                        submitting: O,
                        children: D.intl.string(D.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = S.ZP.isSwitchingPlansDisabled(s, G),
                    t = S.ZP.getSwitchingPlansDisabledMessage(s);
                return (0, i.jsxs)('div', {
                    className: B.toolsButtons,
                    children: [
                        Y
                            ? (0, i.jsx)(c.Button, {
                                  className: B.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: O,
                                  onClick: X,
                                  children: D.intl.string(D.t.eFlYVF)
                              })
                            : (0, i.jsx)(c.Button, {
                                  className: B.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: O,
                                  onClick: J,
                                  children: D.intl.string(D.t['ETE/oK'])
                              }),
                        (0, i.jsx)(c.Tooltip, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(j.Z, {
                                    ...t,
                                    disabled: e,
                                    className: B.toolsButton,
                                    onClick: () => {
                                        (0, p.Z)({
                                            analyticsLocations: V,
                                            analyticsLocation: U,
                                            analyticsObject: L,
                                            subscription: s
                                        });
                                    },
                                    children: D.intl.string(D.t['dylp//'])
                                })
                        })
                    ]
                });
            }
            if (S.ZP.isBaseSubscriptionCanceled(s))
                return (0, i.jsx)(c.Button, {
                    className: B.toolsButton,
                    size: c.Button.Sizes.SMALL,
                    color: c.ButtonColors.BRAND_INVERTED,
                    submitting: O,
                    onClick: et,
                    children: D.intl.string(D.t.iIvF29)
                });
            switch (e) {
                case y.O0b.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        className: B.billingRetryCancel,
                        size: c.Button.Sizes.SMALL,
                        color: c.ButtonColors.CUSTOM,
                        submitting: O,
                        onClick: $,
                        children: D.intl.string(D.t['ETE/oK'])
                    });
                case y.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: B.toolsButtons,
                        children: [
                            (0, i.jsx)(c.Button, {
                                className: B.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                look: c.ButtonLooks.LINK,
                                color: c.ButtonColors.WHITE,
                                submitting: O,
                                onClick: J,
                                children: D.intl.string(D.t.cM1H0N)
                            }),
                            (0, i.jsx)(c.Button, {
                                className: B.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: O,
                                onClick: en,
                                children: D.intl.string(D.t.TgV5QU)
                            })
                        ]
                    });
                case y.O0b.PAUSED:
                    if (H) return t();
                    let { durations: n } = (0, I.AT)(s);
                    return (0, i.jsxs)('div', {
                        className: B.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(c.Button, {
                                      className: B.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: O,
                                      onClick: ei,
                                      children: D.intl.string(D.t.jNHWt7)
                                  })
                                : (0, i.jsx)(c.Button, {
                                      className: B.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: O,
                                      onClick: es,
                                      children: D.intl.string(D.t.cM1H0N)
                                  }),
                            (0, i.jsx)(c.Button, {
                                className: B.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: O,
                                onClick: en,
                                children: D.intl.string(D.t.zpi5pq)
                            })
                        ]
                    });
                case y.O0b.ACTIVE:
                case y.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: eo,
        shouldUseDiscountMarketing: K,
        discountAmount: z
    });
};
