n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var o = n(442837),
    l = n(481060),
    i = n(468363),
    a = n(353647),
    c = n(566898),
    s = n(158776),
    d = n(885110),
    u = n(63063),
    f = n(209698),
    p = n(369566),
    m = n(29899),
    b = n(151545),
    g = n(744802),
    y = n(493043),
    _ = n(864141),
    O = n(264481),
    h = n(693408),
    j = n(228168),
    x = n(981631),
    v = n(388032),
    I = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: N, channelId: w, subsection: E, onClose: A } = e,
        { voiceActivityStatusEnabled: T } = (0, i.U)({ location: 'UserProfileModalV2Activity' }),
        S = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: Z, recent: C, stream: G } = (0, p.Z)(t.id),
        { voiceChannel: L, voiceActivity: k } = (0, m.Z)({
            userId: t.id,
            guildId: N
        }),
        M = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        R = t.id === n.id,
        D = (0, o.e7)([d.Z, s.Z], () => {
            let e = R ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        B = Z.length > 0 || null != G,
        F = T && null == G && null == k && null != L,
        U = !D && (B || F),
        V = C.length > 0;
    if (!U && !V && M)
        return (0, r.jsx)('div', {
            className: I.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: I.loadingItem,
                        children: [
                            (0, r.jsx)(c.ZT, {
                                width: 60,
                                opacity: 0.08
                            }),
                            (0, r.jsx)(c.ZT, {
                                width: 135,
                                opacity: 0.08
                            })
                        ]
                    },
                    t
                )
            )
        });
    if (!U && !V && !M) {
        var Y;
        return R
            ? (0, r.jsx)(O.Uf, { onClose: A })
            : (0, r.jsx)(O.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: w,
                  onClose: A
              });
    }
    return (0, r.jsxs)(l.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            U
                ? (0, r.jsx)(h.Z, {
                      heading: v.intl.string(v.t.J6STd3),
                      children: (0, r.jsxs)('ul', {
                          className: I.cards,
                          children: [
                              !S &&
                                  F &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: A
                                      })
                                  }),
                              null != G &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(y.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: G,
                                          onClose: A,
                                          profileGuildId: null == P ? void 0 : P.guildId
                                      })
                                  }),
                              Z.map((e, o) =>
                                  (0, r.jsx)(
                                      'li',
                                      {
                                          children: (0, r.jsx)(b.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: A,
                                              profileGuildId: null == P ? void 0 : P.guildId
                                          })
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              S &&
                                  F &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: A
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, r.jsx)(h.Z, {
                      heading: v.intl.string(v.t.jzgEoK),
                      introText: R
                          ? v.intl.format(v.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        l.eee,
                                        {
                                            href: u.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: E === j.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)('ul', {
                          className: I.cards,
                          children: C.map((e) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(g.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          entry: e,
                                          profileGuildId: null == P ? void 0 : P.guildId,
                                          onClose: A
                                      })
                                  },
                                  e.id
                              )
                          )
                      })
                  })
                : null
        ]
    });
}
