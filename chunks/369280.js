n.d(t, { A: () => H });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    u = n(997101),
    c = n(311907),
    d = n(683071),
    p = n(834730),
    m = n(452027),
    h = n(821189),
    A = n(821891),
    _ = n(953689),
    C = n(61572),
    E = n(93159),
    y = n(94420),
    f = n(937008),
    P = n(156312),
    S = n(566980),
    x = n(800471),
    T = n(104745),
    N = n(222707),
    g = n(340034),
    I = n(216641),
    v = n(615405),
    b = n(97352),
    R = n(79387),
    M = n(927578),
    j = n(615396),
    L = n(735164),
    O = n(778307),
    D = n(218075),
    U = n(446929),
    w = n(299301),
    k = n(841247),
    F = n(422268),
    G = n(88001),
    B = n(652215),
    Y = n(466919),
    W = n(985018),
    V = n(814304);
function H(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: a,
            priceOptions: s,
            onPaymentSourceAdd: H,
            planId: K,
            setHasAcceptedTerms: Z,
            legalTermsNodeRef: q,
            hasLegalTermsFlash: z,
            onInvoiceError: $,
            invoiceError: X,
            planGroup: J,
            currencies: Q,
            onCurrencyChange: ee,
            hasOpenInvoice: et,
            purchaseState: en,
            handleClose: el,
            shouldUseUnifiedCheckoutUI: ei,
        } = e,
        ea = (0, y.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: er,
            isPremium: es,
            startedPaymentFlowWithPaymentSourcesRef: eo,
            hasPaymentSources: eu,
            enablePremiumBrandRefresh: ec,
            isPremiumGroupPurchase: ed,
            paymentSourceId: ep,
            displayCurrency: em,
        } = (0, P.P5)(),
        eh = (0, y.sw)(),
        { isGift: eA } = (0, f.Pv)(),
        e_ = (0, I.g)(a, ep),
        eC = i.useMemo(() => (0, M.l6)(s, eh?.checkoutContext?.available_plans), [eh, s]),
        eE = (0, c.bG)([b.A], () => b.A.get(K));
    o()(null != eE, "Missing newPlan");
    let { showFractionalPremiumBanner: ey, fractionalPremiumInfo: ef } = (0, N._V)({
            premiumSubscription: n,
            selectedPlanId: K,
            planGroup: J,
            isGift: eA,
        }),
        [eP, eS] = i.useState(null),
        ex = u.M.EEA_COUNTRIES.has(v.A.ipCountryCodeWithFallback),
        eT = en === S.h.PURCHASING || en === S.h.COMPLETED,
        eN = (0, x.vT)({
            isTrial: !1,
            isGift: eA,
            selectedSkuId: ea,
            startedPaymentFlowWithPaymentSources: eo.current,
        }),
        eg = n?.isPausedAllowsResumeButNotUpdates,
        eI = i.useMemo(() => (0, M.Tm)({ skuId: ea, isPremium: es, defaultPlanId: er }), [ea, er, es]);
    t =
        et || eg
            ? W.intl.string(W.t.nyzoFb)
            : ed
              ? W.intl.formatToPlainString(Y.default["3m9DJK"], { premiumGroupProductName: (0, G.DP)() })
              : (0, M.ys)(K)
                ? (0, M.ff)(n, eE)
                : W.intl.formatToPlainString(W.t["sBpy9/"], { planName: eE.name });
    let ev = i.useRef(null),
        [eb, eR] = i.useState(null),
        [eM, ej] = i.useState(void 0),
        eL = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: ei,
                unifiedSubscriptionDetailsNode: ev,
                setUnifiedPlainNoticeText: eR,
                setOverrideRenewalDate: ej,
            }),
            [ei],
        ),
        {
            content: eO,
            isInvoiceBilledImmediately: eD,
            ...eU
        } = null != n
            ? (0, k.TD)(
                  { hasOpenInvoice: et, showResumeSubscriptionView: eg, planId: K },
                  {
                      disabled: eT,
                      premiumSubscription: n,
                      newPlan: eE,
                      planGroup: J,
                      fractionalPremiumInfo: ef,
                      priceOptions: s,
                      onInvoiceError: $,
                      onRenewalInvoicePreview: eS,
                  },
                  eL,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        ew = n?.eligiblePaymentGateways,
        ek = null != ew && ew.length > 0 && (ep === R.B || null === e_) && eu ? D.fU.SELECT_PAYMENT_METHOD : void 0,
        eF = i.useMemo(
            () => ({
                label: W.intl.string(W.t["/AAR02"]),
                selectedCurrency: s.currency ?? em,
                currencies: Q,
                onChange: ee,
                disabled: eT,
            }),
            [Q, ee, s, em, eT],
        ),
        eG = i.useMemo(
            () => ({
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: r()({ [V.E4]: ec }),
                shouldUseUnifiedCheckoutUI: ei,
            }),
            [n?.eligiblePaymentGateways, ec, ei],
        ),
        eB = (0, l.jsx)(C.N, {
            label: W.intl.string(W.t["mmDvV+"]),
            onPaymentSourceAdd: H,
            disabled: eT,
            additionalPaymentSourceDropdownProps: eG,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: s.paymentSourceId,
        }),
        eY = null != n && (0, j.Ge)(n, K, J),
        eW = ei
            ? null != eh && null != eP
                ? (0, l.jsx)(g.PI, {
                      overrideRenewalDate: eM,
                      planGroup: J,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eE,
                      isGift: eA,
                      paymentSourceType: e_,
                      isInvoiceBilledImmediately: eD,
                      invoiceSummaryTypeWithPreview: {
                          type: w.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: eh,
                          renewalInvoicePreview: eP,
                      },
                      hideLegalContent: eY && null != X,
                  })
                : null
            : (0, l.jsx)(O.A, {
                  isActive: z,
                  ref: q,
                  children: eY
                      ? (0, l.jsx)(k.vi, {
                            premiumSubscription: n,
                            newPlan: eE,
                            onInvoiceError: $,
                            planGroup: J,
                            priceOptions: s,
                            preventFetch: eT,
                            disabled: eT,
                            isEEA: ex,
                            paymentSources: a,
                            setHasAcceptedTerms: Z,
                            onRenewalInvoicePreview: eS,
                        })
                      : (0, l.jsx)(_.A, {
                            onChange: Z,
                            finePrint: (0, l.jsx)(A.A, {
                                subscriptionPlan: eE,
                                paymentSourceType: e_,
                                basePrice: (0, M.y8)(eE.id, !1, eA, eC),
                                currentSubscription: n,
                                planGroup: J,
                            }),
                            forceShow: !0,
                            showPricingLink: eE.currency !== B.Yri.USD,
                            showWithdrawalWaiver: ex,
                            disabled: eT,
                            subscriptionPlan: eE,
                            currentSubscription: n,
                            planGroup: J,
                        }),
              }),
        eV = !eg && eN && !ed,
        eH = i.useMemo(() => (eV ? (0, l.jsx)(T.P, { planSkuId: eE.skuId }) : null), [eV, eE.skuId]);
    return ei
        ? (0, l.jsx)(F.n, {
              disabled: eT,
              showFractionalPremiumBanner: ey,
              fractionalPremiumInfo: ef,
              isPremiumGroupPurchase: ed,
              paymentRestrictionBannerType: ek,
              invoiceError: X,
              unifiedPlainNoticeText: eb,
              invoicePreview: eh,
              invoicePreviewComponent: eO,
              shouldShowPlanSelectAndPromoBanner: eV,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eU.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eE,
              planId: K,
              priceOptions: s,
              premiumPlanOptions: eI,
              unifiedSubscriptionDetailsNode: ev,
              isInvoiceBilledImmediately: eD,
              paymentSelectContent: eB,
              currencySelectComponent: (0, l.jsx)(E.qX, { ...eF }),
              legalContent: eW,
          })
        : (0, l.jsxs)("div", {
              className: V.Du,
              children: [
                  (0, l.jsx)(D.je, { paymentRestrictionBannerType: ek }),
                  eV &&
                      (0, l.jsxs)("div", {
                          children: [
                              eH,
                              (0, l.jsx)(U.$p, {
                                  disabled: eT,
                                  planOptions: eI,
                                  selectedPlanId: K,
                                  planGroup: J,
                                  showTotal: !1,
                                  priceOptions: eC,
                                  handleClose: el,
                              }),
                              (0, l.jsx)(L.pK, {}),
                          ],
                      }),
                  ed &&
                      (0, l.jsx)("div", {
                          className: V.Ni,
                          children: (0, l.jsx)(d.w, {
                              type: "info",
                              children: (0, l.jsx)(p.E, { variant: "text-sm/medium", children: (0, N.Nn)() }),
                          }),
                      }),
                  (0, l.jsx)(m.D, { label: t, children: eO }),
                  (0, l.jsx)("div", { className: V.LC, children: eB }),
                  (0, l.jsx)(h.f, { currencies: Q, className: V.p2, children: (0, l.jsx)(h.A, { ...eF }) }),
                  eW,
              ],
          });
}
