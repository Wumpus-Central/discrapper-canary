n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(662146),
    f = n(799830);
let h = i.forwardRef(function (e, t) {
    var n, l;
    let {
            id: h,
            onClick: p,
            onContextMenu: g,
            icon: b,
            selected: m,
            tooltip: y,
            upperBadge: O,
            lowerBadge: v,
            lowerBadgeSize: j,
            showPill: C = !0,
            className: x,
            "aria-label": E,
            children: S,
            onMouseEnter: I,
            onMouseLeave: _,
            onMouseDown: P,
        } = e,
        N = (0, o.Ie)(h),
        [Z, w] = i.useState(!1);
    return (0, r.jsxs)(u.H, {
        children: [
            C
                ? (0, r.jsx)("div", {
                      className: f.pill,
                      children: (0, r.jsx)(c.Z, {
                          hovered: Z,
                          selected: m,
                      }),
                  })
                : null,
            (0, r.jsx)(d.Z, {
                text: y,
                selected: m,
                children: (0, r.jsx)(s.aRk, {
                    selected: !0,
                    upperBadge: O,
                    lowerBadge: v,
                    lowerBadgeSize: j,
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
                                    null == I || I(), w(!0);
                                },
                                onMouseLeave: () => {
                                    null == _ || _(), w(!1);
                                },
                                onMouseDown: P,
                                className: a()(f.circleIconButton, x, { [f.selected]: m || Z }),
                                onClick: p,
                                "aria-label": "string" == typeof y && null == E ? y : E,
                                "aria-selected": m,
                                onContextMenu: g,
                                focusProps: { enabled: !1 },
                            },
                            N,
                        )),
                        (l = l =
                            {
                                children:
                                    null != b &&
                                    (0, r.jsx)(b, {
                                        className: f.circleIcon,
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
            S,
        ],
    });
});
