t.d(n, { Z: () => O });
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(468363),
    s = t(353647),
    c = t(158776),
    a = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    p = t(678738),
    m = t(151545),
    b = t(744802),
    h = t(493043),
    g = t(864141),
    j = t(228168),
    v = t(981631),
    x = t(388032),
    y = t(316879),
    I = t(301150);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, guildId: Z, subsection: _, onClose: P } = e,
        { voiceActivityStatusEnabled: E } = (0, l.U)({ location: 'UserProfileModalActivity' }),
        { live: N, recent: A, stream: T } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: S } = (0, f.Z)({
            userId: n.id,
            guildId: Z
        }),
        w = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        M = n.id === t.id,
        R = (0, o.e7)([a.Z, c.Z], () => {
            let e = M ? a.Z.getStatus() : c.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        L = N.length > 0 || null != T,
        D = E && null == T && null == S && null != C,
        B = A.length > 0;
    return (!R && (L || D)) || B || !w
        ? (0, r.jsxs)(i.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  !R && (L || D)
                      ? (0, r.jsxs)(p.Z, {
                            children: [
                                D &&
                                    (0, r.jsx)(g.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: C,
                                        onClose: P
                                    }),
                                null != T &&
                                    (0, r.jsx)(h.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: T,
                                        onClose: P,
                                        profileGuildId: null == O ? void 0 : O.guildId
                                    }),
                                N.map((e, o) =>
                                    (0, r.jsx)(
                                        m.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: P,
                                            profileGuildId: null == O ? void 0 : O.guildId
                                        },
                                        'live-'.concat(o)
                                    )
                                )
                            ]
                        })
                      : null,
                  B
                      ? (0, r.jsx)(p.Z, {
                            heading: x.intl.string(x.t.M0zgnZ),
                            subheading: M
                                ? x.intl.format(x.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, r.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: _ === j.Tb.RECENT_ACTIVITY,
                            children: A.map((e) =>
                                (0, r.jsx)(
                                    b.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == O ? void 0 : O.guildId,
                                        onClose: P
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, r.jsx)('div', {
              className: I.empty,
              children: (0, r.jsx)(i.$jN, {})
          });
}
