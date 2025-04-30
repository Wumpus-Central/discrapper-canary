n.d(t, { Z: () => Y }), n(388685);
var r = n(255367),
    i = n(73800),
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
    O = n(435020),
    v = n(246946),
    I = n(351402),
    S = n(509545),
    T = n(855775),
    A = n(74538),
    N = n(296848),
    C = n(374649),
    R = n(642530),
    P = n(811334),
    w = n(585602),
    D = n(314182),
    L = n(396955),
    x = n(314404),
    M = n(42818),
    k = n(474936),
    j = n(981631),
    U = n(388032),
    G = n(393040),
    B = n(236691);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Y(e) {
    let t,
        { premiumSubscription: n, paymentSources: a, priceOptions: p, onPaymentSourceChange: h, onPaymentSourceAdd: C, planId: w, setHasAcceptedTerms: M, legalTermsNodeRef: k, hasLegalTermsFlash: G, onInvoiceError: V, planGroup: F, currencies: Z, onCurrencyChange: H, hasOpenInvoice: Y, purchaseState: X, handleClose: J } = e,
        { selectedSkuId: $, defaultPlanId: ee, isPremium: et, startedPaymentFlowWithPaymentSourcesRef: en, hasPaymentSources: er } = (0, E.JL)(),
        { isGift: ei } = (0, g.wD)(),
        ea = p.paymentSourceId,
        eo = (0, O.$)(a, ea),
        es = (0, l.e7)([S.Z], () => S.Z.get(w));
    o()(null != es, 'Missing newPlan');
    let el = (0, l.e7)([v.Z], () => v.Z.hidePersonalInformation),
        ec = (0, m.Z)(),
        eu = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        ed = X === b.A.PURCHASING || X === b.A.COMPLETED,
        ef = (0, y.Kp)({
            isTrial: !1,
            isGift: ei,
            selectedSkuId: $,
            startedPaymentFlowWithPaymentSources: en.current
        }),
        e_ = null == n ? void 0 : n.isPausedAllowsResumeButNotUpdates,
        ep = i.useMemo(
            () =>
                (0, A.V7)({
                    skuId: $,
                    isPremium: et,
                    multiMonthPlans: [],
                    currentSubscription: n,
                    defaultPlanId: ee
                }),
            [$, n, ee, et]
        );
    t = Y || e_ ? U.intl.string(U.t.nyzoFR) : (0, A.PV)(w) ? (0, A.W_)(n, es) : U.intl.formatToPlainString(U.t['sBpy9/'], { planName: es.name });
    let eh = null;
    null != n &&
        (eh = Y
            ? (0, r.jsx)(W, {
                  premiumSubscription: n,
                  onInvoiceError: V,
                  priceOptions: p,
                  preventFetch: !1
              })
            : e_
              ? (0, r.jsx)(q, {
                    premiumSubscription: n,
                    onInvoiceError: V,
                    priceOptions: p,
                    preventFetch: ed
                })
              : (0, N.R4)(n, w, F)
                ? (0, r.jsx)(K, {
                      premiumSubscription: n,
                      newPlan: es,
                      onInvoiceError: V,
                      planGroup: F,
                      priceOptions: p,
                      fractionalPremiumInfo: ec,
                      preventFetch: ed
                  })
                : (0, r.jsx)(Q, {
                      premiumSubscription: n,
                      newPlan: es,
                      planGroup: F,
                      fractionalPremiumInfo: ec,
                      priceOptions: p,
                      preventFetch: ed
                  }));
    let em = null == n ? void 0 : n.eligiblePaymentGateways,
        eg = null != em && em.length > 0 && (ea === T.c || null === eo) && er ? L.w.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: B.stepBody,
        children: [
            (0, r.jsx)(L.Y, { paymentRestrictionBannerType: eg }),
            !e_ &&
                ef &&
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(P.UN, {
                            negativeMarginBottom: !0,
                            negativeMarginTop: !0
                        }),
                        (0, r.jsx)(R.Z, {}),
                        (0, r.jsx)(x.O, {
                            planOptions: ep,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: w,
                            planGroup: F,
                            showTotal: !1,
                            handleClose: J
                        }),
                        (0, r.jsx)(P.UN, {})
                    ]
                }),
            (0, r.jsx)(c.vwX, {
                tag: c.RB0.H5,
                children: t
            }),
            eh,
            (0, r.jsxs)('div', {
                className: B.paymentSourceWrapper,
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: c.RB0.H5,
                        children: U.intl.string(U.t.mmDvV1)
                    }),
                    (0, r.jsx)(f.ZP, {
                        paymentSources: Object.values(a),
                        selectedPaymentSourceId: ea,
                        onChange: h,
                        onPaymentSourceAdd: C,
                        hidePersonalInformation: el,
                        disabled: ed,
                        paymentGatewayRestrictions: null == n ? void 0 : n.eligiblePaymentGateways
                    })
                ]
            }),
            (0, r.jsxs)(u.b, {
                currencies: Z,
                className: B.currencyWrapper,
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: c.RB0.H5,
                        children: U.intl.string(U.t['/AAR09'])
                    }),
                    (0, r.jsx)(u.Z, {
                        selectedCurrency: p.currency,
                        currencies: Z,
                        onChange: H,
                        disabled: ed
                    })
                ]
            }),
            (0, r.jsx)(D.Z, {
                isActive: G,
                ref: k,
                children:
                    null != n && (0, N.R4)(n, w, F)
                        ? (0, r.jsx)(z, {
                              premiumSubscription: n,
                              newPlan: es,
                              onInvoiceError: V,
                              planGroup: F,
                              priceOptions: p,
                              preventFetch: ed,
                              disabled: ed,
                              isEEA: eu,
                              paymentSources: a,
                              setHasAcceptedTerms: M
                          })
                        : (0, r.jsx)(_.Z, {
                              onChange: M,
                              finePrint: (0, r.jsx)(d.Z, {
                                  subscriptionPlan: es,
                                  paymentSourceType: eo,
                                  basePrice: (0, A.aS)(es.id, !1, ei, p),
                                  currentSubscription: n,
                                  planGroup: F
                              }),
                              forceShow: !0,
                              showPricingLink: es.currency !== j.pKx.USD,
                              showWithdrawalWaiver: eu,
                              disabled: ed,
                              subscriptionPlan: es,
                              currentSubscription: n,
                              planGroup: F
                          })
            })
        ]
    });
}
function W(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: o } = e,
        [s, l] = (0, C.Ox)({
            subscriptionId: t.id,
            preventFetch: o
        });
    i.useEffect(() => {
        n(l);
    }, [n, l]);
    let u = (0, A.Ap)(a.paymentSourceId);
    return null != s
        ? (0, r.jsxs)(P.aO, {
              className: G.__invalid_invoice,
              children: [
                  (0, r.jsx)(M.By, {
                      invoice: s,
                      isPrepaidPaymentSource: u
                  }),
                  (0, r.jsx)(M.nd, {
                      premiumSubscription: t,
                      renewalInvoice: s,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, r.jsx)(c.$jN, {});
}
function K(e) {
    let t,
        { premiumSubscription: n, newPlan: a, onInvoiceError: o, planGroup: s, priceOptions: l, fractionalPremiumInfo: u, preventFetch: d } = e,
        { selectedSkuId: f, startedPaymentFlowWithPaymentSourcesRef: _ } = (0, E.JL)(),
        { isGift: p } = (0, g.wD)(),
        { analyticsLocations: m } = (0, h.ZP)(),
        b = (0, A.al)(n, a.id, 1, new Set(s)),
        {
            proratedInvoicePreview: O,
            proratedInvoiceError: v,
            renewalInvoicePreview: I,
            renewalInvoiceError: S
        } = X({
            premiumSubscription: n,
            newItems: b,
            priceOptions: l,
            preventFetch: d,
            analyticsLocations: m
        }),
        T = null != v ? v : S;
    if (
        (i.useEffect(() => {
            o(T);
        }, [o, T]),
        null != T)
    )
        return (0, r.jsx)(c.kzN, { children: T.message });
    let N = (0, y.Kp)({
            isTrial: !1,
            isGift: p,
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSources: _.current
        }),
        C = (0, y.$g)(N, O, a);
    if ((null !== u && null !== O && (t = (0, A.N1)(O.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == O || null == I || C)) return (0, r.jsx)(c.$jN, { className: B.__invalid_spinner });
    let R = (0, A.Ap)(l.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(M.hG, {
                proratedInvoice: O,
                renewalInvoice: I,
                overrideRenewalDate: t
            }),
            (0, r.jsxs)(P.aO, {
                className: B.invoice,
                children: [
                    (0, r.jsx)(P.Z9, { children: U.intl.string(U.t['2eh+Cg']) }),
                    (0, r.jsx)(M.Lu, {
                        invoice: O,
                        newPlan: a,
                        isPrepaidPaymentSource: R
                    }),
                    (0, r.jsx)(M.nd, {
                        premiumSubscription: n,
                        proratedInvoice: O,
                        renewalInvoice: I,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: R
                    })
                ]
            })
        ]
    });
}
function z(e) {
    let t,
        { premiumSubscription: n, newPlan: a, onInvoiceError: o, planGroup: s, priceOptions: l, preventFetch: u, disabled: f, isEEA: p, paymentSources: m, setHasAcceptedTerms: g } = e,
        { analyticsLocations: E } = (0, h.ZP)(),
        b = (0, A.al)(n, a.id, 1, new Set(s)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: v,
            renewalInvoicePreview: I,
            renewalInvoiceError: S
        } = X({
            premiumSubscription: n,
            newItems: b,
            priceOptions: l,
            preventFetch: u,
            analyticsLocations: E
        }),
        T = (0, O.$)(m, l.paymentSourceId),
        N = null != S ? S : v;
    return (i.useEffect(() => {
        o(N);
    }, [o, N]),
    null != N)
        ? (0, r.jsx)(c.kzN, { children: N.message })
        : (null != I &&
                (t = {
                    amount: I.subtotal,
                    currency: I.currency,
                    tax: I.tax,
                    taxInclusive: I.taxInclusive
                }),
            null == t)
          ? null
          : (0, r.jsx)(_.Z, {
                onChange: g,
                finePrint: (0, r.jsx)(d.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: T,
                    basePrice: t,
                    proratedAmount: null != y ? y.total : void 0,
                    currentSubscription: n,
                    planGroup: s
                }),
                forceShow: !0,
                showPricingLink: a.currency !== j.pKx.USD,
                showWithdrawalWaiver: p,
                disabled: f,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: s
            });
}
function q(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: o } = e,
        { analyticsLocations: s } = (0, h.ZP)(),
        [l, u] = (0, C.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: s,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, f] = (0, C.ED)({
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
    if (null == l || null == d) return (0, r.jsx)(c.$jN, { className: B.__invalid_spinner });
    let m = (0, A.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: G.renewalInvoiceDate,
                children: U.intl.string(U.t.spIYoq)
            }),
            (0, r.jsxs)(P.aO, {
                className: B.invoice,
                children: [
                    (0, r.jsx)(P.Z9, { children: U.intl.string(U.t['2eh+Cg']) }),
                    (0, r.jsx)(M.By, {
                        invoice: l,
                        isPrepaidPaymentSource: m
                    }),
                    (0, r.jsx)(M.nd, {
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
function Q(e) {
    let t,
        { premiumSubscription: n, newPlan: i, planGroup: a, fractionalPremiumInfo: o, priceOptions: s, preventFetch: l } = e,
        { analyticsLocations: u } = (0, h.ZP)(),
        [d, f] = (0, C.ED)({
            subscriptionId: n.id,
            items: (0, A.al)(n, i.id, 1, new Set(a)),
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
    t = n.type === j.NYc.PREMIUM ? (0, A.Gf)(i.id) : i.name;
    let _ = (0, A.Ap)(s.paymentSourceId),
        p = d.subscriptionPeriodStart;
    return (
        o.fractionalState === k.a$.FP_SUB_PAUSED && (p = o.endsAt.toDate()),
        (0, r.jsxs)('div', {
            className: B.bodyText,
            children: [
                (0, r.jsx)('div', {
                    className: G.renewalInvoiceDate,
                    children: U.intl.format(U.t['+y0Tj4'], { renewalDate: p })
                }),
                (0, r.jsxs)(P.aO, {
                    className: B.invoice,
                    children: [
                        (0, r.jsx)(P.Z9, { children: U.intl.string(U.t.iqhIp6) }),
                        (0, r.jsx)(P.B1, {
                            label: t,
                            value: (0, A.PK)(i, s, !0)
                        }),
                        (0, r.jsx)(w.Z, { invoice: d }),
                        (0, r.jsx)(P.UN, {}),
                        (0, r.jsx)(M.nd, {
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
let X = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: a } = e,
        o = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        },
        [s, l] = (0, C.ED)(
            H(F({}, o), {
                renewal: !1,
                applyEntitlements: !0
            })
        ),
        [c, u] = (0, C.ED)(H(F({}, o), { renewal: !0 }));
    return {
        proratedInvoicePreview: s,
        proratedInvoiceError: l,
        renewalInvoicePreview: c,
        renewalInvoiceError: u
    };
};
