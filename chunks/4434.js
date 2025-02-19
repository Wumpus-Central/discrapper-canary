t.d(n, {
    CP: () => en,
    Gq: () => ei,
    R7: () => er
}),
    t(653041),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    s = t(512722),
    c = t.n(s),
    o = t(742280),
    u = t(442837),
    d = t(692547),
    m = t(481060),
    p = t(224550),
    v = t(490504),
    x = t(275850),
    f = t(672971),
    S = t(100527),
    P = t(906732),
    N = t(436774),
    g = t(374649),
    y = t(591548),
    j = t(847903),
    I = t(639119),
    h = t(53900),
    b = t(653798),
    T = t(110818),
    Z = t(553797),
    O = t(741245),
    E = t(314182),
    _ = t(42818),
    W = t(900683),
    C = t(706454),
    R = t(430824),
    D = t(246946),
    w = t(594174),
    U = t(351402),
    L = t(853872),
    A = t(509545),
    M = t(78839),
    k = t(709586),
    G = t(267642),
    B = t(63063),
    V = t(930153),
    Y = t(74538),
    F = t(937615),
    K = t(588797),
    q = t(981631),
    H = t(474936),
    X = t(231338),
    z = t(388032),
    J = t(357129);
function Q(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function $(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function ee(e) {
    let { endDate: n, className: t } = e;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)('div', { className: J.reverseTrialContextInfoDivider }),
            (0, i.jsx)(m.Text, {
                variant: 'text-sm/normal',
                className: J.reverseTrialContextText,
                children: z.NW.format(z.t.IeaYqq, { endDate: n })
            }),
            (0, i.jsx)('div', { className: J.reverseTrialContextInfoDivider })
        ]
    });
}
function en(e) {
    var n, t;
    let { guildId: r, premiumSubscriptionPlan: l, numGuildBoosts: s, setNumGuildBoosts: o, setForceDisableSubmitButton: p, premiumSubscription: x, onClickPremiumSubscriptionLink: f, existingAvailableSlots: y = [], priceOptions: b } = e,
        T = (0, h.Z)(),
        O = l.interval,
        E = l.intervalCount,
        _ = (0, u.e7)([A.Z], () => A.Z.getForSkuAndInterval((0, Y.Wz)(H.Si.GUILD), O, E)),
        D = (0, u.e7)([w.default], () => w.default.getCurrentUser()),
        U = (0, u.e7)([R.Z], () => R.Z.getGuild(r), [r]);
    c()(null != _, 'Missing guildBoostingSubscriptionPlan'), c()(null != U, 'Unknown guild: '.concat(r));
    let L = [
            {
                planId: _.id,
                quantity: 1
            }
        ],
        en = null == x ? void 0 : x.items.find((e) => e.planId === H.Xh.PREMIUM_MONTH_TIER_2 || e.planId === H.Xh.PREMIUM_YEAR_TIER_2);
    null != en && L.push(en);
    let et = null == x ? void 0 : x.items.find((e) => e.planId === H.Xh.PREMIUM_MONTH_GUILD || e.planId === H.Xh.PREMIUM_YEAR_GUILD),
        { enabled: ei } = K.Z.useExperiment({ location: '32b64a_1' }),
        er = !ei || null == T || !H.Tp.has(T) || null == et,
        { analyticsLocations: el } = (0, P.ZP)(),
        [ea, es] = (0, g.ED)({
            subscriptionId: null == x ? void 0 : x.id,
            items: L,
            renewal: !0,
            paymentSourceId: null == x ? void 0 : x.paymentSourceId,
            currency: b.currency,
            preventFetch: er,
            analyticsLocations: el,
            analyticsLocation: S.Z.GUILD_BOOSTING_PLAN_SELECT
        }),
        ec = !er && null == ea && null == es,
        eo = (null === (t = (0, I.N)()) || void 0 === t ? void 0 : null === (n = t.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === H.Si.TIER_2,
        eu = Y.ZP.hasBoostDiscount(D) && null != _.premiumUserPrice,
        ed = null == ea ? void 0 : ea.invoiceItems.find((e) => e.subscriptionPlanId === _.id),
        em =
            null != ed
                ? {
                      amount: ed.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: b.currency
                  }
                : Y.ZP.getPrice(_.id, eu, !1, b),
        ep = s * em.amount,
        ev = (0, u.e7)([M.ZP], () => M.ZP.inReverseTrial() && Y.ZP.hasBoostDiscount(D) && null != x),
        ex =
            Y.ZP.hasBoostDiscount(D) && null != x
                ? z.NW.format(z.t.hf6YOT, { planName: Y.ZP.getDisplayPremiumType(x.planId) })
                : z.NW.format(eo ? z.t['ba1L7+'] : z.t.fkffDQ, {
                      onPremiumSubscriptionClick: f,
                      discountPercentage: (0, V.T3)(C.default.locale, H.Rr / 100),
                      freeSubscriptionCount: H.cb
                  }),
        ef = y.filter((e) => (0, G.tl)(e)).length,
        eS = (0, Y.Ap)(b.paymentSourceId),
        { ipCountryCode: eP } = (0, j.Z)(),
        eN = 'HR' === eP && em.currency === X.pK.EUR;
    return (
        p(ec),
        (0, i.jsxs)('div', {
            children: [
                ev && null != x
                    ? (0, i.jsx)(ee, { endDate: x.currentPeriodEnd })
                    : (0, i.jsx)('div', {
                          className: a()(J.planSelectText, J.bodyText),
                          children: z.NW.string(z.t.jNY1FB)
                      }),
                y.length > 0
                    ? (0, i.jsxs)('div', {
                          className: J.existingSlotNotice,
                          children: [
                              (0, i.jsx)(k.Z, {
                                  className: J.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      z.NW.format(z.t.F8xlho, { slotCount: y.length }),
                                      ef > 0 && null != x
                                          ? (0, i.jsx)(m.ua7, {
                                                text: z.NW.formatToPlainString(z.t.SFpsCA, {
                                                    canceledCount: ef,
                                                    date: x.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        m.P4T,
                                                        $(
                                                            Q(
                                                                {
                                                                    size: 'custom',
                                                                    width: 20,
                                                                    height: 20
                                                                },
                                                                e
                                                            ),
                                                            {
                                                                className: J.existingSlotTooltipWarningIcon,
                                                                color: d.Z.unsafe_rawColors.YELLOW_300.css
                                                            }
                                                        )
                                                    )
                                            })
                                          : null
                                  ]
                              })
                          ]
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: J.planSelectRow,
                    children: [
                        (0, i.jsxs)('div', {
                            className: J.planSelectorWrapper,
                            children: [
                                (0, i.jsx)(m.FiK, {
                                    value: s,
                                    onChange: (e) => o(e),
                                    className: J.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30
                                }),
                                (0, i.jsx)('div', {
                                    className: J.planSelectorLabel,
                                    children: eS
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === H.rV.YEAR ? z.NW.string(z.t.YDpAzc) : n === H.rV.MONTH && 1 === t ? z.NW.string(z.t['6ZR3Bw']) : null;
                                          })({
                                              intervalType: O,
                                              intervalCount: E
                                          })
                                        : z.NW.string(z.t.K9Bmzc)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: a()(J.planSelectorPreviewPrice, { [J.loadingSpinner]: ec }),
                            children: ec
                                ? (0, i.jsx)(m.$jN, {})
                                : eS
                                  ? (0, F.T4)(em.amount, em.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: r = 1 } = e,
                                            l = (0, F.T4)(n, t);
                                        return i === H.rV.YEAR ? z.NW.formatToPlainString(z.t['8M04YG'], { price: l }) : i === H.rV.MONTH && 1 === r ? z.NW.formatToPlainString(z.t.VStWCQ, { price: l }) : i === H.rV.MONTH && r > 1 ? z.NW.formatToPlainString(z.t.xJvAFR, { price: l }) : null;
                                    })({
                                        intervalType: O,
                                        intervalCount: E,
                                        amount: em.amount,
                                        currency: em.currency
                                    })
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: J.planSelectDivider }),
                (0, i.jsxs)('div', {
                    className: J.planSelectRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: J.planSelectorSubtotal,
                            children: z.NW.string(z.t.RtA7nZ)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(J.__invalid_planSelectorSubtotalPrice, { [J.loadingSpinner]: ec }),
                            children: ec
                                ? (0, i.jsx)(m.$jN, {})
                                : (0, i.jsx)(Z.Z, {
                                      price: ep,
                                      currency: em.currency,
                                      intervalType: O,
                                      intervalCount: E,
                                      isPrepaidPaymentSource: eS
                                  })
                        })
                    ]
                }),
                eN && (0, i.jsx)(v.Z, { message: z.NW.formatToPlainString(z.t['9hnZoK'], { kunaPriceWithCurrency: (0, F.T4)(7.5345 * ep, X.pK.HRK) }) }),
                (0, i.jsx)(v.Z, { message: z.NW.format(z.t.Om31w8, { documentationLink: B.Z.getArticleURL(q.BhN.LOCALIZED_PRICING) }) }),
                ev
                    ? (0, i.jsx)(W.e, {})
                    : (0, i.jsx)(W.Z, {
                          text: ex,
                          color: N.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function et(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: t, proratedInvoicePreview: r, renewalInvoicePreview: l, priceOptions: a } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.e7)([A.Z], () => A.Z.getForSkuAndInterval((0, Y.Wz)(H.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let m = (e) => (0, y.j)(r.invoiceItems).find((n) => H.Z1.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, 'Missing guild boosting invoice item');
    let v = m((e) => e.amount < 0),
        x = null != v ? p.quantity - v.quantity : p.quantity,
        f = r.invoiceItems.filter((e) => (0, Y.uZ)(e.subscriptionPlanId)),
        S = f.reduce((e, n) => e + n.amount, 0),
        P = (0, g.pV)(p) * x,
        N = (0, F.T4)(P, r.currency),
        j = (0, F.og)(N, s, o),
        I = (0, F.T4)(r.total, r.currency) + (r.currency !== X.pK.USD ? '*' : ''),
        h = r.total - P - S,
        T = p.discounts.map((e) => {
            let n = e.amount / p.quantity;
            return $(Q({}, e), { amount: n * x });
        }),
        Z = (0, Y.Ap)(a.paymentSourceId),
        O = (0, u.e7)([M.ZP], () => M.ZP.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            Z
                ? null
                : O && null != n
                  ? (0, i.jsx)(ee, {
                        endDate: n.currentPeriodEnd,
                        className: J.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(_.hG, {
                        proratedInvoice: r,
                        renewalInvoice: l
                    }),
            (0, i.jsxs)(b.PO, {
                children: [
                    (0, i.jsx)(b.q9, { children: z.NW.string(z.t.CWIwmp) }),
                    (0, i.jsx)(b.i$, {
                        label: z.NW.formatToPlainString(z.t.a3cAOj, {
                            numGuildSubscriptions: x,
                            planName: (0, Y.Gf)(d.id, !1, Z)
                        }),
                        value: Z ? N : j,
                        discounts: T,
                        originalAmount: p.subscriptionPlanPrice * x,
                        currency: r.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== S
                        ? (0, i.jsx)(b.R$, {
                              label: (0, i.jsx)(_.As, {
                                  label: z.NW.formatToPlainString(z.t.ZSVgeX, { planName: (0, Y.aq)(f[0].subscriptionPlanId) }),
                                  tooltipText: z.NW.string(z.t.JmwQJC)
                              }),
                              value: (0, F.T4)(S, r.currency)
                          })
                        : null,
                    0 !== h
                        ? (0, i.jsx)(b.R$, {
                              label: (0, i.jsx)(_.As, {
                                  label: z.NW.string(z.t['+as5ZW']),
                                  tooltipText: z.NW.string(z.t.JmwQJC)
                              }),
                              value: (0, F.T4)(h, r.currency)
                          })
                        : null,
                    (0, i.jsx)(b.KU, {}),
                    (0, i.jsx)(b.Ji, {
                        label: z.NW.format(r.taxInclusive ? (Z ? z.t.BqdxQk : z.t.XH4raG) : z.t.RUI48P, {}),
                        value: I
                    }),
                    null != n
                        ? (0, i.jsx)(_.nd, {
                              premiumSubscription: n,
                              proratedInvoice: r,
                              renewalInvoice: l,
                              isUpdate: !0,
                              isPrepaidPaymentSource: Z,
                              isTrial: O
                          })
                        : (0, i.jsx)(_.nd, {
                              renewalInvoice: l,
                              priceOptions: a,
                              isPrepaidPaymentSource: Z
                          })
                ]
            })
        ]
    });
}
function ei(e) {
    var n, t;
    let r,
        l,
        { paymentSources: a, priceOptions: s, currentPremiumSubscription: c, premiumSubscriptionPaymentSourceId: d, premiumSubscriptionPlan: v, newAdditionalPlans: N, onPaymentSourceChange: y, onPaymentSourceAdd: j, onPurchaseTermsChange: I, legalTermsNodeRef: h, hasLegalTermsFlash: b } = e,
        T = s.paymentSourceId,
        Z = (0, u.e7)([L.Z], () => (null != d ? L.Z.getPaymentSource(d) : null)),
        O = (0, u.e7)([D.Z], () => D.Z.hidePersonalInformation);
    r = null != c ? (0, Y.Zx)(c, N[0].quantity, N[0].planId) : N;
    let { analyticsLocations: _ } = (0, P.ZP)(),
        [W] = (0, g.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: r,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: T,
            currency: s.currency,
            analyticsLocations: _,
            analyticsLocation: S.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [C] = (0, g.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: r,
            renewal: !0,
            paymentSourceId: T,
            currency: s.currency,
            analyticsLocations: _,
            analyticsLocation: S.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != C &&
        (l = {
            amount: C.total,
            currency: C.currency,
            tax: C.tax,
            taxInclusive: C.taxInclusive
        });
    let R = o.M.EEA_COUNTRIES.has(U.Z.ipCountryCodeWithFallback);
    return (0, i.jsxs)('div', {
        children: [
            null != W && null != C
                ? (0, i.jsx)(et, {
                      premiumSubscription: c,
                      premiumSubscriptionPlan: v,
                      proratedInvoicePreview: W,
                      renewalInvoicePreview: C,
                      priceOptions: s
                  })
                : null,
            (0, i.jsxs)('div', {
                className: J.paymentSourceWrapper,
                children: [
                    (0, i.jsx)(m.vwX, {
                        tag: m.RB0.H5,
                        children: z.NW.string(z.t.mmDvV1)
                    }),
                    null != d
                        ? null != Z
                            ? (0, i.jsx)(m.DY3, {
                                  text: z.NW.string(z.t.XiuuV1),
                                  children: (0, i.jsx)(x.Z, {
                                      paymentSources: [Z],
                                      selectedPaymentSourceId: Z.id,
                                      hidePersonalInformation: O,
                                      disabled: !0
                                  })
                              })
                            : (0, i.jsx)('div', { children: (0, i.jsx)(m.$jN, {}) })
                        : (0, i.jsx)(x.Z, {
                              paymentSources: Object.values(a),
                              selectedPaymentSourceId: T,
                              onChange: y,
                              onPaymentSourceAdd: j,
                              hidePersonalInformation: O
                          })
                ]
            }),
            (0, i.jsx)(E.Z, {
                isActive: b,
                ref: h,
                children:
                    null != l &&
                    (0, i.jsx)(f.Z, {
                        onChange: I,
                        forceShow: !0,
                        finePrint: (0, i.jsx)(p.Z, {
                            subscriptionPlan: v,
                            paymentSourceType: null === (n = a[null != T ? T : '']) || void 0 === n ? void 0 : n.type,
                            basePrice: l,
                            productLine: q.POd.BOOST
                        }),
                        showPricingLink: (null !== (t = null == W ? void 0 : W.currency) && void 0 !== t ? t : X.pK.USD) !== X.pK.USD,
                        showWithdrawalWaiver: R,
                        subscriptionPlan: v
                    })
            })
        ]
    });
}
function er(e) {
    let n,
        { onClose: t, guild: l, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o } = e,
        { theme: u } = (0, m.TCT)(),
        [d, p] = r.useState(T.fe.Scenes.ENTRY),
        [v, x] = r.useState(!1);
    return (
        (n = s
            ? null == l
                ? z.NW.format(z.t.P52e1t, {})
                : z.NW.format(z.t['4UnIk5'], { guildName: l.name })
            : null == l
              ? z.NW.format(z.t.SZ5ohY, { guildSubscriptionQuantity: a })
              : z.NW.format(z.t.GxK3Mj, {
                    guildName: l.name,
                    guildSubscriptionQuantity: a
                })),
        (0, i.jsxs)('div', {
            className: J.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(T.fe, {
                          className: J.confirmationAnimation,
                          nextScene: d,
                          onScenePlay: (e) => {
                              if (!v)
                                  switch (e) {
                                      case T.fe.Scenes.ENTRY:
                                          return p(T.fe.Scenes.IDLE);
                                      case T.fe.Scenes.IDLE:
                                          return p(T.fe.Scenes.SUCCESS);
                                      case T.fe.Scenes.SUCCESS:
                                          return x(!0), p(T.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(O.C, {
                    className: J.confirmationUpgradedBanner,
                    theme: u,
                    premiumType: H.p9.TIER_2,
                    type: X.X7.has(null != o ? o : X.He.UNKNOWN) ? O.C.Types.PREMIUM_PAYMENT_STARTED : O.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: J.confirmationText,
                    children: n
                }),
                (0, i.jsx)(m.zxk, {
                    onClick: t,
                    children: z.NW.string(z.t['/iTxg4'])
                })
            ]
        })
    );
}
