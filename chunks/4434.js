t.d(n, {
    CP: () => el,
    Gq: () => ea,
    R7: () => es
}),
    t(539854),
    t(388685);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
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
    I = t(975298),
    y = t(436774),
    j = t(435020),
    g = t(374649),
    h = t(591548),
    T = t(847903),
    b = t(639119),
    N = t(53900),
    Z = t(811334),
    O = t(110818),
    E = t(553797),
    _ = t(741245),
    C = t(346071),
    R = t(314182),
    D = t(42818),
    w = t(900683),
    U = t(706454),
    L = t(430824),
    A = t(246946),
    M = t(594174),
    B = t(351402),
    G = t(853872),
    k = t(509545),
    W = t(78839),
    Y = t(709586),
    F = t(267642),
    V = t(63063),
    K = t(930153),
    q = t(74538),
    H = t(937615),
    X = t(588797),
    z = t(981631),
    Q = t(474936),
    J = t(231338),
    $ = t(388032),
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
                children: $.intl.format($.t.IeaYqq, { endDate: n })
            }),
            (0, i.jsx)('div', { className: ee.reverseTrialContextInfoDivider })
        ]
    });
}
function el(e) {
    var n, t;
    let { guildId: l, premiumSubscriptionPlan: r, numGuildBoosts: s, setNumGuildBoosts: o, setForceDisableSubmitButton: p, premiumSubscription: x, onClickPremiumSubscriptionLink: P, existingAvailableSlots: j = [], priceOptions: h } = e,
        Z = (0, N.Z)(),
        O = r.interval,
        _ = r.intervalCount,
        R = (0, u.e7)([k.Z], () => k.Z.getForSkuAndInterval((0, q.Wz)(Q.Si.GUILD), O, _)),
        D = (0, u.e7)([M.default], () => M.default.getCurrentUser()),
        A = (0, u.e7)([L.Z], () => L.Z.getGuild(l), [l]),
        B = (0, I.Z)({ forceFetch: !1 });
    c()(null != R, 'Missing guildBoostingSubscriptionPlan'), c()(null != A, 'Unknown guild: '.concat(l));
    let G = [
            {
                planId: R.id,
                quantity: 1
            }
        ],
        el = null == x ? void 0 : x.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_TIER_2 || e.planId === Q.Xh.PREMIUM_YEAR_TIER_2);
    null != el && G.push(el);
    let er = null == x ? void 0 : x.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_GUILD || e.planId === Q.Xh.PREMIUM_YEAR_GUILD),
        { enabled: ea } = X.Z.useExperiment({ location: '32b64a_1' }),
        es = !ea || null == Z || !Q.Tp.has(Z) || null == er,
        { analyticsLocations: ec } = (0, f.ZP)(),
        [eo, eu] = (0, g.ED)({
            subscriptionId: null == x ? void 0 : x.id,
            items: G,
            renewal: !0,
            paymentSourceId: null == x ? void 0 : x.paymentSourceId,
            currency: h.currency,
            preventFetch: es,
            analyticsLocations: ec,
            analyticsLocation: v.Z.GUILD_BOOSTING_PLAN_SELECT
        }),
        ed = !es && null == eo && null == eu,
        em = (null == (t = (0, b.N)()) || null == (n = t.subscription_trial) ? void 0 : n.sku_id) === Q.Si.TIER_2,
        ep = q.ZP.hasBoostDiscount(D, B.fractionalState) && null != R.premiumUserPrice,
        eS = null == eo ? void 0 : eo.invoiceItems.find((e) => e.subscriptionPlanId === R.id),
        ex =
            null != eS
                ? {
                      amount: eS.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: h.currency
                  }
                : q.ZP.getPrice(R.id, ep, !1, h),
        eP = s * ex.amount,
        ev = (0, u.e7)([W.ZP], () => W.ZP.inReverseTrial() && q.ZP.hasBoostDiscount(D, B.fractionalState) && null != x),
        ef =
            q.ZP.hasBoostDiscount(D, B.fractionalState) && null != x && q.ZP.getPremiumType(x.planId) === Q.p9.TIER_2
                ? $.intl.format($.t.hf6YOT, { planName: q.ZP.getDisplayPremiumType(x.planId) })
                : $.intl.format(em ? $.t['ba1L7+'] : $.t.fkffDQ, {
                      onPremiumSubscriptionClick: P,
                      discountPercentage: (0, K.T3)(U.default.locale, Q.Rr / 100),
                      freeSubscriptionCount: Q.cb
                  }),
        eI = j.filter((e) => (0, F.tl)(e)).length,
        ey = (0, q.Ap)(h.paymentSourceId),
        { ipCountryCode: ej } = (0, T.Z)(),
        eg = 'HR' === ej && ex.currency === J.pK.EUR,
        eh = B.fractionalState === Q.a$.FP_SUB_PAUSED;
    return (
        p(ed),
        (0, i.jsxs)('div', {
            children: [
                eh && (0, i.jsx)(C.n, { fractionalPremiumInfo: B }),
                ev && null != x
                    ? (0, i.jsx)(ei, { endDate: x.currentPeriodEnd })
                    : (0, i.jsx)('div', {
                          className: a()(ee.planSelectText, ee.bodyText),
                          children: $.intl.string($.t.jNY1FB)
                      }),
                j.length > 0
                    ? (0, i.jsxs)('div', {
                          className: ee.existingSlotNotice,
                          children: [
                              (0, i.jsx)(Y.Z, {
                                  className: ee.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      $.intl.format($.t.F8xlho, { slotCount: j.length }),
                                      eI > 0 && null != x
                                          ? (0, i.jsx)(m.ua7, {
                                                text: $.intl.formatToPlainString($.t.SFpsCA, {
                                                    canceledCount: eI,
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
                                    children: ey
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === Q.rV.YEAR ? $.intl.string($.t.YDpAzc) : n === Q.rV.MONTH && 1 === t ? $.intl.string($.t['6ZR3Bw']) : null;
                                          })({
                                              intervalType: O,
                                              intervalCount: _
                                          })
                                        : $.intl.string($.t.K9Bmzc)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: a()(ee.planSelectorPreviewPrice, { [ee.loadingSpinner]: ed }),
                            children: ed
                                ? (0, i.jsx)(m.$jN, {})
                                : ey
                                  ? (0, H.T4)(ex.amount, ex.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                            r = (0, H.T4)(n, t);
                                        return i === Q.rV.YEAR ? $.intl.formatToPlainString($.t['8M04YG'], { price: r }) : i === Q.rV.MONTH && 1 === l ? $.intl.formatToPlainString($.t.VStWCQ, { price: r }) : i === Q.rV.MONTH && l > 1 ? $.intl.formatToPlainString($.t.xJvAFR, { price: r }) : null;
                                    })({
                                        intervalType: O,
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
                            children: $.intl.string($.t.RtA7nZ)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(ee.__invalid_planSelectorSubtotalPrice, { [ee.loadingSpinner]: ed }),
                            children: ed
                                ? (0, i.jsx)(m.$jN, {})
                                : (0, i.jsx)(E.Z, {
                                      price: eP,
                                      currency: ex.currency,
                                      intervalType: O,
                                      intervalCount: _,
                                      isPrepaidPaymentSource: ey
                                  })
                        })
                    ]
                }),
                eg && (0, i.jsx)(S.Z, { message: $.intl.formatToPlainString($.t['9hnZoK'], { kunaPriceWithCurrency: (0, H.T4)(7.5345 * eP, J.pK.HRK) }) }),
                (0, i.jsx)(S.Z, { message: $.intl.format($.t.Om31w8, { documentationLink: V.Z.getArticleURL(z.BhN.LOCALIZED_PRICING) }) }),
                ev
                    ? (0, i.jsx)(w.e, {})
                    : (0, i.jsx)(w.Z, {
                          text: ef,
                          color: y.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function er(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: t, proratedInvoicePreview: l, renewalInvoicePreview: r, priceOptions: a } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.e7)([k.Z], () => k.Z.getForSkuAndInterval((0, q.Wz)(Q.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let m = (e) => (0, h.j)(l.invoiceItems).find((n) => Q.Z1.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, 'Missing guild boosting invoice item');
    let S = m((e) => e.amount < 0),
        x = null != S ? p.quantity - S.quantity : p.quantity,
        P = l.invoiceItems.filter((e) => (0, q.uZ)(e.subscriptionPlanId)),
        v = P.reduce((e, n) => e + n.amount, 0),
        f = (0, g.pV)(p) * x,
        I = (0, H.T4)(f, l.currency),
        y = (0, H.og)(I, s, o),
        j = (0, H.T4)(l.total, l.currency) + (l.currency !== J.pK.USD ? '*' : ''),
        T = l.total - f - v,
        b = p.discounts.map((e) => {
            let n = e.amount / p.quantity;
            return et(en({}, e), { amount: n * x });
        }),
        N = (0, q.Ap)(a.paymentSourceId),
        O = (0, u.e7)([W.ZP], () => W.ZP.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            N
                ? null
                : O && null != n
                  ? (0, i.jsx)(ei, {
                        endDate: n.currentPeriodEnd,
                        className: ee.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(D.hG, {
                        proratedInvoice: l,
                        renewalInvoice: r
                    }),
            (0, i.jsxs)(Z.aO, {
                children: [
                    (0, i.jsx)(Z.Z9, { children: $.intl.string($.t.CWIwmp) }),
                    (0, i.jsx)(Z.i$, {
                        label: $.intl.formatToPlainString($.t.a3cAOj, {
                            numGuildSubscriptions: x,
                            planName: (0, q.Gf)(d.id, !1, N)
                        }),
                        value: N ? I : y,
                        discounts: b,
                        originalAmount: p.subscriptionPlanPrice * x,
                        currency: l.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== v
                        ? (0, i.jsx)(Z.B1, {
                              label: (0, i.jsx)(D.As, {
                                  label: $.intl.formatToPlainString($.t.ZSVgeX, { planName: (0, q.aq)(P[0].subscriptionPlanId) }),
                                  tooltipText: $.intl.string($.t.JmwQJC)
                              }),
                              value: (0, H.T4)(v, l.currency)
                          })
                        : null,
                    0 !== T
                        ? (0, i.jsx)(Z.B1, {
                              label: (0, i.jsx)(D.As, {
                                  label: $.intl.string($.t['+as5ZW']),
                                  tooltipText: $.intl.string($.t.JmwQJC)
                              }),
                              value: (0, H.T4)(T, l.currency)
                          })
                        : null,
                    (0, i.jsx)(Z.UN, {}),
                    (0, i.jsx)(Z.az, {
                        label: $.intl.format(l.taxInclusive ? (N ? $.t.BqdxQk : $.t.XH4raG) : $.t.RUI48P, {}),
                        value: j
                    }),
                    null != n
                        ? (0, i.jsx)(D.nd, {
                              premiumSubscription: n,
                              proratedInvoice: l,
                              renewalInvoice: r,
                              isUpdate: !0,
                              isPrepaidPaymentSource: N,
                              isTrial: O
                          })
                        : (0, i.jsx)(D.nd, {
                              renewalInvoice: r,
                              priceOptions: a,
                              isPrepaidPaymentSource: N
                          })
                ]
            })
        ]
    });
}
function ea(e) {
    var n;
    let t,
        l,
        { paymentSources: r, priceOptions: a, currentPremiumSubscription: s, premiumSubscriptionPaymentSourceId: c, premiumSubscriptionPlan: d, newAdditionalPlans: S, onPaymentSourceChange: I, onPaymentSourceAdd: y, onPurchaseTermsChange: h, legalTermsNodeRef: T, hasLegalTermsFlash: b } = e,
        N = a.paymentSourceId,
        Z = (0, j.$)(r, N),
        O = (0, u.e7)([G.Z], () => (null != c ? G.Z.getPaymentSource(c) : null)),
        E = (0, u.e7)([A.Z], () => A.Z.hidePersonalInformation);
    t = null != s ? (0, q.Zx)(s, S[0].quantity, S[0].planId) : S;
    let { analyticsLocations: _ } = (0, f.ZP)(),
        [C] = (0, g.ED)({
            subscriptionId: null == s ? void 0 : s.id,
            items: t,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: N,
            currency: a.currency,
            analyticsLocations: _,
            analyticsLocation: v.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [D] = (0, g.ED)({
            subscriptionId: null == s ? void 0 : s.id,
            items: t,
            renewal: !0,
            paymentSourceId: N,
            currency: a.currency,
            analyticsLocations: _,
            analyticsLocation: v.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        }),
        w = null != C ? C : D;
    null != w &&
        (l = {
            amount: w.total,
            currency: w.currency,
            tax: w.tax,
            taxInclusive: w.taxInclusive
        });
    let U = o.M.EEA_COUNTRIES.has(B.Z.ipCountryCodeWithFallback);
    return (0, i.jsxs)('div', {
        children: [
            null != C && null != D
                ? (0, i.jsx)(er, {
                      premiumSubscription: s,
                      premiumSubscriptionPlan: d,
                      proratedInvoicePreview: C,
                      renewalInvoicePreview: D,
                      priceOptions: a
                  })
                : null,
            (0, i.jsxs)('div', {
                className: ee.paymentSourceWrapper,
                children: [
                    (0, i.jsx)(m.vwX, {
                        tag: m.RB0.H5,
                        children: $.intl.string($.t.mmDvV1)
                    }),
                    null != c
                        ? null != O
                            ? (0, i.jsx)(m.DY3, {
                                  text: $.intl.string($.t.XiuuV1),
                                  children: (0, i.jsx)(x.Z, {
                                      paymentSources: [O],
                                      selectedPaymentSourceId: O.id,
                                      hidePersonalInformation: E,
                                      disabled: !0
                                  })
                              })
                            : (0, i.jsx)('div', { children: (0, i.jsx)(m.$jN, {}) })
                        : (0, i.jsx)(x.Z, {
                              paymentSources: Object.values(r),
                              selectedPaymentSourceId: N,
                              onChange: I,
                              onPaymentSourceAdd: y,
                              hidePersonalInformation: E
                          })
                ]
            }),
            (0, i.jsx)(R.Z, {
                isActive: b,
                ref: T,
                children:
                    null != l &&
                    (0, i.jsx)(P.Z, {
                        onChange: h,
                        forceShow: !0,
                        finePrint: (0, i.jsx)(p.Z, {
                            subscriptionPlan: d,
                            paymentSourceType: Z,
                            basePrice: l,
                            productLine: z.POd.BOOST
                        }),
                        showPricingLink: (null != (n = null == C ? void 0 : C.currency) ? n : J.pK.USD) !== J.pK.USD,
                        showWithdrawalWaiver: U,
                        subscriptionPlan: d
                    })
            })
        ]
    });
}
function es(e) {
    let n,
        { onClose: t, guild: r, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o, didPurchaseOnFractionalPremium: u = !1 } = e,
        { theme: d } = (0, m.TCT)(),
        [p, S] = l.useState(O.fe.Scenes.ENTRY),
        [x, P] = l.useState(!1);
    return (
        (n = s
            ? null == r
                ? $.intl.format($.t.P52e1t, {})
                : $.intl.format($.t['4UnIk5'], { guildName: r.name })
            : u
              ? $.intl.format($.t.gFaKd3, { helpCenterLink: V.Z.getArticleURL(z.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              : null == r
                ? $.intl.format($.t.SZ5ohY, { guildSubscriptionQuantity: a })
                : $.intl.format($.t.GxK3Mj, {
                      guildName: r.name,
                      guildSubscriptionQuantity: a
                  })),
        (0, i.jsxs)('div', {
            className: ee.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(O.fe, {
                          className: ee.confirmationAnimation,
                          nextScene: p,
                          onScenePlay: (e) => {
                              if (!x)
                                  switch (e) {
                                      case O.fe.Scenes.ENTRY:
                                          return S(O.fe.Scenes.IDLE);
                                      case O.fe.Scenes.IDLE:
                                          return S(O.fe.Scenes.SUCCESS);
                                      case O.fe.Scenes.SUCCESS:
                                          return P(!0), S(O.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(_.C, {
                    className: ee.confirmationUpgradedBanner,
                    theme: d,
                    premiumType: Q.p9.TIER_2,
                    type: J.X7.has(null != o ? o : J.He.UNKNOWN) ? _.C.Types.PREMIUM_PAYMENT_STARTED : _.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: ee.confirmationText,
                    children: n
                }),
                (0, i.jsx)(m.zxk, {
                    onClick: t,
                    children: $.intl.string($.t['/iTxg4'])
                })
            ]
        })
    );
}
