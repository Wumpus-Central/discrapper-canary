n.d(t, { Z: () => d });
var i = n(200651),
    s = n(481060),
    r = n(410030),
    l = n(583901),
    a = n(318870),
    o = n(981631),
    c = n(107101);
function d(e) {
    let { selected: t, onSelect: n } = e,
        d = (0, r.ZP)();
    return (0, i.jsxs)('div', {
        className: c.picker,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                children: 'Preselected Gradient'
            }),
            (0, i.jsx)('div', {
                className: c.themes,
                children: a.vs.map((e) => {
                    let s = d !== o.BRd.LIGHT ? e.darkBackground : e.lightBackground,
                        r = t === e.name;
                    return (0, i.jsx)(
                        l.S4,
                        {
                            onSelect: () => n(e),
                            style: { background: s },
                            name: e.name,
                            isSelected: r
                        },
                        e.name
                    );
                })
            })
        ]
    });
}
