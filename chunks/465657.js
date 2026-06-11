n.d(t, { Y: () => _ });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(304072),
    o = n(606267),
    u = n(166532),
    c = n(166926),
    d = n(482132),
    p = n(615310),
    m = n(216641),
    h = n(364995),
    A = n(426398),
    E = n(666646),
    C = n(211159),
    y = n(26279);
function _(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: i,
            subscriptionMetadata: _,
            renderStepBody: S,
            resolveInternalState: P,
            handleStepChange: I,
            openInvoiceId: f,
            analyticsData: T,
            analyticsLocation: N,
        } = e,
        {
            activeSubscription: g,
            paymentSourceId: v,
            purchasePreviewError: x,
            customCheckoutFlow: R,
            contextMetadata: M,
            purchaseError: b,
            setCheckoutCurrency: L,
        } = (0, C.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        O = (0, p.bB)();
    a()(null != O, "Step should be set");
    let j = r.useRef(null),
        [w, D] = (0, s.A)(!1, 500),
        { paymentSources: U } = (0, A.jm)(),
        { checkoutPaymentSources: k, hasInvoiceOrderContextLoaded: G } = (0, h.t)(),
        F = (0, E.sw)(),
        Y = (0, m.W)(U, v),
        B = r.useMemo(() => {
            if (null == v) return !1;
            if (!G) return !0;
            let e = k.find((e) => e.id === v);
            return null != e && !e.enabled;
        }, [k, G, v]),
        W = (0, o.iB)({ checkoutPaymentSources: k, paymentSourceId: v, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: H } = r.useMemo(() => {
            let e = { disablePurchase: W || R === y.uH.DEV_STORYBOOK_CHECKOUT };
            return null != P
                ? P(e, {
                      paymentSource: Y,
                      paymentSourceId: v,
                      isSelectedPaymentSourceDisabled: B,
                      invoicePreview: F,
                      purchasePreviewError: x,
                  })
                : e;
        }, [P, Y, v, B, F, x, W, R]);
    r.useEffect(() => {
        null != b && null != j.current && j.current.scrollIntoView({ behavior: "smooth" });
    }, [b]);
    let V = r.useRef(null),
        K = (0, E.mx)(),
        Z = r.useCallback(() => {
            L(void 0), n();
        }, [L, n]),
        q = r.useCallback(() => {
            I(u.pn.ADD_PAYMENT_STEPS);
        }, [I]),
        z = r.useMemo(() => ({ hasLegalTermsFlash: w, legalTermsNodeRef: V }), [w, V]),
        $ = r.useMemo(() => S({ handlePaymentSourceAdd: q }, z), [S, q, z]),
        X = (0, l.jsx)(c.U, {
            premiumSubscription: g ?? null,
            invoiceError: K,
            onBack: Z,
            legalTermsNodeRef: V,
            flashLegalTerms: () => D(!0),
            flowStartTime: M.startTime,
            onPaymentSourceAdd: q,
            disablePurchase: H,
            analyticsLocation: N,
            baseAnalyticsData: T,
            openInvoiceId: f,
            handleStepChange: I,
            postPurchaseStep: u.pn.CONFIRM,
            backButtonEligible: i,
            metadata: _,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.dZ, { children: $ }), (0, l.jsx)(d.UX, { children: X })],
    });
}
