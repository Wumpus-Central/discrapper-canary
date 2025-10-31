n.d(t, { Z: () => d });
var a = n(951288),
    i = n(481060),
    l = n(410030),
    r = n(583901),
    s = n(780771),
    o = n(981631),
    c = n(407304);
function d(e) {
    let { selected: t, onSelect: n } = e,
        d = (0, l.ZP)();
    return (0, a.jsxs)("div", {
        className: c.picker,
        children: [
            (0, a.jsx)(i.Text, {
                variant: "text-sm/semibold",
                children: "Preselected Gradient",
            }),
            (0, a.jsx)("div", {
                className: c.themes,
                children: s.vs.map((e) => {
                    let i = d !== o.BRd.LIGHT ? e.darkBackground : e.lightBackground,
                        l = t === e.name;
                    return (0, a.jsx)(
                        r.S4,
                        {
                            onSelect: () => n(e),
                            style: { background: i },
                            name: e.name,
                            isSelected: l,
                        },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
