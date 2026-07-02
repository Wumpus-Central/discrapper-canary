"use strict";
n.d(t, { Y: () => A });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(304072),
    l = n(606267),
    u = n(166532),
    d = n(295413),
    c = n(482132),
    _ = n(615310),
    h = n(216641),
    f = n(364995),
    E = n(426398),
    p = n(666646),
    m = n(650170),
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
            handleStepChange: N,
            openInvoiceId: C,
            analyticsData: y,
            analyticsLocation: v,
        } = e,
        {
            paymentSourceId: R,
            purchasePreviewError: O,
            customCheckoutFlow: b,
            contextMetadata: L,
            purchaseError: D,
            setCheckoutCurrency: P,
        } = (0, m.t4)((e) => ({
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        w = (0, _.bB)();
    a()(null != w, "Step should be set");
    let M = r.useRef(null),
        [x, U] = (0, o.A)(!1, 500),
        { paymentSources: k } = (0, E.jm)(),
        { checkoutPaymentSources: G, hasInvoiceOrderContextLoaded: V } = (0, f.t)(),
        F = (0, p.sw)(),
        B = (0, h.W)(k, R),
        j = r.useMemo(() => {
            if (null == R) return !1;
            if (!V) return !0;
            let e = G.find((e) => e.id === R);
            return null != e && !e.enabled;
        }, [G, V, R]),
        H = (0, l.iB)({ checkoutPaymentSources: G, paymentSourceId: R, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: W } = r.useMemo(() => {
            let e = { disablePurchase: H || b === g.uH.DEV_STORYBOOK_CHECKOUT };
            return null != T
                ? T(
                      { ...e },
                      {
                          paymentSource: B,
                          paymentSourceId: R,
                          isSelectedPaymentSourceDisabled: j,
                          invoicePreview: F,
                          purchasePreviewError: O,
                      },
                  )
                : e;
        }, [T, B, R, j, F, O, H, b]);
    r.useEffect(() => {
        null != D && null != M.current && M.current.scrollIntoView({ behavior: "smooth" });
    }, [D]);
    let Y = r.useRef(null),
        K = r.useCallback(() => {
            P(void 0), n();
        }, [P, n]),
        $ = r.useCallback(() => {
            N(u.pn.ADD_PAYMENT_STEPS);
        }, [N]),
        z = r.useMemo(() => ({ hasLegalTermsFlash: x, legalTermsNodeRef: Y }), [x, Y]),
        q = r.useMemo(() => I({ handlePaymentSourceAdd: $ }, z), [I, $, z]),
        Z = (0, i.jsx)(d.U, {
            resolveTenantReviewButtonProps: S,
            onBack: K,
            legalTermsNodeRef: Y,
            flashLegalTerms: () => U(!0),
            flowStartTime: L.startTime,
            onPaymentSourceAdd: $,
            disablePurchase: W,
            analyticsLocation: v,
            baseAnalyticsData: y,
            openInvoiceId: C,
            handleStepChange: N,
            postPurchaseStep: u.pn.CONFIRM,
            backButtonEligible: s,
            metadata: A,
            ...t,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.dZ, { children: q }), (0, i.jsx)(c.UX, { children: Z })],
    });
}
