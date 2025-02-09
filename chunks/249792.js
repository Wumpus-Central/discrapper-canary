n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(642128),
    o = n(692547),
    s = n(481060),
    c = n(565138),
    d = n(252686),
    u = n(893539);
function h(e) {
    let { guild: t, show: n, active: l, onAnimationStart: h, onAnimationRest: p } = e,
        m = {},
        g = {};
    (m.transform = 'translate3d(10px, 10px, 0) scale3d(3, 3, 1)'), (g.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)');
    let f = (0, s.dQu)(o.Z.unsafe_rawColors.BRAND_500).hex(),
        _ = (0, s.dQu)(o.Z.unsafe_rawColors.PRIMARY_630).hex();
    l && null == t.icon && ((m.backgroundColor = f), (g.backgroundColor = _));
    let v = (0, s.Yzy)(n, {
        from: m,
        enter: g,
        leave: m,
        config: { duration: 100 },
        onStart: h,
        onRest: p
    });
    return (0, i.jsx)(i.Fragment, {
        children: v(
            (e, n, l) =>
                n &&
                (0, i.jsx)(
                    'div',
                    {
                        className: r()(u.folder, u.hover),
                        children: (0, i.jsx)('div', {
                            className: u.folderIconWrapper,
                            children: (0, i.jsxs)('div', {
                                className: u.closedFolderIconWrapper,
                                children: [
                                    (0, i.jsx)(a.animated.div, {
                                        className: u.folderIconPreview,
                                        style: e,
                                        children: (0, i.jsx)(c.Z, {
                                            guild: t,
                                            size: c.Z.Sizes.SMOL,
                                            className: u.guildIcon
                                        })
                                    }),
                                    (0, i.jsx)(d.Z, { className: u.miniPlaceholder })
                                ]
                            })
                        })
                    },
                    l.key
                )
        )
    });
}
