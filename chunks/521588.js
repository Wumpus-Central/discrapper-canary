l.d(t, { a: () => r });
var n = l(627968);
l(64700);
var s = l(503698),
    i = l.n(s),
    a = l(489857);
let r = (e) => {
    let {
        left: t,
        top: l = 0,
        right: s = 0,
        bottom: r,
        size: u = 8,
        alert: d = !1,
        showBlurpleTreatment: c = !1,
        maskColor: o = 2,
        additionalStyles: f,
    } = e;
    return (0, n.jsx)("span", {
        className: i()(a.Om, {
            [a.xE]: d,
            [a.nB]: c,
            [a.GS]: 0 === o,
            [a.Pn]: 1 === o,
            [a.HP]: 2 === o,
            [a.gl]: 3 === o,
            [f ?? ""]: void 0 !== f,
        }),
        style: { height: u, width: u, left: t, top: l, right: s, bottom: r },
    });
};
