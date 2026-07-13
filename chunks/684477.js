n.d(t, { M: () => p });
var l = n(627968),
    i = n(64700),
    r = n(166532),
    a = n(482132),
    s = n(75304),
    o = n(981036),
    u = n(426398),
    c = n(375708),
    d = n(367644);
function p(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: p,
            renderLeftColumn: m,
            renderRightColumn: h,
            renderBottomContent: C,
            primaryCTAButtonProps: A,
            onBackClick: E,
        } = e,
        { hasPaymentSources: f } = (0, u.jm)(),
        y = f ? r.pn.REVIEW : r.pn.ADD_PAYMENT_STEPS,
        S = i.useCallback(() => t(y), [t, y]),
        P = i.useMemo(
            () =>
                n === s.X.CUSTOM_STEP_BODY
                    ? p()
                    : (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsxs)("div", { className: d.D, children: [m(), h()] }), null != C && C()],
                      }),
            [n, p, m, h, C],
        ),
        T = i.useMemo(() => ({ ...A, onClick: S, text: c.intl.string(c.t.XiOHRX) }), [A, S]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.dZ, { children: P }),
            (0, l.jsx)(a.UX, { children: (0, l.jsx)(o.cy, { onBackClick: E, primaryCTAButtonProps: T }) }),
        ],
    });
}
