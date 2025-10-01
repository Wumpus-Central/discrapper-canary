n.d(e, { default: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(793030),
    c = n(755721),
    o = n(481060),
    a = n(369994),
    s = n(781208),
    u = n(388032),
    d = n(663744);
function _(t) {
    let { guildId: e, transitionState: n, onClose: _ } = t,
        [b, S] = i.useState([]),
        p = i.useCallback(() => {
            (0, a.KK)(e, b), (0, a.C4)(e), _();
        }, [e, _, b]),
        f = i.useCallback(
            (t) => () => {
                S((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
            },
            [],
        ),
        I = i.useCallback(() => {
            open(s.RI);
        }, []);
    return (0, r.jsx)(l.Modal, {
        transitionState: n,
        title: u.intl.string(u.t.uYPGsb),
        subtitle: u.intl.format(u.t.Hg8Ee3, { onClick: I }),
        actions: [
            {
                text: u.intl.string(u.t["ETE/oK"]),
                onClick: _,
                variant: "secondary",
            },
            {
                text: u.intl.string(u.t.geKm7u),
                onClick: p,
            },
        ],
        onClose: _,
        children: (0, r.jsx)(o.Kqy, {
            gap: 8,
            className: d.mainCheckboxContainer,
            children: s.Ud.map((t) =>
                (0, r.jsxs)(
                    o.P3F,
                    {
                        className: d.checkboxContainer,
                        onClick: f(t),
                        children: [
                            (0, r.jsx)(c.$q, {
                                type: c.M0.INVERTED,
                                className: d.checkbox,
                                value: b.includes(t),
                                displayOnly: !0,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: (0, s.$l)(t),
                            }),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
