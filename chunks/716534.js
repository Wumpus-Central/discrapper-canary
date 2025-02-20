n.d(t, { Z: () => V }), n(47120);
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
    g = n(45572),
    E = n(919778),
    v = n(614223),
    b = n(246946),
    y = n(351402),
    O = n(509545),
    S = n(669079),
    I = n(74538),
    T = n(937615),
    N = n(479446),
    A = n(374649),
    C = n(104494),
    R = n(642530),
    P = n(653798),
    w = n(314182),
    D = n(981632),
    x = n(314404),
    L = n(42818),
    M = n(459965),
    k = n(251660),
    j = n(474936),
    U = n(981631),
    G = n(231338),
    B = n(388032),
    Z = n(214803);
function F(e, t, n) {
    let r = null,
        i = null,
        o = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: a } = I.ZP.getIntervalForInvoice(t),
            s = (0, T.og)((0, T.T4)(t.total, t.currency), e, a),
            l = null != n ? n : t.subscriptionPeriodEnd;
        (r = B.NW.format(B.t.ZzmrTk, {
            termsURL: U.EYA.TERMS,
            paidURL: U.EYA.PAID_TERMS,
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
function V(e) {
    var t, n, o, U, V;
    let H,
        W,
        { selectedPlanId: Y, paymentSources: K, priceOptions: z, currencies: q, onCurrencyChange: Q, onPaymentSourceChange: X, handlePaymentSourceAdd: J, setHasAcceptedTerms: $, legalTermsNodeRef: ee, hasLegalTermsFlash: et, trialId: en, trialFooterMessageOverride: er, reviewWarningMessage: ei, metadata: eo, purchaseState: ea, hideSubscriptionDetails: es, referralTrialOfferId: el, isTrial: ec = !1, isDiscount: eu = !1, handleClose: ed } = e,
        { isEmbeddedIAP: ef, activeSubscription: ep, selectedSkuId: e_, defaultPlanId: eh, isPremium: em, startedPaymentFlowWithPaymentSourcesRef: eg, setInvoicePreview: eE, contextMetadata: ev, inReverseTrial: eb, setPurchaseError: ey } = (0, m.JL)(),
        { isGift: eO, giftRecipient: eS, selectedGiftStyle: eI } = (0, h.wD)(),
        eT = (0, C.Ng)(),
        eN = null == eT ? void 0 : null === (t = eT.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => j.GP[e].skuId === e_),
        eA = !eO && null != eT && null != e_ && eN,
        eC = (0, l.e7)([O.Z], () => O.Z.get(Y));
    a()(null != eC, 'Missing plan');
    let eR = [
            {
                planId: eC.id,
                quantity: 1
            }
        ],
        eP = ea === g.A.PURCHASING || ea === g.A.COMPLETED,
        [ew, eD] = (0, A.ED)({
            items: eR,
            renewal: !1,
            preventFetch: eb || eO || eP,
            applyEntitlements: !0,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            trialId: en,
            metadata: eo
        }),
        [ex, eL] = (0, A.ED)({
            subscriptionId: null == ep ? void 0 : ep.id,
            items: eR,
            renewal: !0,
            preventFetch: eO || eP,
            trialId: en,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            metadata: eo
        }),
        [eM, ek] = (0, A.ED)({
            items: [
                {
                    planId: j.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eA,
            trialId: en,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            metadata: eo
        }),
        [ej, eU] = (0, A.o5)({
            paymentSourceId: z.paymentSourceId,
            skuId: e_,
            subscriptionPlanId: Y,
            currency: z.currency,
            preventFetch: !eO || eP,
            loadId: ev.loadId
        });
    i.useEffect(() => {
        eE(ej);
    }, [eE, ej]);
    let eG = eO && (0, S.pO)(eS),
        eB = null !== (U = null !== (o = null != eD ? eD : eL) && void 0 !== o ? o : ek) && void 0 !== U ? U : eU;
    i.useEffect(() => {
        ey(eB);
    }, [eB, ey]);
    let eZ = (0, l.e7)([b.Z], () => b.Z.enabled),
        eF = z.paymentSourceId,
        { hasEntitlements: eV, entitlements: eH } = (0, M.H)(eC.id, eO),
        eW = (0, I.Ap)(z.paymentSourceId),
        eY = (0, E.sE)(en, eF, Y),
        eK = (0, v.Kp)({
            isTrial: ec,
            isGift: eO,
            selectedSkuId: e_,
            startedPaymentFlowWithPaymentSources: eg.current,
            inReverseTrial: eb
        }),
        [ez, eq] = i.useState(null == ew ? void 0 : ew.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == ez && eq(null == ew ? void 0 : ew.subscriptionPeriodEnd);
    }, [null == ew ? void 0 : ew.subscriptionPeriodEnd, ez]);
    let eQ = i.useMemo(
            () =>
                (0, I.V7)({
                    skuId: e_,
                    isPremium: em,
                    multiMonthPlans: [],
                    currentSubscription: ep,
                    isGift: eO,
                    isEligibleForTrial: ec,
                    defaultPlanId: eh,
                    defaultToMonthlyPlan: !1
                }),
            [e_, ep, eO, eh, em, ec]
        ),
        eX = (0, v.$g)(eK, ew, eC),
        eJ = i.useMemo(() => (ec && null != ew ? ew : eb && null != ex ? ex : void 0), [eb, ec, ew, ex]);
    if (null != eB);
    else if (eO && null != ej)
        W = (0, r.jsx)(L.e9, {
            plan: eC,
            className: Z.invoice,
            isPrepaidPaymentSource: eW,
            isCustomGift: eG,
            invoicePreview: ej
        });
    else if (null != eJ)
        W = (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(P.KU, { negativeMarginTop: !eb }),
                (0, r.jsxs)(P.PO, {
                    className: Z.invoice,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Z.trialPriceLine,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: B.NW.string(B.t.txajQE)
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: B.NW.format(B.t.hXcaLS, {
                                        price: (0, T.T4)(0, eJ.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: Z.afterTrialPriceLine,
                            children: (0, r.jsx)(L.yT, {
                                invoice: eJ,
                                plan: eC
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == ew || null == ex || eX)
            return (0, r.jsx)('div', {
                className: Z.spinnerWrapper,
                children: (0, r.jsx)(u.$jN, {})
            });
        ec && ew.subscriptionPeriodEnd !== ex.subscriptionPeriodEnd && (H = ew.subscriptionPeriodEnd),
            (W = (0, r.jsxs)(P.PO, {
                className: Z.invoice,
                children: [
                    (0, r.jsx)(P.q9, { children: B.NW.string(B.t['2eh+Cg']) }),
                    (0, r.jsx)(L.Lu, {
                        invoice: ew,
                        newPlan: eC,
                        isPrepaidPaymentSource: eW,
                        referralTrialOfferId: el
                    }),
                    eW
                        ? null
                        : (0, r.jsx)(L.nd, {
                              renewalInvoice: ex,
                              isTrial: ec,
                              priceOptions: z,
                              overrideRenewalDate: H,
                              trialFooterMessageOverride: er,
                              hideSubscriptionDetails: es
                          })
                ]
            }));
    }
    let e$ = s.M.EEA_COUNTRIES.has(y.Z.ipCountryCodeWithFallback),
        { checkboxLabel: e0, checkboxClassname: e1, checkboxLabelClassname: e2 } = F(null != ec && ec, ex, H),
        e3 = B.NW.formatToPlainString(B.t['sBpy9/'], { planName: eC.name });
    return (
        eO && !eG ? (e3 = B.NW.string(B.t.J5a0eX)) : eO && eG ? (e3 = '') : (0, I.PV)(eC.id) && (e3 = I.ZP.getBillingReviewSubheader(null, eC)),
        eY
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.stepBody,
                  children: [
                      null != ei &&
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
                                      children: ei
                                  })
                              ]
                          }),
                      eK &&
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(P.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, r.jsx)(R.Z, {}),
                                  (0, r.jsx)(x.O, {
                                      planOptions: eQ,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: Y,
                                      subscriptionPeriodEnd: ez,
                                      showTotal: !1,
                                      discountInvoiceItems: eA ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                      handleClose: ed
                                  }),
                                  (0, r.jsx)(P.KU, {})
                              ]
                          }),
                      eb &&
                          (0, r.jsx)(u.X6q, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: Z.trialHeader,
                              children: B.NW.format(B.t['7ZS2m5'], { trialEnd: null == ep ? void 0 : ep.currentPeriodEnd })
                          }),
                      !ec &&
                          '' !== e3 &&
                          (0, r.jsx)(u.vwX, {
                              tag: u.RB0.H5,
                              children: e3
                          }),
                      eG &&
                          null != eI &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(D.Z, {
                                      defaultAnimationState: N.SR.LOOP,
                                      giftStyle: eI,
                                      shouldAnimate: !0,
                                      className: Z.giftMainAnimation
                                  }),
                                  (0, r.jsx)(k.s, { giftRecipient: eS })
                              ]
                          }),
                      W,
                      (0, r.jsxs)('div', {
                          className: Z.paymentSourceWrapper,
                          children: [
                              ec
                                  ? (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        className: Z.formTitle,
                                        children: B.NW.string(B.t['YH7B+P'])
                                    })
                                  : (0, r.jsx)(u.vwX, {
                                        tag: u.RB0.H5,
                                        children: B.NW.string(B.t.mmDvV1)
                                    }),
                              (0, r.jsx)(p.Z, {
                                  paymentSources: Object.values(K),
                                  selectedPaymentSourceId: eF,
                                  prependOption:
                                      eV && !ec
                                          ? {
                                                label: B.NW.string(B.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: X,
                                  onPaymentSourceAdd: J,
                                  hidePersonalInformation: eZ,
                                  isTrial: ec
                              }),
                              eV && null == eF
                                  ? (0, r.jsx)('div', {
                                        className: Z.paymentSourceOptionalWarning,
                                        children: B.NW.format(B.t['2wPRSE'], { months: eH.length })
                                    })
                                  : null,
                              eu
                                  ? null
                                  : (0, r.jsxs)(d.b, {
                                        currencies: q,
                                        className: Z.currencyWrapper,
                                        children: [
                                            (0, r.jsx)(u.vwX, {
                                                tag: u.RB0.H5,
                                                children: B.NW.string(B.t['/AAR09'])
                                            }),
                                            (0, r.jsx)(d.Z, {
                                                selectedCurrency: z.currency,
                                                currencies: q,
                                                onChange: Q
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, r.jsx)(w.Z, {
                          isActive: et,
                          ref: ee,
                          children: (0, r.jsx)(_.Z, {
                              onChange: $,
                              forceShow: !0,
                              checkboxLabel: e0,
                              checkboxClassname: e1,
                              checkboxLabelClassname: e2,
                              finePrint:
                                  null !== (V = !eb && er) && void 0 !== V
                                      ? V
                                      : (0, r.jsx)(f.Z, {
                                            hide: ec || eu,
                                            subscriptionPlan: eC,
                                            renewalInvoice: ex,
                                            isGift: eO,
                                            paymentSourceType: null === (n = K[null != eF ? eF : '']) || void 0 === n ? void 0 : n.type,
                                            isEmbeddedIAP: ef,
                                            basePrice: (0, I.aS)(eC.id, !1, eO, z)
                                        }),
                              showPricingLink: eC.currency !== G.pK.USD,
                              showWithdrawalWaiver: e$,
                              disabled: eP,
                              isTrial: ec && null == er,
                              inReverseTrial: eb,
                              isDiscount: eu,
                              subscriptionPlan: eC,
                              isGift: eO
                          })
                      })
                  ]
              })
    );
}
