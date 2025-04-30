t.d(n, {
    CP: () => er,
    Gq: () => es,
    R7: () => ec
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
    P = t(275850),
    x = t(672971),
    f = t(100527),
    v = t(906732),
    I = t(975298),
    y = t(436774),
    j = t(563132),
    g = t(435020),
    h = t(374649),
    T = t(591548),
    b = t(847903),
    N = t(639119),
    E = t(53900),
    Z = t(811334),
    O = t(110818),
    _ = t(553797),
    C = t(741245),
    R = t(346071),
    D = t(314182),
    w = t(42818),
    U = t(900683),
    L = t(706454),
    A = t(430824),
    M = t(246946),
    B = t(594174),
    G = t(351402),
    k = t(853872),
    W = t(509545),
    Y = t(78839),
    F = t(709586),
    V = t(267642),
    K = t(63063),
    q = t(930153),
    H = t(74538),
    X = t(937615),
    J = t(588797),
    z = t(981631),
    Q = t(474936),
    $ = t(231338),
    ee = t(388032),
    en = t(599919);
function et(e) {
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
function ei(e, n) {
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
function el(e) {
    let { endDate: n, className: t } = e;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)('div', { className: en.reverseTrialContextInfoDivider }),
            (0, i.jsx)(m.Text, {
                variant: 'text-sm/normal',
                className: en.reverseTrialContextText,
                children: ee.intl.format(ee.t.IeaYqq, { endDate: n })
            }),
            (0, i.jsx)('div', { className: en.reverseTrialContextInfoDivider })
        ]
    });
}
function er(e) {
    var n, t;
    let { guildId: r, premiumSubscriptionPlan: s, numGuildBoosts: o, setNumGuildBoosts: p, setForceDisableSubmitButton: P, premiumSubscription: x, onClickPremiumSubscriptionLink: g, existingAvailableSlots: T = [], priceOptions: Z } = e,
        { setInvoicePreview: O } = (0, j.JL)(),
        C = (0, E.Z)(),
        D = s.interval,
        w = s.intervalCount,
        M = (0, u.e7)([W.Z], () => W.Z.getForSkuAndInterval((0, H.Wz)(Q.Si.GUILD), D, w)),
        G = (0, u.e7)([B.default], () => B.default.getCurrentUser()),
        k = (0, u.e7)([A.Z], () => A.Z.getGuild(r), [r]),
        er = (0, I.Z)({ forceFetch: !1 });
    c()(null != M, 'Missing guildBoostingSubscriptionPlan'), c()(null != k, 'Unknown guild: '.concat(r));
    let ea = [
            {
                planId: M.id,
                quantity: 1
            }
        ],
        es = null == x ? void 0 : x.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_TIER_2 || e.planId === Q.Xh.PREMIUM_YEAR_TIER_2);
    null != es && ea.push(es);
    let ec = null == x ? void 0 : x.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_GUILD || e.planId === Q.Xh.PREMIUM_YEAR_GUILD),
        { enabled: eo } = J.Z.useExperiment({ location: '32b64a_1' }),
        eu = !eo || null == C || !Q.Tp.has(C) || null == ec,
        { analyticsLocations: ed } = (0, v.ZP)(),
        [em, ep] = (0, h.ED)({
            subscriptionId: null == x ? void 0 : x.id,
            items: ea,
            renewal: !0,
            paymentSourceId: null == x ? void 0 : x.paymentSourceId,
            currency: Z.currency,
            preventFetch: eu,
            analyticsLocations: ed,
            analyticsLocation: f.Z.GUILD_BOOSTING_PLAN_SELECT
        });
    l.useEffect(() => {
        O(em);
    }, [O, em]);
    let eS = !eu && null == em && null == ep,
        eP = (null == (t = (0, N.N)()) || null == (n = t.subscription_trial) ? void 0 : n.sku_id) === Q.Si.TIER_2,
        ex = H.ZP.hasBoostDiscount(G, er.fractionalState) && null != M.premiumUserPrice,
        ef = null == em ? void 0 : em.invoiceItems.find((e) => e.subscriptionPlanId === M.id),
        ev =
            null != ef
                ? {
                      amount: ef.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: Z.currency
                  }
                : H.ZP.getPrice(M.id, ex, !1, Z),
        eI = o * ev.amount,
        ey = (0, u.e7)([Y.ZP], () => Y.ZP.inReverseTrial() && H.ZP.hasBoostDiscount(G, er.fractionalState) && null != x),
        ej =
            H.ZP.hasBoostDiscount(G, er.fractionalState) && null != x && H.ZP.getPremiumType(x.planId) === Q.p9.TIER_2
                ? ee.intl.format(ee.t.hf6YOT, { planName: H.ZP.getDisplayPremiumType(x.planId) })
                : ee.intl.format(eP ? ee.t['ba1L7+'] : ee.t.fkffDQ, {
                      onPremiumSubscriptionClick: g,
                      discountPercentage: (0, q.T3)(L.default.locale, Q.Rr / 100),
                      freeSubscriptionCount: Q.cb
                  }),
        eg = T.filter((e) => (0, V.tl)(e)).length,
        eh = (0, H.Ap)(Z.paymentSourceId),
        { ipCountryCode: eT } = (0, b.Z)(),
        eb = 'HR' === eT && ev.currency === $.pK.EUR,
        eN = er.fractionalState === Q.a$.FP_SUB_PAUSED;
    return (
        P(eS),
        (0, i.jsxs)('div', {
            children: [
                eN && (0, i.jsx)(R.n, { fractionalPremiumInfo: er }),
                ey && null != x
                    ? (0, i.jsx)(el, { endDate: x.currentPeriodEnd })
                    : (0, i.jsx)('div', {
                          className: a()(en.planSelectText, en.bodyText),
                          children: ee.intl.string(ee.t.jNY1FB)
                      }),
                T.length > 0
                    ? (0, i.jsxs)('div', {
                          className: en.existingSlotNotice,
                          children: [
                              (0, i.jsx)(F.Z, {
                                  className: en.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      ee.intl.format(ee.t.F8xlho, { slotCount: T.length }),
                                      eg > 0 && null != x
                                          ? (0, i.jsx)(m.ua7, {
                                                text: ee.intl.formatToPlainString(ee.t.SFpsCA, {
                                                    canceledCount: eg,
                                                    date: x.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        m.P4T,
                                                        ei(
                                                            et(
                                                                {
                                                                    size: 'custom',
                                                                    width: 20,
                                                                    height: 20
                                                                },
                                                                e
                                                            ),
                                                            {
                                                                className: en.existingSlotTooltipWarningIcon,
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
                    className: en.planSelectRow,
                    children: [
                        (0, i.jsxs)('div', {
                            className: en.planSelectorWrapper,
                            children: [
                                (0, i.jsx)(m.FiK, {
                                    value: o,
                                    onChange: (e) => p(e),
                                    className: en.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30
                                }),
                                (0, i.jsx)('div', {
                                    className: en.planSelectorLabel,
                                    children: eh
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === Q.rV.YEAR ? ee.intl.string(ee.t.YDpAzc) : n === Q.rV.MONTH && 1 === t ? ee.intl.string(ee.t['6ZR3Bw']) : null;
                                          })({
                                              intervalType: D,
                                              intervalCount: w
                                          })
                                        : ee.intl.string(ee.t.K9Bmzc)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: a()(en.planSelectorPreviewPrice, { [en.loadingSpinner]: eS }),
                            children: eS
                                ? (0, i.jsx)(m.$jN, {})
                                : eh
                                  ? (0, X.T4)(ev.amount, ev.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                            r = (0, X.T4)(n, t);
                                        return i === Q.rV.YEAR ? ee.intl.formatToPlainString(ee.t['8M04YG'], { price: r }) : i === Q.rV.MONTH && 1 === l ? ee.intl.formatToPlainString(ee.t.VStWCQ, { price: r }) : i === Q.rV.MONTH && l > 1 ? ee.intl.formatToPlainString(ee.t.xJvAFR, { price: r }) : null;
                                    })({
                                        intervalType: D,
                                        intervalCount: w,
                                        amount: ev.amount,
                                        currency: ev.currency
                                    })
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: en.planSelectDivider }),
                (0, i.jsxs)('div', {
                    className: en.planSelectRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: en.planSelectorSubtotal,
                            children: ee.intl.string(ee.t.RtA7nZ)
                        }),
                        (0, i.jsx)('div', {
                            className: a()(en.__invalid_planSelectorSubtotalPrice, { [en.loadingSpinner]: eS }),
                            children: eS
                                ? (0, i.jsx)(m.$jN, {})
                                : (0, i.jsx)(_.Z, {
                                      price: eI,
                                      currency: ev.currency,
                                      intervalType: D,
                                      intervalCount: w,
                                      isPrepaidPaymentSource: eh
                                  })
                        })
                    ]
                }),
                eb && (0, i.jsx)(S.Z, { message: ee.intl.formatToPlainString(ee.t['9hnZoK'], { kunaPriceWithCurrency: (0, X.T4)(7.5345 * eI, $.pK.HRK) }) }),
                (0, i.jsx)(S.Z, { message: ee.intl.format(ee.t.Om31w8, { documentationLink: K.Z.getArticleURL(z.BhN.LOCALIZED_PRICING) }) }),
                ey
                    ? (0, i.jsx)(U.e, {})
                    : (0, i.jsx)(U.Z, {
                          text: ej,
                          color: y.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function ea(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: t, proratedInvoicePreview: l, renewalInvoicePreview: r, priceOptions: a } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.e7)([W.Z], () => W.Z.getForSkuAndInterval((0, H.Wz)(Q.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let m = (e) => (0, T.j)(l.invoiceItems).find((n) => Q.Z1.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, 'Missing guild boosting invoice item');
    let S = m((e) => e.amount < 0),
        P = null != S ? p.quantity - S.quantity : p.quantity,
        x = l.invoiceItems.filter((e) => (0, H.uZ)(e.subscriptionPlanId)),
        f = x.reduce((e, n) => e + n.amount, 0),
        v = (0, h.pV)(p) * P,
        I = (0, X.T4)(v, l.currency),
        y = (0, X.og)(I, s, o),
        j = (0, X.T4)(l.total, l.currency) + (l.currency !== $.pK.USD ? '*' : ''),
        g = l.total - v - f,
        b = p.discounts.map((e) => {
            let n = e.amount / p.quantity;
            return ei(et({}, e), { amount: n * P });
        }),
        N = (0, H.Ap)(a.paymentSourceId),
        E = (0, u.e7)([Y.ZP], () => Y.ZP.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            N
                ? null
                : E && null != n
                  ? (0, i.jsx)(el, {
                        endDate: n.currentPeriodEnd,
                        className: en.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(w.hG, {
                        proratedInvoice: l,
                        renewalInvoice: r
                    }),
            (0, i.jsxs)(Z.aO, {
                children: [
                    (0, i.jsx)(Z.Z9, { children: ee.intl.string(ee.t.CWIwmp) }),
                    (0, i.jsx)(Z.i$, {
                        label: ee.intl.formatToPlainString(ee.t.a3cAOj, {
                            numGuildSubscriptions: P,
                            planName: (0, H.Gf)(d.id, !1, N)
                        }),
                        value: N ? I : y,
                        discounts: b,
                        originalAmount: p.subscriptionPlanPrice * P,
                        currency: l.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== f
                        ? (0, i.jsx)(Z.B1, {
                              label: (0, i.jsx)(w.As, {
                                  label: ee.intl.formatToPlainString(ee.t.ZSVgeX, { planName: (0, H.aq)(x[0].subscriptionPlanId) }),
                                  tooltipText: ee.intl.string(ee.t.JmwQJC)
                              }),
                              value: (0, X.T4)(f, l.currency)
                          })
                        : null,
                    0 !== g
                        ? (0, i.jsx)(Z.B1, {
                              label: (0, i.jsx)(w.As, {
                                  label: ee.intl.string(ee.t['+as5ZW']),
                                  tooltipText: ee.intl.string(ee.t.JmwQJC)
                              }),
                              value: (0, X.T4)(g, l.currency)
                          })
                        : null,
                    (0, i.jsx)(Z.UN, {}),
                    (0, i.jsx)(Z.az, {
                        label: ee.intl.format(l.taxInclusive ? (N ? ee.t.BqdxQk : ee.t.XH4raG) : ee.t.RUI48P, {}),
                        value: j
                    }),
                    null != n
                        ? (0, i.jsx)(w.nd, {
                              premiumSubscription: n,
                              proratedInvoice: l,
                              renewalInvoice: r,
                              isUpdate: !0,
                              isPrepaidPaymentSource: N,
                              isTrial: E
                          })
                        : (0, i.jsx)(w.nd, {
                              renewalInvoice: r,
                              priceOptions: a,
                              isPrepaidPaymentSource: N
                          })
                ]
            })
        ]
    });
}
function es(e) {
    var n;
    let t,
        r,
        { paymentSources: a, priceOptions: s, currentPremiumSubscription: c, premiumSubscriptionPaymentSourceId: d, premiumSubscriptionPlan: S, newAdditionalPlans: I, onPaymentSourceChange: y, onPaymentSourceAdd: T, onPurchaseTermsChange: b, legalTermsNodeRef: N, hasLegalTermsFlash: E } = e,
        { setInvoicePreview: Z } = (0, j.JL)(),
        O = s.paymentSourceId,
        _ = (0, g.$)(a, O),
        C = (0, u.e7)([k.Z], () => (null != d ? k.Z.getPaymentSource(d) : null)),
        R = (0, u.e7)([M.Z], () => M.Z.hidePersonalInformation);
    t = null != c ? (0, H.Zx)(c, I[0].quantity, I[0].planId) : I;
    let { analyticsLocations: w } = (0, v.ZP)(),
        [U] = (0, h.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: O,
            currency: s.currency,
            analyticsLocations: w,
            analyticsLocation: f.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [L] = (0, h.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !0,
            paymentSourceId: O,
            currency: s.currency,
            analyticsLocations: w,
            analyticsLocation: f.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != L &&
        (r = {
            amount: L.subtotal,
            currency: L.currency,
            tax: L.tax,
            taxInclusive: !1
        });
    let A = o.M.EEA_COUNTRIES.has(G.Z.ipCountryCodeWithFallback);
    return (
        l.useEffect(() => {
            Z(U);
        }, [Z, U]),
        (0, i.jsxs)('div', {
            children: [
                null != U && null != L
                    ? (0, i.jsx)(ea, {
                          premiumSubscription: c,
                          premiumSubscriptionPlan: S,
                          proratedInvoicePreview: U,
                          renewalInvoicePreview: L,
                          priceOptions: s
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: en.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(m.vwX, {
                            tag: m.RB0.H5,
                            children: ee.intl.string(ee.t.mmDvV1)
                        }),
                        null != d
                            ? null != C
                                ? (0, i.jsx)(m.DY3, {
                                      text: ee.intl.string(ee.t.XiuuV1),
                                      children: (0, i.jsx)(P.ZP, {
                                          paymentSources: [C],
                                          selectedPaymentSourceId: C.id,
                                          hidePersonalInformation: R,
                                          disabled: !0
                                      })
                                  })
                                : (0, i.jsx)('div', { children: (0, i.jsx)(m.$jN, {}) })
                            : (0, i.jsx)(P.ZP, {
                                  paymentSources: Object.values(a),
                                  selectedPaymentSourceId: O,
                                  onChange: y,
                                  onPaymentSourceAdd: T,
                                  hidePersonalInformation: R
                              })
                    ]
                }),
                (0, i.jsx)(D.Z, {
                    isActive: E,
                    ref: N,
                    children:
                        null != r &&
                        (0, i.jsx)(x.Z, {
                            onChange: b,
                            forceShow: !0,
                            finePrint: (0, i.jsx)(p.Z, {
                                subscriptionPlan: S,
                                paymentSourceType: _,
                                proratedAmount: null != U ? U.total : void 0,
                                basePrice: r,
                                productLine: z.POd.BOOST
                            }),
                            showPricingLink: (null != (n = null == U ? void 0 : U.currency) ? n : $.pK.USD) !== $.pK.USD,
                            showWithdrawalWaiver: A,
                            subscriptionPlan: S
                        })
                })
            ]
        })
    );
}
function ec(e) {
    let n,
        { onClose: t, guild: r, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o, didPurchaseOnFractionalPremium: u = !1 } = e,
        { theme: d } = (0, m.TCT)(),
        [p, S] = l.useState(O.fe.Scenes.ENTRY),
        [P, x] = l.useState(!1);
    return (
        (n = s
            ? null == r
                ? ee.intl.format(ee.t.P52e1t, {})
                : ee.intl.format(ee.t['4UnIk5'], { guildName: r.name })
            : u
              ? ee.intl.format(ee.t.gFaKd3, { helpCenterLink: K.Z.getArticleURL(z.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              : null == r
                ? ee.intl.format(ee.t.SZ5ohY, { guildSubscriptionQuantity: a })
                : ee.intl.format(ee.t.GxK3Mj, {
                      guildName: r.name,
                      guildSubscriptionQuantity: a
                  })),
        (0, i.jsxs)('div', {
            className: en.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(O.fe, {
                          className: en.confirmationAnimation,
                          nextScene: p,
                          onScenePlay: (e) => {
                              if (!P)
                                  switch (e) {
                                      case O.fe.Scenes.ENTRY:
                                          return S(O.fe.Scenes.IDLE);
                                      case O.fe.Scenes.IDLE:
                                          return S(O.fe.Scenes.SUCCESS);
                                      case O.fe.Scenes.SUCCESS:
                                          return x(!0), S(O.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(C.C, {
                    className: en.confirmationUpgradedBanner,
                    theme: d,
                    premiumType: Q.p9.TIER_2,
                    type: $.X7.has(null != o ? o : $.He.UNKNOWN) ? C.C.Types.PREMIUM_PAYMENT_STARTED : C.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: en.confirmationText,
                    children: n
                }),
                (0, i.jsx)(m.zxk, {
                    onClick: t,
                    children: ee.intl.string(ee.t['/iTxg4'])
                })
            ]
        })
    );
}
