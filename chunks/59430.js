l.d(t, { default: () => c });
var n = l(627968),
    a = l(64700),
    i = l(189213),
    r = l(167417),
    s = l(554113),
    u = l(141524),
    d = l(985018);
function c(e) {
    let { guildId: t, transitionState: l, onClose: c } = e,
        [o, S] = a.useState([]),
        _ = a.useCallback(() => {
            (0, s.G1)(t, o), (0, s.B)(t), c();
        }, [t, c, o]),
        I = a.useCallback((e) => {
            S(e);
        }, []),
        g = a.useCallback(() => {
            open(u.k6);
        }, []),
        A = a.useMemo(() => u.zB.map((e) => ({ label: String((0, u.D$)(e)), value: e })), []);
    return (0, n.jsx)(i.Modal, {
        transitionState: l,
        title: d.intl.string(d.t.uYPGsS),
        subtitle: d.intl.format(d.t.Hg8Ee7, { onClick: g }),
        actions: [
            { text: d.intl.string(d.t["ETE/oC"]), onClick: c, variant: "secondary" },
            { text: d.intl.string(d.t.geKm7t), onClick: _ },
        ],
        onClose: c,
        children: (0, n.jsx)(r.$, { selectedValues: o, onChange: I, options: A }),
    });
}
