n.d(t, { Z: () => Q }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(742280),
    u = n(442837),
    d = n(692547),
    f = n(481060),
    p = n(190947),
    _ = n(224550),
    m = n(275850),
    h = n(672971),
    g = n(975298),
    E = n(987209),
    b = n(563132),
    y = n(45572),
    O = n(919778),
    v = n(614223),
    S = n(405685),
    I = n(435020),
    T = n(246946),
    C = n(351402),
    A = n(509545),
    N = n(855775),
    P = n(55563),
    R = n(669079),
    w = n(74538),
    D = n(937615),
    x = n(479446),
    L = n(374649),
    j = n(811334),
    M = n(346071),
    k = n(314182),
    U = n(981632),
    G = n(396955),
    Z = n(314404),
    F = n(42818),
    B = n(459965),
    V = n(251660),
    H = n(474936),
    Y = n(282793),
    W = n(231338),
    K = n(353149),
    z = n(388032),
    q = n(400005);
function Q(e) {
    var t, n, a;
    let s,
        Q,
        {
            selectedPlanId: X,
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
            hideSubscriptionDetails: ep,
            referralTrialOfferId: e_,
            isTrial: em = !1,
            isDiscount: eh = !1,
            handleClose: eg,
        } = e,
        {
            isEmbeddedIAP: eE,
            activeSubscription: eb,
            selectedSkuId: ey,
            defaultPlanId: eO,
            isPremium: ev,
            startedPaymentFlowWithPaymentSourcesRef: eS,
            setInvoicePreview: eI,
            contextMetadata: eT,
            inReverseTrial: eC,
            setPurchasePreviewError: eA,
            hasPaymentSources: eN,
            enablePremiumBrandRefresh: eP,
            premiumBrandRefreshBackgroundClassName: eR,
            isPremiumGroupPurchase: ew,
            isEligibleForDiscount: eD,
        } = (0, b.JL)(),
        { isGift: ex, giftRecipient: eL, selectedGiftStyle: ej } = (0, E.wD)(),
        eM = (0, u.e7)([A.Z], () => A.Z.get(X));
    l()(null != eM, "Missing plan");
    let ek = [
            {
                planId: eM.id,
                quantity: 1,
            },
        ],
        eU = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
        eG = null != ey ? ey : "",
        eZ = (0, u.e7)([P.Z], () => P.Z.get(eG), [eG]),
        eF = null == eZ ? void 0 : eZ.eligiblePaymentGateways,
        [eB, eV] = (0, L.ED)({
            items: ek,
            renewal: !1,
            preventFetch: eC || ex || eU,
            applyEntitlements: !0,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            trialId: el,
            metadata: ed,
        }),
        [eH, eY] = (0, L.ED)({
            subscriptionId: null == eb ? void 0 : eb.id,
            items: ek,
            renewal: !0,
            preventFetch: ex || eU,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [eW, eK] = (0, L.ED)({
            items: [
                {
                    planId: H.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !eD,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [ez, eq] = (0, L.o5)({
            paymentSourceId: ee.paymentSourceId,
            skuId: ey,
            subscriptionPlanId: X,
            currency: ee.currency,
            preventFetch: !ex || eU,
            loadId: eT.loadId,
        }),
        eQ = ex && (0, R.pO)(eL),
        eX = null != (n = null != (t = null != eV ? eV : eY) ? t : eK) ? n : eq;
    i.useEffect(() => {
        eA(eX);
    }, [eX, eA]);
    let eJ = (0, u.e7)([T.Z], () => T.Z.enabled),
        e$ = ee.paymentSourceId,
        e0 = (0, I.$)($, e$),
        { hasEntitlements: e1, entitlements: e3 } = (0, B.H)(eM.id, ex),
        e2 = (0, w.Ap)(ee.paymentSourceId),
        e4 = (0, O.sE)(el, e$, X),
        e5 = (0, v.Kp)({
            isTrial: em,
            isGift: ex,
            selectedSkuId: ey,
            startedPaymentFlowWithPaymentSources: eS.current,
            inReverseTrial: eC,
        }),
        [e8, e6] = i.useState(null == eB ? void 0 : eB.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == e8 && e6(null == eB ? void 0 : eB.subscriptionPeriodEnd);
    }, [null == eB ? void 0 : eB.subscriptionPeriodEnd, e8]);
    let e7 = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        e9 = !e5 && e7.isFractionalPremiumActive && H.dJ.has(X),
        te = i.useMemo(
            () =>
                (0, w.V7)({
                    skuId: ey,
                    isPremium: ev,
                    multiMonthPlans: [],
                    currentSubscription: eb,
                    defaultPlanId: eO,
                }),
            [ey, eb, eO, ev],
        ),
        tt = (0, v.$g)(e5, eB, eM),
        tn = i.useMemo(() => (em && null != eB ? eB : eC && null != eH ? eH : void 0), [eC, em, eB, eH]);
    if (
        (i.useEffect(() => {
            ex ? eI(ez) : eI(eB);
        }, [ex, eI, ez, eB]),
        null != eX)
    );
    else if (ex && null != ez)
        Q = (0, r.jsx)(F.e9, {
            plan: eM,
            className: o()(q.invoice, eR),
            isPrepaidPaymentSource: e2,
            isCustomGift: eQ,
            invoicePreview: ez,
        });
    else if (null != tn)
        Q = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(j.UN, { negativeMarginTop: !eC }),
                (0, r.jsxs)(j.aO, {
                    className: o()(q.invoice, eR),
                    children: [
                        (0, r.jsxs)("div", {
                            className: q.trialPriceLine,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/bold",
                                    children: z.intl.string(z.t.txajQG),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: z.intl.format(z.t.hXcaLT, {
                                        price: (0, D.T4)(0, tn.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: q.afterTrialPriceLine,
                            children: (0, r.jsx)(F.yT, {
                                invoice: tn,
                                plan: eM,
                            }),
                        }),
                    ],
                }),
            ],
        });
    else {
        if (null == eB || null == eH || tt)
            return (0, r.jsx)("div", {
                className: q.spinnerWrapper,
                children: (0, r.jsx)(f.$jN, {}),
            });
        em && eB.subscriptionPeriodEnd !== eH.subscriptionPeriodEnd && (s = eB.subscriptionPeriodEnd),
            (Q = (0, r.jsxs)(r.Fragment, {
                children: [
                    e9 &&
                        (0, r.jsx)(M.n, {
                            fractionalPremiumInfo: e7,
                            enablePremiumBrandRefresh: eP,
                        }),
                    (0, r.jsxs)(j.aO, {
                        className: o()(q.invoice, eR),
                        children: [
                            (0, r.jsx)(j.Z9, { children: z.intl.string(z.t["2eh+Co"]) }),
                            (0, r.jsx)(F.Lu, {
                                invoice: eB,
                                newPlan: eM,
                                isPrepaidPaymentSource: e2,
                                referralTrialOfferId: e_,
                            }),
                            e2
                                ? null
                                : (0, r.jsx)(F.nd, {
                                      renewalInvoice: eH,
                                      isTrial: em,
                                      priceOptions: ee,
                                      overrideRenewalDate: s,
                                      trialFooterMessageOverride: ec,
                                      hideSubscriptionDetails: ep,
                                  }),
                        ],
                    }),
                ],
            }));
    }
    let tr = c.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
        ti = z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eM.name });
    ex && !eQ
        ? (ti = z.intl.string(z.t.J5a0eb))
        : ex && eQ
          ? (ti = "")
          : (0, w.PV)(eM.id) && (ti = w.ZP.getBillingReviewSubheader(null, eM));
    let ta = null != eF && eF.length > 0 && (e$ === N.c || null === e0) && eN ? G.w.SELECT_PAYMENT_METHOD : void 0;
    return e4
        ? null
        : (0, r.jsxs)("div", {
              className: q.stepBody,
              children: [
                  (0, r.jsx)(G.Y, { paymentRestrictionBannerType: ta }),
                  null != eu &&
                      (0, r.jsxs)("div", {
                          className: q.reviewWarningMessageContainer,
                          children: [
                              (0, r.jsx)(f.d3s, {
                                  size: "custom",
                                  color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(f.Text, {
                                  className: q.reviewWarningMessage,
                                  variant: "text-sm/normal",
                                  children: eu,
                              }),
                          ],
                      }),
                  ew &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: "text-md/medium",
                                  children: z.intl.formatToPlainString(K.default["h1i+H8"], {
                                      premiumGroupProductName: (0, Y.sO)(),
                                      cooldownMonths: Y.T9,
                                  }),
                              }),
                              (0, r.jsx)(j.UN, {}),
                          ],
                      }),
                  e5 &&
                      !ew &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(j.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(S.a, {
                                  planSkuId: null == eM ? void 0 : eM.skuId,
                                  referralTrialOfferId: e_,
                              }),
                              (0, r.jsx)(Z.O, {
                                  planOptions: te,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: X,
                                  planGroup: J,
                                  subscriptionPeriodEnd: e8,
                                  showTotal: !1,
                                  discountInvoiceItems: eD ? (null == eW ? void 0 : eW.invoiceItems) : void 0,
                                  handleClose: eg,
                              }),
                              (0, r.jsx)(j.UN, {}),
                          ],
                      }),
                  eC &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: q.trialHeader,
                          children: z.intl.format(z.t["7ZS2m1"], {
                              trialEnd: null == eb ? void 0 : eb.currentPeriodEnd,
                          }),
                      }),
                  !em &&
                      "" !== ti &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          className: q.header,
                          children: ti,
                      }),
                  eQ &&
                      null != ej &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(U.Z, {
                                  defaultAnimationState: x.SR.LOOP,
                                  giftStyle: ej,
                                  shouldAnimate: !0,
                                  className: q.giftMainAnimation,
                              }),
                              (0, r.jsx)(V.s, { giftRecipient: eL }),
                          ],
                      }),
                  Q,
                  (0, r.jsxs)("div", {
                      className: q.paymentSourceWrapper,
                      children: [
                          (0, r.jsx)(m.ZP, {
                              label: em ? z.intl.string(z.t["YH7B+D"]) : z.intl.string(z.t["mmDvV+"]),
                              paymentSources: Object.values($),
                              selectedPaymentSourceId: e$,
                              prependOption:
                                  e1 && !em
                                      ? {
                                            label: z.intl.string(z.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: er,
                              onPaymentSourceAdd: ei,
                              hidePersonalInformation: eJ,
                              isTrial: em,
                              paymentGatewayRestrictions: eF,
                              className: o()({ [q.premiumBrandRefreshInputBackground]: eP }),
                          }),
                          e1 && null == e$
                              ? (0, r.jsx)("div", {
                                    className: q.paymentSourceOptionalWarning,
                                    children: z.intl.format(z.t["2wPRSF"], { months: e3.length }),
                                })
                              : null,
                          eh
                              ? null
                              : (0, r.jsx)(p.b, {
                                    currencies: et,
                                    className: q.currencyWrapper,
                                    children: (0, r.jsx)(p.Z, {
                                        label: z.intl.string(z.t["/AAR02"]),
                                        selectedCurrency: ee.currency,
                                        currencies: et,
                                        onChange: en,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(k.Z, {
                      isActive: es,
                      ref: eo,
                      children: (0, r.jsx)(h.Z, {
                          onChange: ea,
                          forceShow: !0,
                          finePrint:
                              null != (a = !eC && ec)
                                  ? a
                                  : (0, r.jsx)(_.Z, {
                                        hide: em || eh,
                                        subscriptionPlan: eM,
                                        renewalInvoice: eH,
                                        isGift: ex,
                                        paymentSourceType: e0,
                                        isEmbeddedIAP: eE,
                                        basePrice: (0, w.aS)(eM.id, !1, ex, ee),
                                    }),
                          showPricingLink: eM.currency !== W.pK.USD,
                          showWithdrawalWaiver: tr,
                          disabled: eU,
                          isTrial: em && null == ec,
                          inReverseTrial: eC,
                          isDiscount: eh,
                          subscriptionPlan: eM,
                          isGift: ex,
                      }),
                  }),
              ],
          });
}
