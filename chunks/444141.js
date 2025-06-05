t.d(n, { Z: () => g });
var l = t(255367),
    r = t(481060),
    i = t(906732),
    o = t(5192),
    s = t(785717),
    a = t(977378),
    c = t(892001),
    u = t(687158),
    d = t(388032);
function f(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function p(e, n) {
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
function g(e) {
    let { user: n, guildId: t, channelId: g, displayProfile: v, onClose: j } = e,
        { analyticsLocations: h, sourceAnalyticsLocations: m } = (0, i.ZP)(),
        { context: b, trackUserProfileAction: x } = (0, s.KZ)(),
        O = (0, u.ZP)(n.id, t),
        { viewMainProfileEnabled: y } = (0, a.E)({ location: 'useViewUserProfileModalItem' });
    return y && (null == O ? void 0 : O.guildId) != null && null != b
        ? (null == v ? void 0 : v.guildId) != null
            ? (0, l.jsx)(r.sNh, {
                  id: 'view-main-profile',
                  label: d.intl.string(d.t.GISTtb),
                  subtext: d.intl.formatToPlainString(d.t['mn/nW1'], { displayName: o.ZP.getName(void 0, void 0, n) }),
                  action: () => {
                      null == j || j(),
                          (0, c.openUserProfileModal)(
                              p(f({}, b), {
                                  showGuildProfile: !1,
                                  sourceAnalyticsLocations: m
                              })
                          ),
                          x(
                              f(
                                  {
                                      action: 'PRESS_VIEW_MAIN_PROFILE',
                                      analyticsLocations: h
                                  },
                                  b
                              )
                          );
                  }
              })
            : (0, l.jsx)(r.sNh, {
                  id: 'view-server-profile',
                  label: d.intl.string(d.t.DisZzM),
                  subtext: d.intl.formatToPlainString(d.t['mn/nW1'], { displayName: o.ZP.getName(t, g, n) }),
                  action: () => {
                      null == j || j(),
                          (0, c.openUserProfileModal)(
                              p(f({}, b), {
                                  showGuildProfile: !0,
                                  sourceAnalyticsLocations: m
                              })
                          ),
                          x(
                              f(
                                  {
                                      action: 'PRESS_VIEW_SERVER_PROFILE',
                                      analyticsLocations: h
                                  },
                                  b
                              )
                          );
                  }
              })
        : null;
}
