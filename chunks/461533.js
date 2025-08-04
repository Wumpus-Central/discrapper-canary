(n.d(e, { default: () => d }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(82659),
    c = n(481060),
    o = n(369994),
    a = n(781208),
    s = n(388032),
    u = n(122238);
function d(t) {
    let { guildId: e, transitionState: n, onClose: d } = t,
        [_, b] = i.useState([]),
        S = i.useCallback(() => {
            ((0, o.KK)(e, _), (0, o.C4)(e), d());
        }, [e, d, _]),
        p = i.useCallback(
            (t) => () => {
                b((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
            },
            []
        ),
        f = i.useCallback(() => {
            open(a.RI);
        }, []);
    return (0, r.jsx)(l.Modal, {
        transitionState: n,
        title: s.intl.string(s.t.uYPGsb),
        subtitle: s.intl.format(s.t.Hg8Ee3, { onClick: f }),
        actions: [
            {
                text: s.intl.string(s.t['ETE/oK']),
                onClick: d,
                variant: 'secondary'
            },
            {
                text: s.intl.string(s.t.geKm7u),
                onClick: S
            }
        ],
        onClose: d,
        children: (0, r.jsx)(c.Kqy, {
            gap: 8,
            className: u.mainCheckboxContainer,
            children: a.Ud.map((t) =>
                (0, r.jsxs)(
                    c.P3F,
                    {
                        className: u.checkboxContainer,
                        onClick: p(t),
                        children: [
                            (0, r.jsx)(c.XZJ, {
                                type: c.XZJ.Types.INVERTED,
                                className: u.checkbox,
                                value: _.includes(t),
                                displayOnly: !0
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: (0, a.$l)(t)
                            })
                        ]
                    },
                    t
                )
            )
        })
    });
}
