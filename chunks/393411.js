n.d(t, {
    R: function () {
        return F;
    }
}),
    n(411104);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
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
    O = n(833569),
    R = n(823188),
    P = n(474936),
    y = n(981631),
    B = n(388032),
    D = n(249392);
let Z = new h.Z('SubscriptionHeader.tsx'),
    L = {
        page: y.ZY5.USER_SETTINGS,
        section: y.jXE.SETTINGS_PREMIUM,
        object: y.qAy.CARD
    },
    M = [y.O0b.PAUSED, y.O0b.PAUSE_PENDING, y.O0b.BILLING_RETRY];
function k(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: r, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(D.banner, a),
        children: [
            (0, i.jsx)('div', { className: D.bannerBackgroundImage }),
            (0, i.jsxs)('div', {
                className: D.detailsContainer,
                children: [
                    (0, i.jsx)('div', { className: D.image }),
                    (0, i.jsxs)('div', {
                        className: D.details,
                        children: [
                            (0, i.jsxs)('div', {
                                className: D.headerLabel,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: B.intl.formatToPlainString(B.t.iiLbvr, { percent: o }),
                                            className: D.discountPill,
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
                className: D.buttons,
                children: r
            })
        ]
    });
}
function w(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: r, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(D.banner, a, D.repositioned),
        children: [
            (0, i.jsx)('div', { className: D.bannerBackgroundImage }),
            (0, i.jsx)('div', {
                className: D.detailsContainer,
                children: (0, i.jsx)('div', {
                    className: D.details,
                    children: (0, i.jsxs)('div', {
                        className: D.headerLabel,
                        children: [
                            (0, i.jsx)('div', { className: D.image }),
                            (0, i.jsxs)('div', {
                                className: D.headerColumnB,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: B.intl.formatToPlainString(B.t.iiLbvr, { percent: o }),
                                            className: D.discountPill,
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
                className: D.buttons,
                children: r
            })
        ]
    });
}
function U() {
    return (0, i.jsxs)('div', {
        className: D.wordMark,
        children: [
            (0, i.jsx)(C.Z, {
                className: D.discordWordmark,
                'aria-label': B.intl.string(B.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: D.classicWordmark })
        ]
    });
}
function F() {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(k, {
        wordMark: (0, i.jsx)(U, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: D.planInfo,
            children: B.intl.string(B.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(j.Z, {
            className: D.toolsButton,
            onClick: () =>
                (0, p.Z)({
                    subscriptionTier: P.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: L
                }),
            children: B.intl.string(B.t['/ygMUV'])
        }),
        statusClasses: { [D.tier1]: !0 }
    });
}
t.Z = function (e) {
    var t;
    let { subscription: r, renewalInvoicePreview: a, paymentSource: h, busy: R, analyticsLocation: F } = e,
        { analyticsLocations: V } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER),
        { fractionalState: G } = (0, g.Z)({ forceFetch: !1 }),
        H = G === P.a$.FP_SUB_PAUSED,
        { enabled: Y } = (0, v.ZP)({ location: 'subscription_header' });
    (!P.pj.has(r.planId) || !y.JwP.ALL_PAUSEABLE.has(r.status) || H) && (Y = !1);
    let W = (0, A.Ng)(),
        z = null == W ? void 0 : null === (t = W.discount) || void 0 === t ? void 0 : t.amount,
        K = (0, N.t7)(),
        q = (0, N.lr)(),
        Q = (0, o.e7)([_.ZP], () => _.ZP.inReverseTrial()),
        X = () => {
            if (r.status === y.O0b.ACTIVE || r.status === y.O0b.PAST_DUE || r.status === y.O0b.PAUSED) ee(O.Steps.PAUSE_SELECT);
        },
        J = () => {
            if (r.status === y.O0b.ACTIVE || r.status === y.O0b.PAST_DUE || r.status === y.O0b.PAUSE_PENDING || !!H) ee();
        },
        $ = () => {
            if (r.status === y.O0b.BILLING_RETRY) ee(O.Steps.CONFIRM);
        },
        ee = (e) => {
            (0, c.openModalLazy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: r,
                        analyticsLocation: F,
                        analyticsLocations: V,
                        initialStep: e
                    });
            });
        },
        et = () => {
            if (null != r && null != r.planIdFromItems) {
                let e = f.Z.get(r.planIdFromItems);
                if (null == e) {
                    Z.info('Plan not fetched for plan id: '.concat(r.planIdFromItems));
                    return;
                }
                let t = (0, b.DE)(e, null == h ? void 0 : h.id, !1),
                    n = t.length > 0 ? t[0] : r.currency,
                    i = !1;
                1 === t.length && (null == h ? void 0 : h.id) === r.paymentSourceId && (0, b.tD)(e.id, n, null == h ? void 0 : h.id) && (i = !0),
                    i
                        ? d.O5(r, V)
                        : (0, p.Z)({
                              initialPlanId: r.planIdFromItems,
                              analyticsLocations: V,
                              analyticsLocation: F,
                              analyticsObject: L,
                              subscription: r
                          });
            }
        },
        en = () => {
            if (!M.includes(r.status) || null == r.pauseEndsAt) {
                (0, T.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: r.id,
                        status: r.status,
                        pauseEndsAt: r.pauseEndsAt
                    }
                });
                return;
            }
            r.status === y.O0b.PAUSED
                ? (0, p.Z)({
                      initialPlanId: r.planIdFromItems,
                      analyticsLocations: V,
                      analyticsLocation: F,
                      analyticsObject: L,
                      subscription: r,
                      skipConfirm: !0
                  })
                : d.v4(r, V);
        },
        ei = () => {
            if (r.status === y.O0b.PAUSED) ee(O.Steps.PAUSE_SELECT);
        },
        er = () => {
            ee(O.Steps.WHAT_YOU_LOSE);
        },
        es = S.ZP.getPlanIdFromInvoice(r, a);
    if ((0, x.Q0)(es)) return null;
    let ea = S.ZP.getStatusFromInvoice(r, a),
        el = S.ZP.getPremiumType(es),
        eo = {
            [D.tier0]: el === P.p9.TIER_0,
            [D.tier1]: el === P.p9.TIER_1,
            [D.tier2]: el === P.p9.TIER_2,
            [D.canceled]: ea === y.O0b.CANCELED,
            [D.pausePending]: ea === y.O0b.PAUSE_PENDING,
            [D.paused]: ea === y.O0b.PAUSED && !H,
            [D.failedPayment]: (0, S.zV)(ea)
        },
        ec = null;
    switch (el) {
        case P.p9.TIER_0:
            ec = (0, i.jsxs)('div', {
                className: D.wordMark,
                children: [
                    (0, i.jsx)(C.Z, {
                        className: D.discordWordmark,
                        'aria-label': B.intl.string(B.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: D.basicWordmark })
                ]
            });
            break;
        case P.p9.TIER_1:
            ec = (0, i.jsx)(U, {});
            break;
        case P.p9.TIER_2:
            ec = (0, i.jsx)(E.Z, {
                className: D.planName,
                'aria-label': B.intl.string(B.t.lpNrPj)
            });
    }
    let ed = M.includes(r.status) && !H ? w : k;
    return (0, i.jsx)(ed, {
        wordMark: ec,
        subscriptionInfo: ((e) => {
            l()(null != a, 'Expected renewalInvoicePreview');
            let t = S.ZP.getReverseTrialWeeks(r.trialId);
            return (0, i.jsx)('div', {
                className: D.planInfo,
                children: Q
                    ? B.intl.format(B.t.jLglur, { weeks: t })
                    : (0, S.qV)({
                          planId: e,
                          subscription: r,
                          renewalInvoicePreview: a,
                          hasDiscountApplied: K,
                          activeDiscountInfo: q,
                          hasFractionalPremiumWithSub: H
                      })
            });
        })(es),
        buttons: (() => {
            let { status: e } = r;
            if (r.isPurchasedExternally) {
                let e = (0, S.JE)(r.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(c.Anchor, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        className: s()(D.toolsButton, D.externalButton),
                        size: c.Button.Sizes.SMALL,
                        look: c.ButtonLooks.OUTLINED,
                        color: c.ButtonColors.WHITE,
                        submitting: R,
                        children: B.intl.string(B.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = S.ZP.isSwitchingPlansDisabled(r, G),
                    t = S.ZP.getSwitchingPlansDisabledMessage(r);
                return (0, i.jsxs)('div', {
                    className: D.toolsButtons,
                    children: [
                        Y
                            ? (0, i.jsx)(c.Button, {
                                  className: D.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: R,
                                  onClick: X,
                                  children: B.intl.string(B.t.eFlYVF)
                              })
                            : (0, i.jsx)(c.Button, {
                                  className: D.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: R,
                                  onClick: J,
                                  children: B.intl.string(B.t['ETE/oK'])
                              }),
                        (0, i.jsx)(c.Tooltip, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(j.Z, {
                                    ...t,
                                    disabled: e,
                                    className: D.toolsButton,
                                    onClick: () => {
                                        (0, p.Z)({
                                            analyticsLocations: V,
                                            analyticsLocation: F,
                                            analyticsObject: L,
                                            subscription: r
                                        });
                                    },
                                    children: B.intl.string(B.t['dylp//'])
                                })
                        })
                    ]
                });
            }
            if (S.ZP.isBaseSubscriptionCanceled(r))
                return (0, i.jsx)(c.Button, {
                    className: D.toolsButton,
                    size: c.Button.Sizes.SMALL,
                    color: c.ButtonColors.BRAND_INVERTED,
                    submitting: R,
                    onClick: et,
                    children: B.intl.string(B.t.iIvF29)
                });
            switch (e) {
                case y.O0b.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        className: D.billingRetryCancel,
                        size: c.Button.Sizes.SMALL,
                        color: c.ButtonColors.CUSTOM,
                        submitting: R,
                        onClick: $,
                        children: B.intl.string(B.t['ETE/oK'])
                    });
                case y.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: D.toolsButtons,
                        children: [
                            (0, i.jsx)(c.Button, {
                                className: D.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                look: c.ButtonLooks.LINK,
                                color: c.ButtonColors.WHITE,
                                submitting: R,
                                onClick: J,
                                children: B.intl.string(B.t.cM1H0N)
                            }),
                            (0, i.jsx)(c.Button, {
                                className: D.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: B.intl.string(B.t.TgV5QU)
                            })
                        ]
                    });
                case y.O0b.PAUSED:
                    if (H) return t();
                    let { durations: n } = (0, I.AT)(r);
                    return (0, i.jsxs)('div', {
                        className: D.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(c.Button, {
                                      className: D.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: R,
                                      onClick: ei,
                                      children: B.intl.string(B.t.jNHWt7)
                                  })
                                : (0, i.jsx)(c.Button, {
                                      className: D.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: R,
                                      onClick: er,
                                      children: B.intl.string(B.t.cM1H0N)
                                  }),
                            (0, i.jsx)(c.Button, {
                                className: D.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: B.intl.string(B.t.zpi5pq)
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
