n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(481060),
    a = n(468363),
    l = n(353647),
    c = n(566898),
    s = n(158776),
    d = n(885110),
    u = n(63063),
    f = n(209698),
    m = n(369566),
    p = n(29899),
    g = n(151545),
    x = n(744802),
    b = n(493043),
    _ = n(864141),
    h = n(264481),
    j = n(693408),
    y = n(228168),
    I = n(981631),
    v = n(388032),
    O = n(514656);
function N(e) {
    let { user: t, currentUser: n, displayProfile: N, guildId: P, channelId: T, subsection: Z, onClose: A } = e,
        { voiceActivityStatusEnabled: C } = (0, a.U)({ location: 'UserProfileModalV2Activity' }),
        w = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: E, recent: S, stream: L } = (0, m.Z)(t.id),
        { voiceChannel: B, voiceActivity: R } = (0, p.Z)({
            userId: t.id,
            guildId: P
        }),
        G = (0, o.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        D = (0, o.e7)([d.Z, s.Z], () => {
            let e = k ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        U = E.length > 0 || null != L,
        M = C && null == L && null == R && null != B,
        F = !D && (U || M),
        V = S.length > 0;
    if (!F && !V && G)
        return (0, r.jsx)('div', {
            className: O.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: O.loadingItem,
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
    if (!F && !V && !G) {
        var W;
        return k
            ? (0, r.jsx)(h.Uf, { onClose: A })
            : (0, r.jsx)(h.P9, {
                  user: t,
                  guildId: null != (W = null == N ? void 0 : N.guildId) ? W : void 0,
                  channelId: T,
                  onClose: A
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: O.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(j.Z, {
                      heading: v.intl.string(v.t.J6STd3),
                      children: (0, r.jsxs)('ul', {
                          className: O.cards,
                          children: [
                              !w &&
                                  M &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: B,
                                          onClose: A
                                      })
                                  }),
                              null != L &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(b.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: L,
                                          onClose: A,
                                          profileGuildId: null == N ? void 0 : N.guildId
                                      })
                                  }),
                              E.map((e, o) =>
                                  (0, r.jsx)(
                                      'li',
                                      {
                                          children: (0, r.jsx)(g.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: A,
                                              profileGuildId: null == N ? void 0 : N.guildId
                                          })
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              w &&
                                  M &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: B,
                                          onClose: A
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, r.jsx)(j.Z, {
                      heading: v.intl.string(v.t.jzgEoK),
                      introText: k
                          ? v.intl.format(v.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: u.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: Z === y.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)('ul', {
                          className: O.cards,
                          children: S.map((e) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(x.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          entry: e,
                                          profileGuildId: null == N ? void 0 : N.guildId,
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
