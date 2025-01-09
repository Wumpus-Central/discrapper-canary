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
    h = n(388032);
function _() {
    let e = b.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: _,
            useForcedColors: S
        } = (0, o.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        x = b.N5.useSetting(),
        M = (0, d.Q3)('appearance_settings'),
        C = (0, d.o9)('appearance_settings'),
        Z = (e, o) =>
            (0, i.jsx)(r.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: o,
                disabled: S,
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
        j = [
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        Z(f.BRd.DARK, h.intl.string(h.t.b8Cei4)),
                        Z(f.BRd.LIGHT, h.intl.string(h.t.K2sFfn)),
                        M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [Z(f.BRd.DARKER, 'Darker'), Z(f.BRd.MIDNIGHT, h.intl.string(h.t.pQwSpa))]
                            }),
                        Z('system', h.intl.string(h.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        C
            ? (j.push(
                  (0, i.jsxs)(
                      r.MenuGroup,
                      {
                          label: 'UI Density',
                          children: [
                              (0, i.jsx)(r.MenuRadioItem, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: 'Cozy',
                                  checked: 'cozy' === x,
                                  action: () => {
                                      b.N5.updateSetting('cozy');
                                  }
                              }),
                              (0, i.jsx)(r.MenuRadioItem, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: 'Compact',
                                  checked: 'compact' === x,
                                  action: () => {
                                      b.N5.updateSetting('compact');
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              j.push(
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
              j.push(
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
            : j.push(
                  (0, i.jsx)(
                      r.MenuGroup,
                      {
                          children: (0, i.jsx)(r.MenuItem, {
                              id: 'compact-mode',
                              label: e ? h.intl.string(h.t.CTpwDw) : h.intl.string(h.t['J/FISU']),
                              action: () => {
                                  b.jU.updateSetting(!e), (0, l.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        j
    );
}
