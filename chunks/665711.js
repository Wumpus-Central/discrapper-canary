n.d(t, { W: () => i });
var l = n(477900),
    a = n(582128),
    r = n(486020),
    s = n(264837);
function i(e) {
    let { application: t, iconSize: n = 20 } = e,
        i = a.useMemo(() => r.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, l.jsx)("img", { className: s.I, src: i, alt: "", height: n, width: n });
}
