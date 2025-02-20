t.d(n, { Z: () => _ });
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(468363),
    s = t(353647),
    c = t(158776),
    a = t(885110),
    d = t(63063),
    u = t(308406),
    f = t(369566),
    p = t(29899),
    m = t(678738),
    I = t(151545),
    b = t(744802),
    g = t(493043),
    v = t(864141),
    y = t(228168),
    j = t(981631),
    h = t(388032),
    x = t(387706),
    O = t(865152);
function _(e) {
    let { user: n, currentUser: t, displayProfile: _, guildId: Z, subsection: N, onClose: P } = e,
        { voiceActivityStatusEnabled: E } = (0, l.U)({ location: 'UserProfileModalActivity' }),
        { voiceActivityCardEnabled: S } = (0, u.o)({ location: 'UserProfileModalActivity' }),
        { live: T, recent: C, stream: L } = (0, f.Z)(n.id),
        { voiceChannel: w, voiceActivity: A } = (0, p.Z)({
            userId: n.id,
            guildId: Z,
            surface: 'user-profile-modal-activity'
        }),
        M = (0, o.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        R = n.id === t.id,
        U = (0, o.e7)([a.Z, c.Z], () => {
            let e = R ? a.Z.getStatus() : c.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        D = T.length > 0 || null != L,
        B = (E || S) && null == L && null == A && null != w,
        W = C.length > 0;
    return (!U && (D || B)) || W || !M
        ? (0, r.jsxs)(i.zJl, {
              className: x.scroller,
              fade: !0,
              children: [
                  !U && (D || B)
                      ? (0, r.jsxs)(m.Z, {
                            children: [
                                null != L &&
                                    (0, r.jsx)(g.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: L,
                                        onClose: P,
                                        profileGuildId: null == _ ? void 0 : _.guildId
                                    }),
                                B &&
                                    (0, r.jsx)(v.Z, {
                                        user: n,
                                        voiceChannel: w,
                                        onClose: P
                                    }),
                                T.map((e, o) =>
                                    (0, r.jsx)(
                                        I.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: P,
                                            profileGuildId: null == _ ? void 0 : _.guildId
                                        },
                                        'live-'.concat(o)
                                    )
                                )
                            ]
                        })
                      : null,
                  W
                      ? (0, r.jsx)(m.Z, {
                            heading: h.NW.string(h.t.M0zgnZ),
                            subheading: R
                                ? h.NW.format(h.t['4bk9Ag'], {
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
                            scrollIntoView: N === y.Tb.RECENT_ACTIVITY,
                            children: C.map((e) =>
                                (0, r.jsx)(
                                    b.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == _ ? void 0 : _.guildId,
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
              className: O.empty,
              children: (0, r.jsx)(i.$jN, {})
          });
}
