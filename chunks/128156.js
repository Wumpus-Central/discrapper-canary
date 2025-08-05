n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(481060),
    l = n(468363),
    a = n(353647),
    c = n(566898),
    s = n(158776),
    d = n(885110),
    u = n(63063),
    f = n(209698),
    p = n(369566),
    m = n(29899),
    g = n(151545),
    b = n(744802),
    y = n(493043),
    O = n(864141),
    h = n(264481),
    j = n(693408),
    x = n(228168),
    _ = n(981631),
    v = n(388032),
    I = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: w, channelId: N, subsection: T, onClose: E } = e,
        { voiceActivityStatusEnabled: Z } = (0, l.U)({ location: 'UserProfileModalV2Activity' }),
        A = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: C, recent: S, stream: L } = (0, p.Z)(t.id),
        { voiceChannel: k, voiceActivity: R } = (0, m.Z)({
            userId: t.id,
            guildId: w
        }),
        D = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        G = t.id === n.id,
        B = (0, o.e7)([d.Z, s.Z], () => {
            let e = G ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        F = C.length > 0 || null != L,
        U = Z && null == L && null == R && null != k,
        M = !B && (F || U),
        V = S.length > 0;
    if (!M && !V && D)
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
    if (!M && !V && !D) {
        var W;
        return G
            ? (0, r.jsx)(h.Uf, { onClose: E })
            : (0, r.jsx)(h.P9, {
                  user: t,
                  guildId: null != (W = null == P ? void 0 : P.guildId) ? W : void 0,
                  channelId: N,
                  onClose: E
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            M
                ? (0, r.jsx)(j.Z, {
                      heading: v.intl.string(v.t.J6STd3),
                      children: (0, r.jsxs)('ul', {
                          className: I.cards,
                          children: [
                              !A &&
                                  U &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(O.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: E
                                      })
                                  }),
                              null != L &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(y.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: L,
                                          onClose: E,
                                          profileGuildId: null == P ? void 0 : P.guildId
                                      })
                                  }),
                              C.map((e, o) =>
                                  (0, r.jsx)(
                                      'li',
                                      {
                                          children: (0, r.jsx)(g.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: E,
                                              profileGuildId: null == P ? void 0 : P.guildId
                                          })
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              A &&
                                  U &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(O.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: E
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, r.jsx)(j.Z, {
                      heading: v.intl.string(v.t.jzgEoK),
                      introText: G
                          ? v.intl.format(v.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: u.Z.getArticleURL(_.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: T === x.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)('ul', {
                          className: I.cards,
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
                                          onClose: E
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
