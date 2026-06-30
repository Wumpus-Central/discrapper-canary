"use strict";
n.d(t, { Y: () => A });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(304072),
    l = n(606267),
    u = n(166532),
    c = n(295413),
    d = n(482132),
    _ = n(615310),
    h = n(216641),
    f = n(364995),
    p = n(426398),
    E = n(666646),
    m = n(46332),
    g = n(26279);
function A(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: s,
            subscriptionMetadata: A,
            renderStepBody: I,
            resolveInternalState: T,
            resolveTenantReviewButtonProps: S,
            handleStepChange: y,
            openInvoiceId: C,
            analyticsData: N,
            analyticsLocation: v,
        } = e,
        {
            activeSubscription: R,
            paymentSourceId: O,
            purchasePreviewError: b,
            customCheckoutFlow: D,
            contextMetadata: L,
            purchaseError: w,
            setCheckoutCurrency: M,
        } = (0, m.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        P = (0, _.bB)();
    a()(null != P, "Step should be set");
    let x = r.useRef(null),
        [k, U] = (0, o.A)(!1, 500),
        { paymentSources: G } = (0, p.jm)(),
        { checkoutPaymentSources: F, hasInvoiceOrderContextLoaded: V } = (0, f.t)(),
        B = (0, E.sw)(),
        j = (0, h.W)(G, O),
        H = r.useMemo(() => {
            if (null == O) return !1;
            if (!V) return !0;
            let e = F.find((e) => e.id === O);
            return null != e && !e.enabled;
        }, [F, V, O]),
        Y = (0, l.iB)({ checkoutPaymentSources: F, paymentSourceId: O, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: W } = r.useMemo(() => {
            let e = { disablePurchase: Y || D === g.uH.DEV_STORYBOOK_CHECKOUT };
            return null != T
                ? T(
                      { ...e },
                      {
                          paymentSource: j,
                          paymentSourceId: O,
                          isSelectedPaymentSourceDisabled: H,
                          invoicePreview: B,
                          purchasePreviewError: b,
                      },
                  )
                : e;
        }, [T, j, O, H, B, b, Y, D]);
    r.useEffect(() => {
        null != w && null != x.current && x.current.scrollIntoView({ behavior: "smooth" });
    }, [w]);
    let K = r.useRef(null),
        $ = r.useCallback(() => {
            M(void 0), n();
        }, [M, n]),
        z = r.useCallback(() => {
            y(u.pn.ADD_PAYMENT_STEPS);
        }, [y]),
        q = r.useMemo(() => ({ hasLegalTermsFlash: k, legalTermsNodeRef: K }), [k, K]),
        Z = r.useMemo(() => I({ handlePaymentSourceAdd: z }, q), [I, z, q]),
        X = (0, i.jsx)(c.U, {
            resolveTenantReviewButtonProps: S,
            premiumSubscription: R ?? null,
            onBack: $,
            legalTermsNodeRef: K,
            flashLegalTerms: () => U(!0),
            flowStartTime: L.startTime,
            onPaymentSourceAdd: z,
            disablePurchase: W,
            analyticsLocation: v,
            baseAnalyticsData: N,
            openInvoiceId: C,
            handleStepChange: y,
            postPurchaseStep: u.pn.CONFIRM,
            backButtonEligible: s,
            metadata: A,
            ...t,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.dZ, { children: Z }), (0, i.jsx)(d.UX, { children: X })],
    });
}
