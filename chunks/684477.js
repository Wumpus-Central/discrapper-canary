"use strict";
n.d(t, { E: () => p });
var r = n(627968),
    i = n(64700),
    s = n(156312),
    a = n(166532),
    o = n(482132),
    l = n(866485),
    u = n(981036),
    c = n(985018),
    d = n(228131);
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
                renderRightColumn: p,
                primaryCTAButtonProps: h,
                onBackClick: m,
            } = n,
            { hasPaymentSources: E } = (0, s.P5)(),
            g = E ? a.pn.REVIEW : a.pn.ADD_PAYMENT_STEPS,
            A = i.useCallback(() => t(g), [t, g]),
            I = i.useMemo(
                () =>
                    "custom-step-body" === l
                        ? _()
                        : "two-column" === l
                          ? (0, r.jsxs)("div", { className: d.D, children: [f(), p()] })
                          : null,
                [l, _, f, p],
            ),
            T = i.useMemo(() => ({ ...h, onClick: A, text: c.intl.string(c.t.XiOHRX) }), [h, A]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.dZ, { children: I }),
                (0, r.jsx)(o.UX, { children: (0, r.jsx)(u.cy, { onBackClick: m, primaryCTAButtonProps: T }) }),
            ],
        });
    },
    p = (0, l.R)({ step: a.pn.GIFT_CUSTOMIZATION, renderStep: _, DirectStepComponent: f });
