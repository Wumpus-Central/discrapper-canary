n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var o = n(442837),
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
    h = n(264481),
    x = n(693408),
    g = n(228168),
    j = n(981631),
    O = n(388032),
    I = n(368226);
function v(e) {
    let { user: t, currentUser: n, displayProfile: v, guildId: P, channelId: A, subsection: N, onClose: T } = e,
        { voiceActivityStatusEnabled: Z } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        C = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: S, stream: E } = (0, f.Z)(t.id),
        { voiceChannel: B, voiceActivity: D } = (0, p.Z)({
            userId: t.id,
            guildId: P
        }),
        U = (0, o.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        L = (0, o.e7)([s.Z, a.Z], () => {
            let e = k ? s.Z.getStatus() : a.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = w.length > 0 || null != E,
        G = Z && null == E && null == D && null != B,
        R = !L && (M || G),
        V = S.length > 0;
    return R || V || !U
        ? R || V || U
            ? (0, r.jsxs)(i.Ttm, {
                  className: I.scroller,
                  fade: !0,
                  children: [
                      R
                          ? (0, r.jsxs)(x.Z, {
                                heading: O.intl.string(O.t.J6STd3),
                                children: [
                                    !C &&
                                        G &&
                                        (0, r.jsx)(y.Z, {
                                            user: t,
                                            currentUser: n,
                                            voiceChannel: B,
                                            onClose: T
                                        }),
                                    null != E &&
                                        (0, r.jsx)(_.Z, {
                                            location: 'UserProfileModalV2Activity',
                                            user: t,
                                            currentUser: n,
                                            stream: E,
                                            onClose: T,
                                            profileGuildId: null == v ? void 0 : v.guildId
                                        }),
                                    w.map((e, o) =>
                                        (0, r.jsx)(
                                            m.Z,
                                            {
                                                user: t,
                                                currentUser: n,
                                                activity: e,
                                                onClose: T,
                                                profileGuildId: null == v ? void 0 : v.guildId
                                            },
                                            'live-'.concat(o)
                                        )
                                    ),
                                    C &&
                                        G &&
                                        (0, r.jsx)(y.Z, {
                                            user: t,
                                            currentUser: n,
                                            voiceChannel: B,
                                            onClose: T
                                        })
                                ]
                            })
                          : null,
                      V
                          ? (0, r.jsx)(x.Z, {
                                heading: O.intl.string(O.t.jzgEoK),
                                subheading: k
                                    ? O.intl.format(O.t['4bk9Ag'], {
                                          learnMoreHook: (e, t) =>
                                              (0, r.jsx)(
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
                                    (0, r.jsx)(
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
              ? (0, r.jsx)(h.Uf, { onClose: T })
              : (0, r.jsx)(h.P9, {
                    user: t,
                    guildId: P,
                    channelId: A,
                    onClose: T
                })
        : (0, r.jsx)('div', {
              className: I.spinner,
              children: (0, r.jsx)(i.$jN, {})
          });
}
