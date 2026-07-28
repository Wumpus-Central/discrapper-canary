s.d(a, { W: () => d });
var t = s(477900),
    e = s(582128),
    c = s(486020),
    p = s(51792);
function d(i) {
    let { application: a, iconSize: s = 20 } = i,
        d = e.useMemo(() => c.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: s }), [a, s]);
    return (0, t.jsx)("img", { className: p.I, src: d, alt: "", height: s, width: s });
}
