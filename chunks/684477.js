n.d(t, { E: () => p });
var l = n(627968),
    r = n(64700),
    i = n(156312),
    s = n(166532),
    a = n(482132),
    o = n(866485),
    u = n(981036),
    d = n(985018),
    c = n(367644);
let C = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: o,
                renderStepBody: C,
                renderLeftColumn: p,
                renderRightColumn: m,
                primaryCTAButtonProps: E,
                onBackClick: A,
            } = n,
            { hasPaymentSources: h } = (0, i.P5)(),
            f = h ? s.pn.REVIEW : s.pn.ADD_PAYMENT_STEPS,
            _ = r.useCallback(() => t(f), [t, f]),
            g = r.useMemo(
                () =>
                    "custom-step-body" === o
                        ? C()
                        : "two-column" === o
                          ? (0, l.jsxs)("div", { className: c.D, children: [p(), m()] })
                          : null,
                [o, C, p, m],
            ),
            T = r.useMemo(() => ({ ...E, onClick: _, text: d.intl.string(d.t.XiOHRX) }), [E, _]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(a.dZ, { children: g }),
                (0, l.jsx)(a.UX, { children: (0, l.jsx)(u.cy, { onBackClick: A, primaryCTAButtonProps: T }) }),
            ],
        });
    },
    p = (0, o.R)({ step: s.pn.GIFT_CUSTOMIZATION, renderStep: (e) => (0, l.jsx)(C, { ...e }) });
