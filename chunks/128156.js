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
    O = n(864141),
    j = n(264481),
    _ = n(693408),
    x = n(228168),
    h = n(981631),
    v = n(388032),
    I = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: N, channelId: E, subsection: A, onClose: w } = e,
        { voiceActivityStatusEnabled: T } = (0, i.U)({ location: 'UserProfileModalV2Activity' }),
        S = (0, f.b)({ location: 'UserProfileModalV2Activity' }),
        { live: Z, recent: C, stream: G } = (0, p.Z)(t.id),
        { voiceChannel: L, voiceActivity: k } = (0, m.Z)({
            userId: t.id,
            guildId: N
        }),
        R = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        M = (0, o.e7)([d.Z, s.Z], () => {
            let e = D ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        B = Z.length > 0 || null != G,
        U = T && null == G && null == k && null != L,
        F = !M && (B || U),
        V = C.length > 0;
    if (!F && !V && R)
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
    if (!F && !V && !R) {
        var Y;
        return D
            ? (0, r.jsx)(j.Uf, { onClose: w })
            : (0, r.jsx)(j.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: E,
                  onClose: w
              });
    }
    return (0, r.jsxs)(l.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(_.Z, {
                      heading: v.intl.string(v.t.J6STd3),
                      children: (0, r.jsxs)('ul', {
                          className: I.cards,
                          children: [
                              !S &&
                                  U &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(O.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: w
                                      })
                                  }),
                              null != G &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(y.Z, {
                                          location: 'UserProfileModalV2Activity',
                                          user: t,
                                          currentUser: n,
                                          stream: G,
                                          onClose: w,
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
                                              onClose: w,
                                              profileGuildId: null == P ? void 0 : P.guildId
                                          })
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              S &&
                                  U &&
                                  (0, r.jsx)('li', {
                                      children: (0, r.jsx)(O.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: w
                                      })
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, r.jsx)(_.Z, {
                      heading: v.intl.string(v.t.jzgEoK),
                      introText: D
                          ? v.intl.format(v.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        l.eee,
                                        {
                                            href: u.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: A === x.Tb.RECENT_ACTIVITY,
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
                                          onClose: w
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
