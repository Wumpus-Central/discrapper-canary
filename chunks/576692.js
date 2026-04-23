n.d(t, { i: () => u });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(943223);
function u(e) {
    let {
            size: t,
            lowerBadge: n,
            lowerBadgeSize: r = { width: 16, height: 16 },
            children: u,
            className: o,
            innerClassName: d,
            rounded: c = !0,
            "aria-hidden": h,
        } = e,
        g = null != n,
        m = i.useId(),
        I = `${m}-lower_badge_masks`,
        E = `${m}-shape_mask`,
        A = `${m}-stroke_mask`,
        f = r?.width != null ? r.width : 16,
        p = r?.height != null ? r.height : 16,
        S = { width: t + 8, height: t + 8, x: -4, y: -4 },
        N = c
            ? (0, l.jsx)("circle", { id: E, cx: t / 2, cy: t / 2, r: t / 2 })
            : (0, l.jsx)("rect", { id: E, x: 0, y: 0, width: t, height: t, rx: 8, ry: 8 });
    return (0, l.jsxs)(
        "div",
        {
            className: s()(o, a.iE),
            style: { width: t, height: t },
            "aria-hidden": h,
            children: [
                (0, l.jsxs)("svg", {
                    width: S.width,
                    height: S.height,
                    viewBox: `${S.x} ${S.y} ${S.width} ${S.height}`,
                    className: s()(a.JW, a.Pm),
                    overflow: "visible",
                    role: "none",
                    children: [
                        (0, l.jsxs)("defs", {
                            children: [
                                N,
                                g
                                    ? (0, l.jsx)("rect", {
                                          id: I,
                                          x: t - (f + 4) + 2,
                                          y: t - (p + 4) + 2,
                                          width: f + 4,
                                          height: p + 4,
                                          rx: t / 4,
                                          ry: t / 4,
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("mask", {
                            id: m,
                            fill: "black",
                            x: 0,
                            y: 0,
                            width: t,
                            height: t,
                            children: [
                                (0, l.jsx)("use", { href: `#${E}`, fill: "white" }),
                                g ? (0, l.jsx)("use", { href: `#${I}`, fill: "black" }) : null,
                            ],
                        }),
                        g
                            ? (0, l.jsxs)("mask", {
                                  id: A,
                                  children: [
                                      (0, l.jsx)("rect", {
                                          width: "150%",
                                          height: "150%",
                                          x: "-25%",
                                          y: "-25%",
                                          fill: "white",
                                      }),
                                      (0, l.jsx)("use", { href: `#${I}`, fill: "black" }),
                                  ],
                              })
                            : null,
                        (0, l.jsx)("foreignObject", {
                            mask: `url(#${m})`,
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
        m,
    );
}
