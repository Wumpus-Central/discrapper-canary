t.d(n, { Z: () => m });
var r = t(951288),
    l = t(481060),
    o = t(906732),
    i = t(5192),
    c = t(785717),
    s = t(892001),
    a = t(687158),
    d = t(388032);
function u(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function m(e) {
    let { user: n, guildId: t, channelId: m, displayProfile: p, onClose: h } = e,
        { analyticsLocations: x, sourceAnalyticsLocations: b } = (0, o.ZP)(),
        { context: j, trackUserProfileAction: g } = (0, c.KZ)(),
        v = (0, a.ZP)(n.id, t);
    return (null == v ? void 0 : v.guildId) == null || null == j
        ? null
        : (null == p ? void 0 : p.guildId) != null
          ? (0, r.jsx)(l.sNh, {
                id: "view-main-profile",
                label: d.intl.string(d.t.GISTtb),
                subtext: d.intl.formatToPlainString(d.t["mn/nW1"], { displayName: i.ZP.getName(void 0, void 0, n) }),
                action: () => {
                    null == h || h(),
                        (0, s.openUserProfileModal)(
                            f(u({}, j), {
                                showGuildProfile: !1,
                                sourceAnalyticsLocations: b,
                            }),
                        ),
                        g(
                            u(
                                {
                                    action: "PRESS_VIEW_MAIN_PROFILE",
                                    analyticsLocations: x,
                                },
                                j,
                            ),
                        );
                },
            })
          : (0, r.jsx)(l.sNh, {
                id: "view-server-profile",
                label: d.intl.string(d.t.DisZzM),
                subtext: d.intl.formatToPlainString(d.t["mn/nW1"], { displayName: i.ZP.getName(t, m, n) }),
                action: () => {
                    null == h || h(),
                        (0, s.openUserProfileModal)(
                            f(u({}, j), {
                                showGuildProfile: !0,
                                sourceAnalyticsLocations: b,
                            }),
                        ),
                        g(
                            u(
                                {
                                    action: "PRESS_VIEW_SERVER_PROFILE",
                                    analyticsLocations: x,
                                },
                                j,
                            ),
                        );
                },
            });
}
