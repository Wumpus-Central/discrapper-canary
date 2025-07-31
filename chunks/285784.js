(n.d(e, {
    S0: () => b,
    ZP: () => j,
    ku: () => g
}),
    n(388685));
var r = n(255367),
    l = n(73800),
    i = n(846519),
    s = n(481060),
    c = n(493773),
    o = n(765305),
    a = n(388032),
    u = n(933747);
function d(t) {
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
}
function p(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function g(t) {
    let { onInviteClick: e, canInvite: n, isChannelPublic: o } = t,
        g = new i.V7(),
        [b, f] = l.useState(!1);
    (0, c.ZP)(() => () => {
        g.stop();
    });
    let j = (t) => {
        (null != e && e(t), f(!0), g.start(1000, () => f(!1)));
    };
    return null == e
        ? null
        : (0, r.jsx)(s.ua7, {
              text: m(n, o),
              position: 'top',
              tooltipClassName: u.tooltips,
              'aria-label': a.intl.string(a.t.Ej3B3d),
              children: (t) =>
                  n && o
                      ? (0, r.jsx)(
                            s.zxk,
                            p(d({}, t), {
                                variant: 'secondary',
                                icon: s.aAc,
                                size: 'sm',
                                onClick: e,
                                text: a.intl.string(a.t.RDE0SU)
                            })
                        )
                      : (0, r.jsx)(
                            s.zxk,
                            p(d({}, t), {
                                variant: 'secondary',
                                icon: b ? s.dz2 : s.xPt,
                                size: 'sm',
                                onClick: j,
                                disabled: b,
                                text: b ? a.intl.string(a.t['t5VZ8/']) : a.intl.string(a.t.RDE0SU)
                            })
                        )
          });
}
function b(t) {
    let { isUserRsvped: e, isUserLurking: n, onRsvpClick: l } = t,
        i = e && !n;
    return (0, r.jsx)(s.zxk, {
        variant: i ? 'active' : 'secondary',
        size: 'sm',
        icon: i ? s.dz2 : s.Dkj,
        text: a.intl.string(a.t.DlcqlZ),
        onClick: l,
        disabled: n
    });
}
let f = (t) => null == t || t,
    m = (t, e) => (f(t) ? a.intl.string(a.t.vk5Xw8) : f(e) ? a.intl.string(a.t.FFLWGR) : a.intl.string(a.t.k9KGYm));
function j(t) {
    let { isActive: e, isUserLurking: n, rsvped: l, canInvite: i, isChannelPublic: c = !0, entityType: f, onContextMenu: m, onJoinClick: j, onRsvpClick: v, onStartClick: O, onInviteClick: h, onEndClick: y, onJoinGuildClick: x, isJoined: P = !1 } = t,
        k = void 0 !== j;
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            null != m
                ? (0, r.jsx)(s.ua7, {
                      text: a.intl.string(a.t.UKOtz8),
                      position: 'top',
                      'aria-label': a.intl.string(a.t.bt75u7),
                      children: (t) =>
                          (0, r.jsx)(
                              s.P3F,
                              p(d({}, t), {
                                  onClick: m,
                                  className: u.iconButton,
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: u.icon
                                  })
                              })
                          )
                  })
                : null,
            (0, r.jsx)(g, {
                onInviteClick: h,
                canInvite: i,
                isChannelPublic: c
            }),
            e && f !== o.WX.EXTERNAL
                ? (0, r.jsx)(s.zxk, {
                      variant: 'active',
                      size: 'sm',
                      text: (function (t) {
                          let { isJoined: e, canJoin: n, isVoiceChannel: r } = t;
                          return n ? (e ? a.intl.string(a.t.aW2YlJ) : r ? a.intl.string(a.t.nxUtoa) : a.intl.string(a.t.ZYO5OD)) : a.intl.string(a.t.TVBCKS);
                      })({
                          isJoined: P,
                          canJoin: k,
                          isVoiceChannel: f === o.WX.VOICE
                      }),
                      onClick: j,
                      disabled: !k
                  })
                : null,
            n &&
                null != x &&
                (0, r.jsx)(s.zxk, {
                    variant: 'active',
                    size: 'sm',
                    text: a.intl.string(a.t['2BP08P']),
                    onClick: x
                }),
            !n &&
                !e &&
                null != v &&
                (0, r.jsx)(b, {
                    isUserRsvped: l,
                    isUserLurking: n,
                    onRsvpClick: v
                }),
            e || null == O
                ? null
                : (0, r.jsx)(s.zxk, {
                      variant: 'primary',
                      size: 'sm',
                      onClick: O,
                      text: a.intl.string(a.t.I0v0Qk)
                  }),
            e && null != y
                ? (0, r.jsx)(s.zxk, {
                      variant: 'secondary',
                      size: 'sm',
                      onClick: y,
                      text: a.intl.string(a.t.qaYzPD)
                  })
                : null
        ]
    });
}
