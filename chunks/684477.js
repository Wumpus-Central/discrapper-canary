"use strict";
n.d(t, { E: () => h });
var r = n(627968),
    i = n(64700),
    a = n(156312),
    s = n(166532),
    o = n(482132),
    l = n(866485),
    u = n(981036),
    c = n(985018),
    d = n(34873);
let _ = (e) => (0, r.jsx)(f, { ...e }),
    f = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: l,
                renderStepBody: _,
                renderLeftColumn: f,
                renderRightColumn: h,
                primaryCTAButtonProps: p,
                onBackClick: g,
            } = n,
            { hasPaymentSources: E } = (0, a.P5)(),
            A = E ? s.pn.REVIEW : s.pn.ADD_PAYMENT_STEPS,
            I = i.useCallback(() => t(A), [t, A]),
            T = i.useMemo(
                () =>
                    "custom-step-body" === l
                        ? _()
                        : "two-column" === l
                          ? (0, r.jsxs)("div", { className: d.D, children: [f(), h()] })
                          : null,
                [l, _, f, h],
            ),
            y = i.useMemo(() => ({ ...p, onClick: I, text: c.intl.string(c.t.XiOHRX) }), [p, I]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.dZ, { children: T }),
                (0, r.jsx)(o.UX, { children: (0, r.jsx)(u.cy, { onBackClick: g, primaryCTAButtonProps: y }) }),
            ],
        });
    },
    h = (0, l.R)({ step: s.pn.GIFT_CUSTOMIZATION, renderStep: _, DirectStepComponent: f });
