n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(837381),
    o = n(397927),
    c = n(941971),
    u = n(900848),
    d = n(550591),
    f = n(878442);
let p = l.forwardRef(function (e, t) {
    var n, i;
    let {
            id: p,
            onClick: h,
            onContextMenu: b,
            icon: g,
            selected: m,
            tooltip: A,
            upperBadge: y,
            lowerBadge: O,
            lowerBadgeSize: j,
            showPill: v = !0,
            className: x,
            "aria-label": E,
            children: _,
            onMouseEnter: C,
            onMouseLeave: S,
            onMouseDown: I,
        } = e,
        N = (0, s.Vd)(p),
        [T, P] = l.useState(!1);
    return (0, r.jsxs)(u.c, {
        children: [
            v
                ? (0, r.jsx)("div", {
                      className: f.Io,
                      children: (0, r.jsx)(c.A, {
                          hovered: T,
                          selected: m,
                      }),
                  })
                : null,
            (0, r.jsx)(d.A, {
                text: A,
                selected: m,
                children: (0, r.jsx)(o.Qk9, {
                    selected: !0,
                    upperBadge: y,
                    lowerBadge: O,
                    lowerBadgeSize: j,
                    children: (0, r.jsx)(
                        o.DUT,
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
                                    null == C || C(), P(!0);
                                },
                                onMouseLeave: () => {
                                    null == S || S(), P(!1);
                                },
                                onMouseDown: I,
                                className: a()(f.oZ, x, { [f.wH]: m || T }),
                                onClick: h,
                                "aria-label": "string" == typeof A && null == E ? A : E,
                                "aria-selected": m,
                                onContextMenu: b,
                                focusProps: { enabled: !1 },
                            },
                            N,
                        )),
                        (i = i =
                            {
                                children:
                                    null != g &&
                                    (0, r.jsx)(g, {
                                        className: f.sF,
                                        color: "currentColor",
                                    }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    ),
                }),
            }),
            _,
        ],
    });
});
