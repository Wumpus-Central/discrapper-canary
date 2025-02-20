n.d(t, { Z: () => k }), n(47120);
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
    p = n(672971),
    _ = n(100527),
    h = n(906732),
    m = n(987209),
    g = n(563132),
    E = n(45572),
    v = n(614223),
    b = n(246946),
    y = n(351402),
    O = n(509545),
    S = n(74538),
    I = n(296848),
    T = n(374649),
    N = n(642530),
    A = n(653798),
    C = n(585602),
    R = n(314182),
    P = n(314404),
    w = n(42818),
    D = n(981631),
    x = n(388032),
    L = n(800459),
    M = n(214803);
function k(e) {
    var t;
    let n,
        { premiumSubscription: o, paymentSources: _, priceOptions: h, onPaymentSourceChange: T, onPaymentSourceAdd: C, planId: w, setHasAcceptedTerms: L, legalTermsNodeRef: k, hasLegalTermsFlash: F, onInvoiceError: V, planGroup: H, currencies: W, onCurrencyChange: Y, hasOpenInvoice: K, purchaseState: z, handleClose: q } = e,
        { selectedSkuId: Q, defaultPlanId: X, isPremium: J, startedPaymentFlowWithPaymentSourcesRef: $ } = (0, g.JL)(),
        { isGift: ee } = (0, m.wD)(),
        et = h.paymentSourceId,
        en = (0, l.e7)([O.Z], () => O.Z.get(w));
    a()(null != en, 'Missing newPlan');
    let er = (0, l.e7)([b.Z], () => b.Z.hidePersonalInformation),
        ei = s.M.EEA_COUNTRIES.has(y.Z.ipCountryCodeWithFallback),
        eo = z === E.A.PURCHASING || z === E.A.COMPLETED,
        ea = (0, v.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: Q,
            startedPaymentFlowWithPaymentSources: $.current
        }),
        es = (null == o ? void 0 : o.status) === D.O0b.PAUSED,
        el = i.useMemo(
            () =>
                (0, S.V7)({
                    skuId: Q,
                    isPremium: J,
                    multiMonthPlans: [],
                    currentSubscription: o,
                    isGift: ee,
                    isEligibleForTrial: !1,
                    defaultPlanId: X,
                    defaultToMonthlyPlan: !1
                }),
            [Q, o, X, J, ee]
        );
    n = K || es ? x.NW.string(x.t.nyzoFR) : (0, S.PV)(w) ? (0, S.W_)(o, en) : x.NW.formatToPlainString(x.t['sBpy9/'], { planName: en.name });
    let ec = null;
    return (
        null != o &&
            (ec = K
                ? (0, r.jsx)(j, {
                      premiumSubscription: o,
                      onInvoiceError: V,
                      priceOptions: h,
                      preventFetch: !1
                  })
                : es
                  ? (0, r.jsx)(B, {
                        premiumSubscription: o,
                        onInvoiceError: V,
                        priceOptions: h,
                        preventFetch: eo
                    })
                  : (0, I.R4)(o, w, H)
                    ? (0, r.jsx)(U, {
                          premiumSubscription: o,
                          newPlan: en,
                          onInvoiceError: V,
                          planGroup: H,
                          priceOptions: h,
                          preventFetch: eo
                      })
                    : (0, r.jsx)(Z, {
                          premiumSubscription: o,
                          newPlan: en,
                          planGroup: H,
                          priceOptions: h,
                          preventFetch: eo
                      })),
        (0, r.jsxs)('div', {
            className: M.stepBody,
            children: [
                !es &&
                    ea &&
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(A.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, r.jsx)(N.Z, {}),
                            (0, r.jsx)(P.O, {
                                planOptions: el,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: w,
                                showTotal: !1,
                                handleClose: q
                            }),
                            (0, r.jsx)(A.KU, {})
                        ]
                    }),
                (0, r.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    children: n
                }),
                ec,
                (0, r.jsxs)('div', {
                    className: M.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: x.NW.string(x.t.mmDvV1)
                        }),
                        (0, r.jsx)(f.Z, {
                            paymentSources: Object.values(_),
                            selectedPaymentSourceId: et,
                            onChange: T,
                            onPaymentSourceAdd: C,
                            hidePersonalInformation: er,
                            disabled: eo
                        })
                    ]
                }),
                (0, r.jsxs)(u.b, {
                    currencies: W,
                    className: M.currencyWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: x.NW.string(x.t['/AAR09'])
                        }),
                        (0, r.jsx)(u.Z, {
                            selectedCurrency: h.currency,
                            currencies: W,
                            onChange: Y,
                            disabled: eo
                        })
                    ]
                }),
                (0, r.jsx)(R.Z, {
                    isActive: F,
                    ref: k,
                    children:
                        null != o && (0, I.R4)(o, w, H)
                            ? (0, r.jsx)(G, {
                                  premiumSubscription: o,
                                  newPlan: en,
                                  onInvoiceError: V,
                                  planGroup: H,
                                  priceOptions: h,
                                  preventFetch: eo,
                                  disabled: eo,
                                  isEEA: ei,
                                  paymentSources: _,
                                  setHasAcceptedTerms: L
                              })
                            : (0, r.jsx)(p.Z, {
                                  onChange: L,
                                  finePrint: (0, r.jsx)(d.Z, {
                                      subscriptionPlan: en,
                                      paymentSourceType: null === (t = _[null != et ? et : '']) || void 0 === t ? void 0 : t.type,
                                      basePrice: (0, S.aS)(en.id, !1, ee, h),
                                      currentSubscription: o,
                                      planGroup: H
                                  }),
                                  forceShow: !0,
                                  showPricingLink: en.currency !== D.pKx.USD,
                                  showWithdrawalWaiver: ei,
                                  disabled: eo,
                                  subscriptionPlan: en,
                                  currentSubscription: o,
                                  planGroup: H
                              })
                })
            ]
        })
    );
}
function j(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: o, preventFetch: a } = e,
        [s, l] = (0, T.Ox)({
            subscriptionId: t.id,
            preventFetch: a
        });
    i.useEffect(() => {
        n(l);
    }, [n, l]);
    let u = (0, S.Ap)(o.paymentSourceId);
    return null != s
        ? (0, r.jsxs)(A.PO, {
              className: L.__invalid_invoice,
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
function U(e) {
    let { premiumSubscription: t, newPlan: n, onInvoiceError: o, planGroup: a, priceOptions: s, preventFetch: l } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, g.JL)(),
        { isGift: f } = (0, m.wD)(),
        { analyticsLocations: p } = (0, h.ZP)(),
        E = (0, S.al)(t, n.id, 1, new Set(a)),
        [b, y] = (0, T.ED)({
            subscriptionId: t.id,
            items: E,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: p,
            analyticsLocation: _.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [O, I] = (0, T.ED)({
            subscriptionId: t.id,
            items: E,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: p,
            analyticsLocation: _.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        N = null != y ? y : I;
    if (
        (i.useEffect(() => {
            o(N);
        }, [o, N]),
        null != N)
    )
        return (0, r.jsx)(c.kzN, { children: N.message });
    let C = (0, v.Kp)({
            isTrial: !1,
            isGift: f,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        R = (0, v.$g)(C, b, n);
    if (null == b || null == O || R) return (0, r.jsx)(c.$jN, { className: M.__invalid_spinner });
    let P = (0, S.Ap)(s.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.hG, {
                proratedInvoice: b,
                renewalInvoice: O
            }),
            (0, r.jsxs)(A.PO, {
                className: M.invoice,
                children: [
                    (0, r.jsx)(A.q9, { children: x.NW.string(x.t['2eh+Cg']) }),
                    (0, r.jsx)(w.Lu, {
                        invoice: b,
                        newPlan: n,
                        isPrepaidPaymentSource: P
                    }),
                    (0, r.jsx)(w.nd, {
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
function G(e) {
    var t, n;
    let o,
        { premiumSubscription: a, newPlan: s, onInvoiceError: l, planGroup: u, priceOptions: f, preventFetch: m, disabled: g, isEEA: E, paymentSources: v, setHasAcceptedTerms: b } = e,
        { analyticsLocations: y } = (0, h.ZP)(),
        O = (0, S.al)(a, s.id, 1, new Set(u)),
        [I, N] = (0, T.ED)({
            subscriptionId: a.id,
            items: O,
            renewal: !0,
            paymentSourceId: f.paymentSourceId,
            currency: f.currency,
            preventFetch: m,
            analyticsLocations: y,
            analyticsLocation: _.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        A = N;
    return (i.useEffect(() => {
        l(A);
    }, [l, A]),
    null != A)
        ? (0, r.jsx)(c.kzN, { children: A.message })
        : (null != I &&
                (o = {
                    amount: I.total,
                    currency: I.currency,
                    tax: I.tax,
                    taxInclusive: I.taxInclusive
                }),
            null == o)
          ? null
          : (0, r.jsx)(p.Z, {
                onChange: b,
                finePrint: (0, r.jsx)(d.Z, {
                    subscriptionPlan: s,
                    paymentSourceType: null === (t = v[null !== (n = f.paymentSourceId) && void 0 !== n ? n : '']) || void 0 === t ? void 0 : t.type,
                    basePrice: o,
                    currentSubscription: a,
                    planGroup: u
                }),
                forceShow: !0,
                showPricingLink: s.currency !== D.pKx.USD,
                showWithdrawalWaiver: E,
                disabled: g,
                subscriptionPlan: s,
                currentSubscription: a,
                planGroup: u
            });
}
function B(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: o, onInvoiceError: a } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        [l, u] = (0, T.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: o,
            analyticsLocations: s,
            analyticsLocation: _.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, f] = (0, T.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: o,
            analyticsLocations: s,
            analyticsLocation: _.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        p = null != u ? u : f;
    if (
        (i.useEffect(() => {
            a(p);
        }, [a, p]),
        null != p)
    )
        return (0, r.jsx)(c.kzN, { children: p.message });
    if (null == l || null == d) return (0, r.jsx)(c.$jN, { className: M.__invalid_spinner });
    let m = (0, S.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: L.renewalInvoiceDate,
                children: x.NW.string(x.t.spIYoq)
            }),
            (0, r.jsxs)(A.PO, {
                className: M.invoice,
                children: [
                    (0, r.jsx)(A.q9, { children: x.NW.string(x.t['2eh+Cg']) }),
                    (0, r.jsx)(w.By, {
                        invoice: l,
                        isPrepaidPaymentSource: m
                    }),
                    (0, r.jsx)(w.nd, {
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
function Z(e) {
    let t,
        { premiumSubscription: n, newPlan: i, planGroup: o, priceOptions: a, preventFetch: s } = e,
        { analyticsLocations: l } = (0, h.ZP)(),
        [u, d] = (0, T.ED)({
            subscriptionId: n.id,
            items: (0, S.al)(n, i.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: s,
            analyticsLocations: l,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != d) return (0, r.jsx)(c.kzN, { children: d.message });
    if (null == u) return (0, r.jsx)('div', { children: (0, r.jsx)(c.$jN, {}) });
    t = n.type === D.NYc.PREMIUM ? (0, S.Gf)(i.id) : i.name;
    let f = (0, S.Ap)(a.paymentSourceId);
    return (0, r.jsxs)('div', {
        className: M.bodyText,
        children: [
            (0, r.jsx)('div', {
                className: L.renewalInvoiceDate,
                children: x.NW.format(x.t['+y0Tj4'], { renewalDate: u.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(A.PO, {
                className: M.invoice,
                children: [
                    (0, r.jsx)(A.q9, { children: x.NW.string(x.t.iqhIp6) }),
                    (0, r.jsx)(A.R$, {
                        label: t,
                        value: (0, S.PK)(i, a, !0)
                    }),
                    (0, r.jsx)(C.Z, { invoice: u }),
                    (0, r.jsx)(A.KU, {}),
                    (0, r.jsx)(w.nd, {
                        premiumSubscription: n,
                        renewalInvoice: u,
                        isUpdate: !0,
                        isPrepaidPaymentSource: f
                    })
                ]
            })
        ]
    });
}
