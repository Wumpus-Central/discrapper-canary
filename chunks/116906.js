t.d(n, { Z: () => I });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(468363),
    s = t(353647),
    c = t(158776),
    a = t(885110),
    u = t(63063),
    d = t(209698),
    f = t(369566),
    p = t(29899),
    j = t(678738),
    g = t(151545),
    h = t(744802),
    v = t(493043),
    m = t(864141),
    b = t(228168),
    x = t(981631),
    y = t(388032),
    O = t(316879),
    Z = t(301150);
function I(e) {
    let { user: n, currentUser: t, displayProfile: I, guildId: P, subsection: E, onClose: T } = e,
        { voiceActivityStatusEnabled: S } = (0, o.U)({ location: 'UserProfileModalActivity' }),
        N = (0, d.b)({ location: 'UserProfileModalActivity' }),
        { live: A, recent: C, stream: w } = (0, f.Z)(n.id),
        { voiceChannel: _, voiceActivity: R } = (0, p.Z)({
            userId: n.id,
            guildId: P
        }),
        M = (0, r.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        U = n.id === t.id,
        D = (0, r.e7)([a.Z, c.Z], () => {
            let e = U ? a.Z.getStatus() : c.Z.getStatus(n.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        L = A.length > 0 || null != w,
        B = S && null == w && null == R && null != _,
        k = !D && (L || B),
        G = C.length > 0;
    return k || G || !M
        ? (0, l.jsxs)(i.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  k
                      ? (0, l.jsx)(j.Z, {
                            'aria-label': y.intl.string(y.t.J6STd3),
                            children: (0, l.jsxs)('ul', {
                                className: O.activityList,
                                children: [
                                    !N &&
                                        B &&
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(m.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: _,
                                                onClose: T
                                            })
                                        }),
                                    null != w &&
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(v.Z, {
                                                location: 'UserProfileModalActivity',
                                                user: n,
                                                currentUser: t,
                                                stream: w,
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
                  G
                      ? (0, l.jsx)(j.Z, {
                            heading: y.intl.string(y.t.M0zgnZ),
                            introText: U
                                ? y.intl.format(y.t['4bk9Ag'], {
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
                            scrollIntoView: E === b.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)('ul', {
                                className: O.activityList,
                                children: C.map((e) =>
                                    (0, l.jsx)(
                                        'li',
                                        {
                                            children: (0, l.jsx)(h.Z, {
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
              className: Z.empty,
              children: (0, l.jsx)(i.$jN, {})
          });
}
