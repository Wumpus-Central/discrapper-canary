t.d(n, { Z: () => P });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(468363),
    s = t(353647),
    a = t(158776),
    c = t(885110),
    u = t(63063),
    d = t(209698),
    f = t(369566),
    p = t(29899),
    g = t(678738),
    v = t(151545),
    j = t(744802),
    b = t(493043),
    h = t(864141),
    m = t(228168),
    x = t(981631),
    O = t(388032),
    Z = t(316879),
    y = t(301150);
function P(e) {
    let { user: n, currentUser: t, displayProfile: P, guildId: I, subsection: E, onClose: T } = e,
        { voiceActivityStatusEnabled: S } = (0, o.U)({ location: 'UserProfileModalActivity' }),
        N = (0, d.b)({ location: 'UserProfileModalActivity' }),
        { live: A, recent: C, stream: _ } = (0, f.Z)(n.id),
        { voiceChannel: w, voiceActivity: M } = (0, p.Z)({
            userId: n.id,
            guildId: I
        }),
        R = (0, r.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        U = n.id === t.id,
        D = (0, r.e7)([c.Z, a.Z], () => {
            let e = U ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        L = A.length > 0 || null != _,
        k = S && null == _ && null == M && null != w,
        G = !D && (L || k),
        B = C.length > 0;
    return G || B || !R
        ? (0, l.jsxs)(i.zJl, {
              className: Z.scroller,
              fade: !0,
              children: [
                  G
                      ? (0, l.jsxs)(g.Z, {
                            children: [
                                !N &&
                                    k &&
                                    (0, l.jsx)(h.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: w,
                                        onClose: T
                                    }),
                                null != _ &&
                                    (0, l.jsx)(b.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: _,
                                        onClose: T,
                                        profileGuildId: null == P ? void 0 : P.guildId
                                    }),
                                A.map((e, r) =>
                                    (0, l.jsx)(
                                        v.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: T,
                                            profileGuildId: null == P ? void 0 : P.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                ),
                                N &&
                                    k &&
                                    (0, l.jsx)(h.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: w,
                                        onClose: T
                                    })
                            ]
                        })
                      : null,
                  B
                      ? (0, l.jsx)(g.Z, {
                            heading: O.intl.string(O.t.M0zgnZ),
                            subheading: U
                                ? O.intl.format(O.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              i.eee,
                                              {
                                                  href: u.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: E === m.Tb.RECENT_ACTIVITY,
                            children: C.map((e) =>
                                (0, l.jsx)(
                                    j.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == P ? void 0 : P.guildId,
                                        onClose: T
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
              ]
          })
        : (0, l.jsx)('div', {
              className: y.empty,
              children: (0, l.jsx)(i.$jN, {})
          });
}
