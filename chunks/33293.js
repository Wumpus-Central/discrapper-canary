n.d(t, { A: () => d });
var l = n(477900),
    r = n(503698),
    a = n.n(r),
    s = n(259204),
    i = n(343053),
    c = n(48763),
    o = n(955671);
let u = { [c.W.SM]: 224, [c.W.LG]: 448 };
function d(e) {
    let { character: t } = e,
        { size: n } = (0, i.Z)();
    return (0, l.jsx)("div", {
        className: a()(o.characterColumn, o[n]),
        children: (0, l.jsx)(s.A, { character: t, size: u[n], className: o.character }),
    });
}
