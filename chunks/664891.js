n.d(t, { Z: () => G }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
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
    R = n(653798),
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
        { premiumSubscription: n, paymentSources: o, priceOptions: p, onPaymentSourceChange: h, onPaymentSourceAdd: A, planId: P, setHasAcceptedTerms: L, legalTermsNodeRef: x, hasLegalTermsFlash: j, onInvoiceError: G, planGroup: W, currencies: Y, onCurrencyChange: K, hasOpenInvoice: z, purchaseState: q, handleClose: Q } = e,
        { selectedSkuId: X, defaultPlanId: J, isPremium: $, startedPaymentFlowWithPaymentSourcesRef: ee } = (0, E.JL)(),
        { isGift: et } = (0, g.wD)(),
        en = p.paymentSourceId,
        er = (0, v.$)(o, en),
        ei = (0, l.e7)([S.Z], () => S.Z.get(P));
    a()(null != ei, 'Missing newPlan');
    let eo = (0, l.e7)([O.Z], () => O.Z.hidePersonalInformation),
        ea = (0, m.Z)(),
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
                          preventFetch: el
                      })
                    : (0, r.jsx)(H, {
                          premiumSubscription: n,
                          newPlan: ei,
                          planGroup: W,
                          fractionalPremiumInfo: ea,
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
                            (0, r.jsx)(R.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, r.jsx)(C.Z, {}),
                            (0, r.jsx)(D.O, {
                                planOptions: ed,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: P,
                                showTotal: !1,
                                handleClose: Q
                            }),
                            (0, r.jsx)(R.KU, {})
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
                            paymentSources: Object.values(o),
                            selectedPaymentSourceId: en,
                            onChange: h,
                            onPaymentSourceAdd: A,
                            hidePersonalInformation: eo,
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
                                  paymentSources: o,
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
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: o, preventFetch: a } = e,
        [s, l] = (0, A.Ox)({
            subscriptionId: t.id,
            preventFetch: a
        });
    i.useEffect(() => {
        n(l);
    }, [n, l]);
    let u = (0, T.Ap)(o.paymentSourceId);
    return null != s
        ? (0, r.jsxs)(R.PO, {
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
    let { premiumSubscription: t, newPlan: n, onInvoiceError: o, planGroup: a, priceOptions: s, preventFetch: l } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, E.JL)(),
        { isGift: f } = (0, g.wD)(),
        { analyticsLocations: _ } = (0, h.ZP)(),
        m = (0, T.al)(t, n.id, 1, new Set(a)),
        [b, v] = (0, A.ED)({
            subscriptionId: t.id,
            items: m,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: _,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [O, I] = (0, A.ED)({
            subscriptionId: t.id,
            items: m,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: _,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        S = null != v ? v : I;
    if (
        (i.useEffect(() => {
            o(S);
        }, [o, S]),
        null != S)
    )
        return (0, r.jsx)(c.kzN, { children: S.message });
    let N = (0, y.Kp)({
            isTrial: !1,
            isGift: f,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        C = (0, y.$g)(N, b, n);
    if (null == b || null == O || C) return (0, r.jsx)(c.$jN, { className: U.__invalid_spinner });
    let P = (0, T.Ap)(s.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.hG, {
                proratedInvoice: b,
                renewalInvoice: O
            }),
            (0, r.jsxs)(R.PO, {
                className: U.invoice,
                children: [
                    (0, r.jsx)(R.q9, { children: k.NW.string(k.t['2eh+Cg']) }),
                    (0, r.jsx)(L.Lu, {
                        invoice: b,
                        newPlan: n,
                        isPrepaidPaymentSource: P
                    }),
                    (0, r.jsx)(L.nd, {
                        premiumSubscription: t,
                        proratedInvoice: b,
                        renewalInvoice: O,
                        isUpdate: !0,
                        isPrepaidPaymentSource: P
                    })
                ]
            })
        ]
    });
}
function V(e) {
    let t,
        { premiumSubscription: n, newPlan: o, onInvoiceError: a, planGroup: s, priceOptions: l, preventFetch: u, disabled: f, isEEA: m, paymentSources: g, setHasAcceptedTerms: E } = e,
        { analyticsLocations: b } = (0, h.ZP)(),
        y = (0, T.al)(n, o.id, 1, new Set(s)),
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
        a(N);
    }, [a, N]),
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
                    subscriptionPlan: o,
                    paymentSourceType: S,
                    basePrice: t,
                    currentSubscription: n,
                    planGroup: s
                }),
                forceShow: !0,
                showPricingLink: o.currency !== M.pKx.USD,
                showWithdrawalWaiver: m,
                disabled: f,
                subscriptionPlan: o,
                currentSubscription: n,
                planGroup: s
            });
}
function Z(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: o, onInvoiceError: a } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        [l, u] = (0, A.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: o,
            analyticsLocations: s,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, f] = (0, A.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: o,
            analyticsLocations: s,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        _ = null != u ? u : f;
    if (
        (i.useEffect(() => {
            a(_);
        }, [a, _]),
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
            (0, r.jsxs)(R.PO, {
                className: U.invoice,
                children: [
                    (0, r.jsx)(R.q9, { children: k.NW.string(k.t['2eh+Cg']) }),
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
        { premiumSubscription: n, newPlan: i, planGroup: o, fractionalPremiumInfo: a, priceOptions: s, preventFetch: l } = e,
        { analyticsLocations: u } = (0, h.ZP)(),
        [d, f] = (0, A.ED)({
            subscriptionId: n.id,
            items: (0, T.al)(n, i.id, 1, new Set(o)),
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
        a.fractionalState === x.a$.FP_SUB_PAUSED && (p = a.endsAt.toDate()),
        (0, r.jsxs)('div', {
            className: U.bodyText,
            children: [
                (0, r.jsx)('div', {
                    className: j.renewalInvoiceDate,
                    children: k.NW.format(k.t['+y0Tj4'], { renewalDate: p })
                }),
                (0, r.jsxs)(R.PO, {
                    className: U.invoice,
                    children: [
                        (0, r.jsx)(R.q9, { children: k.NW.string(k.t.iqhIp6) }),
                        (0, r.jsx)(R.R$, {
                            label: t,
                            value: (0, T.PK)(i, s, !0)
                        }),
                        (0, r.jsx)(P.Z, { invoice: d }),
                        (0, r.jsx)(R.KU, {}),
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
