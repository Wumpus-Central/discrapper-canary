n.d(t, { Y: () => A });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(606267),
    o = n(166532),
    u = n(482132),
    c = n(216641),
    d = n(649791),
    p = n(202475),
    m = n(364995),
    C = n(883645),
    h = n(666646),
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
            paymentSourceId: v,
            purchasePreviewError: x,
            customCheckoutFlow: N,
            contextMetadata: R,
            purchaseError: b,
            setCheckoutCurrency: M,
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
        O = (0, C.s2)();
    a()(null != O, "Step should be set");
    let L = i.useRef(null),
        { paymentSources: w } = (0, p.jm)(),
        { checkoutPaymentSources: k, hasInvoiceOrderContextLoaded: U } = (0, m.t)(),
        D = (0, h.sw)(),
        G = (0, c.W)(w, v),
        F = i.useMemo(() => {
            if (null == v) return !1;
            if (!U) return !0;
            let e = k.find((e) => e.id === v);
            return null != e && !e.enabled;
        }, [k, U, v]),
        H = (0, s.iB)({ checkoutPaymentSources: k, paymentSourceId: v, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: B } = i.useMemo(() => {
            let e = { disablePurchase: H || N === f.uH.DEV_STORYBOOK_CHECKOUT };
            return null != y
                ? y(
                      { ...e },
                      {
                          paymentSource: G,
                          paymentSourceId: v,
                          isSelectedPaymentSourceDisabled: F,
                          invoicePreview: D,
                          purchasePreviewError: x,
                      },
                  )
                : e;
        }, [y, G, v, F, D, x, H, N]);
    i.useEffect(() => {
        null != b && null != L.current && L.current.scrollIntoView({ behavior: "smooth" });
    }, [b]);
    let Y = i.useCallback(() => {
            M(void 0), n();
        }, [M, n]),
        W = i.useCallback(
            (e) => {
                j(e?.linkWalletEnabled ?? !0), I(o.pn.ADD_PAYMENT_STEPS);
            },
            [I, j],
        ),
        V = i.useMemo(() => S({ handlePaymentSourceAdd: W }), [S, W]),
        K = (0, l.jsx)(d.U, {
            resolveTenantReviewButtonProps: P,
            onBack: Y,
            flowStartTime: R.startTime,
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
        children: [(0, l.jsx)(u.dZ, { children: V }), (0, l.jsx)(u.UX, { children: K })],
    });
}
