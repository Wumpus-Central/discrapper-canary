n.d(t, { M: () => p });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(482132),
    s = n(75304),
    o = n(981036),
    u = n(202475),
    c = n(660183),
    d = n(338039);
function p(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: p,
            renderLeftColumn: m,
            renderRightColumn: C,
            renderBottomContent: h,
            primaryCTAButtonProps: f,
            onBackClick: S,
        } = e,
        { hasPaymentSources: E } = (0, u.j)(),
        A = E ? r.pn.REVIEW : r.pn.ADD_PAYMENT_STEPS,
        y = i.useCallback(() => t(A), [t, A]),
        I = i.useMemo(
            () =>
                n === s.X.CUSTOM_STEP_BODY
                    ? p()
                    : (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsxs)("div", { className: d.D, children: [m(), C()] }), null != h && h()],
                      }),
            [n, p, m, C, h],
        ),
        g = i.useMemo(() => ({ ...f, onClick: y, text: c.intl.string(c.t.XiOHRX) }), [f, y]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.dZ, { children: I }),
            (0, l.jsx)(a.UX, { children: (0, l.jsx)(o.cy, { onBackClick: S, primaryCTAButtonProps: g }) }),
        ],
    });
}
