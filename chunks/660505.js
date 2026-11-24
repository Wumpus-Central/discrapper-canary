n.d(t, { Y: () => R });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(417604),
    o = n(166532),
    u = n(482132),
    c = n(216641),
    d = n(375299),
    m = n(834730),
    p = n(28863),
    h = n(683071),
    C = n(891197),
    f = n(125114),
    E = n(901112),
    S = n(901930),
    g = n(725836),
    I = n(580133),
    y = n(682689),
    A = n(379912),
    P = n(792996),
    v = n(663466);
function x() {
    let e = (0, y.t4)((e) => (0, f.qn)(e.order));
    return null == e || null == e.redirect_url
        ? null
        : (0, l.jsx)(m.E, {
              variant: "body-md/normal",
              children: P.intl.format(A.default.fJnl1h, {
                  reopenHook: (t, n) => (0, l.jsx)(p.Anchor, { onClick: () => (0, f.DL)(e), children: t }, n),
              }),
          });
}
function _() {
    let { stripeNextActionContext: e, merchantAccountId: t } = (0, y.t4)((e) => ({
            stripeNextActionContext: (0, f.yi)(e.order),
            merchantAccountId: (0, f.rH)(e.order),
        })),
        n = i.useCallback(() => {
            null != e && (0, E.A)(e, t);
        }, [e, t]),
        r = i.useCallback((e, t) => (0, l.jsx)(p.Anchor, { onClick: n, children: e }, t), [n]);
    return null == e
        ? null
        : (0, l.jsx)(m.E, { variant: "body-md/normal", children: P.intl.format(A.default.Ap5au4, { reopenHook: r }) });
}
function T() {
    let { error: e, errorMessage: t } = (0, S.j)({});
    return null != e
        ? (0, l.jsx)("div", {
              className: v.l,
              children: (0, l.jsx)(h.w, { type: "critical", message: t, role: "alert" }),
          })
        : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(C.N, {}), (0, l.jsx)(x, {}), (0, l.jsx)(_, {})] });
}
function b() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.UY, { children: (0, l.jsx)(I.f, {}) }),
            (0, l.jsx)("div", { className: v.k, role: "status", children: (0, l.jsx)(T, {}) }),
        ],
    });
}
var N = n(202475),
    j = n(883645);
function R(e) {
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
        } = (0, y.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            purchaseError: e.purchaseError,
            setCheckoutCurrency: e.setCheckoutCurrency,
            isOrderSigningInProgress: e.getIsOrderSigningInProgress(),
        })),
        I = (0, j.s2)();
    a()(null != I, "Step should be set");
    let A = i.useRef(null),
        { paymentSources: P } = (0, N.j)(),
        v = (0, c.W)(P, f),
        x = (0, s.iB)({ paymentSourceId: f, location: "CheckoutBaseReviewStep" }),
        _ = (0, y.t4)((e) =>
            e.getIsReviewSubmitDisabled({ paymentSource: v, isWalletPurchaseDisabled: x, isTrial: r }),
        );
    i.useEffect(() => {
        null != E && null != A.current && A.current.scrollIntoView({ behavior: "smooth" });
    }, [E]);
    let T = n.onBack,
        R = i.useCallback(() => {
            (S(void 0), null != T && T());
        }, [S, T]),
        O = i.useMemo(() => t(), [t]),
        M = (0, l.jsx)(d.U, {
            ...n,
            onBack: R,
            onPaymentSourceAdd: C,
            disableSubmit: _,
            analyticsLocation: h,
            baseAnalyticsData: p,
            handleStepChange: m,
            postPurchaseStep: o.pn.CONFIRM,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.dZ, { children: g ? (0, l.jsx)(b, {}) : O }), (0, l.jsx)(u.UX, { children: M })],
    });
}
