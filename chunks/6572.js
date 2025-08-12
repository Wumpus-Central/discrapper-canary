n.d(t, { Z: () => d }), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(963838),
    l = n(37091),
    c = n(388032),
    u = n(872269);
function d(e) {
    let t,
        { channelId: n, userId: i } = e,
        [d, f] = (0, a.Wu)([l.Z], () => [l.Z.getWaitingHighFive(n, i), l.Z.getCompletedHighFive(n, i)]);
    if (null != f)
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("img", {
                    alt: c.intl.string(c.t.W6HwU1),
                    src: (0, s._r)({
                        name: f[0],
                        id: null,
                        animated: !1,
                    }),
                    className: o()(u.completeLeft, u.highFive),
                }),
                (0, r.jsx)("img", {
                    alt: c.intl.string(c.t.W6HwU1),
                    src: (0, s._r)({
                        name: f[1],
                        id: null,
                        animated: !1,
                    }),
                    className: o()(u.completeRight, u.highFive),
                }),
            ],
        });
    else {
        if (null == d) return null;
        t = (0, r.jsx)("img", {
            alt: c.intl.string(c.t.W6HwU1),
            src: (0, s._r)({
                name: d,
                id: null,
                animated: !1,
            }),
            className: o()(u.waiting, u.highFive),
        });
    }
    return (0, r.jsx)("div", {
        className: u.root,
        children: t,
    });
}
