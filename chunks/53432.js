n.d(t, { Z: () => j }), n(539854);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(524437),
    a = n(481060),
    o = n(153867),
    c = n(857595),
    s = n(607070),
    u = n(906732),
    d = n(705262),
    p = n(540059),
    g = n(210887),
    b = n(740492),
    y = n(695346),
    O = n(874893),
    f = n(981631),
    h = n(388032);
function j() {
    let e = y.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: j,
            useForcedColors: v
        } = (0, i.cj)([g.Z, b.ZP, s.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: b.ZP.useSystemTheme,
            useForcedColors: s.Z.useForcedColors
        })),
        S = y.YC.useSetting(),
        E = (0, p.Q3)('appearance_settings'),
        P = (0, p.o9)('appearance_settings'),
        m = (e, i) =>
            (0, r.jsx)(a.k5B, {
                id: e,
                group: 'input-modes',
                label: i,
                disabled: v,
                checked: j === O.KW.ON ? 'system' === e : e === n,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, o.ZI)({ theme: e });
                }
            }),
        x = m(f.BRd.DARK, E ? h.intl.string(h.t.SMPT1t) : h.intl.string(h.t.b8Cei4)),
        w = m(f.BRd.LIGHT, h.intl.string(h.t.K2sFfn)),
        k = [
            (0, r.jsxs)(
                a.kSQ,
                {
                    children: [
                        E
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [w, x, m(f.BRd.DARKER, h.intl.string(h.t.b8Cei4)), m(f.BRd.MIDNIGHT, h.intl.string(h.t.Do4ZJy))]
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [x, w]
                              }),
                        m('system', h.intl.string(h.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        P
            ? (k.push(
                  (0, r.jsxs)(
                      a.kSQ,
                      {
                          label: 'UI Density',
                          children: [
                              (0, r.jsx)(a.k5B, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: h.intl.string(h.t['7iegX1']),
                                  checked: S === l.Pi.COMPACT,
                                  action: () => {
                                      y.YC.updateSetting(l.Pi.COMPACT);
                                  }
                              }),
                              (0, r.jsx)(a.k5B, {
                                  id: 'default-ui',
                                  group: 'list-density',
                                  label: h.intl.string(h.t.bBvAEB),
                                  checked: S === l.Pi.DEFAULT,
                                  action: () => {
                                      y.YC.updateSetting(l.Pi.DEFAULT);
                                  }
                              }),
                              (0, r.jsx)(a.k5B, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: h.intl.string(h.t['4cuYHx']),
                                  checked: S === l.Pi.COZY,
                                  action: () => {
                                      y.YC.updateSetting(l.Pi.COZY);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              k.push(
                  (0, r.jsxs)(
                      a.kSQ,
                      {
                          label: 'Message Display',
                          children: [
                              (0, r.jsx)(a.k5B, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: h.intl.string(h.t.Jqj4cX),
                                  checked: !e,
                                  action: () => {
                                      y.jU.updateSetting(!1), (0, c.ZZ)();
                                  }
                              }),
                              (0, r.jsx)(a.k5B, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: h.intl.string(h.t['1JNcPT']),
                                  checked: e,
                                  action: () => {
                                      y.jU.updateSetting(!0), (0, c.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ))
            : k.push(
                  (0, r.jsx)(
                      a.kSQ,
                      {
                          children: (0, r.jsx)(a.sNh, {
                              id: 'compact-mode',
                              label: e ? h.intl.string(h.t.CTpwDw) : h.intl.string(h.t['J/FISU']),
                              action: () => {
                                  y.jU.updateSetting(!e), (0, c.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        k
    );
}
