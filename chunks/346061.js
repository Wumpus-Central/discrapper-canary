n.d(t, { e: () => g, h: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(97808),
    o = n(397927),
    d = n(573435),
    c = n(398094),
    u = n(778712),
    h = n(920466);
function A(e) {
    let {
            children: t,
            size: n,
            onClick: s,
            onMouseDown: r,
            onKeyDown: u,
            onContextMenu: A,
            onMouseEnter: g,
            onMouseLeave: m,
            className: p,
            ariaHidden: x,
            avatarDecoration: f,
            specs: E,
            cornerIconUrl: C,
            cornerIconOffsetX: I,
            cornerIconOffsetY: S,
            ariaLabel: b,
        } = e,
        N = { width: (0, o.FT9)(n), height: (0, o.FT9)(n) },
        T = (0, l.useId)(),
        j = E.size * c.Xq,
        v =
            null != f &&
            (0, i.jsxs)("svg", {
                width: j,
                height: j,
                viewBox: `0 0 ${j} ${j}`,
                className: h.DX,
                "aria-hidden": !0,
                children: [
                    (0, i.jsxs)("mask", {
                        id: T,
                        children: [
                            (0, i.jsx)("rect", { x: 0, y: 0, width: j, height: j, fill: "white" }),
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
                                            let { height: l, width: s, x: a, y: r } = _(e, n, i),
                                                o = (t - e.size) / 2;
                                            return { width: s, height: l, x: a + o, y: r + o };
                                        })(e, t, n, l);
                                    return (0, i.jsx)("rect", {
                                        mask: `url(#${d.hW.SQUIRCLE})`,
                                        height: s,
                                        width: a,
                                        x: r,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(E, j, I, S),
                        ],
                    }),
                    (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: j,
                        height: j,
                        mask: `url(#${T})`,
                        children: (0, i.jsx)("img", { className: h.M, src: f, alt: " ", "aria-hidden": !0 }),
                    }),
                ],
            });
    return null != s || null != r
        ? (0, i.jsxs)(o.DUT, {
              className: a()(h.iE, h.Wn, p),
              style: N,
              onClick: s,
              onContextMenu: A,
              onMouseDown: r,
              onKeyDown: u,
              onMouseEnter: g ?? void 0,
              onMouseLeave: m ?? void 0,
              "aria-label": b ?? void 0,
              "aria-hidden": x,
              children: [t, v],
          })
        : (0, i.jsxs)("div", {
              className: a()(h.iE, p),
              style: N,
              onContextMenu: A ?? void 0,
              onMouseEnter: g ?? void 0,
              onMouseLeave: m ?? void 0,
              role: "img",
              "aria-label": b ?? void 0,
              "aria-hidden": x,
              children: [t, v],
          });
}
function g(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": s = !1,
            "aria-label": o,
            imageClassName: c,
            cornerIconUrl: g,
            cornerIconOffsetX: m = 0,
            cornerIconOffsetY: x = 0,
        } = e,
        f = (0, u.Kj)(n),
        E = f.size,
        C = (0, l.useId)();
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: o,
        ariaHidden: s,
        specs: f,
        children: (0, i.jsxs)("svg", {
            width: E + m,
            height: E + x,
            viewBox: `0 0 ${E + m} ${E + x}`,
            className: a()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: C,
                    children: [
                        (0, i.jsx)("circle", { cx: f.size / 2, cy: f.size / 2, r: f.size / 2, fill: "white" }),
                        null != g &&
                            (function (e, t, n) {
                                let { height: l, width: s, x: a, y: r } = _(e, t, n);
                                return (0, i.jsx)("rect", {
                                    mask: `url(#${d.hW.SQUIRCLE})`,
                                    height: l,
                                    width: s,
                                    x: a,
                                    y: r,
                                    fill: "black",
                                });
                            })(f, m, x),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: f.size,
                    height: f.size,
                    mask: `url(#${C})`,
                    children: (0, i.jsx)(r.d9, { src: t, className: c, isSpeaking: !1 }),
                }),
                null != g &&
                    (0, i.jsx)("foreignObject", {
                        ...p(f, m, x),
                        mask: `url(#${d.hW.SQUIRCLE})`,
                        children: (0, i.jsx)("img", { src: g, height: 16, width: 16, alt: " " }),
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
            cornerIconOffsetX: c = 0,
            cornerIconOffsetY: g = 0,
        } = e,
        m = (0, l.useId)(),
        x = (0, l.useId)(),
        f = (0, u.Kj)(n),
        E = f.size + c,
        C = f.size + g,
        I = _(f, c, g),
        S = p(f, c, g);
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: r,
        ariaHidden: s,
        specs: f,
        children: (0, i.jsxs)("svg", {
            width: E,
            height: C,
            viewBox: `0 0 ${E} ${C}`,
            className: a()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: m,
                    children: [
                        (0, i.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: f.size,
                            height: f.size,
                            fill: "white",
                            mask: `url(#${d.hW.SQUIRCLE})`,
                        }),
                        (0, i.jsx)("circle", {
                            cx: I.x + I.width / 2,
                            cy: I.y + I.height / 2,
                            r: I.width / 2,
                            fill: "black",
                        }),
                    ],
                }),
                (0, i.jsx)("mask", {
                    id: x,
                    children: (0, i.jsx)("circle", {
                        cx: S.x + S.width / 2,
                        cy: S.y + S.height / 2,
                        r: S.width / 2,
                        fill: "white",
                    }),
                }),
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: f.size,
                    height: f.size,
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
                        ...S,
                        mask: `url(#${x})`,
                        children: (0, i.jsx)("img", { src: o, height: 16, width: 16, alt: " " }),
                    }),
            ],
        }),
    });
}
function p(e, t, n) {
    return { width: 16, height: 16, x: e.size - 16 - e.offset + t, y: e.size - 16 - e.offset + n };
}
function _(e, t, n) {
    let i = p(e, t, n),
        l = i.x - 2,
        s = i.y - 2;
    return { width: i.height + 4, height: i.width + 4, x: l, y: s };
}
