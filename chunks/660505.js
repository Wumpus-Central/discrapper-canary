n.d(t, { Y: () => N });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(417604),
    o = n(166532),
    u = n(482132),
    c = n(216641),
    d = n(328056),
    m = n(834730),
    p = n(28863),
    h = n(683071),
    C = n(891197),
    f = n(695537),
    E = n(901930),
    S = n(725836),
    g = n(580133),
    I = n(316363),
    y = n(379912),
    A = n(792996),
    P = n(663466);
function v() {
    let e = (0, I.t4)((e) => (0, f.qn)(e.order));
    return null == e || null == e.redirect_url
        ? null
        : (0, l.jsx)(m.E, {
              variant: "body-md/normal",
              children: A.intl.format(y.default.fJnl1h, {
                  reopenHook: (t, n) => (0, l.jsx)(p.Anchor, { onClick: () => (0, f.DL)(e), children: t }, n),
              }),
          });
}
function x() {
    let { error: e, errorMessage: t } = (0, E.j)({});
    return null != e
        ? (0, l.jsx)("div", {
              className: P.l,
              children: (0, l.jsx)(h.w, { type: "critical", message: t, role: "alert" }),
          })
        : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(C.N, {}), (0, l.jsx)(v, {})] });
}
function _() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.UY, { children: (0, l.jsx)(g.f, {}) }),
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
            analyticsData: p,
            analyticsLocation: h,
            handlePaymentSourceAdd: C,
        } = e,
        {
            paymentSourceId: f,
            purchaseError: E,
            setCheckoutCurrency: S,
            isOrderSigningInProgress: g,
        } = (0, I.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            isOrderSigningInProgress: e.get("isOrderSigningInProgress"),
        })),
        y = (0, b.s2)();
    a()(null != y, "Step should be set");
    let A = i.useRef(null),
        { paymentSources: P } = (0, T.j)(),
        v = (0, c.W)(P, f),
        x = (0, s.iB)({ paymentSourceId: f, location: "CheckoutBaseReviewStep" }),
        N = (0, I.t4)((e) =>
            e.getIsReviewSubmitDisabled({ paymentSource: v, isWalletPurchaseDisabled: x, isTrial: r }),
        );
    i.useEffect(() => {
        null != E && null != A.current && A.current.scrollIntoView({ behavior: "smooth" });
    }, [E]);
    let j = n.onBack,
        R = i.useCallback(() => {
            (S(void 0), null != j && j());
        }, [S, j]),
        O = i.useMemo(() => t(), [t]),
        M = (0, l.jsx)(d.U, {
            ...n,
            onBack: R,
            onPaymentSourceAdd: C,
            disableSubmit: N,
            analyticsLocation: h,
            baseAnalyticsData: p,
            handleStepChange: m,
            postPurchaseStep: o.pn.CONFIRM,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: g ? (0, l.jsx)(_, {}) : O }), (0, l.jsx)(u.UX, { children: M })],
    });
}
