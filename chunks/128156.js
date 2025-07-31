n.d(t, { Z: () => P });
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
    b = n(744802),
    x = n(493043),
    _ = n(864141),
    j = n(264481),
    h = n(693408),
    y = n(228168),
    v = n(981631),
    I = n(388032),
    O = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: N, channelId: T, subsection: Z, onClose: A } = e,
        { voiceActivityStatusEnabled: w } = (0, a.U)({ location: 'UserProfileModalV2Activity' }),
        C = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: E, recent: S, stream: L } = (0, m.Z)(t.id),
        { voiceChannel: k, voiceActivity: B } = (0, p.Z)({
            userId: t.id,
            guildId: N
        }),
        R = (0, o.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        G = (0, o.e7)([d.Z, s.Z], () => {
            let e = D ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        U = E.length > 0 || null != L,
        M = w && null == L && null == B && null != k,
        F = !G && (U || M),
        V = S.length > 0;
    if (!F && !V && R)
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
    if (!F && !V && !R) {
        var W;
        return D
            ? (0, r.jsx)(j.Uf, { onClose: A })
            : (0, r.jsx)(j.P9, {
                  user: t,
                  guildId: null != (W = null == P ? void 0 : P.guildId) ? W : void 0,
                  channelId: T,
                  onClose: A
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: O.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(h.Z, {
                      heading: I.intl.string(I.t.J6STd3),
                      children: (0, r.jsxs)('ul', {
                          className: O.cards,
                          children: [
                              !C &&
                                  M &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: A
                                      })
                                  }),
                              null != L &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(x.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: L,
                                          onClose: A,
                                          profileGuildId: null == P ? void 0 : P.guildId
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
                                              profileGuildId: null == P ? void 0 : P.guildId
                                          })
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              C &&
                                  M &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(_.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: A
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, r.jsx)(h.Z, {
                      heading: I.intl.string(I.t.jzgEoK),
                      introText: D
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
                      scrollIntoView: Z === y.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)('ul', {
                          className: O.cards,
                          children: S.map((e) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(b.Z, {
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
