n.d(t, { default: () => _ }), n(47120);
var a = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(782568),
    i = n(313201),
    d = n(53365),
    o = n(377176),
    c = n(577275),
    h = n(981631),
    x = n(829857),
    m = n(388032),
    u = n(788035);
function p(e) {
    let { selectedTeamId: t, onSetSelectedTeamId: n, teamOptions: s } = e;
    return (0, a.jsx)('div', {
        className: u.teamSetup,
        children:
            0 === s.length
                ? (0, a.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: m.intl.format(m.t.Jyy4pa, {})
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              className: u.teamBodyText,
                              color: 'header-secondary',
                              children: m.intl.string(m.t.U1Vz29)
                          }),
                          (0, a.jsx)(l.q4e, {
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
        [T, y] = s.useState(!1),
        { teams: k } = (0, c.Z)(),
        C = k.filter((e) => e.payout_account_status === x.C.ACTIVE),
        v = s.useMemo(
            () =>
                C.map((e) => ({
                    label: e.name,
                    value: e.id
                })),
            [C]
        ),
        N = s.useCallback(() => {
            (0, r.Z)(h.EYA.DEVELOPER_PORTAL_TEAMS);
        }, []);
    return (0, a.jsxs)(l.Y0X, {
        'aria-labelledby': j,
        size: l.CgR.DYNAMIC,
        transitionState: g,
        children: [
            (0, a.jsx)(l.xBx, {
                separator: !1,
                className: u.header,
                children: (0, a.jsx)(l.X6q, {
                    variant: 'heading-xl/semibold',
                    children: n ? m.intl.string(m.t.inJKQk) : m.intl.string(m.t.GfObDA)
                })
            }),
            (0, a.jsxs)(l.hzk, {
                className: u.content,
                children: [
                    n &&
                        (0, a.jsx)(p, {
                            selectedTeamId: f,
                            onSetSelectedTeamId: b,
                            teamOptions: v
                        }),
                    (0, a.jsx)(l.XZJ, {
                        onChange: () => {
                            y((e) => !e);
                        },
                        size: 20,
                        type: l.XZJ.Types.INVERTED,
                        value: T,
                        children: (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (0, o.f)()
                        })
                    })
                ]
            }),
            (0, a.jsx)(l.mzw, {
                className: u.footer,
                children: (0, a.jsx)('div', {
                    className: u.buttons,
                    children:
                        n && 0 === v.length
                            ? (0, a.jsx)(l.zxk, {
                                  onClick: N,
                                  children: m.intl.string(m.t.JddVgI)
                              })
                            : (0, a.jsx)(l.zxk, {
                                  disabled: !T || (n && null == f),
                                  onClick: () => {
                                      _(), (0, d.df)(t, f);
                                  },
                                  children: m.intl.string(m.t.geKm7u)
                              })
                })
            })
        ]
    });
}
