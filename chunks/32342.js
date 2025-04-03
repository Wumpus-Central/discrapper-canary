a.d(t, { default: () => N }), a(47120);
var n = a(200651),
    s = a(192379),
    r = a(481060),
    l = a(782568),
    i = a(313201),
    d = a(53365),
    o = a(377176),
    c = a(577275),
    h = a(981631),
    x = a(829857),
    m = a(388032),
    u = a(669906);
function p(e) {
    let { selectedTeamId: t, onSetSelectedTeamId: a, teamOptions: s } = e;
    return (0, n.jsx)('div', {
        className: u.teamSetup,
        children:
            0 === s.length
                ? (0, n.jsx)(r.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: m.NW.format(m.t.Jyy4pa, {})
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              className: u.teamBodyText,
                              color: 'header-secondary',
                              children: m.NW.string(m.t.U1Vz29)
                          }),
                          (0, n.jsx)(r.q4e, {
                              options: s,
                              placeholder: m.NW.string(m.t.QXf93N),
                              value: t,
                              onChange: a,
                              'aria-label': m.NW.string(m.t.QXf93N)
                          })
                      ]
                  })
    });
}
function N(e) {
    let { guildId: t, requireTeamSetup: a, onClose: N, transitionState: _ } = e,
        g = (0, i.Dt)(),
        [j, f] = s.useState(),
        [b, T] = s.useState(!1),
        { teams: y } = (0, c.Z)(),
        k = y.filter((e) => e.payout_account_status === x.C.ACTIVE),
        C = s.useMemo(
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
    return (0, n.jsxs)(r.Y0X, {
        'aria-labelledby': g,
        size: r.CgR.DYNAMIC,
        transitionState: _,
        children: [
            (0, n.jsx)(r.xBx, {
                separator: !1,
                className: u.header,
                children: (0, n.jsx)(r.X6q, {
                    variant: 'heading-xl/semibold',
                    children: a ? m.NW.string(m.t.inJKQk) : m.NW.string(m.t.GfObDA)
                })
            }),
            (0, n.jsxs)(r.hzk, {
                className: u.content,
                children: [
                    a &&
                        (0, n.jsx)(p, {
                            selectedTeamId: j,
                            onSetSelectedTeamId: f,
                            teamOptions: C
                        }),
                    (0, n.jsx)(r.XZJ, {
                        onChange: () => {
                            T((e) => !e);
                        },
                        size: 20,
                        type: r.XZJ.Types.INVERTED,
                        value: b,
                        children: (0, n.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (0, o.f)()
                        })
                    })
                ]
            }),
            (0, n.jsx)(r.mzw, {
                className: u.footer,
                children: (0, n.jsx)('div', {
                    className: u.buttons,
                    children:
                        a && 0 === C.length
                            ? (0, n.jsx)(r.zxk, {
                                  onClick: v,
                                  children: m.NW.string(m.t.JddVgI)
                              })
                            : (0, n.jsx)(r.zxk, {
                                  disabled: !b || (a && null == j),
                                  onClick: () => {
                                      N(), (0, d.df)(t, j);
                                  },
                                  children: m.NW.string(m.t.geKm7u)
                              })
                })
            })
        ]
    });
}
