var e = i(477900),
    l = i(582128),
    a = i(486020),
    o = i(264837);
i.d(
    n,
    {},
    {
        W: function (t) {
            let { application: n, iconSize: i = 20 } = t,
                r = l.useMemo(() => a.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: i }), [n, i]);
            return (0, e.jsx)("img", { className: o.I, src: r, alt: "", height: i, width: i });
        },
    },
);
