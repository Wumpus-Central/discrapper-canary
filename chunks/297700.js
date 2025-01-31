n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(189798),
    u = n(878678);
function c(e) {
    let { children: t, size: n = 16, className: a, flowerStarClassName: c, ...d } = e,
        f = r.Children.only(t),
        _ = {
            width: n,
            height: n
        },
        p = (0, o.bWb)().enabled && !e.allowFullSizedIcon;
    return (0, i.jsxs)('div', {
        className: s()(u.flowerStarContainer, a),
        style: _,
        children: [
            (0, i.jsx)(l.Z, {
                ...d,
                className: s()(c, u.flowerStar)
            }),
            (0, i.jsx)('div', {
                className: s()(u.childContainer, { [u.redesignIconChildContainer]: p }),
                children: f
            })
        ]
    });
}
