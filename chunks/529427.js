n.d(t, {
    vd: () => r.v,
    Mw: () => C,
    UnifiedCheckoutFlowManagerSingletons: () => i.UnifiedCheckoutFlowManagerSingletons,
    XZ: () => l.X,
    CL: () => l.C,
});
var l = n(75304),
    i = n(279885),
    r = n(71804),
    a = n(477900),
    s = n(582128),
    o = n(166532),
    u = n(482132),
    c = n(981036),
    d = n(202475),
    m = n(375708),
    p = n(338039);
function C(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: i,
            renderLeftColumn: r,
            renderRightColumn: C,
            renderBottomContent: h,
            primaryCTAButtonProps: f,
            onBackClick: E,
        } = e,
        { hasPaymentSources: S } = (0, d.j)(),
        y = S ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
        I = s.useCallback(() => t(y), [t, y]),
        A = s.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? i()
                    : (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsxs)("div", { className: p.D, children: [r(), C()] }), null != h && h()],
                      }),
            [n, i, r, C, h],
        ),
        g = s.useMemo(() => ({ ...f, onClick: I, text: m.intl.string(m.t.XiOHRX) }), [f, I]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.dZ, { children: A }),
            (0, a.jsx)(u.UX, { children: (0, a.jsx)(c.cy, { onBackClick: E, primaryCTAButtonProps: g }) }),
        ],
    });
}
