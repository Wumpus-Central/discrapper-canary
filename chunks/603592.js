n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(91192),
    a = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(662146),
    h = n(329922);
let p = i.forwardRef(function (e, t) {
    var n, l;
    let { id: p, onClick: f, onContextMenu: g, icon: m, selected: b, tooltip: _, upperBadge: O, lowerBadge: y, lowerBadgeSize: v, showPill: C = !0, className: j, 'aria-label': E, children: S, onMouseEnter: x, onMouseLeave: I, onMouseDown: P } = e,
        N = (0, s.Ie)(p),
        [w, Z] = i.useState(!1);
    return (0, r.jsxs)(u.H, {
        children: [
            C
                ? (0, r.jsx)('div', {
                      className: h.pill,
                      children: (0, r.jsx)(c.Z, {
                          hovered: w,
                          selected: b
                      })
                  })
                : null,
            (0, r.jsx)(d.Z, {
                text: _,
                selected: b,
                children: (0, r.jsx)(a.aRk, {
                    selected: !0,
                    upperBadge: O,
                    lowerBadge: y,
                    lowerBadgeSize: v,
                    children: (0, r.jsx)(
                        a.P3F,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                innerRef: t,
                                onMouseEnter: () => {
                                    null == x || x(), Z(!0);
                                },
                                onMouseLeave: () => {
                                    null == I || I(), Z(!1);
                                },
                                onMouseDown: P,
                                className: o()(h.circleIconButton, j, { [h.selected]: b || w }),
                                onClick: f,
                                'aria-label': 'string' == typeof _ && null == E ? _ : E,
                                'aria-selected': b,
                                onContextMenu: g,
                                focusProps: { enabled: !1 }
                            },
                            N
                        )),
                        (l = l =
                            {
                                children:
                                    null != m &&
                                    (0, r.jsx)(m, {
                                        className: h.circleIcon,
                                        color: 'currentColor'
                                    })
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
                        n)
                    )
                })
            }),
            S
        ]
    });
});
