n.d(t, { r: () => o });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(576073);
let o = (e) => {
    let { left: t, top: n = 0, right: i = 0, bottom: o, size: s = 8, alert: c = !1, showBlurpleTreatment: u = !1, maskColor: d = 2, additionalStyles: p } = e;
    return (0, r.jsx)('span', {
        className: l()(a.dot, {
            [a.alert]: c,
            [a.blurpleTreatment]: u,
            [a.maskPopout]: 0 === d,
            [a.maskPrimary]: 1 === d,
            [a.maskSecondary]: 2 === d,
            [a.maskBlack]: 3 === d,
            [null != p ? p : '']: void 0 !== p
        }),
        style: {
            height: s,
            width: s,
            left: t,
            top: n,
            right: i,
            bottom: o
        }
    });
};
