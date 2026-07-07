n.d(t, { Y: () => S });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(304072),
    o = n(606267),
    u = n(166532),
    c = n(295413),
    d = n(482132),
    p = n(615310),
    m = n(216641),
    C = n(364995),
    h = n(426398),
    E = n(666646),
    A = n(6938),
    f = n(26279);
function S(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: S,
            renderStepBody: y,
            resolveInternalState: P,
            resolveTenantReviewButtonProps: T,
            handleStepChange: I,
            openInvoiceId: _,
            analyticsData: g,
            analyticsLocation: v,
        } = e,
        {
            paymentSourceId: x,
            purchasePreviewError: N,
            customCheckoutFlow: R,
            contextMetadata: b,
            purchaseError: M,
            setCheckoutCurrency: O,
        } = (0, A.t4)((e) => ({
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        j = (0, p.bB)();
    a()(null != j, "Step should be set");
    let L = i.useRef(null),
        [D, U] = (0, s.A)(!1, 500),
        { paymentSources: w } = (0, h.jm)(),
        { checkoutPaymentSources: k, hasInvoiceOrderContextLoaded: G } = (0, C.t)(),
        F = (0, E.sw)(),
        B = (0, m.W)(w, x),
        Y = i.useMemo(() => {
            if (null == x) return !1;
            if (!G) return !0;
            let e = k.find((e) => e.id === x);
            return null != e && !e.enabled;
        }, [k, G, x]),
        H = (0, o.iB)({ checkoutPaymentSources: k, paymentSourceId: x, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: W } = i.useMemo(() => {
            let e = { disablePurchase: H || R === f.uH.DEV_STORYBOOK_CHECKOUT };
            return null != P
                ? P(
                      { ...e },
                      {
                          paymentSource: B,
                          paymentSourceId: x,
                          isSelectedPaymentSourceDisabled: Y,
                          invoicePreview: F,
                          purchasePreviewError: N,
                      },
                  )
                : e;
        }, [P, B, x, Y, F, N, H, R]);
    i.useEffect(() => {
        null != M && null != L.current && L.current.scrollIntoView({ behavior: "smooth" });
    }, [M]);
    let V = i.useRef(null),
        K = i.useCallback(() => {
            O(void 0), n();
        }, [O, n]),
        Z = i.useCallback(() => {
            I(u.pn.ADD_PAYMENT_STEPS);
        }, [I]),
        q = i.useMemo(() => ({ hasLegalTermsFlash: D, legalTermsNodeRef: V }), [D, V]),
        z = i.useMemo(() => y({ handlePaymentSourceAdd: Z }, q), [y, Z, q]),
        $ = (0, l.jsx)(c.U, {
            resolveTenantReviewButtonProps: T,
            onBack: K,
            legalTermsNodeRef: V,
            flashLegalTerms: () => U(!0),
            flowStartTime: b.startTime,
            onPaymentSourceAdd: Z,
            disablePurchase: W,
            analyticsLocation: v,
            baseAnalyticsData: g,
            openInvoiceId: _,
            handleStepChange: I,
            postPurchaseStep: u.pn.CONFIRM,
            backButtonEligible: r,
            metadata: S,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.dZ, { children: z }), (0, l.jsx)(d.UX, { children: $ })],
    });
}
