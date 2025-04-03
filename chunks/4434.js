t.d(n, {
    CP: () => ei,
    Gq: () => el,
    R7: () => ea
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
    p = t(481060),
    m = t(224550),
    x = t(490504),
    S = t(275850),
    v = t(672971),
    P = t(100527),
    y = t(906732),
    I = t(975298),
    N = t(436774),
    f = t(435020),
    j = t(374649),
    g = t(591548),
    h = t(847903),
    T = t(639119),
    b = t(53900),
    Z = t(653798),
    O = t(110818),
    E = t(553797),
    W = t(741245),
    _ = t(314182),
    C = t(42818),
    R = t(900683),
    D = t(706454),
    w = t(430824),
    U = t(246946),
    L = t(594174),
    A = t(351402),
    M = t(853872),
    G = t(509545),
    k = t(78839),
    B = t(709586),
    Y = t(267642),
    V = t(63063),
    K = t(930153),
    q = t(74538),
    F = t(937615),
    H = t(588797),
    X = t(981631),
    J = t(474936),
    Q = t(231338),
    $ = t(388032),
    z = t(599919);
function ee(e) {
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
function en(e, n) {
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
function et(e) {
    let { endDate: n, className: t } = e;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)('div', { className: z.reverseTrialContextInfoDivider }),
            (0, i.jsx)(p.Text, {
                variant: 'text-sm/normal',
                className: z.reverseTrialContextText,
                children: $.NW.format($.t.IeaYqq, { endDate: n })
            }),
            (0, i.jsx)('div', { className: z.reverseTrialContextInfoDivider })
        ]
    });
}
function ei(e) {
    var n, t;
    let { guildId: r, premiumSubscriptionPlan: l, numGuildBoosts: s, setNumGuildBoosts: o, setForceDisableSubmitButton: m, premiumSubscription: S, onClickPremiumSubscriptionLink: v, existingAvailableSlots: f = [], priceOptions: g } = e,
        Z = (0, b.Z)(),
        O = l.interval,
        W = l.intervalCount,
        _ = (0, u.e7)([G.Z], () => G.Z.getForSkuAndInterval((0, q.Wz)(J.Si.GUILD), O, W)),
        C = (0, u.e7)([L.default], () => L.default.getCurrentUser()),
        U = (0, u.e7)([w.Z], () => w.Z.getGuild(r), [r]),
        { fractionalState: A } = (0, I.Z)({ forceFetch: !1 });
    c()(null != _, 'Missing guildBoostingSubscriptionPlan'), c()(null != U, 'Unknown guild: '.concat(r));
    let M = [
            {
                planId: _.id,
                quantity: 1
            }
        ],
        ei = null == S ? void 0 : S.items.find((e) => e.planId === J.Xh.PREMIUM_MONTH_TIER_2 || e.planId === J.Xh.PREMIUM_YEAR_TIER_2);
    null != ei && M.push(ei);
    let er = null == S ? void 0 : S.items.find((e) => e.planId === J.Xh.PREMIUM_MONTH_GUILD || e.planId === J.Xh.PREMIUM_YEAR_GUILD),
        { enabled: el } = H.Z.useExperiment({ location: '32b64a_1' }),
        ea = !el || null == Z || !J.Tp.has(Z) || null == er,
        { analyticsLocations: es } = (0, y.ZP)(),
        [ec, eo] = (0, j.ED)({
            subscriptionId: null == S ? void 0 : S.id,
            items: M,
            renewal: !0,
            paymentSourceId: null == S ? void 0 : S.paymentSourceId,
            currency: g.currency,
            preventFetch: ea,
            analyticsLocations: es,
            analyticsLocation: P.Z.GUILD_BOOSTING_PLAN_SELECT
        }),
        eu = !ea && null == ec && null == eo,
        ed = (null == (t = (0, T.N)()) || null == (n = t.subscription_trial) ? void 0 : n.sku_id) === J.Si.TIER_2,
        ep = q.ZP.hasBoostDiscount(C, A) && null != _.premiumUserPrice,
        em = null == ec ? void 0 : ec.invoiceItems.find((e) => e.subscriptionPlanId === _.id),
        ex =
            null != em
                ? {
                      amount: em.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: g.currency
                  }
                : q.ZP.getPrice(_.id, ep, !1, g),
        eS = s * ex.amount,
        ev = (0, u.e7)([k.ZP], () => k.ZP.inReverseTrial() && q.ZP.hasBoostDiscount(C, A) && null != S),
        eP =
            q.ZP.hasBoostDiscount(C, A) && null != S && q.ZP.getPremiumType(S.planId) === J.p9.TIER_2
                ? $.NW.format($.t.hf6YOT, { planName: q.ZP.getDisplayPremiumType(S.planId) })
                : $.NW.format(ed ? $.t['ba1L7+'] : $.t.fkffDQ, {
                      onPremiumSubscriptionClick: v,
                      discountPercentage: (0, K.T3)(D.default.locale, J.Rr / 100),
                      freeSubscriptionCount: J.cb
                  }),
        ey = f.filter((e) => (0, Y.tl)(e)).length,
        eI = (0, q.Ap)(g.paymentSourceId),
        { ipCountryCode: eN } = (0, h.Z)(),
        ef = 'HR' === eN && ex.currency === Q.pK.EUR;
    return (
        m(eu),
        (0, i.jsxs)('div', {
            children: [
                ev && null != S
                    ? (0, i.jsx)(et, { endDate: S.currentPeriodEnd })
                    : (0, i.jsx)('div', {
                          className: a()(z.planSelectText, z.bodyText),
                          children: $.NW.string($.t.jNY1FB)
                      }),
                f.length > 0
                    ? (0, i.jsxs)('div', {
                          className: z.existingSlotNotice,
                          children: [
                              (0, i.jsx)(B.Z, {
                                  className: z.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      $.NW.format($.t.F8xlho, { slotCount: f.length }),
                                      ey > 0 && null != S
                                          ? (0, i.jsx)(p.ua7, {
                                                text: $.NW.formatToPlainString($.t.SFpsCA, {
                                                    canceledCount: ey,
                                                    date: S.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        p.P4T,
                                                        en(
                                                            ee(
                                                                {
                                                                    size: 'custom',
                                                                    width: 20,
                                                                    height: 20
                                                                },
                                                                e
                                                            ),
                                                            {
                                                                className: z.existingSlotTooltipWarningIcon,
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
                    className: z.planSelectRow,
                    children: [
                        (0, i.jsxs)('div', {
                            className: z.planSelectorWrapper,
                            children: [
                                (0, i.jsx)(p.FiK, {
                                    value: s,
                                    onChange: (e) => o(e),
                                    className: z.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30
                                }),
                                (0, i.jsx)('div', {
                                    className: z.planSelectorLabel,
                                    children: eI
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === J.rV.YEAR ? $.NW.string($.t.YDpAzc) : n === J.rV.MONTH && 1 === t ? $.NW.string($.t['6ZR3Bw']) : null;
                                          })({
                                              intervalType: O,
                                              intervalCount: W
                                          })
                                        : $.NW.string($.t.K9Bmzc)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: a()(z.planSelectorPreviewPrice, { [z.loadingSpinner]: eu }),
                            children: eu
                                ? (0, i.jsx)(p.$jN, {})
                                : eI
                                  ? (0, F.T4)(ex.amount, ex.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: r = 1 } = e,
                                            l = (0, F.T4)(n, t);
                                        return i === J.rV.YEAR ? $.NW.formatToPlainString($.t['8M04YG'], { price: l }) : i === J.rV.MONTH && 1 === r ? $.NW.formatToPlainString($.t.VStWCQ, { price: l }) : i === J.rV.MONTH && r > 1 ? $.NW.formatToPlainString($.t.xJvAFR, { price: l }) : null;
                                    })({
                                        intervalType: O,
                                        intervalCount: W,
                                        amount: ex.amount,
                                        currency: ex.currency
                                    })
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: z.planSelectDivider }),
                (0, i.jsxs)('div', {
                    className: z.planSelectRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: z.planSelectorSubtotal,
                            children: $.NW.string($.t.RtA7nZ)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(z.__invalid_planSelectorSubtotalPrice, { [z.loadingSpinner]: eu }),
                            children: eu
                                ? (0, i.jsx)(p.$jN, {})
                                : (0, i.jsx)(E.Z, {
                                      price: eS,
                                      currency: ex.currency,
                                      intervalType: O,
                                      intervalCount: W,
                                      isPrepaidPaymentSource: eI
                                  })
                        })
                    ]
                }),
                ef && (0, i.jsx)(x.Z, { message: $.NW.formatToPlainString($.t['9hnZoK'], { kunaPriceWithCurrency: (0, F.T4)(7.5345 * eS, Q.pK.HRK) }) }),
                (0, i.jsx)(x.Z, { message: $.NW.format($.t.Om31w8, { documentationLink: V.Z.getArticleURL(X.BhN.LOCALIZED_PRICING) }) }),
                ev
                    ? (0, i.jsx)(R.e, {})
                    : (0, i.jsx)(R.Z, {
                          text: eP,
                          color: N.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function er(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: t, proratedInvoicePreview: r, renewalInvoicePreview: l, priceOptions: a } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.e7)([G.Z], () => G.Z.getForSkuAndInterval((0, q.Wz)(J.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let p = (e) => (0, g.j)(r.invoiceItems).find((n) => J.Z1.has(n.subscriptionPlanId) && e(n)),
        m = p((e) => e.amount >= 0);
    c()(null != m, 'Missing guild boosting invoice item');
    let x = p((e) => e.amount < 0),
        S = null != x ? m.quantity - x.quantity : m.quantity,
        v = r.invoiceItems.filter((e) => (0, q.uZ)(e.subscriptionPlanId)),
        P = v.reduce((e, n) => e + n.amount, 0),
        y = (0, j.pV)(m) * S,
        I = (0, F.T4)(y, r.currency),
        N = (0, F.og)(I, s, o),
        f = (0, F.T4)(r.total, r.currency) + (r.currency !== Q.pK.USD ? '*' : ''),
        h = r.total - y - P,
        T = m.discounts.map((e) => {
            let n = e.amount / m.quantity;
            return en(ee({}, e), { amount: n * S });
        }),
        b = (0, q.Ap)(a.paymentSourceId),
        O = (0, u.e7)([k.ZP], () => k.ZP.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            b
                ? null
                : O && null != n
                  ? (0, i.jsx)(et, {
                        endDate: n.currentPeriodEnd,
                        className: z.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(C.hG, {
                        proratedInvoice: r,
                        renewalInvoice: l
                    }),
            (0, i.jsxs)(Z.PO, {
                children: [
                    (0, i.jsx)(Z.q9, { children: $.NW.string($.t.CWIwmp) }),
                    (0, i.jsx)(Z.i$, {
                        label: $.NW.formatToPlainString($.t.a3cAOj, {
                            numGuildSubscriptions: S,
                            planName: (0, q.Gf)(d.id, !1, b)
                        }),
                        value: b ? I : N,
                        discounts: T,
                        originalAmount: m.subscriptionPlanPrice * S,
                        currency: r.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== P
                        ? (0, i.jsx)(Z.R$, {
                              label: (0, i.jsx)(C.As, {
                                  label: $.NW.formatToPlainString($.t.ZSVgeX, { planName: (0, q.aq)(v[0].subscriptionPlanId) }),
                                  tooltipText: $.NW.string($.t.JmwQJC)
                              }),
                              value: (0, F.T4)(P, r.currency)
                          })
                        : null,
                    0 !== h
                        ? (0, i.jsx)(Z.R$, {
                              label: (0, i.jsx)(C.As, {
                                  label: $.NW.string($.t['+as5ZW']),
                                  tooltipText: $.NW.string($.t.JmwQJC)
                              }),
                              value: (0, F.T4)(h, r.currency)
                          })
                        : null,
                    (0, i.jsx)(Z.KU, {}),
                    (0, i.jsx)(Z.Ji, {
                        label: $.NW.format(r.taxInclusive ? (b ? $.t.BqdxQk : $.t.XH4raG) : $.t.RUI48P, {}),
                        value: f
                    }),
                    null != n
                        ? (0, i.jsx)(C.nd, {
                              premiumSubscription: n,
                              proratedInvoice: r,
                              renewalInvoice: l,
                              isUpdate: !0,
                              isPrepaidPaymentSource: b,
                              isTrial: O
                          })
                        : (0, i.jsx)(C.nd, {
                              renewalInvoice: l,
                              priceOptions: a,
                              isPrepaidPaymentSource: b
                          })
                ]
            })
        ]
    });
}
function el(e) {
    var n;
    let t,
        r,
        { paymentSources: l, priceOptions: a, currentPremiumSubscription: s, premiumSubscriptionPaymentSourceId: c, premiumSubscriptionPlan: d, newAdditionalPlans: x, onPaymentSourceChange: I, onPaymentSourceAdd: N, onPurchaseTermsChange: g, legalTermsNodeRef: h, hasLegalTermsFlash: T } = e,
        b = a.paymentSourceId,
        Z = (0, f.$)(l, b),
        O = (0, u.e7)([M.Z], () => (null != c ? M.Z.getPaymentSource(c) : null)),
        E = (0, u.e7)([U.Z], () => U.Z.hidePersonalInformation);
    t = null != s ? (0, q.Zx)(s, x[0].quantity, x[0].planId) : x;
    let { analyticsLocations: W } = (0, y.ZP)(),
        [C] = (0, j.ED)({
            subscriptionId: null == s ? void 0 : s.id,
            items: t,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: b,
            currency: a.currency,
            analyticsLocations: W,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [R] = (0, j.ED)({
            subscriptionId: null == s ? void 0 : s.id,
            items: t,
            renewal: !0,
            paymentSourceId: b,
            currency: a.currency,
            analyticsLocations: W,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != R &&
        (r = {
            amount: R.total,
            currency: R.currency,
            tax: R.tax,
            taxInclusive: R.taxInclusive
        });
    let D = o.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback);
    return (0, i.jsxs)('div', {
        children: [
            null != C && null != R
                ? (0, i.jsx)(er, {
                      premiumSubscription: s,
                      premiumSubscriptionPlan: d,
                      proratedInvoicePreview: C,
                      renewalInvoicePreview: R,
                      priceOptions: a
                  })
                : null,
            (0, i.jsxs)('div', {
                className: z.paymentSourceWrapper,
                children: [
                    (0, i.jsx)(p.vwX, {
                        tag: p.RB0.H5,
                        children: $.NW.string($.t.mmDvV1)
                    }),
                    null != c
                        ? null != O
                            ? (0, i.jsx)(p.DY3, {
                                  text: $.NW.string($.t.XiuuV1),
                                  children: (0, i.jsx)(S.Z, {
                                      paymentSources: [O],
                                      selectedPaymentSourceId: O.id,
                                      hidePersonalInformation: E,
                                      disabled: !0
                                  })
                              })
                            : (0, i.jsx)('div', { children: (0, i.jsx)(p.$jN, {}) })
                        : (0, i.jsx)(S.Z, {
                              paymentSources: Object.values(l),
                              selectedPaymentSourceId: b,
                              onChange: I,
                              onPaymentSourceAdd: N,
                              hidePersonalInformation: E
                          })
                ]
            }),
            (0, i.jsx)(_.Z, {
                isActive: T,
                ref: h,
                children:
                    null != r &&
                    (0, i.jsx)(v.Z, {
                        onChange: g,
                        forceShow: !0,
                        finePrint: (0, i.jsx)(m.Z, {
                            subscriptionPlan: d,
                            paymentSourceType: Z,
                            basePrice: r,
                            productLine: X.POd.BOOST
                        }),
                        showPricingLink: (null != (n = null == C ? void 0 : C.currency) ? n : Q.pK.USD) !== Q.pK.USD,
                        showWithdrawalWaiver: D,
                        subscriptionPlan: d
                    })
            })
        ]
    });
}
function ea(e) {
    let n,
        { onClose: t, guild: l, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o } = e,
        { theme: u } = (0, p.TCT)(),
        [d, m] = r.useState(O.fe.Scenes.ENTRY),
        [x, S] = r.useState(!1);
    return (
        (n = s
            ? null == l
                ? $.NW.format($.t.P52e1t, {})
                : $.NW.format($.t['4UnIk5'], { guildName: l.name })
            : null == l
              ? $.NW.format($.t.SZ5ohY, { guildSubscriptionQuantity: a })
              : $.NW.format($.t.GxK3Mj, {
                    guildName: l.name,
                    guildSubscriptionQuantity: a
                })),
        (0, i.jsxs)('div', {
            className: z.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(O.fe, {
                          className: z.confirmationAnimation,
                          nextScene: d,
                          onScenePlay: (e) => {
                              if (!x)
                                  switch (e) {
                                      case O.fe.Scenes.ENTRY:
                                          return m(O.fe.Scenes.IDLE);
                                      case O.fe.Scenes.IDLE:
                                          return m(O.fe.Scenes.SUCCESS);
                                      case O.fe.Scenes.SUCCESS:
                                          return S(!0), m(O.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(W.C, {
                    className: z.confirmationUpgradedBanner,
                    theme: u,
                    premiumType: J.p9.TIER_2,
                    type: Q.X7.has(null != o ? o : Q.He.UNKNOWN) ? W.C.Types.PREMIUM_PAYMENT_STARTED : W.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: z.confirmationText,
                    children: n
                }),
                (0, i.jsx)(p.zxk, {
                    onClick: t,
                    children: $.NW.string($.t['/iTxg4'])
                })
            ]
        })
    );
}
