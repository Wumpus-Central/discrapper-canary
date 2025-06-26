n.d(t, { r: () => a });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(576073);
let a = (e) => {
    let { left: t, top: n = 0, right: i = 0, bottom: a, size: s = 8, alert: c = !1, showBlurpleTreatment: u = !1, maskColor: d = 2, additionalStyles: p } = e;
    return (0, r.jsx)('span', {
        className: l()(o.dot, {
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
            right: i,
            bottom: a
        }
    });
};
