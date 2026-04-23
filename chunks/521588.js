n.d(t, { a: () => r });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(489857);
let r = (e) => {
    let {
        left: t,
        top: n = 0,
        right: l = 0,
        bottom: r,
        size: o = 8,
        alert: d = !1,
        showBlurpleTreatment: c = !1,
        maskColor: u = 2,
        additionalStyles: h,
    } = e;
    return (0, i.jsx)("span", {
        className: s()(a.Om, {
            [a.xE]: d,
            [a.nB]: c,
            [a.GS]: 0 === u,
            [a.Pn]: 1 === u,
            [a.HP]: 2 === u,
            [a.gl]: 3 === u,
            [h ?? ""]: void 0 !== h,
        }),
        style: { height: o, width: o, left: t, top: n, right: l, bottom: r },
    });
};
