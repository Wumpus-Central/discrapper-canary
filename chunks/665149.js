r.d(n, {
    JO: function () {
        return E;
    },
    iz: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(608863),
    u = r(873546),
    c = r(481060),
    d = r(290297),
    f = r(686546),
    _ = r(540059),
    h = r(79712),
    p = r(815300);
let m = 24,
    g = (e) => {
        let { className: n, wrapperClassName: r, children: a, onContextMenu: s, onClick: l, id: u, muted: d = !1, level: f = 1 } = e,
            h = (0, _.Q3)('BaseHeaderBar'),
            m = (0, i.jsx)(c.HeadingLevel, {
                forceLevel: f,
                children: (0, i.jsx)(c.Heading, {
                    variant: h ? 'text-md/medium' : 'heading-md/semibold',
                    color: d ? 'header-secondary' : void 0,
                    className: o()(n, p.title),
                    id: u,
                    children: a
                })
            });
        return null != l
            ? (0, i.jsx)(c.Clickable, {
                  onClick: l,
                  onContextMenu: s,
                  className: o()(r, p.titleWrapper),
                  children: m
              })
            : (0, i.jsx)('div', {
                  className: o()(r, p.titleWrapper),
                  onContextMenu: s,
                  children: m
              });
    },
    E = (e) => {
        let { className: n, iconClassName: r, children: a, selected: s = !1, disabled: l = !1, showBadge: u = !1, badgePosition: d = 'bottom', color: h, foreground: g, background: E, icon: v, iconSize: I = m, onClick: T, onContextMenu: b, tooltip: y = null, tooltipColor: S, tooltipPosition: A = 'bottom', tooltipDisabled: N, hideOnClick: C = !0, role: R, 'aria-label': O, 'aria-hidden': D, 'aria-checked': L, 'aria-expanded': x, 'aria-haspopup': w } = e,
            P = (0, _.Q3)('BaseHeaderBar'),
            M = (0, i.jsx)(v, {
                x: 0,
                y: 0,
                width: I,
                height: I,
                size: 'custom',
                className: o()(r, p.icon),
                colorClass: null != g ? g : void 0,
                secondaryColorClass: null != E ? E : void 0,
                color: null != h ? h : 'currentColor'
            }),
            k = O;
        return (
            null == k && 'string' == typeof y && (k = y),
            (0, i.jsx)(c.Tooltip, {
                text: y,
                color: S,
                position: A,
                hideOnClick: C,
                shouldShow: !N,
                children: (e) => {
                    let { onMouseEnter: _, onMouseLeave: m, onFocus: y, onBlur: S } = e;
                    return null == T
                        ? (0, i.jsx)('div', {
                              className: o()(n, [p.iconWrapper]),
                              children: (0, i.jsx)(v, {
                                  x: 0,
                                  y: 0,
                                  width: I,
                                  height: I,
                                  size: 'custom',
                                  className: o()(r, p.icon),
                                  colorClass: null != g ? g : void 0,
                                  secondaryColorClass: null != E ? E : void 0,
                                  color: null != h ? h : 'currentColor',
                                  'aria-hidden': D,
                                  onMouseEnter: _,
                                  onMouseLeave: m,
                                  onFocus: y,
                                  onBlur: S
                              })
                          })
                        : (0, i.jsxs)(c.Clickable, {
                              tag: 'div',
                              onClick: l ? void 0 : T,
                              onContextMenu: l ? void 0 : b,
                              onMouseEnter: _,
                              onMouseLeave: m,
                              onFocus: y,
                              onBlur: S,
                              className: o()(n, {
                                  [p.iconWrapper]: !0,
                                  [p.clickable]: !l && null != T,
                                  [p.selected]: s
                              }),
                              role: R,
                              'aria-label': k,
                              'aria-hidden': D,
                              'aria-checked': L,
                              'aria-haspopup': w,
                              'aria-expanded': x,
                              tabIndex: l || null == T ? -1 : 0,
                              children: [
                                  u
                                      ? (0, i.jsx)(f.ZP, {
                                            mask: 'top' === d ? f.ZP.Masks.HEADER_BAR_BADGE_TOP : f.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: P ? I : void 0,
                                            width: P ? I : void 0,
                                            children: M
                                        })
                                      : M,
                                  u ? (0, i.jsx)('span', { className: o()(p.iconBadge, 'top' === d ? p.iconBadgeTop : p.iconBadgeBottom) }) : null,
                                  a
                              ]
                          });
                }
            })
        );
    },
    v = (e) => {
        let { className: n } = e;
        return (0, _.Q3)('BaseHeaderBar.Divider') ? (0, i.jsx)(h.Z, { className: o()(p.dot, n) }) : (0, i.jsx)('div', { className: o()(p.divider, n) });
    };
function I(e) {
    let { direction: n = 'right' } = e;
    return 'right' === n
        ? (0, i.jsx)(c.ChevronSmallRightIcon, {
              size: 'md',
              color: 'currentColor',
              className: p.caret
          })
        : (0, i.jsx)(c.ChevronSmallLeftIcon, {
              size: 'md',
              color: 'currentColor',
              className: p.caret
          });
}
let T = (e) => {
    let { className: n, innerClassName: r, children: s, childrenBottom: f, toolbar: _, onDoubleClick: h, 'aria-label': m, 'aria-labelledby': g, role: E, scrollable: v, transparent: I = !1 } = e,
        T = a.useRef(null),
        b = a.useContext(d.Z);
    return (0, i.jsx)('section', {
        className: o()(n, p.container, {
            [p.themed]: !I,
            [p.transparent]: I,
            [p.themedMobile]: u.tq
        }),
        'aria-label': m,
        'aria-labelledby': g,
        role: E,
        ref: T,
        children: (0, i.jsxs)(c.FocusRingScope, {
            containerRef: T,
            children: [
                (0, i.jsxs)('div', {
                    className: p.upperContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: o()(p.children, r, { [p.scrollable]: v }),
                            onDoubleClick: h,
                            children: [
                                u.tq && null != b
                                    ? (0, i.jsx)(l.r, {
                                          onClick: b,
                                          className: p.hamburger
                                      })
                                    : null,
                                s
                            ]
                        }),
                        null != _
                            ? (0, i.jsx)('div', {
                                  className: p.toolbar,
                                  children: _
                              })
                            : null
                    ]
                }),
                f
            ]
        })
    });
};
(T.Icon = E), (T.Title = g), (T.Divider = v), (T.Caret = I), (n.ZP = T);
