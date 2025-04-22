n.d(t, { Z: () => q }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    o = n.n(a),
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
    T = n(855775),
    A = n(55563),
    N = n(669079),
    C = n(74538),
    R = n(937615),
    P = n(479446),
    w = n(374649),
    D = n(104494),
    L = n(642530),
    x = n(811334),
    M = n(346071),
    k = n(314182),
    j = n(981632),
    U = n(396955),
    G = n(314404),
    B = n(42818),
    V = n(459965),
    F = n(251660),
    Z = n(474936),
    H = n(981631),
    Y = n(231338),
    W = n(388032),
    K = n(236691);
function z(e, t, n) {
    let r = null,
        i = null,
        a = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: o } = C.ZP.getIntervalForInvoice(t),
            s = (0, R.og)((0, R.T4)(t.total, t.currency), e, o),
            l = null != n ? n : t.subscriptionPeriodEnd;
        (r = W.intl.format(W.t.ZzmrTk, {
            termsURL: H.EYA.TERMS,
            paidURL: H.EYA.PAID_TERMS,
            rate: s,
            renewalDate: l
        })),
            (i = K.trialCheckbox),
            (a = K.trialCheckboxLabel);
    }
    return {
        checkboxLabel: r,
        checkboxClassname: i,
        checkboxLabelClassname: a
    };
}
function q(e) {
    var t, n, a, H;
    let q,
        Q,
        { selectedPlanId: X, planGroup: J, paymentSources: $, priceOptions: ee, currencies: et, onCurrencyChange: en, onPaymentSourceChange: er, handlePaymentSourceAdd: ei, setHasAcceptedTerms: ea, legalTermsNodeRef: eo, hasLegalTermsFlash: es, trialId: el, trialFooterMessageOverride: ec, reviewWarningMessage: eu, metadata: ed, purchaseState: ef, hideSubscriptionDetails: e_, referralTrialOfferId: ep, isTrial: eh = !1, isDiscount: em = !1, handleClose: eg } = e,
        { isEmbeddedIAP: eE, activeSubscription: eb, selectedSkuId: ey, defaultPlanId: ev, isPremium: eO, startedPaymentFlowWithPaymentSourcesRef: eI, setInvoicePreview: eS, contextMetadata: eT, inReverseTrial: eA, setPurchaseError: eN, hasPaymentSources: eC } = (0, g.JL)(),
        { isGift: eR, giftRecipient: eP, selectedGiftStyle: ew } = (0, m.wD)(),
        eD = (0, D.Ng)(),
        eL = null == eD || null == (t = eD.discount) ? void 0 : t.plan_ids.some((e) => Z.GP[e].skuId === ey),
        ex = !eR && null != eD && null != ey && eL,
        eM = (0, l.e7)([S.Z], () => S.Z.get(X));
    o()(null != eM, 'Missing plan');
    let ek = [
            {
                planId: eM.id,
                quantity: 1
            }
        ],
        ej = ef === E.A.PURCHASING || ef === E.A.COMPLETED,
        eU = null != ey ? ey : '',
        eG = (0, l.e7)([A.Z], () => A.Z.get(eU), [eU]),
        eB = null == eG ? void 0 : eG.eligiblePaymentGateways,
        [eV, eF] = (0, w.ED)({
            items: ek,
            renewal: !1,
            preventFetch: eA || eR || ej,
            applyEntitlements: !0,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            trialId: el,
            metadata: ed
        }),
        [eZ, eH] = (0, w.ED)({
            subscriptionId: null == eb ? void 0 : eb.id,
            items: ek,
            renewal: !0,
            preventFetch: eR || ej,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed
        }),
        [eY, eW] = (0, w.ED)({
            items: [
                {
                    planId: Z.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !ex,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed
        }),
        [eK, ez] = (0, w.o5)({
            paymentSourceId: ee.paymentSourceId,
            skuId: ey,
            subscriptionPlanId: X,
            currency: ee.currency,
            preventFetch: !eR || ej,
            loadId: eT.loadId
        });
    i.useEffect(() => {
        eS(eK);
    }, [eS, eK]);
    let eq = eR && (0, N.pO)(eP),
        eQ = null != (a = null != (n = null != eF ? eF : eH) ? n : eW) ? a : ez;
    i.useEffect(() => {
        eN(eQ);
    }, [eQ, eN]);
    let eX = (0, l.e7)([O.Z], () => O.Z.enabled),
        eJ = ee.paymentSourceId,
        e$ = (0, v.$)($, eJ),
        { hasEntitlements: e0, entitlements: e1 } = (0, V.H)(eM.id, eR),
        e2 = (0, C.Ap)(ee.paymentSourceId),
        e3 = (0, b.sE)(el, eJ, X),
        e4 = (0, y.Kp)({
            isTrial: eh,
            isGift: eR,
            selectedSkuId: ey,
            startedPaymentFlowWithPaymentSources: eI.current,
            inReverseTrial: eA
        }),
        [e5, e6] = i.useState(null == eV ? void 0 : eV.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == e5 && e6(null == eV ? void 0 : eV.subscriptionPeriodEnd);
    }, [null == eV ? void 0 : eV.subscriptionPeriodEnd, e5]);
    let e8 = (0, h.Z)(),
        e7 = !e4 && e8.isFractionalPremiumActive && Z.dJ.has(X),
        e9 = i.useMemo(
            () =>
                (0, C.V7)({
                    skuId: ey,
                    isPremium: eO,
                    multiMonthPlans: [],
                    currentSubscription: eb,
                    defaultPlanId: ev
                }),
            [ey, eb, ev, eO]
        ),
        te = (0, y.$g)(e4, eV, eM),
        tt = i.useMemo(() => (eh && null != eV ? eV : eA && null != eZ ? eZ : void 0), [eA, eh, eV, eZ]);
    if (null != eQ);
    else if (eR && null != eK)
        Q = (0, r.jsx)(B.e9, {
            plan: eM,
            className: K.invoice,
            isPrepaidPaymentSource: e2,
            isCustomGift: eq,
            invoicePreview: eK
        });
    else if (null != tt)
        Q = (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(x.UN, { negativeMarginTop: !eA }),
                (0, r.jsxs)(x.aO, {
                    className: K.invoice,
                    children: [
                        (0, r.jsxs)('div', {
                            className: K.trialPriceLine,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: W.intl.string(W.t.txajQE)
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: W.intl.format(W.t.hXcaLS, {
                                        price: (0, R.T4)(0, tt.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: K.afterTrialPriceLine,
                            children: (0, r.jsx)(B.yT, {
                                invoice: tt,
                                plan: eM
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eV || null == eZ || te)
            return (0, r.jsx)('div', {
                className: K.spinnerWrapper,
                children: (0, r.jsx)(u.$jN, {})
            });
        eh && eV.subscriptionPeriodEnd !== eZ.subscriptionPeriodEnd && (q = eV.subscriptionPeriodEnd),
            (Q = (0, r.jsxs)(r.Fragment, {
                children: [
                    e7 && (0, r.jsx)(M.n, { fractionalPremiumInfo: e8 }),
                    (0, r.jsxs)(x.aO, {
                        className: K.invoice,
                        children: [
                            (0, r.jsx)(x.Z9, { children: W.intl.string(W.t['2eh+Cg']) }),
                            (0, r.jsx)(B.Lu, {
                                invoice: eV,
                                newPlan: eM,
                                isPrepaidPaymentSource: e2,
                                referralTrialOfferId: ep
                            }),
                            e2
                                ? null
                                : (0, r.jsx)(B.nd, {
                                      renewalInvoice: eZ,
                                      isTrial: eh,
                                      priceOptions: ee,
                                      overrideRenewalDate: q,
                                      trialFooterMessageOverride: ec,
                                      hideSubscriptionDetails: e_
                                  })
                        ]
                    })
                ]
            }));
    }
    let tn = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        { checkboxLabel: tr, checkboxClassname: ti, checkboxLabelClassname: ta } = z(null != eh && eh, eZ, q),
        to = W.intl.formatToPlainString(W.t['sBpy9/'], { planName: eM.name });
    eR && !eq ? (to = W.intl.string(W.t.J5a0eX)) : eR && eq ? (to = '') : (0, C.PV)(eM.id) && (to = C.ZP.getBillingReviewSubheader(null, eM));
    let ts = null != eB && eB.length > 0 && (eJ === T.c || null === e$) && eC ? U.w.SELECT_PAYMENT_METHOD : void 0;
    return e3
        ? null
        : (0, r.jsxs)('div', {
              className: K.stepBody,
              children: [
                  (0, r.jsx)(U.Y, { paymentRestrictionBannerType: ts }),
                  null != eu &&
                      (0, r.jsxs)('div', {
                          className: K.reviewWarningMessageContainer,
                          children: [
                              (0, r.jsx)(u.d3s, {
                                  size: 'custom',
                                  color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20
                              }),
                              (0, r.jsx)(u.Text, {
                                  className: K.reviewWarningMessage,
                                  variant: 'text-sm/normal',
                                  children: eu
                              })
                          ]
                      }),
                  e4 &&
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(x.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0
                              }),
                              (0, r.jsx)(L.Z, {}),
                              (0, r.jsx)(G.O, {
                                  planOptions: e9,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: X,
                                  planGroup: J,
                                  subscriptionPeriodEnd: e5,
                                  showTotal: !1,
                                  discountInvoiceItems: ex ? (null == eY ? void 0 : eY.invoiceItems) : void 0,
                                  handleClose: eg
                              }),
                              (0, r.jsx)(x.UN, {})
                          ]
                      }),
                  eA &&
                      (0, r.jsx)(u.X6q, {
                          variant: 'heading-md/normal',
                          color: 'always-white',
                          className: K.trialHeader,
                          children: W.intl.format(W.t['7ZS2m5'], { trialEnd: null == eb ? void 0 : eb.currentPeriodEnd })
                      }),
                  !eh &&
                      '' !== to &&
                      (0, r.jsx)(u.vwX, {
                          tag: u.RB0.H5,
                          children: to
                      }),
                  eq &&
                      null != ew &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(j.Z, {
                                  defaultAnimationState: P.SR.LOOP,
                                  giftStyle: ew,
                                  shouldAnimate: !0,
                                  className: K.giftMainAnimation
                              }),
                              (0, r.jsx)(F.s, { giftRecipient: eP })
                          ]
                      }),
                  Q,
                  (0, r.jsxs)('div', {
                      className: K.paymentSourceWrapper,
                      children: [
                          eh
                              ? (0, r.jsx)(u.vwX, {
                                    tag: u.RB0.H5,
                                    className: K.formTitle,
                                    children: W.intl.string(W.t['YH7B+P'])
                                })
                              : (0, r.jsx)(u.vwX, {
                                    tag: u.RB0.H5,
                                    children: W.intl.string(W.t.mmDvV1)
                                }),
                          (0, r.jsx)(_.ZP, {
                              paymentSources: Object.values($),
                              selectedPaymentSourceId: eJ,
                              prependOption:
                                  e0 && !eh
                                      ? {
                                            label: W.intl.string(W.t.IGU7Eh),
                                            value: null
                                        }
                                      : null,
                              onChange: er,
                              onPaymentSourceAdd: ei,
                              hidePersonalInformation: eX,
                              isTrial: eh,
                              paymentGatewayRestrictions: eB
                          }),
                          e0 && null == eJ
                              ? (0, r.jsx)('div', {
                                    className: K.paymentSourceOptionalWarning,
                                    children: W.intl.format(W.t['2wPRSE'], { months: e1.length })
                                })
                              : null,
                          em
                              ? null
                              : (0, r.jsxs)(d.b, {
                                    currencies: et,
                                    className: K.currencyWrapper,
                                    children: [
                                        (0, r.jsx)(u.vwX, {
                                            tag: u.RB0.H5,
                                            children: W.intl.string(W.t['/AAR09'])
                                        }),
                                        (0, r.jsx)(d.Z, {
                                            selectedCurrency: ee.currency,
                                            currencies: et,
                                            onChange: en
                                        })
                                    ]
                                })
                      ]
                  }),
                  (0, r.jsx)(k.Z, {
                      isActive: es,
                      ref: eo,
                      children: (0, r.jsx)(p.Z, {
                          onChange: ea,
                          forceShow: !0,
                          checkboxLabel: tr,
                          checkboxClassname: ti,
                          checkboxLabelClassname: ta,
                          finePrint:
                              null != (H = !eA && ec)
                                  ? H
                                  : (0, r.jsx)(f.Z, {
                                        hide: eh || em,
                                        subscriptionPlan: eM,
                                        renewalInvoice: eZ,
                                        isGift: eR,
                                        paymentSourceType: e$,
                                        isEmbeddedIAP: eE,
                                        basePrice: (0, C.aS)(eM.id, !1, eR, ee)
                                    }),
                          showPricingLink: eM.currency !== Y.pK.USD,
                          showWithdrawalWaiver: tn,
                          disabled: ej,
                          isTrial: eh && null == ec,
                          inReverseTrial: eA,
                          isDiscount: em,
                          subscriptionPlan: eM,
                          isGift: eR
                      })
                  })
              ]
          });
}
