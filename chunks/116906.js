t.d(n, { Z: () => y });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    o = t(468363),
    s = t(353647),
    a = t(158776),
    d = t(885110),
    c = t(63063),
    u = t(369566),
    f = t(29899),
    h = t(678738),
    p = t(151545),
    g = t(744802),
    j = t(493043),
    m = t(864141),
    v = t(228168),
    x = t(981631),
    Z = t(388032),
    b = t(316879),
    O = t(301150);
function y(e) {
    let { user: n, currentUser: t, displayProfile: y, guildId: I, subsection: E, onClose: P } = e,
        { voiceActivityStatusEnabled: T } = (0, o.U)({ location: 'UserProfileModalActivity' }),
        { live: N, recent: A, stream: S } = (0, u.Z)(n.id),
        { voiceChannel: C, voiceActivity: _ } = (0, f.Z)({
            userId: n.id,
            guildId: I
        }),
        R = (0, r.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        w = n.id === t.id,
        M = (0, r.e7)([d.Z, a.Z], () => {
            let e = w ? d.Z.getStatus() : a.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        L = N.length > 0 || null != S,
        D = T && null == S && null == _ && null != C,
        U = !M && (L || D),
        G = A.length > 0;
    return U || G || !R
        ? (0, l.jsxs)(i.zJl, {
              className: b.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, l.jsxs)(h.Z, {
                            children: [
                                D &&
                                    (0, l.jsx)(m.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: C,
                                        onClose: P
                                    }),
                                null != S &&
                                    (0, l.jsx)(j.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: S,
                                        onClose: P,
                                        profileGuildId: null == y ? void 0 : y.guildId
                                    }),
                                N.map((e, r) =>
                                    (0, l.jsx)(
                                        p.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: P,
                                            profileGuildId: null == y ? void 0 : y.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                )
                            ]
                        })
                      : null,
                  G
                      ? (0, l.jsx)(h.Z, {
                            heading: Z.intl.string(Z.t.M0zgnZ),
                            subheading: w
                                ? Z.intl.format(Z.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              i.eee,
                                              {
                                                  href: c.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: E === v.Tb.RECENT_ACTIVITY,
                            children: A.map((e) =>
                                (0, l.jsx)(
                                    g.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == y ? void 0 : y.guildId,
                                        onClose: P
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, l.jsx)('div', {
              className: O.empty,
              children: (0, l.jsx)(i.$jN, {})
          });
}
