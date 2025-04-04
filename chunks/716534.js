n.d(t, { Z: () => Y }), n(47120);
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
    b = n(919778),
    y = n(614223),
    v = n(435020),
    O = n(246946),
    I = n(351402),
    S = n(509545),
    T = n(669079),
    N = n(74538),
    A = n(937615),
    C = n(479446),
    R = n(374649),
    P = n(104494),
    w = n(642530),
    D = n(653798),
    L = n(346071),
    x = n(314182),
    M = n(981632),
    k = n(314404),
    j = n(42818),
    U = n(459965),
    G = n(251660),
    B = n(474936),
    F = n(981631),
    V = n(231338),
    Z = n(388032),
    H = n(236691);
function W(e, t, n) {
    let r = null,
        i = null,
        o = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: a } = N.ZP.getIntervalForInvoice(t),
            s = (0, A.og)((0, A.T4)(t.total, t.currency), e, a),
            l = null != n ? n : t.subscriptionPeriodEnd;
        (r = Z.NW.format(Z.t.ZzmrTk, {
            termsURL: F.EYA.TERMS,
            paidURL: F.EYA.PAID_TERMS,
            rate: s,
            renewalDate: l
        })),
            (i = H.trialCheckbox),
            (o = H.trialCheckboxLabel);
    }
    return {
        checkboxLabel: r,
        checkboxClassname: i,
        checkboxLabelClassname: o
    };
}
function Y(e) {
    var t, n, o, F;
    let Y,
        K,
        { selectedPlanId: z, paymentSources: q, priceOptions: Q, currencies: X, onCurrencyChange: J, onPaymentSourceChange: $, handlePaymentSourceAdd: ee, setHasAcceptedTerms: et, legalTermsNodeRef: en, hasLegalTermsFlash: er, trialId: ei, trialFooterMessageOverride: eo, reviewWarningMessage: ea, metadata: es, purchaseState: el, hideSubscriptionDetails: ec, referralTrialOfferId: eu, isTrial: ed = !1, isDiscount: ef = !1, handleClose: e_ } = e,
        { isEmbeddedIAP: ep, activeSubscription: eh, selectedSkuId: em, defaultPlanId: eg, isPremium: eE, startedPaymentFlowWithPaymentSourcesRef: eb, setInvoicePreview: ey, contextMetadata: ev, inReverseTrial: eO, setPurchaseError: eI } = (0, g.JL)(),
        { isGift: eS, giftRecipient: eT, selectedGiftStyle: eN } = (0, m.wD)(),
        eA = (0, P.Ng)(),
        eC = null == eA || null == (t = eA.discount) ? void 0 : t.plan_ids.some((e) => B.GP[e].skuId === em),
        eR = !eS && null != eA && null != em && eC,
        eP = (0, l.e7)([S.Z], () => S.Z.get(z));
    a()(null != eP, 'Missing plan');
    let ew = [
            {
                planId: eP.id,
                quantity: 1
            }
        ],
        eD = el === E.A.PURCHASING || el === E.A.COMPLETED,
        [eL, ex] = (0, R.ED)({
            items: ew,
            renewal: !1,
            preventFetch: eO || eS || eD,
            applyEntitlements: !0,
            paymentSourceId: Q.paymentSourceId,
            currency: Q.currency,
            trialId: ei,
            metadata: es
        }),
        [eM, ek] = (0, R.ED)({
            subscriptionId: null == eh ? void 0 : eh.id,
            items: ew,
            renewal: !0,
            preventFetch: eS || eD,
            trialId: ei,
            paymentSourceId: Q.paymentSourceId,
            currency: Q.currency,
            metadata: es
        }),
        [ej, eU] = (0, R.ED)({
            items: [
                {
                    planId: B.Xh.PREMIUM_MONTH_TIER_2,
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
        [eG, eB] = (0, R.o5)({
            paymentSourceId: Q.paymentSourceId,
            skuId: em,
            subscriptionPlanId: z,
            currency: Q.currency,
            preventFetch: !eS || eD,
            loadId: ev.loadId
        });
    i.useEffect(() => {
        ey(eG);
    }, [ey, eG]);
    let eF = eS && (0, T.pO)(eT),
        eV = null != (o = null != (n = null != ex ? ex : ek) ? n : eU) ? o : eB;
    i.useEffect(() => {
        eI(eV);
    }, [eV, eI]);
    let eZ = (0, l.e7)([O.Z], () => O.Z.enabled),
        eH = Q.paymentSourceId,
        eW = (0, v.$)(q, eH),
        { hasEntitlements: eY, entitlements: eK } = (0, U.H)(eP.id, eS),
        ez = (0, N.Ap)(Q.paymentSourceId),
        eq = (0, b.sE)(ei, eH, z),
        eQ = (0, y.Kp)({
            isTrial: ed,
            isGift: eS,
            selectedSkuId: em,
            startedPaymentFlowWithPaymentSources: eb.current,
            inReverseTrial: eO
        }),
        [eX, eJ] = i.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == eX && eJ(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eX]);
    let e$ = (0, h.Z)(),
        e0 = eQ || e$.fractionalState === B.a$.NONE ? null : (0, r.jsx)(L.n, { fractionalPremiumInfo: e$ }),
        e1 = i.useMemo(
            () =>
                (0, N.V7)({
                    skuId: em,
                    isPremium: eE,
                    multiMonthPlans: [],
                    currentSubscription: eh,
                    defaultPlanId: eg
                }),
            [em, eh, eg, eE]
        ),
        e2 = (0, y.$g)(eQ, eL, eP),
        e3 = i.useMemo(() => (ed && null != eL ? eL : eO && null != eM ? eM : void 0), [eO, ed, eL, eM]);
    if (null != eV);
    else if (eS && null != eG)
        K = (0, r.jsx)(j.e9, {
            plan: eP,
            className: H.invoice,
            isPrepaidPaymentSource: ez,
            isCustomGift: eF,
            invoicePreview: eG
        });
    else if (null != e3)
        K = (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(D.KU, { negativeMarginTop: !eO }),
                (0, r.jsxs)(D.PO, {
                    className: H.invoice,
                    children: [
                        (0, r.jsxs)('div', {
                            className: H.trialPriceLine,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: Z.NW.string(Z.t.txajQE)
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: Z.NW.format(Z.t.hXcaLS, {
                                        price: (0, A.T4)(0, e3.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: H.afterTrialPriceLine,
                            children: (0, r.jsx)(j.yT, {
                                invoice: e3,
                                plan: eP
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eL || null == eM || e2)
            return (0, r.jsx)('div', {
                className: H.spinnerWrapper,
                children: (0, r.jsx)(u.$jN, {})
            });
        ed && eL.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (Y = eL.subscriptionPeriodEnd),
            (K = (0, r.jsxs)(r.Fragment, {
                children: [
                    e0,
                    (0, r.jsxs)(D.PO, {
                        className: H.invoice,
                        children: [
                            (0, r.jsx)(D.q9, { children: Z.NW.string(Z.t['2eh+Cg']) }),
                            (0, r.jsx)(j.Lu, {
                                invoice: eL,
                                newPlan: eP,
                                isPrepaidPaymentSource: ez,
                                referralTrialOfferId: eu
                            }),
                            ez
                                ? null
                                : (0, r.jsx)(j.nd, {
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
    let e4 = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        { checkboxLabel: e6, checkboxClassname: e5, checkboxLabelClassname: e7 } = W(null != ed && ed, eM, Y),
        e8 = Z.NW.formatToPlainString(Z.t['sBpy9/'], { planName: eP.name });
    return (
        eS && !eF ? (e8 = Z.NW.string(Z.t.J5a0eX)) : eS && eF ? (e8 = '') : (0, N.PV)(eP.id) && (e8 = N.ZP.getBillingReviewSubheader(null, eP)),
        eq
            ? null
            : (0, r.jsxs)('div', {
                  className: H.stepBody,
                  children: [
                      null != ea &&
                          (0, r.jsxs)('div', {
                              className: H.reviewWarningMessageContainer,
                              children: [
                                  (0, r.jsx)(u.d3s, {
                                      size: 'custom',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      className: H.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: ea
                                  })
                              ]
                          }),
                      eQ &&
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(D.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, r.jsx)(w.Z, {}),
                                  (0, r.jsx)(k.O, {
                                      planOptions: e1,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: z,
                                      subscriptionPeriodEnd: eX,
                                      showTotal: !1,
                                      discountInvoiceItems: eR ? (null == ej ? void 0 : ej.invoiceItems) : void 0,
                                      handleClose: e_
                                  }),
                                  (0, r.jsx)(D.KU, {})
                              ]
                          }),
                      eO &&
                          (0, r.jsx)(u.X6q, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: H.trialHeader,
                              children: Z.NW.format(Z.t['7ZS2m5'], { trialEnd: null == eh ? void 0 : eh.currentPeriodEnd })
                          }),
                      !ed &&
                          '' !== e8 &&
                          (0, r.jsx)(u.vwX, {
                              tag: u.RB0.H5,
                              children: e8
                          }),
                      eF &&
                          null != eN &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(M.Z, {
                                      defaultAnimationState: C.SR.LOOP,
                                      giftStyle: eN,
                                      shouldAnimate: !0,
                                      className: H.giftMainAnimation
                                  }),
                                  (0, r.jsx)(G.s, { giftRecipient: eT })
                              ]
                          }),
                      K,
                      (0, r.jsxs)('div', {
                          className: H.paymentSourceWrapper,
                          children: [
                              ed
                                  ? (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        className: H.formTitle,
                                        children: Z.NW.string(Z.t['YH7B+P'])
                                    })
                                  : (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        children: Z.NW.string(Z.t.mmDvV1)
                                    }),
                              (0, r.jsx)(_.Z, {
                                  paymentSources: Object.values(q),
                                  selectedPaymentSourceId: eH,
                                  prependOption:
                                      eY && !ed
                                          ? {
                                                label: Z.NW.string(Z.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: $,
                                  onPaymentSourceAdd: ee,
                                  hidePersonalInformation: eZ,
                                  isTrial: ed
                              }),
                              eY && null == eH
                                  ? (0, r.jsx)('div', {
                                        className: H.paymentSourceOptionalWarning,
                                        children: Z.NW.format(Z.t['2wPRSE'], { months: eK.length })
                                    })
                                  : null,
                              ef
                                  ? null
                                  : (0, r.jsxs)(d.b, {
                                        currencies: X,
                                        className: H.currencyWrapper,
                                        children: [
                                            (0, r.jsx)(u.vwX, {
                                                tag: u.RB0.H5,
                                                children: Z.NW.string(Z.t['/AAR09'])
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
                      (0, r.jsx)(x.Z, {
                          isActive: er,
                          ref: en,
                          children: (0, r.jsx)(p.Z, {
                              onChange: et,
                              forceShow: !0,
                              checkboxLabel: e6,
                              checkboxClassname: e5,
                              checkboxLabelClassname: e7,
                              finePrint:
                                  null != (F = !eO && eo)
                                      ? F
                                      : (0, r.jsx)(f.Z, {
                                            hide: ed || ef,
                                            subscriptionPlan: eP,
                                            renewalInvoice: eM,
                                            isGift: eS,
                                            paymentSourceType: eW,
                                            isEmbeddedIAP: ep,
                                            basePrice: (0, N.aS)(eP.id, !1, eS, Q)
                                        }),
                              showPricingLink: eP.currency !== V.pK.USD,
                              showWithdrawalWaiver: e4,
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
