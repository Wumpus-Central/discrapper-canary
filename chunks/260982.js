n.d(t, { A: () => C });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(687498),
    o = n(158954),
    d = n(750506),
    c = n(954571),
    u = n(829203),
    A = n(178090),
    h = n(652215),
    _ = n(49999),
    m = n(429311),
    p = n(985018),
    g = n(44153),
    E = n(980447),
    I = n(983266),
    f = n(620442);
function C(e) {
    let { markAsDismissed: t } = e,
        [n, l] = (0, a.useState)(!1),
        C = (0, o.zhh)({ opacity: +!!n, y: n ? 0 : -40, pointerEvents: n ? "all" : "none" }),
        T = (0, o.zhh)({ y: n ? 0 : -206 });
    return (0, i.jsx)(d.Ay, {
        children: (0, i.jsxs)("div", {
            className: r()(g.kL, { [g.DM]: n }),
            onMouseLeave: () => l(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: g.Zv,
                    onMouseEnter: () => l(!0),
                    children: [
                        (0, i.jsx)("img", { src: I.A, alt: "", className: g.iL }),
                        (0, i.jsx)("img", { src: f.A, alt: p.intl.string(m.default.UnXoXM), className: g.wm }),
                        (0, i.jsx)(o.DUT, {
                            onClick: () => {
                                (0, u.A)({ source: "coachmark" }), t(_.i.PRIMARY);
                            },
                            "aria-label": p.intl.string(p.t.E4kW5O),
                            className: g.Xk,
                            children: (0, i.jsx)("img", { src: E.A, className: g.UQ, alt: "" }),
                        }),
                    ],
                }),
                (0, i.jsx)(s.animated.div, {
                    style: C,
                    className: g.s9,
                    children: (0, i.jsx)("div", {
                        className: g.i1,
                        children: (0, i.jsxs)(o.DUT, {
                            className: g.VH,
                            onClick: () => {
                                window.open("https://youtu.be/1ViwrDhoG2c", "_blank"),
                                    c.default.track(h.HAw.APRIL_FOOLS_2026_VIDEO_CLICKED, { source: "coachmark" });
                            },
                            children: [
                                (0, i.jsx)("div", { className: g.NQ, children: (0, i.jsx)(o.udU, { color: "white" }) }),
                                (0, i.jsxs)("div", {
                                    className: g.q6,
                                    children: [
                                        (0, i.jsx)(o.EYj, {
                                            color: "always-white",
                                            variant: "text-md/semibold",
                                            children: p.intl.string(p.t["4PGeGA"]),
                                        }),
                                        (0, i.jsx)(o.tfB, { color: "white", size: "xs" }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
                (0, i.jsx)(s.animated.div, {
                    className: g.Xe,
                    style: T,
                    children: (0, i.jsxs)(o.DUT, {
                        onClick: () => {
                            t(_.i.DISMISS);
                        },
                        "aria-label": p.intl.string(m.default["6yuu2/"]),
                        className: g.r,
                        children: [
                            (0, i.jsx)(A.A, { color: "none", variant: "heading-md/bold", children: "X" }),
                            (0, i.jsx)(o.EYj, {
                                variant: "text-md/bold",
                                color: "none",
                                children: p.intl.string(m.default["6yuu2/"]).toUpperCase(),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
