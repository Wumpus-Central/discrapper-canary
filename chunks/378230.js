a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var l = a(503698),
    i = a.n(l),
    s = a(534514),
    r = a(404778),
    o = a(821609),
    d = a(935649),
    c = a(847599),
    u = a(480237),
    m = a(282621),
    h = a(505206);
function p() {
    return (0, n.jsx)("div", {
        className: i()(h.nd, m.k),
        children: (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(s.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, n.jsx)(r.c, { gap: 16 }),
                (0, n.jsxs)("div", {
                    className: m.h,
                    children: [
                        (0, n.jsx)(o.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () => (0, u.A)(),
                            fullWidth: !0,
                        }),
                        (0, n.jsx)(o.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                d.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
