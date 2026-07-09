n.d(t, { Y: () => f });
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
    C = n(426398),
    h = n(666646),
    E = n(6938),
    A = n(26279);
function f(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: f,
            renderStepBody: y,
            resolveInternalState: S,
            resolveTenantReviewButtonProps: P,
            handleStepChange: T,
            openInvoiceId: I,
            analyticsData: _,
            analyticsLocation: g,
        } = e,
        {
            paymentSourceId: x,
            purchasePreviewError: v,
            customCheckoutFlow: N,
            contextMetadata: b,
            purchaseError: R,
            setCheckoutCurrency: M,
        } = (0, E.t4)((e) => ({
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        O = (0, d.bB)();
    a()(null != O, "Step should be set");
    let j = i.useRef(null),
        { paymentSources: L } = (0, C.jm)(),
        { checkoutPaymentSources: w, hasInvoiceOrderContextLoaded: D } = (0, m.t)(),
        k = (0, h.sw)(),
        U = (0, p.W)(L, x),
        G = i.useMemo(() => {
            if (null == x) return !1;
            if (!D) return !0;
            let e = w.find((e) => e.id === x);
            return null != e && !e.enabled;
        }, [w, D, x]),
        F = (0, s.iB)({ checkoutPaymentSources: w, paymentSourceId: x, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: B } = i.useMemo(() => {
            let e = { disablePurchase: F || N === A.uH.DEV_STORYBOOK_CHECKOUT };
            return null != S
                ? S(
                      { ...e },
                      {
                          paymentSource: U,
                          paymentSourceId: x,
                          isSelectedPaymentSourceDisabled: G,
                          invoicePreview: k,
                          purchasePreviewError: v,
                      },
                  )
                : e;
        }, [S, U, x, G, k, v, F, N]);
    i.useEffect(() => {
        null != R && null != j.current && j.current.scrollIntoView({ behavior: "smooth" });
    }, [R]);
    let Y = i.useCallback(() => {
            M(void 0), n();
        }, [M, n]),
        H = i.useCallback(() => {
            T(o.pn.ADD_PAYMENT_STEPS);
        }, [T]),
        W = i.useMemo(() => y({ handlePaymentSourceAdd: H }), [y, H]),
        V = (0, l.jsx)(u.U, {
            resolveTenantReviewButtonProps: P,
            onBack: Y,
            flowStartTime: b.startTime,
            onPaymentSourceAdd: H,
            disablePurchase: B,
            analyticsLocation: g,
            baseAnalyticsData: _,
            openInvoiceId: I,
            handleStepChange: T,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: f,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.dZ, { children: W }), (0, l.jsx)(c.UX, { children: V })],
    });
}
