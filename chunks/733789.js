n.d(t, { Z: () => y }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(100527),
    c = n(707409),
    u = n(184301),
    d = n(347475),
    p = n(237583),
    h = n(51144),
    f = n(981631),
    g = n(388032),
    m = n(629390);
function b(e, t, n) {
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
function _(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
let O = {
    [f.AzA.NOW_PLAYING]: {
        single: (e, t) =>
            g.NW.format(g.t.NEckzc, {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            g.NW.format(g.t['6uWulZ'], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => g.NW.format(g.t['8fMgRU'], { count: e })
    },
    [f.AzA.RECENTLY_PLAYED]: {
        single: (e, t) =>
            g.NW.format(g.t['nB/JND'], {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            g.NW.format(g.t.AZCcHR, {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => g.NW.format(g.t.yNuaTU, { count: e })
    },
    [f.AzA.EVER_PLAYED]: {
        single: (e, t) =>
            g.NW.format(g.t.Fecf3N, {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            g.NW.format(g.t['0LiGbG'], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => g.NW.format(g.t.Yx1rjY, { count: e })
    }
};
class N extends i.PureComponent {
    renderDescription(e, t) {
        let n = O[e];
        return 1 === t.length ? n.single(t[0].user, (e) => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, (e) => this.renderActivityDiscordTag(e)) : n.other(t.length);
    }
    renderActivityDiscordTag(e) {
        return (0, r.jsx)(
            o.yRy,
            {
                targetElementRef: this.ref,
                preload: () => (0, u.Z)(e),
                renderPopout: (t) =>
                    (0, r.jsx)(
                        d.Z,
                        E(_({}, t), {
                            userId: e.id,
                            newAnalyticsLocations: [s.Z.USERNAME]
                        })
                    ),
                position: 'right',
                clickTrap: !0,
                children: (t) =>
                    (0, r.jsx)(
                        'span',
                        E(
                            _(
                                {
                                    ref: this.ref,
                                    className: m.username
                                },
                                t
                            ),
                            { children: e.username }
                        )
                    )
            },
            e.id
        );
    }
    render() {
        let { reason: e, className: t } = this.props,
            { type: n, userInfo: i } = e;
        return 0 === i.length
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(m.recommendationActivity, t),
                  children: [
                      (0, r.jsx)(p.Z, {
                          className: m.players,
                          users: i.map((e) => {
                              let { user: t } = e;
                              return t;
                          }),
                          renderUser: this.renderPlayer,
                          max: 4,
                          renderMoreUsers: this.renderPlayerOverflow
                      }),
                      (0, r.jsx)('div', {
                          className: m.description,
                          children: this.renderDescription(n, i)
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            b(this, 'ref', i.createRef()),
            b(this, 'renderUserTooltip', (e, t, n) =>
                (0, r.jsxs)('div', {
                    className: m.tooltip,
                    children: [
                        (0, r.jsx)('div', { children: h.ZP.getUserTag(e) }),
                        (0, r.jsx)(c.ZP, {
                            className: m.tooltipTimestamp,
                            start: t,
                            end: n,
                            location: c.ZP.Locations.ACTIVITY_FEED
                        })
                    ]
                })
            ),
            b(this, 'renderPlayer', (e, t, n, i) => {
                if (null == e) return null;
                let l = this.props.reason.userInfo.find((t) => t.user === e);
                return null == l
                    ? null
                    : (0, r.jsx)(
                          o.yRy,
                          {
                              preload: () => (0, u.Z)(e),
                              renderPopout: (t) =>
                                  (0, r.jsx)(
                                      d.Z,
                                      E(_({}, t), {
                                          userId: e.id,
                                          newAnalyticsLocations: [s.Z.AVATAR]
                                      })
                                  ),
                              position: 'right',
                              clickTrap: !0,
                              children: (t) =>
                                  (0, r.jsx)(o.ua7, {
                                      text: this.renderUserTooltip(e, l.startTime, l.endTime),
                                      'aria-label': (0, h.W5)(e, { decoration: 'never' }),
                                      children: (n) =>
                                          (0, r.jsx)(
                                              o.qEK,
                                              _(
                                                  {
                                                      className: a()(m.playerAvatar, { [m.avatarMasked]: !i }),
                                                      src: e.getAvatarURL(void 0, 32),
                                                      'aria-label': e.username,
                                                      size: o.EFr.SIZE_32
                                                  },
                                                  n,
                                                  t
                                              )
                                          )
                                  })
                          },
                          e.id
                      );
            }),
            b(this, 'renderPlayerOverflow', (e, t, n) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: m.playerOverflow,
                        children: e
                    },
                    n
                )
            );
    }
}
let y = N;
