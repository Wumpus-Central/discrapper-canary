n.d(t, { Z: () => d });
var a = n(951288),
    r = n(481060),
    i = n(410030),
    l = n(583901),
    o = n(780771),
    s = n(981631),
    c = n(407304);
function d(e) {
    let { selected: t, onSelect: n } = e,
        d = (0, i.ZP)();
    return (0, a.jsxs)("div", {
        className: c.picker,
        children: [
            (0, a.jsx)(r.Text, {
                variant: "text-sm/semibold",
                children: "Preselected Gradient",
            }),
            (0, a.jsx)("div", {
                className: c.themes,
                children: o.vs.map((e) => {
                    let r = d !== s.BRd.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, a.jsx)(
                        l.S4,
                        {
                            onSelect: () => n(e),
                            style: { background: r },
                            name: e.name,
                            isSelected: i,
                        },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
