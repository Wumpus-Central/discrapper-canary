n.d(t, {
    T: () => s,
    r: () => c
});
var r,
    i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(195656),
    s = (((r = {})[(r.POPOUT = 0)] = 'POPOUT'), (r[(r.PRIMARY = 1)] = 'PRIMARY'), (r[(r.SECONDARY = 2)] = 'SECONDARY'), (r[(r.BLACK = 3)] = 'BLACK'), r);
let c = (e) => {
    let { left: t, top: n = 0, right: r = 0, bottom: l, size: s = 8, alert: c = !1, showBlurpleTreatment: u = !1, maskColor: d = 2 } = e;
    return (0, i.jsx)('span', {
        className: o()(a.dot, {
            [a.alert]: c,
            [a.blurpleTreatment]: u,
            [a.maskPopout]: 0 === d,
            [a.maskPrimary]: 1 === d,
            [a.maskSecondary]: 2 === d,
            [a.maskBlack]: 3 === d
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
