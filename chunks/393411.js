n.d(t, {
    R: () => z,
    Z: () => W
}),
    n(415506);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(366939),
    u = n(100527),
    m = n(906732),
    p = n(975298),
    g = n(710845),
    h = n(963249),
    f = n(301766),
    b = n(594174),
    _ = n(509545),
    x = n(931331),
    E = n(754347),
    j = n(122289),
    C = n(74538),
    O = n(212895),
    S = n(296848),
    v = n(140465),
    T = n(695349),
    N = n(404380),
    I = n(879463),
    y = n(104494),
    A = n(987997),
    P = n(833569),
    R = n(823188),
    D = n(474936),
    Z = n(981631),
    w = n(388032),
    k = n(4856);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = new g.Z('SubscriptionHeader.tsx'),
    U = {
        page: Z.ZY5.USER_SETTINGS,
        section: Z.jXE.SETTINGS_PREMIUM,
        object: Z.qAy.CARD
    },
    V = [Z.O0b.PAUSED, Z.O0b.PAUSE_PENDING, Z.O0b.BILLING_RETRY];
function G(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: r, statusClasses: l, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(k.banner, l),
        children: [
            (0, i.jsx)('div', { className: k.bannerBackgroundImage }),
            (0, i.jsxs)('div', {
                className: k.detailsContainer,
                children: [
                    (0, i.jsx)('div', { className: k.image }),
                    (0, i.jsxs)('div', {
                        className: k.details,
                        children: [
                            (0, i.jsxs)('div', {
                                className: k.headerLabel,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: w.intl.formatToPlainString(w.t.iiLbvr, { percent: o }),
                                            className: k.discountPill,
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
                className: k.buttons,
                children: r
            })
        ]
    });
}
function F(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: r, statusClasses: l, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(k.banner, l, k.repositioned),
        children: [
            (0, i.jsx)('div', { className: k.bannerBackgroundImage }),
            (0, i.jsx)('div', {
                className: k.detailsContainer,
                children: (0, i.jsx)('div', {
                    className: k.details,
                    children: (0, i.jsxs)('div', {
                        className: k.headerLabel,
                        children: [
                            (0, i.jsx)('div', { className: k.image }),
                            (0, i.jsxs)('div', {
                                className: k.headerColumnB,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: w.intl.formatToPlainString(w.t.iiLbvr, { percent: o }),
                                            className: k.discountPill,
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
                className: k.buttons,
                children: r
            })
        ]
    });
}
function H() {
    return (0, i.jsxs)('div', {
        className: k.wordMark,
        children: [
            (0, i.jsx)(E.Z, {
                className: k.discordWordmark,
                'aria-label': w.intl.string(w.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: k.classicWordmark })
        ]
    });
}
function z() {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(G, {
        wordMark: (0, i.jsx)(H, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: k.planInfo,
            children: w.intl.string(w.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(A.Z, {
            className: k.toolsButton,
            onClick: () =>
                (0, h.Z)({
                    subscriptionTier: D.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: U
                }),
            children: w.intl.string(w.t['/ygMUV'])
        }),
        statusClasses: { [k.tier1]: !0 }
    });
}
let W = function (e) {
    var t;
    let { subscription: r, renewalInvoicePreview: l, paymentSource: g, busy: R, analyticsLocation: z } = e,
        W = 'subscription_header',
        { analyticsLocations: Y } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER),
        K = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        { fractionalState: q } = (0, p.Z)({ forceFetch: !1 }),
        X = q === D.a$.FP_SUB_PAUSED,
        { enabled: Q } = (0, I.ZP)({ location: W });
    (D.pj.has(r.planId) && Z.JwP.ALL_PAUSEABLE.has(r.status) && !X) || (Q = !1);
    let J = (0, y.Ng)(),
        $ = null == J || null == (t = J.discount) ? void 0 : t.amount,
        ee = (0, v.t7)(),
        et = (0, v.lr)(),
        en = (0, T.W)(),
        ei = () => {
            (r.status === Z.O0b.ACTIVE || r.status === Z.O0b.PAST_DUE || r.status === Z.O0b.PAUSED) && el(P.R.PAUSE_SELECT);
        },
        er = () => {
            (r.status === Z.O0b.ACTIVE || r.status === Z.O0b.PAST_DUE || r.status === Z.O0b.PAUSE_PENDING || X) && el();
        },
        es = () => {
            r.status === Z.O0b.BILLING_RETRY && el(P.R.CONFIRM);
        },
        el = (e) => {
            (0, c.ZDy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        M(L({}, n), {
                            premiumSubscription: r,
                            analyticsLocation: z,
                            analyticsLocations: Y,
                            initialStep: e
                        })
                    );
            });
        },
        ea = () => {
            if (null != r && null != r.premiumPlanIdFromItems) {
                let e = _.Z.get(r.premiumPlanIdFromItems);
                if (null == e) return void B.info('Plan not fetched for plan id: '.concat(r.premiumPlanIdFromItems));
                let t = (0, O.DE)(e, null == g ? void 0 : g.id, !1),
                    n = t.length > 0 ? t[0] : r.currency,
                    i = !1;
                1 === t.length && (null == g ? void 0 : g.id) === r.paymentSourceId && (0, O.tD)(e.id, n, null == g ? void 0 : g.id) && (i = !0),
                    i
                        ? d.O5(r, Y)
                        : (0, h.Z)({
                              initialPlanId: r.premiumPlanIdFromItems,
                              analyticsLocations: Y,
                              analyticsLocation: z,
                              analyticsObject: U,
                              subscription: r
                          });
            }
        },
        eo = () => {
            if (!V.includes(r.status) || null == r.pauseEndsAt)
                return void (0, j.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: r.id,
                        status: r.status,
                        pauseEndsAt: r.pauseEndsAt
                    }
                });
            r.status === Z.O0b.PAUSED
                ? (0, h.Z)({
                      initialPlanId: r.premiumPlanIdFromItems,
                      analyticsLocations: Y,
                      analyticsLocation: z,
                      analyticsObject: U,
                      subscription: r,
                      skipConfirm: !0
                  })
                : d.v4(r, Y);
        },
        ec = () => {
            r.status === Z.O0b.PAUSED && el(P.R.PAUSE_SELECT);
        },
        ed = () => {
            el(P.R.WHAT_YOU_LOSE);
        },
        eu = C.ZP.getPlanIdFromInvoice(r, l);
    if ((0, f.Q0)(eu)) return null;
    let em = C.ZP.getStatusFromInvoice(r, l),
        ep = C.ZP.getPremiumType(eu),
        eg = {
            [k.tier0]: ep === D.p9.TIER_0,
            [k.tier1]: ep === D.p9.TIER_1,
            [k.tier2]: ep === D.p9.TIER_2,
            [k.canceled]: em === Z.O0b.CANCELED,
            [k.pausePending]: em === Z.O0b.PAUSE_PENDING,
            [k.paused]: em === Z.O0b.PAUSED && !X,
            [k.failedPayment]: (0, C.zV)(em)
        },
        eh = null;
    switch (ep) {
        case D.p9.TIER_0:
            eh = (0, i.jsxs)('div', {
                className: k.wordMark,
                children: [
                    (0, i.jsx)(E.Z, {
                        className: k.discordWordmark,
                        'aria-label': w.intl.string(w.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: k.basicWordmark })
                ]
            });
            break;
        case D.p9.TIER_1:
            eh = (0, i.jsx)(H, {});
            break;
        case D.p9.TIER_2:
            eh = (0, i.jsx)(x.Z, {
                className: k.planName,
                'aria-label': w.intl.string(w.t.lpNrPj)
            });
    }
    let ef = V.includes(r.status) && !X ? F : G;
    return (0, i.jsx)(ef, {
        wordMark: eh,
        subscriptionInfo:
            (a()(null != l, 'Expected renewalInvoicePreview'),
            (0, i.jsx)('div', {
                className: k.planInfo,
                children: en
                    ? w.intl.format(w.t['/SfHws'], { weeks: 1 })
                    : (0, C.qV)({
                          planId: eu,
                          subscription: r,
                          renewalInvoicePreview: l,
                          hasDiscountApplied: ee,
                          activeDiscountInfo: et,
                          hasFractionalPremiumWithSub: X
                      })
            })),
        buttons: (() => {
            let { status: e } = r;
            if (r.isPurchasedExternally) {
                let e = (0, C.JE)(r.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(c.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.zxk, {
                        className: s()(k.toolsButton, k.externalButton),
                        size: c.zxk.Sizes.SMALL,
                        look: c.iLD.OUTLINED,
                        color: c.Ttl.WHITE,
                        submitting: R,
                        children: w.intl.string(w.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = C.ZP.isSwitchingPlansDisabled(r) || (0, N.o)(W, K, q),
                    t = C.ZP.getSwitchingPlansDisabledMessage(r);
                return (0, i.jsxs)('div', {
                    className: k.toolsButtons,
                    children: [
                        Q
                            ? (0, i.jsx)(c.zxk, {
                                  className: k.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: ei,
                                  children: w.intl.string(w.t.eFlYVF)
                              })
                            : (0, i.jsx)(c.zxk, {
                                  className: k.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: er,
                                  children: w.intl.string(w.t['ETE/oK'])
                              }),
                        (0, i.jsx)(c.ua7, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(
                                    A.Z,
                                    M(L({}, t), {
                                        disabled: e,
                                        className: k.toolsButton,
                                        onClick: () => {
                                            (0, h.Z)({
                                                analyticsLocations: Y,
                                                analyticsLocation: z,
                                                analyticsObject: U,
                                                subscription: r
                                            });
                                        },
                                        children: w.intl.string(w.t['dylp//'])
                                    })
                                )
                        })
                    ]
                });
            }
            if (C.ZP.isBaseSubscriptionCanceled(r))
                return (0, i.jsx)(c.zxk, {
                    className: k.toolsButton,
                    size: c.zxk.Sizes.SMALL,
                    color: c.Ttl.BRAND_INVERTED,
                    submitting: R,
                    onClick: ea,
                    children: w.intl.string(w.t.iIvF29)
                });
            switch (e) {
                case Z.O0b.BILLING_RETRY:
                    return (0, i.jsx)(c.zxk, {
                        className: k.billingRetryCancel,
                        size: c.zxk.Sizes.SMALL,
                        color: c.Ttl.CUSTOM,
                        submitting: R,
                        onClick: es,
                        children: w.intl.string(w.t['ETE/oK'])
                    });
                case Z.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: k.toolsButtons,
                        children: [
                            (0, i.jsx)(c.zxk, {
                                className: k.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                look: c.iLD.LINK,
                                color: c.Ttl.WHITE,
                                submitting: R,
                                onClick: er,
                                children: w.intl.string(w.t.cM1H0N)
                            }),
                            (0, i.jsx)(c.zxk, {
                                className: k.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: eo,
                                children: w.intl.string(w.t.TgV5QU)
                            })
                        ]
                    });
                case Z.O0b.PAUSED:
                    if (X) return t();
                    let { durations: n } = (0, S.AT)(r);
                    return (0, i.jsxs)('div', {
                        className: k.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(c.zxk, {
                                      className: k.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: ec,
                                      children: w.intl.string(w.t.jNHWt7)
                                  })
                                : (0, i.jsx)(c.zxk, {
                                      className: k.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: ed,
                                      children: w.intl.string(w.t.cM1H0N)
                                  }),
                            (0, i.jsx)(c.zxk, {
                                className: k.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: eo,
                                children: w.intl.string(w.t.zpi5pq)
                            })
                        ]
                    });
                case Z.O0b.ACTIVE:
                case Z.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: eg,
        shouldUseDiscountMarketing: ee,
        discountAmount: $
    });
};
