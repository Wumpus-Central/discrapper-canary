n.d(t, {
    Lh: () => f,
    S0: () => x,
    ZP: () => h,
    ku: () => g
}),
    n(388685);
var r = n(200651),
    l = n(192379),
    i = n(846519),
    s = n(481060),
    o = n(493773),
    c = n(765305),
    u = n(388032),
    a = n(933747);
function d(e) {
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
}
function p(e, t) {
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
function b(e) {
    let { text: t, disabled: n, onJoinClick: l } = e;
    return (0, r.jsx)(s.zxk, {
        className: a.__invalid_button,
        size: s.zxk.Sizes.SMALL,
        onClick: l,
        color: s.zxk.Colors.GREEN,
        disabled: n,
        children: t
    });
}
function g(e) {
    let { onInviteClick: t, canInvite: n, isChannelPublic: c } = e,
        b = new i.V7(),
        [g, x] = l.useState(!1);
    (0, o.ZP)(() => () => {
        b.stop();
    });
    let f = (e) => {
        null != t && t(e), x(!0), b.start(1000, () => x(!1));
    };
    return null == t
        ? null
        : (0, r.jsx)(s.ua7, {
              text: m(n, c),
              position: 'top',
              tooltipClassName: a.tooltips,
              'aria-label': u.intl.string(u.t.Ej3B3d),
              children: (e) =>
                  n && c
                      ? (0, r.jsxs)(
                            s.zxk,
                            p(d({}, e), {
                                className: a.__invalid_button,
                                innerClassName: a.innerButton,
                                color: s.zxk.Colors.PRIMARY,
                                size: s.zxk.Sizes.SMALL,
                                onClick: t,
                                children: [
                                    (0, r.jsx)(s.aAc, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    u.intl.string(u.t.RDE0SU)
                                ]
                            })
                        )
                      : (0, r.jsxs)(
                            s.zxk,
                            p(d({}, e), {
                                className: a.__invalid_button,
                                innerClassName: a.innerButton,
                                color: s.zxk.Colors.PRIMARY,
                                size: s.zxk.Sizes.SMALL,
                                disabled: g,
                                look: g ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
                                onClick: f,
                                children: [
                                    g
                                        ? (0, r.jsx)(s.dz2, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                        : (0, r.jsx)(s.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                    g ? u.intl.string(u.t['t5VZ8/']) : u.intl.string(u.t.RDE0SU)
                                ]
                            })
                        )
          });
}
function x(e) {
    var { isUserRsvped: t, isUserLurking: n, onRsvpClick: l } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['isUserRsvped', 'isUserLurking', 'onRsvpClick']);
    let o = t && !n;
    return (0, r.jsxs)(
        s.zxk,
        p(d({}, i), {
            className: a.__invalid_button,
            innerClassName: a.innerButton,
            size: s.zxk.Sizes.SMALL,
            onClick: l,
            color: s.zxk.Colors.PRIMARY,
            look: o ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
            disabled: n,
            children: [
                o
                    ? (0, r.jsx)(s.dz2, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : (0, r.jsx)(s.Dkj, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                u.intl.string(u.t.DlcqlZ)
            ]
        })
    );
}
function f(e) {
    return (0, r.jsx)(s.ua7, {
        text: u.intl.string(u.t['26dTyc']),
        position: 'top',
        tooltipClassName: a.tooltips,
        'aria-label': u.intl.string(u.t.Ej3B3d),
        children: (t) => (0, r.jsx)(x, d({}, t, e))
    });
}
let j = (e) => null == e || e,
    m = (e, t) => (j(e) ? u.intl.string(u.t.vk5Xw8) : j(t) ? u.intl.string(u.t.FFLWGR) : u.intl.string(u.t.k9KGYm));
function h(e) {
    let { isActive: t, isUserLurking: n, rsvped: l, canInvite: i, isChannelPublic: o = !0, entityType: j, onContextMenu: m, onJoinClick: h, onRsvpClick: O, onStartClick: k, onInviteClick: v, onEndClick: y, isJoined: z = !1 } = e,
        C = void 0 !== h;
    return (0, r.jsxs)('div', {
        className: a.container,
        children: [
            null != m
                ? (0, r.jsx)(s.ua7, {
                      text: u.intl.string(u.t.UKOtz8),
                      position: 'top',
                      'aria-label': u.intl.string(u.t.bt75u7),
                      children: (e) =>
                          (0, r.jsx)(
                              s.P3F,
                              p(d({}, e), {
                                  onClick: m,
                                  className: a.iconButton,
                                  children: (0, r.jsx)(s.xhG, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: a.icon
                                  })
                              })
                          )
                  })
                : null,
            (0, r.jsx)(g, {
                onInviteClick: v,
                canInvite: i,
                isChannelPublic: o
            }),
            t && j !== c.WX.EXTERNAL
                ? (0, r.jsx)(b, {
                      text: (function (e) {
                          let { isJoined: t, canJoin: n, isVoiceChannel: r } = e;
                          return n ? (t ? u.intl.string(u.t.aW2YlJ) : r ? u.intl.string(u.t.nxUtoa) : u.intl.string(u.t.ZYO5OD)) : u.intl.string(u.t.TVBCKS);
                      })({
                          isJoined: z,
                          canJoin: C,
                          isVoiceChannel: j === c.WX.VOICE
                      }),
                      disabled: !C,
                      onJoinClick: h
                  })
                : null,
            n &&
                !t &&
                (0, r.jsx)(f, {
                    isUserRsvped: l,
                    isUserLurking: n
                }),
            !n &&
                !t &&
                null != O &&
                (0, r.jsx)(x, {
                    isUserRsvped: l,
                    isUserLurking: n,
                    onRsvpClick: O
                }),
            t || null == k
                ? null
                : (0, r.jsx)(s.zxk, {
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      size: s.zxk.Sizes.SMALL,
                      onClick: k,
                      color: s.zxk.Colors.GREEN,
                      children: u.intl.string(u.t.I0v0Qk)
                  }),
            t && null != y
                ? (0, r.jsx)(s.zxk, {
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      size: s.zxk.Sizes.SMALL,
                      onClick: y,
                      color: s.zxk.Colors.PRIMARY,
                      children: u.intl.string(u.t.qaYzPD)
                  })
                : null
        ]
    });
}
