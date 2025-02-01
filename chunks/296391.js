i.d(n, { Z: () => _ });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(481060),
    s = i(353647),
    r = i(63063),
    a = i(308406),
    d = i(369566),
    c = i(29899),
    u = i(678738),
    m = i(151545),
    x = i(744802),
    p = i(493043),
    f = i(864141),
    I = i(228168),
    h = i(981631),
    v = i(388032),
    Z = i(189144),
    g = i(731218);
function _(e) {
    let { user: n, currentUser: i, displayProfile: _, guildId: j, subsection: E, onClose: N } = e,
        { live: y, recent: T, stream: P } = (0, d.Z)(n.id),
        b = y.length > 0 || T.length > 0 || null != P,
        S = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        { voiceActivityCardEnabled: L } = (0, a.o)({ location: 'UserProfileModalActivity' }),
        { voiceChannel: C, voiceActivity: A } = (0, c.Z)({
            userId: n.id,
            guildId: j
        }),
        O = L && null != C;
    return b || O || !S
        ? (0, t.jsxs)(o.zJl, {
              className: Z.scroller,
              fade: !0,
              children: [
                  (0, t.jsxs)(u.Z, {
                      children: [
                          null != P &&
                              (0, t.jsx)(p.Z, {
                                  location: 'UserProfileModalActivity',
                                  user: n,
                                  currentUser: i,
                                  stream: P,
                                  onClose: N,
                                  profileGuildId: null == _ ? void 0 : _.guildId
                              }),
                          L &&
                              null == P &&
                              null == A &&
                              null != C &&
                              (0, t.jsx)(f.Z, {
                                  user: n,
                                  voiceChannel: C,
                                  onClose: N
                              }),
                          y.map((e, l) =>
                              (0, t.jsx)(
                                  m.Z,
                                  {
                                      user: n,
                                      currentUser: i,
                                      activity: e,
                                      onClose: N,
                                      profileGuildId: null == _ ? void 0 : _.guildId
                                  },
                                  'live-'.concat(l)
                              )
                          )
                      ]
                  }),
                  T.length > 0 &&
                      (0, t.jsx)(u.Z, {
                          heading: v.intl.string(v.t.M0zgnZ),
                          subheading:
                              n.id === i.id
                                  ? v.intl.format(v.t['4bk9Ag'], {
                                        learnMoreHook: (e, n) =>
                                            (0, t.jsx)(
                                                o.eee,
                                                {
                                                    href: r.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS),
                                                    children: e
                                                },
                                                n
                                            )
                                    })
                                  : void 0,
                          scrollIntoView: E === I.Tb.RECENT_ACTIVITY,
                          children: T.map((e) =>
                              (0, t.jsx)(
                                  x.Z,
                                  {
                                      location: 'UserProfileModalActivity',
                                      user: n,
                                      currentUser: i,
                                      entry: e,
                                      profileGuildId: null == _ ? void 0 : _.guildId,
                                      onClose: N
                                  },
                                  e.id
                              )
                          )
                      })
              ]
          })
        : (0, t.jsx)('div', {
              className: g.empty,
              children: (0, t.jsx)(o.$jN, {})
          });
}
