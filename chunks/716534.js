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
    w = n(74538),
    D = n(937615),
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
        } = (0, b.JL)(),
        { isGift: ew, giftRecipient: eD, selectedGiftStyle: ex } = (0, E.wD)(),
        eL = (0, j.N)(),
        ej = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids.some((e) => Y.GP[e].skuId === ey),
        eM = !ew && null != eL && null != ey && ej,
        ek = (0, u.e7)([C.Z], () => C.Z.get(X));
    l()(null != ek, "Missing plan");
    let eU = [
            {
                planId: ek.id,
                quantity: 1,
            },
        ],
        eG = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
        eZ = null != ey ? ey : "",
        eB = (0, u.e7)([P.Z], () => P.Z.get(eZ), [eZ]),
        eF = null == eB ? void 0 : eB.eligiblePaymentGateways,
        [eV, eH] = (0, L.ED)({
            items: eU,
            renewal: !1,
            preventFetch: eA || ew || eG,
            applyEntitlements: !0,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            trialId: el,
            metadata: ed,
        }),
        [eY, eW] = (0, L.ED)({
            subscriptionId: null == eb ? void 0 : eb.id,
            items: eU,
            renewal: !0,
            preventFetch: ew || eG,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [eK, ez] = (0, L.ED)({
            items: [
                {
                    planId: Y.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !eM,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed,
        }),
        [eq, eQ] = (0, L.o5)({
            paymentSourceId: ee.paymentSourceId,
            skuId: ey,
            subscriptionPlanId: X,
            currency: ee.currency,
            preventFetch: !ew || eG,
            loadId: eT.loadId,
        }),
        eX = ew && (0, R.pO)(eD),
        eJ = null != (a = null != (n = null != eH ? eH : eW) ? n : ez) ? a : eQ;
    i.useEffect(() => {
        eC(eJ);
    }, [eJ, eC]);
    let e$ = (0, u.e7)([T.Z], () => T.Z.enabled),
        e0 = ee.paymentSourceId,
        e1 = (0, I.$)($, e0),
        { hasEntitlements: e3, entitlements: e2 } = (0, V.H)(ek.id, ew),
        e4 = (0, w.Ap)(ee.paymentSourceId),
        e5 = (0, O.sE)(el, e0, X),
        e8 = (0, v.Kp)({
            isTrial: em,
            isGift: ew,
            selectedSkuId: ey,
            startedPaymentFlowWithPaymentSources: eS.current,
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
        te = !e8 && e9.isFractionalPremiumActive && Y.dJ.has(X),
        tt = i.useMemo(
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
        tn = (0, v.$g)(e8, eV, ek),
        tr = i.useMemo(() => (em && null != eV ? eV : eA && null != eY ? eY : void 0), [eA, em, eV, eY]);
    if (
        (i.useEffect(() => {
            ew ? eI(eq) : eI(eV);
        }, [ew, eI, eq, eV]),
        null != eJ)
    );
    else if (ew && null != eq)
        Q = (0, r.jsx)(F.e9, {
            plan: ek,
            className: o()(z.invoice, eR),
            isPrepaidPaymentSource: e4,
            isCustomGift: eX,
            invoicePreview: eq,
        });
    else if (null != tr)
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
                                        price: (0, D.T4)(0, tr.currency, {
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
        em && eV.subscriptionPeriodEnd !== eY.subscriptionPeriodEnd && (q = eV.subscriptionPeriodEnd),
            (Q = (0, r.jsxs)(r.Fragment, {
                children: [
                    te &&
                        (0, r.jsx)(k.n, {
                            fractionalPremiumInfo: e9,
                            enablePremiumBrandRefresh: eP,
                        }),
                    (0, r.jsxs)(M.aO, {
                        className: o()(z.invoice, eR),
                        children: [
                            (0, r.jsx)(M.Z9, { children: K.intl.string(K.t["2eh+Co"]) }),
                            (0, r.jsx)(F.Lu, {
                                invoice: eV,
                                newPlan: ek,
                                isPrepaidPaymentSource: e4,
                                referralTrialOfferId: e_,
                            }),
                            e4
                                ? null
                                : (0, r.jsx)(F.nd, {
                                      renewalInvoice: eY,
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
    let ti = c.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
        ta = K.intl.formatToPlainString(K.t["sBpy9/"], { planName: ek.name });
    ew && !eX
        ? (ta = K.intl.string(K.t.J5a0eb))
        : ew && eX
          ? (ta = "")
          : (0, w.PV)(ek.id) && (ta = w.ZP.getBillingReviewSubheader(null, ek));
    let to = null != eF && eF.length > 0 && (e0 === N.c || null === e1) && eN ? Z.w.SELECT_PAYMENT_METHOD : void 0;
    return e5
        ? null
        : (0, r.jsxs)("div", {
              className: z.stepBody,
              children: [
                  (0, r.jsx)(Z.Y, { paymentRestrictionBannerType: to }),
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
                  e8 &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(M.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(S.a, {
                                  planSkuId: null == ek ? void 0 : ek.skuId,
                                  referralTrialOfferId: e_,
                              }),
                              (0, r.jsx)(B.O, {
                                  planOptions: tt,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: X,
                                  planGroup: J,
                                  subscriptionPeriodEnd: e6,
                                  showTotal: !1,
                                  discountInvoiceItems: eM ? (null == eK ? void 0 : eK.invoiceItems) : void 0,
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
                      "" !== ta &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          children: ta,
                      }),
                  eX &&
                      null != ex &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(G.Z, {
                                  defaultAnimationState: x.SR.LOOP,
                                  giftStyle: ex,
                                  shouldAnimate: !0,
                                  className: z.giftMainAnimation,
                              }),
                              (0, r.jsx)(H.s, { giftRecipient: eD }),
                          ],
                      }),
                  Q,
                  (0, r.jsxs)("div", {
                      className: z.paymentSourceWrapper,
                      children: [
                          (0, r.jsx)(m.ZP, {
                              label: em ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
                              paymentSources: Object.values($),
                              selectedPaymentSourceId: e0,
                              prependOption:
                                  e3 && !em
                                      ? {
                                            label: K.intl.string(K.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: er,
                              onPaymentSourceAdd: ei,
                              hidePersonalInformation: e$,
                              isTrial: em,
                              paymentGatewayRestrictions: eF,
                              className: o()({ [z.premiumBrandRefreshInputBackground]: eP }),
                          }),
                          e3 && null == e0
                              ? (0, r.jsx)("div", {
                                    className: z.paymentSourceOptionalWarning,
                                    children: K.intl.format(K.t["2wPRSF"], { months: e2.length }),
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
                                        subscriptionPlan: ek,
                                        renewalInvoice: eY,
                                        isGift: ew,
                                        paymentSourceType: e1,
                                        isEmbeddedIAP: eE,
                                        basePrice: (0, w.aS)(ek.id, !1, ew, ee),
                                    }),
                          showPricingLink: ek.currency !== W.pK.USD,
                          showWithdrawalWaiver: ti,
                          disabled: eG,
                          isTrial: em && null == ec,
                          inReverseTrial: eA,
                          isDiscount: eh,
                          subscriptionPlan: ek,
                          isGift: ew,
                      }),
                  }),
              ],
          });
}
