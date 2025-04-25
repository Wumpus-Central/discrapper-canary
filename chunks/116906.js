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
    m = t(678738),
    p = t(151545),
    h = t(744802),
    x = t(493043),
    I = t(864141),
    v = t(228168),
    b = t(981631),
    j = t(388032),
    _ = t(316879),
    g = t(301150);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, guildId: y, subsection: N, onClose: A } = e,
        { voiceActivityStatusEnabled: T } = (0, r.U)({ location: 'UserProfileModalActivity' }),
        { live: O, recent: C, stream: E } = (0, u.Z)(n.id),
        { voiceChannel: P, voiceActivity: S } = (0, f.Z)({
            userId: n.id,
            guildId: y
        }),
        M = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        w = (0, o.e7)([c.Z, a.Z], () => {
            let e = L ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        B = O.length > 0 || null != E,
        D = T && null == E && null == S && null != P,
        U = !w && (B || D),
        R = C.length > 0;
    return U || R || !M
        ? (0, i.jsxs)(l.zJl, {
              className: _.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, i.jsxs)(m.Z, {
                            children: [
                                D &&
                                    (0, i.jsx)(I.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: P,
                                        onClose: A
                                    }),
                                null != E &&
                                    (0, i.jsx)(x.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: E,
                                        onClose: A,
                                        profileGuildId: null == Z ? void 0 : Z.guildId
                                    }),
                                O.map((e, o) =>
                                    (0, i.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: A,
                                            profileGuildId: null == Z ? void 0 : Z.guildId
                                        },
                                        'live-'.concat(o)
                                    )
                                )
                            ]
                        })
                      : null,
                  R
                      ? (0, i.jsx)(m.Z, {
                            heading: j.intl.string(j.t.M0zgnZ),
                            subheading: L
                                ? j.intl.format(j.t['4bk9Ag'], {
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
                            scrollIntoView: N === v.Tb.RECENT_ACTIVITY,
                            children: C.map((e) =>
                                (0, i.jsx)(
                                    h.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == Z ? void 0 : Z.guildId,
                                        onClose: A
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
