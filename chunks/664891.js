n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(742280),
    l = n(442837),
    u = n(481060),
    c = n(190947),
    d = n(224550),
    f = n(275850),
    _ = n(672971),
    p = n(100527),
    h = n(906732),
    m = n(987209),
    g = n(563132),
    E = n(45572),
    v = n(614223),
    y = n(246946),
    I = n(351402),
    b = n(509545),
    T = n(74538),
    S = n(296848),
    A = n(374649),
    N = n(642530),
    C = n(653798),
    R = n(585602),
    O = n(314182),
    D = n(314404),
    x = n(42818),
    L = n(981631),
    P = n(388032),
    w = n(311583),
    M = n(809186);
function k(e) {
    var t;
    let n,
        { premiumSubscription: a, paymentSources: p, priceOptions: h, onPaymentSourceChange: A, onPaymentSourceAdd: R, planId: x, setHasAcceptedTerms: w, legalTermsNodeRef: k, hasLegalTermsFlash: V, onInvoiceError: j, planGroup: H, currencies: Y, onCurrencyChange: W, hasOpenInvoice: K, purchaseState: z, handleClose: q } = e,
        { selectedSkuId: Q, defaultPlanId: X, isPremium: J, startedPaymentFlowWithPaymentSourcesRef: $ } = (0, g.JL)(),
        { isGift: ee } = (0, m.wD)(),
        et = h.paymentSourceId,
        en = (0, l.e7)([b.Z], () => b.Z.get(x));
    s()(null != en, 'Missing newPlan');
    let ei = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        er = o.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        ea = z === E.A.PURCHASING || z === E.A.COMPLETED,
        es = (0, v.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: Q,
            startedPaymentFlowWithPaymentSources: $.current
        }),
        eo = (null == a ? void 0 : a.status) === L.O0b.PAUSED,
        el = r.useMemo(
            () =>
                (0, T.V7)({
                    skuId: Q,
                    isPremium: J,
                    multiMonthPlans: [],
                    currentSubscription: a,
                    isGift: ee,
                    isEligibleForTrial: !1,
                    defaultPlanId: X,
                    defaultToMonthlyPlan: !1
                }),
            [Q, a, X, J, ee]
        );
    n = K || eo ? P.intl.string(P.t.nyzoFR) : (0, T.PV)(x) ? (0, T.W_)(a, en) : P.intl.formatToPlainString(P.t['sBpy9/'], { planName: en.name });
    let eu = null;
    return (
        null != a &&
            (eu = K
                ? (0, i.jsx)(U, {
                      premiumSubscription: a,
                      onInvoiceError: j,
                      priceOptions: h,
                      preventFetch: !1
                  })
                : eo
                  ? (0, i.jsx)(Z, {
                        premiumSubscription: a,
                        onInvoiceError: j,
                        priceOptions: h,
                        preventFetch: ea
                    })
                  : (0, S.R4)(a, x, H)
                    ? (0, i.jsx)(G, {
                          premiumSubscription: a,
                          newPlan: en,
                          onInvoiceError: j,
                          planGroup: H,
                          priceOptions: h,
                          preventFetch: ea
                      })
                    : (0, i.jsx)(F, {
                          premiumSubscription: a,
                          newPlan: en,
                          planGroup: H,
                          priceOptions: h,
                          preventFetch: ea
                      })),
        (0, i.jsxs)('div', {
            className: M.stepBody,
            children: [
                !eo &&
                    es &&
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(C.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, i.jsx)(N.Z, {}),
                            (0, i.jsx)(D.O, {
                                planOptions: el,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: x,
                                showTotal: !1,
                                handleClose: q
                            }),
                            (0, i.jsx)(C.KU, {})
                        ]
                    }),
                (0, i.jsx)(u.vwX, {
                    tag: u.RB0.H5,
                    children: n
                }),
                eu,
                (0, i.jsxs)('div', {
                    className: M.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            tag: u.RB0.H5,
                            children: P.intl.string(P.t.mmDvV1)
                        }),
                        (0, i.jsx)(f.Z, {
                            paymentSources: Object.values(p),
                            selectedPaymentSourceId: et,
                            onChange: A,
                            onPaymentSourceAdd: R,
                            hidePersonalInformation: ei,
                            disabled: ea
                        })
                    ]
                }),
                (0, i.jsxs)(c.b, {
                    currencies: Y,
                    className: M.currencyWrapper,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            tag: u.RB0.H5,
                            children: P.intl.string(P.t['/AAR09'])
                        }),
                        (0, i.jsx)(c.Z, {
                            selectedCurrency: h.currency,
                            currencies: Y,
                            onChange: W,
                            disabled: ea
                        })
                    ]
                }),
                (0, i.jsx)(O.Z, {
                    isActive: V,
                    ref: k,
                    children:
                        null != a && (0, S.R4)(a, x, H)
                            ? (0, i.jsx)(B, {
                                  premiumSubscription: a,
                                  newPlan: en,
                                  onInvoiceError: j,
                                  planGroup: H,
                                  priceOptions: h,
                                  preventFetch: ea,
                                  disabled: ea,
                                  isEEA: er,
                                  paymentSources: p,
                                  setHasAcceptedTerms: w
                              })
                            : (0, i.jsx)(_.Z, {
                                  onChange: w,
                                  finePrint: (0, i.jsx)(d.Z, {
                                      subscriptionPlan: en,
                                      paymentSourceType: null === (t = p[null != et ? et : '']) || void 0 === t ? void 0 : t.type,
                                      basePrice: (0, T.aS)(en.id, !1, ee, h),
                                      currentSubscription: a,
                                      planGroup: H
                                  }),
                                  forceShow: !0,
                                  showPricingLink: en.currency !== L.pKx.USD,
                                  showWithdrawalWaiver: er,
                                  disabled: ea,
                                  subscriptionPlan: en,
                                  currentSubscription: a,
                                  planGroup: H
                              })
                })
            ]
        })
    );
}
function U(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: s } = e,
        [o, l] = (0, A.Ox)({
            subscriptionId: t.id,
            preventFetch: s
        });
    r.useEffect(() => {
        n(l);
    }, [n, l]);
    let c = (0, T.Ap)(a.paymentSourceId);
    return null != o
        ? (0, i.jsxs)(C.PO, {
              className: w.__invalid_invoice,
              children: [
                  (0, i.jsx)(x.By, {
                      invoice: o,
                      isPrepaidPaymentSource: c
                  }),
                  (0, i.jsx)(x.nd, {
                      premiumSubscription: t,
                      renewalInvoice: o,
                      isUpdate: !0,
                      isPrepaidPaymentSource: c
                  })
              ]
          })
        : (0, i.jsx)(u.$jN, {});
}
function G(e) {
    let { premiumSubscription: t, newPlan: n, onInvoiceError: a, planGroup: s, priceOptions: o, preventFetch: l } = e,
        { selectedSkuId: c, startedPaymentFlowWithPaymentSourcesRef: d } = (0, g.JL)(),
        { isGift: f } = (0, m.wD)(),
        { analyticsLocations: _ } = (0, h.ZP)(),
        E = (0, T.al)(t, n.id, 1, new Set(s)),
        [y, I] = (0, A.ED)({
            subscriptionId: t.id,
            items: E,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: l,
            analyticsLocations: _,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [b, S] = (0, A.ED)({
            subscriptionId: t.id,
            items: E,
            renewal: !0,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            preventFetch: l,
            analyticsLocations: _,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        N = null != I ? I : S;
    if (
        (r.useEffect(() => {
            a(N);
        }, [a, N]),
        null != N)
    )
        return (0, i.jsx)(u.kzN, { children: N.message });
    let R = (0, v.Kp)({
            isTrial: !1,
            isGift: f,
            selectedSkuId: c,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        O = (0, v.$g)(R, y, n);
    if (null == y || null == b || O) return (0, i.jsx)(u.$jN, { className: M.__invalid_spinner });
    let D = (0, T.Ap)(o.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.hG, {
                proratedInvoice: y,
                renewalInvoice: b
            }),
            (0, i.jsxs)(C.PO, {
                className: M.invoice,
                children: [
                    (0, i.jsx)(C.q9, { children: P.intl.string(P.t['2eh+Cg']) }),
                    (0, i.jsx)(x.Lu, {
                        invoice: y,
                        newPlan: n,
                        isPrepaidPaymentSource: D
                    }),
                    (0, i.jsx)(x.nd, {
                        premiumSubscription: t,
                        proratedInvoice: y,
                        renewalInvoice: b,
                        isUpdate: !0,
                        isPrepaidPaymentSource: D
                    })
                ]
            })
        ]
    });
}
function B(e) {
    var t, n;
    let a,
        { premiumSubscription: s, newPlan: o, onInvoiceError: l, planGroup: c, priceOptions: f, preventFetch: m, disabled: g, isEEA: E, paymentSources: v, setHasAcceptedTerms: y } = e,
        { analyticsLocations: I } = (0, h.ZP)(),
        b = (0, T.al)(s, o.id, 1, new Set(c)),
        [S, N] = (0, A.ED)({
            subscriptionId: s.id,
            items: b,
            renewal: !0,
            paymentSourceId: f.paymentSourceId,
            currency: f.currency,
            preventFetch: m,
            analyticsLocations: I,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        C = N;
    return (r.useEffect(() => {
        l(C);
    }, [l, C]),
    null != C)
        ? (0, i.jsx)(u.kzN, { children: C.message })
        : (null != S &&
                (a = {
                    amount: S.total,
                    currency: S.currency,
                    tax: S.tax,
                    taxInclusive: S.taxInclusive
                }),
            null == a)
          ? null
          : (0, i.jsx)(_.Z, {
                onChange: y,
                finePrint: (0, i.jsx)(d.Z, {
                    subscriptionPlan: o,
                    paymentSourceType: null === (t = v[null !== (n = f.paymentSourceId) && void 0 !== n ? n : '']) || void 0 === t ? void 0 : t.type,
                    basePrice: a,
                    currentSubscription: s,
                    planGroup: c
                }),
                forceShow: !0,
                showPricingLink: o.currency !== L.pKx.USD,
                showWithdrawalWaiver: E,
                disabled: g,
                subscriptionPlan: o,
                currentSubscription: s,
                planGroup: c
            });
}
function Z(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: s } = e,
        { analyticsLocations: o } = (0, h.ZP)(),
        [l, c] = (0, A.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: o,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, f] = (0, A.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: o,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        _ = null != c ? c : f;
    if (
        (r.useEffect(() => {
            s(_);
        }, [s, _]),
        null != _)
    )
        return (0, i.jsx)(u.kzN, { children: _.message });
    if (null == l || null == d) return (0, i.jsx)(u.$jN, { className: M.__invalid_spinner });
    let m = (0, T.Ap)(n.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: w.renewalInvoiceDate,
                children: P.intl.string(P.t.spIYoq)
            }),
            (0, i.jsxs)(C.PO, {
                className: M.invoice,
                children: [
                    (0, i.jsx)(C.q9, { children: P.intl.string(P.t['2eh+Cg']) }),
                    (0, i.jsx)(x.By, {
                        invoice: l,
                        isPrepaidPaymentSource: m
                    }),
                    (0, i.jsx)(x.nd, {
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
function F(e) {
    let t,
        { premiumSubscription: n, newPlan: r, planGroup: a, priceOptions: s, preventFetch: o } = e,
        { analyticsLocations: l } = (0, h.ZP)(),
        [c, d] = (0, A.ED)({
            subscriptionId: n.id,
            items: (0, T.al)(n, r.id, 1, new Set(a)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: o,
            analyticsLocations: l,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != d) return (0, i.jsx)(u.kzN, { children: d.message });
    if (null == c) return (0, i.jsx)('div', { children: (0, i.jsx)(u.$jN, {}) });
    t = n.type === L.NYc.PREMIUM ? (0, T.Gf)(r.id) : r.name;
    let f = (0, T.Ap)(s.paymentSourceId);
    return (0, i.jsxs)('div', {
        className: M.bodyText,
        children: [
            (0, i.jsx)('div', {
                className: w.renewalInvoiceDate,
                children: P.intl.format(P.t['+y0Tj4'], { renewalDate: c.subscriptionPeriodStart })
            }),
            (0, i.jsxs)(C.PO, {
                className: M.invoice,
                children: [
                    (0, i.jsx)(C.q9, { children: P.intl.string(P.t.iqhIp6) }),
                    (0, i.jsx)(C.R$, {
                        label: t,
                        value: (0, T.PK)(r, s, !0)
                    }),
                    (0, i.jsx)(R.Z, { invoice: c }),
                    (0, i.jsx)(C.KU, {}),
                    (0, i.jsx)(x.nd, {
                        premiumSubscription: n,
                        renewalInvoice: c,
                        isUpdate: !0,
                        isPrepaidPaymentSource: f
                    })
                ]
            })
        ]
    });
}
