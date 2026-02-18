"use strict";
n.d(t, { A: () => X });
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
    T = n(937008),
    S = n(156312),
    y = n(566980),
    v = n(800471),
    N = n(104745),
    C = n(222707),
    b = n(340034),
    R = n(216641),
    O = n(351906),
    D = n(615405),
    L = n(97352),
    w = n(79387),
    x = n(927578),
    M = n(615396),
    P = n(543767),
    k = n(735164),
    U = n(787455),
    G = n(778307),
    F = n(218075),
    V = n(446929),
    B = n(692440),
    H = n(299301),
    j = n(788868),
    Y = n(88001),
    W = n(652215),
    K = n(519412),
    z = n(985018),
    $ = n(314654),
    q = n(982571);
function Z(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : u.createPortal(t, n);
}
function X(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceChange: u,
            onPaymentSourceAdd: E,
            planId: g,
            setHasAcceptedTerms: P,
            legalTermsNodeRef: U,
            hasLegalTermsFlash: B,
            onInvoiceError: H,
            planGroup: j,
            currencies: $,
            onCurrencyChange: Z,
            hasOpenInvoice: X,
            purchaseState: er,
            handleClose: ei,
            shouldUseUnifiedCheckoutUI: es,
        } = e,
        {
            selectedSkuId: ea,
            defaultPlanId: eo,
            isPremium: el,
            startedPaymentFlowWithPaymentSourcesRef: eu,
            hasPaymentSources: ec,
            enablePremiumBrandRefresh: ed,
            isPremiumGroupPurchase: e_,
        } = (0, S.P5)(),
        { isGift: ef } = (0, T.Pv)(),
        ep = o.paymentSourceId,
        eh = (0, R.g)(s, ep),
        em = (0, d.bG)([L.A], () => L.A.get(g));
    l()(null != em, "Missing newPlan");
    let eE = (0, d.bG)([O.A], () => O.A.hidePersonalInformation),
        eg = (0, A.A)(),
        eA = c.M.EEA_COUNTRIES.has(D.A.ipCountryCodeWithFallback),
        eI = er === y.h.PURCHASING || er === y.h.COMPLETED,
        eT = (0, v.vT)({
            isTrial: !1,
            isGift: ef,
            selectedSkuId: ea,
            startedPaymentFlowWithPaymentSources: eu.current,
        }),
        eS = n?.isPausedAllowsResumeButNotUpdates,
        ey = i.useMemo(
            () =>
                (0, x.Tm)({ skuId: ea, isPremium: el, multiMonthPlans: [], currentSubscription: n, defaultPlanId: eo }),
            [ea, n, eo, el],
        );
    t =
        X || eS
            ? z.intl.string(z.t.nyzoFb)
            : e_
              ? z.intl.formatToPlainString(K.default["3m9DJK"], { premiumGroupProductName: (0, Y.DP)() })
              : (0, x.ys)(g)
                ? (0, x.ff)(n, em)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: em.name });
    let ev = i.useRef(null),
        eN = null;
    null != n &&
        (eN = X
            ? (0, r.jsx)(Q, { premiumSubscription: n, onInvoiceError: H, priceOptions: o, preventFetch: !1 })
            : eS
              ? (0, r.jsx)(et, { premiumSubscription: n, onInvoiceError: H, priceOptions: o, preventFetch: eI })
              : (0, M.Ge)(n, g, j)
                ? (0, r.jsx)(J, {
                      premiumSubscription: n,
                      newPlan: em,
                      onInvoiceError: H,
                      planGroup: j,
                      priceOptions: o,
                      fractionalPremiumInfo: eg,
                      preventFetch: eI,
                      shouldUseUnifiedCheckoutUI: es,
                      unifiedSubscriptionDetailsNode: ev,
                  })
                : (0, r.jsx)(en, {
                      premiumSubscription: n,
                      newPlan: em,
                      planGroup: j,
                      fractionalPremiumInfo: eg,
                      priceOptions: o,
                      preventFetch: eI,
                  }));
    let eC = n?.eligiblePaymentGateways,
        eb = null != eC && eC.length > 0 && (ep === w.B || null === eh) && ec ? F.f.SELECT_PAYMENT_METHOD : void 0,
        eR = (0, r.jsx)(h.A, {
            label: z.intl.string(z.t["mmDvV+"]),
            paymentSources: Object.values(s),
            selectedPaymentSourceId: ep,
            onChange: u,
            onPaymentSourceAdd: E,
            hidePersonalInformation: eE,
            disabled: eI,
            paymentGatewayRestrictions: n?.eligiblePaymentGateways,
            className: a()({ [q.E4]: ed }),
            shouldUseUnifiedCheckoutUI: es,
        }),
        eO = (0, r.jsx)(G.A, {
            isActive: B,
            ref: U,
            children:
                null != n && (0, M.Ge)(n, g, j)
                    ? (0, r.jsx)(ee, {
                          premiumSubscription: n,
                          newPlan: em,
                          onInvoiceError: H,
                          planGroup: j,
                          priceOptions: o,
                          preventFetch: eI,
                          disabled: eI,
                          isEEA: eA,
                          paymentSources: s,
                          setHasAcceptedTerms: P,
                      })
                    : (0, r.jsx)(m.A, {
                          onChange: P,
                          finePrint: (0, r.jsx)(p.A, {
                              subscriptionPlan: em,
                              paymentSourceType: eh,
                              basePrice: (0, x.y8)(em.id, !1, ef, o),
                              currentSubscription: n,
                              planGroup: j,
                          }),
                          forceShow: !0,
                          showPricingLink: em.currency !== W.Yri.USD,
                          showWithdrawalWaiver: eA,
                          disabled: eI,
                          subscriptionPlan: em,
                          currentSubscription: n,
                          planGroup: j,
                      }),
        });
    return es
        ? (0, r.jsx)(I.rg, {
              shouldShowGlobalNotices: !0,
              paymentSelectContent: eR,
              subscriptionDetailsContent: (0, r.jsx)("div", { ref: ev }),
              planSelectContent: (0, r.jsx)(b.XH, {
                  planOptions: ey,
                  eligibleForMultiMonthPlans: !1,
                  selectedPlanId: g,
              }),
              invoiceSummaryContent: eN,
              legalContent: eO,
          })
        : (0, r.jsxs)("div", {
              className: q.Du,
              children: [
                  (0, r.jsx)(F.j, { paymentRestrictionBannerType: eb }),
                  !eS &&
                      eT &&
                      !e_ &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(N.P, { planSkuId: em.skuId }),
                              (0, r.jsx)(V.$p, {
                                  planOptions: ey,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: g,
                                  planGroup: j,
                                  showTotal: !1,
                                  handleClose: ei,
                              }),
                              (0, r.jsx)(k.pK, {}),
                          ],
                      }),
                  e_ &&
                      (0, r.jsx)("div", {
                          className: q.Ni,
                          children: (0, r.jsx)(_.wx6, {
                              type: "info",
                              children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, C.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(_.D0$, { label: t, children: eN }),
                  (0, r.jsx)("div", { className: q.LC, children: eR }),
                  (0, r.jsx)(f.f, {
                      currencies: $,
                      className: q.p2,
                      children: (0, r.jsx)(f.A, {
                          label: z.intl.string(z.t["/AAR02"]),
                          selectedCurrency: o.currency,
                          currencies: $,
                          onChange: Z,
                          disabled: eI,
                      }),
                  }),
                  eO,
              ],
          });
}
function Q(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: s, preventFetch: a } = e,
        { setInvoicePreview: o } = (0, S.P5)(),
        [l, u] = (0, P.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        o(l);
    }, [o, l]),
        i.useEffect(() => {
            n(u);
        }, [n, u]);
    let c = (0, x.J$)(s.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(k.Yx, {
              className: $.__invalid_invoice,
              children: [
                  (0, r.jsx)(B._J, { invoice: l, isPrepaidPaymentSource: c }),
                  (0, r.jsx)(B.m0, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: c,
                  }),
              ],
          })
        : (0, r.jsx)(_.y$y, {});
}
function J(e) {
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
        } = (0, S.P5)(),
        { isGift: I } = (0, T.Pv)(),
        { analyticsLocations: y } = (0, g.Ay)(),
        N = (0, x.Pg)(n, s.id, 1, new Set(l)),
        {
            proratedInvoicePreview: C,
            proratedInvoiceError: R,
            renewalInvoicePreview: O,
            renewalInvoiceError: D,
        } = er({ premiumSubscription: n, newItems: N, priceOptions: u, preventFetch: d, analyticsLocations: y });
    i.useEffect(() => {
        E(C);
    }, [E, C]);
    let L = R ?? D;
    if (
        (i.useEffect(() => {
            o(L);
        }, [o, L]),
        null != L)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: L.message });
    let w = (0, v.vT)({ isTrial: !1, isGift: I, selectedSkuId: h, startedPaymentFlowWithPaymentSources: m.current }),
        M = (0, v.UB)(w, C, s);
    if (
        (null !== c && null !== C && (t = (0, x._e)(C.subscriptionPeriodEnd, c.unactivatedUnits, c.endsAt)),
        null == C || null == O || M)
    )
        return (0, r.jsx)(_.y$y, { className: q.__invalid_spinner });
    let P = (0, x.J$)(u.paymentSourceId),
        U = (0, r.jsx)(B.m0, {
            premiumSubscription: n,
            proratedInvoice: C,
            renewalInvoice: O,
            overrideRenewalDate: t,
            isUpdate: !0,
            isPrepaidPaymentSource: P,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(b.Z$, {
                      invoiceSummaryTypeWithPreview: {
                          type: H.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: C,
                          renewalInvoicePreview: O,
                      },
                      subscriptionPlan: s,
                      isPrepaidPaymentSource: P,
                      subscriptionTrial: null,
                      isCustomGift: !1,
                  }),
                  (0, r.jsx)(Z, { containerNode: f.current, children: U }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.wP, { proratedInvoice: C, renewalInvoice: O, overrideRenewalDate: t }),
                  (0, r.jsxs)(k.Yx, {
                      className: a()(q.SU, A),
                      children: [
                          (0, r.jsx)(k.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                          (0, r.jsx)(B.mT, { invoice: C, newPlan: s, isPrepaidPaymentSource: P }),
                          U,
                      ],
                  }),
              ],
          });
}
function ee(e) {
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
        A = (0, x.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: T,
            renewalInvoicePreview: S,
            renewalInvoiceError: y,
        } = er({ premiumSubscription: n, newItems: A, priceOptions: l, preventFetch: u, analyticsLocations: E }),
        v = (0, R.g)(f, l.paymentSourceId),
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
                showPricingLink: s.currency !== W.Yri.USD,
                showWithdrawalWaiver: d,
                disabled: c,
                subscriptionPlan: s,
                currentSubscription: n,
                planGroup: o,
            });
}
function et(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: s, onInvoiceError: o } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: u } = (0, S.P5)(),
        { analyticsLocations: c } = (0, g.Ay)(),
        [d, f] = (0, P.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: c,
            analyticsLocation: E.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [p, h] = (0, P.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: c,
            analyticsLocation: E.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        l(d);
    }, [l, d]);
    let m = f ?? h;
    if (
        (i.useEffect(() => {
            o(m);
        }, [o, m]),
        null != m)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: m.message });
    if (null == d || null == p) return (0, r.jsx)(_.y$y, { className: q.__invalid_spinner });
    let A = (0, x.J$)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: $.o, children: z.intl.string(z.t.spIYou) }),
            (0, r.jsxs)(k.Yx, {
                className: a()(q.SU, u),
                children: [
                    (0, r.jsx)(k.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                    (0, r.jsx)(B._J, { invoice: d, isPrepaidPaymentSource: A }),
                    (0, r.jsx)(B.m0, {
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
function en(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
        } = e,
        { setInvoicePreview: d, premiumBrandRefreshBackgroundClassName: f } = (0, S.P5)(),
        { analyticsLocations: p } = (0, g.Ay)(),
        [h, m] = (0, P.Kq)({
            subscriptionId: n.id,
            items: (0, x.Pg)(n, s.id, 1, new Set(o)),
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
            d(h);
        }, [d, h]),
        null != m)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: m.message });
    if (null == h) return (0, r.jsx)("div", { children: (0, r.jsx)(_.y$y, {}) });
    t = n.type === W.rzx.PREMIUM ? (0, x.Mn)(s.id) : s.name;
    let E = (0, x.J$)(u.paymentSourceId),
        A = h.subscriptionPeriodStart;
    return (
        l.fractionalState === j.xc.FP_SUB_PAUSED && (A = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: q.G3,
            children: [
                (0, r.jsx)("div", { className: $.o, children: z.intl.format(z.t["+y0Tjy"], { renewalDate: A }) }),
                (0, r.jsxs)(k.Yx, {
                    className: a()(q.SU, f),
                    children: [
                        (0, r.jsx)(k.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                        (0, r.jsx)(k.oR, { label: t, value: (0, x.jh)(s, u, !0) }),
                        (0, r.jsx)(U.A, { invoice: h }),
                        (0, r.jsx)(k.pK, {}),
                        (0, r.jsx)(B.m0, {
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
let er = (e) => {
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
        [o, l] = (0, P.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
        [u, c] = (0, P.Kq)({ ...a, renewal: !0 });
    return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
};
