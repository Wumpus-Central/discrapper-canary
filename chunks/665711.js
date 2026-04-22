n.d(t, { W: () => s });
var a = n(627968),
    r = n(64700),
    l = n(486020),
    i = n(236536);
let s = (e) => {
    let { application: t, iconSize: n = 20 } = e,
        s = r.useMemo(() => l.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, a.jsx)("img", { className: i.I, src: s, alt: "", height: n, width: n });
};
