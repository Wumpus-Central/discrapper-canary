n.d(t, { W: () => s });
var l = n(477900),
    r = n(582128),
    a = n(486020),
    i = n(264837);
function s(e) {
    let { application: t, iconSize: n = 20 } = e,
        s = r.useMemo(() => a.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, l.jsx)("img", { className: i.I, src: s, alt: "", height: n, width: n });
}
