n.d(t, { M: () => p });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(482132),
    s = n(75304),
    o = n(981036),
    u = n(202475),
    c = n(281044),
    d = n(105292),
    m = n(338039);
function p(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: p,
            renderLeftColumn: C,
            renderRightColumn: h,
            renderBottomContent: f,
            primaryCTAButtonProps: E,
            onBackClick: S,
        } = e,
        { hasPaymentSources: y } = (0, u.j)(),
        { isExpressCheckoutEnabled: g } = (0, c.t4)((e) => ({
            isExpressCheckoutEnabled: e.getIsExpressCheckoutEnabled(),
        })),
        I = y || g ? r.pn.REVIEW : r.pn.ADD_PAYMENT_STEPS,
        A = i.useCallback(() => t(I), [t, I]),
        P = i.useMemo(
            () =>
                n === s.X.CUSTOM_STEP_BODY
                    ? p()
                    : (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsxs)("div", { className: m.D, children: [C(), h()] }), null != f && f()],
                      }),
            [n, p, C, h, f],
        ),
        v = i.useMemo(() => ({ ...E, onClick: A, text: d.intl.string(d.t.XiOHRX) }), [E, A]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.dZ, { children: P }),
            (0, l.jsx)(a.UX, { children: (0, l.jsx)(o.cy, { onBackClick: S, primaryCTAButtonProps: v }) }),
        ],
    });
}
