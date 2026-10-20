n.d(t, { Y: () => j });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(803694),
    o = n(166532),
    u = n(482132),
    c = n(216641),
    d = n(786567),
    m = n(834730),
    p = n(28863),
    h = n(683071),
    C = n(891197),
    f = n(710525),
    E = n(901930),
    S = n(725836),
    g = n(580133),
    I = n(123816),
    y = n(649975),
    A = n(105292),
    x = n(663466);
function P() {
    let e = (0, I.t4)((e) => (0, f.qn)(e.order));
    return null == e || null == e.redirect_url
        ? null
        : (0, l.jsx)(m.E, {
              variant: "text-md/normal",
              children: A.intl.format(y.default.fJnl1h, {
                  reopenHook: (t, n) => (0, l.jsx)(p.Anchor, { onClick: () => (0, f.DL)(e), children: t }, n),
              }),
          });
}
function v() {
    let { error: e, errorMessage: t } = (0, E.j)({});
    return null != e
        ? (0, l.jsx)("div", { className: x.l, children: (0, l.jsx)(h.w, { type: "critical", children: t }) })
        : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(C.N, {}), (0, l.jsx)(P, {})] });
}
function _() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.UY, { children: (0, l.jsx)(g.f, {}) }),
            (0, l.jsx)("div", { className: x.k, role: "status", children: (0, l.jsx)(v, {}) }),
        ],
    });
}
var T = n(202475),
    N = n(883645),
    b = n(26279);
function j(e) {
    let {
            customFooterProps: t,
            onFooterBackClick: n,
            isBackButtonEligible: r,
            subscriptionMetadata: m,
            renderStepBody: p,
            resolveInternalState: h,
            resolveTenantReviewButtonProps: C,
            handleStepChange: f,
            openInvoiceId: E,
            analyticsData: S,
            analyticsLocation: g,
        } = e,
        {
            paymentSourceId: y,
            purchasePreviewError: A,
            customCheckoutFlow: x,
            contextMetadata: P,
            purchaseError: v,
            setCheckoutCurrency: j,
            setLinkWalletEnabled: R,
            checkoutPaymentSources: O,
            hasCheckoutContextLoaded: M,
            invoicePreview: L,
            isOrderSigningInProgress: k,
        } = (0, I.t4)((e) => ({
            customCheckoutFlow: e.customCheckoutFlow,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            purchasePreviewError: e.purchasePreviewError,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            setLinkWalletEnabled: e.setLinkWalletEnabled,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
            invoicePreview: e.checkoutInvoicePreview,
            isOrderSigningInProgress: e.get("isOrderSigningInProgress"),
        })),
        w = (0, N.s2)();
    a()(null != w, "Step should be set");
    let D = i.useRef(null),
        { paymentSources: U } = (0, T.j)(),
        G = (0, c.W)(U, y),
        F = i.useMemo(() => {
            if (null == y) return !1;
            if (!M) return !0;
            let e = O.find((e) => e.id === y);
            return null != e && !e.enabled;
        }, [O, M, y]),
        B = (0, s.iB)({ paymentSourceId: y, location: "CheckoutBaseReviewStep" }),
        { disablePurchase: H } = i.useMemo(() => {
            let e = { disablePurchase: B || x === b.uH.DEV_STORYBOOK_CHECKOUT };
            return null != h
                ? h(
                      { ...e },
                      {
                          paymentSource: G,
                          paymentSourceId: y,
                          isSelectedPaymentSourceDisabled: F,
                          invoicePreview: L,
                          purchasePreviewError: A,
                      },
                  )
                : e;
        }, [h, G, y, F, L, A, B, x]);
    i.useEffect(() => {
        null != v && null != D.current && D.current.scrollIntoView({ behavior: "smooth" });
    }, [v]);
    let W = i.useCallback(() => {
            (j(void 0), n());
        }, [j, n]),
        V = i.useCallback(
            (e) => {
                (R(e?.linkWalletEnabled ?? !0), f(o.pn.ADD_PAYMENT_STEPS));
            },
            [f, R],
        ),
        Y = i.useMemo(() => p({ handlePaymentSourceAdd: V }), [p, V]),
        K = (0, l.jsx)(d.U, {
            resolveTenantReviewButtonProps: C,
            onBack: W,
            flowStartTime: P.startTime,
            onPaymentSourceAdd: V,
            disablePurchase: H,
            analyticsLocation: g,
            baseAnalyticsData: S,
            openInvoiceId: E,
            handleStepChange: f,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: m,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: k ? (0, l.jsx)(_, {}) : Y }), (0, l.jsx)(u.UX, { children: K })],
    });
}
