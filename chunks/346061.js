n.d(t, { e: () => _, h: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(97808),
    o = n(397927),
    c = n(573435),
    d = n(190460),
    u = n(778712),
    h = n(774659);
function A(e) {
    let {
            children: t,
            size: n,
            onClick: s,
            onMouseDown: r,
            onKeyDown: u,
            onContextMenu: A,
            onMouseEnter: _,
            onMouseLeave: m,
            className: g,
            ariaHidden: f,
            avatarDecoration: x,
            specs: E,
            cornerIconUrl: I,
            cornerIconOffsetX: C,
            cornerIconOffsetY: N,
            ariaLabel: T,
        } = e,
        S = { width: (0, o.FT9)(n), height: (0, o.FT9)(n) },
        b = (0, l.useId)(),
        y = E.size * d.Xq,
        v =
            null != x &&
            (0, i.jsxs)("svg", {
                width: y,
                height: y,
                viewBox: `0 0 ${y} ${y}`,
                className: h.DX,
                "aria-hidden": !0,
                children: [
                    (0, i.jsxs)("mask", {
                        id: b,
                        children: [
                            (0, i.jsx)("rect", { x: 0, y: 0, width: y, height: y, fill: "white" }),
                            null != I &&
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: s,
                                            width: a,
                                            x: r,
                                            y: o,
                                        } = (function (e, t, n, i) {
                                            let { height: l, width: s, x: a, y: r } = p(e, n, i),
                                                o = (t - e.size) / 2;
                                            return { width: s, height: l, x: a + o, y: r + o };
                                        })(e, t, n, l);
                                    return (0, i.jsx)("rect", {
                                        mask: `url(#${c.hW.SQUIRCLE})`,
                                        height: s,
                                        width: a,
                                        x: r,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(E, y, C, N),
                        ],
                    }),
                    (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: y,
                        height: y,
                        mask: `url(#${b})`,
                        children: (0, i.jsx)("img", { className: h.M, src: x, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != s || null != r
        ? (0, i.jsxs)(o.DUT, {
              className: a()(h.iE, h.Wn, g),
              style: S,
              onClick: s,
              onContextMenu: A,
              onMouseDown: r,
              onKeyDown: u,
              onMouseEnter: _ ?? void 0,
              onMouseLeave: m ?? void 0,
              "aria-label": T ?? void 0,
              "aria-hidden": f,
              children: [t, v],
          })
        : (0, i.jsxs)("div", {
              className: a()(h.iE, g),
              style: S,
              onContextMenu: A ?? void 0,
              onMouseEnter: _ ?? void 0,
              onMouseLeave: m ?? void 0,
              role: "img",
              "aria-label": T ?? void 0,
              "aria-hidden": f,
              children: [t, v],
          });
}
function _(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": o,
            imageClassName: d,
            cornerIconUrl: _,
            cornerIconOffsetX: m = 0,
            cornerIconOffsetY: f = 0,
        } = e,
        x = (0, u.Kj)(n),
        E = x.size,
        I = (0, l.useId)();
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: o,
        ariaHidden: s,
        specs: x,
        children: (0, i.jsxs)("svg", {
            width: E + m,
            height: E + f,
            viewBox: `0 0 ${E + m} ${E + f}`,
            className: a()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: I,
                    children: [
                        (0, i.jsx)("circle", { cx: x.size / 2, cy: x.size / 2, r: x.size / 2, fill: "white" }),
                        null != _ &&
                            (function (e, t, n) {
                                let { height: l, width: s, x: a, y: r } = p(e, t, n);
                                return (0, i.jsx)("rect", {
                                    mask: `url(#${c.hW.SQUIRCLE})`,
                                    height: l,
                                    width: s,
                                    x: a,
                                    y: r,
                                    fill: "black",
                                });
                            })(x, m, f),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: x.size,
                    height: x.size,
                    mask: `url(#${I})`,
                    children: (0, i.jsx)(r.d9, { src: t, className: d, isSpeaking: !1 }),
                }),
                null != _ &&
                    (0, i.jsx)("foreignObject", {
                        ...g(x, m, f),
                        mask: `url(#${c.hW.SQUIRCLE})`,
                        children: (0, i.jsx)("img", { src: _, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function m(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": r,
            cornerIconUrl: o,
            cornerIconOffsetX: d = 0,
            cornerIconOffsetY: _ = 0,
        } = e,
        m = (0, l.useId)(),
        f = (0, l.useId)(),
        x = (0, u.Kj)(n),
        E = x.size + d,
        I = x.size + _,
        C = p(x, d, _),
        N = g(x, d, _);
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: r,
        ariaHidden: s,
        specs: x,
        children: (0, i.jsxs)("svg", {
            width: E,
            height: I,
            viewBox: `0 0 ${E} ${I}`,
            className: a()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: m,
                    children: [
                        (0, i.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: x.size,
                            height: x.size,
                            fill: "white",
                            mask: `url(#${c.hW.SQUIRCLE})`,
                        }),
                        (0, i.jsx)("circle", {
                            cx: C.x + C.width / 2,
                            cy: C.y + C.height / 2,
                            r: C.width / 2,
                            fill: "black",
                        }),
                    ],
                }),
                (0, i.jsx)("mask", {
                    id: f,
                    children: (0, i.jsx)("circle", {
                        cx: N.x + N.width / 2,
                        cy: N.y + N.height / 2,
                        r: N.width / 2,
                        fill: "white",
                    }),
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: x.size,
                    height: x.size,
                    mask: `url(#${m})`,
                    children: (0, i.jsx)(
                        "div",
                        {
                            className: h.yA,
                            children: (0, i.jsx)("img", {
                                src: t ?? void 0,
                                alt: " ",
                                className: h.my,
                                "aria-hidden": !0,
                            }),
                        },
                        t,
                    ),
                }),
                null != o &&
                    (0, i.jsx)("foreignObject", {
                        ...N,
                        mask: `url(#${f})`,
                        children: (0, i.jsx)("img", { src: o, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function g(e, t, n) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + t, y: e.size - 16 - e.offset + n };
}
function p(e, t, n) {
    let i = g(e, t, n),
        l = i.x - 2,
        s = i.y - 2;
    return { width: i.height + 4, height: i.width + 4, x: l, y: s };
}
