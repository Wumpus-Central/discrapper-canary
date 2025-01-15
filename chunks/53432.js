n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(153867),
    u = n(857595),
    o = n(607070),
    c = n(906732),
    s = n(705262),
    d = n(540059),
    p = n(210887),
    g = n(740492),
    h = n(695346),
    m = n(874893),
    x = n(981631),
    f = n(969943),
    M = n(388032);
function b() {
    let e = h.jU.useSetting(),
        { analyticsLocations: t } = (0, c.ZP)(),
        {
            theme: n,
            useSystemTheme: b,
            useForcedColors: j
        } = (0, i.cj)([p.Z, g.ZP, o.Z], () => ({
            theme: p.Z.theme,
            useSystemTheme: g.ZP.useSystemTheme,
            useForcedColors: o.Z.useForcedColors
        })),
        Z = h.N5.useSetting(),
        S = (0, d.Q3)('appearance_settings'),
        I = (0, d.o9)('appearance_settings'),
        v = (e, i) =>
            (0, r.jsx)(l.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: i,
                disabled: j,
                checked: b === m.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, s.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, a.ZI)({ theme: e });
                }
            }),
        C = [
            (0, r.jsxs)(
                l.MenuGroup,
                {
                    children: [
                        v(x.BRd.DARK, M.intl.string(M.t.b8Cei4)),
                        v(x.BRd.LIGHT, M.intl.string(M.t.K2sFfn)),
                        S &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [v(x.BRd.DARKER, 'Darker'), v(x.BRd.MIDNIGHT, M.intl.string(M.t.pQwSpa))]
                            }),
                        v('system', M.intl.string(M.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        I
            ? (C.push(
                  (0, r.jsxs)(
                      l.MenuGroup,
                      {
                          label: 'UI Density',
                          children: [
                              (0, r.jsx)(l.MenuRadioItem, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: 'Cozy',
                                  checked: Z === f.fx.COZY,
                                  action: () => {
                                      h.N5.updateSetting(f.fx.COZY);
                                  }
                              }),
                              (0, r.jsx)(l.MenuRadioItem, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: 'Compact',
                                  checked: Z === f.fx.COMPACT,
                                  action: () => {
                                      h.N5.updateSetting(f.fx.COMPACT);
                                  }
                              }),
                              (0, r.jsx)(l.MenuRadioItem, {
                                  id: 'auto-ui',
                                  group: 'list-density',
                                  label: 'Auto',
                                  checked: Z === f.fx.AUTO,
                                  action: () => {
                                      h.N5.updateSetting(f.fx.AUTO);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              C.push(
                  (0, r.jsxs)(
                      l.MenuGroup,
                      {
                          label: 'Message Display',
                          children: [
                              (0, r.jsx)(l.MenuRadioItem, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: 'Cozy',
                                  checked: !e,
                                  action: () => {
                                      h.jU.updateSetting(!1), (0, u.ZZ)();
                                  }
                              }),
                              (0, r.jsx)(l.MenuRadioItem, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: 'Compact',
                                  checked: e,
                                  action: () => {
                                      h.jU.updateSetting(!0), (0, u.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ),
              C.push(
                  (0, r.jsx)(
                      l.MenuGroup,
                      {
                          children: (0, r.jsx)(l.MenuCheckboxItem, {
                              id: 'desktop-refresh-override',
                              label: 'Enable Desktop Refresh',
                              action: () => {
                                  a.ZP.updatedUnsyncedSettings({ disableVisualRefresh: S });
                              },
                              checked: S
                          })
                      },
                      'refresh-experiment'
                  )
              ))
            : C.push(
                  (0, r.jsx)(
                      l.MenuGroup,
                      {
                          children: (0, r.jsx)(l.MenuItem, {
                              id: 'compact-mode',
                              label: e ? M.intl.string(M.t.CTpwDw) : M.intl.string(M.t['J/FISU']),
                              action: () => {
                                  h.jU.updateSetting(!e), (0, u.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        C
    );
}
