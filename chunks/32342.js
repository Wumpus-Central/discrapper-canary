n.d(e, { default: () => f }), n(388685);
var i = n(951288),
    a = n(647438),
    l = n(82659),
    s = n(755721),
    r = n(481060),
    o = n(782568),
    d = n(53365),
    c = n(377176),
    u = n(577275),
    m = n(981631),
    p = n(829857),
    h = n(388032),
    g = n(170538);
function x(t) {
    let { selectedTeamId: e, onSetSelectedTeamId: n, teamOptions: a } = t;
    return (0, i.jsx)("div", {
        className: g.teamSetup,
        children:
            0 !== a.length &&
            (0, i.jsx)(r.q4e, {
                options: a,
                placeholder: h.intl.string(h.t.QXf93N),
                value: e,
                onChange: n,
                "aria-label": h.intl.string(h.t.QXf93N),
            }),
    });
}
function f(t) {
    let { guildId: e, requireTeamSetup: n, onClose: g, transitionState: f } = t,
        [C, v] = a.useState(),
        [E, S] = a.useState(!1),
        { teams: j } = (0, u.Z)(),
        y = j.filter((t) => t.payout_account_status === p.C.ACTIVE),
        T = a.useMemo(
            () =>
                y.map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [y],
        ),
        b = () => {
            S((t) => !t);
        },
        k = () => {
            g(), (0, d.df)(e, C);
        },
        _ = a.useCallback(() => {
            (0, o.Z)(m.EYA.DEVELOPER_PORTAL_TEAMS);
        }, []);
    if (!n)
        return (0, i.jsx)(l.Modal, {
            title: h.intl.string(h.t.GfObDA),
            actions: [
                {
                    variant: "primary",
                    text: h.intl.string(h.t.geKm7u),
                    onClick: k,
                    disabled: !E,
                },
            ],
            onClose: g,
            transitionState: f,
            size: "md",
            children: (0, i.jsx)(s.$q, {
                onChange: b,
                size: 20,
                type: s.M0.INVERTED,
                value: E,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0, c.f)(),
                }),
            }),
        });
    {
        let t = 0 === T.length;
        return (0, i.jsxs)(l.Modal, {
            title: h.intl.string(h.t.inJKQk),
            subtitle: t ? h.intl.format(h.t.Jyy4pa, {}) : h.intl.string(h.t.U1Vz29),
            actions: [
                {
                    variant: "primary",
                    text: t ? h.intl.string(h.t.JddVgI) : h.intl.string(h.t.geKm7u),
                    onClick: t ? _ : k,
                },
            ],
            onClose: g,
            transitionState: f,
            size: "md",
            children: [
                !t &&
                    (0, i.jsx)(x, {
                        selectedTeamId: C,
                        onSetSelectedTeamId: v,
                        teamOptions: T,
                    }),
                (0, i.jsx)(s.$q, {
                    onChange: b,
                    size: 20,
                    type: s.M0.INVERTED,
                    value: E,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: (0, c.f)(),
                    }),
                }),
            ],
        });
    }
}
