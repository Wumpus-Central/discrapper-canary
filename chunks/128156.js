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
    h = t(693408),
    j = t(228168),
    x = t(981631),
    g = t(388032),
    I = t(514656);
function v(e) {
    let { user: n, currentUser: t, displayProfile: v, guildId: O, subsection: Z, onClose: P } = e,
        { voiceActivityStatusEnabled: C } = (0, i.U)({ location: 'UserProfileModalV2Activity' }),
        N = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: A, stream: T } = (0, f.Z)(n.id),
        { voiceChannel: S, voiceActivity: E } = (0, p.Z)({
            userId: n.id,
            guildId: O
        }),
        U = (0, r.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)),
        k = n.id === t.id,
        B = (0, r.e7)([s.Z, l.Z], () => {
            let e = k ? s.Z.getStatus() : l.Z.getStatus(n.id);
            return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE;
        }),
        M = w.length > 0 || null != T,
        V = C && null == T && null == E && null != S,
        D = !B && (M || V),
        L = A.length > 0;
    return D || L || !U
        ? (0, o.jsxs)(c.Ttm, {
              className: I.scroller,
              fade: !0,
              children: [
                  D
                      ? (0, o.jsxs)(h.Z, {
                            heading: g.intl.string(g.t.J6STd3),
                            children: [
                                !N &&
                                    V &&
                                    (0, o.jsx)(y.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: S,
                                        onClose: P
                                    }),
                                null != T &&
                                    (0, o.jsx)(_.Z, {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        stream: T,
                                        onClose: P,
                                        profileGuildId: null == v ? void 0 : v.guildId
                                    }),
                                w.map((e, r) =>
                                    (0, o.jsx)(
                                        m.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: P,
                                            profileGuildId: null == v ? void 0 : v.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                ),
                                N &&
                                    V &&
                                    (0, o.jsx)(y.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: S,
                                        onClose: P
                                    })
                            ]
                        })
                      : null,
                  L
                      ? (0, o.jsx)(h.Z, {
                            heading: g.intl.string(g.t.jzgEoK),
                            subheading: k
                                ? g.intl.format(g.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, o.jsx)(
                                              c.eee,
                                              {
                                                  href: d.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: Z === j.Tb.RECENT_ACTIVITY,
                            children: A.map((e) =>
                                (0, o.jsx)(
                                    b.Z,
                                    {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == v ? void 0 : v.guildId,
                                        onClose: P
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, o.jsx)('div', {
              className: I.spinner,
              children: (0, o.jsx)(c.$jN, {})
          });
}
