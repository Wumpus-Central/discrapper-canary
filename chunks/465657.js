n.d(t, { Y: () => f });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(803694),
    o = n(166532),
    u = n(482132),
    c = n(216641),
    d = n(786567),
    p = n(202475),
    m = n(883645),
    h = n(263532),
    C = n(26279);
function f(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: f,
            renderStepBody: S,
            resolveInternalState: E,
            resolveTenantReviewButtonProps: y,
            handleStepChange: A,
            openInvoiceId: I,
            analyticsData: g,
            analyticsLocation: P,
        } = e,
        {
            paymentSourceId: v,
            purchasePreviewError: x,
            customCheckoutFlow: _,
            contextMetadata: T,
            purchaseError: N,
            setCheckoutCurrency: b,
            setLinkWalletEnabled: j,
            checkoutPaymentSources: R,
            hasCheckoutContextLoaded: O,
            invoicePreview: M,
        } = (0, h.t4)((e) => ({
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            setLinkWalletEnabled: e.setLinkWalletEnabled,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
            invoicePreview: e.checkoutInvoicePreview,
        })),
        L = (0, m.s2)();
    a()(null != L, "Step should be set");
    let k = i.useRef(null),
        { paymentSources: w } = (0, p.j)(),
        D = (0, c.W)(w, v),
        U = i.useMemo(() => {
            if (null == v) return !1;
            if (!O) return !0;
            let e = R.find((e) => e.id === v);
            return null != e && !e.enabled;
        }, [R, O, v]),
        G = (0, s.iB)({ checkoutPaymentSources: R, paymentSourceId: v, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: F } = i.useMemo(() => {
            let e = { disablePurchase: G || _ === C.uH.DEV_STORYBOOK_CHECKOUT };
            return null != E
                ? E(
                      { ...e },
                      {
                          paymentSource: D,
                          paymentSourceId: v,
                          isSelectedPaymentSourceDisabled: U,
                          invoicePreview: M,
                          purchasePreviewError: x,
                      },
                  )
                : e;
        }, [E, D, v, U, M, x, G, _]);
    i.useEffect(() => {
        null != N && null != k.current && k.current.scrollIntoView({ behavior: "smooth" });
    }, [N]);
    let B = i.useCallback(() => {
            (b(void 0), n());
        }, [b, n]),
        H = i.useCallback(
            (e) => {
                (j(e?.linkWalletEnabled ?? !0), A(o.pn.ADD_PAYMENT_STEPS));
            },
            [A, j],
        ),
        W = i.useMemo(() => S({ handlePaymentSourceAdd: H }), [S, H]),
        Y = (0, l.jsx)(d.U, {
            resolveTenantReviewButtonProps: y,
            onBack: B,
            flowStartTime: T.startTime,
            onPaymentSourceAdd: H,
            disablePurchase: F,
            analyticsLocation: P,
            baseAnalyticsData: g,
            openInvoiceId: I,
            handleStepChange: A,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: f,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: W }), (0, l.jsx)(u.UX, { children: Y })],
    });
}
