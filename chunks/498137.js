a.d(t, { A: () => o });
var s = a(477900),
    i = a(582128),
    r = a(503698),
    n = a.n(r),
    c = a(627369),
    d = a(343053),
    l = a(610771);
function o(e) {
    let { cardColorPalette: t, size: a, className: r, style: o, children: u } = e,
        h = i.useMemo(() => {
            let e = (0, c.j)(t);
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...o,
            };
        }, [t, o]),
        f = i.useMemo(() => ({ size: a }), [a]);
    return (0, s.jsx)(d.I.Provider, {
        value: f,
        children: (0, s.jsx)("div", { className: n()(l.container, l[a], r), style: h, children: u }),
    });
}
