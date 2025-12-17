t.d(n, { Z: () => m });
var l = t(54381),
    i = t(481060),
    o = t(906732),
    r = t(5192),
    a = t(785717),
    c = t(892001),
    s = t(687158),
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
function m(e) {
    let { user: n, guildId: t, channelId: m, displayProfile: p, onClose: x } = e,
        { analyticsLocations: h, sourceAnalyticsLocations: v } = (0, o.ZP)(),
        { context: b, trackUserProfileAction: j } = (0, a.KZ)(),
        g = (0, s.ZP)(n.id, t);
    return (null == g ? void 0 : g.guildId) == null
        ? null
        : (null == p ? void 0 : p.guildId) != null
          ? (0, l.jsx)(i.sNh, {
                id: "view-main-profile",
                label: d.intl.string(d.t.GISTta),
                subtext: d.intl.formatToPlainString(d.t["mn/nW2"], { displayName: r.ZP.getName(void 0, void 0, n) }),
                action: () => {
                    null == x || x(),
                        (0, c.openUserProfileModal)(
                            f(
                                u(
                                    {
                                        userId: n.id,
                                        guildId: t,
                                    },
                                    b,
                                ),
                                {
                                    showGuildProfile: !1,
                                    sourceAnalyticsLocations: v,
                                },
                            ),
                        ),
                        j(
                            u(
                                {
                                    action: "PRESS_VIEW_MAIN_PROFILE",
                                    analyticsLocations: h,
                                },
                                b,
                            ),
                        );
                },
            })
          : (0, l.jsx)(i.sNh, {
                id: "view-server-profile",
                label: d.intl.string(d.t.DisZzB),
                subtext: d.intl.formatToPlainString(d.t["mn/nW2"], { displayName: r.ZP.getName(t, m, n) }),
                action: () => {
                    null == x || x(),
                        (0, c.openUserProfileModal)(
                            f(
                                u(
                                    {
                                        userId: n.id,
                                        guildId: t,
                                    },
                                    b,
                                ),
                                {
                                    showGuildProfile: !0,
                                    sourceAnalyticsLocations: v,
                                },
                            ),
                        ),
                        j(
                            u(
                                {
                                    action: "PRESS_VIEW_SERVER_PROFILE",
                                    analyticsLocations: h,
                                },
                                b,
                            ),
                        );
                },
            });
}
