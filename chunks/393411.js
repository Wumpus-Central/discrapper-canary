n.d(t, {
    R: () => H,
    Z: () => z
}),
    n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(366939),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    p = n(710845),
    h = n(963249),
    f = n(301766),
    b = n(594174),
    N = n(509545),
    x = n(931331),
    _ = n(754347),
    E = n(122289),
    j = n(74538),
    O = n(212895),
    C = n(296848),
    S = n(140465),
    v = n(695349),
    T = n(404380),
    I = n(879463),
    y = n(104494),
    A = n(987997),
    P = n(833569),
    R = n(823188),
    D = n(474936),
    Z = n(981631),
    w = n(388032),
    k = n(4856);
function W(e) {
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
function L(e, t) {
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
let B = new p.Z('SubscriptionHeader.tsx'),
    M = {
        page: Z.ZY5.USER_SETTINGS,
        section: Z.jXE.SETTINGS_PREMIUM,
        object: Z.qAy.CARD
    },
    U = [Z.O0b.PAUSED, Z.O0b.PAUSE_PENDING, Z.O0b.BILLING_RETRY];
function V(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: i, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, r.jsxs)('div', {
        className: s()(k.banner, a),
        children: [
            (0, r.jsx)('div', { className: k.bannerBackgroundImage }),
            (0, r.jsxs)('div', {
                className: k.detailsContainer,
                children: [
                    (0, r.jsx)('div', { className: k.image }),
                    (0, r.jsxs)('div', {
                        className: k.details,
                        children: [
                            (0, r.jsxs)('div', {
                                className: k.headerLabel,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, r.jsx)(R.Cy, {
                                            text: w.NW.formatToPlainString(w.t.iiLbvr, { percent: o }),
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
            (0, r.jsx)('div', {
                className: k.buttons,
                children: i
            })
        ]
    });
}
function G(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: i, statusClasses: a, shouldUseDiscountMarketing: l, discountAmount: o } = e;
    return (0, r.jsxs)('div', {
        className: s()(k.banner, a, k.repositioned),
        children: [
            (0, r.jsx)('div', { className: k.bannerBackgroundImage }),
            (0, r.jsx)('div', {
                className: k.detailsContainer,
                children: (0, r.jsx)('div', {
                    className: k.details,
                    children: (0, r.jsxs)('div', {
                        className: k.headerLabel,
                        children: [
                            (0, r.jsx)('div', { className: k.image }),
                            (0, r.jsxs)('div', {
                                className: k.headerColumnB,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, r.jsx)(R.Cy, {
                                            text: w.NW.formatToPlainString(w.t.iiLbvr, { percent: o }),
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
            (0, r.jsx)('div', {
                className: k.buttons,
                children: i
            })
        ]
    });
}
function F() {
    return (0, r.jsxs)('div', {
        className: k.wordMark,
        children: [
            (0, r.jsx)(_.Z, {
                className: k.discordWordmark,
                'aria-label': w.NW.string(w.t['FSOz7+'])
            }),
            (0, r.jsx)('div', { className: k.classicWordmark })
        ]
    });
}
function H() {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(V, {
        wordMark: (0, r.jsx)(F, {}),
        subscriptionInfo: (0, r.jsx)('div', {
            className: k.planInfo,
            children: w.NW.string(w.t.R0GJLy)
        }),
        buttons: (0, r.jsx)(A.Z, {
            className: k.toolsButton,
            onClick: () =>
                (0, h.Z)({
                    subscriptionTier: D.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: M
                }),
            children: w.NW.string(w.t['/ygMUV'])
        }),
        statusClasses: { [k.tier1]: !0 }
    });
}
let z = function (e) {
    var t;
    let { subscription: i, renewalInvoicePreview: a, paymentSource: p, busy: R, analyticsLocation: H } = e,
        z = 'subscription_header',
        { analyticsLocations: Y } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER),
        K = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        { fractionalState: q } = (0, g.Z)({ forceFetch: !1 }),
        X = q === D.a$.FP_SUB_PAUSED,
        { enabled: J } = (0, I.ZP)({ location: z });
    (D.pj.has(i.planId) && Z.JwP.ALL_PAUSEABLE.has(i.status) && !X) || (J = !1);
    let Q = (0, y.Ng)(),
        $ = null == Q || null == (t = Q.discount) ? void 0 : t.amount,
        ee = (0, S.t7)(),
        et = (0, S.lr)(),
        en = (0, v.W)(),
        er = () => {
            (i.status === Z.O0b.ACTIVE || i.status === Z.O0b.PAST_DUE || i.status === Z.O0b.PAUSED) && ea(P.R.PAUSE_SELECT);
        },
        ei = () => {
            (i.status === Z.O0b.ACTIVE || i.status === Z.O0b.PAST_DUE || i.status === Z.O0b.PAUSE_PENDING || X) && ea();
        },
        es = () => {
            i.status === Z.O0b.BILLING_RETRY && ea(P.R.CONFIRM);
        },
        ea = (e) => {
            (0, c.ZDy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        L(W({}, n), {
                            premiumSubscription: i,
                            analyticsLocation: H,
                            analyticsLocations: Y,
                            initialStep: e
                        })
                    );
            });
        },
        el = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = N.Z.get(i.premiumPlanIdFromItems);
                if (null == e) return void B.info('Plan not fetched for plan id: '.concat(i.premiumPlanIdFromItems));
                let t = (0, O.DE)(e, null == p ? void 0 : p.id, !1),
                    n = t.length > 0 ? t[0] : i.currency,
                    r = !1;
                1 === t.length && (null == p ? void 0 : p.id) === i.paymentSourceId && (0, O.tD)(e.id, n, null == p ? void 0 : p.id) && (r = !0),
                    r
                        ? d.O5(i, Y)
                        : (0, h.Z)({
                              initialPlanId: i.premiumPlanIdFromItems,
                              analyticsLocations: Y,
                              analyticsLocation: H,
                              analyticsObject: M,
                              subscription: i
                          });
            }
        },
        eo = () => {
            if (!U.includes(i.status) || null == i.pauseEndsAt)
                return void (0, E.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: i.id,
                        status: i.status,
                        pauseEndsAt: i.pauseEndsAt
                    }
                });
            i.status === Z.O0b.PAUSED
                ? (0, h.Z)({
                      initialPlanId: i.premiumPlanIdFromItems,
                      analyticsLocations: Y,
                      analyticsLocation: H,
                      analyticsObject: M,
                      subscription: i,
                      skipConfirm: !0
                  })
                : d.v4(i, Y);
        },
        ec = () => {
            i.status === Z.O0b.PAUSED && ea(P.R.PAUSE_SELECT);
        },
        ed = () => {
            ea(P.R.WHAT_YOU_LOSE);
        },
        eu = j.ZP.getPlanIdFromInvoice(i, a);
    if ((0, f.Q0)(eu)) return null;
    let em = j.ZP.getStatusFromInvoice(i, a),
        eg = j.ZP.getPremiumType(eu),
        ep = {
            [k.tier0]: eg === D.p9.TIER_0,
            [k.tier1]: eg === D.p9.TIER_1,
            [k.tier2]: eg === D.p9.TIER_2,
            [k.canceled]: em === Z.O0b.CANCELED,
            [k.pausePending]: em === Z.O0b.PAUSE_PENDING,
            [k.paused]: em === Z.O0b.PAUSED && !X,
            [k.failedPayment]: (0, j.zV)(em)
        },
        eh = null;
    switch (eg) {
        case D.p9.TIER_0:
            eh = (0, r.jsxs)('div', {
                className: k.wordMark,
                children: [
                    (0, r.jsx)(_.Z, {
                        className: k.discordWordmark,
                        'aria-label': w.NW.string(w.t['t9uG/v'])
                    }),
                    (0, r.jsx)('div', { className: k.basicWordmark })
                ]
            });
            break;
        case D.p9.TIER_1:
            eh = (0, r.jsx)(F, {});
            break;
        case D.p9.TIER_2:
            eh = (0, r.jsx)(x.Z, {
                className: k.planName,
                'aria-label': w.NW.string(w.t.lpNrPj)
            });
    }
    let ef = U.includes(i.status) && !X ? G : V;
    return (0, r.jsx)(ef, {
        wordMark: eh,
        subscriptionInfo:
            (l()(null != a, 'Expected renewalInvoicePreview'),
            (0, r.jsx)('div', {
                className: k.planInfo,
                children: en
                    ? w.NW.format(w.t['/SfHws'], { weeks: 1 })
                    : (0, j.qV)({
                          planId: eu,
                          subscription: i,
                          renewalInvoicePreview: a,
                          hasDiscountApplied: ee,
                          activeDiscountInfo: et,
                          hasFractionalPremiumWithSub: X
                      })
            })),
        buttons: (() => {
            let { status: e } = i;
            if (i.isPurchasedExternally) {
                let e = (0, j.JE)(i.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, r.jsx)(c.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(c.zxk, {
                        className: s()(k.toolsButton, k.externalButton),
                        size: c.zxk.Sizes.SMALL,
                        look: c.iLD.OUTLINED,
                        color: c.Ttl.WHITE,
                        submitting: R,
                        children: w.NW.string(w.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = j.ZP.isSwitchingPlansDisabled(i) || (0, T.o)(z, K, q),
                    t = j.ZP.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)('div', {
                    className: k.toolsButtons,
                    children: [
                        J
                            ? (0, r.jsx)(c.zxk, {
                                  className: k.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: er,
                                  children: w.NW.string(w.t.eFlYVF)
                              })
                            : (0, r.jsx)(c.zxk, {
                                  className: k.toolsButton,
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.iLD.LINK,
                                  color: c.Ttl.WHITE,
                                  submitting: R,
                                  onClick: ei,
                                  children: w.NW.string(w.t['ETE/oK'])
                              }),
                        (0, r.jsx)(c.ua7, {
                            text: t,
                            children: (t) =>
                                (0, r.jsx)(
                                    A.Z,
                                    L(W({}, t), {
                                        disabled: e,
                                        className: k.toolsButton,
                                        onClick: () => {
                                            (0, h.Z)({
                                                analyticsLocations: Y,
                                                analyticsLocation: H,
                                                analyticsObject: M,
                                                subscription: i
                                            });
                                        },
                                        children: w.NW.string(w.t['dylp//'])
                                    })
                                )
                        })
                    ]
                });
            }
            if (j.ZP.isBaseSubscriptionCanceled(i))
                return (0, r.jsx)(c.zxk, {
                    className: k.toolsButton,
                    size: c.zxk.Sizes.SMALL,
                    color: c.Ttl.BRAND_INVERTED,
                    submitting: R,
                    onClick: el,
                    children: w.NW.string(w.t.iIvF29)
                });
            switch (e) {
                case Z.O0b.BILLING_RETRY:
                    return (0, r.jsx)(c.zxk, {
                        className: k.billingRetryCancel,
                        size: c.zxk.Sizes.SMALL,
                        color: c.Ttl.CUSTOM,
                        submitting: R,
                        onClick: es,
                        children: w.NW.string(w.t['ETE/oK'])
                    });
                case Z.O0b.PAUSE_PENDING:
                    return (0, r.jsxs)('div', {
                        className: k.toolsButtons,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                className: k.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                look: c.iLD.LINK,
                                color: c.Ttl.WHITE,
                                submitting: R,
                                onClick: ei,
                                children: w.NW.string(w.t.cM1H0N)
                            }),
                            (0, r.jsx)(c.zxk, {
                                className: k.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: eo,
                                children: w.NW.string(w.t.TgV5QU)
                            })
                        ]
                    });
                case Z.O0b.PAUSED:
                    if (X) return t();
                    let { durations: n } = (0, C.AT)(i);
                    return (0, r.jsxs)('div', {
                        className: k.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, r.jsx)(c.zxk, {
                                      className: k.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: ec,
                                      children: w.NW.string(w.t.jNHWt7)
                                  })
                                : (0, r.jsx)(c.zxk, {
                                      className: k.linkButton,
                                      size: c.zxk.Sizes.SMALL,
                                      look: c.iLD.LINK,
                                      color: c.Ttl.WHITE,
                                      submitting: R,
                                      onClick: ed,
                                      children: w.NW.string(w.t.cM1H0N)
                                  }),
                            (0, r.jsx)(c.zxk, {
                                className: k.toolsButton,
                                size: c.zxk.Sizes.SMALL,
                                color: c.Ttl.BRAND_INVERTED,
                                submitting: R,
                                onClick: eo,
                                children: w.NW.string(w.t.zpi5pq)
                            })
                        ]
                    });
                case Z.O0b.ACTIVE:
                case Z.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: ep,
        shouldUseDiscountMarketing: ee,
        discountAmount: $
    });
};
