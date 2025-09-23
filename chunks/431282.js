n.d(t, {
    V4: () => h,
    XE: () => m,
    gp: () => p,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(481060),
    s = n(732380),
    l = n(388032),
    c = n(138005);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    return (0, r.jsx)("div", {
        className: c.submenuPaddingContainer,
        children: (0, r.jsx)(
            o.v2r,
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
function h(e) {
    let { action: t, onClick: n, icon: u, label: f, sublabel: p, trailing: h, renderSubmenu: m } = e,
        g = null != n,
        E = (0, s.Q1)({
            action: t,
            onClick: n,
        }),
        [b, y] = i.useState(!1),
        O = i.useRef(null),
        v = null != m,
        I = v && g,
        T = {
            offset: {
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
            },
        },
        S = i.useCallback(() => {
            y(!0);
        }, []),
        A = i.useCallback(() => {
            y(!1);
        }, []),
        C = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: c.menuItemIcon,
                        children: (0, r.jsx)(u, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: c.menuItemLabel,
                        children: [
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: c.menuItemLabelText,
                                        children: f,
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        color: "currentColor",
                                        variant: "text-xs/medium",
                                        children: p,
                                    }),
                                ],
                            }),
                            h,
                        ],
                    }),
                ],
            }),
        N = (e) => {
            let t;
            return (
                (t = I
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.P3F, {
                                  className: c.menuItemContent,
                                  onClick: E,
                                  focusProps: { offset: _(d({}, T.offset), { right: 0 }) },
                                  children: C(),
                              }),
                              (0, r.jsx)(
                                  o.P3F,
                                  _(
                                      d(
                                          {
                                              className: c.submenuIconWrapper,
                                              "aria-label": l.intl.string(l.t.PdRCRk),
                                          },
                                          e,
                                      ),
                                      {
                                          onClick: S,
                                          focusProps: T,
                                          children: (0, r.jsx)(a.Fbu, {
                                              size: "xs",
                                              color: "currentColor",
                                          }),
                                      },
                                  ),
                              ),
                          ],
                      })
                    : v
                      ? (0, r.jsxs)(
                            o.P3F,
                            _(d({ className: c.menuItemContent }, e), {
                                onClick: S,
                                focusProps: T,
                                children: [
                                    C(),
                                    (0, r.jsx)("div", {
                                        className: c.submenuIconWrapper,
                                        children: (0, r.jsx)(a.Fbu, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    }),
                                ],
                            }),
                        )
                      : (0, r.jsx)(o.P3F, {
                            className: c.menuItemContent,
                            onClick: E,
                            focusProps: T,
                            children: C(),
                        })),
                (0, r.jsx)("div", {
                    ref: O,
                    className: c.menuItemInner,
                    children: t,
                })
            );
        };
    return v
        ? (0, r.jsx)("li", {
              className: c.menuItem,
              onMouseEnter: S,
              onMouseLeave: A,
              children: (0, r.jsx)(o.yRy, {
                  targetElementRef: O,
                  spacing: 0,
                  renderPopout: m,
                  shouldShow: b,
                  onRequestClose: A,
                  children: N,
              }),
          })
        : (0, r.jsx)("li", {
              className: c.menuItem,
              children: N(),
          });
}
function m(e) {
    let { children: t, "aria-label": n } = e;
    return (0, r.jsx)("ul", {
        "aria-label": n,
        children: t,
    });
}
