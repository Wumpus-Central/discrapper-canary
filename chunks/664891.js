n.d(t, { Z: () => G }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    o = n.n(a),
    s = n(742280),
    l = n(442837),
    c = n(481060),
    u = n(190947),
    d = n(224550),
    f = n(275850),
    _ = n(672971),
    p = n(100527),
    h = n(906732),
    m = n(975298),
    g = n(987209),
    E = n(563132),
    b = n(45572),
    y = n(614223),
    v = n(435020),
    O = n(246946),
    I = n(351402),
    S = n(509545),
    T = n(74538),
    N = n(296848),
    A = n(374649),
    C = n(642530),
    R = n(811334),
    P = n(585602),
    w = n(314182),
    D = n(314404),
    L = n(42818),
    x = n(474936),
    M = n(981631),
    k = n(388032),
    j = n(393040),
    U = n(236691);
function G(e) {
    let t,
        { premiumSubscription: n, paymentSources: a, priceOptions: p, onPaymentSourceChange: h, onPaymentSourceAdd: A, planId: P, setHasAcceptedTerms: L, legalTermsNodeRef: x, hasLegalTermsFlash: j, onInvoiceError: G, planGroup: W, currencies: Y, onCurrencyChange: K, hasOpenInvoice: z, purchaseState: q, handleClose: Q } = e,
        { selectedSkuId: X, defaultPlanId: J, isPremium: $, startedPaymentFlowWithPaymentSourcesRef: ee } = (0, E.JL)(),
        { isGift: et } = (0, g.wD)(),
        en = p.paymentSourceId,
        er = (0, v.$)(a, en),
        ei = (0, l.e7)([S.Z], () => S.Z.get(P));
    o()(null != ei, 'Missing newPlan');
    let ea = (0, l.e7)([O.Z], () => O.Z.hidePersonalInformation),
        eo = (0, m.Z)(),
        es = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        el = q === b.A.PURCHASING || q === b.A.COMPLETED,
        ec = (0, y.Kp)({
            isTrial: !1,
            isGift: et,
            selectedSkuId: X,
            startedPaymentFlowWithPaymentSources: ee.current
        }),
        eu = null == n ? void 0 : n.isPausedAllowsResumeButNotUpdates,
        ed = i.useMemo(
            () =>
                (0, T.V7)({
                    skuId: X,
                    isPremium: $,
                    multiMonthPlans: [],
                    currentSubscription: n,
                    defaultPlanId: J
                }),
            [X, n, J, $]
        );
    t = z || eu ? k.NW.string(k.t.nyzoFR) : (0, T.PV)(P) ? (0, T.W_)(n, ei) : k.NW.formatToPlainString(k.t['sBpy9/'], { planName: ei.name });
    let ef = null;
    return (
        null != n &&
            (ef = z
                ? (0, r.jsx)(B, {
                      premiumSubscription: n,
                      onInvoiceError: G,
                      priceOptions: p,
                      preventFetch: !1
                  })
                : eu
                  ? (0, r.jsx)(Z, {
                        premiumSubscription: n,
                        onInvoiceError: G,
                        priceOptions: p,
                        preventFetch: el
                    })
                  : (0, N.R4)(n, P, W)
                    ? (0, r.jsx)(F, {
                          premiumSubscription: n,
                          newPlan: ei,
                          onInvoiceError: G,
                          planGroup: W,
                          priceOptions: p,
                          fractionalPremiumInfo: eo,
                          preventFetch: el
                      })
                    : (0, r.jsx)(H, {
                          premiumSubscription: n,
                          newPlan: ei,
                          planGroup: W,
                          fractionalPremiumInfo: eo,
                          priceOptions: p,
                          preventFetch: el
                      })),
        (0, r.jsxs)('div', {
            className: U.stepBody,
            children: [
                !eu &&
                    ec &&
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(R.UN, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, r.jsx)(C.Z, {}),
                            (0, r.jsx)(D.O, {
                                planOptions: ed,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: P,
                                planGroup: W,
                                showTotal: !1,
                                handleClose: Q
                            }),
                            (0, r.jsx)(R.UN, {})
                        ]
                    }),
                (0, r.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    children: t
                }),
                ef,
                (0, r.jsxs)('div', {
                    className: U.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: k.NW.string(k.t.mmDvV1)
                        }),
                        (0, r.jsx)(f.Z, {
                            paymentSources: Object.values(a),
                            selectedPaymentSourceId: en,
                            onChange: h,
                            onPaymentSourceAdd: A,
                            hidePersonalInformation: ea,
                            disabled: el
                        })
                    ]
                }),
                (0, r.jsxs)(u.b, {
                    currencies: Y,
                    className: U.currencyWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: k.NW.string(k.t['/AAR09'])
                        }),
                        (0, r.jsx)(u.Z, {
                            selectedCurrency: p.currency,
                            currencies: Y,
                            onChange: K,
                            disabled: el
                        })
                    ]
                }),
                (0, r.jsx)(w.Z, {
                    isActive: j,
                    ref: x,
                    children:
                        null != n && (0, N.R4)(n, P, W)
                            ? (0, r.jsx)(V, {
                                  premiumSubscription: n,
                                  newPlan: ei,
                                  onInvoiceError: G,
                                  planGroup: W,
                                  priceOptions: p,
                                  preventFetch: el,
                                  disabled: el,
                                  isEEA: es,
                                  paymentSources: a,
                                  setHasAcceptedTerms: L
                              })
                            : (0, r.jsx)(_.Z, {
                                  onChange: L,
                                  finePrint: (0, r.jsx)(d.Z, {
                                      subscriptionPlan: ei,
                                      paymentSourceType: er,
                                      basePrice: (0, T.aS)(ei.id, !1, et, p),
                                      currentSubscription: n,
                                      planGroup: W
                                  }),
                                  forceShow: !0,
                                  showPricingLink: ei.currency !== M.pKx.USD,
                                  showWithdrawalWaiver: es,
                                  disabled: el,
                                  subscriptionPlan: ei,
                                  currentSubscription: n,
                                  planGroup: W
                              })
                })
            ]
        })
    );
}
function B(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: o } = e,
        [s, l] = (0, A.Ox)({
            subscriptionId: t.id,
            preventFetch: o
        });
    i.useEffect(() => {
        n(l);
    }, [n, l]);
    let u = (0, T.Ap)(a.paymentSourceId);
    return null != s
        ? (0, r.jsxs)(R.aO, {
              className: j.__invalid_invoice,
              children: [
                  (0, r.jsx)(L.By, {
                      invoice: s,
                      isPrepaidPaymentSource: u
                  }),
                  (0, r.jsx)(L.nd, {
                      premiumSubscription: t,
                      renewalInvoice: s,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, r.jsx)(c.$jN, {});
}
function F(e) {
    let t,
        { premiumSubscription: n, newPlan: a, onInvoiceError: o, planGroup: s, priceOptions: l, fractionalPremiumInfo: u, preventFetch: d } = e,
        { selectedSkuId: f, startedPaymentFlowWithPaymentSourcesRef: _ } = (0, E.JL)(),
        { isGift: m } = (0, g.wD)(),
        { analyticsLocations: b } = (0, h.ZP)(),
        v = (0, T.al)(n, a.id, 1, new Set(s)),
        [O, I] = (0, A.ED)({
            subscriptionId: n.id,
            items: v,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: d,
            analyticsLocations: b,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [S, N] = (0, A.ED)({
            subscriptionId: n.id,
            items: v,
            renewal: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: d,
            analyticsLocations: b,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        C = null != I ? I : N;
    if (
        (i.useEffect(() => {
            o(C);
        }, [o, C]),
        null != C)
    )
        return (0, r.jsx)(c.kzN, { children: C.message });
    let P = (0, y.Kp)({
            isTrial: !1,
            isGift: m,
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSources: _.current
        }),
        w = (0, y.$g)(P, O, a);
    if ((null !== u && null !== O && (t = (0, T.N1)(O.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == O || null == S || w)) return (0, r.jsx)(c.$jN, { className: U.__invalid_spinner });
    let D = (0, T.Ap)(l.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.hG, {
                proratedInvoice: O,
                renewalInvoice: S,
                overrideRenewalDate: t
            }),
            (0, r.jsxs)(R.aO, {
                className: U.invoice,
                children: [
                    (0, r.jsx)(R.Z9, { children: k.NW.string(k.t['2eh+Cg']) }),
                    (0, r.jsx)(L.Lu, {
                        invoice: O,
                        newPlan: a,
                        isPrepaidPaymentSource: D
                    }),
                    (0, r.jsx)(L.nd, {
                        premiumSubscription: n,
                        proratedInvoice: O,
                        renewalInvoice: S,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: D
                    })
                ]
            })
        ]
    });
}
function V(e) {
    let t,
        { premiumSubscription: n, newPlan: a, onInvoiceError: o, planGroup: s, priceOptions: l, preventFetch: u, disabled: f, isEEA: m, paymentSources: g, setHasAcceptedTerms: E } = e,
        { analyticsLocations: b } = (0, h.ZP)(),
        y = (0, T.al)(n, a.id, 1, new Set(s)),
        [O, I] = (0, A.ED)({
            subscriptionId: n.id,
            items: y,
            renewal: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: u,
            analyticsLocations: b,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        S = (0, v.$)(g, l.paymentSourceId),
        N = I;
    return (i.useEffect(() => {
        o(N);
    }, [o, N]),
    null != N)
        ? (0, r.jsx)(c.kzN, { children: N.message })
        : (null != O &&
                (t = {
                    amount: O.total,
                    currency: O.currency,
                    tax: O.tax,
                    taxInclusive: O.taxInclusive
                }),
            null == t)
          ? null
          : (0, r.jsx)(_.Z, {
                onChange: E,
                finePrint: (0, r.jsx)(d.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: S,
                    basePrice: t,
                    currentSubscription: n,
                    planGroup: s
                }),
                forceShow: !0,
                showPricingLink: a.currency !== M.pKx.USD,
                showWithdrawalWaiver: m,
                disabled: f,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: s
            });
}
function Z(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: o } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        [l, u] = (0, A.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: s,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, f] = (0, A.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: s,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        _ = null != u ? u : f;
    if (
        (i.useEffect(() => {
            o(_);
        }, [o, _]),
        null != _)
    )
        return (0, r.jsx)(c.kzN, { children: _.message });
    if (null == l || null == d) return (0, r.jsx)(c.$jN, { className: U.__invalid_spinner });
    let m = (0, T.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: j.renewalInvoiceDate,
                children: k.NW.string(k.t.spIYoq)
            }),
            (0, r.jsxs)(R.aO, {
                className: U.invoice,
                children: [
                    (0, r.jsx)(R.Z9, { children: k.NW.string(k.t['2eh+Cg']) }),
                    (0, r.jsx)(L.By, {
                        invoice: l,
                        isPrepaidPaymentSource: m
                    }),
                    (0, r.jsx)(L.nd, {
                        premiumSubscription: t,
                        renewalInvoice: d,
                        isUpdate: !0,
                        isPrepaidPaymentSource: m
                    })
                ]
            })
        ]
    });
}
function H(e) {
    let t,
        { premiumSubscription: n, newPlan: i, planGroup: a, fractionalPremiumInfo: o, priceOptions: s, preventFetch: l } = e,
        { analyticsLocations: u } = (0, h.ZP)(),
        [d, f] = (0, A.ED)({
            subscriptionId: n.id,
            items: (0, T.al)(n, i.id, 1, new Set(a)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: u,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != f) return (0, r.jsx)(c.kzN, { children: f.message });
    if (null == d) return (0, r.jsx)('div', { children: (0, r.jsx)(c.$jN, {}) });
    t = n.type === M.NYc.PREMIUM ? (0, T.Gf)(i.id) : i.name;
    let _ = (0, T.Ap)(s.paymentSourceId),
        p = d.subscriptionPeriodStart;
    return (
        o.fractionalState === x.a$.FP_SUB_PAUSED && (p = o.endsAt.toDate()),
        (0, r.jsxs)('div', {
            className: U.bodyText,
            children: [
                (0, r.jsx)('div', {
                    className: j.renewalInvoiceDate,
                    children: k.NW.format(k.t['+y0Tj4'], { renewalDate: p })
                }),
                (0, r.jsxs)(R.aO, {
                    className: U.invoice,
                    children: [
                        (0, r.jsx)(R.Z9, { children: k.NW.string(k.t.iqhIp6) }),
                        (0, r.jsx)(R.B1, {
                            label: t,
                            value: (0, T.PK)(i, s, !0)
                        }),
                        (0, r.jsx)(P.Z, { invoice: d }),
                        (0, r.jsx)(R.UN, {}),
                        (0, r.jsx)(L.nd, {
                            premiumSubscription: n,
                            renewalInvoice: d,
                            isUpdate: !0,
                            isPrepaidPaymentSource: _
                        })
                    ]
                })
            ]
        })
    );
}
