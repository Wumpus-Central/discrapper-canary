n.d(t, { Z: () => p });
var r = n(255367),
    l = n(481060),
    i = n(906732),
    o = n(5192),
    a = n(785717),
    c = n(892001),
    s = n(687158),
    d = n(388032);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { user: t, guildId: n, channelId: p, displayProfile: m, onClose: b } = e,
        { analyticsLocations: g, sourceAnalyticsLocations: j } = (0, i.ZP)(),
        { context: y, trackUserProfileAction: O } = (0, a.KZ)(),
        x = (0, s.ZP)(t.id, n);
    return (null == x ? void 0 : x.guildId) == null || null == y
        ? null
        : (null == m ? void 0 : m.guildId) != null
          ? (0, r.jsx)(l.sNh, {
                id: "view-main-profile",
                label: d.intl.string(d.t.GISTtb),
                subtext: d.intl.formatToPlainString(d.t["mn/nW1"], { displayName: o.ZP.getName(void 0, void 0, t) }),
                action: () => {
                    null == b || b(),
                        (0, c.openUserProfileModal)(
                            f(u({}, y), {
                                showGuildProfile: !1,
                                sourceAnalyticsLocations: j,
                            }),
                        ),
                        O(
                            u(
                                {
                                    action: "PRESS_VIEW_MAIN_PROFILE",
                                    analyticsLocations: g,
                                },
                                y,
                            ),
                        );
                },
            })
          : (0, r.jsx)(l.sNh, {
                id: "view-server-profile",
                label: d.intl.string(d.t.DisZzM),
                subtext: d.intl.formatToPlainString(d.t["mn/nW1"], { displayName: o.ZP.getName(n, p, t) }),
                action: () => {
                    null == b || b(),
                        (0, c.openUserProfileModal)(
                            f(u({}, y), {
                                showGuildProfile: !0,
                                sourceAnalyticsLocations: j,
                            }),
                        ),
                        O(
                            u(
                                {
                                    action: "PRESS_VIEW_SERVER_PROFILE",
                                    analyticsLocations: g,
                                },
                                y,
                            ),
                        );
                },
            });
}
