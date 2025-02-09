l.d(n, {
    Lh: () => h,
    S0: () => k,
    ZP: () => g,
    ku: () => x
}),
    l(47120);
var e = l(200651),
    i = l(192379),
    s = l(846519),
    r = l(481060),
    o = l(493773),
    a = l(765305),
    u = l(388032),
    c = l(117222);
function d(t) {
    let { text: n, disabled: l, onJoinClick: i } = t;
    return (0, e.jsx)(r.zxk, {
        className: c.__invalid_button,
        size: r.zxk.Sizes.SMALL,
        onClick: i,
        color: r.zxk.Colors.GREEN,
        disabled: l,
        children: n
    });
}
function x(t) {
    let { onInviteClick: n, canInvite: l, isChannelPublic: a } = t,
        d = new s.V7(),
        [x, k] = i.useState(!1);
    (0, o.ZP)(() => () => {
        d.stop();
    });
    let h = (t) => {
        null != n && n(t), k(!0), d.start(1000, () => k(!1));
    };
    return null == n
        ? null
        : (0, e.jsx)(r.ua7, {
              text: z(l, a),
              position: 'top',
              tooltipClassName: c.tooltips,
              'aria-label': u.intl.string(u.t.Ej3B3d),
              children: (t) =>
                  l && a
                      ? (0, e.jsxs)(r.zxk, {
                            ...t,
                            className: c.__invalid_button,
                            innerClassName: c.innerButton,
                            color: r.zxk.Colors.PRIMARY,
                            size: r.zxk.Sizes.SMALL,
                            onClick: n,
                            children: [
                                (0, e.jsx)(r.aAc, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                u.intl.string(u.t.RDE0SU)
                            ]
                        })
                      : (0, e.jsxs)(r.zxk, {
                            ...t,
                            className: c.__invalid_button,
                            innerClassName: c.innerButton,
                            color: r.zxk.Colors.PRIMARY,
                            size: r.zxk.Sizes.SMALL,
                            disabled: x,
                            look: x ? r.zxk.Looks.OUTLINED : r.zxk.Looks.FILLED,
                            onClick: h,
                            children: [
                                x
                                    ? (0, e.jsx)(r.dz2, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                    : (0, e.jsx)(r.xPt, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      }),
                                x ? u.intl.string(u.t['t5VZ8/']) : u.intl.string(u.t.RDE0SU)
                            ]
                        })
          });
}
function k(t) {
    let { isUserRsvped: n, isUserLurking: l, onRsvpClick: i, ...s } = t,
        o = n && !l;
    return (0, e.jsxs)(r.zxk, {
        ...s,
        className: c.__invalid_button,
        innerClassName: c.innerButton,
        size: r.zxk.Sizes.SMALL,
        onClick: i,
        color: r.zxk.Colors.PRIMARY,
        look: o ? r.zxk.Looks.OUTLINED : r.zxk.Looks.FILLED,
        disabled: l,
        children: [
            o
                ? (0, e.jsx)(r.dz2, {
                      size: 'xs',
                      color: 'currentColor'
                  })
                : (0, e.jsx)(r.Dkj, {
                      size: 'xs',
                      color: 'currentColor'
                  }),
            u.intl.string(u.t.DlcqlZ)
        ]
    });
}
function h(t) {
    return (0, e.jsx)(r.ua7, {
        text: u.intl.string(u.t['26dTyc']),
        position: 'top',
        tooltipClassName: c.tooltips,
        'aria-label': u.intl.string(u.t.Ej3B3d),
        children: (n) =>
            (0, e.jsx)(k, {
                ...n,
                ...t
            })
    });
}
let m = (t) => null == t || t,
    z = (t, n) => (m(t) ? u.intl.string(u.t.vk5Xw8) : m(n) ? u.intl.string(u.t.FFLWGR) : u.intl.string(u.t.k9KGYm));
function g(t) {
    let { isActive: n, isUserLurking: l, rsvped: i, canInvite: s, isChannelPublic: o = !0, entityType: m, onContextMenu: z, onJoinClick: g, onRsvpClick: C, onStartClick: v, onInviteClick: j, onEndClick: N, isJoined: p = !1 } = t,
        L = void 0 !== g;
    return (0, e.jsxs)('div', {
        className: c.container,
        children: [
            null != z
                ? (0, e.jsx)(r.ua7, {
                      text: u.intl.string(u.t.UKOtz8),
                      position: 'top',
                      'aria-label': u.intl.string(u.t.bt75u7),
                      children: (t) =>
                          (0, e.jsx)(r.P3F, {
                              ...t,
                              onClick: z,
                              className: c.iconButton,
                              children: (0, e.jsx)(r.xhG, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20,
                                  className: c.icon
                              })
                          })
                  })
                : null,
            (0, e.jsx)(x, {
                onInviteClick: j,
                canInvite: s,
                isChannelPublic: o
            }),
            n && m !== a.WX.EXTERNAL
                ? (0, e.jsx)(d, {
                      text: (function (t) {
                          let { isJoined: n, canJoin: l, isVoiceChannel: e } = t;
                          return l ? (n ? u.intl.string(u.t.aW2YlJ) : e ? u.intl.string(u.t.nxUtoa) : u.intl.string(u.t.ZYO5OD)) : u.intl.string(u.t.TVBCKS);
                      })({
                          isJoined: p,
                          canJoin: L,
                          isVoiceChannel: m === a.WX.VOICE
                      }),
                      disabled: !L,
                      onJoinClick: g
                  })
                : null,
            l &&
                !n &&
                (0, e.jsx)(h, {
                    isUserRsvped: i,
                    isUserLurking: l
                }),
            !l &&
                !n &&
                null != C &&
                (0, e.jsx)(k, {
                    isUserRsvped: i,
                    isUserLurking: l,
                    onRsvpClick: C
                }),
            n || null == v
                ? null
                : (0, e.jsx)(r.zxk, {
                      className: c.__invalid_button,
                      innerClassName: c.innerButton,
                      size: r.zxk.Sizes.SMALL,
                      onClick: v,
                      color: r.zxk.Colors.GREEN,
                      children: u.intl.string(u.t.I0v0Qk)
                  }),
            n && null != N
                ? (0, e.jsx)(r.zxk, {
                      className: c.__invalid_button,
                      innerClassName: c.innerButton,
                      size: r.zxk.Sizes.SMALL,
                      onClick: N,
                      color: r.zxk.Colors.PRIMARY,
                      children: u.intl.string(u.t.qaYzPD)
                  })
                : null
        ]
    });
}
