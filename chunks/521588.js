"use strict";
n.d(t, { a: () => a });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(483618);
let a = (e) => {
    let {
        left: t,
        top: n = 0,
        right: s = 0,
        bottom: a,
        size: o = 8,
        alert: c = !1,
        showBlurpleTreatment: d = !1,
        maskColor: u = 2,
        additionalStyles: h,
    } = e;
    return (0, i.jsx)("span", {
        className: l()(r.Om, {
            [r.xE]: c,
            [r.nB]: d,
            [r.GS]: 0 === u,
            [r.Pn]: 1 === u,
            [r.HP]: 2 === u,
            [r.gl]: 3 === u,
            [h ?? ""]: void 0 !== h,
        }),
        style: { height: o, width: o, left: t, top: n, right: s, bottom: a },
    });
};
