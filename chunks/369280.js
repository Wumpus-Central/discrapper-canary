"use strict";
n.d(t, { A: () => et });
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
    S = n(826469),
    y = n(937008),
    v = n(156312),
    N = n(566980),
    C = n(800471),
    b = n(104745),
    R = n(222707),
    O = n(340034),
    D = n(888751),
    L = n(216641),
    w = n(351906),
    x = n(615405),
    M = n(97352),
    P = n(79387),
    k = n(927578),
    U = n(615396),
    G = n(543767),
    F = n(735164),
    V = n(787455),
    B = n(778307),
    H = n(218075),
    j = n(446929),
    Y = n(692440),
    W = n(299301),
    K = n(788868),
    z = n(88001),
    $ = n(652215),
    q = n(519412),
    X = n(985018),
    Z = n(756366),
    Q = n(314654),
    J = n(982571);
function ee(e) {
    let { children: t, containerNode: n } = e;
    return null == n ? null : u.createPortal(t, n);
}
function et(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceChange: u,
            onPaymentSourceAdd: E,
            planId: g,
            setHasAcceptedTerms: G,
            legalTermsNodeRef: V,
            hasLegalTermsFlash: K,
            onInvoiceError: Q,
            planGroup: ee,
            currencies: et,
            onCurrencyChange: es,
            hasOpenInvoice: el,
            purchaseState: eu,
            handleClose: ec,
            shouldUseUnifiedCheckoutUI: ed,
        } = e,
        {
            selectedSkuId: e_,
            defaultPlanId: ef,
            isPremium: ep,
            startedPaymentFlowWithPaymentSourcesRef: eh,
            hasPaymentSources: em,
            enablePremiumBrandRefresh: eE,
            isPremiumGroupPurchase: eg,
            invoicePreview: eA,
            setPaymentSourceId: eI,
        } = (0, v.P5)(),
        { isGift: eT } = (0, y.Pv)(),
        eS = o.paymentSourceId,
        ey = (0, L.g)(s, eS),
        ev = (0, d.bG)([M.A], () => M.A.get(g));
    l()(null != ev, "Missing newPlan");
    let eN = (0, d.bG)([w.A], () => w.A.hidePersonalInformation),
        eC = (0, A.A)(),
        eb = i.useMemo(() => {
            let e = eA?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(S.A.createFromCheckoutContext);
        }, [eA?.checkoutContext]),
        eR = i.useRef(!1);
    i.useEffect(() => {
        if (eb.length > 0 && !eR.current) {
            eR.current = !0;
            let e = eb.find((e) => e.id === o.paymentSourceId);
            if (null != e && !e.enabled) {
                let e = eb.find((e) => e.enabled) ?? null;
                eI(null != e ? e.id : null);
            }
        }
    }, [eb, eI, o.paymentSourceId]);
    let eO = eb.length > 0 ? eb : Object.values(s),
        eD = eb.find((e) => e.isDefault)?.id,
        eL = c.M.EEA_COUNTRIES.has(x.A.ipCountryCodeWithFallback),
        ew = eu === N.h.PURCHASING || eu === N.h.COMPLETED,
        ex = (0, C.vT)({
            isTrial: !1,
            isGift: eT,
            selectedSkuId: e_,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        eM = n?.isPausedAllowsResumeButNotUpdates,
        eP = i.useMemo(
            () =>
                (0, k.Tm)({ skuId: e_, isPremium: ep, multiMonthPlans: [], currentSubscription: n, defaultPlanId: ef }),
            [e_, n, ef, ep],
        );
    t =
        el || eM
            ? X.intl.string(X.t.nyzoFb)
            : eg
              ? X.intl.formatToPlainString(q.default["3m9DJK"], { premiumGroupProductName: (0, z.DP)() })
              : (0, k.ys)(g)
                ? (0, k.ff)(n, ev)
                : X.intl.formatToPlainString(X.t["sBpy9/"], { planName: ev.name });
    let ek = i.useRef(null),
        eU = i.useMemo(() => ({ shouldUseUnifiedCheckoutUI: ed, unifiedSubscriptionDetailsNode: ek }), [ed]),
        eG = null,
        eF = !0,
        eV = !1;
    null != n &&
        (el
            ? (eG = (0, r.jsx)(en, {
                  premiumSubscription: n,
                  onInvoiceError: Q,
                  priceOptions: o,
                  preventFetch: !1,
                  ...eU,
              }))
            : eM
              ? (eG = (0, r.jsx)(ea, {
                    premiumSubscription: n,
                    onInvoiceError: Q,
                    priceOptions: o,
                    preventFetch: ew,
                    ...eU,
                }))
              : (0, U.Ge)(n, g, ee)
                ? (eG = (0, r.jsx)(er, {
                      premiumSubscription: n,
                      newPlan: ev,
                      onInvoiceError: Q,
                      planGroup: ee,
                      priceOptions: o,
                      fractionalPremiumInfo: eC,
                      preventFetch: ew,
                      ...eU,
                  }))
                : ((eF = !1),
                  (eV = !0),
                  (eG = (0, r.jsx)(eo, {
                      premiumSubscription: n,
                      newPlan: ev,
                      planGroup: ee,
                      fractionalPremiumInfo: eC,
                      priceOptions: o,
                      preventFetch: ew,
                      ...eU,
                  }))));
    let eB = n?.eligiblePaymentGateways,
        eH = null != eB && eB.length > 0 && (eS === P.B || null === ey) && em ? H.f.SELECT_PAYMENT_METHOD : void 0,
        ej = i.useMemo(
            () => ({
                label: X.intl.string(X.t["/AAR02"]),
                selectedCurrency: o.currency,
                currencies: et,
                onChange: es,
                disabled: ew,
            }),
            [et, es, o, ew],
        ),
        eY = i.useMemo(() => (0, r.jsx)(O.rk, { ...ej }), [ej]),
        eW = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    label: X.intl.string(X.t["mmDvV+"]),
                    paymentSources: eO,
                    selectedPaymentSourceId: eS,
                    defaultPaymentSourceId: eD,
                    onChange: u,
                    onPaymentSourceAdd: E,
                    hidePersonalInformation: eN,
                    disabled: ew,
                    paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                    className: a()({ [J.E4]: eE }),
                    shouldUseUnifiedCheckoutUI: ed,
                }),
                ed ? eY : null,
            ],
        }),
        eK = (0, r.jsx)(B.A, {
            isActive: K,
            ref: V,
            children:
                null != n && (0, U.Ge)(n, g, ee)
                    ? (0, r.jsx)(ei, {
                          premiumSubscription: n,
                          newPlan: ev,
                          onInvoiceError: Q,
                          planGroup: ee,
                          priceOptions: o,
                          preventFetch: ew,
                          disabled: ew,
                          isEEA: eL,
                          paymentSources: s,
                          setHasAcceptedTerms: G,
                      })
                    : (0, r.jsx)(m.A, {
                          onChange: G,
                          finePrint: (0, r.jsx)(p.A, {
                              subscriptionPlan: ev,
                              paymentSourceType: ey,
                              basePrice: (0, k.y8)(ev.id, !1, eT, o),
                              currentSubscription: n,
                              planGroup: ee,
                          }),
                          forceShow: !0,
                          showPricingLink: ev.currency !== $.Yri.USD,
                          showWithdrawalWaiver: eL,
                          disabled: ew,
                          subscriptionPlan: ev,
                          currentSubscription: n,
                          planGroup: ee,
                      }),
        }),
        ez = !eM && ex && !eg;
    if (ed) {
        let e = (0, k.J$)(o.paymentSourceId),
            t = null,
            n = null;
        if (ez)
            n = (0, r.jsx)(O.XH, {
                planOptions: eP,
                eligibleForMultiMonthPlans: !1,
                selectedPlanId: g,
                showSecondarySubTexts: !0,
            });
        else if (null != eA) {
            let n = (0, D.BZ)({ type: W.N$.PREMIUM_SWITCH_PLAN, invoicePreview: eA }, ev, {
                isPrepaidPaymentSource: e,
                isPremiumGroupPurchase: eg,
            });
            t = (0, r.jsx)(T.f7, { ...n });
        }
        return (0, r.jsx)(I.rg, {
            shouldShowGlobalNotices: !0,
            paymentSelectContent: eW,
            subscriptionDetailsContent: eV ? eG : (0, r.jsx)("div", { ref: ek }),
            purchaseItemContent: t,
            planSelectContent: n,
            invoiceSummaryContent: eV ? null : eG,
            legalContent: eK,
            invoiceTotalDueLabel: eF ? X.intl.string(Z.default.R0cZsM) : X.intl.string(Z.default["11g67A"]),
            invoiceTotalDueValue: null != eA ? (0, Y.U5)(eA) : void 0,
        });
    }
    return (0, r.jsxs)("div", {
        className: J.Du,
        children: [
            (0, r.jsx)(H.j, { paymentRestrictionBannerType: eH }),
            ez &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(b.P, { planSkuId: ev.skuId }),
                        (0, r.jsx)(j.$p, {
                            planOptions: eP,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: g,
                            planGroup: ee,
                            showTotal: !1,
                            handleClose: ec,
                        }),
                        (0, r.jsx)(F.pK, {}),
                    ],
                }),
            eg &&
                (0, r.jsx)("div", {
                    className: J.Ni,
                    children: (0, r.jsx)(_.wx6, {
                        type: "info",
                        children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, R.Nn)() }),
                    }),
                }),
            (0, r.jsx)(_.D0$, { label: t, children: eG }),
            (0, r.jsx)("div", { className: J.LC, children: eW }),
            (0, r.jsx)(f.f, { currencies: et, className: J.p2, children: (0, r.jsx)(f.A, { ...ej }) }),
            eK,
        ],
    });
}
function en(e) {
    let {
            premiumSubscription: t,
            onInvoiceError: n,
            priceOptions: s,
            preventFetch: a,
            shouldUseUnifiedCheckoutUI: o,
            unifiedSubscriptionDetailsNode: l,
        } = e,
        { setInvoicePreview: u } = (0, v.P5)(),
        [c, d] = (0, G.C8)({ subscriptionId: t.id, preventFetch: a });
    i.useEffect(() => {
        u(c);
    }, [u, c]),
        i.useEffect(() => {
            n(d);
        }, [n, d]);
    let _ = (0, k.J$)(s.paymentSourceId);
    if (null != c) {
        let e = (0, r.jsx)(Y.m0, {
                premiumSubscription: t,
                renewalInvoice: c,
                isUpdate: !0,
                isPrepaidPaymentSource: _,
                shouldUseUnifiedCheckoutUI: o,
            }),
            n = (0, r.jsx)(Y._J, { invoice: c, isPrepaidPaymentSource: _, shouldUseUnifiedCheckoutUI: o });
        return o
            ? (0, r.jsxs)(r.Fragment, { children: [n, (0, r.jsx)(ee, { containerNode: l.current, children: e })] })
            : (0, r.jsxs)(F.Yx, { className: Q.__invalid_invoice, children: [n, e] });
    }
    return (0, r.jsx)(es, { shouldUseUnifiedCheckoutUI: o });
}
function er(e) {
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
        } = (0, v.P5)(),
        { isGift: I } = (0, y.Pv)(),
        { analyticsLocations: T } = (0, g.Ay)(),
        S = (0, k.Pg)(n, s.id, 1, new Set(l)),
        {
            proratedInvoicePreview: N,
            proratedInvoiceError: b,
            renewalInvoicePreview: R,
            renewalInvoiceError: D,
        } = el({ premiumSubscription: n, newItems: S, priceOptions: u, preventFetch: d, analyticsLocations: T });
    i.useEffect(() => {
        E(N);
    }, [E, N]);
    let L = b ?? D;
    if (
        (i.useEffect(() => {
            o(L);
        }, [o, L]),
        null != L)
    )
        return (0, r.jsx)(_.wx6, { type: "critical", children: L.message });
    let w = (0, C.vT)({ isTrial: !1, isGift: I, selectedSkuId: h, startedPaymentFlowWithPaymentSources: m.current }),
        x = (0, C.UB)(w, N, s);
    if (
        (null !== c && null !== N && (t = (0, k._e)(N.subscriptionPeriodEnd, c.unactivatedUnits, c.endsAt)),
        null == N || null == R || x)
    )
        return (0, r.jsx)(es, { shouldUseUnifiedCheckoutUI: p });
    let M = (0, k.J$)(u.paymentSourceId),
        P = (0, r.jsx)(Y.m0, {
            premiumSubscription: n,
            proratedInvoice: N,
            renewalInvoice: R,
            overrideRenewalDate: t,
            isUpdate: !0,
            isPrepaidPaymentSource: M,
            shouldUseUnifiedCheckoutUI: p,
        });
    return p
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(O.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: W.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: N,
                          renewalInvoicePreview: R,
                      },
                      subscriptionPlan: s,
                      isPrepaidPaymentSource: M,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(ee, { containerNode: f.current, children: P }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Y.wP, { proratedInvoice: N, renewalInvoice: R, overrideRenewalDate: t }),
                  (0, r.jsxs)(F.Yx, {
                      className: a()(J.SU, A),
                      children: [
                          (0, r.jsx)(F.Xd, { children: X.intl.string(X.t["2eh+Co"]) }),
                          (0, r.jsx)(Y.mT, { invoice: N, newPlan: s, isPrepaidPaymentSource: M }),
                          P,
                      ],
                  }),
              ],
          });
}
function ei(e) {
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
        A = (0, k.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: T,
            renewalInvoicePreview: S,
            renewalInvoiceError: y,
        } = el({ premiumSubscription: n, newItems: A, priceOptions: l, preventFetch: u, analyticsLocations: E }),
        v = (0, L.g)(f, l.paymentSourceId),
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
                showPricingLink: s.currency !== $.Yri.USD,
                showWithdrawalWaiver: d,
                disabled: c,
                subscriptionPlan: s,
                currentSubscription: n,
                planGroup: o,
            });
}
let es = (e) => {
    let { shouldUseUnifiedCheckoutUI: t } = e;
    return t
        ? (0, r.jsx)("div", { className: Q.l, children: (0, r.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS }) })
        : (0, r.jsx)(_.y$y, {});
};
function ea(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            onInvoiceError: o,
            shouldUseUnifiedCheckoutUI: l,
            unifiedSubscriptionDetailsNode: u,
        } = e,
        { setInvoicePreview: c, premiumBrandRefreshBackgroundClassName: d } = (0, v.P5)(),
        { analyticsLocations: f } = (0, g.Ay)(),
        [p, h] = (0, G.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            preventFetch: s,
            analyticsLocations: f,
            analyticsLocation: E.A.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW,
        }),
        [m, A] = (0, G.Kq)({
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
    if (null == p || null == m) return (0, r.jsx)(es, { shouldUseUnifiedCheckoutUI: l });
    let T = (0, k.J$)(n.paymentSourceId),
        S = (0, r.jsx)(Y.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: T,
            shouldUseUnifiedCheckoutUI: l,
        }),
        y = (0, r.jsx)("div", { className: Q.o, children: X.intl.string(X.t.spIYou) }),
        N = (0, r.jsx)(Y._J, { invoice: p, isPrepaidPaymentSource: T, shouldUseUnifiedCheckoutUI: l });
    return l
        ? (0, r.jsxs)(r.Fragment, { children: [N, (0, r.jsxs)(ee, { containerNode: u.current, children: [y, S] })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  y,
                  (0, r.jsxs)(F.Yx, {
                      className: a()(J.SU, d),
                      children: [(0, r.jsx)(F.Xd, { children: X.intl.string(X.t["2eh+Co"]) }), N, S],
                  }),
              ],
          });
}
function eo(e) {
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
        { setInvoicePreview: f, premiumBrandRefreshBackgroundClassName: p } = (0, v.P5)(),
        { analyticsLocations: h } = (0, g.Ay)(),
        [m, E] = (0, G.Kq)({
            subscriptionId: n.id,
            items: (0, k.Pg)(n, s.id, 1, new Set(o)),
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
    if (null == m) return (0, r.jsx)("div", { children: (0, r.jsx)(es, { shouldUseUnifiedCheckoutUI: d }) });
    t = n.type === $.rzx.PREMIUM ? (0, k.Mn)(s.id) : s.name;
    let A = (0, k.J$)(u.paymentSourceId),
        I = m.subscriptionPeriodStart;
    l.fractionalState === K.xc.FP_SUB_PAUSED && (I = l.endsAt.toDate());
    let T = (0, r.jsx)("div", { className: Q.o, children: X.intl.format(X.t["+y0Tjy"], { renewalDate: I }) }),
        S = (0, r.jsx)(Y.m0, {
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
              className: J.G3,
              children: [
                  T,
                  (0, r.jsxs)(F.Yx, {
                      className: a()(J.SU, p),
                      children: [
                          (0, r.jsx)(F.Xd, { children: X.intl.string(X.t.iqhIp4) }),
                          (0, r.jsx)(F.oR, { label: t, value: (0, k.jh)(s, u, !0) }),
                          (0, r.jsx)(V.A, { invoice: m }),
                          (0, r.jsx)(F.pK, {}),
                          S,
                      ],
                  }),
              ],
          });
}
let el = (e) => {
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
        [o, l] = (0, G.Kq)({ ...a, renewal: !1, applyEntitlements: !0 }),
        [u, c] = (0, G.Kq)({ ...a, renewal: !0 });
    return { proratedInvoicePreview: o, proratedInvoiceError: l, renewalInvoicePreview: u, renewalInvoiceError: c };
};
