n.d(t, {
    CP: () => ed,
    Gq: () => ep,
    R7: () => e_,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(742280),
    u = n(442837),
    d = n(692547),
    f = n(28664),
    p = n(481060),
    _ = n(224550),
    m = n(490504),
    h = n(275850),
    g = n(672971),
    E = n(100527),
    b = n(906732),
    y = n(975298),
    O = n(436774),
    v = n(563132),
    S = n(435020),
    I = n(374649),
    T = n(591548),
    C = n(847903),
    A = n(639119),
    N = n(53900),
    P = n(811334),
    R = n(110818),
    w = n(553797),
    D = n(741245),
    x = n(346071),
    L = n(314182),
    j = n(42818),
    M = n(900683),
    k = n(706454),
    U = n(246946),
    G = n(594174),
    Z = n(351402),
    F = n(853872),
    B = n(509545),
    V = n(78839),
    H = n(267642),
    Y = n(63063),
    W = n(930153),
    K = n(74538),
    z = n(937615),
    q = n(588797),
    Q = n(981631),
    X = n(283307),
    J = n(474936),
    $ = n(231338),
    ee = n(388032),
    et = n(157764);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eo = 1,
    es = 30;
function el(e) {
    let { amount: t, currency: n, intervalType: r, intervalCount: i = 1 } = e,
        a = (0, z.T4)(t, n);
    return r === J.rV.YEAR
        ? ee.intl.formatToPlainString(ee.t["8M04YJ"], { price: a })
        : r === J.rV.MONTH && 1 === i
          ? ee.intl.formatToPlainString(ee.t.VStWCR, { price: a })
          : r === J.rV.MONTH && i > 1
            ? ee.intl.formatToPlainString(ee.t.xJvAFU, { price: a })
            : null;
}
function ec(e) {
    let { intervalType: t, intervalCount: n = 1 } = e;
    return t === J.rV.YEAR
        ? ee.intl.string(ee.t.YDpAzZ)
        : t === J.rV.MONTH && 1 === n
          ? ee.intl.string(ee.t["6ZR3By"])
          : null;
}
function eu(e) {
    let { endDate: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: et.reverseTrialContextInfoDivider }),
            (0, r.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: et.reverseTrialContextText,
                children: ee.intl.format(ee.t.IeaYqg, { endDate: t }),
            }),
            (0, r.jsx)("div", { className: et.reverseTrialContextInfoDivider }),
        ],
    });
}
function ed(e) {
    var t, n;
    let {
            premiumSubscriptionPlan: a,
            numGuildBoosts: s,
            setNumGuildBoosts: c,
            setForceDisableSubmitButton: _,
            premiumSubscription: h,
            onClickPremiumSubscriptionLink: g,
            existingAvailableSlots: S = [],
            priceOptions: T,
        } = e,
        { setInvoicePreview: P } = (0, v.JL)(),
        R = (0, N.Z)(),
        D = a.interval,
        L = a.intervalCount,
        j = (0, u.e7)([B.Z], () => B.Z.getForSkuAndInterval((0, K.Wz)(J.Si.GUILD), D, L)),
        U = (0, u.e7)([G.default], () => G.default.getCurrentUser()),
        Z = (0, y.Z)({ forceFetch: !1 });
    l()(null != j, "Missing guildBoostingSubscriptionPlan");
    let F = [
            {
                planId: j.id,
                quantity: 1,
            },
        ],
        X =
            null == h
                ? void 0
                : h.items.find((e) => e.planId === J.Xh.PREMIUM_MONTH_TIER_2 || e.planId === J.Xh.PREMIUM_YEAR_TIER_2);
    null != X && F.push(X);
    let en =
            null == h
                ? void 0
                : h.items.find((e) => e.planId === J.Xh.PREMIUM_MONTH_GUILD || e.planId === J.Xh.PREMIUM_YEAR_GUILD),
        { enabled: er } = q.Z.useExperiment({ location: "32b64a_1" }),
        ei = !er || null == R || !J.Tp.has(R) || null == en,
        { analyticsLocations: ea } = (0, b.ZP)(),
        [ed, ef] = (0, I.ED)({
            subscriptionId: null == h ? void 0 : h.id,
            items: F,
            renewal: !0,
            paymentSourceId: null == h ? void 0 : h.paymentSourceId,
            currency: T.currency,
            preventFetch: ei,
            analyticsLocations: ea,
            analyticsLocation: E.Z.GUILD_BOOSTING_PLAN_SELECT,
        });
    i.useEffect(() => {
        P(ed);
    }, [P, ed]);
    let ep = !ei && null == ed && null == ef,
        e_ = (null == (n = (0, A.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === J.Si.TIER_2,
        em = K.ZP.hasBoostDiscount(U),
        eh = null == ed ? void 0 : ed.findInvoiceItemByPlanId(j.id),
        eg =
            null != eh
                ? {
                      amount: eh.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: T.currency,
                  }
                : K.ZP.getPrice(j.id, em, !1, T),
        eE = s * eg.amount,
        eb = (0, u.e7)([V.Z], () => V.Z.inReverseTrial() && K.ZP.hasBoostDiscount(U) && null != h),
        ey =
            K.ZP.hasBoostDiscount(U) &&
            null != h &&
            K.ZP.isPremiumAtLeast(K.ZP.getPremiumType(h.planId), J.PremiumTypes.TIER_1)
                ? ee.intl.format(ee.t.hf6YOY, { planName: K.ZP.getTierDisplayNameByPlanId(h.planId) })
                : ee.intl.format(e_ ? ee.t.ba1L74 : ee.t.fkffDT, {
                      onPremiumSubscriptionClick: g,
                      discountPercentage: (0, W.T3)(k.default.locale, J.Rr / 100),
                      freeSubscriptionCount: J.cb,
                  }),
        eO = S.filter((e) => (0, H.tl)(e)).length,
        ev = (0, K.Ap)(T.paymentSourceId),
        { ipCountryCode: eS } = (0, C.Z)(),
        eI = "HR" === eS && eg.currency === $.pK.EUR,
        eT = Z.fractionalState === J.a$.FP_SUB_PAUSED;
    return (
        _(ep),
        (0, r.jsxs)("div", {
            children: [
                eT && (0, r.jsx)(x.n, { fractionalPremiumInfo: Z }),
                eb && null != h
                    ? (0, r.jsx)(eu, { endDate: h.currentPeriodEnd })
                    : (0, r.jsx)("div", {
                          className: o()(et.planSelectText, et.bodyText),
                          children: ee.intl.string(ee.t.jNY1FO),
                      }),
                S.length > 0
                    ? (0, r.jsxs)("div", {
                          className: et.existingSlotNotice,
                          children: [
                              (0, r.jsx)(p.Ucv, {
                                  className: et.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      ee.intl.format(ee.t.F8xlhr, { slotCount: S.length }),
                                      eO > 0 && null != h
                                          ? (0, r.jsx)(f.u, {
                                                text: ee.intl.formatToPlainString(ee.t.SFpsCH, {
                                                    canceledCount: eO,
                                                    date: h.currentPeriodEnd,
                                                }),
                                                children: (0, r.jsx)(p.Mgn, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: et.existingSlotTooltipWarningIcon,
                                                    color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: et.planSelectRow,
                    children: [
                        (0, r.jsxs)("div", {
                            className: et.planSelectorWrapper,
                            children: [
                                (0, r.jsx)(p.FiK, {
                                    value: s,
                                    onChange: (e) => c(e),
                                    className: et.__invalid_planSelector,
                                    minValue: eo,
                                    maxValue: es,
                                }),
                                (0, r.jsx)("div", {
                                    className: et.planSelectorLabel,
                                    children: ev
                                        ? ec({
                                              intervalType: D,
                                              intervalCount: L,
                                          })
                                        : ee.intl.string(ee.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: o()(et.planSelectorPreviewPrice, { [et.loadingSpinner]: ep }),
                            children: ep
                                ? (0, r.jsx)(p.$jN, {})
                                : ev
                                  ? (0, z.T4)(eg.amount, eg.currency)
                                  : el({
                                        intervalType: D,
                                        intervalCount: L,
                                        amount: eg.amount,
                                        currency: eg.currency,
                                    }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", { className: et.planSelectDivider }),
                (0, r.jsxs)("div", {
                    className: et.planSelectRow,
                    children: [
                        (0, r.jsx)("div", {
                            className: et.planSelectorSubtotal,
                            children: ee.intl.string(ee.t.RtA7nR),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(et.__invalid_planSelectorSubtotalPrice, { [et.loadingSpinner]: ep }),
                            children: ep
                                ? (0, r.jsx)(p.$jN, {})
                                : (0, r.jsx)(w.Z, {
                                      price: eE,
                                      currency: eg.currency,
                                      intervalType: D,
                                      intervalCount: L,
                                      isPrepaidPaymentSource: ev,
                                  }),
                        }),
                    ],
                }),
                eI &&
                    (0, r.jsx)(m.Z, {
                        message: ee.intl.formatToPlainString(ee.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, z.T4)(7.5345 * eE, $.pK.HRK),
                        }),
                    }),
                (0, r.jsx)(m.Z, {
                    message: ee.intl.format(ee.t.Om31w8, {
                        documentationLink: Y.Z.getArticleURL(Q.BhN.LOCALIZED_PRICING),
                    }),
                }),
                eb
                    ? (0, r.jsx)(M.e, {})
                    : (0, r.jsx)(M.Z, {
                          text: ey,
                          color: O.JX.PREMIUM_TIER_2,
                      }),
            ],
        })
    );
}
function ef(e) {
    let {
            premiumSubscription: t,
            premiumSubscriptionPlan: n,
            proratedInvoicePreview: i,
            renewalInvoicePreview: a,
            priceOptions: o,
        } = e,
        s = n.interval,
        c = n.intervalCount,
        d = (0, u.e7)([B.Z], () => B.Z.getForSkuAndInterval((0, K.Wz)(J.Si.GUILD), s, c));
    l()(null != d, "Missing guildBoostingSubscriptionPlan");
    let f = (e) => (0, T.j)(i.invoiceItems).find((t) => J.Z1.has(t.subscriptionPlanId) && e(t)),
        p = f((e) => e.amount >= 0);
    l()(null != p, "Missing guild boosting invoice item");
    let _ = f((e) => e.amount < 0),
        m = null != _ ? p.quantity - _.quantity : p.quantity,
        h = i.invoiceItems.filter((e) => (0, K.uZ)(e.subscriptionPlanId)),
        g = h.reduce((e, t) => e + t.amount, 0),
        E = (0, I.pV)(p) * m,
        b = (0, z.T4)(E, i.currency),
        y = (0, z.og)(b, s, c),
        O = (0, z.T4)(i.total, i.currency) + (i.currency !== $.pK.USD ? "*" : ""),
        v = i.total - E - g,
        S = p.discounts.map((e) => {
            let t = e.amount / p.quantity;
            return ea(er({}, e), { amount: t * m });
        }),
        C = (0, K.Ap)(o.paymentSourceId),
        A = (0, u.e7)([V.Z], () => V.Z.inReverseTrial());
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C
                ? null
                : A && null != t
                  ? (0, r.jsx)(eu, {
                        endDate: t.currentPeriodEnd,
                        className: et.reverseTrialContextMarginBottom,
                    })
                  : (0, r.jsx)(j.hG, {
                        proratedInvoice: i,
                        renewalInvoice: a,
                    }),
            (0, r.jsxs)(P.aO, {
                children: [
                    (0, r.jsx)(P.Z9, { children: ee.intl.string(ee.t.CWIwms) }),
                    (0, r.jsx)(P.i$, {
                        label: ee.intl.formatToPlainString(ee.t.a3cAOg, {
                            numGuildSubscriptions: m,
                            planName: (0, K.Gf)(d.id, !1, C),
                        }),
                        value: C ? b : y,
                        discounts: S,
                        originalAmount: p.subscriptionPlanPrice * m,
                        currency: i.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount,
                    }),
                    0 !== g
                        ? (0, r.jsx)(P.B1, {
                              label: (0, r.jsx)(j.As, {
                                  label: ee.intl.formatToPlainString(ee.t.ZSVged, {
                                      planName: (0, K.MF)(h[0].subscriptionPlanId),
                                  }),
                                  tooltipText: ee.intl.string(ee.t.JmwQJM),
                              }),
                              value: (0, z.T4)(g, i.currency),
                          })
                        : null,
                    0 !== v
                        ? (0, r.jsx)(P.B1, {
                              label: (0, r.jsx)(j.As, {
                                  label: ee.intl.string(ee.t["+as5ZZ"]),
                                  tooltipText: ee.intl.string(ee.t.JmwQJM),
                              }),
                              value: (0, z.T4)(v, i.currency),
                          })
                        : null,
                    (0, r.jsx)(P.UN, {}),
                    (0, r.jsx)(P.az, {
                        label: ee.intl.format(i.taxInclusive ? (C ? ee.t.BqdxQt : ee.t.XH4raN) : ee.t.RUI48E, {}),
                        value: O,
                    }),
                    null != t
                        ? (0, r.jsx)(j.nd, {
                              premiumSubscription: t,
                              proratedInvoice: i,
                              renewalInvoice: a,
                              isUpdate: !0,
                              isPrepaidPaymentSource: C,
                              isTrial: A,
                          })
                        : (0, r.jsx)(j.nd, {
                              renewalInvoice: a,
                              priceOptions: o,
                              isPrepaidPaymentSource: C,
                          }),
                ],
            }),
        ],
    });
}
function ep(e) {
    var t;
    let n,
        a,
        {
            paymentSources: o,
            priceOptions: s,
            currentPremiumSubscription: l,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: y,
            onPaymentSourceChange: O,
            onPaymentSourceAdd: T,
            onPurchaseTermsChange: C,
            legalTermsNodeRef: A,
            hasLegalTermsFlash: N,
        } = e,
        { setInvoicePreview: P } = (0, v.JL)(),
        R = s.paymentSourceId,
        w = (0, S.$)(o, R),
        D = (0, u.e7)([F.Z], () => (null != d ? F.Z.getPaymentSource(d) : null)),
        x = (0, u.e7)([U.Z], () => U.Z.hidePersonalInformation);
    n = null != l ? (0, K.Zx)(l, y[0].quantity, y[0].planId) : y;
    let { analyticsLocations: j } = (0, b.ZP)(),
        [M] = (0, I.ED)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: R,
            currency: s.currency,
            analyticsLocations: j,
            analyticsLocation: E.Z.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [k] = (0, I.ED)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !0,
            paymentSourceId: R,
            currency: s.currency,
            analyticsLocations: j,
            analyticsLocation: E.Z.GUILD_BOOSTING_REVIEW_RENEWAL,
        }),
        G = k;
    null != G &&
        (a = {
            amount: G.subtotal,
            currency: G.currency,
            tax: G.tax,
            taxInclusive: !1,
        });
    let B = c.M.EEA_COUNTRIES.has(Z.Z.ipCountryCodeWithFallback);
    return (
        i.useEffect(() => {
            P(M);
        }, [P, M]),
        (0, r.jsxs)("div", {
            children: [
                null != M && null != k
                    ? (0, r.jsx)(ef, {
                          premiumSubscription: l,
                          premiumSubscriptionPlan: m,
                          proratedInvoicePreview: M,
                          renewalInvoicePreview: k,
                          priceOptions: s,
                      })
                    : null,
                (0, r.jsx)("div", {
                    className: et.paymentSourceWrapper,
                    children:
                        null != d
                            ? null != D
                                ? (0, r.jsx)(f.u, {
                                      asContainer: !0,
                                      text: ee.intl.string(ee.t.XiuuV9),
                                      children: (0, r.jsx)(h.ZP, {
                                          label: ee.intl.string(ee.t["mmDvV+"]),
                                          paymentSources: [D],
                                          selectedPaymentSourceId: D.id,
                                          hidePersonalInformation: x,
                                          disabled: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", { children: (0, r.jsx)(p.$jN, {}) })
                            : (0, r.jsx)(h.ZP, {
                                  label: ee.intl.string(ee.t["mmDvV+"]),
                                  paymentSources: Object.values(o),
                                  selectedPaymentSourceId: R,
                                  onChange: O,
                                  onPaymentSourceAdd: T,
                                  hidePersonalInformation: x,
                              }),
                }),
                (0, r.jsx)(L.Z, {
                    isActive: N,
                    ref: A,
                    children:
                        null != a &&
                        (0, r.jsx)(g.Z, {
                            onChange: C,
                            forceShow: !0,
                            finePrint: (0, r.jsx)(_.Z, {
                                subscriptionPlan: m,
                                paymentSourceType: w,
                                proratedAmount: null != M ? M.total : void 0,
                                basePrice: a,
                                productLine: Q.POd.BOOST,
                            }),
                            showPricingLink:
                                (null != (t = null == M ? void 0 : M.currency) ? t : $.pK.USD) !== $.pK.USD,
                            showWithdrawalWaiver: B,
                            subscriptionPlan: m,
                        }),
                }),
            ],
        })
    );
}
function e_(e) {
    var t;
    let n,
        {
            onClose: a,
            guild: o,
            guildBoostQuantity: s,
            isTransfer: l = !1,
            withAnimation: c = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: d = !1,
            fallbackGuildName: f,
            customCheckoutFlow: _,
        } = e,
        { theme: m } = (0, p.TCT)(),
        [h, g] = i.useState(R.fe.Scenes.ENTRY),
        [E, b] = i.useState(!1),
        y = null != (t = null == o ? void 0 : o.name) ? t : f;
    return (
        (n = l
            ? null == y
                ? ee.intl.format(ee.t.P52e1r, {})
                : ee.intl.format(ee.t["4UnIk9"], { guildName: y })
            : d
              ? ee.intl.format(ee.t.gFaKd1, { helpCenterLink: Y.Z.getArticleURL(Q.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              : null == y
                ? ee.intl.format(ee.t.SZ5ohR, { guildSubscriptionQuantity: s })
                : ee.intl.format(ee.t.GxK3Mv, {
                      guildName: y,
                      guildSubscriptionQuantity: s,
                  })),
        (0, r.jsxs)("div", {
            className: et.confirmationContainer,
            children: [
                c
                    ? (0, r.jsx)(R.fe, {
                          className: et.confirmationAnimation,
                          nextScene: h,
                          onScenePlay: (e) => {
                              if (!E)
                                  switch (e) {
                                      case R.fe.Scenes.ENTRY:
                                          return g(R.fe.Scenes.IDLE);
                                      case R.fe.Scenes.IDLE:
                                          return g(R.fe.Scenes.SUCCESS);
                                      case R.fe.Scenes.SUCCESS:
                                          return b(!0), g(R.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, r.jsx)(D.ZP, {
                    className: et.confirmationUpgradedBanner,
                    theme: m,
                    premiumType: J.PremiumTypes.TIER_2,
                    type: $.X7.has(null != u ? u : $.He.UNKNOWN)
                        ? D.ZP.Types.PREMIUM_PAYMENT_STARTED
                        : D.ZP.Types.GUILD_BOOST_APPLIED,
                }),
                (0, r.jsx)("div", {
                    className: et.confirmationText,
                    children: n,
                }),
                (0, r.jsx)(p.Button, {
                    variant: "primary",
                    text: _ === X.cL.APPLE_PAYMENT_LINK ? ee.intl.string(ee.t.qXV2XU) : ee.intl.string(ee.t["/iTxgz"]),
                    onClick: a,
                }),
            ],
        })
    );
}
