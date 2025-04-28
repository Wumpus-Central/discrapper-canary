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
    x = t(493043),
    I = t(864141),
    j = t(228168),
    v = t(981631),
    b = t(388032),
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
        L = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        M = n.id === t.id,
        w = (0, o.e7)([c.Z, a.Z], () => {
            let e = M ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        D = O.length > 0 || null != E,
        U = T && null == E && null == S && null != P,
        B = !w && (D || U),
        G = C.length > 0;
    return B || G || !L
        ? (0, i.jsxs)(l.zJl, {
              className: _.scroller,
              fade: !0,
              children: [
                  B
                      ? (0, i.jsxs)(p.Z, {
                            children: [
                                U &&
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
                                        m.Z,
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
                  G
                      ? (0, i.jsx)(p.Z, {
                            heading: b.intl.string(b.t.M0zgnZ),
                            subheading: M
                                ? b.intl.format(b.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, i.jsx)(
                                              l.eee,
                                              {
                                                  href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: N === j.Tb.RECENT_ACTIVITY,
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
