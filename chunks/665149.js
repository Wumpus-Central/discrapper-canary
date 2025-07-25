n.d(t, {
    JO: () => v,
    ZP: () => N,
    iz: () => T
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
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
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let y = 24,
    O = (e) => {
        let { className: t, wrapperClassName: n, children: i, onContextMenu: a, onClick: s, onKeyDown: l, id: u, muted: d = !1, level: f = 1, ref: p } = e,
            h = (0, r.jsx)(c.y5t, {
                forceLevel: f,
                children: (0, r.jsx)(c.X6q, {
                    variant: 'text-md/medium',
                    color: d ? 'header-secondary' : void 0,
                    className: o()(t, _.title, { [_.titleClickable]: null != s }),
                    id: u,
                    children: i
                })
            });
        return null != s
            ? (0, r.jsx)(c.P3F, {
                  innerRef: p,
                  onClick: s,
                  onContextMenu: a,
                  onKeyDown: l,
                  className: o()(n, _.titleWrapper),
                  children: h
              })
            : (0, r.jsx)('div', {
                  ref: p,
                  className: o()(n, _.titleWrapper),
                  onContextMenu: a,
                  onKeyDown: l,
                  children: h
              });
    },
    v = i.forwardRef(function (e, t) {
        let { className: n, iconClassName: i, children: a, selected: s = !1, disabled: l = !1, showBadge: u = !1, badgePosition: f = 'bottom', color: p, foreground: m, background: g, icon: E, iconSize: b = y, onClick: O, onContextMenu: v, tooltip: I = null, tooltipColor: T, tooltipPosition: S = 'bottom', tooltipAlign: A, tooltipDisabled: N, tooltipSpacing: C, hideOnClick: R = !0, role: P, 'aria-label': w, 'aria-hidden': D, 'aria-checked': L, 'aria-expanded': x, 'aria-haspopup': M, 'data-jump-section': k } = e,
            j = null != g ? { secondaryColorClass: g } : {},
            U = (0, r.jsx)(
                E,
                h(
                    {
                        x: 0,
                        y: 0,
                        width: b,
                        height: b,
                        size: 'custom',
                        className: o()(i, _.icon),
                        colorClass: null != m ? m : void 0,
                        color: null != p ? p : 'currentColor'
                    },
                    j
                )
            ),
            G = w;
        return (
            null == G && 'string' == typeof I && (G = I),
            (0, r.jsx)(c.ua7, {
                text: I,
                color: T,
                position: S,
                align: A,
                hideOnClick: R,
                shouldShow: !N,
                spacing: C,
                children: (e) => {
                    let { onMouseEnter: g, onMouseLeave: y, onFocus: I, onBlur: T } = e;
                    return null == O
                        ? (0, r.jsx)('div', {
                              ref: t,
                              className: o()(n, _.iconWrapper, { [_.iconDisabled]: l }),
                              children: (0, r.jsx)(
                                  E,
                                  h(
                                      {
                                          x: 0,
                                          y: 0,
                                          width: b,
                                          height: b,
                                          size: 'custom',
                                          className: o()(i, _.icon),
                                          colorClass: null != m ? m : void 0,
                                          color: null != p ? p : 'currentColor',
                                          'aria-hidden': D,
                                          onMouseEnter: g,
                                          onMouseLeave: y,
                                          onFocus: I,
                                          onBlur: T
                                      },
                                      j
                                  )
                              )
                          })
                        : (0, r.jsxs)(c.P3F, {
                              innerRef: t,
                              tag: 'div',
                              onClick: l ? void 0 : O,
                              onContextMenu: l ? void 0 : v,
                              onMouseEnter: g,
                              onMouseLeave: y,
                              onFocus: I,
                              onBlur: T,
                              className: o()(n, {
                                  [_.iconWrapper]: !0,
                                  [_.clickable]: !l && null != O,
                                  [_.selected]: s,
                                  [_.iconDisabled]: l
                              }),
                              role: P,
                              'aria-label': G,
                              'aria-hidden': D,
                              'aria-checked': L,
                              'aria-haspopup': M,
                              'aria-expanded': x,
                              tabIndex: l || null == O ? -1 : 0,
                              'data-jump-section': k,
                              children: [
                                  u
                                      ? (0, r.jsx)(d.ZP, {
                                            mask: 'top' === f ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: b,
                                            width: b,
                                            children: U
                                        })
                                      : U,
                                  u ? (0, r.jsx)('span', { className: o()(_.iconBadge, 'top' === f ? _.iconBadgeTop : _.iconBadgeBottom) }) : null,
                                  a
                              ]
                          });
                }
            })
        );
    }),
    I = i.forwardRef(function (e, t) {
        var { className: n } = e,
            i = E(e, ['className']);
        return (0, r.jsx)(
            v,
            g(h({}, i), {
                className: o()(_.channelIcon, n),
                ref: t
            })
        );
    }),
    T = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(f.Z, { className: o()(_.dot, t) });
    };
function S(e) {
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
let A = (e) => {
    let { className: t, innerClassName: n, children: a, childrenBottom: d, toolbar: f, onDoubleClick: p, 'aria-label': h, 'aria-labelledby': m, role: g, scrollable: E, transparent: b = !1, showToolbar: y = !0 } = e,
        O = i.useRef(null),
        v = i.useContext(u.Z);
    return (0, r.jsx)('section', {
        className: o()(t, _.container, {
            [_.themed]: !b,
            [_.transparent]: b,
            [_.themedMobile]: l.tq,
            [_.showToolbar]: y
        }),
        'aria-label': h,
        'aria-labelledby': m,
        role: g,
        ref: O,
        children: (0, r.jsxs)(c.JcV, {
            containerRef: O,
            children: [
                (0, r.jsxs)('div', {
                    className: o()(_.upperContainer, { [_.showToolbar]: y }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(_.children, n, {
                                [_.scrollable]: E,
                                [_.showToolbar]: y
                            }),
                            onDoubleClick: p,
                            children: [
                                l.tq && null != v
                                    ? (0, r.jsx)(s.r, {
                                          onClick: v,
                                          className: _.hamburger
                                      })
                                    : null,
                                a
                            ]
                        }),
                        null != f
                            ? (0, r.jsx)('div', {
                                  className: o()(_.toolbar, { [_.showToolbar]: y }),
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
((A.Icon = v), (A.ChannelIcon = I), (A.Title = O), (A.Divider = T), (A.Caret = S));
let N = A;
