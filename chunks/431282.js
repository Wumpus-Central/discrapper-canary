n.d(t, {
    V4: () => p,
    XE: () => h,
    gp: () => m,
}),
    n(388685);
var a = n(951288),
    r = n(647438),
    i = n(657707),
    l = n(481060),
    s = n(732380),
    o = n(388032),
    c = n(54482);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    return (0, a.jsx)("div", {
        className: c.submenuPaddingContainer,
        children: (0, a.jsx)(
            l.v2r,
            d(
                {
                    variant: "fixed",
                    hideScroller: !0,
                    onSelect: void 0,
                },
                e,
            ),
        ),
    });
}
function p(e) {
    let { action: t, onClick: n, icon: m, label: p, sublabel: h, trailing: x, renderSubmenu: g, ref: f } = e,
        b = null != n,
        v = (0, s.Q1)({
            action: t,
            onClick: n,
        }),
        [j, _] = r.useState(!1),
        y = r.useRef(null),
        C = null != f ? f : y,
        S = null != g,
        E = S && b,
        T = {
            offset: {
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
            },
        },
        O = r.useCallback(() => {
            _(!0);
        }, []),
        N = r.useCallback(() => {
            _(!1);
        }, []),
        P = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("div", {
                        className: c.menuItemIcon,
                        children: (0, a.jsx)(m, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: c.menuItemLabel,
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: c.menuItemLabelText,
                                        children: p,
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        color: "currentColor",
                                        variant: "text-xs/medium",
                                        children: h,
                                    }),
                                ],
                            }),
                            x,
                        ],
                    }),
                ],
            }),
        I = (e) => {
            let t;
            return (
                (t = E
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(l.P3F, {
                                  className: c.menuItemContent,
                                  onClick: v,
                                  focusProps: { offset: u(d({}, T.offset), { right: 0 }) },
                                  children: P(),
                              }),
                              (0, a.jsx)(
                                  l.P3F,
                                  u(
                                      d(
                                          {
                                              className: c.submenuIconWrapper,
                                              "aria-label": o.intl.string(o.t.PdRCRg),
                                          },
                                          e,
                                      ),
                                      {
                                          onClick: O,
                                          focusProps: T,
                                          children: (0, a.jsx)(i.Fbu, {
                                              size: "xs",
                                              color: "currentColor",
                                          }),
                                      },
                                  ),
                              ),
                          ],
                      })
                    : S
                      ? (0, a.jsxs)(
                            l.P3F,
                            u(d({ className: c.menuItemContent }, e), {
                                onClick: O,
                                focusProps: T,
                                children: [
                                    P(),
                                    (0, a.jsx)("div", {
                                        className: c.submenuIconWrapper,
                                        children: (0, a.jsx)(i.Fbu, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    }),
                                ],
                            }),
                        )
                      : (0, a.jsx)(l.P3F, {
                            className: c.menuItemContent,
                            onClick: v,
                            focusProps: T,
                            children: P(),
                        })),
                (0, a.jsx)("div", {
                    ref: C,
                    className: c.menuItemInner,
                    children: t,
                })
            );
        };
    return S
        ? (0, a.jsx)("li", {
              className: c.menuItem,
              onMouseEnter: O,
              onMouseLeave: N,
              children: (0, a.jsx)(l.yRy, {
                  targetElementRef: C,
                  spacing: 0,
                  renderPopout: g,
                  shouldShow: j,
                  onRequestClose: N,
                  children: I,
              }),
          })
        : (0, a.jsx)("li", {
              className: c.menuItem,
              children: I(),
          });
}
function h(e) {
    let { children: t, "aria-label": n } = e;
    return (0, a.jsx)("ul", {
        "aria-label": n,
        children: t,
    });
}
