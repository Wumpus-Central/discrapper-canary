n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(653041);
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(153867),
    l = n(857595),
    c = n(607070),
    u = n(906732),
    s = n(705262),
    d = n(540059),
    g = n(210887),
    m = n(740492),
    b = n(695346),
    p = n(874893),
    f = n(981631),
    h = n(969943),
    S = n(388032);
function _() {
    let e = b.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: _,
            useForcedColors: x
        } = (0, o.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        C = b.N5.useSetting(),
        M = (0, d.Q3)('appearance_settings'),
        Z = (0, d.o9)('appearance_settings'),
        j = (e, o) =>
            (0, i.jsx)(r.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: o,
                disabled: x,
                checked: _ === p.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, s.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, a.ZI)({ theme: e });
                }
            }),
        k = [
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        j(f.BRd.DARK, S.intl.string(S.t.b8Cei4)),
                        j(f.BRd.LIGHT, S.intl.string(S.t.K2sFfn)),
                        M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [j(f.BRd.DARKER, 'Darker'), j(f.BRd.MIDNIGHT, S.intl.string(S.t.pQwSpa))]
                            }),
                        j('system', S.intl.string(S.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        Z
            ? (k.push(
                  (0, i.jsxs)(
                      r.MenuGroup,
                      {
                          label: 'UI Density',
                          children: [
                              (0, i.jsx)(r.MenuRadioItem, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: 'Cozy',
                                  checked: C === h.fx.COZY,
                                  action: () => {
                                      b.N5.updateSetting(h.fx.COZY);
                                  }
                              }),
                              (0, i.jsx)(r.MenuRadioItem, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: 'Compact',
                                  checked: C === h.fx.COMPACT,
                                  action: () => {
                                      b.N5.updateSetting(h.fx.COMPACT);
                                  }
                              }),
                              (0, i.jsx)(r.MenuRadioItem, {
                                  id: 'auto-ui',
                                  group: 'list-density',
                                  label: 'Auto',
                                  checked: C === h.fx.AUTO,
                                  action: () => {
                                      b.N5.updateSetting(h.fx.AUTO);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              k.push(
                  (0, i.jsxs)(
                      r.MenuGroup,
                      {
                          label: 'Message Display',
                          children: [
                              (0, i.jsx)(r.MenuRadioItem, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: 'Cozy',
                                  checked: !e,
                                  action: () => {
                                      b.jU.updateSetting(!1), (0, l.ZZ)();
                                  }
                              }),
                              (0, i.jsx)(r.MenuRadioItem, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: 'Compact',
                                  checked: e,
                                  action: () => {
                                      b.jU.updateSetting(!0), (0, l.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ),
              k.push(
                  (0, i.jsx)(
                      r.MenuGroup,
                      {
                          children: (0, i.jsx)(r.MenuCheckboxItem, {
                              id: 'desktop-refresh-override',
                              label: 'Enable Desktop Refresh',
                              action: () => {
                                  a.ZP.updatedUnsyncedSettings({ disableVisualRefresh: M });
                              },
                              checked: M
                          })
                      },
                      'refresh-experiment'
                  )
              ))
            : k.push(
                  (0, i.jsx)(
                      r.MenuGroup,
                      {
                          children: (0, i.jsx)(r.MenuItem, {
                              id: 'compact-mode',
                              label: e ? S.intl.string(S.t.CTpwDw) : S.intl.string(S.t['J/FISU']),
                              action: () => {
                                  b.jU.updateSetting(!e), (0, l.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        k
    );
}
