n.d(t, { Z: () => Y }), n(388685);
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
    V = n(981631),
    F = n(231338),
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
            termsURL: V.EYA.TERMS,
            paidURL: V.EYA.PAID_TERMS,
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
    var t, n, o, V;
    let Y,
        K,
        { selectedPlanId: z, planGroup: q, paymentSources: Q, priceOptions: X, currencies: J, onCurrencyChange: $, onPaymentSourceChange: ee, handlePaymentSourceAdd: et, setHasAcceptedTerms: en, legalTermsNodeRef: er, hasLegalTermsFlash: ei, trialId: eo, trialFooterMessageOverride: ea, reviewWarningMessage: es, metadata: el, purchaseState: ec, hideSubscriptionDetails: eu, referralTrialOfferId: ed, isTrial: ef = !1, isDiscount: e_ = !1, handleClose: ep } = e,
        { isEmbeddedIAP: eh, activeSubscription: em, selectedSkuId: eg, defaultPlanId: eE, isPremium: eb, startedPaymentFlowWithPaymentSourcesRef: ey, setInvoicePreview: ev, contextMetadata: eO, inReverseTrial: eI, setPurchaseError: eS } = (0, g.JL)(),
        { isGift: eT, giftRecipient: eN, selectedGiftStyle: eA } = (0, m.wD)(),
        eC = (0, P.Ng)(),
        eR = null == eC || null == (t = eC.discount) ? void 0 : t.plan_ids.some((e) => B.GP[e].skuId === eg),
        eP = !eT && null != eC && null != eg && eR,
        ew = (0, l.e7)([S.Z], () => S.Z.get(z));
    a()(null != ew, 'Missing plan');
    let eD = [
            {
                planId: ew.id,
                quantity: 1
            }
        ],
        eL = ec === E.A.PURCHASING || ec === E.A.COMPLETED,
        [ex, eM] = (0, R.ED)({
            items: eD,
            renewal: !1,
            preventFetch: eI || eT || eL,
            applyEntitlements: !0,
            paymentSourceId: X.paymentSourceId,
            currency: X.currency,
            trialId: eo,
            metadata: el
        }),
        [ek, ej] = (0, R.ED)({
            subscriptionId: null == em ? void 0 : em.id,
            items: eD,
            renewal: !0,
            preventFetch: eT || eL,
            trialId: eo,
            paymentSourceId: X.paymentSourceId,
            currency: X.currency,
            metadata: el
        }),
        [eU, eG] = (0, R.ED)({
            items: [
                {
                    planId: B.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eP,
            trialId: eo,
            paymentSourceId: X.paymentSourceId,
            currency: X.currency,
            metadata: el
        }),
        [eB, eV] = (0, R.o5)({
            paymentSourceId: X.paymentSourceId,
            skuId: eg,
            subscriptionPlanId: z,
            currency: X.currency,
            preventFetch: !eT || eL,
            loadId: eO.loadId
        });
    i.useEffect(() => {
        ev(eB);
    }, [ev, eB]);
    let eF = eT && (0, T.pO)(eN),
        eZ = null != (o = null != (n = null != eM ? eM : ej) ? n : eG) ? o : eV;
    i.useEffect(() => {
        eS(eZ);
    }, [eZ, eS]);
    let eH = (0, l.e7)([O.Z], () => O.Z.enabled),
        eW = X.paymentSourceId,
        eY = (0, v.$)(Q, eW),
        { hasEntitlements: eK, entitlements: ez } = (0, U.H)(ew.id, eT),
        eq = (0, N.Ap)(X.paymentSourceId),
        eQ = (0, b.sE)(eo, eW, z),
        eX = (0, y.Kp)({
            isTrial: ef,
            isGift: eT,
            selectedSkuId: eg,
            startedPaymentFlowWithPaymentSources: ey.current,
            inReverseTrial: eI
        }),
        [eJ, e$] = i.useState(null == ex ? void 0 : ex.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == eJ && e$(null == ex ? void 0 : ex.subscriptionPeriodEnd);
    }, [null == ex ? void 0 : ex.subscriptionPeriodEnd, eJ]);
    let e0 = (0, h.Z)(),
        e1 = eX || e0.fractionalState === B.a$.NONE ? null : (0, r.jsx)(L.n, { fractionalPremiumInfo: e0 }),
        e2 = i.useMemo(
            () =>
                (0, N.V7)({
                    skuId: eg,
                    isPremium: eb,
                    multiMonthPlans: [],
                    currentSubscription: em,
                    defaultPlanId: eE
                }),
            [eg, em, eE, eb]
        ),
        e3 = (0, y.$g)(eX, ex, ew),
        e4 = i.useMemo(() => (ef && null != ex ? ex : eI && null != ek ? ek : void 0), [eI, ef, ex, ek]);
    if (null != eZ);
    else if (eT && null != eB)
        K = (0, r.jsx)(j.e9, {
            plan: ew,
            className: H.invoice,
            isPrepaidPaymentSource: eq,
            isCustomGift: eF,
            invoicePreview: eB
        });
    else if (null != e4)
        K = (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(D.KU, { negativeMarginTop: !eI }),
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
                                        price: (0, A.T4)(0, e4.currency, {
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
                                invoice: e4,
                                plan: ew
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == ex || null == ek || e3)
            return (0, r.jsx)('div', {
                className: H.spinnerWrapper,
                children: (0, r.jsx)(u.$jN, {})
            });
        ef && ex.subscriptionPeriodEnd !== ek.subscriptionPeriodEnd && (Y = ex.subscriptionPeriodEnd),
            (K = (0, r.jsxs)(r.Fragment, {
                children: [
                    e1,
                    (0, r.jsxs)(D.PO, {
                        className: H.invoice,
                        children: [
                            (0, r.jsx)(D.q9, { children: Z.NW.string(Z.t['2eh+Cg']) }),
                            (0, r.jsx)(j.Lu, {
                                invoice: ex,
                                newPlan: ew,
                                isPrepaidPaymentSource: eq,
                                referralTrialOfferId: ed
                            }),
                            eq
                                ? null
                                : (0, r.jsx)(j.nd, {
                                      renewalInvoice: ek,
                                      isTrial: ef,
                                      priceOptions: X,
                                      overrideRenewalDate: Y,
                                      trialFooterMessageOverride: ea,
                                      hideSubscriptionDetails: eu
                                  })
                        ]
                    })
                ]
            }));
    }
    let e5 = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        { checkboxLabel: e6, checkboxClassname: e8, checkboxLabelClassname: e7 } = W(null != ef && ef, ek, Y),
        e9 = Z.NW.formatToPlainString(Z.t['sBpy9/'], { planName: ew.name });
    return (
        eT && !eF ? (e9 = Z.NW.string(Z.t.J5a0eX)) : eT && eF ? (e9 = '') : (0, N.PV)(ew.id) && (e9 = N.ZP.getBillingReviewSubheader(null, ew)),
        eQ
            ? null
            : (0, r.jsxs)('div', {
                  className: H.stepBody,
                  children: [
                      null != es &&
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
                                      children: es
                                  })
                              ]
                          }),
                      eX &&
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(D.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, r.jsx)(w.Z, {}),
                                  (0, r.jsx)(k.O, {
                                      planOptions: e2,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: z,
                                      planGroup: q,
                                      subscriptionPeriodEnd: eJ,
                                      showTotal: !1,
                                      discountInvoiceItems: eP ? (null == eU ? void 0 : eU.invoiceItems) : void 0,
                                      handleClose: ep
                                  }),
                                  (0, r.jsx)(D.KU, {})
                              ]
                          }),
                      eI &&
                          (0, r.jsx)(u.X6q, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: H.trialHeader,
                              children: Z.NW.format(Z.t['7ZS2m5'], { trialEnd: null == em ? void 0 : em.currentPeriodEnd })
                          }),
                      !ef &&
                          '' !== e9 &&
                          (0, r.jsx)(u.vwX, {
                              tag: u.RB0.H5,
                              children: e9
                          }),
                      eF &&
                          null != eA &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(M.Z, {
                                      defaultAnimationState: C.SR.LOOP,
                                      giftStyle: eA,
                                      shouldAnimate: !0,
                                      className: H.giftMainAnimation
                                  }),
                                  (0, r.jsx)(G.s, { giftRecipient: eN })
                              ]
                          }),
                      K,
                      (0, r.jsxs)('div', {
                          className: H.paymentSourceWrapper,
                          children: [
                              ef
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
                                  paymentSources: Object.values(Q),
                                  selectedPaymentSourceId: eW,
                                  prependOption:
                                      eK && !ef
                                          ? {
                                                label: Z.NW.string(Z.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: ee,
                                  onPaymentSourceAdd: et,
                                  hidePersonalInformation: eH,
                                  isTrial: ef
                              }),
                              eK && null == eW
                                  ? (0, r.jsx)('div', {
                                        className: H.paymentSourceOptionalWarning,
                                        children: Z.NW.format(Z.t['2wPRSE'], { months: ez.length })
                                    })
                                  : null,
                              e_
                                  ? null
                                  : (0, r.jsxs)(d.b, {
                                        currencies: J,
                                        className: H.currencyWrapper,
                                        children: [
                                            (0, r.jsx)(u.vwX, {
                                                tag: u.RB0.H5,
                                                children: Z.NW.string(Z.t['/AAR09'])
                                            }),
                                            (0, r.jsx)(d.Z, {
                                                selectedCurrency: X.currency,
                                                currencies: J,
                                                onChange: $
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, r.jsx)(x.Z, {
                          isActive: ei,
                          ref: er,
                          children: (0, r.jsx)(p.Z, {
                              onChange: en,
                              forceShow: !0,
                              checkboxLabel: e6,
                              checkboxClassname: e8,
                              checkboxLabelClassname: e7,
                              finePrint:
                                  null != (V = !eI && ea)
                                      ? V
                                      : (0, r.jsx)(f.Z, {
                                            hide: ef || e_,
                                            subscriptionPlan: ew,
                                            renewalInvoice: ek,
                                            isGift: eT,
                                            paymentSourceType: eY,
                                            isEmbeddedIAP: eh,
                                            basePrice: (0, N.aS)(ew.id, !1, eT, X)
                                        }),
                              showPricingLink: ew.currency !== F.pK.USD,
                              showWithdrawalWaiver: e5,
                              disabled: eL,
                              isTrial: ef && null == ea,
                              inReverseTrial: eI,
                              isDiscount: e_,
                              subscriptionPlan: ew,
                              isGift: eT
                          })
                      })
                  ]
              })
    );
}
