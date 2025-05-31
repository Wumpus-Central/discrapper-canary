n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var o = n(442837),
    i = n(481060),
    c = n(468363),
    l = n(353647),
    a = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(209698),
    f = n(369566),
    p = n(29899),
    m = n(151545),
    b = n(744802),
    _ = n(493043),
    y = n(864141),
    x = n(264481),
    h = n(693408),
    g = n(228168),
    j = n(981631),
    I = n(388032),
    v = n(514656);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, guildId: P, channelId: N, subsection: A, onClose: T } = e,
        { voiceActivityStatusEnabled: Z } = (0, c.U)({ location: 'UserProfileModalV2Activity' }),
        C = (0, u.b)({ location: 'UserProfileModalV2Activity' }),
        { live: w, recent: S, stream: E } = (0, f.Z)(t.id),
        { voiceChannel: B, voiceActivity: D } = (0, p.Z)({
            userId: t.id,
            guildId: P
        }),
        k = (0, o.e7)([l.Z], () => l.Z.isFetchingUserOutbox(t.id)),
        L = t.id === n.id,
        U = (0, o.e7)([s.Z, a.Z], () => {
            let e = L ? s.Z.getStatus() : a.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = w.length > 0 || null != E,
        R = Z && null == E && null == D && null != B,
        G = !U && (M || R),
        V = S.length > 0;
    if (!G && !V && k)
        return (0, r.jsx)('div', {
            className: v.spinner,
            children: (0, r.jsx)(i.$jN, {})
        });
    if (!G && !V && !k) {
        var F;
        return L
            ? (0, r.jsx)(x.Uf, { onClose: T })
            : (0, r.jsx)(x.P9, {
                  user: t,
                  guildId: null != (F = null == O ? void 0 : O.guildId) ? F : void 0,
                  channelId: N,
                  onClose: T
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: v.scroller,
        fade: !0,
        children: [
            G
                ? (0, r.jsx)(h.Z, {
                      heading: I.intl.string(I.t.J6STd3),
                      children: (0, r.jsxs)('div', {
                          className: v.cards,
                          children: [
                              !C &&
                                  R &&
                                  (0, r.jsx)(y.Z, {
                                      user: t,
                                      currentUser: n,
                                      voiceChannel: B,
                                      onClose: T
                                  }),
                              null != E &&
                                  (0, r.jsx)(_.Z, {
                                      location: 'UserProfileModalV2Activity',
                                      user: t,
                                      currentUser: n,
                                      stream: E,
                                      onClose: T,
                                      profileGuildId: null == O ? void 0 : O.guildId
                                  }),
                              w.map((e, o) =>
                                  (0, r.jsx)(
                                      m.Z,
                                      {
                                          user: t,
                                          currentUser: n,
                                          activity: e,
                                          onClose: T,
                                          profileGuildId: null == O ? void 0 : O.guildId
                                      },
                                      'live-'.concat(o)
                                  )
                              ),
                              C &&
                                  R &&
                                  (0, r.jsx)(y.Z, {
                                      user: t,
                                      currentUser: n,
                                      voiceChannel: B,
                                      onClose: T
                                  })
                          ]
                      })
                  })
                : null,
            V
                ? (0, r.jsx)(h.Z, {
                      heading: I.intl.string(I.t.jzgEoK),
                      subheading: L
                          ? I.intl.format(I.t['4bk9Ag'], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e
                                        },
                                        t
                                    )
                            })
                          : void 0,
                      scrollIntoView: A === g.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)('div', {
                          className: v.cards,
                          children: S.map((e) =>
                              (0, r.jsx)(
                                  b.Z,
                                  {
                                      location: 'UserProfileModalV2Activity',
                                      user: t,
                                      currentUser: n,
                                      entry: e,
                                      profileGuildId: null == O ? void 0 : O.guildId,
                                      onClose: T
                                  },
                                  e.id
                              )
                          )
                      })
                  })
                : null
        ]
    });
}
