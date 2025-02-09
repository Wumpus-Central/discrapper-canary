n.d(t, { Z: () => S }), n(653041);
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(524437),
    a = n(481060),
    l = n(153867),
    s = n(857595),
    c = n(607070),
    d = n(906732),
    u = n(705262),
    _ = n(540059),
    g = n(210887),
    b = n(740492),
    m = n(695346),
    E = n(874893),
    h = n(981631),
    p = n(388032);
function S() {
    let e = m.jU.useSetting(),
        { analyticsLocations: t } = (0, d.ZP)(),
        {
            theme: n,
            useSystemTheme: S,
            useForcedColors: f
        } = (0, o.cj)([g.Z, b.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: b.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        R = m.YC.useSetting(),
        C = (0, _.Q3)('appearance_settings'),
        k = (0, _.o9)('appearance_settings'),
        x = (0, _.nm)('appearance_settings'),
        B = (e, o) =>
            (0, i.jsx)(a.k5B, {
                id: e,
                group: 'input-modes',
                label: o,
                disabled: f,
                checked: S === E.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, u.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, l.ZI)({ theme: e });
                }
            }),
        T = B(h.BRd.DARK, C ? p.intl.string(p.t.GEaO9P) : p.intl.string(p.t.b8Cei4)),
        Z = B(h.BRd.LIGHT, p.intl.string(p.t.K2sFfn)),
        j = [
            (0, i.jsxs)(
                a.kSQ,
                {
                    children: [
                        C
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [Z, T, B(h.BRd.DARKER, p.intl.string(p.t.b8Cei4)), B(h.BRd.MIDNIGHT, p.intl.string(p.t.pQwSpa))]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [T, Z]
                              }),
                        B('system', p.intl.string(p.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        k
            ? (j.push(
                  (0, i.jsxs)(
                      a.kSQ,
                      {
                          label: 'UI Density',
                          children: [
                              (0, i.jsx)(a.k5B, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: p.intl.string(p.t['4cuYHx']),
                                  checked: R === r.Pi.COZY,
                                  action: () => {
                                      m.YC.updateSetting(r.Pi.COZY);
                                  }
                              }),
                              (0, i.jsx)(a.k5B, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: p.intl.string(p.t['7iegX1']),
                                  checked: R === r.Pi.COMPACT,
                                  action: () => {
                                      m.YC.updateSetting(r.Pi.COMPACT);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              j.push(
                  (0, i.jsxs)(
                      a.kSQ,
                      {
                          label: 'Message Display',
                          children: [
                              (0, i.jsx)(a.k5B, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: p.intl.string(p.t.Jqj4cX),
                                  checked: !e,
                                  action: () => {
                                      m.jU.updateSetting(!1), (0, s.ZZ)();
                                  }
                              }),
                              (0, i.jsx)(a.k5B, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: p.intl.string(p.t['1JNcPT']),
                                  checked: e,
                                  action: () => {
                                      m.jU.updateSetting(!0), (0, s.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ),
              x &&
                  j.push(
                      (0, i.jsx)(
                          a.kSQ,
                          {
                              children: (0, i.jsx)(a.S89, {
                                  id: 'desktop-refresh-override',
                                  label: 'Enable Desktop Refresh',
                                  action: () => {
                                      l.ZP.updatedUnsyncedSettings({ disableVisualRefresh: C });
                                  },
                                  checked: C
                              })
                          },
                          'refresh-experiment'
                      )
                  ))
            : j.push(
                  (0, i.jsx)(
                      a.kSQ,
                      {
                          children: (0, i.jsx)(a.sNh, {
                              id: 'compact-mode',
                              label: e ? p.intl.string(p.t.CTpwDw) : p.intl.string(p.t['J/FISU']),
                              action: () => {
                                  m.jU.updateSetting(!e), (0, s.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        j
    );
}
