r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(189798),
    c = r(878678);
function d(e) {
    let { children: n, size: r = 16, className: s, flowerStarClassName: d, ...f } = e,
        _ = a.Children.only(n),
        h = {
            width: r,
            height: r
        },
        p = (0, l.useRedesignIconContext)().enabled && !e.allowFullSizedIcon;
    return (0, i.jsxs)('div', {
        className: o()(c.flowerStarContainer, s),
        style: h,
        children: [
            (0, i.jsx)(u.Z, {
                ...f,
                className: o()(d, c.flowerStar)
            }),
            (0, i.jsx)('div', {
                className: o()(c.childContainer, { [c.redesignIconChildContainer]: p }),
                children: _
            })
        ]
    });
}
