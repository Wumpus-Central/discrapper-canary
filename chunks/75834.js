var i = n(477900),
    l = n(582128),
    a = n(189213),
    s = n(27192),
    r = n(691885),
    o = n(834730),
    d = n(975807),
    c = n(493540),
    u = n(980406),
    m = n(130771),
    h = n(652215),
    p = n(269927),
    g = n(792996),
    f = n(753049);
function x(t) {
    let { selectedTeamId: e, onSetSelectedTeamId: n, teamOptions: l } = t;
    return (0, i.jsx)("div", {
        className: f.d,
        children:
            0 !== l.length &&
            (0, i.jsx)(r.l, {
                selectionMode: "single",
                options: l,
                formatOption: (t) => {
                    let { value: e, label: n } = t;
                    return { id: e, label: n, value: e };
                },
                placeholder: g.intl.string(g.t.QXf93A),
                value: e,
                onSelectionChange: n,
                label: g.intl.string(g.t.QXf93A),
                hideLabel: !0,
            }),
    });
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, requireTeamSetup: n, onClose: r, transitionState: f } = t,
                [E, b] = l.useState(),
                [j, v] = l.useState(!1),
                { teams: C } = (0, m.A)(),
                y = C.filter((t) => t.payout_account_status === p.y.ACTIVE),
                S = l.useMemo(() => y.map((t) => ({ label: t.name, value: t.id })), [y]);
            function k() {
                v((t) => !t);
            }
            function A() {
                (r(), (0, c.im)(e, E));
            }
            let O = l.useCallback(() => {
                (0, d.A)(h.X7G.DEVELOPER_PORTAL_TEAMS);
            }, []);
            if (!n)
                return (0, i.jsx)(a.a, {
                    title: g.intl.string(g.t.GfObDE),
                    actions: [{ variant: "primary", text: g.intl.string(g.t.geKm7t), onClick: A, disabled: !j }],
                    onClose: r,
                    transitionState: f,
                    size: "md",
                    children: (0, i.jsx)(s.Kj, {
                        onChange: k,
                        size: 20,
                        type: s.Or.INVERTED,
                        value: j,
                        children: (0, i.jsx)(o.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            children: (0, u.r)(),
                        }),
                    }),
                });
            {
                let t = 0 === S.length;
                return (0, i.jsxs)(a.a, {
                    title: g.intl.string(g.t.inJKQv),
                    subtitle: t ? g.intl.format(g.t.Jyy4pV, {}) : g.intl.string(g.t.U1Vz24),
                    actions: [
                        {
                            variant: "primary",
                            text: t ? g.intl.string(g.t.JddVgE) : g.intl.string(g.t.geKm7t),
                            onClick: t ? O : A,
                        },
                    ],
                    onClose: r,
                    transitionState: f,
                    size: "md",
                    children: [
                        !t && (0, i.jsx)(x, { selectedTeamId: E, onSetSelectedTeamId: b, teamOptions: S }),
                        (0, i.jsx)(s.Kj, {
                            onChange: k,
                            size: 20,
                            type: s.Or.INVERTED,
                            value: j,
                            children: (0, i.jsx)(o.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: (0, u.r)(),
                            }),
                        }),
                    ],
                });
            }
        },
    },
);
