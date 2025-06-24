n.d(t, {
    JO: () => E,
    ZP: () => v,
    iz: () => b
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(608863),
    l = n(873546),
    c = n(481060),
    u = n(290297),
    d = n(686546),
    f = n(79712),
    _ = n(658672);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = 24,
    g = (e) => {
        let { className: t, wrapperClassName: n, children: i, onContextMenu: a, onClick: s, id: l, muted: u = !1, level: d = 1, ref: f } = e,
            p = (0, r.jsx)(c.y5t, {
                forceLevel: d,
                children: (0, r.jsx)(c.X6q, {
                    variant: 'text-md/medium',
                    color: u ? 'header-secondary' : void 0,
                    className: o()(t, _.title, { [_.titleClickable]: null != s }),
                    id: l,
                    children: i
                })
            });
        return null != s
            ? (0, r.jsx)(c.P3F, {
                  innerRef: f,
                  onClick: s,
                  onContextMenu: a,
                  className: o()(n, _.titleWrapper),
                  children: p
              })
            : (0, r.jsx)('div', {
                  ref: f,
                  className: o()(n, _.titleWrapper),
                  onContextMenu: a,
                  children: p
              });
    },
    E = i.forwardRef(function (e, t) {
        let { className: n, iconClassName: i, children: a, selected: s = !1, disabled: l = !1, showBadge: u = !1, badgePosition: f = 'bottom', color: p, foreground: g, background: E, icon: b, iconSize: y = m, onClick: O, onContextMenu: v, tooltip: I = null, tooltipColor: T, tooltipPosition: S = 'bottom', tooltipDisabled: A, tooltipSpacing: N, hideOnClick: C = !0, role: R, 'aria-label': P, 'aria-hidden': w, 'aria-checked': D, 'aria-expanded': L, 'aria-haspopup': x, 'data-jump-section': k } = e,
            M = null != E ? { secondaryColorClass: E } : {},
            j = (0, r.jsx)(
                b,
                h(
                    {
                        x: 0,
                        y: 0,
                        width: y,
                        height: y,
                        size: 'custom',
                        className: o()(i, _.icon),
                        colorClass: null != g ? g : void 0,
                        color: null != p ? p : 'currentColor'
                    },
                    M
                )
            ),
            U = P;
        return (
            null == U && 'string' == typeof I && (U = I),
            (0, r.jsx)(c.ua7, {
                text: I,
                color: T,
                position: S,
                hideOnClick: C,
                shouldShow: !A,
                spacing: N,
                children: (e) => {
                    let { onMouseEnter: m, onMouseLeave: E, onFocus: I, onBlur: T } = e;
                    return null == O
                        ? (0, r.jsx)('div', {
                              ref: t,
                              className: o()(n, _.iconWrapper, { [_.iconDisabled]: l }),
                              children: (0, r.jsx)(
                                  b,
                                  h(
                                      {
                                          x: 0,
                                          y: 0,
                                          width: y,
                                          height: y,
                                          size: 'custom',
                                          className: o()(i, _.icon),
                                          colorClass: null != g ? g : void 0,
                                          color: null != p ? p : 'currentColor',
                                          'aria-hidden': w,
                                          onMouseEnter: m,
                                          onMouseLeave: E,
                                          onFocus: I,
                                          onBlur: T
                                      },
                                      M
                                  )
                              )
                          })
                        : (0, r.jsxs)(c.P3F, {
                              innerRef: t,
                              tag: 'div',
                              onClick: l ? void 0 : O,
                              onContextMenu: l ? void 0 : v,
                              onMouseEnter: m,
                              onMouseLeave: E,
                              onFocus: I,
                              onBlur: T,
                              className: o()(n, {
                                  [_.iconWrapper]: !0,
                                  [_.clickable]: !l && null != O,
                                  [_.selected]: s,
                                  [_.iconDisabled]: l
                              }),
                              role: R,
                              'aria-label': U,
                              'aria-hidden': w,
                              'aria-checked': D,
                              'aria-haspopup': x,
                              'aria-expanded': L,
                              tabIndex: l || null == O ? -1 : 0,
                              'data-jump-section': k,
                              children: [
                                  u
                                      ? (0, r.jsx)(d.ZP, {
                                            mask: 'top' === f ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: y,
                                            width: y,
                                            children: j
                                        })
                                      : j,
                                  u ? (0, r.jsx)('span', { className: o()(_.iconBadge, 'top' === f ? _.iconBadgeTop : _.iconBadgeBottom) }) : null,
                                  a
                              ]
                          });
                }
            })
        );
    }),
    b = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(f.Z, { className: o()(_.dot, t) });
    };
function y(e) {
    let { direction: t = 'right' } = e;
    return 'right' === t
        ? (0, r.jsx)(c.Fbu, {
              size: 'md',
              color: 'currentColor',
              className: _.caret
          })
        : (0, r.jsx)(c.V7D, {
              size: 'md',
              color: 'currentColor',
              className: _.caret
          });
}
let O = (e) => {
    let { className: t, innerClassName: n, children: a, childrenBottom: d, toolbar: f, onDoubleClick: p, 'aria-label': h, 'aria-labelledby': m, role: g, scrollable: E, transparent: b = !1 } = e,
        y = i.useRef(null),
        O = i.useContext(u.Z);
    return (0, r.jsx)('section', {
        className: o()(t, _.container, {
            [_.themed]: !b,
            [_.transparent]: b,
            [_.themedMobile]: l.tq
        }),
        'aria-label': h,
        'aria-labelledby': m,
        role: g,
        ref: y,
        children: (0, r.jsxs)(c.JcV, {
            containerRef: y,
            children: [
                (0, r.jsxs)('div', {
                    className: _.upperContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(_.children, n, { [_.scrollable]: E }),
                            onDoubleClick: p,
                            children: [
                                l.tq && null != O
                                    ? (0, r.jsx)(s.r, {
                                          onClick: O,
                                          className: _.hamburger
                                      })
                                    : null,
                                a
                            ]
                        }),
                        null != f
                            ? (0, r.jsx)('div', {
                                  className: _.toolbar,
                                  children: f
                              })
                            : null
                    ]
                }),
                d
            ]
        })
    });
};
(O.Icon = E), (O.Title = g), (O.Divider = b), (O.Caret = y);
let v = O;
