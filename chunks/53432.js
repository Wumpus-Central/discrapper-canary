r.d(t, { Z: () => h }), r(653041);
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(524437),
    c = r(481060),
    a = r(153867),
    l = r(857595),
    s = r(607070),
    u = r(906732),
    d = r(705262),
    p = r(540059),
    b = r(210887),
    g = r(740492),
    f = r(695346),
    j = r(874893),
    O = r(981631),
    y = r(388032);
function h() {
    let e = f.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: r,
            useSystemTheme: h,
            useForcedColors: m
        } = (0, i.cj)([b.Z, g.ZP, s.Z], () => ({
            theme: b.Z.theme,
            useSystemTheme: g.ZP.useSystemTheme,
            useForcedColors: s.Z.useForcedColors
        })),
        S = f.YC.useSetting(),
        v = (0, p.Q3)('appearance_settings'),
        P = (0, p.o9)('appearance_settings'),
        x = (0, p.nm)('appearance_settings'),
        Z = (e, i) =>
            (0, n.jsx)(c.k5B, {
                id: e,
                group: 'input-modes',
                label: i,
                disabled: m,
                checked: h === j.KW.ON ? 'system' === e : e === r,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, a.ZI)({ theme: e });
                }
            }),
        w = Z(O.BRd.DARK, v ? y.NW.string(y.t.SMPT1t) : y.NW.string(y.t.b8Cei4)),
        k = Z(O.BRd.LIGHT, y.NW.string(y.t.K2sFfn)),
        E = [
            (0, n.jsxs)(
                c.kSQ,
                {
                    children: [
                        v
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [k, w, Z(O.BRd.DARKER, y.NW.string(y.t.b8Cei4)), Z(O.BRd.MIDNIGHT, y.NW.string(y.t.Do4ZJy))]
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [w, k]
                              }),
                        Z('system', y.NW.string(y.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        P
            ? (E.push(
                  (0, n.jsxs)(
                      c.kSQ,
                      {
                          label: 'UI Density',
                          children: [
                              (0, n.jsx)(c.k5B, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: y.NW.string(y.t['7iegX1']),
                                  checked: S === o.Pi.COMPACT,
                                  action: () => {
                                      f.YC.updateSetting(o.Pi.COMPACT);
                                  }
                              }),
                              (0, n.jsx)(c.k5B, {
                                  id: 'default-ui',
                                  group: 'list-density',
                                  label: y.NW.string(y.t.bBvAEB),
                                  checked: S === o.Pi.DEFAULT,
                                  action: () => {
                                      f.YC.updateSetting(o.Pi.DEFAULT);
                                  }
                              }),
                              (0, n.jsx)(c.k5B, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: y.NW.string(y.t['4cuYHx']),
                                  checked: S === o.Pi.COZY,
                                  action: () => {
                                      f.YC.updateSetting(o.Pi.COZY);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              E.push(
                  (0, n.jsxs)(
                      c.kSQ,
                      {
                          label: 'Message Display',
                          children: [
                              (0, n.jsx)(c.k5B, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: y.NW.string(y.t.Jqj4cX),
                                  checked: !e,
                                  action: () => {
                                      f.jU.updateSetting(!1), (0, l.ZZ)();
                                  }
                              }),
                              (0, n.jsx)(c.k5B, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: y.NW.string(y.t['1JNcPT']),
                                  checked: e,
                                  action: () => {
                                      f.jU.updateSetting(!0), (0, l.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ),
              x &&
                  E.push(
                      (0, n.jsx)(
                          c.kSQ,
                          {
                              children: (0, n.jsx)(c.S89, {
                                  id: 'desktop-refresh-override',
                                  label: 'Enable Desktop Refresh',
                                  action: () => {
                                      a.ZP.updatedUnsyncedSettings({ disableVisualRefresh: v });
                                  },
                                  checked: v
                              })
                          },
                          'refresh-experiment'
                      )
                  ))
            : E.push(
                  (0, n.jsx)(
                      c.kSQ,
                      {
                          children: (0, n.jsx)(c.sNh, {
                              id: 'compact-mode',
                              label: e ? y.NW.string(y.t.CTpwDw) : y.NW.string(y.t['J/FISU']),
                              action: () => {
                                  f.jU.updateSetting(!e), (0, l.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        E
    );
}
