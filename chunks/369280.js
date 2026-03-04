"use strict";
n.d(t, { A: () => ee }), n(321073);
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
    A = n(69882),
    I = n(93159),
    T = n(826469),
    S = n(937008),
    y = n(156312),
    v = n(566980),
    N = n(800471),
    C = n(104745),
    R = n(222707),
    O = n(340034),
    b = n(888751),
    D = n(216641),
    L = n(351906),
    w = n(615405),
    M = n(97352),
    x = n(79387),
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
    $ = n(652215),
    z = n(519412),
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
            invoiceError: J,
            planGroup: ee,
            currencies: en,
            onCurrencyChange: er,
            hasOpenInvoice: ea,
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
        } = (0, y.P5)(),
        { isGift: eT } = (0, S.Pv)(),
        eS = o.paymentSourceId,
        ey = (0, D.g)(s, eS),
        ev = (0, d.bG)([M.A], () => M.A.get(g));
    l()(null != ev, "Missing newPlan");
    let eN = (0, d.bG)([L.A], () => L.A.hidePersonalInformation),
        { showFractionalPremiumBanner: eC, fractionalPremiumInfo: eR } = (0, R._V)({
            premiumSubscription: n,
            selectedPlanId: g,
            planGroup: ee,
            isGift: eT,
        }),
        eO = i.useMemo(() => {
            let e = eA?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(T.A.createFromCheckoutContext);
        }, [eA?.checkoutContext]),
        eb = i.useRef(!1);
    i.useEffect(() => {
        if (eO.length > 0 && !eb.current) {
            eb.current = !0;
            let e = eO.find((e) => e.id === o.paymentSourceId);
            if (null != e && !e.enabled) {
                let e = eO.find((e) => e.enabled) ?? null;
                eI(null != e ? e.id : null);
            }
        }
    }, [eO, eI, o.paymentSourceId]);
    let eD = eO.length > 0 ? eO : Object.values(s),
        eL = eO.find((e) => e.isDefault)?.id,
        ew = c.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback),
        eM = eu === v.h.PURCHASING || eu === v.h.COMPLETED,
        ex = (0, N.vT)({
            isTrial: !1,
            isGift: eT,
            selectedSkuId: e_,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        eP = n?.isPausedAllowsResumeButNotUpdates,
        ek = i.useMemo(
            () =>
                (0, P.Tm)({ skuId: e_, isPremium: ep, multiMonthPlans: [], currentSubscription: n, defaultPlanId: ef }),
            [e_, n, ef, ep],
        );
    t =
        ea || eP
            ? q.intl.string(q.t.nyzoFb)
            : eg
              ? q.intl.formatToPlainString(z.default["3m9DJK"], { premiumGroupProductName: (0, K.DP)() })
              : (0, P.ys)(g)
                ? (0, P.ff)(n, ev)
                : q.intl.formatToPlainString(q.t["sBpy9/"], { planName: ev.name });
    let eU = i.useRef(null),
        eG = null,
        eF = !0,
        eV = !1,
        [eB, eH] = i.useState(null),
        ej = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: ed,
                unifiedSubscriptionDetailsNode: eU,
                setUnifiedPlainNoticeText: eH,
            }),
            [ed],
        );
    null != n &&
        (ea
            ? (eG = (0, r.jsx)(et, {
                  premiumSubscription: n,
                  onInvoiceError: X,
                  priceOptions: o,
                  preventFetch: !1,
                  ...ej,
              }))
            : eP
              ? (eG = (0, r.jsx)(eo, {
                    premiumSubscription: n,
                    onInvoiceError: X,
                    priceOptions: o,
                    preventFetch: eM,
                    ...ej,
                }))
              : (0, k.Ge)(n, g, ee)
                ? (eG = (0, r.jsx)(ei, {
                      premiumSubscription: n,
                      newPlan: ev,
                      onInvoiceError: X,
                      planGroup: ee,
                      priceOptions: o,
                      fractionalPremiumInfo: eR,
                      preventFetch: eM,
                      ...ej,
                  }))
                : ((eF = !1),
                  (eV = !0),
                  (eG = (0, r.jsx)(el, {
                      premiumSubscription: n,
                      newPlan: ev,
                      planGroup: ee,
                      fractionalPremiumInfo: eR,
                      priceOptions: o,
                      preventFetch: eM,
                      onInvoiceError: X,
                      ...ej,
                  }))));
    let eY = n?.eligiblePaymentGateways,
        eW = null != eY && eY.length > 0 && (eS === x.B || null === ey) && em ? B.fU.SELECT_PAYMENT_METHOD : void 0,
        eK = i.useMemo(
            () => ({
                label: q.intl.string(q.t["/AAR02"]),
                selectedCurrency: o.currency,
                currencies: en,
                onChange: er,
                disabled: eM,
            }),
            [en, er, o, eM],
        ),
        e$ = i.useMemo(() => (0, r.jsx)(O.rk, { ...eK }), [eK]),
        ez = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    label: q.intl.string(q.t["mmDvV+"]),
                    paymentSources: eD,
                    selectedPaymentSourceId: eS,
                    defaultPaymentSourceId: eL,
                    onChange: u,
                    onPaymentSourceAdd: E,
                    hidePersonalInformation: eN,
                    disabled: eM,
                    paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                    className: a()({ [Q.E4]: eE }),
                    shouldUseUnifiedCheckoutUI: ed,
                }),
                ed ? e$ : null,
            ],
        }),
        eq = (0, r.jsx)(V.A, {
            isActive: W,
            ref: F,
            children:
                null != n && (0, k.Ge)(n, g, ee)
                    ? (0, r.jsx)(es, {
                          premiumSubscription: n,
                          newPlan: ev,
                          onInvoiceError: X,
                          planGroup: ee,
                          priceOptions: o,
                          preventFetch: eM,
                          disabled: eM,
                          isEEA: ew,
                          paymentSources: s,
                          setHasAcceptedTerms: U,
                          shouldUseUnifiedCheckoutUI: ed,
                      })
                    : (0, r.jsx)(m.A, {
                          onChange: U,
                          finePrint: (0, r.jsx)(p.A, {
                              subscriptionPlan: ev,
                              paymentSourceType: ey,
                              basePrice: (0, P.y8)(ev.id, !1, eT, o),
                              currentSubscription: n,
                              planGroup: ee,
                          }),
                          forceShow: !0,
                          showPricingLink: ev.currency !== $.Yri.USD,
                          showWithdrawalWaiver: ew,
                          disabled: eM,
                          subscriptionPlan: ev,
                          currentSubscription: n,
                          planGroup: ee,
                      }),
        }),
        eZ = !eP && ex && !eg,
        eX = i.useMemo(() => {
            let e = [];
            return (
                eC &&
                    e.push({
                        directContent: (0, r.jsx)(O.l$, { fractionalPremiumInfo: eR }),
                        key: "fractional-premium-notice",
                    }),
                eg && e.push({ type: "info", message: (0, R.Nn)(), key: "premium-group-purchase-notice" }),
                null != eW &&
                    e.push({ type: "warning", message: (0, B.i)(eW), key: "payment-restriction-banner-notice" }),
                null != J && e.push({ type: "critical", message: J.message, key: "invoice-error-notice" }),
                e
            );
        }, [eg, eW, J, eC, eR]),
        eQ = i.useMemo(() => (eZ ? (0, r.jsx)(C.P, { planSkuId: ev.skuId }) : null), [eZ, ev.skuId]);
    if (ed) {
        let e = (0, P.J$)(o.paymentSourceId),
            t = null,
            n = null;
        if (eZ)
            n = (0, r.jsx)(O.XH, {
                headingSubText: eB,
                planOptions: ek,
                eligibleForMultiMonthPlans: !1,
                selectedPlanId: g,
                showSecondarySubTexts: !0,
            });
        else if (null != eA) {
            let n = (0, b.BZ)({ type: Y.N$.PREMIUM_SWITCH_PLAN, invoicePreview: eA }, ev, {
                isPrepaidPaymentSource: e,
                isPremiumGroupPurchase: eg,
            });
            t = (0, r.jsx)(I.f7, { ...n, bottomSubText: eB });
        }
        return (0, r.jsx)(A.rg, {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eX,
            paymentSelectContent: ez,
            subscriptionDetailsContent: eV ? eG : (0, r.jsx)("div", { ref: eU }),
            purchaseItemContent: t,
            planSelectContent: n,
            invoiceSummaryContent: eV ? null : eG,
            legalContent: eq,
            invoiceTotalDueLabel: eF ? q.intl.string(Z.default.R0cZsM) : q.intl.string(Z.default["11g67A"]),
            invoiceTotalDueValue: null != eA ? (0, j.U5)(eA) : void 0,
            promotionalNoticeContent: eQ,
        });
    }
    return (0, r.jsxs)("div", {
        className: Q.Du,
        children: [
            (0, r.jsx)(B.je, { paymentRestrictionBannerType: eW }),
            eZ &&
                (0, r.jsxs)("div", {
                    children: [
                        eQ,
                        (0, r.jsx)(H.$p, {
                            planOptions: ek,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: g,
                            planGroup: ee,
                            showTotal: !1,
                            handleClose: ec,
                        }),
                        (0, r.jsx)(G.pK, {}),
                    ],
                }),
            eg &&
                (0, r.jsx)("div", {
                    className: Q.Ni,
                    children: (0, r.jsx)(_.wx6, {
                        type: "info",
                        children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, R.Nn)() }),
                    }),
                }),
            (0, r.jsx)(_.D0$, { label: t, children: eG }),
            (0, r.jsx)("div", { className: Q.LC, children: ez }),
            (0, r.jsx)(f.f, { currencies: en, className: Q.p2, children: (0, r.jsx)(f.A, { ...eK }) }),
            eq,
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
    return (0, r.jsx)(ea, { shouldUseUnifiedCheckoutUI: o });
}
let en = (e, t) => (null == e || t ? null : (0, r.jsx)(_.wx6, { type: "critical", children: e.message })),
    er = (e, t) => {
        let { shouldUseUnifiedCheckoutUI: n, noticeCopy: r } = t;
        i.useEffect(() => {
            n && (null != r ? e(r) : e(null));
        }, [e, n, r]);
    };
