n.d(t, { Z: () => U }), n(47120);
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
    v = n(45572),
    b = n(614223),
    y = n(246946),
    O = n(351402),
    S = n(509545),
    I = n(74538),
    T = n(296848),
    N = n(374649),
    A = n(642530),
    C = n(653798),
    R = n(585602),
    P = n(314182),
    D = n(314404),
    w = n(42818),
    L = n(474936),
    x = n(981631),
    M = n(388032),
    k = n(521608),
    j = n(787616);
function U(e) {
    var t;
    let n,
        { premiumSubscription: o, paymentSources: p, priceOptions: h, onPaymentSourceChange: N, onPaymentSourceAdd: R, planId: w, setHasAcceptedTerms: L, legalTermsNodeRef: k, hasLegalTermsFlash: U, onInvoiceError: H, planGroup: W, currencies: Y, onCurrencyChange: K, hasOpenInvoice: z, purchaseState: q, handleClose: Q } = e,
        { selectedSkuId: X, defaultPlanId: J, isPremium: $, startedPaymentFlowWithPaymentSourcesRef: ee } = (0, E.JL)(),
        { isGift: et } = (0, m.wD)(),
        en = h.paymentSourceId,
        er = (0, l.e7)([S.Z], () => S.Z.get(w));
    a()(null != er, 'Missing newPlan');
    let ei = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eo = (0, g.Z)(),
        ea = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
        es = q === v.A.PURCHASING || q === v.A.COMPLETED,
        el = (0, b.Kp)({
            isTrial: !1,
            isGift: et,
            selectedSkuId: X,
            startedPaymentFlowWithPaymentSources: ee.current
        }),
        ec = null == o ? void 0 : o.isPausedAllowsResumeButNotUpdates,
        eu = i.useMemo(
            () =>
                (0, I.V7)({
                    skuId: X,
                    isPremium: $,
                    multiMonthPlans: [],
                    currentSubscription: o,
                    isGift: et,
                    isEligibleForTrial: !1,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: !1
                }),
            [X, o, J, $, et]
        );
    n = z || ec ? M.NW.string(M.t.nyzoFR) : (0, I.PV)(w) ? (0, I.W_)(o, er) : M.NW.formatToPlainString(M.t['sBpy9/'], { planName: er.name });
    let ed = null;
    return (
        null != o &&
            (ed = z
                ? (0, r.jsx)(G, {
                      premiumSubscription: o,
                      onInvoiceError: H,
                      priceOptions: h,
                      preventFetch: !1
                  })
                : ec
                  ? (0, r.jsx)(F, {
                        premiumSubscription: o,
                        onInvoiceError: H,
                        priceOptions: h,
                        preventFetch: es
                    })
                  : (0, T.R4)(o, w, W)
                    ? (0, r.jsx)(B, {
                          premiumSubscription: o,
                          newPlan: er,
                          onInvoiceError: H,
                          planGroup: W,
                          priceOptions: h,
                          preventFetch: es
                      })
                    : (0, r.jsx)(Z, {
                          premiumSubscription: o,
                          newPlan: er,
                          planGroup: W,
                          fractionalPremiumInfo: eo,
                          priceOptions: h,
                          preventFetch: es
                      })),
        (0, r.jsxs)('div', {
            className: j.stepBody,
            children: [
                !ec &&
                    el &&
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(C.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, r.jsx)(A.Z, {}),
                            (0, r.jsx)(D.O, {
                                planOptions: eu,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: w,
                                showTotal: !1,
                                handleClose: Q
                            }),
                            (0, r.jsx)(C.KU, {})
                        ]
                    }),
                (0, r.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    children: n
                }),
                ed,
                (0, r.jsxs)('div', {
                    className: j.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: M.NW.string(M.t.mmDvV1)
                        }),
                        (0, r.jsx)(f.Z, {
                            paymentSources: Object.values(p),
                            selectedPaymentSourceId: en,
                            onChange: N,
                            onPaymentSourceAdd: R,
                            hidePersonalInformation: ei,
                            disabled: es
                        })
                    ]
                }),
                (0, r.jsxs)(u.b, {
                    currencies: Y,
                    className: j.currencyWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: M.NW.string(M.t['/AAR09'])
                        }),
                        (0, r.jsx)(u.Z, {
                            selectedCurrency: h.currency,
                            currencies: Y,
                            onChange: K,
                            disabled: es
                        })
                    ]
                }),
                (0, r.jsx)(P.Z, {
                    isActive: U,
                    ref: k,
                    children:
                        null != o && (0, T.R4)(o, w, W)
                            ? (0, r.jsx)(V, {
                                  premiumSubscription: o,
                                  newPlan: er,
                                  onInvoiceError: H,
                                  planGroup: W,
                                  priceOptions: h,
                                  preventFetch: es,
                                  disabled: es,
                                  isEEA: ea,
                                  paymentSources: p,
                                  setHasAcceptedTerms: L
                              })
                            : (0, r.jsx)(_.Z, {
                                  onChange: L,
                                  finePrint: (0, r.jsx)(d.Z, {
                                      subscriptionPlan: er,
                                      paymentSourceType: null === (t = p[null != en ? en : '']) || void 0 === t ? void 0 : t.type,
                                      basePrice: (0, I.aS)(er.id, !1, et, h),
                                      currentSubscription: o,
                                      planGroup: W
                                  }),
                                  forceShow: !0,
                                  showPricingLink: er.currency !== x.pKx.USD,
                                  showWithdrawalWaiver: ea,
                                  disabled: es,
                                  subscriptionPlan: er,
                                  currentSubscription: o,
                                  planGroup: W
                              })
                })
            ]
        })
    );
}
function G(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: o, preventFetch: a } = e,
        [s, l] = (0, N.Ox)({
            subscriptionId: t.id,
            preventFetch: a
        });
    i.useEffect(() => {
        n(l);
    }, [n, l]);
    let u = (0, I.Ap)(o.paymentSourceId);
    return null != s
        ? (0, r.jsxs)(C.PO, {
              className: k.__invalid_invoice,
              children: [
                  (0, r.jsx)(w.By, {
                      invoice: s,
                      isPrepaidPaymentSource: u
                  }),
                  (0, r.jsx)(w.nd, {
                      premiumSubscription: t,
                      renewalInvoice: s,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, r.jsx)(c.$jN, {});
}
function B(e) {
    let { premiumSubscription: t, newPlan: n, onInvoiceError: o, planGroup: a, priceOptions: s, preventFetch: l } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, E.JL)(),
        { isGift: f } = (0, m.wD)(),
        { analyticsLocations: _ } = (0, h.ZP)(),
        g = (0, I.al)(t, n.id, 1, new Set(a)),
        [v, y] = (0, N.ED)({
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
        [O, S] = (0, N.ED)({
            subscriptionId: t.id,
            items: g,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: _,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        T = null != y ? y : S;
    if (
        (i.useEffect(() => {
            o(T);
        }, [o, T]),
        null != T)
    )
        return (0, r.jsx)(c.kzN, { children: T.message });
    let A = (0, b.Kp)({
            isTrial: !1,
            isGift: f,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        R = (0, b.$g)(A, v, n);
    if (null == v || null == O || R) return (0, r.jsx)(c.$jN, { className: j.__invalid_spinner });
    let P = (0, I.Ap)(s.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.hG, {
                proratedInvoice: v,
                renewalInvoice: O
            }),
            (0, r.jsxs)(C.PO, {
                className: j.invoice,
                children: [
                    (0, r.jsx)(C.q9, { children: M.NW.string(M.t['2eh+Cg']) }),
                    (0, r.jsx)(w.Lu, {
                        invoice: v,
                        newPlan: n,
                        isPrepaidPaymentSource: P
                    }),
                    (0, r.jsx)(w.nd, {
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
function V(e) {
    var t, n;
    let o,
        { premiumSubscription: a, newPlan: s, onInvoiceError: l, planGroup: u, priceOptions: f, preventFetch: g, disabled: m, isEEA: E, paymentSources: v, setHasAcceptedTerms: b } = e,
        { analyticsLocations: y } = (0, h.ZP)(),
        O = (0, I.al)(a, s.id, 1, new Set(u)),
        [S, T] = (0, N.ED)({
            subscriptionId: a.id,
            items: O,
            renewal: !0,
            paymentSourceId: f.paymentSourceId,
            currency: f.currency,
            preventFetch: g,
            analyticsLocations: y,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        A = T;
    return (i.useEffect(() => {
        l(A);
    }, [l, A]),
    null != A)
        ? (0, r.jsx)(c.kzN, { children: A.message })
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
                showPricingLink: s.currency !== x.pKx.USD,
                showWithdrawalWaiver: E,
                disabled: m,
                subscriptionPlan: s,
                currentSubscription: a,
                planGroup: u
            });
}
function F(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: o, onInvoiceError: a } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        [l, u] = (0, N.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: o,
            analyticsLocations: s,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, f] = (0, N.ED)({
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
    if (null == l || null == d) return (0, r.jsx)(c.$jN, { className: j.__invalid_spinner });
    let g = (0, I.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: k.renewalInvoiceDate,
                children: M.NW.string(M.t.spIYoq)
            }),
            (0, r.jsxs)(C.PO, {
                className: j.invoice,
                children: [
                    (0, r.jsx)(C.q9, { children: M.NW.string(M.t['2eh+Cg']) }),
                    (0, r.jsx)(w.By, {
                        invoice: l,
                        isPrepaidPaymentSource: g
                    }),
                    (0, r.jsx)(w.nd, {
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
function Z(e) {
    let t,
        { premiumSubscription: n, newPlan: i, planGroup: o, fractionalPremiumInfo: a, priceOptions: s, preventFetch: l } = e,
        { analyticsLocations: u } = (0, h.ZP)(),
        [d, f] = (0, N.ED)({
            subscriptionId: n.id,
            items: (0, I.al)(n, i.id, 1, new Set(o)),
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
    t = n.type === x.NYc.PREMIUM ? (0, I.Gf)(i.id) : i.name;
    let _ = (0, I.Ap)(s.paymentSourceId),
        p = d.subscriptionPeriodStart;
    return (
        a.fractionalState === L.a$.FP_SUB_PAUSED && (p = a.endsAt.toDate()),
        (0, r.jsxs)('div', {
            className: j.bodyText,
            children: [
                (0, r.jsx)('div', {
                    className: k.renewalInvoiceDate,
                    children: M.NW.format(M.t['+y0Tj4'], { renewalDate: p })
                }),
                (0, r.jsxs)(C.PO, {
                    className: j.invoice,
                    children: [
                        (0, r.jsx)(C.q9, { children: M.NW.string(M.t.iqhIp6) }),
                        (0, r.jsx)(C.R$, {
                            label: t,
                            value: (0, I.PK)(i, s, !0)
                        }),
                        (0, r.jsx)(R.Z, { invoice: d }),
                        (0, r.jsx)(C.KU, {}),
                        (0, r.jsx)(w.nd, {
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
