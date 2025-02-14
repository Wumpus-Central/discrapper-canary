n.d(t, {
    R: () => V,
    Z: () => U
}),
    n(411104);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(512722),
    a = n.n(l),
    o = n(481060),
    c = n(366939),
    d = n(100527),
    u = n(906732),
    m = n(975298),
    h = n(710845),
    g = n(963249),
    x = n(301766),
    _ = n(509545),
    p = n(931331),
    E = n(754347),
    C = n(122289),
    f = n(74538),
    T = n(212895),
    N = n(296848),
    S = n(140465),
    I = n(695349),
    b = n(879463),
    v = n(104494),
    j = n(987997),
    A = n(833569),
    O = n(823188),
    R = n(474936),
    P = n(981631),
    D = n(388032),
    y = n(484760);
let Z = new h.Z('SubscriptionHeader.tsx'),
    k = {
        page: P.ZY5.USER_SETTINGS,
        section: P.jXE.SETTINGS_PREMIUM,
        object: P.qAy.CARD
    },
    L = [P.O0b.PAUSED, P.O0b.PAUSE_PENDING, P.O0b.BILLING_RETRY];
function B(e) {
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
                                        (0, i.jsx)(O.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: o }),
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
                                        (0, i.jsx)(O.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: o }),
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
function w() {
    return (0, i.jsxs)('div', {
        className: y.wordMark,
        children: [
            (0, i.jsx)(E.Z, {
                className: y.discordWordmark,
                'aria-label': D.intl.string(D.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: y.classicWordmark })
        ]
    });
}
function V() {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(B, {
        wordMark: (0, i.jsx)(w, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: y.planInfo,
            children: D.intl.string(D.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(j.Z, {
            className: y.toolsButton,
            onClick: () =>
                (0, g.Z)({
                    subscriptionTier: R.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: k
                }),
            children: D.intl.string(D.t['/ygMUV'])
        }),
        statusClasses: { [y.tier1]: !0 }
    });
}
let U = function (e) {
    var t;
    let { subscription: s, renewalInvoicePreview: l, paymentSource: h, busy: O, analyticsLocation: V } = e,
        { analyticsLocations: U } = (0, u.ZP)(d.Z.SUBSCRIPTION_HEADER),
        { fractionalState: G } = (0, m.Z)({ forceFetch: !1 }),
        F = G === R.a$.FP_SUB_PAUSED,
        { enabled: H } = (0, b.ZP)({ location: 'subscription_header' });
    (R.pj.has(s.planId) && P.JwP.ALL_PAUSEABLE.has(s.status) && !F) || (H = !1);
    let z = (0, v.Ng)(),
        Y = null == z ? void 0 : null === (t = z.discount) || void 0 === t ? void 0 : t.amount,
        W = (0, S.t7)(),
        K = (0, S.lr)(),
        q = (0, I.W)(),
        X = () => {
            (s.status === P.O0b.ACTIVE || s.status === P.O0b.PAST_DUE || s.status === P.O0b.PAUSED) && $(A.R.PAUSE_SELECT);
        },
        J = () => {
            (s.status === P.O0b.ACTIVE || s.status === P.O0b.PAST_DUE || s.status === P.O0b.PAUSE_PENDING || F) && $();
        },
        Q = () => {
            s.status === P.O0b.BILLING_RETRY && $(A.R.CONFIRM);
        },
        $ = (e) => {
            (0, o.ZDy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: s,
                        analyticsLocation: V,
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
                let t = (0, T.DE)(e, null == h ? void 0 : h.id, !1),
                    n = t.length > 0 ? t[0] : s.currency,
                    i = !1;
                1 === t.length && (null == h ? void 0 : h.id) === s.paymentSourceId && (0, T.tD)(e.id, n, null == h ? void 0 : h.id) && (i = !0),
                    i
                        ? c.O5(s, U)
                        : (0, g.Z)({
                              initialPlanId: s.planIdFromItems,
                              analyticsLocations: U,
                              analyticsLocation: V,
                              analyticsObject: k,
                              subscription: s
                          });
            }
        },
        et = () => {
            if (!L.includes(s.status) || null == s.pauseEndsAt) {
                (0, C.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: s.id,
                        status: s.status,
                        pauseEndsAt: s.pauseEndsAt
                    }
                });
                return;
            }
            s.status === P.O0b.PAUSED
                ? (0, g.Z)({
                      initialPlanId: s.planIdFromItems,
                      analyticsLocations: U,
                      analyticsLocation: V,
                      analyticsObject: k,
                      subscription: s,
                      skipConfirm: !0
                  })
                : c.v4(s, U);
        },
        en = () => {
            s.status === P.O0b.PAUSED && $(A.R.PAUSE_SELECT);
        },
        ei = () => {
            $(A.R.WHAT_YOU_LOSE);
        },
        es = f.ZP.getPlanIdFromInvoice(s, l);
    if ((0, x.Q0)(es)) return null;
    let er = f.ZP.getStatusFromInvoice(s, l),
        el = f.ZP.getPremiumType(es),
        ea = {
            [y.tier0]: el === R.p9.TIER_0,
            [y.tier1]: el === R.p9.TIER_1,
            [y.tier2]: el === R.p9.TIER_2,
            [y.canceled]: er === P.O0b.CANCELED,
            [y.pausePending]: er === P.O0b.PAUSE_PENDING,
            [y.paused]: er === P.O0b.PAUSED && !F,
            [y.failedPayment]: (0, f.zV)(er)
        },
        eo = null;
    switch (el) {
        case R.p9.TIER_0:
            eo = (0, i.jsxs)('div', {
                className: y.wordMark,
                children: [
                    (0, i.jsx)(E.Z, {
                        className: y.discordWordmark,
                        'aria-label': D.intl.string(D.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: y.basicWordmark })
                ]
            });
            break;
        case R.p9.TIER_1:
            eo = (0, i.jsx)(w, {});
            break;
        case R.p9.TIER_2:
            eo = (0, i.jsx)(p.Z, {
                className: y.planName,
                'aria-label': D.intl.string(D.t.lpNrPj)
            });
    }
    let ec = L.includes(s.status) && !F ? M : B;
    return (0, i.jsx)(ec, {
        wordMark: eo,
        subscriptionInfo:
            (a()(null != l, 'Expected renewalInvoicePreview'),
            (0, i.jsx)('div', {
                className: y.planInfo,
                children: q
                    ? D.intl.format(D.t['/SfHws'], { weeks: 1 })
                    : (0, f.qV)({
                          planId: es,
                          subscription: s,
                          renewalInvoicePreview: l,
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
                        className: r()(y.toolsButton, y.externalButton),
                        size: o.zxk.Sizes.SMALL,
                        look: o.iLD.OUTLINED,
                        color: o.Ttl.WHITE,
                        submitting: O,
                        children: D.intl.string(D.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = f.ZP.isSwitchingPlansDisabled(s, G),
                    t = f.ZP.getSwitchingPlansDisabledMessage(s);
                return (0, i.jsxs)('div', {
                    className: y.toolsButtons,
                    children: [
                        H
                            ? (0, i.jsx)(o.zxk, {
                                  className: y.toolsButton,
                                  size: o.zxk.Sizes.SMALL,
                                  look: o.iLD.LINK,
                                  color: o.Ttl.WHITE,
                                  submitting: O,
                                  onClick: X,
                                  children: D.intl.string(D.t.eFlYVF)
                              })
                            : (0, i.jsx)(o.zxk, {
                                  className: y.toolsButton,
                                  size: o.zxk.Sizes.SMALL,
                                  look: o.iLD.LINK,
                                  color: o.Ttl.WHITE,
                                  submitting: O,
                                  onClick: J,
                                  children: D.intl.string(D.t['ETE/oK'])
                              }),
                        (0, i.jsx)(o.ua7, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(j.Z, {
                                    ...t,
                                    disabled: e,
                                    className: y.toolsButton,
                                    onClick: () => {
                                        (0, g.Z)({
                                            analyticsLocations: U,
                                            analyticsLocation: V,
                                            analyticsObject: k,
                                            subscription: s
                                        });
                                    },
                                    children: D.intl.string(D.t['dylp//'])
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
                    children: D.intl.string(D.t.iIvF29)
                });
            switch (e) {
                case P.O0b.BILLING_RETRY:
                    return (0, i.jsx)(o.zxk, {
                        className: y.billingRetryCancel,
                        size: o.zxk.Sizes.SMALL,
                        color: o.Ttl.CUSTOM,
                        submitting: O,
                        onClick: Q,
                        children: D.intl.string(D.t['ETE/oK'])
                    });
                case P.O0b.PAUSE_PENDING:
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
                                children: D.intl.string(D.t.cM1H0N)
                            }),
                            (0, i.jsx)(o.zxk, {
                                className: y.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                color: o.Ttl.BRAND_INVERTED,
                                submitting: O,
                                onClick: et,
                                children: D.intl.string(D.t.TgV5QU)
                            })
                        ]
                    });
                case P.O0b.PAUSED:
                    if (F) return t();
                    let { durations: n } = (0, N.AT)(s);
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
                                      children: D.intl.string(D.t.jNHWt7)
                                  })
                                : (0, i.jsx)(o.zxk, {
                                      className: y.linkButton,
                                      size: o.zxk.Sizes.SMALL,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.WHITE,
                                      submitting: O,
                                      onClick: ei,
                                      children: D.intl.string(D.t.cM1H0N)
                                  }),
                            (0, i.jsx)(o.zxk, {
                                className: y.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                color: o.Ttl.BRAND_INVERTED,
                                submitting: O,
                                onClick: et,
                                children: D.intl.string(D.t.zpi5pq)
                            })
                        ]
                    });
                case P.O0b.ACTIVE:
                case P.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: ea,
        shouldUseDiscountMarketing: W,
        discountAmount: Y
    });
};
