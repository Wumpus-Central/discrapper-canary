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
    p = n(202475),
    m = n(883645),
    h = n(666646),
    C = n(87725),
    f = n(26279);
function E(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: E,
            renderStepBody: S,
            resolveInternalState: y,
            resolveTenantReviewButtonProps: A,
            handleStepChange: P,
            openInvoiceId: I,
            analyticsData: g,
            analyticsLocation: v,
        } = e,
        {
            paymentSourceId: _,
            purchasePreviewError: T,
            customCheckoutFlow: x,
            contextMetadata: N,
            purchaseError: b,
            setCheckoutCurrency: R,
            setLinkWalletEnabled: j,
            checkoutPaymentSources: M,
            hasCheckoutContextLoaded: O,
        } = (0, C.t4)((e) => ({
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
        L = (0, m.s2)();
    a()(null != L, "Step should be set");
    let k = i.useRef(null),
        { paymentSources: w } = (0, p.j)(),
        U = (0, h.sw)(),
        D = (0, c.W)(w, _),
        G = i.useMemo(() => {
            if (null == _) return !1;
            if (!O) return !0;
            let e = M.find((e) => e.id === _);
            return null != e && !e.enabled;
        }, [M, O, _]),
        F = (0, s.iB)({ checkoutPaymentSources: M, paymentSourceId: _, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: B } = i.useMemo(() => {
            let e = { disablePurchase: F || x === f.uH.DEV_STORYBOOK_CHECKOUT };
            return null != y
                ? y(
                      { ...e },
                      {
                          paymentSource: D,
                          paymentSourceId: _,
                          isSelectedPaymentSourceDisabled: G,
                          invoicePreview: U,
                          purchasePreviewError: T,
                      },
                  )
                : e;
        }, [y, D, _, G, U, T, F, x]);
    i.useEffect(() => {
        null != b && null != k.current && k.current.scrollIntoView({ behavior: "smooth" });
    }, [b]);
    let H = i.useCallback(() => {
            R(void 0), n();
        }, [R, n]),
        Y = i.useCallback(
            (e) => {
                j(e?.linkWalletEnabled ?? !0), P(o.pn.ADD_PAYMENT_STEPS);
            },
            [P, j],
        ),
        W = i.useMemo(() => S({ handlePaymentSourceAdd: Y }), [S, Y]),
        V = (0, l.jsx)(d.U, {
            resolveTenantReviewButtonProps: A,
            onBack: H,
            flowStartTime: N.startTime,
            onPaymentSourceAdd: Y,
            disablePurchase: B,
            analyticsLocation: v,
            baseAnalyticsData: g,
            openInvoiceId: I,
            handleStepChange: P,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: E,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: W }), (0, l.jsx)(u.UX, { children: V })],
    });
}
