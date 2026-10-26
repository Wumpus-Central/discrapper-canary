n.d(t, { A: () => u });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(627369),
    o = n(343053),
    c = n(610771);
function u(e) {
    let { character: t, size: n, className: a, style: u, children: d } = e,
        m = r.useMemo(() => {
            let e = (0, s.j)(t);
            return {
                "--custom-checkpoint-card-primary": e.primaryBackgroundColor,
                "--custom-checkpoint-card-secondary": e.secondaryBackgroundColor,
                "--custom-checkpoint-card-tertiary": e.tertiaryBackgroundColor,
                ...u,
            };
        }, [t, u]),
        h = r.useMemo(() => ({ size: n }), [n]);
    return (0, l.jsx)(o.I.Provider, {
        value: h,
        children: (0, l.jsx)("div", { className: i()(c.container, c[n], a), style: m, children: d }),
    });
}
