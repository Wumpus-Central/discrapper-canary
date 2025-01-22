r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(100527),
    s = r(906732),
    l = r(299206),
    u = r(389052),
    c = r(158508),
    d = r(710631),
    f = r(622724),
    p = r(785717),
    h = r(475413),
    _ = r(388032);
function m(e) {
    let { user: n, guildId: r, viewProfileItem: m } = e,
        { trackUserProfileAction: g } = (0, p.KZ)(),
        { analyticsLocations: E, newestAnalyticsLocation: v } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        y = (0, d.Z)({
            user: n,
            guildId: r,
            onAction: () =>
                g({
                    action: 'PRESS_INVITE_TO_SERVER',
                    analyticsLocations: E
                })
        }),
        b = (0, u.Z)({
            user: n,
            guildId: r,
            location: v,
            color: 'danger',
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
        I = (0, c.Z)({
            user: n,
            guildId: r,
            location: v,
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
        T = (0, f.Z)({
            user: n,
            guildId: r,
            location: v,
            color: 'danger',
            onAction: () =>
                g({
                    action: 'REPORT',
                    analyticsLocations: E
                })
        }),
        S = (0, f.T)({
            user: n,
            guildId: r,
            location: v,
            color: 'danger',
            onAction: () =>
                g({
                    action: 'REPORT',
                    analyticsLocations: E
                })
        }),
        A = [
            [m, y],
            [I, b, T, S],
            [
                (0, l.Z)({
                    id: n.id,
                    label: _.intl.string(_.t['/AXYnJ']),
                    onSuccess: () =>
                        g({
                            action: 'COPY_USER_ID',
                            analyticsLocations: E
                        })
                })
            ]
        ];
    return A.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(s.Gt, {
              value: E,
              children: (0, i.jsx)(a.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(a.Menu, {
                          navId: 'user-profile-overflow-menu',
                          onSelect: void 0,
                          onClose: n,
                          'aria-label': _.intl.string(_.t.AXIHpa),
                          children: A.map((e, n) => (0, i.jsx)(a.MenuGroup, { children: e.map((e) => e) }, n))
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(h.oY, {
                          action: 'PRESS_OPTIONS',
                          icon: a.MoreHorizontalIcon,
                          tooltipText: _.intl.string(_.t.UKOtz8),
                          ...e
                      })
              })
          });
}
