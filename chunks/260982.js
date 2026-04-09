n.d(t, { A: () => C });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(687498),
    o = n(158954),
    d = n(750506),
    c = n(954571),
    u = n(829203),
    A = n(178090),
    _ = n(652215),
    h = n(49999),
    m = n(429311),
    g = n(985018),
    p = n(44153),
    E = n(980447),
    I = n(983266),
    f = n(620442);
function C(e) {
    let { markAsDismissed: t } = e,
        [n, r] = (0, a.useState)(!1),
        C = (0, o.zhh)({ opacity: +!!n, y: n ? 0 : -40, pointerEvents: n ? "all" : "none" }),
        T = (0, o.zhh)({ y: n ? 0 : -206 });
    return (0, i.jsx)(d.Ay, {
        children: (0, i.jsxs)("div", {
            className: l()(p.kL, { [p.DM]: n }),
            onMouseLeave: () => r(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: p.Zv,
                    onMouseEnter: () => r(!0),
                    children: [
                        (0, i.jsx)("img", { src: I.A, alt: "", className: p.iL }),
                        (0, i.jsx)("img", { src: f.A, alt: g.intl.string(m.default.UnXoXM), className: p.wm }),
                        (0, i.jsx)(o.DUT, {
                            onClick: () => {
                                (0, u.A)({ source: "coachmark" }), t(h.i.PRIMARY);
                            },
                            "aria-label": g.intl.string(g.t.E4kW5O),
                            className: p.Xk,
                            children: (0, i.jsx)("img", { src: E.A, className: p.UQ, alt: "" }),
                        }),
                    ],
                }),
                (0, i.jsx)(s.animated.div, {
                    style: C,
                    className: p.s9,
                    children: (0, i.jsx)("div", {
                        className: p.i1,
                        children: (0, i.jsxs)(o.DUT, {
                            className: p.VH,
                            onClick: () => {
                                window.open("https://youtu.be/1ViwrDhoG2c", "_blank"),
                                    c.default.track(_.HAw.APRIL_FOOLS_2026_VIDEO_CLICKED, { source: "coachmark" });
                            },
                            children: [
                                (0, i.jsx)("div", { className: p.NQ, children: (0, i.jsx)(o.udU, { color: "white" }) }),
                                (0, i.jsxs)("div", {
                                    className: p.q6,
                                    children: [
                                        (0, i.jsx)(o.EYj, {
                                            color: "always-white",
                                            variant: "text-md/semibold",
                                            children: g.intl.string(g.t["4PGeGA"]),
                                        }),
                                        (0, i.jsx)(o.tfB, { color: "white", size: "xs" }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
                (0, i.jsx)(s.animated.div, {
                    className: p.Xe,
                    style: T,
                    children: (0, i.jsxs)(o.DUT, {
                        onClick: () => {
                            t(h.i.DISMISS);
                        },
                        "aria-label": g.intl.string(m.default["6yuu2/"]),
                        className: p.r,
                        children: [
                            (0, i.jsx)(A.A, { color: "none", variant: "heading-md/bold", children: "X" }),
                            (0, i.jsx)(o.EYj, {
                                variant: "text-md/bold",
                                color: "none",
                                children: g.intl.string(m.default["6yuu2/"]).toUpperCase(),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
