r.d(t, { Z: () => h }), r(539854);
var n = r(255367);
r(73800);
var i = r(442837),
    o = r(524437),
    l = r(481060),
    c = r(153867),
    a = r(857595),
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
        v = f.YC.useSetting(),
        S = (0, p.Q3)('appearance_settings'),
        P = (0, p.o9)('appearance_settings'),
        Z = (e, i) =>
            (0, n.jsx)(l.k5B, {
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
                        (0, c.ZI)({ theme: e });
                }
            }),
        x = Z(O.BRd.DARK, S ? y.intl.string(y.t.SMPT1t) : y.intl.string(y.t.b8Cei4)),
        w = Z(O.BRd.LIGHT, y.intl.string(y.t.K2sFfn)),
        E = [
            (0, n.jsxs)(
                l.kSQ,
                {
                    children: [
                        S
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [w, x, Z(O.BRd.DARKER, y.intl.string(y.t.b8Cei4)), Z(O.BRd.MIDNIGHT, y.intl.string(y.t.Do4ZJy))]
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [x, w]
                              }),
                        Z('system', y.intl.string(y.t['7rOU6u']))
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
                      l.kSQ,
                      {
                          label: 'UI Density',
                          children: [
                              (0, n.jsx)(l.k5B, {
                                  id: 'compact-ui',
                                  group: 'list-density',
                                  label: y.intl.string(y.t['7iegX1']),
                                  checked: v === o.Pi.COMPACT,
                                  action: () => {
                                      f.YC.updateSetting(o.Pi.COMPACT);
                                  }
                              }),
                              (0, n.jsx)(l.k5B, {
                                  id: 'default-ui',
                                  group: 'list-density',
                                  label: y.intl.string(y.t.bBvAEB),
                                  checked: v === o.Pi.DEFAULT,
                                  action: () => {
                                      f.YC.updateSetting(o.Pi.DEFAULT);
                                  }
                              }),
                              (0, n.jsx)(l.k5B, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: y.intl.string(y.t['4cuYHx']),
                                  checked: v === o.Pi.COZY,
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
                      l.kSQ,
                      {
                          label: 'Message Display',
                          children: [
                              (0, n.jsx)(l.k5B, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: y.intl.string(y.t.Jqj4cX),
                                  checked: !e,
                                  action: () => {
                                      f.jU.updateSetting(!1), (0, a.ZZ)();
                                  }
                              }),
                              (0, n.jsx)(l.k5B, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: y.intl.string(y.t['1JNcPT']),
                                  checked: e,
                                  action: () => {
                                      f.jU.updateSetting(!0), (0, a.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ))
            : E.push(
                  (0, n.jsx)(
                      l.kSQ,
                      {
                          children: (0, n.jsx)(l.sNh, {
                              id: 'compact-mode',
                              label: e ? y.intl.string(y.t.CTpwDw) : y.intl.string(y.t['J/FISU']),
                              action: () => {
                                  f.jU.updateSetting(!e), (0, a.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        E
    );
}
