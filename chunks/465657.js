n.d(t, { Y: () => A });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(606267),
    o = n(166532),
    u = n(295413),
    c = n(482132),
    d = n(615310),
    p = n(216641),
    m = n(364995),
    h = n(426398),
    C = n(666646),
    E = n(316915),
    f = n(26279);
function A(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: A,
            renderStepBody: S,
            resolveInternalState: y,
            resolveTenantReviewButtonProps: P,
            handleStepChange: I,
            openInvoiceId: _,
            analyticsData: T,
            analyticsLocation: g,
        } = e,
        {
            paymentSourceId: x,
            purchasePreviewError: v,
            customCheckoutFlow: N,
            contextMetadata: M,
            purchaseError: R,
            setCheckoutCurrency: b,
            setLinkWalletEnabled: j,
        } = (0, E.t4)((e) => ({
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            setLinkWalletEnabled: e.setLinkWalletEnabled,
        })),
        O = (0, d.bB)();
    a()(null != O, "Step should be set");
    let L = i.useRef(null),
        { paymentSources: w } = (0, h.jm)(),
        { checkoutPaymentSources: k, hasInvoiceOrderContextLoaded: D } = (0, m.t)(),
        U = (0, C.sw)(),
        G = (0, p.W)(w, x),
        F = i.useMemo(() => {
            if (null == x) return !1;
            if (!D) return !0;
            let e = k.find((e) => e.id === x);
            return null != e && !e.enabled;
        }, [k, D, x]),
        H = (0, s.iB)({ checkoutPaymentSources: k, paymentSourceId: x, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: B } = i.useMemo(() => {
            let e = { disablePurchase: H || N === f.uH.DEV_STORYBOOK_CHECKOUT };
            return null != y
                ? y(
                      { ...e },
                      {
                          paymentSource: G,
                          paymentSourceId: x,
                          isSelectedPaymentSourceDisabled: F,
                          invoicePreview: U,
                          purchasePreviewError: v,
                      },
                  )
                : e;
        }, [y, G, x, F, U, v, H, N]);
    i.useEffect(() => {
        null != R && null != L.current && L.current.scrollIntoView({ behavior: "smooth" });
    }, [R]);
    let Y = i.useCallback(() => {
            b(void 0), n();
        }, [b, n]),
        W = i.useCallback(
            (e) => {
                j(e?.linkWalletEnabled ?? !0), I(o.pn.ADD_PAYMENT_STEPS);
            },
            [I, j],
        ),
        V = i.useMemo(() => S({ handlePaymentSourceAdd: W }), [S, W]),
        K = (0, l.jsx)(u.U, {
            resolveTenantReviewButtonProps: P,
            onBack: Y,
            flowStartTime: M.startTime,
            onPaymentSourceAdd: W,
            disablePurchase: B,
            analyticsLocation: g,
            baseAnalyticsData: T,
            openInvoiceId: _,
            handleStepChange: I,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: A,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.dZ, { children: V }), (0, l.jsx)(c.UX, { children: K })],
    });
}
