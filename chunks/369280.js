"use strict";
n.d(t, { A: () => H });
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
    P = n(841247),
    k = n(422268),
    U = n(88001),
    G = n(652215),
    F = n(519412),
    V = n(985018),
    B = n(982571);
function H(e) {
    let t,
        {
            premiumSubscription: n,
            paymentSources: s,
            priceOptions: o,
            onPaymentSourceChange: H,
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
        {
            selectedSkuId: er,
            defaultPlanId: ei,
            isPremium: es,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            hasPaymentSources: eo,
            enablePremiumBrandRefresh: el,
            isPremiumGroupPurchase: eu,
            invoicePreview: ec,
            setPaymentSourceId: ed,
        } = (0, g.P5)(),
        { isGift: e_ } = (0, E.Pv)(),
        ef = o.paymentSourceId,
        ep = (0, v.g)(s, ef),
        eh = (0, c.bG)([R.A], () => R.A.get(Y));
    l()(null != eh, "Missing newPlan");
    let em = (0, c.bG)([N.A], () => N.A.hidePersonalInformation),
        { showFractionalPremiumBanner: eE, fractionalPremiumInfo: eg } = (0, S._V)({
            premiumSubscription: n,
            selectedPlanId: Y,
            planGroup: Z,
            isGift: e_,
        }),
        eA = i.useMemo(() => {
            let e = ec?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(m.A.createFromCheckoutContext);
        }, [ec?.checkoutContext]),
        eI = i.useRef(!1);
    i.useEffect(() => {
        if (eA.length > 0 && !eI.current) {
            eI.current = !0;
            let e = eA.find((e) => e.id === o.paymentSourceId);
            if (null != e && !e.enabled) {
                let e = eA.find((e) => e.enabled) ?? null;
                ed(null != e ? e.id : null);
            }
        }
    }, [eA, ed, o.paymentSourceId]);
    let eT = eA.length > 0 ? eA : Object.values(s),
        eS = eA.find((e) => e.isDefault)?.id,
        ey = u.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        ev = ee === A.h.PURCHASING || ee === A.h.COMPLETED,
        eN = (0, I.vT)({
            isTrial: !1,
            isGift: e_,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: ea.current,
        }),
        eC = n?.isPausedAllowsResumeButNotUpdates,
        eR = i.useMemo(
            () =>
                (0, b.Tm)({ skuId: er, isPremium: es, multiMonthPlans: [], currentSubscription: n, defaultPlanId: ei }),
            [er, n, ei, es],
        );
    t =
        J || eC
            ? V.intl.string(V.t.nyzoFb)
            : eu
              ? V.intl.formatToPlainString(F.default["3m9DJK"], { premiumGroupProductName: (0, U.DP)() })
              : (0, b.ys)(Y)
                ? (0, b.ff)(n, eh)
                : V.intl.formatToPlainString(V.t["sBpy9/"], { planName: eh.name });
    let eO = i.useRef(null),
        [eb, eD] = i.useState(null),
        eL = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: en,
                unifiedSubscriptionDetailsNode: eO,
                setUnifiedPlainNoticeText: eD,
            }),
            [en],
        ),
        {
            content: ew,
            isInvoiceBilledImmediately: eM,
            ...ex
        } = null != n
            ? (0, P.TD)(
                  { hasOpenInvoice: J, showResumeSubscriptionView: eC, planId: Y },
                  {
                      disabled: ev,
                      premiumSubscription: n,
                      newPlan: eh,
                      planGroup: Z,
                      fractionalPremiumInfo: eg,
                      priceOptions: o,
                      onInvoiceError: z,
                  },
                  eL,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eP = n?.eligiblePaymentGateways,
        ek = null != eP && eP.length > 0 && (ef === O.B || null === ep) && eo ? M.fU.SELECT_PAYMENT_METHOD : void 0,
        eU = i.useMemo(
            () => ({
                label: V.intl.string(V.t["/AAR02"]),
                selectedCurrency: o.currency,
                currencies: X,
                onChange: Q,
                disabled: ev,
            }),
            [X, Q, o, ev],
        ),
        eG = (0, r.jsx)(p.A, {
            label: V.intl.string(V.t["mmDvV+"]),
            paymentSources: eT,
            selectedPaymentSourceId: ef,
            defaultPaymentSourceId: eS,
            onChange: H,
            onPaymentSourceAdd: j,
            hidePersonalInformation: em,
            disabled: ev,
            paymentGatewayRestrictions: n?.eligiblePaymentGateways,
            className: a()({ [B.E4]: el }),
            shouldUseUnifiedCheckoutUI: en,
        }),
        eF = (0, r.jsx)(w.A, {
            isActive: $,
            ref: K,
            children:
                null != n && (0, D.Ge)(n, Y, Z)
                    ? (0, r.jsx)(P.vi, {
                          premiumSubscription: n,
                          newPlan: eh,
                          onInvoiceError: z,
                          planGroup: Z,
                          priceOptions: o,
                          preventFetch: ev,
                          disabled: ev,
                          isEEA: ey,
                          paymentSources: s,
                          setHasAcceptedTerms: W,
                          shouldUseUnifiedCheckoutUI: en,
                      })
                    : (0, r.jsx)(h.A, {
                          onChange: W,
                          finePrint: (0, r.jsx)(f.A, {
                              subscriptionPlan: eh,
                              paymentSourceType: ep,
                              basePrice: (0, b.y8)(eh.id, !1, e_, o),
                              currentSubscription: n,
                              planGroup: Z,
                          }),
                          forceShow: !0,
                          showPricingLink: eh.currency !== G.Yri.USD,
                          showWithdrawalWaiver: ey,
                          disabled: ev,
                          subscriptionPlan: eh,
                          currentSubscription: n,
                          planGroup: Z,
                      }),
        }),
        eV = !eC && eN && !eu,
        eB = i.useMemo(() => (eV ? (0, r.jsx)(T.P, { planSkuId: eh.skuId }) : null), [eV, eh.skuId]);
    return en
        ? (0, r.jsx)(k.n, {
              showFractionalPremiumBanner: eE,
              fractionalPremiumInfo: eg,
              isPremiumGroupPurchase: eu,
              paymentRestrictionBannerType: ek,
              invoiceError: q,
              unifiedPlainNoticeText: eb,
              invoicePreview: ec,
              invoicePreviewComponent: ew,
              shouldShowPlanSelectAndPromoBanner: eV,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  ex.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eh,
              planId: Y,
              priceOptions: o,
              premiumPlanOptions: eR,
              unifiedSubscriptionDetailsNode: eO,
              isInvoiceBilledImmediately: eM,
              paymentSelectContent: eG,
              currencySelectComponent: (0, r.jsx)(y.rk, { ...eU }),
              legalContent: eF,
          })
        : (0, r.jsxs)("div", {
              className: B.Du,
              children: [
                  (0, r.jsx)(M.je, { paymentRestrictionBannerType: ek }),
                  eV &&
                      (0, r.jsxs)("div", {
                          children: [
                              eB,
                              (0, r.jsx)(x.$p, {
                                  planOptions: eR,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: Y,
                                  planGroup: Z,
                                  showTotal: !1,
                                  handleClose: et,
                              }),
                              (0, r.jsx)(L.pK, {}),
                          ],
                      }),
                  eu &&
                      (0, r.jsx)("div", {
                          className: B.Ni,
                          children: (0, r.jsx)(d.wx6, {
                              type: "info",
                              children: (0, r.jsx)(d.Text, { variant: "text-sm/medium", children: (0, S.Nn)() }),
                          }),
                      }),
                  (0, r.jsx)(d.D0$, { label: t, children: ew }),
                  (0, r.jsx)("div", { className: B.LC, children: eG }),
                  (0, r.jsx)(_.f, { currencies: X, className: B.p2, children: (0, r.jsx)(_.A, { ...eU }) }),
                  eF,
              ],
          });
}
