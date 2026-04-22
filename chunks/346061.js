n.d(t, { e: () => _, h: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(97808),
    o = n(778712),
    d = n(939249),
    c = n(573435),
    u = n(190460),
    h = n(282291);
function A(e) {
    let {
            children: t,
            size: n,
            onClick: s,
            onMouseDown: r,
            onKeyDown: A,
            onContextMenu: _,
            onMouseEnter: m,
            onMouseLeave: g,
            className: f,
            ariaHidden: E,
            avatarDecoration: x,
            specs: I,
            cornerIconUrl: C,
            cornerIconOffsetX: b,
            cornerIconOffsetY: N,
            ariaLabel: S,
        } = e,
        v = { width: (0, o.FT)(n), height: (0, o.FT)(n) },
        T = (0, l.useId)(),
        y = I.size * u.Xq,
        R =
            null != x &&
            (0, i.jsxs)("svg", {
                width: y,
                height: y,
                viewBox: `0 0 ${y} ${y}`,
                className: h.DX,
                "aria-hidden": !0,
                children: [
                    (0, i.jsxs)("mask", {
                        id: T,
                        children: [
                            (0, i.jsx)("rect", { x: 0, y: 0, width: y, height: y, fill: "white" }),
                            null != C &&
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
                                })(I, y, b, N),
                        ],
                    }),
                    (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: y,
                        height: y,
                        mask: `url(#${T})`,
                        children: (0, i.jsx)("img", { className: h.M, src: x, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != s || null != r
        ? (0, i.jsxs)(d.D, {
              className: a()(h.iE, h.Wn, f),
              style: v,
              onClick: s,
              onContextMenu: _,
              onMouseDown: r,
              onKeyDown: A,
              onMouseEnter: m ?? void 0,
              onMouseLeave: g ?? void 0,
              "aria-label": S ?? void 0,
              "aria-hidden": E,
              children: [t, R],
          })
        : (0, i.jsxs)("div", {
              className: a()(h.iE, f),
              style: v,
              onContextMenu: _ ?? void 0,
              onMouseEnter: m ?? void 0,
              onMouseLeave: g ?? void 0,
              role: "img",
              "aria-label": S ?? void 0,
              "aria-hidden": E,
              children: [t, R],
          });
}
function _(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": d,
            imageClassName: u,
            cornerIconUrl: _,
            cornerIconOffsetX: m = 0,
            cornerIconOffsetY: f = 0,
        } = e,
        E = (0, o.Kj)(n),
        x = E.size,
        I = (0, l.useId)();
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: d,
        ariaHidden: s,
        specs: E,
        children: (0, i.jsxs)("svg", {
            width: x + m,
            height: x + f,
            viewBox: `0 0 ${x + m} ${x + f}`,
            className: a()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: I,
                    children: [
                        (0, i.jsx)("circle", { cx: E.size / 2, cy: E.size / 2, r: E.size / 2, fill: "white" }),
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
                            })(E, m, f),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: E.size,
                    height: E.size,
                    mask: `url(#${I})`,
                    children: (0, i.jsx)(r.d9, { src: t, className: u, isSpeaking: !1 }),
                }),
                null != _ &&
                    (0, i.jsx)("foreignObject", {
                        ...g(E, m, f),
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
            cornerIconUrl: d,
            cornerIconOffsetX: u = 0,
            cornerIconOffsetY: _ = 0,
        } = e,
        m = (0, l.useId)(),
        f = (0, l.useId)(),
        E = (0, o.Kj)(n),
        x = E.size + u,
        I = E.size + _,
        C = p(E, u, _),
        b = g(E, u, _);
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: r,
        ariaHidden: s,
        specs: E,
        children: (0, i.jsxs)("svg", {
            width: x,
            height: I,
            viewBox: `0 0 ${x} ${I}`,
            className: a()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: m,
                    children: [
                        (0, i.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: E.size,
                            height: E.size,
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
                        cx: b.x + b.width / 2,
                        cy: b.y + b.height / 2,
                        r: b.width / 2,
                        fill: "white",
                    }),
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: E.size,
                    height: E.size,
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
                null != d &&
                    (0, i.jsx)("foreignObject", {
                        ...b,
                        mask: `url(#${f})`,
                        children: (0, i.jsx)("img", { src: d, height: 16, width: 16, alt: " " }),
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
