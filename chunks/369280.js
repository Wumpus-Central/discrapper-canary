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
    P = n(446929),
    x = n(299301),
    k = n(841247),
    U = n(422268),
    G = n(88001),
    F = n(652215),
    V = n(518582),
    B = n(985018),
    H = n(461397);
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
            displayCurrency: ef,
        } = (0, g.P5)(),
        { isGift: ep } = (0, E.Pv)(),
        eh = o.paymentSourceId,
        em = (0, v.g)(s, eh),
        eE = i.useMemo(() => (0, b.l6)(o, ed?.checkoutContext?.available_plans), [ed, o]),
        eg = (0, c.bG)([R.A], () => R.A.get(W));
    l()(null != eg, "Missing newPlan");
    let eA = (0, c.bG)([N.A], () => N.A.hidePersonalInformation),
        { showFractionalPremiumBanner: eI, fractionalPremiumInfo: eT } = (0, S._V)({
            premiumSubscription: n,
            selectedPlanId: W,
            planGroup: X,
            isGift: ep,
        }),
        [eS, ey] = i.useState(null),
        ev = i.useMemo(() => {
            let e = ed?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(m.A.createFromCheckoutContext);
        }, [ed?.checkoutContext]),
        eN = i.useRef(!1);
    i.useEffect(() => {
        if (ev.length > 0 && !eN.current) {
            eN.current = !0;
            let e = ev.find((e) => e.id === o.paymentSourceId);
            if (null != e && !e.enabled) {
                let e = ev.find((e) => e.enabled) ?? null;
                e_(null != e ? e.id : null);
            }
        }
    }, [ev, e_, o.paymentSourceId]);
    let eC = ev.length > 0 ? ev : Object.values(s),
        eR = ev.find((e) => e.isDefault)?.id,
        eO = u.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        eb = et === A.h.PURCHASING || et === A.h.COMPLETED,
        eD = (0, I.vT)({
            isTrial: !1,
            isGift: ep,
            selectedSkuId: ei,
            startedPaymentFlowWithPaymentSources: eo.current,
        }),
        eL = n?.isPausedAllowsResumeButNotUpdates,
        ew = i.useMemo(() => (0, b.Tm)({ skuId: ei, isPremium: ea, defaultPlanId: es }), [ei, es, ea]);
    t =
        ee || eL
            ? B.intl.string(B.t.nyzoFb)
            : ec
              ? B.intl.formatToPlainString(V.default["3m9DJK"], { premiumGroupProductName: (0, G.DP)() })
              : (0, b.ys)(W)
                ? (0, b.ff)(n, eg)
                : B.intl.formatToPlainString(B.t["sBpy9/"], { planName: eg.name });
    let eM = i.useRef(null),
        [eP, ex] = i.useState(null),
        [ek, eU] = i.useState(void 0),
        eG = i.useMemo(
            () => ({
                shouldUseUnifiedCheckoutUI: er,
                unifiedSubscriptionDetailsNode: eM,
                setUnifiedPlainNoticeText: ex,
                setOverrideRenewalDate: eU,
            }),
            [er],
        ),
        {
            content: eF,
            isInvoiceBilledImmediately: eV,
            ...eB
        } = null != n
            ? (0, k.TD)(
                  { hasOpenInvoice: ee, showResumeSubscriptionView: eL, planId: W },
                  {
                      disabled: eb,
                      premiumSubscription: n,
                      newPlan: eg,
                      planGroup: X,
                      fractionalPremiumInfo: eT,
                      priceOptions: o,
                      onInvoiceError: q,
                      onRenewalInvoicePreview: ey,
                  },
                  eG,
              )
            : { content: null, isInvoiceBilledImmediately: !0, shouldRenderToUnifiedSubscriptionDetailsDirectly: !1 },
        eH = n?.eligiblePaymentGateways,
        ej = null != eH && eH.length > 0 && (eh === O.B || null === em) && el ? M.fU.SELECT_PAYMENT_METHOD : void 0,
        eY = i.useMemo(
            () => ({
                label: B.intl.string(B.t["/AAR02"]),
                selectedCurrency: o.currency ?? ef,
                currencies: Q,
                onChange: J,
                disabled: eb,
            }),
            [Q, J, o, ef, eb],
        ),
        eW = (0, r.jsx)(p.A, {
            label: B.intl.string(B.t["mmDvV+"]),
            paymentSources: eC,
            selectedPaymentSourceId: eh,
            defaultPaymentSourceId: eR,
            onChange: j,
            onPaymentSourceAdd: Y,
            hidePersonalInformation: eA,
            disabled: eb,
            paymentGatewayRestrictions: n?.eligiblePaymentGateways,
            className: a()({ [H.E4]: eu }),
            shouldUseUnifiedCheckoutUI: er,
        }),
        eK = null != n && (0, D.Ge)(n, W, X),
        e$ = eK && null != Z,
        ez = er
            ? null != ed && null != eS
                ? (0, r.jsx)(y.PI, {
                      overrideRenewalDate: ek,
                      planGroup: X,
                      activeSubscription: n,
                      isTrial: !1,
                      plan: eg,
                      isGift: ep,
                      paymentSourceType: em,
                      isInvoiceBilledImmediately: eV,
                      invoiceSummaryTypeWithPreview: {
                          type: x.N$.PREMIUM_SWITCH_PLAN,
                          invoicePreview: ed,
                          renewalInvoicePreview: eS,
                      },
                      hideLegalContent: e$,
                  })
                : null
            : (0, r.jsx)(w.A, {
                  isActive: z,
                  ref: $,
                  children: eK
                      ? (0, r.jsx)(k.vi, {
                            premiumSubscription: n,
                            newPlan: eg,
                            onInvoiceError: q,
                            planGroup: X,
                            priceOptions: o,
                            preventFetch: eb,
                            disabled: eb,
                            isEEA: eO,
                            paymentSources: s,
                            setHasAcceptedTerms: K,
                            onRenewalInvoicePreview: ey,
                        })
                      : (0, r.jsx)(h.A, {
                            onChange: K,
                            finePrint: (0, r.jsx)(f.A, {
                                subscriptionPlan: eg,
                                paymentSourceType: em,
                                basePrice: (0, b.y8)(eg.id, !1, ep, eE),
                                currentSubscription: n,
                                planGroup: X,
                            }),
                            forceShow: !0,
                            showPricingLink: eg.currency !== F.Yri.USD,
                            showWithdrawalWaiver: eO,
                            disabled: eb,
                            subscriptionPlan: eg,
                            currentSubscription: n,
                            planGroup: X,
                        }),
              }),
        eq = !eL && eD && !ec,
        eZ = i.useMemo(() => (eq ? (0, r.jsx)(T.P, { planSkuId: eg.skuId }) : null), [eq, eg.skuId]);
    return er
        ? (0, r.jsx)(U.n, {
              disabled: eb,
              showFractionalPremiumBanner: eI,
              fractionalPremiumInfo: eT,
              isPremiumGroupPurchase: ec,
              paymentRestrictionBannerType: ej,
              invoiceError: Z,
              unifiedPlainNoticeText: eP,
              invoicePreview: ed,
              invoicePreviewComponent: eF,
              shouldShowPlanSelectAndPromoBanner: eq,
              shouldRenderInvoicePreviewSubscriptionDetailsDirectly:
                  eB.shouldRenderToUnifiedSubscriptionDetailsDirectly,
              newPlan: eg,
              planId: W,
              priceOptions: o,
              premiumPlanOptions: ew,
              unifiedSubscriptionDetailsNode: eM,
              isInvoiceBilledImmediately: eV,
              paymentSelectContent: eW,
              currencySelectComponent: (0, r.jsx)(y.rk, { ...eY }),
              legalContent: ez,
          })
        : (0, r.jsxs)("div", {
              className: H.Du,
              children: [
                  (0, r.jsx)(M.je, { paymentRestrictionBannerType: ej }),
                  eq &&
                      (0, r.jsxs)("div", {
                          children: [
                              eZ,
                              (0, r.jsx)(P.$p, {
                                  disabled: eb,
                                  planOptions: ew,
                                  selectedPlanId: W,
                                  planGroup: X,
                                  showTotal: !1,
                                  priceOptions: eE,
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
                  (0, r.jsx)(d.D0$, { label: t, children: eF }),
                  (0, r.jsx)("div", { className: H.LC, children: eW }),
                  (0, r.jsx)(_.f, { currencies: Q, className: H.p2, children: (0, r.jsx)(_.A, { ...eY }) }),
                  ez,
              ],
          });
}
