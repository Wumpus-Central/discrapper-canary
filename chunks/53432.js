n.d(t, { Z: () => Z }), n(653041);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(524437),
    a = n(481060),
    s = n(153867),
    c = n(857595),
    o = n(607070),
    u = n(906732),
    d = n(705262),
    g = n(540059),
    h = n(210887),
    p = n(740492),
    x = n(695346),
    j = n(874893),
    m = n(981631),
    S = n(388032);
function Z() {
    let e = x.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: Z,
            useForcedColors: b
        } = (0, r.cj)([h.Z, p.ZP, o.Z], () => ({
            theme: h.Z.theme,
            useSystemTheme: p.ZP.useSystemTheme,
            useForcedColors: o.Z.useForcedColors
        })),
        f = x.YC.useSetting(),
        v = (0, g.Q3)('appearance_settings'),
        k = (0, g.o9)('appearance_settings'),
        E = (e, r) =>
            (0, i.jsx)(a.k5B, {
                id: e,
                group: 'input-modes',
                label: r,
                disabled: b,
                checked: Z === j.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, s.ZI)({ theme: e });
                }
            }),
        y = E(m.BRd.DARK, v ? S.intl.string(S.t.GEaO9P) : S.intl.string(S.t.b8Cei4)),
        C = E(m.BRd.LIGHT, S.intl.string(S.t.K2sFfn)),
        I = [
            (0, i.jsxs)(
                a.kSQ,
                {
                    children: [
                        v
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [C, y, E(m.BRd.DARKER, S.intl.string(S.t.b8Cei4)), E(m.BRd.MIDNIGHT, S.intl.string(S.t.pQwSpa))]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [y, C]
                              }),
                        E('system', S.intl.string(S.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        k
            ? (I.push(
                  (0, i.jsxs)(
                      a.kSQ,
                      {
                          label: 'UI Density',
                          children: [
                              (0, i.jsx)(a.k5B, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: S.intl.string(S.t['4cuYHx']),
                                  checked: f === l.Pi.COZY,
                                  action: () => {
                                      x.YC.updateSetting(l.Pi.COZY);
                                  }
                              }),
                              (0, i.jsx)(a.k5B, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: S.intl.string(S.t['7iegX1']),
                                  checked: f === l.Pi.COMPACT,
                                  action: () => {
                                      x.YC.updateSetting(l.Pi.COMPACT);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              I.push(
                  (0, i.jsxs)(
                      a.kSQ,
                      {
                          label: 'Message Display',
                          children: [
                              (0, i.jsx)(a.k5B, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: S.intl.string(S.t.Jqj4cX),
                                  checked: !e,
                                  action: () => {
                                      x.jU.updateSetting(!1), (0, c.ZZ)();
                                  }
                              }),
                              (0, i.jsx)(a.k5B, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: S.intl.string(S.t['1JNcPT']),
                                  checked: e,
                                  action: () => {
                                      x.jU.updateSetting(!0), (0, c.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ),
              I.push(
                  (0, i.jsx)(
                      a.kSQ,
                      {
                          children: (0, i.jsx)(a.S89, {
                              id: 'desktop-refresh-override',
                              label: 'Enable Desktop Refresh',
                              action: () => {
                                  s.ZP.updatedUnsyncedSettings({ disableVisualRefresh: v });
                              },
                              checked: v
                          })
                      },
                      'refresh-experiment'
                  )
              ))
            : I.push(
                  (0, i.jsx)(
                      a.kSQ,
                      {
                          children: (0, i.jsx)(a.sNh, {
                              id: 'compact-mode',
                              label: e ? S.intl.string(S.t.CTpwDw) : S.intl.string(S.t['J/FISU']),
                              action: () => {
                                  x.jU.updateSetting(!e), (0, c.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        I
    );
}
