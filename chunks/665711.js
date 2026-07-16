n.d(t, { W: () => s });
var l = n(627968),
    r = n(64700),
    a = n(486020),
    i = n(236536);
function s(e) {
    let { application: t, iconSize: n = 20 } = e,
        s = r.useMemo(() => a.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, l.jsx)("img", { className: i.I, src: s, alt: "", height: n, width: n });
}
