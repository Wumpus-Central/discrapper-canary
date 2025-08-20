n.d(t, { Z: () => u });
var r = n(951288),
    i = n(481060),
    a = n(410030),
    o = n(583901),
    s = n(780771),
    l = n(981631),
    c = n(407304);
function u(e) {
    let { selected: t, onSelect: n } = e,
        u = (0, a.ZP)();
    return (0, r.jsxs)("div", {
        className: c.picker,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                children: "Preselected Gradient",
            }),
            (0, r.jsx)("div", {
                className: c.themes,
                children: s.vs.map((e) => {
                    let i = u !== l.BRd.LIGHT ? e.darkBackground : e.lightBackground,
                        a = t === e.name;
                    return (0, r.jsx)(
                        o.S4,
                        {
                            onSelect: () => n(e),
                            style: { background: i },
                            name: e.name,
                            isSelected: a,
                        },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
