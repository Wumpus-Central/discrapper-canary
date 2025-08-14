n.d(t, { r: () => s });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(969183);
let s = (e) => {
    let {
        left: t,
        top: n = 0,
        right: i = 0,
        bottom: s,
        size: l = 8,
        alert: c = !1,
        showBlurpleTreatment: u = !1,
        maskColor: d = 2,
        additionalStyles: f,
    } = e;
    return (0, r.jsx)("span", {
        className: o()(a.dot, {
            [a.alert]: c,
            [a.blurpleTreatment]: u,
            [a.maskPopout]: 0 === d,
            [a.maskPrimary]: 1 === d,
            [a.maskSecondary]: 2 === d,
            [a.maskBlack]: 3 === d,
            [null != f ? f : ""]: void 0 !== f,
        }),
        style: {
            height: l,
            width: l,
            left: t,
            top: n,
            right: i,
            bottom: s,
        },
    });
};
