"use strict";
n.d(t, { A: () => W });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(997101),
    c = n(311907),
    d = n(683071),
    _ = n(834730),
    f = n(452027),
    p = n(821189),
    h = n(821891),
    E = n(953689),
    m = n(61572),
    g = n(93159),
    A = n(94420),
    I = n(937008),
    T = n(156312),
    S = n(566980),
    y = n(800471),
    N = n(104745),
    v = n(222707),
    C = n(340034),
    O = n(216641),
    R = n(615405),
    b = n(97352),
    D = n(79387),
    L = n(927578),
    w = n(615396),
    M = n(735164),
    P = n(778307),
    x = n(218075),
    k = n(446929),
    U = n(299301),
    G = n(841247),
    F = n(422268),
    V = n(88001),
    B = n(652215),
    H = n(466919),
    j = n(985018),
    Y = n(814304);
function W(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceAdd: W,
            planId: K,
            setHasAcceptedTerms: $,
            legalTermsNodeRef: z,
            hasLegalTermsFlash: q,
            onInvoiceError: X,
            invoiceError: Q,
            planGroup: Z,
            currencies: J,
            onCurrencyChange: ee,
            hasOpenInvoice: et,
            purchaseState: en,
            handleClose: er,
            shouldUseUnifiedCheckoutUI: ei,
        } = e,
        es = (0, A.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: ea,
            isPremium: eo,
            startedPaymentFlowWithPaymentSourcesRef: el,
            hasPaymentSources: eu,
            enablePremiumBrandRefresh: ec,
            isPremiumGroupPurchase: ed,
            paymentSourceId: e_,
            displayCurrency: ef,
        } = (0, T.P5)(),
        ep = (0, A.sw)(),
        { isGift: eh } = (0, I.Pv)(),
        eE = (0, O.g)(s, e_),
        em = i.useMemo(() => (0, L.l6)(o, ep?.checkoutContext?.available_plans), [ep, o]),
        eg = (0, c.bG)([b.A], () => b.A.get(K));
    l()(null != eg, "Missing newPlan");
    let { showFractionalPremiumBanner: eA, fractionalPremiumInfo: eI } = (0, v._V)({
            premiumSubscription: n,
            selectedPlanId: K,
            planGroup: Z,
            isGift: eh,
        }),
        [eT, eS] = i.useState(null),
        ey = u.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
        eN = en === S.h.PURCHASING || en === S.h.COMPLETED,
        ev = (0, y.vT)({
            isTrial: !1,
            isGift: eh,
            selectedSkuId: es,
            startedPaymentFlowWithPaymentSources: el.current,
        }),
        eC = n?.isPausedAllowsResumeButNotUpdates,
        eO = i.useMemo(() => (0, L.Tm)({ skuId: es, isPremium: eo, defaultPlanId: ea }), [es, ea, eo]);
    t =
        et || eC
            ? j.intl.string(j.t.nyzoFb)
            : ed
              ? j.intl.formatToPlainString(H.default["3m9DJK"], { premiumGroupProductName: (0, V.DP)() })
              : (0, L.ys)(K)
                ? (0, L.ff)(n, eg)
                : j.intl.formatToPlainString(j.t["sBpy9/"], { planName: eg.name });
    let eR = i.useRef(null),
        [eb, eD] = i.useState(null),
        [eL, ew] = i.useState(void 0),
        eM = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: ei,
                unifiedSubscriptionDetailsNode: eR,
                setUnifiedPlainNoticeText: eD,
                setOverrideRenewalDate: ew,
            }),
            [ei],
        ),
        {
            content: eP,
            isInvoiceBilledImmediately: ex,
            ...ek
        } = null != n
            ? (0, G.TD)(
                  { hasOpenInvoice: et, showResumeSubscriptionView: eC, planId: K },
                  {
                      disabled: eN,
                      premiumSubscription: n,
                      newPlan: eg,
                      planGroup: Z,
                      fractionalPremiumInfo: eI,
                      priceOptions: o,
                      onInvoiceError: X,
                      onRenewalInvoicePreview: eS,
                  },
                  eM,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eU = n?.eligiblePaymentGateways,
        eG = null != eU && eU.length > 0 && (e_ === D.B || null === eE) && eu ? x.fU.SELECT_PAYMENT_METHOD : void 0,
        eF = i.useMemo(
            () => ({
                label: j.intl.string(j.t["/AAR02"]),
                selectedCurrency: o.currency ?? ef,
                currencies: J,
                onChange: ee,
                disabled: eN,
            }),
            [J, ee, o, ef, eN],
        ),
        eV = i.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [Y.E4]: ec }),
                shouldUseUnifiedCheckoutUI: ei,
            }),
            [n?.eligiblePaymentGateways, ec, ei],
        ),
        eB = (0, r.jsx)(m.N, {
            label: j.intl.string(j.t["mmDvV+"]),
            onPaymentSourceAdd: W,
            disabled: eN,
            additionalPaymentSourceDropdownProps: eV,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: o.paymentSourceId,
        }),
        eH = null != n && (0, w.Ge)(n, K, Z),
        ej = ei
            ? null != ep && null != eT
                ? (0, r.jsx)(C.PI, {
                      overrideRenewalDate: eL,
                      planGroup: Z,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eg,
                      isGift: eh,
                      paymentSourceType: eE,
                      isInvoiceBilledImmediately: ex,
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ep,
                          renewalInvoicePreview: eT,
                      },
                      hideLegalContent: eH && null != Q,
                  })
                : null
            : (0, r.jsx)(P.A, {
                  isActive: q,
                  ref: z,
                  children: eH
                      ? (0, r.jsx)(G.vi, {
                            premiumSubscription: n,
                            newPlan: eg,
                            onInvoiceError: X,
                            planGroup: Z,
                            priceOptions: o,
                            preventFetch: eN,
                            disabled: eN,
                            isEEA: ey,
                            paymentSources: s,
                            setHasAcceptedTerms: $,
                            onRenewalInvoicePreview: eS,
                        })
                      : (0, r.jsx)(E.A, {
                            onChange: $,
                            finePrint: (0, r.jsx)(h.A, {
                                subscriptionPlan: eg,
                                paymentSourceType: eE,
                                basePrice: (0, L.y8)(eg.id, !1, eh, em),
                                currentSubscription: n,
                                planGroup: Z,
                            }),
                            forceShow: !0,
                            showPricingLink: eg.currency !== B.Yri.USD,
                            showWithdrawalWaiver: ey,
                            disabled: eN,
                            subscriptionPlan: eg,
                            currentSubscription: n,
                            planGroup: Z,
                        }),
              }),
        eY = !eC && ev && !ed,
        eW = i.useMemo(() => (eY ? (0, r.jsx)(N.P, { planSkuId: eg.skuId }) : null), [eY, eg.skuId]);
    return ei
        ? (0, r.jsx)(F.n, {
              disabled: eN,
              showFractionalPremiumBanner: eA,
              fractionalPremiumInfo: eI,
              isPremiumGroupPurchase: ed,
              paymentRestrictionBannerType: eG,
              invoiceError: Q,
              unifiedPlainNoticeText: eb,
              invoicePreview: ep,
              invoicePreviewComponent: eP,
              shouldShowPlanSelectAndPromoBanner: eY,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  ek.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eg,
              planId: K,
              priceOptions: o,
              premiumPlanOptions: eO,
              unifiedSubscriptionDetailsNode: eR,
              isInvoiceBilledImmediately: ex,
              paymentSelectContent: eB,
              currencySelectComponent: (0, r.jsx)(g.qX, { ...eF }),
              legalContent: ej,
          })
        : (0, r.jsxs)("div", {
              className: Y.Du,
              children: [
                  (0, r.jsx)(x.je, { paymentRestrictionBannerType: eG }),
                  eY &&
                      (0, r.jsxs)("div", {
                          children: [
                              eW,
                              (0, r.jsx)(k.$p, {
                                  disabled: eN,
                                  planOptions: eO,
                                  selectedPlanId: K,
                                  planGroup: Z,
                                  showTotal: !1,
                                  priceOptions: em,
                                  handleClose: er,
                              }),
                              (0, r.jsx)(M.pK, {}),
                          ],
                      }),
                  ed &&
                      (0, r.jsx)("div", {
                          className: Y.Ni,
                          children: (0, r.jsx)(d.w, {
                              type: "info",
                              children: (0, r.jsx)(_.E, { variant: "text-sm/medium", children: (0, v.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(f.D, { label: t, children: eP }),
                  (0, r.jsx)("div", { className: Y.LC, children: eB }),
                  (0, r.jsx)(p.f, { currencies: J, className: Y.p2, children: (0, r.jsx)(p.A, { ...eF }) }),
                  ej,
              ],
          });
}
