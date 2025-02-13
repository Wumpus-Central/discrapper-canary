i.d(n, {
    CP: () => $,
    Gq: () => en,
    R7: () => ei
}),
    i(653041),
    i(47120),
    i(724458);
var t = i(200651),
    l = i(192379),
    r = i(120356),
    a = i.n(r),
    s = i(512722),
    c = i.n(s),
    o = i(742280),
    u = i(442837),
    d = i(692547),
    m = i(481060),
    p = i(224550),
    x = i(490504),
    v = i(275850),
    S = i(672971),
    I = i(100527),
    P = i(906732),
    f = i(436774),
    g = i(374649),
    h = i(591548),
    j = i(847903),
    y = i(639119),
    T = i(53900),
    N = i(653798),
    Z = i(110818),
    b = i(553797),
    _ = i(741245),
    E = i(314182),
    C = i(42818),
    R = i(900683),
    D = i(706454),
    U = i(430824),
    L = i(246946),
    w = i(594174),
    O = i(351402),
    A = i(853872),
    M = i(509545),
    G = i(78839),
    B = i(709586),
    k = i(267642),
    W = i(63063),
    V = i(930153),
    Y = i(74538),
    F = i(937615),
    K = i(588797),
    q = i(981631),
    H = i(474936),
    X = i(231338),
    z = i(388032),
    J = i(861393);
