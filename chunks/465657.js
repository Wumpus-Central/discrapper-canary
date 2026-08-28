n.d(t, { Y: () => E });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(803694),
    o = n(166532),
    u = n(482132),
    c = n(216641),
    d = n(786948),
    m = n(202475),
    p = n(883645),
    C = n(666646),
    h = n(206441),
    f = n(26279);
function E(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: E,
            renderStepBody: S,
            resolveInternalState: y,
            resolveTenantReviewButtonProps: I,
            handleStepChange: A,
            openInvoiceId: g,
            analyticsData: P,
            analyticsLocation: v,
        } = e,
        {
            paymentSourceId: x,
            purchasePreviewError: _,
            customCheckoutFlow: T,
            contextMetadata: N,
            purchaseError: b,
            setCheckoutCurrency: j,
            setLinkWalletEnabled: R,
            checkoutPaymentSources: M,
            hasCheckoutContextLoaded: O,
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
        })),
        L = (0, p.s2)();
    a()(null != L, "Step should be set");
    let k = i.useRef(null),
        { paymentSources: w } = (0, m.j)(),
        U = (0, C.sw)(),
        D = (0, c.W)(w, x),
        G = i.useMemo(() => {
            if (null == x) return !1;
            if (!O) return !0;
            let e = M.find((e) => e.id === x);
            return null != e && !e.enabled;
        }, [M, O, x]),
        F = (0, s.iB)({ checkoutPaymentSources: M, paymentSourceId: x, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: B } = i.useMemo(() => {
            let e = { disablePurchase: F || T === f.uH.DEV_STORYBOOK_CHECKOUT };
            return null != y
                ? y(
                      { ...e },
                      {
                          paymentSource: D,
                          paymentSourceId: x,
                          isSelectedPaymentSourceDisabled: G,
                          invoicePreview: U,
                          purchasePreviewError: _,
                      },
                  )
                : e;
        }, [y, D, x, G, U, _, F, T]);
    i.useEffect(() => {
        null != b && null != k.current && k.current.scrollIntoView({ behavior: "smooth" });
    }, [b]);
    let H = i.useCallback(() => {
            j(void 0), n();
        }, [j, n]),
        W = i.useCallback(
            (e) => {
                R(e?.linkWalletEnabled ?? !0), A(o.pn.ADD_PAYMENT_STEPS);
            },
            [A, R],
        ),
        Y = i.useMemo(() => S({ handlePaymentSourceAdd: W }), [S, W]),
        V = (0, l.jsx)(d.U, {
            resolveTenantReviewButtonProps: I,
            onBack: H,
            flowStartTime: N.startTime,
            onPaymentSourceAdd: W,
            disablePurchase: B,
            analyticsLocation: v,
            baseAnalyticsData: P,
            openInvoiceId: g,
            handleStepChange: A,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: E,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: Y }), (0, l.jsx)(u.UX, { children: V })],
    });
}
