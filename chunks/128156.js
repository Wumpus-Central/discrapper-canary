n.d(t, { Z: () => v });
var o = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    c = n(468363),
    l = n(353647),
    a = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(209698),
    f = n(369566),
    p = n(29899),
    m = n(151545),
    b = n(744802),
    _ = n(493043),
    y = n(864141),
    x = n(264481),
    h = n(693408),
    j = n(228168),
    g = n(981631),
    O = n(388032),
    I = n(514656);
function v(e) {
    let { user: t, currentUser: n, displayProfile: v, guildId: P, channelId: N, subsection: A, onClose: T } = e,
        { voiceActivityStatusEnabled: Z } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        C = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: S, stream: E } = (0, f.Z)(t.id),
        { voiceChannel: B, voiceActivity: D } = (0, p.Z)({
            userId: t.id,
            guildId: P
        }),
        k = (0, r.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        U = t.id === n.id,
        L = (0, r.e7)([s.Z, a.Z], () => {
            let e = U ? s.Z.getStatus() : a.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = w.length > 0 || null != E,
        R = Z && null == E && null == D && null != B,
        G = !L && (M || R),
        V = S.length > 0;
    return G || V || !k
        ? G || V || k
            ? (0, o.jsxs)(i.Ttm, {
                  className: I.scroller,
                  fade: !0,
                  children: [
                      G
                          ? (0, o.jsxs)(h.Z, {
                                heading: O.intl.string(O.t.J6STd3),
                                children: [
                                    !C &&
                                        R &&
                                        (0, o.jsx)(y.Z, {
                                            user: t,
                                            currentUser: n,
                                            voiceChannel: B,
                                            onClose: T
                                        }),
                                    null != E &&
                                        (0, o.jsx)(_.Z, {
                                            location: 'UserProfileModalV2Activity',
                                            user: t,
                                            currentUser: n,
                                            stream: E,
                                            onClose: T,
                                            profileGuildId: null == v ? void 0 : v.guildId
                                        }),
                                    w.map((e, r) =>
                                        (0, o.jsx)(
                                            m.Z,
                                            {
                                                user: t,
                                                currentUser: n,
                                                activity: e,
                                                onClose: T,
                                                profileGuildId: null == v ? void 0 : v.guildId
                                            },
                                            'live-'.concat(r)
                                        )
                                    ),
                                    C &&
                                        R &&
                                        (0, o.jsx)(y.Z, {
                                            user: t,
                                            currentUser: n,
                                            voiceChannel: B,
                                            onClose: T
                                        })
                                ]
                            })
                          : null,
                      V
                          ? (0, o.jsx)(h.Z, {
                                heading: O.intl.string(O.t.jzgEoK),
                                subheading: U
                                    ? O.intl.format(O.t['4bk9Ag'], {
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
                                scrollIntoView: A === j.Tb.RECENT_ACTIVITY,
                                children: S.map((e) =>
                                    (0, o.jsx)(
                                        b.Z,
                                        {
                                            location: 'UserProfileModalV2Activity',
                                            user: t,
                                            currentUser: n,
                                            entry: e,
                                            profileGuildId: null == v ? void 0 : v.guildId,
                                            onClose: T
                                        },
                                        e.id
                                    )
                                )
                            })
                          : null
                  ]
              })
            : U
              ? (0, o.jsx)(x.Uf, { onClose: T })
              : (0, o.jsx)(x.P9, {
                    user: t,
                    guildId: P,
                    channelId: N,
                    onClose: T
                })
        : (0, o.jsx)('div', {
              className: I.spinner,
              children: (0, o.jsx)(i.$jN, {})
          });
}
