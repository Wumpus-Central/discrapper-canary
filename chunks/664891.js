r.d(n, {
    Z: function () {
        return B;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(512722),
    l = r.n(s),
    u = r(742280),
    c = r(442837),
    d = r(481060),
    f = r(190947),
    p = r(224550),
    h = r(275850),
    _ = r(672971),
    m = r(100527),
    g = r(906732),
    E = r(987209),
    v = r(563132),
    y = r(45572),
    b = r(614223),
    I = r(246946),
    T = r(351402),
    S = r(509545),
    A = r(74538),
    C = r(296848),
    N = r(374649),
    R = r(642530),
    O = r(653798),
    D = r(585602),
    x = r(314182),
    L = r(314404),
    w = r(42818),
    P = r(981631),
    M = r(388032),
    k = r(311583),
    U = r(809186);
function B(e) {
    var n;
    let r,
        { premiumSubscription: i, paymentSources: s, priceOptions: m, onPaymentSourceChange: g, onPaymentSourceAdd: N, planId: D, setHasAcceptedTerms: w, legalTermsNodeRef: k, hasLegalTermsFlash: B, onInvoiceError: H, planGroup: Y, currencies: W, onCurrencyChange: K, hasOpenInvoice: z, purchaseState: q, handleClose: Q } = e,
        { selectedSkuId: X, defaultPlanId: J, isPremium: $, startedPaymentFlowWithPaymentSourcesRef: ee } = (0, v.usePaymentContext)(),
        { isGift: et } = (0, E.wD)(),
        en = m.paymentSourceId,
        er = (0, c.e7)([S.Z], () => S.Z.get(D));
    l()(null != er, 'Missing newPlan');
    let ei = (0, c.e7)([I.Z], () => I.Z.hidePersonalInformation),
        ea = u.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
        eo = q === y.A.PURCHASING || q === y.A.COMPLETED,
        es = (0, b.Kp)({
            isTrial: !1,
            isGift: et,
            selectedSkuId: X,
            startedPaymentFlowWithPaymentSources: ee.current
        }),
        el = (null == i ? void 0 : i.status) === P.O0b.PAUSED,
        eu = o.useMemo(
            () =>
                (0, A.V7)({
                    skuId: X,
                    isPremium: $,
                    multiMonthPlans: [],
                    currentSubscription: i,
                    isGift: et,
                    isEligibleForTrial: !1,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: !1
                }),
            [X, i, J, $, et]
        );
    r = z || el ? M.intl.string(M.t.nyzoFR) : (0, A.PV)(D) ? (0, A.W_)(i, er) : M.intl.formatToPlainString(M.t['sBpy9/'], { planName: er.name });
    let ec = null;
    return (
        null != i &&
            (ec = z
                ? (0, a.jsx)(G, {
                      premiumSubscription: i,
                      onInvoiceError: H,
                      priceOptions: m,
                      preventFetch: !1
                  })
                : el
                  ? (0, a.jsx)(V, {
                        premiumSubscription: i,
                        onInvoiceError: H,
                        priceOptions: m,
                        preventFetch: eo
                    })
                  : (0, C.R4)(i, D, Y)
                    ? (0, a.jsx)(Z, {
                          premiumSubscription: i,
                          newPlan: er,
                          onInvoiceError: H,
                          planGroup: Y,
                          priceOptions: m,
                          preventFetch: eo
                      })
                    : (0, a.jsx)(j, {
                          premiumSubscription: i,
                          newPlan: er,
                          planGroup: Y,
                          priceOptions: m,
                          preventFetch: eo
                      })),
        (0, a.jsxs)('div', {
            className: U.stepBody,
            children: [
                !el &&
                    es &&
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(O.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, a.jsx)(R.Z, {}),
                            (0, a.jsx)(L.O, {
                                planOptions: eu,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: D,
                                showTotal: !1,
                                handleClose: Q
                            }),
                            (0, a.jsx)(O.KU, {})
                        ]
                    }),
                (0, a.jsx)(d.FormTitle, {
                    tag: d.FormTitleTags.H5,
                    children: r
                }),
                ec,
                (0, a.jsxs)('div', {
                    className: U.paymentSourceWrapper,
                    children: [
                        (0, a.jsx)(d.FormTitle, {
                            tag: d.FormTitleTags.H5,
                            children: M.intl.string(M.t.mmDvV1)
                        }),
                        (0, a.jsx)(h.Z, {
                            paymentSources: Object.values(s),
                            selectedPaymentSourceId: en,
                            onChange: g,
                            onPaymentSourceAdd: N,
                            hidePersonalInformation: ei,
                            disabled: eo
                        })
                    ]
                }),
                (0, a.jsxs)(f.b, {
                    currencies: W,
                    className: U.currencyWrapper,
                    children: [
                        (0, a.jsx)(d.FormTitle, {
                            tag: d.FormTitleTags.H5,
                            children: M.intl.string(M.t['/AAR09'])
                        }),
                        (0, a.jsx)(f.Z, {
                            selectedCurrency: m.currency,
                            currencies: W,
                            onChange: K,
                            disabled: eo
                        })
                    ]
                }),
                (0, a.jsx)(x.Z, {
                    isActive: B,
                    ref: k,
                    children:
                        null != i && (0, C.R4)(i, D, Y)
                            ? (0, a.jsx)(F, {
                                  premiumSubscription: i,
                                  newPlan: er,
                                  onInvoiceError: H,
                                  planGroup: Y,
                                  priceOptions: m,
                                  preventFetch: eo,
                                  disabled: eo,
                                  isEEA: ea,
                                  paymentSources: s,
                                  setHasAcceptedTerms: w
                              })
                            : (0, a.jsx)(_.Z, {
                                  onChange: w,
                                  finePrint: (0, a.jsx)(p.Z, {
                                      subscriptionPlan: er,
                                      paymentSourceType: null === (n = s[null != en ? en : '']) || void 0 === n ? void 0 : n.type,
                                      basePrice: (0, A.aS)(er.id, !1, et, m),
                                      currentSubscription: i,
                                      planGroup: Y
                                  }),
                                  forceShow: !0,
                                  showPricingLink: er.currency !== P.pKx.USD,
                                  showWithdrawalWaiver: ea,
                                  disabled: eo,
                                  subscriptionPlan: er,
                                  currentSubscription: i,
                                  planGroup: Y
                              })
                })
            ]
        })
    );
}
function G(e) {
    let { premiumSubscription: n, onInvoiceError: r, priceOptions: i, preventFetch: s } = e,
        [l, u] = (0, N.Ox)({
            subscriptionId: n.id,
            preventFetch: s
        });
    o.useEffect(() => {
        r(u);
    }, [r, u]);
    let c = (0, A.Ap)(i.paymentSourceId);
    return null != l
        ? (0, a.jsxs)(O.PO, {
              className: k.__invalid_invoice,
              children: [
                  (0, a.jsx)(w.By, {
                      invoice: l,
                      isPrepaidPaymentSource: c
                  }),
                  (0, a.jsx)(w.nd, {
                      premiumSubscription: n,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: c
                  })
              ]
          })
        : (0, a.jsx)(d.Spinner, {});
}
function Z(e) {
    let { premiumSubscription: n, newPlan: r, onInvoiceError: i, planGroup: s, priceOptions: l, preventFetch: u } = e,
        { selectedSkuId: c, startedPaymentFlowWithPaymentSourcesRef: f } = (0, v.usePaymentContext)(),
        { isGift: p } = (0, E.wD)(),
        { analyticsLocations: h } = (0, g.ZP)(),
        _ = (0, A.al)(n, r.id, 1, new Set(s)),
        [y, I] = (0, N.ED)({
            subscriptionId: n.id,
            items: _,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [T, S] = (0, N.ED)({
            subscriptionId: n.id,
            items: _,
            renewal: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: u,
            analyticsLocations: h,
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        C = null != I ? I : S;
    if (
        (o.useEffect(() => {
            i(C);
        }, [i, C]),
        null != C)
    )
        return (0, a.jsx)(d.FormErrorBlock, { children: C.message });
    let R = (0, b.Kp)({
            isTrial: !1,
            isGift: p,
            selectedSkuId: c,
            startedPaymentFlowWithPaymentSources: f.current
        }),
        D = (0, b.$g)(R, y, r);
    if (null == y || null == T || D) return (0, a.jsx)(d.Spinner, { className: U.__invalid_spinner });
    let x = (0, A.Ap)(l.paymentSourceId);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(w.hG, {
                proratedInvoice: y,
                renewalInvoice: T
            }),
            (0, a.jsxs)(O.PO, {
                className: U.invoice,
                children: [
                    (0, a.jsx)(O.q9, { children: M.intl.string(M.t['2eh+Cg']) }),
                    (0, a.jsx)(w.Lu, {
                        invoice: y,
                        newPlan: r,
                        isPrepaidPaymentSource: x
                    }),
                    (0, a.jsx)(w.nd, {
                        premiumSubscription: n,
                        proratedInvoice: y,
                        renewalInvoice: T,
                        isUpdate: !0,
                        isPrepaidPaymentSource: x
                    })
                ]
            })
        ]
    });
}
function F(e) {
    var n, r;
    let i,
        { premiumSubscription: s, newPlan: l, onInvoiceError: u, planGroup: c, priceOptions: f, preventFetch: h, disabled: E, isEEA: v, paymentSources: y, setHasAcceptedTerms: b } = e,
        { analyticsLocations: I } = (0, g.ZP)(),
        T = (0, A.al)(s, l.id, 1, new Set(c)),
        [S, C] = (0, N.ED)({
            subscriptionId: s.id,
            items: T,
            renewal: !0,
            paymentSourceId: f.paymentSourceId,
            currency: f.currency,
            preventFetch: h,
            analyticsLocations: I,
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        R = C;
    return (o.useEffect(() => {
        u(R);
    }, [u, R]),
    null != R)
        ? (0, a.jsx)(d.FormErrorBlock, { children: R.message })
        : (null != S &&
                (i = {
                    amount: S.total,
                    currency: S.currency,
                    tax: S.tax,
                    taxInclusive: S.taxInclusive
                }),
            null == i)
          ? null
          : (0, a.jsx)(_.Z, {
                onChange: b,
                finePrint: (0, a.jsx)(p.Z, {
                    subscriptionPlan: l,
                    paymentSourceType: null === (n = y[null !== (r = f.paymentSourceId) && void 0 !== r ? r : '']) || void 0 === n ? void 0 : n.type,
                    basePrice: i,
                    currentSubscription: s,
                    planGroup: c
                }),
                forceShow: !0,
                showPricingLink: l.currency !== P.pKx.USD,
                showWithdrawalWaiver: v,
                disabled: E,
                subscriptionPlan: l,
                currentSubscription: s,
                planGroup: c
            });
}
function V(e) {
    let { premiumSubscription: n, priceOptions: r, preventFetch: i, onInvoiceError: s } = e,
        { analyticsLocations: l } = (0, g.ZP)(),
        [u, c] = (0, N.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: l,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [f, p] = (0, N.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: l,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        h = null != c ? c : p;
    if (
        (o.useEffect(() => {
            s(h);
        }, [s, h]),
        null != h)
    )
        return (0, a.jsx)(d.FormErrorBlock, { children: h.message });
    if (null == u || null == f) return (0, a.jsx)(d.Spinner, { className: U.__invalid_spinner });
    let _ = (0, A.Ap)(r.paymentSourceId);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: k.renewalInvoiceDate,
                children: M.intl.string(M.t.spIYoq)
            }),
            (0, a.jsxs)(O.PO, {
                className: U.invoice,
                children: [
                    (0, a.jsx)(O.q9, { children: M.intl.string(M.t['2eh+Cg']) }),
                    (0, a.jsx)(w.By, {
                        invoice: u,
                        isPrepaidPaymentSource: _
                    }),
                    (0, a.jsx)(w.nd, {
                        premiumSubscription: n,
                        renewalInvoice: f,
                        isUpdate: !0,
                        isPrepaidPaymentSource: _
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let n,
        { premiumSubscription: r, newPlan: i, planGroup: o, priceOptions: s, preventFetch: l } = e,
        { analyticsLocations: u } = (0, g.ZP)(),
        [c, f] = (0, N.ED)({
            subscriptionId: r.id,
            items: (0, A.al)(r, i.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: u,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != f) return (0, a.jsx)(d.FormErrorBlock, { children: f.message });
    if (null == c) return (0, a.jsx)('div', { children: (0, a.jsx)(d.Spinner, {}) });
    n = r.type === P.NYc.PREMIUM ? (0, A.Gf)(i.id) : i.name;
    let p = (0, A.Ap)(s.paymentSourceId);
    return (0, a.jsxs)('div', {
        className: U.bodyText,
        children: [
            (0, a.jsx)('div', {
                className: k.renewalInvoiceDate,
                children: M.intl.format(M.t['+y0Tj4'], { renewalDate: c.subscriptionPeriodStart })
            }),
            (0, a.jsxs)(O.PO, {
                className: U.invoice,
                children: [
                    (0, a.jsx)(O.q9, { children: M.intl.string(M.t.iqhIp6) }),
                    (0, a.jsx)(O.R$, {
                        label: n,
                        value: (0, A.PK)(i, s, !0)
                    }),
                    (0, a.jsx)(D.Z, { invoice: c }),
                    (0, a.jsx)(O.KU, {}),
                    (0, a.jsx)(w.nd, {
                        premiumSubscription: r,
                        renewalInvoice: c,
                        isUpdate: !0,
                        isPrepaidPaymentSource: p
                    })
                ]
            })
        ]
    });
}
