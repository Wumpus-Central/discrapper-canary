t.d(n, { Z: () => Z });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(481060),
    r = t(468363),
    s = t(353647),
    c = t(158776),
    a = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(678738),
    m = t(151545),
    h = t(744802),
    I = t(493043),
    x = t(864141),
    b = t(228168),
    _ = t(981631),
    j = t(388032),
    v = t(316879),
    g = t(301150);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, guildId: y, subsection: A, onClose: T } = e,
        { voiceActivityStatusEnabled: O } = (0, r.U)({ location: 'UserProfileModalActivity' }),
        { live: N, recent: E, stream: C } = (0, u.Z)(n.id),
        { voiceChannel: P, voiceActivity: S } = (0, f.Z)({
            userId: n.id,
            guildId: y
        }),
        M = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        w = n.id === t.id,
        L = (0, o.e7)([a.Z, c.Z], () => {
            let e = w ? a.Z.getStatus() : c.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        R = N.length > 0 || null != C,
        D = O && null == C && null == S && null != P,
        B = E.length > 0;
    return (!L && (R || D)) || B || !M
        ? (0, i.jsxs)(l.zJl, {
              className: v.scroller,
              fade: !0,
              children: [
                  !L && (R || D)
                      ? (0, i.jsxs)(p.Z, {
                            children: [
                                D &&
                                    (0, i.jsx)(x.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: P,
                                        onClose: T
                                    }),
                                null != C &&
                                    (0, i.jsx)(I.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: C,
                                        onClose: T,
                                        profileGuildId: null == Z ? void 0 : Z.guildId
                                    }),
                                N.map((e, o) =>
                                    (0, i.jsx)(
                                        m.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: T,
                                            profileGuildId: null == Z ? void 0 : Z.guildId
                                        },
                                        'live-'.concat(o)
                                    )
                                )
                            ]
                        })
                      : null,
                  B
                      ? (0, i.jsx)(p.Z, {
                            heading: j.intl.string(j.t.M0zgnZ),
                            subheading: w
                                ? j.intl.format(j.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, i.jsx)(
                                              l.eee,
                                              {
                                                  href: d.Z.getArticleURL(_.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: A === b.Tb.RECENT_ACTIVITY,
                            children: E.map((e) =>
                                (0, i.jsx)(
                                    h.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == Z ? void 0 : Z.guildId,
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
              className: g.empty,
              children: (0, i.jsx)(l.$jN, {})
          });
}
