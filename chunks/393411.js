n.d(t, {
    R: () => V,
    Z: () => G
}),
    n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(512722),
    l = n.n(a),
    o = n(481060),
    c = n(366939),
    d = n(100527),
    u = n(906732),
    m = n(975298),
    g = n(710845),
    p = n(963249),
    h = n(301766),
    f = n(509545),
    b = n(931331),
    N = n(754347),
    x = n(122289),
    _ = n(74538),
    E = n(212895),
    j = n(296848),
    C = n(140465),
    O = n(695349),
    v = n(879463),
    S = n(104494),
    T = n(987997),
    I = n(833569),
    y = n(823188),
    A = n(474936),
    P = n(981631),
    R = n(388032),
    D = n(313287);
function Z(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = new g.Z('SubscriptionHeader.tsx'),
    W = {
        page: P.ZY5.USER_SETTINGS,
        section: P.jXE.SETTINGS_PREMIUM,
        object: P.qAy.CARD
    },
    L = [P.O0b.PAUSED, P.O0b.PAUSE_PENDING, P.O0b.BILLING_RETRY];
function B(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: i, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, r.jsxs)('div', {
        className: s()(D.banner, a),
        children: [
            (0, r.jsx)('div', { className: D.bannerBackgroundImage }),
            (0, r.jsxs)('div', {
                className: D.detailsContainer,
                children: [
                    (0, r.jsx)('div', { className: D.image }),
                    (0, r.jsxs)('div', {
                        className: D.details,
                        children: [
                            (0, r.jsxs)('div', {
                                className: D.headerLabel,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, r.jsx)(y.Cy, {
                                            text: R.NW.formatToPlainString(R.t.iiLbvr, { percent: o }),
                                            className: D.discountPill,
                                            colorOptions: y.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        })
                                ]
                            }),
                            n
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: D.buttons,
                children: i
            })
        ]
    });
}
function M(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: i, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, r.jsxs)('div', {
        className: s()(D.banner, a, D.repositioned),
        children: [
            (0, r.jsx)('div', { className: D.bannerBackgroundImage }),
            (0, r.jsx)('div', {
                className: D.detailsContainer,
                children: (0, r.jsx)('div', {
                    className: D.details,
                    children: (0, r.jsxs)('div', {
                        className: D.headerLabel,
                        children: [
                            (0, r.jsx)('div', { className: D.image }),
                            (0, r.jsxs)('div', {
                                className: D.headerColumnB,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, r.jsx)(y.Cy, {
                                            text: R.NW.formatToPlainString(R.t.iiLbvr, { percent: o }),
                                            className: D.discountPill,
                                            colorOptions: y.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        }),
                                    n
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, r.jsx)('div', {
                className: D.buttons,
                children: i
            })
        ]
    });
}
function U() {
    return (0, r.jsxs)('div', {
        className: D.wordMark,
        children: [
            (0, r.jsx)(N.Z, {
                className: D.discordWordmark,
                'aria-label': R.NW.string(R.t['FSOz7+'])
            }),
            (0, r.jsx)('div', { className: D.classicWordmark })
        ]
    });
}
function V() {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(B, {
        wordMark: (0, r.jsx)(U, {}),
        subscriptionInfo: (0, r.jsx)('div', {
            className: D.planInfo,
            children: R.NW.string(R.t.R0GJLy)
        }),
        buttons: (0, r.jsx)(T.Z, {
            className: D.toolsButton,
            onClick: () =>
                (0, p.Z)({
                    subscriptionTier: A.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: W
                }),
            children: R.NW.string(R.t['/ygMUV'])
        }),
        statusClasses: { [D.tier1]: !0 }
    });
}
let G = function (e) {
    var t;
    let { subscription: i, renewalInvoicePreview: a, paymentSource: g, busy: y, analyticsLocation: V } = e,
        { analyticsLocations: G } = (0, u.ZP)(d.Z.SUBSCRIPTION_HEADER),
        { fractionalState: F } = (0, m.Z)({ forceFetch: !1 }),
        H = F === A.a$.FP_SUB_PAUSED,
        { enabled: z } = (0, v.ZP)({ location: 'subscription_header' });
    (A.pj.has(i.planId) && P.JwP.ALL_PAUSEABLE.has(i.status) && !H) || (z = !1);
    let Y = (0, S.Ng)(),
        K = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.amount,
        q = (0, C.t7)(),
        X = (0, C.lr)(),
        J = (0, O.W)(),
        Q = () => {
            (i.status === P.O0b.ACTIVE || i.status === P.O0b.PAST_DUE || i.status === P.O0b.PAUSED) && et(I.R.PAUSE_SELECT);
        },
        $ = () => {
            (i.status === P.O0b.ACTIVE || i.status === P.O0b.PAST_DUE || i.status === P.O0b.PAUSE_PENDING || H) && et();
        },
        ee = () => {
            i.status === P.O0b.BILLING_RETRY && et(I.R.CONFIRM);
        },
        et = (e) => {
            (0, o.ZDy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        w(Z({}, n), {
                            premiumSubscription: i,
                            analyticsLocation: V,
                            analyticsLocations: G,
                            initialStep: e
                        })
                    );
            });
        },
        en = () => {
            if (null != i && null != i.planIdFromItems) {
                let e = f.Z.get(i.planIdFromItems);
                if (null == e) {
                    k.info('Plan not fetched for plan id: '.concat(i.planIdFromItems));
                    return;
                }
                let t = (0, E.DE)(e, null == g ? void 0 : g.id, !1),
                    n = t.length > 0 ? t[0] : i.currency,
                    r = !1;
                1 === t.length && (null == g ? void 0 : g.id) === i.paymentSourceId && (0, E.tD)(e.id, n, null == g ? void 0 : g.id) && (r = !0),
                    r
                        ? c.O5(i, G)
                        : (0, p.Z)({
                              initialPlanId: i.planIdFromItems,
                              analyticsLocations: G,
                              analyticsLocation: V,
                              analyticsObject: W,
                              subscription: i
                          });
            }
        },
        er = () => {
            if (!L.includes(i.status) || null == i.pauseEndsAt) {
                (0, x.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: i.id,
                        status: i.status,
                        pauseEndsAt: i.pauseEndsAt
                    }
                });
                return;
            }
            i.status === P.O0b.PAUSED
                ? (0, p.Z)({
                      initialPlanId: i.planIdFromItems,
                      analyticsLocations: G,
                      analyticsLocation: V,
                      analyticsObject: W,
                      subscription: i,
                      skipConfirm: !0
                  })
                : c.v4(i, G);
        },
        ei = () => {
            i.status === P.O0b.PAUSED && et(I.R.PAUSE_SELECT);
        },
        es = () => {
            et(I.R.WHAT_YOU_LOSE);
        },
        ea = _.ZP.getPlanIdFromInvoice(i, a);
    if ((0, h.Q0)(ea)) return null;
    let el = _.ZP.getStatusFromInvoice(i, a),
        eo = _.ZP.getPremiumType(ea),
        ec = {
            [D.tier0]: eo === A.p9.TIER_0,
            [D.tier1]: eo === A.p9.TIER_1,
            [D.tier2]: eo === A.p9.TIER_2,
            [D.canceled]: el === P.O0b.CANCELED,
            [D.pausePending]: el === P.O0b.PAUSE_PENDING,
            [D.paused]: el === P.O0b.PAUSED && !H,
            [D.failedPayment]: (0, _.zV)(el)
        },
        ed = null;
    switch (eo) {
        case A.p9.TIER_0:
            ed = (0, r.jsxs)('div', {
                className: D.wordMark,
                children: [
                    (0, r.jsx)(N.Z, {
                        className: D.discordWordmark,
                        'aria-label': R.NW.string(R.t['t9uG/v'])
                    }),
                    (0, r.jsx)('div', { className: D.basicWordmark })
                ]
            });
            break;
        case A.p9.TIER_1:
            ed = (0, r.jsx)(U, {});
            break;
        case A.p9.TIER_2:
            ed = (0, r.jsx)(b.Z, {
                className: D.planName,
                'aria-label': R.NW.string(R.t.lpNrPj)
            });
    }
    let eu = L.includes(i.status) && !H ? M : B;
    return (0, r.jsx)(eu, {
        wordMark: ed,
        subscriptionInfo:
            (l()(null != a, 'Expected renewalInvoicePreview'),
            (0, r.jsx)('div', {
                className: D.planInfo,
                children: J
                    ? R.NW.format(R.t['/SfHws'], { weeks: 1 })
                    : (0, _.qV)({
                          planId: ea,
                          subscription: i,
                          renewalInvoicePreview: a,
                          hasDiscountApplied: q,
                          activeDiscountInfo: X,
                          hasFractionalPremiumWithSub: H
                      })
            })),
        buttons: (() => {
            let { status: e } = i;
            if (i.isPurchasedExternally) {
                let e = (0, _.JE)(i.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, r.jsx)(o.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(o.zxk, {
                        className: s()(D.toolsButton, D.externalButton),
                        size: o.zxk.Sizes.SMALL,
                        look: o.iLD.OUTLINED,
                        color: o.Ttl.WHITE,
                        submitting: y,
                        children: R.NW.string(R.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = _.ZP.isSwitchingPlansDisabled(i, F),
                    t = _.ZP.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)('div', {
                    className: D.toolsButtons,
                    children: [
                        z
                            ? (0, r.jsx)(o.zxk, {
                                  className: D.toolsButton,
                                  size: o.zxk.Sizes.SMALL,
                                  look: o.iLD.LINK,
                                  color: o.Ttl.WHITE,
                                  submitting: y,
                                  onClick: Q,
                                  children: R.NW.string(R.t.eFlYVF)
                              })
                            : (0, r.jsx)(o.zxk, {
                                  className: D.toolsButton,
                                  size: o.zxk.Sizes.SMALL,
                                  look: o.iLD.LINK,
                                  color: o.Ttl.WHITE,
                                  submitting: y,
                                  onClick: $,
                                  children: R.NW.string(R.t['ETE/oK'])
                              }),
                        (0, r.jsx)(o.ua7, {
                            text: t,
                            children: (t) =>
                                (0, r.jsx)(
                                    T.Z,
                                    w(Z({}, t), {
                                        disabled: e,
                                        className: D.toolsButton,
                                        onClick: () => {
                                            (0, p.Z)({
                                                analyticsLocations: G,
                                                analyticsLocation: V,
                                                analyticsObject: W,
                                                subscription: i
                                            });
                                        },
                                        children: R.NW.string(R.t['dylp//'])
                                    })
                                )
                        })
                    ]
                });
            }
            if (_.ZP.isBaseSubscriptionCanceled(i))
                return (0, r.jsx)(o.zxk, {
                    className: D.toolsButton,
                    size: o.zxk.Sizes.SMALL,
                    color: o.Ttl.BRAND_INVERTED,
                    submitting: y,
                    onClick: en,
                    children: R.NW.string(R.t.iIvF29)
                });
            switch (e) {
                case P.O0b.BILLING_RETRY:
                    return (0, r.jsx)(o.zxk, {
                        className: D.billingRetryCancel,
                        size: o.zxk.Sizes.SMALL,
                        color: o.Ttl.CUSTOM,
                        submitting: y,
                        onClick: ee,
                        children: R.NW.string(R.t['ETE/oK'])
                    });
                case P.O0b.PAUSE_PENDING:
                    return (0, r.jsxs)('div', {
                        className: D.toolsButtons,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                className: D.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                look: o.iLD.LINK,
                                color: o.Ttl.WHITE,
                                submitting: y,
                                onClick: $,
                                children: R.NW.string(R.t.cM1H0N)
                            }),
                            (0, r.jsx)(o.zxk, {
                                className: D.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                color: o.Ttl.BRAND_INVERTED,
                                submitting: y,
                                onClick: er,
                                children: R.NW.string(R.t.TgV5QU)
                            })
                        ]
                    });
                case P.O0b.PAUSED:
                    if (H) return t();
                    let { durations: n } = (0, j.AT)(i);
                    return (0, r.jsxs)('div', {
                        className: D.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, r.jsx)(o.zxk, {
                                      className: D.linkButton,
                                      size: o.zxk.Sizes.SMALL,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.WHITE,
                                      submitting: y,
                                      onClick: ei,
                                      children: R.NW.string(R.t.jNHWt7)
                                  })
                                : (0, r.jsx)(o.zxk, {
                                      className: D.linkButton,
                                      size: o.zxk.Sizes.SMALL,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.WHITE,
                                      submitting: y,
                                      onClick: es,
                                      children: R.NW.string(R.t.cM1H0N)
                                  }),
                            (0, r.jsx)(o.zxk, {
                                className: D.toolsButton,
                                size: o.zxk.Sizes.SMALL,
                                color: o.Ttl.BRAND_INVERTED,
                                submitting: y,
                                onClick: er,
                                children: R.NW.string(R.t.zpi5pq)
                            })
                        ]
                    });
                case P.O0b.ACTIVE:
                case P.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: ec,
        shouldUseDiscountMarketing: q,
        discountAmount: K
    });
};
