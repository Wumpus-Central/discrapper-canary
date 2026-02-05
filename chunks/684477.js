"use strict";
n.d(t, { E: () => h });
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
let f = (e) => (0, r.jsx)(p, { ...e }),
    p = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                unifiedStepProps: n,
            } = e,
            {
                layout: u,
                renderStepBody: f,
                renderLeftColumn: p,
                renderRightColumn: h,
                primaryCTAButtonProps: m,
                onBackClick: g,
            } = n,
            { hasPaymentSources: E } = (0, s.P5)(),
            A = E ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
            I = i.useCallback(() => t(A), [t, A]),
            T = i.useMemo(
                () =>
                    "custom-step-body" === u
                        ? f()
                        : "two-column" === u
                          ? (0, r.jsxs)("div", { className: _.D, children: [p(), h()] })
                          : null,
                [u, f, p, h],
            ),
            y = i.useMemo(() => ({ ...m, onClick: I, text: d.intl.string(d.t.XiOHRX) }), [m, I]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.dZ, { children: T }),
                (0, r.jsx)(l.UX, {
                    children: (0, r.jsx)(c.cy, { onBackClick: g, primaryCTAButtonProps: y, align: a.A.Align.CENTER }),
                }),
            ],
        });
    },
    h = (0, u.R)({ step: o.pn.GIFT_CUSTOMIZATION, renderStep: f, DirectStepComponent: p });
