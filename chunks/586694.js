n.d(t, {
    E: () => b,
    q: () => m,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(974674),
    s = n(481060),
    c = n(686546),
    u = n(419061),
    d = n(268685),
    p = n(536537);
function f(e) {
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
function g(e) {
    let {
            children: t,
            size: n,
            onClick: l,
            onMouseDown: a,
            onKeyDown: d,
            onContextMenu: f,
            onMouseEnter: h,
            onMouseLeave: g,
            className: m,
            ariaHidden: b,
            avatarDecoration: _,
            specs: O,
            cornerIconUrl: v,
            cornerIconOffsetX: j,
            cornerIconOffsetY: x,
            ariaLabel: C,
        } = e,
        E = {
            width: (0, s.pxk)(n),
            height: (0, s.pxk)(n),
        },
        S = (0, i.useId)(),
        I = O.size * u.hs,
        P =
            null != _ &&
            (0, r.jsxs)("svg", {
                width: I,
                height: I,
                viewBox: "0 0 ".concat(I, " ").concat(I),
                className: p.avatarDecoration,
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: S,
                        children: [
                            (0, r.jsx)("rect", {
                                x: 0,
                                y: 0,
                                width: I,
                                height: I,
                                fill: "white",
                            }),
                            null != v &&
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: l,
                                            width: o,
                                            x: a,
                                            y: s,
                                        } = (function (e, t, n, r) {
                                            let { height: i, width: l, x: o, y: a } = y(e, n, r),
                                                s = (t - e.size) / 2;
                                            return {
                                                width: l,
                                                height: i,
                                                x: o + s,
                                                y: a + s,
                                            };
                                        })(e, t, n, i);
                                    return (0, r.jsx)("rect", {
                                        mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
                                        height: l,
                                        width: o,
                                        x: a,
                                        y: s,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(O, I, j, x),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: I,
                        height: I,
                        mask: "url(#".concat(S, ")"),
                        children: (0, r.jsx)("div", {
                            className: p.avatarStack,
                            children: (0, r.jsx)("img", {
                                className: p.avatar,
                                src: _,
                                alt: " ",
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                ],
            });
    return null != l || null != a
        ? (0, r.jsxs)(s.P3F, {
              className: o()(p.wrapper, p.pointer, m),
              style: E,
              onClick: l,
              onContextMenu: f,
              onMouseDown: a,
              onKeyDown: d,
              onMouseEnter: null != h ? h : void 0,
              onMouseLeave: null != g ? g : void 0,
              "aria-label": null != C ? C : void 0,
              "aria-hidden": b,
              children: [t, P],
          })
        : (0, r.jsxs)("div", {
              className: o()(p.wrapper, m),
              style: E,
              onContextMenu: null != f ? f : void 0,
              onMouseEnter: null != h ? h : void 0,
              onMouseLeave: null != g ? g : void 0,
              role: "img",
              "aria-label": null != C ? C : void 0,
              "aria-hidden": b,
              children: [t, P],
          });
}
function m(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": l = !1,
            "aria-label": s,
            imageClassName: u,
            cornerIconUrl: m,
            cornerIconOffsetX: b = 0,
            cornerIconOffsetY: O = 0,
        } = e,
        v = (0, d.UC)(n),
        j = v.size,
        x = (0, i.useId)();
    return (0, r.jsx)(
        g,
        h(f({}, e), {
            ariaLabel: s,
            ariaHidden: l,
            specs: v,
            children: (0, r.jsxs)("svg", {
                width: j + b,
                height: j + O,
                viewBox: "0 0 ".concat(j + b, " ").concat(j + O),
                className: o()(p.mask, p.svg),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: x,
                        children: [
                            (0, r.jsx)("circle", {
                                cx: v.size / 2,
                                cy: v.size / 2,
                                r: v.size / 2,
                                fill: "white",
                            }),
                            null != m &&
                                (function (e, t, n) {
                                    let { height: i, width: l, x: o, y: a } = y(e, t, n);
                                    return (0, r.jsx)("rect", {
                                        mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
                                        height: i,
                                        width: l,
                                        x: o,
                                        y: a,
                                        fill: "black",
                                    });
                                })(v, b, O),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: v.size,
                        height: v.size,
                        mask: "url(#".concat(x, ")"),
                        children: (0, r.jsx)(a.qe, {
                            src: t,
                            className: u,
                            isSpeaking: !1,
                        }),
                    }),
                    null != m &&
                        (0, r.jsx)(
                            "foreignObject",
                            h(f({}, _(v, b, O)), {
                                mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
                                children: (0, r.jsx)("img", {
                                    src: m,
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
function b(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": l = !1,
            "aria-label": a,
            cornerIconUrl: s,
            cornerIconOffsetX: u = 0,
            cornerIconOffsetY: m = 0,
        } = e,
        b = (0, i.useId)(),
        O = (0, i.useId)(),
        v = (0, d.UC)(n),
        j = v.size + u,
        x = v.size + m,
        C = y(v, u, m),
        E = _(v, u, m);
    return (0, r.jsx)(
        g,
        h(f({}, e), {
            ariaLabel: a,
            ariaHidden: l,
            specs: v,
            children: (0, r.jsxs)("svg", {
                width: j,
                height: x,
                viewBox: "0 0 ".concat(j, " ").concat(x),
                className: o()(p.mask, p.svg),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: b,
                        children: [
                            (0, r.jsx)("rect", {
                                x: 0,
                                y: 0,
                                width: v.size,
                                height: v.size,
                                fill: "white",
                                mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
                            }),
                            (0, r.jsx)("circle", {
                                cx: C.x + C.width / 2,
                                cy: C.y + C.height / 2,
                                r: C.width / 2,
                                fill: "black",
                            }),
                        ],
                    }),
                    (0, r.jsx)("mask", {
                        id: O,
                        children: (0, r.jsx)("circle", {
                            cx: E.x + E.width / 2,
                            cy: E.y + E.height / 2,
                            r: E.width / 2,
                            fill: "white",
                        }),
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: v.size,
                        height: v.size,
                        mask: "url(#".concat(b, ")"),
                        children: (0, r.jsx)(
                            "div",
                            {
                                className: p.avatarStack,
                                children: (0, r.jsx)("img", {
                                    src: null != t ? t : void 0,
                                    alt: " ",
                                    className: p.avatar,
                                    "aria-hidden": !0,
                                }),
                            },
                            t,
                        ),
                    }),
                    null != s &&
                        (0, r.jsx)(
                            "foreignObject",
                            h(f({}, E), {
                                mask: "url(#".concat(O, ")"),
                                children: (0, r.jsx)("img", {
                                    src: s,
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
function _(e, t, n) {
    return {
        width: 16,
        height: 16,
        x: e.size - 16 - e.offset + t,
        y: e.size - 16 - e.offset + n,
    };
}
function y(e, t, n) {
    let r = _(e, t, n),
        i = r.x - 2,
        l = r.y - 2;
    return {
        width: r.height + 4,
        height: r.width + 4,
        x: i,
        y: l,
    };
}
