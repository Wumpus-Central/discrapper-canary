n.d(t, {
    CP: () => eu,
    Gq: () => ef,
    R7: () => e_,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(742280),
    u = n(442837),
    d = n(692547),
    f = n(28664),
    _ = n(481060),
    p = n(224550),
    h = n(490504),
    m = n(275850),
    g = n(672971),
    E = n(100527),
    b = n(906732),
    y = n(975298),
    O = n(436774),
    v = n(563132),
    I = n(435020),
    T = n(374649),
    S = n(591548),
    A = n(847903),
    C = n(639119),
    N = n(53900),
    R = n(811334),
    P = n(110818),
    w = n(553797),
    D = n(741245),
    x = n(346071),
    L = n(314182),
    j = n(42818),
    M = n(900683),
    k = n(706454),
    U = n(246946),
    G = n(594174),
    B = n(351402),
    Z = n(853872),
    F = n(509545),
    V = n(78839),
    H = n(267642),
    Y = n(63063),
    W = n(930153),
    K = n(74538),
    z = n(937615),
    q = n(588797),
    X = n(981631),
    Q = n(474936),
    J = n(231338),
    $ = n(388032),
    ee = n(540798);
function et(e, t, n) {
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
function en(e) {
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
                et(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : er(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ea = 1,
    eo = 30;
function es(e) {
    let { amount: t, currency: n, intervalType: r, intervalCount: i = 1 } = e,
        a = (0, z.T4)(t, n);
    return r === Q.rV.YEAR
        ? $.intl.formatToPlainString($.t["8M04YG"], { price: a })
        : r === Q.rV.MONTH && 1 === i
          ? $.intl.formatToPlainString($.t.VStWCQ, { price: a })
          : r === Q.rV.MONTH && i > 1
            ? $.intl.formatToPlainString($.t.xJvAFR, { price: a })
            : null;
}
function el(e) {
    let { intervalType: t, intervalCount: n = 1 } = e;
    return t === Q.rV.YEAR
        ? $.intl.string($.t.YDpAzc)
        : t === Q.rV.MONTH && 1 === n
          ? $.intl.string($.t["6ZR3Bw"])
          : null;
}
function ec(e) {
    let { endDate: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: ee.reverseTrialContextInfoDivider }),
            (0, r.jsx)(_.Text, {
                variant: "text-sm/normal",
                className: ee.reverseTrialContextText,
                children: $.intl.format($.t.IeaYqq, { endDate: t }),
            }),
            (0, r.jsx)("div", { className: ee.reverseTrialContextInfoDivider }),
        ],
    });
}
function eu(e) {
    var t, n;
    let {
            premiumSubscriptionPlan: a,
            numGuildBoosts: s,
            setNumGuildBoosts: c,
            setForceDisableSubmitButton: f,
            premiumSubscription: p,
            onClickPremiumSubscriptionLink: m,
            existingAvailableSlots: g = [],
            priceOptions: I,
        } = e,
        { setInvoicePreview: S } = (0, v.JL)(),
        R = (0, N.Z)(),
        P = a.interval,
        D = a.intervalCount,
        L = (0, u.e7)([F.Z], () => F.Z.getForSkuAndInterval((0, K.Wz)(Q.Si.GUILD), P, D)),
        j = (0, u.e7)([G.default], () => G.default.getCurrentUser()),
        U = (0, y.Z)({ forceFetch: !1 });
    l()(null != L, "Missing guildBoostingSubscriptionPlan");
    let B = [
            {
                planId: L.id,
                quantity: 1,
            },
        ],
        Z =
            null == p
                ? void 0
                : p.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_TIER_2 || e.planId === Q.Xh.PREMIUM_YEAR_TIER_2);
    null != Z && B.push(Z);
    let et =
            null == p
                ? void 0
                : p.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_GUILD || e.planId === Q.Xh.PREMIUM_YEAR_GUILD),
        { enabled: er } = q.Z.useExperiment({ location: "32b64a_1" }),
        eu = !er || null == R || !Q.Tp.has(R) || null == et,
        { analyticsLocations: ed } = (0, b.ZP)(),
        [ef, e_] = (0, T.ED)({
            subscriptionId: null == p ? void 0 : p.id,
            items: B,
            renewal: !0,
            paymentSourceId: null == p ? void 0 : p.paymentSourceId,
            currency: I.currency,
            preventFetch: eu,
            analyticsLocations: ed,
            analyticsLocation: E.Z.GUILD_BOOSTING_PLAN_SELECT,
        });
    i.useEffect(() => {
        S(ef);
    }, [S, ef]);
    let ep = !eu && null == ef && null == e_,
        eh = (null == (n = (0, C.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === Q.Si.TIER_2,
        em = K.ZP.hasBoostDiscount(j, U.fractionalState),
        eg = null == ef ? void 0 : ef.findInvoiceItemByPlanId(L.id),
        eE =
            null != eg
                ? {
                      amount: eg.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: I.currency,
                  }
                : K.ZP.getPrice(L.id, em, !1, I),
        eb = s * eE.amount,
        ey = (0, u.e7)([V.Z], () => V.Z.inReverseTrial() && K.ZP.hasBoostDiscount(j, U.fractionalState) && null != p),
        eO =
            K.ZP.hasBoostDiscount(j, U.fractionalState) && null != p && K.ZP.getPremiumType(p.planId) === Q.p9.TIER_2
                ? $.intl.format($.t.hf6YOT, { planName: K.ZP.getDisplayPremiumType(p.planId) })
                : $.intl.format(eh ? $.t["ba1L7+"] : $.t.fkffDQ, {
                      onPremiumSubscriptionClick: m,
                      discountPercentage: (0, W.T3)(k.default.locale, Q.Rr / 100),
                      freeSubscriptionCount: Q.cb,
                  }),
        ev = g.filter((e) => (0, H.tl)(e)).length,
        eI = (0, K.Ap)(I.paymentSourceId),
        { ipCountryCode: eT } = (0, A.Z)(),
        eS = "HR" === eT && eE.currency === J.pK.EUR,
        eA = U.fractionalState === Q.a$.FP_SUB_PAUSED;
    return (
        f(ep),
        (0, r.jsxs)("div", {
            children: [
                eA && (0, r.jsx)(x.n, { fractionalPremiumInfo: U }),
                ey && null != p
                    ? (0, r.jsx)(ec, { endDate: p.currentPeriodEnd })
                    : (0, r.jsx)("div", {
                          className: o()(ee.planSelectText, ee.bodyText),
                          children: $.intl.string($.t.jNY1FB),
                      }),
                g.length > 0
                    ? (0, r.jsxs)("div", {
                          className: ee.existingSlotNotice,
                          children: [
                              (0, r.jsx)(_.$Eu, {
                                  className: ee.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      $.intl.format($.t.F8xlho, { slotCount: g.length }),
                                      ev > 0 && null != p
                                          ? (0, r.jsx)(_.ua7, {
                                                text: $.intl.formatToPlainString($.t.SFpsCA, {
                                                    canceledCount: ev,
                                                    date: p.currentPeriodEnd,
                                                }),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        _.Mgn,
                                                        ei(
                                                            en(
                                                                {
                                                                    size: "custom",
                                                                    width: 20,
                                                                    height: 20,
                                                                },
                                                                e,
                                                            ),
                                                            {
                                                                className: ee.existingSlotTooltipWarningIcon,
                                                                color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                                            },
                                                        ),
                                                    ),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: ee.planSelectRow,
                    children: [
                        (0, r.jsxs)("div", {
                            className: ee.planSelectorWrapper,
                            children: [
                                (0, r.jsx)(_.FiK, {
                                    value: s,
                                    onChange: (e) => c(e),
                                    className: ee.__invalid_planSelector,
                                    minValue: ea,
                                    maxValue: eo,
                                }),
                                (0, r.jsx)("div", {
                                    className: ee.planSelectorLabel,
                                    children: eI
                                        ? el({
                                              intervalType: P,
                                              intervalCount: D,
                                          })
                                        : $.intl.string($.t.K9Bmzc),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: o()(ee.planSelectorPreviewPrice, { [ee.loadingSpinner]: ep }),
                            children: ep
                                ? (0, r.jsx)(_.$jN, {})
                                : eI
                                  ? (0, z.T4)(eE.amount, eE.currency)
                                  : es({
                                        intervalType: P,
                                        intervalCount: D,
                                        amount: eE.amount,
                                        currency: eE.currency,
                                    }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", { className: ee.planSelectDivider }),
                (0, r.jsxs)("div", {
                    className: ee.planSelectRow,
                    children: [
                        (0, r.jsx)("div", {
                            className: ee.planSelectorSubtotal,
                            children: $.intl.string($.t.RtA7nZ),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(ee.__invalid_planSelectorSubtotalPrice, { [ee.loadingSpinner]: ep }),
                            children: ep
                                ? (0, r.jsx)(_.$jN, {})
                                : (0, r.jsx)(w.Z, {
                                      price: eb,
                                      currency: eE.currency,
                                      intervalType: P,
                                      intervalCount: D,
                                      isPrepaidPaymentSource: eI,
                                  }),
                        }),
                    ],
                }),
                eS &&
                    (0, r.jsx)(h.Z, {
                        message: $.intl.formatToPlainString($.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, z.T4)(7.5345 * eb, J.pK.HRK),
                        }),
                    }),
                (0, r.jsx)(h.Z, {
                    message: $.intl.format($.t.Om31w8, {
                        documentationLink: Y.Z.getArticleURL(X.BhN.LOCALIZED_PRICING),
                    }),
                }),
                ey
                    ? (0, r.jsx)(M.e, {})
                    : (0, r.jsx)(M.Z, {
                          text: eO,
                          color: O.JX.PREMIUM_TIER_2,
                      }),
            ],
        })
    );
}
function ed(e) {
    let {
            premiumSubscription: t,
            premiumSubscriptionPlan: n,
            proratedInvoicePreview: i,
            renewalInvoicePreview: a,
            priceOptions: o,
        } = e,
        s = n.interval,
        c = n.intervalCount,
        d = (0, u.e7)([F.Z], () => F.Z.getForSkuAndInterval((0, K.Wz)(Q.Si.GUILD), s, c));
    l()(null != d, "Missing guildBoostingSubscriptionPlan");
    let f = (e) => (0, S.j)(i.invoiceItems).find((t) => Q.Z1.has(t.subscriptionPlanId) && e(t)),
        _ = f((e) => e.amount >= 0);
    l()(null != _, "Missing guild boosting invoice item");
    let p = f((e) => e.amount < 0),
        h = null != p ? _.quantity - p.quantity : _.quantity,
        m = i.invoiceItems.filter((e) => (0, K.uZ)(e.subscriptionPlanId)),
        g = m.reduce((e, t) => e + t.amount, 0),
        E = (0, T.pV)(_) * h,
        b = (0, z.T4)(E, i.currency),
        y = (0, z.og)(b, s, c),
        O = (0, z.T4)(i.total, i.currency) + (i.currency !== J.pK.USD ? "*" : ""),
        v = i.total - E - g,
        I = _.discounts.map((e) => {
            let t = e.amount / _.quantity;
            return ei(en({}, e), { amount: t * h });
        }),
        A = (0, K.Ap)(o.paymentSourceId),
        C = (0, u.e7)([V.Z], () => V.Z.inReverseTrial());
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A
                ? null
                : C && null != t
                  ? (0, r.jsx)(ec, {
                        endDate: t.currentPeriodEnd,
                        className: ee.reverseTrialContextMarginBottom,
                    })
                  : (0, r.jsx)(j.hG, {
                        proratedInvoice: i,
                        renewalInvoice: a,
                    }),
            (0, r.jsxs)(R.aO, {
                children: [
                    (0, r.jsx)(R.Z9, { children: $.intl.string($.t.CWIwmp) }),
                    (0, r.jsx)(R.i$, {
                        label: $.intl.formatToPlainString($.t.a3cAOj, {
                            numGuildSubscriptions: h,
                            planName: (0, K.Gf)(d.id, !1, A),
                        }),
                        value: A ? b : y,
                        discounts: I,
                        originalAmount: _.subscriptionPlanPrice * h,
                        currency: i.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount,
                    }),
                    0 !== g
                        ? (0, r.jsx)(R.B1, {
                              label: (0, r.jsx)(j.As, {
                                  label: $.intl.formatToPlainString($.t.ZSVgeX, {
                                      planName: (0, K.aq)(m[0].subscriptionPlanId),
                                  }),
                                  tooltipText: $.intl.string($.t.JmwQJC),
                              }),
                              value: (0, z.T4)(g, i.currency),
                          })
                        : null,
                    0 !== v
                        ? (0, r.jsx)(R.B1, {
                              label: (0, r.jsx)(j.As, {
                                  label: $.intl.string($.t["+as5ZW"]),
                                  tooltipText: $.intl.string($.t.JmwQJC),
                              }),
                              value: (0, z.T4)(v, i.currency),
                          })
                        : null,
                    (0, r.jsx)(R.UN, {}),
                    (0, r.jsx)(R.az, {
                        label: $.intl.format(i.taxInclusive ? (A ? $.t.BqdxQk : $.t.XH4raG) : $.t.RUI48P, {}),
                        value: O,
                    }),
                    null != t
                        ? (0, r.jsx)(j.nd, {
                              premiumSubscription: t,
                              proratedInvoice: i,
                              renewalInvoice: a,
                              isUpdate: !0,
                              isPrepaidPaymentSource: A,
                              isTrial: C,
                          })
                        : (0, r.jsx)(j.nd, {
                              renewalInvoice: a,
                              priceOptions: o,
                              isPrepaidPaymentSource: A,
                          }),
                ],
            }),
        ],
    });
}
function ef(e) {
    var t;
    let n,
        a,
        {
            paymentSources: o,
            priceOptions: s,
            currentPremiumSubscription: l,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: h,
            newAdditionalPlans: y,
            onPaymentSourceChange: O,
            onPaymentSourceAdd: S,
            onPurchaseTermsChange: A,
            legalTermsNodeRef: C,
            hasLegalTermsFlash: N,
        } = e,
        { setInvoicePreview: R } = (0, v.JL)(),
        P = s.paymentSourceId,
        w = (0, I.$)(o, P),
        D = (0, u.e7)([Z.Z], () => (null != d ? Z.Z.getPaymentSource(d) : null)),
        x = (0, u.e7)([U.Z], () => U.Z.hidePersonalInformation);
    n = null != l ? (0, K.Zx)(l, y[0].quantity, y[0].planId) : y;
    let { analyticsLocations: j } = (0, b.ZP)(),
        [M] = (0, T.ED)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: P,
            currency: s.currency,
            analyticsLocations: j,
            analyticsLocation: E.Z.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [k] = (0, T.ED)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !0,
            paymentSourceId: P,
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
    let F = c.M.EEA_COUNTRIES.has(B.Z.ipCountryCodeWithFallback);
    return (
        i.useEffect(() => {
            R(M);
        }, [R, M]),
        (0, r.jsxs)("div", {
            children: [
                null != M && null != k
                    ? (0, r.jsx)(ed, {
                          premiumSubscription: l,
                          premiumSubscriptionPlan: h,
                          proratedInvoicePreview: M,
                          renewalInvoicePreview: k,
                          priceOptions: s,
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: ee.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(_.vwX, {
                            tag: _.RB0.H5,
                            children: $.intl.string($.t.mmDvV1),
                        }),
                        null != d
                            ? null != D
                                ? (0, r.jsx)(f.u, {
                                      asContainer: !0,
                                      text: $.intl.string($.t.XiuuV1),
                                      children: (0, r.jsx)(m.ZP, {
                                          paymentSources: [D],
                                          selectedPaymentSourceId: D.id,
                                          hidePersonalInformation: x,
                                          disabled: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", { children: (0, r.jsx)(_.$jN, {}) })
                            : (0, r.jsx)(m.ZP, {
                                  paymentSources: Object.values(o),
                                  selectedPaymentSourceId: P,
                                  onChange: O,
                                  onPaymentSourceAdd: S,
                                  hidePersonalInformation: x,
                              }),
                    ],
                }),
                (0, r.jsx)(L.Z, {
                    isActive: N,
                    ref: C,
                    children:
                        null != a &&
                        (0, r.jsx)(g.Z, {
                            onChange: A,
                            forceShow: !0,
                            finePrint: (0, r.jsx)(p.Z, {
                                subscriptionPlan: h,
                                paymentSourceType: w,
                                proratedAmount: null != M ? M.total : void 0,
                                basePrice: a,
                                productLine: X.POd.BOOST,
                            }),
                            showPricingLink:
                                (null != (t = null == M ? void 0 : M.currency) ? t : J.pK.USD) !== J.pK.USD,
                            showWithdrawalWaiver: F,
                            subscriptionPlan: h,
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
            customCheckoutFlow: p,
        } = e,
        { theme: h } = (0, _.TCT)(),
        [m, g] = i.useState(P.fe.Scenes.ENTRY),
        [E, b] = i.useState(!1),
        y = null != (t = null == o ? void 0 : o.name) ? t : f;
    return (
        (n = l
            ? null == y
                ? $.intl.format($.t.P52e1t, {})
                : $.intl.format($.t["4UnIk5"], { guildName: y })
            : d
              ? $.intl.format($.t.gFaKd3, { helpCenterLink: Y.Z.getArticleURL(X.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              : null == y
                ? $.intl.format($.t.SZ5ohY, { guildSubscriptionQuantity: s })
                : $.intl.format($.t.GxK3Mj, {
                      guildName: y,
                      guildSubscriptionQuantity: s,
                  })),
        (0, r.jsxs)("div", {
            className: ee.confirmationContainer,
            children: [
                c
                    ? (0, r.jsx)(P.fe, {
                          className: ee.confirmationAnimation,
                          nextScene: m,
                          onScenePlay: (e) => {
                              if (!E)
                                  switch (e) {
                                      case P.fe.Scenes.ENTRY:
                                          return g(P.fe.Scenes.IDLE);
                                      case P.fe.Scenes.IDLE:
                                          return g(P.fe.Scenes.SUCCESS);
                                      case P.fe.Scenes.SUCCESS:
                                          return b(!0), g(P.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, r.jsx)(D.ZP, {
                    className: ee.confirmationUpgradedBanner,
                    theme: h,
                    premiumType: Q.p9.TIER_2,
                    type: J.X7.has(null != u ? u : J.He.UNKNOWN)
                        ? D.ZP.Types.PREMIUM_PAYMENT_STARTED
                        : D.ZP.Types.GUILD_BOOST_APPLIED,
                }),
                (0, r.jsx)("div", {
                    className: ee.confirmationText,
                    children: n,
                }),
                (0, r.jsx)(_.zxk, {
                    variant: "primary",
                    text: "apple_payment_link" === p ? $.intl.string($.t.qXV2XV) : $.intl.string($.t["/iTxg4"]),
                    onClick: a,
                }),
            ],
        })
    );
}
