t.d(n, {
    CP: () => et,
    Gq: () => er,
    R7: () => el
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
    P = t(100527),
    S = t(906732),
    N = t(975298),
    g = t(436774),
    y = t(374649),
    I = t(591548),
    j = t(847903),
    h = t(639119),
    b = t(53900),
    T = t(653798),
    Z = t(110818),
    E = t(553797),
    O = t(741245),
    _ = t(314182),
    W = t(42818),
    C = t(900683),
    R = t(706454),
    D = t(430824),
    w = t(246946),
    U = t(594174),
    L = t(351402),
    A = t(853872),
    M = t(509545),
    k = t(78839),
    G = t(709586),
    B = t(267642),
    F = t(63063),
    V = t(930153),
    Y = t(74538),
    K = t(937615),
    q = t(588797),
    H = t(981631),
    X = t(474936),
    z = t(231338),
    J = t(388032),
    Q = t(138575);
function $(e) {
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
function ee(e, n) {
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
function en(e) {
    let { endDate: n, className: t } = e;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)('div', { className: Q.reverseTrialContextInfoDivider }),
            (0, i.jsx)(m.Text, {
                variant: 'text-sm/normal',
                className: Q.reverseTrialContextText,
                children: J.NW.format(J.t.IeaYqq, { endDate: n })
            }),
            (0, i.jsx)('div', { className: Q.reverseTrialContextInfoDivider })
        ]
    });
}
function et(e) {
    var n, t;
    let { guildId: r, premiumSubscriptionPlan: l, numGuildBoosts: s, setNumGuildBoosts: o, setForceDisableSubmitButton: p, premiumSubscription: x, onClickPremiumSubscriptionLink: f, existingAvailableSlots: I = [], priceOptions: T } = e,
        Z = (0, b.Z)(),
        O = l.interval,
        _ = l.intervalCount,
        W = (0, u.e7)([M.Z], () => M.Z.getForSkuAndInterval((0, Y.Wz)(X.Si.GUILD), O, _)),
        w = (0, u.e7)([U.default], () => U.default.getCurrentUser()),
        L = (0, u.e7)([D.Z], () => D.Z.getGuild(r), [r]),
        { fractionalState: A } = (0, N.Z)({ forceFetch: !1 });
    c()(null != W, 'Missing guildBoostingSubscriptionPlan'), c()(null != L, 'Unknown guild: '.concat(r));
    let et = [
            {
                planId: W.id,
                quantity: 1
            }
        ],
        ei = null == x ? void 0 : x.items.find((e) => e.planId === X.Xh.PREMIUM_MONTH_TIER_2 || e.planId === X.Xh.PREMIUM_YEAR_TIER_2);
    null != ei && et.push(ei);
    let er = null == x ? void 0 : x.items.find((e) => e.planId === X.Xh.PREMIUM_MONTH_GUILD || e.planId === X.Xh.PREMIUM_YEAR_GUILD),
        { enabled: el } = q.Z.useExperiment({ location: '32b64a_1' }),
        ea = !el || null == Z || !X.Tp.has(Z) || null == er,
        { analyticsLocations: es } = (0, S.ZP)(),
        [ec, eo] = (0, y.ED)({
            subscriptionId: null == x ? void 0 : x.id,
            items: et,
            renewal: !0,
            paymentSourceId: null == x ? void 0 : x.paymentSourceId,
            currency: T.currency,
            preventFetch: ea,
            analyticsLocations: es,
            analyticsLocation: P.Z.GUILD_BOOSTING_PLAN_SELECT
        }),
        eu = !ea && null == ec && null == eo,
        ed = (null === (t = (0, h.N)()) || void 0 === t ? void 0 : null === (n = t.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === X.Si.TIER_2,
        em = Y.ZP.hasBoostDiscount(w, A) && null != W.premiumUserPrice,
        ep = null == ec ? void 0 : ec.invoiceItems.find((e) => e.subscriptionPlanId === W.id),
        ev =
            null != ep
                ? {
                      amount: ep.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: T.currency
                  }
                : Y.ZP.getPrice(W.id, em, !1, T),
        ex = s * ev.amount,
        ef = (0, u.e7)([k.ZP], () => k.ZP.inReverseTrial() && Y.ZP.hasBoostDiscount(w, A) && null != x),
        eP =
            Y.ZP.hasBoostDiscount(w, A) && null != x && Y.ZP.getPremiumType(x.planId) === X.p9.TIER_2
                ? J.NW.format(J.t.hf6YOT, { planName: Y.ZP.getDisplayPremiumType(x.planId) })
                : J.NW.format(ed ? J.t['ba1L7+'] : J.t.fkffDQ, {
                      onPremiumSubscriptionClick: f,
                      discountPercentage: (0, V.T3)(R.default.locale, X.Rr / 100),
                      freeSubscriptionCount: X.cb
                  }),
        eS = I.filter((e) => (0, B.tl)(e)).length,
        eN = (0, Y.Ap)(T.paymentSourceId),
        { ipCountryCode: eg } = (0, j.Z)(),
        ey = 'HR' === eg && ev.currency === z.pK.EUR;
    return (
        p(eu),
        (0, i.jsxs)('div', {
            children: [
                ef && null != x
                    ? (0, i.jsx)(en, { endDate: x.currentPeriodEnd })
                    : (0, i.jsx)('div', {
                          className: a()(Q.planSelectText, Q.bodyText),
                          children: J.NW.string(J.t.jNY1FB)
                      }),
                I.length > 0
                    ? (0, i.jsxs)('div', {
                          className: Q.existingSlotNotice,
                          children: [
                              (0, i.jsx)(G.Z, {
                                  className: Q.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      J.NW.format(J.t.F8xlho, { slotCount: I.length }),
                                      eS > 0 && null != x
                                          ? (0, i.jsx)(m.ua7, {
                                                text: J.NW.formatToPlainString(J.t.SFpsCA, {
                                                    canceledCount: eS,
                                                    date: x.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        m.P4T,
                                                        ee(
                                                            $(
                                                                {
                                                                    size: 'custom',
                                                                    width: 20,
                                                                    height: 20
                                                                },
                                                                e
                                                            ),
                                                            {
                                                                className: Q.existingSlotTooltipWarningIcon,
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
                    className: Q.planSelectRow,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Q.planSelectorWrapper,
                            children: [
                                (0, i.jsx)(m.FiK, {
                                    value: s,
                                    onChange: (e) => o(e),
                                    className: Q.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30
                                }),
                                (0, i.jsx)('div', {
                                    className: Q.planSelectorLabel,
                                    children: eN
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === X.rV.YEAR ? J.NW.string(J.t.YDpAzc) : n === X.rV.MONTH && 1 === t ? J.NW.string(J.t['6ZR3Bw']) : null;
                                          })({
                                              intervalType: O,
                                              intervalCount: _
                                          })
                                        : J.NW.string(J.t.K9Bmzc)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: a()(Q.planSelectorPreviewPrice, { [Q.loadingSpinner]: eu }),
                            children: eu
                                ? (0, i.jsx)(m.$jN, {})
                                : eN
                                  ? (0, K.T4)(ev.amount, ev.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: r = 1 } = e,
                                            l = (0, K.T4)(n, t);
                                        return i === X.rV.YEAR ? J.NW.formatToPlainString(J.t['8M04YG'], { price: l }) : i === X.rV.MONTH && 1 === r ? J.NW.formatToPlainString(J.t.VStWCQ, { price: l }) : i === X.rV.MONTH && r > 1 ? J.NW.formatToPlainString(J.t.xJvAFR, { price: l }) : null;
                                    })({
                                        intervalType: O,
                                        intervalCount: _,
                                        amount: ev.amount,
                                        currency: ev.currency
                                    })
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: Q.planSelectDivider }),
                (0, i.jsxs)('div', {
                    className: Q.planSelectRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: Q.planSelectorSubtotal,
                            children: J.NW.string(J.t.RtA7nZ)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(Q.__invalid_planSelectorSubtotalPrice, { [Q.loadingSpinner]: eu }),
                            children: eu
                                ? (0, i.jsx)(m.$jN, {})
                                : (0, i.jsx)(E.Z, {
                                      price: ex,
                                      currency: ev.currency,
                                      intervalType: O,
                                      intervalCount: _,
                                      isPrepaidPaymentSource: eN
                                  })
                        })
                    ]
                }),
                ey && (0, i.jsx)(v.Z, { message: J.NW.formatToPlainString(J.t['9hnZoK'], { kunaPriceWithCurrency: (0, K.T4)(7.5345 * ex, z.pK.HRK) }) }),
                (0, i.jsx)(v.Z, { message: J.NW.format(J.t.Om31w8, { documentationLink: F.Z.getArticleURL(H.BhN.LOCALIZED_PRICING) }) }),
                ef
                    ? (0, i.jsx)(C.e, {})
                    : (0, i.jsx)(C.Z, {
                          text: eP,
                          color: g.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function ei(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: t, proratedInvoicePreview: r, renewalInvoicePreview: l, priceOptions: a } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.e7)([M.Z], () => M.Z.getForSkuAndInterval((0, Y.Wz)(X.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let m = (e) => (0, I.j)(r.invoiceItems).find((n) => X.Z1.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, 'Missing guild boosting invoice item');
    let v = m((e) => e.amount < 0),
        x = null != v ? p.quantity - v.quantity : p.quantity,
        f = r.invoiceItems.filter((e) => (0, Y.uZ)(e.subscriptionPlanId)),
        P = f.reduce((e, n) => e + n.amount, 0),
        S = (0, y.pV)(p) * x,
        N = (0, K.T4)(S, r.currency),
        g = (0, K.og)(N, s, o),
        j = (0, K.T4)(r.total, r.currency) + (r.currency !== z.pK.USD ? '*' : ''),
        h = r.total - S - P,
        b = p.discounts.map((e) => {
            let n = e.amount / p.quantity;
            return ee($({}, e), { amount: n * x });
        }),
        Z = (0, Y.Ap)(a.paymentSourceId),
        E = (0, u.e7)([k.ZP], () => k.ZP.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            Z
                ? null
                : E && null != n
                  ? (0, i.jsx)(en, {
                        endDate: n.currentPeriodEnd,
                        className: Q.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(W.hG, {
                        proratedInvoice: r,
                        renewalInvoice: l
                    }),
            (0, i.jsxs)(T.PO, {
                children: [
                    (0, i.jsx)(T.q9, { children: J.NW.string(J.t.CWIwmp) }),
                    (0, i.jsx)(T.i$, {
                        label: J.NW.formatToPlainString(J.t.a3cAOj, {
                            numGuildSubscriptions: x,
                            planName: (0, Y.Gf)(d.id, !1, Z)
                        }),
                        value: Z ? N : g,
                        discounts: b,
                        originalAmount: p.subscriptionPlanPrice * x,
                        currency: r.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== P
                        ? (0, i.jsx)(T.R$, {
                              label: (0, i.jsx)(W.As, {
                                  label: J.NW.formatToPlainString(J.t.ZSVgeX, { planName: (0, Y.aq)(f[0].subscriptionPlanId) }),
                                  tooltipText: J.NW.string(J.t.JmwQJC)
                              }),
                              value: (0, K.T4)(P, r.currency)
                          })
                        : null,
                    0 !== h
                        ? (0, i.jsx)(T.R$, {
                              label: (0, i.jsx)(W.As, {
                                  label: J.NW.string(J.t['+as5ZW']),
                                  tooltipText: J.NW.string(J.t.JmwQJC)
                              }),
                              value: (0, K.T4)(h, r.currency)
                          })
                        : null,
                    (0, i.jsx)(T.KU, {}),
                    (0, i.jsx)(T.Ji, {
                        label: J.NW.format(r.taxInclusive ? (Z ? J.t.BqdxQk : J.t.XH4raG) : J.t.RUI48P, {}),
                        value: j
                    }),
                    null != n
                        ? (0, i.jsx)(W.nd, {
                              premiumSubscription: n,
                              proratedInvoice: r,
                              renewalInvoice: l,
                              isUpdate: !0,
                              isPrepaidPaymentSource: Z,
                              isTrial: E
                          })
                        : (0, i.jsx)(W.nd, {
                              renewalInvoice: l,
                              priceOptions: a,
                              isPrepaidPaymentSource: Z
                          })
                ]
            })
        ]
    });
}
function er(e) {
    var n, t;
    let r,
        l,
        { paymentSources: a, priceOptions: s, currentPremiumSubscription: c, premiumSubscriptionPaymentSourceId: d, premiumSubscriptionPlan: v, newAdditionalPlans: N, onPaymentSourceChange: g, onPaymentSourceAdd: I, onPurchaseTermsChange: j, legalTermsNodeRef: h, hasLegalTermsFlash: b } = e,
        T = s.paymentSourceId,
        Z = (0, u.e7)([A.Z], () => (null != d ? A.Z.getPaymentSource(d) : null)),
        E = (0, u.e7)([w.Z], () => w.Z.hidePersonalInformation);
    r = null != c ? (0, Y.Zx)(c, N[0].quantity, N[0].planId) : N;
    let { analyticsLocations: O } = (0, S.ZP)(),
        [W] = (0, y.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: r,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: T,
            currency: s.currency,
            analyticsLocations: O,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [C] = (0, y.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: r,
            renewal: !0,
            paymentSourceId: T,
            currency: s.currency,
            analyticsLocations: O,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != C &&
        (l = {
            amount: C.total,
            currency: C.currency,
            tax: C.tax,
            taxInclusive: C.taxInclusive
        });
    let R = o.M.EEA_COUNTRIES.has(L.Z.ipCountryCodeWithFallback);
    return (0, i.jsxs)('div', {
        children: [
            null != W && null != C
                ? (0, i.jsx)(ei, {
                      premiumSubscription: c,
                      premiumSubscriptionPlan: v,
                      proratedInvoicePreview: W,
                      renewalInvoicePreview: C,
                      priceOptions: s
                  })
                : null,
            (0, i.jsxs)('div', {
                className: Q.paymentSourceWrapper,
                children: [
                    (0, i.jsx)(m.vwX, {
                        tag: m.RB0.H5,
                        children: J.NW.string(J.t.mmDvV1)
                    }),
                    null != d
                        ? null != Z
                            ? (0, i.jsx)(m.DY3, {
                                  text: J.NW.string(J.t.XiuuV1),
                                  children: (0, i.jsx)(x.Z, {
                                      paymentSources: [Z],
                                      selectedPaymentSourceId: Z.id,
                                      hidePersonalInformation: E,
                                      disabled: !0
                                  })
                              })
                            : (0, i.jsx)('div', { children: (0, i.jsx)(m.$jN, {}) })
                        : (0, i.jsx)(x.Z, {
                              paymentSources: Object.values(a),
                              selectedPaymentSourceId: T,
                              onChange: g,
                              onPaymentSourceAdd: I,
                              hidePersonalInformation: E
                          })
                ]
            }),
            (0, i.jsx)(_.Z, {
                isActive: b,
                ref: h,
                children:
                    null != l &&
                    (0, i.jsx)(f.Z, {
                        onChange: j,
                        forceShow: !0,
                        finePrint: (0, i.jsx)(p.Z, {
                            subscriptionPlan: v,
                            paymentSourceType: null === (n = a[null != T ? T : '']) || void 0 === n ? void 0 : n.type,
                            basePrice: l,
                            productLine: H.POd.BOOST
                        }),
                        showPricingLink: (null !== (t = null == W ? void 0 : W.currency) && void 0 !== t ? t : z.pK.USD) !== z.pK.USD,
                        showWithdrawalWaiver: R,
                        subscriptionPlan: v
                    })
            })
        ]
    });
}
function el(e) {
    let n,
        { onClose: t, guild: l, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o } = e,
        { theme: u } = (0, m.TCT)(),
        [d, p] = r.useState(Z.fe.Scenes.ENTRY),
        [v, x] = r.useState(!1);
    return (
        (n = s
            ? null == l
                ? J.NW.format(J.t.P52e1t, {})
                : J.NW.format(J.t['4UnIk5'], { guildName: l.name })
            : null == l
              ? J.NW.format(J.t.SZ5ohY, { guildSubscriptionQuantity: a })
              : J.NW.format(J.t.GxK3Mj, {
                    guildName: l.name,
                    guildSubscriptionQuantity: a
                })),
        (0, i.jsxs)('div', {
            className: Q.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(Z.fe, {
                          className: Q.confirmationAnimation,
                          nextScene: d,
                          onScenePlay: (e) => {
                              if (!v)
                                  switch (e) {
                                      case Z.fe.Scenes.ENTRY:
                                          return p(Z.fe.Scenes.IDLE);
                                      case Z.fe.Scenes.IDLE:
                                          return p(Z.fe.Scenes.SUCCESS);
                                      case Z.fe.Scenes.SUCCESS:
                                          return x(!0), p(Z.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(O.C, {
                    className: Q.confirmationUpgradedBanner,
                    theme: u,
                    premiumType: X.p9.TIER_2,
                    type: z.X7.has(null != o ? o : z.He.UNKNOWN) ? O.C.Types.PREMIUM_PAYMENT_STARTED : O.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: Q.confirmationText,
                    children: n
                }),
                (0, i.jsx)(m.zxk, {
                    onClick: t,
                    children: J.NW.string(J.t['/iTxg4'])
                })
            ]
        })
    );
}
