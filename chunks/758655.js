n.d(e, { A: () => b }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(304072),
    o = n(558620),
    d = n(427675),
    c = n(369280),
    u = n(163437),
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
            analyticsLocation: v,
            handleClose: E,
        } = t,
        {
            activeSubscription: C,
            setUpdatedSubscription: y,
            contextMetadata: I,
            currencies: N,
            paymentSources: P,
            priceOptions: T,
            purchaseError: _,
            setCurrency: k,
            setPurchaseState: R,
            purchaseState: w,
            subscriptionMetadataRequest: B,
            setHasAcceptedTerms: D,
        } = (0, p.P5)(),
        F = (0, o.A)(),
        U = (0, d.S3)();
    a()(null != F, "Expected plan to be selected");
    let H = l.useRef(null),
        [L, O] = (0, s.A)(!1, 500),
        [M, G] = l.useState(null),
        Y = (0, u.bg)(U?.flags ?? 0);
    l.useEffect(() => {
        null != _ && null != H.current && H.current.scrollIntoView({ behavior: "smooth" });
    }, [_]);
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
                              priceOptions: T,
                              currencies: N,
                              onCurrencyChange: (t) => k(t),
                              handlePaymentSourceAdd: () => r(m.pn.ADD_PAYMENT_STEPS),
                              metadata: Y ? void 0 : B,
                          })
                        : (0, i.jsx)(c.A, {
                              premiumSubscription: C,
                              paymentSources: P,
                              priceOptions: T,
                              onPaymentSourceAdd: Z,
                              planId: F.id,
                              setHasAcceptedTerms: D,
                              legalTermsNodeRef: Q,
                              hasLegalTermsFlash: L,
                              invoiceError: M,
                              onInvoiceError: (t) => {
                                  G(t);
                              },
                              planGroup: b,
                              currencies: N,
                              onCurrencyChange: (t) => k(t),
                              hasOpenInvoice: null != A,
                              purchaseState: w,
                              handleClose: E,
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
                    flashLegalTerms: () => O(!0),
                    analyticsLocation: v,
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
