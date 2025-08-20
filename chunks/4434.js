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
    f = n(481060),
    _ = n(224550),
    p = n(490504),
    h = n(275850),
    m = n(672971),
    g = n(100527),
    E = n(906732),
    b = n(975298),
    y = n(436774),
    O = n(563132),
    v = n(435020),
    I = n(374649),
    T = n(591548),
    S = n(847903),
    A = n(639119),
    C = n(53900),
    N = n(811334),
    R = n(110818),
    P = n(553797),
    w = n(741245),
    D = n(346071),
    x = n(314182),
    L = n(42818),
    j = n(900683),
    M = n(706454),
    k = n(430824),
    U = n(246946),
    G = n(594174),
    B = n(351402),
    Z = n(853872),
    V = n(509545),
    F = n(78839),
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
            (0, r.jsx)(f.Text, {
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
            guildId: a,
            premiumSubscriptionPlan: s,
            numGuildBoosts: c,
            setNumGuildBoosts: _,
            setForceDisableSubmitButton: h,
            premiumSubscription: m,
            onClickPremiumSubscriptionLink: v,
            existingAvailableSlots: T = [],
            priceOptions: N,
        } = e,
        { setInvoicePreview: R } = (0, O.JL)(),
        w = (0, C.Z)(),
        x = s.interval,
        L = s.intervalCount,
        U = (0, u.e7)([V.Z], () => V.Z.getForSkuAndInterval((0, K.Wz)(Q.Si.GUILD), x, L)),
        B = (0, u.e7)([G.default], () => G.default.getCurrentUser()),
        Z = (0, u.e7)([k.Z], () => k.Z.getGuild(a), [a]),
        et = (0, b.Z)({ forceFetch: !1 });
    l()(null != U, "Missing guildBoostingSubscriptionPlan"), l()(null != Z, "Unknown guild: ".concat(a));
    let er = [
            {
                planId: U.id,
                quantity: 1,
            },
        ],
        eu =
            null == m
                ? void 0
                : m.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_TIER_2 || e.planId === Q.Xh.PREMIUM_YEAR_TIER_2);
    null != eu && er.push(eu);
    let ed =
            null == m
                ? void 0
                : m.items.find((e) => e.planId === Q.Xh.PREMIUM_MONTH_GUILD || e.planId === Q.Xh.PREMIUM_YEAR_GUILD),
        { enabled: ef } = q.Z.useExperiment({ location: "32b64a_1" }),
        e_ = !ef || null == w || !Q.Tp.has(w) || null == ed,
        { analyticsLocations: ep } = (0, E.ZP)(),
        [eh, em] = (0, I.ED)({
            subscriptionId: null == m ? void 0 : m.id,
            items: er,
            renewal: !0,
            paymentSourceId: null == m ? void 0 : m.paymentSourceId,
            currency: N.currency,
            preventFetch: e_,
            analyticsLocations: ep,
            analyticsLocation: g.Z.GUILD_BOOSTING_PLAN_SELECT,
        });
    i.useEffect(() => {
        R(eh);
    }, [R, eh]);
    let eg = !e_ && null == eh && null == em,
        eE = (null == (n = (0, A.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === Q.Si.TIER_2,
        eb = K.ZP.hasBoostDiscount(B, et.fractionalState),
        ey = null == eh ? void 0 : eh.findInvoiceItemByPlanId(U.id),
        eO =
            null != ey
                ? {
                      amount: ey.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: N.currency,
                  }
                : K.ZP.getPrice(U.id, eb, !1, N),
        ev = c * eO.amount,
        eI = (0, u.e7)([F.Z], () => F.Z.inReverseTrial() && K.ZP.hasBoostDiscount(B, et.fractionalState) && null != m),
        eT =
            K.ZP.hasBoostDiscount(B, et.fractionalState) && null != m && K.ZP.getPremiumType(m.planId) === Q.p9.TIER_2
                ? $.intl.format($.t.hf6YOT, { planName: K.ZP.getDisplayPremiumType(m.planId) })
                : $.intl.format(eE ? $.t["ba1L7+"] : $.t.fkffDQ, {
                      onPremiumSubscriptionClick: v,
                      discountPercentage: (0, W.T3)(M.default.locale, Q.Rr / 100),
                      freeSubscriptionCount: Q.cb,
                  }),
        eS = T.filter((e) => (0, H.tl)(e)).length,
        eA = (0, K.Ap)(N.paymentSourceId),
        { ipCountryCode: eC } = (0, S.Z)(),
        eN = "HR" === eC && eO.currency === J.pK.EUR,
        eR = et.fractionalState === Q.a$.FP_SUB_PAUSED;
    return (
        h(eg),
        (0, r.jsxs)("div", {
            children: [
                eR && (0, r.jsx)(D.n, { fractionalPremiumInfo: et }),
                eI && null != m
                    ? (0, r.jsx)(ec, { endDate: m.currentPeriodEnd })
                    : (0, r.jsx)("div", {
                          className: o()(ee.planSelectText, ee.bodyText),
                          children: $.intl.string($.t.jNY1FB),
                      }),
                T.length > 0
                    ? (0, r.jsxs)("div", {
                          className: ee.existingSlotNotice,
                          children: [
                              (0, r.jsx)(f.$Eu, {
                                  className: ee.existingSlotIcon,
                                  color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      $.intl.format($.t.F8xlho, { slotCount: T.length }),
                                      eS > 0 && null != m
                                          ? (0, r.jsx)(f.ua7, {
                                                text: $.intl.formatToPlainString($.t.SFpsCA, {
                                                    canceledCount: eS,
                                                    date: m.currentPeriodEnd,
                                                }),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        f.Mgn,
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
                                (0, r.jsx)(f.FiK, {
                                    value: c,
                                    onChange: (e) => _(e),
                                    className: ee.__invalid_planSelector,
                                    minValue: ea,
                                    maxValue: eo,
                                }),
                                (0, r.jsx)("div", {
                                    className: ee.planSelectorLabel,
                                    children: eA
                                        ? el({
                                              intervalType: x,
                                              intervalCount: L,
                                          })
                                        : $.intl.string($.t.K9Bmzc),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: o()(ee.planSelectorPreviewPrice, { [ee.loadingSpinner]: eg }),
                            children: eg
                                ? (0, r.jsx)(f.$jN, {})
                                : eA
                                  ? (0, z.T4)(eO.amount, eO.currency)
                                  : es({
                                        intervalType: x,
                                        intervalCount: L,
                                        amount: eO.amount,
                                        currency: eO.currency,
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
                            className: o()(ee.__invalid_planSelectorSubtotalPrice, { [ee.loadingSpinner]: eg }),
                            children: eg
                                ? (0, r.jsx)(f.$jN, {})
                                : (0, r.jsx)(P.Z, {
                                      price: ev,
                                      currency: eO.currency,
                                      intervalType: x,
                                      intervalCount: L,
                                      isPrepaidPaymentSource: eA,
                                  }),
                        }),
                    ],
                }),
                eN &&
                    (0, r.jsx)(p.Z, {
                        message: $.intl.formatToPlainString($.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, z.T4)(7.5345 * ev, J.pK.HRK),
                        }),
                    }),
                (0, r.jsx)(p.Z, {
                    message: $.intl.format($.t.Om31w8, {
                        documentationLink: Y.Z.getArticleURL(X.BhN.LOCALIZED_PRICING),
                    }),
                }),
                eI
                    ? (0, r.jsx)(j.e, {})
                    : (0, r.jsx)(j.Z, {
                          text: eT,
                          color: y.JX.PREMIUM_TIER_2,
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
        d = (0, u.e7)([V.Z], () => V.Z.getForSkuAndInterval((0, K.Wz)(Q.Si.GUILD), s, c));
    l()(null != d, "Missing guildBoostingSubscriptionPlan");
    let f = (e) => (0, T.j)(i.invoiceItems).find((t) => Q.Z1.has(t.subscriptionPlanId) && e(t)),
        _ = f((e) => e.amount >= 0);
    l()(null != _, "Missing guild boosting invoice item");
    let p = f((e) => e.amount < 0),
        h = null != p ? _.quantity - p.quantity : _.quantity,
        m = i.invoiceItems.filter((e) => (0, K.uZ)(e.subscriptionPlanId)),
        g = m.reduce((e, t) => e + t.amount, 0),
        E = (0, I.pV)(_) * h,
        b = (0, z.T4)(E, i.currency),
        y = (0, z.og)(b, s, c),
        O = (0, z.T4)(i.total, i.currency) + (i.currency !== J.pK.USD ? "*" : ""),
        v = i.total - E - g,
        S = _.discounts.map((e) => {
            let t = e.amount / _.quantity;
            return ei(en({}, e), { amount: t * h });
        }),
        A = (0, K.Ap)(o.paymentSourceId),
        C = (0, u.e7)([F.Z], () => F.Z.inReverseTrial());
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A
                ? null
                : C && null != t
                  ? (0, r.jsx)(ec, {
                        endDate: t.currentPeriodEnd,
                        className: ee.reverseTrialContextMarginBottom,
                    })
                  : (0, r.jsx)(L.hG, {
                        proratedInvoice: i,
                        renewalInvoice: a,
                    }),
            (0, r.jsxs)(N.aO, {
                children: [
                    (0, r.jsx)(N.Z9, { children: $.intl.string($.t.CWIwmp) }),
                    (0, r.jsx)(N.i$, {
                        label: $.intl.formatToPlainString($.t.a3cAOj, {
                            numGuildSubscriptions: h,
                            planName: (0, K.Gf)(d.id, !1, A),
                        }),
                        value: A ? b : y,
                        discounts: S,
                        originalAmount: _.subscriptionPlanPrice * h,
                        currency: i.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount,
                    }),
                    0 !== g
                        ? (0, r.jsx)(N.B1, {
                              label: (0, r.jsx)(L.As, {
                                  label: $.intl.formatToPlainString($.t.ZSVgeX, {
                                      planName: (0, K.aq)(m[0].subscriptionPlanId),
                                  }),
                                  tooltipText: $.intl.string($.t.JmwQJC),
                              }),
                              value: (0, z.T4)(g, i.currency),
                          })
                        : null,
                    0 !== v
                        ? (0, r.jsx)(N.B1, {
                              label: (0, r.jsx)(L.As, {
                                  label: $.intl.string($.t["+as5ZW"]),
                                  tooltipText: $.intl.string($.t.JmwQJC),
                              }),
                              value: (0, z.T4)(v, i.currency),
                          })
                        : null,
                    (0, r.jsx)(N.UN, {}),
                    (0, r.jsx)(N.az, {
                        label: $.intl.format(i.taxInclusive ? (A ? $.t.BqdxQk : $.t.XH4raG) : $.t.RUI48P, {}),
                        value: O,
                    }),
                    null != t
                        ? (0, r.jsx)(L.nd, {
                              premiumSubscription: t,
                              proratedInvoice: i,
                              renewalInvoice: a,
                              isUpdate: !0,
                              isPrepaidPaymentSource: A,
                              isTrial: C,
                          })
                        : (0, r.jsx)(L.nd, {
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
            premiumSubscriptionPlan: p,
            newAdditionalPlans: b,
            onPaymentSourceChange: y,
            onPaymentSourceAdd: T,
            onPurchaseTermsChange: S,
            legalTermsNodeRef: A,
            hasLegalTermsFlash: C,
        } = e,
        { setInvoicePreview: N } = (0, O.JL)(),
        R = s.paymentSourceId,
        P = (0, v.$)(o, R),
        w = (0, u.e7)([Z.Z], () => (null != d ? Z.Z.getPaymentSource(d) : null)),
        D = (0, u.e7)([U.Z], () => U.Z.hidePersonalInformation);
    n = null != l ? (0, K.Zx)(l, b[0].quantity, b[0].planId) : b;
    let { analyticsLocations: L } = (0, E.ZP)(),
        [j] = (0, I.ED)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: R,
            currency: s.currency,
            analyticsLocations: L,
            analyticsLocation: g.Z.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [M] = (0, I.ED)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !0,
            paymentSourceId: R,
            currency: s.currency,
            analyticsLocations: L,
            analyticsLocation: g.Z.GUILD_BOOSTING_REVIEW_RENEWAL,
        }),
        k = M;
    null != k &&
        (a = {
            amount: k.subtotal,
            currency: k.currency,
            tax: k.tax,
            taxInclusive: !1,
        });
    let G = c.M.EEA_COUNTRIES.has(B.Z.ipCountryCodeWithFallback);
    return (
        i.useEffect(() => {
            N(j);
        }, [N, j]),
        (0, r.jsxs)("div", {
            children: [
                null != j && null != M
                    ? (0, r.jsx)(ed, {
                          premiumSubscription: l,
                          premiumSubscriptionPlan: p,
                          proratedInvoicePreview: j,
                          renewalInvoicePreview: M,
                          priceOptions: s,
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: ee.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            tag: f.RB0.H5,
                            children: $.intl.string($.t.mmDvV1),
                        }),
                        null != d
                            ? null != w
                                ? (0, r.jsx)(f.DY3, {
                                      text: $.intl.string($.t.XiuuV1),
                                      children: (0, r.jsx)(h.ZP, {
                                          paymentSources: [w],
                                          selectedPaymentSourceId: w.id,
                                          hidePersonalInformation: D,
                                          disabled: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", { children: (0, r.jsx)(f.$jN, {}) })
                            : (0, r.jsx)(h.ZP, {
                                  paymentSources: Object.values(o),
                                  selectedPaymentSourceId: R,
                                  onChange: y,
                                  onPaymentSourceAdd: T,
                                  hidePersonalInformation: D,
                              }),
                    ],
                }),
                (0, r.jsx)(x.Z, {
                    isActive: C,
                    ref: A,
                    children:
                        null != a &&
                        (0, r.jsx)(m.Z, {
                            onChange: S,
                            forceShow: !0,
                            finePrint: (0, r.jsx)(_.Z, {
                                subscriptionPlan: p,
                                paymentSourceType: P,
                                proratedAmount: null != j ? j.total : void 0,
                                basePrice: a,
                                productLine: X.POd.BOOST,
                            }),
                            showPricingLink:
                                (null != (t = null == j ? void 0 : j.currency) ? t : J.pK.USD) !== J.pK.USD,
                            showWithdrawalWaiver: G,
                            subscriptionPlan: p,
                        }),
                }),
            ],
        })
    );
}
function e_(e) {
    let t,
        {
            onClose: n,
            guild: a,
            guildBoostQuantity: o,
            isTransfer: s = !1,
            withAnimation: l = !0,
            paymentSourceType: c,
            didPurchaseOnFractionalPremium: u = !1,
        } = e,
        { theme: d } = (0, f.TCT)(),
        [_, p] = i.useState(R.fe.Scenes.ENTRY),
        [h, m] = i.useState(!1);
    return (
        (t = s
            ? null == a
                ? $.intl.format($.t.P52e1t, {})
                : $.intl.format($.t["4UnIk5"], { guildName: a.name })
            : u
              ? $.intl.format($.t.gFaKd3, { helpCenterLink: Y.Z.getArticleURL(X.BhN.FRACTIONAL_PREMIUM_ABOUT) })
              : null == a
                ? $.intl.format($.t.SZ5ohY, { guildSubscriptionQuantity: o })
                : $.intl.format($.t.GxK3Mj, {
                      guildName: a.name,
                      guildSubscriptionQuantity: o,
                  })),
        (0, r.jsxs)("div", {
            className: ee.confirmationContainer,
            children: [
                l
                    ? (0, r.jsx)(R.fe, {
                          className: ee.confirmationAnimation,
                          nextScene: _,
                          onScenePlay: (e) => {
                              if (!h)
                                  switch (e) {
                                      case R.fe.Scenes.ENTRY:
                                          return p(R.fe.Scenes.IDLE);
                                      case R.fe.Scenes.IDLE:
                                          return p(R.fe.Scenes.SUCCESS);
                                      case R.fe.Scenes.SUCCESS:
                                          return m(!0), p(R.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, r.jsx)(w.ZP, {
                    className: ee.confirmationUpgradedBanner,
                    theme: d,
                    premiumType: Q.p9.TIER_2,
                    type: J.X7.has(null != c ? c : J.He.UNKNOWN)
                        ? w.ZP.Types.PREMIUM_PAYMENT_STARTED
                        : w.ZP.Types.GUILD_BOOST_APPLIED,
                }),
                (0, r.jsx)("div", {
                    className: ee.confirmationText,
                    children: t,
                }),
                (0, r.jsx)(f.zxk, {
                    variant: "primary",
                    text: $.intl.string($.t["/iTxg4"]),
                    onClick: n,
                }),
            ],
        })
    );
}
