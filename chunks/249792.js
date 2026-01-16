n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(81239),
    o = n(692547),
    s = n(481060),
    c = n(565138),
    u = n(829313);
function d(e) {
    let { guild: t, show: n, active: i, onAnimationStart: d, onAnimationRest: p } = e,
        f = {},
        h = {};
    (f.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (h.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let g = (0, s.dQu)(o.Z.unsafe_rawColors.BRAND_500).hex(),
        m = (0, s.dQu)(o.Z.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((f.backgroundColor = g), (h.backgroundColor = m));
    let b = (0, s.Yzy)(n, {
        from: f,
        enter: h,
        leave: f,
        config: { duration: 100 },
        onStart: d,
        onRest: p,
    });
    return (0, r.jsx)(r.Fragment, {
        children: b(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: u.folderGroup,
                        children: (0, r.jsx)("div", {
                            className: l()(u.folderHeader, u.folderHeaderSmall),
                            style: { margin: 0 },
                            children: (0, r.jsx)(a.animated.div, {
                                className: u.folderDragPreview,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: u.folderPreviewWrapper,
                                    children: (0, r.jsx)("div", {
                                        className: u.folderPreview,
                                        children: (0, r.jsx)(c.Z, {
                                            guild: t,
                                            size: c.Z.Sizes.SMOL,
                                            className: u.folderPreviewGuildIcon,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    i.key,
                ),
        ),
    });
}
