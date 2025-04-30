n.d(t, { Z: () => Y }), n(388685);
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
        { premiumSubscription: n, paymentSources: o, priceOptions: p, onPaymentSourceChange: h, onPaymentSourceAdd: C, planId: w, setHasAcceptedTerms: M, legalTermsNodeRef: k, hasLegalTermsFlash: G, onInvoiceError: V, planGroup: F, currencies: Z, onCurrencyChange: H, hasOpenInvoice: Y, purchaseState: X, handleClose: J } = e,
        { selectedSkuId: $, defaultPlanId: ee, isPremium: et, startedPaymentFlowWithPaymentSourcesRef: en, hasPaymentSources: er } = (0, E.JL)(),
        { isGift: ei } = (0, g.wD)(),
        eo = p.paymentSourceId,
        ea = (0, O.$)(o, eo),
        es = (0, l.e7)([S.Z], () => S.Z.get(w));
    a()(null != es, 'Missing newPlan');
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
        eg = null != em && em.length > 0 && (eo === T.c || null === ea) && er ? L.w.SELECT_PAYMENT_METHOD : void 0;
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
                        paymentSources: Object.values(o),
                        selectedPaymentSourceId: eo,
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
                              paymentSources: o,
                              setHasAcceptedTerms: M
                          })
                        : (0, r.jsx)(_.Z, {
                              onChange: M,
                              finePrint: (0, r.jsx)(d.Z, {
                                  subscriptionPlan: es,
                                  paymentSourceType: ea,
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
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: o, preventFetch: a } = e,
        { setInvoicePreview: s } = (0, E.JL)(),
        [l, u] = (0, C.Ox)({
            subscriptionId: t.id,
            preventFetch: a
        });
    i.useEffect(() => {
        s(l);
    }, [s, l]),
        i.useEffect(() => {
            n(u);
        }, [n, u]);
    let d = (0, A.Ap)(o.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(P.aO, {
              className: G.__invalid_invoice,
              children: [
                  (0, r.jsx)(M.By, {
                      invoice: l,
                      isPrepaidPaymentSource: d
                  }),
                  (0, r.jsx)(M.nd, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: d
                  })
              ]
          })
        : (0, r.jsx)(c.$jN, {});
}
function K(e) {
    let t,
        { premiumSubscription: n, newPlan: o, onInvoiceError: a, planGroup: s, priceOptions: l, fractionalPremiumInfo: u, preventFetch: d } = e,
        { selectedSkuId: f, startedPaymentFlowWithPaymentSourcesRef: _, setInvoicePreview: p } = (0, E.JL)(),
        { isGift: m } = (0, g.wD)(),
        { analyticsLocations: b } = (0, h.ZP)(),
        O = (0, A.al)(n, o.id, 1, new Set(s)),
        {
            proratedInvoicePreview: v,
            proratedInvoiceError: I,
            renewalInvoicePreview: S,
            renewalInvoiceError: T
        } = X({
            premiumSubscription: n,
            newItems: O,
            priceOptions: l,
            preventFetch: d,
            analyticsLocations: b
        });
    i.useEffect(() => {
        p(v);
    }, [p, v]);
    let N = null != I ? I : T;
    if (
        (i.useEffect(() => {
            a(N);
        }, [a, N]),
        null != N)
    )
        return (0, r.jsx)(c.kzN, { children: N.message });
    let C = (0, y.Kp)({
            isTrial: !1,
            isGift: m,
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSources: _.current
        }),
        R = (0, y.$g)(C, v, o);
    if ((null !== u && null !== v && (t = (0, A.N1)(v.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == v || null == S || R)) return (0, r.jsx)(c.$jN, { className: B.__invalid_spinner });
    let w = (0, A.Ap)(l.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(M.hG, {
                proratedInvoice: v,
                renewalInvoice: S,
                overrideRenewalDate: t
            }),
            (0, r.jsxs)(P.aO, {
                className: B.invoice,
                children: [
                    (0, r.jsx)(P.Z9, { children: U.intl.string(U.t['2eh+Cg']) }),
                    (0, r.jsx)(M.Lu, {
                        invoice: v,
                        newPlan: o,
                        isPrepaidPaymentSource: w
                    }),
                    (0, r.jsx)(M.nd, {
                        premiumSubscription: n,
                        proratedInvoice: v,
                        renewalInvoice: S,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: w
                    })
                ]
            })
        ]
    });
}
function z(e) {
    let t,
        { premiumSubscription: n, newPlan: o, onInvoiceError: a, planGroup: s, priceOptions: l, preventFetch: u, disabled: f, isEEA: p, paymentSources: m, setHasAcceptedTerms: g } = e,
        { analyticsLocations: E } = (0, h.ZP)(),
        b = (0, A.al)(n, o.id, 1, new Set(s)),
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
        a(N);
    }, [a, N]),
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
                    subscriptionPlan: o,
                    paymentSourceType: T,
                    basePrice: t,
                    proratedAmount: null != y ? y.total : void 0,
                    currentSubscription: n,
                    planGroup: s
                }),
                forceShow: !0,
                showPricingLink: o.currency !== j.pKx.USD,
                showWithdrawalWaiver: p,
                disabled: f,
                subscriptionPlan: o,
                currentSubscription: n,
                planGroup: s
            });
}
function q(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: o, onInvoiceError: a } = e,
        { setInvoicePreview: s } = (0, E.JL)(),
        { analyticsLocations: l } = (0, h.ZP)(),
        [u, d] = (0, C.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: o,
            analyticsLocations: l,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [f, _] = (0, C.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: o,
            analyticsLocations: l,
            analyticsLocation: p.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        });
    i.useEffect(() => {
        s(u);
    }, [s, u]);
    let m = null != d ? d : _;
    if (
        (i.useEffect(() => {
            a(m);
        }, [a, m]),
        null != m)
    )
        return (0, r.jsx)(c.kzN, { children: m.message });
    if (null == u || null == f) return (0, r.jsx)(c.$jN, { className: B.__invalid_spinner });
    let g = (0, A.Ap)(n.paymentSourceId);
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
                        invoice: u,
                        isPrepaidPaymentSource: g
                    }),
                    (0, r.jsx)(M.nd, {
                        premiumSubscription: t,
                        renewalInvoice: f,
                        isUpdate: !0,
                        isPrepaidPaymentSource: g
                    })
                ]
            })
        ]
    });
}
function Q(e) {
    let t,
        { premiumSubscription: n, newPlan: o, planGroup: a, fractionalPremiumInfo: s, priceOptions: l, preventFetch: u } = e,
        { setInvoicePreview: d } = (0, E.JL)(),
        { analyticsLocations: f } = (0, h.ZP)(),
        [_, p] = (0, C.ED)({
            subscriptionId: n.id,
            items: (0, A.al)(n, o.id, 1, new Set(a)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: u,
            analyticsLocations: f,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (
        (i.useEffect(() => {
            d(_);
        }, [d, _]),
        null != p)
    )
        return (0, r.jsx)(c.kzN, { children: p.message });
    if (null == _) return (0, r.jsx)('div', { children: (0, r.jsx)(c.$jN, {}) });
    t = n.type === j.NYc.PREMIUM ? (0, A.Gf)(o.id) : o.name;
    let m = (0, A.Ap)(l.paymentSourceId),
        g = _.subscriptionPeriodStart;
    return (
        s.fractionalState === k.a$.FP_SUB_PAUSED && (g = s.endsAt.toDate()),
        (0, r.jsxs)('div', {
            className: B.bodyText,
            children: [
                (0, r.jsx)('div', {
                    className: G.renewalInvoiceDate,
                    children: U.intl.format(U.t['+y0Tj4'], { renewalDate: g })
                }),
                (0, r.jsxs)(P.aO, {
                    className: B.invoice,
                    children: [
                        (0, r.jsx)(P.Z9, { children: U.intl.string(U.t.iqhIp6) }),
                        (0, r.jsx)(P.B1, {
                            label: t,
                            value: (0, A.PK)(o, l, !0)
                        }),
                        (0, r.jsx)(w.Z, { invoice: _ }),
                        (0, r.jsx)(P.UN, {}),
                        (0, r.jsx)(M.nd, {
                            premiumSubscription: n,
                            renewalInvoice: _,
                            isUpdate: !0,
                            isPrepaidPaymentSource: m
                        })
                    ]
                })
            ]
        })
    );
}
let X = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: o } = e,
        a = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: o,
            analyticsLocation: p.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        },
        [s, l] = (0, C.ED)(
            H(F({}, a), {
                renewal: !1,
                applyEntitlements: !0
            })
        ),
        [c, u] = (0, C.ED)(H(F({}, a), { renewal: !0 }));
    return {
        proratedInvoicePreview: s,
        proratedInvoiceError: l,
        renewalInvoicePreview: c,
        renewalInvoiceError: u
    };
};
