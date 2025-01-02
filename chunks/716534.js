t.d(n, {
    Z: function () {
        return B;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(742280),
    c = t(442837),
    o = t(692547),
    u = t(481060),
    d = t(190947),
    m = t(224550),
    p = t(275850),
    x = t(672971),
    h = t(987209),
    f = t(563132),
    v = t(45572),
    S = t(919778),
    g = t(614223),
    E = t(246946),
    j = t(351402),
    y = t(509545),
    I = t(669079),
    P = t(74538),
    T = t(937615),
    N = t(479446),
    b = t(374649),
    C = t(104494),
    _ = t(642530),
    O = t(653798),
    A = t(314182),
    Z = t(981632),
    R = t(314404),
    w = t(42818),
    M = t(459965),
    L = t(251660),
    k = t(474936),
    F = t(981631),
    D = t(231338),
    U = t(388032),
    G = t(809186);
function B(e) {
    var n, t, r, B, H;
    let W,
        V,
        { selectedPlanId: K, paymentSources: z, priceOptions: Y, currencies: X, onCurrencyChange: q, onPaymentSourceChange: J, handlePaymentSourceAdd: Q, setHasAcceptedTerms: $, legalTermsNodeRef: ee, hasLegalTermsFlash: en, trialId: et, trialFooterMessageOverride: ei, reviewWarningMessage: el, metadata: er, purchaseState: es, hideSubscriptionDetails: ea, referralTrialOfferId: ec, isTrial: eo = !1, isDiscount: eu = !1, handleClose: ed } = e,
        { isEmbeddedIAP: em, activeSubscription: ep, selectedSkuId: ex, defaultPlanId: eh, isPremium: ef, startedPaymentFlowWithPaymentSourcesRef: ev, setInvoicePreview: eS, contextMetadata: eg, inReverseTrial: eE, setPurchaseError: ej } = (0, f.usePaymentContext)(),
        { isGift: ey, giftRecipient: eI, selectedGiftStyle: eP } = (0, h.wD)(),
        eT = (0, C.Ng)(),
        eN = null == eT ? void 0 : null === (n = eT.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => k.GP[e].skuId === ex),
        eb = !ey && null != eT && null != ex && eN,
        eC = (0, c.e7)([y.Z], () => y.Z.get(K));
    s()(null != eC, 'Missing plan');
    let e_ = [
            {
                planId: eC.id,
                quantity: 1
            }
        ],
        eO = es === v.A.PURCHASING || es === v.A.COMPLETED,
        [eA, eZ] = (0, b.ED)({
            items: e_,
            renewal: !1,
            preventFetch: eE || ey || eO,
            applyEntitlements: !0,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
            trialId: et,
            metadata: er
        }),
        [eR, ew] = (0, b.ED)({
            subscriptionId: null == ep ? void 0 : ep.id,
            items: e_,
            renewal: !0,
            preventFetch: ey || eO,
            trialId: et,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
            metadata: er
        }),
        [eM, eL] = (0, b.ED)({
            items: [
                {
                    planId: k.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eb,
            trialId: et,
            paymentSourceId: Y.paymentSourceId,
            currency: Y.currency,
            metadata: er
        }),
        [ek, eF] = (0, b.o5)({
            paymentSourceId: Y.paymentSourceId,
            skuId: ex,
            subscriptionPlanId: K,
            currency: Y.currency,
            preventFetch: !ey || eO,
            loadId: eg.loadId
        });
    l.useEffect(() => {
        eS(ek);
    }, [eS, ek]);
    let eD = ey && (0, I.pO)(eI),
        eU = null !== (B = null !== (r = null != eZ ? eZ : ew) && void 0 !== r ? r : eL) && void 0 !== B ? B : eF;
    l.useEffect(() => {
        ej(eU);
    }, [eU, ej]);
    let eG = (0, c.e7)([E.Z], () => E.Z.enabled),
        eB = Y.paymentSourceId,
        { hasEntitlements: eH, entitlements: eW } = (0, M.H)(eC.id, ey),
        eV = (0, P.Ap)(Y.paymentSourceId),
        eK = (0, S.sE)(et, eB, K),
        ez = (0, g.Kp)({
            isTrial: eo,
            isGift: ey,
            selectedSkuId: ex,
            startedPaymentFlowWithPaymentSources: ev.current,
            inReverseTrial: eE
        }),
        [eY, eX] = l.useState(null == eA ? void 0 : eA.subscriptionPeriodEnd);
    l.useEffect(() => {
        null == eY && eX(null == eA ? void 0 : eA.subscriptionPeriodEnd);
    }, [null == eA ? void 0 : eA.subscriptionPeriodEnd, eY]);
    let eq = l.useMemo(
            () =>
                (0, P.V7)({
                    skuId: ex,
                    isPremium: ef,
                    multiMonthPlans: [],
                    currentSubscription: ep,
                    isGift: ey,
                    isEligibleForTrial: eo,
                    defaultPlanId: eh,
                    defaultToMonthlyPlan: !1
                }),
            [ex, ep, ey, eh, ef, eo]
        ),
        eJ = (0, g.$g)(ez, eA, eC),
        eQ = l.useMemo(() => (eo && null != eA ? eA : eE && null != eR ? eR : void 0), [eE, eo, eA, eR]);
    if (null != eU);
    else if (ey && null != ek)
        V = (0, i.jsx)(w.e9, {
            plan: eC,
            className: G.invoice,
            isPrepaidPaymentSource: eV,
            isCustomGift: eD,
            invoicePreview: ek
        });
    else if (null != eQ)
        V = (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(O.KU, { negativeMarginTop: !eE }),
                (0, i.jsxs)(O.PO, {
                    className: G.invoice,
                    children: [
                        (0, i.jsxs)('div', {
                            className: G.trialPriceLine,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: U.intl.string(U.t.txajQE)
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: U.intl.format(U.t.hXcaLS, {
                                        price: (0, T.T4)(0, eQ.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: G.afterTrialPriceLine,
                            children: (0, i.jsx)(w.yT, {
                                invoice: eQ,
                                plan: eC
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eA || null == eR || eJ)
            return (0, i.jsx)('div', {
                className: G.spinnerWrapper,
                children: (0, i.jsx)(u.Spinner, {})
            });
        eo && eA.subscriptionPeriodEnd !== eR.subscriptionPeriodEnd && (W = eA.subscriptionPeriodEnd),
            (V = (0, i.jsxs)(O.PO, {
                className: G.invoice,
                children: [
                    (0, i.jsx)(O.q9, { children: U.intl.string(U.t['2eh+Cg']) }),
                    (0, i.jsx)(w.Lu, {
                        invoice: eA,
                        newPlan: eC,
                        isPrepaidPaymentSource: eV,
                        referralTrialOfferId: ec
                    }),
                    eV
                        ? null
                        : (0, i.jsx)(w.nd, {
                              renewalInvoice: eR,
                              isTrial: eo,
                              priceOptions: Y,
                              overrideRenewalDate: W,
                              trialFooterMessageOverride: ei,
                              hideSubscriptionDetails: ea
                          })
                ]
            }));
    }
    let e$ = a.M.EEA_COUNTRIES.has(j.Z.ipCountryCodeWithFallback),
        {
            checkboxLabel: e0,
            checkboxClassname: e1,
            checkboxLabelClassname: e2
        } = (function (e, n, t) {
            let i = null,
                l = null,
                r = null;
            if (e && null != n) {
                let { intervalType: e, intervalCount: s } = P.ZP.getIntervalForInvoice(n),
                    a = (0, T.og)((0, T.T4)(n.total, n.currency), e, s),
                    c = null != t ? t : n.subscriptionPeriodEnd;
                (i = U.intl.format(U.t.ZzmrTk, {
                    termsURL: F.EYA.TERMS,
                    paidURL: F.EYA.PAID_TERMS,
                    rate: a,
                    renewalDate: c
                })),
                    (l = G.trialCheckbox),
                    (r = G.trialCheckboxLabel);
            }
            return {
                checkboxLabel: i,
                checkboxClassname: l,
                checkboxLabelClassname: r
            };
        })(null != eo && eo, eR, W),
        e4 = U.intl.formatToPlainString(U.t['sBpy9/'], { planName: eC.name });
    return (
        ey && !eD ? (e4 = U.intl.string(U.t.J5a0eX)) : ey && eD ? (e4 = '') : (0, P.PV)(eC.id) && (e4 = P.ZP.getBillingReviewSubheader(null, eC)),
        eK
            ? null
            : (0, i.jsxs)('div', {
                  className: G.stepBody,
                  children: [
                      null != el &&
                          (0, i.jsxs)('div', {
                              className: G.reviewWarningMessageContainer,
                              children: [
                                  (0, i.jsx)(u.CircleInformationIcon, {
                                      size: 'custom',
                                      color: o.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, i.jsx)(u.Text, {
                                      className: G.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: el
                                  })
                              ]
                          }),
                      ez &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(O.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, i.jsx)(_.Z, {}),
                                  (0, i.jsx)(R.O, {
                                      planOptions: eq,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: K,
                                      subscriptionPeriodEnd: eY,
                                      showTotal: !1,
                                      discountInvoiceItems: eb ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                      handleClose: ed
                                  }),
                                  (0, i.jsx)(O.KU, {})
                              ]
                          }),
                      eE &&
                          (0, i.jsx)(u.Heading, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: G.trialHeader,
                              children: U.intl.format(U.t['7ZS2m5'], { trialEnd: null == ep ? void 0 : ep.currentPeriodEnd })
                          }),
                      !eo &&
                          '' !== e4 &&
                          (0, i.jsx)(u.FormTitle, {
                              tag: u.FormTitleTags.H5,
                              children: e4
                          }),
                      eD &&
                          null != eP &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(Z.Z, {
                                      defaultAnimationState: N.SR.LOOP,
                                      giftStyle: eP,
                                      shouldAnimate: !0,
                                      className: G.giftMainAnimation
                                  }),
                                  (0, i.jsx)(L.s, { giftRecipient: eI })
                              ]
                          }),
                      V,
                      (0, i.jsxs)('div', {
                          className: G.paymentSourceWrapper,
                          children: [
                              eo
                                  ? (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        className: G.formTitle,
                                        children: U.intl.string(U.t['YH7B+P'])
                                    })
                                  : (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        children: U.intl.string(U.t.mmDvV1)
                                    }),
                              (0, i.jsx)(p.Z, {
                                  paymentSources: Object.values(z),
                                  selectedPaymentSourceId: eB,
                                  prependOption:
                                      eH && !eo
                                          ? {
                                                label: U.intl.string(U.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: J,
                                  onPaymentSourceAdd: Q,
                                  hidePersonalInformation: eG,
                                  isTrial: eo
                              }),
                              eH && null == eB
                                  ? (0, i.jsx)('div', {
                                        className: G.paymentSourceOptionalWarning,
                                        children: U.intl.format(U.t['2wPRSE'], { months: eW.length })
                                    })
                                  : null,
                              eu
                                  ? null
                                  : (0, i.jsxs)(d.b, {
                                        currencies: X,
                                        className: G.currencyWrapper,
                                        children: [
                                            (0, i.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H5,
                                                children: U.intl.string(U.t['/AAR09'])
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                selectedCurrency: Y.currency,
                                                currencies: X,
                                                onChange: q
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, i.jsx)(A.Z, {
                          isActive: en,
                          ref: ee,
                          children: (0, i.jsx)(x.Z, {
                              onChange: $,
                              forceShow: !0,
                              checkboxLabel: e0,
                              checkboxClassname: e1,
                              checkboxLabelClassname: e2,
                              finePrint:
                                  null !== (H = !eE && ei) && void 0 !== H
                                      ? H
                                      : (0, i.jsx)(m.Z, {
                                            hide: eo || eu,
                                            subscriptionPlan: eC,
                                            renewalInvoice: eR,
                                            isGift: ey,
                                            paymentSourceType: null === (t = z[null != eB ? eB : '']) || void 0 === t ? void 0 : t.type,
                                            isEmbeddedIAP: em,
                                            basePrice: (0, P.aS)(eC.id, !1, ey, Y)
                                        }),
                              showPricingLink: eC.currency !== D.pK.USD,
                              showWithdrawalWaiver: e$,
                              disabled: eO,
                              isTrial: eo && null == ei,
                              inReverseTrial: eE,
                              isDiscount: eu,
                              subscriptionPlan: eC,
                              isGift: ey
                          })
                      })
                  ]
              })
    );
}
