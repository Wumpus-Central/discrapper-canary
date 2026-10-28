n.d(t, { A: () => u });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(627369),
    c = n(343053),
    o = n(610771);
function u(e) {
    let { cardColorPalette: t, size: n, className: a, style: u, children: d } = e,
        m = r.useMemo(() => {
            let e = (0, i.j)(t);
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...u,
            };
        }, [t, u]),
        h = r.useMemo(() => ({ size: n }), [n]);
    return (0, l.jsx)(c.I.Provider, {
        value: h,
        children: (0, l.jsx)("div", { className: s()(o.container, o[n], a), style: m, children: d }),
    });
}
