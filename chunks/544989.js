r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(228168),
    l = r(673471);
function u(e) {
    let { profileType: n, children: r } = e;
    return (0, i.jsx)('div', {
        className: o()(l.wrapper, {
            [l.biteSize]: n === s.y0.BITE_SIZE,
            [l.fullSize]: n === s.y0.FULL_SIZE,
            [l.panel]: n === s.y0.PANEL
        }),
        children: r
    });
}
