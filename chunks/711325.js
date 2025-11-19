n.d(t, { Z: () => d });
var a = n(54381),
    l = n(481060),
    i = n(410030),
    r = n(583901),
    s = n(780771),
    o = n(981631),
    c = n(407304);
function d(e) {
    let { selected: t, onSelect: n } = e,
        d = (0, i.ZP)();
    return (0, a.jsxs)("div", {
        className: c.picker,
        children: [
            (0, a.jsx)(l.Text, {
                variant: "text-sm/semibold",
                children: "Preselected Gradient",
            }),
            (0, a.jsx)("div", {
                className: c.themes,
                children: s.vs.map((e) => {
                    let l = d !== o.BRd.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, a.jsx)(
                        r.S4,
                        {
                            onSelect: () => n(e),
                            style: { background: l },
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
