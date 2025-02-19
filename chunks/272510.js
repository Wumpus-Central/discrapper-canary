n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(100527),
    a = n(906732),
    s = n(299206),
    l = n(389052),
    c = n(158508),
    u = n(710631),
    d = n(622724),
    f = n(785717),
    p = n(475413),
    _ = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e) {
    let { user: t, guildId: n, viewProfileItem: h, appContext: g } = e,
        { trackUserProfileAction: E } = (0, f.KZ)(),
        { analyticsLocations: v, newestAnalyticsLocation: b } = (0, a.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        y = (0, u.Z)({
            user: t,
            guildId: n,
            onAction: () =>
                E({
                    action: 'PRESS_INVITE_TO_SERVER',
                    analyticsLocations: v
                })
        }),
        O = (0, l.Z)({
            user: t,
            guildId: n,
            location: b,
            color: 'danger',
            appContext: g,
            onBlock: () =>
                E({
                    action: 'BLOCK',
                    analyticsLocations: v
                }),
            onIgnore: () =>
                E({
                    action: 'IGNORE',
                    analyticsLocations: v
                }),
            onUnblock: () =>
                E({
                    action: 'UNBLOCK',
                    analyticsLocations: v
                })
        }),
        S = (0, c.Z)({
            user: t,
            guildId: n,
            location: b,
            appContext: g,
            onBlock: () =>
                E({
                    action: 'BLOCK',
                    analyticsLocations: v
                }),
            onIgnore: () =>
                E({
                    action: 'IGNORE',
                    analyticsLocations: v
                }),
            onUnignore: () =>
                E({
                    action: 'UNIGNORE',
                    analyticsLocations: v
                })
        }),
        I = (0, d.Z)({
            user: t,
            guildId: n,
            location: b,
            appContext: g,
            color: 'danger',
            onAction: () =>
                E({
                    action: 'REPORT',
                    analyticsLocations: v
                })
        }),
        T = [
            [h, y],
            [
                S,
                O,
                I,
                (0, d.T)({
                    user: t,
                    guildId: n,
                    location: b,
                    appContext: g,
                    color: 'danger',
                    onAction: () =>
                        E({
                            action: 'REPORT',
                            analyticsLocations: v
                        })
                })
            ],
            [
                (0, s.Z)({
                    id: t.id,
                    label: _.NW.string(_.t['/AXYnJ']),
                    onSuccess: () =>
                        E({
                            action: 'COPY_USER_ID',
                            analyticsLocations: v
                        })
                })
            ]
        ];
    return T.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.Gt, {
              value: v,
              children: (0, r.jsx)(i.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(i.v2r, {
                          navId: 'user-profile-overflow-menu',
                          onSelect: void 0,
                          onClose: t,
                          'aria-label': _.NW.string(_.t.AXIHpa),
                          children: T.map((e, t) => (0, r.jsx)(i.kSQ, { children: e.map((e) => e) }, t))
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          p.oY,
                          m(
                              {
                                  action: 'PRESS_OPTIONS',
                                  icon: i.xhG,
                                  tooltipText: _.NW.string(_.t.UKOtz8)
                              },
                              e
                          )
                      )
              })
          });
}
