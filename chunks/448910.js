n.d(t, { Y: () => b });
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
    g = n(580133),
    I = n(281044),
    A = n(758476),
    y = n(105292),
    x = n(663466);
function P() {
    let e = (0, I.t4)((e) => (0, f.qn)(e.order));
    return null == e || null == e.redirect_url
        ? null
        : (0, l.jsx)(m.E, {
              variant: "text-md/normal",
              children: y.intl.format(A.default.fJnl1h, {
                  reopenHook: (t, n) => (0, l.jsx)(p.Anchor, { onClick: () => (0, f.DL)(e), children: t }, n),
              }),
          });
}
function v() {
    let { error: e, errorMessage: t } = (0, E.j)({});
    return null != e
        ? (0, l.jsx)("div", {
              className: x.l,
              children: (0, l.jsx)(C.w, { type: "critical", message: t, role: "alert" }),
          })
        : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(h.N, {}), (0, l.jsx)(P, {})] });
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
    N = n(883645);
function b(e) {
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
            setCheckoutCurrency: g,
            isOrderSigningInProgress: A,
        } = (0, I.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            isOrderSigningInProgress: e.get("isOrderSigningInProgress"),
        })),
        y = (0, N.s2)();
    a()(null != y, "Step should be set");
    let x = i.useRef(null),
        { paymentSources: P } = (0, T.j)(),
        v = (0, c.W)(P, E),
        b = (0, s.iB)({ paymentSourceId: E, location: "CheckoutBaseReviewStep" }),
        j = (0, I.t4)((e) =>
            e.getIsReviewSubmitDisabled({ paymentSource: v, isWalletPurchaseDisabled: b, isTrial: r }),
        );
    i.useEffect(() => {
        null != S && null != x.current && x.current.scrollIntoView({ behavior: "smooth" });
    }, [S]);
    let R = n.onBack,
        O = i.useCallback(() => {
            (g(void 0), null != R && R());
        }, [g, R]),
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
        children: [(0, l.jsx)(u.dZ, { children: A ? (0, l.jsx)(_, {}) : M }), (0, l.jsx)(u.UX, { children: L })],
    });
}
