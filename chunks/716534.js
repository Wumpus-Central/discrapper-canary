n.d(t, { Z: () => H }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(742280),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(190947),
    f = n(224550),
    p = n(275850),
    _ = n(672971),
    h = n(987209),
    m = n(563132),
    g = n(107998),
    E = n(45572),
    v = n(919778),
    b = n(614223),
    y = n(246946),
    O = n(351402),
    S = n(509545),
    I = n(669079),
    T = n(74538),
    N = n(937615),
    A = n(479446),
    C = n(374649),
    R = n(104494),
    P = n(642530),
    D = n(653798),
    w = n(314182),
    L = n(981632),
    x = n(314404),
    M = n(42818),
    k = n(459965),
    j = n(251660),
    U = n(474936),
    G = n(981631),
    B = n(231338),
    V = n(388032),
    F = n(214803);
function Z(e, t, n) {
    let r = null,
        i = null,
        o = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: a } = T.ZP.getIntervalForInvoice(t),
            s = (0, N.og)((0, N.T4)(t.total, t.currency), e, a),
            l = null != n ? n : t.subscriptionPeriodEnd;
        (r = V.NW.format(V.t.ZzmrTk, {
            termsURL: G.EYA.TERMS,
            paidURL: G.EYA.PAID_TERMS,
            rate: s,
            renewalDate: l
        })),
            (i = F.trialCheckbox),
            (o = F.trialCheckboxLabel);
    }
    return {
        checkboxLabel: r,
        checkboxClassname: i,
        checkboxLabelClassname: o
    };
}
function H(e) {
    var t, n, o, G, H;
    let W,
        Y,
        { selectedPlanId: K, paymentSources: z, priceOptions: q, currencies: Q, onCurrencyChange: X, onPaymentSourceChange: J, handlePaymentSourceAdd: $, setHasAcceptedTerms: ee, legalTermsNodeRef: et, hasLegalTermsFlash: en, trialId: er, trialFooterMessageOverride: ei, reviewWarningMessage: eo, metadata: ea, purchaseState: es, hideSubscriptionDetails: el, referralTrialOfferId: ec, isTrial: eu = !1, isDiscount: ed = !1, handleClose: ef } = e,
        { isEmbeddedIAP: ep, activeSubscription: e_, selectedSkuId: eh, defaultPlanId: em, isPremium: eg, startedPaymentFlowWithPaymentSourcesRef: eE, setInvoicePreview: ev, contextMetadata: eb, inReverseTrial: ey, setPurchaseError: eO } = (0, m.JL)(),
        { isGift: eS, giftRecipient: eI, selectedGiftStyle: eT } = (0, h.wD)(),
        { planSelectBanner: eN } = (0, g.zb)(),
        eA = (0, R.Ng)(),
        eC = null == eA ? void 0 : null === (t = eA.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => U.GP[e].skuId === eh),
        eR = !eS && null != eA && null != eh && eC,
        eP = (0, l.e7)([S.Z], () => S.Z.get(K));
    a()(null != eP, 'Missing plan');
    let eD = [
            {
                planId: eP.id,
                quantity: 1
            }
        ],
        ew = es === E.A.PURCHASING || es === E.A.COMPLETED,
        [eL, ex] = (0, C.ED)({
            items: eD,
            renewal: !1,
            preventFetch: ey || eS || ew,
            applyEntitlements: !0,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            trialId: er,
            metadata: ea
        }),
        [eM, ek] = (0, C.ED)({
            subscriptionId: null == e_ ? void 0 : e_.id,
            items: eD,
            renewal: !0,
            preventFetch: eS || ew,
            trialId: er,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: ea
        }),
        [ej, eU] = (0, C.ED)({
            items: [
                {
                    planId: U.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eR,
            trialId: er,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: ea
        }),
        [eG, eB] = (0, C.o5)({
            paymentSourceId: q.paymentSourceId,
            skuId: eh,
            subscriptionPlanId: K,
            currency: q.currency,
            preventFetch: !eS || ew,
            loadId: eb.loadId
        });
    i.useEffect(() => {
        ev(eG);
    }, [ev, eG]);
    let eV = eS && (0, I.pO)(eI),
        eF = null !== (G = null !== (o = null != ex ? ex : ek) && void 0 !== o ? o : eU) && void 0 !== G ? G : eB;
    i.useEffect(() => {
        eO(eF);
    }, [eF, eO]);
    let eZ = (0, l.e7)([y.Z], () => y.Z.enabled),
        eH = q.paymentSourceId,
        { hasEntitlements: eW, entitlements: eY } = (0, k.H)(eP.id, eS),
        eK = (0, T.Ap)(q.paymentSourceId),
        ez = (0, v.sE)(er, eH, K),
        eq = (0, b.Kp)({
            isTrial: eu,
            isGift: eS,
            selectedSkuId: eh,
            startedPaymentFlowWithPaymentSources: eE.current,
            inReverseTrial: ey
        }),
        [eQ, eX] = i.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == eQ && eX(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eQ]);
    let eJ = i.useMemo(
            () =>
                (0, T.V7)({
                    skuId: eh,
                    isPremium: eg,
                    multiMonthPlans: [],
                    currentSubscription: e_,
                    isGift: eS,
                    isEligibleForTrial: eu,
                    defaultPlanId: em,
                    defaultToMonthlyPlan: !1
                }),
            [eh, e_, eS, em, eg, eu]
        ),
        e$ = (0, b.$g)(eq, eL, eP),
        e0 = i.useMemo(() => (eu && null != eL ? eL : ey && null != eM ? eM : void 0), [ey, eu, eL, eM]);
    if (null != eF);
    else if (eS && null != eG)
        Y = (0, r.jsx)(M.e9, {
            plan: eP,
            className: F.invoice,
            isPrepaidPaymentSource: eK,
            isCustomGift: eV,
            invoicePreview: eG
        });
    else if (null != e0)
        Y = (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(D.KU, { negativeMarginTop: !ey }),
                (0, r.jsxs)(D.PO, {
                    className: F.invoice,
                    children: [
                        (0, r.jsxs)('div', {
                            className: F.trialPriceLine,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: V.NW.string(V.t.txajQE)
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: V.NW.format(V.t.hXcaLS, {
                                        price: (0, N.T4)(0, e0.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: F.afterTrialPriceLine,
                            children: (0, r.jsx)(M.yT, {
                                invoice: e0,
                                plan: eP
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eL || null == eM || e$)
            return (0, r.jsx)('div', {
                className: F.spinnerWrapper,
                children: (0, r.jsx)(u.$jN, {})
            });
        eu && eL.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (W = eL.subscriptionPeriodEnd),
            (Y = (0, r.jsxs)(D.PO, {
                className: F.invoice,
                children: [
                    (0, r.jsx)(D.q9, { children: V.NW.string(V.t['2eh+Cg']) }),
                    (0, r.jsx)(M.Lu, {
                        invoice: eL,
                        newPlan: eP,
                        isPrepaidPaymentSource: eK,
                        referralTrialOfferId: ec
                    }),
                    eK
                        ? null
                        : (0, r.jsx)(M.nd, {
                              renewalInvoice: eM,
                              isTrial: eu,
                              priceOptions: q,
                              overrideRenewalDate: W,
                              trialFooterMessageOverride: ei,
                              hideSubscriptionDetails: el
                          })
                ]
            }));
    }
    let e1 = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
        { checkboxLabel: e2, checkboxClassname: e3, checkboxLabelClassname: e4 } = Z(null != eu && eu, eM, W),
        e6 = V.NW.formatToPlainString(V.t['sBpy9/'], { planName: eP.name });
    return (
        eS && !eV ? (e6 = V.NW.string(V.t.J5a0eX)) : eS && eV ? (e6 = '') : (0, T.PV)(eP.id) && (e6 = T.ZP.getBillingReviewSubheader(null, eP)),
        ez
            ? null
            : (0, r.jsxs)('div', {
                  className: F.stepBody,
                  children: [
                      null != eo &&
                          (0, r.jsxs)('div', {
                              className: F.reviewWarningMessageContainer,
                              children: [
                                  (0, r.jsx)(u.d3s, {
                                      size: 'custom',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      className: F.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: eo
                                  })
                              ]
                          }),
                      eq &&
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(D.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  null != eN && eN,
                                  (0, r.jsx)(P.Z, {}),
                                  (0, r.jsx)(x.O, {
                                      planOptions: eJ,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: K,
                                      subscriptionPeriodEnd: eQ,
                                      showTotal: !1,
                                      discountInvoiceItems: eR ? (null == ej ? void 0 : ej.invoiceItems) : void 0,
                                      handleClose: ef
                                  }),
                                  (0, r.jsx)(D.KU, {})
                              ]
                          }),
                      ey &&
                          (0, r.jsx)(u.X6q, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: F.trialHeader,
                              children: V.NW.format(V.t['7ZS2m5'], { trialEnd: null == e_ ? void 0 : e_.currentPeriodEnd })
                          }),
                      !eu &&
                          '' !== e6 &&
                          (0, r.jsx)(u.vwX, {
                              tag: u.RB0.H5,
                              children: e6
                          }),
                      eV &&
                          null != eT &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(L.Z, {
                                      defaultAnimationState: A.SR.LOOP,
                                      giftStyle: eT,
                                      shouldAnimate: !0,
                                      className: F.giftMainAnimation
                                  }),
                                  (0, r.jsx)(j.s, { giftRecipient: eI })
                              ]
                          }),
                      Y,
                      (0, r.jsxs)('div', {
                          className: F.paymentSourceWrapper,
                          children: [
                              eu
                                  ? (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        className: F.formTitle,
                                        children: V.NW.string(V.t['YH7B+P'])
                                    })
                                  : (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        children: V.NW.string(V.t.mmDvV1)
                                    }),
                              (0, r.jsx)(p.Z, {
                                  paymentSources: Object.values(z),
                                  selectedPaymentSourceId: eH,
                                  prependOption:
                                      eW && !eu
                                          ? {
                                                label: V.NW.string(V.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: J,
                                  onPaymentSourceAdd: $,
                                  hidePersonalInformation: eZ,
                                  isTrial: eu
                              }),
                              eW && null == eH
                                  ? (0, r.jsx)('div', {
                                        className: F.paymentSourceOptionalWarning,
                                        children: V.NW.format(V.t['2wPRSE'], { months: eY.length })
                                    })
                                  : null,
                              ed
                                  ? null
                                  : (0, r.jsxs)(d.b, {
                                        currencies: Q,
                                        className: F.currencyWrapper,
                                        children: [
                                            (0, r.jsx)(u.vwX, {
                                                tag: u.RB0.H5,
                                                children: V.NW.string(V.t['/AAR09'])
                                            }),
                                            (0, r.jsx)(d.Z, {
                                                selectedCurrency: q.currency,
                                                currencies: Q,
                                                onChange: X
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, r.jsx)(w.Z, {
                          isActive: en,
                          ref: et,
                          children: (0, r.jsx)(_.Z, {
                              onChange: ee,
                              forceShow: !0,
                              checkboxLabel: e2,
                              checkboxClassname: e3,
                              checkboxLabelClassname: e4,
                              finePrint:
                                  null !== (H = !ey && ei) && void 0 !== H
                                      ? H
                                      : (0, r.jsx)(f.Z, {
                                            hide: eu || ed,
                                            subscriptionPlan: eP,
                                            renewalInvoice: eM,
                                            isGift: eS,
                                            paymentSourceType: null === (n = z[null != eH ? eH : '']) || void 0 === n ? void 0 : n.type,
                                            isEmbeddedIAP: ep,
                                            basePrice: (0, T.aS)(eP.id, !1, eS, q)
                                        }),
                              showPricingLink: eP.currency !== B.pK.USD,
                              showWithdrawalWaiver: e1,
                              disabled: ew,
                              isTrial: eu && null == ei,
                              inReverseTrial: ey,
                              isDiscount: ed,
                              subscriptionPlan: eP,
                              isGift: eS
                          })
                      })
                  ]
              })
    );
}
