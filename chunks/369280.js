"use strict";
n.d(t, { A: () => Q });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(997101),
    d = n(311907),
    _ = n(397927),
    f = n(821189),
    h = n(821891),
    p = n(637141),
    g = n(953689),
    E = n(793574),
    A = n(688810),
    I = n(531260),
    T = n(69882),
    y = n(937008),
    S = n(156312),
    v = n(566980),
    C = n(800471),
    b = n(104745),
    N = n(222707),
    R = n(340034),
    O = n(216641),
    D = n(351906),
    L = n(615405),
    w = n(97352),
    x = n(79387),
    P = n(927578),
    M = n(615396),
    k = n(543767),
    U = n(735164),
    G = n(787455),
    F = n(778307),
    V = n(218075),
    B = n(446929),
    j = n(692440),
    H = n(299301),
    Y = n(788868),
    W = n(88001),
    K = n(652215),
    $ = n(519412),
    z = n(985018),
    q = n(314654),
    X = n(982571);
function Z(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : u.createPortal(t, n);
}
function Q(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: o,
            onPaymentSourceChange: u,
            onPaymentSourceAdd: E,
            planId: A,
            setHasAcceptedTerms: k,
            legalTermsNodeRef: G,
            hasLegalTermsFlash: j,
            onInvoiceError: H,
            planGroup: Y,
            currencies: q,
            onCurrencyChange: Z,
            hasOpenInvoice: Q,
            purchaseState: ei,
            handleClose: ea,
            shouldUseUnifiedCheckoutUI: es,
        } = e,
        {
            selectedSkuId: eo,
            defaultPlanId: el,
            isPremium: eu,
            startedPaymentFlowWithPaymentSourcesRef: ec,
            hasPaymentSources: ed,
            enablePremiumBrandRefresh: e_,
            isPremiumGroupPurchase: ef,
        } = (0, S.P5)(),
        { isGift: eh } = (0, y.Pv)(),
        ep = o.paymentSourceId,
        em = (0, O.g)(a, ep),
        eg = (0, d.bG)([w.A], () => w.A.get(A));
    l()(null != eg, "Missing newPlan");
    let eE = (0, d.bG)([D.A], () => D.A.hidePersonalInformation),
        eA = (0, I.A)(),
        eI = c.M.EEA_COUNTRIES.has(L.A.ipCountryCodeWithFallback),
        eT = ei === v.h.PURCHASING || ei === v.h.COMPLETED,
        ey = (0, C.vT)({
            isTrial: !1,
            isGift: eh,
            selectedSkuId: eo,
            startedPaymentFlowWithPaymentSources: ec.current,
        }),
        eS = n?.isPausedAllowsResumeButNotUpdates,
        ev = i.useMemo(
            () =>
                (0, P.Tm)({ skuId: eo, isPremium: eu, multiMonthPlans: [], currentSubscription: n, defaultPlanId: el }),
            [eo, n, el, eu],
        );
    t =
        Q || eS
            ? z.intl.string(z.t.nyzoFb)
            : ef
              ? z.intl.formatToPlainString($.default["3m9DJK"], { premiumGroupProductName: (0, W.DP)() })
              : (0, P.ys)(A)
                ? (0, P.ff)(n, eg)
                : z.intl.formatToPlainString(z.t["sBpy9/"], { planName: eg.name });
    let eC = i.useRef(null),
        eb = null;
    null != n &&
        (eb = Q
            ? (0, r.jsx)(J, { premiumSubscription: n, onInvoiceError: H, priceOptions: o, preventFetch: !1 })
            : eS
              ? (0, r.jsx)(en, { premiumSubscription: n, onInvoiceError: H, priceOptions: o, preventFetch: eT })
              : (0, M.Ge)(n, A, Y)
                ? (0, r.jsx)(ee, {
                      premiumSubscription: n,
                      newPlan: eg,
                      onInvoiceError: H,
                      planGroup: Y,
                      priceOptions: o,
                      fractionalPremiumInfo: eA,
                      preventFetch: eT,
                      shouldUseUnifiedCheckoutUI: es,
                      unifiedSubscriptionDetailsNode: eC,
                  })
                : (0, r.jsx)(er, {
                      premiumSubscription: n,
                      newPlan: eg,
                      planGroup: Y,
                      fractionalPremiumInfo: eA,
                      priceOptions: o,
                      preventFetch: eT,
                  }));
    let eN = n?.eligiblePaymentGateways,
        eR = null != eN && eN.length > 0 && (ep === x.B || null === em) && ed ? V.f.SELECT_PAYMENT_METHOD : void 0,
        eO = (0, r.jsx)(p.A, {
            label: z.intl.string(z.t["mmDvV+"]),
            paymentSources: Object.values(a),
            selectedPaymentSourceId: ep,
            onChange: u,
            onPaymentSourceAdd: E,
            hidePersonalInformation: eE,
            disabled: eT,
            paymentGatewayRestrictions: n?.eligiblePaymentGateways,
            className: s()({ [X.E4]: e_ }),
            shouldUseUnifiedCheckoutUI: es,
        }),
        eD = (0, r.jsx)(F.A, {
            isActive: j,
            ref: G,
            children:
                null != n && (0, M.Ge)(n, A, Y)
                    ? (0, r.jsx)(et, {
                          premiumSubscription: n,
                          newPlan: eg,
                          onInvoiceError: H,
                          planGroup: Y,
                          priceOptions: o,
                          preventFetch: eT,
                          disabled: eT,
                          isEEA: eI,
                          paymentSources: a,
                          setHasAcceptedTerms: k,
                      })
                    : (0, r.jsx)(g.A, {
                          onChange: k,
                          finePrint: (0, r.jsx)(h.A, {
                              subscriptionPlan: eg,
                              paymentSourceType: em,
                              basePrice: (0, P.y8)(eg.id, !1, eh, o),
                              currentSubscription: n,
                              planGroup: Y,
                          }),
                          forceShow: !0,
                          showPricingLink: eg.currency !== K.Yri.USD,
                          showWithdrawalWaiver: eI,
                          disabled: eT,
                          subscriptionPlan: eg,
                          currentSubscription: n,
                          planGroup: Y,
                      }),
        });
    return es
        ? (0, r.jsx)(T.rg, {
              shouldShowGlobalNotices: !0,
              paymentSelectContent: eO,
              subscriptionDetailsContent: (0, r.jsx)("div", { ref: eC }),
              planSelectContent: (0, r.jsx)(R.XH, {
                  planOptions: ev,
                  eligibleForMultiMonthPlans: !1,
                  selectedPlanId: A,
              }),
              invoiceSummaryContent: eb,
              legalContent: eD,
          })
        : (0, r.jsxs)("div", {
              className: X.Du,
              children: [
                  (0, r.jsx)(V.j, { paymentRestrictionBannerType: eR }),
                  !eS &&
                      ey &&
                      !ef &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(b.P, { planSkuId: eg.skuId }),
                              (0, r.jsx)(B.$p, {
                                  planOptions: ev,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: A,
                                  planGroup: Y,
                                  showTotal: !1,
                                  handleClose: ea,
                              }),
                              (0, r.jsx)(U.pK, {}),
                          ],
                      }),
                  ef &&
                      (0, r.jsx)("div", {
                          className: X.Ni,
                          children: (0, r.jsx)(_.wx6, {
                              type: "info",
                              children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, N.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(_.D0$, { label: t, children: eb }),
                  (0, r.jsx)("div", { className: X.LC, children: eO }),
                  (0, r.jsx)(f.f, {
                      currencies: q,
                      className: X.p2,
                      children: (0, r.jsx)(f.A, {
                          label: z.intl.string(z.t["/AAR02"]),
                          selectedCurrency: o.currency,
                          currencies: q,
                          onChange: Z,
                          disabled: eT,
                      }),
                  }),
                  eD,
              ],
          });
}
function J(e) {
    let { premiumSubscription: t, onInvoiceError: n, priceOptions: a, preventFetch: s } = e,
        { setInvoicePreview: o } = (0, S.P5)(),
        [l, u] = (0, k.C8)({ subscriptionId: t.id, preventFetch: s });
    i.useEffect(() => {
        o(l);
    }, [o, l]),
        i.useEffect(() => {
            n(u);
        }, [n, u]);
    let c = (0, P.J$)(a.paymentSourceId);
    return null != l
        ? (0, r.jsxs)(U.Yx, {
              className: q.__invalid_invoice,
              children: [
                  (0, r.jsx)(j._J, { invoice: l, isPrepaidPaymentSource: c }),
                  (0, r.jsx)(j.m0, {
                      premiumSubscription: t,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: c,
                  }),
              ],
          })
        : (0, r.jsx)(_.y$y, {});
}
function ee(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: o,
            planGroup: l,
            priceOptions: u,
            fractionalPremiumInfo: c,
            preventFetch: d,
            unifiedSubscriptionDetailsNode: f,
            shouldUseUnifiedCheckoutUI: h,
        } = e,
        {
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSourcesRef: g,
            setInvoicePreview: E,
            premiumBrandRefreshBackgroundClassName: I,
        } = (0, S.P5)(),
        { isGift: T } = (0, y.Pv)(),
        { analyticsLocations: v } = (0, A.Ay)(),
        b = (0, P.Pg)(n, a.id, 1, new Set(l)),
        {
            proratedInvoicePreview: N,
            proratedInvoiceError: O,
            renewalInvoicePreview: D,
            renewalInvoiceError: L,
        } = ei({ premiumSubscription: n, newItems: b, priceOptions: u, preventFetch: d, analyticsLocations: v });
    i.useEffect(() => {
        E(N);
    }, [E, N]);
    let w = O ?? L;
    if (
        (i.useEffect(() => {
            o(w);
        }, [o, w]),
        null != w)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: w.message });
    let x = (0, C.vT)({ isTrial: !1, isGift: T, selectedSkuId: p, startedPaymentFlowWithPaymentSources: g.current }),
        M = (0, C.UB)(x, N, a);
    if (
        (null !== c && null !== N && (t = (0, P._e)(N.subscriptionPeriodEnd, c.unactivatedUnits, c.endsAt)),
        null == N || null == D || M)
    )
        return (0, r.jsx)(_.y$y, { className: X.__invalid_spinner });
    let k = (0, P.J$)(u.paymentSourceId),
        G = (0, r.jsx)(j.m0, {
            premiumSubscription: n,
            proratedInvoice: N,
            renewalInvoice: D,
            overrideRenewalDate: t,
            isUpdate: !0,
            isPrepaidPaymentSource: k,
            shouldUseUnifiedCheckoutUI: h,
        });
    return h
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(R.Z$, {
                      invoiceSummaryTypeWithPreview: {
                          type: H.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: N,
                          renewalInvoicePreview: D,
                      },
                      subscriptionPlan: a,
                      isPrepaidPaymentSource: k,
                      subscriptionTrial: null,
                      isCustomGift: !1,
                  }),
                  (0, r.jsx)(Z, { containerNode: f.current, children: G }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(j.wP, { proratedInvoice: N, renewalInvoice: D, overrideRenewalDate: t }),
                  (0, r.jsxs)(U.Yx, {
                      className: s()(X.SU, I),
                      children: [
                          (0, r.jsx)(U.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                          (0, r.jsx)(j.mT, { invoice: N, newPlan: a, isPrepaidPaymentSource: k }),
                          G,
                      ],
                  }),
              ],
          });
}
function et(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            preventFetch: u,
            disabled: c,
            isEEA: d,
            paymentSources: f,
            setHasAcceptedTerms: p,
        } = e,
        { analyticsLocations: E } = (0, A.Ay)(),
        I = (0, P.Pg)(n, a.id, 1, new Set(o)),
        {
            proratedInvoicePreview: T,
            proratedInvoiceError: y,
            renewalInvoicePreview: S,
            renewalInvoiceError: v,
        } = ei({ premiumSubscription: n, newItems: I, priceOptions: l, preventFetch: u, analyticsLocations: E }),
        C = (0, O.g)(f, l.paymentSourceId),
        b = v ?? y;
    return (i.useEffect(() => {
        s(b);
    }, [s, b]),
    null != b)
        ? (0, r.jsx)(_.wx6, { type: "critical", children: b.message })
        : (null != S && (t = { amount: S.subtotal, currency: S.currency, tax: S.tax, taxInclusive: S.taxInclusive }),
            null == t)
          ? null
          : (0, r.jsx)(g.A, {
                onChange: p,
                finePrint: (0, r.jsx)(h.A, {
                    subscriptionPlan: a,
                    paymentSourceType: C,
                    basePrice: t,
                    proratedAmount: null != T ? T.total : void 0,
                    currentSubscription: n,
                    planGroup: o,
                }),
                forceShow: !0,
                showPricingLink: a.currency !== K.Yri.USD,
                showWithdrawalWaiver: d,
                disabled: c,
                subscriptionPlan: a,
                currentSubscription: n,
                planGroup: o,
            });
}
function en(e) {
    let { premiumSubscription: t, priceOptions: n, preventFetch: a, onInvoiceError: o } = e,
        { setInvoicePreview: l, premiumBrandRefreshBackgroundClassName: u } = (0, S.P5)(),
        { analyticsLocations: c } = (0, A.Ay)(),
        [d, f] = (0, k.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: E.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [h, p] = (0, k.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: E.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW,
        });
    i.useEffect(() => {
        l(d);
    }, [l, d]);
    let g = f ?? p;
    if (
        (i.useEffect(() => {
            o(g);
        }, [o, g]),
        null != g)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: g.message });
    if (null == d || null == h) return (0, r.jsx)(_.y$y, { className: X.__invalid_spinner });
    let I = (0, P.J$)(n.paymentSourceId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: q.o, children: z.intl.string(z.t.spIYou) }),
            (0, r.jsxs)(U.Yx, {
                className: s()(X.SU, u),
                children: [
                    (0, r.jsx)(U.Xd, { children: z.intl.string(z.t["2eh+Co"]) }),
                    (0, r.jsx)(j._J, { invoice: d, isPrepaidPaymentSource: I }),
                    (0, r.jsx)(j.m0, {
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
function er(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: a,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
        } = e,
        { setInvoicePreview: d, premiumBrandRefreshBackgroundClassName: f } = (0, S.P5)(),
        { analyticsLocations: h } = (0, A.Ay)(),
        [p, g] = (0, k.Kq)({
            subscriptionId: n.id,
            items: (0, P.Pg)(n, a.id, 1, new Set(o)),
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
            d(p);
        }, [d, p]),
        null != g)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: g.message });
    if (null == p) return (0, r.jsx)("div", { children: (0, r.jsx)(_.y$y, {}) });
    t = n.type === K.rzx.PREMIUM ? (0, P.Mn)(a.id) : a.name;
    let E = (0, P.J$)(u.paymentSourceId),
        I = p.subscriptionPeriodStart;
    return (
        l.fractionalState === Y.xc.FP_SUB_PAUSED && (I = l.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: X.G3,
            children: [
                (0, r.jsx)("div", { className: q.o, children: z.intl.format(z.t["+y0Tjy"], { renewalDate: I }) }),
                (0, r.jsxs)(U.Yx, {
                    className: s()(X.SU, f),
                    children: [
                        (0, r.jsx)(U.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                        (0, r.jsx)(U.oR, { label: t, value: (0, P.jh)(a, u, !0) }),
                        (0, r.jsx)(G.A, { invoice: p }),
                        (0, r.jsx)(U.pK, {}),
                        (0, r.jsx)(j.m0, {
                            premiumSubscription: n,
                            renewalInvoice: p,
                            isUpdate: !0,
                            isPrepaidPaymentSource: E,
                        }),
                    ],
                }),
            ],
        })
    );
}
let ei = (e) => {
    let { premiumSubscription: t, newItems: n, priceOptions: r, preventFetch: i, analyticsLocations: a } = e,
        s = {
            subscriptionId: t.id,
            items: n,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: E.A.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW,
        },
        [o, l] = (0, k.Kq)({ ...s, renewal: !1, applyEntitlements: !0 }),
        [u, c] = (0, k.Kq)({ ...s, renewal: !0 });
    return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
};
