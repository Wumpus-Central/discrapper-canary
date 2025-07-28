n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(481060),
    c = n(468363),
    l = n(353647),
    a = n(566898),
    s = n(158776),
    d = n(885110),
    u = n(63063),
    f = n(209698),
    m = n(369566),
    p = n(29899),
    b = n(151545),
    x = n(744802),
    h = n(493043),
    _ = n(864141),
    g = n(264481),
    y = n(693408),
    j = n(228168),
    v = n(981631),
    I = n(388032),
    O = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: N, channelId: A, subsection: T, onClose: Z } = e,
        { voiceActivityStatusEnabled: C } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        w = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: S, recent: E, stream: B } = (0, m.Z)(t.id),
        { voiceChannel: D, voiceActivity: L } = (0, p.Z)({
            userId: t.id,
            guildId: N
        }),
        U = (0, o.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        M = (0, o.e7)([d.Z, s.Z], () => {
            let e = k ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        R = S.length > 0 || null != B,
        V = C && null == B && null == L && null != D,
        G = !M && (R || V),
        F = E.length > 0;
    if (!G && !F && U)
        return (0, r.jsx)('div', {
            className: O.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: O.loadingItem,
                        children: [
                            (0, r.jsx)(a.ZT, {
                                width: 60,
                                opacity: 0.08
                            }),
                            (0, r.jsx)(a.ZT, {
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
        var H;
        return k
            ? (0, r.jsx)(g.Uf, { onClose: Z })
            : (0, r.jsx)(g.P9, {
                  user: t,
                  guildId: null != (H = null == P ? void 0 : P.guildId) ? H : void 0,
                  channelId: A,
                  onClose: Z
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: O.scroller,
        fade: !0,
        children: [
            G
                ? (0, r.jsx)(y.Z, {
                      heading: I.intl.string(I.t.J6STd3),
                      children: (0, r.jsxs)('ul', {
                          className: O.cards,
                          children: [
                              !w &&
                                  V &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: D,
                                          onClose: Z
                                      })
                                  }),
                              null != B &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(h.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: B,
                                          onClose: Z,
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
                                              onClose: Z,
                                              profileGuildId: null == P ? void 0 : P.guildId
                                          })
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              w &&
                                  V &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: D,
                                          onClose: Z
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            F
                ? (0, r.jsx)(y.Z, {
                      heading: I.intl.string(I.t.jzgEoK),
                      introText: k
                          ? I.intl.format(I.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: u.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: T === j.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)('ul', {
                          className: O.cards,
                          children: E.map((e) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(x.Z, {
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
