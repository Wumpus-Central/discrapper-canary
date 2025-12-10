n.d(t, {
    JO: () => v,
    ZP: () => A,
    iz: () => I,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(608863),
    l = n(873546),
    c = n(481060),
    u = n(290297),
    d = n(686546),
    f = n(79712),
    p = n(191984);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = 24,
    O = (e) => {
        let {
                className: t,
                wrapperClassName: n,
                children: i,
                onContextMenu: a,
                onClick: s,
                onKeyDown: l,
                id: u,
                muted: d = !1,
                level: f = 1,
                ref: _,
            } = e,
            m = (0, r.jsx)(c.y5t, {
                forceLevel: f,
                children: (0, r.jsx)(c.Heading, {
                    variant: "text-md/medium",
                    color: d ? "text-default" : void 0,
                    className: o()(t, p.title, { [p.titleClickable]: null != s }),
                    id: u,
                    children: i,
                }),
            });
        return null != s
            ? (0, r.jsx)(c.P3F, {
                  innerRef: _,
                  onClick: s,
                  onContextMenu: a,
                  onKeyDown: l,
                  className: o()(n, p.titleWrapper),
                  children: m,
              })
            : (0, r.jsx)("div", {
                  ref: _,
                  className: o()(n, p.titleWrapper),
                  onContextMenu: a,
                  onKeyDown: l,
                  children: m,
              });
    },
    v = i.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: i,
                children: a,
                selected: s = !1,
                disabled: l = !1,
                showBadge: u = !1,
                badgePosition: f = "bottom",
                color: _,
                foreground: h,
                background: g,
                icon: E,
                iconSize: b = y,
                onClick: O,
                onContextMenu: v,
                tooltip: S = null,
                tooltipColor: I,
                tooltipPosition: T = "bottom",
                tooltipAlign: C,
                tooltipDisabled: A,
                tooltipSpacing: N,
                hideOnClick: P = !0,
                role: R,
                "aria-label": D,
                "aria-hidden": w,
                "aria-checked": x,
                "aria-expanded": L,
                "aria-haspopup": j,
                "data-jump-section": M,
            } = e,
            k = null != g ? { secondaryColorClass: g } : {},
            U = (0, r.jsx)(
                E,
                m(
                    {
                        x: 0,
                        y: 0,
                        width: b,
                        height: b,
                        size: "custom",
                        className: o()(i, p.icon),
                        colorClass: null != h ? h : void 0,
                        color: null != _ ? _ : "currentColor",
                    },
                    k,
                ),
            ),
            G = D;
        return (
            null == G && "string" == typeof S && (G = S),
            (0, r.jsx)(c.aML, {
                "data-migration-pending": !0,
                text: S,
                color: I,
                position: T,
                align: C,
                hideOnClick: P,
                shouldShow: !A,
                spacing: N,
                children: (e) => {
                    let { onMouseEnter: g, onMouseLeave: y, onFocus: S, onBlur: I } = e;
                    return null == O
                        ? (0, r.jsx)("div", {
                              ref: t,
                              className: o()(n, p.iconWrapper, { [p.iconDisabled]: l }),
                              children: (0, r.jsx)(
                                  E,
                                  m(
                                      {
                                          x: 0,
                                          y: 0,
                                          width: b,
                                          height: b,
                                          size: "custom",
                                          className: o()(i, p.icon),
                                          colorClass: null != h ? h : void 0,
                                          color: null != _ ? _ : "currentColor",
                                          "aria-hidden": w,
                                          onMouseEnter: g,
                                          onMouseLeave: y,
                                          onFocus: S,
                                          onBlur: I,
                                      },
                                      k,
                                  ),
                              ),
                          })
                        : (0, r.jsxs)(c.P3F, {
                              innerRef: t,
                              tag: "div",
                              onClick: l ? void 0 : O,
                              onContextMenu: l ? void 0 : v,
                              onMouseEnter: g,
                              onMouseLeave: y,
                              onFocus: S,
                              onBlur: I,
                              className: o()(n, {
                                  [p.iconWrapper]: !0,
                                  [p.clickable]: !l && null != O,
                                  [p.selected]: s,
                                  [p.iconDisabled]: l,
                              }),
                              role: R,
                              "aria-label": G,
                              "aria-hidden": w,
                              "aria-checked": x,
                              "aria-haspopup": j,
                              "aria-expanded": L,
                              tabIndex: l || null == O ? -1 : 0,
                              "data-jump-section": M,
                              children: [
                                  u
                                      ? (0, r.jsx)(d.ZP, {
                                            mask:
                                                "top" === f
                                                    ? d.ZP.Masks.HEADER_BAR_BADGE_TOP
                                                    : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: b,
                                            width: b,
                                            children: U,
                                        })
                                      : U,
                                  u
                                      ? (0, r.jsx)("span", {
                                            className: o()(
                                                p.iconBadge,
                                                "top" === f ? p.iconBadgeTop : p.iconBadgeBottom,
                                            ),
                                        })
                                      : null,
                                  a,
                              ],
                          });
                },
            })
        );
    }),
    S = i.forwardRef(function (e, t) {
        var { className: n } = e,
            i = E(e, ["className"]);
        return (0, r.jsx)(
            v,
            g(m({}, i), {
                className: o()(p.channelIcon, n),
                ref: t,
            }),
        );
    }),
    I = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(f.Z, { className: o()(p.dot, t) });
    };
function T(e) {
    let { direction: t = "right", className: n } = e;
    return "right" === t
        ? (0, r.jsx)(c.Fbu, {
              size: "md",
              color: "currentColor",
              className: o()(p.caret, n),
          })
        : (0, r.jsx)(c.V7D, {
              size: "md",
              color: "currentColor",
              className: o()(p.caret, n),
          });
}
let C = (e) => {
    let {
            className: t,
            innerClassName: n,
            toolbarClassName: a,
            children: d,
            childrenBottom: f,
            toolbar: _,
            onDoubleClick: m,
            "aria-label": h,
            "aria-labelledby": g,
            role: E,
            scrollable: b,
            transparent: y = !1,
            hidden: O = !1,
        } = e,
        v = i.useRef(null),
        S = i.useContext(u.Z);
    return (0, r.jsx)("section", {
        className: o()(t, p.container, {
            [p.themed]: !y,
            [p.transparent]: y,
            [p.themedMobile]: l.tq,
            [p.hidden]: O,
        }),
        "aria-label": h,
        "aria-labelledby": g,
        role: E,
        ref: v,
        children: (0, r.jsxs)(c.JcV, {
            containerRef: v,
            children: [
                (0, r.jsxs)("div", {
                    className: p.upperContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: o()(p.children, n, { [p.scrollable]: b }),
                            onDoubleClick: m,
                            children: [
                                l.tq && null != S
                                    ? (0, r.jsx)(s.r, {
                                          onClick: S,
                                          className: p.hamburger,
                                      })
                                    : null,
                                d,
                            ],
                        }),
                        null != _
                            ? (0, r.jsx)("div", {
                                  className: o()(p.toolbar, a),
                                  children: _,
                              })
                            : null,
                    ],
                }),
                f,
            ],
        }),
    });
};
(C.Icon = v), (C.ChannelIcon = S), (C.Title = O), (C.Divider = I), (C.Caret = T);
let A = C;
