r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(111028),
    u = r(652853),
    c = r(228168),
    d = r(249942);
function f(e) {
    let { text: n, tags: r, platformIcon: a, contextMenu: f } = e,
        { profileType: _ } = (0, u.z)();
    return (null == n || '' === n) && null == f
        ? null
        : null == n || '' === n
          ? (0, i.jsx)('div', {
                className: s()(d.headerContextMenu, d.absolute),
                children: f
            })
          : (0, i.jsxs)('header', {
                className: d.header,
                children: [
                    (0, i.jsxs)(o.Heading, {
                        className: d.headerText,
                        variant: _ === c.y0.PANEL ? 'text-xs/semibold' : 'text-xs/medium',
                        color: 'header-primary',
                        children: [
                            (0, i.jsx)(l.Z, { children: n }),
                            null != a &&
                                (0, i.jsx)('div', {
                                    className: d.platformIcon,
                                    style: {
                                        maskImage: 'url('.concat(a.whiteSVG, ')'),
                                        WebkitMaskImage: 'url('.concat(a.whiteSVG, ')')
                                    }
                                }),
                            r
                        ]
                    }),
                    null != f &&
                        (0, i.jsx)('div', {
                            className: d.headerContextMenu,
                            children: f
                        })
                ]
            });
}
