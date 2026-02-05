n.d(t, { A: () => T }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(304072),
    d = n(494230),
    u = n(369280),
    m = n(163437),
    p = n(71393),
    x = n(156312),
    f = n(166532),
    h = n(566980),
    g = n(69494),
    b = n(312649),
    j = n(534479),
    A = n(482132),
    S = n(921925),
    v = n(985018),
    C = n(820970);
function T(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: l,
            trialFooterMessageOverride: T,
            reviewWarningMessage: N,
            planGroup: E,
            openInvoiceId: _,
            analyticsData: P,
            analyticsLocation: y,
            handleClose: k,
        } = e,
        {
            activeSubscription: I,
            application: R,
            setUpdatedSubscription: w,
            contextMetadata: D,
            currencies: B,
            paymentSources: F,
            priceOptions: U,
            purchaseError: M,
            purchaseTokenAuthState: O,
            selectedPlan: G,
            selectedSku: H,
            setCurrency: L,
            setPaymentSourceId: Y,
            setPurchaseState: W,
            setPurchaseError: q,
            purchaseState: V,
            subscriptionMetadataRequest: Z,
            setHasAcceptedTerms: Q,
        } = (0, x.P5)();
    a()(null != G, "Expected plan to be selected");
    let X = r.useRef(null),
        [$, z] = (0, c.A)(!1, 500),
        K = Z?.guild_id,
        J = (0, s.bG)([p.A], () => p.A.getGuild(K), [K]),
        [ee, et] = r.useState(null),
        en = (0, m.bg)(H?.flags ?? 0);
    r.useEffect(() => {
        null != M && null != X.current && X.current.scrollIntoView({ behavior: "smooth" });
    }, [M]);
    let ei = r.useCallback(
            (e) => {
                w(e), l(f.pn.CONFIRM);
            },
            [l, w],
        ),
        er = r.useRef(null);
    if (V === h.h.PURCHASING) return (0, i.jsx)(j.A, {});
    let el = () => {
        l(f.pn.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.A, { className: C.jD }),
            (0, i.jsxs)(A.dZ, {
                children: [
                    (0, i.jsx)(S.A, {}),
                    en &&
                        (0, i.jsxs)("div", {
                            className: C.Uq,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "eyebrow",
                                    color: "text-default",
                                    children: v.intl.string(v.t.nf5LOU),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "interactive-text-default",
                                    children: v.intl.format(v.t.y4n0GS, { applicationName: R?.name }),
                                }),
                            ],
                        }),
                    !en &&
                        (0, i.jsx)("div", {
                            className: C.Vw,
                            children: (0, i.jsx)(o.D0$, {
                                label: v.intl.string(v.t["5qyruI"]),
                                children: (0, i.jsxs)("div", {
                                    className: C.YS,
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: v.intl.string(v.t.dBih7e),
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            lineClamp: 1,
                                            children: J?.name ?? v.intl.string(v.t.dtwqPR),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    null == I
                        ? (0, i.jsx)(d.A, {
                              selectedPlanId: G.id,
                              planGroup: E,
                              paymentSources: F,
                              onPaymentSourceChange: (e) => Y(null != e ? e.id : null),
                              priceOptions: U,
                              currencies: B,
                              onCurrencyChange: (e) => L(e),
                              handlePaymentSourceAdd: () => l(f.pn.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: Q,
                              legalTermsNodeRef: er,
                              hasLegalTermsFlash: $,
                              trialFooterMessageOverride: T,
                              reviewWarningMessage: N,
                              metadata: en ? void 0 : Z,
                              purchaseState: V,
                              hideSubscriptionDetails: !0,
                              handleClose: k,
                          })
                        : (0, i.jsx)(u.A, {
                              premiumSubscription: I,
                              paymentSources: F,
                              priceOptions: U,
                              onPaymentSourceChange: (e) => Y(null != e ? e.id : null),
                              onPaymentSourceAdd: el,
                              planId: G.id,
                              setHasAcceptedTerms: Q,
                              legalTermsNodeRef: er,
                              hasLegalTermsFlash: $,
                              onInvoiceError: (e) => {
                                  et(e);
                              },
                              planGroup: E,
                              currencies: B,
                              onCurrencyChange: (e) => L(e),
                              hasOpenInvoice: null != _,
                              purchaseState: V,
                              handleClose: k,
                          }),
                ],
            }),
            (0, i.jsx)(A.UX, {
                children: (0, i.jsx)(b.A, {
                    premiumSubscription: I ?? null,
                    setPurchaseState: W,
                    onBack: () => null != n && l(n),
                    onNext: ei,
                    onPurchaseError: (e) => q(e),
                    legalTermsNodeRef: er,
                    flashLegalTerms: () => z(!0),
                    analyticsLocation: y,
                    baseAnalyticsData: P,
                    flowStartTime: D.startTime,
                    planGroup: E,
                    purchaseTokenAuthState: O,
                    openInvoiceId: _,
                    metadata: en ? void 0 : Z,
                    backButtonEligible: t,
                    invoiceError: ee,
                    disablePurchase: Z?.guild_id == null && !en,
                    onPaymentSourceAdd: el,
                }),
            }),
        ],
    });
}
