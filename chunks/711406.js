n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(78891),
    l = n(766004),
    u = n(47305);
function c(e) {
    let { children: t, namePlate: n, hover: a, selected: c } = e,
        { canSee: d } = (0, o.D)('NamePlate'),
        f = (0, r.useMemo)(() => ((a || c) && (null == n ? void 0 : n.animatedSrc) != null ? (null == n ? void 0 : n.animatedSrc) : null == n ? void 0 : n.src), [a, c, n]);
    if (null == n || !d || null == f) return (0, i.jsx)(i.Fragment, { children: t });
    let _ = (0, l.b)(n.borderColor, a, c);
    return (0, i.jsxs)('div', {
        className: s()(u.container, { [u.bordered]: null != _ }),
        style: null != _ ? { borderColor: _ } : {},
        children: [
            (0, i.jsx)('img', {
                className: s()(u.img, {
                    [u.hover]: a,
                    [u.selected]: c
                }),
                src: f,
                alt: n.imgAlt
            }),
            (0, i.jsx)('div', {
                className: u.content,
                children: t
            })
        ]
    });
}
