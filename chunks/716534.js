n.d(t, { Z: () => W }), n(47120);
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
    _ = n(275850),
    p = n(672971),
    h = n(975298),
    m = n(987209),
    g = n(563132),
    E = n(45572),
    v = n(919778),
    b = n(614223),
    y = n(246946),
    O = n(351402),
    I = n(509545),
    S = n(669079),
    T = n(74538),
    N = n(937615),
    A = n(479446),
    C = n(374649),
    R = n(104494),
    P = n(642530),
    w = n(653798),
    D = n(346071),
    L = n(314182),
    x = n(981632),
    M = n(314404),
    k = n(42818),
    j = n(459965),
    U = n(251660),
    G = n(474936),
    B = n(981631),
    V = n(231338),
    F = n(388032),
    Z = n(787616);
function H(e, t, n) {
    let r = null,
        i = null,
        o = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: a } = T.ZP.getIntervalForInvoice(t),
            s = (0, N.og)((0, N.T4)(t.total, t.currency), e, a),
            l = null != n ? n : t.subscriptionPeriodEnd;
        (r = F.NW.format(F.t.ZzmrTk, {
            termsURL: B.EYA.TERMS,
            paidURL: B.EYA.PAID_TERMS,
            rate: s,
            renewalDate: l
        })),
            (i = Z.trialCheckbox),
            (o = Z.trialCheckboxLabel);
    }
    return {
        checkboxLabel: r,
        checkboxClassname: i,
        checkboxLabelClassname: o
    };
}
function W(e) {
    var t, n, o, B, W;
    let Y,
        K,
        { selectedPlanId: z, paymentSources: q, priceOptions: Q, currencies: X, onCurrencyChange: J, onPaymentSourceChange: $, handlePaymentSourceAdd: ee, setHasAcceptedTerms: et, legalTermsNodeRef: en, hasLegalTermsFlash: er, trialId: ei, trialFooterMessageOverride: eo, reviewWarningMessage: ea, metadata: es, purchaseState: el, hideSubscriptionDetails: ec, referralTrialOfferId: eu, isTrial: ed = !1, isDiscount: ef = !1, handleClose: e_ } = e,
        { isEmbeddedIAP: ep, activeSubscription: eh, selectedSkuId: em, defaultPlanId: eg, isPremium: eE, startedPaymentFlowWithPaymentSourcesRef: ev, setInvoicePreview: eb, contextMetadata: ey, inReverseTrial: eO, setPurchaseError: eI } = (0, g.JL)(),
        { isGift: eS, giftRecipient: eT, selectedGiftStyle: eN } = (0, m.wD)(),
        eA = (0, R.Ng)(),
        eC = null == eA ? void 0 : null === (t = eA.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => G.GP[e].skuId === em),
        eR = !eS && null != eA && null != em && eC,
        eP = (0, l.e7)([I.Z], () => I.Z.get(z));
    a()(null != eP, 'Missing plan');
    let ew = [
            {
                planId: eP.id,
                quantity: 1
            }
        ],
        eD = el === E.A.PURCHASING || el === E.A.COMPLETED,
        [eL, ex] = (0, C.ED)({
            items: ew,
            renewal: !1,
            preventFetch: eO || eS || eD,
            applyEntitlements: !0,
            paymentSourceId: Q.paymentSourceId,
            currency: Q.currency,
            trialId: ei,
            metadata: es
        }),
        [eM, ek] = (0, C.ED)({
            subscriptionId: null == eh ? void 0 : eh.id,
            items: ew,
            renewal: !0,
            preventFetch: eS || eD,
            trialId: ei,
            paymentSourceId: Q.paymentSourceId,
            currency: Q.currency,
            metadata: es
        }),
        [ej, eU] = (0, C.ED)({
            items: [
                {
                    planId: G.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eR,
            trialId: ei,
            paymentSourceId: Q.paymentSourceId,
            currency: Q.currency,
            metadata: es
        }),
        [eG, eB] = (0, C.o5)({
            paymentSourceId: Q.paymentSourceId,
            skuId: em,
            subscriptionPlanId: z,
            currency: Q.currency,
            preventFetch: !eS || eD,
            loadId: ey.loadId
        });
    i.useEffect(() => {
        eb(eG);
    }, [eb, eG]);
    let eV = eS && (0, S.pO)(eT),
        eF = null !== (B = null !== (o = null != ex ? ex : ek) && void 0 !== o ? o : eU) && void 0 !== B ? B : eB;
    i.useEffect(() => {
        eI(eF);
    }, [eF, eI]);
    let eZ = (0, l.e7)([y.Z], () => y.Z.enabled),
        eH = Q.paymentSourceId,
        { hasEntitlements: eW, entitlements: eY } = (0, j.H)(eP.id, eS),
        eK = (0, T.Ap)(Q.paymentSourceId),
        ez = (0, v.sE)(ei, eH, z),
        eq = (0, b.Kp)({
            isTrial: ed,
            isGift: eS,
            selectedSkuId: em,
            startedPaymentFlowWithPaymentSources: ev.current,
            inReverseTrial: eO
        }),
        [eQ, eX] = i.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == eQ && eX(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eQ]);
    let eJ = (0, h.Z)(),
        e$ = eq || eJ.fractionalState === G.a$.NONE ? null : (0, r.jsx)(D.n, { fractionalPremiumInfo: eJ }),
        e0 = i.useMemo(
            () =>
                (0, T.V7)({
                    skuId: em,
                    isPremium: eE,
                    multiMonthPlans: [],
                    currentSubscription: eh,
                    defaultPlanId: eg
                }),
            [em, eh, eg, eE]
        ),
        e1 = (0, b.$g)(eq, eL, eP),
        e2 = i.useMemo(() => (ed && null != eL ? eL : eO && null != eM ? eM : void 0), [eO, ed, eL, eM]);
    if (null != eF);
    else if (eS && null != eG)
        K = (0, r.jsx)(k.e9, {
            plan: eP,
            className: Z.invoice,
            isPrepaidPaymentSource: eK,
            isCustomGift: eV,
            invoicePreview: eG
        });
    else if (null != e2)
        K = (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(w.KU, { negativeMarginTop: !eO }),
                (0, r.jsxs)(w.PO, {
                    className: Z.invoice,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Z.trialPriceLine,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: F.NW.string(F.t.txajQE)
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: F.NW.format(F.t.hXcaLS, {
                                        price: (0, N.T4)(0, e2.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: Z.afterTrialPriceLine,
                            children: (0, r.jsx)(k.yT, {
                                invoice: e2,
                                plan: eP
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eL || null == eM || e1)
            return (0, r.jsx)('div', {
                className: Z.spinnerWrapper,
                children: (0, r.jsx)(u.$jN, {})
            });
        ed && eL.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (Y = eL.subscriptionPeriodEnd),
            (K = (0, r.jsxs)(r.Fragment, {
                children: [
                    e$,
                    (0, r.jsxs)(w.PO, {
                        className: Z.invoice,
                        children: [
                            (0, r.jsx)(w.q9, { children: F.NW.string(F.t['2eh+Cg']) }),
                            (0, r.jsx)(k.Lu, {
                                invoice: eL,
                                newPlan: eP,
                                isPrepaidPaymentSource: eK,
                                referralTrialOfferId: eu
                            }),
                            eK
                                ? null
                                : (0, r.jsx)(k.nd, {
                                      renewalInvoice: eM,
                                      isTrial: ed,
                                      priceOptions: Q,
                                      overrideRenewalDate: Y,
                                      trialFooterMessageOverride: eo,
                                      hideSubscriptionDetails: ec
                                  })
                        ]
                    })
                ]
            }));
    }
    let e3 = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
        { checkboxLabel: e4, checkboxClassname: e6, checkboxLabelClassname: e5 } = H(null != ed && ed, eM, Y),
        e7 = F.NW.formatToPlainString(F.t['sBpy9/'], { planName: eP.name });
    return (
        eS && !eV ? (e7 = F.NW.string(F.t.J5a0eX)) : eS && eV ? (e7 = '') : (0, T.PV)(eP.id) && (e7 = T.ZP.getBillingReviewSubheader(null, eP)),
        ez
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.stepBody,
                  children: [
                      null != ea &&
                          (0, r.jsxs)('div', {
                              className: Z.reviewWarningMessageContainer,
                              children: [
                                  (0, r.jsx)(u.d3s, {
                                      size: 'custom',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      className: Z.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: ea
                                  })
                              ]
                          }),
                      eq &&
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(w.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, r.jsx)(P.Z, {}),
                                  (0, r.jsx)(M.O, {
                                      planOptions: e0,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: z,
                                      subscriptionPeriodEnd: eQ,
                                      showTotal: !1,
                                      discountInvoiceItems: eR ? (null == ej ? void 0 : ej.invoiceItems) : void 0,
                                      handleClose: e_
                                  }),
                                  (0, r.jsx)(w.KU, {})
                              ]
                          }),
                      eO &&
                          (0, r.jsx)(u.X6q, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: Z.trialHeader,
                              children: F.NW.format(F.t['7ZS2m5'], { trialEnd: null == eh ? void 0 : eh.currentPeriodEnd })
                          }),
                      !ed &&
                          '' !== e7 &&
                          (0, r.jsx)(u.vwX, {
                              tag: u.RB0.H5,
                              children: e7
                          }),
                      eV &&
                          null != eN &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(x.Z, {
                                      defaultAnimationState: A.SR.LOOP,
                                      giftStyle: eN,
                                      shouldAnimate: !0,
                                      className: Z.giftMainAnimation
                                  }),
                                  (0, r.jsx)(U.s, { giftRecipient: eT })
                              ]
                          }),
                      K,
                      (0, r.jsxs)('div', {
                          className: Z.paymentSourceWrapper,
                          children: [
                              ed
                                  ? (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        className: Z.formTitle,
                                        children: F.NW.string(F.t['YH7B+P'])
                                    })
                                  : (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        children: F.NW.string(F.t.mmDvV1)
                                    }),
                              (0, r.jsx)(_.Z, {
                                  paymentSources: Object.values(q),
                                  selectedPaymentSourceId: eH,
                                  prependOption:
                                      eW && !ed
                                          ? {
                                                label: F.NW.string(F.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: $,
                                  onPaymentSourceAdd: ee,
                                  hidePersonalInformation: eZ,
                                  isTrial: ed
                              }),
                              eW && null == eH
                                  ? (0, r.jsx)('div', {
                                        className: Z.paymentSourceOptionalWarning,
                                        children: F.NW.format(F.t['2wPRSE'], { months: eY.length })
                                    })
                                  : null,
                              ef
                                  ? null
                                  : (0, r.jsxs)(d.b, {
                                        currencies: X,
                                        className: Z.currencyWrapper,
                                        children: [
                                            (0, r.jsx)(u.vwX, {
                                                tag: u.RB0.H5,
                                                children: F.NW.string(F.t['/AAR09'])
                                            }),
                                            (0, r.jsx)(d.Z, {
                                                selectedCurrency: Q.currency,
                                                currencies: X,
                                                onChange: J
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, r.jsx)(L.Z, {
                          isActive: er,
                          ref: en,
                          children: (0, r.jsx)(p.Z, {
                              onChange: et,
                              forceShow: !0,
                              checkboxLabel: e4,
                              checkboxClassname: e6,
                              checkboxLabelClassname: e5,
                              finePrint:
                                  null !== (W = !eO && eo) && void 0 !== W
                                      ? W
                                      : (0, r.jsx)(f.Z, {
                                            hide: ed || ef,
                                            subscriptionPlan: eP,
                                            renewalInvoice: eM,
                                            isGift: eS,
                                            paymentSourceType: null === (n = q[null != eH ? eH : '']) || void 0 === n ? void 0 : n.type,
                                            isEmbeddedIAP: ep,
                                            basePrice: (0, T.aS)(eP.id, !1, eS, Q)
                                        }),
                              showPricingLink: eP.currency !== V.pK.USD,
                              showWithdrawalWaiver: e3,
                              disabled: eD,
                              isTrial: ed && null == eo,
                              inReverseTrial: eO,
                              isDiscount: ef,
                              subscriptionPlan: eP,
                              isGift: eS
                          })
                      })
                  ]
              })
    );
}
