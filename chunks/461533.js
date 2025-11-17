n.d(e, { default: () => c }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(793030),
    u = n(481060),
    a = n(369994),
    s = n(781208),
    o = n(388032);
function c(t) {
    let { guildId: e, transitionState: n, onClose: c } = t,
        [d, S] = l.useState([]),
        _ = l.useCallback(() => {
            (0, a.KK)(e, d), (0, a.C4)(e), c();
        }, [e, c, d]),
        O = l.useCallback((t) => {
            S(t);
        }, []),
        p = l.useCallback(() => {
            open(s.RI);
        }, []),
        I = l.useMemo(
            () =>
                s.Ud.map((t) => ({
                    label: String((0, s.$l)(t)),
                    value: t,
                })),
            [],
        );
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
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
        children: (0, r.jsx)(u.cOn, {
            selectedValues: d,
            onChange: O,
            options: I,
        }),
    });
}
