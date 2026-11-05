var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(482132),
    s = n(998312),
    o = n(981036),
    u = n(202475),
    c = n(516106),
    d = n(792996),
    m = n(338039);
n.d(
    t,
    {},
    {
        M: function (e) {
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
                { hasPaymentSources: g } = (0, u.j)(),
                { isExpressCheckoutEnabled: y } = (0, c.t4)((e) => ({
                    isExpressCheckoutEnabled: e.getIsExpressCheckoutEnabled(),
                })),
                I = g || y ? r.pn.REVIEW : r.pn.ADD_PAYMENT_STEPS,
                A = i.useCallback(() => t(I), [t, I]),
                P = i.useMemo(
                    () =>
                        n === s.X.CUSTOM_STEP_BODY
                            ? p()
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsxs)("div", { className: m.D, children: [C(), h()] }),
                                      null != f && f(),
                                  ],
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
        },
    },
);
