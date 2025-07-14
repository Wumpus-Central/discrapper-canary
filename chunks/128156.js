n.d(t, { Z: () => P });
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    c = n(468363),
    l = n(353647),
    a = n(566898),
    s = n(158776),
    d = n(885110),
    u = n(63063),
    f = n(209698),
    p = n(369566),
    m = n(29899),
    b = n(151545),
    x = n(744802),
    y = n(493043),
    _ = n(864141),
    h = n(264481),
    g = n(693408),
    j = n(228168),
    I = n(981631),
    v = n(388032),
    O = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: N, channelId: A, subsection: T, onClose: Z } = e,
        { voiceActivityStatusEnabled: C } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        w = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: S, recent: E, stream: B } = (0, p.Z)(t.id),
        { voiceChannel: L, voiceActivity: D } = (0, m.Z)({
            userId: t.id,
            guildId: N
        }),
        U = (0, r.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        M = (0, r.e7)([d.Z, s.Z], () => {
            let e = k ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        R = S.length > 0 || null != B,
        V = C && null == B && null == D && null != L,
        G = !M && (R || V),
        F = E.length > 0;
    if (!G && !F && U)
        return (0, o.jsx)('div', {
            className: O.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, o.jsxs)(
                    'div',
                    {
                        className: O.loadingItem,
                        children: [
                            (0, o.jsx)(a.ZT, {
                                width: 60,
                                opacity: 0.08
                            }),
                            (0, o.jsx)(a.ZT, {
                                width: 135,
                                opacity: 0.08
                            })
                        ]
                    },
                    t
                )
            )
        });
    if (!G && !F && !U) {
        var Y;
        return k
            ? (0, o.jsx)(h.Uf, { onClose: Z })
            : (0, o.jsx)(h.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: A,
                  onClose: Z
              });
    }
    return (0, o.jsxs)(i.Ttm, {
        className: O.scroller,
        fade: !0,
        children: [
            G
                ? (0, o.jsx)(g.Z, {
                      heading: v.intl.string(v.t.J6STd3),
                      children: (0, o.jsxs)('ul', {
                          className: O.cards,
                          children: [
                              !w &&
                                  V &&
                                  (0, o.jsx)('li', {
                                      children: (0, o.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: Z
                                      })
                                  }),
                              null != B &&
                                  (0, o.jsx)('li', {
                                      children: (0, o.jsx)(y.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: B,
                                          onClose: Z,
                                          profileGuildId: null == P ? void 0 : P.guildId
                                      })
                                  }),
                              S.map((e, r) =>
                                  (0, o.jsx)(
                                      'li',
                                      {
                                          children: (0, o.jsx)(b.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: Z,
                                              profileGuildId: null == P ? void 0 : P.guildId
                                          })
                                      },
                                      'live-'.concat(r)
                                  )
                              ),
                              w &&
                                  V &&
                                  (0, o.jsx)('li', {
                                      children: (0, o.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: Z
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            F
                ? (0, o.jsx)(g.Z, {
                      heading: v.intl.string(v.t.jzgEoK),
                      introText: k
                          ? v.intl.format(v.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, o.jsx)(
                                        i.eee,
                                        {
                                            href: u.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: T === j.Tb.RECENT_ACTIVITY,
                      children: (0, o.jsx)('ul', {
                          className: O.cards,
                          children: E.map((e) =>
                              (0, o.jsx)(
                                  'li',
                                  {
                                      children: (0, o.jsx)(x.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          entry: e,
                                          profileGuildId: null == P ? void 0 : P.guildId,
                                          onClose: Z
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
