"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(997101),
    c = n(311907),
    d = n(397927),
    _ = n(821189),
    f = n(821891),
    p = n(953689),
    h = n(61572),
    m = n(93159),
    E = n(94420),
    g = n(937008),
    A = n(156312),
    I = n(566980),
    T = n(800471),
    S = n(104745),
    y = n(222707),
    v = n(340034),
    N = n(216641),
    C = n(615405),
    R = n(97352),
    O = n(79387),
    b = n(927578),
    D = n(615396),
    L = n(735164),
    w = n(778307),
    M = n(218075),
    P = n(446929),
    x = n(299301),
    k = n(841247),
    U = n(422268),
    G = n(88001),
    F = n(652215),
    V = n(466919),
    B = n(985018),
    H = n(814304);
function j(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceAdd: j,
            planId: Y,
            setHasAcceptedTerms: W,
            legalTermsNodeRef: K,
            hasLegalTermsFlash: $,
            onInvoiceError: z,
            invoiceError: q,
            planGroup: Z,
            currencies: X,
            onCurrencyChange: Q,
            hasOpenInvoice: J,
            purchaseState: ee,
            handleClose: et,
            shouldUseUnifiedCheckoutUI: en,
        } = e,
        er = (0, E.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: ei,
            isPremium: es,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            hasPaymentSources: eo,
            enablePremiumBrandRefresh: el,
            isPremiumGroupPurchase: eu,
            displayCurrency: ec,
        } = (0, A.P5)(),
        ed = (0, E.sw)(),
        { isGift: e_ } = (0, g.Pv)(),
        ef = o.paymentSourceId,
        ep = (0, N.g)(s, ef),
        eh = i.useMemo(() => (0, b.l6)(o, ed?.checkoutContext?.available_plans), [ed, o]),
        em = (0, c.bG)([R.A], () => R.A.get(Y));
    l()(null != em, "Missing newPlan");
    let { showFractionalPremiumBanner: eE, fractionalPremiumInfo: eg } = (0, y._V)({
            premiumSubscription: n,
            selectedPlanId: Y,
            planGroup: Z,
            isGift: e_,
        }),
        [eA, eI] = i.useState(null),
        eT = u.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        eS = ee === I.h.PURCHASING || ee === I.h.COMPLETED,
        ey = (0, T.vT)({
            isTrial: !1,
            isGift: e_,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: ea.current,
        }),
        ev = n?.isPausedAllowsResumeButNotUpdates,
        eN = i.useMemo(() => (0, b.Tm)({ skuId: er, isPremium: es, defaultPlanId: ei }), [er, ei, es]);
    t =
        J || ev
            ? B.intl.string(B.t.nyzoFb)
            : eu
              ? B.intl.formatToPlainString(V.default["3m9DJK"], { premiumGroupProductName: (0, G.DP)() })
              : (0, b.ys)(Y)
                ? (0, b.ff)(n, em)
                : B.intl.formatToPlainString(B.t["sBpy9/"], { planName: em.name });
    let eC = i.useRef(null),
        [eR, eO] = i.useState(null),
        [eb, eD] = i.useState(void 0),
        eL = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: en,
                unifiedSubscriptionDetailsNode: eC,
                setUnifiedPlainNoticeText: eO,
                setOverrideRenewalDate: eD,
            }),
            [en],
        ),
        {
            content: ew,
            isInvoiceBilledImmediately: eM,
            ...eP
        } = null != n
            ? (0, k.TD)(
                  { hasOpenInvoice: J, showResumeSubscriptionView: ev, planId: Y },
                  {
                      disabled: eS,
                      premiumSubscription: n,
                      newPlan: em,
                      planGroup: Z,
                      fractionalPremiumInfo: eg,
                      priceOptions: o,
                      onInvoiceError: z,
                      onRenewalInvoicePreview: eI,
                  },
                  eL,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ex = n?.eligiblePaymentGateways,
        ek = null != ex && ex.length > 0 && (ef === O.B || null === ep) && eo ? M.fU.SELECT_PAYMENT_METHOD : void 0,
        eU = i.useMemo(
            () => ({
                label: B.intl.string(B.t["/AAR02"]),
                selectedCurrency: o.currency ?? ec,
                currencies: X,
                onChange: Q,
                disabled: eS,
            }),
            [X, Q, o, ec, eS],
        ),
        eG = i.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [H.E4]: el }),
                shouldUseUnifiedCheckoutUI: en,
            }),
            [n?.eligiblePaymentGateways, el, en],
        ),
        eF = (0, r.jsx)(h.N, {
            label: B.intl.string(B.t["mmDvV+"]),
            onPaymentSourceAdd: j,
            disabled: eS,
            additionalPaymentSourceDropdownProps: eG,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: o.paymentSourceId,
        }),
        eV = null != n && (0, D.Ge)(n, Y, Z),
        eB = eV && null != q,
        eH = en
            ? null != ed && null != eA
                ? (0, r.jsx)(v.PI, {
                      overrideRenewalDate: eb,
                      planGroup: Z,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: em,
                      isGift: e_,
                      paymentSourceType: ep,
                      isInvoiceBilledImmediately: eM,
                      invoiceSummaryTypeWithPreview: {
                          type: x.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ed,
                          renewalInvoicePreview: eA,
                      },
                      hideLegalContent: eB,
                  })
                : null
            : (0, r.jsx)(w.A, {
                  isActive: $,
                  ref: K,
                  children: eV
                      ? (0, r.jsx)(k.vi, {
                            premiumSubscription: n,
                            newPlan: em,
                            onInvoiceError: z,
                            planGroup: Z,
                            priceOptions: o,
                            preventFetch: eS,
                            disabled: eS,
                            isEEA: eT,
                            paymentSources: s,
                            setHasAcceptedTerms: W,
                            onRenewalInvoicePreview: eI,
                        })
                      : (0, r.jsx)(p.A, {
                            onChange: W,
                            finePrint: (0, r.jsx)(f.A, {
                                subscriptionPlan: em,
                                paymentSourceType: ep,
                                basePrice: (0, b.y8)(em.id, !1, e_, eh),
                                currentSubscription: n,
                                planGroup: Z,
                            }),
                            forceShow: !0,
                            showPricingLink: em.currency !== F.Yri.USD,
                            showWithdrawalWaiver: eT,
                            disabled: eS,
                            subscriptionPlan: em,
                            currentSubscription: n,
                            planGroup: Z,
                        }),
              }),
        ej = !ev && ey && !eu,
        eY = i.useMemo(() => (ej ? (0, r.jsx)(S.P, { planSkuId: em.skuId }) : null), [ej, em.skuId]);
    return en
        ? (0, r.jsx)(U.n, {
              disabled: eS,
              showFractionalPremiumBanner: eE,
              fractionalPremiumInfo: eg,
              isPremiumGroupPurchase: eu,
              paymentRestrictionBannerType: ek,
              invoiceError: q,
              unifiedPlainNoticeText: eR,
              invoicePreview: ed,
              invoicePreviewComponent: ew,
              shouldShowPlanSelectAndPromoBanner: ej,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eP.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: em,
              planId: Y,
              priceOptions: o,
              premiumPlanOptions: eN,
              unifiedSubscriptionDetailsNode: eC,
              isInvoiceBilledImmediately: eM,
              paymentSelectContent: eF,
              currencySelectComponent: (0, r.jsx)(m.qX, { ...eU }),
              legalContent: eH,
          })
        : (0, r.jsxs)("div", {
              className: H.Du,
              children: [
                  (0, r.jsx)(M.je, { paymentRestrictionBannerType: ek }),
                  ej &&
                      (0, r.jsxs)("div", {
                          children: [
                              eY,
                              (0, r.jsx)(P.$p, {
                                  disabled: eS,
                                  planOptions: eN,
                                  selectedPlanId: Y,
                                  planGroup: Z,
                                  showTotal: !1,
                                  priceOptions: eh,
                                  handleClose: et,
                              }),
                              (0, r.jsx)(L.pK, {}),
                          ],
                      }),
                  eu &&
                      (0, r.jsx)("div", {
                          className: H.Ni,
                          children: (0, r.jsx)(d.wx6, {
                              type: "info",
                              children: (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: (0, y.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(d.D0$, { label: t, children: ew }),
                  (0, r.jsx)("div", { className: H.LC, children: eF }),
                  (0, r.jsx)(_.f, { currencies: X, className: H.p2, children: (0, r.jsx)(_.A, { ...eU }) }),
                  eH,
              ],
          });
}
