n.d(t, { A: () => u });
var r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    i = n(627369),
    c = n(343053),
    o = n(610771);
function u(e) {
    let { cardColorPalette: t, size: n, className: s, style: u, children: d } = e,
        m = a.useMemo(() => {
            let e = (0, i.j)(t);
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...u,
            };
        }, [t, u]),
        h = a.useMemo(() => ({ size: n }), [n]);
    return (0, r.jsx)(c.I.Provider, {
        value: h,
        children: (0, r.jsx)("div", { className: l()(o.container, o[n], s), style: m, children: d }),
    });
}
