n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(963838),
    o = n(37091),
    c = n(388032),
    u = n(694651);
function d(e) {
    let t,
        { channelId: n, userId: l } = e,
        [d, m] = (0, a.Wu)([o.Z], () => [o.Z.getWaitingHighFive(n, l), o.Z.getCompletedHighFive(n, l)]);
    if (null != m)
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    alt: c.intl.string(c.t.W6HwU1),
                    src: (0, s._r)({
                        name: m[0],
                        id: null,
                        animated: !1
                    }),
                    className: r()(u.completeLeft, u.highFive)
                }),
                (0, i.jsx)('img', {
                    alt: c.intl.string(c.t.W6HwU1),
                    src: (0, s._r)({
                        name: m[1],
                        id: null,
                        animated: !1
                    }),
                    className: r()(u.completeRight, u.highFive)
                })
            ]
        });
    else {
        if (null == d) return null;
        t = (0, i.jsx)('img', {
            alt: c.intl.string(c.t.W6HwU1),
            src: (0, s._r)({
                name: d,
                id: null,
                animated: !1
            }),
            className: r()(u.waiting, u.highFive)
        });
    }
    return (0, i.jsx)('div', {
        className: u.root,
        children: t
    });
}
