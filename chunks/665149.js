n.d(t, {
    JO: () => g,
    ZP: () => v,
    iz: () => E
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
let h = 24,
    m = (e) => {
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
    g = i.forwardRef(function (e, t) {
        let { className: n, iconClassName: i, children: o, selected: s = !1, disabled: l = !1, showBadge: u = !1, badgePosition: _ = 'bottom', color: m, foreground: g, background: E, icon: b, iconSize: y = h, onClick: v, onContextMenu: O, tooltip: I = null, tooltipColor: S, tooltipPosition: T = 'bottom', tooltipDisabled: N, tooltipSpacing: A, hideOnClick: C = !0, role: R, 'aria-label': P, 'aria-hidden': w, 'aria-checked': D, 'aria-expanded': L, 'aria-haspopup': x, 'data-jump-section': M } = e,
            k = (0, f.Q3)('BaseHeaderBar'),
            j = (0, r.jsx)(b, {
                x: 0,
                y: 0,
                width: y,
                height: y,
                size: 'custom',
                className: a()(i, p.icon),
                colorClass: null != g ? g : void 0,
                secondaryColorClass: null != E ? E : void 0,
                color: null != m ? m : 'currentColor'
            }),
            U = P;
        return (
            null == U && 'string' == typeof I && (U = I),
            (0, r.jsx)(c.ua7, {
                text: I,
                color: S,
                position: T,
                hideOnClick: C,
                shouldShow: !N,
                spacing: A,
                children: (e) => {
                    let { onMouseEnter: f, onMouseLeave: h, onFocus: I, onBlur: S } = e;
                    return null == v
                        ? (0, r.jsx)('div', {
                              ref: t,
                              className: a()(n, p.iconWrapper, { [p.iconDisabled]: l }),
                              children: (0, r.jsx)(b, {
                                  x: 0,
                                  y: 0,
                                  width: y,
                                  height: y,
                                  size: 'custom',
                                  className: a()(i, p.icon),
                                  colorClass: null != g ? g : void 0,
                                  secondaryColorClass: null != E ? E : void 0,
                                  color: null != m ? m : 'currentColor',
                                  'aria-hidden': w,
                                  onMouseEnter: f,
                                  onMouseLeave: h,
                                  onFocus: I,
                                  onBlur: S
                              })
                          })
                        : (0, r.jsxs)(c.P3F, {
                              innerRef: t,
                              tag: 'div',
                              onClick: l ? void 0 : v,
                              onContextMenu: l ? void 0 : O,
                              onMouseEnter: f,
                              onMouseLeave: h,
                              onFocus: I,
                              onBlur: S,
                              className: a()(n, {
                                  [p.iconWrapper]: !0,
                                  [p.clickable]: !l && null != v,
                                  [p.selected]: s,
                                  [p.iconDisabled]: l
                              }),
                              role: R,
                              'aria-label': U,
                              'aria-hidden': w,
                              'aria-checked': D,
                              'aria-haspopup': x,
                              'aria-expanded': L,
                              tabIndex: l || null == v ? -1 : 0,
                              'data-jump-section': M,
                              children: [
                                  u
                                      ? (0, r.jsx)(d.ZP, {
                                            mask: 'top' === _ ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: k ? y : void 0,
                                            width: k ? y : void 0,
                                            children: j
                                        })
                                      : j,
                                  u ? (0, r.jsx)('span', { className: a()(p.iconBadge, 'top' === _ ? p.iconBadgeTop : p.iconBadgeBottom) }) : null,
                                  o
                              ]
                          });
                }
            })
        );
    }),
    E = (e) => {
        let { className: t } = e;
        return (0, f.Q3)('BaseHeaderBar.Divider') ? (0, r.jsx)(_.Z, { className: a()(p.dot, t) }) : (0, r.jsx)('div', { className: a()(p.divider, t) });
    };
function b(e) {
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
let y = (e) => {
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
(y.Icon = g), (y.Title = m), (y.Divider = E), (y.Caret = b);
let v = y;
