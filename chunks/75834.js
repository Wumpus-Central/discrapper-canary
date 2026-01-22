n.d(e, { default: () => f }), n(896048);
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
    h = n(269927),
    p = n(985018),
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
                    return {
                        id: e,
                        label: n,
                        value: e,
                    };
                },
                placeholder: p.intl.string(p.t.QXf93A),
                value: e,
                onSelectionChange: n,
                label: p.intl.string(p.t.QXf93A),
                hideLabel: !0,
            }),
    });
}
function f(t) {
    let { guildId: e, requireTeamSetup: n, onClose: x, transitionState: f } = t,
        [j, v] = l.useState(),
        [C, E] = l.useState(!1),
        { teams: b } = (0, u.A)(),
        T = b.filter((t) => t.payout_account_status === h.y.ACTIVE),
        y = l.useMemo(
            () =>
                T.map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [T],
        ),
        S = () => {
            E((t) => !t);
        },
        k = () => {
            x(), (0, d.im)(e, j);
        },
        A = l.useCallback(() => {
            (0, o.A)(m.X7G.DEVELOPER_PORTAL_TEAMS);
        }, []);
    if (!n)
        return (0, i.jsx)(a.Modal, {
            title: p.intl.string(p.t.GfObDE),
            actions: [
                {
                    variant: "primary",
                    text: p.intl.string(p.t.geKm7t),
                    onClick: k,
                    disabled: !C,
                },
            ],
            onClose: x,
            transitionState: f,
            size: "md",
            children: (0, i.jsx)(s.Kj, {
                onChange: S,
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
        let t = 0 === y.length;
        return (0, i.jsxs)(a.Modal, {
            title: p.intl.string(p.t.inJKQv),
            subtitle: t ? p.intl.format(p.t.Jyy4pV, {}) : p.intl.string(p.t.U1Vz24),
            actions: [
                {
                    variant: "primary",
                    text: t ? p.intl.string(p.t.JddVgE) : p.intl.string(p.t.geKm7t),
                    onClick: t ? A : k,
                },
            ],
            onClose: x,
            transitionState: f,
            size: "md",
            children: [
                !t &&
                    (0, i.jsx)(g, {
                        selectedTeamId: j,
                        onSetSelectedTeamId: v,
                        teamOptions: y,
                    }),
                (0, i.jsx)(s.Kj, {
                    onChange: S,
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
