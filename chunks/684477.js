n.d(t, { M: () => m });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(482132),
    s = n(75304),
    o = n(981036),
    u = n(202475),
    c = n(105292),
    d = n(338039);
function m(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: m,
            renderLeftColumn: p,
            renderRightColumn: h,
            renderBottomContent: C,
            primaryCTAButtonProps: f,
            onBackClick: E,
        } = e,
        { hasPaymentSources: S } = (0, u.j)(),
        g = S ? r.pn.REVIEW : r.pn.ADD_PAYMENT_STEPS,
        I = i.useCallback(() => t(g), [t, g]),
        A = i.useMemo(
            () =>
                n === s.X.CUSTOM_STEP_BODY
                    ? m()
                    : (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsxs)("div", { className: d.D, children: [p(), h()] }), null != C && C()],
                      }),
            [n, m, p, h, C],
        ),
        y = i.useMemo(() => ({ ...f, onClick: I, text: c.intl.string(c.t.XiOHRX) }), [f, I]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.dZ, { children: A }),
            (0, l.jsx)(a.UX, { children: (0, l.jsx)(o.cy, { onBackClick: E, primaryCTAButtonProps: y }) }),
        ],
    });
}
