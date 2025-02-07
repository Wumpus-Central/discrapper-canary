i.d(n, { Z: () => E });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(481060),
    s = i(353647),
    r = i(158776),
    a = i(885110),
    d = i(63063),
    c = i(308406),
    u = i(369566),
    m = i(29899),
    x = i(678738),
    p = i(151545),
    f = i(744802),
    I = i(493043),
    h = i(864141),
    v = i(228168),
    Z = i(981631),
    g = i(388032),
    _ = i(189144),
    j = i(731218);
function E(e) {
    let { user: n, currentUser: i, displayProfile: E, guildId: N, subsection: y, onClose: T } = e,
        { voiceActivityCardEnabled: S } = (0, c.o)({ location: 'UserProfileModalActivity' }),
        { live: b, recent: P, stream: L } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: A } = (0, m.Z)({
            userId: n.id,
            guildId: N
        }),
        O = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        M = n.id === i.id,
        R = (0, l.e7)([a.Z, r.Z], () => {
            let e = M ? a.Z.getStatus() : r.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        U = b.length > 0 || null != L,
        F = S && null == L && null == A && null != C,
        B = P.length > 0;
    return (!R && (U || F)) || B || !O
        ? (0, t.jsxs)(o.zJl, {
              className: _.scroller,
              fade: !0,
              children: [
                  !R && (U || F)
                      ? (0, t.jsxs)(x.Z, {
                            children: [
                                null != L &&
                                    (0, t.jsx)(I.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: i,
                                        stream: L,
                                        onClose: T,
                                        profileGuildId: null == E ? void 0 : E.guildId
                                    }),
                                F &&
                                    (0, t.jsx)(h.Z, {
                                        user: n,
                                        voiceChannel: C,
                                        onClose: T
                                    }),
                                b.map((e, l) =>
                                    (0, t.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: i,
                                            activity: e,
                                            onClose: T,
                                            profileGuildId: null == E ? void 0 : E.guildId
                                        },
                                        'live-'.concat(l)
                                    )
                                )
                            ]
                        })
                      : null,
                  B
                      ? (0, t.jsx)(x.Z, {
                            heading: g.intl.string(g.t.M0zgnZ),
                            subheading: M
                                ? g.intl.format(g.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, t.jsx)(
                                              o.eee,
                                              {
                                                  href: d.Z.getArticleURL(Z.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: y === v.Tb.RECENT_ACTIVITY,
                            children: P.map((e) =>
                                (0, t.jsx)(
                                    f.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: i,
                                        entry: e,
                                        profileGuildId: null == E ? void 0 : E.guildId,
                                        onClose: T
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, t.jsx)('div', {
              className: j.empty,
              children: (0, t.jsx)(o.$jN, {})
          });
}
