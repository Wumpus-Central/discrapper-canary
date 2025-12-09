n.d(t, { Z: () => q }), n(388685);
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
    A = n(351402),
    C = n(509545),
    N = n(855775),
    P = n(55563),
    R = n(669079),
    D = n(74538),
    w = n(937615),
    x = n(479446),
    L = n(374649),
    j = n(622909),
    M = n(811334),
    k = n(346071),
    U = n(314182),
    G = n(981632),
    Z = n(396955),
    B = n(314404),
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
            inReverseTrial: eA,
            setPurchasePreviewError: eC,
            hasPaymentSources: eN,
            enablePremiumBrandRefresh: eP,
            premiumBrandRefreshBackgroundClassName: eR,
            isPremiumGroupPurchase: eD,
        } = (0, b.JL)(),
        { isGift: ew, giftRecipient: ex, selectedGiftStyle: eL } = (0, E.wD)(),
        ej = (0, j.N)(),
        eM = null == ej || null == (t = ej.discount) ? void 0 : t.plan_ids.some((e) => Y.GP[e].skuId === ey),
        ek = !ew && null != ej && null != ey && eM,
        eU = (0, u.e7)([C.Z], () => C.Z.get(X));
    l()(null != eU, "Missing plan");
    let eG = [
            {
                planId: eU.id,
                quantity: 1,
            },
        ],
        eZ = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
        eB = null != ey ? ey : "",
        eF = (0, u.e7)([P.Z], () => P.Z.get(eB), [eB]),
        eV = null == eF ? void 0 : eF.eligiblePaymentGateways,
        [eH, eY] = (0, L.ED)({
            items: eG,
            renewal: !1,
            preventFetch: eA || ew || eZ,
            applyEntitlements: !0,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            trialId: el,
            metadata: ed,
        }),
        [eW, eK] = (0, L.ED)({
            subscriptionId: null == eb ? void 0 : eb.id,
            items: eG,
            renewal: !0,
            preventFetch: ew || eZ,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [ez, eq] = (0, L.ED)({
            items: [
                {
                    planId: Y.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !ek,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [eQ, eX] = (0, L.o5)({
            paymentSourceId: ee.paymentSourceId,
            skuId: ey,
            subscriptionPlanId: X,
            currency: ee.currency,
            preventFetch: !ew || eZ,
            loadId: eT.loadId,
        }),
        eJ = ew && (0, R.pO)(ex),
        e$ = null != (a = null != (n = null != eY ? eY : eK) ? n : eq) ? a : eX;
    i.useEffect(() => {
        eC(e$);
    }, [e$, eC]);
    let e0 = (0, u.e7)([T.Z], () => T.Z.enabled),
        e1 = ee.paymentSourceId,
        e3 = (0, I.$)($, e1),
        { hasEntitlements: e2, entitlements: e4 } = (0, V.H)(eU.id, ew),
        e5 = (0, D.Ap)(ee.paymentSourceId),
        e8 = (0, O.sE)(el, e1, X),
        e6 = (0, v.Kp)({
            isTrial: em,
            isGift: ew,
            selectedSkuId: ey,
            startedPaymentFlowWithPaymentSources: eS.current,
            inReverseTrial: eA,
        }),
        [e7, e9] = i.useState(null == eH ? void 0 : eH.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == e7 && e9(null == eH ? void 0 : eH.subscriptionPeriodEnd);
    }, [null == eH ? void 0 : eH.subscriptionPeriodEnd, e7]);
    let te = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        tt = !e6 && te.isFractionalPremiumActive && Y.dJ.has(X),
        tn = i.useMemo(
            () =>
                (0, D.V7)({
                    skuId: ey,
                    isPremium: ev,
                    multiMonthPlans: [],
                    currentSubscription: eb,
                    defaultPlanId: eO,
                }),
            [ey, eb, eO, ev],
        ),
        tr = (0, v.$g)(e6, eH, eU),
        ti = i.useMemo(() => (em && null != eH ? eH : eA && null != eW ? eW : void 0), [eA, em, eH, eW]);
    if (
        (i.useEffect(() => {
            ew ? eI(eQ) : eI(eH);
        }, [ew, eI, eQ, eH]),
        null != e$)
    );
    else if (ew && null != eQ)
        Q = (0, r.jsx)(F.e9, {
            plan: eU,
            className: o()(z.invoice, eR),
            isPrepaidPaymentSource: e5,
            isCustomGift: eJ,
            invoicePreview: eQ,
        });
    else if (null != ti)
        Q = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(M.UN, { negativeMarginTop: !eA }),
                (0, r.jsxs)(M.aO, {
                    className: o()(z.invoice, eR),
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
                                        price: (0, w.T4)(0, ti.currency, {
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
                                invoice: ti,
                                plan: eU,
                            }),
                        }),
                    ],
                }),
            ],
        });
    else {
        if (null == eH || null == eW || tr)
            return (0, r.jsx)("div", {
                className: z.spinnerWrapper,
                children: (0, r.jsx)(f.$jN, {}),
            });
        em && eH.subscriptionPeriodEnd !== eW.subscriptionPeriodEnd && (q = eH.subscriptionPeriodEnd),
            (Q = (0, r.jsxs)(r.Fragment, {
                children: [
                    tt &&
                        (0, r.jsx)(k.n, {
                            fractionalPremiumInfo: te,
                            enablePremiumBrandRefresh: eP,
                        }),
                    (0, r.jsxs)(M.aO, {
                        className: o()(z.invoice, eR),
                        children: [
                            (0, r.jsx)(M.Z9, { children: K.intl.string(K.t["2eh+Co"]) }),
                            (0, r.jsx)(F.Lu, {
                                invoice: eH,
                                newPlan: eU,
                                isPrepaidPaymentSource: e5,
                                referralTrialOfferId: e_,
                            }),
                            e5
                                ? null
                                : (0, r.jsx)(F.nd, {
                                      renewalInvoice: eW,
                                      isTrial: em,
                                      priceOptions: ee,
                                      overrideRenewalDate: q,
                                      trialFooterMessageOverride: ec,
                                      hideSubscriptionDetails: ep,
                                  }),
                        ],
                    }),
                ],
            }));
    }
    let ta = c.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
        to = K.intl.formatToPlainString(K.t["sBpy9/"], { planName: eU.name });
    ew && !eJ
        ? (to = K.intl.string(K.t.J5a0eb))
        : ew && eJ
          ? (to = "")
          : (0, D.PV)(eU.id) && (to = D.ZP.getBillingReviewSubheader(null, eU));
    let ts = null != eV && eV.length > 0 && (e1 === N.c || null === e3) && eN ? Z.w.SELECT_PAYMENT_METHOD : void 0;
    return e8
        ? null
        : (0, r.jsxs)("div", {
              className: z.stepBody,
              children: [
                  (0, r.jsx)(Z.Y, { paymentRestrictionBannerType: ts }),
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
                  e6 &&
                      !eD &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(M.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(S.a, {
                                  planSkuId: null == eU ? void 0 : eU.skuId,
                                  referralTrialOfferId: e_,
                              }),
                              (0, r.jsx)(B.O, {
                                  planOptions: tn,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: X,
                                  planGroup: J,
                                  subscriptionPeriodEnd: e7,
                                  showTotal: !1,
                                  discountInvoiceItems: ek ? (null == ez ? void 0 : ez.invoiceItems) : void 0,
                                  handleClose: eg,
                              }),
                              (0, r.jsx)(M.UN, {}),
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
                  !em &&
                      "" !== to &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          children: to,
                      }),
                  eJ &&
                      null != eL &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(G.Z, {
                                  defaultAnimationState: x.SR.LOOP,
                                  giftStyle: eL,
                                  shouldAnimate: !0,
                                  className: z.giftMainAnimation,
                              }),
                              (0, r.jsx)(H.s, { giftRecipient: ex }),
                          ],
                      }),
                  Q,
                  (0, r.jsxs)("div", {
                      className: z.paymentSourceWrapper,
                      children: [
                          (0, r.jsx)(m.ZP, {
                              label: em ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
                              paymentSources: Object.values($),
                              selectedPaymentSourceId: e1,
                              prependOption:
                                  e2 && !em
                                      ? {
                                            label: K.intl.string(K.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: er,
                              onPaymentSourceAdd: ei,
                              hidePersonalInformation: e0,
                              isTrial: em,
                              paymentGatewayRestrictions: eV,
                              className: o()({ [z.premiumBrandRefreshInputBackground]: eP }),
                          }),
                          e2 && null == e1
                              ? (0, r.jsx)("div", {
                                    className: z.paymentSourceOptionalWarning,
                                    children: K.intl.format(K.t["2wPRSF"], { months: e4.length }),
                                })
                              : null,
                          eh
                              ? null
                              : (0, r.jsx)(p.b, {
                                    currencies: et,
                                    className: z.currencyWrapper,
                                    children: (0, r.jsx)(p.Z, {
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
                      children: (0, r.jsx)(h.Z, {
                          onChange: ea,
                          forceShow: !0,
                          finePrint:
                              null != (s = !eA && ec)
                                  ? s
                                  : (0, r.jsx)(_.Z, {
                                        hide: em || eh,
                                        subscriptionPlan: eU,
                                        renewalInvoice: eW,
                                        isGift: ew,
                                        paymentSourceType: e3,
                                        isEmbeddedIAP: eE,
                                        basePrice: (0, D.aS)(eU.id, !1, ew, ee),
                                    }),
                          showPricingLink: eU.currency !== W.pK.USD,
                          showWithdrawalWaiver: ta,
                          disabled: eZ,
                          isTrial: em && null == ec,
                          inReverseTrial: eA,
                          isDiscount: eh,
                          subscriptionPlan: eU,
                          isGift: ew,
                      }),
                  }),
              ],
          });
}
