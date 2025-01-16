e.d(n, {
    Z: function () {
        return u;
    }
});
var l = e(200651);
e(192379);
var i = e(481060),
    o = e(285784),
    s = e(388032),
    r = e(935602);
function u(t) {
    let { isActive: n, isUserLurking: e, rsvped: u, onContextMenu: c, onRsvpClick: a, onGoToGuildClick: d, isDetailsView: h = !1, isMember: m, onJoinGuildClick: C, guildName: g, onInviteClick: x, canInvite: v, isChannelPublic: k } = t;
    return (0, l.jsxs)('div', {
        className: r.container,
        children: [
            null != c
                ? (0, l.jsx)(i.Tooltip, {
                      text: s.intl.string(s.t.UKOtz8),
                      position: 'top',
                      'aria-label': s.intl.string(s.t.bt75u7),
                      children: (t) =>
                          (0, l.jsx)(i.Clickable, {
                              ...t,
                              onClick: c,
                              className: r.iconButton,
                              children: (0, l.jsx)(i.MoreHorizontalIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20,
                                  className: r.icon
                              })
                          })
                  })
                : null,
            m &&
                (0, l.jsx)(o.ku, {
                    onInviteClick: x,
                    canInvite: v,
                    isChannelPublic: k
                }),
            e &&
                !n &&
                (0, l.jsx)(o.Lh, {
                    isUserRsvped: u,
                    isUserLurking: e
                }),
            m &&
                !e &&
                !n &&
                null != a &&
                (0, l.jsx)(o.S0, {
                    isUserRsvped: u,
                    isUserLurking: e,
                    onRsvpClick: a
                }),
            m && !e && (!h || n)
                ? (0, l.jsx)(i.Button, {
                      className: r.button,
                      innerClassName: r.innerButton,
                      size: i.Button.Sizes.SMALL,
                      onClick: d,
                      color: i.Button.Colors.GREEN,
                      children: s.intl.string(s.t['N+TB5u'])
                  })
                : null,
            m
                ? null
                : (0, l.jsx)(i.Button, {
                      className: r.button,
                      innerClassName: r.innerButton,
                      size: i.Button.Sizes.SMALL,
                      onClick: C,
                      color: i.Button.Colors.GREEN,
                      children: s.intl.format(s.t['4BiO8f'], { guildName: g })
                  })
        ]
    });
}
