n.d(t, { Z: () => q }), n(388685);
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
    _ = n(190947),
    p = n(224550),
    h = n(275850),
    m = n(672971),
    g = n(975298),
    E = n(987209),
    b = n(563132),
    y = n(45572),
    O = n(919778),
    v = n(614223),
    I = n(435020),
    S = n(246946),
    T = n(351402),
    A = n(509545),
    C = n(855775),
    N = n(55563),
    R = n(669079),
    P = n(74538),
    w = n(937615),
    D = n(479446),
    x = n(374649),
    L = n(622909),
    M = n(642530),
    j = n(811334),
    k = n(346071),
    U = n(314182),
    G = n(981632),
    B = n(396955),
    Z = n(314404),
    F = n(42818),
    V = n(459965),
    H = n(251660),
    Y = n(474936),
    W = n(231338),
    K = n(388032),
    z = n(867983);
function q(e) {
    var t, n, a, s;
    let q,
        X,
        {
            selectedPlanId: Q,
            planGroup: J,
            paymentSources: $,
            priceOptions: ee,
            currencies: et,
            onCurrencyChange: en,
            onPaymentSourceChange: er,
            handlePaymentSourceAdd: ei,
            setHasAcceptedTerms: ea,
            legalTermsNodeRef: eo,
            hasLegalTermsFlash: es,
            trialId: el,
            trialFooterMessageOverride: ec,
            reviewWarningMessage: eu,
            metadata: ed,
            purchaseState: ef,
            hideSubscriptionDetails: e_,
            referralTrialOfferId: ep,
            isTrial: eh = !1,
            isDiscount: em = !1,
            handleClose: eg,
        } = e,
        {
            isEmbeddedIAP: eE,
            activeSubscription: eb,
            selectedSkuId: ey,
            defaultPlanId: eO,
            isPremium: ev,
            startedPaymentFlowWithPaymentSourcesRef: eI,
            setInvoicePreview: eS,
            contextMetadata: eT,
            inReverseTrial: eA,
            setPurchaseError: eC,
            hasPaymentSources: eN,
            enablePremiumBrandRefresh: eR,
            premiumBrandRefreshBackgroundClassName: eP,
        } = (0, b.JL)(),
        { isGift: ew, giftRecipient: eD, selectedGiftStyle: ex } = (0, E.wD)(),
        eL = (0, L.N)(),
        eM = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids.some((e) => Y.GP[e].skuId === ey),
        ej = !ew && null != eL && null != ey && eM,
        ek = (0, u.e7)([A.Z], () => A.Z.get(Q));
    l()(null != ek, "Missing plan");
    let eU = [
            {
                planId: ek.id,
                quantity: 1,
            },
        ],
        eG = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
        eB = null != ey ? ey : "",
        eZ = (0, u.e7)([N.Z], () => N.Z.get(eB), [eB]),
        eF = null == eZ ? void 0 : eZ.eligiblePaymentGateways,
        [eV, eH] = (0, x.ED)({
            items: eU,
            renewal: !1,
            preventFetch: eA || ew || eG,
            applyEntitlements: !0,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            trialId: el,
            metadata: ed,
        }),
        [eY, eW] = (0, x.ED)({
            subscriptionId: null == eb ? void 0 : eb.id,
            items: eU,
            renewal: !0,
            preventFetch: ew || eG,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [eK, ez] = (0, x.ED)({
            items: [
                {
                    planId: Y.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !ej,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [eq, eX] = (0, x.o5)({
            paymentSourceId: ee.paymentSourceId,
            skuId: ey,
            subscriptionPlanId: Q,
            currency: ee.currency,
            preventFetch: !ew || eG,
            loadId: eT.loadId,
        }),
        eQ = ew && (0, R.pO)(eD),
        eJ = null != (a = null != (n = null != eH ? eH : eW) ? n : ez) ? a : eX;
    i.useEffect(() => {
        eC(eJ);
    }, [eJ, eC]);
    let e$ = (0, u.e7)([S.Z], () => S.Z.enabled),
        e0 = ee.paymentSourceId,
        e1 = (0, I.$)($, e0),
        { hasEntitlements: e3, entitlements: e2 } = (0, V.H)(ek.id, ew),
        e4 = (0, P.Ap)(ee.paymentSourceId),
        e8 = (0, O.sE)(el, e0, Q),
        e5 = (0, v.Kp)({
            isTrial: eh,
            isGift: ew,
            selectedSkuId: ey,
            startedPaymentFlowWithPaymentSources: eI.current,
            inReverseTrial: eA,
        }),
        [e6, e7] = i.useState(null == eV ? void 0 : eV.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == e6 && e7(null == eV ? void 0 : eV.subscriptionPeriodEnd);
    }, [null == eV ? void 0 : eV.subscriptionPeriodEnd, e6]);
    let e9 = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        te = !e5 && e9.isFractionalPremiumActive && Y.dJ.has(Q),
        tt = i.useMemo(
            () =>
                (0, P.V7)({
                    skuId: ey,
                    isPremium: ev,
                    multiMonthPlans: [],
                    currentSubscription: eb,
                    defaultPlanId: eO,
                }),
            [ey, eb, eO, ev],
        ),
        tn = (0, v.$g)(e5, eV, ek),
        tr = i.useMemo(() => (eh && null != eV ? eV : eA && null != eY ? eY : void 0), [eA, eh, eV, eY]);
    if (
        (i.useEffect(() => {
            ew ? eS(eq) : eS(eV);
        }, [ew, eS, eq, eV]),
        null != eJ)
    );
    else if (ew && null != eq)
        X = (0, r.jsx)(F.e9, {
            plan: ek,
            className: o()(z.invoice, eP),
            isPrepaidPaymentSource: e4,
            isCustomGift: eQ,
            invoicePreview: eq,
        });
    else if (null != tr)
        X = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(j.UN, { negativeMarginTop: !eA }),
                (0, r.jsxs)(j.aO, {
                    className: o()(z.invoice, eP),
                    children: [
                        (0, r.jsxs)("div", {
                            className: z.trialPriceLine,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/bold",
                                    children: K.intl.string(K.t.txajQG),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: K.intl.format(K.t.hXcaLT, {
                                        price: (0, w.T4)(0, tr.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: z.afterTrialPriceLine,
                            children: (0, r.jsx)(F.yT, {
                                invoice: tr,
                                plan: ek,
                            }),
                        }),
                    ],
                }),
            ],
        });
    else {
        if (null == eV || null == eY || tn)
            return (0, r.jsx)("div", {
                className: z.spinnerWrapper,
                children: (0, r.jsx)(f.$jN, {}),
            });
        eh && eV.subscriptionPeriodEnd !== eY.subscriptionPeriodEnd && (q = eV.subscriptionPeriodEnd),
            (X = (0, r.jsxs)(r.Fragment, {
                children: [
                    te &&
                        (0, r.jsx)(k.n, {
                            fractionalPremiumInfo: e9,
                            enablePremiumBrandRefresh: eR,
                        }),
                    (0, r.jsxs)(j.aO, {
                        className: o()(z.invoice, eP),
                        children: [
                            (0, r.jsx)(j.Z9, { children: K.intl.string(K.t["2eh+Co"]) }),
                            (0, r.jsx)(F.Lu, {
                                invoice: eV,
                                newPlan: ek,
                                isPrepaidPaymentSource: e4,
                                referralTrialOfferId: ep,
                            }),
                            e4
                                ? null
                                : (0, r.jsx)(F.nd, {
                                      renewalInvoice: eY,
                                      isTrial: eh,
                                      priceOptions: ee,
                                      overrideRenewalDate: q,
                                      trialFooterMessageOverride: ec,
                                      hideSubscriptionDetails: e_,
                                  }),
                        ],
                    }),
                ],
            }));
    }
    let ti = c.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
        ta = K.intl.formatToPlainString(K.t["sBpy9/"], { planName: ek.name });
    ew && !eQ
        ? (ta = K.intl.string(K.t.J5a0eb))
        : ew && eQ
          ? (ta = "")
          : (0, P.PV)(ek.id) && (ta = P.ZP.getBillingReviewSubheader(null, ek));
    let to = null != eF && eF.length > 0 && (e0 === C.c || null === e1) && eN ? B.w.SELECT_PAYMENT_METHOD : void 0;
    return e8
        ? null
        : (0, r.jsxs)("div", {
              className: z.stepBody,
              children: [
                  (0, r.jsx)(B.Y, { paymentRestrictionBannerType: to }),
                  null != eu &&
                      (0, r.jsxs)("div", {
                          className: z.reviewWarningMessageContainer,
                          children: [
                              (0, r.jsx)(f.d3s, {
                                  size: "custom",
                                  color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(f.Text, {
                                  className: z.reviewWarningMessage,
                                  variant: "text-sm/normal",
                                  children: eu,
                              }),
                          ],
                      }),
                  e5 &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(j.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(M.Z, {}),
                              (0, r.jsx)(Z.O, {
                                  planOptions: tt,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: Q,
                                  planGroup: J,
                                  subscriptionPeriodEnd: e6,
                                  showTotal: !1,
                                  discountInvoiceItems: ej ? (null == eK ? void 0 : eK.invoiceItems) : void 0,
                                  handleClose: eg,
                              }),
                              (0, r.jsx)(j.UN, {}),
                          ],
                      }),
                  eA &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: z.trialHeader,
                          children: K.intl.format(K.t["7ZS2m1"], {
                              trialEnd: null == eb ? void 0 : eb.currentPeriodEnd,
                          }),
                      }),
                  !eh &&
                      "" !== ta &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          children: ta,
                      }),
                  eQ &&
                      null != ex &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(G.Z, {
                                  defaultAnimationState: D.SR.LOOP,
                                  giftStyle: ex,
                                  shouldAnimate: !0,
                                  className: z.giftMainAnimation,
                              }),
                              (0, r.jsx)(H.s, { giftRecipient: eD }),
                          ],
                      }),
                  X,
                  (0, r.jsxs)("div", {
                      className: z.paymentSourceWrapper,
                      children: [
                          (0, r.jsx)(h.ZP, {
                              label: eh ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
                              paymentSources: Object.values($),
                              selectedPaymentSourceId: e0,
                              prependOption:
                                  e3 && !eh
                                      ? {
                                            label: K.intl.string(K.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: er,
                              onPaymentSourceAdd: ei,
                              hidePersonalInformation: e$,
                              isTrial: eh,
                              paymentGatewayRestrictions: eF,
                              className: o()({ [z.premiumBrandRefreshInputBackground]: eR }),
                          }),
                          e3 && null == e0
                              ? (0, r.jsx)("div", {
                                    className: z.paymentSourceOptionalWarning,
                                    children: K.intl.format(K.t["2wPRSF"], { months: e2.length }),
                                })
                              : null,
                          em
                              ? null
                              : (0, r.jsx)(_.b, {
                                    currencies: et,
                                    className: z.currencyWrapper,
                                    children: (0, r.jsx)(_.Z, {
                                        label: K.intl.string(K.t["/AAR02"]),
                                        selectedCurrency: ee.currency,
                                        currencies: et,
                                        onChange: en,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(U.Z, {
                      isActive: es,
                      ref: eo,
                      children: (0, r.jsx)(m.Z, {
                          onChange: ea,
                          forceShow: !0,
                          finePrint:
                              null != (s = !eA && ec)
                                  ? s
                                  : (0, r.jsx)(p.Z, {
                                        hide: eh || em,
                                        subscriptionPlan: ek,
                                        renewalInvoice: eY,
                                        isGift: ew,
                                        paymentSourceType: e1,
                                        isEmbeddedIAP: eE,
                                        basePrice: (0, P.aS)(ek.id, !1, ew, ee),
                                    }),
                          showPricingLink: ek.currency !== W.pK.USD,
                          showWithdrawalWaiver: ti,
                          disabled: eG,
                          isTrial: eh && null == ec,
                          inReverseTrial: eA,
                          isDiscount: em,
                          subscriptionPlan: ek,
                          isGift: ew,
                      }),
                  }),
              ],
          });
}
