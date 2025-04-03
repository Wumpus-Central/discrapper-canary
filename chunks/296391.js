t.d(n, { Z: () => x });
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
    b = t(151545),
    y = t(744802),
    m = t(493043),
    g = t(864141),
    I = t(228168),
    j = t(981631),
    v = t(388032),
    h = t(316879),
    _ = t(301150);
function x(e) {
    let { user: n, currentUser: t, displayProfile: x, guildId: O, subsection: Z, onClose: P } = e,
        { voiceActivityStatusEnabled: N } = (0, l.U)({ location: 'UserProfileModalActivity' }),
        { live: E, recent: S, stream: T } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: A } = (0, f.Z)({
            userId: n.id,
            guildId: O,
            surface: 'user-profile-modal-activity'
        }),
        w = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        R = (0, o.e7)([a.Z, c.Z], () => {
            let e = L ? a.Z.getStatus() : c.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = E.length > 0 || null != T,
        B = N && null == T && null == A && null != C,
        U = S.length > 0;
    return (!R && (M || B)) || U || !w
        ? (0, r.jsxs)(i.zJl, {
              className: h.scroller,
              fade: !0,
              children: [
                  !R && (M || B)
                      ? (0, r.jsxs)(p.Z, {
                            children: [
                                B &&
                                    (0, r.jsx)(g.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: C,
                                        onClose: P
                                    }),
                                null != T &&
                                    (0, r.jsx)(m.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: T,
                                        onClose: P,
                                        profileGuildId: null == x ? void 0 : x.guildId
                                    }),
                                E.map((e, o) =>
                                    (0, r.jsx)(
                                        b.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: P,
                                            profileGuildId: null == x ? void 0 : x.guildId
                                        },
                                        'live-'.concat(o)
                                    )
                                )
                            ]
                        })
                      : null,
                  U
                      ? (0, r.jsx)(p.Z, {
                            heading: v.NW.string(v.t.M0zgnZ),
                            subheading: L
                                ? v.NW.format(v.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, r.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: Z === I.Tb.RECENT_ACTIVITY,
                            children: S.map((e) =>
                                (0, r.jsx)(
                                    y.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == x ? void 0 : x.guildId,
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
              className: _.empty,
              children: (0, r.jsx)(i.$jN, {})
          });
}
