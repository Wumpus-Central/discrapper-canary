n.d(e, { default: () => f });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    s = n(421380),
    r = n(397927),
    o = n(975807),
    d = n(493540),
    c = n(980406),
    u = n(130771),
    m = n(652215),
    p = n(269927),
    h = n(985018),
    x = n(976164);
function g(t) {
    let { selectedTeamId: e, onSetSelectedTeamId: n, teamOptions: l } = t;
    return (0, i.jsx)("div", {
        className: x.d,
        children:
            0 !== l.length &&
            (0, i.jsx)(r.l6P, {
                selectionMode: "single",
                options: l,
                formatOption: (t) => {
                    let { value: e, label: n } = t;
                    return { id: e, label: n, value: e };
                },
                placeholder: h.intl.string(h.t.QXf93A),
                value: e,
                onSelectionChange: n,
                label: h.intl.string(h.t.QXf93A),
                hideLabel: !0,
            }),
    });
}
function f(t) {
    let { guildId: e, requireTeamSetup: n, onClose: x, transitionState: f } = t,
        [j, v] = l.useState(),
        [C, E] = l.useState(!1),
        { teams: b } = (0, u.A)(),
        S = b.filter((t) => t.payout_account_status === p.y.ACTIVE),
        T = l.useMemo(() => S.map((t) => ({ label: t.name, value: t.id })), [S]),
        y = () => {
            E((t) => !t);
        },
        _ = () => {
            x(), (0, d.im)(e, j);
        },
        k = l.useCallback(() => {
            (0, o.A)(m.X7G.DEVELOPER_PORTAL_TEAMS);
        }, []);
    if (!n)
        return (0, i.jsx)(a.Modal, {
            title: h.intl.string(h.t.GfObDE),
            actions: [{ variant: "primary", text: h.intl.string(h.t.geKm7t), onClick: _, disabled: !C }],
            onClose: x,
            transitionState: f,
            size: "md",
            children: (0, i.jsx)(s.Kj, {
                onChange: y,
                size: 20,
                type: s.Xo.INVERTED,
                value: C,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: (0, c.r)(),
                }),
            }),
        });
    {
        let t = 0 === T.length;
        return (0, i.jsxs)(a.Modal, {
            title: h.intl.string(h.t.inJKQv),
            subtitle: t ? h.intl.format(h.t.Jyy4pV, {}) : h.intl.string(h.t.U1Vz24),
            actions: [
                {
                    variant: "primary",
                    text: t ? h.intl.string(h.t.JddVgE) : h.intl.string(h.t.geKm7t),
                    onClick: t ? k : _,
                },
            ],
            onClose: x,
            transitionState: f,
            size: "md",
            children: [
                !t && (0, i.jsx)(g, { selectedTeamId: j, onSetSelectedTeamId: v, teamOptions: T }),
                (0, i.jsx)(s.Kj, {
                    onChange: y,
                    size: 20,
                    type: s.Xo.INVERTED,
                    value: C,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: (0, c.r)(),
                    }),
                }),
            ],
        });
    }
}
