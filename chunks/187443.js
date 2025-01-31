l.d(n, { Z: () => a });
var e = l(200651);
l(192379);
var i = l(481060),
    s = l(285784),
    r = l(388032),
    o = l(935602);
function a(t) {
    let { isActive: n, isUserLurking: l, rsvped: a, onContextMenu: u, onRsvpClick: c, onGoToGuildClick: d, isDetailsView: x = !1, isMember: k, onJoinGuildClick: h, guildName: m, onInviteClick: z, canInvite: g, isChannelPublic: C } = t;
    return (0, e.jsxs)('div', {
        className: o.container,
        children: [
            null != u
                ? (0, e.jsx)(i.ua7, {
                      text: r.intl.string(r.t.UKOtz8),
                      position: 'top',
                      'aria-label': r.intl.string(r.t.bt75u7),
                      children: (t) =>
                          (0, e.jsx)(i.P3F, {
                              ...t,
                              onClick: u,
                              className: o.iconButton,
                              children: (0, e.jsx)(i.xhG, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20,
                                  className: o.icon
                              })
                          })
                  })
                : null,
            k &&
                (0, e.jsx)(s.ku, {
                    onInviteClick: z,
                    canInvite: g,
                    isChannelPublic: C
                }),
            l &&
                !n &&
                (0, e.jsx)(s.Lh, {
                    isUserRsvped: a,
                    isUserLurking: l
                }),
            k &&
                !l &&
                !n &&
                null != c &&
                (0, e.jsx)(s.S0, {
                    isUserRsvped: a,
                    isUserLurking: l,
                    onRsvpClick: c
                }),
            k && !l && (!x || n)
                ? (0, e.jsx)(i.zxk, {
                      className: o.button,
                      innerClassName: o.innerButton,
                      size: i.zxk.Sizes.SMALL,
                      onClick: d,
                      color: i.zxk.Colors.GREEN,
                      children: r.intl.string(r.t['N+TB5u'])
                  })
                : null,
            k
                ? null
                : (0, e.jsx)(i.zxk, {
                      className: o.button,
                      innerClassName: o.innerButton,
                      size: i.zxk.Sizes.SMALL,
                      onClick: h,
                      color: i.zxk.Colors.GREEN,
                      children: r.intl.format(r.t['4BiO8f'], { guildName: m })
                  })
        ]
    });
}
