(n.d(t, {
    Lh: () => f,
    S0: () => j,
    ZP: () => O,
    ku: () => x
}),
    n(388685));
var r = n(255367),
    l = n(73800),
    i = n(846519),
    s = n(755721),
    o = n(481060),
    c = n(493773),
    u = n(765305),
    a = n(388032),
    d = n(933747);
function p(e) {
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
}
function b(e, t) {
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
function g(e) {
    let { text: t, disabled: n, onJoinClick: l } = e;
    return (0, r.jsx)('div', {
        'data-button-hoisted-classname-wrapper': !0,
        className: d.__invalid_button,
        children: (0, r.jsx)(o.zxk, {
            variant: 'active',
            size: 'sm',
            text: t,
            onClick: l,
            disabled: n
        })
    });
}
function x(e) {
    let { onInviteClick: t, canInvite: n, isChannelPublic: u } = e,
        g = new i.V7(),
        [x, j] = l.useState(!1);
    (0, c.ZP)(() => () => {
        g.stop();
    });
    let f = (e) => {
        (null != t && t(e), j(!0), g.start(1000, () => j(!1)));
    };
    return null == t
        ? null
        : (0, r.jsx)(o.ua7, {
              text: h(n, u),
              position: 'top',
              tooltipClassName: d.tooltips,
              'aria-label': a.intl.string(a.t.Ej3B3d),
              children: (e) =>
                  n && u
                      ? (0, r.jsxs)(
                            s.zx,
                            b(p({}, e), {
                                className: d.__invalid_button,
                                innerClassName: d.innerButton,
                                color: s.zx.Colors.PRIMARY,
                                size: s.zx.Sizes.SMALL,
                                onClick: t,
                                children: [
                                    (0, r.jsx)(o.aAc, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    a.intl.string(a.t.RDE0SU)
                                ]
                            })
                        )
                      : (0, r.jsxs)(
                            s.zx,
                            b(p({}, e), {
                                className: d.__invalid_button,
                                innerClassName: d.innerButton,
                                color: s.zx.Colors.PRIMARY,
                                size: s.zx.Sizes.SMALL,
                                disabled: x,
                                look: x ? s.zx.Looks.OUTLINED : s.zx.Looks.FILLED,
                                onClick: f,
                                children: [
                                    x
                                        ? (0, r.jsx)(o.dz2, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                        : (0, r.jsx)(o.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          }),
                                    x ? a.intl.string(a.t['t5VZ8/']) : a.intl.string(a.t.RDE0SU)
                                ]
                            })
                        )
          });
}
function j(e) {
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
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['isUserRsvped', 'isUserLurking', 'onRsvpClick']);
    let c = t && !n;
    return (0, r.jsxs)(
        s.zx,
        b(p({}, i), {
            className: d.__invalid_button,
            innerClassName: d.innerButton,
            size: s.zx.Sizes.SMALL,
            onClick: l,
            color: s.zx.Colors.PRIMARY,
            look: c ? s.zx.Looks.OUTLINED : s.zx.Looks.FILLED,
            disabled: n,
            children: [
                c
                    ? (0, r.jsx)(o.dz2, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : (0, r.jsx)(o.Dkj, {
                          size: 'xs',
                          color: 'currentColor'
                      }),
                a.intl.string(a.t.DlcqlZ)
            ]
        })
    );
}
function f(e) {
    return (0, r.jsx)(o.ua7, {
        text: a.intl.string(a.t['26dTyc']),
        position: 'top',
        tooltipClassName: d.tooltips,
        'aria-label': a.intl.string(a.t.Ej3B3d),
        children: (t) => (0, r.jsx)(j, p({}, t, e))
    });
}
let m = (e) => null == e || e,
    h = (e, t) => (m(e) ? a.intl.string(a.t.vk5Xw8) : m(t) ? a.intl.string(a.t.FFLWGR) : a.intl.string(a.t.k9KGYm));
function O(e) {
    let { isActive: t, isUserLurking: n, rsvped: l, canInvite: i, isChannelPublic: c = !0, entityType: m, onContextMenu: h, onJoinClick: O, onRsvpClick: v, onStartClick: y, onInviteClick: z, onEndClick: C, isJoined: P = !1 } = e,
        k = void 0 !== O;
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            null != h
                ? (0, r.jsx)(o.ua7, {
                      text: a.intl.string(a.t.UKOtz8),
                      position: 'top',
                      'aria-label': a.intl.string(a.t.bt75u7),
                      children: (e) =>
                          (0, r.jsx)(
                              o.P3F,
                              b(p({}, e), {
                                  onClick: h,
                                  className: d.iconButton,
                                  children: (0, r.jsx)(o.xhG, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.icon
                                  })
                              })
                          )
                  })
                : null,
            (0, r.jsx)(x, {
                onInviteClick: z,
                canInvite: i,
                isChannelPublic: c
            }),
            t && m !== u.WX.EXTERNAL
                ? (0, r.jsx)(g, {
                      text: (function (e) {
                          let { isJoined: t, canJoin: n, isVoiceChannel: r } = e;
                          return n ? (t ? a.intl.string(a.t.aW2YlJ) : r ? a.intl.string(a.t.nxUtoa) : a.intl.string(a.t.ZYO5OD)) : a.intl.string(a.t.TVBCKS);
                      })({
                          isJoined: P,
                          canJoin: k,
                          isVoiceChannel: m === u.WX.VOICE
                      }),
                      disabled: !k,
                      onJoinClick: O
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
                null != v &&
                (0, r.jsx)(j, {
                    isUserRsvped: l,
                    isUserLurking: n,
                    onRsvpClick: v
                }),
            t || null == y
                ? null
                : (0, r.jsx)(s.zx, {
                      className: d.__invalid_button,
                      innerClassName: d.innerButton,
                      size: s.zx.Sizes.SMALL,
                      onClick: y,
                      color: s.zx.Colors.GREEN,
                      children: a.intl.string(a.t.I0v0Qk)
                  }),
            t && null != C
                ? (0, r.jsx)(s.zx, {
                      className: d.__invalid_button,
                      innerClassName: d.innerButton,
                      size: s.zx.Sizes.SMALL,
                      onClick: C,
                      color: s.zx.Colors.PRIMARY,
                      children: a.intl.string(a.t.qaYzPD)
                  })
                : null
        ]
    });
}
