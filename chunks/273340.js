n.d(t, { A: () => s });
var r = n(477900),
    l = n(217109),
    a = n(15447);
let s = function (e) {
    let { children: t, columns: n = 1, rows: s = 1 } = e,
        i = Math.max(1, Math.min(l.Mm, Math.floor(n))),
        c = Math.max(1, Math.min(l.Mm, Math.floor(s))),
        o = a[`gridItemColumns${i}`],
        u = a[`gridItemRows${c}`];
    return (0, r.jsx)("div", { className: `${a.gridItem} ${o} ${u}`, children: t });
};
