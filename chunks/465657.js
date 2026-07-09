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
            setLinkWalletEnabled: O,
        } = (0, E.t4)((e) => ({
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            setLinkWalletEnabled: e.setLinkWalletEnabled,
        })),
        j = (0, d.bB)();
    a()(null != j, "Step should be set");
    let L = i.useRef(null),
        { paymentSources: w } = (0, C.jm)(),
        { checkoutPaymentSources: D, hasInvoiceOrderContextLoaded: k } = (0, m.t)(),
        U = (0, h.sw)(),
        G = (0, p.W)(w, x),
        F = i.useMemo(() => {
            if (null == x) return !1;
            if (!k) return !0;
            let e = D.find((e) => e.id === x);
            return null != e && !e.enabled;
        }, [D, k, x]),
        B = (0, s.iB)({ checkoutPaymentSources: D, paymentSourceId: x, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: Y } = i.useMemo(() => {
            let e = { disablePurchase: B || N === A.uH.DEV_STORYBOOK_CHECKOUT };
            return null != S
                ? S(
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
        }, [S, G, x, F, U, v, B, N]);
    i.useEffect(() => {
        null != R && null != L.current && L.current.scrollIntoView({ behavior: "smooth" });
    }, [R]);
    let H = i.useCallback(() => {
            M(void 0), n();
        }, [M, n]),
        W = i.useCallback(
            (e) => {
                O(e?.linkWalletEnabled ?? !0), T(o.pn.ADD_PAYMENT_STEPS);
            },
            [T, O],
        ),
        V = i.useMemo(() => y({ handlePaymentSourceAdd: W }), [y, W]),
        K = (0, l.jsx)(u.U, {
            resolveTenantReviewButtonProps: P,
            onBack: H,
            flowStartTime: b.startTime,
            onPaymentSourceAdd: W,
            disablePurchase: Y,
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
        children: [(0, l.jsx)(c.dZ, { children: V }), (0, l.jsx)(c.UX, { children: K })],
    });
}
