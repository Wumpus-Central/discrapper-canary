n.d(e, { default: () => x }), n(388685);
var i = n(951288),
    a = n(647438),
    s = n(82659),
    l = n(481060),
    r = n(782568),
    o = n(53365),
    d = n(377176),
    c = n(577275),
    u = n(981631),
    p = n(829857),
    m = n(388032),
    h = n(170538);
function g(t) {
    let { selectedTeamId: e, onSetSelectedTeamId: n, teamOptions: a } = t;
    return (0, i.jsx)("div", {
        className: h.teamSetup,
        children:
            0 !== a.length &&
            (0, i.jsx)(l.q4e, {
                options: a,
                placeholder: m.intl.string(m.t.QXf93N),
                value: e,
                onChange: n,
                "aria-label": m.intl.string(m.t.QXf93N),
            }),
    });
}
function x(t) {
    let { guildId: e, requireTeamSetup: n, onClose: h, transitionState: x } = t,
        [f, C] = a.useState(),
        [y, T] = a.useState(!1),
        { teams: v } = (0, c.Z)(),
        E = v.filter((t) => t.payout_account_status === p.C.ACTIVE),
        S = a.useMemo(
            () =>
                E.map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [E],
        ),
        j = () => {
            T((t) => !t);
        },
        b = () => {
            h(), (0, o.df)(e, f);
        },
        k = a.useCallback(() => {
            (0, r.Z)(u.EYA.DEVELOPER_PORTAL_TEAMS);
        }, []);
    if (!n)
        return (0, i.jsx)(s.Modal, {
            title: m.intl.string(m.t.GfObDA),
            actions: [
                {
                    variant: "primary",
                    text: m.intl.string(m.t.geKm7u),
                    onClick: b,
                    disabled: !y,
                },
            ],
            onClose: h,
            transitionState: x,
            size: "md",
            children: (0, i.jsx)(l.XZJ, {
                onChange: j,
                size: 20,
                type: l.XZJ.Types.INVERTED,
                value: y,
                children: (0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0, d.f)(),
                }),
            }),
        });
    {
        let t = 0 === S.length;
        return (0, i.jsxs)(s.Modal, {
            title: m.intl.string(m.t.inJKQk),
            subtitle: t ? m.intl.format(m.t.Jyy4pa, {}) : m.intl.string(m.t.U1Vz29),
            actions: [
                {
                    variant: "primary",
                    text: t ? m.intl.string(m.t.JddVgI) : m.intl.string(m.t.geKm7u),
                    onClick: t ? k : b,
                },
            ],
            onClose: h,
            transitionState: x,
            size: "md",
            children: [
                !t &&
                    (0, i.jsx)(g, {
                        selectedTeamId: f,
                        onSetSelectedTeamId: C,
                        teamOptions: S,
                    }),
                (0, i.jsx)(l.XZJ, {
                    onChange: j,
                    size: 20,
                    type: l.XZJ.Types.INVERTED,
                    value: y,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: (0, d.f)(),
                    }),
                }),
            ],
        });
    }
}
