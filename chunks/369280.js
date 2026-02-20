"use strict";
n.d(t, { A: () => ee });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(997101),
    d = n(311907),
    _ = n(397927),
    f = n(821189),
    p = n(821891),
    h = n(637141),
    m = n(953689),
    E = n(793574),
    g = n(688810),
    A = n(531260),
    I = n(69882),
    T = n(93159),
    S = n(937008),
    y = n(156312),
    v = n(566980),
    N = n(800471),
    C = n(104745),
    b = n(222707),
    R = n(340034),
    O = n(888751),
    D = n(216641),
    L = n(351906),
    w = n(615405),
    x = n(97352),
    M = n(79387),
    P = n(927578),
    k = n(615396),
    U = n(543767),
    G = n(735164),
    F = n(787455),
    V = n(778307),
    B = n(218075),
    H = n(446929),
    j = n(692440),
    Y = n(299301),
    W = n(788868),
    K = n(88001),
    z = n(652215),
    $ = n(519412),
    q = n(985018),
    Z = n(756366),
    X = n(314654),
    Q = n(982571);
function J(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : u.createPortal(t, n);
}
function ee(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceChange: u,
            onPaymentSourceAdd: E,
            planId: g,
            setHasAcceptedTerms: U,
            legalTermsNodeRef: F,
            hasLegalTermsFlash: W,
            onInvoiceError: X,
            planGroup: J,
            currencies: ee,
            onCurrencyChange: ei,
            hasOpenInvoice: eo,
            purchaseState: el,
            handleClose: eu,
            shouldUseUnifiedCheckoutUI: ec,
        } = e,
        {
            selectedSkuId: ed,
            defaultPlanId: e_,
            isPremium: ef,
            startedPaymentFlowWithPaymentSourcesRef: ep,
            hasPaymentSources: eh,
            enablePremiumBrandRefresh: em,
            isPremiumGroupPurchase: eE,
            invoicePreview: eg,
        } = (0, y.P5)(),
        { isGift: eA } = (0, S.Pv)(),
        eI = o.paymentSourceId,
        eT = (0, D.g)(s, eI),
        eS = (0, d.bG)([x.A], () => x.A.get(g));
    l()(null != eS, "Missing newPlan");
    let ey = (0, d.bG)([L.A], () => L.A.hidePersonalInformation),
        ev = (0, A.A)(),
        eN = c.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback),
        eC = el === v.h.PURCHASING || el === v.h.COMPLETED,
        eb = (0, N.vT)({
            isTrial: !1,
            isGift: eA,
            selectedSkuId: ed,
            startedPaymentFlowWithPaymentSources: ep.current,
        }),
        eR = n?.isPausedAllowsResumeButNotUpdates,
        eO = i.useMemo(
            () =>
                (0, P.Tm)({ skuId: ed, isPremium: ef, multiMonthPlans: [], currentSubscription: n, defaultPlanId: e_ }),
            [ed, n, e_, ef],
        );
    t =
        eo || eR
            ? q.intl.string(q.t.nyzoFb)
            : eE
              ? q.intl.formatToPlainString($.default["3m9DJK"], { premiumGroupProductName: (0, K.DP)() })
              : (0, P.ys)(g)
                ? (0, P.ff)(n, eS)
                : q.intl.formatToPlainString(q.t["sBpy9/"], { planName: eS.name });
    let eD = i.useRef(null),
        eL = i.useMemo(() => ({ shouldUseUnifiedCheckoutUI: ec, unifiedSubscriptionDetailsNode: eD }), [ec]),
        ew = null,
        ex = !0,
        eM = !1;
    null != n &&
        (eo
            ? (ew = (0, r.jsx)(et, {
                  premiumSubscription: n,
                  onInvoiceError: X,
                  priceOptions: o,
                  preventFetch: !1,
                  ...eL,
              }))
            : eR
              ? (ew = (0, r.jsx)(es, {
                    premiumSubscription: n,
                    onInvoiceError: X,
                    priceOptions: o,
                    preventFetch: eC,
                    ...eL,
                }))
              : (0, k.Ge)(n, g, J)
                ? (ew = (0, r.jsx)(en, {
                      premiumSubscription: n,
                      newPlan: eS,
                      onInvoiceError: X,
                      planGroup: J,
                      priceOptions: o,
                      fractionalPremiumInfo: ev,
                      preventFetch: eC,
                      ...eL,
                  }))
                : ((ex = !1),
                  (eM = !0),
                  (ew = (0, r.jsx)(ea, {
                      premiumSubscription: n,
                      newPlan: eS,
                      planGroup: J,
                      fractionalPremiumInfo: ev,
                      priceOptions: o,
                      preventFetch: eC,
                      ...eL,
                  }))));
    let eP = n?.eligiblePaymentGateways,
        ek = null != eP && eP.length > 0 && (eI === M.B || null === eT) && eh ? B.f.SELECT_PAYMENT_METHOD : void 0,
        eU = i.useMemo(
            () => ({
                label: q.intl.string(q.t["/AAR02"]),
                selectedCurrency: o.currency,
                currencies: ee,
                onChange: ei,
                disabled: eC,
            }),
            [ee, ei, o, eC],
        ),
        eG = i.useMemo(() => (0, r.jsx)(R.rk, { ...eU }), [eU]),
        eF = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    label: q.intl.string(q.t["mmDvV+"]),
                    paymentSources: Object.values(s),
                    selectedPaymentSourceId: eI,
                    onChange: u,
                    onPaymentSourceAdd: E,
                    hidePersonalInformation: ey,
                    disabled: eC,
                    paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                    className: a()({ [Q.E4]: em }),
                    shouldUseUnifiedCheckoutUI: ec,
                }),
                ec ? eG : null,
            ],
        }),
        eV = (0, r.jsx)(V.A, {
            isActive: W,
            ref: F,
            children:
                null != n && (0, k.Ge)(n, g, J)
                    ? (0, r.jsx)(er, {
                          premiumSubscription: n,
                          newPlan: eS,
                          onInvoiceError: X,
                          planGroup: J,
                          priceOptions: o,
                          preventFetch: eC,
                          disabled: eC,
                          isEEA: eN,
                          paymentSources: s,
                          setHasAcceptedTerms: U,
                      })
                    : (0, r.jsx)(m.A, {
                          onChange: U,
                          finePrint: (0, r.jsx)(p.A, {
                              subscriptionPlan: eS,
                              paymentSourceType: eT,
                              basePrice: (0, P.y8)(eS.id, !1, eA, o),
                              currentSubscription: n,
                              planGroup: J,
                          }),
                          forceShow: !0,
                          showPricingLink: eS.currency !== z.Yri.USD,
                          showWithdrawalWaiver: eN,
                          disabled: eC,
                          subscriptionPlan: eS,
                          currentSubscription: n,
                          planGroup: J,
                      }),
        }),
        eB = !eR && eb && !eE;
    if (ec) {
        let e = (0, P.J$)(o.paymentSourceId),
            t = null,
            n = null;
        if (eB)
            n = (0, r.jsx)(R.XH, {
                planOptions: eO,
                eligibleForMultiMonthPlans: !1,
                selectedPlanId: g,
                showSecondarySubTexts: !0,
            });
        else if (null != eg) {
            let n = (0, O.BZ)({ type: Y.N$.PREMIUM_SWITCH_PLAN, invoicePreview: eg }, eS, {
                isPrepaidPaymentSource: e,
                isPremiumGroupPurchase: eE,
            });
            t = (0, r.jsx)(T.f7, { ...n });
        }
        return (0, r.jsx)(I.rg, {
            shouldShowGlobalNotices: !0,
            paymentSelectContent: eF,
            subscriptionDetailsContent: eM ? ew : (0, r.jsx)("div", { ref: eD }),
            purchaseItemContent: t,
            planSelectContent: n,
            invoiceSummaryContent: eM ? null : ew,
            legalContent: eV,
            invoiceTotalDueLabel: ex ? q.intl.string(Z.default.R0cZsM) : q.intl.string(Z.default["11g67A"]),
            invoiceTotalDueValue: null != eg ? (0, j.U5)(eg) : void 0,
        });
    }
    return (0, r.jsxs)("div", {
        className: Q.Du,
        children: [
            (0, r.jsx)(B.j, { paymentRestrictionBannerType: ek }),
            eB &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(C.P, { planSkuId: eS.skuId }),
                        (0, r.jsx)(H.$p, {
                            planOptions: eO,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: g,
                            planGroup: J,
                            showTotal: !1,
                            handleClose: eu,
                        }),
                        (0, r.jsx)(G.pK, {}),
                    ],
                }),
            eE &&
                (0, r.jsx)("div", {
                    className: Q.Ni,
                    children: (0, r.jsx)(_.wx6, {
                        type: "info",
                        children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, b.Nn)() }),
                    }),
                }),
            (0, r.jsx)(_.D0$, { label: t, children: ew }),
            (0, r.jsx)("div", { className: Q.LC, children: eF }),
            (0, r.jsx)(f.f, { currencies: ee, className: Q.p2, children: (0, r.jsx)(f.A, { ...eU }) }),
            eV,
        ],
    });
}
function et(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: s,
            preventFetch: a,
            shouldUseUnifiedCheckoutUI: o,
            unifiedSubscriptionDetailsNode: l,
        } = e,
        { setInvoicePreview: u } = (0, y.P5)(),
        [c, d] = (0, U.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        u(c);
    }, [u, c]),
        i.useEffect(() => {
            n(d);
        }, [n, d]);
    let _ = (0, P.J$)(s.paymentSourceId);
    if (null != c) {
        let e = (0, r.jsx)(j.m0, {
                premiumSubscription: t,
                renewalInvoice: c,
                isUpdate: !0,
                isPrepaidPaymentSource: _,
                shouldUseUnifiedCheckoutUI: o,
            }),
            n = (0, r.jsx)(j._J, { invoice: c, isPrepaidPaymentSource: _, shouldUseUnifiedCheckoutUI: o });
        return o
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(J, { containerNode: l.current, children: e })] })
            : (0, r.jsxs)(G.Yx, { className: X.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(ei, { shouldUseUnifiedCheckoutUI: o });
}
function en(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            onInvoiceError: o,
            planGroup: l,
            priceOptions: u,
            fractionalPremiumInfo: c,
            preventFetch: d,
            unifiedSubscriptionDetailsNode: f,
            shouldUseUnifiedCheckoutUI: p,
        } = e,
        {
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSourcesRef: m,
            setInvoicePreview: E,
            premiumBrandRefreshBackgroundClassName: A,
        } = (0, y.P5)(),
        { isGift: I } = (0, S.Pv)(),
        { analyticsLocations: T } = (0, g.Ay)(),
        v = (0, P.Pg)(n, s.id, 1, new Set(l)),
        {
            proratedInvoicePreview: C,
            proratedInvoiceError: b,
            renewalInvoicePreview: O,
            renewalInvoiceError: D,
        } = eo({ premiumSubscription: n, newItems: v, priceOptions: u, preventFetch: d, analyticsLocations: T });
    i.useEffect(() => {
        E(C);
    }, [E, C]);
    let L = b ?? D;
    if (
        (i.useEffect(() => {
            o(L);
        }, [o, L]),
        null != L)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: L.message });
    let w = (0, N.vT)({ isTrial: !1, isGift: I, selectedSkuId: h, startedPaymentFlowWithPaymentSources: m.current }),
        x = (0, N.UB)(w, C, s);
    if (
        (null !== c && null !== C && (t = (0, P._e)(C.subscriptionPeriodEnd, c.unactivatedUnits, c.endsAt)),
        null == C || null == O || x)
    )
        return (0, r.jsx)(ei, { shouldUseUnifiedCheckoutUI: p });
    let M = (0, P.J$)(u.paymentSourceId),
        k = (0, r.jsx)(j.m0, {
            premiumSubscription: n,
            proratedInvoice: C,
            renewalInvoice: O,
            overrideRenewalDate: t,
            isUpdate: !0,
            isPrepaidPaymentSource: M,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(R.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: Y.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: C,
                          renewalInvoicePreview: O,
                      },
                      subscriptionPlan: s,
                      isPrepaidPaymentSource: M,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(J, { containerNode: f.current, children: k }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(j.wP, { proratedInvoice: C, renewalInvoice: O, overrideRenewalDate: t }),
                  (0, r.jsxs)(G.Yx, {
                      className: a()(Q.SU, A),
                      children: [
                          (0, r.jsx)(G.Xd, { children: q.intl.string(q.t["2eh+Co"]) }),
                          (0, r.jsx)(j.mT, { invoice: C, newPlan: s, isPrepaidPaymentSource: M }),
                          k,
                      ],
                  }),
              ],
          });
}
function er(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            onInvoiceError: a,
            planGroup: o,
            priceOptions: l,
            preventFetch: u,
            disabled: c,
            isEEA: d,
            paymentSources: f,
            setHasAcceptedTerms: h,
        } = e,
        { analyticsLocations: E } = (0, g.Ay)(),
        A = (0, P.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: T,
            renewalInvoicePreview: S,
            renewalInvoiceError: y,
        } = eo({ premiumSubscription: n, newItems: A, priceOptions: l, preventFetch: u, analyticsLocations: E }),
        v = (0, D.g)(f, l.paymentSourceId),
        N = y ?? T;
    return (i.useEffect(() => {
        a(N);
    }, [a, N]),
    null != N)
        ? (0, r.jsx)(_.wx6, { type: "critical", children: N.message })
        : (null != S && (t = { amount: S.subtotal, currency: S.currency, tax: S.tax, taxInclusive: S.taxInclusive }),
            null == t)
          ? null
          : (0, r.jsx)(m.A, {
                onChange: h,
                finePrint: (0, r.jsx)(p.A, {
                    subscriptionPlan: s,
                    paymentSourceType: v,
                    basePrice: t,
                    proratedAmount: null != I ? I.total : void 0,
                    currentSubscription: n,
                    planGroup: o,
                }),
                forceShow: !0,
                showPricingLink: s.currency !== z.Yri.USD,
                showWithdrawalWaiver: d,
                disabled: c,
                subscriptionPlan: s,
                currentSubscription: n,
                planGroup: o,
            });
}
let ei = (e) => {
    let { shouldUseUnifiedCheckoutUI: t } = e;
    return t
        ? (0, r.jsx)("div", { className: X.l, children: (0, r.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS }) })
        : (0, r.jsx)(_.y$y, {});
};
function es(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            onInvoiceError: o,
            shouldUseUnifiedCheckoutUI: l,
            unifiedSubscriptionDetailsNode: u,
        } = e,
        { setInvoicePreview: c, premiumBrandRefreshBackgroundClassName: d } = (0, y.P5)(),
        { analyticsLocations: f } = (0, g.Ay)(),
        [p, h] = (0, U.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: f,
            analyticsLocation: E.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, A] = (0, U.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: f,
            analyticsLocation: E.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        c(p);
    }, [c, p]);
    let I = h ?? A;
    if (
        (i.useEffect(() => {
            o(I);
        }, [o, I]),
        null != I)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: I.message });
    if (null == p || null == m) return (0, r.jsx)(ei, { shouldUseUnifiedCheckoutUI: l });
    let T = (0, P.J$)(n.paymentSourceId),
        S = (0, r.jsx)(j.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: T,
            shouldUseUnifiedCheckoutUI: l,
        }),
        v = (0, r.jsx)("div", { className: X.o, children: q.intl.string(q.t.spIYou) }),
        N = (0, r.jsx)(j._J, { invoice: p, isPrepaidPaymentSource: T, shouldUseUnifiedCheckoutUI: l });
    return l
        ? (0, r.jsxs)(r.Fragment, { children: [N, (0, r.jsxs)(J, { containerNode: u.current, children: [v, S] })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  v,
                  (0, r.jsxs)(G.Yx, {
                      className: a()(Q.SU, d),
                      children: [(0, r.jsx)(G.Xd, { children: q.intl.string(q.t["2eh+Co"]) }), N, S],
                  }),
              ],
          });
}
function ea(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
            shouldUseUnifiedCheckoutUI: d,
        } = e,
        { setInvoicePreview: f, premiumBrandRefreshBackgroundClassName: p } = (0, y.P5)(),
        { analyticsLocations: h } = (0, g.Ay)(),
        [m, E] = (0, U.Kq)({
            subscriptionId: n.id,
            items: (0, P.Pg)(n, s.id, 1, new Set(o)),
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
            f(m);
        }, [f, m]),
        null != E)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: E.message });
    if (null == m) return (0, r.jsx)("div", { children: (0, r.jsx)(ei, { shouldUseUnifiedCheckoutUI: d }) });
    t = n.type === z.rzx.PREMIUM ? (0, P.Mn)(s.id) : s.name;
    let A = (0, P.J$)(u.paymentSourceId),
        I = m.subscriptionPeriodStart;
    l.fractionalState === W.xc.FP_SUB_PAUSED && (I = l.endsAt.toDate());
    let T = (0, r.jsx)("div", { className: X.o, children: q.intl.format(q.t["+y0Tjy"], { renewalDate: I }) }),
        S = (0, r.jsx)(j.m0, {
            premiumSubscription: n,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: A,
            shouldUseUnifiedCheckoutUI: d,
            unifiedCheckoutDefaultExpanded: !0,
        });
    return d
        ? (0, r.jsxs)(r.Fragment, { children: [T, S] })
        : (0, r.jsxs)("div", {
              className: Q.G3,
              children: [
                  T,
                  (0, r.jsxs)(G.Yx, {
                      className: a()(Q.SU, p),
                      children: [
                          (0, r.jsx)(G.Xd, { children: q.intl.string(q.t.iqhIp4) }),
                          (0, r.jsx)(G.oR, { label: t, value: (0, P.jh)(s, u, !0) }),
                          (0, r.jsx)(F.A, { invoice: m }),
                          (0, r.jsx)(G.pK, {}),
                          S,
                      ],
                  }),
              ],
          });
}
let eo = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: s } = e,
        a = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: s,
            analyticsLocation: E.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [o, l] = (0, U.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
        [u, c] = (0, U.Kq)({ ...a, renewal: !0 });
    return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
};
