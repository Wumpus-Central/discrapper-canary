n.d(t, { A: () => d });
var l = n(477900),
    r = n(503698),
    a = n.n(r),
    i = n(259204),
    s = n(343053),
    o = n(48763),
    c = n(955671);
let u = { [o.W.SM]: 224, [o.W.LG]: 448 };
function d(e) {
    let { character: t } = e,
        { size: n } = (0, s.Z)();
    return (0, l.jsx)("div", {
        className: a()(c.characterColumn, c[n]),
        children: (0, l.jsx)(i.A, { character: t, size: u[n], className: c.character }),
    });
}
