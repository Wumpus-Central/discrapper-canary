n.d(t, { Z: () => j }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(742280),
    l = n(442837),
    u = n(692547),
    c = n(481060),
    d = n(190947),
    f = n(224550),
    _ = n(275850),
    p = n(672971),
    h = n(987209),
    m = n(563132),
    g = n(45572),
    E = n(919778),
    v = n(614223),
    y = n(246946),
    I = n(351402),
    b = n(509545),
    T = n(669079),
    S = n(74538),
    A = n(937615),
    N = n(479446),
    C = n(374649),
    R = n(104494),
    O = n(642530),
    D = n(653798),
    x = n(314182),
    L = n(981632),
    P = n(314404),
    w = n(42818),
    M = n(459965),
    k = n(251660),
    U = n(474936),
    G = n(981631),
    B = n(231338),
    Z = n(388032),
    F = n(809186);
function V(e, t, n) {
    let i = null,
        r = null,
        a = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: s } = S.ZP.getIntervalForInvoice(t),
            o = (0, A.og)((0, A.T4)(t.total, t.currency), e, s),
            l = null != n ? n : t.subscriptionPeriodEnd;
        (i = Z.intl.format(Z.t.ZzmrTk, {
            termsURL: G.EYA.TERMS,
            paidURL: G.EYA.PAID_TERMS,
            rate: o,
            renewalDate: l
        })),
            (r = F.trialCheckbox),
            (a = F.trialCheckboxLabel);
    }
    return {
        checkboxLabel: i,
        checkboxClassname: r,
        checkboxLabelClassname: a
    };
}
function j(e) {
    var t, n, a, G, j;
    let H,
        Y,
        { selectedPlanId: W, paymentSources: K, priceOptions: z, currencies: q, onCurrencyChange: Q, onPaymentSourceChange: X, handlePaymentSourceAdd: J, setHasAcceptedTerms: $, legalTermsNodeRef: ee, hasLegalTermsFlash: et, trialId: en, trialFooterMessageOverride: ei, reviewWarningMessage: er, metadata: ea, purchaseState: es, hideSubscriptionDetails: eo, referralTrialOfferId: el, isTrial: eu = !1, isDiscount: ec = !1, handleClose: ed } = e,
        { isEmbeddedIAP: ef, activeSubscription: e_, selectedSkuId: ep, defaultPlanId: eh, isPremium: em, startedPaymentFlowWithPaymentSourcesRef: eg, setInvoicePreview: eE, contextMetadata: ev, inReverseTrial: ey, setPurchaseError: eI } = (0, m.JL)(),
        { isGift: eb, giftRecipient: eT, selectedGiftStyle: eS } = (0, h.wD)(),
        eA = (0, R.Ng)(),
        eN = null == eA ? void 0 : null === (t = eA.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => U.GP[e].skuId === ep),
        eC = !eb && null != eA && null != ep && eN,
        eR = (0, l.e7)([b.Z], () => b.Z.get(W));
    s()(null != eR, 'Missing plan');
    let eO = [
            {
                planId: eR.id,
                quantity: 1
            }
        ],
        eD = es === g.A.PURCHASING || es === g.A.COMPLETED,
        [ex, eL] = (0, C.ED)({
            items: eO,
            renewal: !1,
            preventFetch: ey || eb || eD,
            applyEntitlements: !0,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            trialId: en,
            metadata: ea
        }),
        [eP, ew] = (0, C.ED)({
            subscriptionId: null == e_ ? void 0 : e_.id,
            items: eO,
            renewal: !0,
            preventFetch: eb || eD,
            trialId: en,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            metadata: ea
        }),
        [eM, ek] = (0, C.ED)({
            items: [
                {
                    planId: U.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eC,
            trialId: en,
            paymentSourceId: z.paymentSourceId,
            currency: z.currency,
            metadata: ea
        }),
        [eU, eG] = (0, C.o5)({
            paymentSourceId: z.paymentSourceId,
            skuId: ep,
            subscriptionPlanId: W,
            currency: z.currency,
            preventFetch: !eb || eD,
            loadId: ev.loadId
        });
    r.useEffect(() => {
        eE(eU);
    }, [eE, eU]);
    let eB = eb && (0, T.pO)(eT),
        eZ = null !== (G = null !== (a = null != eL ? eL : ew) && void 0 !== a ? a : ek) && void 0 !== G ? G : eG;
    r.useEffect(() => {
        eI(eZ);
    }, [eZ, eI]);
    let eF = (0, l.e7)([y.Z], () => y.Z.enabled),
        eV = z.paymentSourceId,
        { hasEntitlements: ej, entitlements: eH } = (0, M.H)(eR.id, eb),
        eY = (0, S.Ap)(z.paymentSourceId),
        eW = (0, E.sE)(en, eV, W),
        eK = (0, v.Kp)({
            isTrial: eu,
            isGift: eb,
            selectedSkuId: ep,
            startedPaymentFlowWithPaymentSources: eg.current,
            inReverseTrial: ey
        }),
        [ez, eq] = r.useState(null == ex ? void 0 : ex.subscriptionPeriodEnd);
    r.useEffect(() => {
        null == ez && eq(null == ex ? void 0 : ex.subscriptionPeriodEnd);
    }, [null == ex ? void 0 : ex.subscriptionPeriodEnd, ez]);
    let eQ = r.useMemo(
            () =>
                (0, S.V7)({
                    skuId: ep,
                    isPremium: em,
                    multiMonthPlans: [],
                    currentSubscription: e_,
                    isGift: eb,
                    isEligibleForTrial: eu,
                    defaultPlanId: eh,
                    defaultToMonthlyPlan: !1
                }),
            [ep, e_, eb, eh, em, eu]
        ),
        eX = (0, v.$g)(eK, ex, eR),
        eJ = r.useMemo(() => (eu && null != ex ? ex : ey && null != eP ? eP : void 0), [ey, eu, ex, eP]);
    if (null != eZ);
    else if (eb && null != eU)
        Y = (0, i.jsx)(w.e9, {
            plan: eR,
            className: F.invoice,
            isPrepaidPaymentSource: eY,
            isCustomGift: eB,
            invoicePreview: eU
        });
    else if (null != eJ)
        Y = (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(D.KU, { negativeMarginTop: !ey }),
                (0, i.jsxs)(D.PO, {
                    className: F.invoice,
                    children: [
                        (0, i.jsxs)('div', {
                            className: F.trialPriceLine,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/bold',
                                    children: Z.intl.string(Z.t.txajQE)
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    children: Z.intl.format(Z.t.hXcaLS, {
                                        price: (0, A.T4)(0, eJ.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: F.afterTrialPriceLine,
                            children: (0, i.jsx)(w.yT, {
                                invoice: eJ,
                                plan: eR
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == ex || null == eP || eX)
            return (0, i.jsx)('div', {
                className: F.spinnerWrapper,
                children: (0, i.jsx)(c.$jN, {})
            });
        eu && ex.subscriptionPeriodEnd !== eP.subscriptionPeriodEnd && (H = ex.subscriptionPeriodEnd),
            (Y = (0, i.jsxs)(D.PO, {
                className: F.invoice,
                children: [
                    (0, i.jsx)(D.q9, { children: Z.intl.string(Z.t['2eh+Cg']) }),
                    (0, i.jsx)(w.Lu, {
                        invoice: ex,
                        newPlan: eR,
                        isPrepaidPaymentSource: eY,
                        referralTrialOfferId: el
                    }),
                    eY
                        ? null
                        : (0, i.jsx)(w.nd, {
                              renewalInvoice: eP,
                              isTrial: eu,
                              priceOptions: z,
                              overrideRenewalDate: H,
                              trialFooterMessageOverride: ei,
                              hideSubscriptionDetails: eo
                          })
                ]
            }));
    }
    let e$ = o.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        { checkboxLabel: e0, checkboxClassname: e1, checkboxLabelClassname: e2 } = V(null != eu && eu, eP, H),
        e3 = Z.intl.formatToPlainString(Z.t['sBpy9/'], { planName: eR.name });
    return (
        eb && !eB ? (e3 = Z.intl.string(Z.t.J5a0eX)) : eb && eB ? (e3 = '') : (0, S.PV)(eR.id) && (e3 = S.ZP.getBillingReviewSubheader(null, eR)),
        eW
            ? null
            : (0, i.jsxs)('div', {
                  className: F.stepBody,
                  children: [
                      null != er &&
                          (0, i.jsxs)('div', {
                              className: F.reviewWarningMessageContainer,
                              children: [
                                  (0, i.jsx)(c.d3s, {
                                      size: 'custom',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      className: F.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: er
                                  })
                              ]
                          }),
                      eK &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(D.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, i.jsx)(O.Z, {}),
                                  (0, i.jsx)(P.O, {
                                      planOptions: eQ,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: W,
                                      subscriptionPeriodEnd: ez,
                                      showTotal: !1,
                                      discountInvoiceItems: eC ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                      handleClose: ed
                                  }),
                                  (0, i.jsx)(D.KU, {})
                              ]
                          }),
                      ey &&
                          (0, i.jsx)(c.X6q, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: F.trialHeader,
                              children: Z.intl.format(Z.t['7ZS2m5'], { trialEnd: null == e_ ? void 0 : e_.currentPeriodEnd })
                          }),
                      !eu &&
                          '' !== e3 &&
                          (0, i.jsx)(c.vwX, {
                              tag: c.RB0.H5,
                              children: e3
                          }),
                      eB &&
                          null != eS &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(L.Z, {
                                      defaultAnimationState: N.SR.LOOP,
                                      giftStyle: eS,
                                      shouldAnimate: !0,
                                      className: F.giftMainAnimation
                                  }),
                                  (0, i.jsx)(k.s, { giftRecipient: eT })
                              ]
                          }),
                      Y,
                      (0, i.jsxs)('div', {
                          className: F.paymentSourceWrapper,
                          children: [
                              eu
                                  ? (0, i.jsx)(c.vwX, {
                                        tag: c.RB0.H5,
                                        className: F.formTitle,
                                        children: Z.intl.string(Z.t['YH7B+P'])
                                    })
                                  : (0, i.jsx)(c.vwX, {
                                        tag: c.RB0.H5,
                                        children: Z.intl.string(Z.t.mmDvV1)
                                    }),
                              (0, i.jsx)(_.Z, {
                                  paymentSources: Object.values(K),
                                  selectedPaymentSourceId: eV,
                                  prependOption:
                                      ej && !eu
                                          ? {
                                                label: Z.intl.string(Z.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: X,
                                  onPaymentSourceAdd: J,
                                  hidePersonalInformation: eF,
                                  isTrial: eu
                              }),
                              ej && null == eV
                                  ? (0, i.jsx)('div', {
                                        className: F.paymentSourceOptionalWarning,
                                        children: Z.intl.format(Z.t['2wPRSE'], { months: eH.length })
                                    })
                                  : null,
                              ec
                                  ? null
                                  : (0, i.jsxs)(d.b, {
                                        currencies: q,
                                        className: F.currencyWrapper,
                                        children: [
                                            (0, i.jsx)(c.vwX, {
                                                tag: c.RB0.H5,
                                                children: Z.intl.string(Z.t['/AAR09'])
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                selectedCurrency: z.currency,
                                                currencies: q,
                                                onChange: Q
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, i.jsx)(x.Z, {
                          isActive: et,
                          ref: ee,
                          children: (0, i.jsx)(p.Z, {
                              onChange: $,
                              forceShow: !0,
                              checkboxLabel: e0,
                              checkboxClassname: e1,
                              checkboxLabelClassname: e2,
                              finePrint:
                                  null !== (j = !ey && ei) && void 0 !== j
                                      ? j
                                      : (0, i.jsx)(f.Z, {
                                            hide: eu || ec,
                                            subscriptionPlan: eR,
                                            renewalInvoice: eP,
                                            isGift: eb,
                                            paymentSourceType: null === (n = K[null != eV ? eV : '']) || void 0 === n ? void 0 : n.type,
                                            isEmbeddedIAP: ef,
                                            basePrice: (0, S.aS)(eR.id, !1, eb, z)
                                        }),
                              showPricingLink: eR.currency !== B.pK.USD,
                              showWithdrawalWaiver: e$,
                              disabled: eD,
                              isTrial: eu && null == ei,
                              inReverseTrial: ey,
                              isDiscount: ec,
                              subscriptionPlan: eR,
                              isGift: eb
                          })
                      })
                  ]
              })
    );
}
