n.d(t, { r: () => o });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(969183);
let o = (e) => {
    let {
        left: t,
        top: n = 0,
        right: r = 0,
        bottom: o,
        size: s = 8,
        alert: c = !1,
        showBlurpleTreatment: u = !1,
        maskColor: d = 2,
        additionalStyles: p,
    } = e;
    return (0, i.jsx)("span", {
        className: l()(a.dot, {
            [a.alert]: c,
            [a.blurpleTreatment]: u,
            [a.maskPopout]: 0 === d,
            [a.maskPrimary]: 1 === d,
            [a.maskSecondary]: 2 === d,
            [a.maskBlack]: 3 === d,
            [null != p ? p : ""]: void 0 !== p,
        }),
        style: {
            height: s,
            width: s,
            left: t,
            top: n,
            right: r,
            bottom: o,
        },
    });
};
