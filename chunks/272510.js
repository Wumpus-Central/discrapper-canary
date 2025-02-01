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
    let { user: t, guildId: n, viewProfileItem: h } = e,
        { trackUserProfileAction: m } = (0, f.KZ)(),
        { analyticsLocations: g, newestAnalyticsLocation: E } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
        v = (0, c.Z)({
            user: t,
            guildId: n,
            onAction: () =>
                m({
                    action: 'PRESS_INVITE_TO_SERVER',
                    analyticsLocations: g
                })
        }),
        y = (0, l.Z)({
            user: t,
            guildId: n,
            location: E,
            color: 'danger',
            onBlock: () =>
                m({
                    action: 'BLOCK',
                    analyticsLocations: g
                }),
            onIgnore: () =>
                m({
                    action: 'IGNORE',
                    analyticsLocations: g
                }),
            onUnblock: () =>
                m({
                    action: 'UNBLOCK',
                    analyticsLocations: g
                })
        }),
        I = (0, u.Z)({
            user: t,
            guildId: n,
            location: E,
            onBlock: () =>
                m({
                    action: 'BLOCK',
                    analyticsLocations: g
                }),
            onIgnore: () =>
                m({
                    action: 'IGNORE',
                    analyticsLocations: g
                }),
            onUnignore: () =>
                m({
                    action: 'UNIGNORE',
                    analyticsLocations: g
                })
        }),
        T = (0, d.Z)({
            user: t,
            guildId: n,
            location: E,
            color: 'danger',
            onAction: () =>
                m({
                    action: 'REPORT',
                    analyticsLocations: g
                })
        }),
        b = [
            [h, v],
            [
                I,
                y,
                T,
                (0, d.T)({
                    user: t,
                    guildId: n,
                    location: E,
                    color: 'danger',
                    onAction: () =>
                        m({
                            action: 'REPORT',
                            analyticsLocations: g
                        })
                })
            ],
            [
                (0, o.Z)({
                    id: t.id,
                    label: p.intl.string(p.t['/AXYnJ']),
                    onSuccess: () =>
                        m({
                            action: 'COPY_USER_ID',
                            analyticsLocations: g
                        })
                })
            ]
        ];
    return b.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(s.Gt, {
              value: g,
              children: (0, i.jsx)(r.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(r.v2r, {
                          navId: 'user-profile-overflow-menu',
                          onSelect: void 0,
                          onClose: t,
                          'aria-label': p.intl.string(p.t.AXIHpa),
                          children: b.map((e, t) => (0, i.jsx)(r.kSQ, { children: e.map((e) => e) }, t))
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
