n.d(t, {
    E: () => m,
    q: () => b,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(974674),
    s = n(481060),
    c = n(686546),
    u = n(419061),
    d = n(268685),
    f = n(649674);
function h(e) {
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
function p(e, t) {
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
            onMouseDown: o,
            onKeyDown: d,
            onContextMenu: h,
            onMouseEnter: p,
            onMouseLeave: g,
            className: b,
            ariaHidden: m,
            avatarDecoration: y,
            specs: v,
            cornerIconUrl: j,
            cornerIconOffsetX: C,
            cornerIconOffsetY: x,
            ariaLabel: E,
        } = e,
        S = {
            width: (0, s.dcp)(n),
            height: (0, s.dcp)(n),
        },
        I = (0, i.useId)(),
        _ = v.size * u.hs,
        P =
            null != y &&
            (0, r.jsxs)("svg", {
                width: _,
                height: _,
                viewBox: "0 0 ".concat(_, " ").concat(_),
                className: f.avatarDecoration,
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: I,
                        children: [
                            (0, r.jsx)("rect", {
                                x: 0,
                                y: 0,
                                width: _,
                                height: _,
                                fill: "white",
                            }),
                            null != j &&
                                (function (e, t) {
                                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        {
                                            height: l,
                                            width: a,
                                            x: o,
                                            y: s,
                                        } = (function (e, t, n, r) {
                                            let { height: i, width: l, x: a, y: o } = O(e, n, r),
                                                s = (t - e.size) / 2;
                                            return {
                                                width: l,
                                                height: i,
                                                x: a + s,
                                                y: o + s,
                                            };
                                        })(e, t, n, i);
                                    return (0, r.jsx)("rect", {
                                        mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
                                        height: l,
                                        width: a,
                                        x: o,
                                        y: s,
                                        rx: e.stroke,
                                        fill: "black",
                                    });
                                })(v, _, C, x),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: _,
                        height: _,
                        mask: "url(#".concat(I, ")"),
                        children: (0, r.jsx)("div", {
                            className: f.avatarStack,
                            children: (0, r.jsx)("img", {
                                className: f.avatar,
                                src: y,
                                alt: " ",
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                ],
            });
    return null != l || null != o
        ? (0, r.jsxs)(s.P3F, {
              className: a()(f.wrapper, f.pointer, b),
              style: S,
              onClick: l,
              onContextMenu: h,
              onMouseDown: o,
              onKeyDown: d,
              onMouseEnter: null != p ? p : void 0,
              onMouseLeave: null != g ? g : void 0,
              "aria-label": null != E ? E : void 0,
              "aria-hidden": m,
              children: [t, P],
          })
        : (0, r.jsxs)("div", {
              className: a()(f.wrapper, b),
              style: S,
              onContextMenu: null != h ? h : void 0,
              onMouseEnter: null != p ? p : void 0,
              onMouseLeave: null != g ? g : void 0,
              role: "img",
              "aria-label": null != E ? E : void 0,
              "aria-hidden": m,
              children: [t, P],
          });
}
function b(e) {
    let {
            src: t,
            size: n,
            "aria-hidden": l = !1,
            "aria-label": s,
            imageClassName: u,
            cornerIconUrl: b,
            cornerIconOffsetX: m = 0,
            cornerIconOffsetY: v = 0,
        } = e,
        j = (0, d.UC)(n),
        C = j.size,
        x = (0, i.useId)();
    return (0, r.jsx)(
        g,
        p(h({}, e), {
            ariaLabel: s,
            ariaHidden: l,
            specs: j,
            children: (0, r.jsxs)("svg", {
                width: C + m,
                height: C + v,
                viewBox: "0 0 ".concat(C + m, " ").concat(C + v),
                className: a()(f.mask, f.svg),
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
                            null != b &&
                                (function (e, t, n) {
                                    let { height: i, width: l, x: a, y: o } = O(e, t, n);
                                    return (0, r.jsx)("rect", {
                                        mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
                                        height: i,
                                        width: l,
                                        x: a,
                                        y: o,
                                        fill: "black",
                                    });
                                })(j, m, v),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: j.size,
                        height: j.size,
                        mask: "url(#".concat(x, ")"),
                        children: (0, r.jsx)(o.qe, {
                            src: t,
                            className: u,
                            isSpeaking: !1,
                        }),
                    }),
                    null != b &&
                        (0, r.jsx)(
                            "foreignObject",
                            p(h({}, y(j, m, v)), {
                                mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
                                children: (0, r.jsx)("img", {
                                    src: b,
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
            "aria-hidden": l = !1,
            "aria-label": o,
            cornerIconUrl: s,
            cornerIconOffsetX: u = 0,
            cornerIconOffsetY: b = 0,
        } = e,
        m = (0, i.useId)(),
        v = (0, i.useId)(),
        j = (0, d.UC)(n),
        C = j.size + u,
        x = j.size + b,
        E = O(j, u, b),
        S = y(j, u, b);
    return (0, r.jsx)(
        g,
        p(h({}, e), {
            ariaLabel: o,
            ariaHidden: l,
            specs: j,
            children: (0, r.jsxs)("svg", {
                width: C,
                height: x,
                viewBox: "0 0 ".concat(C, " ").concat(x),
                className: a()(f.mask, f.svg),
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
                                mask: "url(#".concat(c.QS.SQUIRCLE, ")"),
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
                        id: v,
                        children: (0, r.jsx)("circle", {
                            cx: S.x + S.width / 2,
                            cy: S.y + S.height / 2,
                            r: S.width / 2,
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
                                className: f.avatarStack,
                                children: (0, r.jsx)("img", {
                                    src: null != t ? t : void 0,
                                    alt: " ",
                                    className: f.avatar,
                                    "aria-hidden": !0,
                                }),
                            },
                            t,
                        ),
                    }),
                    null != s &&
                        (0, r.jsx)(
                            "foreignObject",
                            p(h({}, S), {
                                mask: "url(#".concat(v, ")"),
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
function y(e, t, n) {
    return {
        width: 16,
        height: 16,
        x: e.size - 16 - e.offset + t,
        y: e.size - 16 - e.offset + n,
    };
}
function O(e, t, n) {
    let r = y(e, t, n),
        i = r.x - 2,
        l = r.y - 2;
    return {
        width: r.height + 4,
        height: r.width + 4,
        x: i,
        y: l,
    };
}
