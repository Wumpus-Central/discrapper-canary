n.d(t, { Z: () => d });
var r = n(200651),
    i = n(481060),
    s = n(410030),
    a = n(583901),
    l = n(780771),
    o = n(981631),
    c = n(572147);
function d(e) {
    let { selected: t, onSelect: n } = e,
        d = (0, s.ZP)();
    return (0, r.jsxs)('div', {
        className: c.picker,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/semibold',
                children: 'Preselected Gradient'
            }),
            (0, r.jsx)('div', {
                className: c.themes,
                children: l.vs.map((e) => {
                    let i = d !== o.BRd.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        a.S4,
                        {
                            onSelect: () => n(e),
                            style: { background: i },
                            name: e.name,
                            isSelected: s
                        },
                        e.name
                    );
                })
            })
        ]
    });
}
