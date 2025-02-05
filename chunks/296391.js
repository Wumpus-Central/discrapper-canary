t.d(n, { Z: () => j });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(353647),
    r = t(158776),
    a = t(63063),
    d = t(308406),
    c = t(369566),
    u = t(29899),
    m = t(678738),
    x = t(151545),
    p = t(744802),
    I = t(493043),
    f = t(864141),
    h = t(228168),
    v = t(981631),
    Z = t(388032),
    g = t(189144),
    _ = t(731218);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: E, subsection: N, onClose: y } = e,
        { voiceActivityCardEnabled: T } = (0, d.o)({ location: 'UserProfileModalActivity' }),
        { live: P, recent: S, stream: b } = (0, c.Z)(n.id),
        { voiceChannel: L, voiceActivity: C } = (0, u.Z)({
            userId: n.id,
            guildId: E
        }),
        A = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        O = (0, l.e7)([r.Z], () => {
            let e = r.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        M = P.length > 0 || null != b,
        R = T && null == b && null == C && null != L,
        U = S.length > 0;
    return (!O && (M || R)) || U || !A
        ? (0, i.jsxs)(o.zJl, {
              className: g.scroller,
              fade: !0,
              children: [
                  !O && (M || R)
                      ? (0, i.jsxs)(m.Z, {
                            children: [
                                null != b &&
                                    (0, i.jsx)(I.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: b,
                                        onClose: y,
                                        profileGuildId: null == j ? void 0 : j.guildId
                                    }),
                                R &&
                                    (0, i.jsx)(f.Z, {
                                        user: n,
                                        voiceChannel: L,
                                        onClose: y
                                    }),
                                P.map((e, l) =>
                                    (0, i.jsx)(
                                        x.Z,
                                        {
                                            user: n,
                                            currentUser: t,
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
                      ? (0, i.jsx)(m.Z, {
                            heading: Z.intl.string(Z.t.M0zgnZ),
                            subheading:
                                n.id === t.id
                                    ? Z.intl.format(Z.t['4bk9Ag'], {
                                          learnMoreHook: (e, n) =>
                                              (0, i.jsx)(
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
                                (0, i.jsx)(
                                    p.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
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
        : (0, i.jsx)('div', {
              className: _.empty,
              children: (0, i.jsx)(o.$jN, {})
          });
}
