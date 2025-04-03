n.d(t, { Z: () => d }), n(47120);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(963838),
    s = n(37091),
    u = n(388032),
    c = n(690296);
function d(e) {
    let t,
        { channelId: n, userId: l } = e,
        [d, f] = (0, a.Wu)([s.Z], () => [s.Z.getWaitingHighFive(n, l), s.Z.getCompletedHighFive(n, l)]);
    if (null != f)
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    alt: u.NW.string(u.t.W6HwU1),
                    src: (0, o._r)({
                        name: f[0],
                        id: null,
                        animated: !1
                    }),
                    className: i()(c.completeLeft, c.highFive)
                }),
                (0, r.jsx)('img', {
                    alt: u.NW.string(u.t.W6HwU1),
                    src: (0, o._r)({
                        name: f[1],
                        id: null,
                        animated: !1
                    }),
                    className: i()(c.completeRight, c.highFive)
                })
            ]
        });
    else {
        if (null == d) return null;
        t = (0, r.jsx)('img', {
            alt: u.NW.string(u.t.W6HwU1),
            src: (0, o._r)({
                name: d,
                id: null,
                animated: !1
            }),
            className: i()(c.waiting, c.highFive)
        });
    }
    return (0, r.jsx)('div', {
        className: c.root,
        children: t
    });
}
