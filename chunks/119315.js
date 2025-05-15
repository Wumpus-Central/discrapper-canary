n.d(t, {
    T: () => s,
    r: () => c
});
var r,
    i = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    o = n(576073),
    s = (((r = {})[(r.POPOUT = 0)] = 'POPOUT'), (r[(r.PRIMARY = 1)] = 'PRIMARY'), (r[(r.SECONDARY = 2)] = 'SECONDARY'), (r[(r.BLACK = 3)] = 'BLACK'), r);
let c = (e) => {
    let { left: t, top: n = 0, right: r = 0, bottom: l, size: s = 8, alert: c = !1, showBlurpleTreatment: u = !1, maskColor: d = 2, additionalStyles: p } = e;
    return (0, i.jsx)('span', {
        className: a()(o.dot, {
            [o.alert]: c,
            [o.blurpleTreatment]: u,
            [o.maskPopout]: 0 === d,
            [o.maskPrimary]: 1 === d,
            [o.maskSecondary]: 2 === d,
            [o.maskBlack]: 3 === d,
            [null != p ? p : '']: void 0 !== p
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
