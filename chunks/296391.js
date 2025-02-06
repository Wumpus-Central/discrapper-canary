i.d(n, { Z: () => j });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(481060),
    s = i(353647),
    r = i(158776),
    a = i(63063),
    d = i(308406),
    c = i(369566),
    u = i(29899),
    m = i(678738),
    x = i(151545),
    p = i(744802),
    f = i(493043),
    I = i(864141),
    h = i(228168),
    v = i(981631),
    Z = i(388032),
    g = i(189144),
    _ = i(731218);
function j(e) {
    let { user: n, currentUser: i, displayProfile: j, guildId: E, subsection: N, onClose: y } = e,
        { voiceActivityCardEnabled: T } = (0, d.o)({ location: 'UserProfileModalActivity' }),
        { live: b, recent: S, stream: P } = (0, c.Z)(n.id),
        { voiceChannel: L, voiceActivity: C } = (0, u.Z)({
            userId: n.id,
            guildId: E
        }),
        A = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        O = (0, l.e7)([r.Z], () => {
            let e = r.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        M = b.length > 0 || null != P,
        R = T && null == P && null == C && null != L,
        U = S.length > 0;
    return (!O && (M || R)) || U || !A
        ? (0, t.jsxs)(o.zJl, {
              className: g.scroller,
              fade: !0,
              children: [
                  !O && (M || R)
                      ? (0, t.jsxs)(m.Z, {
                            children: [
                                null != P &&
                                    (0, t.jsx)(f.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: i,
                                        stream: P,
                                        onClose: y,
                                        profileGuildId: null == j ? void 0 : j.guildId
                                    }),
                                R &&
                                    (0, t.jsx)(I.Z, {
                                        user: n,
                                        voiceChannel: L,
                                        onClose: y
                                    }),
                                b.map((e, l) =>
                                    (0, t.jsx)(
                                        x.Z,
                                        {
                                            user: n,
                                            currentUser: i,
                                            activity: e,
                                            onClose: y,
                                            profileGuildId: null == j ? void 0 : j.guildId
                                        },
                                        'live-'.concat(l)
                                    )
                                )
                            ]
                        })
                      : null,
                  U
                      ? (0, t.jsx)(m.Z, {
                            heading: Z.intl.string(Z.t.M0zgnZ),
                            subheading:
                                n.id === i.id
                                    ? Z.intl.format(Z.t['4bk9Ag'], {
                                          learnMoreHook: (e, n) =>
                                              (0, t.jsx)(
                                                  o.eee,
                                                  {
                                                      href: a.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                                      children: e
                                                  },
                                                  n
                                              )
                                      })
                                    : void 0,
                            scrollIntoView: N === h.Tb.RECENT_ACTIVITY,
                            children: S.map((e) =>
                                (0, t.jsx)(
                                    p.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: i,
                                        entry: e,
                                        profileGuildId: null == j ? void 0 : j.guildId,
                                        onClose: y
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, t.jsx)('div', {
              className: _.empty,
              children: (0, t.jsx)(o.$jN, {})
          });
}
