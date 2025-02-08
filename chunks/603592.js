n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(481060),
    c = n(540059),
    d = n(276952),
    u = n(682662),
    h = n(662146),
    p = n(187643);
let g = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: g, icon: m, selected: f, tooltip: _, upperBadge: v, lowerBadge: C, lowerBadgeSize: x, showPill: Z = !0, className: I, 'aria-label': b, children: S, onMouseEnter: N, onMouseLeave: E, onMouseDown: j } = e,
        y = (0, c.Q3)('ButtonListItem'),
        P = (0, o.Ie)(n),
        [T, A] = l.useState(!1),
        w = 'string' == typeof _ && null == b ? _ : b;
    return (0, i.jsxs)(u.H, {
        children: [
            Z
                ? (0, i.jsx)('div', {
                      className: p.pill,
                      children: (0, i.jsx)(d.Z, {
                          hovered: T,
                          selected: f
                      })
                  })
                : null,
            (0, i.jsx)(h.Z, {
                text: _,
                selected: f,
                children: (0, i.jsx)(s.aRk, {
                    selected: !!y || f || T,
                    upperBadge: v,
                    lowerBadge: C,
                    lowerBadgeSize: x,
                    children: (0, i.jsx)(s.P3F, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == N || N(), A(!0);
                        },
                        onMouseLeave: () => {
                            null == E || E(), A(!1);
                        },
                        onMouseDown: j,
                        className: a()(p.circleIconButton, I, { [p.selected]: f || T }),
                        onClick: r,
                        'aria-label': w,
                        onContextMenu: g,
                        focusProps: { enabled: !1 },
                        ...P,
                        children:
                            null != m &&
                            (0, i.jsx)(m, {
                                className: p.circleIcon,
                                color: 'currentColor'
                            })
                    })
                })
            }),
            S
        ]
    });
});
