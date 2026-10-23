n.d(t, { A: () => d });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(627369),
    o = n(343053),
    c = n(610771);
function d(e) {
    let { character: t, size: n, className: r, style: d, children: u } = e,
        m = a.useMemo(() => {
            let e = (0, i.j)(t);
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...d,
            };
        }, [t, d]),
        p = a.useMemo(() => ({ size: n }), [n]);
    return (0, l.jsx)(o.I.Provider, {
        value: p,
        children: (0, l.jsx)("div", { className: s()(c.container, c[n], r), style: m, children: u }),
    });
}
