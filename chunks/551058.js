n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(713120);
let u = 16,
    c = r.memo(function (e) {
        let { children: t, trailing: n, className: r, icon: a, isCollapsed: c, onClick: d, 'aria-label': f } = e;
        return (0, i.jsxs)('div', {
            className: s()(l.wrapper, r),
            children: [
                (0, i.jsxs)(o.P3F, {
                    onClick: d,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: s()(l.header, { [l.interactive]: null != c }),
                    'aria-expanded': null != c ? !c : void 0,
                    'aria-label': f,
                    children: [
                        null != a &&
                            (0, i.jsx)('div', {
                                'aria-hidden': !0,
                                className: l.headerIcon,
                                children: a
                            }),
                        (0, i.jsx)('span', {
                            className: l.headerLabel,
                            children: t
                        }),
                        null != c
                            ? (0, i.jsx)(o.CJ0, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: s()(l.headerCollapseIcon, { [l.headerCollapseIconCollapsed]: c }),
                                  height: u,
                                  width: u
                              })
                            : null
                    ]
                }),
                n
            ]
        });
    });
