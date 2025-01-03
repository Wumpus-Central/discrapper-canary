n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(100527),
    c = n(707409),
    d = n(184301),
    u = n(347475),
    h = n(237583),
    m = n(51144),
    p = n(981631),
    g = n(388032),
    f = n(563364);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = {
    [p.AzA.NOW_PLAYING]: {
        single: (e, t) =>
            g.intl.format(g.t.NEckzc, {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            g.intl.format(g.t['6uWulZ'], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => g.intl.format(g.t['8fMgRU'], { count: e })
    },
    [p.AzA.RECENTLY_PLAYED]: {
        single: (e, t) =>
            g.intl.format(g.t['nB/JND'], {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            g.intl.format(g.t.AZCcHR, {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => g.intl.format(g.t.yNuaTU, { count: e })
    },
    [p.AzA.EVER_PLAYED]: {
        single: (e, t) =>
            g.intl.format(g.t.Fecf3N, {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            g.intl.format(g.t['0LiGbG'], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => g.intl.format(g.t.Yx1rjY, { count: e })
    }
};
class I extends r.PureComponent {
    renderDescription(e, t) {
        let n = E[e];
        return 1 === t.length ? n.single(t[0].user, (e) => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, (e) => this.renderActivityDiscordTag(e)) : n.other(t.length);
    }
    renderActivityDiscordTag(e) {
        return (0, i.jsx)(
            s.Popout,
            {
                preload: () => (0, d.Z)(e),
                renderPopout: (t) =>
                    (0, i.jsx)(u.Z, {
                        ...t,
                        userId: e.id,
                        newAnalyticsLocations: [o.Z.USERNAME]
                    }),
                position: 'right',
                children: (t) =>
                    (0, i.jsx)('span', {
                        className: f.username,
                        ...t,
                        children: e.username
                    })
            },
            e.id
        );
    }
    render() {
        let { reason: e, className: t } = this.props,
            { type: n, userInfo: r } = e;
        return 0 === r.length
            ? null
            : (0, i.jsxs)('div', {
                  className: a()(f.recommendationActivity, t),
                  children: [
                      (0, i.jsx)(h.Z, {
                          className: f.players,
                          users: r.map((e) => {
                              let { user: t } = e;
                              return t;
                          }),
                          renderUser: this.renderPlayer,
                          max: 4,
                          renderMoreUsers: this.renderPlayerOverflow
                      }),
                      (0, i.jsx)('div', {
                          className: f.description,
                          children: this.renderDescription(n, r)
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'renderUserTooltip', (e, t, n) =>
                (0, i.jsxs)('div', {
                    className: f.tooltip,
                    children: [
                        (0, i.jsx)('div', { children: m.ZP.getUserTag(e) }),
                        (0, i.jsx)(c.ZP, {
                            className: f.tooltipTimestamp,
                            start: t,
                            end: n,
                            location: c.ZP.Locations.ACTIVITY_FEED
                        })
                    ]
                })
            ),
            _(this, 'renderPlayer', (e, t, n, r) => {
                if (null == e) return null;
                let l = this.props.reason.userInfo.find((t) => t.user === e);
                return null == l
                    ? null
                    : (0, i.jsx)(
                          s.Popout,
                          {
                              preload: () => (0, d.Z)(e),
                              renderPopout: (t) =>
                                  (0, i.jsx)(u.Z, {
                                      ...t,
                                      userId: e.id,
                                      newAnalyticsLocations: [o.Z.AVATAR]
                                  }),
                              position: 'right',
                              children: (t) =>
                                  (0, i.jsx)(s.Tooltip, {
                                      text: this.renderUserTooltip(e, l.startTime, l.endTime),
                                      'aria-label': (0, m.W5)(e, { decoration: 'never' }),
                                      children: (n) =>
                                          (0, i.jsx)(s.Avatar, {
                                              className: a()(f.playerAvatar, { [f.avatarMasked]: !r }),
                                              src: e.getAvatarURL(void 0, 32),
                                              'aria-label': e.username,
                                              size: s.AvatarSizes.SIZE_32,
                                              ...n,
                                              ...t
                                          })
                                  })
                          },
                          e.id
                      );
            }),
            _(this, 'renderPlayerOverflow', (e, t, n) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: f.playerOverflow,
                        children: e
                    },
                    n
                )
            );
    }
}
t.Z = I;
