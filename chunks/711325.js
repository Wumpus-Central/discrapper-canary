n.d(t, { Z: () => d });
var i = n(200651),
    r = n(481060),
    s = n(410030),
    l = n(583901),
    a = n(780771),
    o = n(981631),
    c = n(572147);
function d(e) {
    let { selected: t, onSelect: n } = e,
        d = (0, s.ZP)();
    return (0, i.jsxs)('div', {
        className: c.picker,
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/semibold',
                children: 'Preselected Gradient'
            }),
            (0, i.jsx)('div', {
                className: c.themes,
                children: a.vs.map((e) => {
                    let r = d !== o.BRd.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, i.jsx)(
                        l.S4,
                        {
                            onSelect: () => n(e),
                            style: { background: r },
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
