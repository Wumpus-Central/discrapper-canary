t.d(n, { Z: () => I });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    s = t(468363),
    o = t(353647),
    a = t(158776),
    c = t(885110),
    d = t(63063),
    u = t(209698),
    f = t(369566),
    p = t(29899),
    h = t(678738),
    v = t(151545),
    g = t(744802),
    j = t(493043),
    m = t(864141),
    b = t(228168),
    x = t(981631),
    Z = t(388032),
    O = t(316879),
    y = t(301150);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: P, subsection: E, onClose: N } = e,
        { voiceActivityStatusEnabled: T } = (0, s.U)({ location: 'UserProfileModalActivity' }),
        S = (0, u.b)({ location: 'UserProfileModalActivity' }),
        { live: A, recent: C, stream: _ } = (0, f.Z)(n.id),
        { voiceChannel: w, voiceActivity: R } = (0, p.Z)({
            userId: n.id,
            guildId: P
        }),
        M = (0, r.e7)([o.Z], () => o.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        D = (0, r.e7)([c.Z, a.Z], () => {
            let e = L ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        U = A.length > 0 || null != _,
        k = T && null == _ && null == R && null != w,
        B = !D && (U || k),
        G = C.length > 0;
    return B || G || !M
        ? (0, l.jsxs)(i.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  B
                      ? (0, l.jsxs)(h.Z, {
                            children: [
                                !S &&
                                    k &&
                                    (0, l.jsx)(m.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: w,
                                        onClose: N
                                    }),
                                null != _ &&
                                    (0, l.jsx)(j.Z, {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        stream: _,
                                        onClose: N,
                                        profileGuildId: null == I ? void 0 : I.guildId
                                    }),
                                A.map((e, r) =>
                                    (0, l.jsx)(
                                        v.Z,
                                        {
                                            user: n,
                                            currentUser: t,
                                            activity: e,
                                            onClose: N,
                                            profileGuildId: null == I ? void 0 : I.guildId
                                        },
                                        'live-'.concat(r)
                                    )
                                ),
                                S &&
                                    k &&
                                    (0, l.jsx)(m.Z, {
                                        user: n,
                                        currentUser: t,
                                        voiceChannel: w,
                                        onClose: N
                                    })
                            ]
                        })
                      : null,
                  G
                      ? (0, l.jsx)(h.Z, {
                            heading: Z.intl.string(Z.t.M0zgnZ),
                            subheading: L
                                ? Z.intl.format(Z.t['4bk9Ag'], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e
                                              },
                                              n
                                          )
                                  })
                                : void 0,
                            scrollIntoView: E === b.Tb.RECENT_ACTIVITY,
                            children: C.map((e) =>
                                (0, l.jsx)(
                                    g.Z,
                                    {
                                        location: 'UserProfileModalActivity',
                                        user: n,
                                        currentUser: t,
                                        entry: e,
                                        profileGuildId: null == I ? void 0 : I.guildId,
                                        onClose: N
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
