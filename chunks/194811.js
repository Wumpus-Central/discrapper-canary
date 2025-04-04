n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(111028),
    l = n(652853),
    c = n(228168),
    u = n(227832);
function d(e) {
    let { text: t, tags: n, platformIcon: i, contextMenu: d } = e,
        { profileType: f } = (0, l.z)();
    return (null == t || '' === t) && null == d
        ? null
        : null == t || '' === t
          ? (0, r.jsx)('div', {
                className: o()(u.headerContextMenu, u.absolute),
                children: d
            })
          : (0, r.jsxs)('header', {
                className: u.header,
                children: [
                    (0, r.jsxs)(a.X6q, {
                        className: u.headerText,
                        variant: f === c.y0.PANEL ? 'text-xs/semibold' : 'text-xs/medium',
                        color: 'header-primary',
                        children: [
                            (0, r.jsx)(s.Z, { children: t }),
                            null != i &&
                                (0, r.jsx)('div', {
                                    className: u.platformIcon,
                                    style: {
                                        maskImage: 'url('.concat(i.whiteSVG, ')'),
                                        WebkitMaskImage: 'url('.concat(i.whiteSVG, ')')
                                    }
                                }),
                            n
                        ]
                    }),
                    null != d &&
                        (0, r.jsx)('div', {
                            className: u.headerContextMenu,
                            children: d
                        })
                ]
            });
}
