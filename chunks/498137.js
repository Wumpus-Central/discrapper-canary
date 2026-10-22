n.d(t, { A: () => d });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(293715),
    o = n(343053),
    c = n(610771);
function d(e) {
    let { character: t, size: n, className: a, style: d, children: u } = e,
        m = r.useMemo(() => {
            let e = (0, i.j)(t);
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...d,
            };
        }, [t, d]),
        p = r.useMemo(() => ({ size: n }), [n]);
    return (0, l.jsx)(o.I.Provider, {
        value: p,
        children: (0, l.jsx)("div", { className: s()(c.container, c[n], a), style: m, children: u }),
    });
}
