r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(189798),
    c = r(878678);
function d(e) {
    let { children: n, size: r = 16, className: o, flowerStarClassName: d, ...f } = e,
        p = a.Children.only(n),
        h = {
            width: r,
            height: r
        },
        _ = (0, l.useRedesignIconContext)().enabled && !e.allowFullSizedIcon;
    return (0, i.jsxs)('div', {
        className: s()(c.flowerStarContainer, o),
        style: h,
        children: [
            (0, i.jsx)(u.Z, {
                ...f,
                className: s()(d, c.flowerStar)
            }),
            (0, i.jsx)('div', {
                className: s()(c.childContainer, { [c.redesignIconChildContainer]: _ }),
                children: p
            })
        ]
    });
}
