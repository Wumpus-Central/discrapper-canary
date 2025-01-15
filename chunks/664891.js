t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(742280),
    c = t(442837),
    o = t(481060),
    u = t(190947),
    d = t(224550),
    m = t(275850),
    p = t(672971),
    x = t(100527),
    h = t(906732),
    f = t(987209),
    v = t(563132),
    g = t(45572),
    S = t(614223),
    E = t(246946),
    j = t(351402),
    y = t(509545),
    P = t(74538),
    I = t(296848),
    T = t(374649),
    N = t(642530),
    b = t(653798),
    C = t(585602),
    _ = t(314182),
    Z = t(314404),
    O = t(42818),
    A = t(981631),
    R = t(388032),
    w = t(585488),
    M = t(401615);
function L(e) {
    var n;
    let t,
        { premiumSubscription: r, paymentSources: x, priceOptions: h, onPaymentSourceChange: T, onPaymentSourceAdd: C, planId: O, setHasAcceptedTerms: w, legalTermsNodeRef: L, hasLegalTermsFlash: G, onInvoiceError: H, planGroup: W, currencies: V, onCurrencyChange: z, hasOpenInvoice: K, purchaseState: Y, handleClose: X } = e,
        { selectedSkuId: q, defaultPlanId: J, isPremium: Q, startedPaymentFlowWithPaymentSourcesRef: $ } = (0, v.usePaymentContext)(),
        { isGift: ee } = (0, f.wD)(),
        en = h.paymentSourceId,
        et = (0, c.e7)([y.Z], () => y.Z.get(O));
    s()(null != et, 'Missing newPlan');
    let ei = (0, c.e7)([E.Z], () => E.Z.hidePersonalInformation),
        el = a.M.EEA_COUNTRIES.has(j.Z.ipCountryCodeWithFallback),
        er = Y === g.A.PURCHASING || Y === g.A.COMPLETED,
        es = (0, S.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: $.current
        }),
        ea = (null == r ? void 0 : r.status) === A.O0b.PAUSED,
        ec = l.useMemo(
            () =>
                (0, P.V7)({
                    skuId: q,
                    isPremium: Q,
                    multiMonthPlans: [],
                    currentSubscription: r,
                    isGift: ee,
                    isEligibleForTrial: !1,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: !1
                }),
            [q, r, J, Q, ee]
        );
    t = K || ea ? R.intl.string(R.t.nyzoFR) : (0, P.PV)(O) ? (0, P.W_)(r, et) : R.intl.formatToPlainString(R.t['sBpy9/'], { planName: et.name });
    let eo = null;
    return (
        null != r &&
            (eo = K
                ? (0, i.jsx)(k, {
                      premiumSubscription: r,
                      onInvoiceError: H,
                      priceOptions: h,
                      preventFetch: !1
                  })
                : ea
                  ? (0, i.jsx)(U, {
                        premiumSubscription: r,
                        onInvoiceError: H,
                        priceOptions: h,
                        preventFetch: er
                    })
                  : (0, I.R4)(r, O, W)
                    ? (0, i.jsx)(F, {
                          premiumSubscription: r,
                          newPlan: et,
                          onInvoiceError: H,
                          planGroup: W,
                          priceOptions: h,
                          preventFetch: er
                      })
                    : (0, i.jsx)(B, {
                          premiumSubscription: r,
                          newPlan: et,
                          planGroup: W,
                          priceOptions: h,
                          preventFetch: er
                      })),
        (0, i.jsxs)('div', {
            className: M.stepBody,
            children: [
                !ea &&
                    es &&
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(b.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, i.jsx)(N.Z, {}),
                            (0, i.jsx)(Z.O, {
                                planOptions: ec,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: O,
                                showTotal: !1,
                                handleClose: X
                            }),
                            (0, i.jsx)(b.KU, {})
                        ]
                    }),
                (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: t
                }),
                eo,
                (0, i.jsxs)('div', {
                    className: M.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.intl.string(R.t.mmDvV1)
                        }),
                        (0, i.jsx)(m.Z, {
                            paymentSources: Object.values(x),
                            selectedPaymentSourceId: en,
                            onChange: T,
                            onPaymentSourceAdd: C,
                            hidePersonalInformation: ei,
                            disabled: er
                        })
                    ]
                }),
                (0, i.jsxs)(u.b, {
                    currencies: V,
                    className: M.currencyWrapper,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.intl.string(R.t['/AAR09'])
                        }),
                        (0, i.jsx)(u.Z, {
                            selectedCurrency: h.currency,
                            currencies: V,
                            onChange: z,
                            disabled: er
                        })
                    ]
                }),
                (0, i.jsx)(_.Z, {
                    isActive: G,
                    ref: L,
                    children:
                        null != r && (0, I.R4)(r, O, W)
                            ? (0, i.jsx)(D, {
                                  premiumSubscription: r,
                                  newPlan: et,
                                  onInvoiceError: H,
                                  planGroup: W,
                                  priceOptions: h,
                                  preventFetch: er,
                                  disabled: er,
                                  isEEA: el,
                                  paymentSources: x,
                                  setHasAcceptedTerms: w
                              })
                            : (0, i.jsx)(p.Z, {
                                  onChange: w,
                                  finePrint: (0, i.jsx)(d.Z, {
                                      subscriptionPlan: et,
                                      paymentSourceType: null === (n = x[null != en ? en : '']) || void 0 === n ? void 0 : n.type,
                                      basePrice: (0, P.aS)(et.id, !1, ee, h),
                                      currentSubscription: r,
                                      planGroup: W
                                  }),
                                  forceShow: !0,
                                  showPricingLink: et.currency !== A.pKx.USD,
                                  showWithdrawalWaiver: el,
                                  disabled: er,
                                  subscriptionPlan: et,
                                  currentSubscription: r,
                                  planGroup: W
                              })
                })
            ]
        })
    );
}
function k(e) {
    let { premiumSubscription: n, onInvoiceError: t, priceOptions: r, preventFetch: s } = e,
        [a, c] = (0, T.Ox)({
            subscriptionId: n.id,
            preventFetch: s
        });
    l.useEffect(() => {
        t(c);
    }, [t, c]);
    let u = (0, P.Ap)(r.paymentSourceId);
    return null != a
        ? (0, i.jsxs)(b.PO, {
              className: w.__invalid_invoice,
              children: [
                  (0, i.jsx)(O.By, {
                      invoice: a,
                      isPrepaidPaymentSource: u
                  }),
                  (0, i.jsx)(O.nd, {
                      premiumSubscription: n,
                      renewalInvoice: a,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, i.jsx)(o.Spinner, {});
}
function F(e) {
    let { premiumSubscription: n, newPlan: t, onInvoiceError: r, planGroup: s, priceOptions: a, preventFetch: c } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, v.usePaymentContext)(),
        { isGift: m } = (0, f.wD)(),
        { analyticsLocations: p } = (0, h.ZP)(),
        g = (0, P.al)(n, t.id, 1, new Set(s)),
        [E, j] = (0, T.ED)({
            subscriptionId: n.id,
            items: g,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: p,
            analyticsLocation: x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [y, I] = (0, T.ED)({
            subscriptionId: n.id,
            items: g,
            renewal: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: p,
            analyticsLocation: x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        N = null != j ? j : I;
    if (
        (l.useEffect(() => {
            r(N);
        }, [r, N]),
        null != N)
    )
        return (0, i.jsx)(o.FormErrorBlock, { children: N.message });
    let C = (0, S.Kp)({
            isTrial: !1,
            isGift: m,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        _ = (0, S.$g)(C, E, t);
    if (null == E || null == y || _) return (0, i.jsx)(o.Spinner, { className: M.__invalid_spinner });
    let Z = (0, P.Ap)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O.hG, {
                proratedInvoice: E,
                renewalInvoice: y
            }),
            (0, i.jsxs)(b.PO, {
                className: M.invoice,
                children: [
                    (0, i.jsx)(b.q9, { children: R.intl.string(R.t['2eh+Cg']) }),
                    (0, i.jsx)(O.Lu, {
                        invoice: E,
                        newPlan: t,
                        isPrepaidPaymentSource: Z
                    }),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: n,
                        proratedInvoice: E,
                        renewalInvoice: y,
                        isUpdate: !0,
                        isPrepaidPaymentSource: Z
                    })
                ]
            })
        ]
    });
}
function D(e) {
    var n, t;
    let r,
        { premiumSubscription: s, newPlan: a, onInvoiceError: c, planGroup: u, priceOptions: m, preventFetch: f, disabled: v, isEEA: g, paymentSources: S, setHasAcceptedTerms: E } = e,
        { analyticsLocations: j } = (0, h.ZP)(),
        y = (0, P.al)(s, a.id, 1, new Set(u)),
        [I, N] = (0, T.ED)({
            subscriptionId: s.id,
            items: y,
            renewal: !0,
            paymentSourceId: m.paymentSourceId,
            currency: m.currency,
            preventFetch: f,
            analyticsLocations: j,
            analyticsLocation: x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        });
    return (l.useEffect(() => {
        c(N);
    }, [c, N]),
    null != N)
        ? (0, i.jsx)(o.FormErrorBlock, { children: N.message })
        : (null != I &&
                (r = {
                    amount: I.total,
                    currency: I.currency,
                    tax: I.tax,
                    taxInclusive: I.taxInclusive
                }),
            null == r)
          ? null
          : (0, i.jsx)(p.Z, {
                onChange: E,
                finePrint: (0, i.jsx)(d.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: null === (n = S[null !== (t = m.paymentSourceId) && void 0 !== t ? t : '']) || void 0 === n ? void 0 : n.type,
                    basePrice: r,
                    currentSubscription: s,
                    planGroup: u
                }),
                forceShow: !0,
                showPricingLink: a.currency !== A.pKx.USD,
                showWithdrawalWaiver: g,
                disabled: v,
                subscriptionPlan: a,
                currentSubscription: s,
                planGroup: u
            });
}
function U(e) {
    let { premiumSubscription: n, priceOptions: t, preventFetch: r, onInvoiceError: s } = e,
        { analyticsLocations: a } = (0, h.ZP)(),
        [c, u] = (0, T.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: a,
            analyticsLocation: x.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, m] = (0, T.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: a,
            analyticsLocation: x.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        p = null != u ? u : m;
    if (
        (l.useEffect(() => {
            s(p);
        }, [s, p]),
        null != p)
    )
        return (0, i.jsx)(o.FormErrorBlock, { children: p.message });
    if (null == c || null == d) return (0, i.jsx)(o.Spinner, { className: M.__invalid_spinner });
    let f = (0, P.Ap)(t.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: w.renewalInvoiceDate,
                children: R.intl.string(R.t.spIYoq)
            }),
            (0, i.jsxs)(b.PO, {
                className: M.invoice,
                children: [
                    (0, i.jsx)(b.q9, { children: R.intl.string(R.t['2eh+Cg']) }),
                    (0, i.jsx)(O.By, {
                        invoice: c,
                        isPrepaidPaymentSource: f
                    }),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: n,
                        renewalInvoice: d,
                        isUpdate: !0,
                        isPrepaidPaymentSource: f
                    })
                ]
            })
        ]
    });
}
function B(e) {
    let n,
        { premiumSubscription: t, newPlan: l, planGroup: r, priceOptions: s, preventFetch: a } = e,
        { analyticsLocations: c } = (0, h.ZP)(),
        [u, d] = (0, T.ED)({
            subscriptionId: t.id,
            items: (0, P.al)(t, l.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != d) return (0, i.jsx)(o.FormErrorBlock, { children: d.message });
    if (null == u) return (0, i.jsx)('div', { children: (0, i.jsx)(o.Spinner, {}) });
    n = t.type === A.NYc.PREMIUM ? (0, P.Gf)(l.id) : l.name;
    let m = (0, P.Ap)(s.paymentSourceId);
    return (0, i.jsxs)('div', {
        className: M.bodyText,
        children: [
            (0, i.jsx)('div', {
                className: w.renewalInvoiceDate,
                children: R.intl.format(R.t['+y0Tj4'], { renewalDate: u.subscriptionPeriodStart })
            }),
            (0, i.jsxs)(b.PO, {
                className: M.invoice,
                children: [
                    (0, i.jsx)(b.q9, { children: R.intl.string(R.t.iqhIp6) }),
                    (0, i.jsx)(b.R$, {
                        label: n,
                        value: (0, P.PK)(l, s, !0)
                    }),
                    (0, i.jsx)(C.Z, { invoice: u }),
                    (0, i.jsx)(b.KU, {}),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: t,
                        renewalInvoice: u,
                        isUpdate: !0,
                        isPrepaidPaymentSource: m
                    })
                ]
            })
        ]
    });
}
