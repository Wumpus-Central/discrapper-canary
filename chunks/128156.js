t.d(n, { Z: () => I });
var o = t(200651);
t(192379);
var r = t(442837),
    c = t(481060),
    i = t(468363),
    a = t(353647),
    l = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(151545),
    m = t(744802),
    b = t(493043),
    _ = t(864141),
    y = t(693408),
    h = t(228168),
    j = t(981631),
    x = t(388032),
    g = t(514656);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: O, subsection: v, onClose: Z } = e,
        { voiceActivityStatusEnabled: P } = (0, i.U)({ location: 'UserProfileModalV2Activity' }),
        { live: C, recent: N, stream: w } = (0, u.Z)(n.id),
        { voiceChannel: A, voiceActivity: T } = (0, f.Z)({
            userId: n.id,
            guildId: O
        }),
        S = (0, r.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)),
        E = n.id === t.id,
        U = (0, r.e7)([s.Z, l.Z], () => {
            let e = E ? s.Z.getStatus() : l.Z.getStatus(n.id);
            return e === c.Skl.OFFLINE || e === c.Skl.INVISIBLE;
        }),
        k = C.length > 0 || null != w,
        B = P && null == w && null == T && null != A,
        D = !U && (k || B),
        M = N.length > 0;
    return D || M || !S
        ? (0, o.jsxs)(c.Ttm, {
              className: g.scroller,
              fade: !0,
              children: [
                  D
                      ? (0, o.jsxs)(y.Z, {
                            heading: x.intl.string(x.t.J6STd3),
                            children: [
                                B &&
                                    (0, o.jsx)(_.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: A,
                                        onClose: Z
                                    }),
                                null != w &&
                                    (0, o.jsx)(b.Z, {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        stream: w,
                                        onClose: Z,
                                        profileGuildId: null == I ? void 0 : I.guildId
                                    }),
                                C.map((e, r) =>
                                    (0, o.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: Z,
                                            profileGuildId: null == I ? void 0 : I.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                )
                            ]
                        })
                      : null,
                  M
                      ? (0, o.jsx)(y.Z, {
                            heading: x.intl.string(x.t.jzgEoK),
                            subheading: E
                                ? x.intl.format(x.t['4bk9Ag'], {
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
                            scrollIntoView: v === h.Tb.RECENT_ACTIVITY,
                            children: N.map((e) =>
                                (0, o.jsx)(
                                    m.Z,
                                    {
                                        location: 'UserProfileModalV2Activity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == I ? void 0 : I.guildId,
                                        onClose: Z
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