function Q(e) {
    let { endDate: n, className: i } = e;
    return (0, t.jsxs)('div', {
        className: i,
        children: [
            (0, t.jsx)('div', { className: J.reverseTrialContextInfoDivider }),
            (0, t.jsx)(m.Text, {
                variant: 'text-sm/normal',
                className: J.reverseTrialContextText,
                children: z.intl.format(z.t.IeaYqq, { endDate: n })
            }),
            (0, t.jsx)('div', { className: J.reverseTrialContextInfoDivider })
        ]
    });
}
function $(e) {
    var n, i;
    let { guildId: l, premiumSubscriptionPlan: r, numGuildBoosts: s, setNumGuildBoosts: o, setForceDisableSubmitButton: p, premiumSubscription: v, onClickPremiumSubscriptionLink: S, existingAvailableSlots: h = [], priceOptions: N } = e,
        Z = (0, T.Z)(),
        _ = r.interval,
        E = r.intervalCount,
        C = (0, u.e7)([M.Z], () => M.Z.getForSkuAndInterval((0, Y.Wz)(H.Si.GUILD), _, E)),
        L = (0, u.e7)([w.default], () => w.default.getCurrentUser()),
        O = (0, u.e7)([U.Z], () => U.Z.getGuild(l), [l]);
    c()(null != C, 'Missing guildBoostingSubscriptionPlan'), c()(null != O, 'Unknown guild: '.concat(l));
    let A = [
            {
                planId: C.id,
                quantity: 1
            }
        ],
        $ = null == v ? void 0 : v.items.find((e) => e.planId === H.Xh.PREMIUM_MONTH_TIER_2 || e.planId === H.Xh.PREMIUM_YEAR_TIER_2);
    null != $ && A.push($);
    let ee = null == v ? void 0 : v.items.find((e) => e.planId === H.Xh.PREMIUM_MONTH_GUILD || e.planId === H.Xh.PREMIUM_YEAR_GUILD),
        { enabled: en } = K.Z.useExperiment({ location: '32b64a_1' }),
        ei = !en || null == Z || !H.Tp.has(Z) || null == ee,
        { analyticsLocations: et } = (0, P.ZP)(),
        [el, er] = (0, g.ED)({
            subscriptionId: null == v ? void 0 : v.id,
            items: A,
            renewal: !0,
            paymentSourceId: null == v ? void 0 : v.paymentSourceId,
            currency: N.currency,
            preventFetch: ei,
            analyticsLocations: et,
            analyticsLocation: I.Z.GUILD_BOOSTING_PLAN_SELECT
        }),
        ea = !ei && null == el && null == er,
        es = (null === (i = (0, y.N)()) || void 0 === i ? void 0 : null === (n = i.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === H.Si.TIER_2,
        ec = Y.ZP.hasBoostDiscount(L) && null != C.premiumUserPrice,
        eo = null == el ? void 0 : el.invoiceItems.find((e) => e.subscriptionPlanId === C.id),
        eu =
            null != eo
                ? {
                      amount: eo.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: N.currency
                  }
                : Y.ZP.getPrice(C.id, ec, !1, N),
        ed = s * eu.amount,
        em = (0, u.e7)([G.ZP], () => G.ZP.inReverseTrial() && Y.ZP.hasBoostDiscount(L) && null != v),
        ep =
            Y.ZP.hasBoostDiscount(L) && null != v
                ? z.intl.format(z.t.hf6YOT, { planName: Y.ZP.getDisplayPremiumType(v.planId) })
                : z.intl.format(es ? z.t['ba1L7+'] : z.t.fkffDQ, {
                      onPremiumSubscriptionClick: S,
                      discountPercentage: (0, V.T3)(D.default.locale, H.Rr / 100),
                      freeSubscriptionCount: H.cb
                  }),
        ex = h.filter((e) => (0, k.tl)(e)).length,
        ev = (0, Y.Ap)(N.paymentSourceId),
        { ipCountryCode: eS } = (0, j.Z)(),
        eI = 'HR' === eS && eu.currency === X.pK.EUR;
    return (
        p(ea),
        (0, t.jsxs)('div', {
            children: [
                em && null != v
                    ? (0, t.jsx)(Q, { endDate: v.currentPeriodEnd })
                    : (0, t.jsx)('div', {
                          className: a()(J.planSelectText, J.bodyText),
                          children: z.intl.string(z.t.jNY1FB)
                      }),
                h.length > 0
                    ? (0, t.jsxs)('div', {
                          className: J.existingSlotNotice,
                          children: [
                              (0, t.jsx)(B.Z, {
                                  className: J.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, t.jsxs)('div', {
                                  children: [
                                      z.intl.format(z.t.F8xlho, { slotCount: h.length }),
                                      ex > 0 && null != v
                                          ? (0, t.jsx)(m.ua7, {
                                                text: z.intl.formatToPlainString(z.t.SFpsCA, {
                                                    canceledCount: ex,
                                                    date: v.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, t.jsx)(m.P4T, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        ...e,
                                                        className: J.existingSlotTooltipWarningIcon,
                                                        color: d.Z.unsafe_rawColors.YELLOW_300.css
                                                    })
                                            })
                                          : null
                                  ]
                              })
                          ]
                      })
                    : null,
                (0, t.jsxs)('div', {
                    className: J.planSelectRow,
                    children: [
                        (0, t.jsxs)('div', {
                            className: J.planSelectorWrapper,
                            children: [
                                (0, t.jsx)(m.FiK, {
                                    value: s,
                                    onChange: (e) => o(e),
                                    className: J.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30
                                }),
                                (0, t.jsx)('div', {
                                    className: J.planSelectorLabel,
                                    children: ev
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: i = 1 } = e;
                                              return n === H.rV.YEAR ? z.intl.string(z.t.YDpAzc) : n === H.rV.MONTH && 1 === i ? z.intl.string(z.t['6ZR3Bw']) : null;
                                          })({
                                              intervalType: _,
                                              intervalCount: E
                                          })
                                        : z.intl.string(z.t.K9Bmzc)
                                })
                            ]
                        }),
                        (0, t.jsx)('div', {
                            className: a()(J.planSelectorPreviewPrice, { [J.loadingSpinner]: ea }),
                            children: ea
                                ? (0, t.jsx)(m.$jN, {})
                                : ev
                                  ? (0, F.T4)(eu.amount, eu.currency)
                                  : (function (e) {
                                        let { amount: n, currency: i, intervalType: t, intervalCount: l = 1 } = e,
                                            r = (0, F.T4)(n, i);
                                        return t === H.rV.YEAR ? z.intl.formatToPlainString(z.t['8M04YG'], { price: r }) : t === H.rV.MONTH && 1 === l ? z.intl.formatToPlainString(z.t.VStWCQ, { price: r }) : t === H.rV.MONTH && l > 1 ? z.intl.formatToPlainString(z.t.xJvAFR, { price: r }) : null;
                                    })({
                                        intervalType: _,
                                        intervalCount: E,
                                        amount: eu.amount,
                                        currency: eu.currency
                                    })
                        })
                    ]
                }),
                (0, t.jsx)('div', { className: J.planSelectDivider }),
                (0, t.jsxs)('div', {
                    className: J.planSelectRow,
                    children: [
                        (0, t.jsx)('div', {
                            className: J.planSelectorSubtotal,
                            children: z.intl.string(z.t.RtA7nZ)
                        }),
                        (0, t.jsx)('div', {
                            className: a()(J.__invalid_planSelectorSubtotalPrice, { [J.loadingSpinner]: ea }),
                            children: ea
                                ? (0, t.jsx)(m.$jN, {})
                                : (0, t.jsx)(b.Z, {
                                      price: ed,
                                      currency: eu.currency,
                                      intervalType: _,
                                      intervalCount: E,
                                      isPrepaidPaymentSource: ev
                                  })
                        })
                    ]
                }),
                eI && (0, t.jsx)(x.Z, { message: z.intl.formatToPlainString(z.t['9hnZoK'], { kunaPriceWithCurrency: (0, F.T4)(7.5345 * ed, X.pK.HRK) }) }),
                (0, t.jsx)(x.Z, { message: z.intl.format(z.t.Om31w8, { documentationLink: W.Z.getArticleURL(q.BhN.LOCALIZED_PRICING) }) }),
                em
                    ? (0, t.jsx)(R.e, {})
                    : (0, t.jsx)(R.Z, {
                          text: ep,
                          color: f.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function ee(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: i, proratedInvoicePreview: l, renewalInvoicePreview: r, priceOptions: a } = e,
        s = i.interval,
        o = i.intervalCount,
        d = (0, u.e7)([M.Z], () => M.Z.getForSkuAndInterval((0, Y.Wz)(H.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let m = (e) => (0, h.j)(l.invoiceItems).find((n) => H.Z1.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, 'Missing guild boosting invoice item');
    let x = m((e) => e.amount < 0),
        v = null != x ? p.quantity - x.quantity : p.quantity,
        S = l.invoiceItems.filter((e) => (0, Y.uZ)(e.subscriptionPlanId)),
        I = S.reduce((e, n) => e + n.amount, 0),
        P = (0, g.pV)(p) * v,
        f = (0, F.T4)(P, l.currency),
        j = (0, F.og)(f, s, o),
        y = (0, F.T4)(l.total, l.currency) + (l.currency !== X.pK.USD ? '*' : ''),
        T = l.total - P - I,
        Z = p.discounts.map((e) => {
            let n = e.amount / p.quantity;
            return {
                ...e,
                amount: n * v
            };
        }),
        b = (0, Y.Ap)(a.paymentSourceId),
        _ = (0, u.e7)([G.ZP], () => G.ZP.inReverseTrial());
    return (0, t.jsxs)(t.Fragment, {
        children: [
            b
                ? null
                : _ && null != n
                  ? (0, t.jsx)(Q, {
                        endDate: n.currentPeriodEnd,
                        className: J.reverseTrialContextMarginBottom
                    })
                  : (0, t.jsx)(C.hG, {
                        proratedInvoice: l,
                        renewalInvoice: r
                    }),
            (0, t.jsxs)(N.PO, {
                children: [
                    (0, t.jsx)(N.q9, { children: z.intl.string(z.t.CWIwmp) }),
                    (0, t.jsx)(N.i$, {
                        label: z.intl.formatToPlainString(z.t.a3cAOj, {
                            numGuildSubscriptions: v,
                            planName: (0, Y.Gf)(d.id, !1, b)
                        }),
                        value: b ? f : j,
                        discounts: Z,
                        originalAmount: p.subscriptionPlanPrice * v,
                        currency: l.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== I
                        ? (0, t.jsx)(N.R$, {
                              label: (0, t.jsx)(C.As, {
                                  label: z.intl.formatToPlainString(z.t.ZSVgeX, { planName: (0, Y.aq)(S[0].subscriptionPlanId) }),
                                  tooltipText: z.intl.string(z.t.JmwQJC)
                              }),
                              value: (0, F.T4)(I, l.currency)
                          })
                        : null,
                    0 !== T
                        ? (0, t.jsx)(N.R$, {
                              label: (0, t.jsx)(C.As, {
                                  label: z.intl.string(z.t['+as5ZW']),
                                  tooltipText: z.intl.string(z.t.JmwQJC)
                              }),
                              value: (0, F.T4)(T, l.currency)
                          })
                        : null,
                    (0, t.jsx)(N.KU, {}),
                    (0, t.jsx)(N.Ji, {
                        label: z.intl.format(l.taxInclusive ? (b ? z.t.BqdxQk : z.t.XH4raG) : z.t.RUI48P, {}),
                        value: y
                    }),
                    null != n
                        ? (0, t.jsx)(C.nd, {
                              premiumSubscription: n,
                              proratedInvoice: l,
                              renewalInvoice: r,
                              isUpdate: !0,
                              isPrepaidPaymentSource: b,
                              isTrial: _
                          })
                        : (0, t.jsx)(C.nd, {
                              renewalInvoice: r,
                              priceOptions: a,
                              isPrepaidPaymentSource: b
                          })
                ]
            })
        ]
    });
}
function en(e) {
    var n, i;
    let l,
        r,
        { paymentSources: a, priceOptions: s, currentPremiumSubscription: c, premiumSubscriptionPaymentSourceId: d, premiumSubscriptionPlan: x, newAdditionalPlans: f, onPaymentSourceChange: h, onPaymentSourceAdd: j, onPurchaseTermsChange: y, legalTermsNodeRef: T, hasLegalTermsFlash: N } = e,
        Z = s.paymentSourceId,
        b = (0, u.e7)([A.Z], () => (null != d ? A.Z.getPaymentSource(d) : null)),
        _ = (0, u.e7)([L.Z], () => L.Z.hidePersonalInformation);
    l = null != c ? (0, Y.Zx)(c, f[0].quantity, f[0].planId) : f;
    let { analyticsLocations: C } = (0, P.ZP)(),
        [R] = (0, g.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: l,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: Z,
            currency: s.currency,
            analyticsLocations: C,
            analyticsLocation: I.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [D] = (0, g.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: l,
            renewal: !0,
            paymentSourceId: Z,
            currency: s.currency,
            analyticsLocations: C,
            analyticsLocation: I.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != D &&
        (r = {
            amount: D.total,
            currency: D.currency,
            tax: D.tax,
            taxInclusive: D.taxInclusive
        });
    let U = o.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback);
    return (0, t.jsxs)('div', {
        children: [
            null != R && null != D
                ? (0, t.jsx)(ee, {
                      premiumSubscription: c,
                      premiumSubscriptionPlan: x,
                      proratedInvoicePreview: R,
                      renewalInvoicePreview: D,
                      priceOptions: s
                  })
                : null,
            (0, t.jsxs)('div', {
                className: J.paymentSourceWrapper,
                children: [
                    (0, t.jsx)(m.vwX, {
                        tag: m.RB0.H5,
                        children: z.intl.string(z.t.mmDvV1)
                    }),
                    null != d
                        ? null != b
                            ? (0, t.jsx)(m.DY3, {
                                  text: z.intl.string(z.t.XiuuV1),
                                  children: (0, t.jsx)(v.Z, {
                                      paymentSources: [b],
                                      selectedPaymentSourceId: b.id,
                                      hidePersonalInformation: _,
                                      disabled: !0
                                  })
                              })
                            : (0, t.jsx)('div', { children: (0, t.jsx)(m.$jN, {}) })
                        : (0, t.jsx)(v.Z, {
                              paymentSources: Object.values(a),
                              selectedPaymentSourceId: Z,
                              onChange: h,
                              onPaymentSourceAdd: j,
                              hidePersonalInformation: _
                          })
                ]
            }),
            (0, t.jsx)(E.Z, {
                isActive: N,
                ref: T,
                children:
                    null != r &&
                    (0, t.jsx)(S.Z, {
                        onChange: y,
                        forceShow: !0,
                        finePrint: (0, t.jsx)(p.Z, {
                            subscriptionPlan: x,
                            paymentSourceType: null === (n = a[null != Z ? Z : '']) || void 0 === n ? void 0 : n.type,
                            basePrice: r,
                            productLine: q.POd.BOOST
                        }),
                        showPricingLink: (null !== (i = null == R ? void 0 : R.currency) && void 0 !== i ? i : X.pK.USD) !== X.pK.USD,
                        showWithdrawalWaiver: U,
                        subscriptionPlan: x
                    })
            })
        ]
    });
}
function ei(e) {
    let n,
        { onClose: i, guild: r, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o } = e,
        { theme: u } = (0, m.TCT)(),
        [d, p] = l.useState(Z.fe.Scenes.ENTRY),
        [x, v] = l.useState(!1);
    return (
        (n = s
            ? null == r
                ? z.intl.format(z.t.P52e1t, {})
                : z.intl.format(z.t['4UnIk5'], { guildName: r.name })
            : null == r
              ? z.intl.format(z.t.SZ5ohY, { guildSubscriptionQuantity: a })
              : z.intl.format(z.t.GxK3Mj, {
                    guildName: r.name,
                    guildSubscriptionQuantity: a
                })),
        (0, t.jsxs)('div', {
            className: J.confirmationContainer,
            children: [
                c
                    ? (0, t.jsx)(Z.fe, {
                          className: J.confirmationAnimation,
                          nextScene: d,
                          onScenePlay: (e) => {
                              if (!x)
                                  switch (e) {
                                      case Z.fe.Scenes.ENTRY:
                                          return p(Z.fe.Scenes.IDLE);
                                      case Z.fe.Scenes.IDLE:
                                          return p(Z.fe.Scenes.SUCCESS);
                                      case Z.fe.Scenes.SUCCESS:
                                          return v(!0), p(Z.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, t.jsx)(_.C, {
                    className: J.confirmationUpgradedBanner,
                    theme: u,
                    premiumType: H.p9.TIER_2,
                    type: X.X7.has(null != o ? o : X.He.UNKNOWN) ? _.C.Types.PREMIUM_PAYMENT_STARTED : _.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, t.jsx)('div', {
                    className: J.confirmationText,
                    children: n
                }),
                (0, t.jsx)(m.zxk, {
                    onClick: i,
                    children: z.intl.string(z.t['/iTxg4'])
                })
            ]
        })
    );
}