function ei(e) {
    let {
            premiumSubscription: t,
            newPlan: n,
            onInvoiceError: s,
            planGroup: o,
            priceOptions: l,
            fractionalPremiumInfo: u,
            preventFetch: c,
            unifiedSubscriptionDetailsNode: d,
            setUnifiedPlainNoticeText: _,
            shouldUseUnifiedCheckoutUI: f,
        } = e,
        {
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSourcesRef: h,
            setInvoicePreview: m,
            premiumBrandRefreshBackgroundClassName: E,
        } = (0, y.P5)(),
        { isGift: A } = (0, S.Pv)(),
        { analyticsLocations: I } = (0, g.Ay)(),
        T = (0, P.Pg)(t, n.id, 1, new Set(o)),
        {
            proratedInvoicePreview: v,
            proratedInvoiceError: C,
            renewalInvoicePreview: R,
            renewalInvoiceError: b,
        } = eu({ premiumSubscription: t, newItems: T, priceOptions: l, preventFetch: c, analyticsLocations: I });
    i.useEffect(() => {
        m(v);
    }, [m, v]);
    let D = C ?? b;
    i.useEffect(() => {
        s(D);
    }, [s, D]);
    let { planSwitchNoticeCopy: L, overrideRenewalDate: w } = i.useMemo(() => {
        let e;
        return (null !== u && null !== v && (e = (0, P._e)(v.subscriptionPeriodEnd, u.unactivatedUnits, u.endsAt)),
        null != v && null != R)
            ? {
                  overrideRenewalDate: e,
                  planSwitchNoticeCopy: (0, j.DK)({ proratedInvoice: v, renewalInvoice: R, overrideRenewalDate: e }),
              }
            : { overrideRenewalDate: e, planSwitchNoticeCopy: null };
    }, [v, R, u]);
    if ((er(_, { shouldUseUnifiedCheckoutUI: f, noticeCopy: L }), null != D)) return en(D, f);
    let M = (0, N.vT)({ isTrial: !1, isGift: A, selectedSkuId: p, startedPaymentFlowWithPaymentSources: h.current }),
        x = (0, N.UB)(M, v, n);
    if (null == v || null == R || x) return (0, r.jsx)(ea, { shouldUseUnifiedCheckoutUI: f });
    let k = (0, P.J$)(l.paymentSourceId),
        U = (0, r.jsx)(j.m0, {
            premiumSubscription: t,
            proratedInvoice: v,
            renewalInvoice: R,
            overrideRenewalDate: w,
            isUpdate: !0,
            isPrepaidPaymentSource: k,
            shouldUseUnifiedCheckoutUI: f,
        });
    return f
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(O.W9, {
                      invoiceSummaryTypeWithPreview: {
                          type: Y.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: v,
                          renewalInvoicePreview: R,
                      },
                      subscriptionPlan: n,
                      isPrepaidPaymentSource: k,
                      subscriptionTrial: null,
                  }),
                  (0, r.jsx)(J, { containerNode: d.current, children: U }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(j.wP, { proratedInvoice: v, renewalInvoice: R, overrideRenewalDate: w }),
                  (0, r.jsxs)(G.Yx, {
                      className: a()(Q.SU, E),
                      children: [
                          (0, r.jsx)(G.Xd, { children: q.intl.string(q.t["2eh+Co"]) }),
                          (0, r.jsx)(j.mT, { invoice: v, newPlan: n, isPrepaidPaymentSource: k }),
                          U,
                      ],
                  }),
              ],
          });
}
function es(e) {
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
            paymentSources: _,
            setHasAcceptedTerms: f,
            shouldUseUnifiedCheckoutUI: h,
        } = e,
        { analyticsLocations: E } = (0, g.Ay)(),
        A = (0, P.Pg)(n, s.id, 1, new Set(o)),
        {
            proratedInvoicePreview: I,
            proratedInvoiceError: T,
            renewalInvoicePreview: S,
            renewalInvoiceError: y,
        } = eu({ premiumSubscription: n, newItems: A, priceOptions: l, preventFetch: u, analyticsLocations: E }),
        v = (0, D.g)(_, l.paymentSourceId),
        N = y ?? T;
    return (i.useEffect(() => {
        a(N);
    }, [a, N]),
    null != N)
        ? en(N, h)
        : (null != S && (t = { amount: S.subtotal, currency: S.currency, tax: S.tax, taxInclusive: S.taxInclusive }),
            null == t)
          ? null
          : (0, r.jsx)(m.A, {
                onChange: f,
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
let ea = (e) => {
    let { shouldUseUnifiedCheckoutUI: t } = e;
    return t
        ? (0, r.jsx)("div", { className: X.l, children: (0, r.jsx)(_.y$y, { type: _.y$y.Type.PULSING_ELLIPSIS }) })
        : (0, r.jsx)(_.y$y, {});
};
function eo(e) {
    let {
            premiumSubscription: t,
            priceOptions: n,
            preventFetch: s,
            onInvoiceError: o,
            shouldUseUnifiedCheckoutUI: l,
            unifiedSubscriptionDetailsNode: u,
            setUnifiedPlainNoticeText: c,
        } = e,
        { setInvoicePreview: d, premiumBrandRefreshBackgroundClassName: _ } = (0, y.P5)(),
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
        d(p);
    }, [d, p]);
    let I = h ?? A;
    i.useEffect(() => {
        o(I);
    }, [o, I]);
    let T = i.useMemo(() => q.intl.string(q.t.spIYou), []);
    if ((er(c, { shouldUseUnifiedCheckoutUI: l, noticeCopy: T }), null != I)) return en(I, l);
    if (null == p || null == m) return (0, r.jsx)(ea, { shouldUseUnifiedCheckoutUI: l });
    let S = (0, P.J$)(n.paymentSourceId),
        v = (0, r.jsx)(j.m0, {
            premiumSubscription: t,
            renewalInvoice: m,
            isUpdate: !0,
            isPrepaidPaymentSource: S,
            shouldUseUnifiedCheckoutUI: l,
        }),
        N = (0, r.jsx)("div", { className: X.o, children: T }),
        C = (0, r.jsx)(j._J, { invoice: p, isPrepaidPaymentSource: S, shouldUseUnifiedCheckoutUI: l });
    return l
        ? (0, r.jsxs)(r.Fragment, { children: [C, (0, r.jsx)(J, { containerNode: u.current, children: v })] })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  N,
                  (0, r.jsxs)(G.Yx, {
                      className: a()(Q.SU, _),
                      children: [(0, r.jsx)(G.Xd, { children: q.intl.string(q.t["2eh+Co"]) }), C, v],
                  }),
              ],
          });
}
function el(e) {
    let t,
        {
            premiumSubscription: n,
            newPlan: s,
            planGroup: o,
            fractionalPremiumInfo: l,
            priceOptions: u,
            preventFetch: c,
            onInvoiceError: d,
            shouldUseUnifiedCheckoutUI: _,
            setUnifiedPlainNoticeText: f,
        } = e,
        { setInvoicePreview: p, premiumBrandRefreshBackgroundClassName: h } = (0, y.P5)(),
        { analyticsLocations: m } = (0, g.Ay)(),
        [E, A] = (0, U.Kq)({
            subscriptionId: n.id,
            items: (0, P.Pg)(n, s.id, 1, new Set(o)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: c,
            analyticsLocations: m,
            analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview",
        });
    i.useEffect(() => {
        p(E);
    }, [p, E]),
        i.useEffect(() => {
            d(A);
        }, [d, A]);
    let { renewalDate: I, planSwitchNoticeCopy: T } = i.useMemo(() => {
        if (null == E) return { renewalDate: void 0, planSwitchNoticeCopy: null };
        let e = E.subscriptionPeriodStart;
        return (
            l.fractionalState === W.xc.FP_SUB_PAUSED && (e = l.endsAt.toDate()),
            { renewalDate: e, planSwitchNoticeCopy: q.intl.format(q.t["+y0Tjy"], { renewalDate: e }) }
        );
    }, [E, l.fractionalState, l.endsAt]);
    if ((er(f, { shouldUseUnifiedCheckoutUI: _, noticeCopy: T }), null != A)) return en(A, _);
    if (null == E) return (0, r.jsx)("div", { children: (0, r.jsx)(ea, { shouldUseUnifiedCheckoutUI: _ }) });
    t = n.type === $.rzx.PREMIUM ? (0, P.Mn)(s.id) : s.name;
    let S = (0, P.J$)(u.paymentSourceId),
        v = (0, r.jsx)("div", { className: X.o, children: T }),
        N = (0, r.jsx)(j.m0, {
            premiumSubscription: n,
            renewalInvoice: E,
            isUpdate: !0,
            isPrepaidPaymentSource: S,
            shouldUseUnifiedCheckoutUI: _,
            unifiedCheckoutDefaultExpanded: !0,
            overrideRenewalDate: I,
        });
    return _
        ? N
        : (0, r.jsxs)("div", {
              className: Q.G3,
              children: [
                  v,
                  (0, r.jsxs)(G.Yx, {
                      className: a()(Q.SU, h),
                      children: [
                          (0, r.jsx)(G.Xd, { children: q.intl.string(q.t.iqhIp4) }),
                          (0, r.jsx)(G.oR, { label: t, value: (0, P.jh)(s, u, !0) }),
                          (0, r.jsx)(F.A, { invoice: E }),
                          (0, r.jsx)(G.pK, {}),
                          N,
                      ],
                  }),
              ],
          });
}
let eu = (e) => {
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
