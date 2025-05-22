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
    y = n(493043),
    _ = n(864141),
    h = n(264481),
    x = n(693408),
    g = n(228168),
    j = n(981631),
    O = n(388032),
    I = n(514656);
function v(e) {
    let { user: t, currentUser: n, displayProfile: v, guildId: A, channelId: P, subsection: N, onClose: T } = e,
        { voiceActivityStatusEnabled: Z } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        C = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: S, stream: E } = (0, f.Z)(t.id),
        { voiceChannel: B, voiceActivity: D } = (0, p.Z)({
            userId: t.id,
            guildId: A
        }),
        U = (0, r.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        L = (0, r.e7)([s.Z, a.Z], () => {
            let e = k ? s.Z.getStatus() : a.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = w.length > 0 || null != E,
        G = Z && null == E && null == D && null != B,
        R = !L && (M || G),
        V = S.length > 0;
    return R || V || !U
        ? R || V || U
            ? (0, o.jsxs)(i.Ttm, {
                  className: I.scroller,
                  fade: !0,
                  children: [
                      R
                          ? (0, o.jsxs)(x.Z, {
                                heading: O.intl.string(O.t.J6STd3),
                                children: [
                                    !C &&
                                        G &&
                                        (0, o.jsx)(_.Z, {
                                            user: t,
                                            currentUser: n,
                                            voiceChannel: B,
                                            onClose: T
                                        }),
                                    null != E &&
                                        (0, o.jsx)(y.Z, {
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
                                        G &&
                                        (0, o.jsx)(_.Z, {
                                            user: t,
                                            currentUser: n,
                                            voiceChannel: B,
                                            onClose: T
                                        })
                                ]
                            })
                          : null,
                      V
                          ? (0, o.jsx)(x.Z, {
                                heading: O.intl.string(O.t.jzgEoK),
                                subheading: k
                                    ? O.intl.format(O.t['4bk9Ag'], {
                                          learnMoreHook: (e, t) =>
                                              (0, o.jsx)(
                                                  i.eee,
                                                  {
                                                      href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
                                                      children: e
                                                  },
                                                  t
                                              )
                                      })
                                    : void 0,
                                scrollIntoView: N === g.Tb.RECENT_ACTIVITY,
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
                    guildId: A,
                    channelId: P,
                    onClose: T
                })
        : (0, o.jsx)('div', {
              className: I.spinner,
              children: (0, o.jsx)(i.$jN, {})
          });
}
