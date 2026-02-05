"use strict";
n.d(t, { A: () => K });
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
    p = n(637141),
    h = n(953689),
    m = n(793574),
    g = n(688810),
    E = n(531260),
    A = n(937008),
    I = n(156312),
    T = n(566980),
    y = n(800471),
    S = n(104745),
    v = n(222707),
    C = n(216641),
    b = n(351906),
    N = n(615405),
    R = n(97352),
    O = n(79387),
    D = n(927578),
    L = n(615396),
    w = n(543767),
    x = n(735164),
    P = n(787455),
    M = n(778307),
    k = n(218075),
    U = n(446929),
    G = n(692440),
    V = n(788868),
    F = n(88001),
    B = n(652215),
    j = n(519412),
    H = n(985018),
    Y = n(314654),
    W = n(982571);
function K(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: o,
            onPaymentSourceChange: m,
            onPaymentSourceAdd: g,
            planId: w,
            setHasAcceptedTerms: P,
            legalTermsNodeRef: G,
            hasLegalTermsFlash: V,
            onInvoiceError: Y,
            planGroup: K,
            currencies: X,
            onCurrencyChange: J,
            hasOpenInvoice: ee,
            purchaseState: et,
            handleClose: en,
        } = e,
        {
            selectedSkuId: er,
            defaultPlanId: ei,
            isPremium: ea,
            startedPaymentFlowWithPaymentSourcesRef: es,
            hasPaymentSources: eo,
            enablePremiumBrandRefresh: el,
            isPremiumGroupPurchase: eu,
        } = (0, I.P5)(),
        { isGift: ec } = (0, A.Pv)(),
        ed = o.paymentSourceId,
        e_ = (0, C.g)(a, ed),
        ef = (0, c.bG)([R.A], () => R.A.get(w));
    l()(null != ef, "Missing newPlan");
    let ep = (0, c.bG)([b.A], () => b.A.hidePersonalInformation),
        eh = (0, E.A)(),
        em = u.M.EEA_COUNTRIES.has(N.A.ipCountryCodeWithFallback),
        eg = et === T.h.PURCHASING || et === T.h.COMPLETED,
        eE = (0, y.vT)({
            isTrial: !1,
            isGift: ec,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: es.current,
        }),
        eA = n?.isPausedAllowsResumeButNotUpdates,
        eI = i.useMemo(
            () =>
                (0, D.Tm)({ skuId: er, isPremium: ea, multiMonthPlans: [], currentSubscription: n, defaultPlanId: ei }),
            [er, n, ei, ea],
        );
    t =
        ee || eA
            ? H.intl.string(H.t.nyzoFb)
            : eu
              ? H.intl.formatToPlainString(j.default["3m9DJK"], { premiumGroupProductName: (0, F.DP)() })
              : (0, D.ys)(w)
                ? (0, D.ff)(n, ef)
                : H.intl.formatToPlainString(H.t["sBpy9/"], { planName: ef.name });
    let eT = null;
    null != n &&
        (eT = ee
            ? (0, r.jsx)(z, { premiumSubscription: n, onInvoiceError: Y, priceOptions: o, preventFetch: !1 })
            : eA
              ? (0, r.jsx)(Z, { premiumSubscription: n, onInvoiceError: Y, priceOptions: o, preventFetch: eg })
              : (0, L.Ge)(n, w, K)
                ? (0, r.jsx)($, {
                      premiumSubscription: n,
                      newPlan: ef,
                      onInvoiceError: Y,
                      planGroup: K,
                      priceOptions: o,
                      fractionalPremiumInfo: eh,
                      preventFetch: eg,
                  })
                : (0, r.jsx)(Q, {
                      premiumSubscription: n,
                      newPlan: ef,
                      planGroup: K,
                      fractionalPremiumInfo: eh,
                      priceOptions: o,
                      preventFetch: eg,
                  }));
    let ey = n?.eligiblePaymentGateways,
        eS = null != ey && ey.length > 0 && (ed === O.B || null === e_) && eo ? k.f.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: W.Du,
        children: [
            (0, r.jsx)(k.j, { paymentRestrictionBannerType: eS }),
            !eA &&
                eE &&
                !eu &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(x.pK, { negativeMarginBottom: !0, negativeMarginTop: !0 }),
                        (0, r.jsx)(S.P, { planSkuId: ef.skuId }),
                        (0, r.jsx)(U.$p, {
                            planOptions: eI,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: w,
                            planGroup: K,
                            showTotal: !1,
                            handleClose: en,
                        }),
                        (0, r.jsx)(x.pK, {}),
                    ],
                }),
            eu &&
                (0, r.jsx)("div", {
                    className: W.Ni,
                    children: (0, r.jsx)(d.wx6, {
                        type: "info",
                        children: (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: (0, v.Nn)() }),
                    }),
                }),
            (0, r.jsx)(d.D0$, { label: t, children: eT }),
            (0, r.jsx)("div", {
                className: W.LC,
                children: (0, r.jsx)(p.A, {
                    label: H.intl.string(H.t["mmDvV+"]),
                    paymentSources: Object.values(a),
                    selectedPaymentSourceId: ed,
                    onChange: m,
                    onPaymentSourceAdd: g,
                    hidePersonalInformation: ep,
                    disabled: eg,
                    paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                    className: s()({ [W.E4]: el }),
                }),
            }),
            (0, r.jsx)(_.f, {
                currencies: X,
                className: W.p2,
                children: (0, r.jsx)(_.A, {
                    label: H.intl.string(H.t["/AAR02"]),
                    selectedCurrency: o.currency,
                    currencies: X,
                    onChange: J,
                    disabled: eg,
                }),
            }),
            (0, r.jsx)(M.A, {
                isActive: V,
                ref: G,
                children:
                    null != n && (0, L.Ge)(n, w, K)
                        ? (0, r.jsx)(q, {
                              premiumSubscription: n,
                              newPlan: ef,
                              onInvoiceError: Y,
                              planGroup: K,
                              priceOptions: o,
                              preventFetch: eg,
                              disabled: eg,
                              isEEA: em,
                              paymentSources: a,
                              setHasAcceptedTerms: P,
                          })
                        : (0, r.jsx)(h.A, {
                              onChange: P,
                              finePrint: (0, r.jsx)(f.A, {
                                  subscriptionPlan: ef,
                                  paymentSourceType: e_,
                                  basePrice: (0, D.y8)(ef.id, !1, ec, o),
                                  currentSubscription: n,
                                  planGroup: K,
                              }),
                              forceShow: !0,
                              showPricingLink: ef.currency !== B.Yri.USD,
                              showWithdrawalWaiver: em,
                              disabled: eg,
                              subscriptionPlan: ef,
                              currentSubscription: n,
                              planGroup: K,
                          }),
            }),
        ],
    });
}
function z(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: s } = e,
        { setInvoicePreview: o } = (0, I.P5)(),
        [l, u] = (0, w.C8)({ subscriptionId: t.id, preventFetch: s });
    i.useEffect(() => {
        o(l);
    }, [o, l]),
        i.useEffect(() => {
            n(u);
        }, [n, u]);
    let c = (0, D.J$)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(x.Yx, {
              className: Y.__invalid_invoice,
              children: [
                  (0, r.jsx)(G._J, { invoice: l, isPrepaidPaymentSource: c }),
                  (0, r.jsx)(G.m0, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: c,
                  }),
              ],
          })
        : (0, r.jsx)(d.y$y, {});
}
function $(e) {
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
            startedPaymentFlowWithPaymentSourcesRef: p,
            setInvoicePreview: h,
            premiumBrandRefreshBackgroundClassName: m,
        } = (0, I.P5)(),
        { isGift: E } = (0, A.Pv)(),
        { analyticsLocations: T } = (0, g.Ay)(),
        S = (0, D.Pg)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: v,
            proratedInvoiceError: C,
            renewalInvoicePreview: b,
            renewalInvoiceError: N,
        } = X({ premiumSubscription: n, newItems: S, priceOptions: u, preventFetch: _, analyticsLocations: T });
    i.useEffect(() => {
        h(v);
    }, [h, v]);
    let R = C ?? N;
    if (
        (i.useEffect(() => {
            o(R);
        }, [o, R]),
        null != R)
    )
        return (0, r.jsx)(d.wx6, { type: "critical", children: R.message });
    let O = (0, y.vT)({ isTrial: !1, isGift: E, selectedSkuId: f, startedPaymentFlowWithPaymentSources: p.current }),
        L = (0, y.UB)(O, v, a);
    if (
        (null !== c && null !== v && (t = (0, D._e)(v.subscriptionPeriodEnd, c.unactivatedUnits, c.endsAt)),
        null == v || null == b || L)
    )
        return (0, r.jsx)(d.y$y, { className: W.__invalid_spinner });
    let w = (0, D.J$)(u.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(G.wP, { proratedInvoice: v, renewalInvoice: b, overrideRenewalDate: t }),
            (0, r.jsxs)(x.Yx, {
                className: s()(W.SU, m),
                children: [
                    (0, r.jsx)(x.Xd, { children: H.intl.string(H.t["2eh+Co"]) }),
                    (0, r.jsx)(G.mT, { invoice: v, newPlan: a, isPrepaidPaymentSource: w }),
                    (0, r.jsx)(G.m0, {
                        premiumSubscription: n,
                        proratedInvoice: v,
                        renewalInvoice: b,
                        overrideRenewalDate: t,
                        isUpdate: !0,
                        isPrepaidPaymentSource: w,
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
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
            paymentSources: p,
            setHasAcceptedTerms: m,
        } = e,
        { analyticsLocations: E } = (0, g.Ay)(),
        A = (0, D.Pg)(n, a.id, 1, new Set(o)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: T,
            renewalInvoicePreview: y,
            renewalInvoiceError: S,
        } = X({ premiumSubscription: n, newItems: A, priceOptions: l, preventFetch: u, analyticsLocations: E }),
        v = (0, C.g)(p, l.paymentSourceId),
        b = S ?? T;
    return (i.useEffect(() => {
        s(b);
    }, [s, b]),
    null != b)
        ? (0, r.jsx)(d.wx6, { type: "critical", children: b.message })
        : (null != y && (t = { amount: y.subtotal, currency: y.currency, tax: y.tax, taxInclusive: y.taxInclusive }),
            null == t)
          ? null
          : (0, r.jsx)(h.A, {
                onChange: m,
                finePrint: (0, r.jsx)(f.A, {
                    subscriptionPlan: a,
                    paymentSourceType: v,
                    basePrice: t,
                    proratedAmount: null != I ? I.total : void 0,
                    currentSubscription: n,
                    planGroup: o,
                }),
                forceShow: !0,
                showPricingLink: a.currency !== B.Yri.USD,
                showWithdrawalWaiver: _,
                disabled: c,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: o,
            });
}
function Z(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: o } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: u } = (0, I.P5)(),
        { analyticsLocations: c } = (0, g.Ay)(),
        [_, f] = (0, w.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [p, h] = (0, w.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: m.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        l(_);
    }, [l, _]);
    let E = f ?? h;
    if (
        (i.useEffect(() => {
            o(E);
        }, [o, E]),
        null != E)
    )
        return (0, r.jsx)(d.wx6, { type: "critical", children: E.message });
    if (null == _ || null == p) return (0, r.jsx)(d.y$y, { className: W.__invalid_spinner });
    let A = (0, D.J$)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: Y.o, children: H.intl.string(H.t.spIYou) }),
            (0, r.jsxs)(x.Yx, {
                className: s()(W.SU, u),
                children: [
                    (0, r.jsx)(x.Xd, { children: H.intl.string(H.t["2eh+Co"]) }),
                    (0, r.jsx)(G._J, { invoice: _, isPrepaidPaymentSource: A }),
                    (0, r.jsx)(G.m0, {
                        premiumSubscription: t,
                        renewalInvoice: p,
                        isUpdate: !0,
                        isPrepaidPaymentSource: A,
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
        { setInvoicePreview: _, premiumBrandRefreshBackgroundClassName: f } = (0, I.P5)(),
        { analyticsLocations: p } = (0, g.Ay)(),
        [h, m] = (0, w.Kq)({
            subscriptionId: n.id,
            items: (0, D.Pg)(n, a.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: p,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    if (
        (i.useEffect(() => {
            _(h);
        }, [_, h]),
        null != m)
    )
        return (0, r.jsx)(d.wx6, { type: "critical", children: m.message });
    if (null == h) return (0, r.jsx)("div", { children: (0, r.jsx)(d.y$y, {}) });
    t = n.type === B.rzx.PREMIUM ? (0, D.Mn)(a.id) : a.name;
    let E = (0, D.J$)(u.paymentSourceId),
        A = h.subscriptionPeriodStart;
    return (
        l.fractionalState === V.xc.FP_SUB_PAUSED && (A = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: W.G3,
            children: [
                (0, r.jsx)("div", { className: Y.o, children: H.intl.format(H.t["+y0Tjy"], { renewalDate: A }) }),
                (0, r.jsxs)(x.Yx, {
                    className: s()(W.SU, f),
                    children: [
                        (0, r.jsx)(x.Xd, { children: H.intl.string(H.t.iqhIp4) }),
                        (0, r.jsx)(x.oR, { label: t, value: (0, D.jh)(a, u, !0) }),
                        (0, r.jsx)(P.A, { invoice: h }),
                        (0, r.jsx)(x.pK, {}),
                        (0, r.jsx)(G.m0, {
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
let X = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: a } = e,
        s = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: m.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [o, l] = (0, w.Kq)({ ...s, renewal: !1, applyEntitlements: !0 }),
        [u, c] = (0, w.Kq)({ ...s, renewal: !0 });
    return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
};
