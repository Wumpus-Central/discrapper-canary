n.d(t, { r: () => s });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(576073);
let s = (e) => {
    let { left: t, top: n = 0, right: i = 0, bottom: s, size: l = 8, alert: c = !1, showBlurpleTreatment: u = !1, maskColor: d = 2, additionalStyles: f } = e;
    return (0, r.jsx)('span', {
        className: a()(o.dot, {
            [o.alert]: c,
            [o.blurpleTreatment]: u,
            [o.maskPopout]: 0 === d,
            [o.maskPrimary]: 1 === d,
            [o.maskSecondary]: 2 === d,
            [o.maskBlack]: 3 === d,
            [null != f ? f : '']: void 0 !== f
        }),
        style: {
            height: l,
            width: l,
            left: t,
            top: n,
            right: i,
            bottom: s
        }
    });
};
