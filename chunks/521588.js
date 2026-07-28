"use strict";
n.d(t, { a: () => l });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(390825);
let l = (e) => {
    let {
        left: t,
        top: n = 0,
        right: r = 0,
        bottom: l,
        size: o = 8,
        alert: d = !1,
        showBlurpleTreatment: c = !1,
        maskColor: u = 2,
        additionalStyles: _,
    } = e;
    return (0, i.jsx)("span", {
        className: a()(s.Om, {
            [s.xE]: d,
            [s.nB]: c,
            [s.GS]: 0 === u,
            [s.Pn]: 1 === u,
            [s.HP]: 2 === u,
            [s.gl]: 3 === u,
            [_ ?? ""]: void 0 !== _,
        }),
        style: { height: o, width: o, left: t, top: n, right: r, bottom: l },
    });
};
