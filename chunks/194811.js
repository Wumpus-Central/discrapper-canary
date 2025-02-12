n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(111028),
    l = n(652853),
    u = n(228168),
    c = n(537208);
function d(e) {
    let { text: t, tags: n, platformIcon: r, contextMenu: d } = e,
        { profileType: f } = (0, l.z)();
    return (null == t || '' === t) && null == d
        ? null
        : null == t || '' === t
          ? (0, i.jsx)('div', {
                className: a()(c.headerContextMenu, c.absolute),
                children: d
            })
          : (0, i.jsxs)('header', {
                className: c.header,
                children: [
                    (0, i.jsxs)(s.X6q, {
                        className: c.headerText,
                        variant: f === u.y0.PANEL ? 'text-xs/semibold' : 'text-xs/medium',
                        color: 'header-primary',
                        children: [
                            (0, i.jsx)(o.Z, { children: t }),
                            null != r &&
                                (0, i.jsx)('div', {
                                    className: c.platformIcon,
                                    style: {
                                        maskImage: 'url('.concat(r.whiteSVG, ')'),
                                        WebkitMaskImage: 'url('.concat(r.whiteSVG, ')')
                                    }
                                }),
                            n
                        ]
                    }),
                    null != d &&
                        (0, i.jsx)('div', {
                            className: c.headerContextMenu,
                            children: d
                        })
                ]
            });
}
