n.d(e, { default: () => o });
var l = n(627968),
    r = n(64700),
    i = n(158954),
    u = n(397927),
    s = n(554113),
    a = n(141524),
    d = n(985018);
function o(t) {
    let { guildId: e, transitionState: n, onClose: o } = t,
        [S, c] = r.useState([]),
        _ = r.useCallback(() => {
            (0, s.G1)(e, S), (0, s.B)(e), o();
        }, [e, o, S]),
        A = r.useCallback((t) => {
            c(t);
        }, []),
        I = r.useCallback(() => {
            open(a.k6);
        }, []),
        E = r.useMemo(() => a.zB.map((t) => ({ label: String((0, a.D$)(t)), value: t })), []);
    return (0, l.jsx)(i.Modal, {
        transitionState: n,
        title: d.intl.string(d.t.uYPGsS),
        subtitle: d.intl.format(d.t.Hg8Ee7, { onClick: I }),
        actions: [
            { text: d.intl.string(d.t["ETE/oC"]), onClick: o, variant: "secondary" },
            { text: d.intl.string(d.t.geKm7t), onClick: _ },
        ],
        onClose: o,
        children: (0, l.jsx)(u.$QX, { selectedValues: S, onChange: A, options: E }),
    });
}
