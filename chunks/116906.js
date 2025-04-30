t.d(n, { Z: () => y });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    s = t(468363),
    o = t(353647),
    a = t(158776),
    c = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(678738),
    h = t(151545),
    v = t(744802),
    g = t(493043),
    j = t(864141),
    m = t(228168),
    b = t(981631),
    x = t(388032),
    Z = t(316879),
    O = t(301150);
function y(e) {
    let { user: n, currentUser: t, displayProfile: y, guildId: I, subsection: P, onClose: E } = e,
        { voiceActivityStatusEnabled: N } = (0, s.U)({ location: 'UserProfileModalActivity' }),
        { live: T, recent: S, stream: A } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: _ } = (0, f.Z)({
            userId: n.id,
            guildId: I
        }),
        w = (0, r.e7)([o.Z], () => o.Z.isFetchingUserOutbox(n.id)),
        R = n.id === t.id,
        M = (0, r.e7)([c.Z, a.Z], () => {
            let e = R ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        L = T.length > 0 || null != A,
        D = N && null == A && null == _ && null != C,
        U = !M && (L || D),
        k = S.length > 0;
    return U || k || !w
        ? (0, l.jsxs)(i.zJl, {
              className: Z.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, l.jsxs)(p.Z, {
                            children: [
                                D &&
                                    (0, l.jsx)(j.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: C,
                                        onClose: E
                                    }),
                                null != A &&
                                    (0, l.jsx)(g.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: A,
                                        onClose: E,
                                        profileGuildId: null == y ? void 0 : y.guildId
                                    }),
                                T.map((e, r) =>
                                    (0, l.jsx)(
                                        h.Z,
                                        {
                                            user: n,
                                            currentUser: t,
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
                  k
                      ? (0, l.jsx)(p.Z, {
                            heading: x.intl.string(x.t.M0zgnZ),
                            subheading: R
                                ? x.intl.format(x.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: P === m.Tb.RECENT_ACTIVITY,
                            children: S.map((e) =>
                                (0, l.jsx)(
                                    v.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
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
              className: O.empty,
              children: (0, l.jsx)(i.$jN, {})
          });
}
