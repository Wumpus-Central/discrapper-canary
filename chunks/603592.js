n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(662146),
    p = n(790952);
let h = i.forwardRef(function (e, t) {
    var n, l;
    let {
            id: h,
            onClick: f,
            onContextMenu: g,
            icon: m,
            selected: b,
            tooltip: _,
            upperBadge: y,
            lowerBadge: O,
            lowerBadgeSize: v,
            showPill: j = !0,
            className: C,
            "aria-label": x,
            children: E,
            onMouseEnter: S,
            onMouseLeave: I,
            onMouseDown: P,
        } = e,
        N = (0, a.Ie)(h),
        [Z, w] = i.useState(!1);
    return (0, r.jsxs)(u.H, {
        children: [
            j
                ? (0, r.jsx)("div", {
                      className: p.pill,
                      children: (0, r.jsx)(c.Z, {
                          hovered: Z,
                          selected: b,
                      }),
                  })
                : null,
            (0, r.jsx)(d.Z, {
                text: _,
                selected: b,
                children: (0, r.jsx)(s.aRk, {
                    selected: !0,
                    upperBadge: y,
                    lowerBadge: O,
                    lowerBadgeSize: v,
                    children: (0, r.jsx)(
                        s.P3F,
                        ((n = (function (e) {
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
                        })(
                            {
                                innerRef: t,
                                onMouseEnter: () => {
                                    null == S || S(), w(!0);
                                },
                                onMouseLeave: () => {
                                    null == I || I(), w(!1);
                                },
                                onMouseDown: P,
                                className: o()(p.circleIconButton, C, { [p.selected]: b || Z }),
                                onClick: f,
                                "aria-label": "string" == typeof _ && null == x ? _ : x,
                                "aria-selected": b,
                                onContextMenu: g,
                                focusProps: { enabled: !1 },
                            },
                            N,
                        )),
                        (l = l =
                            {
                                children:
                                    null != m &&
                                    (0, r.jsx)(m, {
                                        className: p.circleIcon,
                                        color: "currentColor",
                                    }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    ),
                }),
            }),
            E,
        ],
    });
});
