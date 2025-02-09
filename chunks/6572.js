n.d(t, { Z: () => d }), n(47120);
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(442837),
    s = n(963838),
    o = n(37091),
    u = n(388032),
    c = n(664126);
function d(e) {
    let t,
        { channelId: n, userId: i } = e,
        [d, m] = (0, a.Wu)([o.Z], () => [o.Z.getWaitingHighFive(n, i), o.Z.getCompletedHighFive(n, i)]);
    if (null != m)
        t = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)('img', {
                    alt: u.intl.string(u.t.W6HwU1),
                    src: (0, s._r)({
                        name: m[0],
                        id: null,
                        animated: !1
                    }),
                    className: r()(c.completeLeft, c.highFive)
                }),
                (0, l.jsx)('img', {
                    alt: u.intl.string(u.t.W6HwU1),
                    src: (0, s._r)({
                        name: m[1],
                        id: null,
                        animated: !1
                    }),
                    className: r()(c.completeRight, c.highFive)
                })
            ]
        });
    else {
        if (null == d) return null;
        t = (0, l.jsx)('img', {
            alt: u.intl.string(u.t.W6HwU1),
            src: (0, s._r)({
                name: d,
                id: null,
                animated: !1
            }),
            className: r()(c.waiting, c.highFive)
        });
    }
    return (0, l.jsx)('div', {
        className: c.root,
        children: t
    });
}
