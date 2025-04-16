t.d(n, { Z: () => _ });
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(468363),
    s = t(353647),
    c = t(158776),
    a = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(678738),
    b = t(151545),
    m = t(744802),
    I = t(493043),
    g = t(864141),
    y = t(228168),
    h = t(981631),
    j = t(388032),
    v = t(316879),
    x = t(301150);
function _(e) {
    let { user: n, currentUser: t, displayProfile: _, guildId: O, subsection: Z, onClose: N } = e,
        { voiceActivityStatusEnabled: P } = (0, l.U)({ location: 'UserProfileModalActivity' }),
        { live: E, recent: S, stream: T } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: A } = (0, f.Z)({
            userId: n.id,
            guildId: O
        }),
        L = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        w = n.id === t.id,
        R = (0, o.e7)([a.Z, c.Z], () => {
            let e = w ? a.Z.getStatus() : c.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = E.length > 0 || null != T,
        U = P && null == T && null == A && null != C,
        D = S.length > 0;
    return (!R && (M || U)) || D || !L
        ? (0, r.jsxs)(i.zJl, {
              className: v.scroller,
              fade: !0,
              children: [
                  !R && (M || U)
                      ? (0, r.jsxs)(p.Z, {
                            children: [
                                U &&
                                    (0, r.jsx)(g.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: C,
                                        onClose: N
                                    }),
                                null != T &&
                                    (0, r.jsx)(I.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: T,
                                        onClose: N,
                                        profileGuildId: null == _ ? void 0 : _.guildId
                                    }),
                                E.map((e, o) =>
                                    (0, r.jsx)(
                                        b.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: N,
                                            profileGuildId: null == _ ? void 0 : _.guildId
                                        },
                                        'live-'.concat(o)
                                    )
                                )
                            ]
                        })
                      : null,
                  D
                      ? (0, r.jsx)(p.Z, {
                            heading: j.NW.string(j.t.M0zgnZ),
                            subheading: w
                                ? j.NW.format(j.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, r.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: Z === y.Tb.RECENT_ACTIVITY,
                            children: S.map((e) =>
                                (0, r.jsx)(
                                    m.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == _ ? void 0 : _.guildId,
                                        onClose: N
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, r.jsx)('div', {
              className: x.empty,
              children: (0, r.jsx)(i.$jN, {})
          });
}
