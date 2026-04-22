n.d(e, { default: () => f });
var i = n(627968),
    l = n(64700),
    a = n(189213),
    s = n(27192),
    r = n(691885),
    o = n(834730),
    d = n(975807),
    c = n(493540),
    u = n(980406),
    m = n(130771),
    p = n(652215),
    h = n(269927),
    g = n(985018),
    x = n(979277);
function E(t) {
    let { selectedTeamId: e, onSetSelectedTeamId: n, teamOptions: l } = t;
    return (0, i.jsx)("div", {
        className: x.d,
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
function f(t) {
    let { guildId: e, requireTeamSetup: n, onClose: r, transitionState: x } = t,
        [f, j] = l.useState(),
        [v, C] = l.useState(!1),
        { teams: b } = (0, m.A)(),
        S = b.filter((t) => t.payout_account_status === h.y.ACTIVE),
        y = l.useMemo(() => S.map((t) => ({ label: t.name, value: t.id })), [S]),
        _ = () => {
            C((t) => !t);
        },
        k = () => {
            r(), (0, c.im)(e, f);
        },
        A = l.useCallback(() => {
            (0, d.A)(p.X7G.DEVELOPER_PORTAL_TEAMS);
        }, []);
    if (!n)
        return (0, i.jsx)(a.Modal, {
            title: g.intl.string(g.t.GfObDE),
            actions: [{ variant: "primary", text: g.intl.string(g.t.geKm7t), onClick: k, disabled: !v }],
            onClose: r,
            transitionState: x,
            size: "md",
            children: (0, i.jsx)(s.Kj, {
                onChange: _,
                size: 20,
                type: s.Or.INVERTED,
                value: v,
                children: (0, i.jsx)(o.E, { variant: "text-md/normal", color: "text-default", children: (0, u.r)() }),
            }),
        });
    {
        let t = 0 === y.length;
        return (0, i.jsxs)(a.Modal, {
            title: g.intl.string(g.t.inJKQv),
            subtitle: t ? g.intl.format(g.t.Jyy4pV, {}) : g.intl.string(g.t.U1Vz24),
            actions: [
                {
                    variant: "primary",
                    text: t ? g.intl.string(g.t.JddVgE) : g.intl.string(g.t.geKm7t),
                    onClick: t ? A : k,
                },
            ],
            onClose: r,
            transitionState: x,
            size: "md",
            children: [
                !t && (0, i.jsx)(E, { selectedTeamId: f, onSetSelectedTeamId: j, teamOptions: y }),
                (0, i.jsx)(s.Kj, {
                    onChange: _,
                    size: 20,
                    type: s.Or.INVERTED,
                    value: v,
                    children: (0, i.jsx)(o.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: (0, u.r)(),
                    }),
                }),
            ],
        });
    }
}
