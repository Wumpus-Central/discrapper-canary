e.d(n, {
    Lh: function () {
        return C;
    },
    S0: function () {
        return m;
    },
    ZP: function () {
        return v;
    },
    ku: function () {
        return h;
    }
}),
    e(47120);
var l = e(200651),
    i = e(192379),
    o = e(846519),
    s = e(481060),
    r = e(493773),
    u = e(765305),
    c = e(388032),
    a = e(77257);
function d(t) {
    let { text: n, disabled: e, onJoinClick: i } = t;
    return (0, l.jsx)(s.Button, {
        className: a.__invalid_button,
        size: s.Button.Sizes.SMALL,
        onClick: i,
        color: s.Button.Colors.GREEN,
        disabled: e,
        children: n
    });
}
function h(t) {
    let { onInviteClick: n, canInvite: e, isChannelPublic: u } = t,
        d = new o.V7(),
        [h, m] = i.useState(!1);
    (0, r.Z)(() => () => {
        d.stop();
    });
    let C = (t) => {
        null != n && n(t), m(!0), d.start(1000, () => m(!1));
    };
    return null == n
        ? null
        : (0, l.jsx)(s.Tooltip, {
              text: x(e, u),
              position: 'top',
              tooltipClassName: a.tooltips,
              'aria-label': c.intl.string(c.t.Ej3B3d),
              children: (t) =>
                  e && u
                      ? (0, l.jsxs)(s.Button, {
                            ...t,
                            className: a.__invalid_button,
                            innerClassName: a.innerButton,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            onClick: n,
                            children: [
                                (0, l.jsx)(s.ShareIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                c.intl.string(c.t.RDE0SU)
                            ]
                        })
                      : (0, l.jsxs)(s.Button, {
                            ...t,
                            className: a.__invalid_button,
                            innerClassName: a.innerButton,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            disabled: h,
                            look: h ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                            onClick: C,
                            children: [
                                h
                                    ? (0, l.jsx)(s.CheckmarkLargeIcon, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                    : (0, l.jsx)(s.LinkIcon, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      }),
                                h ? c.intl.string(c.t['t5VZ8/']) : c.intl.string(c.t.RDE0SU)
                            ]
                        })
          });
}
function m(t) {
    let { isUserRsvped: n, isUserLurking: e, onRsvpClick: i, ...o } = t,
        r = n && !e;
    return (0, l.jsxs)(s.Button, {
        ...o,
        className: a.__invalid_button,
        innerClassName: a.innerButton,
        size: s.Button.Sizes.SMALL,
        onClick: i,
        color: s.Button.Colors.PRIMARY,
        look: r ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
        disabled: e,
        children: [
            r
                ? (0, l.jsx)(s.CheckmarkLargeIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
                : (0, l.jsx)(s.BellIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  }),
            c.intl.string(c.t.DlcqlZ)
        ]
    });
}
function C(t) {
    return (0, l.jsx)(s.Tooltip, {
        text: c.intl.string(c.t['26dTyc']),
        position: 'top',
        tooltipClassName: a.tooltips,
        'aria-label': c.intl.string(c.t.Ej3B3d),
        children: (n) =>
            (0, l.jsx)(m, {
                ...n,
                ...t
            })
    });
}
let g = (t) => null == t || t,
    x = (t, n) => (g(t) ? c.intl.string(c.t.vk5Xw8) : g(n) ? c.intl.string(c.t.FFLWGR) : c.intl.string(c.t.k9KGYm));
function v(t) {
    let { isActive: n, isUserLurking: e, rsvped: i, canInvite: o, isChannelPublic: r = !0, entityType: g, onContextMenu: x, onJoinClick: v, onRsvpClick: k, onStartClick: p, onInviteClick: B, onEndClick: N, isJoined: j = !1 } = t,
        f = void 0 !== v;
    return (0, l.jsxs)('div', {
        className: a.container,
        children: [
            null != x
                ? (0, l.jsx)(s.Tooltip, {
                      text: c.intl.string(c.t.UKOtz8),
                      position: 'top',
                      'aria-label': c.intl.string(c.t.bt75u7),
                      children: (t) =>
                          (0, l.jsx)(s.Clickable, {
                              ...t,
                              onClick: x,
                              className: a.iconButton,
                              children: (0, l.jsx)(s.MoreHorizontalIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20,
                                  className: a.icon
                              })
                          })
                  })
                : null,
            (0, l.jsx)(h, {
                onInviteClick: B,
                canInvite: o,
                isChannelPublic: r
            }),
            n && g !== u.WX.EXTERNAL
                ? (0, l.jsx)(d, {
                      text: (function (t) {
                          let { isJoined: n, canJoin: e, isVoiceChannel: l } = t;
                          return e ? (n ? c.intl.string(c.t.aW2YlJ) : l ? c.intl.string(c.t.nxUtoa) : c.intl.string(c.t.ZYO5OD)) : c.intl.string(c.t.TVBCKS);
                      })({
                          isJoined: j,
                          canJoin: f,
                          isVoiceChannel: g === u.WX.VOICE
                      }),
                      disabled: !f,
                      onJoinClick: v
                  })
                : null,
            e &&
                !n &&
                (0, l.jsx)(C, {
                    isUserRsvped: i,
                    isUserLurking: e
                }),
            !e &&
                !n &&
                null != k &&
                (0, l.jsx)(m, {
                    isUserRsvped: i,
                    isUserLurking: e,
                    onRsvpClick: k
                }),
            n || null == p
                ? null
                : (0, l.jsx)(s.Button, {
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      size: s.Button.Sizes.SMALL,
                      onClick: p,
                      color: s.Button.Colors.GREEN,
                      children: c.intl.string(c.t.I0v0Qk)
                  }),
            n && null != N
                ? (0, l.jsx)(s.Button, {
                      className: a.__invalid_button,
                      innerClassName: a.innerButton,
                      size: s.Button.Sizes.SMALL,
                      onClick: N,
                      color: s.Button.Colors.PRIMARY,
                      children: c.intl.string(c.t.qaYzPD)
                  })
                : null
        ]
    });
}
