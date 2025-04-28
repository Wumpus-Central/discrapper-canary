n.d(t, { Z: () => v });
var o = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    c = n(468363),
    a = n(353647),
    l = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(369566),
    f = n(29899),
    p = n(151545),
    m = n(744802),
    b = n(493043),
    h = n(864141),
    _ = n(693408),
    y = n(228168),
    g = n(981631),
    j = n(388032),
    x = n(514656);
function v(e) {
    let { user: t, currentUser: n, displayProfile: v, guildId: I, subsection: O, onClose: A } = e,
        { voiceActivityStatusEnabled: N } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        { live: P, recent: T, stream: C } = (0, u.Z)(t.id),
        { voiceChannel: S, voiceActivity: Z } = (0, f.Z)({
            userId: t.id,
            guildId: I
        }),
        w = (0, r.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        M = t.id === n.id,
        U = (0, r.e7)([s.Z, l.Z], () => {
            let e = M ? s.Z.getStatus() : l.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        E = P.length > 0 || null != C,
        V = N && null == C && null == Z && null != S,
        D = !U && (E || V),
        B = T.length > 0;
    return D || B || !w
        ? (0, o.jsxs)(i.Ttm, {
              className: x.scroller,
              fade: !0,
              children: [
                  D
                      ? (0, o.jsxs)(_.Z, {
                            heading: j.intl.string(j.t.J6STd3),
                            children: [
                                V &&
                                    (0, o.jsx)(h.Z, {
                                        user: t,
                                        currentUser: n,
                                        voiceChannel: S,
                                        onClose: A
                                    }),
                                null != C &&
                                    (0, o.jsx)(b.Z, {
                                        location: 'UserProfileModalV2Activity',
                                        user: t,
                                        currentUser: n,
                                        stream: C,
                                        onClose: A,
                                        profileGuildId: null == v ? void 0 : v.guildId
                                    }),
                                P.map((e, r) =>
                                    (0, o.jsx)(
                                        p.Z,
                                        {
                                            user: t,
                                            currentUser: n,
                                            activity: e,
                                            onClose: A,
                                            profileGuildId: null == v ? void 0 : v.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                )
                            ]
                        })
                      : null,
                  B
                      ? (0, o.jsx)(_.Z, {
                            heading: j.intl.string(j.t.jzgEoK),
                            subheading: M
                                ? j.intl.format(j.t['4bk9Ag'], {
                                      learnMoreHook: (e, t) =>
                                          (0, o.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                                : void 0,
                            scrollIntoView: O === y.Tb.RECENT_ACTIVITY,
                            children: T.map((e) =>
                                (0, o.jsx)(
                                    m.Z,
                                    {
                                        location: 'UserProfileModalV2Activity',
                                        user: t,
                                        currentUser: n,
                                        entry: e,
                                        profileGuildId: null == v ? void 0 : v.guildId,
                                        onClose: A
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, o.jsx)('div', {
              className: x.spinner,
              children: (0, o.jsx)(i.$jN, {})
          });
}
