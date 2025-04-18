n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(285784),
    s = n(388032),
    o = n(794995);
function c(e) {
    let { isActive: t, isUserLurking: n, rsvped: c, onContextMenu: u, onRsvpClick: a, onGoToGuildClick: d, isDetailsView: p = !1, isMember: b, onJoinGuildClick: g, guildName: x, onInviteClick: f, canInvite: j, isChannelPublic: m } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            null != u
                ? (0, r.jsx)(l.ua7, {
                      text: s.NW.string(s.t.UKOtz8),
                      position: 'top',
                      'aria-label': s.NW.string(s.t.bt75u7),
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              l.P3F,
                              ((t = (function (e) {
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
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (n = n =
                                  {
                                      onClick: u,
                                      className: o.iconButton,
                                      children: (0, r.jsx)(l.xhG, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: o.icon
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t)
                          );
                      }
                  })
                : null,
            b &&
                (0, r.jsx)(i.ku, {
                    onInviteClick: f,
                    canInvite: j,
                    isChannelPublic: m
                }),
            n &&
                !t &&
                (0, r.jsx)(i.Lh, {
                    isUserRsvped: c,
                    isUserLurking: n
                }),
            b &&
                !n &&
                !t &&
                null != a &&
                (0, r.jsx)(i.S0, {
                    isUserRsvped: c,
                    isUserLurking: n,
                    onRsvpClick: a
                }),
            b && !n && (!p || t)
                ? (0, r.jsx)(l.zxk, {
                      className: o.button,
                      innerClassName: o.innerButton,
                      size: l.zxk.Sizes.SMALL,
                      onClick: d,
                      color: l.zxk.Colors.GREEN,
                      children: s.NW.string(s.t['N+TB5u'])
                  })
                : null,
            b
                ? null
                : (0, r.jsx)(l.zxk, {
                      className: o.button,
                      innerClassName: o.innerButton,
                      size: l.zxk.Sizes.SMALL,
                      onClick: g,
                      color: l.zxk.Colors.GREEN,
                      children: s.NW.format(s.t['4BiO8f'], { guildName: x })
                  })
        ]
    });
}
