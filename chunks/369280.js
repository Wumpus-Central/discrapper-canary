"use strict";
n.d(t, { A: () => $ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(997101),
    c = n(311907),
    d = n(397927),
    _ = n(821189),
    f = n(821891),
    h = n(637141),
    p = n(953689),
    g = n(793574),
    E = n(688810),
    A = n(531260),
    I = n(937008),
    T = n(156312),
    y = n(566980),
    S = n(800471),
    v = n(104745),
    C = n(222707),
    b = n(216641),
    N = n(351906),
    R = n(615405),
    O = n(97352),
    D = n(79387),
    L = n(927578),
    w = n(615396),
    x = n(543767),
    P = n(735164),
    M = n(787455),
    k = n(778307),
    U = n(218075),
    G = n(446929),
    F = n(692440),
    V = n(788868),
    B = n(88001),
    j = n(652215),
    H = n(519412),
    Y = n(985018),
    W = n(314654),
    K = n(982571);
function $(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: o,
            onPaymentSourceChange: g,
            onPaymentSourceAdd: E,
            planId: x,
            setHasAcceptedTerms: M,
            legalTermsNodeRef: F,
            hasLegalTermsFlash: V,
            onInvoiceError: W,
            planGroup: $,
            currencies: J,
            onCurrencyChange: ee,
            hasOpenInvoice: et,
            purchaseState: en,
            handleClose: er,
        } = e,
        {
            selectedSkuId: ei,
            defaultPlanId: ea,
            isPremium: es,
            startedPaymentFlowWithPaymentSourcesRef: eo,
            hasPaymentSources: el,
            enablePremiumBrandRefresh: eu,
            isPremiumGroupPurchase: ec,
        } = (0, T.P5)(),
        { isGift: ed } = (0, I.Pv)(),
        e_ = o.paymentSourceId,
        ef = (0, b.g)(a, e_),
        eh = (0, c.bG)([O.A], () => O.A.get(x));
    l()(null != eh, "Missing newPlan");
    let ep = (0, c.bG)([N.A], () => N.A.hidePersonalInformation),
        em = (0, A.A)(),
        eg = u.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
        eE = en === y.h.PURCHASING || en === y.h.COMPLETED,
        eA = (0, S.vT)({
            isTrial: !1,
            isGift: ed,
            selectedSkuId: ei,
            startedPaymentFlowWithPaymentSources: eo.current,
        }),
        eI = n?.isPausedAllowsResumeButNotUpdates,
        eT = i.useMemo(
            () =>
                (0, L.Tm)({ skuId: ei, isPremium: es, multiMonthPlans: [], currentSubscription: n, defaultPlanId: ea }),
            [ei, n, ea, es],
        );
    t =
        et || eI
            ? Y.intl.string(Y.t.nyzoFb)
            : ec
              ? Y.intl.formatToPlainString(H.default["3m9DJK"], { premiumGroupProductName: (0, B.DP)() })
              : (0, L.ys)(x)
                ? (0, L.ff)(n, eh)
                : Y.intl.formatToPlainString(Y.t["sBpy9/"], { planName: eh.name });
    let ey = null;
    null != n &&
        (ey = et
            ? (0, r.jsx)(z, { premiumSubscription: n, onInvoiceError: W, priceOptions: o, preventFetch: !1 })
            : eI
              ? (0, r.jsx)(Z, { premiumSubscription: n, onInvoiceError: W, priceOptions: o, preventFetch: eE })
              : (0, w.Ge)(n, x, $)
                ? (0, r.jsx)(q, {
                      premiumSubscription: n,
                      newPlan: eh,
                      onInvoiceError: W,
                      planGroup: $,
                      priceOptions: o,
                      fractionalPremiumInfo: em,
                      preventFetch: eE,
                  })
                : (0, r.jsx)(Q, {
                      premiumSubscription: n,
                      newPlan: eh,
                      planGroup: $,
                      fractionalPremiumInfo: em,
                      priceOptions: o,
                      preventFetch: eE,
                  }));
    let eS = n?.eligiblePaymentGateways,
        ev = null != eS && eS.length > 0 && (e_ === D.B || null === ef) && el ? U.f.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: K.Du,
        children: [
            (0, r.jsx)(U.j, { paymentRestrictionBannerType: ev }),
            !eI &&
                eA &&
                !ec &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(v.P, { planSkuId: eh.skuId }),
                        (0, r.jsx)(G.$p, {
                            planOptions: eT,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: x,
                            planGroup: $,
                            showTotal: !1,
                            handleClose: er,
                        }),
                        (0, r.jsx)(P.pK, {}),
                    ],
                }),
            ec &&
                (0, r.jsx)("div", {
                    className: K.Ni,
                    children: (0, r.jsx)(d.wx6, {
                        type: "info",
                        children: (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: (0, C.Nn)() }),
                    }),
                }),
            (0, r.jsx)(d.D0$, { label: t, children: ey }),
            (0, r.jsx)("div", {
                className: K.LC,
                children: (0, r.jsx)(h.A, {
                    label: Y.intl.string(Y.t["mmDvV+"]),
                    paymentSources: Object.values(a),
                    selectedPaymentSourceId: e_,
                    onChange: g,
                    onPaymentSourceAdd: E,
                    hidePersonalInformation: ep,
                    disabled: eE,
                    paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                    className: s()({ [K.E4]: eu }),
                }),
            }),
            (0, r.jsx)(_.f, {
                currencies: J,
                className: K.p2,
                children: (0, r.jsx)(_.A, {
                    label: Y.intl.string(Y.t["/AAR02"]),
                    selectedCurrency: o.currency,
                    currencies: J,
                    onChange: ee,
                    disabled: eE,
                }),
            }),
            (0, r.jsx)(k.A, {
                isActive: V,
                ref: F,
                children:
                    null != n && (0, w.Ge)(n, x, $)
                        ? (0, r.jsx)(X, {
                              premiumSubscription: n,
                              newPlan: eh,
                              onInvoiceError: W,
                              planGroup: $,
                              priceOptions: o,
                              preventFetch: eE,
                              disabled: eE,
                              isEEA: eg,
                              paymentSources: a,
                              setHasAcceptedTerms: M,
                          })
                        : (0, r.jsx)(p.A, {
                              onChange: M,
                              finePrint: (0, r.jsx)(f.A, {
                                  subscriptionPlan: eh,
                                  paymentSourceType: ef,
                                  basePrice: (0, L.y8)(eh.id, !1, ed, o),
                                  currentSubscription: n,
                                  planGroup: $,
                              }),
                              forceShow: !0,
                              showPricingLink: eh.currency !== j.Yri.USD,
                              showWithdrawalWaiver: eg,
                              disabled: eE,
                              subscriptionPlan: eh,
                              currentSubscription: n,
                              planGroup: $,
                          }),
            }),
        ],
    });
}
function z(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: s } = e,
        { setInvoicePreview: o } = (0, T.P5)(),
        [l, u] = (0, x.C8)({ subscriptionId: t.id, preventFetch: s });
    i.useEffect(() => {
        o(l);
    }, [o, l]),
        i.useEffect(() => {
            n(u);
        }, [n, u]);
    let c = (0, L.J$)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(P.Yx, {
              className: W.__invalid_invoice,
              children: [
                  (0, r.jsx)(F._J, { invoice: l, isPrepaidPaymentSource: c }),
                  (0, r.jsx)(F.m0, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: c,
                  }),
              ],
          })
        : (0, r.jsx)(d.y$y, {});
}
function q(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: o,
            planGroup: l,
            priceOptions: u,
            fractionalPremiumInfo: c,
            preventFetch: _,
        } = e,
        {
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSourcesRef: h,
            setInvoicePreview: p,
            premiumBrandRefreshBackgroundClassName: g,
        } = (0, T.P5)(),
        { isGift: A } = (0, I.Pv)(),
        { analyticsLocations: y } = (0, E.Ay)(),
        v = (0, L.Pg)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: C,
            proratedInvoiceError: b,
            renewalInvoicePreview: N,
            renewalInvoiceError: R,
        } = J({ premiumSubscription: n, newItems: v, priceOptions: u, preventFetch: _, analyticsLocations: y });
    i.useEffect(() => {
        p(C);
    }, [p, C]);
    let O = b ?? R;
    if (
        (i.useEffect(() => {
            o(O);
        }, [o, O]),
        null != O)
    )
        return (0, r.jsx)(d.wx6, { type: "critical", children: O.message });
    let D = (0, S.vT)({ isTrial: !1, isGift: A, selectedSkuId: f, startedPaymentFlowWithPaymentSources: h.current }),
        w = (0, S.UB)(D, C, a);
    if (
        (null !== c && null !== C && (t = (0, L._e)(C.subscriptionPeriodEnd, c.unactivatedUnits, c.endsAt)),
        null == C || null == N || w)
    )
        return (0, r.jsx)(d.y$y, { className: K.__invalid_spinner });
    let x = (0, L.J$)(u.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(F.wP, { proratedInvoice: C, renewalInvoice: N, overrideRenewalDate: t }),
            (0, r.jsxs)(P.Yx, {
                className: s()(K.SU, g),
                children: [
                    (0, r.jsx)(P.Xd, { children: Y.intl.string(Y.t["2eh+Co"]) }),
                    (0, r.jsx)(F.mT, { invoice: C, newPlan: a, isPrepaidPaymentSource: x }),
                    (0, r.jsx)(F.m0, {
                        premiumSubscription: n,
                        proratedInvoice: C,
                        renewalInvoice: N,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: x,
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
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            preventFetch: u,
            disabled: c,
            isEEA: _,
            paymentSources: h,
            setHasAcceptedTerms: g,
        } = e,
        { analyticsLocations: A } = (0, E.Ay)(),
        I = (0, L.Pg)(n, a.id, 1, new Set(o)),
        {
            proratedInvoicePreview: T,
            proratedInvoiceError: y,
            renewalInvoicePreview: S,
            renewalInvoiceError: v,
        } = J({ premiumSubscription: n, newItems: I, priceOptions: l, preventFetch: u, analyticsLocations: A }),
        C = (0, b.g)(h, l.paymentSourceId),
        N = v ?? y;
    return (i.useEffect(() => {
        s(N);
    }, [s, N]),
    null != N)
        ? (0, r.jsx)(d.wx6, { type: "critical", children: N.message })
        : (null != S && (t = { amount: S.subtotal, currency: S.currency, tax: S.tax, taxInclusive: S.taxInclusive }),
            null == t)
          ? null
          : (0, r.jsx)(p.A, {
                onChange: g,
                finePrint: (0, r.jsx)(f.A, {
                    subscriptionPlan: a,
                    paymentSourceType: C,
                    basePrice: t,
                    proratedAmount: null != T ? T.total : void 0,
                    currentSubscription: n,
                    planGroup: o,
                }),
                forceShow: !0,
                showPricingLink: a.currency !== j.Yri.USD,
                showWithdrawalWaiver: _,
                disabled: c,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: o,
            });
}
function Z(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: o } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: u } = (0, T.P5)(),
        { analyticsLocations: c } = (0, E.Ay)(),
        [_, f] = (0, x.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: g.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [h, p] = (0, x.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: g.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        l(_);
    }, [l, _]);
    let A = f ?? p;
    if (
        (i.useEffect(() => {
            o(A);
        }, [o, A]),
        null != A)
    )
        return (0, r.jsx)(d.wx6, { type: "critical", children: A.message });
    if (null == _ || null == h) return (0, r.jsx)(d.y$y, { className: K.__invalid_spinner });
    let I = (0, L.J$)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: W.o, children: Y.intl.string(Y.t.spIYou) }),
            (0, r.jsxs)(P.Yx, {
                className: s()(K.SU, u),
                children: [
                    (0, r.jsx)(P.Xd, { children: Y.intl.string(Y.t["2eh+Co"]) }),
                    (0, r.jsx)(F._J, { invoice: _, isPrepaidPaymentSource: I }),
                    (0, r.jsx)(F.m0, {
                        premiumSubscription: t,
                        renewalInvoice: h,
                        isUpdate: !0,
                        isPrepaidPaymentSource: I,
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
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
        } = e,
        { setInvoicePreview: _, premiumBrandRefreshBackgroundClassName: f } = (0, T.P5)(),
        { analyticsLocations: h } = (0, E.Ay)(),
        [p, g] = (0, x.Kq)({
            subscriptionId: n.id,
            items: (0, L.Pg)(n, a.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: h,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    if (
        (i.useEffect(() => {
            _(p);
        }, [_, p]),
        null != g)
    )
        return (0, r.jsx)(d.wx6, { type: "critical", children: g.message });
    if (null == p) return (0, r.jsx)("div", { children: (0, r.jsx)(d.y$y, {}) });
    t = n.type === j.rzx.PREMIUM ? (0, L.Mn)(a.id) : a.name;
    let A = (0, L.J$)(u.paymentSourceId),
        I = p.subscriptionPeriodStart;
    return (
        l.fractionalState === V.xc.FP_SUB_PAUSED && (I = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: K.G3,
            children: [
                (0, r.jsx)("div", { className: W.o, children: Y.intl.format(Y.t["+y0Tjy"], { renewalDate: I }) }),
                (0, r.jsxs)(P.Yx, {
                    className: s()(K.SU, f),
                    children: [
                        (0, r.jsx)(P.Xd, { children: Y.intl.string(Y.t.iqhIp4) }),
                        (0, r.jsx)(P.oR, { label: t, value: (0, L.jh)(a, u, !0) }),
                        (0, r.jsx)(M.A, { invoice: p }),
                        (0, r.jsx)(P.pK, {}),
                        (0, r.jsx)(F.m0, {
                            premiumSubscription: n,
                            renewalInvoice: p,
                            isUpdate: !0,
                            isPrepaidPaymentSource: A,
                        }),
                    ],
                }),
            ],
        })
    );
}
let J = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: a } = e,
        s = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: g.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [o, l] = (0, x.Kq)({ ...s, renewal: !1, applyEntitlements: !0 }),
        [u, c] = (0, x.Kq)({ ...s, renewal: !0 });
    return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
};
