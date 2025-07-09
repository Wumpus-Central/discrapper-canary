(t.d(n, {
    CP: () => el,
    Gq: () => es,
    R7: () => ec
}),
    t(539854),
    t(388685));
var i = t(255367),
    r = t(73800),
    l = t(120356),
    a = t.n(l),
    s = t(512722),
    c = t.n(s),
    o = t(742280),
    u = t(442837),
    d = t(692547),
    p = t(481060),
    m = t(224550),
    S = t(490504),
    x = t(275850),
    P = t(672971),
    f = t(100527),
    v = t(906732),
    y = t(975298),
    I = t(436774),
    j = t(563132),
    g = t(435020),
    h = t(374649),
    T = t(591548),
    b = t(847903),
    N = t(639119),
    Z = t(53900),
    E = t(811334),
    O = t(110818),
    _ = t(553797),
    R = t(741245),
    C = t(346071),
    D = t(314182),
    w = t(42818),
    L = t(900683),
    U = t(706454),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i));
            }));
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
function er(e) {
    let { endDate: n, className: t } = e;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)('div', { className: en.reverseTrialContextInfoDivider }),
            (0, i.jsx)(p.Text, {
                variant: 'text-sm/normal',
                className: en.reverseTrialContextText,
                children: ee.intl.format(ee.t.IeaYqq, { endDate: n })
            }),
            (0, i.jsx)('div', { className: en.reverseTrialContextInfoDivider })
        ]
    });
}
function el(e) {
    var n, t;
    let { guildId: l, premiumSubscriptionPlan: s, numGuildBoosts: o, setNumGuildBoosts: m, setForceDisableSubmitButton: x, premiumSubscription: P, onClickPremiumSubscriptionLink: g, existingAvailableSlots: T = [], priceOptions: E } = e,
        { setInvoicePreview: O } = (0, j.JL)(),
        R = (0, Z.Z)(),
        D = s.interval,
        w = s.intervalCount,
        M = (0, u.e7)([W.Z], () => W.Z.getForSkuAndInterval((0, H.Wz)(Q.Si.GUILD), D, w)),
        G = (0, u.e7)([B.default], () => B.default.getCurrentUser()),
        k = (0, u.e7)([A.Z], () => A.Z.getGuild(l), [l]),
        el = (0, y.Z)({ forceFetch: !1 });
    (c()(null != M, 'Missing guildBoostingSubscriptionPlan'), c()(null != k, 'Unknown guild: '.concat(l)));
    let ea = [
            {
                planId: M.id,
                quantity: 1
            }
        ],
        es = null == P ? void 0 : P.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_TIER_2 || e.planId === Q.Xh.PREMIUM_YEAR_TIER_2);
    null != es && ea.push(es);
    let ec = null == P ? void 0 : P.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_GUILD || e.planId === Q.Xh.PREMIUM_YEAR_GUILD),
        { enabled: eo } = J.Z.useExperiment({ location: '32b64a_1' }),
        eu = !eo || null == R || !Q.Tp.has(R) || null == ec,
        { analyticsLocations: ed } = (0, v.ZP)(),
        [ep, em] = (0, h.ED)({
            subscriptionId: null == P ? void 0 : P.id,
            items: ea,
            renewal: !0,
            paymentSourceId: null == P ? void 0 : P.paymentSourceId,
            currency: E.currency,
            preventFetch: eu,
            analyticsLocations: ed,
            analyticsLocation: f.Z.GUILD_BOOSTING_PLAN_SELECT
        });
    r.useEffect(() => {
        O(ep);
    }, [O, ep]);
    let eS = !eu && null == ep && null == em,
        ex = (null == (t = (0, N.N)()) || null == (n = t.subscription_trial) ? void 0 : n.sku_id) === Q.Si.TIER_2,
        eP = H.ZP.hasBoostDiscount(G, el.fractionalState),
        ef = null == ep ? void 0 : ep.invoiceItems.find((e) => e.subscriptionPlanId === M.id),
        ev =
            null != ef
                ? {
                      amount: ef.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: E.currency
                  }
                : H.ZP.getPrice(M.id, eP, !1, E),
        ey = o * ev.amount,
        eI = (0, u.e7)([Y.Z], () => Y.Z.inReverseTrial() && H.ZP.hasBoostDiscount(G, el.fractionalState) && null != P),
        ej =
            H.ZP.hasBoostDiscount(G, el.fractionalState) && null != P && H.ZP.getPremiumType(P.planId) === Q.p9.TIER_2
                ? ee.intl.format(ee.t.hf6YOT, { planName: H.ZP.getDisplayPremiumType(P.planId) })
                : ee.intl.format(ex ? ee.t['ba1L7+'] : ee.t.fkffDQ, {
                      onPremiumSubscriptionClick: g,
                      discountPercentage: (0, q.T3)(U.default.locale, Q.Rr / 100),
                      freeSubscriptionCount: Q.cb
                  }),
        eg = T.filter((e) => (0, V.tl)(e)).length,
        eh = (0, H.Ap)(E.paymentSourceId),
        { ipCountryCode: eT } = (0, b.Z)(),
        eb = 'HR' === eT && ev.currency === $.pK.EUR,
        eN = el.fractionalState === Q.a$.FP_SUB_PAUSED;
    return (
        x(eS),
        (0, i.jsxs)('div', {
            children: [
                eN && (0, i.jsx)(C.n, { fractionalPremiumInfo: el }),
                eI && null != P
                    ? (0, i.jsx)(er, { endDate: P.currentPeriodEnd })
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
                                      eg > 0 && null != P
                                          ? (0, i.jsx)(p.ua7, {
                                                text: ee.intl.formatToPlainString(ee.t.SFpsCA, {
                                                    canceledCount: eg,
                                                    date: P.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        p.P4T,
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
                                (0, i.jsx)(p.FiK, {
                                    value: o,
                                    onChange: (e) => m(e),
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
                                ? (0, i.jsx)(p.$jN, {})
                                : eh
                                  ? (0, X.T4)(ev.amount, ev.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: r = 1 } = e,
                                            l = (0, X.T4)(n, t);
                                        return i === Q.rV.YEAR ? ee.intl.formatToPlainString(ee.t['8M04YG'], { price: l }) : i === Q.rV.MONTH && 1 === r ? ee.intl.formatToPlainString(ee.t.VStWCQ, { price: l }) : i === Q.rV.MONTH && r > 1 ? ee.intl.formatToPlainString(ee.t.xJvAFR, { price: l }) : null;
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
                                ? (0, i.jsx)(p.$jN, {})
                                : (0, i.jsx)(_.Z, {
                                      price: ey,
                                      currency: ev.currency,
                                      intervalType: D,
                                      intervalCount: w,
                                      isPrepaidPaymentSource: eh
                                  })
                        })
                    ]
                }),
                eb && (0, i.jsx)(S.Z, { message: ee.intl.formatToPlainString(ee.t['9hnZoK'], { kunaPriceWithCurrency: (0, X.T4)(7.5345 * ey, $.pK.HRK) }) }),
                (0, i.jsx)(S.Z, { message: ee.intl.format(ee.t.Om31w8, { documentationLink: K.Z.getArticleURL(z.BhN.LOCALIZED_PRICING) }) }),
                eI
                    ? (0, i.jsx)(L.e, {})
                    : (0, i.jsx)(L.Z, {
                          text: ej,
                          color: I.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function ea(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: t, proratedInvoicePreview: r, renewalInvoicePreview: l, priceOptions: a } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.e7)([W.Z], () => W.Z.getForSkuAndInterval((0, H.Wz)(Q.Si.GUILD), s, o));
    c()(null != d, 'Missing guildBoostingSubscriptionPlan');
    let p = (e) => (0, T.j)(r.invoiceItems).find((n) => Q.Z1.has(n.subscriptionPlanId) && e(n)),
        m = p((e) => e.amount >= 0);
    c()(null != m, 'Missing guild boosting invoice item');
    let S = p((e) => e.amount < 0),
        x = null != S ? m.quantity - S.quantity : m.quantity,
        P = r.invoiceItems.filter((e) => (0, H.uZ)(e.subscriptionPlanId)),
        f = P.reduce((e, n) => e + n.amount, 0),
        v = (0, h.pV)(m) * x,
        y = (0, X.T4)(v, r.currency),
        I = (0, X.og)(y, s, o),
        j = (0, X.T4)(r.total, r.currency) + (r.currency !== $.pK.USD ? '*' : ''),
        g = r.total - v - f,
        b = m.discounts.map((e) => {
            let n = e.amount / m.quantity;
            return ei(et({}, e), { amount: n * x });
        }),
        N = (0, H.Ap)(a.paymentSourceId),
        Z = (0, u.e7)([Y.Z], () => Y.Z.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            N
                ? null
                : Z && null != n
                  ? (0, i.jsx)(er, {
                        endDate: n.currentPeriodEnd,
                        className: en.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(w.hG, {
                        proratedInvoice: r,
                        renewalInvoice: l
                    }),
            (0, i.jsxs)(E.aO, {
                children: [
                    (0, i.jsx)(E.Z9, { children: ee.intl.string(ee.t.CWIwmp) }),
                    (0, i.jsx)(E.i$, {
                        label: ee.intl.formatToPlainString(ee.t.a3cAOj, {
                            numGuildSubscriptions: x,
                            planName: (0, H.Gf)(d.id, !1, N)
                        }),
                        value: N ? y : I,
                        discounts: b,
                        originalAmount: m.subscriptionPlanPrice * x,
                        currency: r.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount
                    }),
                    0 !== f
                        ? (0, i.jsx)(E.B1, {
                              label: (0, i.jsx)(w.As, {
                                  label: ee.intl.formatToPlainString(ee.t.ZSVgeX, { planName: (0, H.aq)(P[0].subscriptionPlanId) }),
                                  tooltipText: ee.intl.string(ee.t.JmwQJC)
                              }),
                              value: (0, X.T4)(f, r.currency)
                          })
                        : null,
                    0 !== g
                        ? (0, i.jsx)(E.B1, {
                              label: (0, i.jsx)(w.As, {
                                  label: ee.intl.string(ee.t['+as5ZW']),
                                  tooltipText: ee.intl.string(ee.t.JmwQJC)
                              }),
                              value: (0, X.T4)(g, r.currency)
                          })
                        : null,
                    (0, i.jsx)(E.UN, {}),
                    (0, i.jsx)(E.az, {
                        label: ee.intl.format(r.taxInclusive ? (N ? ee.t.BqdxQk : ee.t.XH4raG) : ee.t.RUI48P, {}),
                        value: j
                    }),
                    null != n
                        ? (0, i.jsx)(w.nd, {
                              premiumSubscription: n,
                              proratedInvoice: r,
                              renewalInvoice: l,
                              isUpdate: !0,
                              isPrepaidPaymentSource: N,
                              isTrial: Z
                          })
                        : (0, i.jsx)(w.nd, {
                              renewalInvoice: l,
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
        l,
        { paymentSources: a, priceOptions: s, currentPremiumSubscription: c, premiumSubscriptionPaymentSourceId: d, premiumSubscriptionPlan: S, newAdditionalPlans: y, onPaymentSourceChange: I, onPaymentSourceAdd: T, onPurchaseTermsChange: b, legalTermsNodeRef: N, hasLegalTermsFlash: Z } = e,
        { setInvoicePreview: E } = (0, j.JL)(),
        O = s.paymentSourceId,
        _ = (0, g.$)(a, O),
        R = (0, u.e7)([k.Z], () => (null != d ? k.Z.getPaymentSource(d) : null)),
        C = (0, u.e7)([M.Z], () => M.Z.hidePersonalInformation);
    t = null != c ? (0, H.Zx)(c, y[0].quantity, y[0].planId) : y;
    let { analyticsLocations: w } = (0, v.ZP)(),
        [L] = (0, h.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: O,
            currency: s.currency,
            analyticsLocations: w,
            analyticsLocation: f.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [U] = (0, h.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !0,
            paymentSourceId: O,
            currency: s.currency,
            analyticsLocations: w,
            analyticsLocation: f.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != U &&
        (l = {
            amount: U.subtotal,
            currency: U.currency,
            tax: U.tax,
            taxInclusive: !1
        });
    let A = o.M.EEA_COUNTRIES.has(G.Z.ipCountryCodeWithFallback);
    return (
        r.useEffect(() => {
            E(L);
        }, [E, L]),
        (0, i.jsxs)('div', {
            children: [
                null != L && null != U
                    ? (0, i.jsx)(ea, {
                          premiumSubscription: c,
                          premiumSubscriptionPlan: S,
                          proratedInvoicePreview: L,
                          renewalInvoicePreview: U,
                          priceOptions: s
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: en.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(p.vwX, {
                            tag: p.RB0.H5,
                            children: ee.intl.string(ee.t.mmDvV1)
                        }),
                        null != d
                            ? null != R
                                ? (0, i.jsx)(p.DY3, {
                                      text: ee.intl.string(ee.t.XiuuV1),
                                      children: (0, i.jsx)(x.ZP, {
                                          paymentSources: [R],
                                          selectedPaymentSourceId: R.id,
                                          hidePersonalInformation: C,
                                          disabled: !0
                                      })
                                  })
                                : (0, i.jsx)('div', { children: (0, i.jsx)(p.$jN, {}) })
                            : (0, i.jsx)(x.ZP, {
                                  paymentSources: Object.values(a),
                                  selectedPaymentSourceId: O,
                                  onChange: I,
                                  onPaymentSourceAdd: T,
                                  hidePersonalInformation: C
                              })
                    ]
                }),
                (0, i.jsx)(D.Z, {
                    isActive: Z,
                    ref: N,
                    children:
                        null != l &&
                        (0, i.jsx)(P.Z, {
                            onChange: b,
                            forceShow: !0,
                            finePrint: (0, i.jsx)(m.Z, {
                                subscriptionPlan: S,
                                paymentSourceType: _,
                                proratedAmount: null != L ? L.total : void 0,
                                basePrice: l,
                                productLine: z.POd.BOOST
                            }),
                            showPricingLink: (null != (n = null == L ? void 0 : L.currency) ? n : $.pK.USD) !== $.pK.USD,
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
        { onClose: t, guild: l, guildBoostQuantity: a, isTransfer: s = !1, withAnimation: c = !0, paymentSourceType: o, didPurchaseOnFractionalPremium: u = !1 } = e,
        { theme: d } = (0, p.TCT)(),
        [m, S] = r.useState(O.fe.Scenes.ENTRY),
        [x, P] = r.useState(!1);
    return (
        (n = s
            ? null == l
                ? ee.intl.format(ee.t.P52e1t, {})
                : ee.intl.format(ee.t['4UnIk5'], { guildName: l.name })
            : u
              ? ee.intl.format(ee.t.gFaKd3, { helpCenterLink: K.Z.getArticleURL(z.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              : null == l
                ? ee.intl.format(ee.t.SZ5ohY, { guildSubscriptionQuantity: a })
                : ee.intl.format(ee.t.GxK3Mj, {
                      guildName: l.name,
                      guildSubscriptionQuantity: a
                  })),
        (0, i.jsxs)('div', {
            className: en.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(O.fe, {
                          className: en.confirmationAnimation,
                          nextScene: m,
                          onScenePlay: (e) => {
                              if (!x)
                                  switch (e) {
                                      case O.fe.Scenes.ENTRY:
                                          return S(O.fe.Scenes.IDLE);
                                      case O.fe.Scenes.IDLE:
                                          return S(O.fe.Scenes.SUCCESS);
                                      case O.fe.Scenes.SUCCESS:
                                          return (P(!0), S(O.fe.Scenes.IDLE));
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(R.ZP, {
                    className: en.confirmationUpgradedBanner,
                    theme: d,
                    premiumType: Q.p9.TIER_2,
                    type: $.X7.has(null != o ? o : $.He.UNKNOWN) ? R.ZP.Types.PREMIUM_PAYMENT_STARTED : R.ZP.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: en.confirmationText,
                    children: n
                }),
                (0, i.jsx)(p.zxk, {
                    variant: 'primary',
                    text: ee.intl.string(ee.t['/iTxg4']),
                    onClick: t
                })
            ]
        })
    );
}
