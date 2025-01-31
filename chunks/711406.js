n.d(t, { Z: () => u });
var i = n(200651),
    r = n(120356),
    a = n.n(r),
    s = n(78891),
    o = n(766004),
    l = n(47305);
function u(e) {
    let { children: t, namePlate: n, hover: r, selected: u } = e,
        { canSee: c } = (0, s.D)('NamePlate');
    if (null == n || !c) return (0, i.jsx)(i.Fragment, { children: t });
    let d = (0, o.b)(n.borderColor, r, u);
    return (0, i.jsxs)('div', {
        className: a()(l.container, { [l.bordered]: null != d }),
        style: null != d ? { borderColor: d } : {},
        children: [
            (0, i.jsx)('img', {
                className: a()(l.img, {
                    [l.hover]: r,
                    [l.selected]: u
                }),
                src: n.src,
                alt: n.imgAlt
            }),
            (0, i.jsx)('div', {
                className: l.content,
                children: t
            })
        ]
    });
}
