n.d(t, { Y: () => S });
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
function S(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: S,
            renderStepBody: f,
            resolveInternalState: y,
            resolveTenantReviewButtonProps: P,
            handleStepChange: T,
            openInvoiceId: _,
            analyticsData: I,
            analyticsLocation: g,
        } = e,
        {
            paymentSourceId: v,
            purchasePreviewError: x,
            customCheckoutFlow: N,
            contextMetadata: R,
            purchaseError: b,
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
        { checkoutPaymentSources: D, hasInvoiceOrderContextLoaded: w } = (0, m.t)(),
        U = (0, h.sw)(),
        k = (0, p.W)(L, v),
        G = i.useMemo(() => {
            if (null == v) return !1;
            if (!w) return !0;
            let e = D.find((e) => e.id === v);
            return null != e && !e.enabled;
        }, [D, w, v]),
        F = (0, s.iB)({ checkoutPaymentSources: D, paymentSourceId: v, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: B } = i.useMemo(() => {
            let e = { disablePurchase: F || N === A.uH.DEV_STORYBOOK_CHECKOUT };
            return null != y
                ? y(
                      { ...e },
                      {
                          paymentSource: k,
                          paymentSourceId: v,
                          isSelectedPaymentSourceDisabled: G,
                          invoicePreview: U,
                          purchasePreviewError: x,
                      },
                  )
                : e;
        }, [y, k, v, G, U, x, F, N]);
    i.useEffect(() => {
        null != b && null != j.current && j.current.scrollIntoView({ behavior: "smooth" });
    }, [b]);
    let Y = i.useCallback(() => {
            M(void 0), n();
        }, [M, n]),
        H = i.useCallback(() => {
            T(o.pn.ADD_PAYMENT_STEPS);
        }, [T]),
        W = i.useMemo(() => f({ handlePaymentSourceAdd: H }), [f, H]),
        V = (0, l.jsx)(u.U, {
            resolveTenantReviewButtonProps: P,
            onBack: Y,
            flowStartTime: R.startTime,
            onPaymentSourceAdd: H,
            disablePurchase: B,
            analyticsLocation: g,
            baseAnalyticsData: I,
            openInvoiceId: _,
            handleStepChange: T,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: S,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.dZ, { children: W }), (0, l.jsx)(c.UX, { children: V })],
    });
}
