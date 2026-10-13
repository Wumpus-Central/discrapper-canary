l.d(t, { W: () => i });
var n = l(477900),
    a = l(582128),
    r = l(486020),
    s = l(264837);
function i(e) {
    let { application: t, iconSize: l = 20 } = e,
        i = a.useMemo(() => r.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: l }), [t, l]);
    return (0, n.jsx)("img", { className: s.I, src: i, alt: "", height: l, width: l });
}
