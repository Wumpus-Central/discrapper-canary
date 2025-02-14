t.d(n, { Z: () => y });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(468363),
    r = t(353647),
    a = t(158776),
    d = t(885110),
    c = t(63063),
    u = t(308406),
    I = t(369566),
    f = t(29899),
    p = t(678738),
    x = t(151545),
    m = t(744802),
    h = t(493043),
    _ = t(864141),
    v = t(228168),
    Z = t(981631),
    g = t(388032),
    j = t(488909),
    E = t(547759);
function y(e) {
    let { user: n, currentUser: t, displayProfile: y, guildId: N, subsection: T, onClose: b } = e,
        { voiceActivityStatusEnabled: P } = (0, s.U)({ location: 'UserProfileModalActivity' }),
        { voiceActivityCardEnabled: S } = (0, u.o)({ location: 'UserProfileModalActivity' }),
        { live: L, recent: C, stream: A } = (0, I.Z)(n.id),
        { voiceChannel: O, voiceActivity: R } = (0, f.Z)({
            userId: n.id,
            guildId: N,
            surface: 'user-profile-modal-activity'
        }),
        M = (0, l.e7)([r.Z], () => r.Z.isFetchingUserOutbox(n.id)),
        U = n.id === t.id,
        B = (0, l.e7)([d.Z, a.Z], () => {
            let e = U ? d.Z.getStatus() : a.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        F = L.length > 0 || null != A,
        D = (P || S) && null == A && null == R && null != O,
        w = C.length > 0;
    return (!B && (F || D)) || w || !M
        ? (0, i.jsxs)(o.zJl, {
              className: j.scroller,
              fade: !0,
              children: [
                  !B && (F || D)
                      ? (0, i.jsxs)(p.Z, {
                            children: [
                                null != A &&
                                    (0, i.jsx)(h.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: A,
                                        onClose: b,
                                        profileGuildId: null == y ? void 0 : y.guildId
                                    }),
                                D &&
                                    (0, i.jsx)(_.Z, {
                                        user: n,
                                        voiceChannel: O,
                                        onClose: b
                                    }),
                                L.map((e, l) =>
                                    (0, i.jsx)(
                                        x.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: b,
                                            profileGuildId: null == y ? void 0 : y.guildId
                                        },
                                        'live-'.concat(l)
                                    )
                                )
                            ]
                        })
                      : null,
                  w
                      ? (0, i.jsx)(p.Z, {
                            heading: g.intl.string(g.t.M0zgnZ),
                            subheading: U
                                ? g.intl.format(g.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, i.jsx)(
                                              o.eee,
                                              {
                                                  href: c.Z.getArticleURL(Z.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: T === v.Tb.RECENT_ACTIVITY,
                            children: C.map((e) =>
                                (0, i.jsx)(
                                    m.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == y ? void 0 : y.guildId,
                                        onClose: b
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, i.jsx)('div', {
              className: E.empty,
              children: (0, i.jsx)(o.$jN, {})
          });
}
