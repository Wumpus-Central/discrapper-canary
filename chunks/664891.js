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
    g = n(975298),
    m = n(987209),
    E = n(563132),
    v = n(107998),
    b = n(45572),
    y = n(614223),
    O = n(246946),
    S = n(351402),
    I = n(509545),
    T = n(74538),
    N = n(296848),
    A = n(374649),
    C = n(642530),
    R = n(653798),
    P = n(585602),
    D = n(314182),
    w = n(314404),
    L = n(42818),
    x = n(474936),
    M = n(981631),
    k = n(388032),
    j = n(800459),
    U = n(214803);
function G(e) {
    var t;
    let n,
        { premiumSubscription: o, paymentSources: p, priceOptions: h, onPaymentSourceChange: A, onPaymentSourceAdd: P, planId: L, setHasAcceptedTerms: x, legalTermsNodeRef: j, hasLegalTermsFlash: G, onInvoiceError: W, planGroup: Y, currencies: K, onCurrencyChange: z, hasOpenInvoice: q, purchaseState: Q, handleClose: X } = e,
        { selectedSkuId: J, defaultPlanId: $, isPremium: ee, startedPaymentFlowWithPaymentSourcesRef: et } = (0, E.JL)(),
        { isGift: en } = (0, m.wD)(),
        { planSelectBanner: er } = (0, v.zb)(),
        ei = h.paymentSourceId,
        eo = (0, l.e7)([I.Z], () => I.Z.get(L));
    a()(null != eo, 'Missing newPlan');
    let ea = (0, l.e7)([O.Z], () => O.Z.hidePersonalInformation),
        es = (0, g.Z)(),
        el = s.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback),
        ec = Q === b.A.PURCHASING || Q === b.A.COMPLETED,
        eu = (0, y.Kp)({
            isTrial: !1,
            isGift: en,
            selectedSkuId: J,
            startedPaymentFlowWithPaymentSources: et.current
        }),
        ed = null == o ? void 0 : o.isPausedAllowsResumeButNotUpdates,
        ef = i.useMemo(
            () =>
                (0, T.V7)({
                    skuId: J,
                    isPremium: ee,
                    multiMonthPlans: [],
                    currentSubscription: o,
                    isGift: en,
                    isEligibleForTrial: !1,
                    defaultPlanId: $,
                    defaultToMonthlyPlan: !1
                }),
            [J, o, $, ee, en]
        );
    n = q || ed ? k.NW.string(k.t.nyzoFR) : (0, T.PV)(L) ? (0, T.W_)(o, eo) : k.NW.formatToPlainString(k.t['sBpy9/'], { planName: eo.name });
    let e_ = null;
    return (
        null != o &&
            (e_ = q
                ? (0, r.jsx)(B, {
                      premiumSubscription: o,
                      onInvoiceError: W,
                      priceOptions: h,
                      preventFetch: !1
                  })
                : ed
                  ? (0, r.jsx)(Z, {
                        premiumSubscription: o,
                        onInvoiceError: W,
                        priceOptions: h,
                        preventFetch: ec
                    })
                  : (0, N.R4)(o, L, Y)
                    ? (0, r.jsx)(V, {
                          premiumSubscription: o,
                          newPlan: eo,
                          onInvoiceError: W,
                          planGroup: Y,
                          priceOptions: h,
                          preventFetch: ec
                      })
                    : (0, r.jsx)(H, {
                          premiumSubscription: o,
                          newPlan: eo,
                          planGroup: Y,
                          fractionalPremiumInfo: es,
                          priceOptions: h,
                          preventFetch: ec
                      })),
        (0, r.jsxs)('div', {
            className: U.stepBody,
            children: [
                !ed &&
                    eu &&
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(R.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            null != er && er,
                            (0, r.jsx)(C.Z, {}),
                            (0, r.jsx)(w.O, {
                                planOptions: ef,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: L,
                                showTotal: !1,
                                handleClose: X
                            }),
                            (0, r.jsx)(R.KU, {})
                        ]
                    }),
                (0, r.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    children: n
                }),
                e_,
                (0, r.jsxs)('div', {
                    className: U.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: k.NW.string(k.t.mmDvV1)
                        }),
                        (0, r.jsx)(f.Z, {
                            paymentSources: Object.values(p),
                            selectedPaymentSourceId: ei,
                            onChange: A,
                            onPaymentSourceAdd: P,
                            hidePersonalInformation: ea,
                            disabled: ec
                        })
                    ]
                }),
                (0, r.jsxs)(u.b, {
                    currencies: K,
                    className: U.currencyWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: k.NW.string(k.t['/AAR09'])
                        }),
                        (0, r.jsx)(u.Z, {
                            selectedCurrency: h.currency,
                            currencies: K,
                            onChange: z,
                            disabled: ec
                        })
                    ]
                }),
                (0, r.jsx)(D.Z, {
                    isActive: G,
                    ref: j,
                    children:
                        null != o && (0, N.R4)(o, L, Y)
                            ? (0, r.jsx)(F, {
                                  premiumSubscription: o,
                                  newPlan: eo,
                                  onInvoiceError: W,
                                  planGroup: Y,
                                  priceOptions: h,
                                  preventFetch: ec,
                                  disabled: ec,
                                  isEEA: el,
                                  paymentSources: p,
                                  setHasAcceptedTerms: x
                              })
                            : (0, r.jsx)(_.Z, {
                                  onChange: x,
                                  finePrint: (0, r.jsx)(d.Z, {
                                      subscriptionPlan: eo,
                                      paymentSourceType: null === (t = p[null != ei ? ei : '']) || void 0 === t ? void 0 : t.type,
                                      basePrice: (0, T.aS)(eo.id, !1, en, h),
                                      currentSubscription: o,
                                      planGroup: Y
                                  }),
                                  forceShow: !0,
                                  showPricingLink: eo.currency !== M.pKx.USD,
                                  showWithdrawalWaiver: el,
                                  disabled: ec,
                                  subscriptionPlan: eo,
                                  currentSubscription: o,
                                  planGroup: Y
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
function V(e) {
    let { premiumSubscription: t, newPlan: n, onInvoiceError: o, planGroup: a, priceOptions: s, preventFetch: l } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, E.JL)(),
        { isGift: f } = (0, m.wD)(),
        { analyticsLocations: _ } = (0, h.ZP)(),
        g = (0, T.al)(t, n.id, 1, new Set(a)),
        [v, b] = (0, A.ED)({
            subscriptionId: t.id,
            items: g,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: _,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [O, S] = (0, A.ED)({
            subscriptionId: t.id,
            items: g,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: _,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        I = null != b ? b : S;
    if (
        (i.useEffect(() => {
            o(I);
        }, [o, I]),
        null != I)
    )
        return (0, r.jsx)(c.kzN, { children: I.message });
    let N = (0, y.Kp)({
            isTrial: !1,
            isGift: f,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        C = (0, y.$g)(N, v, n);
    if (null == v || null == O || C) return (0, r.jsx)(c.$jN, { className: U.__invalid_spinner });
    let P = (0, T.Ap)(s.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.hG, {
                proratedInvoice: v,
                renewalInvoice: O
            }),
            (0, r.jsxs)(R.PO, {
                className: U.invoice,
                children: [
                    (0, r.jsx)(R.q9, { children: k.NW.string(k.t['2eh+Cg']) }),
                    (0, r.jsx)(L.Lu, {
                        invoice: v,
                        newPlan: n,
                        isPrepaidPaymentSource: P
                    }),
                    (0, r.jsx)(L.nd, {
                        premiumSubscription: t,
                        proratedInvoice: v,
                        renewalInvoice: O,
                        isUpdate: !0,
                        isPrepaidPaymentSource: P
                    })
                ]
            })
        ]
    });
}
function F(e) {
    var t, n;
    let o,
        { premiumSubscription: a, newPlan: s, onInvoiceError: l, planGroup: u, priceOptions: f, preventFetch: g, disabled: m, isEEA: E, paymentSources: v, setHasAcceptedTerms: b } = e,
        { analyticsLocations: y } = (0, h.ZP)(),
        O = (0, T.al)(a, s.id, 1, new Set(u)),
        [S, I] = (0, A.ED)({
            subscriptionId: a.id,
            items: O,
            renewal: !0,
            paymentSourceId: f.paymentSourceId,
            currency: f.currency,
            preventFetch: g,
            analyticsLocations: y,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        N = I;
    return (i.useEffect(() => {
        l(N);
    }, [l, N]),
    null != N)
        ? (0, r.jsx)(c.kzN, { children: N.message })
        : (null != S &&
                (o = {
                    amount: S.total,
                    currency: S.currency,
                    tax: S.tax,
                    taxInclusive: S.taxInclusive
                }),
            null == o)
          ? null
          : (0, r.jsx)(_.Z, {
                onChange: b,
                finePrint: (0, r.jsx)(d.Z, {
                    subscriptionPlan: s,
                    paymentSourceType: null === (t = v[null !== (n = f.paymentSourceId) && void 0 !== n ? n : '']) || void 0 === t ? void 0 : t.type,
                    basePrice: o,
                    currentSubscription: a,
                    planGroup: u
                }),
                forceShow: !0,
                showPricingLink: s.currency !== M.pKx.USD,
                showWithdrawalWaiver: E,
                disabled: m,
                subscriptionPlan: s,
                currentSubscription: a,
                planGroup: u
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
    let g = (0, T.Ap)(n.paymentSourceId);
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
                        isPrepaidPaymentSource: g
                    }),
                    (0, r.jsx)(L.nd, {
                        premiumSubscription: t,
                        renewalInvoice: d,
                        isUpdate: !0,
                        isPrepaidPaymentSource: g
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
