n.d(t, {
    JO: () => b,
    ZP: () => I,
    iz: () => y
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(608863),
    l = n(873546),
    c = n(481060),
    u = n(290297),
    d = n(686546),
    f = n(540059),
    _ = n(79712),
    p = n(658672);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = 24,
    E = (e) => {
        let { className: t, wrapperClassName: n, children: i, onContextMenu: o, onClick: s, id: l, muted: u = !1, level: d = 1 } = e,
            _ = (0, f.Q3)('BaseHeaderBar'),
            h = (0, r.jsx)(c.y5t, {
                forceLevel: d,
                children: (0, r.jsx)(c.X6q, {
                    variant: _ ? 'text-md/medium' : 'heading-md/semibold',
                    color: u ? 'header-secondary' : void 0,
                    className: a()(t, p.title),
                    id: l,
                    children: i
                })
            });
        return null != s
            ? (0, r.jsx)(c.P3F, {
                  onClick: s,
                  onContextMenu: o,
                  className: a()(n, p.titleWrapper),
                  children: h
              })
            : (0, r.jsx)('div', {
                  className: a()(n, p.titleWrapper),
                  onContextMenu: o,
                  children: h
              });
    },
    b = i.forwardRef(function (e, t) {
        let { className: n, iconClassName: i, children: o, selected: s = !1, disabled: l = !1, showBadge: u = !1, badgePosition: _ = 'bottom', color: h, foreground: E, background: b, icon: y, iconSize: v = g, onClick: O, onContextMenu: I, tooltip: S = null, tooltipColor: T, tooltipPosition: N = 'bottom', tooltipDisabled: A, tooltipSpacing: C, hideOnClick: P = !0, role: R, 'aria-label': w, 'aria-hidden': D, 'aria-checked': L, 'aria-expanded': x, 'aria-haspopup': M, 'data-jump-section': k } = e,
            j = (0, f.Q3)('BaseHeaderBar'),
            U = null != b ? { secondaryColorClass: b } : {},
            G = (0, r.jsx)(
                y,
                m(
                    {
                        x: 0,
                        y: 0,
                        width: v,
                        height: v,
                        size: 'custom',
                        className: a()(i, p.icon),
                        colorClass: null != E ? E : void 0,
                        color: null != h ? h : 'currentColor'
                    },
                    U
                )
            ),
            B = w;
        return (
            null == B && 'string' == typeof S && (B = S),
            (0, r.jsx)(c.ua7, {
                text: S,
                color: T,
                position: N,
                hideOnClick: P,
                shouldShow: !A,
                spacing: C,
                children: (e) => {
                    let { onMouseEnter: f, onMouseLeave: g, onFocus: b, onBlur: S } = e;
                    return null == O
                        ? (0, r.jsx)('div', {
                              ref: t,
                              className: a()(n, p.iconWrapper, { [p.iconDisabled]: l }),
                              children: (0, r.jsx)(
                                  y,
                                  m(
                                      {
                                          x: 0,
                                          y: 0,
                                          width: v,
                                          height: v,
                                          size: 'custom',
                                          className: a()(i, p.icon),
                                          colorClass: null != E ? E : void 0,
                                          color: null != h ? h : 'currentColor',
                                          'aria-hidden': D,
                                          onMouseEnter: f,
                                          onMouseLeave: g,
                                          onFocus: b,
                                          onBlur: S
                                      },
                                      U
                                  )
                              )
                          })
                        : (0, r.jsxs)(c.P3F, {
                              innerRef: t,
                              tag: 'div',
                              onClick: l ? void 0 : O,
                              onContextMenu: l ? void 0 : I,
                              onMouseEnter: f,
                              onMouseLeave: g,
                              onFocus: b,
                              onBlur: S,
                              className: a()(n, {
                                  [p.iconWrapper]: !0,
                                  [p.clickable]: !l && null != O,
                                  [p.selected]: s,
                                  [p.iconDisabled]: l
                              }),
                              role: R,
                              'aria-label': B,
                              'aria-hidden': D,
                              'aria-checked': L,
                              'aria-haspopup': M,
                              'aria-expanded': x,
                              tabIndex: l || null == O ? -1 : 0,
                              'data-jump-section': k,
                              children: [
                                  u
                                      ? (0, r.jsx)(d.ZP, {
                                            mask: 'top' === _ ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: j ? v : void 0,
                                            width: j ? v : void 0,
                                            children: G
                                        })
                                      : G,
                                  u ? (0, r.jsx)('span', { className: a()(p.iconBadge, 'top' === _ ? p.iconBadgeTop : p.iconBadgeBottom) }) : null,
                                  o
                              ]
                          });
                }
            })
        );
    }),
    y = (e) => {
        let { className: t } = e;
        return (0, f.Q3)('BaseHeaderBar.Divider') ? (0, r.jsx)(_.Z, { className: a()(p.dot, t) }) : (0, r.jsx)('div', { className: a()(p.divider, t) });
    };
function v(e) {
    let { direction: t = 'right' } = e;
    return 'right' === t
        ? (0, r.jsx)(c.Fbu, {
              size: 'md',
              color: 'currentColor',
              className: p.caret
          })
        : (0, r.jsx)(c.V7D, {
              size: 'md',
              color: 'currentColor',
              className: p.caret
          });
}
let O = (e) => {
    let { className: t, innerClassName: n, children: o, childrenBottom: d, toolbar: f, onDoubleClick: _, 'aria-label': h, 'aria-labelledby': m, role: g, scrollable: E, transparent: b = !1 } = e,
        y = i.useRef(null),
        v = i.useContext(u.Z);
    return (0, r.jsx)('section', {
        className: a()(t, p.container, {
            [p.themed]: !b,
            [p.transparent]: b,
            [p.themedMobile]: l.tq
        }),
        'aria-label': h,
        'aria-labelledby': m,
        role: g,
        ref: y,
        children: (0, r.jsxs)(c.JcV, {
            containerRef: y,
            children: [
                (0, r.jsxs)('div', {
                    className: p.upperContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(p.children, n, { [p.scrollable]: E }),
                            onDoubleClick: _,
                            children: [
                                l.tq && null != v
                                    ? (0, r.jsx)(s.r, {
                                          onClick: v,
                                          className: p.hamburger
                                      })
                                    : null,
                                o
                            ]
                        }),
                        null != f
                            ? (0, r.jsx)('div', {
                                  className: p.toolbar,
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
(O.Icon = b), (O.Title = E), (O.Divider = y), (O.Caret = v);
let I = O;
