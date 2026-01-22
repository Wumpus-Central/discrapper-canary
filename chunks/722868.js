t.d(l, { A: () => p });
var n = t(627968),
    i = t(397927),
    r = t(688810),
    s = t(562153),
    a = t(183555),
    o = t(657331),
    d = t(950191),
    c = t(985018);
function u(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (l) {
                var n;
                (n = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[l] = n);
            });
    }
    return e;
}
function f(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
function p(e) {
    let { user: l, guildId: t, channelId: p, displayProfile: m, onClose: x } = e,
        { analyticsLocations: A, sourceAnalyticsLocations: j } = (0, r.Ay)(),
        { context: h, trackUserProfileAction: g } = (0, a.NJ)(),
        v = (0, d.Ay)(l.id, t);
    return (null == v ? void 0 : v.guildId) == null
        ? null
        : (null == m ? void 0 : m.guildId) != null
          ? (0, n.jsx)(i.Drp, {
                id: "view-main-profile",
                label: c.intl.string(c.t.GISTta),
                subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: s.Ay.getName(void 0, void 0, l) }),
                action: () => {
                    null == x || x(),
                        (0, o.openUserProfileModal)(
                            f(
                                u(
                                    {
                                        userId: l.id,
                                        guildId: t,
                                    },
                                    h,
                                ),
                                {
                                    showGuildProfile: !1,
                                    sourceAnalyticsLocations: j,
                                },
                            ),
                        ),
                        g(
                            u(
                                {
                                    action: "PRESS_VIEW_MAIN_PROFILE",
                                    analyticsLocations: A,
                                },
                                h,
                            ),
                        );
                },
            })
          : (0, n.jsx)(i.Drp, {
                id: "view-server-profile",
                label: c.intl.string(c.t.DisZzB),
                subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: s.Ay.getName(t, p, l) }),
                action: () => {
                    null == x || x(),
                        (0, o.openUserProfileModal)(
                            f(
                                u(
                                    {
                                        userId: l.id,
                                        guildId: t,
                                    },
                                    h,
                                ),
                                {
                                    showGuildProfile: !0,
                                    sourceAnalyticsLocations: j,
                                },
                            ),
                        ),
                        g(
                            u(
                                {
                                    action: "PRESS_VIEW_SERVER_PROFILE",
                                    analyticsLocations: A,
                                },
                                h,
                            ),
                        );
                },
            });
}
