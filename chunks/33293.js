a.d(t, { A: () => u });
var s = a(477900),
    i = a(503698),
    r = a.n(i),
    n = a(259204),
    c = a(343053),
    d = a(48763),
    l = a(955671);
let o = { [d.W.SM]: 224, [d.W.LG]: 448 };
function u(e) {
    let { character: t } = e,
        { size: a } = (0, c.Z)();
    return (0, s.jsx)("div", {
        className: r()(l.characterColumn, l[a]),
        children: (0, s.jsx)(n.A, { character: t, size: o[a], className: l.character }),
    });
}
