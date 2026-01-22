r.d(e, { default: () => c }), r(896048);
var n = r(627968),
    l = r(64700),
    i = r(158954),
    u = r(397927),
    a = r(554113),
    s = r(141524),
    o = r(985018);
function c(t) {
    let { guildId: e, transitionState: r, onClose: c } = t,
        [d, S] = l.useState([]),
        _ = l.useCallback(() => {
            (0, a.G1)(e, d), (0, a.B)(e), c();
        }, [e, c, d]),
        O = l.useCallback((t) => {
            S(t);
        }, []),
        p = l.useCallback(() => {
            open(s.k6);
        }, []),
        E = l.useMemo(
            () =>
                s.zB.map((t) => ({
                    label: String((0, s.D$)(t)),
                    value: t,
                })),
            [],
        );
    return (0, n.jsx)(i.Modal, {
        transitionState: r,
        title: o.intl.string(o.t.uYPGsS),
        subtitle: o.intl.format(o.t.Hg8Ee7, { onClick: p }),
        actions: [
            {
                text: o.intl.string(o.t["ETE/oC"]),
                onClick: c,
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t.geKm7t),
                onClick: _,
            },
        ],
        onClose: c,
        children: (0, n.jsx)(u.$QX, {
            selectedValues: d,
            onChange: O,
            options: E,
        }),
    });
}
