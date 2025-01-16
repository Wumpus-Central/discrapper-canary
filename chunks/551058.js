var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(713120);
let c = 16,
    d = a.memo(function (e) {
        let { children: n, trailing: r, className: a, icon: s, isCollapsed: d, onClick: f, 'aria-label': _ } = e;
        return (0, i.jsxs)('div', {
            className: o()(u.wrapper, a),
            children: [
                (0, i.jsxs)(l.Clickable, {
                    onClick: f,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: o()(u.header, { [u.interactive]: null != d }),
                    'aria-expanded': null != d ? !d : void 0,
                    'aria-label': _,
                    children: [
                        null != s &&
                            (0, i.jsx)('div', {
                                'aria-hidden': !0,
                                className: u.headerIcon,
                                children: s
                            }),
                        (0, i.jsx)('span', {
                            className: u.headerLabel,
                            children: n
                        }),
                        null != d
                            ? (0, i.jsx)(l.ChevronSmallDownIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: o()(u.headerCollapseIcon, { [u.headerCollapseIconCollapsed]: d }),
                                  height: c,
                                  width: c
                              })
                            : null
                    ]
                }),
                r
            ]
        });
    });
n.Z = d;
