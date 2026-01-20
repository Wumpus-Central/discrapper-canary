n.d(e, { default: () => g }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    s = n(755721),
    r = n(481060),
    o = n(782568),
    d = n(53365),
    c = n(377176),
    u = n(577275),
    m = n(981631),
    p = n(829857),
    h = n(388032),
    f = n(549337);
function x(t) {
    let { selectedTeamId: e, onSetSelectedTeamId: n, teamOptions: a } = t;
    return (0, i.jsx)("div", {
        className: f.teamSetup,
        children:
            0 !== a.length &&
            (0, i.jsx)(r.PhF, {
                selectionMode: "single",
                options: a,
                formatOption: (t) => {
                    let { value: e, label: n } = t;
                    return {
                        id: e,
                        label: n,
                        value: e,
                    };
                },
                placeholder: h.intl.string(h.t.QXf93A),
                value: e,
                onSelectionChange: n,
                label: h.intl.string(h.t.QXf93A),
                hideLabel: !0,
            }),
    });
}
function g(t) {
    let { guildId: e, requireTeamSetup: n, onClose: f, transitionState: g } = t,
        [C, E] = a.useState(),
        [v, S] = a.useState(!1),
        { teams: b } = (0, u.Z)(),
        j = b.filter((t) => t.payout_account_status === p.C.ACTIVE),
        T = a.useMemo(
            () =>
                j.map((t) => ({
                    label: t.name,
                    value: t.id,
                })),
            [j],
        ),
        k = () => {
            S((t) => !t);
        },
        y = () => {
            f(), (0, d.df)(e, C);
        },
        M = a.useCallback(() => {
            (0, o.Z)(m.EYA.DEVELOPER_PORTAL_TEAMS);
        }, []);
    if (!n)
        return (0, i.jsx)(l.Modal, {
            title: h.intl.string(h.t.GfObDE),
            actions: [
                {
                    variant: "primary",
                    text: h.intl.string(h.t.geKm7t),
                    onClick: y,
                    disabled: !v,
                },
            ],
            onClose: f,
            transitionState: g,
            size: "md",
            children: (0, i.jsx)(s.$q, {
                onChange: k,
                size: 20,
                type: s.M0.INVERTED,
                value: v,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: (0, c.f)(),
                }),
            }),
        });
    {
        let t = 0 === T.length;
        return (0, i.jsxs)(l.Modal, {
            title: h.intl.string(h.t.inJKQv),
            subtitle: t ? h.intl.format(h.t.Jyy4pV, {}) : h.intl.string(h.t.U1Vz24),
            actions: [
                {
                    variant: "primary",
                    text: t ? h.intl.string(h.t.JddVgE) : h.intl.string(h.t.geKm7t),
                    onClick: t ? M : y,
                },
            ],
            onClose: f,
            transitionState: g,
            size: "md",
            children: [
                !t &&
                    (0, i.jsx)(x, {
                        selectedTeamId: C,
                        onSetSelectedTeamId: E,
                        teamOptions: T,
                    }),
                (0, i.jsx)(s.$q, {
                    onChange: k,
                    size: 20,
                    type: s.M0.INVERTED,
                    value: v,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: (0, c.f)(),
                    }),
                }),
            ],
        });
    }
}
