n.d(t, {
    JO: () => g,
    ZP: () => I,
    iz: () => E
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(608863),
    l = n(873546),
    u = n(481060),
    c = n(290297),
    d = n(686546),
    f = n(540059),
    _ = n(79712),
    p = n(815300);
let h = 24,
    m = (e) => {
        let { className: t, wrapperClassName: n, children: r, onContextMenu: a, onClick: o, id: l, muted: c = !1, level: d = 1 } = e,
            _ = (0, f.Q3)('BaseHeaderBar'),
            h = (0, i.jsx)(u.y5t, {
                forceLevel: d,
                children: (0, i.jsx)(u.X6q, {
                    variant: _ ? 'text-md/medium' : 'heading-md/semibold',
                    color: c ? 'header-secondary' : void 0,
                    className: s()(t, p.title),
                    id: l,
                    children: r
                })
            });
        return null != o
            ? (0, i.jsx)(u.P3F, {
                  onClick: o,
                  onContextMenu: a,
                  className: s()(n, p.titleWrapper),
                  children: h
              })
            : (0, i.jsx)('div', {
                  className: s()(n, p.titleWrapper),
                  onContextMenu: a,
                  children: h
              });
    },
    g = (e) => {
        let { className: t, iconClassName: n, children: r, selected: a = !1, disabled: o = !1, showBadge: l = !1, badgePosition: c = 'bottom', color: _, foreground: m, background: g, icon: E, iconSize: v = h, onClick: y, onContextMenu: I, tooltip: b = null, tooltipColor: T, tooltipPosition: S = 'bottom', tooltipDisabled: A, hideOnClick: N = !0, role: C, 'aria-label': R, 'aria-hidden': O, 'aria-checked': D, 'aria-expanded': x, 'aria-haspopup': L } = e,
            P = (0, f.Q3)('BaseHeaderBar'),
            w = (0, i.jsx)(E, {
                x: 0,
                y: 0,
                width: v,
                height: v,
                size: 'custom',
                className: s()(n, p.icon),
                colorClass: null != m ? m : void 0,
                secondaryColorClass: null != g ? g : void 0,
                color: null != _ ? _ : 'currentColor'
            }),
            M = R;
        return (
            null == M && 'string' == typeof b && (M = b),
            (0, i.jsx)(u.ua7, {
                text: b,
                color: T,
                position: S,
                hideOnClick: N,
                shouldShow: !A,
                children: (e) => {
                    let { onMouseEnter: f, onMouseLeave: h, onFocus: b, onBlur: T } = e;
                    return null == y
                        ? (0, i.jsx)('div', {
                              className: s()(t, p.iconWrapper, { [p.iconDisabled]: o }),
                              children: (0, i.jsx)(E, {
                                  x: 0,
                                  y: 0,
                                  width: v,
                                  height: v,
                                  size: 'custom',
                                  className: s()(n, p.icon),
                                  colorClass: null != m ? m : void 0,
                                  secondaryColorClass: null != g ? g : void 0,
                                  color: null != _ ? _ : 'currentColor',
                                  'aria-hidden': O,
                                  onMouseEnter: f,
                                  onMouseLeave: h,
                                  onFocus: b,
                                  onBlur: T
                              })
                          })
                        : (0, i.jsxs)(u.P3F, {
                              tag: 'div',
                              onClick: o ? void 0 : y,
                              onContextMenu: o ? void 0 : I,
                              onMouseEnter: f,
                              onMouseLeave: h,
                              onFocus: b,
                              onBlur: T,
                              className: s()(t, {
                                  [p.iconWrapper]: !0,
                                  [p.clickable]: !o && null != y,
                                  [p.selected]: a,
                                  [p.iconDisabled]: o
                              }),
                              role: C,
                              'aria-label': M,
                              'aria-hidden': O,
                              'aria-checked': D,
                              'aria-haspopup': L,
                              'aria-expanded': x,
                              tabIndex: o || null == y ? -1 : 0,
                              children: [
                                  l
                                      ? (0, i.jsx)(d.ZP, {
                                            mask: 'top' === c ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: P ? v : void 0,
                                            width: P ? v : void 0,
                                            children: w
                                        })
                                      : w,
                                  l ? (0, i.jsx)('span', { className: s()(p.iconBadge, 'top' === c ? p.iconBadgeTop : p.iconBadgeBottom) }) : null,
                                  r
                              ]
                          });
                }
            })
        );
    },
    E = (e) => {
        let { className: t } = e;
        return (0, f.Q3)('BaseHeaderBar.Divider') ? (0, i.jsx)(_.Z, { className: s()(p.dot, t) }) : (0, i.jsx)('div', { className: s()(p.divider, t) });
    };
function v(e) {
    let { direction: t = 'right' } = e;
    return 'right' === t
        ? (0, i.jsx)(u.Fbu, {
              size: 'md',
              color: 'currentColor',
              className: p.caret
          })
        : (0, i.jsx)(u.V7D, {
              size: 'md',
              color: 'currentColor',
              className: p.caret
          });
}
let y = (e) => {
    let { className: t, innerClassName: n, children: a, childrenBottom: d, toolbar: f, onDoubleClick: _, 'aria-label': h, 'aria-labelledby': m, role: g, scrollable: E, transparent: v = !1 } = e,
        y = r.useRef(null),
        I = r.useContext(c.Z);
    return (0, i.jsx)('section', {
        className: s()(t, p.container, {
            [p.themed]: !v,
            [p.transparent]: v,
            [p.themedMobile]: l.tq
        }),
        'aria-label': h,
        'aria-labelledby': m,
        role: g,
        ref: y,
        children: (0, i.jsxs)(u.JcV, {
            containerRef: y,
            children: [
                (0, i.jsxs)('div', {
                    className: p.upperContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(p.children, n, { [p.scrollable]: E }),
                            onDoubleClick: _,
                            children: [
                                l.tq && null != I
                                    ? (0, i.jsx)(o.r, {
                                          onClick: I,
                                          className: p.hamburger
                                      })
                                    : null,
                                a
                            ]
                        }),
                        null != f
                            ? (0, i.jsx)('div', {
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
(y.Icon = g), (y.Title = m), (y.Divider = E), (y.Caret = v);
let I = y;
