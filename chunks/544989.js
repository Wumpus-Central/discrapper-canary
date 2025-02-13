n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(228168),
    o = n(414751);
function l(e) {
    let { profileType: t, children: n } = e;
    return (0, i.jsx)('div', {
        className: a()(o.wrapper, {
            [o.biteSize]: t === s.y0.BITE_SIZE,
            [o.fullSize]: t === s.y0.FULL_SIZE,
            [o.panel]: t === s.y0.PANEL
        }),
        children: n
    });
}
