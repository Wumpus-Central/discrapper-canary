(n.d(t, { Z: () => Q }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(742280),
    u = n(442837),
    d = n(692547),
    _ = n(481060),
    f = n(190947),
    p = n(224550),
    h = n(275850),
    m = n(672971),
    g = n(975298),
    E = n(987209),
    b = n(563132),
    y = n(45572),
    O = n(919778),
    v = n(614223),
    I = n(435020),
    T = n(246946),
    S = n(351402),
    A = n(509545),
    N = n(855775),
    C = n(55563),
    R = n(669079),
    P = n(74538),
    w = n(937615),
    D = n(479446),
    L = n(374649),
    x = n(104494),
    k = n(642530),
    M = n(811334),
    j = n(346071),
    U = n(314182),
    G = n(981632),
    B = n(396955),
    V = n(314404),
    F = n(42818),
    Z = n(459965),
    H = n(251660),
    Y = n(474936),
    W = n(981631),
    K = n(231338),
    z = n(388032),
    q = n(236691);
function X(e, t, n) {
    let r = null,
        i = null,
        a = null;
    if (e && null != t) {
        let { intervalType: e, intervalCount: o } = P.ZP.getIntervalForInvoice(t),
            s = (0, w.og)((0, w.T4)(t.total, t.currency), e, o),
            l = null != n ? n : t.subscriptionPeriodEnd;
        ((r = z.intl.format(z.t.ZzmrTk, {
            termsURL: W.EYA.TERMS,
            paidURL: W.EYA.PAID_TERMS,
            rate: s,
            renewalDate: l
        })),
            (i = q.trialCheckbox),
            (a = q.trialCheckboxLabel));
    }
    return {
        checkboxLabel: r,
        checkboxClassname: i,
        checkboxLabelClassname: a
    };
}
function Q(e) {
    var t, n, a, s;
    let W,
        Q,
        { selectedPlanId: J, planGroup: $, paymentSources: ee, priceOptions: et, currencies: en, onCurrencyChange: er, onPaymentSourceChange: ei, handlePaymentSourceAdd: ea, setHasAcceptedTerms: eo, legalTermsNodeRef: es, hasLegalTermsFlash: el, trialId: ec, trialFooterMessageOverride: eu, reviewWarningMessage: ed, metadata: e_, purchaseState: ef, hideSubscriptionDetails: ep, referralTrialOfferId: eh, isTrial: em = !1, isDiscount: eg = !1, handleClose: eE } = e,
        { isEmbeddedIAP: eb, activeSubscription: ey, selectedSkuId: eO, defaultPlanId: ev, isPremium: eI, startedPaymentFlowWithPaymentSourcesRef: eT, setInvoicePreview: eS, contextMetadata: eA, inReverseTrial: eN, setPurchaseError: eC, hasPaymentSources: eR, enablePremiumBrandRefresh: eP, premiumBrandRefreshBackgroundClassName: ew } = (0, b.JL)(),
        { isGift: eD, giftRecipient: eL, selectedGiftStyle: ex } = (0, E.wD)(),
        ek = (0, x.Ng)(),
        eM = null == ek || null == (t = ek.discount) ? void 0 : t.plan_ids.some((e) => Y.GP[e].skuId === eO),
        ej = !eD && null != ek && null != eO && eM,
        eU = (0, u.e7)([A.Z], () => A.Z.get(J));
    l()(null != eU, 'Missing plan');
    let eG = [
            {
                planId: eU.id,
                quantity: 1
            }
        ],
        eB = ef === y.A.PURCHASING || ef === y.A.COMPLETED,
        eV = null != eO ? eO : '',
        eF = (0, u.e7)([C.Z], () => C.Z.get(eV), [eV]),
        eZ = null == eF ? void 0 : eF.eligiblePaymentGateways,
        [eH, eY] = (0, L.ED)({
            items: eG,
            renewal: !1,
            preventFetch: eN || eD || eB,
            applyEntitlements: !0,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
            trialId: ec,
            metadata: e_
        }),
        [eW, eK] = (0, L.ED)({
            subscriptionId: null == ey ? void 0 : ey.id,
            items: eG,
            renewal: !0,
            preventFetch: eD || eB,
            trialId: ec,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
            metadata: e_
        }),
        [ez, eq] = (0, L.ED)({
            items: [
                {
                    planId: Y.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !ej,
            trialId: ec,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
            metadata: e_
        }),
        [eX, eQ] = (0, L.o5)({
            paymentSourceId: et.paymentSourceId,
            skuId: eO,
            subscriptionPlanId: J,
            currency: et.currency,
            preventFetch: !eD || eB,
            loadId: eA.loadId
        }),
        eJ = eD && (0, R.pO)(eL),
        e$ = null != (a = null != (n = null != eY ? eY : eK) ? n : eq) ? a : eQ;
    i.useEffect(() => {
        eC(e$);
    }, [e$, eC]);
    let e0 = (0, u.e7)([T.Z], () => T.Z.enabled),
        e1 = et.paymentSourceId,
        e2 = (0, I.$)(ee, e1),
        { hasEntitlements: e3, entitlements: e4 } = (0, Z.H)(eU.id, eD),
        e5 = (0, P.Ap)(et.paymentSourceId),
        e6 = (0, O.sE)(ec, e1, J),
        e8 = (0, v.Kp)({
            isTrial: em,
            isGift: eD,
            selectedSkuId: eO,
            startedPaymentFlowWithPaymentSources: eT.current,
            inReverseTrial: eN
        }),
        [e7, e9] = i.useState(null == eH ? void 0 : eH.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == e7 && e9(null == eH ? void 0 : eH.subscriptionPeriodEnd);
    }, [null == eH ? void 0 : eH.subscriptionPeriodEnd, e7]);
    let te = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0
        }),
        tt = !e8 && te.isFractionalPremiumActive && Y.dJ.has(J),
        tn = i.useMemo(
            () =>
                (0, P.V7)({
                    skuId: eO,
                    isPremium: eI,
                    multiMonthPlans: [],
                    currentSubscription: ey,
                    defaultPlanId: ev
                }),
            [eO, ey, ev, eI]
        ),
        tr = (0, v.$g)(e8, eH, eU),
        ti = i.useMemo(() => (em && null != eH ? eH : eN && null != eW ? eW : void 0), [eN, em, eH, eW]);
    if (
        (i.useEffect(() => {
            eD ? eS(eX) : eS(eH);
        }, [eD, eS, eX, eH]),
        null != e$)
    );
    else if (eD && null != eX)
        Q = (0, r.jsx)(F.e9, {
            plan: eU,
            className: o()(q.invoice, ew),
            isPrepaidPaymentSource: e5,
            isCustomGift: eJ,
            invoicePreview: eX
        });
    else if (null != ti)
        Q = (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(M.UN, { negativeMarginTop: !eN }),
                (0, r.jsxs)(M.aO, {
                    className: o()(q.invoice, ew),
                    children: [
                        (0, r.jsxs)('div', {
                            className: q.trialPriceLine,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-md/bold',
                                    children: z.intl.string(z.t.txajQE)
                                }),
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    children: z.intl.format(z.t.hXcaLS, {
                                        price: (0, w.T4)(0, ti.currency, {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: q.afterTrialPriceLine,
                            children: (0, r.jsx)(F.yT, {
                                invoice: ti,
                                plan: eU
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eH || null == eW || tr)
            return (0, r.jsx)('div', {
                className: q.spinnerWrapper,
                children: (0, r.jsx)(_.$jN, {})
            });
        (em && eH.subscriptionPeriodEnd !== eW.subscriptionPeriodEnd && (W = eH.subscriptionPeriodEnd),
            (Q = (0, r.jsxs)(r.Fragment, {
                children: [
                    tt &&
                        (0, r.jsx)(j.n, {
                            fractionalPremiumInfo: te,
                            enablePremiumBrandRefresh: eP
                        }),
                    (0, r.jsxs)(M.aO, {
                        className: o()(q.invoice, ew),
                        children: [
                            (0, r.jsx)(M.Z9, { children: z.intl.string(z.t['2eh+Cg']) }),
                            (0, r.jsx)(F.Lu, {
                                invoice: eH,
                                newPlan: eU,
                                isPrepaidPaymentSource: e5,
                                referralTrialOfferId: eh
                            }),
                            e5
                                ? null
                                : (0, r.jsx)(F.nd, {
                                      renewalInvoice: eW,
                                      isTrial: em,
                                      priceOptions: et,
                                      overrideRenewalDate: W,
                                      trialFooterMessageOverride: eu,
                                      hideSubscriptionDetails: ep
                                  })
                        ]
                    })
                ]
            })));
    }
    let ta = c.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback),
        { checkboxLabel: to, checkboxClassname: ts, checkboxLabelClassname: tl } = X(null != em && em, eW, W),
        tc = z.intl.formatToPlainString(z.t['sBpy9/'], { planName: eU.name });
    eD && !eJ ? (tc = z.intl.string(z.t.J5a0eX)) : eD && eJ ? (tc = '') : (0, P.PV)(eU.id) && (tc = P.ZP.getBillingReviewSubheader(null, eU));
    let tu = null != eZ && eZ.length > 0 && (e1 === N.c || null === e2) && eR ? B.w.SELECT_PAYMENT_METHOD : void 0;
    return e6
        ? null
        : (0, r.jsxs)('div', {
              className: q.stepBody,
              children: [
                  (0, r.jsx)(B.Y, { paymentRestrictionBannerType: tu }),
                  null != ed &&
                      (0, r.jsxs)('div', {
                          className: q.reviewWarningMessageContainer,
                          children: [
                              (0, r.jsx)(_.d3s, {
                                  size: 'custom',
                                  color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20
                              }),
                              (0, r.jsx)(_.Text, {
                                  className: q.reviewWarningMessage,
                                  variant: 'text-sm/normal',
                                  children: ed
                              })
                          ]
                      }),
                  e8 &&
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(M.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0
                              }),
                              (0, r.jsx)(k.Z, {}),
                              (0, r.jsx)(V.O, {
                                  planOptions: tn,
                                  eligibleForMultiMonthPlans: !1,
                                  referralTrialOfferId: void 0,
                                  selectedPlanId: J,
                                  planGroup: $,
                                  subscriptionPeriodEnd: e7,
                                  showTotal: !1,
                                  discountInvoiceItems: ej ? (null == ez ? void 0 : ez.invoiceItems) : void 0,
                                  handleClose: eE
                              }),
                              (0, r.jsx)(M.UN, {})
                          ]
                      }),
                  eN &&
                      (0, r.jsx)(_.X6q, {
                          variant: 'heading-md/normal',
                          color: 'always-white',
                          className: q.trialHeader,
                          children: z.intl.format(z.t['7ZS2m5'], { trialEnd: null == ey ? void 0 : ey.currentPeriodEnd })
                      }),
                  !em &&
                      '' !== tc &&
                      (0, r.jsx)(_.vwX, {
                          tag: _.RB0.H5,
                          children: tc
                      }),
                  eJ &&
                      null != ex &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(G.Z, {
                                  defaultAnimationState: D.SR.LOOP,
                                  giftStyle: ex,
                                  shouldAnimate: !0,
                                  className: q.giftMainAnimation
                              }),
                              (0, r.jsx)(H.s, { giftRecipient: eL })
                          ]
                      }),
                  Q,
                  (0, r.jsxs)('div', {
                      className: q.paymentSourceWrapper,
                      children: [
                          em
                              ? (0, r.jsx)(_.vwX, {
                                    tag: _.RB0.H5,
                                    className: q.formTitle,
                                    children: z.intl.string(z.t['YH7B+P'])
                                })
                              : (0, r.jsx)(_.vwX, {
                                    tag: _.RB0.H5,
                                    children: z.intl.string(z.t.mmDvV1)
                                }),
                          (0, r.jsx)(h.ZP, {
                              paymentSources: Object.values(ee),
                              selectedPaymentSourceId: e1,
                              prependOption:
                                  e3 && !em
                                      ? {
                                            label: z.intl.string(z.t.IGU7Eh),
                                            value: null
                                        }
                                      : null,
                              onChange: ei,
                              onPaymentSourceAdd: ea,
                              hidePersonalInformation: e0,
                              isTrial: em,
                              paymentGatewayRestrictions: eZ,
                              className: o()({ [q.premiumBrandRefreshInputBackground]: eP })
                          }),
                          e3 && null == e1
                              ? (0, r.jsx)('div', {
                                    className: q.paymentSourceOptionalWarning,
                                    children: z.intl.format(z.t['2wPRSE'], { months: e4.length })
                                })
                              : null,
                          eg
                              ? null
                              : (0, r.jsxs)(f.b, {
                                    currencies: en,
                                    className: q.currencyWrapper,
                                    children: [
                                        (0, r.jsx)(_.vwX, {
                                            tag: _.RB0.H5,
                                            children: z.intl.string(z.t['/AAR09'])
                                        }),
                                        (0, r.jsx)(f.Z, {
                                            selectedCurrency: et.currency,
                                            currencies: en,
                                            onChange: er
                                        })
                                    ]
                                })
                      ]
                  }),
                  (0, r.jsx)(U.Z, {
                      isActive: el,
                      ref: es,
                      children: (0, r.jsx)(m.Z, {
                          onChange: eo,
                          forceShow: !0,
                          checkboxLabel: to,
                          checkboxClassname: ts,
                          checkboxLabelClassname: tl,
                          finePrint:
                              null != (s = !eN && eu)
                                  ? s
                                  : (0, r.jsx)(p.Z, {
                                        hide: em || eg,
                                        subscriptionPlan: eU,
                                        renewalInvoice: eW,
                                        isGift: eD,
                                        paymentSourceType: e2,
                                        isEmbeddedIAP: eb,
                                        basePrice: (0, P.aS)(eU.id, !1, eD, et)
                                    }),
                          showPricingLink: eU.currency !== K.pK.USD,
                          showWithdrawalWaiver: ta,
                          disabled: eB,
                          isTrial: em && null == eu,
                          inReverseTrial: eN,
                          isDiscount: eg,
                          subscriptionPlan: eU,
                          isGift: eD
                      })
                  })
              ]
          });
}
