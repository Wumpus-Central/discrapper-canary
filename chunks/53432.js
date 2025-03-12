r.d(t, { Z: () => m }), r(653041);
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
    p = r(530035),
    b = r(540059),
    g = r(210887),
    f = r(740492),
    j = r(695346),
    O = r(874893),
    y = r(981631),
    h = r(388032);
function m() {
    let e = j.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: r,
            useSystemTheme: m,
            useForcedColors: S
        } = (0, i.cj)([g.Z, f.ZP, s.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: f.ZP.useSystemTheme,
            useForcedColors: s.Z.useForcedColors
        })),
        v = j.YC.useSetting(),
        P = (0, b.Q3)('appearance_settings'),
        x = (0, b.o9)('appearance_settings'),
        Z = (0, b.nm)('appearance_settings'),
        w = p.i.useExperiment({ location: 'appearance_settings' }, { autoTrackExposure: !0 }).enabled,
        k = (e, i) =>
            (0, n.jsx)(c.k5B, {
                id: e,
                group: 'input-modes',
                label: i,
                disabled: S,
                checked: m === O.K.ON ? 'system' === e : e === r,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, a.ZI)({ theme: e });
                }
            }),
        E = k(y.BRd.DARK, P ? h.NW.string(h.t.GEaO9P) : h.NW.string(h.t.b8Cei4)),
        N = k(y.BRd.LIGHT, h.NW.string(h.t.K2sFfn)),
        D = [
            (0, n.jsxs)(
                c.kSQ,
                {
                    children: [
                        P
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [N, E, k(y.BRd.DARKER, h.NW.string(h.t.b8Cei4)), k(y.BRd.MIDNIGHT, h.NW.string(h.t.pQwSpa))]
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [E, N]
                              }),
                        k('system', h.NW.string(h.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            ,
        ];
    return (
        x
            ? (D.push(
                  (0, n.jsxs)(
                      c.kSQ,
                      {
                          label: 'UI Density',
                          children: [
                              w
                                  ? (0, n.jsx)(c.k5B, {
                                        id: 'compact-ui',
                                        group: 'list-density',
                                        label: h.NW.string(h.t['7iegX1']),
                                        checked: v === o.Pi.COMPACT,
                                        action: () => {
                                            j.YC.updateSetting(o.Pi.COMPACT);
                                        }
                                    })
                                  : null,
                              (0, n.jsx)(c.k5B, {
                                  id: 'default-ui',
                                  group: 'list-density',
                                  label: h.NW.string(h.t.bBvAEB),
                                  checked: v === o.Pi.DEFAULT,
                                  action: () => {
                                      j.YC.updateSetting(o.Pi.DEFAULT);
                                  }
                              }),
                              (0, n.jsx)(c.k5B, {
                                  id: 'cozy-ui',
                                  group: 'list-density',
                                  label: h.NW.string(h.t['4cuYHx']),
                                  checked: v === o.Pi.COZY,
                                  action: () => {
                                      j.YC.updateSetting(o.Pi.COZY);
                                  }
                              })
                          ]
                      },
                      'list-density'
                  )
              ),
              D.push(
                  (0, n.jsxs)(
                      c.kSQ,
                      {
                          label: 'Message Display',
                          children: [
                              (0, n.jsx)(c.k5B, {
                                  id: 'cozy-chat',
                                  group: 'chat-density',
                                  label: h.NW.string(h.t.Jqj4cX),
                                  checked: !e,
                                  action: () => {
                                      j.jU.updateSetting(!1), (0, l.ZZ)();
                                  }
                              }),
                              (0, n.jsx)(c.k5B, {
                                  id: 'compact-chat',
                                  group: 'chat-density',
                                  label: h.NW.string(h.t['1JNcPT']),
                                  checked: e,
                                  action: () => {
                                      j.jU.updateSetting(!0), (0, l.ZZ)();
                                  }
                              })
                          ]
                      },
                      'chat-density'
                  )
              ),
              Z &&
                  D.push(
                      (0, n.jsx)(
                          c.kSQ,
                          {
                              children: (0, n.jsx)(c.S89, {
                                  id: 'desktop-refresh-override',
                                  label: 'Enable Desktop Refresh',
                                  action: () => {
                                      a.ZP.updatedUnsyncedSettings({ disableVisualRefresh: P });
                                  },
                                  checked: P
                              })
                          },
                          'refresh-experiment'
                      )
                  ))
            : D.push(
                  (0, n.jsx)(
                      c.kSQ,
                      {
                          children: (0, n.jsx)(c.sNh, {
                              id: 'compact-mode',
                              label: e ? h.NW.string(h.t.CTpwDw) : h.NW.string(h.t['J/FISU']),
                              action: () => {
                                  j.jU.updateSetting(!e), (0, l.ZZ)();
                              }
                          })
                      },
                      'compact-mode'
                  )
              ),
        D
    );
}
