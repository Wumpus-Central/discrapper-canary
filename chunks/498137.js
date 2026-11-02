a.d(t, { A: () => o });
var r = a(477900),
    s = a(582128),
    i = a(503698),
    c = a.n(i),
    n = a(627369),
    d = a(343053),
    l = a(610771);
function o(e) {
    let { cardColorPalette: t, size: a, className: i, style: o, children: u } = e,
        h = s.useMemo(() => {
            let e = (0, n.j)(t);
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...o,
            };
        }, [t, o]),
        f = s.useMemo(() => ({ size: a }), [a]);
    return (0, r.jsx)(d.I.Provider, {
        value: f,
        children: (0, r.jsx)("div", { className: c()(l.container, l[a], i), style: h, children: u }),
    });
}
