t.d(n, { Z: () => I });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    o = t(468363),
    s = t(353647),
    u = t(158776),
    a = t(885110),
    c = t(63063),
    d = t(369566),
    f = t(29899),
    p = t(678738),
    g = t(151545),
    b = t(744802),
    v = t(493043),
    h = t(864141),
    j = t(228168),
    m = t(981631),
    O = t(388032),
    y = t(316879),
    Z = t(301150);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: x, subsection: P, onClose: E } = e,
        { voiceActivityStatusEnabled: T } = (0, o.U)({ location: 'UserProfileModalActivity' }),
        { live: N, recent: S, stream: C } = (0, d.Z)(n.id),
        { voiceChannel: w, voiceActivity: A } = (0, f.Z)({
            userId: n.id,
            guildId: x
        }),
        R = (0, r.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        _ = n.id === t.id,
        M = (0, r.e7)([a.Z, u.Z], () => {
            let e = _ ? a.Z.getStatus() : u.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        U = N.length > 0 || null != C,
        D = T && null == C && null == A && null != w,
        L = S.length > 0;
    return (!M && (U || D)) || L || !R
        ? (0, l.jsxs)(i.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  !M && (U || D)
                      ? (0, l.jsxs)(p.Z, {
                            children: [
                                D &&
                                    (0, l.jsx)(h.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: w,
                                        onClose: E
                                    }),
                                null != C &&
                                    (0, l.jsx)(v.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: C,
                                        onClose: E,
                                        profileGuildId: null == I ? void 0 : I.guildId
                                    }),
                                N.map((e, r) =>
                                    (0, l.jsx)(
                                        g.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: E,
                                            profileGuildId: null == I ? void 0 : I.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                )
                            ]
                        })
                      : null,
                  L
                      ? (0, l.jsx)(p.Z, {
                            heading: O.intl.string(O.t.M0zgnZ),
                            subheading: _
                                ? O.intl.format(O.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              i.eee,
                                              {
                                                  href: c.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: P === j.Tb.RECENT_ACTIVITY,
                            children: S.map((e) =>
                                (0, l.jsx)(
                                    b.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == I ? void 0 : I.guildId,
                                        onClose: E
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, l.jsx)('div', {
              className: Z.empty,
              children: (0, l.jsx)(i.$jN, {})
          });
}
