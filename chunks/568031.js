n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(315629),
    l = n(534514),
    c = n(834730),
    o = n(688810),
    d = n(65470),
    u = n(985018),
    _ = n(91301),
    m = n(182645);
let p = (e) => {
    let { className: t, location: n, analyticsLocation: a } = e,
        { analyticsLocations: p } = (0, o.Ay)(n);
    return (0, r.jsx)(o.f5, {
        value: p,
        children: (0, r.jsxs)(s.h, {
            className: i()(_.kL, _.pm, t),
            color: "purple",
            children: [
                (0, r.jsxs)("div", {
                    className: _.FS,
                    children: [
                        (0, r.jsx)(l.D, {
                            variant: "heading-xxl/bold",
                            className: _.R_,
                            children: u.intl.string(u.t.Ve9Ge6),
                        }),
                        (0, r.jsx)(c.E, { variant: "text-md/medium", children: u.intl.string(u.t.yQ06u1) }),
                        (0, r.jsx)("div", {
                            className: _.SB,
                            children: (0, r.jsx)(d.A, {
                                buttonTextOverride: u.intl.string(u.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: a,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("img", { src: m.A, className: _._e, alt: "gift nitro banner" }),
            ],
        }),
    });
};
