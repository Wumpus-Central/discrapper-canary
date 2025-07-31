n.d(e, { Z: () => o });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(285784),
    s = n(388032),
    c = n(794995);
function o(t) {
    let { isActive: e, isUserLurking: n, rsvped: o, onContextMenu: a, onRsvpClick: u, onGoToGuildClick: d, isDetailsView: p = !1, isMember: g, onJoinGuildClick: b, guildName: f, onInviteClick: m, canInvite: j, isChannelPublic: v } = t;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            null != a
                ? (0, r.jsx)(l.ua7, {
                      text: s.intl.string(s.t.UKOtz8),
                      position: 'top',
                      'aria-label': s.intl.string(s.t.bt75u7),
                      children: (t) => {
                          var e, n;
                          return (0, r.jsx)(
                              l.P3F,
                              ((e = (function (t) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = null != arguments[e] ? arguments[e] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                              })
                                          )),
                                          r.forEach(function (e) {
                                              var r;
                                              ((r = n[e]),
                                                  e in t
                                                      ? Object.defineProperty(t, e, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (t[e] = r));
                                          }));
                                  }
                                  return t;
                              })({}, t)),
                              (n = n =
                                  {
                                      onClick: a,
                                      className: c.iconButton,
                                      children: (0, r.jsx)(l.xhG, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: c.icon
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                  : (function (t, e) {
                                        var n = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(t);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                    }),
                              e)
                          );
                      }
                  })
                : null,
            g &&
                (0, r.jsx)(i.ku, {
                    onInviteClick: m,
                    canInvite: j,
                    isChannelPublic: v
                }),
            g &&
                !n &&
                !e &&
                null != u &&
                (0, r.jsx)(i.S0, {
                    isUserRsvped: o,
                    isUserLurking: n,
                    onRsvpClick: u
                }),
            g && !n && (!p || e)
                ? (0, r.jsx)(l.zxk, {
                      variant: 'primary',
                      size: 'sm',
                      onClick: d,
                      text: s.intl.string(s.t['N+TB5u'])
                  })
                : null,
            g
                ? null
                : (0, r.jsx)(l.zxk, {
                      variant: 'primary',
                      size: 'sm',
                      onClick: b,
                      text: s.intl.format(s.t['4BiO8f'], { guildName: f })
                  })
        ]
    });
}
