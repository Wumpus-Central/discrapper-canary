n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(111028),
    l = n(652853),
    c = n(228168),
    u = n(227832);
function d(e) {
    let { text: t, textId: n, tags: i, platformIcon: d, contextMenu: f } = e,
        { themeType: _ } = (0, l.z)();
    return (null == t || '' === t) && null == f
        ? null
        : null == t || '' === t
          ? (0, r.jsx)('div', {
                className: a()(u.headerContextMenu, u.absolute),
                children: f
            })
          : (0, r.jsxs)('div', {
                className: u.header,
                children: [
                    (0, r.jsxs)(o.Text, {
                        className: u.headerText,
                        variant: _ === c.lY.SIDEBAR ? 'text-xs/semibold' : 'text-xs/medium',
                        color: 'header-primary',
                        id: n,
                        children: [
                            (0, r.jsx)(s.Z, { children: t }),
                            null != d &&
                                (0, r.jsx)('div', {
                                    className: u.platformIcon,
                                    style: {
                                        maskImage: 'url('.concat(d.whiteSVG, ')'),
                                        WebkitMaskImage: 'url('.concat(d.whiteSVG, ')')
                                    }
                                }),
                            i
                        ]
                    }),
                    null != f &&
                        (0, r.jsx)('div', {
                            className: u.headerContextMenu,
                            children: f
                        })
                ]
            });
}
