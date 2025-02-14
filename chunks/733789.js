n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(100527),
    d = n(707409),
    c = n(184301),
    u = n(347475),
    h = n(237583),
    m = n(51144),
    p = n(981631),
    g = n(388032),
    _ = n(18142);
function f(e, t, n) {
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
class I extends l.PureComponent {
    renderDescription(e, t) {
        let n = E[e];
        return 1 === t.length ? n.single(t[0].user, (e) => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, (e) => this.renderActivityDiscordTag(e)) : n.other(t.length);
    }
    renderActivityDiscordTag(e) {
        return (0, i.jsx)(
            s.yRy,
            {
                preload: () => (0, c.Z)(e),
                renderPopout: (t) =>
                    (0, i.jsx)(u.Z, {
                        ...t,
                        userId: e.id,
                        newAnalyticsLocations: [o.Z.USERNAME]
                    }),
                position: 'right',
                children: (t) =>
                    (0, i.jsx)('span', {
                        className: _.username,
                        ...t,
                        children: e.username
                    })
            },
            e.id
        );
    }
    render() {
        let { reason: e, className: t } = this.props,
            { type: n, userInfo: l } = e;
        return 0 === l.length
            ? null
            : (0, i.jsxs)('div', {
                  className: a()(_.recommendationActivity, t),
                  children: [
                      (0, i.jsx)(h.Z, {
                          className: _.players,
                          users: l.map((e) => {
                              let { user: t } = e;
                              return t;
                          }),
                          renderUser: this.renderPlayer,
                          max: 4,
                          renderMoreUsers: this.renderPlayerOverflow
                      }),
                      (0, i.jsx)('div', {
                          className: _.description,
                          children: this.renderDescription(n, l)
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            f(this, 'renderUserTooltip', (e, t, n) =>
                (0, i.jsxs)('div', {
                    className: _.tooltip,
                    children: [
                        (0, i.jsx)('div', { children: m.ZP.getUserTag(e) }),
                        (0, i.jsx)(d.ZP, {
                            className: _.tooltipTimestamp,
                            start: t,
                            end: n,
                            location: d.ZP.Locations.ACTIVITY_FEED
                        })
                    ]
                })
            ),
            f(this, 'renderPlayer', (e, t, n, l) => {
                if (null == e) return null;
                let r = this.props.reason.userInfo.find((t) => t.user === e);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          s.yRy,
                          {
                              preload: () => (0, c.Z)(e),
                              renderPopout: (t) =>
                                  (0, i.jsx)(u.Z, {
                                      ...t,
                                      userId: e.id,
                                      newAnalyticsLocations: [o.Z.AVATAR]
                                  }),
                              position: 'right',
                              children: (t) =>
                                  (0, i.jsx)(s.ua7, {
                                      text: this.renderUserTooltip(e, r.startTime, r.endTime),
                                      'aria-label': (0, m.W5)(e, { decoration: 'never' }),
                                      children: (n) =>
                                          (0, i.jsx)(s.qEK, {
                                              className: a()(_.playerAvatar, { [_.avatarMasked]: !l }),
                                              src: e.getAvatarURL(void 0, 32),
                                              'aria-label': e.username,
                                              size: s.EFr.SIZE_32,
                                              ...n,
                                              ...t
                                          })
                                  })
                          },
                          e.id
                      );
            }),
            f(this, 'renderPlayerOverflow', (e, t, n) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: _.playerOverflow,
                        children: e
                    },
                    n
                )
            );
    }
}
let C = I;
