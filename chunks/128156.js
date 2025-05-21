n.d(t, { Z: () => v });
var o = n(255367);
n(73800);
var r = n(442837),
    c = n(481060),
    i = n(468363),
    a = n(353647),
    l = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(209698),
    f = n(369566),
    p = n(29899),
    m = n(151545),
    b = n(744802),
    _ = n(493043),
    y = n(864141),
    h = n(264481),
    g = n(693408),
    x = n(228168),
    j = n(981631),
    I = n(388032),
    O = n(514656);
function v(e) {
    let { user: t, currentUser: n, displayProfile: v, guildId: P, channelId: A, subsection: N, onClose: T } = e,
        { voiceActivityStatusEnabled: C } = (0, i.U)({ location: 'UserProfileModalV2Activity' }),
        Z = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: S, stream: E } = (0, f.Z)(t.id),
        { voiceChannel: B, voiceActivity: D } = (0, p.Z)({
            userId: t.id,
            guildId: P
        }),
        U = (0, r.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        L = (0, r.e7)([s.Z, l.Z], () => {
            let e = k ? s.Z.getStatus() : l.Z.getStatus(t.id);
            return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE;
        }),
        M = w.length > 0 || null != E,
        R = C && null == E && null == D && null != B,
        G = !L && (M || R),
        V = S.length > 0;
    return G || V || !U
        ? G || V || U
            ? (0, o.jsxs)(c.Ttm, {
                  className: O.scroller,
                  fade: !0,
                  children: [
                      G
                          ? (0, o.jsxs)(g.Z, {
                                heading: I.intl.string(I.t.J6STd3),
                                children: [
                                    !Z &&
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
                                    Z &&
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
                          ? (0, o.jsx)(g.Z, {
                                heading: I.intl.string(I.t.jzgEoK),
                                subheading: k
                                    ? I.intl.format(I.t['4bk9Ag'], {
                                          learnMoreHook: (e, t) =>
                                              (0, o.jsx)(
                                                  c.eee,
                                                  {
                                                      href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
                                                      children: e
                                                  },
                                                  t
                                              )
                                      })
                                    : void 0,
                                scrollIntoView: N === x.Tb.RECENT_ACTIVITY,
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
            : k
              ? (0, o.jsx)(h.Uf, { onClose: T })
              : (0, o.jsx)(h.P9, {
                    user: t,
                    guildId: P,
                    channelId: A,
                    onClose: T
                })
        : (0, o.jsx)('div', {
              className: O.spinner,
              children: (0, o.jsx)(c.$jN, {})
          });
}
