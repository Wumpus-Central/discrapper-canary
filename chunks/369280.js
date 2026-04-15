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
    d = n(397927),
    _ = n(821189),
    f = n(821891),
    p = n(953689),
    h = n(918022),
    m = n(93159),
    E = n(826469),
    g = n(413748),
    A = n(937008),
    I = n(156312),
    T = n(566980),
    S = n(800471),
    y = n(104745),
    v = n(222707),
    N = n(340034),
    C = n(216641),
    R = n(351906),
    O = n(615405),
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
    H = n(782965),
    j = n(985018),
    Y = n(110448);
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
            onInvoiceError: Z,
            invoiceError: X,
            planGroup: Q,
            currencies: J,
            onCurrencyChange: ee,
            hasOpenInvoice: et,
            purchaseState: en,
            handleClose: er,
            shouldUseUnifiedCheckoutUI: ei,
        } = e,
        es = (0, g.t4)((e) => e.selectedSkuId),
        {
            defaultPlanId: ea,
            isPremium: eo,
            startedPaymentFlowWithPaymentSourcesRef: el,
            hasPaymentSources: eu,
            enablePremiumBrandRefresh: ec,
            isPremiumGroupPurchase: ed,
            setPaymentSourceId: e_,
            displayCurrency: ef,
        } = (0, I.P5)(),
        ep = (0, g.sw)(),
        { isGift: eh } = (0, A.Pv)(),
        em = o.paymentSourceId,
        eE = (0, C.g)(s, em),
        eg = i.useMemo(() => (0, L.l6)(o, ep?.checkoutContext?.available_plans), [ep, o]),
        eA = (0, c.bG)([b.A], () => b.A.get(K));
    l()(null != eA, "Missing newPlan");
    let eI = (0, c.bG)([R.A], () => R.A.hidePersonalInformation),
        { showFractionalPremiumBanner: eT, fractionalPremiumInfo: eS } = (0, v._V)({
            premiumSubscription: n,
            selectedPlanId: K,
            planGroup: Q,
            isGift: eh,
        }),
        [ey, ev] = i.useState(null),
        eN = i.useMemo(() => {
            let e = ep?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(E.A.createFromCheckoutContext);
        }, [ep?.checkoutContext]),
        {
            dropdownPaymentSources: eC,
            giftCardsEnabled: eR,
            dropdownPaymentSourceId: eO,
            handleDropdownPaymentSourceChange: eb,
            giftCardCheckboxProps: eD,
        } = (0, h.Y)({
            checkoutPaymentSources: eN,
            setPaymentSourceId: e_,
            location: "PremiumSwitchPlanReview",
            subscriptionPaymentSourceId: o.paymentSourceId,
            itemAmount: ep?.total,
        }),
        eL = eC.find((e) => e.isDefault)?.id,
        ew = u.M.EEA_COUNTRIES.has(O.A.ipCountryCodeWithFallback),
        eM = en === T.h.PURCHASING || en === T.h.COMPLETED,
        eP = (0, S.vT)({
            isTrial: !1,
            isGift: eh,
            selectedSkuId: es,
            startedPaymentFlowWithPaymentSources: el.current,
        }),
        ex = n?.isPausedAllowsResumeButNotUpdates,
        ek = i.useMemo(() => (0, L.Tm)({ skuId: es, isPremium: eo, defaultPlanId: ea }), [es, ea, eo]);
    t =
        et || ex
            ? j.intl.string(j.t.nyzoFb)
            : ed
              ? j.intl.formatToPlainString(H.default["3m9DJK"], { premiumGroupProductName: (0, V.DP)() })
              : (0, L.ys)(K)
                ? (0, L.ff)(n, eA)
                : j.intl.formatToPlainString(j.t["sBpy9/"], { planName: eA.name });
    let eU = i.useRef(null),
        [eG, eF] = i.useState(null),
        [eV, eB] = i.useState(void 0),
        eH = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: ei,
                unifiedSubscriptionDetailsNode: eU,
                setUnifiedPlainNoticeText: eF,
                setOverrideRenewalDate: eB,
            }),
            [ei],
        ),
        {
            content: ej,
            isInvoiceBilledImmediately: eY,
            ...eW
        } = null != n
            ? (0, G.TD)(
                  { hasOpenInvoice: et, showResumeSubscriptionView: ex, planId: K },
                  {
                      disabled: eM,
                      premiumSubscription: n,
                      newPlan: eA,
                      planGroup: Q,
                      fractionalPremiumInfo: eS,
                      priceOptions: o,
                      onInvoiceError: Z,
                      onRenewalInvoicePreview: ev,
                  },
                  eH,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eK = n?.eligiblePaymentGateways,
        e$ = null != eK && eK.length > 0 && (em === D.B || null === eE) && eu ? x.fU.SELECT_PAYMENT_METHOD : void 0,
        ez = i.useMemo(
            () => ({
                label: j.intl.string(j.t["/AAR02"]),
                selectedCurrency: o.currency ?? ef,
                currencies: J,
                onChange: ee,
                disabled: eM,
            }),
            [J, ee, o, ef, eM],
        ),
        eq = (0, r.jsx)(m.nL, {
            label: j.intl.string(j.t["mmDvV+"]),
            giftCardsEnabled: eR,
            giftCardCheckboxProps: eD,
            paymentSourceDropdownProps: {
                paymentSources: eC,
                selectedPaymentSourceId: eO,
                defaultPaymentSourceId: eL,
                onChange: eb,
                onPaymentSourceAdd: W,
                hidePersonalInformation: eI,
                paymentGatewayRestrictions: n?.eligiblePaymentGateways,
                className: a()({ [Y.E4]: ec }),
                shouldUseUnifiedCheckoutUI: ei,
            },
            disabled: eM,
        }),
        eZ = null != n && (0, w.Ge)(n, K, Q),
        eX = eZ && null != X,
        eQ = ei
            ? null != ep && null != ey
                ? (0, r.jsx)(N.PI, {
                      overrideRenewalDate: eV,
                      planGroup: Q,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eA,
                      isGift: eh,
                      paymentSourceType: eE,
                      isInvoiceBilledImmediately: eY,
                      invoiceSummaryTypeWithPreview: {
                          type: U.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ep,
                          renewalInvoicePreview: ey,
                      },
                      hideLegalContent: eX,
                  })
                : null
            : (0, r.jsx)(P.A, {
                  isActive: q,
                  ref: z,
                  children: eZ
                      ? (0, r.jsx)(G.vi, {
                            premiumSubscription: n,
                            newPlan: eA,
                            onInvoiceError: Z,
                            planGroup: Q,
                            priceOptions: o,
                            preventFetch: eM,
                            disabled: eM,
                            isEEA: ew,
                            paymentSources: s,
                            setHasAcceptedTerms: $,
                            onRenewalInvoicePreview: ev,
                        })
                      : (0, r.jsx)(p.A, {
                            onChange: $,
                            finePrint: (0, r.jsx)(f.A, {
                                subscriptionPlan: eA,
                                paymentSourceType: eE,
                                basePrice: (0, L.y8)(eA.id, !1, eh, eg),
                                currentSubscription: n,
                                planGroup: Q,
                            }),
                            forceShow: !0,
                            showPricingLink: eA.currency !== B.Yri.USD,
                            showWithdrawalWaiver: ew,
                            disabled: eM,
                            subscriptionPlan: eA,
                            currentSubscription: n,
                            planGroup: Q,
                        }),
              }),
        eJ = !ex && eP && !ed,
        e0 = i.useMemo(() => (eJ ? (0, r.jsx)(y.P, { planSkuId: eA.skuId }) : null), [eJ, eA.skuId]);
    return ei
        ? (0, r.jsx)(F.n, {
              disabled: eM,
              showFractionalPremiumBanner: eT,
              fractionalPremiumInfo: eS,
              isPremiumGroupPurchase: ed,
              paymentRestrictionBannerType: e$,
              invoiceError: X,
              unifiedPlainNoticeText: eG,
              invoicePreview: ep,
              invoicePreviewComponent: ej,
              shouldShowPlanSelectAndPromoBanner: eJ,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eW.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eA,
              planId: K,
              priceOptions: o,
              premiumPlanOptions: ek,
              unifiedSubscriptionDetailsNode: eU,
              isInvoiceBilledImmediately: eY,
              paymentSelectContent: eq,
              currencySelectComponent: (0, r.jsx)(N.rk, { ...ez }),
              legalContent: eQ,
          })
        : (0, r.jsxs)("div", {
              className: Y.Du,
              children: [
                  (0, r.jsx)(x.je, { paymentRestrictionBannerType: e$ }),
                  eJ &&
                      (0, r.jsxs)("div", {
                          children: [
                              e0,
                              (0, r.jsx)(k.$p, {
                                  disabled: eM,
                                  planOptions: ek,
                                  selectedPlanId: K,
                                  planGroup: Q,
                                  showTotal: !1,
                                  priceOptions: eg,
                                  handleClose: er,
                              }),
                              (0, r.jsx)(M.pK, {}),
                          ],
                      }),
                  ed &&
                      (0, r.jsx)("div", {
                          className: Y.Ni,
                          children: (0, r.jsx)(d.wx6, {
                              type: "info",
                              children: (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: (0, v.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(d.D0$, { label: t, children: ej }),
                  (0, r.jsx)("div", { className: Y.LC, children: eq }),
                  (0, r.jsx)(_.f, { currencies: J, className: Y.p2, children: (0, r.jsx)(_.A, { ...ez }) }),
                  eQ,
              ],
          });
}
