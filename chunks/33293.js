n.d(t, { A: () => d });
var r = n(477900),
    a = n(503698),
    s = n.n(a),
    l = n(259204),
    i = n(343053),
    c = n(48763),
    o = n(955671);
let u = { [c.W.SM]: 224, [c.W.LG]: 448 };
function d(e) {
    let { character: t } = e,
        { size: n } = (0, i.Z)();
    return (0, r.jsx)("div", {
        className: s()(o.characterColumn, o[n]),
        children: (0, r.jsx)(l.A, { character: t, size: u[n], className: o.character }),
    });
}
