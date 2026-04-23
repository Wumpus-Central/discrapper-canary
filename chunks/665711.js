n.d(t, { W: () => l });
var r = n(627968),
    a = n(64700),
    i = n(486020),
    o = n(236536);
let l = (e) => {
    let { application: t, iconSize: n = 20 } = e,
        l = a.useMemo(() => i.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, r.jsx)("img", { className: o.I, src: l, alt: "", height: n, width: n });
};
