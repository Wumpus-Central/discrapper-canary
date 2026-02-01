n.d(t, {
    i: () => o,
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(250402);

function o(e) {
    let {
            size: t,
            lowerBadge: n,
            lowerBadgeSize: l = {
                width: 16,
                height: 16,
            },
            children: o,
            className: u,
            innerClassName: c,
            rounded: d = !0,
            "aria-hidden": h,
        } = e,
        p = null != n,
        f = r.useId(),
        g = "".concat(f, "-lower_badge_masks"),
        m = "".concat(f, "-shape_mask"),
        y = "".concat(f, "-stroke_mask"),
        A = (null == l ? void 0 : l.width) != null ? l.width : 16,
        v = (null == l ? void 0 : l.height) != null ? l.height : 16,
        b = {
            width: t + 8,
            height: t + 8,
            x: -4,
            y: -4,
        },
        E = d
            ? (0, i.jsx)("circle", {
                  id: m,
                  cx: t / 2,
                  cy: t / 2,
                  r: t / 2,
              })
            : (0, i.jsx)("rect", {
                  id: m,
                  x: 0,
                  y: 0,
                  width: t,
                  height: t,
                  rx: 8,
                  ry: 8,
              });
    return (0, i.jsxs)(
        "div",
        {
            className: a()(u, s.iE),
            style: {
                width: t,
                height: t,
            },
            "aria-hidden": h,
            children: [
                (0, i.jsxs)("svg", {
                    width: b.width,
                    height: b.height,
                    viewBox: "".concat(b.x, " ").concat(b.y, " ").concat(b.width, " ").concat(b.height),
                    className: a()(s.JW, s.Pm),
                    overflow: "visible",
                    role: "none",
                    children: [
                        (0, i.jsxs)("defs", {
                            children: [
                                E,
                                p
                                    ? (0, i.jsx)("rect", {
                                          id: g,
                                          x: t - (A + 4) + 2,
                                          y: t - (v + 4) + 2,
                                          width: A + 4,
                                          height: v + 4,
                                          rx: t / 4,
                                          ry: t / 4,
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsxs)("mask", {
                            id: f,
                            fill: "black",
                            x: 0,
                            y: 0,
                            width: t,
                            height: t,
                            children: [
                                (0, i.jsx)("use", {
                                    href: "#".concat(m),
                                    fill: "white",
                                }),
                                p
                                    ? (0, i.jsx)("use", {
                                          href: "#".concat(g),
                                          fill: "black",
                                      })
                                    : null,
                            ],
                        }),
                        p
                            ? (0, i.jsxs)("mask", {
                                  id: y,
                                  children: [
                                      (0, i.jsx)("rect", {
                                          width: "150%",
                                          height: "150%",
                                          x: "-25%",
                                          y: "-25%",
                                          fill: "white",
                                      }),
                                      (0, i.jsx)("use", {
                                          href: "#".concat(g),
                                          fill: "black",
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)("foreignObject", {
                            mask: "url(#".concat(f, ")"),
                            x: 0,
                            y: 0,
                            className: c,
                            width: t,
                            height: t,
                            children: o,
                        }),
                    ],
                }),
                p
                    ? (0, i.jsx)("div", {
                          className: s.H7,
                          children: n,
                      })
                    : null,
            ],
        },
        f,
    );
}
