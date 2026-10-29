n.d(t, { a: () => a });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    s = n(809380);
let a = (e) => {
    let {
        left: t,
        bottom: n,
        top: i = 0,
        right: a = 0,
        size: o = 8,
        alert: u = !1,
        showBlurpleTreatment: c = !1,
        maskColor: d = 2,
        additionalStyles: h,
    } = e;
    return (0, l.jsx)("span", {
        className: r()(s.Om, {
            [s.xE]: u,
            [s.nB]: c,
            [s.GS]: 0 === d,
            [s.Pn]: 1 === d,
            [s.HP]: 2 === d,
            [s.gl]: 3 === d,
            [h ?? ""]: void 0 !== h,
        }),
        style: { height: o, width: o, left: t, top: null == n ? i : void 0, right: a, bottom: n },
    });
};
