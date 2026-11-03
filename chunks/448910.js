n.d(t, { Y: () => N });
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
    C = n(683071),
    h = n(891197),
    f = n(710525),
    E = n(901930),
    S = n(725836),
    y = n(580133),
    g = n(281044),
    I = n(758476),
    A = n(105292),
    P = n(663466);
function v() {
    let e = (0, g.t4)((e) => (0, f.qn)(e.order));
    return null == e || null == e.redirect_url
        ? null
        : (0, l.jsx)(m.E, {
              variant: "body-md/normal",
              children: A.intl.format(I.default.fJnl1h, {
                  reopenHook: (t, n) => (0, l.jsx)(p.Anchor, { onClick: () => (0, f.DL)(e), children: t }, n),
              }),
          });
}
function x() {
    let { error: e, errorMessage: t } = (0, E.j)({});
    return null != e
        ? (0, l.jsx)("div", {
              className: P.l,
              children: (0, l.jsx)(C.w, { type: "critical", message: t, role: "alert" }),
          })
        : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(h.N, {}), (0, l.jsx)(v, {})] });
}
function _() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.UY, { children: (0, l.jsx)(y.f, {}) }),
            (0, l.jsx)("div", { className: P.k, role: "status", children: (0, l.jsx)(x, {}) }),
        ],
    });
}
var T = n(202475),
    b = n(883645);
function N(e) {
    let {
            renderStepBody: t,
            tenantCheckoutFooterProps: n,
            isTrial: r,
            handleStepChange: m,
            openInvoiceId: p,
            analyticsData: C,
            analyticsLocation: h,
            handlePaymentSourceAdd: f,
        } = e,
        {
            paymentSourceId: E,
            purchaseError: S,
            setCheckoutCurrency: y,
            isOrderSigningInProgress: I,
        } = (0, g.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            isOrderSigningInProgress: e.get("isOrderSigningInProgress"),
        })),
        A = (0, b.s2)();
    a()(null != A, "Step should be set");
    let P = i.useRef(null),
        { paymentSources: v } = (0, T.j)(),
        x = (0, c.W)(v, E),
        N = (0, s.iB)({ paymentSourceId: E, location: "CheckoutBaseReviewStep" }),
        j = (0, g.t4)((e) =>
            e.getIsReviewSubmitDisabled({ paymentSource: x, isWalletPurchaseDisabled: N, isTrial: r }),
        );
    i.useEffect(() => {
        null != S && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
    }, [S]);
    let R = n.onBack,
        O = i.useCallback(() => {
            (y(void 0), null != R && R());
        }, [y, R]),
        M = i.useMemo(() => t(), [t]),
        L = (0, l.jsx)(d.U, {
            ...n,
            onBack: O,
            onPaymentSourceAdd: f,
            disableSubmit: j,
            analyticsLocation: h,
            baseAnalyticsData: C,
            openInvoiceId: p,
            handleStepChange: m,
            postPurchaseStep: o.pn.CONFIRM,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: I ? (0, l.jsx)(_, {}) : M }), (0, l.jsx)(u.UX, { children: L })],
    });
}
