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
    p = n(834730),
    m = n(28863),
    h = n(683071),
    C = n(891197),
    f = n(710525),
    S = n(901930),
    E = n(725836),
    I = n(580133),
    g = n(123816),
    y = n(583741),
    A = n(660183),
    P = n(663466);
function v() {
    let e = (0, g.t4)((e) => (0, f.qn)(e.order));
    return null == e || null == e.redirect_url
        ? null
        : (0, l.jsx)(p.E, {
              variant: "text-md/normal",
              children: A.intl.format(y.default.fJnl1h, {
                  reopenHook: (t, n) => (0, l.jsx)(m.Anchor, { onClick: () => (0, f.DL)(e), children: t }, n),
              }),
          });
}
function x() {
    let { error: e, errorMessage: t } = (0, S.j)({});
    return null != e
        ? (0, l.jsx)("div", { className: P.l, children: (0, l.jsx)(h.w, { type: "critical", children: t }) })
        : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(C.N, {}), (0, l.jsx)(v, {})] });
}
function _() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.UY, { children: (0, l.jsx)(I.f, {}) }),
            (0, l.jsx)("div", { className: P.k, role: "status", children: (0, l.jsx)(x, {}) }),
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
            subscriptionMetadata: p,
            renderStepBody: m,
            resolveInternalState: h,
            resolveTenantReviewButtonProps: C,
            handleStepChange: f,
            openInvoiceId: S,
            analyticsData: E,
            analyticsLocation: I,
        } = e,
        {
            paymentSourceId: y,
            purchasePreviewError: A,
            customCheckoutFlow: P,
            contextMetadata: v,
            purchaseError: x,
            setCheckoutCurrency: j,
            setLinkWalletEnabled: R,
            checkoutPaymentSources: O,
            hasCheckoutContextLoaded: M,
            invoicePreview: L,
            isOrderSigningInProgress: k,
        } = (0, g.t4)((e) => ({
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
            let e = { disablePurchase: B || P === b.uH.DEV_STORYBOOK_CHECKOUT };
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
        }, [h, G, y, F, L, A, B, P]);
    i.useEffect(() => {
        null != x && null != D.current && D.current.scrollIntoView({ behavior: "smooth" });
    }, [x]);
    let W = i.useCallback(() => {
            (j(void 0), n());
        }, [j, n]),
        V = i.useCallback(
            (e) => {
                (R(e?.linkWalletEnabled ?? !0), f(o.pn.ADD_PAYMENT_STEPS));
            },
            [f, R],
        ),
        Y = i.useMemo(() => m({ handlePaymentSourceAdd: V }), [m, V]),
        K = (0, l.jsx)(d.U, {
            resolveTenantReviewButtonProps: C,
            onBack: W,
            flowStartTime: v.startTime,
            onPaymentSourceAdd: V,
            disablePurchase: H,
            analyticsLocation: I,
            baseAnalyticsData: E,
            openInvoiceId: S,
            handleStepChange: f,
            postPurchaseStep: o.pn.CONFIRM,
            backButtonEligible: r,
            metadata: p,
            ...t,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: k ? (0, l.jsx)(_, {}) : Y }), (0, l.jsx)(u.UX, { children: K })],
    });
}
