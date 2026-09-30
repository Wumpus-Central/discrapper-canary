n.d(t, { M: () => p });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(482132),
    s = n(75304),
    o = n(981036),
    u = n(202475),
    c = n(375708),
    d = n(338039);
function p(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: p,
            renderLeftColumn: m,
            renderRightColumn: h,
            renderBottomContent: C,
            primaryCTAButtonProps: f,
            onBackClick: S,
        } = e,
        { hasPaymentSources: E } = (0, u.j)(),
        y = E ? r.pn.REVIEW : r.pn.ADD_PAYMENT_STEPS,
        A = i.useCallback(() => t(y), [t, y]),
        I = i.useMemo(
            () =>
                n === s.X.CUSTOM_STEP_BODY
                    ? p()
                    : (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsxs)("div", { className: d.D, children: [m(), h()] }), null != C && C()],
                      }),
            [n, p, m, h, C],
        ),
        g = i.useMemo(() => ({ ...f, onClick: A, text: c.intl.string(c.t.XiOHRX) }), [f, A]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.dZ, { children: I }),
            (0, l.jsx)(a.UX, { children: (0, l.jsx)(o.cy, { onBackClick: S, primaryCTAButtonProps: g }) }),
        ],
    });
}
