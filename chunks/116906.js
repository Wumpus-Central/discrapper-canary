t.d(n, { Z: () => I });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(468363),
    s = t(353647),
    d = t(158776),
    a = t(885110),
    c = t(63063),
    u = t(209698),
    f = t(369566),
    p = t(29899),
    h = t(678738),
    g = t(151545),
    v = t(744802),
    j = t(493043),
    m = t(864141),
    b = t(228168),
    x = t(981631),
    Z = t(388032),
    y = t(316879),
    O = t(301150);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: P, subsection: E, onClose: T } = e,
        { voiceActivityStatusEnabled: S } = (0, o.U)({ location: 'UserProfileModalActivity' }),
        N = (0, u.b)({ location: 'UserProfileModalActivity' }),
        { live: A, recent: C, stream: _ } = (0, f.Z)(n.id),
        { voiceChannel: M, voiceActivity: R } = (0, p.Z)({
            userId: n.id,
            guildId: P
        }),
        w = (0, r.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        U = n.id === t.id,
        L = (0, r.e7)([a.Z, d.Z], () => {
            let e = U ? a.Z.getStatus() : d.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        D = A.length > 0 || null != _,
        G = S && null == _ && null == R && null != M,
        B = !L && (D || G),
        k = C.length > 0;
    return B || k || !w
        ? (0, l.jsxs)(i.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  B
                      ? (0, l.jsx)(h.Z, {
                            'aria-label': Z.intl.string(Z.t.J6STd3),
                            children: (0, l.jsxs)('ul', {
                                className: y.activityList,
                                children: [
                                    !N &&
                                        G &&
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(m.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: M,
                                                onClose: T
                                            })
                                        }),
                                    null != _ &&
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(j.Z, {
                                                location: 'UserProfileModalActivity',
                                                user: n,
                                                currentUser: t,
                                                stream: _,
                                                onClose: T,
                                                profileGuildId: null == I ? void 0 : I.guildId
                                            })
                                        }),
                                    A.map((e, r) =>
                                        (0, l.jsx)(
                                            'li',
                                            {
                                                children: (0, l.jsx)(g.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: T,
                                                    profileGuildId: null == I ? void 0 : I.guildId
                                                })
                                            },
                                            'live-'.concat(r)
                                        )
                                    )
                                ]
                            })
                        })
                      : null,
                  k
                      ? (0, l.jsx)(h.Z, {
                            heading: Z.intl.string(Z.t.M0zgnZ),
                            introText: U
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
                            scrollIntoView: E === b.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)('ul', {
                                className: y.activityList,
                                children: C.map((e) =>
                                    (0, l.jsx)(
                                        'li',
                                        {
                                            children: (0, l.jsx)(v.Z, {
                                                location: 'UserProfileModalActivity',
                                                user: n,
                                                currentUser: t,
                                                entry: e,
                                                profileGuildId: null == I ? void 0 : I.guildId,
                                                onClose: T
                                            })
                                        },
                                        e.id
                                    )
                                )
                            })
                        })
                      : null
              ]
          })
        : (0, l.jsx)('div', {
              className: O.empty,
              children: (0, l.jsx)(i.$jN, {})
          });
}
