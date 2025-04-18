n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(200100),
    s = n(692547),
    a = n(481060),
    c = n(565138),
    u = n(252686),
    d = n(909698);
function h(e) {
    let { guild: t, show: n, active: i, onAnimationStart: h, onAnimationRest: p } = e,
        f = {},
        g = {};
    (f.transform = 'translate3d(10px, 10px, 0) scale3d(3, 3, 1)'), (g.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)');
    let m = (0, a.dQu)(s.Z.unsafe_rawColors.BRAND_500).hex(),
        b = (0, a.dQu)(s.Z.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((f.backgroundColor = m), (g.backgroundColor = b));
    let y = (0, a.Yzy)(n, {
        from: f,
        enter: g,
        leave: f,
        config: { duration: 100 },
        onStart: h,
        onRest: p
    });
    return (0, r.jsx)(r.Fragment, {
        children: y(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    'div',
                    {
                        className: l()(d.folder, d.hover),
                        children: (0, r.jsx)('div', {
                            className: d.folderIconWrapper,
                            children: (0, r.jsxs)('div', {
                                className: d.closedFolderIconWrapper,
                                children: [
                                    (0, r.jsx)(o.animated.div, {
                                        className: d.folderIconPreview,
                                        style: e,
                                        children: (0, r.jsx)(c.Z, {
                                            guild: t,
                                            size: c.Z.Sizes.SMOL,
                                            className: d.guildIcon
                                        })
                                    }),
                                    (0, r.jsx)(u.Z, { className: d.miniPlaceholder })
                                ]
                            })
                        })
                    },
                    i.key
                )
        )
    });
}
