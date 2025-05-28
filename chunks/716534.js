n.d(t, { Z: () => q }), n(388685);
var r = n(255367),
    i = n(73800),
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
    O = n(435020),
    v = n(246946),
    I = n(351402),
    S = n(509545),
    T = n(855775),
    A = n(55563),
    N = n(669079),
    C = n(74538),
    P = n(937615),
    R = n(479446),
    w = n(374649),
    D = n(104494),
    L = n(642530),
    x = n(811334),
    k = n(346071),
    M = n(314182),
    j = n(981632),
    U = n(396955),
    G = n(314404),
    B = n(42818),
    F = n(459965),
    V = n(251660),
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
            s = (0, P.og)((0, P.T4)(t.total, t.currency), e, o),
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
        { isEmbeddedIAP: eE, activeSubscription: eb, selectedSkuId: ey, defaultPlanId: eO, isPremium: ev, startedPaymentFlowWithPaymentSourcesRef: eI, setInvoicePreview: eS, contextMetadata: eT, inReverseTrial: eA, setPurchaseError: eN, hasPaymentSources: eC, enablePremiumRebrandDesign: eP } = (0, g.JL)(),
        { isGift: eR, giftRecipient: ew, selectedGiftStyle: eD } = (0, m.wD)(),
        eL = (0, D.Ng)(),
        ex = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids.some((e) => Z.GP[e].skuId === ey),
        ek = !eR && null != eL && null != ey && ex,
        eM = (0, l.e7)([S.Z], () => S.Z.get(X));
    o()(null != eM, 'Missing plan');
    let ej = [
            {
                planId: eM.id,
                quantity: 1
            }
        ],
        eU = ef === E.A.PURCHASING || ef === E.A.COMPLETED,
        eG = null != ey ? ey : '',
        eB = (0, l.e7)([A.Z], () => A.Z.get(eG), [eG]),
        eF = null == eB ? void 0 : eB.eligiblePaymentGateways,
        [eV, eZ] = (0, w.ED)({
            items: ej,
            renewal: !1,
            preventFetch: eA || eR || eU,
            applyEntitlements: !0,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            trialId: el,
            metadata: ed
        }),
        [eH, eY] = (0, w.ED)({
            subscriptionId: null == eb ? void 0 : eb.id,
            items: ej,
            renewal: !0,
            preventFetch: eR || eU,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed
        }),
        [eW, eK] = (0, w.ED)({
            items: [
                {
                    planId: Z.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !ek,
            trialId: el,
            paymentSourceId: ee.paymentSourceId,
            currency: ee.currency,
            metadata: ed
        }),
        [ez, eq] = (0, w.o5)({
            paymentSourceId: ee.paymentSourceId,
            skuId: ey,
            subscriptionPlanId: X,
            currency: ee.currency,
            preventFetch: !eR || eU,
            loadId: eT.loadId
        }),
        eQ = eR && (0, N.pO)(ew),
        eX = null != (a = null != (n = null != eZ ? eZ : eY) ? n : eK) ? a : eq;
    i.useEffect(() => {
        eN(eX);
    }, [eX, eN]);
    let eJ = (0, l.e7)([v.Z], () => v.Z.enabled),
        e$ = ee.paymentSourceId,
        e0 = (0, O.$)($, e$),
        { hasEntitlements: e1, entitlements: e2 } = (0, F.H)(eM.id, eR),
        e3 = (0, C.Ap)(ee.paymentSourceId),
        e4 = (0, b.sE)(el, e$, X),
        e5 = (0, y.Kp)({
            isTrial: eh,
            isGift: eR,
            selectedSkuId: ey,
            startedPaymentFlowWithPaymentSources: eI.current,
            inReverseTrial: eA
        }),
        [e6, e8] = i.useState(null == eV ? void 0 : eV.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == e6 && e8(null == eV ? void 0 : eV.subscriptionPeriodEnd);
    }, [null == eV ? void 0 : eV.subscriptionPeriodEnd, e6]);
    let e7 = (0, h.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0
        }),
        e9 = !e5 && e7.isFractionalPremiumActive && Z.dJ.has(X),
        te = i.useMemo(
            () =>
                (0, C.V7)({
                    skuId: ey,
                    isPremium: ev,
                    multiMonthPlans: [],
                    currentSubscription: eb,
                    defaultPlanId: eO
                }),
            [ey, eb, eO, ev]
        ),
        tt = (0, y.$g)(e5, eV, eM),
        tn = i.useMemo(() => (eh && null != eV ? eV : eA && null != eH ? eH : void 0), [eA, eh, eV, eH]);
    if (
        (i.useEffect(() => {
            eR && null != ez ? eS(ez) : null != eV && eS(eV);
        }, [eR, eS, ez, eV]),
        null != eX)
    );
    else if (eR && null != ez)
        Q = (0, r.jsx)(B.e9, {
            plan: eM,
            className: K.invoice,
            isPrepaidPaymentSource: e3,
            isCustomGift: eQ,
            invoicePreview: ez
        });
    else if (null != tn)
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
                                        price: (0, P.T4)(0, tn.currency, {
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
                                invoice: tn,
                                plan: eM
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eV || null == eH || tt)
            return (0, r.jsx)('div', {
                className: K.spinnerWrapper,
                children: (0, r.jsx)(u.$jN, {})
            });
        eh && eV.subscriptionPeriodEnd !== eH.subscriptionPeriodEnd && (q = eV.subscriptionPeriodEnd),
            (Q = (0, r.jsxs)(r.Fragment, {
                children: [
                    e9 &&
                        (0, r.jsx)(k.n, {
                            fractionalPremiumInfo: e7,
                            enablePremiumRebrandDesign: eP
                        }),
                    (0, r.jsxs)(x.aO, {
                        className: K.invoice,
                        children: [
                            (0, r.jsx)(x.Z9, { children: W.intl.string(W.t['2eh+Cg']) }),
                            (0, r.jsx)(B.Lu, {
                                invoice: eV,
                                newPlan: eM,
                                isPrepaidPaymentSource: e3,
                                referralTrialOfferId: ep
                            }),
                            e3
                                ? null
                                : (0, r.jsx)(B.nd, {
                                      renewalInvoice: eH,
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
    let tr = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        { checkboxLabel: ti, checkboxClassname: ta, checkboxLabelClassname: to } = z(null != eh && eh, eH, q),
        ts = W.intl.formatToPlainString(W.t['sBpy9/'], { planName: eM.name });
    eR && !eQ ? (ts = W.intl.string(W.t.J5a0eX)) : eR && eQ ? (ts = '') : (0, C.PV)(eM.id) && (ts = C.ZP.getBillingReviewSubheader(null, eM));
    let tl = null != eF && eF.length > 0 && (e$ === T.c || null === e0) && eC ? U.w.SELECT_PAYMENT_METHOD : void 0;
    return e4
        ? null
        : (0, r.jsxs)('div', {
              className: K.stepBody,
              children: [
                  (0, r.jsx)(U.Y, { paymentRestrictionBannerType: tl }),
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
                  e5 &&
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(x.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0
                              }),
                              (0, r.jsx)(L.Z, {}),
                              (0, r.jsx)(G.O, {
                                  planOptions: te,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: X,
                                  planGroup: J,
                                  subscriptionPeriodEnd: e6,
                                  showTotal: !1,
                                  discountInvoiceItems: ek ? (null == eW ? void 0 : eW.invoiceItems) : void 0,
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
                      '' !== ts &&
                      (0, r.jsx)(u.vwX, {
                          tag: u.RB0.H5,
                          children: ts
                      }),
                  eQ &&
                      null != eD &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(j.Z, {
                                  defaultAnimationState: R.SR.LOOP,
                                  giftStyle: eD,
                                  shouldAnimate: !0,
                                  className: K.giftMainAnimation
                              }),
                              (0, r.jsx)(V.s, { giftRecipient: ew })
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
                              selectedPaymentSourceId: e$,
                              prependOption:
                                  e1 && !eh
                                      ? {
                                            label: W.intl.string(W.t.IGU7Eh),
                                            value: null
                                        }
                                      : null,
                              onChange: er,
                              onPaymentSourceAdd: ei,
                              hidePersonalInformation: eJ,
                              isTrial: eh,
                              paymentGatewayRestrictions: eF
                          }),
                          e1 && null == e$
                              ? (0, r.jsx)('div', {
                                    className: K.paymentSourceOptionalWarning,
                                    children: W.intl.format(W.t['2wPRSE'], { months: e2.length })
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
                  (0, r.jsx)(M.Z, {
                      isActive: es,
                      ref: eo,
                      children: (0, r.jsx)(p.Z, {
                          onChange: ea,
                          forceShow: !0,
                          checkboxLabel: ti,
                          checkboxClassname: ta,
                          checkboxLabelClassname: to,
                          finePrint:
                              null != (H = !eA && ec)
                                  ? H
                                  : (0, r.jsx)(f.Z, {
                                        hide: eh || em,
                                        subscriptionPlan: eM,
                                        renewalInvoice: eH,
                                        isGift: eR,
                                        paymentSourceType: e0,
                                        isEmbeddedIAP: eE,
                                        basePrice: (0, C.aS)(eM.id, !1, eR, ee)
                                    }),
                          showPricingLink: eM.currency !== Y.pK.USD,
                          showWithdrawalWaiver: tr,
                          disabled: eU,
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
