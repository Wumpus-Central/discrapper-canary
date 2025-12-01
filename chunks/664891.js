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
    p = n(224550),
    _ = n(275850),
    m = n(672971),
    h = n(100527),
    g = n(906732),
    E = n(975298),
    b = n(987209),
    y = n(563132),
    O = n(45572),
    v = n(614223),
    S = n(405685),
    I = n(435020),
    T = n(246946),
    A = n(351402),
    C = n(509545),
    N = n(855775),
    P = n(74538),
    R = n(296848),
    w = n(374649),
    D = n(811334),
    x = n(585602),
    L = n(314182),
    j = n(396955),
    M = n(314404),
    k = n(42818),
    U = n(474936),
    G = n(981631),
    Z = n(388032),
    B = n(250445),
    F = n(867983);
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
            onPaymentSourceChange: h,
            onPaymentSourceAdd: g,
            planId: w,
            setHasAcceptedTerms: x,
            legalTermsNodeRef: k,
            hasLegalTermsFlash: U,
            onInvoiceError: B,
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
        el = (0, I.$)(a, es),
        ec = (0, u.e7)([C.Z], () => C.Z.get(w));
    l()(null != ec, "Missing newPlan");
    let eu = (0, u.e7)([T.Z], () => T.Z.hidePersonalInformation),
        ed = (0, E.Z)(),
        ef = c.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
        ep = K === O.A.PURCHASING || K === O.A.COMPLETED,
        e_ = (0, v.Kp)({
            isTrial: !1,
            isGift: eo,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: er.current,
        }),
        em = null == n ? void 0 : n.isPausedAllowsResumeButNotUpdates,
        eh = i.useMemo(
            () =>
                (0, P.V7)({
                    skuId: ee,
                    isPremium: en,
                    multiMonthPlans: [],
                    currentSubscription: n,
                    defaultPlanId: et,
                }),
            [ee, n, et, en],
        );
    t =
        W || em
            ? Z.intl.string(Z.t.nyzoFb)
            : (0, P.PV)(w)
              ? (0, P.W_)(n, ec)
              : Z.intl.formatToPlainString(Z.t["sBpy9/"], { planName: ec.name });
    let eg = null;
    null != n &&
        (eg = W
            ? (0, r.jsx)(z, {
                  premiumSubscription: n,
                  onInvoiceError: B,
                  priceOptions: s,
                  preventFetch: !1,
              })
            : em
              ? (0, r.jsx)(X, {
                    premiumSubscription: n,
                    onInvoiceError: B,
                    priceOptions: s,
                    preventFetch: ep,
                })
              : (0, R.R4)(n, w, V)
                ? (0, r.jsx)(q, {
                      premiumSubscription: n,
                      newPlan: ec,
                      onInvoiceError: B,
                      planGroup: V,
                      priceOptions: s,
                      fractionalPremiumInfo: ed,
                      preventFetch: ep,
                  })
                : (0, r.jsx)(J, {
                      premiumSubscription: n,
                      newPlan: ec,
                      planGroup: V,
                      fractionalPremiumInfo: ed,
                      priceOptions: s,
                      preventFetch: ep,
                  }));
    let eE = null == n ? void 0 : n.eligiblePaymentGateways,
        eb = null != eE && eE.length > 0 && (es === N.c || null === el) && ei ? j.w.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: F.stepBody,
        children: [
            (0, r.jsx)(j.Y, { paymentRestrictionBannerType: eb }),
            !em &&
                e_ &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(D.UN, {
                            negativeMarginBottom: !0,
                            negativeMarginTop: !0,
                        }),
                        (0, r.jsx)(S.a, { planSkuId: ec.skuId }),
                        (0, r.jsx)(M.O, {
                            planOptions: eh,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: w,
                            planGroup: V,
                            showTotal: !1,
                            handleClose: $,
                        }),
                        (0, r.jsx)(D.UN, {}),
                    ],
                }),
            (0, r.jsx)(d.gNt, {
                label: t,
                children: eg,
            }),
            (0, r.jsx)("div", {
                className: F.paymentSourceWrapper,
                children: (0, r.jsx)(_.ZP, {
                    label: Z.intl.string(Z.t["mmDvV+"]),
                    paymentSources: Object.values(a),
                    selectedPaymentSourceId: es,
                    onChange: h,
                    onPaymentSourceAdd: g,
                    hidePersonalInformation: eu,
                    disabled: ep,
                    paymentGatewayRestrictions: null == n ? void 0 : n.eligiblePaymentGateways,
                    className: o()({ [F.premiumBrandRefreshInputBackground]: ea }),
                }),
            }),
            (0, r.jsx)(f.b, {
                currencies: H,
                className: F.currencyWrapper,
                children: (0, r.jsx)(f.Z, {
                    label: Z.intl.string(Z.t["/AAR02"]),
                    selectedCurrency: s.currency,
                    currencies: H,
                    onChange: Y,
                    disabled: ep,
                }),
            }),
            (0, r.jsx)(L.Z, {
                isActive: U,
                ref: k,
                children:
                    null != n && (0, R.R4)(n, w, V)
                        ? (0, r.jsx)(Q, {
                              premiumSubscription: n,
                              newPlan: ec,
                              onInvoiceError: B,
                              planGroup: V,
                              priceOptions: s,
                              preventFetch: ep,
                              disabled: ep,
                              isEEA: ef,
                              paymentSources: a,
                              setHasAcceptedTerms: x,
                          })
                        : (0, r.jsx)(m.Z, {
                              onChange: x,
                              finePrint: (0, r.jsx)(p.Z, {
                                  subscriptionPlan: ec,
                                  paymentSourceType: el,
                                  basePrice: (0, P.aS)(ec.id, !1, eo, s),
                                  currentSubscription: n,
                                  planGroup: V,
                              }),
                              forceShow: !0,
                              showPricingLink: ec.currency !== G.pKx.USD,
                              showWithdrawalWaiver: ef,
                              disabled: ep,
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
        [l, c] = (0, w.Ox)({
            subscriptionId: t.id,
            preventFetch: o,
        });
    i.useEffect(() => {
        s(l);
    }, [s, l]),
        i.useEffect(() => {
            n(c);
        }, [n, c]);
    let u = (0, P.Ap)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(D.aO, {
              className: B.__invalid_invoice,
              children: [
                  (0, r.jsx)(k.By, {
                      invoice: l,
                      isPrepaidPaymentSource: u,
                  }),
                  (0, r.jsx)(k.nd, {
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
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSourcesRef: _,
            setInvoicePreview: m,
            premiumBrandRefreshBackgroundClassName: h,
        } = (0, y.JL)(),
        { isGift: E } = (0, b.wD)(),
        { analyticsLocations: O } = (0, g.ZP)(),
        S = (0, P.al)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: T,
            renewalInvoicePreview: A,
            renewalInvoiceError: C,
        } = $({
            premiumSubscription: n,
            newItems: S,
            priceOptions: c,
            preventFetch: f,
            analyticsLocations: O,
        });
    i.useEffect(() => {
        m(I);
    }, [m, I]);
    let N = null != T ? T : C;
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
    let R = (0, v.Kp)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSources: _.current,
        }),
        w = (0, v.$g)(R, I, a);
    if (
        (null !== u && null !== I && (t = (0, P.N1)(I.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null == I || null == A || w)
    )
        return (0, r.jsx)(d.$jN, { className: F.__invalid_spinner });
    let x = (0, P.Ap)(c.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.hG, {
                proratedInvoice: I,
                renewalInvoice: A,
                overrideRenewalDate: t,
            }),
            (0, r.jsxs)(D.aO, {
                className: o()(F.invoice, h),
                children: [
                    (0, r.jsx)(D.Z9, { children: Z.intl.string(Z.t["2eh+Co"]) }),
                    (0, r.jsx)(k.Lu, {
                        invoice: I,
                        newPlan: a,
                        isPrepaidPaymentSource: x,
                    }),
                    (0, r.jsx)(k.nd, {
                        premiumSubscription: n,
                        proratedInvoice: I,
                        renewalInvoice: A,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: x,
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
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
            paymentSources: _,
            setHasAcceptedTerms: h,
        } = e,
        { analyticsLocations: E } = (0, g.ZP)(),
        b = (0, P.al)(n, a.id, 1, new Set(s)),
        {
            proratedInvoicePreview: y,
            proratedInvoiceError: O,
            renewalInvoicePreview: v,
            renewalInvoiceError: S,
        } = $({
            premiumSubscription: n,
            newItems: b,
            priceOptions: l,
            preventFetch: c,
            analyticsLocations: E,
        }),
        T = (0, I.$)(_, l.paymentSourceId),
        A = null != S ? S : O;
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
          : (0, r.jsx)(m.Z, {
                onChange: h,
                finePrint: (0, r.jsx)(p.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: T,
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
function X(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: s } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: c } = (0, y.JL)(),
        { analyticsLocations: u } = (0, g.ZP)(),
        [f, p] = (0, w.ED)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: h.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [_, m] = (0, w.ED)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: u,
            analyticsLocation: h.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        l(f);
    }, [l, f]);
    let E = null != p ? p : m;
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
    if (null == f || null == _) return (0, r.jsx)(d.$jN, { className: F.__invalid_spinner });
    let b = (0, P.Ap)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: B.renewalInvoiceDate,
                children: Z.intl.string(Z.t.spIYou),
            }),
            (0, r.jsxs)(D.aO, {
                className: o()(F.invoice, c),
                children: [
                    (0, r.jsx)(D.Z9, { children: Z.intl.string(Z.t["2eh+Co"]) }),
                    (0, r.jsx)(k.By, {
                        invoice: f,
                        isPrepaidPaymentSource: b,
                    }),
                    (0, r.jsx)(k.nd, {
                        premiumSubscription: t,
                        renewalInvoice: _,
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
        { setInvoicePreview: f, premiumBrandRefreshBackgroundClassName: p } = (0, y.JL)(),
        { analyticsLocations: _ } = (0, g.ZP)(),
        [m, h] = (0, w.ED)({
            subscriptionId: n.id,
            items: (0, P.al)(n, a.id, 1, new Set(s)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
            preventFetch: u,
            analyticsLocations: _,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    if (
        (i.useEffect(() => {
            f(m);
        }, [f, m]),
        null != h)
    )
        return (0, r.jsx)(d.M14, {
            type: "critical",
            children: h.message,
        });
    if (null == m) return (0, r.jsx)("div", { children: (0, r.jsx)(d.$jN, {}) });
    t = n.type === G.NYc.PREMIUM ? (0, P.Gf)(a.id) : a.name;
    let E = (0, P.Ap)(c.paymentSourceId),
        b = m.subscriptionPeriodStart;
    return (
        l.fractionalState === U.a$.FP_SUB_PAUSED && (b = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: F.bodyText,
            children: [
                (0, r.jsx)("div", {
                    className: B.renewalInvoiceDate,
                    children: Z.intl.format(Z.t["+y0Tjy"], { renewalDate: b }),
                }),
                (0, r.jsxs)(D.aO, {
                    className: o()(F.invoice, p),
                    children: [
                        (0, r.jsx)(D.Z9, { children: Z.intl.string(Z.t.iqhIp4) }),
                        (0, r.jsx)(D.B1, {
                            label: t,
                            value: (0, P.PK)(a, c, !0),
                        }),
                        (0, r.jsx)(x.Z, { invoice: m }),
                        (0, r.jsx)(D.UN, {}),
                        (0, r.jsx)(k.nd, {
                            premiumSubscription: n,
                            renewalInvoice: m,
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
            analyticsLocation: h.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [s, l] = (0, w.ED)(
            W(H({}, o), {
                renewal: !1,
                applyEntitlements: !0,
            }),
        ),
        [c, u] = (0, w.ED)(W(H({}, o), { renewal: !0 }));
    return {
        proratedInvoicePreview: s,
        proratedInvoiceError: l,
        renewalInvoicePreview: c,
        renewalInvoiceError: u,
    };
};
