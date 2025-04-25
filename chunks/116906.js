t.d(n, { Z: () => Z });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(481060),
    r = t(468363),
    s = t(353647),
    a = t(158776),
    c = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(678738),
    m = t(151545),
    h = t(744802),
    I = t(493043),
    x = t(864141),
    _ = t(228168),
    b = t(981631),
    v = t(388032),
    g = t(316879),
    j = t(301150);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, guildId: y, subsection: A, onClose: N } = e,
        { voiceActivityStatusEnabled: T } = (0, r.U)({ location: 'UserProfileModalActivity' }),
        { live: O, recent: E, stream: P } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: S } = (0, f.Z)({
            userId: n.id,
            guildId: y
        }),
        M = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        w = (0, o.e7)([c.Z, a.Z], () => {
            let e = L ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        B = O.length > 0 || null != P,
        D = T && null == P && null == S && null != C,
        U = !w && (B || D),
        R = E.length > 0;
    return U || R || !M
        ? (0, i.jsxs)(l.zJl, {
              className: g.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, i.jsxs)(p.Z, {
                            children: [
                                D &&
                                    (0, i.jsx)(x.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: C,
                                        onClose: N
                                    }),
                                null != P &&
                                    (0, i.jsx)(I.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: P,
                                        onClose: N,
                                        profileGuildId: null == Z ? void 0 : Z.guildId
                                    }),
                                O.map((e, o) =>
                                    (0, i.jsx)(
                                        m.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: N,
                                            profileGuildId: null == Z ? void 0 : Z.guildId
                                        },
                                        'live-'.concat(o)
                                    )
                                )
                            ]
                        })
                      : null,
                  R
                      ? (0, i.jsx)(p.Z, {
                            heading: v.intl.string(v.t.M0zgnZ),
                            subheading: L
                                ? v.intl.format(v.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, i.jsx)(
                                              l.eee,
                                              {
                                                  href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: A === _.Tb.RECENT_ACTIVITY,
                            children: E.map((e) =>
                                (0, i.jsx)(
                                    h.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == Z ? void 0 : Z.guildId,
                                        onClose: N
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
              children: (0, i.jsx)(l.$jN, {})
          });
}
