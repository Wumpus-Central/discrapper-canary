a.d(t, { A: () => u });
var r = a(477900),
    i = a(503698),
    s = a.n(i),
    c = a(259204),
    n = a(343053),
    d = a(48763),
    l = a(955671);
let o = { [d.W.SM]: 224, [d.W.LG]: 448 };
function u(e) {
    let { character: t } = e,
        { size: a } = (0, n.Z)();
    return (0, r.jsx)("div", {
        className: s()(l.characterColumn, l[a]),
        children: (0, r.jsx)(c.A, { character: t, size: o[a], className: l.character }),
    });
}
