n.d(t, {
    T: () => o,
    r: () => c
});
var i,
    l = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    s = n(303161),
    o = (((i = {})[(i.POPOUT = 0)] = 'POPOUT'), (i[(i.SECONDARY = 1)] = 'SECONDARY'), (i[(i.BLACK = 2)] = 'BLACK'), i);
let c = (e) => {
    let { left: t, top: n = 0, right: i = 0, bottom: a, size: o = 8, alert: c = !1, maskColor: d = 1 } = e;
    return (0, l.jsx)('span', {
        className: r()(s.dot, {
            [s.alert]: c,
            [s.maskPopout]: 0 === d,
            [s.maskSecondary]: 1 === d,
            [s.maskBlack]: 2 === d
        }),
        style: {
            height: o,
            width: o,
            left: t,
            top: n,
            right: i,
            bottom: a
        }
    });
};
