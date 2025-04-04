n.d(t, { Z: () => O }), n(953529), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(100527),
    c = n(707409),
    u = n(670188),
    d = n(237583),
    p = n(51144),
    h = n(981631),
    f = n(388032),
    g = n(629390);
function m(e, t, n) {
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
function b(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let _ = {
    [h.AzA.NOW_PLAYING]: {
        single: (e, t) =>
            f.NW.format(f.t.NEckzc, {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            f.NW.format(f.t['6uWulZ'], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => f.NW.format(f.t['8fMgRU'], { count: e })
    },
    [h.AzA.RECENTLY_PLAYED]: {
        single: (e, t) =>
            f.NW.format(f.t['nB/JND'], {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            f.NW.format(f.t.AZCcHR, {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => f.NW.format(f.t.yNuaTU, { count: e })
    },
    [h.AzA.EVER_PLAYED]: {
        single: (e, t) =>
            f.NW.format(f.t.Fecf3N, {
                user1: e.username,
                user1Hook: () => t(e)
            }),
        double: (e, t, n) =>
            f.NW.format(f.t['0LiGbG'], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t)
            }),
        other: (e) => f.NW.format(f.t.Yx1rjY, { count: e })
    }
};
class E extends i.PureComponent {
    renderDescription(e, t) {
        let n = _[e];
        return 1 === t.length ? n.single(t[0].user, (e) => this.renderActivityDiscordTag(e)) : 2 === t.length ? n.double(t[0].user, t[1].user, (e) => this.renderActivityDiscordTag(e)) : n.other(t.length);
    }
    renderActivityDiscordTag(e) {
        return (0, r.jsx)(
            u.Z,
            {
                targetElementRef: this.ref,
                user: e,
                newAnalyticsLocations: [s.Z.USERNAME],
                clickTrap: !0,
                children: (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        'span',
                        ((n = b(
                            {
                                ref: this.ref,
                                className: g.username
                            },
                            t
                        )),
                        (i = i = { children: e.username }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n)
                    );
                }
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
                  className: a()(g.recommendationActivity, t),
                  children: [
                      (0, r.jsx)(d.Z, {
                          className: g.players,
                          users: i.map((e) => {
                              let { user: t } = e;
                              return t;
                          }),
                          renderUser: this.renderPlayer,
                          max: 4,
                          renderMoreUsers: this.renderPlayerOverflow
                      }),
                      (0, r.jsx)('div', {
                          className: g.description,
                          children: this.renderDescription(n, i)
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            m(this, 'ref', i.createRef()),
            m(this, 'renderUserTooltip', (e, t, n) =>
                (0, r.jsxs)('div', {
                    className: g.tooltip,
                    children: [
                        (0, r.jsx)('div', { children: p.ZP.getUserTag(e) }),
                        (0, r.jsx)(c.ZP, {
                            className: g.tooltipTimestamp,
                            start: t,
                            end: n,
                            location: c.ZP.Locations.ACTIVITY_FEED
                        })
                    ]
                })
            ),
            m(this, 'renderPlayer', (e, t, n, i) => {
                if (null == e) return null;
                let l = this.props.reason.userInfo.find((t) => t.user === e);
                return null == l
                    ? null
                    : (0, r.jsx)(
                          u.Z,
                          {
                              user: e,
                              newAnalyticsLocations: [s.Z.AVATAR],
                              clickTrap: !0,
                              children: (t) =>
                                  (0, r.jsx)(o.ua7, {
                                      text: this.renderUserTooltip(e, l.startTime, l.endTime),
                                      'aria-label': (0, p.W5)(e, { decoration: 'never' }),
                                      children: (n) =>
                                          (0, r.jsx)(
                                              o.qEK,
                                              b(
                                                  {
                                                      className: a()(g.playerAvatar, { [g.avatarMasked]: !i }),
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
            m(this, 'renderPlayerOverflow', (e, t, n) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: g.playerOverflow,
                        children: e
                    },
                    n
                )
            );
    }
}
let O = E;
