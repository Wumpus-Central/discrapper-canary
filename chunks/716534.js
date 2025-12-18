n.d(t, { Z: () => X }), n(388685);
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
    j = n(622909),
    M = n(811334),
    k = n(346071),
    U = n(314182),
    G = n(981632),
    Z = n(396955),
    F = n(314404),
    B = n(42818),
    V = n(459965),
    H = n(251660),
    Y = n(474936),
    W = n(282793),
    K = n(231338),
    z = n(353149),
    q = n(388032),
    Q = n(400005);
function X(e) {
    var t, n, a, s;
    let X,
        J,
        {
            selectedPlanId: $,
            planGroup: ee,
            paymentSources: et,
            priceOptions: en,
            currencies: er,
            onCurrencyChange: ei,
            onPaymentSourceChange: ea,
            handlePaymentSourceAdd: eo,
            setHasAcceptedTerms: es,
            legalTermsNodeRef: el,
            hasLegalTermsFlash: ec,
            trialId: eu,
            trialFooterMessageOverride: ed,
            reviewWarningMessage: ef,
            metadata: ep,
            purchaseState: e_,
            hideSubscriptionDetails: em,
            referralTrialOfferId: eh,
            isTrial: eg = !1,
            isDiscount: eE = !1,
            handleClose: eb,
        } = e,
        {
            isEmbeddedIAP: ey,
            activeSubscription: eO,
            selectedSkuId: ev,
            defaultPlanId: eS,
            isPremium: eI,
            startedPaymentFlowWithPaymentSourcesRef: eT,
            setInvoicePreview: eC,
            contextMetadata: eA,
            inReverseTrial: eN,
            setPurchasePreviewError: eP,
            hasPaymentSources: eR,
            enablePremiumBrandRefresh: ew,
            premiumBrandRefreshBackgroundClassName: eD,
            isPremiumGroupPurchase: ex,
        } = (0, b.JL)(),
        { isGift: eL, giftRecipient: ej, selectedGiftStyle: eM } = (0, E.wD)(),
        ek = (0, j.N)(),
        eU = null == ek || null == (t = ek.discount) ? void 0 : t.plan_ids.some((e) => Y.GP[e].skuId === ev),
        eG = !eL && null != ek && null != ev && eU,
        eZ = (0, u.e7)([A.Z], () => A.Z.get($));
    l()(null != eZ, "Missing plan");
    let eF = [
            {
                planId: eZ.id,
                quantity: 1,
            },
        ],
        eB = e_ === y.A.PURCHASING || e_ === y.A.COMPLETED,
        eV = null != ev ? ev : "",
        eH = (0, u.e7)([P.Z], () => P.Z.get(eV), [eV]),
        eY = null == eH ? void 0 : eH.eligiblePaymentGateways,
        [eW, eK] = (0, L.ED)({
            items: eF,
            renewal: !1,
            preventFetch: eN || eL || eB,
            applyEntitlements: !0,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency,
            trialId: eu,
            metadata: ep,
        }),
        [ez, eq] = (0, L.ED)({
            subscriptionId: null == eO ? void 0 : eO.id,
            items: eF,
            renewal: !0,
            preventFetch: eL || eB,
            trialId: eu,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency,
            metadata: ep,
        }),
        [eQ, eX] = (0, L.ED)({
            items: [
                {
                    planId: Y.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !eG,
            trialId: eu,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency,
            metadata: ep,
        }),
        [eJ, e$] = (0, L.o5)({
            paymentSourceId: en.paymentSourceId,
            skuId: ev,
            subscriptionPlanId: $,
            currency: en.currency,
            preventFetch: !eL || eB,
            loadId: eA.loadId,
        }),
        e0 = eL && (0, R.pO)(ej),
        e1 = null != (a = null != (n = null != eK ? eK : eq) ? n : eX) ? a : e$;
    i.useEffect(() => {
        eP(e1);
    }, [e1, eP]);
    let e3 = (0, u.e7)([T.Z], () => T.Z.enabled),
        e2 = en.paymentSourceId,
        e4 = (0, I.$)(et, e2),
        { hasEntitlements: e5, entitlements: e8 } = (0, V.H)(eZ.id, eL),
        e6 = (0, w.Ap)(en.paymentSourceId),
        e7 = (0, O.sE)(eu, e2, $),
        e9 = (0, v.Kp)({
            isTrial: eg,
            isGift: eL,
            selectedSkuId: ev,
            startedPaymentFlowWithPaymentSources: eT.current,
            inReverseTrial: eN,
        }),
        [te, tt] = i.useState(null == eW ? void 0 : eW.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == te && tt(null == eW ? void 0 : eW.subscriptionPeriodEnd);
    }, [null == eW ? void 0 : eW.subscriptionPeriodEnd, te]);
    let tn = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        tr = !e9 && tn.isFractionalPremiumActive && Y.dJ.has($),
        ti = i.useMemo(
            () =>
                (0, w.V7)({
                    skuId: ev,
                    isPremium: eI,
                    multiMonthPlans: [],
                    currentSubscription: eO,
                    defaultPlanId: eS,
                }),
            [ev, eO, eS, eI],
        ),
        ta = (0, v.$g)(e9, eW, eZ),
        to = i.useMemo(() => (eg && null != eW ? eW : eN && null != ez ? ez : void 0), [eN, eg, eW, ez]);
    if (
        (i.useEffect(() => {
            eL ? eC(eJ) : eC(eW);
        }, [eL, eC, eJ, eW]),
        null != e1)
    );
    else if (eL && null != eJ)
        J = (0, r.jsx)(B.e9, {
            plan: eZ,
            className: o()(Q.invoice, eD),
            isPrepaidPaymentSource: e6,
            isCustomGift: e0,
            invoicePreview: eJ,
        });
    else if (null != to)
        J = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(M.UN, { negativeMarginTop: !eN }),
                (0, r.jsxs)(M.aO, {
                    className: o()(Q.invoice, eD),
                    children: [
                        (0, r.jsxs)("div", {
                            className: Q.trialPriceLine,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/bold",
                                    children: q.intl.string(q.t.txajQG),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: q.intl.format(q.t.hXcaLT, {
                                        price: (0, D.T4)(0, to.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: Q.afterTrialPriceLine,
                            children: (0, r.jsx)(B.yT, {
                                invoice: to,
                                plan: eZ,
                            }),
                        }),
                    ],
                }),
            ],
        });
    else {
        if (null == eW || null == ez || ta)
            return (0, r.jsx)("div", {
                className: Q.spinnerWrapper,
                children: (0, r.jsx)(f.$jN, {}),
            });
        eg && eW.subscriptionPeriodEnd !== ez.subscriptionPeriodEnd && (X = eW.subscriptionPeriodEnd),
            (J = (0, r.jsxs)(r.Fragment, {
                children: [
                    tr &&
                        (0, r.jsx)(k.n, {
                            fractionalPremiumInfo: tn,
                            enablePremiumBrandRefresh: ew,
                        }),
                    (0, r.jsxs)(M.aO, {
                        className: o()(Q.invoice, eD),
                        children: [
                            (0, r.jsx)(M.Z9, { children: q.intl.string(q.t["2eh+Co"]) }),
                            (0, r.jsx)(B.Lu, {
                                invoice: eW,
                                newPlan: eZ,
                                isPrepaidPaymentSource: e6,
                                referralTrialOfferId: eh,
                            }),
                            e6
                                ? null
                                : (0, r.jsx)(B.nd, {
                                      renewalInvoice: ez,
                                      isTrial: eg,
                                      priceOptions: en,
                                      overrideRenewalDate: X,
                                      trialFooterMessageOverride: ed,
                                      hideSubscriptionDetails: em,
                                  }),
                        ],
                    }),
                ],
            }));
    }
    let ts = c.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
        tl = q.intl.formatToPlainString(q.t["sBpy9/"], { planName: eZ.name });
    eL && !e0
        ? (tl = q.intl.string(q.t.J5a0eb))
        : eL && e0
          ? (tl = "")
          : (0, w.PV)(eZ.id) && (tl = w.ZP.getBillingReviewSubheader(null, eZ));
    let tc = null != eY && eY.length > 0 && (e2 === N.c || null === e4) && eR ? Z.w.SELECT_PAYMENT_METHOD : void 0;
    return e7
        ? null
        : (0, r.jsxs)("div", {
              className: Q.stepBody,
              children: [
                  (0, r.jsx)(Z.Y, { paymentRestrictionBannerType: tc }),
                  null != ef &&
                      (0, r.jsxs)("div", {
                          className: Q.reviewWarningMessageContainer,
                          children: [
                              (0, r.jsx)(f.d3s, {
                                  size: "custom",
                                  color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(f.Text, {
                                  className: Q.reviewWarningMessage,
                                  variant: "text-sm/normal",
                                  children: ef,
                              }),
                          ],
                      }),
                  ex &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: "text-md/medium",
                                  children: q.intl.formatToPlainString(z.default["h1i+H8"], {
                                      premiumGroupProductName: (0, W.sO)(),
                                      cooldownMonths: W.T9,
                                  }),
                              }),
                              (0, r.jsx)(M.UN, {}),
                          ],
                      }),
                  e9 &&
                      !ex &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(M.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(S.a, {
                                  planSkuId: null == eZ ? void 0 : eZ.skuId,
                                  referralTrialOfferId: eh,
                              }),
                              (0, r.jsx)(F.O, {
                                  planOptions: ti,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: $,
                                  planGroup: ee,
                                  subscriptionPeriodEnd: te,
                                  showTotal: !1,
                                  discountInvoiceItems: eG ? (null == eQ ? void 0 : eQ.invoiceItems) : void 0,
                                  handleClose: eb,
                              }),
                              (0, r.jsx)(M.UN, {}),
                          ],
                      }),
                  eN &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: Q.trialHeader,
                          children: q.intl.format(q.t["7ZS2m1"], {
                              trialEnd: null == eO ? void 0 : eO.currentPeriodEnd,
                          }),
                      }),
                  !eg &&
                      "" !== tl &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          children: tl,
                      }),
                  e0 &&
                      null != eM &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(G.Z, {
                                  defaultAnimationState: x.SR.LOOP,
                                  giftStyle: eM,
                                  shouldAnimate: !0,
                                  className: Q.giftMainAnimation,
                              }),
                              (0, r.jsx)(H.s, { giftRecipient: ej }),
                          ],
                      }),
                  J,
                  (0, r.jsxs)("div", {
                      className: Q.paymentSourceWrapper,
                      children: [
                          (0, r.jsx)(m.ZP, {
                              label: eg ? q.intl.string(q.t["YH7B+D"]) : q.intl.string(q.t["mmDvV+"]),
                              paymentSources: Object.values(et),
                              selectedPaymentSourceId: e2,
                              prependOption:
                                  e5 && !eg
                                      ? {
                                            label: q.intl.string(q.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: ea,
                              onPaymentSourceAdd: eo,
                              hidePersonalInformation: e3,
                              isTrial: eg,
                              paymentGatewayRestrictions: eY,
                              className: o()({ [Q.premiumBrandRefreshInputBackground]: ew }),
                          }),
                          e5 && null == e2
                              ? (0, r.jsx)("div", {
                                    className: Q.paymentSourceOptionalWarning,
                                    children: q.intl.format(q.t["2wPRSF"], { months: e8.length }),
                                })
                              : null,
                          eE
                              ? null
                              : (0, r.jsx)(p.b, {
                                    currencies: er,
                                    className: Q.currencyWrapper,
                                    children: (0, r.jsx)(p.Z, {
                                        label: q.intl.string(q.t["/AAR02"]),
                                        selectedCurrency: en.currency,
                                        currencies: er,
                                        onChange: ei,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(U.Z, {
                      isActive: ec,
                      ref: el,
                      children: (0, r.jsx)(h.Z, {
                          onChange: es,
                          forceShow: !0,
                          finePrint:
                              null != (s = !eN && ed)
                                  ? s
                                  : (0, r.jsx)(_.Z, {
                                        hide: eg || eE,
                                        subscriptionPlan: eZ,
                                        renewalInvoice: ez,
                                        isGift: eL,
                                        paymentSourceType: e4,
                                        isEmbeddedIAP: ey,
                                        basePrice: (0, w.aS)(eZ.id, !1, eL, en),
                                    }),
                          showPricingLink: eZ.currency !== K.pK.USD,
                          showWithdrawalWaiver: ts,
                          disabled: eB,
                          isTrial: eg && null == ed,
                          inReverseTrial: eN,
                          isDiscount: eE,
                          subscriptionPlan: eZ,
                          isGift: eL,
                      }),
                  }),
              ],
          });
}
