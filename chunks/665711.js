l.d(t, { W: () => i });
var s = l(627968),
    n = l(64700),
    a = l(486020),
    r = l(236536);
let i = (e) => {
    let { application: t, iconSize: l = 20 } = e,
        i = n.useMemo(() => a.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: l }), [t, l]);
    return (0, s.jsx)("img", { className: r.I, src: i, alt: "", height: l, width: l });
};
