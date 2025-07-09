n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(755721),
    i = n(481060),
    s = n(285784),
    o = n(388032),
    c = n(794995);
function u(e) {
    let { isActive: t, isUserLurking: n, rsvped: u, onContextMenu: a, onRsvpClick: d, onGoToGuildClick: p, isDetailsView: b = !1, isMember: g, onJoinGuildClick: x, guildName: j, onInviteClick: f, canInvite: m, isChannelPublic: h } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            null != a
                ? (0, r.jsx)(i.ua7, {
                      text: o.intl.string(o.t.UKOtz8),
                      position: 'top',
                      'aria-label': o.intl.string(o.t.bt75u7),
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              i.P3F,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, e)),
                              (n = n =
                                  {
                                      onClick: a,
                                      className: c.iconButton,
                                      children: (0, r.jsx)(i.xhG, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: c.icon
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
            g &&
                (0, r.jsx)(s.ku, {
                    onInviteClick: f,
                    canInvite: m,
                    isChannelPublic: h
                }),
            n &&
                !t &&
                (0, r.jsx)(s.Lh, {
                    isUserRsvped: u,
                    isUserLurking: n
                }),
            g &&
                !n &&
                !t &&
                null != d &&
                (0, r.jsx)(s.S0, {
                    isUserRsvped: u,
                    isUserLurking: n,
                    onRsvpClick: d
                }),
            g && !n && (!b || t)
                ? (0, r.jsx)(l.zx, {
                      className: c.button,
                      innerClassName: c.innerButton,
                      size: l.zx.Sizes.SMALL,
                      onClick: p,
                      color: l.zx.Colors.GREEN,
                      children: o.intl.string(o.t['N+TB5u'])
                  })
                : null,
            g
                ? null
                : (0, r.jsx)(l.zx, {
                      className: c.button,
                      innerClassName: c.innerButton,
                      size: l.zx.Sizes.SMALL,
                      onClick: x,
                      color: l.zx.Colors.GREEN,
                      children: o.intl.format(o.t['4BiO8f'], { guildName: j })
                  })
        ]
    });
}
