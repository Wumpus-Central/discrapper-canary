n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(228168),
    s = n(405751);
function l(e) {
    let { profileType: t, children: n } = e;
    return (0, r.jsx)('div', {
        className: a()(s.wrapper, {
            [s.biteSize]: t === o.y0.BITE_SIZE,
            [s.fullSize]: t === o.y0.FULL_SIZE,
            [s.panel]: t === o.y0.PANEL
        }),
        children: n
    });
}
