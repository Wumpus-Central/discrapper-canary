n.d(t, { A: () => i });
var r = n(477900),
    l = n(217109),
    a = n(15447);
let i = function (e) {
    let { children: t, columns: n = 1, rows: i = 1 } = e,
        s = Math.max(1, Math.min(l.Mm, Math.floor(n))),
        c = Math.max(1, Math.min(l.Mm, Math.floor(i))),
        o = a[`gridItemColumns${s}`],
        u = a[`gridItemRows${c}`];
    return (0, r.jsx)("div", { className: `${a.gridItem} ${o} ${u}`, children: t });
};
