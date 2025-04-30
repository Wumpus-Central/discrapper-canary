t.d(n, { Z: () => I });
var o = t(200651);
t(192379);
var r = t(442837),
    c = t(481060),
    a = t(468363),
    i = t(353647),
    l = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(151545),
    m = t(744802),
    _ = t(493043),
    b = t(864141),
    y = t(693408),
    h = t(228168),
    x = t(981631),
    j = t(388032),
    g = t(514656);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: O, subsection: v, onClose: P } = e,
        { voiceActivityStatusEnabled: N } = (0, a.U)({ location: 'UserProfileModalV2Activity' }),
        { live: C, recent: Z, stream: A } = (0, u.Z)(n.id),
        { voiceChannel: T, voiceActivity: w } = (0, f.Z)({
            userId: n.id,
            guildId: O
        }),
        S = (0, r.e7)([i.Z], () => i.Z.isFetchingUserOutbox(n.id)),
        M = n.id === t.id,
        E = (0, r.e7)([s.Z, l.Z], () => {
            let e = M ? s.Z.getStatus() : l.Z.getStatus(n.id);
            return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE;
        }),
        U = C.length > 0 || null != A,
        B = N && null == A && null == w && null != T,
        k = !E && (U || B),
        D = Z.length > 0;
    return k || D || !S
        ? (0, o.jsxs)(c.Ttm, {
              className: g.scroller,
              fade: !0,
              children: [
                  k
                      ? (0, o.jsxs)(y.Z, {
                            heading: j.intl.string(j.t.J6STd3),
                            children: [
                                B &&
                                    (0, o.jsx)(b.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: T,
                                        onClose: P
                                    }),
                                null != A &&
                                    (0, o.jsx)(_.Z, {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        stream: A,
                                        onClose: P,
                                        profileGuildId: null == I ? void 0 : I.guildId
                                    }),
                                C.map((e, r) =>
                                    (0, o.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: P,
                                            profileGuildId: null == I ? void 0 : I.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                )
                            ]
                        })
                      : null,
                  D
                      ? (0, o.jsx)(y.Z, {
                            heading: j.intl.string(j.t.jzgEoK),
                            subheading: M
                                ? j.intl.format(j.t['4bk9Ag'], {
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
                            scrollIntoView: v === h.Tb.RECENT_ACTIVITY,
                            children: Z.map((e) =>
                                (0, o.jsx)(
                                    m.Z,
                                    {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == I ? void 0 : I.guildId,
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
              className: g.spinner,
              children: (0, o.jsx)(c.$jN, {})
          });
}
