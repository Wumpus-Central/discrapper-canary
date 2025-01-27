n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(524437),
    a = n(481060),
    u = n(153867),
    o = n(857595),
    c = n(607070),
    s = n(906732),
    d = n(705262),
    p = n(540059),
    g = n(210887),
    h = n(740492),
    m = n(695346),
    x = n(874893),
    f = n(981631),
    M = n(388032);
function b() {
    let e = m.jU.useSetting(),
        { analyticsLocations: t } = (0, s.ZP)(),
        {
            theme: n,
            useSystemTheme: b,
            useForcedColors: j
        } = (0, i.cj)([g.Z, h.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: h.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        Z = m.YC.useSetting(),
        C = (0, p.Q3)('appearance_settings'),
        S = (0, p.o9)('appearance_settings'),
        v = (e, i) =>
            (0, r.jsx)(a.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: i,
                disabled: j,
                checked: b === x.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, u.ZI)({ theme: e });
                }
            }),
        I = [
            (0, r.jsxs)(
                a.MenuGroup,
                {
                    children: [
                        v(f.BRd.DARK, M.intl.string(M.t.b8Cei4)),
                        v(f.BRd.LIGHT, M.intl.string(M.t.K2sFfn)),
                        C &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [v(f.BRd.DARKER, 'Darker'), v(f.BRd.MIDNIGHT, M.intl.string(M.t.pQwSpa))]
                            }),
                        v('system', M.intl.string(M.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        S
            ? (I.push(
                  (0, r.jsxs)(
                      a.MenuGroup,
                      {
                          label: 'UI Density',
                          children: [
                              (0, r.jsx)(a.MenuRadioItem, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: 'Cozy',
                                  checked: Z === l.Pi.COZY,
                                  action: () => {
                                      m.YC.updateSetting(l.Pi.COZY);
                                  }
                              }),
                              (0, r.jsx)(a.MenuRadioItem, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: 'Compact',
                                  checked: Z === l.Pi.COMPACT,
                                  action: () => {
                                      m.YC.updateSetting(l.Pi.COMPACT);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              I.push(
                  (0, r.jsxs)(
                      a.MenuGroup,
                      {
                          label: 'Message Display',
                          children: [
                              (0, r.jsx)(a.MenuRadioItem, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: 'Cozy',
                                  checked: !e,
                                  action: () => {
                                      m.jU.updateSetting(!1), (0, o.ZZ)();
                                  }
                              }),
                              (0, r.jsx)(a.MenuRadioItem, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: 'Compact',
                                  checked: e,
                                  action: () => {
                                      m.jU.updateSetting(!0), (0, o.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ),
              I.push(
                  (0, r.jsx)(
                      a.MenuGroup,
                      {
                          children: (0, r.jsx)(a.MenuCheckboxItem, {
                              id: 'desktop-refresh-override',
                              label: 'Enable Desktop Refresh',
                              action: () => {
                                  u.ZP.updatedUnsyncedSettings({ disableVisualRefresh: C });
                              },
                              checked: C
                          })
                      },
                      'refresh-experiment'
                  )
              ))
            : I.push(
                  (0, r.jsx)(
                      a.MenuGroup,
                      {
                          children: (0, r.jsx)(a.MenuItem, {
                              id: 'compact-mode',
                              label: e ? M.intl.string(M.t.CTpwDw) : M.intl.string(M.t['J/FISU']),
                              action: () => {
                                  m.jU.updateSetting(!e), (0, o.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        I
    );
}
