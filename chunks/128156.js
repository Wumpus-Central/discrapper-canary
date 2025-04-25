t.d(n, { Z: () => I });
var o = t(200651);
t(192379);
var i = t(442837),
    c = t(481060),
    r = t(468363),
    l = t(353647),
    a = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(151545),
    b = t(744802),
    m = t(493043),
    h = t(864141),
    g = t(693408),
    x = t(228168),
    j = t(981631),
    _ = t(388032),
    y = t(514656);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: v, subsection: A, onClose: C } = e,
        { voiceActivityStatusEnabled: O } = (0, r.U)({ location: 'UserProfileModalV2Activity' }),
        { live: N, recent: Z, stream: T } = (0, u.Z)(n.id),
        { voiceChannel: P, voiceActivity: S } = (0, f.Z)({
            userId: n.id,
            guildId: v
        }),
        w = (0, i.e7)([l.Z], () => l.Z.isFetchingUserOutbox(n.id)),
        V = n.id === t.id,
        E = (0, i.e7)([s.Z, a.Z], () => {
            let e = V ? s.Z.getStatus() : a.Z.getStatus(n.id);
            return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE;
        }),
        M = N.length > 0 || null != T,
        U = O && null == T && null == S && null != P,
        k = !E && (M || U),
        B = Z.length > 0;
    return k || B || !w
        ? (0, o.jsxs)(c.Ttm, {
              className: y.scroller,
              fade: !0,
              children: [
                  k
                      ? (0, o.jsxs)(g.Z, {
                            heading: _.intl.string(_.t.J6STd3),
                            children: [
                                U &&
                                    (0, o.jsx)(h.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: P,
                                        onClose: C
                                    }),
                                null != T &&
                                    (0, o.jsx)(m.Z, {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        stream: T,
                                        onClose: C,
                                        profileGuildId: null == I ? void 0 : I.guildId
                                    }),
                                N.map((e, i) =>
                                    (0, o.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: C,
                                            profileGuildId: null == I ? void 0 : I.guildId
                                        },
                                        'live-'.concat(i)
                                    )
                                )
                            ]
                        })
                      : null,
                  B
                      ? (0, o.jsx)(g.Z, {
                            heading: _.intl.string(_.t.jzgEoK),
                            subheading: V
                                ? _.intl.format(_.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, o.jsx)(
                                              c.eee,
                                              {
                                                  href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: A === x.Tb.RECENT_ACTIVITY,
                            children: Z.map((e) =>
                                (0, o.jsx)(
                                    b.Z,
                                    {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == I ? void 0 : I.guildId,
                                        onClose: C
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, o.jsx)('div', {
              className: y.spinner,
              children: (0, o.jsx)(c.$jN, {})
          });
}
