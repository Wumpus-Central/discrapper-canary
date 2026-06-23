n.d(e, { default: () => E });
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
    h = n(652215),
    p = n(269927),
    g = n(375708),
    x = n(979277);
function f(t) {
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
function E(t) {
    let { guildId: e, requireTeamSetup: n, onClose: r, transitionState: x } = t,
        [E, j] = l.useState(),
        [v, C] = l.useState(!1),
        { teams: b } = (0, m.A)(),
        y = b.filter((t) => t.payout_account_status === p.y.ACTIVE),
        S = l.useMemo(() => y.map((t) => ({ label: t.name, value: t.id })), [y]);
    function k() {
        C((t) => !t);
    }
    function A() {
        r(), (0, c.im)(e, E);
    }
    let O = l.useCallback(() => {
        (0, d.A)(h.X7G.DEVELOPER_PORTAL_TEAMS);
    }, []);
    if (!n)
        return (0, i.jsx)(a.Modal, {
            title: g.intl.string(g.t.GfObDE),
            actions: [{ variant: "primary", text: g.intl.string(g.t.geKm7t), onClick: A, disabled: !v }],
            onClose: r,
            transitionState: x,
            size: "md",
            children: (0, i.jsx)(s.Kj, {
                onChange: k,
                size: 20,
                type: s.Or.INVERTED,
                value: v,
                children: (0, i.jsx)(o.E, { variant: "text-md/normal", color: "text-default", children: (0, u.r)() }),
            }),
        });
    {
        let t = 0 === S.length;
        return (0, i.jsxs)(a.Modal, {
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
            transitionState: x,
            size: "md",
            children: [
                !t && (0, i.jsx)(f, { selectedTeamId: E, onSetSelectedTeamId: j, teamOptions: S }),
                (0, i.jsx)(s.Kj, {
                    onChange: k,
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
