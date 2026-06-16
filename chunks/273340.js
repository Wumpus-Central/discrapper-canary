l.d(t, { A: () => s });
var r = l(627968),
    n = l(217109),
    a = l(682124);
let s = (e) => {
    let { children: t, columns: l = 1, rows: s = 1 } = e,
        i = Math.max(1, Math.min(n.Mm, Math.floor(l))),
        c = Math.max(1, Math.min(n.Mm, Math.floor(s))),
        d = a[`gridItemColumns${i}`],
        o = a[`gridItemRows${c}`];
    return (0, r.jsx)("div", { className: `${a.gridItem} ${d} ${o}`, children: t });
};
