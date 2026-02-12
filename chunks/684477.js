"use strict";
n.d(t, { E: () => p });
var r = n(627968),
    i = n(64700),
    a = n(235986),
    s = n(156312),
    o = n(166532),
    l = n(482132),
    u = n(866485),
    c = n(981036),
    d = n(985018),
    _ = n(34873);
let f = (e) => (0, r.jsx)(h, { ...e }),
    h = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: u,
                renderStepBody: f,
                renderLeftColumn: h,
                renderRightColumn: p,
                primaryCTAButtonProps: g,
                onBackClick: E,
            } = n,
            { hasPaymentSources: A } = (0, s.P5)(),
            I = A ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
            T = i.useCallback(() => t(I), [t, I]),
            y = i.useMemo(
                () =>
                    "custom-step-body" === u
                        ? f()
                        : "two-column" === u
                          ? (0, r.jsxs)("div", { className: _.D, children: [h(), p()] })
                          : null,
                [u, f, h, p],
            ),
            S = i.useMemo(() => ({ ...g, onClick: T, text: d.intl.string(d.t.XiOHRX) }), [g, T]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.dZ, { children: y }),
                (0, r.jsx)(l.UX, {
                    children: (0, r.jsx)(c.cy, { onBackClick: E, primaryCTAButtonProps: S, align: a.A.Align.CENTER }),
                }),
            ],
        });
    },
    p = (0, u.R)({ step: o.pn.GIFT_CUSTOMIZATION, renderStep: f, DirectStepComponent: h });
