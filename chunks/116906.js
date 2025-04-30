n.d(t, { Z: () => y });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    s = n(468363),
    o = n(353647),
    c = n(158776),
    a = n(885110),
    d = n(63063),
    u = n(369566),
    f = n(29899),
    p = n(678738),
    h = n(151545),
    j = n(744802),
    g = n(493043),
    v = n(864141),
    m = n(228168),
    x = n(981631),
    b = n(388032),
    O = n(316879),
    Z = n(301150);
function y(e) {
    let { user: t, currentUser: n, displayProfile: y, guildId: I, subsection: P, onClose: E } = e,
        { voiceActivityStatusEnabled: N } = (0, s.U)({ location: 'UserProfileModalActivity' }),
        { live: T, recent: S, stream: A } = (0, u.Z)(t.id),
        { voiceChannel: C, voiceActivity: _ } = (0, f.Z)({
            userId: t.id,
            guildId: I
        }),
        w = (0, r.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)),
        R = t.id === n.id,
        L = (0, r.e7)([a.Z, c.Z], () => {
            let e = R ? a.Z.getStatus() : c.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = T.length > 0 || null != A,
        D = N && null == A && null == _ && null != C,
        U = !L && (M || D),
        G = S.length > 0;
    return U || G || !w
        ? (0, l.jsxs)(i.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, l.jsxs)(p.Z, {
                            children: [
                                D &&
                                    (0, l.jsx)(v.Z, {
                                        user: t,
                                        currentUser: n,
                                        voiceChannel: C,
                                        onClose: E
                                    }),
                                null != A &&
                                    (0, l.jsx)(g.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: t,
                                        currentUser: n,
                                        stream: A,
                                        onClose: E,
                                        profileGuildId: null == y ? void 0 : y.guildId
                                    }),
                                T.map((e, r) =>
                                    (0, l.jsx)(
                                        h.Z,
                                        {
                                            user: t,
                                            currentUser: n,
                                            activity: e,
                                            onClose: E,
                                            profileGuildId: null == y ? void 0 : y.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                )
                            ]
                        })
                      : null,
                  G
                      ? (0, l.jsx)(p.Z, {
                            heading: b.intl.string(b.t.M0zgnZ),
                            subheading: R
                                ? b.intl.format(b.t['4bk9Ag'], {
                                      learnMoreHook: (e, t) =>
                                          (0, l.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                                : void 0,
                            scrollIntoView: P === m.Tb.RECENT_ACTIVITY,
                            children: S.map((e) =>
                                (0, l.jsx)(
                                    j.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: t,
                                        currentUser: n,
                                        entry: e,
                                        profileGuildId: null == y ? void 0 : y.guildId,
                                        onClose: E
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, l.jsx)('div', {
              className: Z.empty,
              children: (0, l.jsx)(i.$jN, {})
          });
}
