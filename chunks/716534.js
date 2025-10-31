n.d(t, { Z: () => Q }), n(388685);
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
    T = n(246946),
    S = n(351402),
    A = n(509545),
    C = n(855775),
    N = n(55563),
    R = n(669079),
    P = n(74538),
    w = n(937615),
    D = n(479446),
    x = n(374649),
    L = n(104494),
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
    W = n(981631),
    K = n(231338),
    z = n(388032),
    q = n(867983);
function X(e, t, n) {
    let r = null,
        i = null,
        a = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: o } = P.ZP.getIntervalForInvoice(t),
            s = (0, w.og)((0, w.T4)(t.total, t.currency), e, o),
            l = null != n ? n : t.subscriptionPeriodEnd;
        (r = z.intl.format(z.t.ZzmrTk, {
            termsURL: W.EYA.TERMS,
            paidURL: W.EYA.PAID_TERMS,
            rate: s,
            renewalDate: l,
        })),
            (i = q.trialCheckbox),
            (a = q.trialCheckboxLabel);
    }
    return {
        checkboxLabel: r,
        checkboxClassname: i,
        checkboxLabelClassname: a,
    };
}
function Q(e) {
    var t, n, a, s;
    let W,
        Q,
        {
            selectedPlanId: J,
            planGroup: $,
            paymentSources: ee,
            priceOptions: et,
            currencies: en,
            onCurrencyChange: er,
            onPaymentSourceChange: ei,
            handlePaymentSourceAdd: ea,
            setHasAcceptedTerms: eo,
            legalTermsNodeRef: es,
            hasLegalTermsFlash: el,
            trialId: ec,
            trialFooterMessageOverride: eu,
            reviewWarningMessage: ed,
            metadata: ef,
            purchaseState: e_,
            hideSubscriptionDetails: ep,
            referralTrialOfferId: eh,
            isTrial: em = !1,
            isDiscount: eg = !1,
            handleClose: eE,
        } = e,
        {
            isEmbeddedIAP: eb,
            activeSubscription: ey,
            selectedSkuId: eO,
            defaultPlanId: ev,
            isPremium: eI,
            startedPaymentFlowWithPaymentSourcesRef: eT,
            setInvoicePreview: eS,
            contextMetadata: eA,
            inReverseTrial: eC,
            setPurchaseError: eN,
            hasPaymentSources: eR,
            enablePremiumBrandRefresh: eP,
            premiumBrandRefreshBackgroundClassName: ew,
        } = (0, b.JL)(),
        { isGift: eD, giftRecipient: ex, selectedGiftStyle: eL } = (0, E.wD)(),
        eM = (0, L.Ng)(),
        ej = null == eM || null == (t = eM.discount) ? void 0 : t.plan_ids.some((e) => Y.GP[e].skuId === eO),
        ek = !eD && null != eM && null != eO && ej,
        eU = (0, u.e7)([A.Z], () => A.Z.get(J));
    l()(null != eU, "Missing plan");
    let eG = [
            {
                planId: eU.id,
                quantity: 1,
            },
        ],
        eB = e_ === y.A.PURCHASING || e_ === y.A.COMPLETED,
        eZ = null != eO ? eO : "",
        eF = (0, u.e7)([N.Z], () => N.Z.get(eZ), [eZ]),
        eV = null == eF ? void 0 : eF.eligiblePaymentGateways,
        [eH, eY] = (0, x.ED)({
            items: eG,
            renewal: !1,
            preventFetch: eC || eD || eB,
            applyEntitlements: !0,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
            trialId: ec,
            metadata: ef,
        }),
        [eW, eK] = (0, x.ED)({
            subscriptionId: null == ey ? void 0 : ey.id,
            items: eG,
            renewal: !0,
            preventFetch: eD || eB,
            trialId: ec,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
            metadata: ef,
        }),
        [ez, eq] = (0, x.ED)({
            items: [
                {
                    planId: Y.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !ek,
            trialId: ec,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
            metadata: ef,
        }),
        [eX, eQ] = (0, x.o5)({
            paymentSourceId: et.paymentSourceId,
            skuId: eO,
            subscriptionPlanId: J,
            currency: et.currency,
            preventFetch: !eD || eB,
            loadId: eA.loadId,
        }),
        eJ = eD && (0, R.pO)(ex),
        e$ = null != (a = null != (n = null != eY ? eY : eK) ? n : eq) ? a : eQ;
    i.useEffect(() => {
        eN(e$);
    }, [e$, eN]);
    let e0 = (0, u.e7)([T.Z], () => T.Z.enabled),
        e1 = et.paymentSourceId,
        e3 = (0, I.$)(ee, e1),
        { hasEntitlements: e2, entitlements: e4 } = (0, V.H)(eU.id, eD),
        e8 = (0, P.Ap)(et.paymentSourceId),
        e5 = (0, O.sE)(ec, e1, J),
        e6 = (0, v.Kp)({
            isTrial: em,
            isGift: eD,
            selectedSkuId: eO,
            startedPaymentFlowWithPaymentSources: eT.current,
            inReverseTrial: eC,
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
        tt = !e6 && te.isFractionalPremiumActive && Y.dJ.has(J),
        tn = i.useMemo(
            () =>
                (0, P.V7)({
                    skuId: eO,
                    isPremium: eI,
                    multiMonthPlans: [],
                    currentSubscription: ey,
                    defaultPlanId: ev,
                }),
            [eO, ey, ev, eI],
        ),
        tr = (0, v.$g)(e6, eH, eU),
        ti = i.useMemo(() => (em && null != eH ? eH : eC && null != eW ? eW : void 0), [eC, em, eH, eW]);
    if (
        (i.useEffect(() => {
            eD ? eS(eX) : eS(eH);
        }, [eD, eS, eX, eH]),
        null != e$)
    );
    else if (eD && null != eX)
        Q = (0, r.jsx)(F.e9, {
            plan: eU,
            className: o()(q.invoice, ew),
            isPrepaidPaymentSource: e8,
            isCustomGift: eJ,
            invoicePreview: eX,
        });
    else if (null != ti)
        Q = (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(j.UN, { negativeMarginTop: !eC }),
                (0, r.jsxs)(j.aO, {
                    className: o()(q.invoice, ew),
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
                                        price: (0, w.T4)(0, ti.currency, {
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
                className: q.spinnerWrapper,
                children: (0, r.jsx)(f.$jN, {}),
            });
        em && eH.subscriptionPeriodEnd !== eW.subscriptionPeriodEnd && (W = eH.subscriptionPeriodEnd),
            (Q = (0, r.jsxs)(r.Fragment, {
                children: [
                    tt &&
                        (0, r.jsx)(k.n, {
                            fractionalPremiumInfo: te,
                            enablePremiumBrandRefresh: eP,
                        }),
                    (0, r.jsxs)(j.aO, {
                        className: o()(q.invoice, ew),
                        children: [
                            (0, r.jsx)(j.Z9, { children: z.intl.string(z.t["2eh+Co"]) }),
                            (0, r.jsx)(F.Lu, {
                                invoice: eH,
                                newPlan: eU,
                                isPrepaidPaymentSource: e8,
                                referralTrialOfferId: eh,
                            }),
                            e8
                                ? null
                                : (0, r.jsx)(F.nd, {
                                      renewalInvoice: eW,
                                      isTrial: em,
                                      priceOptions: et,
                                      overrideRenewalDate: W,
                                      trialFooterMessageOverride: eu,
                                      hideSubscriptionDetails: ep,
                                  }),
                        ],
                    }),
                ],
            }));
    }
    let ta = c.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback),
        { checkboxLabel: to, checkboxClassname: ts, checkboxLabelClassname: tl } = X(null != em && em, eW, W),
        tc = z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eU.name });
    eD && !eJ
        ? (tc = z.intl.string(z.t.J5a0eb))
        : eD && eJ
          ? (tc = "")
          : (0, P.PV)(eU.id) && (tc = P.ZP.getBillingReviewSubheader(null, eU));
    let tu = null != eV && eV.length > 0 && (e1 === C.c || null === e3) && eR ? B.w.SELECT_PAYMENT_METHOD : void 0;
    return e5
        ? null
        : (0, r.jsxs)("div", {
              className: q.stepBody,
              children: [
                  (0, r.jsx)(B.Y, { paymentRestrictionBannerType: tu }),
                  null != ed &&
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
                                  children: ed,
                              }),
                          ],
                      }),
                  e6 &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(j.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(M.Z, {}),
                              (0, r.jsx)(Z.O, {
                                  planOptions: tn,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: J,
                                  planGroup: $,
                                  subscriptionPeriodEnd: e7,
                                  showTotal: !1,
                                  discountInvoiceItems: ek ? (null == ez ? void 0 : ez.invoiceItems) : void 0,
                                  handleClose: eE,
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
                              trialEnd: null == ey ? void 0 : ey.currentPeriodEnd,
                          }),
                      }),
                  !em &&
                      "" !== tc &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          children: tc,
                      }),
                  eJ &&
                      null != eL &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(G.Z, {
                                  defaultAnimationState: D.SR.LOOP,
                                  giftStyle: eL,
                                  shouldAnimate: !0,
                                  className: q.giftMainAnimation,
                              }),
                              (0, r.jsx)(H.s, { giftRecipient: ex }),
                          ],
                      }),
                  Q,
                  (0, r.jsxs)("div", {
                      className: q.paymentSourceWrapper,
                      children: [
                          (0, r.jsx)(h.ZP, {
                              label: em ? z.intl.string(z.t["YH7B+D"]) : z.intl.string(z.t["mmDvV+"]),
                              paymentSources: Object.values(ee),
                              selectedPaymentSourceId: e1,
                              prependOption:
                                  e2 && !em
                                      ? {
                                            label: z.intl.string(z.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: ei,
                              onPaymentSourceAdd: ea,
                              hidePersonalInformation: e0,
                              isTrial: em,
                              paymentGatewayRestrictions: eV,
                              className: o()({ [q.premiumBrandRefreshInputBackground]: eP }),
                          }),
                          e2 && null == e1
                              ? (0, r.jsx)("div", {
                                    className: q.paymentSourceOptionalWarning,
                                    children: z.intl.format(z.t["2wPRSF"], { months: e4.length }),
                                })
                              : null,
                          eg
                              ? null
                              : (0, r.jsx)(_.b, {
                                    currencies: en,
                                    className: q.currencyWrapper,
                                    children: (0, r.jsx)(_.Z, {
                                        label: z.intl.string(z.t["/AAR02"]),
                                        selectedCurrency: et.currency,
                                        currencies: en,
                                        onChange: er,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(U.Z, {
                      isActive: el,
                      ref: es,
                      children: (0, r.jsx)(m.Z, {
                          onChange: eo,
                          forceShow: !0,
                          checkboxLabel: to,
                          checkboxClassname: ts,
                          checkboxLabelClassname: tl,
                          finePrint:
                              null != (s = !eC && eu)
                                  ? s
                                  : (0, r.jsx)(p.Z, {
                                        hide: em || eg,
                                        subscriptionPlan: eU,
                                        renewalInvoice: eW,
                                        isGift: eD,
                                        paymentSourceType: e3,
                                        isEmbeddedIAP: eb,
                                        basePrice: (0, P.aS)(eU.id, !1, eD, et),
                                    }),
                          showPricingLink: eU.currency !== K.pK.USD,
                          showWithdrawalWaiver: ta,
                          disabled: eB,
                          isTrial: em && null == eu,
                          inReverseTrial: eC,
                          isDiscount: eg,
                          subscriptionPlan: eU,
                          isGift: eD,
                      }),
                  }),
              ],
          });
}
