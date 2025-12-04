n.d(e, { default: () => C }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    s = n(199849),
    r = n(755721),
    o = n(481060),
    d = n(782568),
    c = n(53365),
    u = n(377176),
    m = n(577275),
    p = n(981631),
    h = n(829857),
    x = n(388032),
    f = n(170538);
function g(t) {
    let { selectedTeamId: e, onSetSelectedTeamId: n, teamOptions: a } = t;
    return (0, i.jsx)("div", {
        className: f.teamSetup,
        children:
            0 !== a.length &&
            (0, i.jsx)(s.y6, {
                options: a,
                placeholder: x.intl.string(x.t.QXf93A),
                value: e,
                onChange: n,
                "aria-label": x.intl.string(x.t.QXf93A),
            }),
    });
}
function C(t) {
    let { guildId: e, requireTeamSetup: n, onClose: s, transitionState: f } = t,
        [C, E] = a.useState(),
        [v, S] = a.useState(!1),
        { teams: j } = (0, m.Z)(),
        T = j.filter((t) => t.payout_account_status === h.C.ACTIVE),
        b = a.useMemo(
            () =>
                T.map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [T],
        ),
        y = () => {
            S((t) => !t);
        },
        _ = () => {
            s(), (0, c.df)(e, C);
        },
        k = a.useCallback(() => {
            (0, d.Z)(p.EYA.DEVELOPER_PORTAL_TEAMS);
        }, []);
    if (!n)
        return (0, i.jsx)(l.Modal, {
            title: x.intl.string(x.t.GfObDE),
            actions: [
                {
                    variant: "primary",
                    text: x.intl.string(x.t.geKm7t),
                    onClick: _,
                    disabled: !v,
                },
            ],
            onClose: s,
            transitionState: f,
            size: "md",
            children: (0, i.jsx)(r.$q, {
                onChange: y,
                size: 20,
                type: r.M0.INVERTED,
                value: v,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: (0, u.f)(),
                }),
            }),
        });
    {
        let t = 0 === b.length;
        return (0, i.jsxs)(l.Modal, {
            title: x.intl.string(x.t.inJKQv),
            subtitle: t ? x.intl.format(x.t.Jyy4pV, {}) : x.intl.string(x.t.U1Vz24),
            actions: [
                {
                    variant: "primary",
                    text: t ? x.intl.string(x.t.JddVgE) : x.intl.string(x.t.geKm7t),
                    onClick: t ? k : _,
                },
            ],
            onClose: s,
            transitionState: f,
            size: "md",
            children: [
                !t &&
                    (0, i.jsx)(g, {
                        selectedTeamId: C,
                        onSetSelectedTeamId: E,
                        teamOptions: b,
                    }),
                (0, i.jsx)(r.$q, {
                    onChange: y,
                    size: 20,
                    type: r.M0.INVERTED,
                    value: v,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: (0, u.f)(),
                    }),
                }),
            ],
        });
    }
}
