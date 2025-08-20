t.d(n, { Z: () => m });
var r = t(951288),
    o = t(481060),
    l = t(906732),
    i = t(5192),
    c = t(785717),
    a = t(892001),
    s = t(687158),
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
    let { user: n, guildId: t, channelId: m, displayProfile: p, onClose: b } = e,
        { analyticsLocations: g, sourceAnalyticsLocations: x } = (0, l.ZP)(),
        { context: h, trackUserProfileAction: j } = (0, c.KZ)(),
        v = (0, s.ZP)(n.id, t);
    return (null == v ? void 0 : v.guildId) == null || null == h
        ? null
        : (null == p ? void 0 : p.guildId) != null
          ? (0, r.jsx)(o.sNh, {
                id: "view-main-profile",
                label: d.intl.string(d.t.GISTtb),
                subtext: d.intl.formatToPlainString(d.t["mn/nW1"], { displayName: i.ZP.getName(void 0, void 0, n) }),
                action: () => {
                    null == b || b(),
                        (0, a.openUserProfileModal)(
                            f(u({}, h), {
                                showGuildProfile: !1,
                                sourceAnalyticsLocations: x,
                            }),
                        ),
                        j(
                            u(
                                {
                                    action: "PRESS_VIEW_MAIN_PROFILE",
                                    analyticsLocations: g,
                                },
                                h,
                            ),
                        );
                },
            })
          : (0, r.jsx)(o.sNh, {
                id: "view-server-profile",
                label: d.intl.string(d.t.DisZzM),
                subtext: d.intl.formatToPlainString(d.t["mn/nW1"], { displayName: i.ZP.getName(t, m, n) }),
                action: () => {
                    null == b || b(),
                        (0, a.openUserProfileModal)(
                            f(u({}, h), {
                                showGuildProfile: !0,
                                sourceAnalyticsLocations: x,
                            }),
                        ),
                        j(
                            u(
                                {
                                    action: "PRESS_VIEW_SERVER_PROFILE",
                                    analyticsLocations: g,
                                },
                                h,
                            ),
                        );
                },
            });
}
