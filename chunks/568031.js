n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(688810),
    o = n(65470),
    d = n(985018),
    c = n(571816),
    u = n(182645);
let _ = (e) => {
    let { className: t, location: n, analyticsLocation: s } = e,
        { analyticsLocations: _ } = (0, r.Ay)(n);
    return (0, i.jsx)(r.f5, {
        value: _,
        children: (0, i.jsxs)(a.hLv, {
            className: l()(c.kL, c.pm, t),
            color: "purple",
            children: [
                (0, i.jsxs)("div", {
                    className: c.FS,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.R_,
                            children: d.intl.string(d.t.Ve9Ge6),
                        }),
                        (0, i.jsx)(a.Text, { variant: "text-md/medium", children: d.intl.string(d.t.yQ06u1) }),
                        (0, i.jsx)("div", {
                            className: c.SB,
                            children: (0, i.jsx)(o.A, {
                                buttonTextOverride: d.intl.string(d.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: s,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("img", { src: u.A, className: c._e, alt: "gift nitro banner" }),
            ],
        }),
    });
};
