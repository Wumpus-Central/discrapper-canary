t.d(n, { Z: () => v });
var o = t(255367);
t(73800);
var r = t(442837),
    c = t(481060),
    i = t(468363),
    a = t(353647),
    l = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(209698),
    f = t(369566),
    p = t(29899),
    m = t(151545),
    b = t(744802),
    _ = t(493043),
    y = t(864141),
    g = t(264481),
    h = t(693408),
    x = t(228168),
    j = t(981631),
    I = t(388032),
    O = t(514656);
function v(e) {
    let { user: n, currentUser: t, displayProfile: v, guildId: C, channelId: P, subsection: A, onClose: T } = e,
        { voiceActivityStatusEnabled: N } = (0, i.U)({ location: 'UserProfileModalV2Activity' }),
        Z = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: S, stream: E } = (0, f.Z)(n.id),
        { voiceChannel: B, voiceActivity: U } = (0, p.Z)({
            userId: n.id,
            guildId: C
        }),
        k = (0, r.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        M = (0, r.e7)([s.Z, l.Z], () => {
            let e = L ? s.Z.getStatus() : l.Z.getStatus(n.id);
            return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE;
        }),
        D = w.length > 0 || null != E,
        G = N && null == E && null == U && null != B,
        R = !M && (D || G),
        V = S.length > 0;
    return R || V || !k
        ? R || V || k
            ? (0, o.jsxs)(c.Ttm, {
                  className: O.scroller,
                  fade: !0,
                  children: [
                      R
                          ? (0, o.jsxs)(h.Z, {
                                heading: I.intl.string(I.t.J6STd3),
                                children: [
                                    !Z &&
                                        G &&
                                        (0, o.jsx)(y.Z, {
                                            user: n,
                                            currentUser: t,
                                            voiceChannel: B,
                                            onClose: T
                                        }),
                                    null != E &&
                                        (0, o.jsx)(_.Z, {
                                            location: 'UserProfileModalV2Activity',
                                            user: n,
                                            currentUser: t,
                                            stream: E,
                                            onClose: T,
                                            profileGuildId: null == v ? void 0 : v.guildId
                                        }),
                                    w.map((e, r) =>
                                        (0, o.jsx)(
                                            m.Z,
                                            {
                                                user: n,
                                                currentUser: t,
                                                activity: e,
                                                onClose: T,
                                                profileGuildId: null == v ? void 0 : v.guildId
                                            },
                                            'live-'.concat(r)
                                        )
                                    ),
                                    Z &&
                                        G &&
                                        (0, o.jsx)(y.Z, {
                                            user: n,
                                            currentUser: t,
                                            voiceChannel: B,
                                            onClose: T
                                        })
                                ]
                            })
                          : null,
                      V
                          ? (0, o.jsx)(h.Z, {
                                heading: I.intl.string(I.t.jzgEoK),
                                subheading: L
                                    ? I.intl.format(I.t['4bk9Ag'], {
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
                                children: S.map((e) =>
                                    (0, o.jsx)(
                                        b.Z,
                                        {
                                            location: 'UserProfileModalV2Activity',
                                            user: n,
                                            currentUser: t,
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
            : L
              ? (0, o.jsx)(g.Uf, { onClose: T })
              : (0, o.jsx)(g.P9, {
                    user: n,
                    guildId: C,
                    channelId: P
                })
        : (0, o.jsx)('div', {
              className: O.spinner,
              children: (0, o.jsx)(c.$jN, {})
          });
}
