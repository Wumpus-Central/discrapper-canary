n.d(t, { a: () => s });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(489857);
let s = (e) => {
    let {
        left: t,
        top: n = 0,
        right: l = 0,
        bottom: s,
        size: o = 8,
        alert: d = !1,
        showBlurpleTreatment: u = !1,
        maskColor: c = 2,
        additionalStyles: h,
    } = e;
    return (0, i.jsx)("span", {
        className: a()(r.Om, {
            [r.xE]: d,
            [r.nB]: u,
            [r.GS]: 0 === c,
            [r.Pn]: 1 === c,
            [r.HP]: 2 === c,
            [r.gl]: 3 === c,
            [h ?? ""]: void 0 !== h,
        }),
        style: { height: o, width: o, left: t, top: n, right: l, bottom: s },
    });
};
