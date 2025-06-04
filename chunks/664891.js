n.d(t, { Z: () => K }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(742280),
    u = n(442837),
    d = n(481060),
    f = n(190947),
    _ = n(224550),
    p = n(275850),
    h = n(672971),
    m = n(100527),
    g = n(906732),
    E = n(975298),
    b = n(987209),
    y = n(563132),
    O = n(45572),
    v = n(614223),
    I = n(435020),
    S = n(246946),
    T = n(351402),
    A = n(509545),
    N = n(855775),
    C = n(74538),
    P = n(296848),
    R = n(374649),
    w = n(642530),
    D = n(811334),
    L = n(585602),
    x = n(314182),
    k = n(396955),
    M = n(314404),
    j = n(42818),
    U = n(474936),
    G = n(981631),
    B = n(388032),
    F = n(393040),
    V = n(236691);
function Z(e, t, n) {
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
function H(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    let t,
        { premiumSubscription: n, paymentSources: a, priceOptions: s, onPaymentSourceChange: m, onPaymentSourceAdd: g, planId: R, setHasAcceptedTerms: L, legalTermsNodeRef: j, hasLegalTermsFlash: U, onInvoiceError: F, planGroup: Z, currencies: H, onCurrencyChange: Y, hasOpenInvoice: W, purchaseState: K, handleClose: $ } = e,
        { selectedSkuId: ee, defaultPlanId: et, isPremium: en, startedPaymentFlowWithPaymentSourcesRef: er, hasPaymentSources: ei, enablePremiumRebrandDesign: ea } = (0, y.JL)(),
        { isGift: eo } = (0, b.wD)(),
        es = s.paymentSourceId,
        el = (0, I.$)(a, es),
        ec = (0, u.e7)([A.Z], () => A.Z.get(R));
    l()(null != ec, 'Missing newPlan');
    let eu = (0, u.e7)([S.Z], () => S.Z.hidePersonalInformation),
        ed = (0, E.Z)(),
        ef = c.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
        e_ = K === O.A.PURCHASING || K === O.A.COMPLETED,
        ep = (0, v.Kp)({
            isTrial: !1,
            isGift: eo,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: er.current
        }),
        eh = null == n ? void 0 : n.isPausedAllowsResumeButNotUpdates,
        em = i.useMemo(
            () =>
                (0, C.V7)({
                    skuId: ee,
                    isPremium: en,
                    multiMonthPlans: [],
                    currentSubscription: n,
                    defaultPlanId: et
                }),
            [ee, n, et, en]
        );
    t = W || eh ? B.intl.string(B.t.nyzoFR) : (0, C.PV)(R) ? (0, C.W_)(n, ec) : B.intl.formatToPlainString(B.t['sBpy9/'], { planName: ec.name });
    let eg = null;
    null != n &&
        (eg = W
            ? (0, r.jsx)(z, {
                  premiumSubscription: n,
                  onInvoiceError: F,
                  priceOptions: s,
                  preventFetch: !1
              })
            : eh
              ? (0, r.jsx)(X, {
                    premiumSubscription: n,
                    onInvoiceError: F,
                    priceOptions: s,
                    preventFetch: e_
                })
              : (0, P.R4)(n, R, Z)
                ? (0, r.jsx)(q, {
                      premiumSubscription: n,
                      newPlan: ec,
                      onInvoiceError: F,
                      planGroup: Z,
                      priceOptions: s,
                      fractionalPremiumInfo: ed,
                      preventFetch: e_
                  })
                : (0, r.jsx)(J, {
                      premiumSubscription: n,
                      newPlan: ec,
                      planGroup: Z,
                      fractionalPremiumInfo: ed,
                      priceOptions: s,
                      preventFetch: e_
                  }));
    let eE = null == n ? void 0 : n.eligiblePaymentGateways,
        eb = null != eE && eE.length > 0 && (es === N.c || null === el) && ei ? k.w.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: V.stepBody,
        children: [
            (0, r.jsx)(k.Y, { paymentRestrictionBannerType: eb }),
            !eh &&
                ep &&
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(D.UN, {
                            negativeMarginBottom: !0,
                            negativeMarginTop: !0
                        }),
                        (0, r.jsx)(w.Z, {}),
                        (0, r.jsx)(M.O, {
                            planOptions: em,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: R,
                            planGroup: Z,
                            showTotal: !1,
                            handleClose: $
                        }),
                        (0, r.jsx)(D.UN, {})
                    ]
                }),
            (0, r.jsx)(d.vwX, {
                tag: d.RB0.H5,
                children: t
            }),
            eg,
            (0, r.jsxs)('div', {
                className: V.paymentSourceWrapper,
                children: [
                    (0, r.jsx)(d.vwX, {
                        tag: d.RB0.H5,
                        children: B.intl.string(B.t.mmDvV1)
                    }),
                    (0, r.jsx)(p.ZP, {
                        paymentSources: Object.values(a),
                        selectedPaymentSourceId: es,
                        onChange: m,
                        onPaymentSourceAdd: g,
                        hidePersonalInformation: eu,
                        disabled: e_,
                        paymentGatewayRestrictions: null == n ? void 0 : n.eligiblePaymentGateways,
                        className: o()({ [V.premiumRebrandInputBackground]: ea })
                    })
                ]
            }),
            (0, r.jsxs)(f.b, {
                currencies: H,
                className: V.currencyWrapper,
                children: [
                    (0, r.jsx)(d.vwX, {
                        tag: d.RB0.H5,
                        children: B.intl.string(B.t['/AAR09'])
                    }),
                    (0, r.jsx)(f.Z, {
                        selectedCurrency: s.currency,
                        currencies: H,
                        onChange: Y,
                        disabled: e_
                    })
                ]
            }),
            (0, r.jsx)(x.Z, {
                isActive: U,
                ref: j,
                children:
                    null != n && (0, P.R4)(n, R, Z)
                        ? (0, r.jsx)(Q, {
                              premiumSubscription: n,
                              newPlan: ec,
                              onInvoiceError: F,
                              planGroup: Z,
                              priceOptions: s,
                              preventFetch: e_,
                              disabled: e_,
                              isEEA: ef,
                              paymentSources: a,
                              setHasAcceptedTerms: L
                          })
                        : (0, r.jsx)(h.Z, {
                              onChange: L,
                              finePrint: (0, r.jsx)(_.Z, {
                                  subscriptionPlan: ec,
                                  paymentSourceType: el,
                                  basePrice: (0, C.aS)(ec.id, !1, eo, s),
                                  currentSubscription: n,
                                  planGroup: Z
                              }),
                              forceShow: !0,
                              showPricingLink: ec.currency !== G.pKx.USD,
                              showWithdrawalWaiver: ef,
                              disabled: e_,
                              subscriptionPlan: ec,
                              currentSubscription: n,
                              planGroup: Z
                          })
            })
        ]
    });
}
function z(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: o } = e,
        { setInvoicePreview: s } = (0, y.JL)(),
        [l, c] = (0, R.Ox)({
            subscriptionId: t.id,
            preventFetch: o
        });
    i.useEffect(() => {
        s(l);
    }, [s, l]),
        i.useEffect(() => {
            n(c);
        }, [n, c]);
    let u = (0, C.Ap)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(D.aO, {
              className: F.__invalid_invoice,
              children: [
                  (0, r.jsx)(j.By, {
                      invoice: l,
                      isPrepaidPaymentSource: u
                  }),
                  (0, r.jsx)(j.nd, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, r.jsx)(d.$jN, {});
}
function q(e) {
    let t,
        { premiumSubscription: n, newPlan: a, onInvoiceError: s, planGroup: l, priceOptions: c, fractionalPremiumInfo: u, preventFetch: f } = e,
        { selectedSkuId: _, startedPaymentFlowWithPaymentSourcesRef: p, setInvoicePreview: h, premiumRebrandBackgroundClassName: m } = (0, y.JL)(),
        { isGift: E } = (0, b.wD)(),
        { analyticsLocations: O } = (0, g.ZP)(),
        I = (0, C.al)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: S,
            proratedInvoiceError: T,
            renewalInvoicePreview: A,
            renewalInvoiceError: N
        } = $({
            premiumSubscription: n,
            newItems: I,
            priceOptions: c,
            preventFetch: f,
            analyticsLocations: O
        });
    i.useEffect(() => {
        h(S);
    }, [h, S]);
    let P = null != T ? T : N;
    if (
        (i.useEffect(() => {
            s(P);
        }, [s, P]),
        null != P)
    )
        return (0, r.jsx)(d.kzN, { children: P.message });
    let R = (0, v.Kp)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSources: p.current
        }),
        w = (0, v.$g)(R, S, a);
    if ((null !== u && null !== S && (t = (0, C.N1)(S.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)), null == S || null == A || w)) return (0, r.jsx)(d.$jN, { className: V.__invalid_spinner });
    let L = (0, C.Ap)(c.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.hG, {
                proratedInvoice: S,
                renewalInvoice: A,
                overrideRenewalDate: t
            }),
            (0, r.jsxs)(D.aO, {
                className: o()(V.invoice, m),
                children: [
                    (0, r.jsx)(D.Z9, { children: B.intl.string(B.t['2eh+Cg']) }),
                    (0, r.jsx)(j.Lu, {
                        invoice: S,
                        newPlan: a,
                        isPrepaidPaymentSource: L
                    }),
                    (0, r.jsx)(j.nd, {
                        premiumSubscription: n,
                        proratedInvoice: S,
                        renewalInvoice: A,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: L
                    })
                ]
            })
        ]
    });
}
function Q(e) {
    let t,
        { premiumSubscription: n, newPlan: a, onInvoiceError: o, planGroup: s, priceOptions: l, preventFetch: c, disabled: u, isEEA: f, paymentSources: p, setHasAcceptedTerms: m } = e,
        { analyticsLocations: E } = (0, g.ZP)(),
        b = (0, C.al)(n, a.id, 1, new Set(s)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: O,
            renewalInvoicePreview: v,
            renewalInvoiceError: S
        } = $({
            premiumSubscription: n,
            newItems: b,
            priceOptions: l,
            preventFetch: c,
            analyticsLocations: E
        }),
        T = (0, I.$)(p, l.paymentSourceId),
        A = null != S ? S : O;
    return (i.useEffect(() => {
        o(A);
    }, [o, A]),
    null != A)
        ? (0, r.jsx)(d.kzN, { children: A.message })
        : (null != v &&
                (t = {
                    amount: v.subtotal,
                    currency: v.currency,
                    tax: v.tax,
                    taxInclusive: v.taxInclusive
                }),
            null == t)
          ? null
          : (0, r.jsx)(h.Z, {
                onChange: m,
                finePrint: (0, r.jsx)(_.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: T,
                    basePrice: t,
                    proratedAmount: null != y ? y.total : void 0,
                    currentSubscription: n,
                    planGroup: s
                }),
                forceShow: !0,
                showPricingLink: a.currency !== G.pKx.USD,
                showWithdrawalWaiver: f,
                disabled: u,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: s
            });
}
function X(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: s } = e,
        { setInvoicePreview: l, premiumRebrandBackgroundClassName: c } = (0, y.JL)(),
        { analyticsLocations: u } = (0, g.ZP)(),
        [f, _] = (0, R.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [p, h] = (0, R.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        });
    i.useEffect(() => {
        l(f);
    }, [l, f]);
    let E = null != _ ? _ : h;
    if (
        (i.useEffect(() => {
            s(E);
        }, [s, E]),
        null != E)
    )
        return (0, r.jsx)(d.kzN, { children: E.message });
    if (null == f || null == p) return (0, r.jsx)(d.$jN, { className: V.__invalid_spinner });
    let b = (0, C.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: F.renewalInvoiceDate,
                children: B.intl.string(B.t.spIYoq)
            }),
            (0, r.jsxs)(D.aO, {
                className: o()(V.invoice, c),
                children: [
                    (0, r.jsx)(D.Z9, { children: B.intl.string(B.t['2eh+Cg']) }),
                    (0, r.jsx)(j.By, {
                        invoice: f,
                        isPrepaidPaymentSource: b
                    }),
                    (0, r.jsx)(j.nd, {
                        premiumSubscription: t,
                        renewalInvoice: p,
                        isUpdate: !0,
                        isPrepaidPaymentSource: b
                    })
                ]
            })
        ]
    });
}
function J(e) {
    let t,
        { premiumSubscription: n, newPlan: a, planGroup: s, fractionalPremiumInfo: l, priceOptions: c, preventFetch: u } = e,
        { setInvoicePreview: f, premiumRebrandBackgroundClassName: _ } = (0, y.JL)(),
        { analyticsLocations: p } = (0, g.ZP)(),
        [h, m] = (0, R.ED)({
            subscriptionId: n.id,
            items: (0, C.al)(n, a.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
            preventFetch: u,
            analyticsLocations: p,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (
        (i.useEffect(() => {
            f(h);
        }, [f, h]),
        null != m)
    )
        return (0, r.jsx)(d.kzN, { children: m.message });
    if (null == h) return (0, r.jsx)('div', { children: (0, r.jsx)(d.$jN, {}) });
    t = n.type === G.NYc.PREMIUM ? (0, C.Gf)(a.id) : a.name;
    let E = (0, C.Ap)(c.paymentSourceId),
        b = h.subscriptionPeriodStart;
    return (
        l.fractionalState === U.a$.FP_SUB_PAUSED && (b = l.endsAt.toDate()),
        (0, r.jsxs)('div', {
            className: V.bodyText,
            children: [
                (0, r.jsx)('div', {
                    className: F.renewalInvoiceDate,
                    children: B.intl.format(B.t['+y0Tj4'], { renewalDate: b })
                }),
                (0, r.jsxs)(D.aO, {
                    className: o()(V.invoice, _),
                    children: [
                        (0, r.jsx)(D.Z9, { children: B.intl.string(B.t.iqhIp6) }),
                        (0, r.jsx)(D.B1, {
                            label: t,
                            value: (0, C.PK)(a, c, !0)
                        }),
                        (0, r.jsx)(L.Z, { invoice: h }),
                        (0, r.jsx)(D.UN, {}),
                        (0, r.jsx)(j.nd, {
                            premiumSubscription: n,
                            renewalInvoice: h,
                            isUpdate: !0,
                            isPrepaidPaymentSource: E
                        })
                    ]
                })
            ]
        })
    );
}
let $ = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: a } = e,
        o = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        },
        [s, l] = (0, R.ED)(
            W(H({}, o), {
                renewal: !1,
                applyEntitlements: !0
            })
        ),
        [c, u] = (0, R.ED)(W(H({}, o), { renewal: !0 }));
    return {
        proratedInvoicePreview: s,
        proratedInvoiceError: l,
        renewalInvoicePreview: c,
        renewalInvoiceError: u
    };
};
