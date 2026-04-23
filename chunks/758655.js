n.d(e, { A: () => b }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(304072),
    o = n(558620),
    c = n(427675),
    u = n(369280),
    d = n(163437),
    p = n(156312),
    m = n(166532),
    f = n(566980),
    x = n(312649),
    g = n(534479),
    h = n(482132),
    S = n(367160);
function b(t) {
    let {
            backButtonEligible: e,
            prevStep: n,
            handleStepChange: r,
            planGroup: b,
            openInvoiceId: A,
            analyticsData: j,
            analyticsLocation: E,
            handleClose: v,
        } = t,
        {
            activeSubscription: C,
            setUpdatedSubscription: y,
            contextMetadata: I,
            currencies: N,
            paymentSources: P,
            priceOptions: _,
            purchaseError: k,
            setCurrency: T,
            setPurchaseState: R,
            purchaseState: w,
            subscriptionMetadataRequest: B,
            setHasAcceptedTerms: D,
        } = (0, p.P5)(),
        F = (0, o.A)(),
        U = (0, c.S3)();
    a()(null != F, "Expected plan to be selected");
    let L = l.useRef(null),
        [O, H] = (0, s.A)(!1, 500),
        [M, G] = l.useState(null),
        Y = (0, d.bg)(U?.flags ?? 0);
    l.useEffect(() => {
        null != k && null != L.current && L.current.scrollIntoView({ behavior: "smooth" });
    }, [k]);
    let W = l.useCallback(
            (t) => {
                y(t), r(m.pn.CONFIRM);
            },
            [r, y],
        ),
        Q = l.useRef(null);
    if (w === f.h.PURCHASING) return (0, i.jsx)(g.A, {});
    let Z = () => {
        r(m.pn.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.dZ, {
                children:
                    null == C
                        ? (0, i.jsx)(S._, {
                              selectedPlanId: F.id,
                              planGroup: b,
                              paymentSources: P,
                              priceOptions: _,
                              currencies: N,
                              onCurrencyChange: (t) => T(t),
                              handlePaymentSourceAdd: () => r(m.pn.ADD_PAYMENT_STEPS),
                              metadata: Y ? void 0 : B,
                          })
                        : (0, i.jsx)(u.A, {
                              premiumSubscription: C,
                              paymentSources: P,
                              priceOptions: _,
                              onPaymentSourceAdd: Z,
                              planId: F.id,
                              setHasAcceptedTerms: D,
                              legalTermsNodeRef: Q,
                              hasLegalTermsFlash: O,
                              invoiceError: M,
                              onInvoiceError: (t) => {
                                  G(t);
                              },
                              planGroup: b,
                              currencies: N,
                              onCurrencyChange: (t) => T(t),
                              hasOpenInvoice: null != A,
                              purchaseState: w,
                              handleClose: v,
                              shouldUseUnifiedCheckoutUI: !0,
                          }),
            }),
            (0, i.jsx)(h.UX, {
                children: (0, i.jsx)(x.A, {
                    premiumSubscription: C ?? null,
                    setPurchaseState: R,
                    onBack: () => null != n && r(n),
                    onNext: W,
                    legalTermsNodeRef: Q,
                    flashLegalTerms: () => H(!0),
                    analyticsLocation: E,
                    baseAnalyticsData: j,
                    flowStartTime: I.startTime,
                    planGroup: b,
                    openInvoiceId: A,
                    metadata: Y ? void 0 : B,
                    backButtonEligible: e,
                    invoiceError: M,
                    disablePurchase: B?.guild_id == null && !Y,
                    onPaymentSourceAdd: Z,
                }),
            }),
        ],
    });
}
