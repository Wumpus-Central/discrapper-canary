n.d(t, { i: () => u });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(250402);
function u(e) {
    let {
            size: t,
            lowerBadge: n,
            lowerBadgeSize: s = { width: 16, height: 16 },
            children: u,
            className: o,
            innerClassName: d,
            rounded: c = !0,
            "aria-hidden": h,
        } = e,
        g = null != n,
        I = i.useId(),
        E = `${I}-lower_badge_masks`,
        A = `${I}-shape_mask`,
        f = `${I}-stroke_mask`,
        m = s?.width != null ? s.width : 16,
        S = s?.height != null ? s.height : 16,
        p = { width: t + 8, height: t + 8, x: -4, y: -4 },
        N = c
            ? (0, l.jsx)("circle", { id: A, cx: t / 2, cy: t / 2, r: t / 2 })
            : (0, l.jsx)("rect", { id: A, x: 0, y: 0, width: t, height: t, rx: 8, ry: 8 });
    return (0, l.jsxs)(
        "div",
        {
            className: r()(o, a.iE),
            style: { width: t, height: t },
            "aria-hidden": h,
            children: [
                (0, l.jsxs)("svg", {
                    width: p.width,
                    height: p.height,
                    viewBox: `${p.x} ${p.y} ${p.width} ${p.height}`,
                    className: r()(a.JW, a.Pm),
                    overflow: "visible",
                    role: "none",
                    children: [
                        (0, l.jsxs)("defs", {
                            children: [
                                N,
                                g
                                    ? (0, l.jsx)("rect", {
                                          id: E,
                                          x: t - (m + 4) + 2,
                                          y: t - (S + 4) + 2,
                                          width: m + 4,
                                          height: S + 4,
                                          rx: t / 4,
                                          ry: t / 4,
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("mask", {
                            id: I,
                            fill: "black",
                            x: 0,
                            y: 0,
                            width: t,
                            height: t,
                            children: [
                                (0, l.jsx)("use", { href: `#${A}`, fill: "white" }),
                                g ? (0, l.jsx)("use", { href: `#${E}`, fill: "black" }) : null,
                            ],
                        }),
                        g
                            ? (0, l.jsxs)("mask", {
                                  id: f,
                                  children: [
                                      (0, l.jsx)("rect", {
                                          width: "150%",
                                          height: "150%",
                                          x: "-25%",
                                          y: "-25%",
                                          fill: "white",
                                      }),
                                      (0, l.jsx)("use", { href: `#${E}`, fill: "black" }),
                                  ],
                              })
                            : null,
                        (0, l.jsx)("foreignObject", {
                            mask: `url(#${I})`,
                            x: 0,
                            y: 0,
                            className: d,
                            width: t,
                            height: t,
                            children: u,
                        }),
                    ],
                }),
                g ? (0, l.jsx)("div", { className: a.H7, children: n }) : null,
            ],
        },
        I,
    );
}
