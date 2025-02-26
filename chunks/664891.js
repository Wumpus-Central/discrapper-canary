n.d(t, { Z: () => j }), n(47120);
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
    E = n(107998),
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
    L = n(981631),
    x = n(388032),
    M = n(800459),
    k = n(214803);
function j(e) {
    var t;
    let n,
        { premiumSubscription: o, paymentSources: _, priceOptions: h, onPaymentSourceChange: N, onPaymentSourceAdd: R, planId: w, setHasAcceptedTerms: M, legalTermsNodeRef: j, hasLegalTermsFlash: Z, onInvoiceError: H, planGroup: W, currencies: Y, onCurrencyChange: K, hasOpenInvoice: z, purchaseState: q, handleClose: Q } = e,
        { selectedSkuId: X, defaultPlanId: J, isPremium: $, startedPaymentFlowWithPaymentSourcesRef: ee } = (0, g.JL)(),
        { isGift: et } = (0, m.wD)(),
        { planSelectBanner: en } = (0, E.zb)(),
        er = h.paymentSourceId,
        ei = (0, l.e7)([S.Z], () => S.Z.get(w));
    a()(null != ei, 'Missing newPlan');
    let eo = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        ea = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
        es = q === v.A.PURCHASING || q === v.A.COMPLETED,
        el = (0, b.Kp)({
            isTrial: !1,
            isGift: et,
            selectedSkuId: X,
            startedPaymentFlowWithPaymentSources: ee.current
        }),
        ec = (null == o ? void 0 : o.status) === L.O0b.PAUSED,
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
    n = z || ec ? x.NW.string(x.t.nyzoFR) : (0, I.PV)(w) ? (0, I.W_)(o, ei) : x.NW.formatToPlainString(x.t['sBpy9/'], { planName: ei.name });
    let ed = null;
    return (
        null != o &&
            (ed = z
                ? (0, r.jsx)(U, {
                      premiumSubscription: o,
                      onInvoiceError: H,
                      priceOptions: h,
                      preventFetch: !1
                  })
                : ec
                  ? (0, r.jsx)(V, {
                        premiumSubscription: o,
                        onInvoiceError: H,
                        priceOptions: h,
                        preventFetch: es
                    })
                  : (0, T.R4)(o, w, W)
                    ? (0, r.jsx)(G, {
                          premiumSubscription: o,
                          newPlan: ei,
                          onInvoiceError: H,
                          planGroup: W,
                          priceOptions: h,
                          preventFetch: es
                      })
                    : (0, r.jsx)(F, {
                          premiumSubscription: o,
                          newPlan: ei,
                          planGroup: W,
                          priceOptions: h,
                          preventFetch: es
                      })),
        (0, r.jsxs)('div', {
            className: k.stepBody,
            children: [
                !ec &&
                    el &&
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(C.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            null != en && en,
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
                    className: k.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: x.NW.string(x.t.mmDvV1)
                        }),
                        (0, r.jsx)(f.Z, {
                            paymentSources: Object.values(_),
                            selectedPaymentSourceId: er,
                            onChange: N,
                            onPaymentSourceAdd: R,
                            hidePersonalInformation: eo,
                            disabled: es
                        })
                    ]
                }),
                (0, r.jsxs)(u.b, {
                    currencies: Y,
                    className: k.currencyWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: x.NW.string(x.t['/AAR09'])
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
                    isActive: Z,
                    ref: j,
                    children:
                        null != o && (0, T.R4)(o, w, W)
                            ? (0, r.jsx)(B, {
                                  premiumSubscription: o,
                                  newPlan: ei,
                                  onInvoiceError: H,
                                  planGroup: W,
                                  priceOptions: h,
                                  preventFetch: es,
                                  disabled: es,
                                  isEEA: ea,
                                  paymentSources: _,
                                  setHasAcceptedTerms: M
                              })
                            : (0, r.jsx)(p.Z, {
                                  onChange: M,
                                  finePrint: (0, r.jsx)(d.Z, {
                                      subscriptionPlan: ei,
                                      paymentSourceType: null === (t = _[null != er ? er : '']) || void 0 === t ? void 0 : t.type,
                                      basePrice: (0, I.aS)(ei.id, !1, et, h),
                                      currentSubscription: o,
                                      planGroup: W
                                  }),
                                  forceShow: !0,
                                  showPricingLink: ei.currency !== L.pKx.USD,
                                  showWithdrawalWaiver: ea,
                                  disabled: es,
                                  subscriptionPlan: ei,
                                  currentSubscription: o,
                                  planGroup: W
                              })
                })
            ]
        })
    );
}
function U(e) {
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
              className: M.__invalid_invoice,
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
function G(e) {
    let { premiumSubscription: t, newPlan: n, onInvoiceError: o, planGroup: a, priceOptions: s, preventFetch: l } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, g.JL)(),
        { isGift: f } = (0, m.wD)(),
        { analyticsLocations: p } = (0, h.ZP)(),
        E = (0, I.al)(t, n.id, 1, new Set(a)),
        [v, y] = (0, N.ED)({
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
        [O, S] = (0, N.ED)({
            subscriptionId: t.id,
            items: E,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: p,
            analyticsLocation: _.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
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
    if (null == v || null == O || R) return (0, r.jsx)(c.$jN, { className: k.__invalid_spinner });
    let P = (0, I.Ap)(s.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.hG, {
                proratedInvoice: v,
                renewalInvoice: O
            }),
            (0, r.jsxs)(C.PO, {
                className: k.invoice,
                children: [
                    (0, r.jsx)(C.q9, { children: x.NW.string(x.t['2eh+Cg']) }),
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
function B(e) {
    var t, n;
    let o,
        { premiumSubscription: a, newPlan: s, onInvoiceError: l, planGroup: u, priceOptions: f, preventFetch: m, disabled: g, isEEA: E, paymentSources: v, setHasAcceptedTerms: b } = e,
        { analyticsLocations: y } = (0, h.ZP)(),
        O = (0, I.al)(a, s.id, 1, new Set(u)),
        [S, T] = (0, N.ED)({
            subscriptionId: a.id,
            items: O,
            renewal: !0,
            paymentSourceId: f.paymentSourceId,
            currency: f.currency,
            preventFetch: m,
            analyticsLocations: y,
            analyticsLocation: _.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
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
                showPricingLink: s.currency !== L.pKx.USD,
                showWithdrawalWaiver: E,
                disabled: g,
                subscriptionPlan: s,
                currentSubscription: a,
                planGroup: u
            });
}
function V(e) {
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
            analyticsLocation: _.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, f] = (0, N.ED)({
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
    if (null == l || null == d) return (0, r.jsx)(c.$jN, { className: k.__invalid_spinner });
    let m = (0, I.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: M.renewalInvoiceDate,
                children: x.NW.string(x.t.spIYoq)
            }),
            (0, r.jsxs)(C.PO, {
                className: k.invoice,
                children: [
                    (0, r.jsx)(C.q9, { children: x.NW.string(x.t['2eh+Cg']) }),
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
function F(e) {
    let t,
        { premiumSubscription: n, newPlan: i, planGroup: o, priceOptions: a, preventFetch: s } = e,
        { analyticsLocations: l } = (0, h.ZP)(),
        [u, d] = (0, N.ED)({
            subscriptionId: n.id,
            items: (0, I.al)(n, i.id, 1, new Set(o)),
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
    t = n.type === L.NYc.PREMIUM ? (0, I.Gf)(i.id) : i.name;
    let f = (0, I.Ap)(a.paymentSourceId);
    return (0, r.jsxs)('div', {
        className: k.bodyText,
        children: [
            (0, r.jsx)('div', {
                className: M.renewalInvoiceDate,
                children: x.NW.format(x.t['+y0Tj4'], { renewalDate: u.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(C.PO, {
                className: k.invoice,
                children: [
                    (0, r.jsx)(C.q9, { children: x.NW.string(x.t.iqhIp6) }),
                    (0, r.jsx)(C.R$, {
                        label: t,
                        value: (0, I.PK)(i, a, !0)
                    }),
                    (0, r.jsx)(R.Z, { invoice: u }),
                    (0, r.jsx)(C.KU, {}),
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
