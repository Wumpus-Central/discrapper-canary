i.d(n, { W: () => r });
var a = i(477900),
    e = i(582128),
    l = i(486020),
    o = i(264837);
function r(t) {
    let { application: n, iconSize: i = 20 } = t,
        r = e.useMemo(() => l.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: i }), [n, i]);
    return (0, a.jsx)("img", { className: o.I, src: r, alt: "", height: i, width: i });
}
