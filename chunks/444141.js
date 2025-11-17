t.d(n, { Z: () => p });
var l = t(54381),
    i = t(481060),
    o = t(906732),
    r = t(5192),
    s = t(785717),
    a = t(892001),
    c = t(687158),
    d = t(388032);
function u(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function m(e, n) {
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
    let { user: n, guildId: t, channelId: p, displayProfile: f, onClose: x } = e,
        { analyticsLocations: h, sourceAnalyticsLocations: v } = (0, o.ZP)(),
        { context: j, trackUserProfileAction: g } = (0, s.KZ)(),
        b = (0, c.ZP)(n.id, t);
    return (null == b ? void 0 : b.guildId) == null
        ? null
        : (null == f ? void 0 : f.guildId) != null
          ? (0, l.jsx)(i.sNh, {
                id: "view-main-profile",
                label: d.intl.string(d.t.GISTta),
                subtext: d.intl.formatToPlainString(d.t["mn/nW2"], { displayName: r.ZP.getName(void 0, void 0, n) }),
                action: () => {
                    null == x || x(),
                        (0, a.openUserProfileModal)(
                            m(
                                u(
                                    {
                                        userId: n.id,
                                        guildId: t,
                                    },
                                    j,
                                ),
                                {
                                    showGuildProfile: !1,
                                    sourceAnalyticsLocations: v,
                                },
                            ),
                        ),
                        g(
                            u(
                                {
                                    action: "PRESS_VIEW_MAIN_PROFILE",
                                    analyticsLocations: h,
                                },
                                j,
                            ),
                        );
                },
            })
          : (0, l.jsx)(i.sNh, {
                id: "view-server-profile",
                label: d.intl.string(d.t.DisZzB),
                subtext: d.intl.formatToPlainString(d.t["mn/nW2"], { displayName: r.ZP.getName(t, p, n) }),
                action: () => {
                    null == x || x(),
                        (0, a.openUserProfileModal)(
                            m(
                                u(
                                    {
                                        userId: n.id,
                                        guildId: t,
                                    },
                                    j,
                                ),
                                {
                                    showGuildProfile: !0,
                                    sourceAnalyticsLocations: v,
                                },
                            ),
                        ),
                        g(
                            u(
                                {
                                    action: "PRESS_VIEW_SERVER_PROFILE",
                                    analyticsLocations: h,
                                },
                                j,
                            ),
                        );
                },
            });
}
