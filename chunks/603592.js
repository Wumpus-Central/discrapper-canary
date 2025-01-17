n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(481060),
    c = n(540059),
    u = n(276952),
    d = n(682662),
    h = n(662146),
    p = n(187643);
let m = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: m, icon: f, selected: g, tooltip: v, upperBadge: C, lowerBadge: x, lowerBadgeSize: I, showPill: _ = !0, className: Z, 'aria-label': b, children: S, onMouseEnter: N, onMouseLeave: E, onMouseDown: y } = e,
        j = (0, c.Q3)('ButtonListItem'),
        T = (0, o.Ie)(n),
        [A, P] = l.useState(!1),
        w = 'string' == typeof v && null == b ? v : b;
    return (0, i.jsxs)(d.H, {
        children: [
            _
                ? (0, i.jsx)('div', {
                      className: p.pill,
                      children: (0, i.jsx)(u.Z, {
                          hovered: A,
                          selected: g
                      })
                  })
                : null,
            (0, i.jsx)(h.Z, {
                text: v,
                selected: g,
                children: (0, i.jsx)(s.BlobMask, {
                    selected: !!j || g || A,
                    upperBadge: C,
                    lowerBadge: x,
                    lowerBadgeSize: I,
                    children: (0, i.jsx)(s.Clickable, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == N || N(), P(!0);
                        },
                        onMouseLeave: () => {
                            null == E || E(), P(!1);
                        },
                        onMouseDown: y,
                        className: a()(p.circleIconButton, Z, { [p.selected]: g || A }),
                        onClick: r,
                        'aria-label': w,
                        onContextMenu: m,
                        focusProps: { enabled: !1 },
                        ...T,
                        children:
                            null != f &&
                            (0, i.jsx)(f, {
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
t.Z = m;
