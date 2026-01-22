n.d(t, {
    e: () => g,
    h: () => m,
}),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(97808),
    o = n(397927),
    c = n(573435),
    u = n(398094),
    d = n(778712),
    f = n(920466);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function b(e) {
    let {
            children: t,
            size: n,
            onClick: i,
            onMouseDown: s,
            onKeyDown: d,
            onContextMenu: p,
            onMouseEnter: h,
            onMouseLeave: b,
            className: g,
            ariaHidden: m,
            avatarDecoration: A,
            specs: O,
            cornerIconUrl: j,
            cornerIconOffsetX: v,
            cornerIconOffsetY: x,
            ariaLabel: E,
        } = e,
        _ = {
            width: (0, o.FT9)(n),
            height: (0, o.FT9)(n),
        },
        C = (0, l.useId)(),
        S = O.size * u.Xq,
        I =
            null != A &&
            (0, r.jsxs)("svg", {
                width: S,
                height: S,
                viewBox: "0 0 ".concat(S, " ").concat(S),
                className: f.DX,
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: C,
                        children: [
                            (0, r.jsx)("rect", {
                                x: 0,
                                y: 0,
                                width: S,
                                height: S,
                                fill: "white",
                            }),
                            null != j &&
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: i,
                                            width: a,
                                            x: s,
                                            y: o,
                                        } = (function (e, t, n, r) {
                                            let { height: l, width: i, x: a, y: s } = y(e, n, r),
                                                o = (t - e.size) / 2;
                                            return {
                                                width: i,
                                                height: l,
                                                x: a + o,
                                                y: s + o,
                                            };
                                        })(e, t, n, l);
                                    return (0, r.jsx)("rect", {
                                        mask: "url(#".concat(c.hW.SQUIRCLE, ")"),
                                        height: i,
                                        width: a,
                                        x: s,
                                        y: o,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(O, S, v, x),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: S,
                        height: S,
                        mask: "url(#".concat(C, ")"),
                        children: (0, r.jsx)("img", {
                            className: f.M,
                            src: A,
                            alt: " ",
                            "aria-hidden": !0,
                        }),
                    }),
                ],
            });
    return null != i || null != s
        ? (0, r.jsxs)(o.DUT, {
              className: a()(f.iE, f.Wn, g),
              style: _,
              onClick: i,
              onContextMenu: p,
              onMouseDown: s,
              onKeyDown: d,
              onMouseEnter: null != h ? h : void 0,
              onMouseLeave: null != b ? b : void 0,
              "aria-label": null != E ? E : void 0,
              "aria-hidden": m,
              children: [t, I],
          })
        : (0, r.jsxs)("div", {
              className: a()(f.iE, g),
              style: _,
              onContextMenu: null != p ? p : void 0,
              onMouseEnter: null != h ? h : void 0,
              onMouseLeave: null != b ? b : void 0,
              role: "img",
              "aria-label": null != E ? E : void 0,
              "aria-hidden": m,
              children: [t, I],
          });
}

function g(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": i = !1,
            "aria-label": o,
            imageClassName: u,
            cornerIconUrl: g,
            cornerIconOffsetX: m = 0,
            cornerIconOffsetY: O = 0,
        } = e,
        j = (0, d.Kj)(n),
        v = j.size,
        x = (0, l.useId)();
    return (0, r.jsx)(
        b,
        h(p({}, e), {
            ariaLabel: o,
            ariaHidden: i,
            specs: j,
            children: (0, r.jsxs)("svg", {
                width: v + m,
                height: v + O,
                viewBox: "0 0 ".concat(v + m, " ").concat(v + O),
                className: a()(f.dK, f.JW),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: x,
                        children: [
                            (0, r.jsx)("circle", {
                                cx: j.size / 2,
                                cy: j.size / 2,
                                r: j.size / 2,
                                fill: "white",
                            }),
                            null != g &&
                                (function (e, t, n) {
                                    let { height: l, width: i, x: a, y: s } = y(e, t, n);
                                    return (0, r.jsx)("rect", {
                                        mask: "url(#".concat(c.hW.SQUIRCLE, ")"),
                                        height: l,
                                        width: i,
                                        x: a,
                                        y: s,
                                        fill: "black",
                                    });
                                })(j, m, O),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: j.size,
                        height: j.size,
                        mask: "url(#".concat(x, ")"),
                        children: (0, r.jsx)(s.d9, {
                            src: t,
                            className: u,
                            isSpeaking: !1,
                        }),
                    }),
                    null != g &&
                        (0, r.jsx)(
                            "foreignObject",
                            h(p({}, A(j, m, O)), {
                                mask: "url(#".concat(c.hW.SQUIRCLE, ")"),
                                children: (0, r.jsx)("img", {
                                    src: g,
                                    height: 16,
                                    width: 16,
                                    alt: " ",
                                }),
                            }),
                        ),
                ],
            }),
        }),
    );
}

function m(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": i = !1,
            "aria-label": s,
            cornerIconUrl: o,
            cornerIconOffsetX: u = 0,
            cornerIconOffsetY: g = 0,
        } = e,
        m = (0, l.useId)(),
        O = (0, l.useId)(),
        j = (0, d.Kj)(n),
        v = j.size + u,
        x = j.size + g,
        E = y(j, u, g),
        _ = A(j, u, g);
    return (0, r.jsx)(
        b,
        h(p({}, e), {
            ariaLabel: s,
            ariaHidden: i,
            specs: j,
            children: (0, r.jsxs)("svg", {
                width: v,
                height: x,
                viewBox: "0 0 ".concat(v, " ").concat(x),
                className: a()(f.dK, f.JW),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: m,
                        children: [
                            (0, r.jsx)("rect", {
                                x: 0,
                                y: 0,
                                width: j.size,
                                height: j.size,
                                fill: "white",
                                mask: "url(#".concat(c.hW.SQUIRCLE, ")"),
                            }),
                            (0, r.jsx)("circle", {
                                cx: E.x + E.width / 2,
                                cy: E.y + E.height / 2,
                                r: E.width / 2,
                                fill: "black",
                            }),
                        ],
                    }),
                    (0, r.jsx)("mask", {
                        id: O,
                        children: (0, r.jsx)("circle", {
                            cx: _.x + _.width / 2,
                            cy: _.y + _.height / 2,
                            r: _.width / 2,
                            fill: "white",
                        }),
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: j.size,
                        height: j.size,
                        mask: "url(#".concat(m, ")"),
                        children: (0, r.jsx)(
                            "div",
                            {
                                className: f.yA,
                                children: (0, r.jsx)("img", {
                                    src: null != t ? t : void 0,
                                    alt: " ",
                                    className: f.my,
                                    "aria-hidden": !0,
                                }),
                            },
                            t,
                        ),
                    }),
                    null != o &&
                        (0, r.jsx)(
                            "foreignObject",
                            h(p({}, _), {
                                mask: "url(#".concat(O, ")"),
                                children: (0, r.jsx)("img", {
                                    src: o,
                                    height: 16,
                                    width: 16,
                                    alt: " ",
                                }),
                            }),
                        ),
                ],
            }),
        }),
    );
}

function A(e, t, n) {
    return {
        width: 16,
        height: 16,
        x: e.size - 16 - e.offset + t,
        y: e.size - 16 - e.offset + n,
    };
}

function y(e, t, n) {
    let r = A(e, t, n),
        l = r.x - 2,
        i = r.y - 2;
    return {
        width: r.height + 4,
        height: r.width + 4,
        x: l,
        y: i,
    };
}
