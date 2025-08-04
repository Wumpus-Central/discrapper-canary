n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(481060),
    l = n(468363),
    a = n(353647),
    c = n(566898),
    s = n(158776),
    u = n(885110),
    d = n(63063),
    f = n(209698),
    p = n(369566),
    m = n(29899),
    b = n(151545),
    g = n(744802),
    y = n(493043),
    j = n(864141),
    O = n(264481),
    x = n(693408),
    h = n(228168),
    _ = n(981631),
    v = n(388032),
    I = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: w, channelId: N, subsection: Z, onClose: T } = e,
        { voiceActivityStatusEnabled: E } = (0, l.U)({ location: 'UserProfileModalV2Activity' }),
        A = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: S, recent: C, stream: L } = (0, p.Z)(t.id),
        { voiceChannel: k, voiceActivity: D } = (0, m.Z)({
            userId: t.id,
            guildId: w
        }),
        B = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        G = t.id === n.id,
        R = (0, o.e7)([u.Z, s.Z], () => {
            let e = G ? u.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        U = S.length > 0 || null != L,
        M = E && null == L && null == D && null != k,
        F = !R && (U || M),
        V = C.length > 0;
    if (!F && !V && B)
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
    if (!F && !V && !B) {
        var W;
        return G
            ? (0, r.jsx)(O.Uf, { onClose: T })
            : (0, r.jsx)(O.P9, {
                  user: t,
                  guildId: null != (W = null == P ? void 0 : P.guildId) ? W : void 0,
                  channelId: N,
                  onClose: T
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(x.Z, {
                      heading: v.intl.string(v.t.J6STd3),
                      children: (0, r.jsxs)('ul', {
                          className: I.cards,
                          children: [
                              !A &&
                                  M &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(j.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: T
                                      })
                                  }),
                              null != L &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(y.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: L,
                                          onClose: T,
                                          profileGuildId: null == P ? void 0 : P.guildId
                                      })
                                  }),
                              S.map((e, o) =>
                                  (0, r.jsx)(
                                      'li',
                                      {
                                          children: (0, r.jsx)(b.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: T,
                                              profileGuildId: null == P ? void 0 : P.guildId
                                          })
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              A &&
                                  M &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(j.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: T
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, r.jsx)(x.Z, {
                      heading: v.intl.string(v.t.jzgEoK),
                      introText: G
                          ? v.intl.format(v.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: d.Z.getArticleURL(_.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: Z === h.Tb.RECENT_ACTIVITY,
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
                                          onClose: T
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
