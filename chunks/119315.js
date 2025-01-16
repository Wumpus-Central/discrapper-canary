n.d(t, {
    T: function () {
        return l;
    },
    r: function () {
        return c;
    }
});
var i,
    l,
    r = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    o = n(707600);
((i = l || (l = {}))[(i.POPOUT = 0)] = 'POPOUT'), (i[(i.SECONDARY = 1)] = 'SECONDARY'), (i[(i.BLACK = 2)] = 'BLACK');
let c = (e) => {
    let { left: t, top: n = 0, right: i = 0, bottom: l, size: a = 8, alert: c = !1, maskColor: d = 1 } = e;
    return (0, r.jsx)('span', {
        className: s()(o.dot, {
            [o.alert]: c,
            [o.maskPopout]: 0 === d,
            [o.maskSecondary]: 1 === d,
            [o.maskBlack]: 2 === d
        }),
        style: {
            height: a,
            width: a,
            left: t,
            top: n,
            right: i,
            bottom: l
        }
    });
};
