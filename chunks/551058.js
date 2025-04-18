n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(52565);
let c = 16,
    u = i.memo(function (e) {
        let { children: t, trailing: n, className: i, icon: a, isCollapsed: u, onClick: d, 'aria-label': f } = e;
        return (0, r.jsxs)('div', {
            className: o()(l.wrapper, i),
            children: [
                (0, r.jsxs)(s.P3F, {
                    onClick: d,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: o()(l.header, { [l.interactive]: null != u }),
                    'aria-expanded': null != u ? !u : void 0,
                    'aria-label': f,
                    children: [
                        null != a &&
                            (0, r.jsx)('div', {
                                'aria-hidden': !0,
                                className: l.headerIcon,
                                children: a
                            }),
                        (0, r.jsx)('span', {
                            className: l.headerLabel,
                            children: t
                        }),
                        null != u
                            ? (0, r.jsx)(s.CJ0, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: o()(l.headerCollapseIcon, { [l.headerCollapseIconCollapsed]: u }),
                                  height: c,
                                  width: c
                              })
                            : null
                    ]
                }),
                n
            ]
        });
    });
