n.d(t, { A: () => c });
var a = n(627968),
    s = n(397927),
    i = n(736653),
    l = n(653523),
    r = n(270704),
    o = n(652215),
    d = n(566305);
function c(e) {
    let { selected: t, onSelect: n } = e,
        c = (0, i.Ay)();
    return (0, a.jsxs)("div", {
        className: d.N,
        children: [
            (0, a.jsx)(s.Text, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, a.jsx)("div", {
                className: d.Z,
                children: r.Z6.map((e) => {
                    let s = c !== o.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, a.jsx)(
                        l.S4,
                        { onSelect: () => n(e), style: { background: s }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
