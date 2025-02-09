t.d(n, { Z: () => E });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(353647),
    r = t(158776),
    a = t(885110),
    d = t(63063),
    c = t(308406),
    u = t(369566),
    I = t(29899),
    f = t(678738),
    p = t(151545),
    x = t(744802),
    _ = t(493043),
    m = t(864141),
    h = t(228168),
    Z = t(981631),
    v = t(388032),
    g = t(922147),
    j = t(782276);
function E(e) {
    let { user: n, currentUser: t, displayProfile: E, guildId: y, subsection: N, onClose: T } = e,
        { voiceActivityCardEnabled: b } = (0, c.o)({ location: 'UserProfileModalActivity' }),
        { live: P, recent: S, stream: L } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: A } = (0, I.Z)({
            userId: n.id,
            guildId: y
        }),
        O = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        R = n.id === t.id,
        M = (0, l.e7)([a.Z, r.Z], () => {
            let e = R ? a.Z.getStatus() : r.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        B = P.length > 0 || null != L,
        U = b && null == L && null == A && null != C,
        F = S.length > 0;
    return (!M && (B || U)) || F || !O
        ? (0, i.jsxs)(o.zJl, {
              className: g.scroller,
              fade: !0,
              children: [
                  !M && (B || U)
                      ? (0, i.jsxs)(f.Z, {
                            children: [
                                null != L &&
                                    (0, i.jsx)(_.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: L,
                                        onClose: T,
                                        profileGuildId: null == E ? void 0 : E.guildId
                                    }),
                                U &&
                                    (0, i.jsx)(m.Z, {
                                        user: n,
                                        voiceChannel: C,
                                        onClose: T
                                    }),
                                P.map((e, l) =>
                                    (0, i.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: t,
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
                  F
                      ? (0, i.jsx)(f.Z, {
                            heading: v.intl.string(v.t.M0zgnZ),
                            subheading: R
                                ? v.intl.format(v.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, i.jsx)(
                                              o.eee,
                                              {
                                                  href: d.Z.getArticleURL(Z.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: N === h.Tb.RECENT_ACTIVITY,
                            children: S.map((e) =>
                                (0, i.jsx)(
                                    x.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
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
        : (0, i.jsx)('div', {
              className: j.empty,
              children: (0, i.jsx)(o.$jN, {})
          });
}
