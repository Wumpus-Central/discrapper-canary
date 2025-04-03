n.d(t, {
    T: () => s,
    r: () => c
});
var r,
    i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(576073),
    s = (((r = {})[(r.POPOUT = 0)] = 'POPOUT'), (r[(r.SECONDARY = 1)] = 'SECONDARY'), (r[(r.BLACK = 2)] = 'BLACK'), r);
let c = (e) => {
    let { left: t, top: n = 0, right: r = 0, bottom: l, size: s = 8, alert: c = !1, maskColor: u = 1 } = e;
    return (0, i.jsx)('span', {
        className: o()(a.dot, {
            [a.alert]: c,
            [a.maskPopout]: 0 === u,
            [a.maskSecondary]: 1 === u,
            [a.maskBlack]: 2 === u
        }),
        style: {
            height: s,
            width: s,
            left: t,
            top: n,
            right: r,
            bottom: l
        }
    });
};
