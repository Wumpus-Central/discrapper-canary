n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(299206),
    l = n(389052),
    u = n(158508),
    c = n(710631),
    d = n(622724),
    f = n(785717),
    _ = n(475413),
    p = n(388032);
function h(e) {
    let { user: t, guildId: n, viewProfileItem: h, appContext: m } = e,
        { trackUserProfileAction: g } = (0, f.KZ)(),
        { analyticsLocations: E, newestAnalyticsLocation: v } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
        y = (0, c.Z)({
            user: t,
            guildId: n,
            onAction: () =>
                g({
                    action: 'PRESS_INVITE_TO_SERVER',
                    analyticsLocations: E
                })
        }),
        I = (0, l.Z)({
            user: t,
            guildId: n,
            location: v,
            color: 'danger',
            appContext: m,
            onBlock: () =>
                g({
                    action: 'BLOCK',
                    analyticsLocations: E
                }),
            onIgnore: () =>
                g({
                    action: 'IGNORE',
                    analyticsLocations: E
                }),
            onUnblock: () =>
                g({
                    action: 'UNBLOCK',
                    analyticsLocations: E
                })
        }),
        T = (0, u.Z)({
            user: t,
            guildId: n,
            location: v,
            appContext: m,
            onBlock: () =>
                g({
                    action: 'BLOCK',
                    analyticsLocations: E
                }),
            onIgnore: () =>
                g({
                    action: 'IGNORE',
                    analyticsLocations: E
                }),
            onUnignore: () =>
                g({
                    action: 'UNIGNORE',
                    analyticsLocations: E
                })
        }),
        b = (0, d.Z)({
            user: t,
            guildId: n,
            location: v,
            appContext: m,
            color: 'danger',
            onAction: () =>
                g({
                    action: 'REPORT',
                    analyticsLocations: E
                })
        }),
        S = [
            [h, y],
            [
                T,
                I,
                b,
                (0, d.T)({
                    user: t,
                    guildId: n,
                    location: v,
                    appContext: m,
                    color: 'danger',
                    onAction: () =>
                        g({
                            action: 'REPORT',
                            analyticsLocations: E
                        })
                })
            ],
            [
                (0, o.Z)({
                    id: t.id,
                    label: p.intl.string(p.t['/AXYnJ']),
                    onSuccess: () =>
                        g({
                            action: 'COPY_USER_ID',
                            analyticsLocations: E
                        })
                })
            ]
        ];
    return S.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(s.Gt, {
              value: E,
              children: (0, i.jsx)(r.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(r.v2r, {
                          navId: 'user-profile-overflow-menu',
                          onSelect: void 0,
                          onClose: t,
                          'aria-label': p.intl.string(p.t.AXIHpa),
                          children: S.map((e, t) => (0, i.jsx)(r.kSQ, { children: e.map((e) => e) }, t))
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(_.oY, {
                          action: 'PRESS_OPTIONS',
                          icon: r.xhG,
                          tooltipText: p.intl.string(p.t.UKOtz8),
                          ...e
                      })
              })
          });
}
