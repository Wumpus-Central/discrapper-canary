"use strict";
n.d(t, { A: () => Y });
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
    h = n(918022),
    m = n(93159),
    E = n(826469),
    g = n(937008),
    A = n(156312),
    I = n(566980),
    T = n(800471),
    S = n(104745),
    y = n(222707),
    v = n(340034),
    N = n(216641),
    C = n(351906),
    R = n(615405),
    O = n(97352),
    b = n(79387),
    D = n(927578),
    L = n(615396),
    w = n(735164),
    M = n(778307),
    x = n(218075),
    P = n(446929),
    k = n(299301),
    U = n(841247),
    G = n(422268),
    F = n(88001),
    V = n(652215),
    B = n(519412),
    H = n(985018),
    j = n(110448);
function Y(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceAdd: Y,
            planId: W,
            setHasAcceptedTerms: K,
            legalTermsNodeRef: $,
            hasLegalTermsFlash: z,
            onInvoiceError: q,
            invoiceError: Z,
            planGroup: X,
            currencies: Q,
            onCurrencyChange: J,
            hasOpenInvoice: ee,
            purchaseState: et,
            handleClose: en,
            shouldUseUnifiedCheckoutUI: er,
        } = e,
        {
            selectedSkuId: ei,
            defaultPlanId: es,
            isPremium: ea,
            startedPaymentFlowWithPaymentSourcesRef: eo,
            hasPaymentSources: el,
            enablePremiumBrandRefresh: eu,
            isPremiumGroupPurchase: ec,
            invoicePreview: ed,
            setPaymentSourceId: e_,
            displayCurrency: ef,
        } = (0, A.P5)(),
        { isGift: ep } = (0, g.Pv)(),
        eh = o.paymentSourceId,
        em = (0, N.g)(s, eh),
        eE = i.useMemo(() => (0, D.l6)(o, ed?.checkoutContext?.available_plans), [ed, o]),
        eg = (0, c.bG)([O.A], () => O.A.get(W));
    l()(null != eg, "Missing newPlan");
    let eA = (0, c.bG)([C.A], () => C.A.hidePersonalInformation),
        { showFractionalPremiumBanner: eI, fractionalPremiumInfo: eT } = (0, y._V)({
            premiumSubscription: n,
            selectedPlanId: W,
            planGroup: X,
            isGift: ep,
        }),
        [eS, ey] = i.useState(null),
        ev = i.useMemo(() => {
            let e = ed?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(E.A.createFromCheckoutContext);
        }, [ed?.checkoutContext]),
        {
            dropdownPaymentSources: eN,
            giftCardsEnabled: eC,
            dropdownPaymentSourceId: eR,
            handleDropdownPaymentSourceChange: eO,
            giftCardCheckboxProps: eb,
        } = (0, h.Y)({
            checkoutPaymentSources: ev,
            setPaymentSourceId: e_,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: o.paymentSourceId,
            itemAmount: ed?.total,
        }),
        eD = eN.find((e) => e.isDefault)?.id,
        eL = u.M.EEA_COUNTRIES.has(R.A.ipCountryCodeWithFallback),
        ew = et === I.h.PURCHASING || et === I.h.COMPLETED,
        eM = (0, T.vT)({
            isTrial: !1,
            isGift: ep,
            selectedSkuId: ei,
            startedPaymentFlowWithPaymentSources: eo.current,
        }),
        ex = n?.isPausedAllowsResumeButNotUpdates,
        eP = i.useMemo(() => (0, D.Tm)({ skuId: ei, isPremium: ea, defaultPlanId: es }), [ei, es, ea]);
    t =
        ee || ex
            ? H.intl.string(H.t.nyzoFb)
            : ec
              ? H.intl.formatToPlainString(B.default["3m9DJK"], { premiumGroupProductName: (0, F.DP)() })
              : (0, D.ys)(W)
                ? (0, D.ff)(n, eg)
                : H.intl.formatToPlainString(H.t["sBpy9/"], { planName: eg.name });
    let ek = i.useRef(null),
        [eU, eG] = i.useState(null),
        [eF, eV] = i.useState(void 0),
        eB = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: er,
                unifiedSubscriptionDetailsNode: ek,
                setUnifiedPlainNoticeText: eG,
                setOverrideRenewalDate: eV,
            }),
            [er],
        ),
        {
            content: eH,
            isInvoiceBilledImmediately: ej,
            ...eY
        } = null != n
            ? (0, U.TD)(
                  { hasOpenInvoice: ee, showResumeSubscriptionView: ex, planId: W },
                  {
                      disabled: ew,
                      premiumSubscription: n,
                      newPlan: eg,
                      planGroup: X,
                      fractionalPremiumInfo: eT,
                      priceOptions: o,
                      onInvoiceError: q,
                      onRenewalInvoicePreview: ey,
                  },
                  eB,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eW = n?.eligiblePaymentGateways,
        eK = null != eW && eW.length > 0 && (eh === b.B || null === em) && el ? x.fU.SELECT_PAYMENT_METHOD : void 0,
        e$ = i.useMemo(
            () => ({
                label: H.intl.string(H.t["/AAR02"]),
                selectedCurrency: o.currency ?? ef,
                currencies: Q,
                onChange: J,
                disabled: ew,
            }),
            [Q, J, o, ef, ew],
        ),
        ez = (0, r.jsx)(m.nL, {
            label: H.intl.string(H.t["mmDvV+"]),
            giftCardsEnabled: eC,
            giftCardCheckboxProps: eb,
            paymentSourceDropdownProps: {
                paymentSources: eN,
                selectedPaymentSourceId: eR,
                defaultPaymentSourceId: eD,
                onChange: eO,
                onPaymentSourceAdd: Y,
                hidePersonalInformation: eA,
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [j.E4]: eu }),
                shouldUseUnifiedCheckoutUI: er,
            },
            disabled: ew,
        }),
        eq = null != n && (0, L.Ge)(n, W, X),
        eZ = eq && null != Z,
        eX = er
            ? null != ed && null != eS
                ? (0, r.jsx)(v.PI, {
                      overrideRenewalDate: eF,
                      planGroup: X,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eg,
                      isGift: ep,
                      paymentSourceType: em,
                      isInvoiceBilledImmediately: ej,
                      invoiceSummaryTypeWithPreview: {
                          type: k.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ed,
                          renewalInvoicePreview: eS,
                      },
                      hideLegalContent: eZ,
                  })
                : null
            : (0, r.jsx)(M.A, {
                  isActive: z,
                  ref: $,
                  children: eq
                      ? (0, r.jsx)(U.vi, {
                            premiumSubscription: n,
                            newPlan: eg,
                            onInvoiceError: q,
                            planGroup: X,
                            priceOptions: o,
                            preventFetch: ew,
                            disabled: ew,
                            isEEA: eL,
                            paymentSources: s,
                            setHasAcceptedTerms: K,
                            onRenewalInvoicePreview: ey,
                        })
                      : (0, r.jsx)(p.A, {
                            onChange: K,
                            finePrint: (0, r.jsx)(f.A, {
                                subscriptionPlan: eg,
                                paymentSourceType: em,
                                basePrice: (0, D.y8)(eg.id, !1, ep, eE),
                                currentSubscription: n,
                                planGroup: X,
                            }),
                            forceShow: !0,
                            showPricingLink: eg.currency !== V.Yri.USD,
                            showWithdrawalWaiver: eL,
                            disabled: ew,
                            subscriptionPlan: eg,
                            currentSubscription: n,
                            planGroup: X,
                        }),
              }),
        eQ = !ex && eM && !ec,
        eJ = i.useMemo(() => (eQ ? (0, r.jsx)(S.P, { planSkuId: eg.skuId }) : null), [eQ, eg.skuId]);
    return er
        ? (0, r.jsx)(G.n, {
              disabled: ew,
              showFractionalPremiumBanner: eI,
              fractionalPremiumInfo: eT,
              isPremiumGroupPurchase: ec,
              paymentRestrictionBannerType: eK,
              invoiceError: Z,
              unifiedPlainNoticeText: eU,
              invoicePreview: ed,
              invoicePreviewComponent: eH,
              shouldShowPlanSelectAndPromoBanner: eQ,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eY.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eg,
              planId: W,
              priceOptions: o,
              premiumPlanOptions: eP,
              unifiedSubscriptionDetailsNode: ek,
              isInvoiceBilledImmediately: ej,
              paymentSelectContent: ez,
              currencySelectComponent: (0, r.jsx)(v.rk, { ...e$ }),
              legalContent: eX,
          })
        : (0, r.jsxs)("div", {
              className: j.Du,
              children: [
                  (0, r.jsx)(x.je, { paymentRestrictionBannerType: eK }),
                  eQ &&
                      (0, r.jsxs)("div", {
                          children: [
                              eJ,
                              (0, r.jsx)(P.$p, {
                                  disabled: ew,
                                  planOptions: eP,
                                  selectedPlanId: W,
                                  planGroup: X,
                                  showTotal: !1,
                                  priceOptions: eE,
                                  handleClose: en,
                              }),
                              (0, r.jsx)(w.pK, {}),
                          ],
                      }),
                  ec &&
                      (0, r.jsx)("div", {
                          className: j.Ni,
                          children: (0, r.jsx)(d.wx6, {
                              type: "info",
                              children: (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: (0, y.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(d.D0$, { label: t, children: eH }),
                  (0, r.jsx)("div", { className: j.LC, children: ez }),
                  (0, r.jsx)(_.f, { currencies: Q, className: j.p2, children: (0, r.jsx)(_.A, { ...e$ }) }),
                  eX,
              ],
          });
}
