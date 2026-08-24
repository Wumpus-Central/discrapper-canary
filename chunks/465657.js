n.d(t, { Y: () => E });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(803694),
    o = n(166532),
    u = n(482132),
    c = n(216641),
    d = n(649791),
    m = n(202475),
    p = n(883645),
    C = n(666646),
    h = n(87725),
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
            openInvoiceId: P,
            analyticsData: g,
            analyticsLocation: v,
        } = e,
        {
            paymentSourceId: _,
            purchasePreviewError: x,
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
        D = (0, c.W)(w, _),
        G = i.useMemo(() => {
            if (null == _) return !1;
            if (!O) return !0;
            let e = M.find((e) => e.id === _);
            return null != e && !e.enabled;
        }, [M, O, _]),
        F = (0, s.iB)({ checkoutPaymentSources: M, paymentSourceId: _, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: B } = i.useMemo(() => {
            let e = { disablePurchase: F || T === f.uH.DEV_STORYBOOK_CHECKOUT };
            return null != y
                ? y(
                      { ...e },
                      {
                          paymentSource: D,
                          paymentSourceId: _,
                          isSelectedPaymentSourceDisabled: G,
                          invoicePreview: U,
                          purchasePreviewError: x,
                      },
                  )
                : e;
        }, [y, D, _, G, U, x, F, T]);
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
            baseAnalyticsData: g,
            openInvoiceId: P,
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
