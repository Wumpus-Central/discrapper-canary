n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(299206),
    c = n(389052),
    u = n(158508),
    d = n(710631),
    f = n(622724),
    _ = n(785717),
    p = n(475413),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    let { user: t, guildId: n, viewProfileItem: m, appContext: E } = e,
        b = i.useRef(null),
        { trackUserProfileAction: y } = (0, _.KZ)(),
        { analyticsLocations: v, newestAnalyticsLocation: O } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
        I = (0, d.Z)({
            user: t,
            guildId: n,
            onAction: () =>
                y({
                    action: 'PRESS_INVITE_TO_SERVER',
                    analyticsLocations: v
                })
        }),
        S = (0, c.Z)({
            user: t,
            guildId: n,
            location: O,
            color: 'danger',
            appContext: E,
            onBlock: () =>
                y({
                    action: 'BLOCK',
                    analyticsLocations: v
                }),
            onIgnore: () =>
                y({
                    action: 'IGNORE',
                    analyticsLocations: v
                }),
            onUnblock: () =>
                y({
                    action: 'UNBLOCK',
                    analyticsLocations: v
                })
        }),
        T = (0, u.Z)({
            user: t,
            guildId: n,
            location: O,
            appContext: E,
            onBlock: () =>
                y({
                    action: 'BLOCK',
                    analyticsLocations: v
                }),
            onIgnore: () =>
                y({
                    action: 'IGNORE',
                    analyticsLocations: v
                }),
            onUnignore: () =>
                y({
                    action: 'UNIGNORE',
                    analyticsLocations: v
                })
        }),
        N = (0, f.Z)({
            user: t,
            guildId: n,
            location: O,
            appContext: E,
            color: 'danger',
            onAction: () =>
                y({
                    action: 'REPORT',
                    analyticsLocations: v
                })
        }),
        A = [
            [m, I],
            [
                T,
                S,
                N,
                (0, f.T)({
                    user: t,
                    guildId: n,
                    location: O,
                    appContext: E,
                    color: 'danger',
                    onAction: () =>
                        y({
                            action: 'REPORT',
                            analyticsLocations: v
                        })
                })
            ],
            [
                (0, l.Z)({
                    id: t.id,
                    label: h.NW.string(h.t['/AXYnJ']),
                    onSuccess: () =>
                        y({
                            action: 'COPY_USER_ID',
                            analyticsLocations: v
                        })
                })
            ]
        ];
    return A.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(s.Gt, {
              value: v,
              children: (0, r.jsx)(o.yRy, {
                  targetElementRef: b,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(o.v2r, {
                          navId: 'user-profile-overflow-menu',
                          onSelect: void 0,
                          onClose: t,
                          'aria-label': h.NW.string(h.t.AXIHpa),
                          children: A.map((e, t) => (0, r.jsx)(o.kSQ, { children: e.map((e) => e) }, t))
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          p.oY,
                          g(
                              {
                                  ref: b,
                                  action: 'PRESS_OPTIONS',
                                  icon: o.xhG,
                                  tooltipText: h.NW.string(h.t.UKOtz8)
                              },
                              e
                          )
                      )
              })
          });
}
