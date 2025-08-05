t.d(n, { Z: () => p });
var l = t(255367),
    r = t(481060),
    i = t(906732),
    o = t(5192),
    s = t(785717),
    d = t(892001),
    a = t(687158),
    c = t(388032);
function u(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l));
            }));
    }
    return e;
}
function f(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function p(e) {
    let { user: n, guildId: t, channelId: p, displayProfile: h, onClose: g } = e,
        { analyticsLocations: v, sourceAnalyticsLocations: j } = (0, i.ZP)(),
        { context: m, trackUserProfileAction: b } = (0, s.KZ)(),
        x = (0, a.ZP)(n.id, t);
    return (null == x ? void 0 : x.guildId) == null || null == m
        ? null
        : (null == h ? void 0 : h.guildId) != null
          ? (0, l.jsx)(r.sNh, {
                id: 'view-main-profile',
                label: c.intl.string(c.t.GISTtb),
                subtext: c.intl.formatToPlainString(c.t['mn/nW1'], { displayName: o.ZP.getName(void 0, void 0, n) }),
                action: () => {
                    (null == g || g(),
                        (0, d.openUserProfileModal)(
                            f(u({}, m), {
                                showGuildProfile: !1,
                                sourceAnalyticsLocations: j
                            })
                        ),
                        b(
                            u(
                                {
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: v
                                },
                                m
                            )
                        ));
                }
            })
          : (0, l.jsx)(r.sNh, {
                id: 'view-server-profile',
                label: c.intl.string(c.t.DisZzM),
                subtext: c.intl.formatToPlainString(c.t['mn/nW1'], { displayName: o.ZP.getName(t, p, n) }),
                action: () => {
                    (null == g || g(),
                        (0, d.openUserProfileModal)(
                            f(u({}, m), {
                                showGuildProfile: !0,
                                sourceAnalyticsLocations: j
                            })
                        ),
                        b(
                            u(
                                {
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: v
                                },
                                m
                            )
                        ));
                }
            });
}
