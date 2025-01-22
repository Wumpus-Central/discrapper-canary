var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(713120);
let c = 16,
    d = a.memo(function (e) {
        let { children: n, trailing: r, className: a, icon: o, isCollapsed: d, onClick: f, 'aria-label': p } = e;
        return (0, i.jsxs)('div', {
            className: s()(u.wrapper, a),
            children: [
                (0, i.jsxs)(l.Clickable, {
                    onClick: f,
                    onKeyDown: (e) => e.stopPropagation(),
                    className: s()(u.header, { [u.interactive]: null != d }),
                    'aria-expanded': null != d ? !d : void 0,
                    'aria-label': p,
                    children: [
                        null != o &&
                            (0, i.jsx)('div', {
                                'aria-hidden': !0,
                                className: u.headerIcon,
                                children: o
                            }),
                        (0, i.jsx)('span', {
                            className: u.headerLabel,
                            children: n
                        }),
                        null != d
                            ? (0, i.jsx)(l.ChevronSmallDownIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  className: s()(u.headerCollapseIcon, { [u.headerCollapseIconCollapsed]: d }),
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
