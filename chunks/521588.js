"use strict";
n.d(t, { a: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(489857);
let o = (e) => {
    let {
        left: t,
        top: n = 0,
        right: r = 0,
        bottom: o,
        size: l = 8,
        alert: u = !1,
        showBlurpleTreatment: c = !1,
        maskColor: d = 2,
        additionalStyles: _,
    } = e;
    return (0, i.jsx)("span", {
        className: s()(a.Om, {
            [a.xE]: u,
            [a.nB]: c,
            [a.GS]: 0 === d,
            [a.Pn]: 1 === d,
            [a.HP]: 2 === d,
            [a.gl]: 3 === d,
            [_ ?? ""]: void 0 !== _,
        }),
        style: { height: l, width: l, left: t, top: n, right: r, bottom: o },
    });
};
