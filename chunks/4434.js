t.d(n, {
    CP: () => er,
    Gq: () => ea,
    R7: () => es
}),
    t(539854),
    t(388685);
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
    S = t(490504),
    x = t(275850),
    P = t(672971),
    v = t(100527),
    f = t(906732),
    y = t(975298),
    I = t(436774),
    N = t(435020),
    j = t(374649),
    g = t(591548),
    h = t(847903),
    T = t(639119),
    b = t(53900),
    Z = t(653798),
    E = t(110818),
    O = t(553797),
    _ = t(741245),
    W = t(346071),
    C = t(314182),
    R = t(42818),
    D = t(900683),
    w = t(706454),
    U = t(430824),
    L = t(246946),
    A = t(594174),
    M = t(351402),
    G = t(853872),
    k = t(509545),
    B = t(78839),
    Y = t(709586),
    V = t(267642),
    K = t(63063),
    q = t(930153),
    F = t(74538),
    H = t(937615),
    X = t(588797),
    $ = t(981631),
    J = t(474936),
    Q = t(231338),
    z = t(388032),
    ee = t(599919);
function en(e) {
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
function et(e, n) {
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
function ei(e) {
    let { endDate: n, className: t } = e;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)('div', { className: ee.reverseTrialContextInfoDivider }),
            (0, i.jsx)(m.Text, {
                variant: 'text-sm/normal',
                className: ee.reverseTrialContextText,
                children: z.NW.format(z.t.IeaYqq, { endDate: n })
            }),
            (0, i.jsx)('div', { className: ee.reverseTrialContextInfoDivider })
        ]
    });
}
function er(e) {
    var n, t;
    let { guildId: r, premiumSubscriptionPlan: l, numGuildBoosts: s, setNumGuildBoosts: o, setForceDisableSubmitButton: p, premiumSubscription: x, onClickPremiumSubscriptionLink: P, existingAvailableSlots: N = [], priceOptions: g } = e,
        Z = (0, b.Z)(),
        E = l.interval,
        _ = l.intervalCount,
        C = (0, u.e7)([k.Z], () => k.Z.getForSkuAndInterval((0, F.Wz)(J.Si.GUILD), E, _)),
        R = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        L = (0, u.e7)([U.Z], () => U.Z.getGuild(r), [r]),
        M = (0, y.Z)({ forceFetch: !1 });
    c()(null != C, 'Missing guildBoostingSubscriptionPlan'), c()(null != L, 'Unknown guild: '.concat(r));
    let G = [
            {
                planId: C.id,
                quantity: 1
            }
        ],
        er = null == x ? void 0 : x.items.find((e) => e.planId === J.Xh.PREMIUM_MONTH_TIER_2 || e.planId === J.Xh.PREMIUM_YEAR_TIER_2);
    null != er && G.push(er);
    let el = null == x ? void 0 : x.items.find((e) => e.planId === J.Xh.PREMIUM_MONTH_GUILD || e.planId === J.Xh.PREMIUM_YEAR_GUILD),
        { enabled: ea } = X.Z.useExperiment({ location: '32b64a_1' }),
        es = !ea || null == Z || !J.Tp.has(Z) || null == el,
        { analyticsLocations: ec } = (0, f.ZP)(),
        [eo, eu] = (0, j.ED)({
            subscriptionId: null == x ? void 0 : x.id,
            items: G,
            renewal: !0,
            paymentSourceId: null == x ? void 0 : x.paymentSourceId,
            currency: g.currency,
            preventFetch: es,
            analyticsLocations: ec,
            analyticsLocation: v.Z.GUILD_BOOSTING_PLAN_SELECT
        }),
        ed = !es && null == eo && null == eu,
        em = (null == (t = (0, T.N)()) || null == (n = t.subscription_trial) ? void 0 : n.sku_id) === J.Si.TIER_2,
        ep = F.ZP.hasBoostDiscount(R, M.fractionalState) && null != C.premiumUserPrice,
        eS = null == eo ? void 0 : eo.invoiceItems.find((e) => e.subscriptionPlanId === C.id),
        ex =
            null != eS
                ? {
                      amount: eS.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: g.currency
                  }
                : F.ZP.getPrice(C.id, ep, !1, g),
        eP = s * ex.amount,
        ev = (0, u.e7)([B.ZP], () => B.ZP.inReverseTrial() && F.ZP.hasBoostDiscount(R, M.fractionalState) && null != x),
        ef =
            F.ZP.hasBoostDiscount(R, M.fractionalState) && null != x && F.ZP.getPremiumType(x.planId) === J.p9.TIER_2
                ? z.NW.format(z.t.hf6YOT, { planName: F.ZP.getDisplayPremiumType(x.planId) })
                : z.NW.format(em ? z.t['ba1L7+'] : z.t.fkffDQ, {
                      onPremiumSubscriptionClick: P,
                      discountPercentage: (0, q.T3)(w.default.locale, J.Rr / 100),
                      freeSubscriptionCount: J.cb
                  }),
        ey = N.filter((e) => (0, V.tl)(e)).length,
        eI = (0, F.Ap)(g.paymentSourceId),
        { ipCountryCode: eN } = (0, h.Z)(),
        ej = 'HR' === eN && ex.currency === Q.pK.EUR,
        eg = M.fractionalState === J.a$.FP_SUB_PAUSED;
    return (
        p(ed),
        (0, i.jsxs)('div', {
            children: [
                eg && (0, i.jsx)(W.n, { fractionalPremiumInfo: M }),
                ev && null != x
                    ? (0, i.jsx)(ei, { endDate: x.currentPeriodEnd })
                    : (0, i.jsx)('div', {
                          className: a()(ee.planSelectText, ee.bodyText),
                          children: z.NW.string(z.t.jNY1FB)
                      }),
                N.length > 0
                    ? (0, i.jsxs)('div', {
                          className: ee.existingSlotNotice,
                          children: [
                              (0, i.jsx)(Y.Z, {
                                  className: ee.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      z.NW.format(z.t.F8xlho, { slotCount: N.length }),
                                      ey > 0 && null != x
                                          ? (0, i.jsx)(m.ua7, {
                                                text: z.NW.formatToPlainString(z.t.SFpsCA, {
                                                    canceledCount: ey,
                                                    date: x.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        m.P4T,
                                                        et(
                                                            en(
                                                                {
                                                                    size: 'custom',
                                                                    width: 20,
                                                                    height: 20
                                                                },
                                                                e
                                                            ),
                                                            {
                                                                className: ee.existingSlotTooltipWarningIcon,
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
                    className: ee.planSelectRow,
                    children: [
                        (0, i.jsxs)('div', {
                            className: ee.planSelectorWrapper,
                            children: [
                                (0, i.jsx)(m.FiK, {
                                    value: s,
                                    onChange: (e) => o(e),
                                    className: ee.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30
                                }),
                                (0, i.jsx)('div', {
                                    className: ee.planSelectorLabel,
                                    children: eI
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === J.rV.YEAR ? z.NW.string(z.t.YDpAzc) : n === J.rV.MONTH && 1 === t ? z.NW.string(z.t['6ZR3Bw']) : null;
                                          })({
                                              intervalType: E,
                                              intervalCount: _
                                          })
                                        : z.NW.string(z.t.K9Bmzc)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: a()(ee.planSelectorPreviewPrice, { [ee.loadingSpinner]: ed }),
                            children: ed
                                ? (0, i.jsx)(m.$jN, {})
                                : eI
                                  ? (0, H.T4)(ex.amount, ex.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: r = 1 } = e,
                                            l = (0, H.T4)(n, t);
                                        return i === J.rV.YEAR ? z.NW.formatToPlainString(z.t['8M04YG'], { price: l }) : i === J.rV.MONTH && 1 === r ? z.NW.formatToPlainString(z.t.VStWCQ, { price: l }) : i === J.rV.MONTH && r > 1 ? z.NW.formatToPlainString(z.t.xJvAFR, { price: l }) : null;
                                    })({
                                        intervalType: E,
                                        intervalCount: _,
                                        amount: ex.amount,
                                        currency: ex.currency
                                    })
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: ee.planSelectDivider }),
                (0, i.jsxs)('div', {
                    className: ee.planSelectRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: ee.planSelectorSubtotal,
                            children: z.NW.string(z.t.RtA7nZ)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(ee.__invalid_planSelectorSubtotalPrice, { [ee.loadingSpinner]: ed }),
                            children: ed
                                ? (0, i.jsx)(m.$jN, {})
                                : (0, i.jsx)(O.Z, {
                                      price: eP,
                                      currency: ex.currency,
                                      intervalType: E,
                                      intervalCount: _,
                                      isPrepaidPaymentSource: eI
                                  })
                        })
                    ]
                }),
                ej && (0, i.jsx)(S.Z, { message: z.NW.formatToPlainString(z.t['9hnZoK'], { kunaPriceWithCurrency: (0, H.T4)(7.5345 * eP, Q.pK.HRK) }) }),
                (0, i.jsx)(S.Z, { message: z.NW.format(z.t.Om31w8, { documentationLink: K.Z.getArticleURL($.BhN.LOCALIZED_PRICING) }) }),
                ev
                    ? (0, i.jsx)(D.e, {})
                    : (0, i.jsx)(D.Z, {
                          text: ef,
                          color: I.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function el(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: t, proratedInvoicePreview: r, renewalInvoicePreview: l, priceOptions: a } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.e7)([k.Z], () => k.Z.getForSkuAndInterval((0, F.Wz)(J.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let m = (e) => (0, g.j)(r.invoiceItems).find((n) => J.Z1.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, 'Missing guild boosting invoice item');
    let S = m((e) => e.amount < 0),
        x = null != S ? p.quantity - S.quantity : p.quantity,
        P = r.invoiceItems.filter((e) => (0, F.uZ)(e.subscriptionPlanId)),
        v = P.reduce((e, n) => e + n.amount, 0),
        f = (0, j.pV)(p) * x,
        y = (0, H.T4)(f, r.currency),
        I = (0, H.og)(y, s, o),
        N = (0, H.T4)(r.total, r.currency) + (r.currency !== Q.pK.USD ? '*' : ''),
        h = r.total - f - v,
        T = p.discounts.map((e) => {
            let n = e.amount / p.quantity;
            return et(en({}, e), { amount: n * x });
        }),
        b = (0, F.Ap)(a.paymentSourceId),
        E = (0, u.e7)([B.ZP], () => B.ZP.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            b
                ? null
                : E && null != n
                  ? (0, i.jsx)(ei, {
                        endDate: n.currentPeriodEnd,
                        className: ee.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(R.hG, {
                        proratedInvoice: r,
                        renewalInvoice: l
                    }),
            (0, i.jsxs)(Z.PO, {
                children: [
                    (0, i.jsx)(Z.q9, { children: z.NW.string(z.t.CWIwmp) }),
                    (0, i.jsx)(Z.i$, {
                        label: z.NW.formatToPlainString(z.t.a3cAOj, {
                            numGuildSubscriptions: x,
                            planName: (0, F.Gf)(d.id, !1, b)
                        }),
                        value: b ? y : I,
                        discounts: T,
                        originalAmount: p.subscriptionPlanPrice * x,
                        currency: r.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== v
                        ? (0, i.jsx)(Z.R$, {
                              label: (0, i.jsx)(R.As, {
                                  label: z.NW.formatToPlainString(z.t.ZSVgeX, { planName: (0, F.aq)(P[0].subscriptionPlanId) }),
                                  tooltipText: z.NW.string(z.t.JmwQJC)
                              }),
                              value: (0, H.T4)(v, r.currency)
                          })
                        : null,
                    0 !== h
                        ? (0, i.jsx)(Z.R$, {
                              label: (0, i.jsx)(R.As, {
                                  label: z.NW.string(z.t['+as5ZW']),
                                  tooltipText: z.NW.string(z.t.JmwQJC)
                              }),
                              value: (0, H.T4)(h, r.currency)
                          })
                        : null,
                    (0, i.jsx)(Z.KU, {}),
                    (0, i.jsx)(Z.Ji, {
                        label: z.NW.format(r.taxInclusive ? (b ? z.t.BqdxQk : z.t.XH4raG) : z.t.RUI48P, {}),
                        value: N
                    }),
                    null != n
                        ? (0, i.jsx)(R.nd, {
                              premiumSubscription: n,
                              proratedInvoice: r,
                              renewalInvoice: l,
                              isUpdate: !0,
                              isPrepaidPaymentSource: b,
                              isTrial: E
                          })
                        : (0, i.jsx)(R.nd, {
                              renewalInvoice: l,
                              priceOptions: a,
                              isPrepaidPaymentSource: b
                          })
                ]
            })
        ]
    });
}
function ea(e) {
    var n;
    let t,
        r,
        { paymentSources: l, priceOptions: a, currentPremiumSubscription: s, premiumSubscriptionPaymentSourceId: c, premiumSubscriptionPlan: d, newAdditionalPlans: S, onPaymentSourceChange: y, onPaymentSourceAdd: I, onPurchaseTermsChange: g, legalTermsNodeRef: h, hasLegalTermsFlash: T } = e,
        b = a.paymentSourceId,
        Z = (0, N.$)(l, b),
        E = (0, u.e7)([G.Z], () => (null != c ? G.Z.getPaymentSource(c) : null)),
        O = (0, u.e7)([L.Z], () => L.Z.hidePersonalInformation);
    t = null != s ? (0, F.Zx)(s, S[0].quantity, S[0].planId) : S;
    let { analyticsLocations: _ } = (0, f.ZP)(),
        [W] = (0, j.ED)({
            subscriptionId: null == s ? void 0 : s.id,
            items: t,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: b,
            currency: a.currency,
            analyticsLocations: _,
            analyticsLocation: v.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [R] = (0, j.ED)({
            subscriptionId: null == s ? void 0 : s.id,
            items: t,
            renewal: !0,
            paymentSourceId: b,
            currency: a.currency,
            analyticsLocations: _,
            analyticsLocation: v.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != R &&
        (r = {
            amount: R.total,
            currency: R.currency,
            tax: R.tax,
            taxInclusive: R.taxInclusive
        });
    let D = o.M.EEA_COUNTRIES.has(M.Z.ipCountryCodeWithFallback);
    return (0, i.jsxs)('div', {
        children: [
            null != W && null != R
                ? (0, i.jsx)(el, {
                      premiumSubscription: s,
                      premiumSubscriptionPlan: d,
                      proratedInvoicePreview: W,
                      renewalInvoicePreview: R,
                      priceOptions: a
                  })
                : null,
            (0, i.jsxs)('div', {
                className: ee.paymentSourceWrapper,
                children: [
                    (0, i.jsx)(m.vwX, {
                        tag: m.RB0.H5,
                        children: z.NW.string(z.t.mmDvV1)
                    }),
                    null != c
                        ? null != E
                            ? (0, i.jsx)(m.DY3, {
                                  text: z.NW.string(z.t.XiuuV1),
                                  children: (0, i.jsx)(x.Z, {
                                      paymentSources: [E],
                                      selectedPaymentSourceId: E.id,
                                      hidePersonalInformation: O,
                                      disabled: !0
                                  })
                              })
                            : (0, i.jsx)('div', { children: (0, i.jsx)(m.$jN, {}) })
                        : (0, i.jsx)(x.Z, {
                              paymentSources: Object.values(l),
                              selectedPaymentSourceId: b,
                              onChange: y,
                              onPaymentSourceAdd: I,
                              hidePersonalInformation: O
                          })
                ]
            }),
            (0, i.jsx)(C.Z, {
                isActive: T,
                ref: h,
                children:
                    null != r &&
                    (0, i.jsx)(P.Z, {
                        onChange: g,
                        forceShow: !0,
                        finePrint: (0, i.jsx)(p.Z, {
                            subscriptionPlan: d,
                            paymentSourceType: Z,
                            basePrice: r,
                            productLine: $.POd.BOOST
                        }),
                        showPricingLink: (null != (n = null == W ? void 0 : W.currency) ? n : Q.pK.USD) !== Q.pK.USD,
                        showWithdrawalWaiver: D,
                        subscriptionPlan: d
                    })
            })
        ]
    });
}
function es(e) {
    let n,
        { onClose: t, guild: l, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o } = e,
        { theme: u } = (0, m.TCT)(),
        [d, p] = r.useState(E.fe.Scenes.ENTRY),
        [S, x] = r.useState(!1);
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
            className: ee.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(E.fe, {
                          className: ee.confirmationAnimation,
                          nextScene: d,
                          onScenePlay: (e) => {
                              if (!S)
                                  switch (e) {
                                      case E.fe.Scenes.ENTRY:
                                          return p(E.fe.Scenes.IDLE);
                                      case E.fe.Scenes.IDLE:
                                          return p(E.fe.Scenes.SUCCESS);
                                      case E.fe.Scenes.SUCCESS:
                                          return x(!0), p(E.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(_.C, {
                    className: ee.confirmationUpgradedBanner,
                    theme: u,
                    premiumType: J.p9.TIER_2,
                    type: Q.X7.has(null != o ? o : Q.He.UNKNOWN) ? _.C.Types.PREMIUM_PAYMENT_STARTED : _.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: ee.confirmationText,
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
