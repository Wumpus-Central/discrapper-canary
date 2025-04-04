n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(52565);
let c = 16,
    u = i.memo(function (e) {
        let { children: t, trailing: n, className: i, icon: o, isCollapsed: u, onClick: d, 'aria-label': f } = e;
        return (0, r.jsxs)('div', {
            className: a()(l.wrapper, i),
            children: [
                (0, r.jsxs)(s.P3F, {
                    onClick: d,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: a()(l.header, { [l.interactive]: null != u }),
                    'aria-expanded': null != u ? !u : void 0,
                    'aria-label': f,
                    children: [
                        null != o &&
                            (0, r.jsx)('div', {
                                'aria-hidden': !0,
                                className: l.headerIcon,
                                children: o
                            }),
                        (0, r.jsx)('span', {
                            className: l.headerLabel,
                            children: t
                        }),
                        null != u
                            ? (0, r.jsx)(s.CJ0, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: a()(l.headerCollapseIcon, { [l.headerCollapseIconCollapsed]: u }),
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
