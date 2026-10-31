l.d(t, { W: () => i });
var a = l(477900),
    n = l(582128),
    r = l(486020),
    s = l(264837);
function i(e) {
    let { application: t, iconSize: l = 20 } = e,
        i = n.useMemo(() => r.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: l }), [t, l]);
    return (0, a.jsx)("img", { className: s.I, src: i, alt: "", height: l, width: l });
}
