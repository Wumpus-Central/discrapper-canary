r.d(n, {
    Z: function () {
        return Y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(512722),
    l = r.n(s),
    u = r(742280),
    c = r(442837),
    d = r(692547),
    f = r(481060),
    p = r(190947),
    h = r(224550),
    _ = r(275850),
    m = r(672971),
    g = r(987209),
    E = r(563132),
    v = r(45572),
    y = r(919778),
    b = r(614223),
    I = r(246946),
    T = r(351402),
    S = r(509545),
    A = r(669079),
    C = r(74538),
    N = r(937615),
    R = r(479446),
    O = r(374649),
    D = r(104494),
    x = r(642530),
    L = r(653798),
    w = r(314182),
    P = r(981632),
    M = r(314404),
    k = r(42818),
    U = r(459965),
    B = r(251660),
    G = r(474936),
    Z = r(981631),
    F = r(231338),
    V = r(388032),
    j = r(809186);
function H(e, n, r) {
    let i = null,
        a = null,
        o = null;
    if (e && null != n) {
        let { intervalType: e, intervalCount: s } = C.ZP.getIntervalForInvoice(n),
            l = (0, N.og)((0, N.T4)(n.total, n.currency), e, s),
            u = null != r ? r : n.subscriptionPeriodEnd;
        (i = V.intl.format(V.t.ZzmrTk, {
            termsURL: Z.EYA.TERMS,
            paidURL: Z.EYA.PAID_TERMS,
            rate: l,
            renewalDate: u
        })),
            (a = j.trialCheckbox),
            (o = j.trialCheckboxLabel);
    }
    return {
        checkboxLabel: i,
        checkboxClassname: a,
        checkboxLabelClassname: o
    };
}
function Y(e) {
    var n, r, i, s, Z;
    let Y,
        W,
        { selectedPlanId: K, paymentSources: z, priceOptions: q, currencies: Q, onCurrencyChange: X, onPaymentSourceChange: J, handlePaymentSourceAdd: $, setHasAcceptedTerms: ee, legalTermsNodeRef: et, hasLegalTermsFlash: en, trialId: er, trialFooterMessageOverride: ei, reviewWarningMessage: ea, metadata: eo, purchaseState: es, hideSubscriptionDetails: el, referralTrialOfferId: eu, isTrial: ec = !1, isDiscount: ed = !1, handleClose: ef } = e,
        { isEmbeddedIAP: ep, activeSubscription: eh, selectedSkuId: e_, defaultPlanId: em, isPremium: eg, startedPaymentFlowWithPaymentSourcesRef: eE, setInvoicePreview: ev, contextMetadata: ey, inReverseTrial: eb, setPurchaseError: eI } = (0, E.usePaymentContext)(),
        { isGift: eT, giftRecipient: eS, selectedGiftStyle: eA } = (0, g.wD)(),
        eC = (0, D.Ng)(),
        eN = null == eC ? void 0 : null === (n = eC.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => G.GP[e].skuId === e_),
        eR = !eT && null != eC && null != e_ && eN,
        eO = (0, c.e7)([S.Z], () => S.Z.get(K));
    l()(null != eO, 'Missing plan');
    let eD = [
            {
                planId: eO.id,
                quantity: 1
            }
        ],
        ex = es === v.A.PURCHASING || es === v.A.COMPLETED,
        [eL, ew] = (0, O.ED)({
            items: eD,
            renewal: !1,
            preventFetch: eb || eT || ex,
            applyEntitlements: !0,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            trialId: er,
            metadata: eo
        }),
        [eP, eM] = (0, O.ED)({
            subscriptionId: null == eh ? void 0 : eh.id,
            items: eD,
            renewal: !0,
            preventFetch: eT || ex,
            trialId: er,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: eo
        }),
        [ek, eU] = (0, O.ED)({
            items: [
                {
                    planId: G.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !eR,
            trialId: er,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: eo
        }),
        [eB, eG] = (0, O.o5)({
            paymentSourceId: q.paymentSourceId,
            skuId: e_,
            subscriptionPlanId: K,
            currency: q.currency,
            preventFetch: !eT || ex,
            loadId: ey.loadId
        });
    o.useEffect(() => {
        ev(eB);
    }, [ev, eB]);
    let eZ = eT && (0, A.pO)(eS),
        eF = null !== (s = null !== (i = null != ew ? ew : eM) && void 0 !== i ? i : eU) && void 0 !== s ? s : eG;
    o.useEffect(() => {
        eI(eF);
    }, [eF, eI]);
    let eV = (0, c.e7)([I.Z], () => I.Z.enabled),
        ej = q.paymentSourceId,
        { hasEntitlements: eH, entitlements: eY } = (0, U.H)(eO.id, eT),
        eW = (0, C.Ap)(q.paymentSourceId),
        eK = (0, y.sE)(er, ej, K),
        ez = (0, b.Kp)({
            isTrial: ec,
            isGift: eT,
            selectedSkuId: e_,
            startedPaymentFlowWithPaymentSources: eE.current,
            inReverseTrial: eb
        }),
        [eq, eQ] = o.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    o.useEffect(() => {
        null == eq && eQ(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eq]);
    let eX = o.useMemo(
            () =>
                (0, C.V7)({
                    skuId: e_,
                    isPremium: eg,
                    multiMonthPlans: [],
                    currentSubscription: eh,
                    isGift: eT,
                    isEligibleForTrial: ec,
                    defaultPlanId: em,
                    defaultToMonthlyPlan: !1
                }),
            [e_, eh, eT, em, eg, ec]
        ),
        eJ = (0, b.$g)(ez, eL, eO),
        e$ = o.useMemo(() => (ec && null != eL ? eL : eb && null != eP ? eP : void 0), [eb, ec, eL, eP]);
    if (null != eF);
    else if (eT && null != eB)
        W = (0, a.jsx)(k.e9, {
            plan: eO,
            className: j.invoice,
            isPrepaidPaymentSource: eW,
            isCustomGift: eZ,
            invoicePreview: eB
        });
    else if (null != e$)
        W = (0, a.jsxs)('div', {
            children: [
                (0, a.jsx)(L.KU, { negativeMarginTop: !eb }),
                (0, a.jsxs)(L.PO, {
                    className: j.invoice,
                    children: [
                        (0, a.jsxs)('div', {
                            className: j.trialPriceLine,
                            children: [
                                (0, a.jsx)(f.Text, {
                                    variant: 'text-md/bold',
                                    children: V.intl.string(V.t.txajQE)
                                }),
                                (0, a.jsx)(f.Text, {
                                    variant: 'text-md/normal',
                                    children: V.intl.format(V.t.hXcaLS, {
                                        price: (0, N.T4)(0, e$.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: j.afterTrialPriceLine,
                            children: (0, a.jsx)(k.yT, {
                                invoice: e$,
                                plan: eO
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eL || null == eP || eJ)
            return (0, a.jsx)('div', {
                className: j.spinnerWrapper,
                children: (0, a.jsx)(f.Spinner, {})
            });
        ec && eL.subscriptionPeriodEnd !== eP.subscriptionPeriodEnd && (Y = eL.subscriptionPeriodEnd),
            (W = (0, a.jsxs)(L.PO, {
                className: j.invoice,
                children: [
                    (0, a.jsx)(L.q9, { children: V.intl.string(V.t['2eh+Cg']) }),
                    (0, a.jsx)(k.Lu, {
                        invoice: eL,
                        newPlan: eO,
                        isPrepaidPaymentSource: eW,
                        referralTrialOfferId: eu
                    }),
                    eW
                        ? null
                        : (0, a.jsx)(k.nd, {
                              renewalInvoice: eP,
                              isTrial: ec,
                              priceOptions: q,
                              overrideRenewalDate: Y,
                              trialFooterMessageOverride: ei,
                              hideSubscriptionDetails: el
                          })
                ]
            }));
    }
    let e0 = u.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
        { checkboxLabel: e1, checkboxClassname: e2, checkboxLabelClassname: e3 } = H(null != ec && ec, eP, Y),
        e4 = V.intl.formatToPlainString(V.t['sBpy9/'], { planName: eO.name });
    return (
        eT && !eZ ? (e4 = V.intl.string(V.t.J5a0eX)) : eT && eZ ? (e4 = '') : (0, C.PV)(eO.id) && (e4 = C.ZP.getBillingReviewSubheader(null, eO)),
        eK
            ? null
            : (0, a.jsxs)('div', {
                  className: j.stepBody,
                  children: [
                      null != ea &&
                          (0, a.jsxs)('div', {
                              className: j.reviewWarningMessageContainer,
                              children: [
                                  (0, a.jsx)(f.CircleInformationIcon, {
                                      size: 'custom',
                                      color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, a.jsx)(f.Text, {
                                      className: j.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: ea
                                  })
                              ]
                          }),
                      ez &&
                          (0, a.jsxs)('div', {
                              children: [
                                  (0, a.jsx)(L.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, a.jsx)(x.Z, {}),
                                  (0, a.jsx)(M.O, {
                                      planOptions: eX,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: K,
                                      subscriptionPeriodEnd: eq,
                                      showTotal: !1,
                                      discountInvoiceItems: eR ? (null == ek ? void 0 : ek.invoiceItems) : void 0,
                                      handleClose: ef
                                  }),
                                  (0, a.jsx)(L.KU, {})
                              ]
                          }),
                      eb &&
                          (0, a.jsx)(f.Heading, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: j.trialHeader,
                              children: V.intl.format(V.t['7ZS2m5'], { trialEnd: null == eh ? void 0 : eh.currentPeriodEnd })
                          }),
                      !ec &&
                          '' !== e4 &&
                          (0, a.jsx)(f.FormTitle, {
                              tag: f.FormTitleTags.H5,
                              children: e4
                          }),
                      eZ &&
                          null != eA &&
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(P.Z, {
                                      defaultAnimationState: R.SR.LOOP,
                                      giftStyle: eA,
                                      shouldAnimate: !0,
                                      className: j.giftMainAnimation
                                  }),
                                  (0, a.jsx)(B.s, { giftRecipient: eS })
                              ]
                          }),
                      W,
                      (0, a.jsxs)('div', {
                          className: j.paymentSourceWrapper,
                          children: [
                              ec
                                  ? (0, a.jsx)(f.FormTitle, {
                                        tag: f.FormTitleTags.H5,
                                        className: j.formTitle,
                                        children: V.intl.string(V.t['YH7B+P'])
                                    })
                                  : (0, a.jsx)(f.FormTitle, {
                                        tag: f.FormTitleTags.H5,
                                        children: V.intl.string(V.t.mmDvV1)
                                    }),
                              (0, a.jsx)(_.Z, {
                                  paymentSources: Object.values(z),
                                  selectedPaymentSourceId: ej,
                                  prependOption:
                                      eH && !ec
                                          ? {
                                                label: V.intl.string(V.t.IGU7Eh),
                                                value: null
                                            }
                                          : null,
                                  onChange: J,
                                  onPaymentSourceAdd: $,
                                  hidePersonalInformation: eV,
                                  isTrial: ec
                              }),
                              eH && null == ej
                                  ? (0, a.jsx)('div', {
                                        className: j.paymentSourceOptionalWarning,
                                        children: V.intl.format(V.t['2wPRSE'], { months: eY.length })
                                    })
                                  : null,
                              ed
                                  ? null
                                  : (0, a.jsxs)(p.b, {
                                        currencies: Q,
                                        className: j.currencyWrapper,
                                        children: [
                                            (0, a.jsx)(f.FormTitle, {
                                                tag: f.FormTitleTags.H5,
                                                children: V.intl.string(V.t['/AAR09'])
                                            }),
                                            (0, a.jsx)(p.Z, {
                                                selectedCurrency: q.currency,
                                                currencies: Q,
                                                onChange: X
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, a.jsx)(w.Z, {
                          isActive: en,
                          ref: et,
                          children: (0, a.jsx)(m.Z, {
                              onChange: ee,
                              forceShow: !0,
                              checkboxLabel: e1,
                              checkboxClassname: e2,
                              checkboxLabelClassname: e3,
                              finePrint:
                                  null !== (Z = !eb && ei) && void 0 !== Z
                                      ? Z
                                      : (0, a.jsx)(h.Z, {
                                            hide: ec || ed,
                                            subscriptionPlan: eO,
                                            renewalInvoice: eP,
                                            isGift: eT,
                                            paymentSourceType: null === (r = z[null != ej ? ej : '']) || void 0 === r ? void 0 : r.type,
                                            isEmbeddedIAP: ep,
                                            basePrice: (0, C.aS)(eO.id, !1, eT, q)
                                        }),
                              showPricingLink: eO.currency !== F.pK.USD,
                              showWithdrawalWaiver: e0,
                              disabled: ex,
                              isTrial: ec && null == ei,
                              inReverseTrial: eb,
                              isDiscount: ed,
                              subscriptionPlan: eO,
                              isGift: eT
                          })
                      })
                  ]
              })
    );
}
