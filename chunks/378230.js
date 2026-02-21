n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(397927),
    r = n(935649),
    o = n(847599),
    d = n(480237),
    c = n(667380),
    u = n(661251);
function m() {
    return (0, a.jsx)("div", {
        className: s()(u.nd, c.k),
        children: (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(l.Heading, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, a.jsx)(l.cGx, { gap: 16 }),
                (0, a.jsxs)("div", {
                    className: c.h,
                    children: [
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () => (0, d.A)(),
                            fullWidth: !0,
                        }),
                        (0, a.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
