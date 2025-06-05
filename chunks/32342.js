n.d(t, { default: () => _ }), n(388685);
var a = n(255367),
    s = n(73800),
    r = n(481060),
    l = n(782568),
    i = n(313201),
    o = n(53365),
    d = n(377176),
    c = n(577275),
    h = n(981631),
    x = n(829857),
    m = n(388032),
    u = n(669906);
function p(e) {
    let { selectedTeamId: t, onSetSelectedTeamId: n, teamOptions: s } = e;
    return (0, a.jsx)('div', {
        className: u.teamSetup,
        children:
            0 === s.length
                ? (0, a.jsx)(r.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: m.intl.format(m.t.Jyy4pa, {})
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              className: u.teamBodyText,
                              color: 'header-secondary',
                              children: m.intl.string(m.t.U1Vz29)
                          }),
                          (0, a.jsx)(r.q4e, {
                              options: s,
                              placeholder: m.intl.string(m.t.QXf93N),
                              value: t,
                              onChange: n,
                              'aria-label': m.intl.string(m.t.QXf93N)
                          })
                      ]
                  })
    });
}
function _(e) {
    let { guildId: t, requireTeamSetup: n, onClose: _, transitionState: g } = e,
        j = (0, i.Dt)(),
        [f, b] = s.useState(),
        [C, T] = s.useState(!1),
        { teams: y } = (0, c.Z)(),
        k = y.filter((e) => e.payout_account_status === x.C.ACTIVE),
        N = s.useMemo(
            () =>
                k.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [k]
        ),
        v = s.useCallback(() => {
            (0, l.Z)(h.EYA.DEVELOPER_PORTAL_TEAMS);
        }, []);
    return (0, a.jsxs)(r.Y0X, {
        'aria-labelledby': j,
        size: r.CgR.DYNAMIC,
        transitionState: g,
        parentComponent: 'CreatorMonetizationNewOwnerOnboardingModal',
        children: [
            (0, a.jsx)(r.xBx, {
                separator: !1,
                className: u.header,
                children: (0, a.jsx)(r.X6q, {
                    variant: 'heading-xl/semibold',
                    children: n ? m.intl.string(m.t.inJKQk) : m.intl.string(m.t.GfObDA)
                })
            }),
            (0, a.jsxs)(r.hzk, {
                className: u.content,
                children: [
                    n &&
                        (0, a.jsx)(p, {
                            selectedTeamId: f,
                            onSetSelectedTeamId: b,
                            teamOptions: N
                        }),
                    (0, a.jsx)(r.XZJ, {
                        onChange: () => {
                            T((e) => !e);
                        },
                        size: 20,
                        type: r.XZJ.Types.INVERTED,
                        value: C,
                        children: (0, a.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (0, d.f)()
                        })
                    })
                ]
            }),
            (0, a.jsx)(r.mzw, {
                className: u.footer,
                children: (0, a.jsx)('div', {
                    className: u.buttons,
                    children:
                        n && 0 === N.length
                            ? (0, a.jsx)(r.zxk, {
                                  onClick: v,
                                  children: m.intl.string(m.t.JddVgI)
                              })
                            : (0, a.jsx)(r.zxk, {
                                  disabled: !C || (n && null == f),
                                  onClick: () => {
                                      _(), (0, o.df)(t, f);
                                  },
                                  children: m.intl.string(m.t.geKm7u)
                              })
                })
            })
        ]
    });
}
