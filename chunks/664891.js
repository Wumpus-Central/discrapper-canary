n.d(t, { Z: () => K }), n(388685);
var r = n(54381),
    i = n(473749),
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
    I = n(405685),
    T = n(435020),
    S = n(246946),
    A = n(351402),
    C = n(509545),
    N = n(855775),
    R = n(74538),
    P = n(296848),
    D = n(374649),
    w = n(811334),
    L = n(585602),
    x = n(314182),
    M = n(396955),
    k = n(314404),
    j = n(42818),
    U = n(474936),
    G = n(981631),
    B = n(388032),
    Z = n(145689),
    F = n(729005);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
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
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: s,
            onPaymentSourceChange: m,
            onPaymentSourceAdd: g,
            planId: D,
            setHasAcceptedTerms: L,
            legalTermsNodeRef: j,
            hasLegalTermsFlash: U,
            onInvoiceError: Z,
            planGroup: V,
            currencies: H,
            onCurrencyChange: Y,
            hasOpenInvoice: W,
            purchaseState: K,
            handleClose: $,
        } = e,
        {
            selectedSkuId: ee,
            defaultPlanId: et,
            isPremium: en,
            startedPaymentFlowWithPaymentSourcesRef: er,
            hasPaymentSources: ei,
            enablePremiumBrandRefresh: ea,
        } = (0, y.JL)(),
        { isGift: eo } = (0, b.wD)(),
        es = s.paymentSourceId,
        el = (0, T.$)(a, es),
        ec = (0, u.e7)([C.Z], () => C.Z.get(D));
    l()(null != ec, "Missing newPlan");
    let eu = (0, u.e7)([S.Z], () => S.Z.hidePersonalInformation),
        ed = (0, E.Z)(),
        ef = c.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
        e_ = K === O.A.PURCHASING || K === O.A.COMPLETED,
        ep = (0, v.Kp)({
            isTrial: !1,
            isGift: eo,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: er.current,
        }),
        eh = null == n ? void 0 : n.isPausedAllowsResumeButNotUpdates,
        em = i.useMemo(
            () =>
                (0, R.V7)({
                    skuId: ee,
                    isPremium: en,
                    multiMonthPlans: [],
                    currentSubscription: n,
                    defaultPlanId: et,
                }),
            [ee, n, et, en],
        );
    t =
        W || eh
            ? B.intl.string(B.t.nyzoFb)
            : (0, R.PV)(D)
              ? (0, R.W_)(n, ec)
              : B.intl.formatToPlainString(B.t["sBpy9/"], { planName: ec.name });
    let eg = null;
    null != n &&
        (eg = W
            ? (0, r.jsx)(z, {
                  premiumSubscription: n,
                  onInvoiceError: Z,
                  priceOptions: s,
                  preventFetch: !1,
              })
            : eh
              ? (0, r.jsx)(Q, {
                    premiumSubscription: n,
                    onInvoiceError: Z,
                    priceOptions: s,
                    preventFetch: e_,
                })
              : (0, P.R4)(n, D, V)
                ? (0, r.jsx)(q, {
                      premiumSubscription: n,
                      newPlan: ec,
                      onInvoiceError: Z,
                      planGroup: V,
                      priceOptions: s,
                      fractionalPremiumInfo: ed,
                      preventFetch: e_,
                  })
                : (0, r.jsx)(J, {
                      premiumSubscription: n,
                      newPlan: ec,
                      planGroup: V,
                      fractionalPremiumInfo: ed,
                      priceOptions: s,
                      preventFetch: e_,
                  }));
    let eE = null == n ? void 0 : n.eligiblePaymentGateways,
        eb = null != eE && eE.length > 0 && (es === N.c || null === el) && ei ? M.w.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: F.stepBody,
        children: [
            (0, r.jsx)(M.Y, { paymentRestrictionBannerType: eb }),
            !eh &&
                ep &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.UN, {
                            negativeMarginBottom: !0,
                            negativeMarginTop: !0,
                        }),
                        (0, r.jsx)(I.a, { planSkuId: ec.skuId }),
                        (0, r.jsx)(k.O, {
                            planOptions: em,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: D,
                            planGroup: V,
                            showTotal: !1,
                            handleClose: $,
                        }),
                        (0, r.jsx)(w.UN, {}),
                    ],
                }),
            (0, r.jsx)(d.gNt, {
                label: t,
                children: eg,
            }),
            (0, r.jsx)("div", {
                className: F.paymentSourceWrapper,
                children: (0, r.jsx)(p.ZP, {
                    label: B.intl.string(B.t["mmDvV+"]),
                    paymentSources: Object.values(a),
                    selectedPaymentSourceId: es,
                    onChange: m,
                    onPaymentSourceAdd: g,
                    hidePersonalInformation: eu,
                    disabled: e_,
                    paymentGatewayRestrictions: null == n ? void 0 : n.eligiblePaymentGateways,
                    className: o()({ [F.premiumBrandRefreshInputBackground]: ea }),
                }),
            }),
            (0, r.jsx)(f.b, {
                currencies: H,
                className: F.currencyWrapper,
                children: (0, r.jsx)(f.Z, {
                    label: B.intl.string(B.t["/AAR02"]),
                    selectedCurrency: s.currency,
                    currencies: H,
                    onChange: Y,
                    disabled: e_,
                }),
            }),
            (0, r.jsx)(x.Z, {
                isActive: U,
                ref: j,
                children:
                    null != n && (0, P.R4)(n, D, V)
                        ? (0, r.jsx)(X, {
                              premiumSubscription: n,
                              newPlan: ec,
                              onInvoiceError: Z,
                              planGroup: V,
                              priceOptions: s,
                              preventFetch: e_,
                              disabled: e_,
                              isEEA: ef,
                              paymentSources: a,
                              setHasAcceptedTerms: L,
                          })
                        : (0, r.jsx)(h.Z, {
                              onChange: L,
                              finePrint: (0, r.jsx)(_.Z, {
                                  subscriptionPlan: ec,
                                  paymentSourceType: el,
                                  basePrice: (0, R.aS)(ec.id, !1, eo, s),
                                  currentSubscription: n,
                                  planGroup: V,
                              }),
                              forceShow: !0,
                              showPricingLink: ec.currency !== G.pKx.USD,
                              showWithdrawalWaiver: ef,
                              disabled: e_,
                              subscriptionPlan: ec,
                              currentSubscription: n,
                              planGroup: V,
                          }),
            }),
        ],
    });
}
function z(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: o } = e,
        { setInvoicePreview: s } = (0, y.JL)(),
        [l, c] = (0, D.Ox)({
            subscriptionId: t.id,
            preventFetch: o,
        });
    i.useEffect(() => {
        s(l);
    }, [s, l]),
        i.useEffect(() => {
            n(c);
        }, [n, c]);
    let u = (0, R.Ap)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(w.aO, {
              className: Z.__invalid_invoice,
              children: [
                  (0, r.jsx)(j.By, {
                      invoice: l,
                      isPrepaidPaymentSource: u,
                  }),
                  (0, r.jsx)(j.nd, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u,
                  }),
              ],
          })
        : (0, r.jsx)(d.$jN, {});
}
function q(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: s,
            planGroup: l,
            priceOptions: c,
            fractionalPremiumInfo: u,
            preventFetch: f,
        } = e,
        {
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSourcesRef: p,
            setInvoicePreview: h,
            premiumBrandRefreshBackgroundClassName: m,
        } = (0, y.JL)(),
        { isGift: E } = (0, b.wD)(),
        { analyticsLocations: O } = (0, g.ZP)(),
        I = (0, R.al)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: T,
            proratedInvoiceError: S,
            renewalInvoicePreview: A,
            renewalInvoiceError: C,
        } = $({
            premiumSubscription: n,
            newItems: I,
            priceOptions: c,
            preventFetch: f,
            analyticsLocations: O,
        });
    i.useEffect(() => {
        h(T);
    }, [h, T]);
    let N = null != S ? S : C;
    if (
        (i.useEffect(() => {
            s(N);
        }, [s, N]),
        null != N)
    )
        return (0, r.jsx)(d.M14, {
            type: "critical",
            children: N.message,
        });
    let P = (0, v.Kp)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: _,
            startedPaymentFlowWithPaymentSources: p.current,
        }),
        D = (0, v.$g)(P, T, a);
    if (
        (null !== u && null !== T && (t = (0, R.N1)(T.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null == T || null == A || D)
    )
        return (0, r.jsx)(d.$jN, { className: F.__invalid_spinner });
    let L = (0, R.Ap)(c.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.hG, {
                proratedInvoice: T,
                renewalInvoice: A,
                overrideRenewalDate: t,
            }),
            (0, r.jsxs)(w.aO, {
                className: o()(F.invoice, m),
                children: [
                    (0, r.jsx)(w.Z9, { children: B.intl.string(B.t["2eh+Co"]) }),
                    (0, r.jsx)(j.Lu, {
                        invoice: T,
                        newPlan: a,
                        isPrepaidPaymentSource: L,
                    }),
                    (0, r.jsx)(j.nd, {
                        premiumSubscription: n,
                        proratedInvoice: T,
                        renewalInvoice: A,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: L,
                    }),
                ],
            }),
        ],
    });
}
function X(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: o,
            planGroup: s,
            priceOptions: l,
            preventFetch: c,
            disabled: u,
            isEEA: f,
            paymentSources: p,
            setHasAcceptedTerms: m,
        } = e,
        { analyticsLocations: E } = (0, g.ZP)(),
        b = (0, R.al)(n, a.id, 1, new Set(s)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: O,
            renewalInvoicePreview: v,
            renewalInvoiceError: I,
        } = $({
            premiumSubscription: n,
            newItems: b,
            priceOptions: l,
            preventFetch: c,
            analyticsLocations: E,
        }),
        S = (0, T.$)(p, l.paymentSourceId),
        A = null != I ? I : O;
    return (i.useEffect(() => {
        o(A);
    }, [o, A]),
    null != A)
        ? (0, r.jsx)(d.M14, {
              type: "critical",
              children: A.message,
          })
        : (null != v &&
                (t = {
                    amount: v.subtotal,
                    currency: v.currency,
                    tax: v.tax,
                    taxInclusive: v.taxInclusive,
                }),
            null == t)
          ? null
          : (0, r.jsx)(h.Z, {
                onChange: m,
                finePrint: (0, r.jsx)(_.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: S,
                    basePrice: t,
                    proratedAmount: null != y ? y.total : void 0,
                    currentSubscription: n,
                    planGroup: s,
                }),
                forceShow: !0,
                showPricingLink: a.currency !== G.pKx.USD,
                showWithdrawalWaiver: f,
                disabled: u,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: s,
            });
}
function Q(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: s } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: c } = (0, y.JL)(),
        { analyticsLocations: u } = (0, g.ZP)(),
        [f, _] = (0, D.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [p, h] = (0, D.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
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
        return (0, r.jsx)(d.M14, {
            type: "critical",
            children: E.message,
        });
    if (null == f || null == p) return (0, r.jsx)(d.$jN, { className: F.__invalid_spinner });
    let b = (0, R.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: Z.renewalInvoiceDate,
                children: B.intl.string(B.t.spIYou),
            }),
            (0, r.jsxs)(w.aO, {
                className: o()(F.invoice, c),
                children: [
                    (0, r.jsx)(w.Z9, { children: B.intl.string(B.t["2eh+Co"]) }),
                    (0, r.jsx)(j.By, {
                        invoice: f,
                        isPrepaidPaymentSource: b,
                    }),
                    (0, r.jsx)(j.nd, {
                        premiumSubscription: t,
                        renewalInvoice: p,
                        isUpdate: !0,
                        isPrepaidPaymentSource: b,
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            planGroup: s,
            fractionalPremiumInfo: l,
            priceOptions: c,
            preventFetch: u,
        } = e,
        { setInvoicePreview: f, premiumBrandRefreshBackgroundClassName: _ } = (0, y.JL)(),
        { analyticsLocations: p } = (0, g.ZP)(),
        [h, m] = (0, D.ED)({
            subscriptionId: n.id,
            items: (0, R.al)(n, a.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
            preventFetch: u,
            analyticsLocations: p,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    if (
        (i.useEffect(() => {
            f(h);
        }, [f, h]),
        null != m)
    )
        return (0, r.jsx)(d.M14, {
            type: "critical",
            children: m.message,
        });
    if (null == h) return (0, r.jsx)("div", { children: (0, r.jsx)(d.$jN, {}) });
    t = n.type === G.NYc.PREMIUM ? (0, R.Gf)(a.id) : a.name;
    let E = (0, R.Ap)(c.paymentSourceId),
        b = h.subscriptionPeriodStart;
    return (
        l.fractionalState === U.a$.FP_SUB_PAUSED && (b = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: F.bodyText,
            children: [
                (0, r.jsx)("div", {
                    className: Z.renewalInvoiceDate,
                    children: B.intl.format(B.t["+y0Tjy"], { renewalDate: b }),
                }),
                (0, r.jsxs)(w.aO, {
                    className: o()(F.invoice, _),
                    children: [
                        (0, r.jsx)(w.Z9, { children: B.intl.string(B.t.iqhIp4) }),
                        (0, r.jsx)(w.B1, {
                            label: t,
                            value: (0, R.PK)(a, c, !0),
                        }),
                        (0, r.jsx)(L.Z, { invoice: h }),
                        (0, r.jsx)(w.UN, {}),
                        (0, r.jsx)(j.nd, {
                            premiumSubscription: n,
                            renewalInvoice: h,
                            isUpdate: !0,
                            isPrepaidPaymentSource: E,
                        }),
                    ],
                }),
            ],
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
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [s, l] = (0, D.ED)(
            W(H({}, o), {
                renewal: !1,
                applyEntitlements: !0,
            }),
        ),
        [c, u] = (0, D.ED)(W(H({}, o), { renewal: !0 }));
    return {
        proratedInvoicePreview: s,
        proratedInvoiceError: l,
        renewalInvoicePreview: c,
        renewalInvoiceError: u,
    };
};
