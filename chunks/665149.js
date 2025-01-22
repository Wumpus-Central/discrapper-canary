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
    o = r(120356),
    s = r.n(o),
    l = r(608863),
    u = r(873546),
    c = r(481060),
    d = r(290297),
    f = r(686546),
    p = r(540059),
    h = r(79712),
    _ = r(815300);
let m = 24,
    g = (e) => {
        let { className: n, wrapperClassName: r, children: a, onContextMenu: o, onClick: l, id: u, muted: d = !1, level: f = 1 } = e,
            h = (0, p.Q3)('BaseHeaderBar'),
            m = (0, i.jsx)(c.HeadingLevel, {
                forceLevel: f,
                children: (0, i.jsx)(c.Heading, {
                    variant: h ? 'text-md/medium' : 'heading-md/semibold',
                    color: d ? 'header-secondary' : void 0,
                    className: s()(n, _.title),
                    id: u,
                    children: a
                })
            });
        return null != l
            ? (0, i.jsx)(c.Clickable, {
                  onClick: l,
                  onContextMenu: o,
                  className: s()(r, _.titleWrapper),
                  children: m
              })
            : (0, i.jsx)('div', {
                  className: s()(r, _.titleWrapper),
                  onContextMenu: o,
                  children: m
              });
    },
    E = (e) => {
        let { className: n, iconClassName: r, children: a, selected: o = !1, disabled: l = !1, showBadge: u = !1, badgePosition: d = 'bottom', color: h, foreground: g, background: E, icon: v, iconSize: y = m, onClick: b, onContextMenu: I, tooltip: T = null, tooltipColor: S, tooltipPosition: A = 'bottom', tooltipDisabled: C, hideOnClick: N = !0, role: R, 'aria-label': O, 'aria-hidden': D, 'aria-checked': L, 'aria-expanded': x, 'aria-haspopup': w } = e,
            P = (0, p.Q3)('BaseHeaderBar'),
            M = (0, i.jsx)(v, {
                x: 0,
                y: 0,
                width: y,
                height: y,
                size: 'custom',
                className: s()(r, _.icon),
                colorClass: null != g ? g : void 0,
                secondaryColorClass: null != E ? E : void 0,
                color: null != h ? h : 'currentColor'
            }),
            k = O;
        return (
            null == k && 'string' == typeof T && (k = T),
            (0, i.jsx)(c.Tooltip, {
                text: T,
                color: S,
                position: A,
                hideOnClick: N,
                shouldShow: !C,
                children: (e) => {
                    let { onMouseEnter: p, onMouseLeave: m, onFocus: T, onBlur: S } = e;
                    return null == b
                        ? (0, i.jsx)('div', {
                              className: s()(n, [_.iconWrapper]),
                              children: (0, i.jsx)(v, {
                                  x: 0,
                                  y: 0,
                                  width: y,
                                  height: y,
                                  size: 'custom',
                                  className: s()(r, _.icon),
                                  colorClass: null != g ? g : void 0,
                                  secondaryColorClass: null != E ? E : void 0,
                                  color: null != h ? h : 'currentColor',
                                  'aria-hidden': D,
                                  onMouseEnter: p,
                                  onMouseLeave: m,
                                  onFocus: T,
                                  onBlur: S
                              })
                          })
                        : (0, i.jsxs)(c.Clickable, {
                              tag: 'div',
                              onClick: l ? void 0 : b,
                              onContextMenu: l ? void 0 : I,
                              onMouseEnter: p,
                              onMouseLeave: m,
                              onFocus: T,
                              onBlur: S,
                              className: s()(n, {
                                  [_.iconWrapper]: !0,
                                  [_.clickable]: !l && null != b,
                                  [_.selected]: o
                              }),
                              role: R,
                              'aria-label': k,
                              'aria-hidden': D,
                              'aria-checked': L,
                              'aria-haspopup': w,
                              'aria-expanded': x,
                              tabIndex: l || null == b ? -1 : 0,
                              children: [
                                  u
                                      ? (0, i.jsx)(f.ZP, {
                                            mask: 'top' === d ? f.ZP.Masks.HEADER_BAR_BADGE_TOP : f.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: P ? y : void 0,
                                            width: P ? y : void 0,
                                            children: M
                                        })
                                      : M,
                                  u ? (0, i.jsx)('span', { className: s()(_.iconBadge, 'top' === d ? _.iconBadgeTop : _.iconBadgeBottom) }) : null,
                                  a
                              ]
                          });
                }
            })
        );
    },
    v = (e) => {
        let { className: n } = e;
        return (0, p.Q3)('BaseHeaderBar.Divider') ? (0, i.jsx)(h.Z, { className: s()(_.dot, n) }) : (0, i.jsx)('div', { className: s()(_.divider, n) });
    };
function y(e) {
    let { direction: n = 'right' } = e;
    return 'right' === n
        ? (0, i.jsx)(c.ChevronSmallRightIcon, {
              size: 'md',
              color: 'currentColor',
              className: _.caret
          })
        : (0, i.jsx)(c.ChevronSmallLeftIcon, {
              size: 'md',
              color: 'currentColor',
              className: _.caret
          });
}
let b = (e) => {
    let { className: n, innerClassName: r, children: o, childrenBottom: f, toolbar: p, onDoubleClick: h, 'aria-label': m, 'aria-labelledby': g, role: E, scrollable: v, transparent: y = !1 } = e,
        b = a.useRef(null),
        I = a.useContext(d.Z);
    return (0, i.jsx)('section', {
        className: s()(n, _.container, {
            [_.themed]: !y,
            [_.transparent]: y,
            [_.themedMobile]: u.tq
        }),
        'aria-label': m,
        'aria-labelledby': g,
        role: E,
        ref: b,
        children: (0, i.jsxs)(c.FocusRingScope, {
            containerRef: b,
            children: [
                (0, i.jsxs)('div', {
                    className: _.upperContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(_.children, r, { [_.scrollable]: v }),
                            onDoubleClick: h,
                            children: [
                                u.tq && null != I
                                    ? (0, i.jsx)(l.r, {
                                          onClick: I,
                                          className: _.hamburger
                                      })
                                    : null,
                                o
                            ]
                        }),
                        null != p
                            ? (0, i.jsx)('div', {
                                  className: _.toolbar,
                                  children: p
                              })
                            : null
                    ]
                }),
                f
            ]
        })
    });
};
(b.Icon = E), (b.Title = g), (b.Divider = v), (b.Caret = y), (n.ZP = b);
