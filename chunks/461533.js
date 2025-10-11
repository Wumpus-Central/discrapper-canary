n.d(e, { default: () => s }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(793030),
    u = n(709867),
    o = n(369994),
    c = n(781208),
    a = n(388032);
function s(t) {
    let { guildId: e, transitionState: n, onClose: s } = t,
        [d, S] = l.useState([]),
        _ = l.useCallback(() => {
            (0, o.KK)(e, d), (0, o.C4)(e), s();
        }, [e, s, d]),
        p = l.useCallback((t) => {
            S(t);
        }, []),
        I = l.useCallback(() => {
            open(c.RI);
        }, []),
        O = l.useMemo(
            () =>
                c.Ud.map((t) => ({
                    label: String((0, c.$l)(t)),
                    value: t,
                })),
            [],
        );
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        title: a.intl.string(a.t.uYPGsb),
        subtitle: a.intl.format(a.t.Hg8Ee3, { onClick: I }),
        actions: [
            {
                text: a.intl.string(a.t["ETE/oK"]),
                onClick: s,
                variant: "secondary",
            },
            {
                text: a.intl.string(a.t.geKm7u),
                onClick: _,
            },
        ],
        onClose: s,
        children: (0, r.jsx)(u.c, {
            selectedValues: d,
            onChange: p,
            options: O,
        }),
    });
}
