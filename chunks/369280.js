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
    p = n(637141),
    h = n(953689),
    m = n(826469),
    E = n(937008),
    g = n(156312),
    A = n(566980),
    I = n(800471),
    T = n(104745),
    S = n(222707),
    y = n(340034),
    v = n(216641),
    N = n(351906),
    C = n(615405),
    R = n(97352),
    O = n(79387),
    b = n(927578),
    D = n(615396),
    L = n(735164),
    w = n(778307),
    M = n(218075),
    x = n(446929),
    P = n(299301),
    k = n(841247),
    U = n(422268),
    G = n(88001),
    F = n(652215),
    V = n(519412),
    B = n(985018),
    H = n(982571);
function j(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceChange: j,
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
        } = (0, g.P5)(),
        { isGift: ef } = (0, E.Pv)(),
        ep = o.paymentSourceId,
        eh = (0, v.g)(s, ep),
        em = (0, c.bG)([R.A], () => R.A.get(W));
    l()(null != em, "Missing newPlan");
    let eE = (0, c.bG)([N.A], () => N.A.hidePersonalInformation),
        { showFractionalPremiumBanner: eg, fractionalPremiumInfo: eA } = (0, S._V)({
            premiumSubscription: n,
            selectedPlanId: W,
            planGroup: X,
            isGift: ef,
        }),
        [eI, eT] = i.useState(null),
        eS = i.useMemo(() => {
            let e = ed?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(m.A.createFromCheckoutContext);
        }, [ed?.checkoutContext]),
        ey = i.useRef(!1);
    i.useEffect(() => {
        if (eS.length > 0 && !ey.current) {
            ey.current = !0;
            let e = eS.find((e) => e.id === o.paymentSourceId);
            if (null != e && !e.enabled) {
                let e = eS.find((e) => e.enabled) ?? null;
                e_(null != e ? e.id : null);
            }
        }
    }, [eS, e_, o.paymentSourceId]);
    let ev = eS.length > 0 ? eS : Object.values(s),
        eN = eS.find((e) => e.isDefault)?.id,
        eC = u.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        eR = et === A.h.PURCHASING || et === A.h.COMPLETED,
        eO = (0, I.vT)({
            isTrial: !1,
            isGift: ef,
            selectedSkuId: ei,
            startedPaymentFlowWithPaymentSources: eo.current,
        }),
        eb = n?.isPausedAllowsResumeButNotUpdates,
        eD = i.useMemo(
            () =>
                (0, b.Tm)({ skuId: ei, isPremium: ea, multiMonthPlans: [], currentSubscription: n, defaultPlanId: es }),
            [ei, n, es, ea],
        );
    t =
        ee || eb
            ? B.intl.string(B.t.nyzoFb)
            : ec
              ? B.intl.formatToPlainString(V.default["3m9DJK"], { premiumGroupProductName: (0, G.DP)() })
              : (0, b.ys)(W)
                ? (0, b.ff)(n, em)
                : B.intl.formatToPlainString(B.t["sBpy9/"], { planName: em.name });
    let eL = i.useRef(null),
        [ew, eM] = i.useState(null),
        [ex, eP] = i.useState(void 0),
        ek = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: er,
                unifiedSubscriptionDetailsNode: eL,
                setUnifiedPlainNoticeText: eM,
                setOverrideRenewalDate: eP,
            }),
            [er],
        ),
        {
            content: eU,
            isInvoiceBilledImmediately: eG,
            ...eF
        } = null != n
            ? (0, k.TD)(
                  { hasOpenInvoice: ee, showResumeSubscriptionView: eb, planId: W },
                  {
                      disabled: eR,
                      premiumSubscription: n,
                      newPlan: em,
                      planGroup: X,
                      fractionalPremiumInfo: eA,
                      priceOptions: o,
                      onInvoiceError: q,
                      onRenewalInvoicePreview: eT,
                  },
                  ek,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eV = n?.eligiblePaymentGateways,
        eB = null != eV && eV.length > 0 && (ep === O.B || null === eh) && el ? M.fU.SELECT_PAYMENT_METHOD : void 0,
        eH = i.useMemo(
            () => ({
                label: B.intl.string(B.t["/AAR02"]),
                selectedCurrency: o.currency,
                currencies: Q,
                onChange: J,
                disabled: eR,
            }),
            [Q, J, o, eR],
        ),
        ej = (0, r.jsx)(p.A, {
            label: B.intl.string(B.t["mmDvV+"]),
            paymentSources: ev,
            selectedPaymentSourceId: ep,
            defaultPaymentSourceId: eN,
            onChange: j,
            onPaymentSourceAdd: Y,
            hidePersonalInformation: eE,
            disabled: eR,
            paymentGatewayRestrictions: n?.eligiblePaymentGateways,
            className: a()({ [H.E4]: eu }),
            shouldUseUnifiedCheckoutUI: er,
        }),
        eY = null != n && (0, D.Ge)(n, W, X),
        eW = eY && null != Z,
        eK = er
            ? null != ed && null != eI
                ? (0, r.jsx)(y.PI, {
                      overrideRenewalDate: ex,
                      planGroup: X,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: em,
                      isGift: ef,
                      paymentSourceType: eh,
                      isInvoiceBilledImmediately: eG,
                      invoiceSummaryTypeWithPreview: {
                          type: P.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ed,
                          renewalInvoicePreview: eI,
                      },
                      hideLegalContent: eW,
                  })
                : null
            : (0, r.jsx)(w.A, {
                  isActive: z,
                  ref: $,
                  children: eY
                      ? (0, r.jsx)(k.vi, {
                            premiumSubscription: n,
                            newPlan: em,
                            onInvoiceError: q,
                            planGroup: X,
                            priceOptions: o,
                            preventFetch: eR,
                            disabled: eR,
                            isEEA: eC,
                            paymentSources: s,
                            setHasAcceptedTerms: K,
                            onRenewalInvoicePreview: eT,
                        })
                      : (0, r.jsx)(h.A, {
                            onChange: K,
                            finePrint: (0, r.jsx)(f.A, {
                                subscriptionPlan: em,
                                paymentSourceType: eh,
                                basePrice: (0, b.y8)(em.id, !1, ef, o),
                                currentSubscription: n,
                                planGroup: X,
                            }),
                            forceShow: !0,
                            showPricingLink: em.currency !== F.Yri.USD,
                            showWithdrawalWaiver: eC,
                            disabled: eR,
                            subscriptionPlan: em,
                            currentSubscription: n,
                            planGroup: X,
                        }),
              }),
        e$ = !eb && eO && !ec,
        ez = i.useMemo(() => (e$ ? (0, r.jsx)(T.P, { planSkuId: em.skuId }) : null), [e$, em.skuId]);
    return er
        ? (0, r.jsx)(U.n, {
              disabled: eR,
              showFractionalPremiumBanner: eg,
              fractionalPremiumInfo: eA,
              isPremiumGroupPurchase: ec,
              paymentRestrictionBannerType: eB,
              invoiceError: Z,
              unifiedPlainNoticeText: ew,
              invoicePreview: ed,
              invoicePreviewComponent: eU,
              shouldShowPlanSelectAndPromoBanner: e$,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eF.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: em,
              planId: W,
              priceOptions: o,
              premiumPlanOptions: eD,
              unifiedSubscriptionDetailsNode: eL,
              isInvoiceBilledImmediately: eG,
              paymentSelectContent: ej,
              currencySelectComponent: (0, r.jsx)(y.rk, { ...eH }),
              legalContent: eK,
          })
        : (0, r.jsxs)("div", {
              className: H.Du,
              children: [
                  (0, r.jsx)(M.je, { paymentRestrictionBannerType: eB }),
                  e$ &&
                      (0, r.jsxs)("div", {
                          children: [
                              ez,
                              (0, r.jsx)(x.$p, {
                                  disabled: eR,
                                  planOptions: eD,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: W,
                                  planGroup: X,
                                  showTotal: !1,
                                  handleClose: en,
                              }),
                              (0, r.jsx)(L.pK, {}),
                          ],
                      }),
                  ec &&
                      (0, r.jsx)("div", {
                          className: H.Ni,
                          children: (0, r.jsx)(d.wx6, {
                              type: "info",
                              children: (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: (0, S.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(d.D0$, { label: t, children: eU }),
                  (0, r.jsx)("div", { className: H.LC, children: ej }),
                  (0, r.jsx)(_.f, { currencies: Q, className: H.p2, children: (0, r.jsx)(_.A, { ...eH }) }),
                  eK,
              ],
          });
}
